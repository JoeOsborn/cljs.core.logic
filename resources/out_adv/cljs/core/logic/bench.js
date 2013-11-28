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
cljs.core.logic.bench.appendo = (function appendo(x,y,z){return (function (a53082){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus(cljs.core.logic._bind(a53082,(function (a__52604__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(cljs.core.logic._bind(a__52604__auto__,(function (a__52571__auto__){var has_cs_QMARK___52572__auto__ = (cljs.core.count(a__52571__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___52572__auto__)?(new cljs.core.logic.Substitutions(a__52571__auto__.s,cljs.core.PersistentVector.EMPTY,a__52571__auto__.ts,a__52571__auto__.cs,a__52571__auto__.cq,a__52571__auto__.cqs,a__52571__auto__.oc,a__52571__auto__._meta)):a__52571__auto__),cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__52573__auto__ = temp__4098__auto__;var vs__52574__auto__ = ((has_cs_QMARK___52572__auto__)?ap__52573__auto__.vs:null);var changed_QMARK___52575__auto__ = (cljs.core.count(vs__52574__auto__) > 0);if(changed_QMARK___52575__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__52574__auto__,ap__52573__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__52573__auto__.s,null,ap__52573__auto__.ts,ap__52573__auto__.cs,ap__52573__auto__.cq,ap__52573__auto__.cqs,ap__52573__auto__.oc,ap__52573__auto__._meta)));
} else
{return ap__52573__auto__;
}
} else
{return null;
}
})),(function (a__52604__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a__52604__auto____$1,(function (a__52571__auto__){var has_cs_QMARK___52572__auto__ = (cljs.core.count(a__52571__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___52572__auto__)?(new cljs.core.logic.Substitutions(a__52571__auto__.s,cljs.core.PersistentVector.EMPTY,a__52571__auto__.ts,a__52571__auto__.cs,a__52571__auto__.cq,a__52571__auto__.cqs,a__52571__auto__.oc,a__52571__auto__._meta)):a__52571__auto__),y,z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__52573__auto__ = temp__4098__auto__;var vs__52574__auto__ = ((has_cs_QMARK___52572__auto__)?ap__52573__auto__.vs:null);var changed_QMARK___52575__auto__ = (cljs.core.count(vs__52574__auto__) > 0);if(changed_QMARK___52575__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__52574__auto__,ap__52573__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__52573__auto__.s,null,ap__52573__auto__.ts,ap__52573__auto__.cs,ap__52573__auto__.cq,ap__52573__auto__.cqs,ap__52573__auto__.oc,ap__52573__auto__._meta)));
} else
{return ap__52573__auto__;
}
} else
{return null;
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a53082,(function (a__52604__auto__){return (new cljs.core.logic.Inc((function (){var a = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-1640531430,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null)));var d = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-1640531427,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null)));return cljs.core.logic._bind(cljs.core.logic._bind(a__52604__auto__,(function (a__52571__auto__){var has_cs_QMARK___52572__auto__ = (cljs.core.count(a__52571__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___52572__auto__)?(new cljs.core.logic.Substitutions(a__52571__auto__.s,cljs.core.PersistentVector.EMPTY,a__52571__auto__.ts,a__52571__auto__.cs,a__52571__auto__.cq,a__52571__auto__.cqs,a__52571__auto__.oc,a__52571__auto__._meta)):a__52571__auto__),(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(a,d) : cljs.core.logic.lcons.call(null,a,d)),x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__52573__auto__ = temp__4098__auto__;var vs__52574__auto__ = ((has_cs_QMARK___52572__auto__)?ap__52573__auto__.vs:null);var changed_QMARK___52575__auto__ = (cljs.core.count(vs__52574__auto__) > 0);if(changed_QMARK___52575__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__52574__auto__,ap__52573__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__52573__auto__.s,null,ap__52573__auto__.ts,ap__52573__auto__.cs,ap__52573__auto__.cq,ap__52573__auto__.cqs,ap__52573__auto__.oc,ap__52573__auto__._meta)));
} else
{return ap__52573__auto__;
}
} else
{return null;
}
})),(function (a__52604__auto____$1){return (new cljs.core.logic.Inc((function (){var r = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",-1640531413,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null)));return cljs.core.logic._bind(cljs.core.logic._bind(a__52604__auto____$1,(function (a__52571__auto__){var has_cs_QMARK___52572__auto__ = (cljs.core.count(a__52571__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___52572__auto__)?(new cljs.core.logic.Substitutions(a__52571__auto__.s,cljs.core.PersistentVector.EMPTY,a__52571__auto__.ts,a__52571__auto__.cs,a__52571__auto__.cq,a__52571__auto__.cqs,a__52571__auto__.oc,a__52571__auto__._meta)):a__52571__auto__),(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(a,r) : cljs.core.logic.lcons.call(null,a,r)),z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__52573__auto__ = temp__4098__auto__;var vs__52574__auto__ = ((has_cs_QMARK___52572__auto__)?ap__52573__auto__.vs:null);var changed_QMARK___52575__auto__ = (cljs.core.count(vs__52574__auto__) > 0);if(changed_QMARK___52575__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__52574__auto__,ap__52573__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__52573__auto__.s,null,ap__52573__auto__.ts,ap__52573__auto__.cs,ap__52573__auto__.cq,ap__52573__auto__.cqs,ap__52573__auto__.oc,ap__52573__auto__._meta)));
} else
{return ap__52573__auto__;
}
} else
{return null;
}
})),appendo(d,y,r));
})));
}));
})));
}));
}))));
})));
});
});
