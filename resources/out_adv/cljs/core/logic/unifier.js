// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.unifier');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.unifier.lvarq_sym_QMARK_ = (function lvarq_sym_QMARK_(s){return ((s instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first([cljs.core.str(s)].join('')),"?"));
});
cljs.core.logic.unifier.proc_lvar = (function proc_lvar(lvar_expr,store){var v = (function (){var temp__4096__auto__ = cljs.core.deref(store).call(null,lvar_expr);if(cljs.core.truth_(temp__4096__auto__))
{var u = temp__4096__auto__;return u;
} else
{return (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2(lvar_expr,false) : cljs.core.logic.lvar.call(null,lvar_expr,false));
}
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(store,cljs.core.assoc,lvar_expr,v);
return v;
});
cljs.core.logic.unifier.lcons_expr_QMARK_ = (function lcons_expr_QMARK_(expr){var and__9611__auto__ = cljs.core.seq_QMARK_(expr);if(and__9611__auto__)
{return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,".",".",-1640531481,null),null], null), null),cljs.core.set(expr));
} else
{return and__9611__auto__;
}
});
cljs.core.logic.unifier.replace_lvar = (function replace_lvar(store){return (function (expr){if(cljs.core.logic.unifier.lvarq_sym_QMARK_(expr))
{return cljs.core.logic.unifier.proc_lvar(expr,store);
} else
{if(cljs.core.truth_(cljs.core.logic.unifier.lcons_expr_QMARK_(expr)))
{return (cljs.core.logic.unifier.prep_STAR_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.unifier.prep_STAR_.cljs$core$IFn$_invoke$arity$2(expr,store) : cljs.core.logic.unifier.prep_STAR_.call(null,expr,store));
} else
{return expr;
}
}
});
});
cljs.core.logic.unifier.prep_STAR_ = (function() {
var prep_STAR_ = null;
var prep_STAR___2 = (function (expr,store){return prep_STAR_.cljs$core$IFn$_invoke$arity$4(expr,store,false,false);
});
var prep_STAR___3 = (function (expr,store,lcons_QMARK_){return prep_STAR_.cljs$core$IFn$_invoke$arity$4(expr,store,lcons_QMARK_,false);
});
var prep_STAR___4 = (function (expr,store,lcons_QMARK_,last_QMARK_){var expr__$1 = (cljs.core.truth_((function (){var and__9611__auto__ = last_QMARK_;if(cljs.core.truth_(and__9611__auto__))
{return cljs.core.seq(expr);
} else
{return and__9611__auto__;
}
})())?cljs.core.first(expr):expr);if(cljs.core.logic.unifier.lvarq_sym_QMARK_(expr__$1))
{return cljs.core.logic.unifier.proc_lvar(expr__$1,store);
} else
{if(cljs.core.seq_QMARK_(expr__$1))
{if(cljs.core.truth_((function (){var or__9623__auto__ = lcons_QMARK_;if(cljs.core.truth_(or__9623__auto__))
{return or__9623__auto__;
} else
{return cljs.core.logic.unifier.lcons_expr_QMARK_(expr__$1);
}
})()))
{var vec__34940 = expr__$1;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940,0,null);var n = cljs.core.nthnext(vec__34940,1);var skip = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Symbol(null,".",".",-1640531481,null));var tail = prep_STAR_.cljs$core$IFn$_invoke$arity$4(n,store,lcons_QMARK_,skip);if(skip)
{return tail;
} else
{return (cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(prep_STAR_.cljs$core$IFn$_invoke$arity$2(f,store),tail) : cljs.core.logic.lcons.call(null,prep_STAR_.cljs$core$IFn$_invoke$arity$2(f,store),tail));
}
} else
{return cljs.core.logic._walk_term(expr__$1,cljs.core.logic.unifier.replace_lvar(store));
}
} else
{if(cljs.core.constant$keyword$76)
{return expr__$1;
} else
{return null;
}
}
}
});
prep_STAR_ = function(expr,store,lcons_QMARK_,last_QMARK_){
switch(arguments.length){
case 2:
return prep_STAR___2.call(this,expr,store);
case 3:
return prep_STAR___3.call(this,expr,store,lcons_QMARK_);
case 4:
return prep_STAR___4.call(this,expr,store,lcons_QMARK_,last_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prep_STAR_.cljs$core$IFn$_invoke$arity$2 = prep_STAR___2;
prep_STAR_.cljs$core$IFn$_invoke$arity$3 = prep_STAR___3;
prep_STAR_.cljs$core$IFn$_invoke$arity$4 = prep_STAR___4;
return prep_STAR_;
})()
;
/**
* Prep a quoted expression. All symbols preceded by ? will
* be replaced with logic vars.
*/
cljs.core.logic.unifier.prep = (function prep(expr){var lvars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prepped = ((cljs.core.logic.unifier.lvarq_sym_QMARK_(expr))?cljs.core.logic.unifier.proc_lvar(expr,lvars):(cljs.core.truth_(cljs.core.logic.unifier.lcons_expr_QMARK_(expr))?cljs.core.logic.unifier.prep_STAR_.cljs$core$IFn$_invoke$arity$3(expr,lvars,true):((cljs.core.constant$keyword$76)?cljs.core.logic._walk_term(expr,cljs.core.logic.unifier.replace_lvar(lvars)):null)));if((function (){var G__34942 = prepped;if(G__34942)
{var bit__10249__auto__ = (G__34942.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__10249__auto__) || (G__34942.cljs$core$IMeta$))
{return true;
} else
{if((!G__34942.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__34942);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__34942);
}
})())
{return cljs.core.with_meta(prepped,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,cljs.core.keys(cljs.core.deref(lvars))], null));
} else
{return prepped;
}
});
cljs.core.logic.unifier.queue_constraint = (function queue_constraint(s,c,vs){if(cljs.core.vector_QMARK_(vs))
{return cljs.core.logic._queue(s,cljs.core.logic._unwrap(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(c,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34943_SHARP_){return (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2(p1__34943_SHARP_,false) : cljs.core.logic.lvar.call(null,p1__34943_SHARP_,false));
}),vs))));
} else
{if(cljs.core.set_QMARK_(vs))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,v){return cljs.core.logic._queue(s__$1,cljs.core.logic._unwrap((c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1((cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2(v,false) : cljs.core.logic.lvar.call(null,v,false))) : c.call(null,(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2(v,false) : cljs.core.logic.lvar.call(null,v,false))))));
}),s,vs);
} else
{if((vs instanceof cljs.core.Symbol))
{return cljs.core.logic._queue(s,cljs.core.logic._unwrap(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(c,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34944_SHARP_){return (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2(p1__34944_SHARP_,false) : cljs.core.logic.lvar.call(null,p1__34944_SHARP_,false));
}),cljs.core._conj(cljs.core.List.EMPTY,vs)))));
} else
{if(cljs.core.constant$keyword$76)
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Only symbol, set of symbols, or vector of symbols allowed "),cljs.core.str("on left hand side")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
});
cljs.core.logic.unifier.queue_constraints = (function queue_constraints(s,p__34945){var vec__34947 = p__34945;var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947,0,null);var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947,1,null);var cs__$1 = ((!(cljs.core.sequential_QMARK_(cs)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null):cs);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){return cljs.core.logic.unifier.queue_constraint(s__$1,c,vs);
}),s,cs__$1);
});
cljs.core.logic.unifier._unify_STAR_ = (function _unify_STAR_(init_s,u,w){return cljs.core.first(cljs.core.logic.take_STAR_((function (){return (function (a__33997__auto__){return (new cljs.core.logic.Inc((function (){var q = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"q","q",-1640531414,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1640531414,null)));return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__33997__auto__,(function (a__33964__auto__){var has_cs_QMARK___33965__auto__ = (cljs.core.count(a__33964__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___33965__auto__)?(new cljs.core.logic.Substitutions(a__33964__auto__.s,cljs.core.PersistentVector.EMPTY,a__33964__auto__.ts,a__33964__auto__.cs,a__33964__auto__.cq,a__33964__auto__.cqs,a__33964__auto__.oc,a__33964__auto__._meta)):a__33964__auto__),u,w);if(cljs.core.truth_(temp__4098__auto__))
{var ap__33966__auto__ = temp__4098__auto__;var vs__33967__auto__ = ((has_cs_QMARK___33965__auto__)?ap__33966__auto__.vs:null);var changed_QMARK___33968__auto__ = (cljs.core.count(vs__33967__auto__) > 0);if(changed_QMARK___33968__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__33967__auto__,ap__33966__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__33966__auto__.s,null,ap__33966__auto__.ts,ap__33966__auto__.cs,ap__33966__auto__.cq,ap__33966__auto__.cqs,ap__33966__auto__.oc,ap__33966__auto__._meta)));
} else
{return ap__33966__auto__;
}
} else
{return null;
}
})),(function (a__33964__auto__){var has_cs_QMARK___33965__auto__ = (cljs.core.count(a__33964__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___33965__auto__)?(new cljs.core.logic.Substitutions(a__33964__auto__.s,cljs.core.PersistentVector.EMPTY,a__33964__auto__.ts,a__33964__auto__.cs,a__33964__auto__.cq,a__33964__auto__.cqs,a__33964__auto__.oc,a__33964__auto__._meta)):a__33964__auto__),q,u);if(cljs.core.truth_(temp__4098__auto__))
{var ap__33966__auto__ = temp__4098__auto__;var vs__33967__auto__ = ((has_cs_QMARK___33965__auto__)?ap__33966__auto__.vs:null);var changed_QMARK___33968__auto__ = (cljs.core.count(vs__33967__auto__) > 0);if(changed_QMARK___33968__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__33967__auto__,ap__33966__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__33966__auto__.s,null,ap__33966__auto__.ts,ap__33966__auto__.cs,ap__33966__auto__.cq,ap__33966__auto__.cqs,ap__33966__auto__.oc,ap__33966__auto__._meta)));
} else
{return ap__33966__auto__;
}
} else
{return null;
}
})),(function (a){return cljs.core.logic.fix_constraints(a);
})),cljs.core.logic.reifyg(q));
})));
}).call(null,init_s);
})));
});
cljs.core.logic.unifier.init_s = (function init_s(opts,s){var s__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34950){var vec__34951 = p__34950;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951,1,null);return ((function (vec__34951,k,v){
return (function (a__33964__auto__){var has_cs_QMARK___33965__auto__ = (cljs.core.count(a__33964__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___33965__auto__)?(new cljs.core.logic.Substitutions(a__33964__auto__.s,cljs.core.PersistentVector.EMPTY,a__33964__auto__.ts,a__33964__auto__.cs,a__33964__auto__.cq,a__33964__auto__.cqs,a__33964__auto__.oc,a__33964__auto__._meta)):a__33964__auto__),k,v);if(cljs.core.truth_(temp__4098__auto__))
{var ap__33966__auto__ = temp__4098__auto__;var vs__33967__auto__ = ((has_cs_QMARK___33965__auto__)?ap__33966__auto__.vs:null);var changed_QMARK___33968__auto__ = (cljs.core.count(vs__33967__auto__) > 0);if(changed_QMARK___33968__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__33967__auto__,ap__33966__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__33966__auto__.s,null,ap__33966__auto__.ts,ap__33966__auto__.cs,ap__33966__auto__.cq,ap__33966__auto__.cqs,ap__33966__auto__.oc,ap__33966__auto__._meta)));
} else
{return ap__33966__auto__;
}
} else
{return null;
}
});})(vec__34951,k,v))
.call(null,s__$1);
}),s,cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(opts));return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.logic.unifier.queue_constraints,cljs.core.with_meta(s__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$108,(function (v,rs){return rs;
})], null)),cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1(opts));
});
/**
* Unify the terms ts.
*/
cljs.core.logic.unifier.unify_STAR_ = (function() {
var unify_STAR_ = null;
var unify_STAR___1 = (function (ts){return unify_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,ts);
});
var unify_STAR___2 = (function (opts,ts){var init_s = cljs.core.logic.unifier.init_s(opts,cljs.core.logic.empty_s);return cljs.core.logic.unifier._unify_STAR_(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$variadic(init_s,cljs.core.assoc,cljs.core.array_seq([cljs.core.constant$keyword$108,false], 0)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__34952_SHARP_,p2__34953_SHARP_){return cljs.core.logic.unifier._unify_STAR_(init_s,p1__34952_SHARP_,p2__34953_SHARP_);
}),cljs.core.butlast(ts)),cljs.core.last(ts));
});
unify_STAR_ = function(opts,ts){
switch(arguments.length){
case 1:
return unify_STAR___1.call(this,opts);
case 2:
return unify_STAR___2.call(this,opts,ts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unify_STAR_.cljs$core$IFn$_invoke$arity$1 = unify_STAR___1;
unify_STAR_.cljs$core$IFn$_invoke$arity$2 = unify_STAR___2;
return unify_STAR_;
})()
;
/**
* Return the unifier that unifies terms ts.
* All terms in ts should prepped terms.
*/
cljs.core.logic.unifier.unifier_STAR_ = (function() {
var unifier_STAR_ = null;
var unifier_STAR___1 = (function (ts){return unifier_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,ts);
});
var unifier_STAR___2 = (function (opts,ts){var _unifier_STAR_ = (function _unifier_STAR_(s,u,w){var s__$1 = cljs.core.logic.fix_constraints(cljs.core.logic._unify(cljs.core.with_meta(s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$108,false], null)),u,w));if(cljs.core.truth_(s__$1))
{return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34968){var vec__34969 = p__34968;var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969,0,null);var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.logic._reify.cljs$core$IFn$_invoke$arity$2(s__$1,var$)], null);
}),cljs.core.filter((function (p__34970){var vec__34971 = p__34970;var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971,0,null);var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34971,1,null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic._walk(s__$1,var$),var$);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sym){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2(sym,false) : cljs.core.logic.lvar.call(null,sym,false))], null);
}),cljs.core.constant$keyword$140.cljs$core$IFn$_invoke$arity$1(opts)))));
} else
{return null;
}
});
var init_s = cljs.core.logic.unifier.init_s(opts,cljs.core.logic.empty_s);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__34954_SHARP_,p2__34955_SHARP_){return (_unifier_STAR_.cljs$core$IFn$_invoke$arity$3 ? _unifier_STAR_.cljs$core$IFn$_invoke$arity$3(init_s,p1__34954_SHARP_,p2__34955_SHARP_) : _unifier_STAR_.call(null,init_s,p1__34954_SHARP_,p2__34955_SHARP_));
}),ts);
});
unifier_STAR_ = function(opts,ts){
switch(arguments.length){
case 1:
return unifier_STAR___1.call(this,opts);
case 2:
return unifier_STAR___2.call(this,opts,ts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unifier_STAR_.cljs$core$IFn$_invoke$arity$1 = unifier_STAR___1;
unifier_STAR_.cljs$core$IFn$_invoke$arity$2 = unifier_STAR___2;
return unifier_STAR_;
})()
;
/**
* Unify the terms ts returning a the value that represents their
* unificaiton. Will prep the terms.
*/
cljs.core.logic.unifier.unify = (function() {
var unify = null;
var unify__1 = (function (ts){return unify.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,ts);
});
var unify__2 = (function (opts,ts){var opts__$1 = ((cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$138))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$138,cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34974){var vec__34975 = p__34974;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2(k,false) : cljs.core.logic.lvar.call(null,k,false)),cljs.core.logic.unifier.prep(v)], null);
}),cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(opts)))):opts);return cljs.core.logic.unifier.unify_STAR_.cljs$core$IFn$_invoke$arity$2(opts__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.unifier.prep,ts));
});
unify = function(opts,ts){
switch(arguments.length){
case 1:
return unify__1.call(this,opts);
case 2:
return unify__2.call(this,opts,ts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unify.cljs$core$IFn$_invoke$arity$1 = unify__1;
unify.cljs$core$IFn$_invoke$arity$2 = unify__2;
return unify;
})()
;
/**
* Return the unifier for terms ts. Will prep the terms.
*/
cljs.core.logic.unifier.unifier = (function() {
var unifier = null;
var unifier__1 = (function (ts){return unifier.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,ts);
});
var unifier__2 = (function (opts,ts){var opts__$1 = ((cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$138))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$138,cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34979){var vec__34980 = p__34979;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$2(k,false) : cljs.core.logic.lvar.call(null,k,false)),cljs.core.logic.unifier.prep(v)], null);
}),cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(opts)))):opts);var ts_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.unifier.prep,ts);var lvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (opts__$1,ts_SINGLEQUOTE_){
return (function (p1__34976_SHARP_){return cljs.core.constant$keyword$137.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__34976_SHARP_));
});})(opts__$1,ts_SINGLEQUOTE_))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ts_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(opts__$1)))));return cljs.core.logic.unifier.unifier_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.constant$keyword$140,lvars),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.unifier.prep,ts));
});
unifier = function(opts,ts){
switch(arguments.length){
case 1:
return unifier__1.call(this,opts);
case 2:
return unifier__2.call(this,opts,ts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unifier.cljs$core$IFn$_invoke$arity$1 = unifier__1;
unifier.cljs$core$IFn$_invoke$arity$2 = unifier__2;
return unifier;
})()
;