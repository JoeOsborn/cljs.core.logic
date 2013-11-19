



(deftest test-34-unify-with-metadata
  (is (run* [q]
        (== q (quote ^:haz-meta-daytuhs (form form form))))
      '((^:haz-meta-daytuhs (form form form)))))

(deftest test-42-multiple-run-parameters
  (is (= '[[3 _0 [3 _0]]]
         (run* [x y z]
           (== z [x y])
           (== [x] [3])))))

(deftest test-49-partial-map-unification
  (is (= [1]
         (run* [q]
           (fresh [x]
             (== {:a 1 :b 2} (partial-map {:a x}))
             (== q x)))))
  (is (= [1]
         (run* [q]
           (fresh [x]
             (== (partial-map {:a x}) {:a 1 :b 2})
             (== q x))))))

(deftest test-73-partial-map-unification
  (is (= (run* [q]
           (fresh [a]
             (== {:x 1} (partial-map {:a a}))))
         '()))
  (is (= (run* [q]
           (== {:a 1} (partial-map {:a q})))
         '(1))))

(deftest test-75-map-sum-maps-lcons
  (is (= (into #{}
               (run* [q]
                 (fresh [x]
                   (fd/in x (fd/interval 1 3))
                   (== q {:foo x}))))
         (into #{} '({:foo 1} {:foo 2} {:foo 3}))))
  (is (= (into #{}
               (run* [q]
                 (fresh [x y]
                   (fd/in x (fd/interval 1 3))
                   (== q (lcons x y)))))
         (into #{} [(lcons 1 '_0) (lcons 2 '_0) (lcons 3 '_0)]))))

(deftest test-82-nil-lcons-tail
  (is (= (run 1 [q]
           (fresh [a b c]
             (conso a b c)
             (== b nil)
             (== `(~a) c)))
         '(_0))))

(deftest test-85-alias
  (is (= (run* [q]
           (fresh [x y]
             (predc y even? `even?)
             (predc x odd? `odd)
             (== x y)
             (== x 1)
             (== q [x y])))
         ())))

(deftest test-77-alias
  (is (= (run 1 [r a b x]
           (== r [a b])
           (fd/in a b x (fd/domain 1 2))
           (fd/< a b)
           (firsto r x))
         '([[1 2] 1 2 1]))))

(deftest test-90-<-diverge
  (is (= (run 1 [a b c d]
           (fd/in a b c d (fd/interval 0 4))
           (fd/< a b)
           (fd/< c d)
           (fd/< d a))
         '([2 3 0 1]))))

(deftest test-103-<=-diverge
  (is (= (into #{}
               (run 2 [a b s p]
                 (fd/in a b (fd/interval 2 99))
                 (fd/>= a b)
                 (fd/+ a b s)
                 (fd/* a b p)))
         (into #{} '([2 2 4 4] [3 2 5 6])))))

(defrecord RecordTest [a b]
  proto/IUninitialized
  (-uninitialized [_]
    (RecordTest. nil nil)))

(deftest test-53-lossy-records
  (is (= (run* [q]
           (== q (RecordTest. 1 2)))
         (RecordTest. 1 2))))

(deftest test-111-conda-regression
  (is (= (run* [x]
           (conda
            [succeed
             (project [x] succeed)
             (project [x] succeed)]))
         '(_0))))

(deftest test-115-singleton-doms
  (is (= (run* [q]
           (fd/in q (fd/interval 3 3)))
         '(3))))

(def patho-112
  (tabled
   [graph start end]
   (conde
    [(== start end)]
    [(fresh [?via ?vias]
       (project [start graph]
         (== ?vias  ((:successors graph) start)))
       (membero ?via ?vias)
       (patho-112 graph ?via end))])))

(defn solve-goals [graph curr end goals]
  (all
   (project [goals]
     ;;when there are no more goals we are done
     (conde [(== true
                 (empty? goals))
             (== curr end)]
            ;;there are still goals left
            ;;solve the first and recursive call
            [(== false (empty? goals))
             (fresh [goal tail via]
               (== goal (first goals))
               (== tail (rest goals))
               (project [goal]
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

(def graph { :successors to-node})

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
                                 ;;(trace-lvars "current" current)
                                 (== current next)))
                              patho-112))))))

(deftest test-112-tabling
  (is (= (test-1)
         '(:foo :bar :baz :quux))))

(defne lefto
  "x appears to the left of y in collection l."
  [x y l]
  ([_ _ [x . tail]] (membero y tail))
  ([_ _ [_ . tail]] (lefto x y tail)))

(defn rule-1 [answers]
  (fresh [c1 r1 c2 r2]
    (membero [:landon (lvar) c1 r1] answers)
    (membero [:jason (lvar) c2 r2] answers)
    (conde
     [(== r1 7.5)
      (== c2 :mozzarella)]
     [(== r2 7.5)
      (== c1 :mozzarella)])))

(defn rule-2 [answers]
  (membero [(lvar) :fortune :blue-cheese (lvar)] answers))

(defn rule-3 [answers]
  (fresh [s1 s2]
    (== [(lvar) :vogue (lvar) (lvar)] s1)
    (== [(lvar) (lvar) :muenster (lvar)] s2)
    (membero s1 answers)
    (membero s2 answers)
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
    (membero [(lvar) :cosmopolitan (lvar) r1] answers)
    (membero [(lvar) (lvar) :mascarpone r2] answers)
    (lefto r1 r2 [5 6 7 7.5 8.5])))

(defn rule-9 [answers]
  (fresh [r1 r2]
    (membero [(lvar) :time (lvar) r1] answers)
    (membero [:landon (lvar) (lvar) r2] answers)
    (lefto r1 r2 [5 6 7 7.5 8.5])))

(defn rule-0 [answers]
  (fresh [s]
    (== [:amaya (lvar) (lvar) (lvar)] s)
    (membero s answers)))

(deftest test-71-simple-unifier-reify-vars
  (is (= (u/unify '[(?x) (?x) (1)])
         '(1))))

(deftest test-36-unifier-behavior
  (is (= (u/unifier ['(?x ?y) '(?y ?x)])
         '{?x ?y})))

(deftest test-108-recursive-features
  (is (= (run* [x y]
           (featurec x {:foo {:bar y}})
           (== x {:foo {:bar 1}}))
         '([{:foo {:bar 1}} 1])))
  (is (= (run* [x y]
           (== x {:foo {:bar 1}})
           (featurec x {:foo {:bar y}}))
         '([{:foo {:bar 1}} 1])))
  (is (= (run* [x y]
           (featurec x {:foo {:bar y}})
           (== x {:foo {:bar 1 :woz 2}}))
         '([{:foo {:bar 1 :woz 2}} 1])))
  (is (= (run* [x y]
           (== x {:foo {:bar 1 :woz 2}})
           (featurec x {:foo {:bar y}}))
         '([{:foo {:bar 1 :woz 2}} 1])))
  (is (= (run* [x y]
           (== x {:foo {:baz 1}})
           (featurec x {:foo {:bar y}}))
         '()))
  (is (= (run* [x y]
           (featurec x {:foo {:bar y}})
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
               (fd/in wedges flats pumps sandals
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
              (fd/in x y (fd/interval 1 38))
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
             (fd/in x y z (fd/interval 0 9))))
         '([6 3]))))

(deftest test-logic-132-recursive-featurec
  (is (= (run* [x y]
           (featurec x {:a {:b 1}})
           (== y {:b 1})
           (== x {:a y}))
         '([{:a {:b 1}} {:b 1}])))
  (is (= (run* [x y]
           (featurec x {:a {:b 1}})
           (== x {:a y})
           (== y {:b 1}))
         '([{:a {:b 1}} {:b 1}])))
  (is (= (run* [x y]
           (== x {:a y})
           (== y {:b 1})
           (featurec x {:a {:b 1}}))
         '([{:a {:b 1}} {:b 1}]))))

(deftest test-137-oom
  (is (= (let [vs (repeatedly 20 l/lvar)]
           (first
            (run 1 [q]
              (== q vs)
              (everyg (fn [v] (fd/in v (fd/interval 1 2))) vs))))
         (take 20 (repeat 1))))
  (is (= (first
          (run 1 [q]
            (fresh [x1 x2 x3 x4 x5 x6 x7 x8 x9
                    x10 x11 x12 x13 x14 x15
                    x16 x17 x18 x19 x20]
              (== q [x1 x2 x3 x4 x5 x6 x7 x8 x9
                     x10 x11 x12 x13 x14 x15
                     x16 x17 x18 x19 x20])
              (fd/in x1 x2 x3 x4 x5 x6 x7 x8 x9
                     x10 x11 x12 x13 x14 x15
                     x16 x17 x18 x19 x20
                     (fd/interval 1 2)))))
         (take 20 (repeat 1)))))

(deftest test-pair []
  (is (= (pair 1 2)
         (pair 1 2))))

(deftest test-dom-1 []
  (let [x (l/lvar 'x)
        s ((fd/dom x 1) empty-s)]
    (is (= (:s s) {x 1}))))

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
        s ((fd/process-dom x 1 1) empty-s)]
    (is (= (walk s x) 1))))

(deftest test-process-dom-2
  (let [x (l/lvar 'x)
        s ((fd/process-dom x (fd/interval 1 10) (fd/interval 1 10)) empty-s)]
    (is (= (fd/get-dom s x) (fd/interval 1 10)))))

(deftest test-dom-1
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 10)) empty-s)]
    (is (= (fd/get-dom s x) (fd/interval 1 10)))))

(deftest test-in-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        f ((fd/in x y (fd/interval 1 10)) empty-s)
        s (f)]
    (is (= (fd/get-dom s x) (fd/interval 1 10)))
    (is (= (fd/get-dom s y) (fd/interval 1 10)))))

(deftest test-make-fdc-prim-1
  (let [u (l/lvar 'u)
        w (l/lvar 'w)
        c (fd/==c u w)
        c' (-step c empty-s)]
    (is (= (var-rands empty-s c)
           [u w]))
    (is (= (-rator c)
           'cljs.core.logic.fd/==))
    (is (not (-runnable? c')))
    (is (not (-entailed? c')))))

(deftest test-make-fdc-prim-2
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        c' (-step c empty-s)]
    (is (= (var-rands empty-s c)
           [u w]))
    (is (= (-rator c)
           'cljs.core.logic.fd/+))
    (is (not (-runnable? c')))
    (is (not (-entailed? c')))))

(deftest test-entailed-1
  (let [c (fd/+c 1 2 3)
        c' (-step c empty-s)]
    (is (true? (-entailed? c')))))

(deftest test-make-fdc-1
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        c' (-step c empty-s)]
    (is (= (var-rands empty-s c)
           [u w]))
    (is (= (-rator c)
           `fd/+))
    (is (not (-runnable? c')))
    (is (not (-entailed? c')))))

(deftest test-addc-1
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        cs (addc (make-cs) empty-s c)
        sc (first (constraints-for cs empty-s u ::l/fd))]
    (is (= (id sc) 0))
    (is (= (count (:km cs)) 2))
    (is (= (count (:cm cs)) 1))))

(deftest test-addc-2
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c0 (fd/+c u v w)
        x (l/lvar 'x)
        c1 (fd/+c w v x)
        cs  (-> (make-cs)
                (addc empty-s c0)
                (addc empty-s c1))
        sc0 (get (:cm cs) 0)
        sc1 (get (:cm cs) 1)]
    (is (= (id sc0) 0))
    (is (= (id sc1) 1))
    (is (= (count (:km cs)) 3))
    (is (= (count (:cm cs)) 2))))

(deftest test-addcg
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        s ((addcg c) empty-s)]
    (is (= (count (:km (:cs s))) 2))
    (is (= (count (:cm (:cs s))) 1))))

(deftest test-purge-c
  (let [u (l/lvar 'u)
        v 1
        w (l/lvar 'w)
        c (fd/+c u v w)
        s ((addcg c) empty-s)
        c (first (constraints-for (:cs s) s u ::l/fd))
        s (-> s
              (ext-run-cs u 1)
              (ext-run-cs w 2))]
    (is (zero? (count (:km (:cs s)))))
    (is (zero? (count (:cm (:cs s)))))))

(deftest test-=fd-1
  (let [x (l/lvar 'x)
        y (l/lvar 'y)
        s ((composeg
            (fd/dom x (fd/interval 1 6))
            (fd/dom y (fd/interval 5 10))) empty-s)
        s ((fd/== x y) s)
        cs (:cs s)]
    (is (= 2 (count (:km (:cs s))))) ;; works
    (is (= 3 (count (:cm (:cs s)))))
    (is (= (fd/get-dom s x) (fd/interval 5 6)))
    (is (= (fd/get-dom s y) (fd/interval 5 6)))))

(deftest test-multi-interval-1
  (let [mi (fd/multi-interval (fd/interval 1 3) (fd/interval 7 10))]
    (is (= 1 (fd/-lb mi)))
    (is (= 10 (fd/-ub mi)))))

(deftest test-run-constraints*
  (is (= (run-constraints* [] [] ::l/subst) s#)))

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
  (is (= (fd/to-vals (fd/multi-interval (fd/interval 1 5) 7 (fd/interval 9 12)))
         '(1 2 3 4 5 7 9 10 11 12))))

(deftest test-map-sum-1
  (let [x (l/lvar 'x)
        s ((fd/dom x (fd/interval 1 10)) empty-s)]
    (is (= (take 10
                 (solutions s x
                            ((fd/map-sum (fn [v] (ext-run-csg x v)))
                             (fd/to-vals (fd/interval 1 10)))))
           '(1 2 3 4 5 6 7 8 9 10)))))

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
