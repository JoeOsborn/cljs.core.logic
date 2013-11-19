(ns cljs.core.logic.nominal
  (:require [cljs.core.logic]))

(defn- nom-bind [sym]
  ((juxt identity
         (fn [s] `(nom (cljs.core.logic/lvar '~s)))) sym))

(defn- nom-binds [syms]
  (mapcat nom-bind syms))

(defmacro fresh
  "Creates fresh noms. Goals occuring within form a logical conjunction."
  [[& noms] & goals]
  `(fn [a#]
     (cljs.core.logic/-inc
      (let [~@(nom-binds noms)]
        (cljs.core.logic/bind* a# ~@goals)))))

