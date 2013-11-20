(defproject cljs.core.logic "0.1.0-SNAPSHOT"
  :description ""
  :url ""
  :license {:name ""
            :url ""}
  :dependencies [[org.clojure/clojure "1.6.0-alpha2"]
                 [org.clojure/clojurescript "0.0-2030"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [org.clojure/tools.namespace "0.2.4"]
                 [org.clojure/data.generators "0.1.2"]
                 [riddley "0.1.6"]]
  :source-paths ["dev" "src"]
  :jvm-opts ["-Xmx1g" "-server"]
  :plugins [[com.cemerick/austin "0.1.3"]
            [com.cemerick/clojurescript.test "0.2.1"]])
