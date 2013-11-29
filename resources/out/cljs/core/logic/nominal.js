// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.nominal');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.nominal.INomSwap = (function (){var obj31782 = {};return obj31782;
})();
cljs.core.logic.nominal.swap_noms = (function swap_noms(t,swap,s){if((function (){var and__9611__auto__ = t;if(and__9611__auto__)
{return t.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3;
} else
{return and__9611__auto__;
}
})())
{return t.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3(t,swap,s);
} else
{var x__10226__auto__ = (((t == null))?null:t);return (function (){var or__9623__auto__ = (cljs.core.logic.nominal.swap_noms[goog.typeOf(x__10226__auto__)]);if(or__9623__auto__)
{return or__9623__auto__;
} else
{var or__9623__auto____$1 = (cljs.core.logic.nominal.swap_noms["_"]);if(or__9623__auto____$1)
{return or__9623__auto____$1;
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
cljs.core.PersistentVector.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__31783 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.seq.call(null,t__$1),swap,s);var ts = cljs.core.nth.call(null,vec__31783,0,null);var s__$1 = cljs.core.nth.call(null,vec__31783,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,ts),s__$1], null);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__31784 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.logic._lfirst.call(null,t__$1),swap,s);var tfirst = cljs.core.nth.call(null,vec__31784,0,null);var s__$1 = cljs.core.nth.call(null,vec__31784,1,null);var vec__31785 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.logic._lnext.call(null,t__$1),swap,s__$1);var tnext = cljs.core.nth.call(null,vec__31785,0,null);var s__$2 = cljs.core.nth.call(null,vec__31785,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.logic.lcons.call(null,tfirst,tnext),cljs.core.meta.call(null,t__$1)),s__$2], null);
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
{var vec__31786 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.first.call(null,t),swap,s);var tfirst = cljs.core.nth.call(null,vec__31786,0,null);var s__$1 = cljs.core.nth.call(null,vec__31786,1,null);var vec__31787 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.next.call(null,t),swap,s__$1);var tnext = cljs.core.nth.call(null,vec__31787,0,null);var s__$2 = cljs.core.nth.call(null,vec__31787,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.cons.call(null,tfirst,tnext),cljs.core.meta.call(null,t)),s__$2], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,s], null);
}
} else
{if(cljs.core.map_QMARK_.call(null,t))
{var vec__31788 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.seq.call(null,t),swap,s);var tkvs = cljs.core.nth.call(null,vec__31788,0,null);var s__$1 = cljs.core.nth.call(null,vec__31788,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,tkvs),s__$1], null);
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
cljs.core.logic.nominal.Nom.cljs$lang$ctorPrWriter = (function (this__10167__auto__,writer__10168__auto__,opt__10169__auto__){return cljs.core._write.call(null,writer__10168__auto__,"cljs.core.logic.nominal/Nom");
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
cljs.core.logic.nominal._hash = (function _hash(a,x){if(typeof cljs.core.logic.nominal.t31796 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t31796 = (function (x,a,_hash,meta31797){
this.x = x;
this.a = a;
this._hash = _hash;
this.meta31797 = meta31797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t31796.cljs$lang$type = true;
cljs.core.logic.nominal.t31796.cljs$lang$ctorStr = "cljs.core.logic.nominal/t31796";
cljs.core.logic.nominal.t31796.cljs$lang$ctorPrWriter = (function (this__10167__auto__,writer__10168__auto__,opt__10169__auto__){return cljs.core._write.call(null,writer__10168__auto__,"cljs.core.logic.nominal/t31796");
});
cljs.core.logic.nominal.t31796.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t31796.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.nominal.t31796.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t31796.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;var x__$2 = cljs.core.logic._walk_STAR_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,self__.x));var a__$2 = cljs.core.logic._walk_STAR_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,self__.a));if(((a__$2 instanceof cljs.core.Symbol)) && (cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.logic.lvar_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x__$2))))))
{return cljs.core.symbol.call(null,[cljs.core.str(a__$2),cljs.core.str("#"),cljs.core.str(x__$2)].join(''));
} else
{return null;
}
});
cljs.core.logic.nominal.t31796.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.nominal.t31796.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.nominal","hash","cljs.core.logic.nominal/hash",99352748,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,175),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,175),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,46)))));
});
cljs.core.logic.nominal.t31796.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.a,self__.x], null);
});
cljs.core.logic.nominal.t31796.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.nominal.t31796.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var a__$2 = cljs.core.logic._walk.call(null,s,self__.a);var x__$2 = cljs.core.logic._walk.call(null,s,self__.x);if(typeof cljs.core.logic.nominal.t31799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t31799 = (function (s,this$,meta31797,x,a,_hash,meta31800){
this.s = s;
this.this$ = this$;
this.meta31797 = meta31797;
this.x = x;
this.a = a;
this._hash = _hash;
this.meta31800 = meta31800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t31799.cljs$lang$type = true;
cljs.core.logic.nominal.t31799.cljs$lang$ctorStr = "cljs.core.logic.nominal/t31799";
cljs.core.logic.nominal.t31799.cljs$lang$ctorPrWriter = (function (this__10167__auto__,writer__10168__auto__,opt__10169__auto__){return cljs.core._write.call(null,writer__10168__auto__,"cljs.core.logic.nominal/t31799");
});
cljs.core.logic.nominal.t31799.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.nominal.t31799.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,self__.a)))
{var or__9623__auto__ = (function (){var and__9611__auto__ = cljs.core.logic.lvar_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9611__auto__))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__9611__auto__;
}
})();if(cljs.core.truth_(or__9623__auto__))
{return or__9623__auto__;
} else
{return (cljs.core.logic.tree_term_QMARK_.call(null,self__.x)) && (cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x)));
}
} else
{return (!(cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))) || (cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.x)));
}
});
cljs.core.logic.nominal.t31799.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (s__$3){if(cljs.core.truth_((function (){var and__9611__auto__ = cljs.core.logic.lvar_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__9611__auto__))
{var and__9611__auto____$1 = cljs.core.logic.lvar_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9611__auto____$1))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__9611__auto____$1;
}
} else
{return and__9611__auto__;
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
{if(cljs.core.truth_((function (){var and__9611__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(and__9611__auto__)
{var and__9611__auto____$1 = cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9611__auto____$1))
{return cljs.core._EQ_.call(null,self__.x.binding_nom,self__.a);
} else
{return and__9611__auto____$1;
}
} else
{return and__9611__auto__;
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
cljs.core.logic.nominal.t31799.prototype.apply = (function (self__,args31802){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31802)));
});
cljs.core.logic.nominal.t31799.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (s__$3){if(cljs.core.truth_((function (){var and__9611__auto__ = cljs.core.logic.lvar_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__9611__auto__))
{var and__9611__auto____$1 = cljs.core.logic.lvar_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9611__auto____$1))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__9611__auto____$1;
}
} else
{return and__9611__auto__;
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
{if(cljs.core.truth_((function (){var and__9611__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(and__9611__auto__)
{var and__9611__auto____$1 = cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__9611__auto____$1))
{return cljs.core._EQ_.call(null,self__.x.binding_nom,self__.a);
} else
{return and__9611__auto____$1;
}
} else
{return and__9611__auto__;
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
cljs.core.logic.nominal.t31799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31801){var self__ = this;
var _31801__$1 = this;return self__.meta31800;
});
cljs.core.logic.nominal.t31799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31801,meta31800__$1){var self__ = this;
var _31801__$1 = this;return (new cljs.core.logic.nominal.t31799(self__.s,self__.this$,self__.meta31797,self__.x,self__.a,self__._hash,meta31800__$1));
});
cljs.core.logic.nominal.__GT_t31799 = (function __GT_t31799(s__$1,this$__$2,meta31797__$1,x__$3,a__$3,_hash__$2,meta31800){return (new cljs.core.logic.nominal.t31799(s__$1,this$__$2,meta31797__$1,x__$3,a__$3,_hash__$2,meta31800));
});
}
return (new cljs.core.logic.nominal.t31799(s,this$__$1,self__.meta31797,x__$2,a__$2,self__._hash,null));
});
cljs.core.logic.nominal.t31796.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.a),cljs.core.str("#"),cljs.core.str(self__.x)].join('');
});
cljs.core.logic.nominal.t31796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31798){var self__ = this;
var _31798__$1 = this;return self__.meta31797;
});
cljs.core.logic.nominal.t31796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31798,meta31797__$1){var self__ = this;
var _31798__$1 = this;return (new cljs.core.logic.nominal.t31796(self__.x,self__.a,self__._hash,meta31797__$1));
});
cljs.core.logic.nominal.__GT_t31796 = (function __GT_t31796(x__$1,a__$1,_hash__$1,meta31797){return (new cljs.core.logic.nominal.t31796(x__$1,a__$1,_hash__$1,meta31797));
});
}
return (new cljs.core.logic.nominal.t31796(x,a,_hash,null));
});
cljs.core.logic.nominal.hash = (function hash(a,t){return cljs.core.logic.cgoal.call(null,cljs.core.logic.nominal._hash.call(null,a,t));
});
cljs.core.logic.nominal._do_suspc = (function _do_suspc(t1,t2,swap,a){var x = (function (){var vs = cljs.core.PersistentHashSet.fromArray([t2], true);var seen = cljs.core.PersistentHashSet.EMPTY;while(true){
var vs__$1 = clojure.set.difference.call(null,vs,seen);if(cljs.core.empty_QMARK_.call(null,vs__$1))
{return true;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,((function (vs,seen,vs__$1){
return (function (p1__31803_SHARP_){return cljs.core.logic._occurs_check.call(null,a,p1__31803_SHARP_,t1);
});})(vs,seen,vs__$1))
,vs__$1)))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__31806 = cljs.core.reduce.call(null,((function (vs,seen,vs__$1){
return (function (s0,s1){return clojure.set.union.call(null,s0,cljs.core.logic._root_val.call(null,a,s1).eset);
});})(vs,seen,vs__$1))
,cljs.core.PersistentHashSet.EMPTY,vs__$1);
var G__31807 = clojure.set.union.call(null,vs__$1,seen);
vs = G__31806;
seen = G__31807;
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
{var vec__31805 = cljs.core.logic.nominal.swap_noms.call(null,t1,swap,a);var t1__$1 = cljs.core.nth.call(null,vec__31805,0,null);var a__$1 = cljs.core.nth.call(null,vec__31805,1,null);return (function (a__31005__auto__){var has_cs_QMARK___31006__auto__ = (cljs.core.count.call(null,a__31005__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___31006__auto__)?(new cljs.core.logic.Substitutions(a__31005__auto__.s,cljs.core.PersistentVector.EMPTY,a__31005__auto__.ts,a__31005__auto__.cs,a__31005__auto__.cq,a__31005__auto__.cqs,a__31005__auto__.oc,a__31005__auto__._meta)):a__31005__auto__),t1__$1,t2);if(cljs.core.truth_(temp__4098__auto__))
{var ap__31007__auto__ = temp__4098__auto__;var vs__31008__auto__ = ((has_cs_QMARK___31006__auto__)?ap__31007__auto__.vs:null);var changed_QMARK___31009__auto__ = (cljs.core.count.call(null,vs__31008__auto__) > 0);if(changed_QMARK___31009__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__31008__auto__,ap__31007__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__31007__auto__.s,null,ap__31007__auto__.ts,ap__31007__auto__.cs,ap__31007__auto__.cq,ap__31007__auto__.cqs,ap__31007__auto__.oc,ap__31007__auto__._meta)));
} else
{return ap__31007__auto__;
}
} else
{return null;
}
}).call(null,a__$1);
} else
{return null;
}
});
cljs.core.logic.nominal._suspc = (function _suspc(v1,v2,swap){if(typeof cljs.core.logic.nominal.t31815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t31815 = (function (swap,v2,v1,_suspc,meta31816){
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta31816 = meta31816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t31815.cljs$lang$type = true;
cljs.core.logic.nominal.t31815.cljs$lang$ctorStr = "cljs.core.logic.nominal/t31815";
cljs.core.logic.nominal.t31815.cljs$lang$ctorPrWriter = (function (this__10167__auto__,writer__10168__auto__,opt__10169__auto__){return cljs.core._write.call(null,writer__10168__auto__,"cljs.core.logic.nominal/t31815");
});
cljs.core.logic.nominal.t31815.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t31815.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.nominal.t31815.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t31815.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,a){var self__ = this;
var c__$1 = this;var t1 = cljs.core.logic._walk_STAR_.call(null,r,cljs.core.logic._walk_STAR_.call(null,a,self__.v1));var t2 = cljs.core.logic._walk_STAR_.call(null,r,cljs.core.logic._walk_STAR_.call(null,a,self__.v2));var swap__$2 = cljs.core.logic._walk_STAR_.call(null,r,self__.swap);if((cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,t1))) && (cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,t2))) && ((cljs.core.first.call(null,swap__$2) instanceof cljs.core.Symbol)) && ((cljs.core.second.call(null,swap__$2) instanceof cljs.core.Symbol)))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"swap","swap",-1636988084,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,swap__$2),cljs.core._conj.call(null,cljs.core.List.EMPTY,t1),cljs.core._conj.call(null,cljs.core.List.EMPTY,t2))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,247),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,247),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34)))));
} else
{return null;
}
});
cljs.core.logic.nominal.t31815.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.nominal.t31815.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.nominal","suspc","cljs.core.logic.nominal/suspc",54642610,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,235),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,235),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,47)))));
});
cljs.core.logic.nominal.t31815.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v1,self__.v2], null);
});
cljs.core.logic.nominal.t31815.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.nominal.t31815.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,a){var self__ = this;
var this$__$1 = this;var t1 = cljs.core.logic._walk.call(null,a,self__.v1);var t2 = cljs.core.logic._walk.call(null,a,self__.v2);if(typeof cljs.core.logic.nominal.t31818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t31818 = (function (t2,t1,a,this$,meta31816,swap,v2,v1,_suspc,meta31819){
this.t2 = t2;
this.t1 = t1;
this.a = a;
this.this$ = this$;
this.meta31816 = meta31816;
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta31819 = meta31819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t31818.cljs$lang$type = true;
cljs.core.logic.nominal.t31818.cljs$lang$ctorStr = "cljs.core.logic.nominal/t31818";
cljs.core.logic.nominal.t31818.cljs$lang$ctorPrWriter = (function (this__10167__auto__,writer__10168__auto__,opt__10169__auto__){return cljs.core._write.call(null,writer__10168__auto__,"cljs.core.logic.nominal/t31818");
});
cljs.core.logic.nominal.t31818.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.nominal.t31818.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.t1))) || (cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.t2))) || (cljs.core._EQ_.call(null,self__.t1,self__.t2));
});
cljs.core.logic.nominal.t31818.prototype.call = (function (self__,a__$2){var self__ = this;
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
var G__31822 = cljs.core.rest.call(null,a_STAR_);
var G__31823 = cljs.core.logic.nominal.hash.call(null,cljs.core.first.call(null,a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__31822;
a__$4 = G__31823;
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
cljs.core.logic.nominal.t31818.prototype.apply = (function (self__,args31821){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31821)));
});
cljs.core.logic.nominal.t31818.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a__$2){var self__ = this;
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
var G__31824 = cljs.core.rest.call(null,a_STAR_);
var G__31825 = cljs.core.logic.nominal.hash.call(null,cljs.core.first.call(null,a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__31824;
a__$4 = G__31825;
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
cljs.core.logic.nominal.t31818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31820){var self__ = this;
var _31820__$1 = this;return self__.meta31819;
});
cljs.core.logic.nominal.t31818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31820,meta31819__$1){var self__ = this;
var _31820__$1 = this;return (new cljs.core.logic.nominal.t31818(self__.t2,self__.t1,self__.a,self__.this$,self__.meta31816,self__.swap,self__.v2,self__.v1,self__._suspc,meta31819__$1));
});
cljs.core.logic.nominal.__GT_t31818 = (function __GT_t31818(t2__$1,t1__$1,a__$1,this$__$2,meta31816__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta31819){return (new cljs.core.logic.nominal.t31818(t2__$1,t1__$1,a__$1,this$__$2,meta31816__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta31819));
});
}
return (new cljs.core.logic.nominal.t31818(t2,t1,a,this$__$1,self__.meta31816,self__.swap,self__.v2,self__.v1,self__._suspc,null));
});
cljs.core.logic.nominal.t31815.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("suspc"),cljs.core.str(self__.v1),cljs.core.str(self__.v2),cljs.core.str(self__.swap)].join('');
});
cljs.core.logic.nominal.t31815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31817){var self__ = this;
var _31817__$1 = this;return self__.meta31816;
});
cljs.core.logic.nominal.t31815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31817,meta31816__$1){var self__ = this;
var _31817__$1 = this;return (new cljs.core.logic.nominal.t31815(self__.swap,self__.v2,self__.v1,self__._suspc,meta31816__$1));
});
cljs.core.logic.nominal.__GT_t31815 = (function __GT_t31815(swap__$1,v2__$1,v1__$1,_suspc__$1,meta31816){return (new cljs.core.logic.nominal.t31815(swap__$1,v2__$1,v1__$1,_suspc__$1,meta31816));
});
}
return (new cljs.core.logic.nominal.t31815(swap,v2,v1,_suspc,null));
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
var t__$1 = this;var vec__31829 = cljs.core.logic.nominal.swap_noms.call(null,t__$1.body,swap,s);var tbody = cljs.core.nth.call(null,vec__31829,0,null);var s__$1 = cljs.core.nth.call(null,vec__31829,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.logic.nominal.tie.call(null,cljs.core.logic.nominal.nom_swap.call(null,t__$1.binding_nom,swap),tbody),cljs.core.meta.call(null,t__$1)),s__$1], null);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10180__auto__){var self__ = this;
var this__10180__auto____$1 = this;var h__10034__auto__ = self__.__hash;if(!((h__10034__auto__ == null)))
{return h__10034__auto__;
} else
{var h__10034__auto____$1 = cljs.core.hash_imap.call(null,this__10180__auto____$1);self__.__hash = h__10034__auto____$1;
return h__10034__auto____$1;
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10185__auto__,k__10186__auto__){var self__ = this;
var this__10185__auto____$1 = this;return cljs.core._lookup.call(null,this__10185__auto____$1,k__10186__auto__,null);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10187__auto__,k31827,else__10188__auto__){var self__ = this;
var this__10187__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k31827,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822)))
{return self__.binding_nom;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k31827,new cljs.core.Keyword(null,"body","body",1016933652)))
{return self__.body;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k31827,else__10188__auto__);
} else
{return null;
}
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10192__auto__,k__10193__auto__,G__31826){var self__ = this;
var this__10192__auto____$1 = this;var pred__31830 = cljs.core.keyword_identical_QMARK_;var expr__31831 = k__10193__auto__;if(cljs.core.truth_(pred__31830.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),expr__31831)))
{return (new cljs.core.logic.nominal.Tie(G__31826,self__.body,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__31830.call(null,new cljs.core.Keyword(null,"body","body",1016933652),expr__31831)))
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,G__31826,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10193__auto__,G__31826),null));
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
cljs.core.logic.nominal.Tie.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10199__auto__,writer__10200__auto__,opts__10201__auto__){var self__ = this;
var this__10199__auto____$1 = this;var pr_pair__10202__auto__ = (function (keyval__10203__auto__){return cljs.core.pr_sequential_writer.call(null,writer__10200__auto__,cljs.core.pr_writer,""," ","",opts__10201__auto__,keyval__10203__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__10200__auto__,pr_pair__10202__auto__,"#cljs.core.logic.nominal.Tie{",", ","}",opts__10201__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),self__.binding_nom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",1016933652),self__.body],null))], null),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10190__auto__,entry__10191__auto__){var self__ = this;
var this__10190__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__10191__auto__))
{return cljs.core._assoc.call(null,this__10190__auto____$1,cljs.core._nth.call(null,entry__10191__auto__,0),cljs.core._nth.call(null,entry__10191__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__10190__auto____$1,entry__10191__auto__);
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._occurs_check.call(null,s,x,v__$1.body);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10197__auto__){var self__ = this;
var this__10197__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),self__.binding_nom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",1016933652),self__.body],null))], null),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10189__auto__){var self__ = this;
var this__10189__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10181__auto__,other__10182__auto__){var self__ = this;
var this__10181__auto____$1 = this;if(cljs.core.truth_((function (){var and__9611__auto__ = other__10182__auto__;if(cljs.core.truth_(and__9611__auto__))
{return ((this__10181__auto____$1.constructor === other__10182__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10181__auto____$1,other__10182__auto__));
} else
{return and__9611__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10184__auto__,G__31826){var self__ = this;
var this__10184__auto____$1 = this;return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,G__31826,self__.__extmap,self__.__hash));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10183__auto__){var self__ = this;
var this__10183__auto____$1 = this;return self__.__meta;
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
{var vec__31833 = cljs.core.logic.nominal.swap_noms.call(null,v__$1.body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1.binding_nom,u.binding_nom], null),s);var t = cljs.core.nth.call(null,vec__31833,0,null);var s__$1 = cljs.core.nth.call(null,vec__31833,1,null);return cljs.core.logic.composeg.call(null,cljs.core.logic.nominal.hash.call(null,u.binding_nom,v__$1.body),(function (a__31005__auto__){var has_cs_QMARK___31006__auto__ = (cljs.core.count.call(null,a__31005__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___31006__auto__)?(new cljs.core.logic.Substitutions(a__31005__auto__.s,cljs.core.PersistentVector.EMPTY,a__31005__auto__.ts,a__31005__auto__.cs,a__31005__auto__.cq,a__31005__auto__.cqs,a__31005__auto__.oc,a__31005__auto__._meta)):a__31005__auto__),t,u.body);if(cljs.core.truth_(temp__4098__auto__))
{var ap__31007__auto__ = temp__4098__auto__;var vs__31008__auto__ = ((has_cs_QMARK___31006__auto__)?ap__31007__auto__.vs:null);var changed_QMARK___31009__auto__ = (cljs.core.count.call(null,vs__31008__auto__) > 0);if(changed_QMARK___31009__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__31008__auto__,ap__31007__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__31007__auto__.s,null,ap__31007__auto__.ts,ap__31007__auto__.cs,ap__31007__auto__.cq,ap__31007__auto__.cqs,ap__31007__auto__.oc,ap__31007__auto__._meta)));
} else
{return ap__31007__auto__;
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
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10194__auto__,k__10195__auto__){var self__ = this;
var this__10194__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),null,new cljs.core.Keyword(null,"body","body",1016933652),null], null), null),k__10195__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10194__auto____$1),self__.__meta),k__10195__auto__);
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10195__auto__)),null));
}
});
cljs.core.logic.nominal.Tie.cljs$lang$type = true;
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrSeq = (function (this__10219__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrWriter = (function (this__10219__auto__,writer__10220__auto__){return cljs.core._write.call(null,writer__10220__auto__,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.__GT_Tie = (function __GT_Tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.map__GT_Tie = (function map__GT_Tie(G__31828){return (new cljs.core.logic.nominal.Tie(new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(G__31828),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(G__31828),null,cljs.core.dissoc.call(null,G__31828,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),new cljs.core.Keyword(null,"body","body",1016933652))));
});
cljs.core.logic.nominal.tie = (function tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.tie_QMARK_ = (function tie_QMARK_(x){return (x instanceof cljs.core.logic.nominal.Tie);
});
