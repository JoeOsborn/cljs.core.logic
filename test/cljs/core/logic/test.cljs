(ns cljs.core.logic.test
  (:refer-clojure :exclude [==])
  (:require [cljs.core.logic.protocols :as proto
             :refer [walk ifa]]
            [cljs.core.logic :as l
             :refer [empty-s lcons lvar to-s == reify-lvar-name fail succeed
                     walk* conso s# u# != copy-term rembero membero member1o
                     emptyo resto firsto appendo reifyg]]
            [cljs.core.logic.fd :as fd]
            [cljs.core.logic.unifier :as u]
            [cemerick.cljs.test :as t])
  (:require-macros [cemerick.cljs.test :refer [deftest run-tests is testing]]
                   [cljs.core.logic
                    :refer [umi uai llist composeg* bind* mplus* -inc
                            conde fresh -run run run* run-db run-db* run-nc
                            run-nc* all pred project trace-lvars trace-s
                            log ifa* ifu* conda condu lvaro nonlvaro fnm
                            defnm fne defne matche fna fnu defna defnu matcha
                            matchu tabled let-dom fnc defnc]]))

(deftest unify-nil-object-1
  (is (= (l/unify empty-s nil 1) nil)))

(deftest unify-nil-lvar-1
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x nil)]
    (is (= (l/unify empty-s nil x) os))))

(deftest unify-nil-lseq-1
  (let [x (l/lvar 'x)]
    (is (= (l/unify empty-s nil (lcons 1 x)) nil))))

(deftest unify-nil-map-1
  (let [x (l/lvar 'x)]
    (is (= (l/unify empty-s nil {}) nil))))

(deftest unify-object-nil-1
  (is (= (l/unify empty-s 1 nil))))

(deftest unify-object-object-1
  (is (= (l/unify empty-s 1 1) empty-s)))

(deftest unify-object-object-2
  (is (= (l/unify empty-s :foo :foo) empty-s)))

(deftest unify-object-object-3
  (is (= (l/unify empty-s 'foo 'foo) empty-s)))

(deftest unify-object-object-4
  (is (= (l/unify empty-s "foo" "foo") empty-s)))

(deftest unify-object-object-5
  (is (= (l/unify empty-s 1 2) nil)))

(deftest unify-object-object-6
  (is (= (l/unify empty-s 2 1) nil)))

(deftest unify-object-object-7
  (is (= (l/unify empty-s :foo :bar) nil)))

(deftest unify-object-object-8
  (is (= (l/unify empty-s 'foo 'bar) nil)))

(deftest unify-object-object-9
  (is (= (l/unify empty-s "foo" "bar") nil)))

(deftest unify-object-lvar-1
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x 1)]
    (is (= (l/unify empty-s 1 x) os))))

(deftest unify-object-lcons-1
  (let [x (l/lvar 'x)]
    (is (= (l/unify empty-s 1 (lcons 1 'x)) nil))))

(deftest unify-object-seq-1
  (is (= (l/unify empty-s 1 '()) nil)))

(deftest unify-object-seq-2
  (is (= (l/unify empty-s 1 '[]) nil)))

(deftest unify-object-map-1
  (is (= (l/unify empty-s 1 {}) nil)))

(deftest unify-lvar-object-1
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x 1)]
    (is (= (l/unify empty-s x 1) os))))

(deftest unify-lvar-lvar-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        os (proto/ext-no-check empty-s x y)]
    (is (= (l/unify empty-s x y) os))))

(deftest unify-lvar-lcons-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        l (lcons 1 y)
        os (proto/ext-no-check empty-s x l)]
    (is (= (l/unify empty-s x l) os))))

(deftest unify-lvar-seq-1
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x [])]
    (is (= (l/unify empty-s x []) os))))

(deftest unify-lvar-seq-2
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x [1 2 3])]
    (is (= (l/unify empty-s x [1 2 3]) os))))

(deftest unify-lvar-seq-3
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x '())]
    (is (= (l/unify empty-s x '()) os))))

(deftest unify-lvar-seq-4
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x '(1 2 3))]
    (is (= (l/unify empty-s x '(1 2 3)) os))))

(deftest unify-lvar-map-1
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x {})]
    (is (= (l/unify empty-s x {}) os))))

(deftest unify-lvar-map-2
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x {1 2 3 4})]
    (is (= (l/unify empty-s x {1 2 3 4}) os))))

;; -----------------------------------------------------------------------------
;; lcons

(deftest unify-lcons-object-1
  (let [x (l/lvar 'x)]
    (is (= (l/unify empty-s (lcons 1 x) 1) nil))))

(deftest unify-lcons-lvar-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        l (lcons 1 y)
        os (proto/ext-no-check empty-s x l)]
    (is (= (l/unify empty-s l x) os))))

(deftest unify-lcons-lcons-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (lcons 1 x)
        lc2 (lcons 1 y)
        os (proto/ext-no-check empty-s x y)]
    (is (= (l/unify empty-s lc1 lc2) os))))

(deftest unify-lcons-lcons-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        lc1 (lcons 1 (lcons 2 x))
        lc2 (lcons 1 (lcons z y))
        os (-> empty-s
               (proto/ext-no-check x y)
               (proto/ext-no-check z 2))]
    (is (= (l/unify empty-s lc1 lc2) os))))

(deftest unify-lcons-lcons-3
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (lcons 1 (lcons 2 x))
        lc2 (lcons 1 (lcons 2 (lcons 3 y)))
        os (proto/ext-no-check empty-s x (lcons 3 y))]
    (is (= (l/unify empty-s lc1 lc2) os))))

(deftest unify-lcons-lcons-4
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (lcons 1 (lcons 2 x))
        lc2 (lcons 1 (lcons 3 (lcons 4 y)))]
    (is (= (l/unify empty-s lc1 lc2) nil))))

(deftest unify-lcons-lcons-5
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc2 (lcons 1 (lcons 2 x))
        lc1 (lcons 1 (lcons 3 (lcons 4 y)))]
    (is (= (l/unify empty-s lc1 lc2) nil))))

(deftest unify-lcons-lcons-6
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (lcons 1 (lcons 2 x))
        lc2 (lcons 1 (lcons 2 y))
        os (proto/ext-no-check empty-s x y)]
    (is (= (l/unify empty-s lc1 lc2) os))))

(deftest unify-lcons-seq-1
  (let [x (l/lvar 'x)
        lc1 (lcons 1 (lcons 2 x))
        l1 '(1 2 3 4)
        os (proto/ext-no-check empty-s x '(3 4))]
    (is (= (l/unify empty-s lc1 l1) os))))

(deftest unify-lcons-seq-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (lcons 1 (lcons y (lcons 3 x)))
        l1 '(1 2 3 4)
        os (-> empty-s
               (proto/ext-no-check x '(4))
               (proto/ext-no-check y 2))]
    (is (= (l/unify empty-s lc1 l1) os))))

(deftest unify-lcons-seq-3
  (let [x (l/lvar 'x)
        lc1 (lcons 1 (lcons 2 (lcons 3 x)))
        l1 '(1 2 3)
        os (proto/ext-no-check empty-s x '())]
    (is (= (l/unify empty-s lc1 l1) os))))

(deftest unify-lcons-seq-4
  (let [x (l/lvar 'x)
        lc1 (lcons 1 (lcons 3 x))
        l1 '(1 2 3 4)]
    (is (= (l/unify empty-s lc1 l1) nil))))

(deftest unify-lcons-seq-5
  (let [x (l/lvar 'x)
        lc1 (lcons 1 (lcons 2 x))
        l1 '(1 3 4 5)]
    (is (= (l/unify empty-s lc1 l1) nil))))

(deftest unify-lcons-map-1
  (is (= (l/unify empty-s (lcons 1 (l/lvar 'x)) {}) nil)))


;; -----------------------------------------------------------------------------
;; seq

(deftest unify-seq-object-1
  (is (= (l/unify empty-s '() 1) nil)))

(deftest unify-seq-object-2
  (is (= (l/unify empty-s [] 1) nil)))

(deftest unify-seq-lvar-1
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x [])]
    (is (= (l/unify empty-s [] x) os))))

(deftest unify-seq-lcons-1
  (let [x (l/lvar 'x)
        lc1 (lcons 1 (lcons 2 x))
        l1 '(1 2 3 4)
        os (proto/ext-no-check empty-s x '(3 4))]
    (is (= (l/unify empty-s l1 lc1) os))))

(deftest unify-seq-seq-1
  (is (= (l/unify empty-s [1 2 3] [1 2 3]) empty-s)))

(deftest unify-seq-seq-2
  (is (= (l/unify empty-s '(1 2 3) [1 2 3]) empty-s)))

(deftest unify-seq-seq-3
  (is (= (l/unify empty-s '(1 2 3) '(1 2 3)) empty-s)))

(deftest unify-seq-seq-4
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x 2)]
    (is (= (l/unify empty-s `(1 ~x 3) `(1 2 3)) os))))

(deftest unify-seq-seq-5
  (is (= (l/unify empty-s [1 2] [1 2 3]) nil)))

(deftest unify-seq-seq-6
  (is (= (l/unify empty-s '(1 2) [1 2 3]) nil)))

(deftest unify-seq-seq-7
  (is (= (l/unify empty-s [1 2 3] [3 2 1]) nil)))

(deftest unify-seq-seq-8
  (is (= (l/unify empty-s '() '()) empty-s)))

(deftest unify-seq-seq-9
  (is (= (l/unify empty-s '() '(1)) nil)))

(deftest unify-seq-seq-10
  (is (= (l/unify empty-s '(1) '()) nil)))

(deftest unify-seq-seq-11
  (is (= (l/unify empty-s [[1 2]] [[1 2]]) empty-s)))

(deftest unify-seq-seq-12
  (is (= (l/unify empty-s [[1 2]] [[2 1]]) nil)))

(deftest unify-seq-seq-13
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x 1)]
    (is (= (l/unify empty-s [[x 2]] [[1 2]]) os))))

(deftest unify-seq-seq-14
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x [1 2])]
    (is (= (l/unify empty-s [x] [[1 2]]) os))))

(deftest unify-seq-seq-15
  (let [x (l/lvar 'x) y (l/lvar 'y)
        u (l/lvar 'u) v (l/lvar 'v)
        os (-> empty-s
               (proto/ext-no-check x 'b)
               (proto/ext-no-check y 'a))]
    (is (= (l/unify empty-s ['a x] [y 'b]) os))))

(deftest unify-seq-map-1
  (is (= (l/unify empty-s [] {}) nil)))

(deftest unify-seq-map-2
  (is (= (l/unify empty-s '() {}) nil)))

;; -----------------------------------------------------------------------------
;; map

(deftest unify-map-object-1
  (is (= (l/unify empty-s {} 1) nil)))

(deftest unify-map-lvar-1
  (let [x (l/lvar 'x)
        os (proto/ext-no-check empty-s x {})]
    (is (= (l/unify empty-s {} x) os))))

(deftest unify-map-lcons-1
  (let [x (l/lvar 'x)]
    (is (= (l/unify empty-s {} (lcons 1 x)) nil))))

(deftest unify-map-seq-1
  (is (= (l/unify empty-s {} '()) nil)))

(deftest unify-map-map-1
  (is (= (l/unify empty-s {} {}) empty-s)))

(deftest unify-map-map-2
  (is (= (l/unify empty-s {1 2 3 4} {1 2 3 4}) empty-s)))

(deftest unify-map-map-3
  (is (= (l/unify empty-s {1 2} {1 2 3 4}) nil)))

(deftest unify-map-map-4
  (let [x (l/lvar 'x)
        m1 {1 2 3 4}
        m2 {1 2 3 x}
        os (proto/ext-no-check empty-s x 4)]
    (is (= (l/unify empty-s m1 m2) os))))

(deftest unify-map-map-5
  (let [x (l/lvar 'x)
        m1 {1 2 3 4}
        m2 {1 4 3 x}]
    (is (= (l/unify empty-s m1 m2) nil))))

(defrecord foo-struct [a b])

(deftest unify-struct-map-1
  (let [x (l/lvar 'x)
        m1 (->foo-struct 1 2)
        m2 (->foo-struct 1 x)
        os (proto/ext-no-check empty-s x 2)]
    (is (= (l/unify empty-s m1 m2) os))))

(deftest unify-struct-map-2
  (let [x (l/lvar 'x)
        m1 (->foo-struct 1 2)
        m2 (->foo-struct 1 3)]
    (is (= (l/unify empty-s m1 m2) nil))))

;; =============================================================================
;; walk

(deftest test-basic-walk
  (is (= (let [x  (l/lvar 'x)
               y  (l/lvar 'y)
               ss (to-s [[x 5] [y x]])]
           (walk ss y))
         5)))

(deftest test-deep-walk
  (is (= (let [[x y z c b a :as s] (map lvar '[x y z c b a])
               ss (to-s [[x 5] [y x] [z y] [c z] [b c] [a b]])]
           (walk ss a))
         5)))

;; =============================================================================
;; reifyo

(deftest test-reify-lvar-name
  (is (= (let [x  (l/lvar 'x)
               y  (l/lvar 'y)]
           (reify-lvar-name (to-s [[x 5] [y x]])))
         '_2)))

;; =============================================================================
;; walk*

(deftest test-walk*
  (is (= (let [x  (l/lvar 'x)
               y  (l/lvar 'y)]
           (walk* (to-s [[x 5] [y x]]) `(~x ~y)))
         '(5 5))))

;; =============================================================================
;; run and unify

(deftest test-basic-unify
  (is (= (run* [q]
           (== true q))
         '(true))))

(deftest test-basic-unify-2
  (is (= (run* [q]
           (fresh [x y]
             (== [x y] [1 5])
             (== [x y] q)))
         [[1 5]])))

(deftest test-basic-unify-3
  (is (=  (run* [q]
            (fresh [x y]
              (== [x y] q)))
          '[[_0 _1]])))

;; =============================================================================
;; fail

(deftest test-basic-failure
  (is (= (run* [q]
           fail
           (== true q))
         [])))

;; =============================================================================
;; Basic

(deftest test-all
  (is (= (run* [q]
           (all
            (== 1 1)
            (== q true)))
         '(true))))

;; =============================================================================
;; TRS

(defn pairo [p]
  (fresh [a d]
    (== (lcons a d) p)))

(defn twino [p]
  (fresh [x]
    (conso x x p)))

(defn listo [l]
  (conde
   [(emptyo l) s#]
   [(pairo l)
    (fresh [d]
      (resto l d)
      (listo d))]))

(defn flatteno [s out]
  (conde
   [(emptyo s) (== '() out)]
   [(pairo s)
    (fresh [a d res-a res-d]
      (conso a d s)
      (flatteno a res-a)
      (flatteno d res-d)
      (appendo res-a res-d out))]
   [(conso s '() out)]))

;; =============================================================================
;; conde

(deftest test-basic-conde
  (is (=  (into #{}
                (run* [x]
                  (conde
                   [(== x 'olive) succeed]
                   [succeed succeed]
                   [(== x 'oil) succeed])))
          (into #{}
                '[olive _0 oil]))))

(deftest test-basic-conde-2
  (is (= (into #{}
               (run* [r]
                 (fresh [x y]
                   (conde
                    [(== 'split x) (== 'pea y)]
                    [(== 'navy x) (== 'bean y)])
                   (== (cons x (cons y ())) r))))
         (into #{}
               '[(split pea) (navy bean)]))))

(defn teacupo [x]
  (conde
   [(== 'tea x) s#]
   [(== 'cup x) s#]))

(deftest test-basic-conde-e-3
  (is (= (into #{}
               (run* [r]
                 (fresh [x y]
                   (conde
                    [(teacupo x) (== true y) s#]
                    [(== false x) (== true y)])
                   (== (cons x (cons y ())) r))))
         (into #{} '((false true) (tea true) (cup true))))))

;; =============================================================================
;; conso

(deftest test-conso
  (is (= (run* [q]
           (fresh [a d]
             (conso a d '())))
         ())))

(deftest test-conso-1
  (let [a (l/lvar 'a)
        d (l/lvar 'd)]
    (is (= (run* [q]
             (conso a d q))
           [(lcons a d)]))))

(deftest test-conso-2
  (is (= (run* [q]
           (== [q] nil))
         [])))

(deftest test-conso-3
  (is (=
       (run* [q]
         (conso 'a nil q))
       '[(a)])))

(deftest test-conso-4
  (is (= (run* [q]
           (conso 'a '(d) q))
         '[(a d)])))

(deftest test-conso-empty-list
  (is (= (run* [q]
           (conso 'a q '(a)))
         '[()])))

(deftest test-conso-5
  (is (= (run* [q]
           (conso q '(b c) '(a b c)))
         '[a])))


;; =============================================================================
;; firsto

(deftest test-firsto
  (is (= (run* [q]
           (firsto q '(1 2)))
         (list (lcons '(1 2) (l/lvar 'x))))))

;; =============================================================================
;; resto

(deftest test-resto
  (is (= (run* [q]
           (resto q '(1 2)))
         '[(_0 1 2)])))

(deftest test-resto-2
  (is (= (run* [q]
           (resto q [1 2]))
         '[(_0 1 2)])))

(deftest test-resto-3
  (is (= (run* [q]
           (resto [1 2] q))
         '[(2)])))

(deftest test-resto-4
  (is (= (run* [q]
           (resto [1 2 3 4 5 6 7 8] q))
         '[(2 3 4 5 6 7 8)])))

;; =============================================================================
;; flatteno

(deftest test-flatteno
  (is (= (into #{}
               (run* [x]
                 (flatteno '[[a b] c] x)))
         (into #{}
               '(([[a b] c]) ([a b] (c)) ([a b] c) ([a b] c ())
                 (a (b) (c)) (a (b) c) (a (b) c ()) (a b (c))
                 (a b () (c)) (a b c) (a b c ()) (a b () c)
                 (a b () c ()))))))

;; =============================================================================
;; membero

(deftest membero-1
  (is (= (run* [q]
           (all
            (== q [(lvar)])
            (membero ['foo (lvar)] q)
            (membero [(lvar) 'bar] q)))
         '([[foo bar]]))))

(deftest membero-2
  (is (= (into #{}
               (run* [q]
                 (membero q [1 2 3])))
         #{1 2 3})))

(deftest membero-3
  ;; Note that membero only returns a single value in this case. The
  ;; old membero, defined without disequality constraints, would have
  ;; returned (1 1 1 1 1).
  (is (= (run* [q]
           (member1o q [1 1 1 1 1]))
         '(1))))

;; -----------------------------------------------------------------------------
;; rembero

(deftest rembero-1
  (is (= (run 1 [q]
           (rembero 'b '(a b c b d) q))
         '((a c b d)))))

;; -----------------------------------------------------------------------------
;; conde clause count

(defn digit-1 [x]
  (conde
   [(== 0 x)]))

(defn digit-4 [x]
  (conde
   [(== 0 x)]
   [(== 1 x)]
   [(== 2 x)]
   [(== 3 x)]))

(deftest test-conde-1-clause
  (is (= (run* [q]
           (fresh [x y]
             (digit-1 x)
             (digit-1 y)
             (== q [x y])))
         '([0 0]))))

(deftest test-conde-4-clauses
  (is (= (into #{}
               (run* [q]
                 (fresh [x y]
                   (digit-4 x)
                   (digit-4 y)
                   (== q [x y]))))
         (into #{}
               '([0 0] [0 1] [0 2] [1 0] [0 3] [1 1] [1 2] [2 0]
                   [1 3] [2 1] [3 0] [2 2] [3 1] [2 3] [3 2] [3 3])))))

;; -----------------------------------------------------------------------------
;; anyo

(defn anyo [q]
  (conde
   [q s#]
   [(anyo q)]))

(deftest test-anyo-1
  (is (= (run 1 [q]
           (anyo s#)
           (== true q))
         (list true))))

(deftest test-anyo-2
  (is (= (run 5 [q]
           (anyo s#)
           (== true q))
         (list true true true true true))))

;; -----------------------------------------------------------------------------
;; divergence

(def f1 (fresh [] f1))

(deftest test-divergence-1
  (is (= (run 1 [q]
           (conde
            [f1]
            [(== false false)]))
         '(_0))))

(deftest test-divergence-2
  (is (= (run 1 [q]
           (conde
            [f1 (== false false)]
            [(== false false)]))
         '(_0))))

(def f2
  (fresh []
    (conde
     [f2 (conde
          [f2]
          [(== false false)])]
     [(== false false)])))

(deftest test-divergence-3
  (is (= (run 5 [q] f2)
         '(_0 _0 _0 _0 _0))))

;; -----------------------------------------------------------------------------
;; conda (soft-cut)

(deftest test-conda-1
  (is (= (run* [x]
           (conda
            [(== 'olive x) s#]
            [(== 'oil x) s#]
            [u#]))
         '(olive))))

(deftest test-conda-2
  (is (= (run* [x]
           (conda
            [(== 'virgin x) u#]
            [(== 'olive x) s#]
            [(== 'oil x) s#]
            [u#]))
         '())))

(deftest test-conda-3
  (is (= (run* [x]
           (fresh (x y)
             (== 'split x)
             (== 'pea y)
             (conda
              [(== 'split x) (== x y)]
              [s#]))
           (== true x))
         '())))

(deftest test-conda-4
  (is (= (run* [x]
           (fresh (x y)
             (== 'split x)
             (== 'pea y)
             (conda
              [(== x y) (== 'split x)]
              [s#]))
           (== true x))
         '(true))))

(defn not-pastao [x]
  (conda
   [(== 'pasta x) u#]
   [s#]))

(deftest test-conda-5
  (is (= (run* [x]
           (conda
            [(not-pastao x)]
            [(== 'spaghetti x)]))
         '(spaghetti))))

;; -----------------------------------------------------------------------------
;; condu (committed-choice)

(comment
  (defn onceo [g]
    (condu
     (g s#)))

  (deftest test-condu-1
    (is (= (run* [x]
             (onceo (teacupo x)))
           '(tea)))))

(deftest test-condu-2
  (is (= (into #{}
               (run* [r]
                 (conde
                  [(teacupo r) s#]
                  [(== false r) s#])))
         (into #{}
               '(false tea cup)))))

(deftest test-condu-3
  (is (= (into #{}
               (run* [r]
                 (conda
                  [(teacupo r) s#]
                  [(== false r) s#])))
         (into #{} '(tea cup)))))

;; -----------------------------------------------------------------------------
;; copy-term

(deftest test-copy-term-1
  (is (= (run* [q]
           (fresh [a b]
             (copy-term a b)
             (== q [a b])))
         '([_0 _1])))
  (is (= (run* [q]
           (fresh [a b]
             (copy-term `(~a) `(~b))
             (== q [a b])))
         '([_0 _1])))
  (is (= (run* [q]
           (fresh [a b]
             (copy-term [a] [b])
             (== q [a b])))
         '([_0 _1])))
  (is (= (run* [q]
           (fresh [a b c]
             (copy-term [a] c)
             (== [b] c)
             (== q [a b])))
         '([_0 _1])))
  (is (= (run* [q]
           (fresh [a b c d]
             (== c 1)
             (copy-term [a c] [b d])
             (== q [a b d])))
         '([_0 _1 1]))))

;; -----------------------------------------------------------------------------
;; disequality

(deftest test-disequality-1
  (is (= (run* [q]
           (fresh [x]
             (!= x 1)
             (== q x)))
         '((_0 :- (!= (_0 1)))))))

(deftest test-disequality-2
  (is (= (run* [q]
           (fresh [x]
             (== q x)
             (!= x 1)))
         '((_0 :- (!= (_0 1)))))))

(deftest test-disequality-3
  (is (= (run* [q]
           (fresh [x]
             (!= x 1)
             (== x 1)
             (== q x)))
         ())))

(deftest test-disequality-4
  (is (= (run* [q]
           (fresh [x]
             (== x 1)
             (!= x 1)
             (== q x)))
         ())))

(deftest test-disequality-5
  (is (= (run* [q]
           (fresh [x y]
             (!= x y)
             (== x 1)
             (== y 1)
             (== q x)))
         ())))

(deftest test-disequality-6
  (is (= (run* [q]
           (fresh [x y]
             (== x 1)
             (== y 1)
             (!= x y)
             (== q x)))
         ())))

(deftest test-disequality-7
  (is (= (run* [q]
           (fresh [x y]
             (== x 1)
             (!= x y)
             (== y 2)
             (== q x)))
         '(1))))

(deftest test-disequality-8
  (is (= (run* [q]
           (fresh [x y]
             (!= [x 2] [y 1])
             (== x 1)
             (== y 3)
             (== q [x y])))
         '([1 3]))))

(deftest test-disequality-9
  (is (= (run* [q]
           (fresh [x y]
             (== x 1)
             (== y 3)
             (!= [x 2] [y 1])
             (== q [x y])))
         '([1 3]))))

(deftest test-disequality-10
  (is (= (run* [q]
           (fresh [x y]
             (!= [x 2] [1 y])
             (== x 1)
             (== y 2)
             (== q [x y])))
         ())))

(deftest test-disequality-11
  (is (= (run* [q]
           (fresh [x y]
             (== x 1)
             (== y 2)
             (!= [x 2] [1 y])
             (== q [x y])))
         ())))

(deftest test-disequality-12
  (is (= (run* [q]
           (fresh [x y z]
             (!= x y)
             (== y z)
             (== x z)
             (== q x)))
         ())))

(deftest test-disequality-13
  (is (= (run* [q]
           (fresh [x y z]
             (== y z)
             (== x z)
             (!= x y)
             (== q x)))
         ())))

(deftest test-disequality-14
  (is (= (run* [q]
           (fresh [x y z]
             (== z y)
             (== x z)
             (!= x y)
             (== q x)))
         ())))

(deftest test-disequality-15
  (is (= (run* [q]
           (fresh [x y]
             (== q [x y])
             (!= x 1)
             (!= y 2)))
         '(([_0 _1] :- (!= (_0 1)) (!= (_1 2)))))))

(deftest test-disequality-16
  (is (= (run* [q]
           (fresh [x y z]
             (== y [z])
             (!= [z] x)
             (== z 'foo)
             (== x ['foo])))
         '())))

(deftest test-disequality-17
  (is (= (run* [q]
           (fresh [x y]
             (!= [1 x] [y 2])
             (== q [x y])))
         '(([_0 _1] :- (!= (_1 1) (_0 2))))))
  (is (= (run* [q]
           (fresh [x y]
             (!= [x 1] [2 y])))
         '((_0 :- (!= (_1 2) (_2 1)))))))

(deftest test-logic-95-disequality-1
  (is (= (run* [q]
           (fresh [x y w z]
             (!= x y)
             (!= w z)
             (== z y)
             (== x 'foo)
             (== y 'foo)))
         ())))

(deftest test-logic-95-disequality-2
  (is (= (run* [q]
           (fresh [x y w z]
             (!= x [y])
             (== x ['foo])
             (== y 'foo)))
         ())))

(deftest test-logic-96-disequality-1
  (is (= (run* [q]
           (fresh [x y z]
             (!= x [y])
             (== x [z])
             (== y 'foo)
             (== z 'bar)))
         '(_0))))

(deftest test-logic-100-disequality-1
  (is (= (run* [q]
           (fresh [a b]
             (== q [a b])
             (!= a q)
             (== a 1)))
         '([1 _0]))))

(deftest test-logic-100-disequality-2
  (is (= (run* [q]
           (fresh [a b]
             (!= a q)
             (== q [a b])))
         '([_0 _1])))
  (is (= (run* [q]
           (fresh [a b]
             (== q [a b])
             (!= a q)))
         '([_0 _1]))))

(deftest test-logic-100-disequality-3
  (is (= (run* [q]
           (fresh [x y w z]
             (== x [1 w])
             (== y [2 z])
             (!= x y)))
         '(_0)))
  (is (= (run* [q]
           (fresh [x y w z]
             (!= x y)
             (== x [1 w])
             (== y [2 z])))
         '(_0))))

(deftest test-logic-119-disequality-1
  (is (= (run* [q]
           (!= {1 2 3 4} 'foo))
         '(_0))))
;; -----------------------------------------------------------------------------
;; tabled

(defne arco [x y]
  ([:a :b])
  ([:b :a])
  ([:b :d]))

(def patho
  (tabled [x y]
          (conde
           [(arco x y)]
           [(fresh [z]
              (arco x z)
              (patho z y))])))

(deftest test-tabled-1
  (is (= (into #{} (run* [q] (patho :a q)))
         (into #{} '(:b :a :d)))))

(defne arco-2 [x y]
  ([1 2])
  ([1 4])
  ([1 3])
  ([2 3])
  ([2 5])
  ([3 4])
  ([3 5])
  ([4 5]))

(def patho-2
  (tabled [x y]
          (conde
           [(arco-2 x y)]
           [(fresh [z]
              (arco-2 x z)
              (patho-2 z y))])))

(deftest test-tabled-2
  (let [r (set (run* [q] (patho-2 1 q)))]
    (is (and (= (count r) 4)
             (= r #{2 3 4 5})))))



;; -----------------------------------------------------------------------------
;; nil in collection

(deftest test-nil-in-coll-1
  (is (= (run* [q]
           (== q [nil]))
         '([nil]))))

(deftest test-nil-in-coll-2
  (is (= (run* [q]
           (== q [1 nil]))
         '([1 nil]))))

(deftest test-nil-in-coll-3
  (is (= (run* [q]
           (== q [nil 1]))
         '([nil 1]))))

(deftest test-nil-in-coll-4
  (is (= (run* [q]
           (== q '(nil)))
         '((nil)))))

(deftest test-nil-in-coll-5
  (is (= (run* [q]
           (== q {:foo nil}))
         '({:foo nil}))))

(deftest test-nil-in-coll-6
  (is (= (run* [q]
           (== q {nil :foo}))
         '({nil :foo}))))

;; -----------------------------------------------------------------------------
;; Unifier

(deftest test-unifier-1
  (is (= (u/unify ['(?x ?y) '(1 2)])
         '(1 2))))

(deftest test-unifier-2
  (is (= (u/unify ['(?x ?y 3) '(1 2 ?z)])
         '(1 2 3))))

(deftest test-unifier-3
  (is (= (u/unify ['[(?x . ?y) 3] [[1 2] 3]])
         '[(1 2) 3])))

(deftest test-unifier-4
  (is (= (u/unify ['(?x . ?y) '(1 . ?z)])
         (lcons 1 '?z))))

(deftest test-unifier-5
  (is (= (u/unify ['(?x 2 . ?y) '(1 2 3 4 5)])
         '(1 2 3 4 5))))

(deftest test-unifier-6
  (is (= (u/unify ['(?x 2 . ?y) '(1 9 3 4 5)])
         nil)))

(deftest test-unifier-7
  (is (= (u/unify ['(?x 2 . ?y) '(1 9 3 4 5)])
         nil)))

(deftest test-unifier-8 ;;nested maps
  (is (= (u/unify ['{:a {:b ?b}} {:a {:b 1}}])
         {:a {:b 1}})))

(deftest test-unifier-9 ;;nested vectors
  (is (= (u/unify ['[?a [?b ?c] :d] [:a [:b :c] :d]])
         [:a [:b :c] :d])))

(deftest test-unifier-10 ;;nested seqs
  (is (= (u/unify ['(?a (?b ?c) :d) '(:a (:b :c) :d)])
         '(:a (:b :c) :d))))

(deftest test-unifier-11 ;;all together now
  (is (= (u/unify ['{:a [?b (?c [?d {:e ?e}])]} {:a [:b '(:c [:d {:e :e}])]}])
         {:a [:b '(:c [:d {:e :e}])]})))

(deftest test-unifier-12
  (is (= (u/unify '[?x 1]) 1)))

;; -----------------------------------------------------------------------------
;; custom var reification

(deftest test-reify-vars-false
  (is (-run {:reify-vars false} [q]
            (fresh [x]
              (== q x)))
      '(x)))

(deftest test-custom-var-reifier-1
  (let [x (l/lvar 'x)]
    (is (= (-run {:reify-vars (fn [v rs] rs)} [q]
                 (== q x))
           `(~x)))))

;; -----------------------------------------------------------------------------
;; Unifier with constraints

(defnc evenc [x]
  (even? x))

(deftest test-unifier-constraints-1 ;;One var
  (is (= (u/unify {:when {'?a evenc}} ['{:a ?a} {:a 2}])
         {:a 2}))
  (is (= (u/unify {:when {'?a evenc}} ['{:a ?a} {:a 1}])
         nil)))

(deftest test-unifier-constraints-2 ;;Two vars
  (is (= (u/unify {:when {'?a evenc '?b evenc}} ['{:a ?a :b ?b} {:a 2 :b 2}])
         {:a 2 :b 2}))
  (is (= (u/unify {:when {'?a evenc '?b evenc}} ['{:a ?a :b ?b} {:a 1 :b 2}])
         nil)))

(deftest test-unifier-constraints-3
  (is (= (u/unify {:when {'#{?a ?b} evenc}} ['{:a ?a :b ?b} {:a 2 :b 2}])
         {:a 2 :b 2}))
  (is (= (u/unify {:when {'#{?a ?b} evenc}} ['{:a ?a :b ?b} {:a 1 :b 2}])
         nil)))

(defnc div3c [x]
  (zero? (mod x 3)))

(deftest test-unifier-constraints-4
  (is (= (u/unify {:when {'#{?a ?b} [evenc div3c]}} ['{:a ?a :b ?b} {:a 6 :b 12}])
         {:a 6 :b 12}))
  (is (= (u/unify {:when {'#{?a ?b} [evenc div3c]}} ['{:a ?a :b ?b} {:a 2 :b 6}])
         nil)))

(defnc complexc [a b]
  (and (even? a) (zero? (mod b 3))))

(deftest test-unifier-constraints-5
  (is (= (u/unify {:when {'[?a ?b] complexc}} ['{:a ?a :b ?b} {:a 2 :b 3}])
         {:a 2 :b 3}))
  (is (= (u/unify {:when {'[?a ?b] complexc}} ['{:a ?a :b ?b} {:a 2 :b 4}])
         nil)))

(deftest test-unifier-as-1
  (is (= (u/unify {:as '{?x (?y ?z)}} ['?x '(1 2)])))
  (is (= (u/unify {:as '{?x (?y ?z)}} ['(?x) '((1 2))])))
  (is (= (u/unify {:as '{?x (?y ?y)}} '[[?y ?x] [1 (1 1)]])
         '[1 (1 1)])))
