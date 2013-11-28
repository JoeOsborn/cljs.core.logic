(ns cljs.core.logic.dcg
  (:refer-clojure :exclude [==])
  (:require [cljs.core.logic :as l :refer [lvar?]]
            [cljs.core :as core]
            [clojure.set :as set]
            [clojure.string :as string])
  (:require-macros [cljs.core.logic.macros
                    :refer [== -->e --> def-->e run* run fresh]]))

(declare count-clauses)

(defn ->lcons
  ([env [m :as c] i] (->lcons env c i false))
  ([env [m :as c] i quoted]
     (cond
      (empty? c) `(fresh []
                    (== ~(env (dec i)) ~(env i)))
      :else (let [m (if quoted `(quote ~m) m)]
              `(== ~(env (dec i)) (lcons ~m ~(env i)))))))

(defn lsym [n]
  (gensym (str "l" n "_")))

(defn !dcg? [clause]
  (and (sequential? clause)
       (let [f (first clause)]
         (and (symbol? f)
              (= (name f) "!dcg")))))

(defn fresh-expr? [clause]
  (and (seq? clause)
       (let [f (first clause)]
         (and (symbol? f)
              (= (name f) "fresh")))))

(defn mark-clauses
  ([cs] (mark-clauses cs (atom 0)))
  ([[c & r :as cs] i]
     (cond
      (nil? (seq cs)) ()
      (fresh-expr? c) (cons `(fresh ~(second c)
                               ~@(mark-clauses (drop 2 c) i))
                            (mark-clauses r i))
      (!dcg? c) (cons c (mark-clauses r i))
      :else (cons (with-meta c
                    {:index (swap! i clojure.core/inc)})
                  (mark-clauses r i)))))

(defn handle-clauses [env [c & r :as cs]]
  (cond
   (nil? (seq cs)) ()
   (fresh-expr? c) (cons `(fresh ~(second c)
                            ~@(handle-clauses env (drop 2 c)))
                         (handle-clauses env r))
   (!dcg? c) (cons (second c) (handle-clauses env r))
   (vector? c) (cons (->lcons env c (-> c meta :index))
                     (handle-clauses env r))
   (and (seq? c)
        (= (first c) `quote)
        (vector? (second c))) (cons (->lcons env (second c) (-> c meta :index) true)
                                    (handle-clauses env r))
        :else (let [i (-> c meta :index)
                    c (if (seq? c) c (list c))]
                (cons (concat c [(env (dec i)) (env i)])
                      (handle-clauses env r)))))

(defn handle-cclause [fsym osym cclause]
  (let [c (count-clauses cclause)
        r (range 2 (clojure.core/inc c))
        lsyms (conj (into [fsym] (map lsym r)) osym)
        clauses (mark-clauses cclause)
        clauses (handle-clauses lsyms clauses)]
    `(fresh [~@(butlast (rest lsyms))]
       ~@clauses)))

(comment
  (-->e det
        ('[the])
        ('[a]))

  (-->e n
        ('[witch])
        ('[wizard]))

  (--> v '[curses])

  (--> np det n)
  (--> vp v np)
  (--> s np vp)

  ;; we can stop the dcg transform
  (--> s np (!dcg (== 1 1)) vp)

  ;; success
  (run* [q]
    (np '[the witch] []))

  ;; success
  (run* [q]
    (s '[a witch curses the wizard] []))

  (def-->e verb [v]
    ([[:v 'eats]] '[eats]))

  (def-->e noun [n]
    ([[:n 'bat]] '[bat])
    ([[:n 'cat]] '[cat]))

  (def-->e det [d]
    ([[:d 'the]] '[the])
    ([[:d 'a]] '[a]))

  (def-->e noun-phrase [n]
    ([[:np ?d ?n]] (det ?d) (noun ?n)))

  (def-->e verb-phrase [n]
    ([[:vp ?v ?np]] (verb ?v) (noun-phrase ?np)))

  (def-->e sentence [s]
    ([[:s ?np ?vp]] (noun-phrase ?np) (verb-phrase ?vp)))

  (run 1 [parse-tree]
    (sentence parse-tree '[the bat eats a cat] []))

  ;; ([:s [:np [:d the] [:n bat]] [:vp [:v eats] [:np [:d a] [:n cat]]]])

  ;; ~90-100ms
  (dotimes [_ 10]
    (time
     (dotimes [_ 1e3]
       (run 1 [parse-tree]
         (sentence parse-tree '[the bat eats a cat] [])))))

  ;; parsing lisp

  (def digits (into #{} "1234567890"))
  (defn cr [c1 c2]
    (map char (range (int c1) (int c2))))
  (def alpha (into #{} (concat (cr \a \z) (cr \A \Z))))
  (def alnum (into digits (concat (cr \a \z) (cr \A \Z))))
  (def nonalnum (into #{} "+/-*><="))

  (-->e wso
        ([\space] wso)
        ([]))

  (def-->e digito [x]
    ([_] [x]
       (!dcg
        (project [x]
          (== (contains? digits x) true)))))

  (def-->e numo [x]
    ([[?d . ?ds]] (digito ?d) (numo ?ds))
    ([[?d]] (digito ?d)))

  (declare symro)

  (def-->e symo [x]
    ([[?a . ?as]] [?a]
       (!dcg
        (project [?a]
          (conde
           ((== (contains? alpha ?a) true))
           ((== (contains? nonalnum ?a) true)))))
       (symro ?as)))

  (def-->e symro [x]
    ([[?a . ?as]] [?a]
       (!dcg
        (project [?a]
          (conde
           ((== (contains? alnum ?a) true))
           ((== (contains? nonalnum ?a) true)))))
       (symro ?as))
    ([[]] []))

  (declare exprso)

  (def-->e expro [e]
    ([[:sym ?a]] (symo ?a))
    ([[:num ?n]] (numo ?n))
    ([[:list ?list]] [\(] (exprso ?list) [\)])
    ([[:sym :quote ?q]] [\'] (expro ?q)))

  ;; TODO: we need cut here, we found a valid parse
  (def-->e exprso [exs]
    ([[?e . ?es]] wso (expro ?e) wso (exprso ?es))
    ([[]] []))

  ;; (_.0)
  (run* [q]
    (wso (vec "  ") []))

  ;; ()
  (run* [q]
    (wso (vec " f ") []))

  ;; (\1)
  (run* [q]
    (digito q [\1] []))

  ;; ((\1 \2 \3))
  (run* [q]
    (numo q (vec "123") []))

  ;; ((\a \b \c))
  (run* [q]
    (symo q (vec "abc") []))

  ;; ([:n (\1 \2 \3)])
  (run* [q]
    (expro q (vec "123") []))

  ;; ([:s (\a \b \c)])
  (run* [q]
    (expro q (vec "abc") []))

  ;; (([:list ([:sym (\+)] [:sym (\a \b \c)] [:sym (\b)] [:sym :quote [:list ([:num [\1]] [:num (\2 \3)])]])]))
  (run 1 [q]
    (exprso q (vec " (+ abc b '(1 23))  ") []))

  ;; w/ def-->a ~2500ms
  ;; w/ def-->e ~1400ms
  (dotimes [_ 10]
    (let [s (vec " (+ abc b '(1 23))  ")]
      (time
       (dotimes [_ 50]
         (run 1 [q]
           (exprso q s [])))))))
