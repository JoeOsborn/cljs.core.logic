(ns cljs.core.logic.pprint
  (:require [goog.string :as gstring])
  (:import [goog.string StringBuffer]))

(defprotocol IPrettyPrintWithWriter
  (-ppr-writer [object writer opts]))

(defn -pprint
  [objects writer]
  (pr-with-opts objects writer writer (assoc (pr-opts) :readably false)))

(defn pprint
  [& objects]
  (-pprint objects (StringBufferWriter. (StringBuffer.))))
