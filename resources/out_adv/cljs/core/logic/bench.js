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
cljs.core.logic.bench.appendo = (function appendo(x,y,z){return (function (a130977){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus(cljs.core.logic._bind(a130977,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130492__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a__130492__auto____$1,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),y,z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a130977,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var a = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-1640531430,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null)));var d = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-1640531427,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null)));return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(a,d) : cljs.core.logic.lcons.call(null,a,d)),x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130492__auto____$1){return (new cljs.core.logic.Inc((function (){var r = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",-1640531413,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null)));return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto____$1,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(a,r) : cljs.core.logic.lcons.call(null,a,r)),z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
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
