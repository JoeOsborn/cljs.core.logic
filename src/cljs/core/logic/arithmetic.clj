(ns cljs.core.logic.arithmetic
  (:refer-clojure :exclude [== = > < >= <=]))

(defmacro = [x y]
  "Goal for testing whether x and y are equal. Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic.protocols/walk a# ~x)
           wy# (cljs.core.logic.protocols/walk a# ~y)]
       (if (cljs.core/= wx# wy#)
         a# nil))))

(defmacro > [x y]
  "Goal for testing whether x is greater than y. Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic.protocols/walk a# ~x)
           wy# (cljs.core.logic.protocols/walk a# ~y)]
       (if (cljs.core/> wx# wy#)
         a# nil))))

(defmacro >= [x y]
  "Goal for testing whether x is greater than or equal to y.
  Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic.protocols/walk a# ~x)
           wy# (cljs.core.logic.protocols/walk a# ~y)]
       (if (cljs.core/>= wx# wy#)
         a# nil))))

(defmacro < [x y]
  "Goal for testing whether x is less than y. Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic.protocols/walk a# ~x)
           wy# (cljs.core.logic.protocols/walk a# ~y)]
       (if (cljs.core/< wx# wy#)
         a# nil))))

(defmacro <= [x y]
  "Goal for testing whether x is less than or equal to y.
  Non-relational."
  `(fn [a#]
     (let [wx# (cljs.core.logic.protocols/walk a# ~x)
           wy# (cljs.core.logic.protocols/walk a# ~y)]
       (if (cljs.core/<= wx# wy#)
         a# nil))))
