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
cljs.core.logic.fd.IInterval = (function (){var obj16490 = {};return obj16490;
})();
cljs.core.logic.fd._lb = (function _lb(this$){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$IInterval$_lb$arity$1;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$IInterval$_lb$arity$1(this$);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._lb[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._lb["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterval.-lb",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd._ub = (function _ub(this$){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$IInterval$_ub$arity$1;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$IInterval$_ub$arity$1(this$);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._ub[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._ub["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterval.-ub",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd.IIntervals = (function (){var obj16492 = {};return obj16492;
})();
cljs.core.logic.fd._intervals = (function _intervals(this$){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$IIntervals$_intervals$arity$1;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$IIntervals$_intervals$arity$1(this$);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._intervals[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._intervals["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIntervals.-intervals",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd.ISortedDomain = (function (){var obj16494 = {};return obj16494;
})();
cljs.core.logic.fd._drop_one = (function _drop_one(this$){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1(this$);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._drop_one[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._drop_one["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-drop-one",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd._drop_before = (function _drop_before(this$,n){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2(this$,n);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._drop_before[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._drop_before["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-drop-before",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd._keep_before = (function _keep_before(this$,n){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2(this$,n);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._keep_before[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._keep_before["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-keep-before",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd.ISet = (function (){var obj16496 = {};return obj16496;
})();
cljs.core.logic.fd._member_QMARK_ = (function _member_QMARK_(this$,n){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2(this$,n);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._member_QMARK_[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._member_QMARK_["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-member?",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd._disjoint_QMARK_ = (function _disjoint_QMARK_(this$,that){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2(this$,that);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._disjoint_QMARK_[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._disjoint_QMARK_["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoint?",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd._intersection = (function _intersection(this$,that){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$ISet$_intersection$arity$2;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_intersection$arity$2(this$,that);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._intersection[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._intersection["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-intersection",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd._difference = (function _difference(this$,that){if((function (){var and__11121__auto__ = this$;if(and__11121__auto__)
{return this$.cljs$core$logic$fd$ISet$_difference$arity$2;
} else
{return and__11121__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_difference$arity$2(this$,that);
} else
{var x__11736__auto__ = (((this$ == null))?null:this$);return (function (){var or__11133__auto__ = (cljs.core.logic.fd._difference[goog.typeOf(x__11736__auto__)]);if(or__11133__auto__)
{return or__11133__auto__;
} else
{var or__11133__auto____$1 = (cljs.core.logic.fd._difference["_"]);if(or__11133__auto____$1)
{return or__11133__auto____$1;
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
cljs.core.logic.fd.FiniteDomain.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/FiniteDomain");
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
var ___$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.drop_while.call(null,(function (p1__16497_SHARP_){return (p1__16497_SHARP_ < n);
}),self__.s));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.take_while.call(null,(function (p1__16498_SHARP_){return (p1__16498_SHARP_ < n);
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
var this$__$1 = this;var G__16499 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__16499))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__16499))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357),G__16499))
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
domain.cljs$lang$applyTo = (function (arglist__16500){
var args = cljs.core.seq(arglist__16500);
return domain__delegate(args);
});
domain.cljs$core$IFn$_invoke$arity$variadic = domain__delegate;
return domain;
})()
;
(cljs.core.logic.fd.IIntervals["number"] = true);
(cljs.core.logic.fd._intervals["number"] = (function (this__7086__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,this__7086__auto__);
}));
(cljs.core.logic.fd.ISet["number"] = true);
(cljs.core.logic.fd._member_QMARK_["number"] = (function (this__7086__auto__,that__7088__auto__){if(cljs.core.integer_QMARK_.call(null,that__7088__auto__))
{return (this__7086__auto__ === that__7088__auto__);
} else
{return cljs.core.logic.fd._member_QMARK_.call(null,that__7088__auto__,this__7086__auto__);
}
}));
(cljs.core.logic.fd._disjoint_QMARK_["number"] = (function (this__7086__auto__,that__7088__auto__){if(cljs.core.integer_QMARK_.call(null,that__7088__auto__))
{return !((this__7086__auto__ === that__7088__auto__));
} else
{return cljs.core.logic.fd._disjoint_QMARK_.call(null,that__7088__auto__,this__7086__auto__);
}
}));
(cljs.core.logic.fd._intersection["number"] = (function (this__7086__auto__,that__7088__auto__){if(cljs.core.integer_QMARK_.call(null,that__7088__auto__))
{if((this__7086__auto__ === that__7088__auto__))
{return this__7086__auto__;
} else
{return null;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that__7088__auto__)))
{return cljs.core.logic.fd._intersection.call(null,that__7088__auto__,this__7086__auto__);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.intersection_STAR_.call(null,this__7086__auto__,that__7088__auto__);
} else
{return null;
}
}
}
}));
(cljs.core.logic.fd._difference["number"] = (function (this__7086__auto__,that__7088__auto__){if(cljs.core.integer_QMARK_.call(null,that__7088__auto__))
{if((this__7086__auto__ === that__7088__auto__))
{return null;
} else
{return this__7086__auto__;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that__7088__auto__)))
{return cljs.core.logic.fd._difference.call(null,that__7088__auto__,this__7086__auto__);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.difference_STAR_.call(null,this__7086__auto__,that__7088__auto__);
} else
{return null;
}
}
}
}));
(cljs.core.logic.fd.ISortedDomain["number"] = true);
(cljs.core.logic.fd._drop_one["number"] = (function (this__7086__auto__){return null;
}));
(cljs.core.logic.fd._drop_before["number"] = (function (this__7086__auto__,n__7087__auto__){if((this__7086__auto__ >= n__7087__auto__))
{return this__7086__auto__;
} else
{return null;
}
}));
(cljs.core.logic.fd._keep_before["number"] = (function (this__7086__auto__,n__7087__auto__){if((this__7086__auto__ < n__7087__auto__))
{return this__7086__auto__;
} else
{return null;
}
}));
(cljs.core.logic.fd.IInterval["number"] = true);
(cljs.core.logic.fd._lb["number"] = (function (this__7086__auto__){return this__7086__auto__;
}));
(cljs.core.logic.fd._ub["number"] = (function (this__7086__auto__){return this__7086__auto__;
}));
(cljs.core.logic.protocols.IMemberCount["number"] = true);
(cljs.core.logic.protocols._member_count["number"] = (function (this__7086__auto__){return 1;
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
cljs.core.logic.fd.IntervalFD.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/IntervalFD");
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
{var i = this$__$1;var j = that;var vec__16501 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__16501,0,null);var imax = cljs.core.nth.call(null,vec__16501,1,null);var vec__16502 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__16502,0,null);var jmax = cljs.core.nth.call(null,vec__16502,1,null);return ((imin > jmax)) || ((imax < jmin));
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
var G__16507 = cljs.core.next.call(null,is__$1);
var G__16508 = js__$1;
var G__16509 = r;
is__$1 = G__16507;
js__$1 = G__16508;
r = G__16509;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__16510 = is__$1;
var G__16511 = cljs.core.next.call(null,js__$1);
var G__16512 = r;
is__$1 = G__16510;
js__$1 = G__16511;
r = G__16512;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__16505 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__16505,0,null);var imax = cljs.core.nth.call(null,vec__16505,1,null);var vec__16506 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__16506,0,null);var jmax = cljs.core.nth.call(null,vec__16506,1,null);if((imin <= jmin))
{if((imax < jmax))
{{
var G__16513 = cljs.core.next.call(null,is__$1);
var G__16514 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__16515 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,imax));
is__$1 = G__16513;
js__$1 = G__16514;
r = G__16515;
continue;
}
} else
{if((imax > jmax))
{{
var G__16516 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__16517 = cljs.core.next.call(null,js__$1);
var G__16518 = cljs.core.conj.call(null,r,j);
is__$1 = G__16516;
js__$1 = G__16517;
r = G__16518;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__16519 = cljs.core.next.call(null,is__$1);
var G__16520 = cljs.core.next.call(null,js__$1);
var G__16521 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,jmax));
is__$1 = G__16519;
js__$1 = G__16520;
r = G__16521;
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
var G__16522 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__16523 = cljs.core.next.call(null,js__$1);
var G__16524 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,jmax));
is__$1 = G__16522;
js__$1 = G__16523;
r = G__16524;
continue;
}
} else
{if((imax < jmax))
{{
var G__16525 = is__$1;
var G__16526 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__16527 = cljs.core.conj.call(null,r,i);
is__$1 = G__16525;
js__$1 = G__16526;
r = G__16527;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__16528 = cljs.core.next.call(null,is__$1);
var G__16529 = cljs.core.next.call(null,js__$1);
var G__16530 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,imax));
is__$1 = G__16528;
js__$1 = G__16529;
r = G__16530;
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
var G__16535 = cljs.core.next.call(null,is__$1);
var G__16536 = js__$1;
var G__16537 = cljs.core.conj.call(null,r,i);
is__$1 = G__16535;
js__$1 = G__16536;
r = G__16537;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__16538 = is__$1;
var G__16539 = cljs.core.next.call(null,js__$1);
var G__16540 = r;
is__$1 = G__16538;
js__$1 = G__16539;
r = G__16540;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__16533 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__16533,0,null);var imax = cljs.core.nth.call(null,vec__16533,1,null);var vec__16534 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__16534,0,null);var jmax = cljs.core.nth.call(null,vec__16534,1,null);if((imin < jmin))
{if((jmax < imax))
{{
var G__16541 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__16542 = cljs.core.next.call(null,js__$1);
var G__16543 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__16541;
js__$1 = G__16542;
r = G__16543;
continue;
}
} else
{if((jmax > imax))
{{
var G__16544 = cljs.core.next.call(null,is__$1);
var G__16545 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__16546 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__16544;
js__$1 = G__16545;
r = G__16546;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__16547 = cljs.core.next.call(null,is__$1);
var G__16548 = cljs.core.next.call(null,js__$1);
var G__16549 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__16547;
js__$1 = G__16548;
r = G__16549;
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
var G__16550 = cljs.core.next.call(null,is__$1);
var G__16551 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__16552 = r;
is__$1 = G__16550;
js__$1 = G__16551;
r = G__16552;
continue;
}
} else
{if((imax > jmax))
{{
var G__16553 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__16554 = cljs.core.next.call(null,js__$1);
var G__16555 = r;
is__$1 = G__16553;
js__$1 = G__16554;
r = G__16555;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__16556 = cljs.core.next.call(null,is__$1);
var G__16557 = cljs.core.next.call(null,js__$1);
var G__16558 = r;
is__$1 = G__16556;
js__$1 = G__16557;
r = G__16558;
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
var G__16559 = cljs.core.next.call(null,d0__$1);
var G__16560 = d1__$1;
d0__$1 = G__16559;
d1__$1 = G__16560;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__16561 = d0__$1;
var G__16562 = cljs.core.next.call(null,d1__$1);
d0__$1 = G__16561;
d1__$1 = G__16562;
continue;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,i,j)))
{{
var G__16563 = cljs.core.next.call(null,d0__$1);
var G__16564 = d1__$1;
d0__$1 = G__16563;
d1__$1 = G__16564;
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
cljs.core.logic.fd.MultiIntervalFD.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/MultiIntervalFD");
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
var this$__$1 = this;if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__16566_SHARP_){return cljs.core.logic.fd._member_QMARK_.call(null,p1__16566_SHARP_,n);
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
var G__16569 = cljs.core.next.call(null,is__$2);
var G__16570 = cljs.core.conj.call(null,r,i);
is__$2 = G__16569;
r = G__16570;
continue;
}
} else
{{
var G__16571 = cljs.core.next.call(null,is__$2);
var G__16572 = r;
is__$2 = G__16571;
r = G__16572;
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
var G__16573 = cljs.core.next.call(null,is__$2);
var G__16574 = cljs.core.conj.call(null,r,i);
is__$2 = G__16573;
r = G__16574;
continue;
}
} else
{{
var G__16575 = cljs.core.next.call(null,is__$2);
var G__16576 = r;
is__$2 = G__16575;
r = G__16576;
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
var this$__$1 = this;return cljs.core.reduce.call(null,cljs.core._PLUS_,0,cljs.core.map.call(null,(function (p1__16565_SHARP_){return cljs.core.logic.protocols._member_count.call(null,p1__16565_SHARP_);
}),self__.is));
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,j){var self__ = this;
var this$__$1 = this;if((j instanceof cljs.core.logic.fd.MultiIntervalFD))
{var i = this$__$1;var vec__16567 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__16567,0,null);var jmax = cljs.core.nth.call(null,vec__16567,1,null);if((cljs.core._EQ_.call(null,self__.min,jmin)) && (cljs.core._EQ_.call(null,self__.max,jmax)))
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
var this$__$1 = this;var G__16568 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__16568))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__16568))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"is","is",1013907612),G__16568))
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
var G__16577__delegate = function (i0,i1,ir){var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,i1),i0),ir));return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.logic.fd._lb,is)),cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.logic.fd._ub,is)),is));
};
var G__16577 = function (i0,i1,var_args){
var ir = null;if (arguments.length > 2) {
  ir = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16577__delegate.call(this,i0,i1,ir);};
G__16577.cljs$lang$maxFixedArity = 2;
G__16577.cljs$lang$applyTo = (function (arglist__16578){
var i0 = cljs.core.first(arglist__16578);
arglist__16578 = cljs.core.next(arglist__16578);
var i1 = cljs.core.first(arglist__16578);
var ir = cljs.core.rest(arglist__16578);
return G__16577__delegate(i0,i1,ir);
});
G__16577.cljs$core$IFn$_invoke$arity$variadic = G__16577__delegate;
return G__16577;
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
cljs.core.logic.fd._domc = (function _domc(x){if(typeof cljs.core.logic.fd.t16586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16586 = (function (x,_domc,meta16587){
this.x = x;
this._domc = _domc;
this.meta16587 = meta16587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t16586.cljs$lang$type = true;
cljs.core.logic.fd.t16586.cljs$lang$ctorStr = "cljs.core.logic.fd/t16586";
cljs.core.logic.fd.t16586.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16586");
});
cljs.core.logic.fd.t16586.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t16586.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t16586.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t16586.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","domc","cljs.core.logic.fd/domc",1533784811,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,650),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,650),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.fd.t16586.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.fd.t16586.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t16586.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic.protocols.walk.call(null,s,self__.x);var xd = new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(cljs.core.logic.protocols.root_val.call(null,s,self__.x)));if(typeof cljs.core.logic.fd.t16589 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16589 = (function (xd,xv,s,this$,meta16587,x,_domc,meta16590){
this.xd = xd;
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta16587 = meta16587;
this.x = x;
this._domc = _domc;
this.meta16590 = meta16590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t16589.cljs$lang$type = true;
cljs.core.logic.fd.t16589.cljs$lang$ctorStr = "cljs.core.logic.fd/t16589";
cljs.core.logic.fd.t16589.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16589");
});
cljs.core.logic.fd.t16589.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t16589.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.xv));
});
cljs.core.logic.fd.t16589.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t16589.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.xd == null);
});
cljs.core.logic.fd.t16589.prototype.call = (function (self__,s__$2){var self__ = this;
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
cljs.core.logic.fd.t16589.prototype.apply = (function (self__,args16592){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16592)));
});
cljs.core.logic.fd.t16589.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
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
cljs.core.logic.fd.t16589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16591){var self__ = this;
var _16591__$1 = this;return self__.meta16590;
});
cljs.core.logic.fd.t16589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16591,meta16590__$1){var self__ = this;
var _16591__$1 = this;return (new cljs.core.logic.fd.t16589(self__.xd,self__.xv,self__.s,self__.this$,self__.meta16587,self__.x,self__._domc,meta16590__$1));
});
cljs.core.logic.fd.__GT_t16589 = (function __GT_t16589(xd__$1,xv__$1,s__$1,this$__$2,meta16587__$1,x__$2,_domc__$2,meta16590){return (new cljs.core.logic.fd.t16589(xd__$1,xv__$1,s__$1,this$__$2,meta16587__$1,x__$2,_domc__$2,meta16590));
});
}
return (new cljs.core.logic.fd.t16589(xd,xv,s,this$__$1,self__.meta16587,self__.x,self__._domc,null));
});
cljs.core.logic.fd.t16586.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t16586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16588){var self__ = this;
var _16588__$1 = this;return self__.meta16587;
});
cljs.core.logic.fd.t16586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16588,meta16587__$1){var self__ = this;
var _16588__$1 = this;return (new cljs.core.logic.fd.t16586(self__.x,self__._domc,meta16587__$1));
});
cljs.core.logic.fd.__GT_t16586 = (function __GT_t16586(x__$1,_domc__$1,meta16587){return (new cljs.core.logic.fd.t16586(x__$1,_domc__$1,meta16587));
});
}
return (new cljs.core.logic.fd.t16586(x,_domc,null));
});
cljs.core.logic.fd.domc = (function domc(x){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._domc.call(null,x));
});
cljs.core.logic.fd._EQ__EQ_c = (function _EQ__EQ_c(u,v){if(typeof cljs.core.logic.fd.t16600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16600 = (function (v,u,_EQ__EQ_c,meta16601){
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta16601 = meta16601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t16600.cljs$lang$type = true;
cljs.core.logic.fd.t16600.cljs$lang$ctorStr = "cljs.core.logic.fd/t16600";
cljs.core.logic.fd.t16600.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16600");
});
cljs.core.logic.fd.t16600.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t16600.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t16600.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t16600.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","==","cljs.core.logic.fd/==",1528485544,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,680),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,680),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t16600.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t16600.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t16600.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t16603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16603 = (function (dv,du,s,this$,meta16601,v,u,_EQ__EQ_c,meta16604){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta16601 = meta16601;
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta16604 = meta16604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t16603.cljs$lang$type = true;
cljs.core.logic.fd.t16603.cljs$lang$ctorStr = "cljs.core.logic.fd/t16603";
cljs.core.logic.fd.t16603.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16603");
});
cljs.core.logic.fd.t16603.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t16603.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11121__auto__ = self__.du;if(cljs.core.truth_(and__11121__auto__))
{return self__.dv;
} else
{return and__11121__auto__;
}
});
cljs.core.logic.fd.t16603.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t16603.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core._EQ_.call(null,self__.du,self__.dv));
});
cljs.core.logic.fd.t16603.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t16603.prototype.apply = (function (self__,args16606){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16606)));
});
cljs.core.logic.fd.t16603.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t16603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16605){var self__ = this;
var _16605__$1 = this;return self__.meta16604;
});
cljs.core.logic.fd.t16603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16605,meta16604__$1){var self__ = this;
var _16605__$1 = this;return (new cljs.core.logic.fd.t16603(self__.dv,self__.du,self__.s,self__.this$,self__.meta16601,self__.v,self__.u,self__._EQ__EQ_c,meta16604__$1));
});
cljs.core.logic.fd.__GT_t16603 = (function __GT_t16603(dv__$1,du__$1,s__$1,this$__$2,meta16601__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta16604){return (new cljs.core.logic.fd.t16603(dv__$1,du__$1,s__$1,this$__$2,meta16601__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta16604));
});
}
return (new cljs.core.logic.fd.t16603(dv,du,s,this$__$1,self__.meta16601,self__.v,self__.u,self__._EQ__EQ_c,null));
});
cljs.core.logic.fd.t16600.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t16600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16602){var self__ = this;
var _16602__$1 = this;return self__.meta16601;
});
cljs.core.logic.fd.t16600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16602,meta16601__$1){var self__ = this;
var _16602__$1 = this;return (new cljs.core.logic.fd.t16600(self__.v,self__.u,self__._EQ__EQ_c,meta16601__$1));
});
cljs.core.logic.fd.__GT_t16600 = (function __GT_t16600(v__$1,u__$1,_EQ__EQ_c__$1,meta16601){return (new cljs.core.logic.fd.t16600(v__$1,u__$1,_EQ__EQ_c__$1,meta16601));
});
}
return (new cljs.core.logic.fd.t16600(v,u,_EQ__EQ_c,null));
});
/**
* A finite domain constraint. u and v must be equal. u and v must
* eventually be given domains if vars.
*/
cljs.core.logic.fd._EQ__EQ_ = (function _EQ__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._EQ__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._BANG__EQ_c = (function _BANG__EQ_c(u,v){if(typeof cljs.core.logic.fd.t16614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16614 = (function (v,u,_BANG__EQ_c,meta16615){
this.v = v;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta16615 = meta16615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t16614.cljs$lang$type = true;
cljs.core.logic.fd.t16614.cljs$lang$ctorStr = "cljs.core.logic.fd/t16614";
cljs.core.logic.fd.t16614.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16614");
});
cljs.core.logic.fd.t16614.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t16614.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t16614.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t16614.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","!=","cljs.core.logic.fd/!=",1528485316,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,717),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,717),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t16614.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t16614.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t16614.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var su_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,du);var sv_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dv);if(typeof cljs.core.logic.fd.t16617 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16617 = (function (v,u,_BANG__EQ_c,s,du,dv,sv_QMARK_,meta16615,su_QMARK_,this$,meta16618){
this.v = v;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.s = s;
this.du = du;
this.dv = dv;
this.sv_QMARK_ = sv_QMARK_;
this.meta16615 = meta16615;
this.su_QMARK_ = su_QMARK_;
this.this$ = this$;
this.meta16618 = meta16618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t16617.cljs$lang$type = true;
cljs.core.logic.fd.t16617.cljs$lang$ctorStr = "cljs.core.logic.fd/t16617";
cljs.core.logic.fd.t16617.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16617");
});
cljs.core.logic.fd.t16617.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t16617.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11121__auto__ = self__.du;if(cljs.core.truth_(and__11121__auto__))
{var and__11121__auto____$1 = self__.dv;if(cljs.core.truth_(and__11121__auto____$1))
{var or__11133__auto__ = self__.su_QMARK_;if(cljs.core.truth_(or__11133__auto__))
{return or__11133__auto__;
} else
{return self__.sv_QMARK_;
}
} else
{return and__11121__auto____$1;
}
} else
{return and__11121__auto__;
}
});
cljs.core.logic.fd.t16617.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t16617.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11121__auto__ = self__.du;if(cljs.core.truth_(and__11121__auto__))
{var and__11121__auto____$1 = self__.dv;if(cljs.core.truth_(and__11121__auto____$1))
{return cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv);
} else
{return and__11121__auto____$1;
}
} else
{return and__11121__auto__;
}
});
cljs.core.logic.fd.t16617.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_((function (){var and__11121__auto__ = self__.su_QMARK_;if(cljs.core.truth_(and__11121__auto__))
{var and__11121__auto____$1 = self__.sv_QMARK_;if(cljs.core.truth_(and__11121__auto____$1))
{return cljs.core._EQ_.call(null,self__.du,self__.dv);
} else
{return and__11121__auto____$1;
}
} else
{return and__11121__auto__;
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
cljs.core.logic.fd.t16617.prototype.apply = (function (self__,args16620){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16620)));
});
cljs.core.logic.fd.t16617.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_((function (){var and__11121__auto__ = self__.su_QMARK_;if(cljs.core.truth_(and__11121__auto__))
{var and__11121__auto____$1 = self__.sv_QMARK_;if(cljs.core.truth_(and__11121__auto____$1))
{return cljs.core._EQ_.call(null,self__.du,self__.dv);
} else
{return and__11121__auto____$1;
}
} else
{return and__11121__auto__;
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
cljs.core.logic.fd.t16617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16619){var self__ = this;
var _16619__$1 = this;return self__.meta16618;
});
cljs.core.logic.fd.t16617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16619,meta16618__$1){var self__ = this;
var _16619__$1 = this;return (new cljs.core.logic.fd.t16617(self__.v,self__.u,self__._BANG__EQ_c,self__.s,self__.du,self__.dv,self__.sv_QMARK_,self__.meta16615,self__.su_QMARK_,self__.this$,meta16618__$1));
});
cljs.core.logic.fd.__GT_t16617 = (function __GT_t16617(v__$2,u__$2,_BANG__EQ_c__$2,s__$1,du__$1,dv__$1,sv_QMARK___$1,meta16615__$1,su_QMARK___$1,this$__$2,meta16618){return (new cljs.core.logic.fd.t16617(v__$2,u__$2,_BANG__EQ_c__$2,s__$1,du__$1,dv__$1,sv_QMARK___$1,meta16615__$1,su_QMARK___$1,this$__$2,meta16618));
});
}
return (new cljs.core.logic.fd.t16617(self__.v,self__.u,self__._BANG__EQ_c,s,du,dv,sv_QMARK_,self__.meta16615,su_QMARK_,this$__$1,null));
});
cljs.core.logic.fd.t16614.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t16614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16616){var self__ = this;
var _16616__$1 = this;return self__.meta16615;
});
cljs.core.logic.fd.t16614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16616,meta16615__$1){var self__ = this;
var _16616__$1 = this;return (new cljs.core.logic.fd.t16614(self__.v,self__.u,self__._BANG__EQ_c,meta16615__$1));
});
cljs.core.logic.fd.__GT_t16614 = (function __GT_t16614(v__$1,u__$1,_BANG__EQ_c__$1,meta16615){return (new cljs.core.logic.fd.t16614(v__$1,u__$1,_BANG__EQ_c__$1,meta16615));
});
}
return (new cljs.core.logic.fd.t16614(v,u,_BANG__EQ_c,null));
});
/**
* A finite domain constraint. u and v must not be equal. u and v
* must eventually be given domains if vars.
*/
cljs.core.logic.fd._BANG__EQ_ = (function _BANG__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._BANG__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._LT__EQ_c = (function _LT__EQ_c(u,v){if(typeof cljs.core.logic.fd.t16628 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16628 = (function (v,u,_LT__EQ_c,meta16629){
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta16629 = meta16629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t16628.cljs$lang$type = true;
cljs.core.logic.fd.t16628.cljs$lang$ctorStr = "cljs.core.logic.fd/t16628";
cljs.core.logic.fd.t16628.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16628");
});
cljs.core.logic.fd.t16628.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t16628.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t16628.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t16628.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","<=","cljs.core.logic.fd/<=",1528485515,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,750),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,750),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t16628.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t16628.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t16628.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t16631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16631 = (function (dv,du,s,this$,meta16629,v,u,_LT__EQ_c,meta16632){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta16629 = meta16629;
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta16632 = meta16632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t16631.cljs$lang$type = true;
cljs.core.logic.fd.t16631.cljs$lang$ctorStr = "cljs.core.logic.fd/t16631";
cljs.core.logic.fd.t16631.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16631");
});
cljs.core.logic.fd.t16631.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t16631.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11121__auto__ = self__.du;if(cljs.core.truth_(and__11121__auto__))
{return self__.dv;
} else
{return and__11121__auto__;
}
});
cljs.core.logic.fd.t16631.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t16631.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__11121__auto__ = self__.du;if(cljs.core.truth_(and__11121__auto__))
{var and__11121__auto____$1 = self__.dv;if(cljs.core.truth_(and__11121__auto____$1))
{return cljs.core.logic.fd.interval__LT__EQ_.call(null,self__.du,self__.dv);
} else
{return and__11121__auto____$1;
}
} else
{return and__11121__auto__;
}
});
cljs.core.logic.fd.t16631.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t16631.prototype.apply = (function (self__,args16634){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16634)));
});
cljs.core.logic.fd.t16631.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t16631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16633){var self__ = this;
var _16633__$1 = this;return self__.meta16632;
});
cljs.core.logic.fd.t16631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16633,meta16632__$1){var self__ = this;
var _16633__$1 = this;return (new cljs.core.logic.fd.t16631(self__.dv,self__.du,self__.s,self__.this$,self__.meta16629,self__.v,self__.u,self__._LT__EQ_c,meta16632__$1));
});
cljs.core.logic.fd.__GT_t16631 = (function __GT_t16631(dv__$1,du__$1,s__$1,this$__$2,meta16629__$1,v__$2,u__$2,_LT__EQ_c__$2,meta16632){return (new cljs.core.logic.fd.t16631(dv__$1,du__$1,s__$1,this$__$2,meta16629__$1,v__$2,u__$2,_LT__EQ_c__$2,meta16632));
});
}
return (new cljs.core.logic.fd.t16631(dv,du,s,this$__$1,self__.meta16629,self__.v,self__.u,self__._LT__EQ_c,null));
});
cljs.core.logic.fd.t16628.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t16628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16630){var self__ = this;
var _16630__$1 = this;return self__.meta16629;
});
cljs.core.logic.fd.t16628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16630,meta16629__$1){var self__ = this;
var _16630__$1 = this;return (new cljs.core.logic.fd.t16628(self__.v,self__.u,self__._LT__EQ_c,meta16629__$1));
});
cljs.core.logic.fd.__GT_t16628 = (function __GT_t16628(v__$1,u__$1,_LT__EQ_c__$1,meta16629){return (new cljs.core.logic.fd.t16628(v__$1,u__$1,_LT__EQ_c__$1,meta16629));
});
}
return (new cljs.core.logic.fd.t16628(v,u,_LT__EQ_c,null));
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
cljs.core.logic.fd._LT_ = (function _LT_(u,v){return (function (a__6849__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__6849__auto__,cljs.core.logic.fd._LT__EQ_.call(null,u,v)),cljs.core.logic.fd._BANG__EQ_.call(null,u,v));
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
cljs.core.logic.fd._PLUS_c = (function _PLUS_c(u,v,w){if(typeof cljs.core.logic.fd.t16648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16648 = (function (w,v,u,_PLUS_c,meta16649){
this.w = w;
this.v = v;
this.u = u;
this._PLUS_c = _PLUS_c;
this.meta16649 = meta16649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t16648.cljs$lang$type = true;
cljs.core.logic.fd.t16648.cljs$lang$ctorStr = "cljs.core.logic.fd/t16648";
cljs.core.logic.fd.t16648.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16648");
});
cljs.core.logic.fd.t16648.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t16648.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t16648.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t16648.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","+","cljs.core.logic.fd/+",1528484149,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,837),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,837),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,38)))));
});
cljs.core.logic.fd.t16648.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v,self__.w], null);
});
cljs.core.logic.fd.t16648.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t16648.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t16651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16651 = (function (v,w,u,s,_PLUS_c,meta16649,du,dw,dv,this$,meta16652){
this.v = v;
this.w = w;
this.u = u;
this.s = s;
this._PLUS_c = _PLUS_c;
this.meta16649 = meta16649;
this.du = du;
this.dw = dw;
this.dv = dv;
this.this$ = this$;
this.meta16652 = meta16652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t16651.cljs$lang$type = true;
cljs.core.logic.fd.t16651.cljs$lang$ctorStr = "cljs.core.logic.fd/t16651";
cljs.core.logic.fd.t16651.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16651");
});
cljs.core.logic.fd.t16651.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t16651.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.du))
{var or__11133__auto__ = self__.dv;if(cljs.core.truth_(or__11133__auto__))
{return or__11133__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dv))
{var or__11133__auto__ = self__.du;if(cljs.core.truth_(or__11133__auto__))
{return or__11133__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dw))
{var or__11133__auto__ = self__.du;if(cljs.core.truth_(or__11133__auto__))
{return or__11133__auto__;
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
cljs.core.logic.fd.t16651.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t16651.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw)) && (cljs.core._EQ_.call(null,(self__.du + self__.dv),self__.dw));
});
cljs.core.logic.fd.t16651.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__16655 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) + cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) + cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__16655,0,null);var wmax = cljs.core.nth.call(null,vec__16655,1,null);var vec__16656 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.dv))], null));var umin = cljs.core.nth.call(null,vec__16656,0,null);var umax = cljs.core.nth.call(null,vec__16656,1,null);var vec__16657 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.du)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.du))], null));var vmin = cljs.core.nth.call(null,vec__16657,0,null);var vmax = cljs.core.nth.call(null,vec__16657,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin + vmin),(umax + vmax));var ui = cljs.core.logic.fd.interval.call(null,(wmin - vmax),(wmax - vmin));var vi = cljs.core.logic.fd.interval.call(null,(wmin - umax),(wmax - umin));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__11121__auto__ = wi;if(cljs.core.truth_(and__11121__auto__))
{return self__.dw;
} else
{return and__11121__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__11121__auto__ = ui;if(cljs.core.truth_(and__11121__auto__))
{return self__.du;
} else
{return and__11121__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__11121__auto__ = vi;if(cljs.core.truth_(and__11121__auto__))
{return self__.dv;
} else
{return and__11121__auto__;
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
cljs.core.logic.fd.t16651.prototype.apply = (function (self__,args16654){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16654)));
});
cljs.core.logic.fd.t16651.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__16658 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) + cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) + cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__16658,0,null);var wmax = cljs.core.nth.call(null,vec__16658,1,null);var vec__16659 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.dv))], null));var umin = cljs.core.nth.call(null,vec__16659,0,null);var umax = cljs.core.nth.call(null,vec__16659,1,null);var vec__16660 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.du)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.du))], null));var vmin = cljs.core.nth.call(null,vec__16660,0,null);var vmax = cljs.core.nth.call(null,vec__16660,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin + vmin),(umax + vmax));var ui = cljs.core.logic.fd.interval.call(null,(wmin - vmax),(wmax - vmin));var vi = cljs.core.logic.fd.interval.call(null,(wmin - umax),(wmax - umin));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__11121__auto__ = wi;if(cljs.core.truth_(and__11121__auto__))
{return self__.dw;
} else
{return and__11121__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__11121__auto__ = ui;if(cljs.core.truth_(and__11121__auto__))
{return self__.du;
} else
{return and__11121__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__11121__auto__ = vi;if(cljs.core.truth_(and__11121__auto__))
{return self__.dv;
} else
{return and__11121__auto__;
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
cljs.core.logic.fd.t16651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16653){var self__ = this;
var _16653__$1 = this;return self__.meta16652;
});
cljs.core.logic.fd.t16651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16653,meta16652__$1){var self__ = this;
var _16653__$1 = this;return (new cljs.core.logic.fd.t16651(self__.v,self__.w,self__.u,self__.s,self__._PLUS_c,self__.meta16649,self__.du,self__.dw,self__.dv,self__.this$,meta16652__$1));
});
cljs.core.logic.fd.__GT_t16651 = (function __GT_t16651(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,meta16649__$1,du__$1,dw__$1,dv__$1,this$__$2,meta16652){return (new cljs.core.logic.fd.t16651(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,meta16649__$1,du__$1,dw__$1,dv__$1,this$__$2,meta16652));
});
}
return (new cljs.core.logic.fd.t16651(self__.v,self__.w,self__.u,s,self__._PLUS_c,self__.meta16649,du,dw,dv,this$__$1,null));
});
cljs.core.logic.fd.t16648.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t16648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16650){var self__ = this;
var _16650__$1 = this;return self__.meta16649;
});
cljs.core.logic.fd.t16648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16650,meta16649__$1){var self__ = this;
var _16650__$1 = this;return (new cljs.core.logic.fd.t16648(self__.w,self__.v,self__.u,self__._PLUS_c,meta16649__$1));
});
cljs.core.logic.fd.__GT_t16648 = (function __GT_t16648(w__$1,v__$1,u__$1,_PLUS_c__$1,meta16649){return (new cljs.core.logic.fd.t16648(w__$1,v__$1,u__$1,_PLUS_c__$1,meta16649));
});
}
return (new cljs.core.logic.fd.t16648(w,v,u,_PLUS_c,null));
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
{var q = cljs.core.quot.call(null,a,n);var G__16677 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upper","upper",1125403668),G__16677))
{return q;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lower","lower",1117068915),G__16677))
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
if(typeof cljs.core.logic.fd.t16678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16678 = (function (safe_div,w,v,u,_STAR_c,meta16679){
this.safe_div = safe_div;
this.w = w;
this.v = v;
this.u = u;
this._STAR_c = _STAR_c;
this.meta16679 = meta16679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t16678.cljs$lang$type = true;
cljs.core.logic.fd.t16678.cljs$lang$ctorStr = "cljs.core.logic.fd/t16678";
cljs.core.logic.fd.t16678.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16678");
});
cljs.core.logic.fd.t16678.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t16678.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t16678.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t16678.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","*","cljs.core.logic.fd/*",1528484146,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,921),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,921),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,40)))));
});
cljs.core.logic.fd.t16678.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v,self__.w], null);
});
cljs.core.logic.fd.t16678.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t16678.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t16681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16681 = (function (v,w,u,s,du,_STAR_c,dw,dv,meta16679,safe_div,this$,meta16682){
this.v = v;
this.w = w;
this.u = u;
this.s = s;
this.du = du;
this._STAR_c = _STAR_c;
this.dw = dw;
this.dv = dv;
this.meta16679 = meta16679;
this.safe_div = safe_div;
this.this$ = this$;
this.meta16682 = meta16682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t16681.cljs$lang$type = true;
cljs.core.logic.fd.t16681.cljs$lang$ctorStr = "cljs.core.logic.fd/t16681";
cljs.core.logic.fd.t16681.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16681");
});
cljs.core.logic.fd.t16681.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t16681.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.du))
{var or__11133__auto__ = self__.dv;if(cljs.core.truth_(or__11133__auto__))
{return or__11133__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dv))
{var or__11133__auto__ = self__.du;if(cljs.core.truth_(or__11133__auto__))
{return or__11133__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dw))
{var or__11133__auto__ = self__.du;if(cljs.core.truth_(or__11133__auto__))
{return or__11133__auto__;
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
cljs.core.logic.fd.t16681.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t16681.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw)) && (cljs.core._EQ_.call(null,(self__.du * self__.dv),self__.dw));
});
cljs.core.logic.fd.t16681.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__16685 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) * cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) * cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__16685,0,null);var wmax = cljs.core.nth.call(null,vec__16685,1,null);var vec__16686 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var umin = cljs.core.nth.call(null,vec__16686,0,null);var umax = cljs.core.nth.call(null,vec__16686,1,null);var vec__16687 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var vmin = cljs.core.nth.call(null,vec__16687,0,null);var vmax = cljs.core.nth.call(null,vec__16687,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin * vmin),(umax * vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__11121__auto__ = wi;if(cljs.core.truth_(and__11121__auto__))
{return self__.dw;
} else
{return and__11121__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__11121__auto__ = ui;if(cljs.core.truth_(and__11121__auto__))
{return self__.du;
} else
{return and__11121__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__11121__auto__ = vi;if(cljs.core.truth_(and__11121__auto__))
{return self__.dv;
} else
{return and__11121__auto__;
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
cljs.core.logic.fd.t16681.prototype.apply = (function (self__,args16684){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16684)));
});
cljs.core.logic.fd.t16681.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__16688 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) * cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) * cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__16688,0,null);var wmax = cljs.core.nth.call(null,vec__16688,1,null);var vec__16689 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var umin = cljs.core.nth.call(null,vec__16689,0,null);var umax = cljs.core.nth.call(null,vec__16689,1,null);var vec__16690 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var vmin = cljs.core.nth.call(null,vec__16690,0,null);var vmax = cljs.core.nth.call(null,vec__16690,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin * vmin),(umax * vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__11121__auto__ = wi;if(cljs.core.truth_(and__11121__auto__))
{return self__.dw;
} else
{return and__11121__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__11121__auto__ = ui;if(cljs.core.truth_(and__11121__auto__))
{return self__.du;
} else
{return and__11121__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__11121__auto__ = vi;if(cljs.core.truth_(and__11121__auto__))
{return self__.dv;
} else
{return and__11121__auto__;
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
cljs.core.logic.fd.t16681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16683){var self__ = this;
var _16683__$1 = this;return self__.meta16682;
});
cljs.core.logic.fd.t16681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16683,meta16682__$1){var self__ = this;
var _16683__$1 = this;return (new cljs.core.logic.fd.t16681(self__.v,self__.w,self__.u,self__.s,self__.du,self__._STAR_c,self__.dw,self__.dv,self__.meta16679,self__.safe_div,self__.this$,meta16682__$1));
});
cljs.core.logic.fd.__GT_t16681 = (function __GT_t16681(v__$2,w__$2,u__$2,s__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,meta16679__$1,safe_div__$2,this$__$2,meta16682){return (new cljs.core.logic.fd.t16681(v__$2,w__$2,u__$2,s__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,meta16679__$1,safe_div__$2,this$__$2,meta16682));
});
}
return (new cljs.core.logic.fd.t16681(self__.v,self__.w,self__.u,s,du,self__._STAR_c,dw,dv,self__.meta16679,self__.safe_div,this$__$1,null));
});
cljs.core.logic.fd.t16678.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t16678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16680){var self__ = this;
var _16680__$1 = this;return self__.meta16679;
});
cljs.core.logic.fd.t16678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16680,meta16679__$1){var self__ = this;
var _16680__$1 = this;return (new cljs.core.logic.fd.t16678(self__.safe_div,self__.w,self__.v,self__.u,self__._STAR_c,meta16679__$1));
});
cljs.core.logic.fd.__GT_t16678 = (function __GT_t16678(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta16679){return (new cljs.core.logic.fd.t16678(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta16679));
});
}
return (new cljs.core.logic.fd.t16678(safe_div,w,v,u,_STAR_c,null));
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
cljs.core.logic.fd._distinctc = (function _distinctc(x,y_STAR_,n_STAR_){if(typeof cljs.core.logic.fd.t16698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16698 = (function (n_STAR_,y_STAR_,x,_distinctc,meta16699){
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta16699 = meta16699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t16698.cljs$lang$type = true;
cljs.core.logic.fd.t16698.cljs$lang$ctorStr = "cljs.core.logic.fd/t16698";
cljs.core.logic.fd.t16698.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16698");
});
cljs.core.logic.fd.t16698.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t16698.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t16698.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t16698.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","-distinct","cljs.core.logic.fd/-distinct",73212723,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,973),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,973),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,46)))));
});
cljs.core.logic.fd.t16698.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.fd.t16698.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t16698.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var x__$2 = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.fd.t16701 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16701 = (function (s,this$,meta16699,n_STAR_,y_STAR_,x,_distinctc,meta16702){
this.s = s;
this.this$ = this$;
this.meta16699 = meta16699;
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta16702 = meta16702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t16701.cljs$lang$type = true;
cljs.core.logic.fd.t16701.cljs$lang$ctorStr = "cljs.core.logic.fd/t16701";
cljs.core.logic.fd.t16701.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16701");
});
cljs.core.logic.fd.t16701.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t16701.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.x);
});
cljs.core.logic.fd.t16701.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(self__.n_STAR_.call(null,self__.x)))
{return null;
} else
{var y_STAR___$3 = cljs.core.seq.call(null,self__.y_STAR_);var s__$3 = s__$2;while(true){
if(y_STAR___$3)
{var y = cljs.core.first.call(null,y_STAR___$3);var v = (function (){var or__11133__auto__ = cljs.core.logic.fd.get_dom.call(null,s__$3,y);if(cljs.core.truth_(or__11133__auto__))
{return or__11133__auto__;
} else
{return cljs.core.logic.protocols.walk.call(null,s__$3,y);
}
})();var s__$4 = ((!(cljs.core.logic.lvar_QMARK_.call(null,v)))?((cljs.core._EQ_.call(null,self__.x,v))?null:(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,v,self__.x))?cljs.core.logic.fd.process_dom.call(null,y,cljs.core.logic.fd._difference.call(null,v,self__.x),v).call(null,s__$3):((new cljs.core.Keyword(null,"else","else",1017020587))?s__$3:null))):s__$3);if(cljs.core.truth_(s__$4))
{{
var G__16705 = cljs.core.next.call(null,y_STAR___$3);
var G__16706 = s__$4;
y_STAR___$3 = G__16705;
s__$3 = G__16706;
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
cljs.core.logic.fd.t16701.prototype.apply = (function (self__,args16704){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16704)));
});
cljs.core.logic.fd.t16701.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.n_STAR_.call(null,self__.x)))
{return null;
} else
{var y_STAR___$3 = cljs.core.seq.call(null,self__.y_STAR_);var s__$3 = s__$2;while(true){
if(y_STAR___$3)
{var y = cljs.core.first.call(null,y_STAR___$3);var v = (function (){var or__11133__auto__ = cljs.core.logic.fd.get_dom.call(null,s__$3,y);if(cljs.core.truth_(or__11133__auto__))
{return or__11133__auto__;
} else
{return cljs.core.logic.protocols.walk.call(null,s__$3,y);
}
})();var s__$4 = ((!(cljs.core.logic.lvar_QMARK_.call(null,v)))?((cljs.core._EQ_.call(null,self__.x,v))?null:(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,v,self__.x))?cljs.core.logic.fd.process_dom.call(null,y,cljs.core.logic.fd._difference.call(null,v,self__.x),v).call(null,s__$3):((new cljs.core.Keyword(null,"else","else",1017020587))?s__$3:null))):s__$3);if(cljs.core.truth_(s__$4))
{{
var G__16707 = cljs.core.next.call(null,y_STAR___$3);
var G__16708 = s__$4;
y_STAR___$3 = G__16707;
s__$3 = G__16708;
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
cljs.core.logic.fd.t16701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16703){var self__ = this;
var _16703__$1 = this;return self__.meta16702;
});
cljs.core.logic.fd.t16701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16703,meta16702__$1){var self__ = this;
var _16703__$1 = this;return (new cljs.core.logic.fd.t16701(self__.s,self__.this$,self__.meta16699,self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta16702__$1));
});
cljs.core.logic.fd.__GT_t16701 = (function __GT_t16701(s__$1,this$__$2,meta16699__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta16702){return (new cljs.core.logic.fd.t16701(s__$1,this$__$2,meta16699__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta16702));
});
}
return (new cljs.core.logic.fd.t16701(s,this$__$1,self__.meta16699,self__.n_STAR_,self__.y_STAR_,x__$2,self__._distinctc,null));
});
cljs.core.logic.fd.t16698.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t16698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16700){var self__ = this;
var _16700__$1 = this;return self__.meta16699;
});
cljs.core.logic.fd.t16698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16700,meta16699__$1){var self__ = this;
var _16700__$1 = this;return (new cljs.core.logic.fd.t16698(self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta16699__$1));
});
cljs.core.logic.fd.__GT_t16698 = (function __GT_t16698(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta16699){return (new cljs.core.logic.fd.t16698(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta16699));
});
}
return (new cljs.core.logic.fd.t16698(n_STAR_,y_STAR_,x,_distinctc,null));
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
var G__16709 = s;
var G__16710 = cljs.core.next.call(null,ls__$1);
f = G__16709;
ls__$1 = G__16710;
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
cljs.core.logic.fd.distinctc = (function distinctc(v_STAR_){if(typeof cljs.core.logic.fd.t16720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16720 = (function (v_STAR_,distinctc,meta16721){
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta16721 = meta16721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t16720.cljs$lang$type = true;
cljs.core.logic.fd.t16720.cljs$lang$ctorStr = "cljs.core.logic.fd/t16720";
cljs.core.logic.fd.t16720.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16720");
});
cljs.core.logic.fd.t16720.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t16720.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t16720.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t16720.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","distinct","cljs.core.logic.fd/distinct",1952820740,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1022),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1022),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,45)))));
});
cljs.core.logic.fd.t16720.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v_STAR_], null);
});
cljs.core.logic.fd.t16720.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t16720.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var v_STAR___$2 = cljs.core.logic.protocols.walk.call(null,s,self__.v_STAR_);if(typeof cljs.core.logic.fd.t16723 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t16723 = (function (s,this$,meta16721,v_STAR_,distinctc,meta16724){
this.s = s;
this.this$ = this$;
this.meta16721 = meta16721;
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta16724 = meta16724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t16723.cljs$lang$type = true;
cljs.core.logic.fd.t16723.cljs$lang$ctorStr = "cljs.core.logic.fd/t16723";
cljs.core.logic.fd.t16723.cljs$lang$ctorPrWriter = (function (this__11677__auto__,writer__11678__auto__,opt__11679__auto__){return cljs.core._write.call(null,writer__11678__auto__,"cljs.core.logic.fd/t16723");
});
cljs.core.logic.fd.t16723.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t16723.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.v_STAR_));
});
cljs.core.logic.fd.t16723.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var map__16727 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__16727__$1 = ((cljs.core.seq_QMARK_.call(null,map__16727))?cljs.core.apply.call(null,cljs.core.hash_map,map__16727):map__16727);var x_STAR_ = cljs.core.get.call(null,map__16727__$1,true);var n_STAR_ = cljs.core.get.call(null,map__16727__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4098__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4098__auto__))
{var s__$4 = temp__4098__auto__;{
var G__16729 = cljs.core.next.call(null,xs);
var G__16730 = s__$4;
xs = G__16729;
s__$3 = G__16730;
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
cljs.core.logic.fd.t16723.prototype.apply = (function (self__,args16726){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16726)));
});
cljs.core.logic.fd.t16723.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var map__16728 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__16728__$1 = ((cljs.core.seq_QMARK_.call(null,map__16728))?cljs.core.apply.call(null,cljs.core.hash_map,map__16728):map__16728);var x_STAR_ = cljs.core.get.call(null,map__16728__$1,true);var n_STAR_ = cljs.core.get.call(null,map__16728__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4098__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4098__auto__))
{var s__$4 = temp__4098__auto__;{
var G__16731 = cljs.core.next.call(null,xs);
var G__16732 = s__$4;
xs = G__16731;
s__$3 = G__16732;
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
cljs.core.logic.fd.t16723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16725){var self__ = this;
var _16725__$1 = this;return self__.meta16724;
});
cljs.core.logic.fd.t16723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16725,meta16724__$1){var self__ = this;
var _16725__$1 = this;return (new cljs.core.logic.fd.t16723(self__.s,self__.this$,self__.meta16721,self__.v_STAR_,self__.distinctc,meta16724__$1));
});
cljs.core.logic.fd.__GT_t16723 = (function __GT_t16723(s__$1,this$__$2,meta16721__$1,v_STAR___$3,distinctc__$2,meta16724){return (new cljs.core.logic.fd.t16723(s__$1,this$__$2,meta16721__$1,v_STAR___$3,distinctc__$2,meta16724));
});
}
return (new cljs.core.logic.fd.t16723(s,this$__$1,self__.meta16721,v_STAR___$2,self__.distinctc,null));
});
cljs.core.logic.fd.t16720.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t16720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16722){var self__ = this;
var _16722__$1 = this;return self__.meta16721;
});
cljs.core.logic.fd.t16720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16722,meta16721__$1){var self__ = this;
var _16722__$1 = this;return (new cljs.core.logic.fd.t16720(self__.v_STAR_,self__.distinctc,meta16721__$1));
});
cljs.core.logic.fd.__GT_t16720 = (function __GT_t16720(v_STAR___$1,distinctc__$1,meta16721){return (new cljs.core.logic.fd.t16720(v_STAR___$1,distinctc__$1,meta16721));
});
}
return (new cljs.core.logic.fd.t16720(v_STAR_,distinctc,null));
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
cljs.core.logic.fd.bounded_listo = (function bounded_listo(l,n){return (function (a16750){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a16750,(function (a__6798__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__6798__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,l)),cljs.core.logic.fd._LT__EQ_.call(null,0,n));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a16750,(function (a__6798__auto__){return (function _inc__$1(){var t = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"t","t",-1640531411,null));var h = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h","h",-1640531423,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__6798__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,h,t),l)),(function (a__6798__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__6798__auto____$1,cljs.core.logic._EQ__EQ_.call(null,n,n)),(function (a__6798__auto____$2){return (function _inc__$1(){var m = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"m","m",-1640531418,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__6798__auto____$2,(function (){var dom_16766 = cljs.core.logic.fd.interval.call(null,0,Number.MAX_VALUE);return (function (a__6798__auto____$3){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__6798__auto____$3,cljs.core.logic.fd.dom.call(null,m,dom_16766));
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
{var vec__16768 = form;var op = cljs.core.nth.call(null,vec__16768,0,null);var args = cljs.core.nthnext.call(null,vec__16768,1);if(cljs.core.truth_((function (){var and__11121__auto__ = cljs.core.logic.fd.binops.call(null,op);if(cljs.core.truth_(and__11121__auto__))
{return (cljs.core.count.call(null,args) > 2);
} else
{return and__11121__auto__;
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
{var vec__16772 = form;var op = cljs.core.nth.call(null,vec__16772,0,null);var r1 = cljs.core.nth.call(null,vec__16772,1,null);var r2 = cljs.core.nth.call(null,vec__16772,2,null);var vec__16773 = ((cljs.core.seq_QMARK_.call(null,r1))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,false], null));var outl = cljs.core.nth.call(null,vec__16773,0,null);var outlv_QMARK_ = cljs.core.nth.call(null,vec__16773,1,null);var vec__16774 = ((cljs.core.seq_QMARK_.call(null,r2))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r2,false], null));var outr = cljs.core.nth.call(null,vec__16774,0,null);var outrv_QMARK_ = cljs.core.nth.call(null,vec__16774,1,null);var op__$1 = cljs.core.logic.fd.binops__GT_fd.call(null,op);return cljs.core.cons.call(null,(cljs.core.truth_(out)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,out),outr),outl),op__$1):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,outr),outl),op__$1)),cljs.core.concat.call(null,((cljs.core.seq_QMARK_.call(null,r1))?eq_STAR_.call(null,r1,vars,(cljs.core.truth_(outlv_QMARK_)?outl:null)):null),((cljs.core.seq_QMARK_.call(null,r2))?eq_STAR_.call(null,r2,vars,(cljs.core.truth_(outrv_QMARK_)?outr:null)):null)));
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
