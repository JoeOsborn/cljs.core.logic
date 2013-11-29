// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.bench');
goog.require('cljs.core');
goog.require('cljs.core.logic.pldb');
goog.require('cljs.core.logic.pldb');
goog.require('cljs.core.logic.nominal');
goog.require('cljs.core.logic.nominal');
goog.require('cljs.core.logic.fd');
goog.require('cljs.core.logic.fd');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
/**
* A relation where x, y, and z are proper collections,
* such that z is x appended to y
*/
cljs.core.logic.bench.appendo = (function appendo(x,y,z){return (function (a127973){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a127973,(function (a__127488__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__127488__auto__,(function (a__127455__auto__){var has_cs_QMARK___127456__auto__ = (cljs.core.count.call(null,a__127455__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___127456__auto__)?(new cljs.core.logic.Substitutions(a__127455__auto__.s,cljs.core.PersistentVector.EMPTY,a__127455__auto__.ts,a__127455__auto__.cs,a__127455__auto__.cq,a__127455__auto__.cqs,a__127455__auto__.oc,a__127455__auto__._meta)):a__127455__auto__),cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__127457__auto__ = temp__4098__auto__;var vs__127458__auto__ = ((has_cs_QMARK___127456__auto__)?ap__127457__auto__.vs:null);var changed_QMARK___127459__auto__ = (cljs.core.count.call(null,vs__127458__auto__) > 0);if(changed_QMARK___127459__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__127458__auto__,ap__127457__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__127457__auto__.s,null,ap__127457__auto__.ts,ap__127457__auto__.cs,ap__127457__auto__.cq,ap__127457__auto__.cqs,ap__127457__auto__.oc,ap__127457__auto__._meta)));
} else
{return ap__127457__auto__;
}
} else
{return null;
}
})),(function (a__127488__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__127488__auto____$1,(function (a__127455__auto__){var has_cs_QMARK___127456__auto__ = (cljs.core.count.call(null,a__127455__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___127456__auto__)?(new cljs.core.logic.Substitutions(a__127455__auto__.s,cljs.core.PersistentVector.EMPTY,a__127455__auto__.ts,a__127455__auto__.cs,a__127455__auto__.cq,a__127455__auto__.cqs,a__127455__auto__.oc,a__127455__auto__._meta)):a__127455__auto__),y,z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__127457__auto__ = temp__4098__auto__;var vs__127458__auto__ = ((has_cs_QMARK___127456__auto__)?ap__127457__auto__.vs:null);var changed_QMARK___127459__auto__ = (cljs.core.count.call(null,vs__127458__auto__) > 0);if(changed_QMARK___127459__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__127458__auto__,ap__127457__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__127457__auto__.s,null,ap__127457__auto__.ts,ap__127457__auto__.cs,ap__127457__auto__.cq,ap__127457__auto__.cqs,ap__127457__auto__.oc,ap__127457__auto__._meta)));
} else
{return ap__127457__auto__;
}
} else
{return null;
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a127973,(function (a__127488__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__127488__auto__,(function (a__127455__auto__){var has_cs_QMARK___127456__auto__ = (cljs.core.count.call(null,a__127455__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___127456__auto__)?(new cljs.core.logic.Substitutions(a__127455__auto__.s,cljs.core.PersistentVector.EMPTY,a__127455__auto__.ts,a__127455__auto__.cs,a__127455__auto__.cq,a__127455__auto__.cqs,a__127455__auto__.oc,a__127455__auto__._meta)):a__127455__auto__),cljs.core.logic.lcons.call(null,a,d),x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__127457__auto__ = temp__4098__auto__;var vs__127458__auto__ = ((has_cs_QMARK___127456__auto__)?ap__127457__auto__.vs:null);var changed_QMARK___127459__auto__ = (cljs.core.count.call(null,vs__127458__auto__) > 0);if(changed_QMARK___127459__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__127458__auto__,ap__127457__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__127457__auto__.s,null,ap__127457__auto__.ts,ap__127457__auto__.cs,ap__127457__auto__.cq,ap__127457__auto__.cqs,ap__127457__auto__.oc,ap__127457__auto__._meta)));
} else
{return ap__127457__auto__;
}
} else
{return null;
}
})),(function (a__127488__auto____$1){return (new cljs.core.logic.Inc((function (){var r = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__127488__auto____$1,(function (a__127455__auto__){var has_cs_QMARK___127456__auto__ = (cljs.core.count.call(null,a__127455__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___127456__auto__)?(new cljs.core.logic.Substitutions(a__127455__auto__.s,cljs.core.PersistentVector.EMPTY,a__127455__auto__.ts,a__127455__auto__.cs,a__127455__auto__.cq,a__127455__auto__.cqs,a__127455__auto__.oc,a__127455__auto__._meta)):a__127455__auto__),cljs.core.logic.lcons.call(null,a,r),z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__127457__auto__ = temp__4098__auto__;var vs__127458__auto__ = ((has_cs_QMARK___127456__auto__)?ap__127457__auto__.vs:null);var changed_QMARK___127459__auto__ = (cljs.core.count.call(null,vs__127458__auto__) > 0);if(changed_QMARK___127459__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__127458__auto__,ap__127457__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__127457__auto__.s,null,ap__127457__auto__.ts,ap__127457__auto__.cs,ap__127457__auto__.cq,ap__127457__auto__.cqs,ap__127457__auto__.oc,ap__127457__auto__._meta)));
} else
{return ap__127457__auto__;
}
} else
{return null;
}
})),appendo.call(null,d,y,r));
})));
}));
})));
}));
}))));
})));
});
});
