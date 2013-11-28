(ns cljs.core.logic.test
  (:refer-clojure :exclude [==])
  (:require [cljs.core.logic :as l]
            [cljs.core.logic.fd :as fd]
            [cljs.core.logic.unifier :as u]
            [cemerick.cljs.test :as t])
  (:require-macros [cemerick.cljs.test :refer [deftest run-tests is testing]]
                   [cljs.core.logic.macros :as l
                    :refer [defne tabled run* fresh run all conde in == !=
                            defnc fne conda condu]]))

(deftest unify-nil-object-1
  (is (l/failed? (l/-unify l/empty-s nil 1))))

(deftest unify-nil-lvar-1
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x nil)]
    (is (= (l/-unify l/empty-s nil x) os))))

(deftest unify-nil-lseq-1
  (let [x (l/lvar 'x)]
    (is (l/failed? (l/-unify l/empty-s nil (l/lcons 1 x))))))

(deftest unify-nil-map-1
  (let [x (l/lvar 'x)]
    (is (l/failed? (l/-unify l/empty-s nil {})))))

(deftest unify-object-nil-1
  (is (l/failed? (l/-unify l/empty-s 1 nil))))

(deftest unify-object-object-1
  (is (= (l/-unify l/empty-s 1 1) l/empty-s)))

(deftest unify-object-object-2
  (is (= (l/-unify l/empty-s :foo :foo) l/empty-s)))

(deftest unify-object-object-3
  (is (= (l/-unify l/empty-s 'foo 'foo) l/empty-s)))

(deftest unify-object-object-4
  (is (= (l/-unify l/empty-s "foo" "foo") l/empty-s)))

(deftest unify-object-object-5
  (is (l/failed? (l/-unify l/empty-s 1 2))))

(deftest unify-object-object-6
  (is (l/failed? (l/-unify l/empty-s 2 1))))

(deftest unify-object-object-7
  (is (l/failed? (l/-unify l/empty-s :foo :bar))))

(deftest unify-object-object-8
  (is (l/failed? (l/-unify l/empty-s 'foo 'bar))))

(deftest unify-object-object-9
  (is (l/failed? (l/-unify l/empty-s "foo" "bar"))))

(deftest unify-object-lvar-1
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x 1)]
    (is (= (l/-unify l/empty-s 1 x) os))))

(deftest unify-object-lcons-1
  (let [x (l/lvar 'x)]
    (is (l/failed? (l/-unify l/empty-s 1 (l/lcons 1 'x))))))

(deftest unify-object-seq-1
  (is (l/failed? (l/-unify l/empty-s 1 '()))))

(deftest unify-object-seq-2
  (is (l/failed? (l/-unify l/empty-s 1 '[]))))

(deftest unify-object-map-1
  (is (l/failed? (l/-unify l/empty-s 1 {}))))

(deftest unify-lvar-object-1
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x 1)]
    (is (= (l/-unify l/empty-s x 1) os))))

(deftest unify-lvar-lvar-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        os (l/-ext-no-check l/empty-s x y)]
    (is (= (l/-unify l/empty-s x y) os))))

(deftest unify-lvar-lcons-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        l (l/lcons 1 y)
        os (l/-ext-no-check l/empty-s x l)]
    (is (= (l/-unify l/empty-s x l) os))))

(deftest unify-lvar-seq-1
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x [])]
    (is (= (l/-unify l/empty-s x []) os))))

(deftest unify-lvar-seq-2
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x [1 2 3])]
    (is (= (l/-unify l/empty-s x [1 2 3]) os))))

(deftest unify-lvar-seq-3
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x '())]
    (is (= (l/-unify l/empty-s x '()) os))))

(deftest unify-lvar-seq-4
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x '(1 2 3))]
    (is (= (l/-unify l/empty-s x '(1 2 3)) os))))

(deftest unify-lvar-map-1
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x {})]
    (is (= (l/-unify l/empty-s x {}) os))))

(deftest unify-lvar-map-2
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x {1 2 3 4})]
    (is (= (l/-unify l/empty-s x {1 2 3 4}) os))))

;; -----------------------------------------------------------------------------
;; l/lcons

(deftest unify-lcons-object-1
  (let [x (l/lvar 'x)]
    (is (= (l/-unify l/empty-s (l/lcons 1 x) 1) nil))))

(deftest unify-lcons-lvar-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        l (l/lcons 1 y)
        os (l/-ext-no-check l/empty-s x l)]
    (is (= (l/-unify l/empty-s l x) os))))

(deftest unify-lcons-lcons-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (l/lcons 1 x)
        lc2 (l/lcons 1 y)
        os (l/-ext-no-check l/empty-s x y)]
    (is (= (l/-unify l/empty-s lc1 lc2) os))))

(deftest unify-lcons-lcons-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        lc1 (l/lcons 1 (l/lcons 2 x))
        lc2 (l/lcons 1 (l/lcons z y))
        os (-> l/empty-s
               (l/-ext-no-check x y)
               (l/-ext-no-check z 2))]
    (is (= (l/-unify l/empty-s lc1 lc2) os))))

(deftest unify-lcons-lcons-3
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (l/lcons 1 (l/lcons 2 x))
        lc2 (l/lcons 1 (l/lcons 2 (l/lcons 3 y)))
        os (l/-ext-no-check l/empty-s x (l/lcons 3 y))]
    (is (= (l/-unify l/empty-s lc1 lc2) os))))

(deftest unify-lcons-lcons-4
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (l/lcons 1 (l/lcons 2 x))
        lc2 (l/lcons 1 (l/lcons 3 (l/lcons 4 y)))]
    (is (= (l/-unify l/empty-s lc1 lc2) nil))))

(deftest unify-lcons-lcons-5
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc2 (l/lcons 1 (l/lcons 2 x))
        lc1 (l/lcons 1 (l/lcons 3 (l/lcons 4 y)))]
    (is (= (l/-unify l/empty-s lc1 lc2) nil))))

(deftest unify-lcons-lcons-6
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (l/lcons 1 (l/lcons 2 x))
        lc2 (l/lcons 1 (l/lcons 2 y))
        os (l/-ext-no-check l/empty-s x y)]
    (is (= (l/-unify l/empty-s lc1 lc2) os))))

(deftest unify-lcons-seq-1
  (let [x (l/lvar 'x)
        lc1 (l/lcons 1 (l/lcons 2 x))
        l1 '(1 2 3 4)
        os (l/-ext-no-check l/empty-s x '(3 4))]
    (is (= (l/-unify l/empty-s lc1 l1) os))))

(deftest unify-lcons-seq-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        lc1 (l/lcons 1 (l/lcons y (l/lcons 3 x)))
        l1 '(1 2 3 4)
        os (-> l/empty-s
               (l/-ext-no-check x '(4))
               (l/-ext-no-check y 2))]
    (is (= (l/-unify l/empty-s lc1 l1) os))))

(deftest unify-lcons-seq-3
  (let [x (l/lvar 'x)
        lc1 (l/lcons 1 (l/lcons 2 (l/lcons 3 x)))
        l1 '(1 2 3)
        os (l/-ext-no-check l/empty-s x '())]
    (is (= (l/-unify l/empty-s lc1 l1) os))))

(deftest unify-lcons-seq-4
  (let [x (l/lvar 'x)
        lc1 (l/lcons 1 (l/lcons 3 x))
        l1 '(1 2 3 4)]
    (is (= (l/-unify l/empty-s lc1 l1) nil))))

(deftest unify-lcons-seq-5
  (let [x (l/lvar 'x)
        lc1 (l/lcons 1 (l/lcons 2 x))
        l1 '(1 3 4 5)]
    (is (= (l/-unify l/empty-s lc1 l1) nil))))

(deftest unify-lcons-map-1
  (is (= (l/-unify l/empty-s (l/lcons 1 (l/lvar 'x)) {}) nil)))


;; -----------------------------------------------------------------------------
;; seq

(deftest unify-seq-object-1
  (is (= (l/-unify l/empty-s '() 1) nil)))

(deftest unify-seq-object-2
  (is (= (l/-unify l/empty-s [] 1) nil)))

(deftest unify-seq-lvar-1
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x [])]
    (is (= (l/-unify l/empty-s [] x) os))))

(deftest unify-seq-lcons-1
  (let [x (l/lvar 'x)
        lc1 (l/lcons 1 (l/lcons 2 x))
        l1 '(1 2 3 4)
        os (l/-ext-no-check l/empty-s x '(3 4))]
    (is (= (l/-unify l/empty-s l1 lc1) os))))

(deftest unify-seq-seq-1
  (is (= (l/-unify l/empty-s [1 2 3] [1 2 3]) l/empty-s)))

(deftest unify-seq-seq-2
  (is (= (l/-unify l/empty-s '(1 2 3) [1 2 3]) l/empty-s)))

(deftest unify-seq-seq-3
  (is (= (l/-unify l/empty-s '(1 2 3) '(1 2 3)) l/empty-s)))

(deftest unify-seq-seq-4
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x 2)]
    (is (= (l/-unify l/empty-s `(1 ~x 3) `(1 2 3)) os))))

(deftest unify-seq-seq-5
  (is (= (l/-unify l/empty-s [1 2] [1 2 3]) nil)))

(deftest unify-seq-seq-6
  (is (= (l/-unify l/empty-s '(1 2) [1 2 3]) nil)))

(deftest unify-seq-seq-7
  (is (= (l/-unify l/empty-s [1 2 3] [3 2 1]) nil)))

(deftest unify-seq-seq-8
  (is (= (l/-unify l/empty-s '() '()) l/empty-s)))

(deftest unify-seq-seq-9
  (is (= (l/-unify l/empty-s '() '(1)) nil)))

(deftest unify-seq-seq-10
  (is (= (l/-unify l/empty-s '(1) '()) nil)))

(deftest unify-seq-seq-11
  (is (= (l/-unify l/empty-s [[1 2]] [[1 2]]) l/empty-s)))

(deftest unify-seq-seq-12
  (is (= (l/-unify l/empty-s [[1 2]] [[2 1]]) nil)))

(deftest unify-seq-seq-13
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x 1)]
    (is (= (l/-unify l/empty-s [[x 2]] [[1 2]]) os))))

(deftest unify-seq-seq-14
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x [1 2])]
    (is (= (l/-unify l/empty-s [x] [[1 2]]) os))))

(deftest unify-seq-seq-15
  (let [x (l/lvar 'x) y (l/lvar 'y)
        u (l/lvar 'u) v (l/lvar 'v)
        os (-> l/empty-s
               (l/-ext-no-check x 'b)
               (l/-ext-no-check y 'a))]
    (is (= (l/-unify l/empty-s ['a x] [y 'b]) os))))

(deftest unify-seq-map-1
  (is (= (l/-unify l/empty-s [] {}) nil)))

(deftest unify-seq-map-2
  (is (= (l/-unify l/empty-s '() {}) nil)))

;; -----------------------------------------------------------------------------
;; map

(deftest unify-map-object-1
  (is (= (l/-unify l/empty-s {} 1) nil)))

(deftest unify-map-lvar-1
  (let [x (l/lvar 'x)
        os (l/-ext-no-check l/empty-s x {})]
    (is (= (l/-unify l/empty-s {} x) os))))

(deftest unify-map-lcons-1
  (let [x (l/lvar 'x)]
    (is (= (l/-unify l/empty-s {} (l/lcons 1 x)) nil))))

(deftest unify-map-seq-1
  (is (= (l/-unify l/empty-s {} '()) nil)))

(deftest unify-map-map-1
  (is (= (l/-unify l/empty-s {} {}) l/empty-s)))

(deftest unify-map-map-2
  (is (= (l/-unify l/empty-s {1 2 3 4} {1 2 3 4}) l/empty-s)))

(deftest unify-map-map-3
  (is (= (l/-unify l/empty-s {1 2} {1 2 3 4}) nil)))

(deftest unify-map-map-4
  (let [x (l/lvar 'x)
        m1 {1 2 3 4}
        m2 {1 2 3 x}
        os (l/-ext-no-check l/empty-s x 4)]
    (is (= (l/-unify l/empty-s m1 m2) os))))

(deftest unify-map-map-5
  (let [x (l/lvar 'x)
        m1 {1 2 3 4}
        m2 {1 4 3 x}]
    (is (= (l/-unify l/empty-s m1 m2) nil))))

(defrecord foo-struct [a b])

(deftest unify-struct-map-1
  (let [x (l/lvar 'x)
        m1 (->foo-struct 1 2)
        m2 (->foo-struct 1 x)
        os (l/-ext-no-check l/empty-s x 2)]
    (is (= (l/-unify l/empty-s m1 m2) os))))

(deftest unify-struct-map-2
  (let [x (l/lvar 'x)
        m1 (->foo-struct 1 2)
        m2 (->foo-struct 1 3)]
    (is (= (l/-unify l/empty-s m1 m2) nil))))

;; =============================================================================
;; walk

(deftest test-basic-walk
  (is (= (let [x  (l/lvar 'x)
               y  (l/lvar 'y)
               ss (l/to-s [[x 5] [y x]])]
           (l/-walk ss y))
         5)))

(deftest test-deep-walk
  (is (= (let [[x y z c b a :as s] (map l/lvar '[x y z c b a])
               ss (l/to-s [[x 5] [y x] [z y] [c z] [b c] [a b]])]
           (l/-walk ss a))
         5)))

;; =============================================================================
;; reifyo

(deftest test-reify-lvar-name
  (is (= (let [x  (l/lvar 'x)
               y  (l/lvar 'y)]
           (l/-reify-lvar-name (l/to-s [[x 5] [y x]])))
         '_2)))

;; =============================================================================
;; walk*

(deftest test-walk*
  (is (= (let [x  (l/lvar 'x)
               y  (l/lvar 'y)]
           (l/-walk* (l/to-s [[x 5] [y x]]) `(~x ~y)))
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
           l/fail
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
    (== (l/lcons a d) p)))

(defn twino [p]
  (fresh [x]
    (l/conso x x p)))

(defn listo [l]
  (conde
   [(emptyo l) l/s#]
   [(pairo l)
    (fresh [d]
      (resto l d)
      (listo d))]))

(defn flatteno [s out]
  (conde
   [(emptyo s) (== '() out)]
   [(pairo s)
    (fresh [a d res-a res-d]
      (l/conso a d s)
      (flatteno a res-a)
      (flatteno d res-d)
      (appendo res-a res-d out))]
   [(l/conso s '() out)]))

;; =============================================================================
;; conde

(deftest test-basic-conde
  (is (=  (into #{}
                (run* [x]
                  (conde
                   [(== x 'olive) l/s#]
                   [l/s# l/s#]
                   [(== x 'oil) l/s#])))
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
   [(== 'tea x) l/s#]
   [(== 'cup x) l/s#]))

(deftest test-basic-conde-e-3
  (is (= (into #{}
               (run* [r]
                 (fresh [x y]
                   (conde
                    [(teacupo x) (== true y) l/s#]
                    [(== false x) (== true y)])
                   (== (cons x (cons y ())) r))))
         (into #{} '((false true) (tea true) (cup true))))))

;; =============================================================================
;; conso

(deftest test-conso
  (is (= (run* [q]
           (fresh [a d]
             (l/conso a d '())))
         ())))

(deftest test-conso-1
  (let [a (l/lvar 'a)
        d (l/lvar 'd)]
    (is (= (run* [q]
             (l/conso a d q))
           [(l/lcons a d)]))))

(deftest test-conso-2
  (is (= (run* [q]
           (== [q] nil))
         [])))

(deftest test-conso-3
  (is (=
       (run* [q]
         (l/conso 'a nil q))
       '[(a)])))

(deftest test-conso-4
  (is (= (run* [q]
           (l/conso 'a '(d) q))
         '[(a d)])))

(deftest test-conso-empty-list
  (is (= (run* [q]
           (l/conso 'a q '(a)))
         '[()])))

(deftest test-conso-5
  (is (= (run* [q]
           (l/conso q '(b c) '(a b c)))
         '[a])))


;; =============================================================================
;; firsto

(deftest test-firsto
  (is (= (run* [q]
           (l/firsto q '(1 2)))
         (list (l/lcons '(1 2) (l/lvar 'x))))))

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
            (l/membero ['foo (lvar)] q)
            (l/membero [(lvar) 'bar] q)))
         '([[foo bar]]))))

(deftest membero-2
  (is (= (into #{}
               (run* [q]
                 (l/membero q [1 2 3])))
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
   [q l/s#]
   [(anyo q)]))

(deftest test-anyo-1
  (is (= (run 1 [q]
           (anyo l/s#)
           (== true q))
         (list true))))

(deftest test-anyo-2
  (is (= (run 5 [q]
           (anyo l/s#)
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
            [(== 'olive x) l/s#]
            [(== 'oil x) l/s#]
            [l/u#]))
         '(olive))))

(deftest test-conda-2
  (is (= (run* [x]
           (conda
            [(== 'virgin x) l/u#]
            [(== 'olive x) l/s#]
            [(== 'oil x) l/s#]
            [l/u#]))
         '())))

(deftest test-conda-3
  (is (= (run* [x]
           (fresh (x y)
             (== 'split x)
             (== 'pea y)
             (conda
              [(== 'split x) (== x y)]
              [l/s#]))
           (== true x))
         '())))

(deftest test-conda-4
  (is (= (run* [x]
           (fresh (x y)
             (== 'split x)
             (== 'pea y)
             (conda
              [(== x y) (== 'split x)]
              [l/s#]))
           (== true x))
         '(true))))

(defn not-pastao [x]
  (conda
   [(== 'pasta x) l/u#]
   [l/s#]))

(deftest test-conda-5
  (is (= (run* [x]
           (conda
            [(not-pastao x)]
            [(== 'spaghetti x)]))
         '(spaghetti))))

;; -----------------------------------------------------------------------------
;; condu (committed-choice)

(defn onceo [g]
  (condu (g l/s#)))

(deftest test-condu-1
  (is (= (run* [x]
           (onceo (teacupo x)))
         '(tea))))

(deftest test-condu-2
  (is (= (into #{}
               (run* [r]
                 (conde
                  [(teacupo r) l/s#]
                  [(== false r) l/s#])))
         (into #{}
               '(false tea cup)))))

(deftest test-condu-3
  (is (= (into #{}
               (run* [r]
                 (conda
                  [(teacupo r) l/s#]
                  [(== false r) l/s#])))
         (into #{} '(tea cup)))))

;; -----------------------------------------------------------------------------
;; copy-term

(deftest test-copy-term-1
  (is (= (run* [q]
           (fresh [a b]
             (l/copy-term a b)
             (== q [a b])))
         '([_0 _1])))
  (is (= (run* [q]
           (fresh [a b]
             (l/copy-term `(~a) `(~b))
             (== q [a b])))
         '([_0 _1])))
  (is (= (run* [q]
           (fresh [a b]
             (l/copy-term [a] [b])
             (== q [a b])))
         '([_0 _1])))
  (is (= (run* [q]
           (fresh [a b c]
             (l/copy-term [a] c)
             (== [b] c)
             (== q [a b])))
         '([_0 _1])))
  (is (= (run* [q]
           (fresh [a b c d]
             (== c 1)
             (l/copy-term [a c] [b d])
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

(declare patho patho-2 patho-112)

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
         (l/lcons 1 '?z))))

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
  (is (l/solve {:reify-vars false} [q]
            (fresh [x]
              (== q x)))
      '(x)))

(deftest test-custom-var-reifier-1
  (let [x (l/lvar 'x)]
    (is (= (l/solve {:reify-vars (fn [v rs] rs)} [q]
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


;;Anonymous constraints
(deftest test-unifier-anon-constraints-3 ;;One var
  (is (= (u/unify {:when {'?a (fnc [x] (even? x))}} ['{:a ?a} {:a 2}])
         {:a 2}))
  (is (= (u/unify {:when {'?a (fnc [x] (even? x))}} ['{:a ?a} {:a 1}])
         nil)))

(deftest test-binding-map-1
  (is (= (u/unifier ['(?x ?y) '(1 2)])
         '{?x 1 ?y 2})))

(deftest test-binding-map-2
  (is (= (u/unifier ['(?x ?y 3) '(1 2 ?z)])
         '{?x 1 ?y 2 ?z 3})))

(deftest test-binding-map-3
  (is (= (u/unifier ['[(?x . ?y) 3] [[1 2] 3]])
         '{?x 1 ?y (2)})))

(deftest test-binding-map-4
  (is (= (u/unifier ['(?x . ?y) '(1 . ?z)])
         '{?x 1, ?y ?z})))

(deftest test-binding-map-5
  (is (= (u/unifier ['(?x 2 . ?y) '(1 2 3 4 5)])
         '{?x 1 ?y (3 4 5)})))

(deftest test-binding-map-6
  (is (= (u/unifier ['(?x 2 . ?y) '(1 9 3 4 5)])
         nil)))

(deftest test-binding-map-7
  (is (= (u/unifier '[((?x ?y)) ((1 2))])
         '{?x 1 ?y 2})))

(deftest test-binding-map-constraints-1
  (is (= (u/unifier {:when {'?x evenc '?y div3c}} ['(?x ?y) '(2 6)])
         '{?x 2 ?y 6}))
  (is (= (u/unifier {:when {'?x div3c '? evenc}} ['(?x ?y) '(2 6)])
         nil))
  (is (= (u/unifier {:when {'[?x ?y] complexc}} ['(?x ?y) '(2 6)])
         '{?x 2 ?y 6}))
  (is (= (u/unifier {:when {'#{?x ?y} [evenc div3c]}} ['(?x ?y) '(6 12)])
         '{?x 6 ?y 12}))
  (is (= (u/unifier {:when {'#{?x ?y} [evenc div3c]}} ['(?x ?y) '(14 12)])
         nil)))

(deftest test-binding-map-as-1
  (is (= (u/unifier {:as {'?x '(?y ?z)}} '[(?x) ((1 2))])
         '{?x (1 2) ?y 1 ?z 2})))

(deftest test-occurs-check-1
  (is (= (run* [q]
           (== q [q]))
         ())))

(deftest test-unify-fail-1
  (is (= (run* [p] (fresh [a b] (== b ()) (== '(0 1) (l/lcons a b)) (== p [a b])))
         ())))

(deftest test-unify-fail-2
  (is (= (run* [p] (fresh [a b] (== b '(1)) (== '(0) (l/lcons a b)) (== p [a b])))
         ())))

(deftest test-unify-fail-3
  (is (= (run* [p] (fresh [a b c d] (== () b) (== '(1) d) (== (l/lcons a b) (l/lcons c d)) (== p [a b c d])))
         ())))

(defne pm1 [x y]
  ([:foo :bar]))

(defne pm2 [x y]
  ([_ x]))

(defne pm3 [x y]
  ([_ 'x]))

(defne pm4 [x y]
  ([[h . t] t]))

(defn -test-pm [test-msg rel1 rel2 rel3]
  (testing test-msg
    (is (= (run* [q] (fresh [x y] (== q [x y]) (rel1 x y))) '([:foo :bar])))
    (is (= (run* [q] (fresh [x y] (rel2 x y) (== x y))) '(_0)))
    (is (= (run* [q] (rel3 '(1 2) q)) '((2))))))

(deftest test-pm []
  (-test-pm "pattern matching with defne relations" pm1 pm2 pm4))

(deftest test-pm-anonymous []
  (-test-pm "pattern matching with anonymous fne relations"
            (fne [x y] ([:foo :bar]))
            (fne [x y] ([_ x]))
            (fne [x y] ([[h . t] t]))))

(deftest test-pm-anonymous-tabled []
  (-test-pm "pattern matching with tabled anonymous fne relations"
            (fne [x y] :tabled ([:foo :bar]))
            (fne [x y] :tabled ([_ x]))
            (fne [x y] :tabled ([[h . t] t]))))

(defne form->ast1 [form ast]
  (['(fn ~args . ~body) {:op :fn :args args :body body}]))

(defne form->ast2 [form ast]
  (['(fn [~f . ~rest] . ~body) {:op :fn :f f :rest rest :body body}]))

(deftest test-code-match-1
  (is (= (run* [q]
           (form->ast1 '(fn [x y] (+ x y)) q))
         '({:op :fn :args [x y] :body ((+ x y))})))
  (is (= (run* [q]
           (form->ast2 '(fn [x y] (+ x y)) q))
         '({:op :fn :f x :rest (y) :body ((+ x y))}))))

(defne ^:tabled dummy
  "Docstring"
  [x l]
  ([_ [x . tail]])
  ([_ [head . tail]]
     (l/membero x tail)))

(defn locals-membero [x l]
  (l/matche [l]
          ([[x . tail]])
          ([[head . tail]]
             (locals-membero x tail))))

(deftest test-matche-with-locals
  (is (= [true] (run* [q]
                  (locals-membero 'foo  [1 2 3 4 5 'foo])
                  (== q true))))
  (is (= [] (run* [q]
              (locals-membero 'foo  [1 2 3 4 5])
              (== true q)))))

(defne match-map [m o]
  ([{:foo {:bar o}} _]))

(defn test-defne-map []
  (is (= (run* [q]
           (match-map {:foo {:bar 1}} q))
         '(1))))

(deftest test-31-unifier-associative
  (is (= (u/unify ['{:a ?x} '{:a ?y} '{:a 5}])
         {:a 5}))
  (is (= (u/unify ['{:a ?x} '{:a 5} '{:a ?y}])
         {:a 5})))

(deftest test-34-unify-with-metadata
  (is (= (run* [q]
           (== q (quote ^:haz-meta-daytuhs (form form form))))
         '(^:haz-meta-daytuhs (form form form)))))

(deftest test-42-multiple-run-parameters
  (is (= '[[3 _0 [3 _0]]]
         (run* [x y z]
           (== z [x y])
           (== [x] [3])))))

(deftest test-49-partial-map-unification
  (is (= [1]
         (run* [q]
           (fresh [x]
             (== {:a 1 :b 2} (l/partial-map {:a x}))
             (== q x)))))
  (is (= [1]
         (run* [q]
           (fresh [x]
             (== (l/partial-map {:a x}) {:a 1 :b 2})
             (== q x))))))

(deftest test-73-partial-map-unification
  (is (= (run* [q]
           (fresh [a]
             (== {:x 1} (l/partial-map {:a a}))))
         '()))
  (is (= (run* [q]
           (== {:a 1} (l/partial-map {:a q})))
         '(1))))

(deftest test-75-map-sum-maps-lcons
  (is (= (into #{}
               (run* [q]
                 (fresh [x]
                   (in x (fd/interval 1 3))
                   (== q {:foo x}))))
         (into #{} '({:foo 1} {:foo 2} {:foo 3}))))
  (is (= (into #{}
               (run* [q]
                 (fresh [x y]
                   (in x (fd/interval 1 3))
                   (== q (l/lcons x y)))))
         (into #{} [(l/lcons 1 '_0) (l/lcons 2 '_0) (l/lcons 3 '_0)]))))

(deftest test-82-nil-lcons-tail
  (is (= (run 1 [q]
           (fresh [a b c]
             (l/conso a b c)
             (== b nil)
             (== `(~a) c)))
         '(_0))))

(deftest test-85-alias
  (is (= (run* [q]
           (fresh [x y]
             (l/predc y even? `even?)
             (l/predc x odd? `odd)
             (== x y)
             (== x 1)
             (== q [x y])))
         ())))

(deftest test-77-alias
  (is (= (run 1 [r a b x]
           (== r [a b])
           (in a b x (fd/domain 1 2))
           (fd/< a b)
           (l/firsto r x))
         '([[1 2] 1 2 1]))))

(deftest test-90-<-diverge
  (is (= (run 1 [a b c d]
           (in a b c d (fd/interval 0 4))
           (fd/< a b)
           (fd/< c d)
           (fd/< d a))
         '([2 3 0 1]))))

(deftest test-103-<=-diverge
  (is (= (into #{}
               (run 2 [a b s p]
                 (in a b (fd/interval 2 99))
                 (fd/>= a b)
                 (fd/+ a b s)
                 (fd/* a b p)))
         (into #{} '([2 2 4 4] [3 2 5 6])))))

(defrecord RecordTest [a b]
  l/IUninitialized
  (-uninitialized [_]
    (RecordTest. nil nil)))

(deftest test-53-lossy-records
  (is (= (run* [q]
           (== q (RecordTest. 1 2)))
         [(RecordTest. 1 2)])))

(deftest test-111-conda-regression
  (is (= (run* [x]
           (l/conda
            [l/s#
             (l/project [x] l/s#)
             (l/project [x] l/s#)]))
         '(_0))))

(deftest test-115-singleton-doms
  (is (= (run* [q]
           (in q (fd/interval 3 3)))
         '(3))))

(def patho-112
  (tabled
   [graph start end]
   (conde
    [(== start end)]
    [(fresh [?via ?vias]
       (l/project [start graph]
         (== ?vias  ((:successors graph) start)))
       (l/membero ?via ?vias)
       (patho-112 graph ?via end))])))

(defn solve-goals [graph curr end goals]
  (all
   (l/project [goals]
     (conde [(== true
                 (empty? goals))
             (== curr end)]
            [(== false (empty? goals))
             (fresh [goal tail via]
               (== goal (first goals))
               (== tail (rest goals))
               (l/project [goal]
                 (goal graph curr via)
                 (solve-goals graph via end tail)))]))))

(def foo :foo)
(def bar :bar)
(def baz :baz)
(def quux :quux)

(defn to-node [node]
  (cond
   (= node foo)
   (seq (list bar))
   (= node bar)
   (seq (list baz))
   (= node baz)
   (seq (list quux))))

(def graph {:successors to-node})


(defn test-1 []
  (run* [?result]
    (fresh [?start ?end]
      (== ?start foo)
      (== ?end quux)
      (solve-goals graph ?start ?end
                   (seq (list patho-112
                              (fn [graph current next]
                                (all
                                 (== ?result current)
                                 (l/trace-lvars "current" current)
                                 (== current next)))
                              patho-112))))))

(deftest test-112-tabling
  (is (= (test-1) '(:foo :bar :baz :quux))))

(defne lefto
  "x appears to the left of y in collection l."
  [x y l]
  ([_ _ [x . tail]] (l/membero y tail))
  ([_ _ [_ . tail]] (lefto x y tail)))

(defn rule-1 [answers]
  (fresh [c1 r1 c2 r2]
    (l/membero [:landon (lvar) c1 r1] answers)
    (l/membero [:jason (lvar) c2 r2] answers)
    (conde
     [(== r1 7.5)
      (== c2 :mozzarella)]
     [(== r2 7.5)
      (== c1 :mozzarella)])))

(defn rule-2 [answers]
  (l/membero [(lvar) :fortune :blue-cheese (lvar)] answers))

(defn rule-3 [answers]
  (fresh [s1 s2]
    (== [(lvar) :vogue (lvar) (lvar)] s1)
    (== [(lvar) (lvar) :muenster (lvar)] s2)
    (l/membero s1 answers)
    (l/membero s2 answers)
    (!= s1 s2)))

(defn rule-4 [answers]
  (permuteo [[(lvar) :fortune (lvar) (lvar)]
             [:landon (lvar) (lvar) (lvar)]
             [(lvar) (lvar) (lvar) 5]
             [(lvar) (lvar) :mascarpone (lvar)]
             [(lvar) :vogue (lvar) (lvar)]]
            answers))

(defn rule-6 [answers]
  (fresh [r1 r2]
    (l/membero [(lvar) :cosmopolitan (lvar) r1] answers)
    (l/membero [(lvar) (lvar) :mascarpone r2] answers)
    (lefto r1 r2 [5 6 7 7.5 8.5])))

(defn rule-9 [answers]
  (fresh [r1 r2]
    (l/membero [(lvar) :time (lvar) r1] answers)
    (l/membero [:landon (lvar) (lvar) r2] answers)
    (lefto r1 r2 [5 6 7 7.5 8.5])))

(defn rule-0 [answers]
  (fresh [s]
    (== [:amaya (lvar) (lvar) (lvar)] s)
    (l/membero s answers)))

(deftest test-71-simple-unifier-reify-vars
  (is (= (u/unify '[(?x) (?x) (1)])
         '(1))))

(deftest test-36-unifier-behavior
  (is (= (u/unifier ['(?x ?y) '(?y ?x)])
         '{?x ?y})))

(deftest test-108-recursive-features
  (is (= (run* [x y]
           (l/featurec x {:foo {:bar y}})
           (== x {:foo {:bar 1}}))
         '([{:foo {:bar 1}} 1])))
  (is (= (run* [x y]
           (== x {:foo {:bar 1}})
           (l/featurec x {:foo {:bar y}}))
         '([{:foo {:bar 1}} 1])))
  (is (= (run* [x y]
           (l/featurec x {:foo {:bar y}})
           (== x {:foo {:bar 1 :woz 2}}))
         '([{:foo {:bar 1 :woz 2}} 1])))
  (is (= (run* [x y]
           (== x {:foo {:bar 1 :woz 2}})
           (l/featurec x {:foo {:bar y}}))
         '([{:foo {:bar 1 :woz 2}} 1])))
  (is (= (run* [x y]
           (== x {:foo {:baz 1}})
           (l/featurec x {:foo {:bar y}}))
         '()))
  (is (= (run* [x y]
           (l/featurec x {:foo {:bar y}})
           (== x {:foo {:baz 1}}))
         '())))

(deftest test-disjoint-logic-124
  (is (false? (fd/-disjoint?
               (fd/interval 2 4)
               (fd/multi-interval 1 (fd/interval 3 4)))))
  (is (false? (fd/-disjoint?
               (fd/multi-interval 1 (fd/interval 3 4))
               (fd/interval 2 4)))))

(deftest test-arch-friends-problem-logic-124
  (let [expected [{:wedges 2,
                   :flats 4,
                   :pumps 1,
                   :sandals 3,
                   :foot-farm 2,
                   :heels-in-a-hand-cart 4,
                   :shoe-palace 1,
                   :tootsies 3}]]
    (is (= expected
           (run* [q]
             (fresh [wedges flats pumps sandals
                     ff hh sp tt pumps+1]
               (in wedges flats pumps sandals
                   ff hh sp tt pumps+1 (fd/interval 1 4))
               (fd/distinct [wedges flats pumps sandals])
               (fd/distinct [ff hh sp tt])
               (fd/== flats hh)
               (fd/+ pumps 1 pumps+1)
               (fd/!= pumps+1 tt)
               (fd/== ff 2)
               (fd/+ sp 2 sandals)
               (== q {:wedges wedges
                      :flats flats
                      :pumps pumps
                      :sandals sandals
                      :foot-farm ff
                      :heels-in-a-hand-cart hh
                      :shoe-palace sp
                      :tootsies tt})))))))

(deftest test-126-times-plus
  (is (= (set
          (run* [q]
            (fresh [x y p]
              (in x y (fd/interval 1 38))
              (fd/* x y p)
              (fd/+ p 2 40)
              (== q [x y]))))
         #{[1 38] [38 1] [2 19] [19 2]})))

(deftest test-simplefd-in-last
  (is (= (run* [q]
           (fresh [x y z p0 p1]
             (== q [x y])
             (fd/+ x y 9)
             (fd/* x 2 p0)
             (fd/* y 4 p1)
             (fd/+ p0 p1 24)
             (in x y z (fd/interval 0 9))))
         '([6 3]))))

(deftest test-logic-132-recursive-featurec
  (is (= (run* [x y]
           (l/featurec x {:a {:b 1}})
           (== y {:b 1})
           (== x {:a y}))
         '([{:a {:b 1}} {:b 1}])))
  (is (= (run* [x y]
           (l/featurec x {:a {:b 1}})
           (== x {:a y})
           (== y {:b 1}))
         '([{:a {:b 1}} {:b 1}])))
  (is (= (run* [x y]
           (== x {:a y})
           (== y {:b 1})
           (l/featurec x {:a {:b 1}}))
         '([{:a {:b 1}} {:b 1}]))))

(deftest test-137-oom
  (is (= (let [vs (repeatedly 20 l/lvar)]
           (first
            (run 1 [q]
              (== q vs)
              (l/everyg (fn [v] (in v (fd/interval 1 2))) vs))))
         (take 20 (repeat 1))))
  ;; (is (= (first
  ;;         (run 1 [q]
  ;;           (fresh [x1 x2 x3 x4 x5 x6 x7 x8 x9
  ;;                   x10 x11 x12 x13 x14 x15
  ;;                   x16 x17 x18 x19 x20]
  ;;             (== q [x1 x2 x3 x4 x5 x6 x7 x8 x9
  ;;                    x10 x11 x12 x13 x14 x15
  ;;                    x16 x17 x18 x19 x20])
  ;;             (in x1 x2 x3 x4 x5 x6 x7 x8 x9
  ;;                    x10 x11 x12 x13 x14 x15
  ;;                    x16 x17 x18 x19 x20
  ;;                    (fd/interval 1 2)))))
  ;;        (take 20 (repeat 1))))
  )

(deftest test-dom-1 []
  (let [x (l/lvar 'x)
        s ((fd/dom x 1) l/empty-s)]
    (is (= (.-s s) {x 1}))))

(deftest test-keep-before-1 []
  (is (= (fd/-keep-before (fd/interval 1 10) 5)
         (fd/interval 1 4)))
  (is (= (fd/-keep-before (fd/interval 5 10) 5)
         nil))
  (is (= (fd/-keep-before (fd/interval 5 10) 6)
         5))
  (is (= (fd/-keep-before (fd/interval 5 10) 10)
         (fd/interval 5 9))))

(deftest test-drop-before-1 []
  (is (= (fd/-drop-before (fd/interval 5 10) 4)
         (fd/interval 5 10)))
  (is (= (fd/-drop-before (fd/interval 1 10) 5)
         (fd/interval 5 10)))
  (is (= (fd/-drop-before (fd/interval 5 10) 5)
         (fd/interval 5 10)))
  (is (= (fd/-drop-before (fd/interval 5 10) 6)
         (fd/interval 6 10)))
  (is (= (fd/-drop-before (fd/interval 5 10) 10)
         10))
  (is (= (fd/-drop-before (fd/interval 5 10) 11)
         nil)))

(deftest test-keep-before-2 []
  (is (= (fd/-keep-before 1 3)
         1))
  (is (= (fd/-keep-before 1 2)
         1))
  (is (= (fd/-keep-before 1 1)
         nil)))

(deftest test-drop-before-2 []
  (is (= (fd/-drop-before 1 3)
         nil))
  (is (= (fd/-drop-before 1 2)
         nil))
  (is (= (fd/-drop-before 1 1)
         1))
  (is (= (fd/-drop-before 1 0)
         1)))

(deftest test-drop-before-mi-1 []
  (is (= (fd/-drop-before (fd/multi-interval 2 4) (fd/-lb 3))
         4)))

(deftest test-keep-before-mi-2 []
  (is (= (fd/-keep-before (fd/multi-interval 2 4) (fd/-lb 3))
         2)))

(deftest test-singleton-interval
  (is (= (fd/interval 1 1) 1)))

(deftest test-interval-<
  (is (fd/interval-< (fd/interval 1 10) (fd/interval 11 20)))
  (is (fd/interval-< 1 (fd/interval 11 20))))

(deftest test-interval->
  (is (fd/interval-> (fd/interval 11 20) (fd/interval 1 10)))
  (is (fd/interval-> (fd/interval 11 20) 1)))

(deftest test-member?-ss-1
  (is (true? (fd/-member? 1 1))))

(deftest test-member?-ss-2
  (is (false? (fd/-member? 1 2))))

(deftest test-disjoint?-ss-1
  (is (false? (fd/-disjoint? 1 1))))

(deftest test-disjoint?-ss-2
  (is (true? (fd/-disjoint? 1 2))))

(deftest test-difference-ss-1
  (is (= (fd/-difference 1 1)
         nil)))

(deftest test-difference-ss-2
  (is (= (fd/-difference 1 2)
         1)))

(deftest test-intersection-ss-1
  (is (= (fd/-intersection 1 1)
         1)))

(deftest test-intersection-ss-2
  (is (= (fd/-intersection 1 2)
         nil)))

(deftest test-member?-is-1
  (is (true? (fd/-member? (fd/interval 1 10) 1))))

(deftest test-member?-si-1
  (is (true? (fd/-member? 1 (fd/interval 1 10)))))

(deftest test-disjoint?-is-1
  (is (true? (fd/-disjoint? (fd/interval 1 10) 11))))

(deftest test-disjoint?-si-1
  (is (true? (fd/-disjoint? 11 (fd/interval 1 10)))))

(deftest test-intersection-is-1
  (is (= (fd/-intersection (fd/interval 1 6) 1)
         1)))

(deftest test-intersection-si-1
  (is (= (fd/-intersection 1 (fd/interval 1 6))
         1)))

(deftest test-difference-is-1
  (let [mi (fd/-difference (fd/interval 1 10) 5)]
    (is (= (first (fd/-intervals mi)) (fd/interval 1 4)))
    (is (= (second (fd/-intervals mi)) (fd/interval 6 10)))))

(deftest test-difference-si-1
  (let [mi (fd/-difference 5 (fd/interval 1 10))]
    (is (= (first (fd/-intervals mi)) (fd/interval 1 4)))
    (is (= (second (fd/-intervals mi)) (fd/interval 6 10)))))

(deftest test-intersection-ii-1
  (is (= (fd/-intersection (fd/interval 1 6) (fd/interval 5 10))
         (fd/interval 5 6))))

(deftest test-intersection-ii-2
  (is (= (fd/-intersection (fd/interval 5 10) (fd/interval 1 6))
         (fd/interval 5 6))))

(deftest test-difference-ii-1
  (is (= (fd/-difference (fd/interval 1 6) (fd/interval 5 10))
         (fd/interval 1 4))))

(deftest test-difference-ii-2
  (is (= (fd/-difference (fd/interval 1 4) (fd/interval 5 10))
         (fd/interval 1 4))))

(deftest test-difference-ii-3
  (is (= (fd/-difference (fd/interval 5 10) (fd/interval 1 4))
         (fd/interval 5 10))))

(deftest test-difference-ii-4
  (is (= (fd/-difference (fd/interval 1 10) (fd/interval 1 10))
         nil)))

(deftest test-difference-ii-5
  (is (= (fd/-difference (fd/interval 2 9) (fd/interval 1 10))
         nil)))

(deftest test-disjoint?-ii-1
  (is (false? (fd/-disjoint? (fd/interval 1 6) (fd/interval 5 10))))
  (is (false? (fd/-disjoint? (fd/interval 5 10) (fd/interval 1 6))))
  (is (true? (fd/-disjoint? (fd/interval 1 6) (fd/interval 10 16))))
  (is (true? (fd/-disjoint? (fd/interval 10 16) (fd/interval 1 6)))))

(deftest test-member?-mimi-1
  (is (false? (fd/-member? 20 (fd/multi-interval (fd/interval 1 3) 5 (fd/interval 7 10)))))
  (is (false? (fd/-member? (fd/multi-interval (fd/interval 1 3) 5 (fd/interval 7 10)) 20))))

(deftest test-disjoint?-mimi-1
  (is (true? (fd/-disjoint? 20 (fd/multi-interval (fd/interval 1 3) 5 (fd/interval 7 10)))))
  (is (true? (fd/-disjoint? (fd/multi-interval (fd/interval 1 3) 5 (fd/interval 7 10)) 20)))
  (is (true? (fd/-disjoint? (fd/interval 20 30) (fd/multi-interval (fd/interval 1 3) 5 (fd/interval 7 10)))))
  (is (true? (fd/-disjoint? (fd/multi-interval (fd/interval 1 3) 5 (fd/interval 7 10)) (fd/interval 20 30)))))

(deftest test-equals-mi
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 6 10))
        mi1 (fd/multi-interval (fd/interval 1 4) (fd/interval 6 10))]
    (is (= mi0 mi1))))

(deftest test-intersection-mimi-1
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 6 10))
        mi1 (fd/multi-interval (fd/interval 9 13) (fd/interval 17 20))]
    (is (= (fd/-intersection mi0 mi1) (fd/interval 9 10)))
    (is (= (fd/-intersection mi1 mi0) (fd/interval 9 10)))))

(deftest test-intersection-mimi-2
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 6 10))]
    (is (= (fd/-intersection mi0 7) 7))
    (is (= (fd/-intersection 7 mi0) 7))))

(deftest test-intersection-mimi-3
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 7 10))]
    (is (= (fd/-intersection mi0 (fd/interval 3 8))
           (fd/multi-interval (fd/interval 3 4) (fd/interval 7 8))))))

(deftest test-intersection-mimi-4
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 7 10))
        mi1 (fd/multi-interval (fd/interval 2 3) (fd/interval 6 9))]
    (is (= (fd/-intersection mi0 mi1)
           (fd/multi-interval (fd/interval 2 3) (fd/interval 7 9))))))

(deftest test-intersection-mimi-5
  (let [mi0 (fd/multi-interval (fd/interval 4 8) (fd/interval 12 16))
        mi1 (fd/multi-interval (fd/interval 1 5) (fd/interval 7 15))]
    (is (= (fd/-intersection mi0 mi1)
           (fd/multi-interval (fd/interval 4 5)
                              (fd/interval 7 8) (fd/interval 12 15))))))

(deftest test-intersection-mimi-6
  (let [mi0 (fd/multi-interval (fd/interval 1 3)
                               (fd/interval 5 6) (fd/interval 8 10))
        mi1 (fd/multi-interval (fd/interval 1 3)
                               (fd/interval 4 7) (fd/interval 8 10))]
    (is (= (fd/-intersection mi0 mi1)
           (fd/multi-interval (fd/interval 1 3) (fd/interval 5 6)
                              (fd/interval 8 10))))))

(deftest test-intersection-mimi-7
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 7 10))]
    (is (= (fd/-intersection mi0 (fd/interval 1 8))
           (fd/multi-interval (fd/interval 1 4) (fd/interval 7 8))))))

(deftest test-intersection-mimi-8
  (let [mi0 (fd/multi-interval (fd/interval 1 7) (fd/interval 9 10))
        mi1 (fd/multi-interval (fd/interval 1 3) (fd/interval 6 11))]
    (is (= (fd/-intersection mi0 mi1)
           (fd/multi-interval (fd/interval 1 3) (fd/interval 6 7) (fd/interval 9 10))))))

(deftest test-difference-mimi-1
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 6 10))
        mi1 (fd/multi-interval (fd/interval 9 13) (fd/interval 17 20))]
    (is (= (fd/-difference mi0 mi1)
           (fd/multi-interval (fd/interval 1 4) (fd/interval 6 8))))))

(deftest test-difference-mis-1
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 7 10))]
    (is (= (fd/-difference mi0 8)
           (fd/multi-interval (fd/interval 1 4) 7 (fd/interval 9 10))))))

(deftest test-difference-smi-2
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 6 10))]
    (is (= (fd/-difference 5 mi0) 5))))

(deftest test-difference-mii-1
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 7 10))]
    (is (= (fd/-difference mi0 (fd/interval 3 8))
           (fd/multi-interval (fd/interval 1 2) (fd/interval 9 10))))
    (is (= (fd/-difference (fd/interval 3 8) mi0)
           (fd/interval 5 6)))))

(deftest test-difference-mimi-2
  (let [mi0 (fd/multi-interval (fd/interval 1 4) (fd/interval 7 10))
        mi1 (fd/multi-interval (fd/interval 1 8) (fd/interval 10 13))]
    (is (= (fd/-difference mi0 mi1) 9))))

(deftest test-difference-mimi-3
  (let [mi0 (fd/multi-interval (fd/interval 3 6) (fd/interval 9 15))
        mi1 (fd/multi-interval (fd/interval 1 4) (fd/interval 10 12))]
    (is (= (fd/-difference mi0 mi1)
           (fd/multi-interval (fd/interval 5 6) 9 (fd/interval 13 15))))))

(deftest test-difference-mimi-4
  (let [mi0 (fd/multi-interval (fd/interval 3 6) (fd/interval 15 20))
        mi1 (fd/multi-interval (fd/interval 1 6) (fd/interval 10 13))]
    (is (= (fd/-difference mi0 mi1)
           (fd/interval 15 20)))))

(deftest test-fd-1
  (let [d (fd/domain 1 2 3)]
    (is (= (fd/-lb d) 1))
    (is (= (fd/-ub d) 3))))

(deftest test-normalize-intervals-1
  (let [d (fd/domain 1 2 3)]
    (is (= (fd/normalize-intervals (fd/-intervals d))
           [(fd/interval 1 3)]))))

(deftest test-normalize-intervals-2
  (let [d (fd/multi-interval (fd/interval 1 4) 5 (fd/interval 6 10))]
    (is (= (fd/normalize-intervals (fd/-intervals d))
           [(fd/interval 1 10)]))))

(deftest test-dom-interval-and-number-1
  (is (= (run* [q]
           (fd/dom q (fd/interval 1 10))
           (== q 1))
         '(1)))
  (is (= (run* [q]
           (== q 1)
           (fd/dom q (fd/interval 1 10)))
         '(1))))

(deftest test-dom-interval-and-number-2
  (is (= (run* [q]
           (fd/dom q (fd/interval 1 10))
           (== q 11))
         '()))
  (is (= (run* [q]
           (== q 11)
           (fd/dom q (fd/interval 1 10)))
         '())))

(deftest test-dom-many-intervals-1
  (is (= (run* [q]
           (fd/dom q (fd/interval 1 100))
           (fd/dom q (fd/interval 30 60))
           (fd/dom q (fd/interval 50 55))
           (== q 51))
         '(51)))
  (is (= (run* [q]
           (fd/dom q (fd/interval 1 100))
           (fd/dom q (fd/interval 30 60))
           (fd/dom q (fd/interval 50 55))
           (== q 56))
         '())))

(deftest test-process-dom-1
  (let [x (l/lvar 'x)
        s ((fd/process-dom x 1 1) l/empty-s)]
    (is (= (l/-walk s x) 1))))

(deftest test-process-dom-2
  (let [x (l/lvar 'x)
        s ((fd/process-dom x (fd/interval 1 10) (fd/interval 1 10)) l/empty-s)]
    (is (= (fd/get-dom s x) (fd/interval 1 10)))))

(deftest test-dom-1
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 10)) l/empty-s)]
    (is (= (fd/get-dom s x) (fd/interval 1 10)))))

(deftest test-in-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        f ((in x y (fd/interval 1 10)) l/empty-s)
        s (f)]
    (is (= (fd/get-dom s x) (fd/interval 1 10)))
    (is (= (fd/get-dom s y) (fd/interval 1 10)))))

(deftest test-make-fdc-prim-1
  (let [u (l/lvar 'u)
        w (l/lvar 'w)
        c (fd/==c u w)
        c' (l/-step c l/empty-s)]
    (is (= (l/var-rands l/empty-s c)
           [u w]))
    (is (= (l/-rator c)
           `cljs.core.logic.fd/==))
    (is (not (l/-runnable? c')))
    (is (not (l/-entailed? c')))))

(deftest test-make-fdc-prim-2
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        c' (l/-step c l/empty-s)]
    (is (= (l/var-rands l/empty-s c)
           [u w]))
    (is (= (l/-rator c)
           `cljs.core.logic.fd/+))
    (is (not (l/-runnable? c')))
    (is (not (l/-entailed? c')))))

(deftest test-entailed-1
  (let [c (fd/+c 1 2 3)
        c' (l/-step c l/empty-s)]
    (is (true? (l/-entailed? c')))))

(deftest test-make-fdc-1
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        c' (l/-step c l/empty-s)]
    (is (= (l/var-rands l/empty-s c)
           [u w]))
    (is (= (l/-rator c) 'cljs.core.logic.fd/+))
    (is (not (l/-runnable? c')))
    (is (not (l/-entailed? c')))))

(deftest test-addc-1
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        cs (l/-addc (l/make-cs) l/empty-s c)
        sc (first (l/-constraints-for cs l/empty-s u :cljs.core.logic/fd))]
    (is (= (l/id sc) 0))
    (is (= (count (.-km cs)) 2))
    (is (= (count (.-cm cs)) 1))))

(deftest test-addc-2
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c0 (fd/+c u v w)
        x (l/lvar 'x)
        c1 (fd/+c w v x)
        cs  (-> (l/make-cs)
                (l/-addc l/empty-s c0)
                (l/-addc l/empty-s c1))
        sc0 (get (.-cm cs) 0)
        sc1 (get (.-cm cs) 1)]
    (is (= (l/id sc0) 0))
    (is (= (l/id sc1) 1))
    (is (= (count (.-km cs)) 3))
    (is (= (count (.-cm cs)) 2))))

(deftest test-addcg
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        s ((l/addcg c) l/empty-s)]
    (is (= (count (.-km (.-cs s))) 2))
    (is (= (count (.-cm (.-cs s))) 1))))

(deftest test-purge-c
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        s ((l/addcg c) l/empty-s)
        c (first (l/-constraints-for (.-cs s) s u :cljs.core.logic/fd))
        s (-> s
              (l/-ext-run-cs u 1)
              (l/-ext-run-cs w 2))]
    (is (zero? (count (.-km (.-cs s)))))
    (is (zero? (count (.-cm (.-cs s)))))))

(deftest test-=fd-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((l/composeg
            (fd/dom x (fd/interval 1 6))
            (fd/dom y (fd/interval 5 10))) l/empty-s)
        s ((fd/== x y) s)
        cs (.-cs s)]
    (is (= 2 (count (.-km (.-cs s))))) ;; works
    (is (= 3 (count (.-cm (.-cs s)))))
    (is (= (fd/get-dom s x) (fd/interval 5 6)))
    (is (= (fd/get-dom s y) (fd/interval 5 6)))))

(deftest test-multi-interval-1
  (let [mi (fd/multi-interval (fd/interval 1 3) (fd/interval 7 10))]
    (is (= 1 (fd/-lb mi)))
    (is (= 10 (fd/-ub mi)))))

(deftest test-run-constraints*
  (is (= (run-constraints* [] [] l/subst) s#)))

(deftest test-drop-one-1
  (is (= (:s (fd/-drop-one (fd/domain 1 2 3)))
         #{2 3})))

(deftest test-drop-one-2
  (is (= (fd/-drop-one (fd/domain 1))
         nil)))

(deftest test-drop-one-3
  (is (= (fd/-drop-one 1)
         nil)))

(deftest test-drop-one-4
  (is (= (fd/-drop-one (fd/interval 1 10))
         (fd/interval 2 10))))

(deftest test-drop-one-5
  (is (= (fd/-drop-one (fd/interval 1 1))
         nil)))

(deftest test-drop-one-6
  (is (= (fd/-drop-one (fd/multi-interval (fd/interval 1 10) (fd/interval 15 20)))
         (fd/multi-interval (fd/interval 2 10) (fd/interval 15 20)))))

(deftest test-to-vals-1
  (is (= (fd/to-vals 1) '(1))))

(deftest test-to-vals-2
  (is (= (fd/to-vals (fd/domain 1 2 3)) '(1 2 3))))

(deftest test-to-vals-3
  (is (= (fd/to-vals (fd/interval 1 10))
         '(1 2 3 4 5 6 7 8 9 10))))

(deftest test-to-vals-4
  (is (= (fd/to-vals (fd/multi-interval (fd/interval 1 5) (fd/interval 7 10)))
         '(1 2 3 4 5 7 8 9 10))))

(deftest test-to-vals-5
  (is (= (fd/to-vals (fd/multi-interval (fd/interval 1 5) 7
                                        (fd/interval 9 12)))
         '(1 2 3 4 5 7 9 10 11 12))))

(deftest test-map-sum-1
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 10)) l/empty-s)]
    (is (= (take 10
                 (l/solutions s x
                            ((fd/map-sum (fn [v] (l/ext-run-csg x v)))
                             (fd/to-vals (fd/interval 1 10)))))
           '(1 2 3 4 5 6 7 8 9 10)))))

(deftest test-force-ans-1
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 10)) l/empty-s)]
    (is (= (take 10
                 (l/solutions s x (l/force-ans x)))
           '(1 2 3 4 5 6 7 8 9 10)))))

(deftest test-force-ans-2
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 10)) l/empty-s)]
    (is (= (take 10
                 (l/solutions s x
                            (l/force-ans [x])))
           '(1 2 3 4 5 6 7 8 9 10)))))

(deftest test-force-ans-3
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/multi-interval (fd/interval 1 4) (fd/interval 6 10)))
           l/empty-s)]
    (is (= (take 10
                 (l/solutions s x
                            (l/force-ans x)))
           '(1 2 3 4 6 7 8 9 10)))))

(deftest test-verify-all-bound-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((l/composeg
            (fd/dom x (fd/interval 1 10))
            (fd/dom y (fd/interval 1 10))) l/empty-s)]
    (is (nil? (l/verify-all-bound s [x y])))))

(deftest test-verify-all-bound-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((fd/dom x (fd/interval 1 10)) l/empty-s)]
    (is (thrown? js/Error (l/verify-all-bound s [x y])))))

(deftest test-enforce-constraints-1
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 3)) l/empty-s)]
    (is (= (l/solutions s x (l/enforce-constraints x))
           '(1 2 3)))))

(deftest test-reifyg-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((l/composeg
            (fd/dom x (fd/interval 1 10))
            (fd/dom y (fd/interval 1 5))) l/empty-s)
        s ((fd/== x y) s)]
    (is (= (l/take* ((l/reifyg x) s))
           '(1 2 3 4 5)))))

(deftest test-process-interval-smaller-1
  (let [x (l/lvar 'x)
        s ((l/composeg
            (fd/dom x (fd/interval 1 10))
            (fd/dom x (fd/interval 2 10))) l/empty-s)]
    (is (= (fd/get-dom s x)
           (fd/interval 2 10)))))

(deftest test-boundary-interval-1
  (is (= (fd/-difference (fd/interval 1 10) 1)
         (fd/interval 2 10))))

(deftest test-boundary-interval-1
  (is (= (fd/-difference (fd/interval 1 10) 10)
         (fd/interval 1 9))))

(deftest test-process-imi-1
  (let [x (l/lvar 'x)
        s ((l/composeg
            (fd/dom x (fd/interval 2 10))
            (fd/dom x (fd/multi-interval (fd/interval 1 4)
                                         (fd/interval 6 10))))
           l/empty-s)]
    (is (= (fd/get-dom s x)
           (fd/multi-interval (fd/interval 2 4) (fd/interval 6 10))))))

(deftest test-root-var-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s (-> l/empty-s
              (l/-ext-no-check x 1)
              (l/-ext-no-check y x))]
    (is (= (l/-root-var s y) x))))


(deftest test-145-partial-map
  (is (= (run* [x y]
           (== y {:baz "woz"})
           (== (l/partial-map {:foo x}) {:foo y}))
         '([{:baz "woz"} {:baz "woz"}]))))
