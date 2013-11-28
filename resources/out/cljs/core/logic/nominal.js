// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.nominal');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.nominal.INomSwap = (function (){var obj50360 = {};return obj50360;
})();
cljs.core.logic.nominal.swap_noms = (function swap_noms(t,swap,s){if((function (){var and__9617__auto__ = t;if(and__9617__auto__)
{return t.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3;
} else
{return and__9617__auto__;
}
})())
{return t.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3(t,swap,s);
} else
{var x__10232__auto__ = (((t == null))?null:t);return (function (){var or__9629__auto__ = (cljs.core.logic.nominal.swap_noms[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic.nominal.swap_noms["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INomSwap.swap-noms",t);
}
}
})().call(null,t,swap,s);
}
});
cljs.core.logic.nominal.nom_swap = (function nom_swap(a,swap){if(cljs.core._EQ_.call(null,a,cljs.core.first.call(null,swap)))
{return cljs.core.second.call(null,swap);
} else
{if(cljs.core._EQ_.call(null,a,cljs.core.second.call(null,swap)))
{return cljs.core.first.call(null,swap);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return a;
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__50361 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.seq.call(null,t__$1),swap,s);var ts = cljs.core.nth.call(null,vec__50361,0,null);var s__$1 = cljs.core.nth.call(null,vec__50361,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,ts),s__$1], null);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__50362 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.logic._lfirst.call(null,t__$1),swap,s);var tfirst = cljs.core.nth.call(null,vec__50362,0,null);var s__$1 = cljs.core.nth.call(null,vec__50362,1,null);var vec__50363 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.logic._lnext.call(null,t__$1),swap,s__$1);var tnext = cljs.core.nth.call(null,vec__50363,0,null);var s__$2 = cljs.core.nth.call(null,vec__50363,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.logic.lcons.call(null,tfirst,tnext),cljs.core.meta.call(null,t__$1)),s__$2], null);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var t__$2 = cljs.core.logic._walk.call(null,s,t__$1);if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,t__$2)))
{var v = cljs.core.with_meta.call(null,cljs.core.logic.lvar.call(null),cljs.core.meta.call(null,t__$2));var rt = cljs.core.logic._root_val.call(null,s,t__$2);var s__$1 = cljs.core.logic.nominal.suspc.call(null,v,t__$2,swap).call(null,cljs.core.logic.entangle.call(null,((cljs.core.logic.subst_val_QMARK_.call(null,rt))?cljs.core.logic._ext_no_check.call(null,s,v,rt):s),t__$2,v));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,s__$1], null);
} else
{return cljs.core.logic.nominal.swap_noms.call(null,t__$2,swap,s);
}
});
(cljs.core.logic.nominal.INomSwap["_"] = true);
(cljs.core.logic.nominal.swap_noms["_"] = (function (t,swap,s){if(cljs.core.coll_QMARK_.call(null,t))
{if(cljs.core.seq.call(null,t))
{var vec__50364 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.first.call(null,t),swap,s);var tfirst = cljs.core.nth.call(null,vec__50364,0,null);var s__$1 = cljs.core.nth.call(null,vec__50364,1,null);var vec__50365 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.next.call(null,t),swap,s__$1);var tnext = cljs.core.nth.call(null,vec__50365,0,null);var s__$2 = cljs.core.nth.call(null,vec__50365,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.cons.call(null,tfirst,tnext),cljs.core.meta.call(null,t)),s__$2], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,s], null);
}
} else
{if(cljs.core.map_QMARK_.call(null,t))
{var vec__50366 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.seq.call(null,t),swap,s);var tkvs = cljs.core.nth.call(null,vec__50366,0,null);var s__$1 = cljs.core.nth.call(null,vec__50366,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,tkvs),s__$1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,s], null);
} else
{return null;
}
}
}
}));
(cljs.core.logic.nominal.INomSwap["null"] = true);
(cljs.core.logic.nominal.swap_noms["null"] = (function (t,swap,s){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,s], null);
}));

/**
* @constructor
*/
cljs.core.logic.nominal.Nom = (function (lvar){
this.lvar = lvar;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
})
cljs.core.logic.nominal.Nom.cljs$lang$type = true;
cljs.core.logic.nominal.Nom.cljs$lang$ctorStr = "cljs.core.logic.nominal/Nom";
cljs.core.logic.nominal.Nom.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write.call(null,writer__10174__auto__,"cljs.core.logic.nominal/Nom");
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<nom:"),cljs.core.str(self__.lvar.name),cljs.core.str(">")].join(''));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var self__ = this;
var t__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.nominal.nom_swap.call(null,t__$1,swap),s], null);
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,cljs.core.symbol.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"reify-noms","reify-noms",4368520701).cljs$core$IFn$_invoke$arity$2(cljs.core.meta.call(null,s),true))?"a":self__.lvar.oname)),cljs.core.str("_"),cljs.core.str(cljs.core.count.call(null,s))].join('')));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return cljs.core.logic.nominal.nom.call(null,cljs.core.with_meta.call(null,self__.lvar,new_meta));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.meta.call(null,self__.lvar);
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((o instanceof cljs.core.logic.nominal.Nom)) && (cljs.core._EQ_.call(null,self__.lvar,o.lvar));
});
cljs.core.logic.nominal.Nom.prototype.hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.lvar);
});
cljs.core.logic.nominal.Nom.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("<nom:"),cljs.core.str(self__.lvar.name),cljs.core.str(">")].join('');
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$IBindable$ = true;
cljs.core.logic.nominal.__GT_Nom = (function __GT_Nom(lvar){return (new cljs.core.logic.nominal.Nom(lvar));
});
cljs.core.logic.nominal.nom = (function nom(lvar){return (new cljs.core.logic.nominal.Nom(lvar));
});
cljs.core.logic.nominal.nom_QMARK_ = (function nom_QMARK_(x){return (x instanceof cljs.core.logic.nominal.Nom);
});
cljs.core.logic.nominal._hash = (function _hash(a,x){if(typeof cljs.core.logic.nominal.t50374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t50374 = (function (x,a,_hash,meta50375){
this.x = x;
this.a = a;
this._hash = _hash;
this.meta50375 = meta50375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t50374.cljs$lang$type = true;
cljs.core.logic.nominal.t50374.cljs$lang$ctorStr = "cljs.core.logic.nominal/t50374";
cljs.core.logic.nominal.t50374.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write.call(null,writer__10174__auto__,"cljs.core.logic.nominal/t50374");
});
cljs.core.logic.nominal.t50374.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t50374.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.nominal.t50374.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t50374.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;var x__$2 = cljs.core.logic._walk_STAR_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,self__.x));var a__$2 = cljs.core.logic._walk_STAR_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,self__.a));if(((a__$2 instanceof cljs.core.Symbol)) && (cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.logic.lvar_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x__$2))))))
{return cljs.core.symbol.call(null,[cljs.core.str(a__$2),cljs.core.str("#"),cljs.core.str(x__$2)].join(''));
} else
{return null;
}
});
cljs.core.logic.nominal.t50374.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.nominal.t50374.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.nominal","hash","cljs.core.logic.nominal/hash",99352748,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,175),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,175),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,46)))));
});
cljs.core.logic.nominal.t50374.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.a,self__.x], null);
});
cljs.core.logic.nominal.t50374.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.nominal.t50374.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var a__$2 = cljs.core.logic._walk.call(null,s,self__.a);var x__$2 = cljs.core.logic._walk.call(null,s,self__.x);if(typeof cljs.core.logic.nominal.t50377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t50377 = (function (s,this$,meta50375,x,a,_hash,meta50378){
this.s = s;
this.this$ = this$;
this.meta50375 = meta50375;
this.x = x;
this.a = a;
this._hash = _hash;
this.meta50378 = meta50378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t50377.cljs$lang$type = true;
cljs.core.logic.nominal.t50377.cljs$lang$ctorStr = "cljs.core.logic.nominal/t50377";
cljs.core.logic.nominal.t50377.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write.call(null,writer__10174__auto__,"cljs.core.logic.nominal/t50377");
});
cljs.core.logic.nominal.t50377.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.nominal.t50377.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,self__.a)))
{var or__9629__auto__ = (function (){var and__9617__auto__ = cljs.core.logic.lvar_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9617__auto__))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__9617__auto__;
}
})();if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return (cljs.core.logic.tree_term_QMARK_.call(null,self__.x)) && (cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x)));
}
} else
{return (!(cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))) || (cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.x)));
}
});
cljs.core.logic.nominal.t50377.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (s__$3){if(cljs.core.truth_((function (){var and__9617__auto__ = cljs.core.logic.lvar_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__9617__auto__))
{var and__9617__auto____$1 = cljs.core.logic.lvar_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9617__auto____$1))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__9617__auto____$1;
}
} else
{return and__9617__auto__;
}
})()))
{return null;
} else
{if((cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a)) && (cljs.core.logic.nominal.nom_QMARK_.call(null,self__.x)) && (cljs.core._EQ_.call(null,self__.x,self__.a)))
{return null;
} else
{if((cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.a))) && (!(cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return null;
} else
{if(cljs.core.truth_((function (){var and__9617__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(and__9617__auto__)
{var and__9617__auto____$1 = cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9617__auto____$1))
{return cljs.core._EQ_.call(null,self__.x.binding_nom,self__.a);
} else
{return and__9617__auto____$1;
}
} else
{return and__9617__auto__;
}
})()))
{return s__$3;
} else
{if((cljs.core.logic.tree_term_QMARK_.call(null,self__.x)) && ((cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x))) || (cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return cljs.core.logic.constrain_tree.call(null,self__.x,(function (t,s__$4){return cljs.core.logic.nominal.hash.call(null,self__.a,t).call(null,s__$4);
})).call(null,s__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s__$3;
} else
{return null;
}
}
}
}
}
}
})).call(null,s__$2);
});
cljs.core.logic.nominal.t50377.prototype.apply = (function (self__,args50380){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args50380)));
});
cljs.core.logic.nominal.t50377.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (s__$3){if(cljs.core.truth_((function (){var and__9617__auto__ = cljs.core.logic.lvar_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__9617__auto__))
{var and__9617__auto____$1 = cljs.core.logic.lvar_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9617__auto____$1))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__9617__auto____$1;
}
} else
{return and__9617__auto__;
}
})()))
{return null;
} else
{if((cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a)) && (cljs.core.logic.nominal.nom_QMARK_.call(null,self__.x)) && (cljs.core._EQ_.call(null,self__.x,self__.a)))
{return null;
} else
{if((cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.a))) && (!(cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return null;
} else
{if(cljs.core.truth_((function (){var and__9617__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(and__9617__auto__)
{var and__9617__auto____$1 = cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9617__auto____$1))
{return cljs.core._EQ_.call(null,self__.x.binding_nom,self__.a);
} else
{return and__9617__auto____$1;
}
} else
{return and__9617__auto__;
}
})()))
{return s__$3;
} else
{if((cljs.core.logic.tree_term_QMARK_.call(null,self__.x)) && ((cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x))) || (cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return cljs.core.logic.constrain_tree.call(null,self__.x,(function (t,s__$4){return cljs.core.logic.nominal.hash.call(null,self__.a,t).call(null,s__$4);
})).call(null,s__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s__$3;
} else
{return null;
}
}
}
}
}
}
})).call(null,s__$2);
});
cljs.core.logic.nominal.t50377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50379){var self__ = this;
var _50379__$1 = this;return self__.meta50378;
});
cljs.core.logic.nominal.t50377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50379,meta50378__$1){var self__ = this;
var _50379__$1 = this;return (new cljs.core.logic.nominal.t50377(self__.s,self__.this$,self__.meta50375,self__.x,self__.a,self__._hash,meta50378__$1));
});
cljs.core.logic.nominal.__GT_t50377 = (function __GT_t50377(s__$1,this$__$2,meta50375__$1,x__$3,a__$3,_hash__$2,meta50378){return (new cljs.core.logic.nominal.t50377(s__$1,this$__$2,meta50375__$1,x__$3,a__$3,_hash__$2,meta50378));
});
}
return (new cljs.core.logic.nominal.t50377(s,this$__$1,self__.meta50375,x__$2,a__$2,self__._hash,null));
});
cljs.core.logic.nominal.t50374.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.a),cljs.core.str("#"),cljs.core.str(self__.x)].join('');
});
cljs.core.logic.nominal.t50374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50376){var self__ = this;
var _50376__$1 = this;return self__.meta50375;
});
cljs.core.logic.nominal.t50374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50376,meta50375__$1){var self__ = this;
var _50376__$1 = this;return (new cljs.core.logic.nominal.t50374(self__.x,self__.a,self__._hash,meta50375__$1));
});
cljs.core.logic.nominal.__GT_t50374 = (function __GT_t50374(x__$1,a__$1,_hash__$1,meta50375){return (new cljs.core.logic.nominal.t50374(x__$1,a__$1,_hash__$1,meta50375));
});
}
return (new cljs.core.logic.nominal.t50374(x,a,_hash,null));
});
cljs.core.logic.nominal.hash = (function hash(a,t){return cljs.core.logic.cgoal.call(null,cljs.core.logic.nominal._hash.call(null,a,t));
});
cljs.core.logic.nominal._do_suspc = (function _do_suspc(t1,t2,swap,a){var x = (function (){var vs = cljs.core.PersistentHashSet.fromArray([t2], true);var seen = cljs.core.PersistentHashSet.EMPTY;while(true){
var vs__$1 = clojure.set.difference.call(null,vs,seen);if(cljs.core.empty_QMARK_.call(null,vs__$1))
{return true;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,((function (vs,seen,vs__$1){
return (function (p1__50381_SHARP_){return cljs.core.logic._occurs_check.call(null,a,p1__50381_SHARP_,t1);
});})(vs,seen,vs__$1))
,vs__$1)))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__50384 = cljs.core.reduce.call(null,((function (vs,seen,vs__$1){
return (function (s0,s1){return clojure.set.union.call(null,s0,cljs.core.logic._root_val.call(null,a,s1).eset);
});})(vs,seen,vs__$1))
,cljs.core.PersistentHashSet.EMPTY,vs__$1);
var G__50385 = clojure.set.union.call(null,vs__$1,seen);
vs = G__50384;
seen = G__50385;
continue;
}
} else
{return null;
}
}
}
break;
}
})();if(cljs.core.truth_(x))
{var vec__50383 = cljs.core.logic.nominal.swap_noms.call(null,t1,swap,a);var t1__$1 = cljs.core.nth.call(null,vec__50383,0,null);var a__$1 = cljs.core.nth.call(null,vec__50383,1,null);return (function (a__49579__auto__){var has_cs_QMARK___49580__auto__ = (cljs.core.count.call(null,a__49579__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___49580__auto__)?(new cljs.core.logic.Substitutions(a__49579__auto__.s,cljs.core.PersistentVector.EMPTY,a__49579__auto__.ts,a__49579__auto__.cs,a__49579__auto__.cq,a__49579__auto__.cqs,a__49579__auto__.oc,a__49579__auto__._meta)):a__49579__auto__),t1__$1,t2);if(cljs.core.truth_(temp__4098__auto__))
{var ap__49581__auto__ = temp__4098__auto__;var vs__49582__auto__ = ((has_cs_QMARK___49580__auto__)?ap__49581__auto__.vs:null);var changed_QMARK___49583__auto__ = (cljs.core.count.call(null,vs__49582__auto__) > 0);if(changed_QMARK___49583__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__49582__auto__,ap__49581__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__49581__auto__.s,null,ap__49581__auto__.ts,ap__49581__auto__.cs,ap__49581__auto__.cq,ap__49581__auto__.cqs,ap__49581__auto__.oc,ap__49581__auto__._meta)));
} else
{return ap__49581__auto__;
}
} else
{return null;
}
}).call(null,a__$1);
} else
{return null;
}
});
cljs.core.logic.nominal._suspc = (function _suspc(v1,v2,swap){if(typeof cljs.core.logic.nominal.t50393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t50393 = (function (swap,v2,v1,_suspc,meta50394){
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta50394 = meta50394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t50393.cljs$lang$type = true;
cljs.core.logic.nominal.t50393.cljs$lang$ctorStr = "cljs.core.logic.nominal/t50393";
cljs.core.logic.nominal.t50393.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write.call(null,writer__10174__auto__,"cljs.core.logic.nominal/t50393");
});
cljs.core.logic.nominal.t50393.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t50393.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.nominal.t50393.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t50393.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,a){var self__ = this;
var c__$1 = this;var t1 = cljs.core.logic._walk_STAR_.call(null,r,cljs.core.logic._walk_STAR_.call(null,a,self__.v1));var t2 = cljs.core.logic._walk_STAR_.call(null,r,cljs.core.logic._walk_STAR_.call(null,a,self__.v2));var swap__$2 = cljs.core.logic._walk_STAR_.call(null,r,self__.swap);if((cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,t1))) && (cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,t2))) && ((cljs.core.first.call(null,swap__$2) instanceof cljs.core.Symbol)) && ((cljs.core.second.call(null,swap__$2) instanceof cljs.core.Symbol)))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"swap","swap",-1636988084,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,swap__$2),cljs.core._conj.call(null,cljs.core.List.EMPTY,t1),cljs.core._conj.call(null,cljs.core.List.EMPTY,t2))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,247),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,247),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34)))));
} else
{return null;
}
});
cljs.core.logic.nominal.t50393.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.nominal.t50393.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.nominal","suspc","cljs.core.logic.nominal/suspc",54642610,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,235),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,235),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,47)))));
});
cljs.core.logic.nominal.t50393.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v1,self__.v2], null);
});
cljs.core.logic.nominal.t50393.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.nominal.t50393.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,a){var self__ = this;
var this$__$1 = this;var t1 = cljs.core.logic._walk.call(null,a,self__.v1);var t2 = cljs.core.logic._walk.call(null,a,self__.v2);if(typeof cljs.core.logic.nominal.t50396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t50396 = (function (t2,t1,a,this$,meta50394,swap,v2,v1,_suspc,meta50397){
this.t2 = t2;
this.t1 = t1;
this.a = a;
this.this$ = this$;
this.meta50394 = meta50394;
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta50397 = meta50397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t50396.cljs$lang$type = true;
cljs.core.logic.nominal.t50396.cljs$lang$ctorStr = "cljs.core.logic.nominal/t50396";
cljs.core.logic.nominal.t50396.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write.call(null,writer__10174__auto__,"cljs.core.logic.nominal/t50396");
});
cljs.core.logic.nominal.t50396.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.nominal.t50396.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.t1))) || (cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.t2))) || (cljs.core._EQ_.call(null,self__.t1,self__.t2));
});
cljs.core.logic.nominal.t50396.prototype.call = (function (self__,a__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (a__$3){if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.t1)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t1,self__.t2,self__.swap,a__$3);
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.t2)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t2,self__.t1,self__.swap,a__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var a_STAR_ = self__.swap;var a__$4 = a__$3;while(true){
if(cljs.core.empty_QMARK_.call(null,a_STAR_))
{return a__$4;
} else
{{
var G__50400 = cljs.core.rest.call(null,a_STAR_);
var G__50401 = cljs.core.logic.nominal.hash.call(null,cljs.core.first.call(null,a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__50400;
a__$4 = G__50401;
continue;
}
}
break;
}
} else
{return null;
}
}
}
})).call(null,a__$2);
});
cljs.core.logic.nominal.t50396.prototype.apply = (function (self__,args50399){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args50399)));
});
cljs.core.logic.nominal.t50396.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (a__$3){if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.t1)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t1,self__.t2,self__.swap,a__$3);
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.t2)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t2,self__.t1,self__.swap,a__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var a_STAR_ = self__.swap;var a__$4 = a__$3;while(true){
if(cljs.core.empty_QMARK_.call(null,a_STAR_))
{return a__$4;
} else
{{
var G__50402 = cljs.core.rest.call(null,a_STAR_);
var G__50403 = cljs.core.logic.nominal.hash.call(null,cljs.core.first.call(null,a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__50402;
a__$4 = G__50403;
continue;
}
}
break;
}
} else
{return null;
}
}
}
})).call(null,a__$2);
});
cljs.core.logic.nominal.t50396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50398){var self__ = this;
var _50398__$1 = this;return self__.meta50397;
});
cljs.core.logic.nominal.t50396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50398,meta50397__$1){var self__ = this;
var _50398__$1 = this;return (new cljs.core.logic.nominal.t50396(self__.t2,self__.t1,self__.a,self__.this$,self__.meta50394,self__.swap,self__.v2,self__.v1,self__._suspc,meta50397__$1));
});
cljs.core.logic.nominal.__GT_t50396 = (function __GT_t50396(t2__$1,t1__$1,a__$1,this$__$2,meta50394__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta50397){return (new cljs.core.logic.nominal.t50396(t2__$1,t1__$1,a__$1,this$__$2,meta50394__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta50397));
});
}
return (new cljs.core.logic.nominal.t50396(t2,t1,a,this$__$1,self__.meta50394,self__.swap,self__.v2,self__.v1,self__._suspc,null));
});
cljs.core.logic.nominal.t50393.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("suspc"),cljs.core.str(self__.v1),cljs.core.str(self__.v2),cljs.core.str(self__.swap)].join('');
});
cljs.core.logic.nominal.t50393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50395){var self__ = this;
var _50395__$1 = this;return self__.meta50394;
});
cljs.core.logic.nominal.t50393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50395,meta50394__$1){var self__ = this;
var _50395__$1 = this;return (new cljs.core.logic.nominal.t50393(self__.swap,self__.v2,self__.v1,self__._suspc,meta50394__$1));
});
cljs.core.logic.nominal.__GT_t50393 = (function __GT_t50393(swap__$1,v2__$1,v1__$1,_suspc__$1,meta50394){return (new cljs.core.logic.nominal.t50393(swap__$1,v2__$1,v1__$1,_suspc__$1,meta50394));
});
}
return (new cljs.core.logic.nominal.t50393(swap,v2,v1,_suspc,null));
});
cljs.core.logic.nominal.suspc = (function suspc(v1,v2,swap){return cljs.core.logic.cgoal.call(null,cljs.core.logic.nominal._suspc.call(null,v1,v2,swap));
});

/**
* @constructor
* @param {*} binding_nom
* @param {*} body
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.nominal.Tie = (function (binding_nom,body,__meta,__extmap){
this.binding_nom = binding_nom;
this.body = body;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var self__ = this;
var t__$1 = this;var vec__50407 = cljs.core.logic.nominal.swap_noms.call(null,t__$1.body,swap,s);var tbody = cljs.core.nth.call(null,vec__50407,0,null);var s__$1 = cljs.core.nth.call(null,vec__50407,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.logic.nominal.tie.call(null,cljs.core.logic.nominal.nom_swap.call(null,t__$1.binding_nom,swap),tbody),cljs.core.meta.call(null,t__$1)),s__$1], null);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10186__auto__){var self__ = this;
var this__10186__auto____$1 = this;var h__10040__auto__ = self__.__hash;if(!((h__10040__auto__ == null)))
{return h__10040__auto__;
} else
{var h__10040__auto____$1 = cljs.core.hash_imap.call(null,this__10186__auto____$1);self__.__hash = h__10040__auto____$1;
return h__10040__auto____$1;
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10191__auto__,k__10192__auto__){var self__ = this;
var this__10191__auto____$1 = this;return cljs.core._lookup.call(null,this__10191__auto____$1,k__10192__auto__,null);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10193__auto__,k50405,else__10194__auto__){var self__ = this;
var this__10193__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k50405,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822)))
{return self__.binding_nom;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k50405,new cljs.core.Keyword(null,"body","body",1016933652)))
{return self__.body;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k50405,else__10194__auto__);
} else
{return null;
}
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10198__auto__,k__10199__auto__,G__50404){var self__ = this;
var this__10198__auto____$1 = this;var pred__50408 = cljs.core.keyword_identical_QMARK_;var expr__50409 = k__10199__auto__;if(cljs.core.truth_(pred__50408.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),expr__50409)))
{return (new cljs.core.logic.nominal.Tie(G__50404,self__.body,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__50408.call(null,new cljs.core.Keyword(null,"body","body",1016933652),expr__50409)))
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,G__50404,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10199__auto__,G__50404),null));
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IForceAnswerTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var self__ = this;
var v__$1 = this;return cljs.core.logic.force_ans.call(null,v__$1.body);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.with_meta.call(null,cljs.core.logic.nominal.tie.call(null,cljs.core.logic._walk_term.call(null,v__$1.binding_nom,f),cljs.core.logic._walk_term.call(null,v__$1.body,f)),cljs.core.meta.call(null,v__$1));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IConstrainTree$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var self__ = this;
var t__$1 = this;return fc.call(null,t__$1.body,s);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10205__auto__,writer__10206__auto__,opts__10207__auto__){var self__ = this;
var this__10205__auto____$1 = this;var pr_pair__10208__auto__ = (function (keyval__10209__auto__){return cljs.core.pr_sequential_writer.call(null,writer__10206__auto__,cljs.core.pr_writer,""," ","",opts__10207__auto__,keyval__10209__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__10206__auto__,pr_pair__10208__auto__,"#cljs.core.logic.nominal.Tie{",", ","}",opts__10207__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),self__.binding_nom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",1016933652),self__.body],null))], null),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10196__auto__,entry__10197__auto__){var self__ = this;
var this__10196__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__10197__auto__))
{return cljs.core._assoc.call(null,this__10196__auto____$1,cljs.core._nth.call(null,entry__10197__auto__,0),cljs.core._nth.call(null,entry__10197__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__10196__auto____$1,entry__10197__auto__);
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._occurs_check.call(null,s,x,v__$1.body);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10203__auto__){var self__ = this;
var this__10203__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),self__.binding_nom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",1016933652),self__.body],null))], null),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10195__auto__){var self__ = this;
var this__10195__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10187__auto__,other__10188__auto__){var self__ = this;
var this__10187__auto____$1 = this;if(cljs.core.truth_((function (){var and__9617__auto__ = other__10188__auto__;if(cljs.core.truth_(and__9617__auto__))
{return ((this__10187__auto____$1.constructor === other__10188__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10187__auto____$1,other__10188__auto__));
} else
{return and__9617__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10190__auto__,G__50404){var self__ = this;
var this__10190__auto____$1 = this;return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,G__50404,self__.__extmap,self__.__hash));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10189__auto__){var self__ = this;
var this__10189__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$ITreeTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var s__$1 = cljs.core.logic._reify_STAR_.call(null,s,self__.binding_nom);var s__$2 = cljs.core.logic._reify_STAR_.call(null,s__$1,self__.body);return s__$2;
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;if(cljs.core.truth_(cljs.core.logic.nominal.tie_QMARK_.call(null,u)))
{if(cljs.core._EQ_.call(null,v__$1.binding_nom,u.binding_nom))
{return cljs.core.logic._unify.call(null,s,v__$1.body,u.body);
} else
{var vec__50411 = cljs.core.logic.nominal.swap_noms.call(null,v__$1.body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1.binding_nom,u.binding_nom], null),s);var t = cljs.core.nth.call(null,vec__50411,0,null);var s__$1 = cljs.core.nth.call(null,vec__50411,1,null);return cljs.core.logic.composeg.call(null,cljs.core.logic.nominal.hash.call(null,u.binding_nom,v__$1.body),(function (a__49579__auto__){var has_cs_QMARK___49580__auto__ = (cljs.core.count.call(null,a__49579__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___49580__auto__)?(new cljs.core.logic.Substitutions(a__49579__auto__.s,cljs.core.PersistentVector.EMPTY,a__49579__auto__.ts,a__49579__auto__.cs,a__49579__auto__.cq,a__49579__auto__.cqs,a__49579__auto__.oc,a__49579__auto__._meta)):a__49579__auto__),t,u.body);if(cljs.core.truth_(temp__4098__auto__))
{var ap__49581__auto__ = temp__4098__auto__;var vs__49582__auto__ = ((has_cs_QMARK___49580__auto__)?ap__49581__auto__.vs:null);var changed_QMARK___49583__auto__ = (cljs.core.count.call(null,vs__49582__auto__) > 0);if(changed_QMARK___49583__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__49582__auto__,ap__49581__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__49581__auto__.s,null,ap__49581__auto__.ts,ap__49581__auto__.cs,ap__49581__auto__.cq,ap__49581__auto__.cqs,ap__49581__auto__.oc,ap__49581__auto__._meta)));
} else
{return ap__49581__auto__;
}
} else
{return null;
}
})).call(null,s__$1);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10200__auto__,k__10201__auto__){var self__ = this;
var this__10200__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),null,new cljs.core.Keyword(null,"body","body",1016933652),null], null), null),k__10201__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10200__auto____$1),self__.__meta),k__10201__auto__);
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10201__auto__)),null));
}
});
cljs.core.logic.nominal.Tie.cljs$lang$type = true;
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrSeq = (function (this__10225__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrWriter = (function (this__10225__auto__,writer__10226__auto__){return cljs.core._write.call(null,writer__10226__auto__,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.__GT_Tie = (function __GT_Tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.map__GT_Tie = (function map__GT_Tie(G__50406){return (new cljs.core.logic.nominal.Tie(new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(G__50406),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(G__50406),null,cljs.core.dissoc.call(null,G__50406,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),new cljs.core.Keyword(null,"body","body",1016933652))));
});
cljs.core.logic.nominal.tie = (function tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.tie_QMARK_ = (function tie_QMARK_(x){return (x instanceof cljs.core.logic.nominal.Tie);
});
