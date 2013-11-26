// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.fd');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic.protocols');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic.protocols');
cljs.core.logic.fd.IInterval = (function (){var obj31688 = {};return obj31688;
})();
cljs.core.logic.fd._lb = (function _lb(this$){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$IInterval$_lb$arity$1;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$IInterval$_lb$arity$1(this$);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._lb[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._lb["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterval.-lb",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd._ub = (function _ub(this$){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$IInterval$_ub$arity$1;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$IInterval$_ub$arity$1(this$);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._ub[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._ub["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterval.-ub",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd.IIntervals = (function (){var obj31690 = {};return obj31690;
})();
cljs.core.logic.fd._intervals = (function _intervals(this$){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$IIntervals$_intervals$arity$1;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$IIntervals$_intervals$arity$1(this$);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._intervals[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._intervals["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIntervals.-intervals",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd.ISortedDomain = (function (){var obj31692 = {};return obj31692;
})();
cljs.core.logic.fd._drop_one = (function _drop_one(this$){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1(this$);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._drop_one[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._drop_one["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-drop-one",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd._drop_before = (function _drop_before(this$,n){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2(this$,n);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._drop_before[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._drop_before["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-drop-before",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd._keep_before = (function _keep_before(this$,n){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2(this$,n);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._keep_before[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._keep_before["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-keep-before",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd.ISet = (function (){var obj31694 = {};return obj31694;
})();
cljs.core.logic.fd._member_QMARK_ = (function _member_QMARK_(this$,n){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2(this$,n);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._member_QMARK_[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._member_QMARK_["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-member?",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd._disjoint_QMARK_ = (function _disjoint_QMARK_(this$,that){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2(this$,that);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._disjoint_QMARK_[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._disjoint_QMARK_["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoint?",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd._intersection = (function _intersection(this$,that){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$ISet$_intersection$arity$2;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_intersection$arity$2(this$,that);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._intersection[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._intersection["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-intersection",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd._difference = (function _difference(this$,that){if((function (){var and__11176__auto__ = this$;if(and__11176__auto__)
{return this$.cljs$core$logic$fd$ISet$_difference$arity$2;
} else
{return and__11176__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_difference$arity$2(this$,that);
} else
{var x__11791__auto__ = (((this$ == null))?null:this$);return (function (){var or__11188__auto__ = (cljs.core.logic.fd._difference[goog.typeOf(x__11791__auto__)]);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var or__11188__auto____$1 = (cljs.core.logic.fd._difference["_"]);if(or__11188__auto____$1)
{return or__11188__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-difference",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd.bounds = (function bounds(i){return cljs.core.logic.pair.call(null,cljs.core.logic.fd._lb.call(null,i),cljs.core.logic.fd._ub.call(null,i));
});
cljs.core.logic.fd.interval__LT_ = (function interval__LT_(i,j){return (cljs.core.logic.fd._ub.call(null,i) < cljs.core.logic.fd._lb.call(null,j));
});
cljs.core.logic.fd.interval__LT__EQ_ = (function interval__LT__EQ_(i,j){return (cljs.core.logic.fd._ub.call(null,i) <= cljs.core.logic.fd._lb.call(null,j));
});
cljs.core.logic.fd.interval__GT_ = (function interval__GT_(i,j){return (cljs.core.logic.fd._lb.call(null,i) > cljs.core.logic.fd._ub.call(null,j));
});
cljs.core.logic.fd.interval__GT__EQ_ = (function interval__GT__EQ_(i,j){return (cljs.core.logic.fd._lb.call(null,i) >= cljs.core.logic.fd._ub.call(null,j));
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
cljs.core.logic.fd.FiniteDomain.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/FiniteDomain");
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
{if((self__.max < new cljs.core.Keyword(null,"min","min",1014012356).cljs$core$IFn$_invoke$arity$1(that)))
{return true;
} else
{if((self__.min > new cljs.core.Keyword(null,"max","max",1014012118).cljs$core$IFn$_invoke$arity$1(that)))
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
{if((c > 1))
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
var ___$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.drop_while.call(null,(function (p1__31695_SHARP_){return (p1__31695_SHARP_ < n);
}),self__.s));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.take_while.call(null,(function (p1__31696_SHARP_){return (p1__31696_SHARP_ < n);
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
var this$__$1 = this;var G__31697 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__31697))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__31697))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357),G__31697))
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
domain.cljs$lang$applyTo = (function (arglist__31698){
var args = cljs.core.seq(arglist__31698);
return domain__delegate(args);
});
domain.cljs$core$IFn$_invoke$arity$variadic = domain__delegate;
return domain;
})()
;
(cljs.core.logic.fd.IIntervals["number"] = true);
(cljs.core.logic.fd._intervals["number"] = (function (this__27208__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,this__27208__auto__);
}));
(cljs.core.logic.fd.ISet["number"] = true);
(cljs.core.logic.fd._member_QMARK_["number"] = (function (this__27208__auto__,that__27210__auto__){if(cljs.core.integer_QMARK_.call(null,that__27210__auto__))
{return (this__27208__auto__ === that__27210__auto__);
} else
{return cljs.core.logic.fd._member_QMARK_.call(null,that__27210__auto__,this__27208__auto__);
}
}));
(cljs.core.logic.fd._disjoint_QMARK_["number"] = (function (this__27208__auto__,that__27210__auto__){if(cljs.core.integer_QMARK_.call(null,that__27210__auto__))
{return !((this__27208__auto__ === that__27210__auto__));
} else
{return cljs.core.logic.fd._disjoint_QMARK_.call(null,that__27210__auto__,this__27208__auto__);
}
}));
(cljs.core.logic.fd._intersection["number"] = (function (this__27208__auto__,that__27210__auto__){if(cljs.core.integer_QMARK_.call(null,that__27210__auto__))
{if((this__27208__auto__ === that__27210__auto__))
{return this__27208__auto__;
} else
{return null;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that__27210__auto__)))
{return cljs.core.logic.fd._intersection.call(null,that__27210__auto__,this__27208__auto__);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.intersection_STAR_.call(null,this__27208__auto__,that__27210__auto__);
} else
{return null;
}
}
}
}));
(cljs.core.logic.fd._difference["number"] = (function (this__27208__auto__,that__27210__auto__){if(cljs.core.integer_QMARK_.call(null,that__27210__auto__))
{if((this__27208__auto__ === that__27210__auto__))
{return null;
} else
{return this__27208__auto__;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that__27210__auto__)))
{return cljs.core.logic.fd._difference.call(null,that__27210__auto__,this__27208__auto__);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.difference_STAR_.call(null,this__27208__auto__,that__27210__auto__);
} else
{return null;
}
}
}
}));
(cljs.core.logic.fd.ISortedDomain["number"] = true);
(cljs.core.logic.fd._drop_one["number"] = (function (this__27208__auto__){return null;
}));
(cljs.core.logic.fd._drop_before["number"] = (function (this__27208__auto__,n__27209__auto__){if((this__27208__auto__ >= n__27209__auto__))
{return this__27208__auto__;
} else
{return null;
}
}));
(cljs.core.logic.fd._keep_before["number"] = (function (this__27208__auto__,n__27209__auto__){if((this__27208__auto__ < n__27209__auto__))
{return this__27208__auto__;
} else
{return null;
}
}));
(cljs.core.logic.fd.IInterval["number"] = true);
(cljs.core.logic.fd._lb["number"] = (function (this__27208__auto__){return this__27208__auto__;
}));
(cljs.core.logic.fd._ub["number"] = (function (this__27208__auto__){return this__27208__auto__;
}));
(cljs.core.logic.protocols.IMemberCount["number"] = true);
(cljs.core.logic.protocols._member_count["number"] = (function (this__27208__auto__){return 1;
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
cljs.core.logic.fd.IntervalFD.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/IntervalFD");
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
var this$__$1 = this;return ((n >= self__.lb)) && ((n <= self__.ub));
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{return cljs.core.not.call(null,cljs.core.logic.fd._member_QMARK_.call(null,this$__$1,that));
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that)))
{var i = this$__$1;var j = that;var vec__31699 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__31699,0,null);var imax = cljs.core.nth.call(null,vec__31699,1,null);var vec__31700 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__31700,0,null);var jmax = cljs.core.nth.call(null,vec__31700,1,null);return ((imin > jmax)) || ((imax < jmin));
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
{var i = this$__$1;var j = that;var imin = cljs.core.logic.fd._lb.call(null,i);var imax = cljs.core.logic.fd._ub.call(null,i);var jmin = cljs.core.logic.fd._lb.call(null,j);var jmax = cljs.core.logic.fd._ub.call(null,j);if((imax < jmin))
{return null;
} else
{if((jmax < imin))
{return null;
} else
{if(((imin <= jmin)) && ((imax >= jmax)))
{return j;
} else
{if(((jmin <= imin)) && ((jmax >= imax)))
{return i;
} else
{if(((imin <= jmin)) && ((imax <= jmax)))
{return cljs.core.logic.fd.interval.call(null,jmin,imax);
} else
{if(((jmin <= imin)) && ((jmax <= imax)))
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
{var i = this$__$1;var j = that;var imin = cljs.core.logic.fd._lb.call(null,i);var imax = cljs.core.logic.fd._ub.call(null,i);var jmin = cljs.core.logic.fd._lb.call(null,j);var jmax = cljs.core.logic.fd._ub.call(null,j);if((jmin > imax))
{return i;
} else
{if(((jmin <= imin)) && ((jmax >= imax)))
{return null;
} else
{if(((imin < jmin)) && ((imax > jmax)))
{return cljs.core.logic.fd.multi_interval.call(null,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)),cljs.core.logic.fd.interval.call(null,(jmax + 1),imax));
} else
{if(((imin < jmin)) && ((jmin <= imax)))
{return cljs.core.logic.fd.interval.call(null,imin,(jmin - 1));
} else
{if(((imax > jmax)) && ((jmin <= imin)))
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
var ___$1 = this;var nlb = (self__.lb + 1);if((nlb <= self__.ub))
{return cljs.core.logic.fd.interval.call(null,nlb,self__.ub);
} else
{return null;
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,n,self__.ub))
{return n;
} else
{if((n < self__.lb))
{return this$__$1;
} else
{if((n > self__.ub))
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
var this$__$1 = this;if((n <= self__.lb))
{return null;
} else
{if((n > self__.ub))
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
var this$__$1 = this;return ((self__.ub - self__.lb) + 1);
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
var interval__2 = (function (lb,ub){if(((ub - lb) === 0))
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
{var i = cljs.core.first.call(null,is__$1);var j = cljs.core.first.call(null,js__$1);if(cljs.core.logic.fd.interval__LT_.call(null,i,j))
{{
var G__31705 = cljs.core.next.call(null,is__$1);
var G__31706 = js__$1;
var G__31707 = r;
is__$1 = G__31705;
js__$1 = G__31706;
r = G__31707;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__31708 = is__$1;
var G__31709 = cljs.core.next.call(null,js__$1);
var G__31710 = r;
is__$1 = G__31708;
js__$1 = G__31709;
r = G__31710;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__31703 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__31703,0,null);var imax = cljs.core.nth.call(null,vec__31703,1,null);var vec__31704 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__31704,0,null);var jmax = cljs.core.nth.call(null,vec__31704,1,null);if((imin <= jmin))
{if((imax < jmax))
{{
var G__31711 = cljs.core.next.call(null,is__$1);
var G__31712 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__31713 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,imax));
is__$1 = G__31711;
js__$1 = G__31712;
r = G__31713;
continue;
}
} else
{if((imax > jmax))
{{
var G__31714 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__31715 = cljs.core.next.call(null,js__$1);
var G__31716 = cljs.core.conj.call(null,r,j);
is__$1 = G__31714;
js__$1 = G__31715;
r = G__31716;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__31717 = cljs.core.next.call(null,is__$1);
var G__31718 = cljs.core.next.call(null,js__$1);
var G__31719 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,jmax));
is__$1 = G__31717;
js__$1 = G__31718;
r = G__31719;
continue;
}
} else
{return null;
}
}
}
} else
{if((imin > jmin))
{if((imax > jmax))
{{
var G__31720 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__31721 = cljs.core.next.call(null,js__$1);
var G__31722 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,jmax));
is__$1 = G__31720;
js__$1 = G__31721;
r = G__31722;
continue;
}
} else
{if((imax < jmax))
{{
var G__31723 = is__$1;
var G__31724 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__31725 = cljs.core.conj.call(null,r,i);
is__$1 = G__31723;
js__$1 = G__31724;
r = G__31725;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__31726 = cljs.core.next.call(null,is__$1);
var G__31727 = cljs.core.next.call(null,js__$1);
var G__31728 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,imax));
is__$1 = G__31726;
js__$1 = G__31727;
r = G__31728;
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
{var i = cljs.core.first.call(null,is__$1);var j = cljs.core.first.call(null,js__$1);if(cljs.core.logic.fd.interval__LT_.call(null,i,j))
{{
var G__31733 = cljs.core.next.call(null,is__$1);
var G__31734 = js__$1;
var G__31735 = cljs.core.conj.call(null,r,i);
is__$1 = G__31733;
js__$1 = G__31734;
r = G__31735;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__31736 = is__$1;
var G__31737 = cljs.core.next.call(null,js__$1);
var G__31738 = r;
is__$1 = G__31736;
js__$1 = G__31737;
r = G__31738;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__31731 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__31731,0,null);var imax = cljs.core.nth.call(null,vec__31731,1,null);var vec__31732 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__31732,0,null);var jmax = cljs.core.nth.call(null,vec__31732,1,null);if((imin < jmin))
{if((jmax < imax))
{{
var G__31739 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__31740 = cljs.core.next.call(null,js__$1);
var G__31741 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__31739;
js__$1 = G__31740;
r = G__31741;
continue;
}
} else
{if((jmax > imax))
{{
var G__31742 = cljs.core.next.call(null,is__$1);
var G__31743 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__31744 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__31742;
js__$1 = G__31743;
r = G__31744;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__31745 = cljs.core.next.call(null,is__$1);
var G__31746 = cljs.core.next.call(null,js__$1);
var G__31747 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__31745;
js__$1 = G__31746;
r = G__31747;
continue;
}
} else
{return null;
}
}
}
} else
{if((imin >= jmin))
{if((imax < jmax))
{{
var G__31748 = cljs.core.next.call(null,is__$1);
var G__31749 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__31750 = r;
is__$1 = G__31748;
js__$1 = G__31749;
r = G__31750;
continue;
}
} else
{if((imax > jmax))
{{
var G__31751 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__31752 = cljs.core.next.call(null,js__$1);
var G__31753 = r;
is__$1 = G__31751;
js__$1 = G__31752;
r = G__31753;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__31754 = cljs.core.next.call(null,is__$1);
var G__31755 = cljs.core.next.call(null,js__$1);
var G__31756 = r;
is__$1 = G__31754;
js__$1 = G__31755;
r = G__31756;
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
{var i = cljs.core.first.call(null,d0__$1);var j = cljs.core.first.call(null,d1__$1);if(cljs.core.logic.fd.interval__LT_.call(null,i,j))
{{
var G__31757 = cljs.core.next.call(null,d0__$1);
var G__31758 = d1__$1;
d0__$1 = G__31757;
d1__$1 = G__31758;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__31759 = d0__$1;
var G__31760 = cljs.core.next.call(null,d1__$1);
d0__$1 = G__31759;
d1__$1 = G__31760;
continue;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,i,j)))
{{
var G__31761 = cljs.core.next.call(null,d0__$1);
var G__31762 = d1__$1;
d0__$1 = G__31761;
d1__$1 = G__31762;
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
cljs.core.logic.fd.MultiIntervalFD.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/MultiIntervalFD");
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
var this$__$1 = this;if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31764_SHARP_){return cljs.core.logic.fd._member_QMARK_.call(null,p1__31764_SHARP_,n);
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
var G__31767 = cljs.core.next.call(null,is__$2);
var G__31768 = cljs.core.conj.call(null,r,i);
is__$2 = G__31767;
r = G__31768;
continue;
}
} else
{{
var G__31769 = cljs.core.next.call(null,is__$2);
var G__31770 = r;
is__$2 = G__31769;
r = G__31770;
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
var G__31771 = cljs.core.next.call(null,is__$2);
var G__31772 = cljs.core.conj.call(null,r,i);
is__$2 = G__31771;
r = G__31772;
continue;
}
} else
{{
var G__31773 = cljs.core.next.call(null,is__$2);
var G__31774 = r;
is__$2 = G__31773;
r = G__31774;
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
var this$__$1 = this;return cljs.core.reduce.call(null,cljs.core._PLUS_,0,cljs.core.map.call(null,(function (p1__31763_SHARP_){return cljs.core.logic.protocols._member_count.call(null,p1__31763_SHARP_);
}),self__.is));
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,j){var self__ = this;
var this$__$1 = this;if((j instanceof cljs.core.logic.fd.MultiIntervalFD))
{var i = this$__$1;var vec__31765 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__31765,0,null);var jmax = cljs.core.nth.call(null,vec__31765,1,null);if((cljs.core._EQ_.call(null,self__.min,jmin)) && (cljs.core._EQ_.call(null,self__.max,jmax)))
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
var this$__$1 = this;var G__31766 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__31766))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__31766))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"is","is",1013907612),G__31766))
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
{var j = cljs.core.peek.call(null,r);var jmax = cljs.core.logic.fd._ub.call(null,j);var imin = cljs.core.logic.fd._lb.call(null,i);if(((imin - 1) <= jmax))
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
var multi_interval__2 = (function (i0,i1){var is = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i0,i1], null);return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.logic.fd._lb,is)),cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.logic.fd._ub,is)),is));
});
var multi_interval__3 = (function() { 
var G__31775__delegate = function (i0,i1,ir){var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,i1),i0),ir));return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.logic.fd._lb,is)),cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.logic.fd._ub,is)),is));
};
var G__31775 = function (i0,i1,var_args){
var ir = null;if (arguments.length > 2) {
  ir = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__31775__delegate.call(this,i0,i1,ir);};
G__31775.cljs$lang$maxFixedArity = 2;
G__31775.cljs$lang$applyTo = (function (arglist__31776){
var i0 = cljs.core.first(arglist__31776);
arglist__31776 = cljs.core.next(arglist__31776);
var i1 = cljs.core.first(arglist__31776);
var ir = cljs.core.rest(arglist__31776);
return G__31775__delegate(i0,i1,ir);
});
G__31775.cljs$core$IFn$_invoke$arity$variadic = G__31775__delegate;
return G__31775;
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
{return cljs.core.logic.get_dom.call(null,a,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947));
} else
{return x;
}
});
cljs.core.logic.fd.ext_dom_fd = (function ext_dom_fd(a,x,dom,domp){var a__$1 = cljs.core.logic.add_dom.call(null,a,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),dom);if(cljs.core.not_EQ_.call(null,domp,dom))
{return cljs.core.logic.run_constraints_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),new cljs.core.Keyword(null,"cs","cs",1013907426).cljs$core$IFn$_invoke$arity$1(a__$1),new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947)).call(null,a__$1);
} else
{return a__$1;
}
});
cljs.core.logic.fd.singleton_dom_QMARK_ = (function singleton_dom_QMARK_(x){return cljs.core.integer_QMARK_.call(null,x);
});
cljs.core.logic.fd.resolve_storable_dom = (function resolve_storable_dom(a,x,dom,domp){if(cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dom))
{var xv = cljs.core.logic.protocols.walk.call(null,a,x);if(cljs.core.logic.lvar_QMARK_.call(null,xv))
{return cljs.core.logic.protocols.ext_run_cs.call(null,cljs.core.logic.rem_dom.call(null,a,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947)),x,dom);
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
cljs.core.logic.fd.dom = (function dom(x,dom__$1){return (function (a){var domp = cljs.core.logic.fd.get_dom.call(null,a,x);var dom__$2 = (cljs.core.truth_(domp)?cljs.core.logic.fd._intersection.call(null,dom__$1,domp):dom__$1);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,x,dom__$2,domp),((((domp == null)) && (!(cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dom__$2))))?cljs.core.logic.fd.domc.call(null,x):cljs.core.identity)).call(null,a);
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
{var i = cljs.core.first.call(null,is);return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,cljs.core.logic.fd._lb.call(null,i),(function (){var temp__4096__auto__ = cljs.core.logic.fd._drop_one.call(null,i);if(cljs.core.truth_(temp__4096__auto__))
{var ni = temp__4096__auto__;return to_vals_STAR_.call(null,cljs.core.cons.call(null,ni,cljs.core.next.call(null,is)));
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
cljs.core.logic.fd._domc = (function _domc(x){if(typeof cljs.core.logic.fd.t31784 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31784 = (function (x,_domc,meta31785){
this.x = x;
this._domc = _domc;
this.meta31785 = meta31785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t31784.cljs$lang$type = true;
cljs.core.logic.fd.t31784.cljs$lang$ctorStr = "cljs.core.logic.fd/t31784";
cljs.core.logic.fd.t31784.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31784");
});
cljs.core.logic.fd.t31784.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t31784.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t31784.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t31784.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","domc","cljs.core.logic.fd/domc",1533784811,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,650),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,650),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.fd.t31784.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.fd.t31784.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t31784.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic.protocols.walk.call(null,s,self__.x);var xd = new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(cljs.core.logic.protocols.root_val.call(null,s,self__.x)));if(typeof cljs.core.logic.fd.t31787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31787 = (function (xd,xv,s,this$,meta31785,x,_domc,meta31788){
this.xd = xd;
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta31785 = meta31785;
this.x = x;
this._domc = _domc;
this.meta31788 = meta31788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t31787.cljs$lang$type = true;
cljs.core.logic.fd.t31787.cljs$lang$ctorStr = "cljs.core.logic.fd/t31787";
cljs.core.logic.fd.t31787.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31787");
});
cljs.core.logic.fd.t31787.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t31787.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.xv));
});
cljs.core.logic.fd.t31787.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t31787.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.xd == null);
});
cljs.core.logic.fd.t31787.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(self__.xd))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,self__.xd,self__.xv)))
{return cljs.core.logic.rem_dom.call(null,s__$2,self__.x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947));
} else
{return null;
}
} else
{return s__$2;
}
});
cljs.core.logic.fd.t31787.prototype.apply = (function (self__,args31790){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31790)));
});
cljs.core.logic.fd.t31787.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.xd))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,self__.xd,self__.xv)))
{return cljs.core.logic.rem_dom.call(null,s__$2,self__.x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947));
} else
{return null;
}
} else
{return s__$2;
}
});
cljs.core.logic.fd.t31787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31789){var self__ = this;
var _31789__$1 = this;return self__.meta31788;
});
cljs.core.logic.fd.t31787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31789,meta31788__$1){var self__ = this;
var _31789__$1 = this;return (new cljs.core.logic.fd.t31787(self__.xd,self__.xv,self__.s,self__.this$,self__.meta31785,self__.x,self__._domc,meta31788__$1));
});
cljs.core.logic.fd.__GT_t31787 = (function __GT_t31787(xd__$1,xv__$1,s__$1,this$__$2,meta31785__$1,x__$2,_domc__$2,meta31788){return (new cljs.core.logic.fd.t31787(xd__$1,xv__$1,s__$1,this$__$2,meta31785__$1,x__$2,_domc__$2,meta31788));
});
}
return (new cljs.core.logic.fd.t31787(xd,xv,s,this$__$1,self__.meta31785,self__.x,self__._domc,null));
});
cljs.core.logic.fd.t31784.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t31784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31786){var self__ = this;
var _31786__$1 = this;return self__.meta31785;
});
cljs.core.logic.fd.t31784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31786,meta31785__$1){var self__ = this;
var _31786__$1 = this;return (new cljs.core.logic.fd.t31784(self__.x,self__._domc,meta31785__$1));
});
cljs.core.logic.fd.__GT_t31784 = (function __GT_t31784(x__$1,_domc__$1,meta31785){return (new cljs.core.logic.fd.t31784(x__$1,_domc__$1,meta31785));
});
}
return (new cljs.core.logic.fd.t31784(x,_domc,null));
});
cljs.core.logic.fd.domc = (function domc(x){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._domc.call(null,x));
});
cljs.core.logic.fd._EQ__EQ_c = (function _EQ__EQ_c(u,v){if(typeof cljs.core.logic.fd.t31798 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31798 = (function (v,u,_EQ__EQ_c,meta31799){
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta31799 = meta31799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t31798.cljs$lang$type = true;
cljs.core.logic.fd.t31798.cljs$lang$ctorStr = "cljs.core.logic.fd/t31798";
cljs.core.logic.fd.t31798.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31798");
});
cljs.core.logic.fd.t31798.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t31798.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t31798.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t31798.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","==","cljs.core.logic.fd/==",1528485544,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,680),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,680),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t31798.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t31798.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t31798.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t31801 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31801 = (function (dv,du,s,this$,meta31799,v,u,_EQ__EQ_c,meta31802){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta31799 = meta31799;
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta31802 = meta31802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t31801.cljs$lang$type = true;
cljs.core.logic.fd.t31801.cljs$lang$ctorStr = "cljs.core.logic.fd/t31801";
cljs.core.logic.fd.t31801.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31801");
});
cljs.core.logic.fd.t31801.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t31801.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11176__auto__ = self__.du;if(cljs.core.truth_(and__11176__auto__))
{return self__.dv;
} else
{return and__11176__auto__;
}
});
cljs.core.logic.fd.t31801.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t31801.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core._EQ_.call(null,self__.du,self__.dv));
});
cljs.core.logic.fd.t31801.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t31801.prototype.apply = (function (self__,args31804){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31804)));
});
cljs.core.logic.fd.t31801.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t31801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31803){var self__ = this;
var _31803__$1 = this;return self__.meta31802;
});
cljs.core.logic.fd.t31801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31803,meta31802__$1){var self__ = this;
var _31803__$1 = this;return (new cljs.core.logic.fd.t31801(self__.dv,self__.du,self__.s,self__.this$,self__.meta31799,self__.v,self__.u,self__._EQ__EQ_c,meta31802__$1));
});
cljs.core.logic.fd.__GT_t31801 = (function __GT_t31801(dv__$1,du__$1,s__$1,this$__$2,meta31799__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta31802){return (new cljs.core.logic.fd.t31801(dv__$1,du__$1,s__$1,this$__$2,meta31799__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta31802));
});
}
return (new cljs.core.logic.fd.t31801(dv,du,s,this$__$1,self__.meta31799,self__.v,self__.u,self__._EQ__EQ_c,null));
});
cljs.core.logic.fd.t31798.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t31798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31800){var self__ = this;
var _31800__$1 = this;return self__.meta31799;
});
cljs.core.logic.fd.t31798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31800,meta31799__$1){var self__ = this;
var _31800__$1 = this;return (new cljs.core.logic.fd.t31798(self__.v,self__.u,self__._EQ__EQ_c,meta31799__$1));
});
cljs.core.logic.fd.__GT_t31798 = (function __GT_t31798(v__$1,u__$1,_EQ__EQ_c__$1,meta31799){return (new cljs.core.logic.fd.t31798(v__$1,u__$1,_EQ__EQ_c__$1,meta31799));
});
}
return (new cljs.core.logic.fd.t31798(v,u,_EQ__EQ_c,null));
});
/**
* A finite domain constraint. u and v must be equal. u and v must
* eventually be given domains if vars.
*/
cljs.core.logic.fd._EQ__EQ_ = (function _EQ__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._EQ__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._BANG__EQ_c = (function _BANG__EQ_c(u,v){if(typeof cljs.core.logic.fd.t31812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31812 = (function (v,u,_BANG__EQ_c,meta31813){
this.v = v;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta31813 = meta31813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t31812.cljs$lang$type = true;
cljs.core.logic.fd.t31812.cljs$lang$ctorStr = "cljs.core.logic.fd/t31812";
cljs.core.logic.fd.t31812.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31812");
});
cljs.core.logic.fd.t31812.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t31812.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t31812.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t31812.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","!=","cljs.core.logic.fd/!=",1528485316,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,717),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,717),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t31812.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t31812.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t31812.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var su_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,du);var sv_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dv);if(typeof cljs.core.logic.fd.t31815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31815 = (function (v,u,_BANG__EQ_c,s,du,dv,sv_QMARK_,meta31813,su_QMARK_,this$,meta31816){
this.v = v;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.s = s;
this.du = du;
this.dv = dv;
this.sv_QMARK_ = sv_QMARK_;
this.meta31813 = meta31813;
this.su_QMARK_ = su_QMARK_;
this.this$ = this$;
this.meta31816 = meta31816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t31815.cljs$lang$type = true;
cljs.core.logic.fd.t31815.cljs$lang$ctorStr = "cljs.core.logic.fd/t31815";
cljs.core.logic.fd.t31815.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31815");
});
cljs.core.logic.fd.t31815.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t31815.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11176__auto__ = self__.du;if(cljs.core.truth_(and__11176__auto__))
{var and__11176__auto____$1 = self__.dv;if(cljs.core.truth_(and__11176__auto____$1))
{var or__11188__auto__ = self__.su_QMARK_;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return self__.sv_QMARK_;
}
} else
{return and__11176__auto____$1;
}
} else
{return and__11176__auto__;
}
});
cljs.core.logic.fd.t31815.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t31815.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11176__auto__ = self__.du;if(cljs.core.truth_(and__11176__auto__))
{var and__11176__auto____$1 = self__.dv;if(cljs.core.truth_(and__11176__auto____$1))
{return cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv);
} else
{return and__11176__auto____$1;
}
} else
{return and__11176__auto__;
}
});
cljs.core.logic.fd.t31815.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_((function (){var and__11176__auto__ = self__.su_QMARK_;if(cljs.core.truth_(and__11176__auto__))
{var and__11176__auto____$1 = self__.sv_QMARK_;if(cljs.core.truth_(and__11176__auto____$1))
{return cljs.core._EQ_.call(null,self__.du,self__.dv);
} else
{return and__11176__auto____$1;
}
} else
{return and__11176__auto__;
}
})()))
{return null;
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv)))
{return s__$2;
} else
{if(cljs.core.truth_(self__.su_QMARK_))
{var temp__4098__auto__ = cljs.core.logic.fd._difference.call(null,self__.dv,self__.du);if(cljs.core.truth_(temp__4098__auto__))
{var vdiff = temp__4098__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.v,vdiff,self__.dv).call(null,s__$2);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4098__auto__ = cljs.core.logic.fd._difference.call(null,self__.du,self__.dv);if(cljs.core.truth_(temp__4098__auto__))
{var udiff = temp__4098__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.u,udiff,self__.du).call(null,s__$2);
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
cljs.core.logic.fd.t31815.prototype.apply = (function (self__,args31818){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31818)));
});
cljs.core.logic.fd.t31815.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_((function (){var and__11176__auto__ = self__.su_QMARK_;if(cljs.core.truth_(and__11176__auto__))
{var and__11176__auto____$1 = self__.sv_QMARK_;if(cljs.core.truth_(and__11176__auto____$1))
{return cljs.core._EQ_.call(null,self__.du,self__.dv);
} else
{return and__11176__auto____$1;
}
} else
{return and__11176__auto__;
}
})()))
{return null;
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv)))
{return s__$2;
} else
{if(cljs.core.truth_(self__.su_QMARK_))
{var temp__4098__auto__ = cljs.core.logic.fd._difference.call(null,self__.dv,self__.du);if(cljs.core.truth_(temp__4098__auto__))
{var vdiff = temp__4098__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.v,vdiff,self__.dv).call(null,s__$2);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4098__auto__ = cljs.core.logic.fd._difference.call(null,self__.du,self__.dv);if(cljs.core.truth_(temp__4098__auto__))
{var udiff = temp__4098__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.u,udiff,self__.du).call(null,s__$2);
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
cljs.core.logic.fd.t31815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31817){var self__ = this;
var _31817__$1 = this;return self__.meta31816;
});
cljs.core.logic.fd.t31815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31817,meta31816__$1){var self__ = this;
var _31817__$1 = this;return (new cljs.core.logic.fd.t31815(self__.v,self__.u,self__._BANG__EQ_c,self__.s,self__.du,self__.dv,self__.sv_QMARK_,self__.meta31813,self__.su_QMARK_,self__.this$,meta31816__$1));
});
cljs.core.logic.fd.__GT_t31815 = (function __GT_t31815(v__$2,u__$2,_BANG__EQ_c__$2,s__$1,du__$1,dv__$1,sv_QMARK___$1,meta31813__$1,su_QMARK___$1,this$__$2,meta31816){return (new cljs.core.logic.fd.t31815(v__$2,u__$2,_BANG__EQ_c__$2,s__$1,du__$1,dv__$1,sv_QMARK___$1,meta31813__$1,su_QMARK___$1,this$__$2,meta31816));
});
}
return (new cljs.core.logic.fd.t31815(self__.v,self__.u,self__._BANG__EQ_c,s,du,dv,sv_QMARK_,self__.meta31813,su_QMARK_,this$__$1,null));
});
cljs.core.logic.fd.t31812.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t31812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31814){var self__ = this;
var _31814__$1 = this;return self__.meta31813;
});
cljs.core.logic.fd.t31812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31814,meta31813__$1){var self__ = this;
var _31814__$1 = this;return (new cljs.core.logic.fd.t31812(self__.v,self__.u,self__._BANG__EQ_c,meta31813__$1));
});
cljs.core.logic.fd.__GT_t31812 = (function __GT_t31812(v__$1,u__$1,_BANG__EQ_c__$1,meta31813){return (new cljs.core.logic.fd.t31812(v__$1,u__$1,_BANG__EQ_c__$1,meta31813));
});
}
return (new cljs.core.logic.fd.t31812(v,u,_BANG__EQ_c,null));
});
/**
* A finite domain constraint. u and v must not be equal. u and v
* must eventually be given domains if vars.
*/
cljs.core.logic.fd._BANG__EQ_ = (function _BANG__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._BANG__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._LT__EQ_c = (function _LT__EQ_c(u,v){if(typeof cljs.core.logic.fd.t31826 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31826 = (function (v,u,_LT__EQ_c,meta31827){
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta31827 = meta31827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t31826.cljs$lang$type = true;
cljs.core.logic.fd.t31826.cljs$lang$ctorStr = "cljs.core.logic.fd/t31826";
cljs.core.logic.fd.t31826.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31826");
});
cljs.core.logic.fd.t31826.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t31826.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t31826.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t31826.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","<=","cljs.core.logic.fd/<=",1528485515,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,750),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,750),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t31826.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t31826.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t31826.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t31829 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31829 = (function (dv,du,s,this$,meta31827,v,u,_LT__EQ_c,meta31830){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta31827 = meta31827;
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta31830 = meta31830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t31829.cljs$lang$type = true;
cljs.core.logic.fd.t31829.cljs$lang$ctorStr = "cljs.core.logic.fd/t31829";
cljs.core.logic.fd.t31829.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31829");
});
cljs.core.logic.fd.t31829.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t31829.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11176__auto__ = self__.du;if(cljs.core.truth_(and__11176__auto__))
{return self__.dv;
} else
{return and__11176__auto__;
}
});
cljs.core.logic.fd.t31829.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t31829.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11176__auto__ = self__.du;if(cljs.core.truth_(and__11176__auto__))
{var and__11176__auto____$1 = self__.dv;if(cljs.core.truth_(and__11176__auto____$1))
{return cljs.core.logic.fd.interval__LT__EQ_.call(null,self__.du,self__.dv);
} else
{return and__11176__auto____$1;
}
} else
{return and__11176__auto__;
}
});
cljs.core.logic.fd.t31829.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t31829.prototype.apply = (function (self__,args31832){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31832)));
});
cljs.core.logic.fd.t31829.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t31829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31831){var self__ = this;
var _31831__$1 = this;return self__.meta31830;
});
cljs.core.logic.fd.t31829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31831,meta31830__$1){var self__ = this;
var _31831__$1 = this;return (new cljs.core.logic.fd.t31829(self__.dv,self__.du,self__.s,self__.this$,self__.meta31827,self__.v,self__.u,self__._LT__EQ_c,meta31830__$1));
});
cljs.core.logic.fd.__GT_t31829 = (function __GT_t31829(dv__$1,du__$1,s__$1,this$__$2,meta31827__$1,v__$2,u__$2,_LT__EQ_c__$2,meta31830){return (new cljs.core.logic.fd.t31829(dv__$1,du__$1,s__$1,this$__$2,meta31827__$1,v__$2,u__$2,_LT__EQ_c__$2,meta31830));
});
}
return (new cljs.core.logic.fd.t31829(dv,du,s,this$__$1,self__.meta31827,self__.v,self__.u,self__._LT__EQ_c,null));
});
cljs.core.logic.fd.t31826.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t31826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31828){var self__ = this;
var _31828__$1 = this;return self__.meta31827;
});
cljs.core.logic.fd.t31826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31828,meta31827__$1){var self__ = this;
var _31828__$1 = this;return (new cljs.core.logic.fd.t31826(self__.v,self__.u,self__._LT__EQ_c,meta31827__$1));
});
cljs.core.logic.fd.__GT_t31826 = (function __GT_t31826(v__$1,u__$1,_LT__EQ_c__$1,meta31827){return (new cljs.core.logic.fd.t31826(v__$1,u__$1,_LT__EQ_c__$1,meta31827));
});
}
return (new cljs.core.logic.fd.t31826(v,u,_LT__EQ_c,null));
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
cljs.core.logic.fd._LT_ = (function _LT_(u,v){return (function (a__26971__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__26971__auto__,cljs.core.logic.fd._LT__EQ_.call(null,u,v)),cljs.core.logic.fd._BANG__EQ_.call(null,u,v));
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
cljs.core.logic.fd._PLUS_c = (function _PLUS_c(u,v,w){if(typeof cljs.core.logic.fd.t31846 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31846 = (function (w,v,u,_PLUS_c,meta31847){
this.w = w;
this.v = v;
this.u = u;
this._PLUS_c = _PLUS_c;
this.meta31847 = meta31847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t31846.cljs$lang$type = true;
cljs.core.logic.fd.t31846.cljs$lang$ctorStr = "cljs.core.logic.fd/t31846";
cljs.core.logic.fd.t31846.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31846");
});
cljs.core.logic.fd.t31846.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t31846.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t31846.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t31846.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","+","cljs.core.logic.fd/+",1528484149,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,837),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,837),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,38)))));
});
cljs.core.logic.fd.t31846.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v,self__.w], null);
});
cljs.core.logic.fd.t31846.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t31846.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t31849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31849 = (function (v,w,u,s,_PLUS_c,du,dw,dv,this$,meta31847,meta31850){
this.v = v;
this.w = w;
this.u = u;
this.s = s;
this._PLUS_c = _PLUS_c;
this.du = du;
this.dw = dw;
this.dv = dv;
this.this$ = this$;
this.meta31847 = meta31847;
this.meta31850 = meta31850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t31849.cljs$lang$type = true;
cljs.core.logic.fd.t31849.cljs$lang$ctorStr = "cljs.core.logic.fd/t31849";
cljs.core.logic.fd.t31849.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31849");
});
cljs.core.logic.fd.t31849.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t31849.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.du))
{var or__11188__auto__ = self__.dv;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dv))
{var or__11188__auto__ = self__.du;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dw))
{var or__11188__auto__ = self__.du;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
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
cljs.core.logic.fd.t31849.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t31849.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw)) && (cljs.core._EQ_.call(null,(self__.du + self__.dv),self__.dw));
});
cljs.core.logic.fd.t31849.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__31853 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) + cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) + cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__31853,0,null);var wmax = cljs.core.nth.call(null,vec__31853,1,null);var vec__31854 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.dv))], null));var umin = cljs.core.nth.call(null,vec__31854,0,null);var umax = cljs.core.nth.call(null,vec__31854,1,null);var vec__31855 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.du)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.du))], null));var vmin = cljs.core.nth.call(null,vec__31855,0,null);var vmax = cljs.core.nth.call(null,vec__31855,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin + vmin),(umax + vmax));var ui = cljs.core.logic.fd.interval.call(null,(wmin - vmax),(wmax - vmin));var vi = cljs.core.logic.fd.interval.call(null,(wmin - umax),(wmax - umin));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__11176__auto__ = wi;if(cljs.core.truth_(and__11176__auto__))
{return self__.dw;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__11176__auto__ = ui;if(cljs.core.truth_(and__11176__auto__))
{return self__.du;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__11176__auto__ = vi;if(cljs.core.truth_(and__11176__auto__))
{return self__.dv;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4098__auto____$2))
{var vi__$1 = temp__4098__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wi__$1,ui__$1,vi__$1], null)))) || (cljs.core._EQ_.call(null,(ui__$1 + vi__$1),wi__$1)))
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
cljs.core.logic.fd.t31849.prototype.apply = (function (self__,args31852){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31852)));
});
cljs.core.logic.fd.t31849.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__31856 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) + cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) + cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__31856,0,null);var wmax = cljs.core.nth.call(null,vec__31856,1,null);var vec__31857 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.dv))], null));var umin = cljs.core.nth.call(null,vec__31857,0,null);var umax = cljs.core.nth.call(null,vec__31857,1,null);var vec__31858 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.du)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.du))], null));var vmin = cljs.core.nth.call(null,vec__31858,0,null);var vmax = cljs.core.nth.call(null,vec__31858,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin + vmin),(umax + vmax));var ui = cljs.core.logic.fd.interval.call(null,(wmin - vmax),(wmax - vmin));var vi = cljs.core.logic.fd.interval.call(null,(wmin - umax),(wmax - umin));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__11176__auto__ = wi;if(cljs.core.truth_(and__11176__auto__))
{return self__.dw;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__11176__auto__ = ui;if(cljs.core.truth_(and__11176__auto__))
{return self__.du;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__11176__auto__ = vi;if(cljs.core.truth_(and__11176__auto__))
{return self__.dv;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4098__auto____$2))
{var vi__$1 = temp__4098__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wi__$1,ui__$1,vi__$1], null)))) || (cljs.core._EQ_.call(null,(ui__$1 + vi__$1),wi__$1)))
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
cljs.core.logic.fd.t31849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31851){var self__ = this;
var _31851__$1 = this;return self__.meta31850;
});
cljs.core.logic.fd.t31849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31851,meta31850__$1){var self__ = this;
var _31851__$1 = this;return (new cljs.core.logic.fd.t31849(self__.v,self__.w,self__.u,self__.s,self__._PLUS_c,self__.du,self__.dw,self__.dv,self__.this$,self__.meta31847,meta31850__$1));
});
cljs.core.logic.fd.__GT_t31849 = (function __GT_t31849(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,du__$1,dw__$1,dv__$1,this$__$2,meta31847__$1,meta31850){return (new cljs.core.logic.fd.t31849(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,du__$1,dw__$1,dv__$1,this$__$2,meta31847__$1,meta31850));
});
}
return (new cljs.core.logic.fd.t31849(self__.v,self__.w,self__.u,s,self__._PLUS_c,du,dw,dv,this$__$1,self__.meta31847,null));
});
cljs.core.logic.fd.t31846.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t31846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31848){var self__ = this;
var _31848__$1 = this;return self__.meta31847;
});
cljs.core.logic.fd.t31846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31848,meta31847__$1){var self__ = this;
var _31848__$1 = this;return (new cljs.core.logic.fd.t31846(self__.w,self__.v,self__.u,self__._PLUS_c,meta31847__$1));
});
cljs.core.logic.fd.__GT_t31846 = (function __GT_t31846(w__$1,v__$1,u__$1,_PLUS_c__$1,meta31847){return (new cljs.core.logic.fd.t31846(w__$1,v__$1,u__$1,_PLUS_c__$1,meta31847));
});
}
return (new cljs.core.logic.fd.t31846(w,v,u,_PLUS_c,null));
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
{var q = cljs.core.quot.call(null,a,n);var G__31875 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upper","upper",1125403668),G__31875))
{return q;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lower","lower",1117068915),G__31875))
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
if(typeof cljs.core.logic.fd.t31876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31876 = (function (safe_div,w,v,u,_STAR_c,meta31877){
this.safe_div = safe_div;
this.w = w;
this.v = v;
this.u = u;
this._STAR_c = _STAR_c;
this.meta31877 = meta31877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t31876.cljs$lang$type = true;
cljs.core.logic.fd.t31876.cljs$lang$ctorStr = "cljs.core.logic.fd/t31876";
cljs.core.logic.fd.t31876.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31876");
});
cljs.core.logic.fd.t31876.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t31876.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t31876.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t31876.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","*","cljs.core.logic.fd/*",1528484146,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,921),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,921),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,40)))));
});
cljs.core.logic.fd.t31876.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v,self__.w], null);
});
cljs.core.logic.fd.t31876.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t31876.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t31879 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31879 = (function (v,w,u,s,meta31877,du,_STAR_c,dw,dv,safe_div,this$,meta31880){
this.v = v;
this.w = w;
this.u = u;
this.s = s;
this.meta31877 = meta31877;
this.du = du;
this._STAR_c = _STAR_c;
this.dw = dw;
this.dv = dv;
this.safe_div = safe_div;
this.this$ = this$;
this.meta31880 = meta31880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t31879.cljs$lang$type = true;
cljs.core.logic.fd.t31879.cljs$lang$ctorStr = "cljs.core.logic.fd/t31879";
cljs.core.logic.fd.t31879.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31879");
});
cljs.core.logic.fd.t31879.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t31879.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.du))
{var or__11188__auto__ = self__.dv;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dv))
{var or__11188__auto__ = self__.du;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dw))
{var or__11188__auto__ = self__.du;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
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
cljs.core.logic.fd.t31879.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t31879.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw)) && (cljs.core._EQ_.call(null,(self__.du * self__.dv),self__.dw));
});
cljs.core.logic.fd.t31879.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__31883 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) * cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) * cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__31883,0,null);var wmax = cljs.core.nth.call(null,vec__31883,1,null);var vec__31884 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var umin = cljs.core.nth.call(null,vec__31884,0,null);var umax = cljs.core.nth.call(null,vec__31884,1,null);var vec__31885 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var vmin = cljs.core.nth.call(null,vec__31885,0,null);var vmax = cljs.core.nth.call(null,vec__31885,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin * vmin),(umax * vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__11176__auto__ = wi;if(cljs.core.truth_(and__11176__auto__))
{return self__.dw;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__11176__auto__ = ui;if(cljs.core.truth_(and__11176__auto__))
{return self__.du;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__11176__auto__ = vi;if(cljs.core.truth_(and__11176__auto__))
{return self__.dv;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4098__auto____$2))
{var vi__$1 = temp__4098__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wi__$1,ui__$1,vi__$1], null)))) || (cljs.core._EQ_.call(null,(ui__$1 * vi__$1),wi__$1)))
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
cljs.core.logic.fd.t31879.prototype.apply = (function (self__,args31882){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31882)));
});
cljs.core.logic.fd.t31879.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__31886 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) * cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) * cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__31886,0,null);var wmax = cljs.core.nth.call(null,vec__31886,1,null);var vec__31887 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var umin = cljs.core.nth.call(null,vec__31887,0,null);var umax = cljs.core.nth.call(null,vec__31887,1,null);var vec__31888 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var vmin = cljs.core.nth.call(null,vec__31888,0,null);var vmax = cljs.core.nth.call(null,vec__31888,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin * vmin),(umax * vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__11176__auto__ = wi;if(cljs.core.truth_(and__11176__auto__))
{return self__.dw;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__11176__auto__ = ui;if(cljs.core.truth_(and__11176__auto__))
{return self__.du;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__11176__auto__ = vi;if(cljs.core.truth_(and__11176__auto__))
{return self__.dv;
} else
{return and__11176__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4098__auto____$2))
{var vi__$1 = temp__4098__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wi__$1,ui__$1,vi__$1], null)))) || (cljs.core._EQ_.call(null,(ui__$1 * vi__$1),wi__$1)))
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
cljs.core.logic.fd.t31879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31881){var self__ = this;
var _31881__$1 = this;return self__.meta31880;
});
cljs.core.logic.fd.t31879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31881,meta31880__$1){var self__ = this;
var _31881__$1 = this;return (new cljs.core.logic.fd.t31879(self__.v,self__.w,self__.u,self__.s,self__.meta31877,self__.du,self__._STAR_c,self__.dw,self__.dv,self__.safe_div,self__.this$,meta31880__$1));
});
cljs.core.logic.fd.__GT_t31879 = (function __GT_t31879(v__$2,w__$2,u__$2,s__$1,meta31877__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,safe_div__$2,this$__$2,meta31880){return (new cljs.core.logic.fd.t31879(v__$2,w__$2,u__$2,s__$1,meta31877__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,safe_div__$2,this$__$2,meta31880));
});
}
return (new cljs.core.logic.fd.t31879(self__.v,self__.w,self__.u,s,self__.meta31877,du,self__._STAR_c,dw,dv,self__.safe_div,this$__$1,null));
});
cljs.core.logic.fd.t31876.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t31876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31878){var self__ = this;
var _31878__$1 = this;return self__.meta31877;
});
cljs.core.logic.fd.t31876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31878,meta31877__$1){var self__ = this;
var _31878__$1 = this;return (new cljs.core.logic.fd.t31876(self__.safe_div,self__.w,self__.v,self__.u,self__._STAR_c,meta31877__$1));
});
cljs.core.logic.fd.__GT_t31876 = (function __GT_t31876(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta31877){return (new cljs.core.logic.fd.t31876(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta31877));
});
}
return (new cljs.core.logic.fd.t31876(safe_div,w,v,u,_STAR_c,null));
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
cljs.core.logic.fd._distinctc = (function _distinctc(x,y_STAR_,n_STAR_){if(typeof cljs.core.logic.fd.t31896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31896 = (function (n_STAR_,y_STAR_,x,_distinctc,meta31897){
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta31897 = meta31897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t31896.cljs$lang$type = true;
cljs.core.logic.fd.t31896.cljs$lang$ctorStr = "cljs.core.logic.fd/t31896";
cljs.core.logic.fd.t31896.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31896");
});
cljs.core.logic.fd.t31896.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t31896.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t31896.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t31896.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","-distinct","cljs.core.logic.fd/-distinct",73212723,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,973),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,973),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,46)))));
});
cljs.core.logic.fd.t31896.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.fd.t31896.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t31896.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var x__$2 = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.fd.t31899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31899 = (function (s,this$,meta31897,n_STAR_,y_STAR_,x,_distinctc,meta31900){
this.s = s;
this.this$ = this$;
this.meta31897 = meta31897;
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta31900 = meta31900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t31899.cljs$lang$type = true;
cljs.core.logic.fd.t31899.cljs$lang$ctorStr = "cljs.core.logic.fd/t31899";
cljs.core.logic.fd.t31899.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31899");
});
cljs.core.logic.fd.t31899.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t31899.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.x);
});
cljs.core.logic.fd.t31899.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(self__.n_STAR_.call(null,self__.x)))
{return null;
} else
{var y_STAR___$3 = cljs.core.seq.call(null,self__.y_STAR_);var s__$3 = s__$2;while(true){
if(y_STAR___$3)
{var y = cljs.core.first.call(null,y_STAR___$3);var v = (function (){var or__11188__auto__ = cljs.core.logic.fd.get_dom.call(null,s__$3,y);if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return cljs.core.logic.protocols.walk.call(null,s__$3,y);
}
})();var s__$4 = ((!(cljs.core.logic.lvar_QMARK_.call(null,v)))?((cljs.core._EQ_.call(null,self__.x,v))?null:(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,v,self__.x))?cljs.core.logic.fd.process_dom.call(null,y,cljs.core.logic.fd._difference.call(null,v,self__.x),v).call(null,s__$3):((new cljs.core.Keyword(null,"else","else",1017020587))?s__$3:null))):s__$3);if(cljs.core.truth_(s__$4))
{{
var G__31903 = cljs.core.next.call(null,y_STAR___$3);
var G__31904 = s__$4;
y_STAR___$3 = G__31903;
s__$3 = G__31904;
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
cljs.core.logic.fd.t31899.prototype.apply = (function (self__,args31902){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31902)));
});
cljs.core.logic.fd.t31899.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.n_STAR_.call(null,self__.x)))
{return null;
} else
{var y_STAR___$3 = cljs.core.seq.call(null,self__.y_STAR_);var s__$3 = s__$2;while(true){
if(y_STAR___$3)
{var y = cljs.core.first.call(null,y_STAR___$3);var v = (function (){var or__11188__auto__ = cljs.core.logic.fd.get_dom.call(null,s__$3,y);if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return cljs.core.logic.protocols.walk.call(null,s__$3,y);
}
})();var s__$4 = ((!(cljs.core.logic.lvar_QMARK_.call(null,v)))?((cljs.core._EQ_.call(null,self__.x,v))?null:(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,v,self__.x))?cljs.core.logic.fd.process_dom.call(null,y,cljs.core.logic.fd._difference.call(null,v,self__.x),v).call(null,s__$3):((new cljs.core.Keyword(null,"else","else",1017020587))?s__$3:null))):s__$3);if(cljs.core.truth_(s__$4))
{{
var G__31905 = cljs.core.next.call(null,y_STAR___$3);
var G__31906 = s__$4;
y_STAR___$3 = G__31905;
s__$3 = G__31906;
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
cljs.core.logic.fd.t31899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31901){var self__ = this;
var _31901__$1 = this;return self__.meta31900;
});
cljs.core.logic.fd.t31899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31901,meta31900__$1){var self__ = this;
var _31901__$1 = this;return (new cljs.core.logic.fd.t31899(self__.s,self__.this$,self__.meta31897,self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta31900__$1));
});
cljs.core.logic.fd.__GT_t31899 = (function __GT_t31899(s__$1,this$__$2,meta31897__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta31900){return (new cljs.core.logic.fd.t31899(s__$1,this$__$2,meta31897__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta31900));
});
}
return (new cljs.core.logic.fd.t31899(s,this$__$1,self__.meta31897,self__.n_STAR_,self__.y_STAR_,x__$2,self__._distinctc,null));
});
cljs.core.logic.fd.t31896.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t31896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31898){var self__ = this;
var _31898__$1 = this;return self__.meta31897;
});
cljs.core.logic.fd.t31896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31898,meta31897__$1){var self__ = this;
var _31898__$1 = this;return (new cljs.core.logic.fd.t31896(self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta31897__$1));
});
cljs.core.logic.fd.__GT_t31896 = (function __GT_t31896(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta31897){return (new cljs.core.logic.fd.t31896(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta31897));
});
}
return (new cljs.core.logic.fd.t31896(n_STAR_,y_STAR_,x,_distinctc,null));
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
var G__31907 = s;
var G__31908 = cljs.core.next.call(null,ls__$1);
f = G__31907;
ls__$1 = G__31908;
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
cljs.core.logic.fd.distinctc = (function distinctc(v_STAR_){if(typeof cljs.core.logic.fd.t31918 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31918 = (function (v_STAR_,distinctc,meta31919){
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta31919 = meta31919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t31918.cljs$lang$type = true;
cljs.core.logic.fd.t31918.cljs$lang$ctorStr = "cljs.core.logic.fd/t31918";
cljs.core.logic.fd.t31918.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31918");
});
cljs.core.logic.fd.t31918.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t31918.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t31918.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t31918.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","distinct","cljs.core.logic.fd/distinct",1952820740,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1022),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1022),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,45)))));
});
cljs.core.logic.fd.t31918.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v_STAR_], null);
});
cljs.core.logic.fd.t31918.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t31918.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var v_STAR___$2 = cljs.core.logic.protocols.walk.call(null,s,self__.v_STAR_);if(typeof cljs.core.logic.fd.t31921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t31921 = (function (s,this$,meta31919,v_STAR_,distinctc,meta31922){
this.s = s;
this.this$ = this$;
this.meta31919 = meta31919;
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta31922 = meta31922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t31921.cljs$lang$type = true;
cljs.core.logic.fd.t31921.cljs$lang$ctorStr = "cljs.core.logic.fd/t31921";
cljs.core.logic.fd.t31921.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic.fd/t31921");
});
cljs.core.logic.fd.t31921.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t31921.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.v_STAR_));
});
cljs.core.logic.fd.t31921.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var map__31925 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__31925__$1 = ((cljs.core.seq_QMARK_.call(null,map__31925))?cljs.core.apply.call(null,cljs.core.hash_map,map__31925):map__31925);var x_STAR_ = cljs.core.get.call(null,map__31925__$1,true);var n_STAR_ = cljs.core.get.call(null,map__31925__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4098__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4098__auto__))
{var s__$4 = temp__4098__auto__;{
var G__31927 = cljs.core.next.call(null,xs);
var G__31928 = s__$4;
xs = G__31927;
s__$3 = G__31928;
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
cljs.core.logic.fd.t31921.prototype.apply = (function (self__,args31924){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31924)));
});
cljs.core.logic.fd.t31921.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var map__31926 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__31926__$1 = ((cljs.core.seq_QMARK_.call(null,map__31926))?cljs.core.apply.call(null,cljs.core.hash_map,map__31926):map__31926);var x_STAR_ = cljs.core.get.call(null,map__31926__$1,true);var n_STAR_ = cljs.core.get.call(null,map__31926__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4098__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4098__auto__))
{var s__$4 = temp__4098__auto__;{
var G__31929 = cljs.core.next.call(null,xs);
var G__31930 = s__$4;
xs = G__31929;
s__$3 = G__31930;
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
cljs.core.logic.fd.t31921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31923){var self__ = this;
var _31923__$1 = this;return self__.meta31922;
});
cljs.core.logic.fd.t31921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31923,meta31922__$1){var self__ = this;
var _31923__$1 = this;return (new cljs.core.logic.fd.t31921(self__.s,self__.this$,self__.meta31919,self__.v_STAR_,self__.distinctc,meta31922__$1));
});
cljs.core.logic.fd.__GT_t31921 = (function __GT_t31921(s__$1,this$__$2,meta31919__$1,v_STAR___$3,distinctc__$2,meta31922){return (new cljs.core.logic.fd.t31921(s__$1,this$__$2,meta31919__$1,v_STAR___$3,distinctc__$2,meta31922));
});
}
return (new cljs.core.logic.fd.t31921(s,this$__$1,self__.meta31919,v_STAR___$2,self__.distinctc,null));
});
cljs.core.logic.fd.t31918.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t31918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31920){var self__ = this;
var _31920__$1 = this;return self__.meta31919;
});
cljs.core.logic.fd.t31918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31920,meta31919__$1){var self__ = this;
var _31920__$1 = this;return (new cljs.core.logic.fd.t31918(self__.v_STAR_,self__.distinctc,meta31919__$1));
});
cljs.core.logic.fd.__GT_t31918 = (function __GT_t31918(v_STAR___$1,distinctc__$1,meta31919){return (new cljs.core.logic.fd.t31918(v_STAR___$1,distinctc__$1,meta31919));
});
}
return (new cljs.core.logic.fd.t31918(v_STAR_,distinctc,null));
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
cljs.core.logic.fd.bounded_listo = (function bounded_listo(l,n){return (function (a31948){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a31948,(function (a__26920__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__26920__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,l)),cljs.core.logic.fd._LT__EQ_.call(null,0,n));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a31948,(function (a__26920__auto__){return (function _inc__$1(){var t = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"t","t",-1640531411,null));var h = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h","h",-1640531423,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__26920__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,h,t),l)),(function (a__26920__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__26920__auto____$1,cljs.core.logic._EQ__EQ_.call(null,n,n)),(function (a__26920__auto____$2){return (function _inc__$1(){var m = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"m","m",-1640531418,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__26920__auto____$2,(function (){var dom_31964 = cljs.core.logic.fd.interval.call(null,0,Number.MAX_VALUE);return (function (a__26920__auto____$3){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__26920__auto____$3,cljs.core.logic.fd.dom.call(null,m,dom_31964));
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
{var vec__31966 = form;var op = cljs.core.nth.call(null,vec__31966,0,null);var args = cljs.core.nthnext.call(null,vec__31966,1);if(cljs.core.truth_((function (){var and__11176__auto__ = cljs.core.logic.fd.binops.call(null,op);if(cljs.core.truth_(and__11176__auto__))
{return (cljs.core.count.call(null,args) > 2);
} else
{return and__11176__auto__;
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
{var vec__31970 = form;var op = cljs.core.nth.call(null,vec__31970,0,null);var r1 = cljs.core.nth.call(null,vec__31970,1,null);var r2 = cljs.core.nth.call(null,vec__31970,2,null);var vec__31971 = ((cljs.core.seq_QMARK_.call(null,r1))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,false], null));var outl = cljs.core.nth.call(null,vec__31971,0,null);var outlv_QMARK_ = cljs.core.nth.call(null,vec__31971,1,null);var vec__31972 = ((cljs.core.seq_QMARK_.call(null,r2))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r2,false], null));var outr = cljs.core.nth.call(null,vec__31972,0,null);var outrv_QMARK_ = cljs.core.nth.call(null,vec__31972,1,null);var op__$1 = cljs.core.logic.fd.binops__GT_fd.call(null,op);return cljs.core.cons.call(null,(cljs.core.truth_(out)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,out),outr),outl),op__$1):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,outr),outl),op__$1)),cljs.core.concat.call(null,((cljs.core.seq_QMARK_.call(null,r1))?eq_STAR_.call(null,r1,vars,(cljs.core.truth_(outlv_QMARK_)?outl:null)):null),((cljs.core.seq_QMARK_.call(null,r2))?eq_STAR_.call(null,r2,vars,(cljs.core.truth_(outrv_QMARK_)?outr:null)):null)));
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
cljs.core.logic.fd.__GT_fd = (function __GT_fd(vars,exprs){return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","fresh","cljs.core.logic.fd/fresh",1623660598,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,5),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,10)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,vars))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))),cljs.core.reverse.call(null,exprs))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,4),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1099),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,24)))));
});
cljs.core.logic.fd.eq_form = (function eq_form(form){var vars = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var exprs = cljs.core.logic.fd.eq_STAR_.call(null,cljs.core.logic.fd.expand.call(null,form),vars);return cljs.core.logic.fd.__GT_fd.call(null,cljs.core.deref.call(null,vars),exprs);
});