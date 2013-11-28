(ns cljs.core.logic.bench
  (:refer-clojure :exclude [==])
  (:require [cljs.core.logic :as l]
            [cljs.core.logic.fd :as fd]
            [cljs.core.logic.nominal :as nom]
            [cljs.core.logic.pldb :as pldb])
  (:require-macros [cljs.core.logic.macros :as l
                    :refer [run* fresh == != run defne run-nc]]
                   [cljs.core.logic.nominal.macros :as nom]))

(defne appendo
  "A relation where x, y, and z are proper collections,
  such that z is x appended to y"
  [x y z]
  ([() _ y])
  ([[a . d] _ [a . r]]
     (appendo d y r)))

(comment
  (simple-benchmark
   []
   (run* [q]
     (== q true)) 1000)

  (simple-benchmark
   []
   (with-meta {:hello "there"} {:meta :data}) 10000)

  (simple-benchmark
   []
   (run 10 [q]
     (fresh [x y]
       (appendo x y q))) 100)

  (simple-benchmark
   []
   (run 10 [q]
     (fresh [x y]
       (let [f (l/fne
        [x y z]
        ([() _ y])
        ([[a . d] _ [a . r]]
           ( d y r)))]
         (f x y q)))) 10)

  )
