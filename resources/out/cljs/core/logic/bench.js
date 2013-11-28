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
cljs.core.logic.bench.appendo = (function appendo(x,y,z){return (function (a50090){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a50090,(function (a__49612__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__49612__auto__,(function (a__49579__auto__){var has_cs_QMARK___49580__auto__ = (cljs.core.count.call(null,a__49579__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___49580__auto__)?(new cljs.core.logic.Substitutions(a__49579__auto__.s,cljs.core.PersistentVector.EMPTY,a__49579__auto__.ts,a__49579__auto__.cs,a__49579__auto__.cq,a__49579__auto__.cqs,a__49579__auto__.oc,a__49579__auto__._meta)):a__49579__auto__),cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__49581__auto__ = temp__4098__auto__;var vs__49582__auto__ = ((has_cs_QMARK___49580__auto__)?ap__49581__auto__.vs:null);var changed_QMARK___49583__auto__ = (cljs.core.count.call(null,vs__49582__auto__) > 0);if(changed_QMARK___49583__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__49582__auto__,ap__49581__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__49581__auto__.s,null,ap__49581__auto__.ts,ap__49581__auto__.cs,ap__49581__auto__.cq,ap__49581__auto__.cqs,ap__49581__auto__.oc,ap__49581__auto__._meta)));
} else
{return ap__49581__auto__;
}
} else
{return null;
}
})),(function (a__49612__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__49612__auto____$1,(function (a__49579__auto__){var has_cs_QMARK___49580__auto__ = (cljs.core.count.call(null,a__49579__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___49580__auto__)?(new cljs.core.logic.Substitutions(a__49579__auto__.s,cljs.core.PersistentVector.EMPTY,a__49579__auto__.ts,a__49579__auto__.cs,a__49579__auto__.cq,a__49579__auto__.cqs,a__49579__auto__.oc,a__49579__auto__._meta)):a__49579__auto__),y,z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__49581__auto__ = temp__4098__auto__;var vs__49582__auto__ = ((has_cs_QMARK___49580__auto__)?ap__49581__auto__.vs:null);var changed_QMARK___49583__auto__ = (cljs.core.count.call(null,vs__49582__auto__) > 0);if(changed_QMARK___49583__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__49582__auto__,ap__49581__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__49581__auto__.s,null,ap__49581__auto__.ts,ap__49581__auto__.cs,ap__49581__auto__.cq,ap__49581__auto__.cqs,ap__49581__auto__.oc,ap__49581__auto__._meta)));
} else
{return ap__49581__auto__;
}
} else
{return null;
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a50090,(function (a__49612__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__49612__auto__,(function (a__49579__auto__){var has_cs_QMARK___49580__auto__ = (cljs.core.count.call(null,a__49579__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___49580__auto__)?(new cljs.core.logic.Substitutions(a__49579__auto__.s,cljs.core.PersistentVector.EMPTY,a__49579__auto__.ts,a__49579__auto__.cs,a__49579__auto__.cq,a__49579__auto__.cqs,a__49579__auto__.oc,a__49579__auto__._meta)):a__49579__auto__),cljs.core.logic.lcons.call(null,a,d),x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__49581__auto__ = temp__4098__auto__;var vs__49582__auto__ = ((has_cs_QMARK___49580__auto__)?ap__49581__auto__.vs:null);var changed_QMARK___49583__auto__ = (cljs.core.count.call(null,vs__49582__auto__) > 0);if(changed_QMARK___49583__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__49582__auto__,ap__49581__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__49581__auto__.s,null,ap__49581__auto__.ts,ap__49581__auto__.cs,ap__49581__auto__.cq,ap__49581__auto__.cqs,ap__49581__auto__.oc,ap__49581__auto__._meta)));
} else
{return ap__49581__auto__;
}
} else
{return null;
}
})),(function (a__49612__auto____$1){return (new cljs.core.logic.Inc((function (){var r = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__49612__auto____$1,(function (a__49579__auto__){var has_cs_QMARK___49580__auto__ = (cljs.core.count.call(null,a__49579__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___49580__auto__)?(new cljs.core.logic.Substitutions(a__49579__auto__.s,cljs.core.PersistentVector.EMPTY,a__49579__auto__.ts,a__49579__auto__.cs,a__49579__auto__.cq,a__49579__auto__.cqs,a__49579__auto__.oc,a__49579__auto__._meta)):a__49579__auto__),cljs.core.logic.lcons.call(null,a,r),z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__49581__auto__ = temp__4098__auto__;var vs__49582__auto__ = ((has_cs_QMARK___49580__auto__)?ap__49581__auto__.vs:null);var changed_QMARK___49583__auto__ = (cljs.core.count.call(null,vs__49582__auto__) > 0);if(changed_QMARK___49583__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__49582__auto__,ap__49581__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__49581__auto__.s,null,ap__49581__auto__.ts,ap__49581__auto__.cs,ap__49581__auto__.cq,ap__49581__auto__.cqs,ap__49581__auto__.oc,ap__49581__auto__._meta)));
} else
{return ap__49581__auto__;
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
