(ns cljs.core.logic.fd
  (:require [cljs.compiler :as comp]
            [cljs.core :as core]
            [cljs.analyzer :as ana]
            [cljs.core.logic :refer :all])
  (:import [java.util UUID]))

(defmacro extend-to-fd [t]
  `(extend-type ~t
     cljs.core.logic.protocols/IMemberCount
     (~'-member-count [this#] 1)

     cljs.core.logic.fd/IInterval
     (~'-lb [this#] this#)
     (~'-ub [this#] this#)

     cljs.core.logic.fd/ISortedDomain
     (~'-drop-one [this#]
       nil)
     (~'-drop-before [this# n#]
       (when (clojure.core/>= this# n#)
         this#))
     (~'-keep-before [this# n#]
       (when (clojure.core/< this# n#)
         this#))

     cljs.core.logic.fd/ISet
     (~'-member? [this# that#]
       (if (integer? that#)
         (= this# that#)
         (-member? that# this#)))
     (~'-disjoint? [this# that#]
       (if (integer? that#)
         (not= this# that#)
         (-disjoint? that# this#)))
     (~'-intersection [this# that#]
       (cond
        (integer? that#) (when (= this# that#)
                           this#)
        (interval? that#) (-intersection that# this#)
        :else (intersection* this# that#)))
     (~'-difference [this# that#]
       (cond
        (integer? that#) (if (= this# that#)
                           nil
                           this#)
        (interval? that#) (-difference that# this#)
        :else (difference* this# that#)))

     cljs.core.logic.fd/IIntervals
     (~'-intervals [this#]
       (list this#))))

(defmacro in
  "Assign vars to domain. The domain must come last."
  [& xs-and-dom]
  (let [xs (butlast xs-and-dom)
        dom (last xs-and-dom)
        domsym (gensym "dom_")]
    `(let [~domsym ~dom]
       (fresh []
         ~@(map (fn [x#]
                  `(dom ~x# ~domsym))
                xs)))))

(def binops->fd
  '{+  cljs.core.logic.fd/+
    -  cljs.core.logic.fd/-
    *  cljs.core.logic.fd/*
    /  cljs.core.logic.fd/quot
    =  cljs.core.logic.fd/==
    != cljs.core.logic.fd/!=
    <= cljs.core.logic.fd/<=
    <  cljs.core.logic.fd/<
    >= cljs.core.logic.fd/>=
    >  cljs.core.logic.fd/>})

(def binops (set (keys binops->fd)))

(defn expand [form]
  (if (seq? form)
    (let [[op & args] form]
      (if (and (binops op) (> (count args) 2))
        (list op (expand (first args))
              (expand (cons op (rest args))))
        (cons op (map expand args))))
    form))

(defn eq*
  ([form vars] (eq* form vars nil))
  ([form vars out]
     (if (seq? form)
       (let [[op r1 r2] form
             [outl outlv?] (if (seq? r1)
                             (let [s (gensym)]
                               (swap! vars conj s)
                               [s true])
                             [r1 false])
             [outr outrv?] (if (seq? r2)
                             (let [s (gensym)]
                               (swap! vars conj s)
                               [s true])
                             [r2 false])
             op (binops->fd op)]
         (cons (if out
                 (list op outl outr out)
                 (list op outl outr))
               (concat (when (seq? r1)
                         (eq* r1 vars (when outlv? outl)))
                       (when (seq? r2)
                         (eq* r2 vars (when outrv? outr))))))
       form)))

(defn ->fd [vars exprs]
  `(fresh [~@vars]
     ~@(reverse exprs)))

(defn eq-form [form]
  (let [vars (atom [])
        exprs (eq* (expand form) vars)]
    (->fd @vars exprs)))

(defmacro eq [& forms]
  `(all
    ~@(map eq-form forms)))

