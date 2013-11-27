(ns cljs.core.logic.macros
  (:refer-clojure :exclude [== = < > <= >=])
  (:require [cljs.compiler :as comp]
            [cljs.core :as core]
            [cljs.env :as env]
            [cljs.analyzer :as ana]
            [clojure.set :as set]
            [clojure.string :as string]
            [riddley.walk :refer [macroexpand-all walk-exprs]]
            [riddley.compiler :refer [locals]]
            [clojure.repl :refer [doc]])  
  (:import [java.io Writer]
           [java.util UUID]))

(def ^:dynamic *locals* nil)

(def ^:dynamic *logic-compiler-env* (env/default-compiler-env))

(def ^:dynamic *logic-env*
  (env/with-compiler-env *logic-compiler-env*
    (assoc (ana/empty-env) :ns 'cljs.core.logic)))

(defmacro umi
  [& args]
  `(unchecked-multiply-int ~@args))

(defmacro uai
  [& args]
  `(unchecked-add-int ~@args))

(defmacro llist
  "Constructs a sequence from 2 or more arguments, with the last argument as 
   the tail. The tail is improper if the last argument is a logic variable."
  ([f s] `(cljs.core.logic/lcons ~f ~s))
  ([f s & rest] `(cljs.core.logic/lcons ~f (llist ~s ~@rest))))

(defmacro composeg*
  ([g0] g0)
  ([g0 & gs]
     `(cljs.core.logic/composeg
       ~g0
       (composeg* ~@gs))))

(defmacro bind*
  ([a g] `(cljs.core.logic/-bind ~(vary-meta a {:tag 'not-native}) ~g))
  ([a g & g-rest]
     `(bind* (cljs.core.logic/-bind ~(vary-meta a {:tag 'not-native}) ~g)
             ~@g-rest)))

(defmacro mplus*
  ([e] e)
  ([e & e-rest]
     `(cljs.core.logic/mplus ~e (-inc (mplus* ~@e-rest)))))

(defmacro -inc [& rest]
  `(cljs.core.logic/Inc. (fn [] ~@rest)))

(defmacro ==
  "A goal that attempts to unify terms u and v."
  [u v]
  `(fn [a#]
     (let [has-cs?# (pos? (count (.-cs a#)))]
       (when-let [ap# (cljs.core.logic/-unify
                       (if has-cs?#
                         (cljs.core.logic/Substitutions.
                          (.-s a#) [] (.-ts a#) (.-cs a#) (.-cq a#) (.-cqs a#)
                          (.-oc a#) (.-_meta a#))
                         a#) ~u ~v)]
         (let [vs# (if has-cs?# (.-vs ap#))
               changed?# (pos? (count vs#))]
           (if changed?#
             ((cljs.core.logic/run-constraints* vs# (.-cs ap#)
                                                :cljs.core.logic/subst)
              (cljs.core.logic/Substitutions.
               (.-s ap#) nil (.-ts ap#) (.-cs ap#) (.-cq ap#) (.-cqs ap#)
               (.-oc ap#) (.-_meta ap#)))
             ap#))))))

(defmacro !=
  "Disequality constraint. Ensures that u and v will never
   unify. u and v can be complex terms."
  [u v]
  `(fn [a#]
     (let [cs# (cljs.core.logic/disunify a# ~u ~v)]
       (if-not (nil? cs#)
         (let [p# (:prefixc cs#)]
           (when-not (empty? p#)
             (if (some (fn [[u# v#]]
                         (nil? (cljs.core.logic/-unify a# u# v#))) p#)
               a#
               ((cljs.core.logic/cgoal (cljs.core.logic/!=c p#)) a#))))
         a#))))

(defn bind-conde-clause [a]
  (fn [g-rest]
    `(bind* ~a ~@g-rest)))

(defn bind-conde-clauses [a clauses]
  (map (bind-conde-clause a) clauses))

(defmacro conde
  "Logical disjunction of the clauses. The first goal in
  a clause is considered the head of that clause. Interleaves the
  execution of the clauses."
  [& clauses]
  (let [a (gensym "a")]
    `(fn [~a]
       (-inc (mplus* ~@(bind-conde-clauses a clauses))))))

(defn lvar-bind [sym]
  ((juxt identity (fn [s] `(cljs.core.logic/lvar '~s))) sym))

(defn lvar-binds [syms]
  (mapcat lvar-bind syms))

(defmacro fresh
  "Creates fresh variables. Goals occuring within form a logical
  conjunction."
  [[& lvars] & goals]
  `(fn [a#]
     (-inc (let [~@(lvar-binds lvars)]
             (bind* a# ~@goals)))))

(defmacro solve [opts [x :as bindings] & goals]
  (if (clojure.core/> (count bindings) 1)
    (let [[rbindings as-key [as]] (partition-by #{:as} bindings)]
      (if (seq as-key)
        `(solve ~opts [~as]
                (fresh [~@rbindings]
                  (== ~as [~@rbindings]) ~@goals))
        `(solve ~opts [q#]
                (fresh ~bindings
                  (== q# ~bindings) ~@goals))))
    `(let [opts# ~opts
           xs# (cljs.core.logic/-take*
                (-inc ((fresh [~x]
                         ~@goals
                         (cljs.core.logic/reifyg ~x))
                       (cljs.core.logic/tabled-s
                        (:occurs-check opts#)
                        (merge {:reify-vars true} opts#)))))]
       (if-let [n# (:n opts#)]
         (take n# xs#)
         xs#))))

(defmacro run
  "Executes goals until a maximum of n results are found."
  [n bindings & goals]
  `(doall (solve {:occurs-check true :n ~n :db cljs.core.logic/*logic-dbs*}
                 ~bindings ~@goals)))

(defmacro run*
  "Executes goals until results are exhausted."
  [bindings & goals]
  `(run false ~bindings ~@goals))

(defmacro run-db
  "Executes goals until a maximum of n results are found. Uses a specified 
  logic database."
  [n db bindings & goals]
  `(doall (solve {:occurs-check true :n ~n :db (flatten [~db])}
                 ~bindings ~@goals)))

(defmacro run-db*
  "Executes goals until results are exhausted. Uses a specified logic 
  database."
  [db bindings & goals]
  `(run-db false ~db ~bindings ~@goals))

(defmacro run-nc
  "Executes goals until a maximum of n results are found. Does not
   occurs-check."
  [n bindings & goals]
  `(doall (solve {:occurs-check false :n ~n :db cljs.core.logic/*logic-dbs*}
                 ~bindings ~@goals)))

(defmacro run-nc*
  "Executes goals until results are exhausted. Does not occurs-check."
  [bindings & goals]
  `(run-nc false bindings ~@goals))

(defmacro lazy-run
  [n bindings & goals]
  `(solve {:occurs-check true :n ~n :db cljs.core.logic/*logic-dbs*}
          ~bindings ~@goals))

(defmacro lazy-run*
  [bindings & goals]
  `(solve {:occurs-check true :n false :db cljs.core.logic/*logic-dbs*}
          ~bindings ~@goals))

(defmacro all
  "Like fresh but does does not create logic variables."
  ([] `cljs.core.logic/s#)
  ([& goals] `(fn [a#] (bind* a# ~@goals))))

;; =============================================================================
;; Debugging

(defmacro log [& s]
  "Goal for println"
  `(fn [a#]
     (println ~@s)
     a#))

(defmacro trace-s []
  "Goal that prints the current substitution"
  `(fn [a#]
     (println (str a#))
     a#))

(defn trace-lvar [a lvar]
  `(println (str (str '~lvar) " = " (cljs.core.logic/-reify ~a ~lvar))))

(defmacro trace-lvars
  "Goal for tracing the values of logic variables."
  [title & lvars]
  (let [a (gensym "a")]
    `(fn [~a]
       (println ~title)
       ~@(map #(trace-lvar a %) lvars)
       ~a)))

;; ===========================================================================
;; Non-relational goals

;; ===========================================================================
;; project

(defn project-binding [s]
  (fn [var]
    `(~var (cljs.core.logic/-walk* ~s ~var))))

(defn project-bindings [vars s]
  (reduce concat (map (project-binding s) vars)))

(defmacro project
  "Extract the values bound to the specified logic vars. Non-relational."
  [[& vars] & goals]
  (let [a (gensym "a")]
    `(fn [~a]
       (let [~@(project-bindings vars a)]
         ((fresh []
            ~@goals) ~a)))))

(defmacro pred
  "Check a predicate against the value logic var. Non-relational."
  [v f]
  `(project [~v]
     (== (~f ~v) true)))

(defmacro is
  "Set the value of a var to value of another var with the operation
   applied. Non-relational."
  [u v op]
  `(project [~v]
     (== ~u (~op ~v))))

(defmacro ifa*
  ([])
  ([[e & gs] & grest]
     `(cljs.core.logic/-ifa
       ~e [~@gs]
       ~(if (seq grest)
          `(delay (ifa* ~@grest))
          nil))))

(defmacro ifu*
  ([])
  ([[e & gs] & grest]
     `(cljs.core.logic/-ifu
       ~e [~@gs]
       ~(if (seq grest)
          `(delay (ifu* ~@grest))
          nil))))

(defn- cond-clauses [a]
  (fn [goals]
    `((~(first goals) ~a) ~@(rest goals))))

(defmacro conda
  "Soft cut. Once the head of a clause has succeeded
  all other clauses will be ignored. Non-relational."
  [& clauses]
  (let [a (gensym "a")]
    `(fn [~a]
       (ifa* ~@(map (cond-clauses a) clauses)))))

(defmacro condu
  "Committed choice. Once the head (first goal) of a clause
  has succeeded, remaining goals of the clause will only
  be run once. Non-relational."
  [& clauses]
  (let [a (gensym "a")]
    `(fn [~a]
       (ifu* ~@(map (cond-clauses a) clauses)))))

;; ===========================================================================
;; lvar nonlvar

(defmacro lvaro
  "A goal that succeeds if the argument is fresh. v must be a logic
  variable. Non-relational."
  [v]
  `(fn [a#]
     (if (cljs.core.logic/lvar? (cljs.core.logic/-walk a# ~v))
       a# nil)))

(defmacro nonlvaro
  "A goal that succeeds if the argument is not fresh. v must be a
  logic variable. Non-relational."
  [v]
  `(fn [a#]
     (if (not (cljs.core.logic/lvar? (cljs.core.logic/-walk a# ~v)))
       a# nil)))

;; ==========================================================================
;; Pattern matching

(defn warn [& msg]
  (binding [*out* *err*]
    (apply println "WARNING:" msg)))

(declare p->term)

(defn lcons-p? [p]
  (and (coll? p)
       (not (nil? (some '#{.} p)))))

(defn p->llist
  "Take an lcons pattern and convert it into a llist constructor
   expression."
  ([p vars] (p->llist p vars false))
  ([p vars quoted]
     `(llist ~@(doall (map #(p->term % vars quoted)
                           (remove #(contains? '#{.} %) p))))))

(defn lvar-sym? [s]
  (and (symbol? s)
       (not= s '.)
       (not (contains? *locals* s))))

(defn update-pvars! [x vars]
  (when (lvar-sym? x)
    (swap! vars conj x))
  x)

(defn- p->term
  "Convert a pattern p into a term suitable for unification. Takes an atom
   containing a set for returning any encountered vars which will be declared
   fresh."
  ([p vars] (p->term p vars false))
  ([p vars quoted]
     (cond
      (clojure.core/= p '_) `(cljs.core.logic/lvar)
      (lcons-p? p) (p->llist p vars quoted)
      (coll? p)
      (cond
       (seq? p)
       (let [[f s] p]
         (cond
          (clojure.core/= f 'quote)
          (if (and (seq? s) (not quoted))
            (p->term s vars true)
            p)
          (clojure.core/= f 'clojure.core/unquote)
          (if quoted
            (update-pvars! s vars)
            (throw
             (Exception. "Invalid use of clojure.core/unquote in pattern.")))
          :else
          (let [ps (map #(p->term % vars quoted) p)]
            (if quoted
              `(list ~@ps)
              ps))))
       :else
       (let [ps (map #(p->term % vars quoted) p)]
         (if (instance? clojure.lang.IMapEntry p)
           (into [] ps)
           (into (empty p) ps))))
      (symbol? p) (if quoted
                    (list 'quote p)
                    (update-pvars! p vars))
      :else p)))

(defn- fresh-expr? [cs]
  (clojure.core/= (first cs) `fresh))

(defn- ex
  "Takes a list of vars to declare fresh and a term t to be unified
   with relation argument a."
  ([vs t a]
     `(fresh [~@vs]
        (== ~t ~a)))
  ([vs t a exprs]
     (if (fresh-expr? exprs)
       `(fresh [~@vs]
          (== ~t ~a)
          ~exprs)
       `(fresh [~@vs]
          (== ~t ~a)
          ~@exprs))))

(defn- ex*
  "Takes a sequence of pattern/argument pairs, goal expressions and
   a set of seen variables. Returns source code that represents the
   equivalent miniKanren series of unifications."
  [[[p a :as pa] & par] exprs seen]
  (let [vars (atom #{})
        t    (p->term p vars)
        vs   (set/difference @vars seen)
        seen (reduce conj seen vs)]
    (cond
     (nil? pa) exprs
     (clojure.core/= p '_) (ex* par exprs seen)
     (empty? par) (if exprs
                    (ex vs t a exprs)
                    (ex vs t a))
     :else (let [r (ex* par exprs seen)]
             (if r
               (ex vs t a r)
               (ex vs t a))))))

(defn- all-blank? [p]
  (every? #(identical? % '_) p))

(defn- handle-clause [as]
  (when-not (vector? as)
    (throw (Exception. (str "Expecting vector of arguments, instead " as))))
  (fn [[p & exprs]]
    (when-not (vector? p)
      (throw (Exception. (str "Expecting vector of matches, instead " p))))
    (when-not (clojure.core/= (count p) (count as))
      (warn "Differing number of matches. Matching" p "against" as))
    (let [pas (partition 2 (interleave p as))
          r (ex* pas exprs #{})]
      (if (all-blank? p)
        r
        (list r)))))

(defn- handle-clauses [t as cs]
  `(~t
    ~@(doall (map (handle-clause as) cs))))

;; name-with-attributes by Konrad Hinsen, from clojure.contrib.def
(defn- name-with-attributes
  "To be used in macro definitions.
   Handles optional docstrings and attribute maps for a name to be defined
   in a list of macro arguments. If the first macro argument is a string
   it is added as a docstring to name and removed from the macro argument
   list. If afterwards the first macro argument is a map, its entries are
   added to the name's metadata map and the map is removed from the
   macro argument list. The return value is a vector containing the name
   with its extended metadata map and the list of unprocessed macro
   arguments."
  [name macro-args]
  (let [[docstring macro-args] (if (string? (first macro-args))
                                 [(first macro-args) (next macro-args)]
                                 [nil macro-args])
        [attr macro-args]          (if (map? (first macro-args))
                                     [(first macro-args) (next macro-args)]
                                     [{} macro-args])
        attr                       (if docstring
                                     (assoc attr :doc docstring)
                                     attr)
        attr                       (if (meta name)
                                     (conj (meta name) attr)
                                     attr)]
    [(with-meta name attr) macro-args]))

(declare tabled)

(defn env-locals [& syms]
  (disj (set (apply concat syms)) '_))

(defmacro -fnm [fn-gen t as & cs]
  (binding [*locals* (env-locals as (keys &env))]
    `(~fn-gen [~@as] ~(handle-clauses t as cs))))

(defmacro fnm
  {:arglists '([t as tabled? & cs])}
  [t as & cs]
  (if-let [cs (and (identical? (first cs) :tabled) (rest cs))]
    `(-fnm tabled ~t ~as ~@cs)
    `(-fnm fn ~t ~as ~@cs)))

(defmacro defnm [t n & rest]
  (let [[n [as & cs]] (name-with-attributes n rest)
        e (if (-> n meta :tabled)
            `(fnm ~t ~as :tabled ~@cs)
            `(fnm ~t ~as ~@cs))]
    `(def ~n ~e)))

;; ===========================================================================
;; Goal sugar syntax

(defmacro fne
  "Define an anonymous goal fn. Supports pattern matching. All
   patterns will be tried. See conde."
  [& rest]
  `(fnm conde ~@rest))

(defmacro defne
  "Define a goal fn. Supports pattern matching. All
   patterns will be tried. See conde."
  [& rest]
  `(defnm conde ~@rest))

(defmacro matche
  "Pattern matching macro. All patterns will be tried.
  See conde."
  [xs & cs]
  (binding [*locals* (env-locals xs (-> &env :locals keys))]
    (handle-clauses `conde xs cs)))

;; ---------------------------------------------------------------------------
;; fnu, fna, defnu, defna, matcha, matchu

(defmacro fna
  "Define an anonymous soft cut goal. See conda."
  [& rest]
  `(fnm conda ~@rest))

(defmacro fnu
  "Define an anonymous committed choice goal. See condu."
  [& rest]
  `(fnm condu ~@rest))

(defmacro defna
  "Define a soft cut goal. See conda."
  [& rest]
  `(defnm conda ~@rest))

(defmacro defnu
  "Define a committed choice goal. See condu."
  [& rest]
  `(defnm condu ~@rest))

(defmacro matcha
  "Define a soft cut pattern match. See conda."
  [xs & cs]
  (binding [*locals* (env-locals xs (-> &env :locals keys))]
    (handle-clauses `conda xs cs)))

(defmacro matchu
  "Define a committed choice goal. See condu."
  [xs & cs]
  (binding [*locals* (env-locals xs (-> &env :locals keys))]
    (handle-clauses `condu xs cs)))

;; -----------------------------------------------------------------------------
;; Syntax

(defmacro tabled
  "Macro for defining a tabled goal. Prefer ^:tabled with the
  defne/a/u forms over using this directly."
    [args & grest]
    (let [uuid (symbol (str "tabled-" (UUID/randomUUID)))]
      `(fn ~uuid [~@args]
         (let [argv# ~args]
           (fn [a#]
             (let [key#    (cljs.core.logic/-reify a# argv#)
                   tables# (.-ts a#)
                   tables# (if-not (contains? @tables# ~uuid)
                             (swap! tables#
                                    (fn [tables#]
                                      (if (contains? tables# ~uuid)
                                        tables#
                                        (assoc tables# ~uuid (atom {})))))
                             @tables#)
                   table#  (get tables# ~uuid)]
               (if-not (contains? @table# key#)
                 (let [table#
                       (swap! table#
                              (fn [table#]
                                (if (contains? table# key#)
                                  table#
                                  (assoc table# key#
                                         (atom
                                          (cljs.core.logic/answer-cache))))))
                       cache# (get table# key#)]
                   ((fresh []
                      ~@grest
                      (cljs.core.logic/master argv# cache#)) a#))
                 (let [cache# (get @table# key#)]
                   (cljs.core.logic/-reuse a# argv# cache# nil nil)))))))))

(defmacro let-dom
  [a vars & body]
  (let [get-var-dom (fn [a [v b]] `(~b (cljs.core.logic/get-dom-fd ~a ~v)))]
    `(let [~@(mapcat #(get-var-dom a %) (partition 2 vars))]
       ~@body)))

(defmacro fnc
  "Define an anonymous constraint that can be used with the unifier:

     (let [oddc (fnc [x] (odd? x))]

       (unifier {:a '?a} {:a 1} :when {'?a oddc})
         ;;=> {:a 1}

       (unifier {:a '?a} {:a 2} :when {'?a oddc})
         ;;=> nil
     )

  Note, the constraint will not run until all arguments are fully ground.

  Use defnc to define a constraint and assign a toplevel var."
  [args & body]
  (let [name (symbol (gensym "fnc"))]
    `(fn ~args
       (letfn [(~name [~@args]
                 (reify
                   cljs.core.logic/IConstraintStep
                   (~'-step [this# a#]
                     (reify
                       cljs.core/IFn
                       (~'-invoke [_# a#]
                         (let [[~@args :as args#]
                               (map #(cljs.core.logic/-walk* a# %) ~args)
                               test# (do ~@body)]
                           (when test#
                             ((cljs.core.logic/remcg this#) a#))))
                       cljs.core.logic/IRunnable
                       (~'-runnable? [_#]
                         (cljs.core.logic/ground-term? ~args a#))))
                   cljs.core.logic/IConstraintOp
                   (~'-rator [_#] '~name)
                   (~'-rands [_#]
                     (filter cljs.core.logic/lvar? (flatten ~args)))
                   cljs.core.logic/IReifiableConstraint
                   (~'-reifyc [_# _# r# a#]
                     (list '~name (map #(cljs.core.logic/-reify r# %) ~args)))
                   cljs.core.logic/IConstraintWatchedStores
                   (~'-watched-stores [_#] #{:cljs.core.logic/subst})))]
         (cljs.core.logic/cgoal (~name ~@args))))))

(defmacro defnc [name args & body]
  `(def ~name (fnc ~args ~@body)))

(defmacro extend-to-fd [t]
  `(extend-type ~t
     cljs.core.logic/IMemberCount
     (~'-member-count [this#] 1)

     cljs.core.logic.fd/IInterval
     (~'-lb [this#] this#)
     (~'-ub [this#] this#)

     cljs.core.logic.fd/ISortedDomain
     (~'-drop-one [this#] nil)
     (~'-drop-before [this# n#]
       (when (clojure.core/>= this# n#)
         this#))
     (~'-keep-before [this# n#]
       (when (clojure.core/< this# n#)
         this#))

     cljs.core.logic.fd/ISet
     (~'-member? [this# that#]
       (if (integer? that#)
         (clojure.core/== this# that#)
         (cljs.core.logic.fd/-member? that# this#)))
     (~'-disjoint? [this# that#]
       (if (integer? that#)
         (not (clojure.core/== this# that#))
         (cljs.core.logic.fd/-disjoint? that# this#)))
     (~'-intersection [this# that#]
       (cond
        (integer? that#) (when (clojure.core/== this# that#)
                           this#)
        (cljs.core.logic.fd/interval? that#)
        (cljs.core.logic.fd/-intersection that# this#)
        :else (cljs.core.logic.fd/intersection* this# that#)))
     (~'-difference [this# that#]
       (cond
        (integer? that#) (if (clojure.core/== this# that#)
                           nil
                           this#)
        (cljs.core.logic.fd/interval? that#)
        (cljs.core.logic.fd/-difference that# this#)
        :else (cljs.core.logic.fd/difference* this# that#)))

     cljs.core.logic.fd/IIntervals
     (~'-intervals [this#]
       (list this#))))

(defmacro in
  "Assign vars to domain. The domain must come last."
  [& xs-and-dom]
  (let [xs (butlast xs-and-dom)
        dom (last xs-and-dom)
        domsym (gensym "dom_")]
    `(let [~domsym ~dom]
       (fresh []
         ~@(map (fn [x#]
                  `(cljs.core.logic.fd/dom ~x# ~domsym))
                xs)))))

(def binops->fd
  '{+  cljs.core.logic.fd/+
    -  cljs.core.logic.fd/-
    *  cljs.core.logic.fd/*
    /  cljs.core.logic.fd/quot
    =  cljs.core.logic.fd/==
    != cljs.core.logic.fd/!=
    <= cljs.core.logic.fd/<=
    <  cljs.core.logic.fd/<
    >= cljs.core.logic.fd/>=
    >  cljs.core.logic.fd/>})

(def binops (set (keys binops->fd)))

(defn expand [form]
  (if (seq? form)
    (let [[op & args] form]
      (if (and (binops op) (clojure.core/> (count args) 2))
        (list op (expand (first args))
              (expand (cons op (rest args))))
        (cons op (map expand args))))
    form))

(defn eq*
  ([form vars] (eq* form vars nil))
  ([form vars out]
     (if (seq? form)
       (let [[op r1 r2] form
             [outl outlv?] (if (seq? r1)
                             (let [s (gensym)]
                               (swap! vars conj s)
                               [s true])
                             [r1 false])
             [outr outrv?] (if (seq? r2)
                             (let [s (gensym)]
                               (swap! vars conj s)
                               [s true])
                             [r2 false])
             op (binops->fd op)]
         (cons (if out
                 (list op outl outr out)
                 (list op outl outr))
               (concat (when (seq? r1)
                         (eq* r1 vars (when outlv? outl)))
                       (when (seq? r2)
                         (eq* r2 vars (when outrv? outr))))))
       form)))

(defn ->fd [vars exprs]
  `(fresh [~@vars]
     ~@(reverse exprs)))

(defn eq-form [form]
  (let [vars (atom [])
        exprs (eq* (expand form) vars)]
    (->fd @vars exprs)))

(defmacro eq [& forms]
  `(all
    ~@(map eq-form forms)))



;; ----------------------------------------

(def empty-db {})

(defmacro with-dbs [dbs & body]
  `(binding [cljs.core.logic/*logic-dbs*
             (concat cljs.core.logic/*logic-dbs* ~dbs)]
     ~@body))

(defmacro with-db [db & body]
  `(binding [cljs.core.logic/*logic-dbs*
             (conj cljs.core.logic/*logic-dbs* ~db)]
     ~@body))

;; ----------------------------------------

(defn indexed? [v]
  (true? (:index (meta v))))

(defmacro db-rel [name & args]
  (let [arity
        (count args)

        kname
        (str name "_" arity)

        indexes
        (vec (map indexed? args))]
    `(def ~name
       (with-meta
         (fn [& query#]
           (fn [subs#]
             (let [dbs#
                   (-> subs# clojure.core/meta :db)
                   
                   facts#
                   (if-let [index# (cljs.core.logic.pldb/index-for-query
                                    subs# query# ~indexes)]
                     (cljs.core.logic.pldb/facts-using-index
                      dbs#
                      ~kname
                      index#
                      (cljs.core.logic/-walk* subs# (nth query# index#)))
                     (cljs.core.logic.pldb/facts-for dbs# ~kname))]
               (cljs.core.logic/to-stream (map (fn [potential#]
                                   ((== query# potential#)
                                    subs#))
                                 facts#)))))
         {:rel-name ~kname
          :indexes ~indexes}))))

(defmacro = [x y]
  "Goal for testing whether x and y are equal. Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic/-walk a# ~x)
           wy# (cljs.core.logic/-walk a# ~y)]
       (if (clojure.core/= wx# wy#)
         a# nil))))

(defmacro > [x y]
  "Goal for testing whether x is greater than y. Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic/-walk a# ~x)
           wy# (cljs.core.logic/-walk a# ~y)]
       (if (clojure.core/> wx# wy#)
         a# nil))))

(defmacro >= [x y]
  "Goal for testing whether x is greater than or equal to y.
  Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic/-walk a# ~x)
           wy# (cljs.core.logic/-walk a# ~y)]
       (if (clojure.core/>= wx# wy#)
         a# nil))))

(defmacro < [x y]
  "Goal for testing whether x is less than y. Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic/-walk a# ~x)
           wy# (cljs.core.logic/-walk a# ~y)]
       (if (clojure.core/< wx# wy#)
         a# nil))))

(defmacro <= [x y]
  "Goal for testing whether x is less than or equal to y.
  Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic/-walk a# ~x)
           wy# (cljs.core.logic/-walk a# ~y)]
       (if (clojure.core/<= wx# wy#)
         a# nil))))

(defn ->lcons
  ([env [m :as c] i] (->lcons env c i false))
  ([env [m :as c] i quoted]
     (cond
      (empty? c) `(fresh []
                    (== ~(env (dec i)) ~(env i)))
      :else (let [m (if quoted `(quote ~m) m)]
              `(== ~(env (dec i))
                   (cljs.core.logic/lcons ~m ~(env i)))))))

(defn lsym [n]
  (gensym (str "l" n "_")))

(defn !dcg? [clause]
  (and (sequential? clause)
       (let [f (first clause)]
         (and (symbol? f)
              (identical? (name f) "!dcg")))))

(defn -fresh-expr? [clause]
  (and (seq? clause)
       (let [f (first clause)]
         (and (symbol? f)
              (identical? (name f) "fresh")))))

(defn mark-clauses
  ([cs] (mark-clauses cs (atom 0)))
  ([[c & r :as cs] i]
     (cond
      (nil? (seq cs)) ()
      (-fresh-expr? c) (cons `(fresh ~(second c)
                               ~@(mark-clauses (drop 2 c) i))
                            (mark-clauses r i))
      (!dcg? c) (cons c (mark-clauses r i))
      :else (cons (with-meta c
                    {:index (swap! i clojure.core/inc)})
                  (mark-clauses r i)))))

(defn -handle-clauses [env [c & r :as cs]]
  (cond
   (nil? (seq cs)) ()
   (-fresh-expr? c) (cons `(fresh ~(second c)
                            ~@(-handle-clauses env (drop 2 c)))
                         (-handle-clauses env r))
   (!dcg? c) (cons (second c) (-handle-clauses env r))
   (vector? c) (cons (->lcons env c (-> c meta :index))
                     (-handle-clauses env r))
   (and (seq? c)
        (clojure.core/= (first c) 'quote)
        (vector? (second c))) (cons (->lcons env (second c)
                                             (-> c meta :index) true)
                                    (-handle-clauses env r))
        :else (let [i (-> c meta :index)
                    c (if (seq? c) c (list c))]
                (cons (concat c [(env (dec i)) (env i)])
                      (-handle-clauses env r)))))

(declare count-clauses)

(defn handle-cclause [fsym osym cclause]
  (let [c (count-clauses cclause)
        r (range 2 (clojure.core/inc c))
        lsyms (conj (into [fsym] (map lsym r)) osym)
        clauses (mark-clauses cclause)
        clauses (-handle-clauses lsyms clauses)]
    `(fresh [~@(butlast (rest lsyms))]
       ~@clauses)))

(defmacro -->e [name & cclauses]
  (let [fsym (gensym "l1_")
        osym (gensym "o")]
    `(defn ~name [~fsym ~osym]
       (conde
        ~@(map list (map #(handle-cclause fsym osym %) cclauses))))))

(defmacro def-->e [name args & pcss]
  (let [fsym (gensym "l1_")
        osym (gensym "o")]
    `(defne ~name [~@args ~fsym ~osym]
       ~@(map (fn [[p & cs]]
                (list (-> p (conj '_) (conj '_))
                      (handle-cclause fsym osym cs)))
              pcss))))

(defmacro --> [name & clauses]
  (let [r (range 1 (+ (count-clauses clauses) 2))
        lsyms (into [] (map lsym r))
        clauses (mark-clauses clauses)
        clauses (-handle-clauses lsyms clauses)]
    `(defn ~name [~(first lsyms) ~(last lsyms)]
       (fresh [~@(butlast (rest lsyms))]
         ~@clauses))))

(defn count-clauses [clauses]
  (if (-fresh-expr? clauses)
    (count-clauses (drop 2 clauses))
    (reduce (fn [s c]
              (cond
               (-fresh-expr? c) (+ s (count-clauses (drop 2 c)))
               (!dcg? c) s
               :else (clojure.core/inc s)))
            0 clauses)))

(defmacro def--> [name args & clauses]
  (let [r (range 1 (+ (count-clauses clauses) 2))
        lsyms (map lsym r)
        clauses (mark-clauses clauses)
        clauses (-handle-clauses lsyms clauses)]
    `(defn ~name [~@args ~(first lsyms) ~(last lsyms)]
       (fresh [~@(butlast (rest lsyms))]
         ~@clauses))))

