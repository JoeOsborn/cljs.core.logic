// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.dcg');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.dcg.__GT_lcons = (function() {
var __GT_lcons = null;
var __GT_lcons__3 = (function (env,p__53083,i){var vec__53087 = p__53083;var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087,0,null);var c = vec__53087;return __GT_lcons.cljs$core$IFn$_invoke$arity$4(env,c,i,false);
});
var __GT_lcons__4 = (function (env,p__53084,i,quoted){var vec__53088 = p__53084;var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53088,0,null);var c = vec__53088;if(cljs.core.empty_QMARK_(c))
{return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.dcg","fresh","cljs.core.logic.dcg/fresh",1129292213,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,16),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,20),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,16),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,25)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,16),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,26),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,16),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,28)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.dcg","==","cljs.core.logic.dcg/==",-1197280473,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,17),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,22),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,17),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,24)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,(env.cljs$core$IFn$_invoke$arity$1 ? env.cljs$core$IFn$_invoke$arity$1((i - 1)) : env.call(null,(i - 1)))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(env.cljs$core$IFn$_invoke$arity$1 ? env.cljs$core$IFn$_invoke$arity$1(i) : env.call(null,i)))], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,17),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,21),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,17),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,49)], 0))))))], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,16),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,19),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,17),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,50)], 0)))));
} else
{if(cljs.core.constant$keyword$76)
{var m__$1 = (cljs.core.truth_(quoted)?cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,18),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,34),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,18),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,39)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,m))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,18),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,33),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,18),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,43)], 0))))):m);return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.dcg","==","cljs.core.logic.dcg/==",-1197280473,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,19),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,17),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,19),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,19)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,(env.cljs$core$IFn$_invoke$arity$1 ? env.cljs$core$IFn$_invoke$arity$1((i - 1)) : env.call(null,(i - 1)))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.dcg","lcons","cljs.core.logic.dcg/lcons",1115832794,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,19),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,36),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,19),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,41)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,m__$1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(env.cljs$core$IFn$_invoke$arity$1 ? env.cljs$core$IFn$_invoke$arity$1(i) : env.call(null,i)))], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,19),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,35),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,19),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,54)], 0))))))], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,19),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,16),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,19),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,55)], 0)))));
} else
{return null;
}
}
});
__GT_lcons = function(env,p__53084,i,quoted){
switch(arguments.length){
case 3:
return __GT_lcons__3.call(this,env,p__53084,i);
case 4:
return __GT_lcons__4.call(this,env,p__53084,i,quoted);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_lcons.cljs$core$IFn$_invoke$arity$3 = __GT_lcons__3;
__GT_lcons.cljs$core$IFn$_invoke$arity$4 = __GT_lcons__4;
return __GT_lcons;
})()
;
cljs.core.logic.dcg.lsym = (function lsym(n){return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str("l"),cljs.core.str(n),cljs.core.str("_")].join(''));
});
cljs.core.logic.dcg._BANG_dcg_QMARK_ = (function _BANG_dcg_QMARK_(clause){var and__9617__auto__ = cljs.core.sequential_QMARK_(clause);if(and__9617__auto__)
{var f = cljs.core.first(clause);return ((f instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(f),"!dcg"));
} else
{return and__9617__auto__;
}
});
cljs.core.logic.dcg.fresh_expr_QMARK_ = (function fresh_expr_QMARK_(clause){var and__9617__auto__ = cljs.core.seq_QMARK_(clause);if(and__9617__auto__)
{var f = cljs.core.first(clause);return ((f instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(f),"fresh"));
} else
{return and__9617__auto__;
}
});
cljs.core.logic.dcg.mark_clauses = (function() {
var mark_clauses = null;
var mark_clauses__1 = (function (cs){return mark_clauses.cljs$core$IFn$_invoke$arity$2(cs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0));
});
var mark_clauses__2 = (function (p__53089,i){var vec__53091 = p__53089;var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53091,0,null);var r = cljs.core.nthnext(vec__53091,1);var cs = vec__53091;if((cljs.core.seq(cs) == null))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.logic.dcg.fresh_expr_QMARK_(c))
{return cljs.core.cons(cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.dcg","fresh","cljs.core.logic.dcg/fresh",1129292213,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,41),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,31),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,41),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,36)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.second(c)),cljs.core.array_seq([mark_clauses.cljs$core$IFn$_invoke$arity$2(cljs.core.drop(2,c),i)], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,41),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,30),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,42),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,62)], 0))))),mark_clauses.cljs$core$IFn$_invoke$arity$2(r,i));
} else
{if(cljs.core.logic.dcg._BANG_dcg_QMARK_(c))
{return cljs.core.cons(c,mark_clauses.cljs$core$IFn$_invoke$arity$2(r,i));
} else
{if(cljs.core.constant$keyword$76)
{return cljs.core.cons(cljs.core.with_meta(c,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$132,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.inc)], null)),mark_clauses.cljs$core$IFn$_invoke$arity$2(r,i));
} else
{return null;
}
}
}
}
});
mark_clauses = function(p__53089,i){
switch(arguments.length){
case 1:
return mark_clauses__1.call(this,p__53089);
case 2:
return mark_clauses__2.call(this,p__53089,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mark_clauses.cljs$core$IFn$_invoke$arity$1 = mark_clauses__1;
mark_clauses.cljs$core$IFn$_invoke$arity$2 = mark_clauses__2;
return mark_clauses;
})()
;
cljs.core.logic.dcg.handle_clauses = (function handle_clauses(env,p__53092){var vec__53094 = p__53092;var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53094,0,null);var r = cljs.core.nthnext(vec__53094,1);var cs = vec__53094;if((cljs.core.seq(cs) == null))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.logic.dcg.fresh_expr_QMARK_(c))
{return cljs.core.cons(cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.dcg","fresh","cljs.core.logic.dcg/fresh",1129292213,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,28),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,33)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.second(c)),cljs.core.array_seq([handle_clauses(env,cljs.core.drop(2,c))], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,27),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,53),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,63)], 0))))),handle_clauses(env,r));
} else
{if(cljs.core.logic.dcg._BANG_dcg_QMARK_(c))
{return cljs.core.cons(cljs.core.second(c),handle_clauses(env,r));
} else
{if(cljs.core.vector_QMARK_(c))
{return cljs.core.cons(cljs.core.logic.dcg.__GT_lcons.cljs$core$IFn$_invoke$arity$3(env,c,cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(c))),handle_clauses(env,r));
} else
{if((cljs.core.seq_QMARK_(c)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(c),cljs.core.with_meta(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,59),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,23),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,59),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,28)], 0))))))) && (cljs.core.vector_QMARK_(cljs.core.second(c))))
{return cljs.core.cons(cljs.core.logic.dcg.__GT_lcons.cljs$core$IFn$_invoke$arity$4(env,cljs.core.second(c),cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(c)),true),handle_clauses(env,r));
} else
{if(cljs.core.constant$keyword$76)
{var i = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(c));var c__$1 = ((cljs.core.seq_QMARK_(c))?c:cljs.core._conj(cljs.core.List.EMPTY,c));return cljs.core.cons(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(c__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(env.cljs$core$IFn$_invoke$arity$1 ? env.cljs$core$IFn$_invoke$arity$1((i - 1)) : env.call(null,(i - 1))),(env.cljs$core$IFn$_invoke$arity$1 ? env.cljs$core$IFn$_invoke$arity$1(i) : env.call(null,i))], null)),handle_clauses(env,r));
} else
{return null;
}
}
}
}
}
}
});
cljs.core.logic.dcg.handle_cclause = (function handle_cclause(fsym,osym,cclause){var c = (cljs.core.logic.dcg.count_clauses.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.dcg.count_clauses.cljs$core$IFn$_invoke$arity$1(cclause) : cljs.core.logic.dcg.count_clauses.call(null,cclause));var r = cljs.core.range.cljs$core$IFn$_invoke$arity$2(2,(c + 1));var lsyms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsym], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.dcg.lsym,r)),osym);var clauses = cljs.core.logic.dcg.mark_clauses.cljs$core$IFn$_invoke$arity$1(cclause);var clauses__$1 = cljs.core.logic.dcg.handle_clauses(lsyms,clauses);return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.dcg","fresh","cljs.core.logic.dcg/fresh",1129292213,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,73),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,7),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,73),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,12)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.butlast(cljs.core.rest(lsyms))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,73),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,13),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,73),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,39)], 0)))))),cljs.core.array_seq([clauses__$1], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,73),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,6),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,74),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,18)], 0)))));
});
