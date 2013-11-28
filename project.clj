(defproject cljs.core.logic "0.1.0-SNAPSHOT"
  :description ""
  :url ""
  :license {:name ""
            :url ""}
  :dependencies [[org.clojure/clojure "1.6.0-alpha3"]
                 [org.clojure/clojurescript "0.0-2080"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [org.clojure/tools.namespace "0.2.4"]
                 [org.clojure/data.generators "0.1.2"]
                 [org.clojure/math.combinatorics "0.0.7"]
                 [org.clojure/tools.reader "0.8.0"]
                 [ring "1.2.0"]
                 [compojure "1.1.6"]
                 [enlive "1.1.4"]
                 [prismatic/dommy "0.1.2"]
                 [riddley "0.1.6"]]
  :source-paths ["dev" "src"]
  :jvm-opts ["-Xmx1g" "-server"]
  :plugins [[com.cemerick/austin "0.1.3"]
            [com.cemerick/clojurescript.test "0.2.1"]
            [lein-cljsbuild "1.0.1-SNAPSHOT"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler {:output-to "resources/main.js"
                                   :output-dir "resources/out"
                                   :source-map "resources/main.js.map"
                                   :optimizations :simple
                                   :pretty-print true}}
                       {:source-paths ["src"]
                        :compiler {:output-to "resources/adv.js"
                                   :output-dir "resources/out_adv"
                                   :source-map "resources/adv.js.map"
                                   :optimizations :advanced
                                   :pretty-print true}}]})
