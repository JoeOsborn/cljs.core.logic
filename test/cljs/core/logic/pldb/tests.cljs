(ns cljs.core.logic.pldb.tests
  (:refer-clojure :exclude [==])
  (:require [cljs.core.logic :as l
             :refer [empty-s lcons lvar to-s -reify-lvar-name fail succeed
                     -walk* conso s# u# copy-term rembero membero member1o
                     emptyo resto firsto appendo reifyg partial-map predc
                     featurec everyg composeg solutions ext-run-csg
                     run-constraints* addcg make-cs var-rands force-ans
                     verify-all-bound enforce-constraints add-attr entangle
                     !=c nafc treec -reify tree-term? distribute rem-attr
                     get-attr distincto cgoal lvar? remcg constrain-tree -ext
                     subst-val? -unify -occurs-check -reify*
                     -walk -ifa -step -rator -addc -entailed? -runnable? id
                     -constraints-for take* -root-var -root-val -prefix
                     -with-prefix tree-constraint? with-id -remc
                     -constrain-tree -ext-run-cs -ext-no-check -walk-term]]
            [cljs.core.logic.pldb :as pldb]
            [cljs.core.logic.fd :as fd :refer [interval dom]]
            [cljs.core.logic.unifier :as u]
            [cemerick.cljs.test :as t])
  (:require-macros [cemerick.cljs.test :refer [deftest run-tests is testing]]
                   [cljs.core.logic.macros
                    :refer [umi uai llist composeg* bind* mplus* -inc == !=
                            conde fresh -run run run* run-db run-db* run-nc
                            run-nc* all pred project trace-lvars trace-s
                            log ifa* ifu* conda condu lvaro nonlvaro fnm
                            defnm fne defne matche fna fnu defna defnu matcha
                            matchu tabled let-dom fnc defnc in extend-to-fd
                            eq db-rel with-db with-dbs]]))

;; from core.logic tests
(db-rel man p)
(db-rel woman p)
(db-rel likes p1 p2)
(db-rel fun p)

(def facts0
  (pldb/db
   [man 'Bob]
   [man 'John]
   [man 'Ricky]

   [woman 'Mary]
   [woman 'Martha]
   [woman 'Lucy]

   [likes 'Bob 'Mary]
   [likes 'John 'Martha]
   [likes 'Ricky 'Lucy]))

(def facts1 (-> facts0
                (pldb/db-fact fun 'Lucy)))

(deftest test-facts0
  (with-db facts0
    (is (=
         (run* [q]
           (fresh [x y]
             (likes x y)
             (fun y)
             (== q [x y])))
         '()))))

(deftest test-facts1
  (with-db facts1
    (is (=
         (run* [q]
           (fresh [x y]
             (likes x y)
             (fun y)
             (== q [x y])))
         '([Ricky Lucy])))))

(def facts1-retracted
  (-> facts1
      (pldb/db-retraction likes 'Bob 'Mary)))

(deftest test-rel-retract
  (with-db facts1-retracted
    (is (= (into #{}
                 (run* [q]
                   (fresh [x y]
                     (likes x y)
                     (== q [x y]))))
           (into #{} '([John Martha] [Ricky Lucy]))))))

(db-rel rel1 ^:index a)
(def indexed-db
  (pldb/db [rel1 [1 2]]))

(deftest test-rel-logic-29
  (with-db indexed-db
    (is (=
         (run* [q]
           (fresh [a]
             (rel1 [q a])
             (== a 2)))
         '(1)))))

(db-rel rel2 ^:index e ^:index a ^:index v)
(def facts2
  (pldb/db
   [rel2 :e1 :a1 :v1]
   [rel2 :e1 :a2 :v2]))

(def facts2-retracted1
  (pldb/db-retractions facts2
                       [rel2 :e1 :a1 :v1]))

(def facts2-retracted2
  (pldb/db-retractions facts2
                       [rel2 :e1 :a2 :v2]))

(def facts2-retracted-all
  (pldb/db-retractions facts2
                       [rel2 :e1 :a1 :v1]
                       [rel2 :e1 :a2 :v2]))

(deftest rel2-dup-retractions
  (is (= #{[:e1 :a1 :v1] [:e1 :a2 :v2]}
         (with-db facts2
           (into #{}
                 (run* [out]
                   (fresh [e a v]
                     (rel2 e :a1 :v1)
                     (rel2 e a v)
                     (== [e a v] out)))))))
  (is (= #{}
         (with-db facts2-retracted1
           (into #{}
                 (run* [out]
                   (fresh [e a v]
                     (rel2 e :a1 :v1)
                     (rel2 e a v)
                     (== [e a v] out)))))))
  (is (= #{[:e1 :a1 :v1]}
         (with-db facts2-retracted2
           (into #{}
                 (run* [out]
                   (fresh [e a v]
                     (rel2 e :a1 :v1)
                     (rel2 e a v)
                     (== [e a v] out)))))))
  (is (= #{}
         (with-db facts2-retracted-all
           (into #{}
                 (run* [out]
                   (fresh [e a v]
                     (rel2 e :a1 :v1)
                     (rel2 e a v)
                     (== [e a v] out))))))))


;; ----------------------------------------

(db-rel protocol name port-number)
(db-rel open-port ip port-number)

(def known-ports
  (pldb/db
   [protocol :ftp 21]
   [protocol :ssh 22]
   [protocol :telnet 23]
   [protocol :smtp 25]
   [protocol :http 80]
   [protocol :pop3 110]
   [protocol :imap 143]
   [protocol :ldap 389]
   [protocol :https 443]))

(def network1
  (pldb/db
   [open-port :10.0.1.3 22]
   [open-port :10.0.1.5 22]
   [open-port :10.0.1.8 22]
   [open-port :10.0.1.8 80]
   [open-port :10.0.1.12 22]
   [open-port :10.0.1.19 22]
   [open-port :10.0.1.19 25]
   [open-port :10.0.1.19 143]
   [open-port :10.0.1.136 22]
   [open-port :10.0.1.136 80]
   [open-port :10.0.1.136 443]))

(def network2
  (pldb/db
   [open-port :192.168.128.213 22]
   [open-port :192.168.128.213 443]
   [open-port :192.168.128.217 22]
   [open-port :192.168.128.217 80]
   [open-port :192.168.128.217 443]
   [open-port :192.168.128.199 22]
   [open-port :192.168.128.140 22]
   [open-port :192.168.128.140 25]
   [open-port :192.168.128.140 110]
   [open-port :192.168.128.140 143]
   [open-port :192.168.128.140 389]))


(deftest merge-same-relationship
  (is (= #{:10.0.1.19}
         (with-db network1
           (set (run* [ip]
                  (open-port ip 143))))))

  (is (= #{:192.168.128.140}
         (with-db network2
           (set (run* [ip]
                  (open-port ip 143))))))

  (is (= #{:192.168.128.140 :10.0.1.19}
         (with-db network1
           (with-db network2
             (set (run* [ip]
                    (open-port ip 143)))))))

  (is (= #{:192.168.128.140 :10.0.1.19}
         (with-db network2
           (with-db network1
             (set (run* [ip]
                    (open-port ip 143)))))))

  (is (= #{:192.168.128.140 :10.0.1.19}
         (with-dbs [network1 network2]
           (set (run* [ip]
                  (open-port ip 143)))))))

(deftest merge-across-relationship
  (is (= #{:10.0.1.136 :192.168.128.217}
         (with-dbs [known-ports network1 network2]
           (set (run* [ip]
                  (fresh [http-port https-port]
                    (protocol :http http-port)
                    (protocol :https https-port)
                    (open-port ip http-port)
                    (open-port ip https-port))))))))



;; ----------------------------------------

(db-rel rps move)
(def moves-db (pldb/db
               [rps :rock]
               [rps :paper]
               [rps :scissors]))

(deftest test-lazy
  (is (= (into #{}
               (with-db moves-db
                 (run* [q] (rps q))))

         (with-db moves-db
           (into #{}
                 (run* [q] (rps q))))

         #{:rock :paper :scissors})))
