(ns cljs.core.logic.test-runner
  (:require [cemerick.cljs.test :as t])
  (:require-macros [cemerick.cljs.test
                    :refer [deftest run-tests is testing]]))

(t/test-ns 'cljs.core.logic.test)
(t/test-ns 'cljs.core.logic.test-extras)
(t/test-ns 'cljs.core.logic.nominal.tests)
(t/test-ns 'cljs.core.logic.pldb.tests)
