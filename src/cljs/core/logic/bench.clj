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


