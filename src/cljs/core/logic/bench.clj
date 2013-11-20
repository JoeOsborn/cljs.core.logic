(ns cljs.core.logic.bench
  (:require [cljs.compiler :as comp]
            [cljs.core :as core]
            [cljs.env :as env]
            [cljs.analyzer :as ana]
            [clojure.set :as set]
            [clojure.string :as string]
            [riddley.walk :refer [macroexpand-all walk-exprs]]
            [riddley.compiler :refer [locals]]
            [clojure.repl :refer [doc]]))

(defmacro simple-let
  [bindings & body]
  `((fn ~(->> (partition-all 2 bindings) (map first) (vec))
     ~@body)
    ~@(->> (partition-all 2 bindings) (map second))))

(def keyword-identical? identical?)

(defn unevaluated?
  [expr]
  (or (symbol? expr)
      (and (seq? expr)
           (not= (first expr) `quote))))

(defn literal?
  [x]
  (and (not (unevaluated? x))
       (or (not (or (vector? x) (map? x)))
           (every? literal? x))))

(defmacro some-identical?
  [v coll]
  (when (and (seq coll) (every? literal? coll))
    (let [coll (->> (interleave (repeat (count coll) v) coll)
                    (partition-all 2))]
      (cond (and (literal? v) (keyword? v))
            `(or ~@(map (fn [[val# item#]]
                          `(keyword-identical? ~val# ~item#)) coll))
            (literal? v)
            `(or ~@(map (fn [[val# item#]] `(identical? ~val# ~item#)) coll))
            :else
            `(or ~@(map (fn [[val# item#]]
                          (if (keyword? ~val#)
                            `(keyword-identical? ~val# ~item#)
                            `(identical? ~val# ~item#))) coll))))))

(comment
  )
