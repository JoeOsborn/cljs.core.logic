(ns cljs.core.logic.bench
  (:require [cljs.compiler :as comp]
            [cljs.core :as core]
            [cljs.env :as env]
            [cljs.analyzer :as ana]
            [clojure.set :as set]
            [clojure.string :as string]
            [riddley.walk :refer [macroexpand-all walk-exprs]]
            [clojure.tools.reader :as reader]
            [clojure.math.combinatorics :as math]
            [clojure.core.async :as a
             :refer [go go-loop <! take! put! >! chan]]
            [riddley.compiler :refer [locals]]
            [clojure.core.reducers :as r]
            [clojure.data.generators :as gen]
            [clojure.pprint :refer [pprint]]
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
                          (if (keyword? val#)
                            `(keyword-identical? ~val# ~item#)
                            `(identical? ~val# ~item#))) coll))))))

(comment
  (let [rand-coll (doall (gen/collection))
        rand-val (gen/rand-nth (vec rand-coll))]
    (time (dotimes [i 100000]
            (some-identical? rand-val rand-coll)))
    (time (dotimes [i 100000]
            (some-identical? i rand-coll))))
  )

(defmacro our-let
  [bindings & body]
  `((fn ~(->> (partition-all 2 bindings) (map first) vec)
      ~@body)
    ~@(->> (partition-all 2 bindings) (map second))))

(defmacro when-bind
  [name expr & body]
  `(let [~name ~expr]
     (when ~name
       ~@body)))

(defmacro when-bind*
  [bindings & body]
  (if-not (seq bindings)
    `(do ~@body)
    `(let ~(vec (first (partition 2 bindings)))
       (when ~(ffirst (partition 2 bindings))
         (when-bind* ~(rest (partition 2 bindings)) ~@body)))))

(defmacro with-gensyms
  [syms & body]
  `(let ~(vec (map (fn [s#] `(~s# (gensym))) syms))
     ~@body))

(defn condlet-binds
  [syms bindings]
  (reduce (fn [bindings [k v :as binding-form]]
            (vec (concat bindings [(get syms k) v])))
          [] bindings))

(defn condlet-clause
  [syms clause bodyfn]
  `(~(first clause)
    (let [~@(interleave (vals syms) (repeat (count syms) nil))]
      (let [~@(condlet-binds syms (->> (rest clause)
                                       (apply concat)
                                       (partition 2)))]
        (~bodyfn ~@(vals syms))))))

(defn unique-bindings
  [bindings]
  (->> (apply concat bindings)
       (partition 2)
       (map first)
       (set)))

(defmacro condlet
  [clauses & body]
  (let [bodyfn (gensym)
        clauses (partition-all 2 clauses)
        syms (reduce (fn [m v] (assoc m v (gensym)))
                     {} (unique-bindings (mapcat rest clauses)))]
    `(letfn [(~bodyfn [~@(keys syms)] ~@body)]
       (cond ~@(apply concat
                      (map (fn [clause#]
                             (condlet-clause syms clause# bodyfn))
                           clauses))))))

(defmacro if3
  [test t-case nil-case ?-case]
  `(condp ~test =
     nil nil-case
     true t-case
     false nil-case
     ?-case))

(defmacro nif
  [expr pos zero neg]
  (let [g (gensym)]
    `(let [~g ~expr]
       (cond (pos? ~g) ~pos
             (zero? ~g) ~zero
             :else ~neg))))

(defmacro prog1
  [form & forms]
  `(let [val# ~form]
     ~@forms
     val#))

(defmacro prog2
  [fform sform & forms]
  `(do ~fform (prog1 ~sform ~@forms)))

