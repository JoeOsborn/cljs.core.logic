(deftest test-force-ans-1
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 10)) empty-s)]
    (is (= (take 10
                 (solutions s x
                            (force-ans x)))
           '(1 2 3 4 5 6 7 8 9 10)))))

(deftest test-force-ans-2
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 10)) empty-s)]
    (is (= (take 10
                 (solutions s x
                            (force-ans [x])))
           '(1 2 3 4 5 6 7 8 9 10)))))

(deftest test-force-ans-3
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/multi-interval (fd/interval 1 4) (fd/interval 6 10)))
           empty-s)]
    (is (= (take 10
                 (solutions s x
                            (force-ans x)))
           '(1 2 3 4 6 7 8 9 10)))))





(deftest test-verify-all-bound-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((composeg
            (fd/dom x (fd/interval 1 10))
            (fd/dom y (fd/interval 1 10))) empty-s)]
    (is (nil? (verify-all-bound s [x y])))))

(deftest test-verify-all-bound-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((fd/dom x (fd/interval 1 10)) empty-s)]
    (is (thrown? Exception (verify-all-bound s [x y])))))

(deftest test-enforce-constraints-1
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 3)) empty-s)]
    (is (= (solutions s x
                      (enforce-constraints x))
           '(1 2 3)))))

(deftest test-reifyg-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((composeg
            (fd/dom x (fd/interval 1 10))
            (fd/dom y (fd/interval 1 5))) empty-s)
        s ((fd/== x y) s)]
    (is (= (take* ((reifyg x) s))
           '(1 2 3 4 5)))))

(deftest test-process-interval-smaller-1
  (let [x (l/lvar 'x)
        s ((composeg
            (fd/dom x (fd/interval 1 10))
            (fd/dom x (fd/interval 2 10))) empty-s)]
    (is (= (fd/get-dom s x)
           (fd/interval 2 10)))))

(deftest test-boundary-interval-1
  (is (fd/-difference (fd/interval 1 10) 1)
      (fd/interval 2 10)))

(deftest test-boundary-interval-1
  (is (fd/-difference (fd/interval 1 10) 10)
      (fd/interval 1 9)))

(deftest test-process-imi-1
  (let [x (l/lvar 'x)
        s ((composeg
            (fd/dom x (fd/interval 2 10))
            (fd/dom x (fd/multi-interval (fd/interval 1 4) (fd/interval 6 10))))
           empty-s)]
    (is (= (fd/get-dom s x)
           (fd/multi-interval (fd/interval 2 4) (fd/interval 6 10))))))

(deftest test-root-var-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s (-> empty-s
              (proto/ext-no-check x 1)
              (proto/ext-no-check y x))]
    (is (= (root-var s y) x))))

(deftest test-ckanren-1
  (is (= (into #{}
               (run* [q]
                 (fresh [x]
                   (fd/in x (fd/interval 1 3))
                   (== q x))))
         (into #{} '(1 2 3)))))

(deftest test-ckanren-2
  (is (= (into #{}
               (run* [q]
                 (fresh [x y z]
                   (fd/in x z (fd/interval 1 5))
                   (fd/in y (fd/interval 3 5))
                   (fd/+ x y z)
                   (== q [x y z]))))
         (into #{} '([1 3 4] [2 3 5] [1 4 5])))))

(deftest test-ckanren-3
  (is (= (into #{}
               (run* [q]
                 (fresh [x y]
                   (fd/in x y (fd/interval 1 3))
                   (fd/== x y)
                   (== q [x y]))))
         (into #{} '([1 1] [2 2] [3 3])))))

(deftest test-ckanren-4
  (is (true?
       (every? (fn [[x y]] (not= x y))
               (run* [q]
                 (fresh [x y]
                   (fd/in x y (fd/interval 1 10))
                   (fd/!= x y)
                   (== q [x y])))))))

(deftest test-ckanren-5
  (is (= (into #{}
               (run* [q]
                 (fresh [x y]
                   (fd/in x y (fd/interval 1 3))
                   (== x 2)
                   (fd/!= x y)
                   (== q [x y]))))
         (into #{} '([2 1] [2 3])))))

(deftest test-ckanren-6
  (is (= (run* [q]
           (fresh [x]
             (fd/in x (fd/interval 1 3))
             (fd/+ x 1 x)
             (== q x)))
         '())))

(deftest test-ckanren-7
  (is (= (run* [q]
           (fresh [x]
             (fd/in x (fd/interval 1 3))
             (fd/+ x x x)))
         '())))

(deftest test-ckanren-8
  (is (= (into #{}
               (run* [q]
                 (fresh [x y]
                   (fd/in x y (fd/interval 1 3))
                   (fd/<= x y)
                   (== q [x y]))))
         (into #{} '([1 1] [1 2] [2 2] [1 3] [3 3] [2 3])))))

(deftest test-ckanren-9
  (is (= (into #{}
               (run* [q]
                 (fresh [x y]
                   (fd/in x y (fd/interval 1 3))
                   (fd/< x y)
                   (== q [x y]))))
         (into #{} '([1 2] [2 3] [1 3])))))

(defn subgoal [x]
  (fresh [y]
    (== y x)
    (fd/+ 1 y 3)))

(deftest test-ckanren-10
  (is (= (run* [q]
           (fresh [x]
             (fd/in x (fd/interval 1 10))
             (subgoal x)
             (== q x)))
         '(2))))

(deftest test-list-sorted
  (is (true? (fd/list-sorted? < [1 2 3])))
  (is (true? (fd/list-sorted? < [1 3 5])))
  (is (false? (fd/list-sorted? < [1 1 3])))
  (is (false? (fd/list-sorted? < [1 5 4 1]))))

(deftest test-with-id
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        n* (sorted-set 1 3 5)
        c (with-id (fd/-distinctc x #{y} (conj n* 7)) 1)]
    (is (= (id c) 1))))

(deftest test-distinct
  (is (= (into #{}
               (run* [q]
                 (fresh [x y z]
                   (fd/in x y z (fd/interval 1 3))
                   (fd/distinct [x y z])
                   (== q [x y z]))))
         (into #{} '([1 2 3] [1 3 2] [2 1 3] [2 3 1] [3 1 2] [3 2 1])))))

(deftest test-=fd-1
  (is (= (into #{}
               (run* [q]
                 (fresh [a b]
                   (fd/in a b (fd/interval 1 3))
                   (fd/== a b)
                   (== q [a b]))))
         (into #{} '([1 1] [2 2] [3 3])))))

(deftest test-fd-!=-1
  (is (= (into #{}
               (run* [q]
                 (fresh [a b]
                   (fd/in a b (fd/interval 1 3))
                   (fd/!= a b)
                   (== q [a b]))))
         (into #{} '([1 2] [1 3] [2 1] [2 3] [3 1] [3 2])))))

(deftest test-fd-<-1
  (is (= (into #{}
               (run* [q]
                 (fresh [a b c]
                   (fd/in a b c (fd/interval 1 3))
                   (fd/< a b) (fd/< b c)
                   (== q [a b c]))))
         (into #{} '([1 2 3])))))

(deftest test-fd-<-2
  (is (= (into #{}
               (run* [q]
                 (fresh [x y z]
                   (fd/in x y z (fd/interval 1 10))
                   (fd/+ x y z)
                   (fd/< x y)
                   (== z 10)
                   (== q [x y z]))))
         (into #{} '([1 9 10] [2 8 10] [3 7 10] [4 6 10])))))

(deftest test-fd->-1
  (is (= (into #{}
               (run* [q]
                 (fresh [x y z]
                   (fd/in x y z (fd/interval 1 10))
                   (fd/+ x y z)
                   (fd/> x y)
                   (== z 10)
                   (== q [x y z]))))
         (into #{} '([6 4 10] [7 3 10] [8 2 10] [9 1 10])))))

(deftest test-fd-<=-1
  (is (= (run* [q]
           (fresh [x y]
             (== x 3)
             (fd/in y (fd/multi-interval 2 4))
             (fd/<= x y)
             (== q y)))
         '(4))))

(deftest test-fd->=-1
  (is (= (run* [q]
           (fresh [x y]
             (== x 3)
             (fd/in y (fd/multi-interval 2 4))
             (fd/>= x y)
             (== q y)))
         '(2))))

(deftest test-fd-*-1
  (is (= (into #{}
               (run* [q]
                 (fresh [n m]
                   (fd/in n m (fd/interval 1 10))
                   (fd/* n 2 m)
                   (== q [n m]))))
         (into #{} '([1 2] [2 4] [3 6] [4 8] [5 10])))))

(deftest test-fd-*-2
  (is (= (into #{}
               (run* [q]
                 (fresh [n m]
                   (fd/in n m (fd/interval 1 10))
                   (fd/* n m 10)
                   (== q [n m]))))
         (into #{} '([1 10] [2 5] [5 2] [10 1])))))

(deftest test-remc []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        c (fd/+c x y z)
        cs (addc (make-cs) empty-s c)
        cp (get (:cm cs) 0)
        cs (remc cs empty-s cp)]
    (is (= (:km cs) {}))
    (is (= (:cm cs) {}))))

(deftest test-treec-id-1 []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        c (with-id (!= x y) 0)]
    (is (zero? (id c)))))

(deftest test-tree-constraint? []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        c (!=c (list (pair x 1) (pair y 2)))
        cs (addc (make-cs) empty-s c)]
    (is (tree-constraint? ((:cm cs) 0)))
    (is (= (into #{} (keys (:km cs)))
           #{x y}))))

(deftest test-prefix-protocols []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        c (!=c (list (pair x 1) (pair y 2)))
        c (-with-prefix c (list (pair x 1)))]
    (is (= (-prefix c)
           (list (pair x 1))))))

(deftest test-!=-1 []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((!= x y) empty-s)]
    (is (= (-prefix ((:cm (:cs s)) 0)) {x y}))))

(deftest test-!=-2 []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((!= x y) empty-s)
        s ((== x y) s)]
    (is (= s nil))))

#_ (deftest test-!=-3 []
     (let [x (l/lvar 'x)
           y (l/lvar 'y)
           s ((!= x y) empty-s)
           s ((== x 1) s)
           s ((== y 2) s)]
       (is (empty? (:cm (:cs s))))
       (is (empty? (:km (:cs s))))))

(deftest test-!=-4 []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((== x 1) empty-s)
        s ((== y 2) s)
        s ((!= x y) s)]
    (is (empty? (:cm (:cs s))))
    (is (empty? (:km (:cs s))))))

(deftest test-!=-5 []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((== x 1) empty-s)
        s ((!= x y) s)
        s ((== y 2) s)]
    (is (empty? (:cm (:cs s))))
    (is (empty? (:km (:cs s))))))

(deftest test-!=-6 []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((!= x 1) empty-s)]
    (is (= (-prefix ((:cm (:cs s)) 0)) {x 1}))))

#_ (deftest test-normalize-store []
     (let [x (l/lvar 'x)
           y (l/lvar 'y)
           c (!=c (list (pair x 1)))
           sc (!=c (list (pair x 1) (pair y 2)))
           cs (addc (make-cs) empty-s c)]))

(deftest test-multi-constraints-1 []
  (is (= (run* [q]
           (fresh [x y z]
             (fd/in x y z (fd/interval 1 3))
             (!= z 3)
             (fd/+ x y z)
             (== q [x y z])))
         '([1 1 2]))))

(deftest test--fd-1 []
  (is (= (run* [q]
           (fd/in q (fd/interval 1 10))
           (fd/- 4 q 1))
         '(3)))
  (is (= (run* [q]
           (fd/in q (fd/interval 1 10))
           (fd/- 4 2 q))
         '(2))))

(deftest test-quot-1 []
  (is (= (run* [q]
           (fd/in q (fd/interval 1 10))
           (fd/quot 4 2 q))
         '(2))))

(deftest test-fd-eq-1 []
  (is (= (run* [q]
           (fresh [x y]
             (fd/in x y (fd/interval 0 9))
             (fd/eq
              (= (+ x y) 9)
              (= (+ (* x 2) (* y 4)) 24))
             (== q [x y])))
         '([6 3]))))

(deftest test-fd-eq-2 []
  (is (= (run* [q]
           (fresh [s e n d m o r y]
             (== q [s e n d m o r y])
             (fd/in s e n d m o r y (fd/interval 0 9))
             (fd/distinct [s e n d m o r y])
             (fd/!= m 0) (fd/!= s 0)
             (fd/eq
              (= (+ (* 1000 s) (* 100 e) (* 10 n) d
                    (* 1000 m) (* 100 o) (* 10 r) e)
                 (+ (* 10000 m) (* 1000 o) (* 100 n) (* 10 e) y)))))
         '([9 5 6 7 1 0 8 2]))))

(deftest test-fd-eq-3 []
  (is (= (run* [q]
           (fresh [x y]
             (fd/in x y (fd/interval 1 20))
             (fd/eq
              (= (+ x y) 11)
              (= (- (* 3 x) y) 5))
             (== q [x y])))
         '([4 7]))))

(deftest test-fd-distinct-1 []
  (is (= (run 1 [q]
           (fresh [x y]
             (fd/distinct q)
             (== q [x y])
             (== x 1)
             (== y 1)))
         ())))

(deftest test-logic-62-fd []
  (is (= (run 1 [q]
           (fresh [x y a b]
             (fd/distinct [x y])
             (== [x y] [a b])
             (== q [a b])
             (== a 1)
             (== b 1)))
         ()))
  (is (= (run 1 [q]
           (fresh [x y a b]
             (== [x y] [a b])
             (== q [a b])
             (== a 1)
             (== b 1)
             (fd/distinct [x y])))
         ())))

(deftest test-distincto-1 []
  (is (= (run 1 [q]
           (fresh [x y a b]
             (distincto q)
             (== [x y] [a b])
             (== q [a b])
             (== x 1)
             (== y 2)))
         '([1 2]))))

(deftest test-eq-vars-1 []
  (let [x0 (l/lvar 'x)
        x1 (with-meta x0 {:foo 'bar})
        s  (l/unify empty-s x0 x1)]
    (is (= s empty-s))))

(deftest test-logic-81-fd []
  (is (= (run* [q]
           (fresh [x y]
             (== q x)
             (fd/distinct [q y])
             (== y x)
             (fd/in q x y (fd/interval 1 3))))
         ()))
  (is (= (run* [q]
           (fresh [x y z]
             (== q x)
             (== y z)
             (fd/distinct [q y])
             (fd/distinct [q x])
             (== z q)
             (fd/in q x y z (fd/interval 1 3))))
         ())))

(deftest test-predc-1 []
  (is (= (run* [q]
           (predc q number? `number?))
         '((_0 :- cljs.core/number?))))
  (is (= (run* [q]
           (predc q number? `number?)
           (== q 1))
         '(1)))
  (is (= (run* [q]
           (== q 1)
           (predc q number? `number?))
         '(1)))
  (is (= (run* [q]
           (predc q number? `number?)
           (== q "foo"))
         ()))
  (is (= (run* [q]
           (== q "foo")
           (predc q number? `number?))
         ()))
  (is (= (run* [q]
           (fresh [x]
             (predc q number? `number?)
             (== q x)
             (== x "foo")))
         ()))
  (is (= (run* [q]
           (fresh [x]
             (== q x)
             (predc q number? `number?)
             (== x "foo")))
         ())))

(deftest test-predc-sans-pform
  (is (= (run* [q]
           (predc q symbol?))
         (list (list '_0 ':- symbol?)))))

(deftest test-predc-custom-reify-1
  (is (= (run* [q]
           (predc q number? (fn [c v r a] `(~'num ~(walk* r (walk* a q))))))
         '((_0 :- (num _0)))))
  (is (= (run* [q]
           (fresh [x y]
             (predc x number? (fn [c v r a] `(~'num ~(walk* r (walk* a x)))))
             (== [x y] q)))
         '(([_0 _1] :- (num _0)))))
  (is (= (run* [q]
           (predc q number? (fn [c v r a] nil)))
         '(_0))))

(defn not-adjacento [x y]
  (fresh [f]
    (fd/in f (fd/interval 1 5))
    (conde
     [(fd/+ x f y) (fd/< 1 f)]
     [(fd/+ y f x) (fd/< 1 f)])))

(defn dinesmanfd []
  (run* [baker cooper fletcher miller smith :as vs]
    (fd/distinct vs)
    (everyg #(fd/in % (fd/interval 1 5)) vs)
    (fd/!= baker 5) (fd/!= cooper 1)
    (fd/!= fletcher 5) (fd/!= fletcher 1)
    (fd/< cooper miller)
    (not-adjacento smith fletcher)
    (not-adjacento fletcher cooper)))

(deftest test-dinesmandfd []
  (is (= (dinesmanfd) '([3 2 4 5 1]))))

(defne subchecko [w sl r o n]
  ([_ () _ _ _]
     (fresh [hr]
       (fd/in hr (fd/interval 1 n))
       (matche [r o]
               ([[hr . _] [w . r]] (fd/+ hr 1 w))
               ([() [w . r]]))))
  ([_ [hsl . rsl] _ _ _]
     (fresh [w-hsl w+hsl o0 o1 nw]
       (fd/in hsl w-hsl w+hsl (fd/interval 1 n))
       (fd/+ hsl w-hsl w) (fd/+ hsl w w+hsl)
       (subchecko w-hsl rsl r  o0 n)
       (subchecko w     rsl o0 o1 n)
       (subchecko w+hsl rsl o1 o  n))))

(defne checko [ws sl r n]
  ([() _ [a . _] a])
  ([[w . wr] _ _ _]
     (fresh [nsl nr]
       (subchecko w sl r nr n)
       (conso w sl nsl)
       (checko wr nsl nr n))))

(defn matches [n]
  (run 1 [a b c d]
    (fd/in a b c d (fd/interval 1 n))
    (fd/distinct [a b c d])
    (== a 1)
    (fd/<= a b) (fd/<= b c) (fd/<= c d)
    (fd/eq (= (+ a b c d) n))
    (checko [a b c d] () () n)))

(deftest test-matches
  (is (= (matches 40) '([1 3 9 27]))))

(defn get-square [rows x y]
  (for [x (range x (+ x 3))
        y (range y (+ y 3))]
    (get-in rows [x y])))

(defn init [vars hints]
  (if (seq vars)
    (let [hint (first hints)]
      (all
       (if-not (zero? hint)
         (== (first vars) hint)
         succeed)
       (init (next vars) (next hints))))
    succeed))

(defn ->rows [xs]
  (->> xs (partition 9) (map vec) (into [])))

(defn ->cols [rows]
  (apply map vector rows))

(defn ->squares [rows]
  (for [x (range 0 9 3)
        y (range 0 9 3)]
    (get-square rows x y)))

(defn sudokufd [hints]
  (let [vars (repeatedly 81 lvar)
        rows (->rows vars)
        cols (->cols rows)
        sqs  (->squares rows)]
    (run-nc 1 [q]
            (== q vars)
            (distribute q ::l/ff)
            (everyg #(fd/in % (fd/domain 1 2 3 4 5 6 7 8 9)) vars)
            (init vars hints)
            (everyg fd/distinct rows)
            (everyg fd/distinct cols)
            (everyg fd/distinct sqs))))

(defn verify [vars]
  (let [rows (->rows vars)
        cols (->cols rows)
        sqs  (->squares rows)
        verify-group (fn [group]
                       (every? #(= (->> % (into #{}) count) 9)
                               group))]
    (and (verify-group rows)
         (verify-group cols)
         (verify-group sqs))))

(def easy0
  [0 0 3  0 2 0  6 0 0
   9 0 0  3 0 5  0 0 1
   0 0 1  8 0 6  4 0 0

   0 0 8  1 0 2  9 0 0
   7 0 0  0 0 0  0 0 8
   0 0 6  7 0 8  2 0 0

   0 0 2  6 0 9  5 0 0
   8 0 0  2 0 3  0 0 9
   0 0 5  0 1 0  3 0 0])

(deftest test-sudokufd
  (is (-> (sudokufd easy0) first verify)))

(defn safefd []
  (run* [c1 c2 c3 c4 c5 c6 c7 c8 c9 :as vs]
    (everyg #(fd/in % (fd/interval 1 9)) vs)
    (fd/distinct vs)
    (fd/eq
     (= (- c4 c6) c7)
     (= (* c1 c2 c3) (+ c8 c9))
     (< (+ c2 c3 c6) c8)
     (< c9 c8))
    (project [vs]
      (everyg (fn [[v n]] (fd/!= v n))
              (map vector vs (range 1 10))))))

(deftest test-safefd
  (is (= (safefd)
         '([4 3 1 8 9 2 6 7 5]))))

(deftest test-featurec-1
  (is (= (run* [q]
           (featurec q {:foo 1}))
         '((_0 :- (cljs.core.logic/featurec _0 {:foo 1})))))
  (is (= (run* [q]
           (featurec q {:foo 1})
           (== q {:foo 1 :bar 2}))
         '({:foo 1 :bar 2})))
  (is (= (run* [q]
           (featurec q {:foo 1})
           (== q {:bar 2}))
         ()))
  (is (= (run* [q]
           (fresh [x]
             (featurec x {:foo q})
             (== x {:foo 1})))
         '(1))))

(deftest test-naf-1
  (is (= (into #{}
               (run* [q]
                 (membero q '(a b c))
                 (nafc == q 'b)))
         '#{a c}))
  (is (= (into #{}
               (run* [q]
                 (nafc == q 'b)
                 (membero q '(a b c))))
         '#{a c})))

(deftest test-naf-2
  (is (= (into #{}
               (run* [x y]
                 (fd/in x y (fd/interval 1 5))
                 (fd/< x y)
                 (nafc fd/+ x y 5)))
         (into #{}
               (for [x (range 1 6)
                     y (range 1 6)
                     :when (and (< x y)
                                (not (= (+ x y) 5)))]
                 [x y]))))
  (is (= (into #{}
               (run* [x y]
                 (nafc fd/+ x y 5)
                 (fd/< x y)
                 (fd/in x y (fd/interval 1 5))))
         (into #{}
               (for [x (range 1 6)
                     y (range 1 6)
                     :when (and (< x y)
                                (not (= (+ x y) 5)))]
                 [x y])))))

(deftest test-naf-3
  (is (= (into #{}
               (run* [q]
                 (fresh [x]
                   (membero q [:a x :c])
                   (nafc == q :b))))
         #{:a :c ['_0 :- ['cljs.core.logic/nafc == '_0 :b]]})))

(deftest test-naf-4
  (is (= (run* [q]
           (fresh [x]
             (== x {:bar 1})
             (nafc featurec x {:foo 1})))
         '(_0)))
  (is (= (run* [q]
           (fresh [x]
             (== x {:foo 1})
             (nafc featurec x {:foo 1})))
         '())))

(deftest test-naf-5
  (is (= (run* [q]
           (membero q '(:a :b :c :d))
           (nafc membero q '(:a :b :c)))
         '(:d)))
  (is (= (run* [q]
           (nafc membero q '(:a :b :c))
           (membero q '(:a :b :c :d)))
         '(:d))))

(defn is-number? [x]
  (if-not (tree-term? x)
    (number? x)
    true))

(deftest test-treec-1
  (is (= (run* [q]
           (treec q #(predc % is-number?) 'is-number?)
           (fresh [x y]
             (== q [x [2 3 y]])
             (== x 1)))
         '(([1 [2 3 _0]] :- (cljs.core.logic/fixc _0 is-number?)))))
  (is (= (run* [q]
           (treec q #(predc % is-number?) 'is-number?)
           (fresh [x y]
             (== q [x [2 3 y]])
             (== x 1)
             (== y 'foo)))
         ()))
  (is (= (run* [q]
           (treec q #(predc % is-number?) 'is-number?)
           (fresh [z]
             (== q {:x {:y z}})))
         '(({:x {:y _0}} :- (cljs.core.logic/fixc _0 is-number?)))))
  (is (= (run* [q]
           (treec q #(predc % is-number?) 'is-number?)
           (fresh [z]
             (== q {:x {:y z}})
             (== z 1)))
         '({:x {:y 1}})))
  (is (= (run* [q]
           (treec q #(predc % is-number?) 'is-number?)
           (fresh [z]
             (== q {:x {:y z}})
             (== z 'foo)))
         ()))
  (is (= (run* [q]
           (treec q #(predc % is-number?) 'is-number?)
           (fresh [x]
             (== q (llist 1 2 x))))
         [[(llist 1 2 '_0) ':- '(cljs.core.logic/fixc _0 is-number?)]]))
  (is (= (run* [q]
           (treec q #(predc % is-number?) 'is-number?)
           (fresh [x]
             (== q (llist 1 2 x))
             (== x '(3))))
         '((1 2 3))))
  (is (= (run* [q]
           (treec q #(predc % is-number?) 'is-number?)
           (fresh [x]
             (== q (llist 1 2 x))
             (== x '(foo))))
         ())))

(deftest test-treec-custom-reify-1
  (is (= (run* [q]
           (fresh [x]
             (treec q #(predc % is-number?)
                    (fn [c _ v r a]
                      `(~'hashc ~v ~(-reify a x r))))))
         '((_0 :- (hashc _0 _1))))))

(deftest test-entanglement-add-dom-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s (-> empty-s
              (entangle x y)
              (l/add-dom x ::l/fd (fd/domain 1 2 3)))]
    (is (= (l/get-dom s y ::l/fd) (fd/domain 1 2 3)))))

(deftest test-entanglement-add-dom-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s (-> empty-s
              (entangle x y)
              (l/add-dom y ::l/fd (fd/domain 1 2 3)))]
    (is (= (l/get-dom s x ::l/fd) (fd/domain 1 2 3)))))

(deftest test-entanglement-add-dom-3
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        s (-> empty-s
              (entangle x y)
              (entangle y z)
              (l/add-dom x ::l/fd (fd/domain 1 2 3)))]
    (is (= (l/get-dom s z ::l/fd) (fd/domain 1 2 3)))))

(deftest test-entanglement-add-dom-one-root-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        s (-> empty-s
              (entangle y x)
              (entangle z x)
              (l/add-dom x ::l/fd (fd/domain 1 2 3)))]
    (is (= (l/get-dom s y ::l/fd) (fd/domain 1 2 3)))
    (is (= (l/get-dom s z ::l/fd) (fd/domain 1 2 3)))))

(deftest test-entanglement-add-dom-one-root-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        s (-> empty-s
              (entangle y x)
              (entangle z x)
              (l/add-dom y ::l/fd (fd/domain 1 2 3)))]
    (is (= (l/get-dom s x ::l/fd) (fd/domain 1 2 3)))
    (is (= (l/get-dom s z ::l/fd) (fd/domain 1 2 3)))))

(deftest test-entanglement-add-dom-one-root-3
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        s (-> empty-s
              (entangle y x)
              (entangle z x)
              (l/add-dom z ::l/fd (fd/domain 1 2 3)))]
    (is (= (l/get-dom s x ::l/fd) (fd/domain 1 2 3)))
    (is (= (l/get-dom s y ::l/fd) (fd/domain 1 2 3)))))

(deftest test-entanglement-add-dom-4
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        s (-> empty-s
              (entangle x y)
              (entangle y z)
              (l/add-dom z ::l/fd (fd/domain 1 2 3)))]
    (is (= (l/get-dom s x ::l/fd) (fd/domain 1 2 3)))))

(deftest test-entanglement-add-dom-root-var-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        s (-> empty-s
              (l/unify x y)
              (entangle x z)
              (l/add-dom z ::l/fd (fd/domain 1 2 3)))]
    (is (= (l/get-dom s x ::l/fd) (fd/domain 1 2 3)))))

(deftest test-entanglement-add-dom-root-var-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        s (-> empty-s
              (l/unify y x)
              (entangle x z)
              (l/add-dom z ::l/fd (fd/domain 1 2 3)))]
    (is (= (l/get-dom s x ::l/fd) (fd/domain 1 2 3)))))

(deftest test-entanglement-update-dom-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s (-> empty-s
              (entangle x y)
              (l/update-dom x ::l/nom (fnil (fn [d] (conj d :foo)) #{})))]
    (is (= (l/get-dom s y ::l/nom) #{:foo}))))

(deftest test-entanglement-update-dom-2
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s (-> empty-s
              (entangle x y)
              (l/update-dom y ::l/nom (fnil (fn [d] (conj d :foo)) #{})))]
    (is (= (l/get-dom s x ::l/nom) #{:foo}))))

(deftest test-entanglement-update-dom-3
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        s (-> empty-s
              (entangle x y)
              (entangle y z)
              (l/update-dom x ::l/nom (fnil (fn [d] (conj d :foo)) #{})))]
    (is (= (l/get-dom s z ::l/nom) #{:foo}))))

(deftest test-entanglement-update-dom-4
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        z (l/lvar 'z)
        s (-> empty-s
              (entangle x y)
              (entangle y z)
              (l/update-dom z ::l/nom (fnil (fn [d] (conj d :foo)) #{})))]
    (is (= (l/get-dom s x ::l/nom) #{:foo}))))

(deftest test-entanglement-fd-in-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s (-> empty-s (entangle x y))
        s (((fd/in x (fd/domain 1 2 3)) s))]
    (is (= (l/get-dom s x ::l/fd) (fd/domain 1 2 3)))))

(deftest test-attrs-1 []
  (let [x (l/lvar 'x)
        s (add-attr empty-s x :foo 'bar)]
    (is (= (get-attr s x :foo) 'bar))))

(deftest test-attrs-2 []
  (let [x (l/lvar 'x)
        s (proto/ext-no-check empty-s x 1)
        s (add-attr s x :foo 'bar)
        s (add-attr s x :baz 'woz)]
    (is (= (get-attr s x :foo) 'bar))
    (is (= (get-attr s x :baz) 'woz))))

(deftest test-attrs-2 []
  (let [x (l/lvar 'x)
        s (proto/ext-no-check empty-s x 1)
        s (add-attr s x :foo 'bar)
        s (add-attr s x :baz 'woz)
        s (rem-attr s x :foo)]
    (is (= (get-attr s x :foo) nil))))

(deftest test-root-1 []
  (let [x (l/lvar 'x)
        s (proto/ext-no-check empty-s x 1)]
    (= (root-var s x) x)
    (= (root-val s x) 1)))

(deftest test-root-2 []
  (let [x (l/lvar 'x)
        s (add-attr empty-s x :foo 'bar)]
    (is (l/subst-val? (root-val s x)))))

(deftest test-root-3 []
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s (-> empty-s
              (proto/ext-no-check x 1)
              (proto/ext-no-check y x))]
    (is (= (root-var s y) x))))

(deftest test-ext-run-cs-1 []
  (let [x (l/lvar 'x)
        s (proto/ext-no-check empty-s x (l/subst-val ::l/unbound))
        s (add-attr s x ::l/fd (fd/domain 1 2 3))
        s (ext-run-cs s x 1)]
    (is (= (root-val s x) 1))
    (is (= (walk s x) 1))))

(deftest test-update-dom-1 []
  (let [x (l/lvar 'x)
        s (l/add-dom empty-s x ::nom '[(swap a b)])
        s (l/update-dom s x ::nom (fn [d] (conj d '(swap x y))))]
    (is (= (l/get-dom s x ::nom) '[(swap a b) (swap x y)]))))

(deftest test-update-dom-2 []
  (let [x (l/lvar 'x)
        s (l/update-dom empty-s x ::nom
                      (fnil (fn [d] (conj d '(swap x y))) []))]
    (is (= (l/get-dom s x ::nom) '[(swap x y)]))))
