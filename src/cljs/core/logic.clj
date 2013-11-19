(ns cljs.core.logic
  (:require [cljs.compiler :as comp]
            [cljs.core :as core]
            [cljs.env :as env]
            [cljs.analyzer :as ana]
            [clojure.set :as set]
            [clojure.string :as string]
            [riddley.walk :refer [macroexpand-all walk-exprs]]
            [riddley.compiler :refer [locals]]
            [clojure.repl :refer [doc]])
  (:refer-clojure :exclude [==])
  (:import [java.io Writer]
           [java.util UUID]))

(def ^:dynamic *locals* nil)

(def ^:dynamic *logic-dbs* [])

(def ^:dynamic *logic-compiler-env* (env/default-compiler-env))

(defn succeed [a] a)

(defn fail [a] nil)

(def s# succeed)

(def u# fail)

(def ^:dynamic *logic-env*
  (env/with-compiler-env *logic-compiler-env*
    (assoc (ana/empty-env) :ns 'cljs.core.logic)))

(defmacro umi
  [& args]
  `(cljs.core/unchecked-multiply-int ~@args))

(defmacro uai
  [& args]
  `(cljs.core/unchecked-add-int ~@args))

(defmacro llist
  "Constructs a sequence from 2 or more arguments, with the last argument as 
   the tail. The tail is improper if the last argument is a logic variable."
  ([f s] `(cljs.core.logic/lcons ~f ~s))
  ([f s & rest] `(cljs.core.logic/lcons ~f (llist ~s ~@rest))))

(defmacro composeg*
  ([g0] g0)
  ([g0 & gs]
     `(composeg
       ~g0
       (composeg* ~@gs))))

(defmacro bind*
  ([a g] `(cljs.core.logic.protocols/bind ~a ~g))
  ([a g & g-rest]
     `(bind* (cljs.core.logic.protocols/bind ~a ~g) ~@g-rest)))

;; (defmacro composeg*
;;   [g0 & gs]
;;   `((fn composeg# [g0# & gs#]
;;       (if-not (seq gs#)
;;         g0#
;;         (apply cljs.core.logic/composeg (cons g0# (apply composeg# gs#)))))
;;     ~g0 ~@gs))

;; (defmacro bind*
;;   [a g & g-rest]
;;   `((fn [a# g# & g-rest#]
;;       (if-not (seq g-rest#)
;;         `(cljs.core.logic.protocols/bind ~a# ~g#)
;;         `(recur (cljs.core.logic.protocols/bind ~a# ~g#) ~@g-rest#)))
;;     ~a ~g ~@g-rest))

(defmacro mplus*
  ([e] e)
  ([e & e-rest]
     `(cljs.core.logic.protocols/mplus ~e (fn [] (mplus* ~@e-rest)))))

(defmacro -inc [& rest]
  `(fn ~(quote -inc) [] ~@rest))

(defn- bind-conde-clause [a]
  (fn [g-rest]
    `(bind* ~a ~@g-rest)))

(defn- bind-conde-clauses [a clauses]
  (map (bind-conde-clause a) clauses))

(defmacro conde
  "Logical disjunction of the clauses. The first goal in
  a clause is considered the head of that clause. Interleaves the
  execution of the clauses."
  [& clauses]
  (let [a (gensym "a")]
    `(fn [~a]
       (-inc
        (mplus* ~@(bind-conde-clauses a clauses))))))

(defn- lvar-bind [sym]
  ((juxt identity
         (fn [s] `(lvar '~s))) sym))

(defn- lvar-binds [syms]
  (mapcat lvar-bind syms))

(defmacro fresh
  "Creates fresh variables. Goals occuring within form a logical
  conjunction."
  [[& lvars] & goals]
  `(fn [a#]
     (-inc
      (let [~@(lvar-binds lvars)]
        (bind* a# ~@goals)))))

(defmacro -run [opts [x :as bindings] & goals]
  (if (> (count bindings) 1)
    (let [[rbindings as-key [as]] (partition-by #{:as} bindings)]
      (if (seq as-key)
        `(-run ~opts [~as]
               (fresh [~@rbindings] (== ~as [~@rbindings]) ~@goals))
        `(-run ~opts [q#] (fresh ~bindings (== q# ~bindings) ~@goals))))
    `(let [opts# ~opts
           xs# (cljs.core.logic.protocols/take*
                (fn []
                  ((fresh [~x]
                     ~@goals
                     (reifyg ~x))
                   (tabled-s (:occurs-check opts#)
                             (merge {:reify-vars true} opts#)))))]
       (if-let [n# (:n opts#)]
         (take n# xs#)
         xs#))))

(defmacro run
  "Executes goals until a maximum of n results are found."
  [n bindings & goals]
  `(-run {:occurs-check true :n ~n :db *logic-dbs*} ~bindings ~@goals))

(defmacro run*
  "Executes goals until results are exhausted."
  [bindings & goals]
  `(-run {:occurs-check true :n false :db *logic-dbs*} ~bindings ~@goals))

(defmacro run-db
  "Executes goals until a maximum of n results are found. Uses a specified logic database."
  [n db bindings & goals]
  `(-run {:occurs-check true :n ~n :db (flatten [~db])} ~bindings ~@goals))

(defmacro run-db*
  "Executes goals until results are exhausted. Uses a specified logic database."
  [db bindings & goals]
  `(-run {:occurs-check true :n false :db (flatten [~db])} ~bindings ~@goals))

(defmacro run-nc
  "Executes goals until a maximum of n results are found. Does not
   occurs-check."
  [n bindings & goals]
  `(-run {:occurs-check false :n ~n :db *logic-dbs*} ~bindings ~@goals))

(defmacro run-nc*
  "Executes goals until results are exhausted. Does not occurs-check."
  [& goals]
  `(run-nc false ~@goals))

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
  `(println (format "%5s = %s" (str '~lvar) (-reify ~a ~lvar))))

(defmacro trace-lvars
  "Goal for tracing the values of logic variables."
  [title & lvars]
  (let [a (gensym "a")]
    `(fn [~a]
       (println ~title)
       ~@(map (partial trace-lvar a) lvars)
       ~a)))

;; ===========================================================================
;; Non-relational goals

;; ===========================================================================
;; project

(defn- project-binding [s]
  (fn [var]
    `(~var (walk* ~s ~var))))

(defn- project-bindings [vars s]
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

;; TODO: remove v argument - David

(defmacro is
  "Set the value of a var to value of another var with the operation
   applied. Non-relational."
  [u v op]
  `(project [~v]
            (== ~u (~op ~v))))

(defmacro ifa*
  ([])
  ([[e & gs] & grest]
     `(cljs.core.logic.protocols/ifa ~e [~@gs]
           ~(if (seq grest)
              `(delay (ifa* ~@grest))
              nil))))

(defmacro ifu*
  ([])
  ([[e & gs] & grest]
     `(cljs.core.logic.protocols/ifu
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
     (if (lvar? (cljs.core.logic.protocols/walk a# ~v))
       a# nil)))

(defmacro nonlvaro
  "A goal that succeeds if the argument is not fresh. v must be a
  logic variable. Non-relational."
  [v]
  `(fn [a#]
     (if (not (lvar? (cljs.core.logic.protocols/walk a# ~v)))
       a# nil)))

;; ==========================================================================
;; Pattern matching

(defn- warn [& msg]
  (binding [*out* *err*]
    (apply println "WARNING:" msg)))

(declare p->term)

(defn- lcons-p? [p]
  (and (coll? p)
       (not (nil? (some '#{.} p)))))

(defn- p->llist
  "Take an lcons pattern and convert it into a llist constructor
   expression."
  ([p vars] (p->llist p vars false))
  ([p vars quoted]
     `(llist
       ~@(doall
          (map #(p->term % vars quoted)
               (remove #(contains? '#{.} %) p))))))

(defn- lvar-sym? [s]
  (and (symbol? s)
       (not= s '.)
       (not (contains? *locals* s))))

(defn update-pvars! [x vars]
  (if (lvar-sym? x)
    (do
      (swap! vars conj x)
      x)
    x))

(defn- p->term
  "Convert a pattern p into a term suitable for unification. Takes an atom
   containing a set for returning any encountered vars which will be declared
   fresh."
  ([p vars] (p->term p vars false))
  ([p vars quoted]
     (cond
      (= p '_) `(lvar)
      (lcons-p? p) (p->llist p vars quoted)
      (coll? p)
      (cond
       ;; support simple expressions
       (seq? p)
       (let [[f s] p]
         (cond
          (= f 'quote)
          (if (and (seq? s) (not quoted))
            (p->term s vars true)
            p)
          (= f 'clojure.core/unquote)
          (if quoted
            (update-pvars! s vars)
            (throw (Exception. "Invalid use of clojure.core/unquote in pattern.")))
          :else
          (let [ps (map #(p->term % vars quoted) p)]
            (if quoted
              `(list ~@ps)
              ps))))
       ;; preserve original collection type
       :else
       (let [ps (map #(p->term % vars quoted) p)]
         (cond
          (satisfies? IMapEntry p) (into [] ps)
          :else (into (empty p) ps))))
      (symbol? p) (if quoted
                    (list 'quote p)
                    (update-pvars! p vars))
      :else p)))

(defn- fresh-expr? [cs]
  (= (first cs) `fresh))

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
     (= p '_) (ex* par exprs seen)
     (empty? par) (if exprs
                    (ex vs t a exprs)
                    (ex vs t a))
     :else (let [r (ex* par exprs seen)]
             (if r
               (ex vs t a r)
               (ex vs t a))))))

(defn- all-blank? [p]
  (every? #(= % '_) p))

(defn- handle-clause [as]
  (when-not (vector? as)
    (throw (Exception. (str "Expecting vector of arguments, instead " as))))
  (fn [[p & exprs]]
    (when-not (vector? p)
      (throw (Exception. (str "Expecting vector of matches, instead " p))))
    (when-not (= (count p) (count as))
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
  (if-let [cs (and (= (first cs) :tabled) (rest cs))]
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
  (binding [*locals* (env-locals xs (keys &env))]
    (handle-clauses `conde xs cs)))

;; ---------------------------------------------------------------------------
;; fnu, fna, defnu, defna, matcha, matchu

;; TODO: we need to rethink (de)fna and (de)fnu, the unification comes first
;; the *question* should come first

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
  (binding [*locals* (env-locals xs (keys &env))]
    (handle-clauses `conda xs cs)))

(defmacro matchu
  "Define a committed choice goal. See condu."
  [xs & cs]
  (binding [*locals* (env-locals xs (keys &env))]
    (handle-clauses `condu xs cs)))

(def membero
  '(defne membero
     "A relation where l is a collection, such that l contains x."
     [x l]
     ([_ [x . tail]])
     ([_ [head . tail]]
        (membero x tail))))

;; -----------------------------------------------------------------------------
;; Syntax

;; TODO: consider the concurrency implications much more closely

(defmacro tabled
  "Macro for defining a tabled goal. Prefer ^:tabled with the
  defne/a/u forms over using this directly."
    [args & grest]
    (let [uuid (symbol (str "tabled-" (UUID/randomUUID)))]
      `(fn ~uuid [~@args]
         (let [argv# ~args]
           (fn [a#]
             (let [key#    (-reify a# argv#)
                   tables# (:ts a#)
                   tables# (if-not (contains? @tables# ~uuid)
                             (swap! tables#
                                    (fn [tables#]
                                      (if (contains? tables# ~uuid)
                                        tables#
                                        (assoc tables# ~uuid (atom {})))))
                             @tables#)
                   table#  (get tables# ~uuid)]
               (if-not (contains? @table# key#)
                 (let [table# (swap! table#
                                     (fn [table#]
                                       (if (contains? table# key#)
                                         table#
                                         (assoc table# key#
                                                (atom (answer-cache))))))
                       cache# (get table# key#)]
                   ((fresh []
                      ~@grest
                      (master argv# cache#)) a#))
                 (let [cache# (get @table# key#)]
                   (cljs.core.logic.protocols/reuse
                    a# argv# cache# nil nil)))))))))

(defmacro let-dom
  [a vars & body]
  (let [get-var-dom (fn [a [v b]]
                      `(~b (get-dom-fd ~a ~v)))]
    `(let [~@(mapcat (partial get-var-dom a) (partition 2 vars))]
       ~@body)))

;; consider ^:partial type hint for arguments
;; these argument only need to be partially instantiated

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
                   cljs.core.logic.protocols/IConstraintStep
                   (-step [this# a#]
                     (reify
                       cljs.core/IFn
                       (~'-invoke [_# a#]
                         (let [[~@args :as args#]
                               (map #(cljs.core.logic/walk* a# %) ~args)
                               test# (do ~@body)]
                           (when test#
                             ((cljs.core.logic/remcg this#) a#))))
                       cljs.core.logic.protocols/IRunnable
                       (~'-runnable? [_#]
                         (cljs.core.logic/ground-term? ~args a#))))
                   cljs.core.logic.protocols/IConstraintOp
                   (~'-rator [_#] '~name)
                   (~'-rands [_#] (filter cljs.core.logic/lvar? (flatten ~args)))
                   cljs.core.logic.protocols/IReifiableConstraint
                   (~'-reifyc [_# _# r# a#]
                     (list '~name (map #(cljs.core.logic/-reify r# %) ~args)))
                   cljs.core.logic.protocols/IConstraintWatchedStores
                   (~'-watched-stores [_#] #{:cljs.core.logic/subst})))]
         (cgoal (~name ~@args))))))

(defmacro defnc [name args & body]
  `(def ~name (fnc ~args ~@body)))

