// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.nominal');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.nominal.INomSwap = (function (){var obj53352 = {};return obj53352;
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
{throw cljs.core.missing_protocol("INomSwap.swap-noms",t);
}
}
})().call(null,t,swap,s);
}
});
cljs.core.logic.nominal.nom_swap = (function nom_swap(a,swap){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.first(swap)))
{return cljs.core.second(swap);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.second(swap)))
{return cljs.core.first(swap);
} else
{if(cljs.core.constant$keyword$76)
{return a;
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__53353 = cljs.core.logic.nominal.swap_noms(cljs.core.seq(t__$1),swap,s);var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53353,0,null);var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53353,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(ts),s__$1], null);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__53354 = cljs.core.logic.nominal.swap_noms(cljs.core.logic._lfirst(t__$1),swap,s);var tfirst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53354,0,null);var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53354,1,null);var vec__53355 = cljs.core.logic.nominal.swap_noms(cljs.core.logic._lnext(t__$1),swap,s__$1);var tnext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53355,0,null);var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53355,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta((cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(tfirst,tnext) : cljs.core.logic.lcons.call(null,tfirst,tnext)),cljs.core.meta(t__$1)),s__$2], null);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var t__$2 = cljs.core.logic._walk(s,t__$1);if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(t__$2) : cljs.core.logic.lvar_QMARK_.call(null,t__$2))))
{var v = cljs.core.with_meta((cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0() : cljs.core.logic.lvar.call(null)),cljs.core.meta(t__$2));var rt = cljs.core.logic._root_val(s,t__$2);var s__$1 = (cljs.core.logic.nominal.suspc.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.nominal.suspc.cljs$core$IFn$_invoke$arity$3(v,t__$2,swap) : cljs.core.logic.nominal.suspc.call(null,v,t__$2,swap)).call(null,cljs.core.logic.entangle(((cljs.core.logic.subst_val_QMARK_(rt))?cljs.core.logic._ext_no_check(s,v,rt):s),t__$2,v));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,s__$1], null);
} else
{return cljs.core.logic.nominal.swap_noms(t__$2,swap,s);
}
});
(cljs.core.logic.nominal.INomSwap["_"] = true);
(cljs.core.logic.nominal.swap_noms["_"] = (function (t,swap,s){if(cljs.core.coll_QMARK_(t))
{if(cljs.core.seq(t))
{var vec__53356 = cljs.core.logic.nominal.swap_noms(cljs.core.first(t),swap,s);var tfirst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53356,0,null);var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53356,1,null);var vec__53357 = cljs.core.logic.nominal.swap_noms(cljs.core.next(t),swap,s__$1);var tnext = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53357,0,null);var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53357,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cons(tfirst,tnext),cljs.core.meta(t)),s__$2], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,s], null);
}
} else
{if(cljs.core.map_QMARK_(t))
{var vec__53358 = cljs.core.logic.nominal.swap_noms(cljs.core.seq(t),swap,s);var tkvs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53358,0,null);var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53358,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,tkvs),s__$1], null);
} else
{if(cljs.core.constant$keyword$76)
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
cljs.core.logic.nominal.Nom.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic.nominal/Nom");
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write(writer,[cljs.core.str("<nom:"),cljs.core.str(self__.lvar.name),cljs.core.str(">")].join(''));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var self__ = this;
var t__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.nominal.nom_swap(t__$1,swap),s], null);
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext(s,v__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(s),true))?"a":self__.lvar.oname)),cljs.core.str("_"),cljs.core.str(cljs.core.count(s))].join('')));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (cljs.core.logic.nominal.nom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.nominal.nom.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(self__.lvar,new_meta)) : cljs.core.logic.nominal.nom.call(null,cljs.core.with_meta(self__.lvar,new_meta)));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.meta(self__.lvar);
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((o instanceof cljs.core.logic.nominal.Nom)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.lvar,o.lvar));
});
cljs.core.logic.nominal.Nom.prototype.hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash(self__.lvar);
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
cljs.core.logic.nominal._hash = (function _hash(a,x){if(typeof cljs.core.logic.nominal.t53366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t53366 = (function (x,a,_hash,meta53367){
this.x = x;
this.a = a;
this._hash = _hash;
this.meta53367 = meta53367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t53366.cljs$lang$type = true;
cljs.core.logic.nominal.t53366.cljs$lang$ctorStr = "cljs.core.logic.nominal/t53366";
cljs.core.logic.nominal.t53366.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic.nominal/t53366");
});
cljs.core.logic.nominal.t53366.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t53366.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null);
});
cljs.core.logic.nominal.t53366.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t53366.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;var x__$2 = cljs.core.logic._walk_STAR_(r,cljs.core.logic._walk_STAR_(s,self__.x));var a__$2 = cljs.core.logic._walk_STAR_(r,cljs.core.logic._walk_STAR_(s,self__.a));if(((a__$2 instanceof cljs.core.Symbol)) && (cljs.core.empty_QMARK_(cljs.core.filter(cljs.core.logic.lvar_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,x__$2))))))
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(a__$2),cljs.core.str("#"),cljs.core.str(x__$2)].join(''));
} else
{return null;
}
});
cljs.core.logic.nominal.t53366.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.nominal.t53366.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.nominal","hash","cljs.core.logic.nominal/hash",99352748,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,175),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,18),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,175),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,46)], 0)))));
});
cljs.core.logic.nominal.t53366.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.a,self__.x], null);
});
cljs.core.logic.nominal.t53366.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.nominal.t53366.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var a__$2 = cljs.core.logic._walk(s,self__.a);var x__$2 = cljs.core.logic._walk(s,self__.x);if(typeof cljs.core.logic.nominal.t53369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t53369 = (function (s,this$,meta53367,x,a,_hash,meta53370){
this.s = s;
this.this$ = this$;
this.meta53367 = meta53367;
this.x = x;
this.a = a;
this._hash = _hash;
this.meta53370 = meta53370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t53369.cljs$lang$type = true;
cljs.core.logic.nominal.t53369.cljs$lang$ctorStr = "cljs.core.logic.nominal/t53369";
cljs.core.logic.nominal.t53369.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic.nominal/t53369");
});
cljs.core.logic.nominal.t53369.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.nominal.t53369.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.a) : cljs.core.logic.lvar_QMARK_.call(null,self__.a))))
{var or__9629__auto__ = (function (){var and__9617__auto__ = (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.x) : cljs.core.logic.lvar_QMARK_.call(null,self__.x));if(cljs.core.truth_(and__9617__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.x,self__.a);
} else
{return and__9617__auto__;
}
})();if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return (cljs.core.logic.tree_term_QMARK_(self__.x)) && (cljs.core.not((cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.x) : cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x))));
}
} else
{return (!(cljs.core.logic.nominal.nom_QMARK_(self__.a))) || (cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.x) : cljs.core.logic.lvar_QMARK_.call(null,self__.x))));
}
});
cljs.core.logic.nominal.t53369.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.remcg(self__.this$),(function (s__$3){if(cljs.core.truth_((function (){var and__9617__auto__ = (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.a) : cljs.core.logic.lvar_QMARK_.call(null,self__.a));if(cljs.core.truth_(and__9617__auto__))
{var and__9617__auto____$1 = (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.x) : cljs.core.logic.lvar_QMARK_.call(null,self__.x));if(cljs.core.truth_(and__9617__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.x,self__.a);
} else
{return and__9617__auto____$1;
}
} else
{return and__9617__auto__;
}
})()))
{return null;
} else
{if((cljs.core.logic.nominal.nom_QMARK_(self__.a)) && (cljs.core.logic.nominal.nom_QMARK_(self__.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.x,self__.a)))
{return null;
} else
{if((cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.a) : cljs.core.logic.lvar_QMARK_.call(null,self__.a)))) && (!(cljs.core.logic.nominal.nom_QMARK_(self__.a))))
{return null;
} else
{if(cljs.core.truth_((function (){var and__9617__auto__ = cljs.core.logic.nominal.nom_QMARK_(self__.a);if(and__9617__auto__)
{var and__9617__auto____$1 = (cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.x) : cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x));if(cljs.core.truth_(and__9617__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.x.binding_nom,self__.a);
} else
{return and__9617__auto____$1;
}
} else
{return and__9617__auto__;
}
})()))
{return s__$3;
} else
{if((cljs.core.logic.tree_term_QMARK_(self__.x)) && ((cljs.core.not((cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.x) : cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x)))) || (cljs.core.logic.nominal.nom_QMARK_(self__.a))))
{return cljs.core.logic.constrain_tree(self__.x,(function (t,s__$4){return (cljs.core.logic.nominal.hash.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.nominal.hash.cljs$core$IFn$_invoke$arity$2(self__.a,t) : cljs.core.logic.nominal.hash.call(null,self__.a,t)).call(null,s__$4);
})).call(null,s__$3);
} else
{if(cljs.core.constant$keyword$76)
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
cljs.core.logic.nominal.t53369.prototype.apply = (function (self__,args53372){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args53372)));
});
cljs.core.logic.nominal.t53369.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.remcg(self__.this$),(function (s__$3){if(cljs.core.truth_((function (){var and__9617__auto__ = (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.a) : cljs.core.logic.lvar_QMARK_.call(null,self__.a));if(cljs.core.truth_(and__9617__auto__))
{var and__9617__auto____$1 = (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.x) : cljs.core.logic.lvar_QMARK_.call(null,self__.x));if(cljs.core.truth_(and__9617__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.x,self__.a);
} else
{return and__9617__auto____$1;
}
} else
{return and__9617__auto__;
}
})()))
{return null;
} else
{if((cljs.core.logic.nominal.nom_QMARK_(self__.a)) && (cljs.core.logic.nominal.nom_QMARK_(self__.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.x,self__.a)))
{return null;
} else
{if((cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.a) : cljs.core.logic.lvar_QMARK_.call(null,self__.a)))) && (!(cljs.core.logic.nominal.nom_QMARK_(self__.a))))
{return null;
} else
{if(cljs.core.truth_((function (){var and__9617__auto__ = cljs.core.logic.nominal.nom_QMARK_(self__.a);if(and__9617__auto__)
{var and__9617__auto____$1 = (cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.x) : cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x));if(cljs.core.truth_(and__9617__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.x.binding_nom,self__.a);
} else
{return and__9617__auto____$1;
}
} else
{return and__9617__auto__;
}
})()))
{return s__$3;
} else
{if((cljs.core.logic.tree_term_QMARK_(self__.x)) && ((cljs.core.not((cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.x) : cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x)))) || (cljs.core.logic.nominal.nom_QMARK_(self__.a))))
{return cljs.core.logic.constrain_tree(self__.x,(function (t,s__$4){return (cljs.core.logic.nominal.hash.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.nominal.hash.cljs$core$IFn$_invoke$arity$2(self__.a,t) : cljs.core.logic.nominal.hash.call(null,self__.a,t)).call(null,s__$4);
})).call(null,s__$3);
} else
{if(cljs.core.constant$keyword$76)
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
cljs.core.logic.nominal.t53369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53371){var self__ = this;
var _53371__$1 = this;return self__.meta53370;
});
cljs.core.logic.nominal.t53369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53371,meta53370__$1){var self__ = this;
var _53371__$1 = this;return (new cljs.core.logic.nominal.t53369(self__.s,self__.this$,self__.meta53367,self__.x,self__.a,self__._hash,meta53370__$1));
});
cljs.core.logic.nominal.__GT_t53369 = (function __GT_t53369(s__$1,this$__$2,meta53367__$1,x__$3,a__$3,_hash__$2,meta53370){return (new cljs.core.logic.nominal.t53369(s__$1,this$__$2,meta53367__$1,x__$3,a__$3,_hash__$2,meta53370));
});
}
return (new cljs.core.logic.nominal.t53369(s,this$__$1,self__.meta53367,x__$2,a__$2,self__._hash,null));
});
cljs.core.logic.nominal.t53366.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.a),cljs.core.str("#"),cljs.core.str(self__.x)].join('');
});
cljs.core.logic.nominal.t53366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53368){var self__ = this;
var _53368__$1 = this;return self__.meta53367;
});
cljs.core.logic.nominal.t53366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53368,meta53367__$1){var self__ = this;
var _53368__$1 = this;return (new cljs.core.logic.nominal.t53366(self__.x,self__.a,self__._hash,meta53367__$1));
});
cljs.core.logic.nominal.__GT_t53366 = (function __GT_t53366(x__$1,a__$1,_hash__$1,meta53367){return (new cljs.core.logic.nominal.t53366(x__$1,a__$1,_hash__$1,meta53367));
});
}
return (new cljs.core.logic.nominal.t53366(x,a,_hash,null));
});
cljs.core.logic.nominal.hash = (function hash(a,t){return cljs.core.logic.cgoal(cljs.core.logic.nominal._hash(a,t));
});
cljs.core.logic.nominal._do_suspc = (function _do_suspc(t1,t2,swap,a){var x = (function (){var vs = cljs.core.PersistentHashSet.fromArray([t2], true);var seen = cljs.core.PersistentHashSet.EMPTY;while(true){
var vs__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(vs,seen);if(cljs.core.empty_QMARK_(vs__$1))
{return true;
} else
{if(cljs.core.truth_(cljs.core.some(((function (vs,seen,vs__$1){
return (function (p1__53373_SHARP_){return cljs.core.logic._occurs_check(a,p1__53373_SHARP_,t1);
});})(vs,seen,vs__$1))
,vs__$1)))
{return false;
} else
{if(cljs.core.constant$keyword$76)
{{
var G__53376 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,seen,vs__$1){
return (function (s0,s1){return clojure.set.union.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.logic._root_val(a,s1).eset);
});})(vs,seen,vs__$1))
,cljs.core.PersistentHashSet.EMPTY,vs__$1);
var G__53377 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(vs__$1,seen);
vs = G__53376;
seen = G__53377;
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
{var vec__53375 = cljs.core.logic.nominal.swap_noms(t1,swap,a);var t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53375,0,null);var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53375,1,null);return (function (a__52571__auto__){var has_cs_QMARK___52572__auto__ = (cljs.core.count(a__52571__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___52572__auto__)?(new cljs.core.logic.Substitutions(a__52571__auto__.s,cljs.core.PersistentVector.EMPTY,a__52571__auto__.ts,a__52571__auto__.cs,a__52571__auto__.cq,a__52571__auto__.cqs,a__52571__auto__.oc,a__52571__auto__._meta)):a__52571__auto__),t1__$1,t2);if(cljs.core.truth_(temp__4098__auto__))
{var ap__52573__auto__ = temp__4098__auto__;var vs__52574__auto__ = ((has_cs_QMARK___52572__auto__)?ap__52573__auto__.vs:null);var changed_QMARK___52575__auto__ = (cljs.core.count(vs__52574__auto__) > 0);if(changed_QMARK___52575__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__52574__auto__,ap__52573__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__52573__auto__.s,null,ap__52573__auto__.ts,ap__52573__auto__.cs,ap__52573__auto__.cq,ap__52573__auto__.cqs,ap__52573__auto__.oc,ap__52573__auto__._meta)));
} else
{return ap__52573__auto__;
}
} else
{return null;
}
}).call(null,a__$1);
} else
{return null;
}
});
cljs.core.logic.nominal._suspc = (function _suspc(v1,v2,swap){if(typeof cljs.core.logic.nominal.t53385 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t53385 = (function (swap,v2,v1,_suspc,meta53386){
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta53386 = meta53386;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t53385.cljs$lang$type = true;
cljs.core.logic.nominal.t53385.cljs$lang$ctorStr = "cljs.core.logic.nominal/t53385";
cljs.core.logic.nominal.t53385.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic.nominal/t53385");
});
cljs.core.logic.nominal.t53385.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t53385.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null);
});
cljs.core.logic.nominal.t53385.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t53385.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,a){var self__ = this;
var c__$1 = this;var t1 = cljs.core.logic._walk_STAR_(r,cljs.core.logic._walk_STAR_(a,self__.v1));var t2 = cljs.core.logic._walk_STAR_(r,cljs.core.logic._walk_STAR_(a,self__.v2));var swap__$2 = cljs.core.logic._walk_STAR_(r,self__.swap);if((cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(t1) : cljs.core.logic.lvar_QMARK_.call(null,t1)))) && (cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(t2) : cljs.core.logic.lvar_QMARK_.call(null,t2)))) && ((cljs.core.first(swap__$2) instanceof cljs.core.Symbol)) && ((cljs.core.second(swap__$2) instanceof cljs.core.Symbol)))
{return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"swap","swap",-1636988084,null)),cljs.core._conj(cljs.core.List.EMPTY,swap__$2),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,t1),cljs.core._conj(cljs.core.List.EMPTY,t2)], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,247),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,12),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,247),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,34)], 0)))));
} else
{return null;
}
});
cljs.core.logic.nominal.t53385.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.nominal.t53385.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.nominal","suspc","cljs.core.logic.nominal/suspc",54642610,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,235),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,18),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,235),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,47)], 0)))));
});
cljs.core.logic.nominal.t53385.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v1,self__.v2], null);
});
cljs.core.logic.nominal.t53385.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.nominal.t53385.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,a){var self__ = this;
var this$__$1 = this;var t1 = cljs.core.logic._walk(a,self__.v1);var t2 = cljs.core.logic._walk(a,self__.v2);if(typeof cljs.core.logic.nominal.t53388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t53388 = (function (t2,t1,a,this$,meta53386,swap,v2,v1,_suspc,meta53389){
this.t2 = t2;
this.t1 = t1;
this.a = a;
this.this$ = this$;
this.meta53386 = meta53386;
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta53389 = meta53389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t53388.cljs$lang$type = true;
cljs.core.logic.nominal.t53388.cljs$lang$ctorStr = "cljs.core.logic.nominal/t53388";
cljs.core.logic.nominal.t53388.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic.nominal/t53388");
});
cljs.core.logic.nominal.t53388.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.nominal.t53388.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.t1) : cljs.core.logic.lvar_QMARK_.call(null,self__.t1)))) || (cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.t2) : cljs.core.logic.lvar_QMARK_.call(null,self__.t2)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.t1,self__.t2));
});
cljs.core.logic.nominal.t53388.prototype.call = (function (self__,a__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.remcg(self__.this$),(function (a__$3){if(cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.t1) : cljs.core.logic.lvar_QMARK_.call(null,self__.t1))))
{return cljs.core.logic.nominal._do_suspc(self__.t1,self__.t2,self__.swap,a__$3);
} else
{if(cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.t2) : cljs.core.logic.lvar_QMARK_.call(null,self__.t2))))
{return cljs.core.logic.nominal._do_suspc(self__.t2,self__.t1,self__.swap,a__$3);
} else
{if(cljs.core.constant$keyword$76)
{var a_STAR_ = self__.swap;var a__$4 = a__$3;while(true){
if(cljs.core.empty_QMARK_(a_STAR_))
{return a__$4;
} else
{{
var G__53392 = cljs.core.rest(a_STAR_);
var G__53393 = cljs.core.logic.nominal.hash(cljs.core.first(a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__53392;
a__$4 = G__53393;
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
cljs.core.logic.nominal.t53388.prototype.apply = (function (self__,args53391){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args53391)));
});
cljs.core.logic.nominal.t53388.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.remcg(self__.this$),(function (a__$3){if(cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.t1) : cljs.core.logic.lvar_QMARK_.call(null,self__.t1))))
{return cljs.core.logic.nominal._do_suspc(self__.t1,self__.t2,self__.swap,a__$3);
} else
{if(cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.t2) : cljs.core.logic.lvar_QMARK_.call(null,self__.t2))))
{return cljs.core.logic.nominal._do_suspc(self__.t2,self__.t1,self__.swap,a__$3);
} else
{if(cljs.core.constant$keyword$76)
{var a_STAR_ = self__.swap;var a__$4 = a__$3;while(true){
if(cljs.core.empty_QMARK_(a_STAR_))
{return a__$4;
} else
{{
var G__53394 = cljs.core.rest(a_STAR_);
var G__53395 = cljs.core.logic.nominal.hash(cljs.core.first(a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__53394;
a__$4 = G__53395;
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
cljs.core.logic.nominal.t53388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53390){var self__ = this;
var _53390__$1 = this;return self__.meta53389;
});
cljs.core.logic.nominal.t53388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53390,meta53389__$1){var self__ = this;
var _53390__$1 = this;return (new cljs.core.logic.nominal.t53388(self__.t2,self__.t1,self__.a,self__.this$,self__.meta53386,self__.swap,self__.v2,self__.v1,self__._suspc,meta53389__$1));
});
cljs.core.logic.nominal.__GT_t53388 = (function __GT_t53388(t2__$1,t1__$1,a__$1,this$__$2,meta53386__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta53389){return (new cljs.core.logic.nominal.t53388(t2__$1,t1__$1,a__$1,this$__$2,meta53386__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta53389));
});
}
return (new cljs.core.logic.nominal.t53388(t2,t1,a,this$__$1,self__.meta53386,self__.swap,self__.v2,self__.v1,self__._suspc,null));
});
cljs.core.logic.nominal.t53385.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("suspc"),cljs.core.str(self__.v1),cljs.core.str(self__.v2),cljs.core.str(self__.swap)].join('');
});
cljs.core.logic.nominal.t53385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53387){var self__ = this;
var _53387__$1 = this;return self__.meta53386;
});
cljs.core.logic.nominal.t53385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53387,meta53386__$1){var self__ = this;
var _53387__$1 = this;return (new cljs.core.logic.nominal.t53385(self__.swap,self__.v2,self__.v1,self__._suspc,meta53386__$1));
});
cljs.core.logic.nominal.__GT_t53385 = (function __GT_t53385(swap__$1,v2__$1,v1__$1,_suspc__$1,meta53386){return (new cljs.core.logic.nominal.t53385(swap__$1,v2__$1,v1__$1,_suspc__$1,meta53386));
});
}
return (new cljs.core.logic.nominal.t53385(swap,v2,v1,_suspc,null));
});
cljs.core.logic.nominal.suspc = (function suspc(v1,v2,swap){return cljs.core.logic.cgoal(cljs.core.logic.nominal._suspc(v1,v2,swap));
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
var t__$1 = this;var vec__53399 = cljs.core.logic.nominal.swap_noms(t__$1.body,swap,s);var tbody = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53399,0,null);var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53399,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta((cljs.core.logic.nominal.tie.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.nominal.tie.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.nominal.nom_swap(t__$1.binding_nom,swap),tbody) : cljs.core.logic.nominal.tie.call(null,cljs.core.logic.nominal.nom_swap(t__$1.binding_nom,swap),tbody)),cljs.core.meta(t__$1)),s__$1], null);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10186__auto__){var self__ = this;
var this__10186__auto____$1 = this;var h__10040__auto__ = self__.__hash;if(!((h__10040__auto__ == null)))
{return h__10040__auto__;
} else
{var h__10040__auto____$1 = cljs.core.hash_imap(this__10186__auto____$1);self__.__hash = h__10040__auto____$1;
return h__10040__auto____$1;
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10191__auto__,k__10192__auto__){var self__ = this;
var this__10191__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10191__auto____$1,k__10192__auto__,null);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10193__auto__,k53397,else__10194__auto__){var self__ = this;
var this__10193__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k53397,cljs.core.constant$keyword$134))
{return self__.binding_nom;
} else
{if(cljs.core.keyword_identical_QMARK_(k53397,cljs.core.constant$keyword$135))
{return self__.body;
} else
{if(cljs.core.constant$keyword$76)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53397,else__10194__auto__);
} else
{return null;
}
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10198__auto__,k__10199__auto__,G__53396){var self__ = this;
var this__10198__auto____$1 = this;var pred__53400 = cljs.core.keyword_identical_QMARK_;var expr__53401 = k__10199__auto__;if(cljs.core.truth_((pred__53400.cljs$core$IFn$_invoke$arity$2 ? pred__53400.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$134,expr__53401) : pred__53400.call(null,cljs.core.constant$keyword$134,expr__53401))))
{return (new cljs.core.logic.nominal.Tie(G__53396,self__.body,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__53400.cljs$core$IFn$_invoke$arity$2 ? pred__53400.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$135,expr__53401) : pred__53400.call(null,cljs.core.constant$keyword$135,expr__53401))))
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,G__53396,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10199__auto__,G__53396),null));
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IForceAnswerTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var self__ = this;
var v__$1 = this;return cljs.core.logic.force_ans(v__$1.body);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.with_meta((cljs.core.logic.nominal.tie.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.nominal.tie.cljs$core$IFn$_invoke$arity$2(cljs.core.logic._walk_term(v__$1.binding_nom,f),cljs.core.logic._walk_term(v__$1.body,f)) : cljs.core.logic.nominal.tie.call(null,cljs.core.logic._walk_term(v__$1.binding_nom,f),cljs.core.logic._walk_term(v__$1.body,f))),cljs.core.meta(v__$1));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IConstrainTree$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var self__ = this;
var t__$1 = this;return (fc.cljs$core$IFn$_invoke$arity$2 ? fc.cljs$core$IFn$_invoke$arity$2(t__$1.body,s) : fc.call(null,t__$1.body,s));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10205__auto__,writer__10206__auto__,opts__10207__auto__){var self__ = this;
var this__10205__auto____$1 = this;var pr_pair__10208__auto__ = (function (keyval__10209__auto__){return cljs.core.pr_sequential_writer(writer__10206__auto__,cljs.core.pr_writer,""," ","",opts__10207__auto__,keyval__10209__auto__);
});return cljs.core.pr_sequential_writer(writer__10206__auto__,pr_pair__10208__auto__,"#cljs.core.logic.nominal.Tie{",", ","}",opts__10207__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$134,self__.binding_nom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$135,self__.body],null))], null),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10196__auto__,entry__10197__auto__){var self__ = this;
var this__10196__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__10197__auto__))
{return cljs.core._assoc(this__10196__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10197__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10197__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10196__auto____$1,entry__10197__auto__);
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._occurs_check(s,x,v__$1.body);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10203__auto__){var self__ = this;
var this__10203__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$134,self__.binding_nom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$135,self__.body],null))], null),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10195__auto__){var self__ = this;
var this__10195__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10187__auto__,other__10188__auto__){var self__ = this;
var this__10187__auto____$1 = this;if(cljs.core.truth_((function (){var and__9617__auto__ = other__10188__auto__;if(cljs.core.truth_(and__9617__auto__))
{return ((this__10187__auto____$1.constructor === other__10188__auto__.constructor)) && (cljs.core.equiv_map(this__10187__auto____$1,other__10188__auto__));
} else
{return and__9617__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10190__auto__,G__53396){var self__ = this;
var this__10190__auto____$1 = this;return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,G__53396,self__.__extmap,self__.__hash));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10189__auto__){var self__ = this;
var this__10189__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$ITreeTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var s__$1 = cljs.core.logic._reify_STAR_(s,self__.binding_nom);var s__$2 = cljs.core.logic._reify_STAR_(s__$1,self__.body);return s__$2;
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;if(cljs.core.truth_((cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.nominal.tie_QMARK_.cljs$core$IFn$_invoke$arity$1(u) : cljs.core.logic.nominal.tie_QMARK_.call(null,u))))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1.binding_nom,u.binding_nom))
{return cljs.core.logic._unify(s,v__$1.body,u.body);
} else
{var vec__53403 = cljs.core.logic.nominal.swap_noms(v__$1.body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1.binding_nom,u.binding_nom], null),s);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53403,0,null);var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53403,1,null);return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.nominal.hash(u.binding_nom,v__$1.body),(function (a__52571__auto__){var has_cs_QMARK___52572__auto__ = (cljs.core.count(a__52571__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___52572__auto__)?(new cljs.core.logic.Substitutions(a__52571__auto__.s,cljs.core.PersistentVector.EMPTY,a__52571__auto__.ts,a__52571__auto__.cs,a__52571__auto__.cq,a__52571__auto__.cqs,a__52571__auto__.oc,a__52571__auto__._meta)):a__52571__auto__),t,u.body);if(cljs.core.truth_(temp__4098__auto__))
{var ap__52573__auto__ = temp__4098__auto__;var vs__52574__auto__ = ((has_cs_QMARK___52572__auto__)?ap__52573__auto__.vs:null);var changed_QMARK___52575__auto__ = (cljs.core.count(vs__52574__auto__) > 0);if(changed_QMARK___52575__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__52574__auto__,ap__52573__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__52573__auto__.s,null,ap__52573__auto__.ts,ap__52573__auto__.cs,ap__52573__auto__.cq,ap__52573__auto__.cqs,ap__52573__auto__.oc,ap__52573__auto__._meta)));
} else
{return ap__52573__auto__;
}
} else
{return null;
}
})).call(null,s__$1);
}
} else
{if(cljs.core.constant$keyword$76)
{return null;
} else
{return null;
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10200__auto__,k__10201__auto__){var self__ = this;
var this__10200__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$134,null,cljs.core.constant$keyword$135,null], null), null),k__10201__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__10200__auto____$1),self__.__meta),k__10201__auto__);
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10201__auto__)),null));
}
});
cljs.core.logic.nominal.Tie.cljs$lang$type = true;
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrSeq = (function (this__10225__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrWriter = (function (this__10225__auto__,writer__10226__auto__){return cljs.core._write(writer__10226__auto__,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.__GT_Tie = (function __GT_Tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.map__GT_Tie = (function map__GT_Tie(G__53398){return (new cljs.core.logic.nominal.Tie(cljs.core.constant$keyword$134.cljs$core$IFn$_invoke$arity$1(G__53398),cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(G__53398),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53398,cljs.core.constant$keyword$134,cljs.core.array_seq([cljs.core.constant$keyword$135], 0))));
});
cljs.core.logic.nominal.tie = (function tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.tie_QMARK_ = (function tie_QMARK_(x){return (x instanceof cljs.core.logic.nominal.Tie);
});
