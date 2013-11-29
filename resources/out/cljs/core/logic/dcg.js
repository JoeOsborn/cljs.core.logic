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
var __GT_lcons__3 = (function (env,p__127974,i){var vec__127978 = p__127974;var m = cljs.core.nth.call(null,vec__127978,0,null);var c = vec__127978;return __GT_lcons.call(null,env,c,i,false);
});
var __GT_lcons__4 = (function (env,p__127975,i,quoted){var vec__127979 = p__127975;var m = cljs.core.nth.call(null,vec__127979,0,null);var c = vec__127979;if(cljs.core.empty_QMARK_.call(null,c))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.dcg","fresh","cljs.core.logic.dcg/fresh",1129292213,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,25)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,28)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.dcg","==","cljs.core.logic.dcg/==",-1197280473,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,22),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,24)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,env.call(null,(i - 1))),cljs.core._conj.call(null,cljs.core.List.EMPTY,env.call(null,i)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,50)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var m__$1 = (cljs.core.truth_(quoted)?cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,m))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,33),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,43))))):m);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.dcg","==","cljs.core.logic.dcg/==",-1197280473,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,env.call(null,(i - 1))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.dcg","lcons","cljs.core.logic.dcg/lcons",1115832794,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,36),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,m__$1),cljs.core._conj.call(null,cljs.core.List.EMPTY,env.call(null,i)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,35),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55)))));
} else
{return null;
}
}
});
__GT_lcons = function(env,p__127975,i,quoted){
switch(arguments.length){
case 3:
return __GT_lcons__3.call(this,env,p__127975,i);
case 4:
return __GT_lcons__4.call(this,env,p__127975,i,quoted);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_lcons.cljs$core$IFn$_invoke$arity$3 = __GT_lcons__3;
__GT_lcons.cljs$core$IFn$_invoke$arity$4 = __GT_lcons__4;
return __GT_lcons;
})()
;
cljs.core.logic.dcg.lsym = (function lsym(n){return cljs.core.gensym.call(null,[cljs.core.str("l"),cljs.core.str(n),cljs.core.str("_")].join(''));
});
cljs.core.logic.dcg._BANG_dcg_QMARK_ = (function _BANG_dcg_QMARK_(clause){var and__9617__auto__ = cljs.core.sequential_QMARK_.call(null,clause);if(and__9617__auto__)
{var f = cljs.core.first.call(null,clause);return ((f instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.name.call(null,f),"!dcg"));
} else
{return and__9617__auto__;
}
});
cljs.core.logic.dcg.fresh_expr_QMARK_ = (function fresh_expr_QMARK_(clause){var and__9617__auto__ = cljs.core.seq_QMARK_.call(null,clause);if(and__9617__auto__)
{var f = cljs.core.first.call(null,clause);return ((f instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.name.call(null,f),"fresh"));
} else
{return and__9617__auto__;
}
});
cljs.core.logic.dcg.mark_clauses = (function() {
var mark_clauses = null;
var mark_clauses__1 = (function (cs){return mark_clauses.call(null,cs,cljs.core.atom.call(null,0));
});
var mark_clauses__2 = (function (p__127980,i){var vec__127982 = p__127980;var c = cljs.core.nth.call(null,vec__127982,0,null);var r = cljs.core.nthnext.call(null,vec__127982,1);var cs = vec__127982;if((cljs.core.seq.call(null,cs) == null))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.logic.dcg.fresh_expr_QMARK_.call(null,c))
{return cljs.core.cons.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.dcg","fresh","cljs.core.logic.dcg/fresh",1129292213,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,31),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,36)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,c)),mark_clauses.call(null,cljs.core.drop.call(null,2,c),i))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,30),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,42),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,62))))),mark_clauses.call(null,r,i));
} else
{if(cljs.core.logic.dcg._BANG_dcg_QMARK_.call(null,c))
{return cljs.core.cons.call(null,c,mark_clauses.call(null,r,i));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.cons.call(null,cljs.core.with_meta.call(null,c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",1114250308),cljs.core.swap_BANG_.call(null,i,cljs.core.inc)], null)),mark_clauses.call(null,r,i));
} else
{return null;
}
}
}
}
});
mark_clauses = function(p__127980,i){
switch(arguments.length){
case 1:
return mark_clauses__1.call(this,p__127980);
case 2:
return mark_clauses__2.call(this,p__127980,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mark_clauses.cljs$core$IFn$_invoke$arity$1 = mark_clauses__1;
mark_clauses.cljs$core$IFn$_invoke$arity$2 = mark_clauses__2;
return mark_clauses;
})()
;
cljs.core.logic.dcg.handle_clauses = (function handle_clauses(env,p__127983){var vec__127985 = p__127983;var c = cljs.core.nth.call(null,vec__127985,0,null);var r = cljs.core.nthnext.call(null,vec__127985,1);var cs = vec__127985;if((cljs.core.seq.call(null,cs) == null))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.logic.dcg.fresh_expr_QMARK_.call(null,c))
{return cljs.core.cons.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.dcg","fresh","cljs.core.logic.dcg/fresh",1129292213,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,28),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,33)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,c)),handle_clauses.call(null,env,cljs.core.drop.call(null,2,c)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,27),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,53),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,63))))),handle_clauses.call(null,env,r));
} else
{if(cljs.core.logic.dcg._BANG_dcg_QMARK_.call(null,c))
{return cljs.core.cons.call(null,cljs.core.second.call(null,c),handle_clauses.call(null,env,r));
} else
{if(cljs.core.vector_QMARK_.call(null,c))
{return cljs.core.cons.call(null,cljs.core.logic.dcg.__GT_lcons.call(null,env,c,new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c))),handle_clauses.call(null,env,r));
} else
{if((cljs.core.seq_QMARK_.call(null,c)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,c),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,28))))))) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,c))))
{return cljs.core.cons.call(null,cljs.core.logic.dcg.__GT_lcons.call(null,env,cljs.core.second.call(null,c),new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c)),true),handle_clauses.call(null,env,r));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var i = new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));var c__$1 = ((cljs.core.seq_QMARK_.call(null,c))?c:cljs.core._conj.call(null,cljs.core.List.EMPTY,c));return cljs.core.cons.call(null,cljs.core.concat.call(null,c__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env.call(null,(i - 1)),env.call(null,i)], null)),handle_clauses.call(null,env,r));
} else
{return null;
}
}
}
}
}
}
});
cljs.core.logic.dcg.handle_cclause = (function handle_cclause(fsym,osym,cclause){var c = cljs.core.logic.dcg.count_clauses.call(null,cclause);var r = cljs.core.range.call(null,2,(c + 1));var lsyms = cljs.core.conj.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsym], null),cljs.core.map.call(null,cljs.core.logic.dcg.lsym,r)),osym);var clauses = cljs.core.logic.dcg.mark_clauses.call(null,cclause);var clauses__$1 = cljs.core.logic.dcg.handle_clauses.call(null,lsyms,clauses);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.dcg","fresh","cljs.core.logic.dcg/fresh",1129292213,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,73),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,7),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,73),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.butlast.call(null,cljs.core.rest.call(null,lsyms))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,73),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,73),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))))),clauses__$1)),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,73),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,6),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,74),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
