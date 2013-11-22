(ns cljs.core.logic.nominal.macros
  (:require [cljs.core.logic.macros :as m]))

(defn- nom-bind [sym]
  ((juxt identity
         (fn [s] `(cljs.core.logic.nominal/nom
                   (cljs.core.logic/lvar '~s)))) sym))

(defn- nom-binds [syms]
  (mapcat nom-bind syms))

(defmacro fresh
  "Creates fresh noms. Goals occuring within form a logical conjunction."
  [[& noms] & goals]
  `(fn [a#]
     (cljs.core.logic.macros/-inc
      (let [~@(nom-binds noms)]
        (cljs.core.logic.macros/bind* a# ~@goals)))))
