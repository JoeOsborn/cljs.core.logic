// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.logic.fd');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic');
goog.require('cljs.core');
goog.require('cljs.core.logic.protocols.IEnforceableConstraint');
goog.require('clojure.string');
goog.require('cljs.core.logic.protocols');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core');
cljs.core.logic.fd.IInterval = {};
cljs.core.logic.fd._lb = (function _lb(this$){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$IInterval$_lb$arity$1;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$IInterval$_lb$arity$1(this$);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._lb[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._lb["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterval.-lb",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd._ub = (function _ub(this$){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$IInterval$_ub$arity$1;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$IInterval$_ub$arity$1(this$);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._ub[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._ub["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterval.-ub",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd.IIntervals = {};
cljs.core.logic.fd._intervals = (function _intervals(this$){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$IIntervals$_intervals$arity$1;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$IIntervals$_intervals$arity$1(this$);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._intervals[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._intervals["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIntervals.-intervals",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd.ISortedDomain = {};
cljs.core.logic.fd._drop_one = (function _drop_one(this$){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1(this$);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._drop_one[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._drop_one["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-drop-one",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd._drop_before = (function _drop_before(this$,n){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2(this$,n);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._drop_before[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._drop_before["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-drop-before",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd._keep_before = (function _keep_before(this$,n){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2(this$,n);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._keep_before[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._keep_before["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-keep-before",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd.ISet = {};
cljs.core.logic.fd._member_QMARK_ = (function _member_QMARK_(this$,n){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2(this$,n);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._member_QMARK_[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._member_QMARK_["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-member?",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd._disjoint_QMARK_ = (function _disjoint_QMARK_(this$,that){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2(this$,that);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._disjoint_QMARK_[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._disjoint_QMARK_["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoint?",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd._intersection = (function _intersection(this$,that){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$ISet$_intersection$arity$2;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_intersection$arity$2(this$,that);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._intersection[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._intersection["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-intersection",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd._difference = (function _difference(this$,that){if((function (){var and__4695__auto__ = this$;if(and__4695__auto__)
{return this$.cljs$core$logic$fd$ISet$_difference$arity$2;
} else
{return and__4695__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_difference$arity$2(this$,that);
} else
{var x__5300__auto__ = (((this$ == null))?null:this$);return (function (){var or__4704__auto__ = (cljs.core.logic.fd._difference[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.fd._difference["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-difference",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd.bounds = (function bounds(i){return cljs.core.logic.pair.call(null,cljs.core.logic.fd._lb.call(null,i),cljs.core.logic.fd._ub.call(null,i));
});
cljs.core.logic.fd.interval__LT_ = (function interval__LT_(i,j){return cljs.core._LT_.call(null,cljs.core.logic.fd._ub.call(null,i),cljs.core.logic.fd._lb.call(null,j));
});
cljs.core.logic.fd.interval__LT__EQ_ = (function interval__LT__EQ_(i,j){return cljs.core._LT__EQ_.call(null,cljs.core.logic.fd._ub.call(null,i),cljs.core.logic.fd._lb.call(null,j));
});
cljs.core.logic.fd.interval__GT_ = (function interval__GT_(i,j){return cljs.core._GT_.call(null,cljs.core.logic.fd._lb.call(null,i),cljs.core.logic.fd._ub.call(null,j));
});
cljs.core.logic.fd.interval__GT__EQ_ = (function interval__GT__EQ_(i,j){return cljs.core._GT__EQ_.call(null,cljs.core.logic.fd._lb.call(null,i),cljs.core.logic.fd._ub.call(null,j));
});

/**
* @constructor
*/
cljs.core.logic.fd.FiniteDomain = (function (s,min,max){
this.s = s;
this.min = min;
this.max = max;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149581056;
})
cljs.core.logic.fd.FiniteDomain.cljs$lang$type = true;
cljs.core.logic.fd.FiniteDomain.cljs$lang$ctorStr = "cljs.core.logic.fd/FiniteDomain";
cljs.core.logic.fd.FiniteDomain.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/FiniteDomain");
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<domain:"),cljs.core.str(cljs.core.seq.call(null,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(x__$1))),cljs.core.str(">")].join(''));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IMergeDomains$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IMergeDomains$_merge_doms$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd._intersection.call(null,this$__$1,that);
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IIntervals$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IIntervals$_intervals$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq.call(null,self__.s);
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.s.call(null,n)))
{return true;
} else
{return false;
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{if(cljs.core.truth_(self__.s.call(null,that)))
{return false;
} else
{return true;
}
} else
{if((that instanceof cljs.core.logic.fd.FiniteDomain))
{if(cljs.core._LT_.call(null,self__.max,new cljs.core.Keyword(null,"min","min",1014012356).cljs$core$IFn$_invoke$arity$1(that)))
{return true;
} else
{if(cljs.core._GT_.call(null,self__.min,new cljs.core.Keyword(null,"max","max",1014012118).cljs$core$IFn$_invoke$arity$1(that)))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,self__.s,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(that)));
} else
{return null;
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.disjoint_QMARK__STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$_intersection$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,this$__$1,that)))
{return that;
} else
{return null;
}
} else
{if((that instanceof cljs.core.logic.fd.FiniteDomain))
{return cljs.core.logic.fd.sorted_set__GT_domain.call(null,clojure.set.intersection.call(null,self__.s,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(that)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.intersection_STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$_difference$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{return cljs.core.logic.fd.sorted_set__GT_domain.call(null,cljs.core.disj.call(null,self__.s,that));
} else
{if((that instanceof cljs.core.logic.fd.FiniteDomain))
{return cljs.core.logic.fd.sorted_set__GT_domain.call(null,clojure.set.difference.call(null,self__.s,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(that)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.difference_STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var s__$1 = cljs.core.disj.call(null,self__.s,self__.min);var c = cljs.core.count.call(null,s__$1);if(cljs.core._EQ_.call(null,c,1))
{return cljs.core.first.call(null,s__$1);
} else
{if(cljs.core._GT_.call(null,c,1))
{return (new cljs.core.logic.fd.FiniteDomain(s__$1,cljs.core.first.call(null,s__$1),self__.max));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.drop_while.call(null,(function (p1__35567_SHARP_){return cljs.core._LT_.call(null,p1__35567_SHARP_,n);
}),self__.s));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.take_while.call(null,(function (p1__35568_SHARP_){return cljs.core._LT_.call(null,p1__35568_SHARP_,n);
}),self__.s));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IInterval$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IInterval$_lb$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.min;
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IInterval$_ub$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.max;
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IMemberCount$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IMemberCount$_member_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.s);
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__35569 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__35569))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__35569))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357),G__35569))
{return self__.s;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.fd.finite_domain_QMARK_.call(null,that)))
{if(cljs.core._EQ_.call(null,cljs.core.logic.protocols._member_count.call(null,this$__$1),cljs.core.logic.protocols._member_count.call(null,that)))
{return cljs.core._EQ_.call(null,self__.s,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(that));
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.fd.__GT_FiniteDomain = (function __GT_FiniteDomain(s,min,max){return (new cljs.core.logic.fd.FiniteDomain(s,min,max));
});
cljs.core.logic.fd.finite_domain_QMARK_ = (function finite_domain_QMARK_(x){return (x instanceof cljs.core.logic.fd.FiniteDomain);
});
cljs.core.logic.fd.sorted_set__GT_domain = (function sorted_set__GT_domain(s){var c = cljs.core.count.call(null,s);if((c === 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,c,1))
{return cljs.core.first.call(null,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.logic.fd.FiniteDomain(s,cljs.core.first.call(null,s),cljs.core.first.call(null,cljs.core.rseq.call(null,s))));
} else
{return null;
}
}
}
});
/**
* Construct a domain for assignment to a var. Arguments should
* be integers given in sorted order. domains may be more efficient
* than intervals when only a few values are possible.
* @param {...*} var_args
*/
cljs.core.logic.fd.domain = (function() { 
var domain__delegate = function (args){if(cljs.core.seq.call(null,args))
{return cljs.core.logic.fd.sorted_set__GT_domain.call(null,cljs.core.into.call(null,cljs.core.sorted_set.call(null),args));
} else
{return null;
}
};
var domain = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return domain__delegate.call(this,args);};
domain.cljs$lang$maxFixedArity = 0;
domain.cljs$lang$applyTo = (function (arglist__35570){
var args = cljs.core.seq(arglist__35570);
return domain__delegate(args);
});
domain.cljs$core$IFn$_invoke$arity$variadic = domain__delegate;
return domain;
})()
;
(cljs.core.logic.fd.IIntervals["number"] = true);
(cljs.core.logic.fd._intervals["number"] = (function (this__32494__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,this__32494__auto__);
}));
(cljs.core.logic.fd.ISet["number"] = true);
(cljs.core.logic.fd._member_QMARK_["number"] = (function (this__32494__auto__,that__32496__auto__){if(cljs.core.integer_QMARK_.call(null,that__32496__auto__))
{return cljs.core._EQ_.call(null,this__32494__auto__,that__32496__auto__);
} else
{return cljs.core.logic.fd._member_QMARK_.call(null,that__32496__auto__,this__32494__auto__);
}
}));
(cljs.core.logic.fd._disjoint_QMARK_["number"] = (function (this__32494__auto__,that__32496__auto__){if(cljs.core.integer_QMARK_.call(null,that__32496__auto__))
{return cljs.core.not_EQ_.call(null,this__32494__auto__,that__32496__auto__);
} else
{return cljs.core.logic.fd._disjoint_QMARK_.call(null,that__32496__auto__,this__32494__auto__);
}
}));
(cljs.core.logic.fd._intersection["number"] = (function (this__32494__auto__,that__32496__auto__){if(cljs.core.integer_QMARK_.call(null,that__32496__auto__))
{if(cljs.core._EQ_.call(null,this__32494__auto__,that__32496__auto__))
{return this__32494__auto__;
} else
{return null;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that__32496__auto__)))
{return cljs.core.logic.fd._intersection.call(null,that__32496__auto__,this__32494__auto__);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.intersection_STAR_.call(null,this__32494__auto__,that__32496__auto__);
} else
{return null;
}
}
}
}));
(cljs.core.logic.fd._difference["number"] = (function (this__32494__auto__,that__32496__auto__){if(cljs.core.integer_QMARK_.call(null,that__32496__auto__))
{if(cljs.core._EQ_.call(null,this__32494__auto__,that__32496__auto__))
{return null;
} else
{return this__32494__auto__;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that__32496__auto__)))
{return cljs.core.logic.fd._difference.call(null,that__32496__auto__,this__32494__auto__);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.difference_STAR_.call(null,this__32494__auto__,that__32496__auto__);
} else
{return null;
}
}
}
}));
(cljs.core.logic.fd.ISortedDomain["number"] = true);
(cljs.core.logic.fd._drop_one["number"] = (function (this__32494__auto__){return null;
}));
(cljs.core.logic.fd._drop_before["number"] = (function (this__32494__auto__,n__32495__auto__){if((this__32494__auto__ >= n__32495__auto__))
{return this__32494__auto__;
} else
{return null;
}
}));
(cljs.core.logic.fd._keep_before["number"] = (function (this__32494__auto__,n__32495__auto__){if((this__32494__auto__ < n__32495__auto__))
{return this__32494__auto__;
} else
{return null;
}
}));
(cljs.core.logic.fd.IInterval["number"] = true);
(cljs.core.logic.fd._lb["number"] = (function (this__32494__auto__){return this__32494__auto__;
}));
(cljs.core.logic.fd._ub["number"] = (function (this__32494__auto__){return this__32494__auto__;
}));
(cljs.core.logic.protocols.IMemberCount["number"] = true);
(cljs.core.logic.protocols._member_count["number"] = (function (this__32494__auto__){return 1;
}));

/**
* @constructor
*/
cljs.core.logic.fd.IntervalFD = (function (lb,ub){
this.lb = lb;
this.ub = ub;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
})
cljs.core.logic.fd.IntervalFD.cljs$lang$type = true;
cljs.core.logic.fd.IntervalFD.cljs$lang$ctorStr = "cljs.core.logic.fd/IntervalFD";
cljs.core.logic.fd.IntervalFD.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/IntervalFD");
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<interval:"),cljs.core.str(cljs.core.logic.fd._lb.call(null,x__$1)),cljs.core.str(".."),cljs.core.str(cljs.core.logic.fd._ub.call(null,x__$1)),cljs.core.str(">")].join(''));
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IMergeDomains$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IMergeDomains$_merge_doms$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd._intersection.call(null,this$__$1,that);
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IIntervals$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IIntervals$_intervals$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$__$1);
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return (cljs.core._GT__EQ_.call(null,n,self__.lb)) && (cljs.core._LT__EQ_.call(null,n,self__.ub));
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{return cljs.core.not.call(null,cljs.core.logic.fd._member_QMARK_.call(null,this$__$1,that));
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that)))
{var i = this$__$1;var j = that;var vec__35571 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__35571,0,null);var imax = cljs.core.nth.call(null,vec__35571,1,null);var vec__35572 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__35572,0,null);var jmax = cljs.core.nth.call(null,vec__35572,1,null);return (cljs.core._GT_.call(null,imin,jmax)) || (cljs.core._LT_.call(null,imax,jmin));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.disjoint_QMARK__STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$_intersection$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,this$__$1,that)))
{return that;
} else
{return null;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that)))
{var i = this$__$1;var j = that;var imin = cljs.core.logic.fd._lb.call(null,i);var imax = cljs.core.logic.fd._ub.call(null,i);var jmin = cljs.core.logic.fd._lb.call(null,j);var jmax = cljs.core.logic.fd._ub.call(null,j);if(cljs.core._LT_.call(null,imax,jmin))
{return null;
} else
{if(cljs.core._LT_.call(null,jmax,imin))
{return null;
} else
{if((cljs.core._LT__EQ_.call(null,imin,jmin)) && (cljs.core._GT__EQ_.call(null,imax,jmax)))
{return j;
} else
{if((cljs.core._LT__EQ_.call(null,jmin,imin)) && (cljs.core._GT__EQ_.call(null,jmax,imax)))
{return i;
} else
{if((cljs.core._LT__EQ_.call(null,imin,jmin)) && (cljs.core._LT__EQ_.call(null,imax,jmax)))
{return cljs.core.logic.fd.interval.call(null,jmin,imax);
} else
{if((cljs.core._LT__EQ_.call(null,jmin,imin)) && (cljs.core._LT__EQ_.call(null,jmax,imax)))
{return cljs.core.logic.fd.interval.call(null,imin,jmax);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Interval intersection not defined "),cljs.core.str(i),cljs.core.str(" "),cljs.core.str(j)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.intersection_STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$_difference$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{if(cljs.core._EQ_.call(null,self__.lb,that))
{return cljs.core.logic.fd.interval.call(null,(self__.lb + 1),self__.ub);
} else
{if(cljs.core._EQ_.call(null,self__.ub,that))
{return cljs.core.logic.fd.interval.call(null,self__.lb,(self__.ub - 1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,this$__$1,that)))
{return cljs.core.logic.fd.multi_interval.call(null,cljs.core.logic.fd.interval.call(null,self__.lb,(that - 1)),cljs.core.logic.fd.interval.call(null,(that + 1),self__.ub));
} else
{return this$__$1;
}
} else
{return null;
}
}
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that)))
{var i = this$__$1;var j = that;var imin = cljs.core.logic.fd._lb.call(null,i);var imax = cljs.core.logic.fd._ub.call(null,i);var jmin = cljs.core.logic.fd._lb.call(null,j);var jmax = cljs.core.logic.fd._ub.call(null,j);if(cljs.core._GT_.call(null,jmin,imax))
{return i;
} else
{if((cljs.core._LT__EQ_.call(null,jmin,imin)) && (cljs.core._GT__EQ_.call(null,jmax,imax)))
{return null;
} else
{if((cljs.core._LT_.call(null,imin,jmin)) && (cljs.core._GT_.call(null,imax,jmax)))
{return cljs.core.logic.fd.multi_interval.call(null,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)),cljs.core.logic.fd.interval.call(null,(jmax + 1),imax));
} else
{if((cljs.core._LT_.call(null,imin,jmin)) && (cljs.core._LT__EQ_.call(null,jmin,imax)))
{return cljs.core.logic.fd.interval.call(null,imin,(jmin - 1));
} else
{if((cljs.core._GT_.call(null,imax,jmax)) && (cljs.core._LT__EQ_.call(null,jmin,imin)))
{return cljs.core.logic.fd.interval.call(null,(jmax + 1),imax);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Interval difference not defined "),cljs.core.str(i),cljs.core.str(" "),cljs.core.str(j)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.difference_STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var nlb = (self__.lb + 1);if(cljs.core._LT__EQ_.call(null,nlb,self__.ub))
{return cljs.core.logic.fd.interval.call(null,nlb,self__.ub);
} else
{return null;
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,n,self__.ub))
{return n;
} else
{if(cljs.core._LT_.call(null,n,self__.lb))
{return this$__$1;
} else
{if(cljs.core._GT_.call(null,n,self__.ub))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.interval.call(null,n,self__.ub);
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(cljs.core._LT__EQ_.call(null,n,self__.lb))
{return null;
} else
{if(cljs.core._GT_.call(null,n,self__.ub))
{return this$__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.interval.call(null,self__.lb,(n - 1));
} else
{return null;
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IInterval$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IInterval$_lb$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.lb;
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IInterval$_ub$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ub;
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IMemberCount$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IMemberCount$_member_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (cljs.core._.call(null,self__.ub,self__.lb) + 1);
});
cljs.core.logic.fd.IntervalFD.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.call(null,this$);
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof cljs.core.logic.fd.IntervalFD))
{return (cljs.core._EQ_.call(null,self__.lb,cljs.core.logic.fd._lb.call(null,o))) && (cljs.core._EQ_.call(null,self__.ub,cljs.core.logic.fd._ub.call(null,o)));
} else
{return false;
}
});
cljs.core.logic.fd.__GT_IntervalFD = (function __GT_IntervalFD(lb,ub){return (new cljs.core.logic.fd.IntervalFD(lb,ub));
});
cljs.core.logic.fd.interval_QMARK_ = (function interval_QMARK_(x){return (x instanceof cljs.core.logic.fd.IntervalFD);
});
/**
* Construct an interval for an assignment to a var. intervals may
* be more efficient that the domain type when the range of possiblities
* is large.
*/
cljs.core.logic.fd.interval = (function() {
var interval = null;
var interval__1 = (function (ub){return (new cljs.core.logic.fd.IntervalFD(0,ub));
});
var interval__2 = (function (lb,ub){if((cljs.core._.call(null,ub,lb) === 0))
{return ub;
} else
{return (new cljs.core.logic.fd.IntervalFD(lb,ub));
}
});
interval = function(lb,ub){
switch(arguments.length){
case 1:
return interval__1.call(this,lb);
case 2:
return interval__2.call(this,lb,ub);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interval.cljs$core$IFn$_invoke$arity$1 = interval__1;
interval.cljs$core$IFn$_invoke$arity$2 = interval__2;
return interval;
})()
;
cljs.core.logic.fd.intersection_STAR_ = (function intersection_STAR_(is,js){var is__$1 = cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,is));var js__$1 = cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,js));var r = cljs.core.PersistentVector.EMPTY;while(true){
if((is__$1) && (js__$1))
{var i = cljs.core.first.call(null,is__$1);var j = cljs.core.first.call(null,js__$1);if(cljs.core.truth_(cljs.core.logic.fd.interval__LT_.call(null,i,j)))
{{
var G__35577 = cljs.core.next.call(null,is__$1);
var G__35578 = js__$1;
var G__35579 = r;
is__$1 = G__35577;
js__$1 = G__35578;
r = G__35579;
continue;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval__GT_.call(null,i,j)))
{{
var G__35580 = is__$1;
var G__35581 = cljs.core.next.call(null,js__$1);
var G__35582 = r;
is__$1 = G__35580;
js__$1 = G__35581;
r = G__35582;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__35575 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__35575,0,null);var imax = cljs.core.nth.call(null,vec__35575,1,null);var vec__35576 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__35576,0,null);var jmax = cljs.core.nth.call(null,vec__35576,1,null);if(cljs.core._LT__EQ_.call(null,imin,jmin))
{if(cljs.core._LT_.call(null,imax,jmax))
{{
var G__35583 = cljs.core.next.call(null,is__$1);
var G__35584 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__35585 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,imax));
is__$1 = G__35583;
js__$1 = G__35584;
r = G__35585;
continue;
}
} else
{if(cljs.core._GT_.call(null,imax,jmax))
{{
var G__35586 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__35587 = cljs.core.next.call(null,js__$1);
var G__35588 = cljs.core.conj.call(null,r,j);
is__$1 = G__35586;
js__$1 = G__35587;
r = G__35588;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__35589 = cljs.core.next.call(null,is__$1);
var G__35590 = cljs.core.next.call(null,js__$1);
var G__35591 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,jmax));
is__$1 = G__35589;
js__$1 = G__35590;
r = G__35591;
continue;
}
} else
{return null;
}
}
}
} else
{if(cljs.core._GT_.call(null,imin,jmin))
{if(cljs.core._GT_.call(null,imax,jmax))
{{
var G__35592 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__35593 = cljs.core.next.call(null,js__$1);
var G__35594 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,jmax));
is__$1 = G__35592;
js__$1 = G__35593;
r = G__35594;
continue;
}
} else
{if(cljs.core._LT_.call(null,imax,jmax))
{{
var G__35595 = is__$1;
var G__35596 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__35597 = cljs.core.conj.call(null,r,i);
is__$1 = G__35595;
js__$1 = G__35596;
r = G__35597;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__35598 = cljs.core.next.call(null,is__$1);
var G__35599 = cljs.core.next.call(null,js__$1);
var G__35600 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,imax));
is__$1 = G__35598;
js__$1 = G__35599;
r = G__35600;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
}
} else
{return null;
}
}
}
} else
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,r);
}
break;
}
});
cljs.core.logic.fd.difference_STAR_ = (function difference_STAR_(is,js){var is__$1 = cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,is));var js__$1 = cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,js));var r = cljs.core.PersistentVector.EMPTY;while(true){
if(is__$1)
{if(js__$1)
{var i = cljs.core.first.call(null,is__$1);var j = cljs.core.first.call(null,js__$1);if(cljs.core.truth_(cljs.core.logic.fd.interval__LT_.call(null,i,j)))
{{
var G__35605 = cljs.core.next.call(null,is__$1);
var G__35606 = js__$1;
var G__35607 = cljs.core.conj.call(null,r,i);
is__$1 = G__35605;
js__$1 = G__35606;
r = G__35607;
continue;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval__GT_.call(null,i,j)))
{{
var G__35608 = is__$1;
var G__35609 = cljs.core.next.call(null,js__$1);
var G__35610 = r;
is__$1 = G__35608;
js__$1 = G__35609;
r = G__35610;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__35603 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__35603,0,null);var imax = cljs.core.nth.call(null,vec__35603,1,null);var vec__35604 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__35604,0,null);var jmax = cljs.core.nth.call(null,vec__35604,1,null);if(cljs.core._LT_.call(null,imin,jmin))
{if(cljs.core._LT_.call(null,jmax,imax))
{{
var G__35611 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__35612 = cljs.core.next.call(null,js__$1);
var G__35613 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__35611;
js__$1 = G__35612;
r = G__35613;
continue;
}
} else
{if(cljs.core._GT_.call(null,jmax,imax))
{{
var G__35614 = cljs.core.next.call(null,is__$1);
var G__35615 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__35616 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__35614;
js__$1 = G__35615;
r = G__35616;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__35617 = cljs.core.next.call(null,is__$1);
var G__35618 = cljs.core.next.call(null,js__$1);
var G__35619 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__35617;
js__$1 = G__35618;
r = G__35619;
continue;
}
} else
{return null;
}
}
}
} else
{if(cljs.core._GT__EQ_.call(null,imin,jmin))
{if(cljs.core._LT_.call(null,imax,jmax))
{{
var G__35620 = cljs.core.next.call(null,is__$1);
var G__35621 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__35622 = r;
is__$1 = G__35620;
js__$1 = G__35621;
r = G__35622;
continue;
}
} else
{if(cljs.core._GT_.call(null,imax,jmax))
{{
var G__35623 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__35624 = cljs.core.next.call(null,js__$1);
var G__35625 = r;
is__$1 = G__35623;
js__$1 = G__35624;
r = G__35625;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__35626 = cljs.core.next.call(null,is__$1);
var G__35627 = cljs.core.next.call(null,js__$1);
var G__35628 = r;
is__$1 = G__35626;
js__$1 = G__35627;
r = G__35628;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
}
} else
{return null;
}
}
}
} else
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,cljs.core.into.call(null,r,is__$1));
}
} else
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,r);
}
break;
}
});
cljs.core.logic.fd.disjoint_QMARK__STAR_ = (function disjoint_QMARK__STAR_(is,js){if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,cljs.core.logic.fd.interval.call(null,cljs.core.logic.fd._lb.call(null,is),cljs.core.logic.fd._ub.call(null,is)),cljs.core.logic.fd.interval.call(null,cljs.core.logic.fd._lb.call(null,js),cljs.core.logic.fd._ub.call(null,js)))))
{return true;
} else
{var d0 = cljs.core.logic.fd._intervals.call(null,is);var d1 = cljs.core.logic.fd._intervals.call(null,js);var d0__$1 = d0;var d1__$1 = d1;while(true){
if(((d0__$1 == null)) || ((d1__$1 == null)))
{return true;
} else
{var i = cljs.core.first.call(null,d0__$1);var j = cljs.core.first.call(null,d1__$1);if(cljs.core.truth_(cljs.core.logic.fd.interval__LT_.call(null,i,j)))
{{
var G__35629 = cljs.core.next.call(null,d0__$1);
var G__35630 = d1__$1;
d0__$1 = G__35629;
d1__$1 = G__35630;
continue;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval__GT_.call(null,i,j)))
{{
var G__35631 = d0__$1;
var G__35632 = cljs.core.next.call(null,d1__$1);
d0__$1 = G__35631;
d1__$1 = G__35632;
continue;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,i,j)))
{{
var G__35633 = cljs.core.next.call(null,d0__$1);
var G__35634 = d1__$1;
d0__$1 = G__35633;
d1__$1 = G__35634;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.logic.fd.MultiIntervalFD = (function (min,max,is){
this.min = min;
this.max = max;
this.is = is;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149581056;
})
cljs.core.logic.fd.MultiIntervalFD.cljs$lang$type = true;
cljs.core.logic.fd.MultiIntervalFD.cljs$lang$ctorStr = "cljs.core.logic.fd/MultiIntervalFD";
cljs.core.logic.fd.MultiIntervalFD.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/MultiIntervalFD");
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<intervals:"),cljs.core.str(cljs.core.apply.call(null,cljs.core.pr_str,new cljs.core.Keyword(null,"is","is",1013907612).cljs$core$IFn$_invoke$arity$1(x__$1))),cljs.core.str(">")].join(''));
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IMergeDomains$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IMergeDomains$_merge_doms$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd._intersection.call(null,this$__$1,that);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IIntervals$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IIntervals$_intervals$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.seq.call(null,self__.is);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__35636_SHARP_){return cljs.core.logic.fd._member_QMARK_.call(null,p1__35636_SHARP_,n);
}),self__.is)))
{return true;
} else
{return false;
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd.disjoint_QMARK__STAR_.call(null,this$__$1,that);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$_intersection$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd.intersection_STAR_.call(null,this$__$1,that);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$_difference$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd.difference_STAR_.call(null,this$__$1,that);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var i = cljs.core.first.call(null,self__.is);if(cljs.core.truth_(cljs.core.logic.fd.singleton_dom_QMARK_.call(null,i)))
{var nis = cljs.core.rest.call(null,self__.is);return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.logic.fd._lb.call(null,cljs.core.first.call(null,nis)),self__.max,nis));
} else
{var ni = cljs.core.logic.fd._drop_one.call(null,i);return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.logic.fd._lb.call(null,ni),self__.max,cljs.core.cons.call(null,ni,cljs.core.rest.call(null,self__.is))));
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;var is__$1 = cljs.core.seq.call(null,self__.is);var is__$2 = is__$1;var r = cljs.core.PersistentVector.EMPTY;while(true){
if(is__$2)
{var i = cljs.core.logic.fd._drop_before.call(null,cljs.core.first.call(null,is__$2),n);if(cljs.core.truth_(i))
{{
var G__35639 = cljs.core.next.call(null,is__$2);
var G__35640 = cljs.core.conj.call(null,r,i);
is__$2 = G__35639;
r = G__35640;
continue;
}
} else
{{
var G__35641 = cljs.core.next.call(null,is__$2);
var G__35642 = r;
is__$2 = G__35641;
r = G__35642;
continue;
}
}
} else
{if((cljs.core.count.call(null,r) > 0))
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,r);
} else
{return null;
}
}
break;
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;var is__$1 = cljs.core.seq.call(null,self__.is);var is__$2 = is__$1;var r = cljs.core.PersistentVector.EMPTY;while(true){
if(is__$2)
{var i = cljs.core.logic.fd._keep_before.call(null,cljs.core.first.call(null,is__$2),n);if(cljs.core.truth_(i))
{{
var G__35643 = cljs.core.next.call(null,is__$2);
var G__35644 = cljs.core.conj.call(null,r,i);
is__$2 = G__35643;
r = G__35644;
continue;
}
} else
{{
var G__35645 = cljs.core.next.call(null,is__$2);
var G__35646 = r;
is__$2 = G__35645;
r = G__35646;
continue;
}
}
} else
{if((cljs.core.count.call(null,r) > 0))
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,r);
} else
{return null;
}
}
break;
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IInterval$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IInterval$_lb$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.min;
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IInterval$_ub$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.max;
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IMemberCount$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IMemberCount$_member_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.reduce.call(null,cljs.core._PLUS_,0,cljs.core.map.call(null,(function (p1__35635_SHARP_){return cljs.core.logic.protocols._member_count.call(null,p1__35635_SHARP_);
}),self__.is));
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,j){var self__ = this;
var this$__$1 = this;if((j instanceof cljs.core.logic.fd.MultiIntervalFD))
{var i = this$__$1;var vec__35637 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__35637,0,null);var jmax = cljs.core.nth.call(null,vec__35637,1,null);if((cljs.core._EQ_.call(null,self__.min,jmin)) && (cljs.core._EQ_.call(null,self__.max,jmax)))
{var is__$1 = cljs.core.logic.fd.normalize_intervals.call(null,self__.is);var js = cljs.core.logic.fd.normalize_intervals.call(null,cljs.core.logic.fd._intervals.call(null,j));return cljs.core._EQ_.call(null,is__$1,js);
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__35638 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__35638))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__35638))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"is","is",1013907612),G__35638))
{return self__.is;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.__GT_MultiIntervalFD = (function __GT_MultiIntervalFD(min,max,is){return (new cljs.core.logic.fd.MultiIntervalFD(min,max,is));
});
cljs.core.logic.fd.normalize_intervals = (function normalize_intervals(is){return cljs.core.reduce.call(null,(function (r,i){if((cljs.core.count.call(null,r) === 0))
{return cljs.core.conj.call(null,r,i);
} else
{var j = cljs.core.peek.call(null,r);var jmax = cljs.core.logic.fd._ub.call(null,j);var imin = cljs.core.logic.fd._lb.call(null,i);if(cljs.core._LT__EQ_.call(null,(imin - 1),jmax))
{return cljs.core.conj.call(null,cljs.core.pop.call(null,r),cljs.core.logic.fd.interval.call(null,cljs.core.logic.fd._lb.call(null,j),cljs.core.logic.fd._ub.call(null,i)));
} else
{return cljs.core.conj.call(null,r,i);
}
}
}),cljs.core.PersistentVector.EMPTY,is);
});
/**
* @param {...*} var_args
*/
cljs.core.logic.fd.multi_interval = (function() {
var multi_interval = null;
var multi_interval__0 = (function (){return null;
});
var multi_interval__1 = (function (i0){return i0;
});
var multi_interval__2 = (function (i0,i1){var is = cljs.core.PersistentVector.fromArray([i0,i1], true);return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.logic.fd._lb,is)),cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.logic.fd._ub,is)),is));
});
var multi_interval__3 = (function() { 
var G__35647__delegate = function (i0,i1,ir){var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,i1),i0),ir));return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.logic.fd._lb,is)),cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.logic.fd._ub,is)),is));
};
var G__35647 = function (i0,i1,var_args){
var ir = null;if (arguments.length > 2) {
  ir = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35647__delegate.call(this,i0,i1,ir);};
G__35647.cljs$lang$maxFixedArity = 2;
G__35647.cljs$lang$applyTo = (function (arglist__35648){
var i0 = cljs.core.first(arglist__35648);
arglist__35648 = cljs.core.next(arglist__35648);
var i1 = cljs.core.first(arglist__35648);
var ir = cljs.core.rest(arglist__35648);
return G__35647__delegate(i0,i1,ir);
});
G__35647.cljs$core$IFn$_invoke$arity$variadic = G__35647__delegate;
return G__35647;
})()
;
multi_interval = function(i0,i1,var_args){
var ir = var_args;
switch(arguments.length){
case 0:
return multi_interval__0.call(this);
case 1:
return multi_interval__1.call(this,i0);
case 2:
return multi_interval__2.call(this,i0,i1);
default:
return multi_interval__3.cljs$core$IFn$_invoke$arity$variadic(i0,i1, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_interval.cljs$lang$maxFixedArity = 2;
multi_interval.cljs$lang$applyTo = multi_interval__3.cljs$lang$applyTo;
multi_interval.cljs$core$IFn$_invoke$arity$0 = multi_interval__0;
multi_interval.cljs$core$IFn$_invoke$arity$1 = multi_interval__1;
multi_interval.cljs$core$IFn$_invoke$arity$2 = multi_interval__2;
multi_interval.cljs$core$IFn$_invoke$arity$variadic = multi_interval__3.cljs$core$IFn$_invoke$arity$variadic;
return multi_interval;
})()
;
cljs.core.logic.fd.get_dom = (function get_dom(a,x){if(cljs.core.logic.lvar_QMARK_.call(null,x))
{return cljs.core.logic.get_dom.call(null,a,x,cljs.core.logic.fd);
} else
{return x;
}
});
cljs.core.logic.fd.ext_dom_fd = (function ext_dom_fd(a,x,dom,domp){var a__$1 = cljs.core.logic.add_dom.call(null,a,x,cljs.core.logic.fd,dom);if(cljs.core.not_EQ_.call(null,domp,dom))
{return cljs.core.logic.run_constraints_STAR_.call(null,cljs.core.PersistentVector.fromArray([x], true),new cljs.core.Keyword(null,"cs","cs",1013907426).cljs$core$IFn$_invoke$arity$1(a__$1),cljs.core.logic.fd).call(null,a__$1);
} else
{return a__$1;
}
});
cljs.core.logic.fd.singleton_dom_QMARK_ = (function singleton_dom_QMARK_(x){return cljs.core.integer_QMARK_.call(null,x);
});
cljs.core.logic.fd.resolve_storable_dom = (function resolve_storable_dom(a,x,dom,domp){if(cljs.core.truth_(cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dom)))
{var xv = cljs.core.logic.protocols.walk.call(null,a,x);if(cljs.core.logic.lvar_QMARK_.call(null,xv))
{return cljs.core.logic.protocols.ext_run_cs.call(null,cljs.core.logic.rem_dom.call(null,a,x,cljs.core.logic.fd),x,dom);
} else
{return a;
}
} else
{return cljs.core.logic.fd.ext_dom_fd.call(null,a,x,dom,domp);
}
});
/**
* If x is a var we update its domain. If it's an integer
* we check that it's a member of the given domain. dom is
* then new domain, it should have already been calculated from
* domp which was the previous domain.
*/
cljs.core.logic.fd.process_dom = (function process_dom(x,dom,domp){return (function (a){if(cljs.core.truth_(dom))
{if(cljs.core.logic.lvar_QMARK_.call(null,x))
{return cljs.core.logic.fd.resolve_storable_dom.call(null,a,x,dom,domp);
} else
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,dom,x)))
{return a;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
} else
{return null;
}
});
});
/**
* Assign a var x a domain.
*/
cljs.core.logic.fd.dom = (function dom(x,dom__$1){return (function (a){var domp = cljs.core.logic.fd.get_dom.call(null,a,x);var dom__$2 = (cljs.core.truth_(domp)?cljs.core.logic.fd._intersection.call(null,dom__$1,domp):dom__$1);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,x,dom__$2,domp),((((domp == null)) && (cljs.core.not.call(null,cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dom__$2))))?cljs.core.logic.fd.domc.call(null,x):cljs.core.identity)).call(null,a);
});
});
cljs.core.logic.fd.map_sum = (function map_sum(f){return (function loop(ls){if(cljs.core.empty_QMARK_.call(null,ls))
{return (function (a){return null;
});
} else
{return (function (a){return cljs.core.logic.protocols.mplus.call(null,f.call(null,cljs.core.first.call(null,ls)).call(null,a),(function (){return loop.call(null,cljs.core.rest.call(null,ls)).call(null,a);
}));
});
}
});
});
cljs.core.logic.fd.to_vals = (function to_vals(dom){var to_vals_STAR_ = (function to_vals_STAR_(is){if(cljs.core.truth_(is))
{var i = cljs.core.first.call(null,is);return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,cljs.core.logic.fd._lb.call(null,i),(function (){var temp__4092__auto__ = cljs.core.logic.fd._drop_one.call(null,i);if(cljs.core.truth_(temp__4092__auto__))
{var ni = temp__4092__auto__;return to_vals_STAR_.call(null,cljs.core.cons.call(null,ni,cljs.core.next.call(null,is)));
} else
{return to_vals_STAR_.call(null,cljs.core.next.call(null,is));
}
})());
}),null,null));
} else
{return null;
}
});
return to_vals_STAR_.call(null,cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,dom)));
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;return cljs.core.logic.fd.map_sum.call(null,(function (n){return cljs.core.logic.ext_run_csg.call(null,x,n);
})).call(null,cljs.core.logic.fd.to_vals.call(null,v__$1));
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;return cljs.core.logic.fd.map_sum.call(null,(function (n){return cljs.core.logic.ext_run_csg.call(null,x,n);
})).call(null,cljs.core.logic.fd.to_vals.call(null,v__$1));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;return cljs.core.logic.fd.map_sum.call(null,(function (n){return cljs.core.logic.ext_run_csg.call(null,x,n);
})).call(null,cljs.core.logic.fd.to_vals.call(null,v__$1));
});
cljs.core.logic.fd._domc = (function _domc(x){if(typeof cljs.core.logic.fd.t35656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35656 = (function (x,_domc,meta35657){
this.x = x;
this._domc = _domc;
this.meta35657 = meta35657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35656.cljs$lang$type = true;
cljs.core.logic.fd.t35656.cljs$lang$ctorStr = "cljs.core.logic.fd/t35656";
cljs.core.logic.fd.t35656.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35656");
});
cljs.core.logic.fd.t35656.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35656.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([cljs.core.logic.subst,null], true);
});
cljs.core.logic.fd.t35656.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35656.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","domc","cljs.core.logic.fd/domc",1533784811,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,653),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
cljs.core.logic.fd.t35656.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.x], true);
});
cljs.core.logic.fd.t35656.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35656.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic.protocols.walk.call(null,s,self__.x);var xd = cljs.core.logic.fd.call(null,new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(cljs.core.logic.protocols.root_val.call(null,s,self__.x)));if(typeof cljs.core.logic.fd.t35659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35659 = (function (xd,xv,s,this$,meta35657,x,_domc,meta35660){
this.xd = xd;
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta35657 = meta35657;
this.x = x;
this._domc = _domc;
this.meta35660 = meta35660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35659.cljs$lang$type = true;
cljs.core.logic.fd.t35659.cljs$lang$ctorStr = "cljs.core.logic.fd/t35659";
cljs.core.logic.fd.t35659.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35659");
});
cljs.core.logic.fd.t35659.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35659.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.xv));
});
cljs.core.logic.fd.t35659.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35659.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.xd == null);
});
cljs.core.logic.fd.t35659.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(self__.xd))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,self__.xd,self__.xv)))
{return cljs.core.logic.rem_dom.call(null,s__$2,self__.x,cljs.core.logic.fd);
} else
{return null;
}
} else
{return s__$2;
}
});
cljs.core.logic.fd.t35659.prototype.apply = (function (self__,args35662){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args35662.slice()));
});
cljs.core.logic.fd.t35659.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.xd))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,self__.xd,self__.xv)))
{return cljs.core.logic.rem_dom.call(null,s__$2,self__.x,cljs.core.logic.fd);
} else
{return null;
}
} else
{return s__$2;
}
});
cljs.core.logic.fd.t35659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35661){var self__ = this;
var _35661__$1 = this;return self__.meta35660;
});
cljs.core.logic.fd.t35659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35661,meta35660__$1){var self__ = this;
var _35661__$1 = this;return (new cljs.core.logic.fd.t35659(self__.xd,self__.xv,self__.s,self__.this$,self__.meta35657,self__.x,self__._domc,meta35660__$1));
});
cljs.core.logic.fd.__GT_t35659 = (function __GT_t35659(xd__$1,xv__$1,s__$1,this$__$2,meta35657__$1,x__$2,_domc__$2,meta35660){return (new cljs.core.logic.fd.t35659(xd__$1,xv__$1,s__$1,this$__$2,meta35657__$1,x__$2,_domc__$2,meta35660));
});
}
return (new cljs.core.logic.fd.t35659(xd,xv,s,this$__$1,self__.meta35657,self__.x,self__._domc,null));
});
cljs.core.logic.fd.t35656.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35658){var self__ = this;
var _35658__$1 = this;return self__.meta35657;
});
cljs.core.logic.fd.t35656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35658,meta35657__$1){var self__ = this;
var _35658__$1 = this;return (new cljs.core.logic.fd.t35656(self__.x,self__._domc,meta35657__$1));
});
cljs.core.logic.fd.__GT_t35656 = (function __GT_t35656(x__$1,_domc__$1,meta35657){return (new cljs.core.logic.fd.t35656(x__$1,_domc__$1,meta35657));
});
}
return (new cljs.core.logic.fd.t35656(x,_domc,null));
});
cljs.core.logic.fd.domc = (function domc(x){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._domc.call(null,x));
});
cljs.core.logic.fd._EQ__EQ_c = (function _EQ__EQ_c(u,v){if(typeof cljs.core.logic.fd.t35670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35670 = (function (v,u,_EQ__EQ_c,meta35671){
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta35671 = meta35671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35670.cljs$lang$type = true;
cljs.core.logic.fd.t35670.cljs$lang$ctorStr = "cljs.core.logic.fd/t35670";
cljs.core.logic.fd.t35670.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35670");
});
cljs.core.logic.fd.t35670.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35670.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([cljs.core.logic.fd,null,cljs.core.logic.subst,null], true);
});
cljs.core.logic.fd.t35670.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35670.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","==","cljs.core.logic.fd/==",1528485544,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,683),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
cljs.core.logic.fd.t35670.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.u,self__.v], true);
});
cljs.core.logic.fd.t35670.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35670.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t35673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35673 = (function (dv,du,s,this$,meta35671,v,u,_EQ__EQ_c,meta35674){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta35671 = meta35671;
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta35674 = meta35674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35673.cljs$lang$type = true;
cljs.core.logic.fd.t35673.cljs$lang$ctorStr = "cljs.core.logic.fd/t35673";
cljs.core.logic.fd.t35673.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35673");
});
cljs.core.logic.fd.t35673.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35673.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__4695__auto__ = self__.du;if(cljs.core.truth_(and__4695__auto__))
{return self__.dv;
} else
{return and__4695__auto__;
}
});
cljs.core.logic.fd.t35673.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35673.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__4695__auto__ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du);if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv);if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core._EQ_.call(null,self__.du,self__.dv);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
});
cljs.core.logic.fd.t35673.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t35673.prototype.apply = (function (self__,args35676){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args35676.slice()));
});
cljs.core.logic.fd.t35673.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t35673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35675){var self__ = this;
var _35675__$1 = this;return self__.meta35674;
});
cljs.core.logic.fd.t35673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35675,meta35674__$1){var self__ = this;
var _35675__$1 = this;return (new cljs.core.logic.fd.t35673(self__.dv,self__.du,self__.s,self__.this$,self__.meta35671,self__.v,self__.u,self__._EQ__EQ_c,meta35674__$1));
});
cljs.core.logic.fd.__GT_t35673 = (function __GT_t35673(dv__$1,du__$1,s__$1,this$__$2,meta35671__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta35674){return (new cljs.core.logic.fd.t35673(dv__$1,du__$1,s__$1,this$__$2,meta35671__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta35674));
});
}
return (new cljs.core.logic.fd.t35673(dv,du,s,this$__$1,self__.meta35671,self__.v,self__.u,self__._EQ__EQ_c,null));
});
cljs.core.logic.fd.t35670.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35672){var self__ = this;
var _35672__$1 = this;return self__.meta35671;
});
cljs.core.logic.fd.t35670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35672,meta35671__$1){var self__ = this;
var _35672__$1 = this;return (new cljs.core.logic.fd.t35670(self__.v,self__.u,self__._EQ__EQ_c,meta35671__$1));
});
cljs.core.logic.fd.__GT_t35670 = (function __GT_t35670(v__$1,u__$1,_EQ__EQ_c__$1,meta35671){return (new cljs.core.logic.fd.t35670(v__$1,u__$1,_EQ__EQ_c__$1,meta35671));
});
}
return (new cljs.core.logic.fd.t35670(v,u,_EQ__EQ_c,null));
});
/**
* A finite domain constraint. u and v must be equal. u and v must
* eventually be given domains if vars.
*/
cljs.core.logic.fd._EQ__EQ_ = (function _EQ__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._EQ__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._BANG__EQ_c = (function _BANG__EQ_c(u,v){if(typeof cljs.core.logic.fd.t35684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35684 = (function (v,u,_BANG__EQ_c,meta35685){
this.v = v;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta35685 = meta35685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35684.cljs$lang$type = true;
cljs.core.logic.fd.t35684.cljs$lang$ctorStr = "cljs.core.logic.fd/t35684";
cljs.core.logic.fd.t35684.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35684");
});
cljs.core.logic.fd.t35684.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35684.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([cljs.core.logic.fd,null,cljs.core.logic.subst,null], true);
});
cljs.core.logic.fd.t35684.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35684.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","!=","cljs.core.logic.fd/!=",1528485316,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,720),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
cljs.core.logic.fd.t35684.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.u,self__.v], true);
});
cljs.core.logic.fd.t35684.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35684.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var su_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,du);var sv_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dv);if(typeof cljs.core.logic.fd.t35687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35687 = (function (v,u,_BANG__EQ_c,s,meta35685,du,dv,sv_QMARK_,su_QMARK_,this$,meta35688){
this.v = v;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.s = s;
this.meta35685 = meta35685;
this.du = du;
this.dv = dv;
this.sv_QMARK_ = sv_QMARK_;
this.su_QMARK_ = su_QMARK_;
this.this$ = this$;
this.meta35688 = meta35688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35687.cljs$lang$type = true;
cljs.core.logic.fd.t35687.cljs$lang$ctorStr = "cljs.core.logic.fd/t35687";
cljs.core.logic.fd.t35687.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35687");
});
cljs.core.logic.fd.t35687.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35687.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__4695__auto__ = self__.du;if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = self__.dv;if(cljs.core.truth_(and__4695__auto____$1))
{var or__4704__auto__ = self__.su_QMARK_;if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return self__.sv_QMARK_;
}
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
});
cljs.core.logic.fd.t35687.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35687.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__4695__auto__ = self__.du;if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = self__.dv;if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
});
cljs.core.logic.fd.t35687.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_((function (){var and__4695__auto__ = self__.su_QMARK_;if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = self__.sv_QMARK_;if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core._EQ_.call(null,self__.du,self__.dv);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
})()))
{return null;
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv)))
{return s__$2;
} else
{if(cljs.core.truth_(self__.su_QMARK_))
{var temp__4094__auto__ = cljs.core.logic.fd._difference.call(null,self__.dv,self__.du);if(cljs.core.truth_(temp__4094__auto__))
{var vdiff = temp__4094__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.v,vdiff,self__.dv).call(null,s__$2);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4094__auto__ = cljs.core.logic.fd._difference.call(null,self__.du,self__.dv);if(cljs.core.truth_(temp__4094__auto__))
{var udiff = temp__4094__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.u,udiff,self__.du).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.t35687.prototype.apply = (function (self__,args35690){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args35690.slice()));
});
cljs.core.logic.fd.t35687.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_((function (){var and__4695__auto__ = self__.su_QMARK_;if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = self__.sv_QMARK_;if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core._EQ_.call(null,self__.du,self__.dv);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
})()))
{return null;
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv)))
{return s__$2;
} else
{if(cljs.core.truth_(self__.su_QMARK_))
{var temp__4094__auto__ = cljs.core.logic.fd._difference.call(null,self__.dv,self__.du);if(cljs.core.truth_(temp__4094__auto__))
{var vdiff = temp__4094__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.v,vdiff,self__.dv).call(null,s__$2);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4094__auto__ = cljs.core.logic.fd._difference.call(null,self__.du,self__.dv);if(cljs.core.truth_(temp__4094__auto__))
{var udiff = temp__4094__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.u,udiff,self__.du).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.t35687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35689){var self__ = this;
var _35689__$1 = this;return self__.meta35688;
});
cljs.core.logic.fd.t35687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35689,meta35688__$1){var self__ = this;
var _35689__$1 = this;return (new cljs.core.logic.fd.t35687(self__.v,self__.u,self__._BANG__EQ_c,self__.s,self__.meta35685,self__.du,self__.dv,self__.sv_QMARK_,self__.su_QMARK_,self__.this$,meta35688__$1));
});
cljs.core.logic.fd.__GT_t35687 = (function __GT_t35687(v__$2,u__$2,_BANG__EQ_c__$2,s__$1,meta35685__$1,du__$1,dv__$1,sv_QMARK___$1,su_QMARK___$1,this$__$2,meta35688){return (new cljs.core.logic.fd.t35687(v__$2,u__$2,_BANG__EQ_c__$2,s__$1,meta35685__$1,du__$1,dv__$1,sv_QMARK___$1,su_QMARK___$1,this$__$2,meta35688));
});
}
return (new cljs.core.logic.fd.t35687(self__.v,self__.u,self__._BANG__EQ_c,s,self__.meta35685,du,dv,sv_QMARK_,su_QMARK_,this$__$1,null));
});
cljs.core.logic.fd.t35684.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35686){var self__ = this;
var _35686__$1 = this;return self__.meta35685;
});
cljs.core.logic.fd.t35684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35686,meta35685__$1){var self__ = this;
var _35686__$1 = this;return (new cljs.core.logic.fd.t35684(self__.v,self__.u,self__._BANG__EQ_c,meta35685__$1));
});
cljs.core.logic.fd.__GT_t35684 = (function __GT_t35684(v__$1,u__$1,_BANG__EQ_c__$1,meta35685){return (new cljs.core.logic.fd.t35684(v__$1,u__$1,_BANG__EQ_c__$1,meta35685));
});
}
return (new cljs.core.logic.fd.t35684(v,u,_BANG__EQ_c,null));
});
/**
* A finite domain constraint. u and v must not be equal. u and v
* must eventually be given domains if vars.
*/
cljs.core.logic.fd._BANG__EQ_ = (function _BANG__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._BANG__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._LT__EQ_c = (function _LT__EQ_c(u,v){if(typeof cljs.core.logic.fd.t35698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35698 = (function (v,u,_LT__EQ_c,meta35699){
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta35699 = meta35699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35698.cljs$lang$type = true;
cljs.core.logic.fd.t35698.cljs$lang$ctorStr = "cljs.core.logic.fd/t35698";
cljs.core.logic.fd.t35698.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35698");
});
cljs.core.logic.fd.t35698.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35698.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([cljs.core.logic.fd,null,cljs.core.logic.subst,null], true);
});
cljs.core.logic.fd.t35698.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35698.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","<=","cljs.core.logic.fd/<=",1528485515,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,753),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
cljs.core.logic.fd.t35698.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.u,self__.v], true);
});
cljs.core.logic.fd.t35698.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35698.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t35701 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35701 = (function (dv,du,s,this$,meta35699,v,u,_LT__EQ_c,meta35702){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta35699 = meta35699;
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta35702 = meta35702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35701.cljs$lang$type = true;
cljs.core.logic.fd.t35701.cljs$lang$ctorStr = "cljs.core.logic.fd/t35701";
cljs.core.logic.fd.t35701.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35701");
});
cljs.core.logic.fd.t35701.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35701.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__4695__auto__ = self__.du;if(cljs.core.truth_(and__4695__auto__))
{return self__.dv;
} else
{return and__4695__auto__;
}
});
cljs.core.logic.fd.t35701.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35701.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__4695__auto__ = self__.du;if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = self__.dv;if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core.logic.fd.interval__LT__EQ_.call(null,self__.du,self__.dv);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
});
cljs.core.logic.fd.t35701.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t35701.prototype.apply = (function (self__,args35704){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args35704.slice()));
});
cljs.core.logic.fd.t35701.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t35701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35703){var self__ = this;
var _35703__$1 = this;return self__.meta35702;
});
cljs.core.logic.fd.t35701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35703,meta35702__$1){var self__ = this;
var _35703__$1 = this;return (new cljs.core.logic.fd.t35701(self__.dv,self__.du,self__.s,self__.this$,self__.meta35699,self__.v,self__.u,self__._LT__EQ_c,meta35702__$1));
});
cljs.core.logic.fd.__GT_t35701 = (function __GT_t35701(dv__$1,du__$1,s__$1,this$__$2,meta35699__$1,v__$2,u__$2,_LT__EQ_c__$2,meta35702){return (new cljs.core.logic.fd.t35701(dv__$1,du__$1,s__$1,this$__$2,meta35699__$1,v__$2,u__$2,_LT__EQ_c__$2,meta35702));
});
}
return (new cljs.core.logic.fd.t35701(dv,du,s,this$__$1,self__.meta35699,self__.v,self__.u,self__._LT__EQ_c,null));
});
cljs.core.logic.fd.t35698.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35700){var self__ = this;
var _35700__$1 = this;return self__.meta35699;
});
cljs.core.logic.fd.t35698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35700,meta35699__$1){var self__ = this;
var _35700__$1 = this;return (new cljs.core.logic.fd.t35698(self__.v,self__.u,self__._LT__EQ_c,meta35699__$1));
});
cljs.core.logic.fd.__GT_t35698 = (function __GT_t35698(v__$1,u__$1,_LT__EQ_c__$1,meta35699){return (new cljs.core.logic.fd.t35698(v__$1,u__$1,_LT__EQ_c__$1,meta35699));
});
}
return (new cljs.core.logic.fd.t35698(v,u,_LT__EQ_c,null));
});
/**
* A finite domain constraint. u must be less than or equal to v.
* u and v must eventually be given domains if vars.
*/
cljs.core.logic.fd._LT__EQ_ = (function _LT__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._LT__EQ_c.call(null,u,v));
});
/**
* A finite domain constraint. u must be less than v. u and v
* must eventually be given domains if vars.
*/
cljs.core.logic.fd._LT_ = (function _LT_(u,v){return (function (a__32199__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__32199__auto__,cljs.core.logic.fd._LT__EQ_.call(null,u,v)),cljs.core.logic.fd._BANG__EQ_.call(null,u,v));
});
});
/**
* A finite domain constraint. u must be greater than v. u and v
* must eventually be given domains if vars.
*/
cljs.core.logic.fd._GT_ = (function _GT_(u,v){return cljs.core.logic.fd._LT_.call(null,v,u);
});
/**
* A finite domain constraint. u must be greater than or equal to v.
* u and v must eventually be given domains if vars.
*/
cljs.core.logic.fd._GT__EQ_ = (function _GT__EQ_(u,v){return cljs.core.logic.fd._LT__EQ_.call(null,v,u);
});
cljs.core.logic.fd._PLUS_c = (function _PLUS_c(u,v,w){if(typeof cljs.core.logic.fd.t35718 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35718 = (function (w,v,u,_PLUS_c,meta35719){
this.w = w;
this.v = v;
this.u = u;
this._PLUS_c = _PLUS_c;
this.meta35719 = meta35719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35718.cljs$lang$type = true;
cljs.core.logic.fd.t35718.cljs$lang$ctorStr = "cljs.core.logic.fd/t35718";
cljs.core.logic.fd.t35718.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35718");
});
cljs.core.logic.fd.t35718.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35718.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([cljs.core.logic.fd,null,cljs.core.logic.subst,null], true);
});
cljs.core.logic.fd.t35718.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35718.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","+","cljs.core.logic.fd/+",1528484149,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,840),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
cljs.core.logic.fd.t35718.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.u,self__.v,self__.w], true);
});
cljs.core.logic.fd.t35718.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35718.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t35721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35721 = (function (v,w,u,s,_PLUS_c,meta35719,du,dw,dv,this$,meta35722){
this.v = v;
this.w = w;
this.u = u;
this.s = s;
this._PLUS_c = _PLUS_c;
this.meta35719 = meta35719;
this.du = du;
this.dw = dw;
this.dv = dv;
this.this$ = this$;
this.meta35722 = meta35722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35721.cljs$lang$type = true;
cljs.core.logic.fd.t35721.cljs$lang$ctorStr = "cljs.core.logic.fd/t35721";
cljs.core.logic.fd.t35721.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35721");
});
cljs.core.logic.fd.t35721.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35721.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.du))
{var or__4704__auto__ = self__.dv;if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dv))
{var or__4704__auto__ = self__.du;if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dw))
{var or__4704__auto__ = self__.du;if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return self__.dv;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.t35721.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35721.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__4695__auto__ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du);if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv);if(cljs.core.truth_(and__4695__auto____$1))
{var and__4695__auto____$2 = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw);if(cljs.core.truth_(and__4695__auto____$2))
{return cljs.core._EQ_.call(null,cljs.core._PLUS_.call(null,self__.du,self__.dv),self__.dw);
} else
{return and__4695__auto____$2;
}
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
});
cljs.core.logic.fd.t35721.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__35725 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):cljs.core.PersistentVector.fromArray([cljs.core._PLUS_.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dv)),cljs.core._PLUS_.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._ub.call(null,self__.dv))], true));var wmin = cljs.core.nth.call(null,vec__35725,0,null);var wmax = cljs.core.nth.call(null,vec__35725,1,null);var vec__35726 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):cljs.core.PersistentVector.fromArray([cljs.core._.call(null,cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dv)),cljs.core._.call(null,cljs.core.logic.fd._ub.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dv))], true));var umin = cljs.core.nth.call(null,vec__35726,0,null);var umax = cljs.core.nth.call(null,vec__35726,1,null);var vec__35727 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):cljs.core.PersistentVector.fromArray([cljs.core._.call(null,cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.du)),cljs.core._.call(null,cljs.core.logic.fd._ub.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.du))], true));var vmin = cljs.core.nth.call(null,vec__35727,0,null);var vmax = cljs.core.nth.call(null,vec__35727,1,null);var wi = cljs.core.logic.fd.interval.call(null,cljs.core._PLUS_.call(null,umin,vmin),cljs.core._PLUS_.call(null,umax,vmax));var ui = cljs.core.logic.fd.interval.call(null,cljs.core._.call(null,wmin,vmax),cljs.core._.call(null,wmax,vmin));var vi = cljs.core.logic.fd.interval.call(null,cljs.core._.call(null,wmin,umax),cljs.core._.call(null,wmax,umin));var temp__4094__auto__ = (cljs.core.truth_((function (){var and__4695__auto__ = wi;if(cljs.core.truth_(and__4695__auto__))
{return self__.dw;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4094__auto__))
{var wi__$1 = temp__4094__auto__;var temp__4094__auto____$1 = (cljs.core.truth_((function (){var and__4695__auto__ = ui;if(cljs.core.truth_(and__4695__auto__))
{return self__.du;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4094__auto____$1))
{var ui__$1 = temp__4094__auto____$1;var temp__4094__auto____$2 = (cljs.core.truth_((function (){var and__4695__auto__ = vi;if(cljs.core.truth_(and__4695__auto__))
{return self__.dv;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4094__auto____$2))
{var vi__$1 = temp__4094__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,cljs.core.PersistentVector.fromArray([wi__$1,ui__$1,vi__$1], true)))) || (cljs.core._EQ_.call(null,cljs.core._PLUS_.call(null,ui__$1,vi__$1),wi__$1)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.w,wi__$1,self__.dw),cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,ui__$1,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,vi__$1,self__.dv))).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35721.prototype.apply = (function (self__,args35724){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args35724.slice()));
});
cljs.core.logic.fd.t35721.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__35728 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):cljs.core.PersistentVector.fromArray([cljs.core._PLUS_.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dv)),cljs.core._PLUS_.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._ub.call(null,self__.dv))], true));var wmin = cljs.core.nth.call(null,vec__35728,0,null);var wmax = cljs.core.nth.call(null,vec__35728,1,null);var vec__35729 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):cljs.core.PersistentVector.fromArray([cljs.core._.call(null,cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dv)),cljs.core._.call(null,cljs.core.logic.fd._ub.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dv))], true));var umin = cljs.core.nth.call(null,vec__35729,0,null);var umax = cljs.core.nth.call(null,vec__35729,1,null);var vec__35730 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):cljs.core.PersistentVector.fromArray([cljs.core._.call(null,cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.du)),cljs.core._.call(null,cljs.core.logic.fd._ub.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.du))], true));var vmin = cljs.core.nth.call(null,vec__35730,0,null);var vmax = cljs.core.nth.call(null,vec__35730,1,null);var wi = cljs.core.logic.fd.interval.call(null,cljs.core._PLUS_.call(null,umin,vmin),cljs.core._PLUS_.call(null,umax,vmax));var ui = cljs.core.logic.fd.interval.call(null,cljs.core._.call(null,wmin,vmax),cljs.core._.call(null,wmax,vmin));var vi = cljs.core.logic.fd.interval.call(null,cljs.core._.call(null,wmin,umax),cljs.core._.call(null,wmax,umin));var temp__4094__auto__ = (cljs.core.truth_((function (){var and__4695__auto__ = wi;if(cljs.core.truth_(and__4695__auto__))
{return self__.dw;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4094__auto__))
{var wi__$1 = temp__4094__auto__;var temp__4094__auto____$1 = (cljs.core.truth_((function (){var and__4695__auto__ = ui;if(cljs.core.truth_(and__4695__auto__))
{return self__.du;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4094__auto____$1))
{var ui__$1 = temp__4094__auto____$1;var temp__4094__auto____$2 = (cljs.core.truth_((function (){var and__4695__auto__ = vi;if(cljs.core.truth_(and__4695__auto__))
{return self__.dv;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4094__auto____$2))
{var vi__$1 = temp__4094__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,cljs.core.PersistentVector.fromArray([wi__$1,ui__$1,vi__$1], true)))) || (cljs.core._EQ_.call(null,cljs.core._PLUS_.call(null,ui__$1,vi__$1),wi__$1)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.w,wi__$1,self__.dw),cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,ui__$1,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,vi__$1,self__.dv))).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35723){var self__ = this;
var _35723__$1 = this;return self__.meta35722;
});
cljs.core.logic.fd.t35721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35723,meta35722__$1){var self__ = this;
var _35723__$1 = this;return (new cljs.core.logic.fd.t35721(self__.v,self__.w,self__.u,self__.s,self__._PLUS_c,self__.meta35719,self__.du,self__.dw,self__.dv,self__.this$,meta35722__$1));
});
cljs.core.logic.fd.__GT_t35721 = (function __GT_t35721(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,meta35719__$1,du__$1,dw__$1,dv__$1,this$__$2,meta35722){return (new cljs.core.logic.fd.t35721(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,meta35719__$1,du__$1,dw__$1,dv__$1,this$__$2,meta35722));
});
}
return (new cljs.core.logic.fd.t35721(self__.v,self__.w,self__.u,s,self__._PLUS_c,self__.meta35719,du,dw,dv,this$__$1,null));
});
cljs.core.logic.fd.t35718.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35720){var self__ = this;
var _35720__$1 = this;return self__.meta35719;
});
cljs.core.logic.fd.t35718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35720,meta35719__$1){var self__ = this;
var _35720__$1 = this;return (new cljs.core.logic.fd.t35718(self__.w,self__.v,self__.u,self__._PLUS_c,meta35719__$1));
});
cljs.core.logic.fd.__GT_t35718 = (function __GT_t35718(w__$1,v__$1,u__$1,_PLUS_c__$1,meta35719){return (new cljs.core.logic.fd.t35718(w__$1,v__$1,u__$1,_PLUS_c__$1,meta35719));
});
}
return (new cljs.core.logic.fd.t35718(w,v,u,_PLUS_c,null));
});
/**
* A finite domain constraint for addition and subtraction.
* u, v & w must eventually be given domains if vars.
*/
cljs.core.logic.fd._PLUS_ = (function _PLUS_(u,v,w){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._PLUS_c.call(null,u,v,w));
});
cljs.core.logic.fd._ = (function _(u,v,w){return cljs.core.logic.fd._PLUS_.call(null,v,w,u);
});
cljs.core.logic.fd._STAR_c = (function _STAR_c(u,v,w){var safe_div = (function safe_div(n,c,a,t){if((n === 0))
{return c;
} else
{var q = cljs.core.quot.call(null,a,n);var G__35747 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upper","upper",1125403668),G__35747))
{return q;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lower","lower",1117068915),G__35747))
{if((cljs.core.rem.call(null,a,n) > 0))
{return (q + 1);
} else
{return q;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(t)].join('')));
} else
{return null;
}
}
}
}
});
if(typeof cljs.core.logic.fd.t35748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35748 = (function (safe_div,w,v,u,_STAR_c,meta35749){
this.safe_div = safe_div;
this.w = w;
this.v = v;
this.u = u;
this._STAR_c = _STAR_c;
this.meta35749 = meta35749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35748.cljs$lang$type = true;
cljs.core.logic.fd.t35748.cljs$lang$ctorStr = "cljs.core.logic.fd/t35748";
cljs.core.logic.fd.t35748.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35748");
});
cljs.core.logic.fd.t35748.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35748.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([cljs.core.logic.fd,null,cljs.core.logic.subst,null], true);
});
cljs.core.logic.fd.t35748.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35748.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","*","cljs.core.logic.fd/*",1528484146,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,924),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20)))));
});
cljs.core.logic.fd.t35748.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.u,self__.v,self__.w], true);
});
cljs.core.logic.fd.t35748.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35748.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t35751 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35751 = (function (v,w,u,meta35749,s,du,_STAR_c,dw,dv,safe_div,this$,meta35752){
this.v = v;
this.w = w;
this.u = u;
this.meta35749 = meta35749;
this.s = s;
this.du = du;
this._STAR_c = _STAR_c;
this.dw = dw;
this.dv = dv;
this.safe_div = safe_div;
this.this$ = this$;
this.meta35752 = meta35752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35751.cljs$lang$type = true;
cljs.core.logic.fd.t35751.cljs$lang$ctorStr = "cljs.core.logic.fd/t35751";
cljs.core.logic.fd.t35751.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35751");
});
cljs.core.logic.fd.t35751.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35751.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.du))
{var or__4704__auto__ = self__.dv;if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dv))
{var or__4704__auto__ = self__.du;if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dw))
{var or__4704__auto__ = self__.du;if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return self__.dv;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.t35751.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35751.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__4695__auto__ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du);if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv);if(cljs.core.truth_(and__4695__auto____$1))
{var and__4695__auto____$2 = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw);if(cljs.core.truth_(and__4695__auto____$2))
{return cljs.core._EQ_.call(null,cljs.core._STAR_.call(null,self__.du,self__.dv),self__.dw);
} else
{return and__4695__auto____$2;
}
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
});
cljs.core.logic.fd.t35751.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__35755 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):cljs.core.PersistentVector.fromArray([cljs.core._STAR_.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dv)),cljs.core._STAR_.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._ub.call(null,self__.dv))], true));var wmin = cljs.core.nth.call(null,vec__35755,0,null);var wmax = cljs.core.nth.call(null,vec__35755,1,null);var vec__35756 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):cljs.core.PersistentVector.fromArray([self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], true));var umin = cljs.core.nth.call(null,vec__35756,0,null);var umax = cljs.core.nth.call(null,vec__35756,1,null);var vec__35757 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):cljs.core.PersistentVector.fromArray([self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], true));var vmin = cljs.core.nth.call(null,vec__35757,0,null);var vmax = cljs.core.nth.call(null,vec__35757,1,null);var wi = cljs.core.logic.fd.interval.call(null,cljs.core._STAR_.call(null,umin,vmin),cljs.core._STAR_.call(null,umax,vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4094__auto__ = (cljs.core.truth_((function (){var and__4695__auto__ = wi;if(cljs.core.truth_(and__4695__auto__))
{return self__.dw;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4094__auto__))
{var wi__$1 = temp__4094__auto__;var temp__4094__auto____$1 = (cljs.core.truth_((function (){var and__4695__auto__ = ui;if(cljs.core.truth_(and__4695__auto__))
{return self__.du;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4094__auto____$1))
{var ui__$1 = temp__4094__auto____$1;var temp__4094__auto____$2 = (cljs.core.truth_((function (){var and__4695__auto__ = vi;if(cljs.core.truth_(and__4695__auto__))
{return self__.dv;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4094__auto____$2))
{var vi__$1 = temp__4094__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,cljs.core.PersistentVector.fromArray([wi__$1,ui__$1,vi__$1], true)))) || (cljs.core._EQ_.call(null,cljs.core._STAR_.call(null,ui__$1,vi__$1),wi__$1)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.w,wi__$1,self__.dw),cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,ui__$1,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,vi__$1,self__.dv))).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35751.prototype.apply = (function (self__,args35754){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args35754.slice()));
});
cljs.core.logic.fd.t35751.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__35758 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):cljs.core.PersistentVector.fromArray([cljs.core._STAR_.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dv)),cljs.core._STAR_.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._ub.call(null,self__.dv))], true));var wmin = cljs.core.nth.call(null,vec__35758,0,null);var wmax = cljs.core.nth.call(null,vec__35758,1,null);var vec__35759 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):cljs.core.PersistentVector.fromArray([self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], true));var umin = cljs.core.nth.call(null,vec__35759,0,null);var umax = cljs.core.nth.call(null,vec__35759,1,null);var vec__35760 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):cljs.core.PersistentVector.fromArray([self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], true));var vmin = cljs.core.nth.call(null,vec__35760,0,null);var vmax = cljs.core.nth.call(null,vec__35760,1,null);var wi = cljs.core.logic.fd.interval.call(null,cljs.core._STAR_.call(null,umin,vmin),cljs.core._STAR_.call(null,umax,vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4094__auto__ = (cljs.core.truth_((function (){var and__4695__auto__ = wi;if(cljs.core.truth_(and__4695__auto__))
{return self__.dw;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4094__auto__))
{var wi__$1 = temp__4094__auto__;var temp__4094__auto____$1 = (cljs.core.truth_((function (){var and__4695__auto__ = ui;if(cljs.core.truth_(and__4695__auto__))
{return self__.du;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4094__auto____$1))
{var ui__$1 = temp__4094__auto____$1;var temp__4094__auto____$2 = (cljs.core.truth_((function (){var and__4695__auto__ = vi;if(cljs.core.truth_(and__4695__auto__))
{return self__.dv;
} else
{return and__4695__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4094__auto____$2))
{var vi__$1 = temp__4094__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,cljs.core.PersistentVector.fromArray([wi__$1,ui__$1,vi__$1], true)))) || (cljs.core._EQ_.call(null,cljs.core._STAR_.call(null,ui__$1,vi__$1),wi__$1)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.w,wi__$1,self__.dw),cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,ui__$1,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,vi__$1,self__.dv))).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35753){var self__ = this;
var _35753__$1 = this;return self__.meta35752;
});
cljs.core.logic.fd.t35751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35753,meta35752__$1){var self__ = this;
var _35753__$1 = this;return (new cljs.core.logic.fd.t35751(self__.v,self__.w,self__.u,self__.meta35749,self__.s,self__.du,self__._STAR_c,self__.dw,self__.dv,self__.safe_div,self__.this$,meta35752__$1));
});
cljs.core.logic.fd.__GT_t35751 = (function __GT_t35751(v__$2,w__$2,u__$2,meta35749__$1,s__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,safe_div__$2,this$__$2,meta35752){return (new cljs.core.logic.fd.t35751(v__$2,w__$2,u__$2,meta35749__$1,s__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,safe_div__$2,this$__$2,meta35752));
});
}
return (new cljs.core.logic.fd.t35751(self__.v,self__.w,self__.u,self__.meta35749,s,du,self__._STAR_c,dw,dv,self__.safe_div,this$__$1,null));
});
cljs.core.logic.fd.t35748.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35750){var self__ = this;
var _35750__$1 = this;return self__.meta35749;
});
cljs.core.logic.fd.t35748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35750,meta35749__$1){var self__ = this;
var _35750__$1 = this;return (new cljs.core.logic.fd.t35748(self__.safe_div,self__.w,self__.v,self__.u,self__._STAR_c,meta35749__$1));
});
cljs.core.logic.fd.__GT_t35748 = (function __GT_t35748(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta35749){return (new cljs.core.logic.fd.t35748(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta35749));
});
}
return (new cljs.core.logic.fd.t35748(safe_div,w,v,u,_STAR_c,null));
});
/**
* A finite domain constraint for multiplication and
* thus division. u, v & w must be eventually be given
* domains if vars.
*/
cljs.core.logic.fd._STAR_ = (function _STAR_(u,v,w){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._STAR_c.call(null,u,v,w));
});
cljs.core.logic.fd.quot = (function quot(u,v,w){return cljs.core.logic.fd._STAR_.call(null,v,w,u);
});
/**
* The real *individual* distinct constraint. x is a var that now is bound to
* a single value. y* were the non-singleton bound vars that existed at the
* construction of the constraint. n* is the set of singleton domain values
* that existed at the construction of the constraint. We use categorize to
* determine the current non-singleton bound vars and singleton vlaues. if x
* is in n* or the new singletons we have failed. If not we simply remove
* the value of x from the remaining non-singleton domains bound to vars.
*/
cljs.core.logic.fd._distinctc = (function _distinctc(x,y_STAR_,n_STAR_){if(typeof cljs.core.logic.fd.t35768 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35768 = (function (n_STAR_,y_STAR_,x,_distinctc,meta35769){
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta35769 = meta35769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35768.cljs$lang$type = true;
cljs.core.logic.fd.t35768.cljs$lang$ctorStr = "cljs.core.logic.fd/t35768";
cljs.core.logic.fd.t35768.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35768");
});
cljs.core.logic.fd.t35768.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35768.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([cljs.core.logic.subst,null], true);
});
cljs.core.logic.fd.t35768.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35768.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","-distinct","cljs.core.logic.fd/-distinct",73212723,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,976),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
cljs.core.logic.fd.t35768.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.x], true);
});
cljs.core.logic.fd.t35768.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35768.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var x__$2 = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.fd.t35771 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35771 = (function (s,this$,meta35769,n_STAR_,y_STAR_,x,_distinctc,meta35772){
this.s = s;
this.this$ = this$;
this.meta35769 = meta35769;
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta35772 = meta35772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35771.cljs$lang$type = true;
cljs.core.logic.fd.t35771.cljs$lang$ctorStr = "cljs.core.logic.fd/t35771";
cljs.core.logic.fd.t35771.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35771");
});
cljs.core.logic.fd.t35771.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35771.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.x);
});
cljs.core.logic.fd.t35771.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(self__.n_STAR_.call(null,self__.x)))
{return null;
} else
{var y_STAR___$3 = cljs.core.seq.call(null,self__.y_STAR_);var s__$3 = s__$2;while(true){
if(y_STAR___$3)
{var y = cljs.core.first.call(null,y_STAR___$3);var v = (function (){var or__4704__auto__ = cljs.core.logic.fd.get_dom.call(null,s__$3,y);if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return cljs.core.logic.protocols.walk.call(null,s__$3,y);
}
})();var s__$4 = ((!(cljs.core.logic.lvar_QMARK_.call(null,v)))?((cljs.core._EQ_.call(null,self__.x,v))?null:(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,v,self__.x))?cljs.core.logic.fd.process_dom.call(null,y,cljs.core.logic.fd._difference.call(null,v,self__.x),v).call(null,s__$3):((new cljs.core.Keyword(null,"else","else",1017020587))?s__$3:null))):s__$3);if(cljs.core.truth_(s__$4))
{{
var G__35775 = cljs.core.next.call(null,y_STAR___$3);
var G__35776 = s__$4;
y_STAR___$3 = G__35775;
s__$3 = G__35776;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$3);
}
break;
}
}
});
cljs.core.logic.fd.t35771.prototype.apply = (function (self__,args35774){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args35774.slice()));
});
cljs.core.logic.fd.t35771.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.n_STAR_.call(null,self__.x)))
{return null;
} else
{var y_STAR___$3 = cljs.core.seq.call(null,self__.y_STAR_);var s__$3 = s__$2;while(true){
if(y_STAR___$3)
{var y = cljs.core.first.call(null,y_STAR___$3);var v = (function (){var or__4704__auto__ = cljs.core.logic.fd.get_dom.call(null,s__$3,y);if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return cljs.core.logic.protocols.walk.call(null,s__$3,y);
}
})();var s__$4 = ((!(cljs.core.logic.lvar_QMARK_.call(null,v)))?((cljs.core._EQ_.call(null,self__.x,v))?null:(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,v,self__.x))?cljs.core.logic.fd.process_dom.call(null,y,cljs.core.logic.fd._difference.call(null,v,self__.x),v).call(null,s__$3):((new cljs.core.Keyword(null,"else","else",1017020587))?s__$3:null))):s__$3);if(cljs.core.truth_(s__$4))
{{
var G__35777 = cljs.core.next.call(null,y_STAR___$3);
var G__35778 = s__$4;
y_STAR___$3 = G__35777;
s__$3 = G__35778;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$3);
}
break;
}
}
});
cljs.core.logic.fd.t35771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35773){var self__ = this;
var _35773__$1 = this;return self__.meta35772;
});
cljs.core.logic.fd.t35771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35773,meta35772__$1){var self__ = this;
var _35773__$1 = this;return (new cljs.core.logic.fd.t35771(self__.s,self__.this$,self__.meta35769,self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta35772__$1));
});
cljs.core.logic.fd.__GT_t35771 = (function __GT_t35771(s__$1,this$__$2,meta35769__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta35772){return (new cljs.core.logic.fd.t35771(s__$1,this$__$2,meta35769__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta35772));
});
}
return (new cljs.core.logic.fd.t35771(s,this$__$1,self__.meta35769,self__.n_STAR_,self__.y_STAR_,x__$2,self__._distinctc,null));
});
cljs.core.logic.fd.t35768.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35770){var self__ = this;
var _35770__$1 = this;return self__.meta35769;
});
cljs.core.logic.fd.t35768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35770,meta35769__$1){var self__ = this;
var _35770__$1 = this;return (new cljs.core.logic.fd.t35768(self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta35769__$1));
});
cljs.core.logic.fd.__GT_t35768 = (function __GT_t35768(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta35769){return (new cljs.core.logic.fd.t35768(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta35769));
});
}
return (new cljs.core.logic.fd.t35768(n_STAR_,y_STAR_,x,_distinctc,null));
});
cljs.core.logic.fd._distinct = (function _distinct(x,y_STAR_,n_STAR_){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._distinctc.call(null,x,y_STAR_,n_STAR_));
});
cljs.core.logic.fd.list_sorted_QMARK_ = (function list_sorted_QMARK_(pred,ls){if(cljs.core.empty_QMARK_.call(null,ls))
{return true;
} else
{var f = cljs.core.first.call(null,ls);var ls__$1 = cljs.core.next.call(null,ls);while(true){
if(ls__$1)
{var s = cljs.core.first.call(null,ls__$1);if(cljs.core.truth_(pred.call(null,f,s)))
{{
var G__35779 = s;
var G__35780 = cljs.core.next.call(null,ls__$1);
f = G__35779;
ls__$1 = G__35780;
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
}
});
/**
* The real distinct constraint. v* can be seq of logic vars and
* values or it can be a logic var itself. This constraint does not
* run until v* has become ground. When it has become ground we group
* v* into a set of logic vars and a sorted set of known singleton
* values. We then construct the individual constraint for each var.
*/
cljs.core.logic.fd.distinctc = (function distinctc(v_STAR_){if(typeof cljs.core.logic.fd.t35790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35790 = (function (v_STAR_,distinctc,meta35791){
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta35791 = meta35791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35790.cljs$lang$type = true;
cljs.core.logic.fd.t35790.cljs$lang$ctorStr = "cljs.core.logic.fd/t35790";
cljs.core.logic.fd.t35790.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35790");
});
cljs.core.logic.fd.t35790.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35790.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([cljs.core.logic.subst,null], true);
});
cljs.core.logic.fd.t35790.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35790.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","distinct","cljs.core.logic.fd/distinct",1952820740,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1025),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
cljs.core.logic.fd.t35790.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.v_STAR_], true);
});
cljs.core.logic.fd.t35790.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35790.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var v_STAR___$2 = cljs.core.logic.protocols.walk.call(null,s,self__.v_STAR_);if(typeof cljs.core.logic.fd.t35793 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35793 = (function (s,this$,meta35791,v_STAR_,distinctc,meta35794){
this.s = s;
this.this$ = this$;
this.meta35791 = meta35791;
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta35794 = meta35794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35793.cljs$lang$type = true;
cljs.core.logic.fd.t35793.cljs$lang$ctorStr = "cljs.core.logic.fd/t35793";
cljs.core.logic.fd.t35793.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.fd/t35793");
});
cljs.core.logic.fd.t35793.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35793.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.v_STAR_));
});
cljs.core.logic.fd.t35793.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var map__35797 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__35797__$1 = ((cljs.core.seq_QMARK_.call(null,map__35797))?cljs.core.apply.call(null,cljs.core.hash_map,map__35797):map__35797);var x_STAR_ = cljs.core.get.call(null,map__35797__$1,true);var n_STAR_ = cljs.core.get.call(null,map__35797__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.truth_(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1)))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4094__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4094__auto__))
{var s__$4 = temp__4094__auto__;{
var G__35799 = cljs.core.next.call(null,xs);
var G__35800 = s__$4;
xs = G__35799;
s__$3 = G__35800;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$3);
}
break;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35793.prototype.apply = (function (self__,args35796){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args35796.slice()));
});
cljs.core.logic.fd.t35793.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var map__35798 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__35798__$1 = ((cljs.core.seq_QMARK_.call(null,map__35798))?cljs.core.apply.call(null,cljs.core.hash_map,map__35798):map__35798);var x_STAR_ = cljs.core.get.call(null,map__35798__$1,true);var n_STAR_ = cljs.core.get.call(null,map__35798__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.truth_(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1)))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4094__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4094__auto__))
{var s__$4 = temp__4094__auto__;{
var G__35801 = cljs.core.next.call(null,xs);
var G__35802 = s__$4;
xs = G__35801;
s__$3 = G__35802;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$3);
}
break;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35795){var self__ = this;
var _35795__$1 = this;return self__.meta35794;
});
cljs.core.logic.fd.t35793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35795,meta35794__$1){var self__ = this;
var _35795__$1 = this;return (new cljs.core.logic.fd.t35793(self__.s,self__.this$,self__.meta35791,self__.v_STAR_,self__.distinctc,meta35794__$1));
});
cljs.core.logic.fd.__GT_t35793 = (function __GT_t35793(s__$1,this$__$2,meta35791__$1,v_STAR___$3,distinctc__$2,meta35794){return (new cljs.core.logic.fd.t35793(s__$1,this$__$2,meta35791__$1,v_STAR___$3,distinctc__$2,meta35794));
});
}
return (new cljs.core.logic.fd.t35793(s,this$__$1,self__.meta35791,v_STAR___$2,self__.distinctc,null));
});
cljs.core.logic.fd.t35790.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35792){var self__ = this;
var _35792__$1 = this;return self__.meta35791;
});
cljs.core.logic.fd.t35790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35792,meta35791__$1){var self__ = this;
var _35792__$1 = this;return (new cljs.core.logic.fd.t35790(self__.v_STAR_,self__.distinctc,meta35791__$1));
});
cljs.core.logic.fd.__GT_t35790 = (function __GT_t35790(v_STAR___$1,distinctc__$1,meta35791){return (new cljs.core.logic.fd.t35790(v_STAR___$1,distinctc__$1,meta35791));
});
}
return (new cljs.core.logic.fd.t35790(v_STAR_,distinctc,null));
});
/**
* A finite domain constraint that will guarantee that
* all vars that occur in v* will be unified with unique
* values. v* need not be ground. Any vars in v* should
* eventually be given a domain.
*/
cljs.core.logic.fd.distinct = (function distinct(v_STAR_){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd.distinctc.call(null,v_STAR_));
});
/**
* Ensure that the list l never grows beyond bound n.
* n must have been assigned a domain.
*/
cljs.core.logic.fd.bounded_listo = (function bounded_listo(l,n){return (function (a35820){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a35820,(function (a__32148__auto__){return (function _inc(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__32148__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,l)),cljs.core.logic.fd._LT__EQ_.call(null,0,n));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a35820,(function (a__32148__auto__){return (function _inc(){var t = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"t","t",-1640531411,null));var h = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h","h",-1640531423,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__32148__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,h,t),l)),(function (a__32148__auto____$1){return (function _inc(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__32148__auto____$1,cljs.core.logic._EQ__EQ_.call(null,n,n)),(function (a__32148__auto____$2){return (function _inc(){var m = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"m","m",-1640531418,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__32148__auto____$2,(function (){var dom_35836 = cljs.core.logic.fd.interval.call(null,0,Number.MAX_VALUE);return (function (a__32148__auto____$3){return (function _inc(){return cljs.core.logic.protocols.bind.call(null,a__32148__auto____$3,cljs.core.logic.fd.dom.call(null,m,dom_35836));
});
});
})()),cljs.core.logic.fd._PLUS_.call(null,m,1,n)),bounded_listo.call(null,t,m));
});
}));
});
}));
});
}));
}));
});
});
});
cljs.core.logic.fd.binops__GT_fd = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"/","/",-1640531480,null),new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"!=","!=",-1640530443,null),new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,">=",">=",-1640529544,null),new cljs.core.Symbol(null,"<=","<=",-1640529606,null)],[new cljs.core.Symbol("cljs.core.logic.fd","+","cljs.core.logic.fd/+",1528484149,null),new cljs.core.Symbol("cljs.core.logic.fd","*","cljs.core.logic.fd/*",1528484146,null),new cljs.core.Symbol("cljs.core.logic.fd","-","cljs.core.logic.fd/-",1528484151,null),new cljs.core.Symbol("cljs.core.logic.fd","quot","cljs.core.logic.fd/quot",1533391379,null),new cljs.core.Symbol("cljs.core.logic.fd","<","cljs.core.logic.fd/<",1528484292,null),new cljs.core.Symbol("cljs.core.logic.fd","!=","cljs.core.logic.fd/!=",1528485316,null),new cljs.core.Symbol("cljs.core.logic.fd","==","cljs.core.logic.fd/==",1528485544,null),new cljs.core.Symbol("cljs.core.logic.fd",">","cljs.core.logic.fd/>",1528484294,null),new cljs.core.Symbol("cljs.core.logic.fd",">=","cljs.core.logic.fd/>=",1528482121,null),new cljs.core.Symbol("cljs.core.logic.fd","<=","cljs.core.logic.fd/<=",1528485515,null)]);
cljs.core.logic.fd.binops = cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.logic.fd.binops__GT_fd));
cljs.core.logic.fd.expand = (function expand(form){if(cljs.core.seq_QMARK_.call(null,form))
{var vec__35838 = form;var op = cljs.core.nth.call(null,vec__35838,0,null);var args = cljs.core.nthnext.call(null,vec__35838,1);if(cljs.core.truth_((function (){var and__4695__auto__ = cljs.core.logic.fd.binops.call(null,op);if(cljs.core.truth_(and__4695__auto__))
{return cljs.core._GT_.call(null,cljs.core.count.call(null,args),2);
} else
{return and__4695__auto__;
}
})()))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,expand.call(null,cljs.core.cons.call(null,op,cljs.core.rest.call(null,args)))),expand.call(null,cljs.core.first.call(null,args))),op);
} else
{return cljs.core.cons.call(null,op,cljs.core.map.call(null,expand,args));
}
} else
{return form;
}
});
cljs.core.logic.fd.eq_STAR_ = (function() {
var eq_STAR_ = null;
var eq_STAR___2 = (function (form,vars){return eq_STAR_.call(null,form,vars,null);
});
var eq_STAR___3 = (function (form,vars,out){if(cljs.core.seq_QMARK_.call(null,form))
{var vec__35842 = form;var op = cljs.core.nth.call(null,vec__35842,0,null);var r1 = cljs.core.nth.call(null,vec__35842,1,null);var r2 = cljs.core.nth.call(null,vec__35842,2,null);var vec__35843 = ((cljs.core.seq_QMARK_.call(null,r1))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return cljs.core.PersistentVector.fromArray([s,true], true);
})():cljs.core.PersistentVector.fromArray([r1,false], true));var outl = cljs.core.nth.call(null,vec__35843,0,null);var outlv_QMARK_ = cljs.core.nth.call(null,vec__35843,1,null);var vec__35844 = ((cljs.core.seq_QMARK_.call(null,r2))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return cljs.core.PersistentVector.fromArray([s,true], true);
})():cljs.core.PersistentVector.fromArray([r2,false], true));var outr = cljs.core.nth.call(null,vec__35844,0,null);var outrv_QMARK_ = cljs.core.nth.call(null,vec__35844,1,null);var op__$1 = cljs.core.logic.fd.binops__GT_fd.call(null,op);return cljs.core.cons.call(null,(cljs.core.truth_(out)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,out),outr),outl),op__$1):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,outr),outl),op__$1)),cljs.core.concat.call(null,((cljs.core.seq_QMARK_.call(null,r1))?eq_STAR_.call(null,r1,vars,(cljs.core.truth_(outlv_QMARK_)?outl:null)):null),((cljs.core.seq_QMARK_.call(null,r2))?eq_STAR_.call(null,r2,vars,(cljs.core.truth_(outrv_QMARK_)?outr:null)):null)));
} else
{return form;
}
});
eq_STAR_ = function(form,vars,out){
switch(arguments.length){
case 2:
return eq_STAR___2.call(this,form,vars);
case 3:
return eq_STAR___3.call(this,form,vars,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eq_STAR_.cljs$core$IFn$_invoke$arity$2 = eq_STAR___2;
eq_STAR_.cljs$core$IFn$_invoke$arity$3 = eq_STAR___3;
return eq_STAR_;
})()
;
cljs.core.logic.fd.__GT_fd = (function __GT_fd(vars,exprs){return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","fresh","cljs.core.logic/fresh",840762354,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1101),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,5)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,vars))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1101),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11)))))),cljs.core.reverse.call(null,exprs))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1101),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,4)))));
});
cljs.core.logic.fd.eq_form = (function eq_form(form){var vars = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var exprs = cljs.core.logic.fd.eq_STAR_.call(null,cljs.core.logic.fd.expand.call(null,form),vars);return cljs.core.logic.fd.__GT_fd.call(null,cljs.core.deref.call(null,vars),exprs);
});
cljs.core.logic.fd.get_square = (function get_square(rows,x,y){var iter__5390__auto__ = (function iter__35851(s__35852){return (new cljs.core.LazySeq(null,(function (){var s__35852__$1 = s__35852;while(true){
var temp__4094__auto__ = cljs.core.seq.call(null,s__35852__$1);if(temp__4094__auto__)
{var xs__4584__auto__ = temp__4094__auto__;var x__$1 = cljs.core.first.call(null,xs__4584__auto__);var iterys__5386__auto__ = ((function (s__35852__$1,x__$1,xs__4584__auto__,temp__4094__auto__){
return (function iter__35853(s__35854){return (new cljs.core.LazySeq(null,((function (s__35852__$1,x__$1,xs__4584__auto__,temp__4094__auto__){
return (function (){var s__35854__$1 = s__35854;while(true){
var temp__4094__auto____$1 = cljs.core.seq.call(null,s__35854__$1);if(temp__4094__auto____$1)
{var s__35854__$2 = temp__4094__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__35854__$2))
{var c__5388__auto__ = cljs.core.chunk_first.call(null,s__35854__$2);var size__5389__auto__ = cljs.core.count.call(null,c__5388__auto__);var b__35856 = cljs.core.chunk_buffer.call(null,size__5389__auto__);if((function (){var i__35855 = 0;while(true){
if((i__35855 < size__5389__auto__))
{var y__$1 = cljs.core._nth.call(null,c__5388__auto__,i__35855);cljs.core.chunk_append.call(null,b__35856,cljs.core.get_in.call(null,rows,cljs.core.PersistentVector.fromArray([x__$1,y__$1], true)));
{
var G__35857 = (i__35855 + 1);
i__35855 = G__35857;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35856),iter__35853.call(null,cljs.core.chunk_rest.call(null,s__35854__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35856),null);
}
} else
{var y__$1 = cljs.core.first.call(null,s__35854__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,rows,cljs.core.PersistentVector.fromArray([x__$1,y__$1], true)),iter__35853.call(null,cljs.core.rest.call(null,s__35854__$2)));
}
} else
{return null;
}
break;
}
});})(s__35852__$1,x__$1,xs__4584__auto__,temp__4094__auto__))
,null,null));
});})(s__35852__$1,x__$1,xs__4584__auto__,temp__4094__auto__))
;var fs__5387__auto__ = cljs.core.seq.call(null,iterys__5386__auto__.call(null,cljs.core.range.call(null,y,cljs.core._PLUS_.call(null,y,3))));if(fs__5387__auto__)
{return cljs.core.concat.call(null,fs__5387__auto__,iter__35851.call(null,cljs.core.rest.call(null,s__35852__$1)));
} else
{{
var G__35858 = cljs.core.rest.call(null,s__35852__$1);
s__35852__$1 = G__35858;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5390__auto__.call(null,cljs.core.range.call(null,x,cljs.core._PLUS_.call(null,x,3)));
});
cljs.core.logic.fd.init = (function init(vars,hints){if(cljs.core.seq.call(null,vars))
{var hint = cljs.core.first.call(null,hints);return (function (a__32199__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__32199__auto__,((!((hint === 0)))?cljs.core.logic._EQ__EQ_.call(null,cljs.core.first.call(null,vars),hint):cljs.core.logic.succeed)),init.call(null,cljs.core.next.call(null,vars),cljs.core.next.call(null,hints)));
});
} else
{return cljs.core.logic.succeed;
}
});
cljs.core.logic.fd.sudokufd = (function sudokufd(hints){var vars = cljs.core.repeatedly.call(null,81,cljs.core.logic.lvar);var rows = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,9,vars)));var cols = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,rows);var sqs = (function (){var iter__5390__auto__ = ((function (vars,rows,cols){
return (function iter__35868(s__35869){return (new cljs.core.LazySeq(null,((function (vars,rows,cols){
return (function (){var s__35869__$1 = s__35869;while(true){
var temp__4094__auto__ = cljs.core.seq.call(null,s__35869__$1);if(temp__4094__auto__)
{var xs__4584__auto__ = temp__4094__auto__;var x = cljs.core.first.call(null,xs__4584__auto__);var iterys__5386__auto__ = ((function (s__35869__$1,x,xs__4584__auto__,temp__4094__auto__,vars,rows,cols){
return (function iter__35870(s__35871){return (new cljs.core.LazySeq(null,((function (s__35869__$1,x,xs__4584__auto__,temp__4094__auto__,vars,rows,cols){
return (function (){var s__35871__$1 = s__35871;while(true){
var temp__4094__auto____$1 = cljs.core.seq.call(null,s__35871__$1);if(temp__4094__auto____$1)
{var s__35871__$2 = temp__4094__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__35871__$2))
{var c__5388__auto__ = cljs.core.chunk_first.call(null,s__35871__$2);var size__5389__auto__ = cljs.core.count.call(null,c__5388__auto__);var b__35873 = cljs.core.chunk_buffer.call(null,size__5389__auto__);if((function (){var i__35872 = 0;while(true){
if((i__35872 < size__5389__auto__))
{var y = cljs.core._nth.call(null,c__5388__auto__,i__35872);cljs.core.chunk_append.call(null,b__35873,cljs.core.logic.fd.get_square.call(null,rows,x,y));
{
var G__35876 = (i__35872 + 1);
i__35872 = G__35876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35873),iter__35870.call(null,cljs.core.chunk_rest.call(null,s__35871__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35873),null);
}
} else
{var y = cljs.core.first.call(null,s__35871__$2);return cljs.core.cons.call(null,cljs.core.logic.fd.get_square.call(null,rows,x,y),iter__35870.call(null,cljs.core.rest.call(null,s__35871__$2)));
}
} else
{return null;
}
break;
}
});})(s__35869__$1,x,xs__4584__auto__,temp__4094__auto__,vars,rows,cols))
,null,null));
});})(s__35869__$1,x,xs__4584__auto__,temp__4094__auto__,vars,rows,cols))
;var fs__5387__auto__ = cljs.core.seq.call(null,iterys__5386__auto__.call(null,cljs.core.range.call(null,0,9,3)));if(fs__5387__auto__)
{return cljs.core.concat.call(null,fs__5387__auto__,iter__35868.call(null,cljs.core.rest.call(null,s__35869__$1)));
} else
{{
var G__35877 = cljs.core.rest.call(null,s__35869__$1);
s__35869__$1 = G__35877;
continue;
}
}
} else
{return null;
}
break;
}
});})(vars,rows,cols))
,null,null));
});})(vars,rows,cols))
;return iter__5390__auto__.call(null,cljs.core.range.call(null,0,9,3));
})();var opts__32157__auto__ = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"occurs-check","occurs-check",3132413236),true,new cljs.core.Keyword(null,"n","n",1013904352),1,new cljs.core.Keyword(null,"db","db",1013907440),cljs.core.logic._STAR_logic_dbs_STAR_], true);var xs__32158__auto__ = cljs.core.logic.protocols.take_STAR_.call(null,((function (opts__32157__auto__){
return (function (){return ((function (opts__32157__auto__){
return (function (a__32148__auto__){return ((function (opts__32157__auto__){
return (function _inc(){var q = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1640531414,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__32148__auto__,cljs.core.logic.fd.init.call(null,vars,hints)),cljs.core.logic._EQ__EQ_.call(null,q,vars)),cljs.core.logic.everyg.call(null,((function (q,opts__32157__auto__){
return (function (p1__35859_SHARP_){var dom_35875 = cljs.core.logic.fd.domain.call(null,1,2,3,4,5,6,7,8,9);return ((function (dom_35875,q,opts__32157__auto__){
return (function (a__32148__auto____$1){return ((function (dom_35875,q,opts__32157__auto__){
return (function _inc(){return cljs.core.logic.protocols.bind.call(null,a__32148__auto____$1,cljs.core.logic.fd.dom.call(null,p1__35859_SHARP_,dom_35875));
});
;})(dom_35875,q,opts__32157__auto__))
});
;})(dom_35875,q,opts__32157__auto__))
});})(q,opts__32157__auto__))
,vars)),cljs.core.logic.everyg.call(null,cljs.core.logic.fd.distinct,rows)),cljs.core.logic.everyg.call(null,cljs.core.logic.fd.distinct,cols)),cljs.core.logic.everyg.call(null,cljs.core.logic.fd.distinct,sqs)),cljs.core.logic.reifyg.call(null,q));
});
;})(opts__32157__auto__))
});})(opts__32157__auto__))
.call(null,cljs.core.logic.tabled_s.call(null,new cljs.core.Keyword(null,"occurs-check","occurs-check",3132413236).cljs$core$IFn$_invoke$arity$1(opts__32157__auto__),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"reify-vars","reify-vars",4368745730),true], true),opts__32157__auto__)));
});})(opts__32157__auto__))
);var temp__4092__auto__ = new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(opts__32157__auto__);if(cljs.core.truth_(temp__4092__auto__))
{var n__32159__auto__ = temp__4092__auto__;return cljs.core.take.call(null,n__32159__auto__,xs__32158__auto__);
} else
{return xs__32158__auto__;
}
});
