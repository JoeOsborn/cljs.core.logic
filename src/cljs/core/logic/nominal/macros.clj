(ns cljs.core.logic.nominal.macros
  (:refer-clojure :exclude [==])
  (:require [cljs.compiler :as comp]
            [cljs.core :as core]
            [cljs.env :as env]
            [cljs.analyzer :as ana]
            [clojure.set :as set]
            [clojure.string :as string]
            [riddley.walk :refer [macroexpand-all walk-exprs]]
            [riddley.compiler :refer [locals]]
            [clojure.repl :refer [doc]]
            [cljs.core.logic.macros :as m])  
  (:import [java.io Writer]
           [java.util UUID]))

(defn- nom-bind [sym]
  ((juxt identity
         (fn [s] `(nom (cljs.core.logic/lvar '~s)))) sym))

(defn- nom-binds [syms]
  (mapcat nom-bind syms))

(defmacro fresh
  "Creates fresh noms. Goals occuring within form a logical conjunction."
  [[& noms] & goals]
  `(fn [a#]
     (cljs.core.logic.macros/-inc
      (let [~@(nom-binds noms)]
        (cljs.core.logic.macros/bind* a# ~@goals)))))
