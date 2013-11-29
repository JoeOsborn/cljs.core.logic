// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
cljs.core.logic._STAR_logic_dbs_STAR_ = cljs.core.PersistentVector.EMPTY;
cljs.core.logic._STAR_occurs_check_STAR_ = true;
cljs.core.logic.IUnifyTerms = (function (){var obj194979 = {};return obj194979;
})();
cljs.core.logic._unify_terms = (function _unify_terms(u,v,s){if((function (){var and__9617__auto__ = u;if(and__9617__auto__)
{return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3;
} else
{return and__9617__auto__;
}
})())
{return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3(u,v,s);
} else
{var x__10232__auto__ = (((u == null))?null:u);return (function (){var or__9629__auto__ = (cljs.core.logic._unify_terms[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify_terms["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyTerms.-unify-terms",u);
}
}
})().call(null,u,v,s);
}
});
cljs.core.logic.IUnifyWithNil = (function (){var obj194981 = {};return obj194981;
})();
cljs.core.logic._unify_with_nil = (function _unify_with_nil(v,u,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3(v,u,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._unify_with_nil[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify_with_nil["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyWithNil.-unify-with-nil",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithObject = (function (){var obj194983 = {};return obj194983;
})();
cljs.core.logic._unify_with_object = (function _unify_with_object(v,u,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3(v,u,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._unify_with_object[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify_with_object["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyWithObject.-unify-with-object",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithLVar = (function (){var obj194985 = {};return obj194985;
})();
cljs.core.logic._unify_with_lvar = (function _unify_with_lvar(v,u,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3(v,u,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._unify_with_lvar[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify_with_lvar["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyWithLVar.-unify-with-lvar",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithLSeq = (function (){var obj194987 = {};return obj194987;
})();
cljs.core.logic._unify_with_lseq = (function _unify_with_lseq(v,u,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3(v,u,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._unify_with_lseq[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify_with_lseq["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyWithLSeq.-unify-with-lseq",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithSequential = (function (){var obj194989 = {};return obj194989;
})();
cljs.core.logic._unify_with_seq = (function _unify_with_seq(v,u,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3(v,u,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._unify_with_seq[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify_with_seq["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyWithSequential.-unify-with-seq",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithMap = (function (){var obj194991 = {};return obj194991;
})();
cljs.core.logic._unify_with_map = (function _unify_with_map(v,u,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3(v,u,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._unify_with_map[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify_with_map["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyWithMap.-unify-with-map",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithRecord = (function (){var obj194993 = {};return obj194993;
})();
cljs.core.logic._unify_with_record = (function _unify_with_record(v,u,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IUnifyWithRecord$_unify_with_record$arity$3;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithRecord$_unify_with_record$arity$3(v,u,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._unify_with_record[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify_with_record["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyWithRecord.-unify-with-record",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IReifyTerm = (function (){var obj194995 = {};return obj194995;
})();
cljs.core.logic._reify_term = (function _reify_term(v,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2(v,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._reify_term[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._reify_term["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IReifyTerm.-reify-term",v);
}
}
})().call(null,v,s);
}
});
cljs.core.logic.IWalkTerm = (function (){var obj194997 = {};return obj194997;
})();
cljs.core.logic._walk_term = (function _walk_term(v,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2(v,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._walk_term[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._walk_term["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IWalkTerm.-walk-term",v);
}
}
})().call(null,v,s);
}
});
cljs.core.logic.IOccursCheckTerm = (function (){var obj194999 = {};return obj194999;
})();
cljs.core.logic._occurs_check_term = (function _occurs_check_term(v,u,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3(v,u,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._occurs_check_term[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._occurs_check_term["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IOccursCheckTerm.-occurs-check-term",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IBuildTerm = (function (){var obj195001 = {};return obj195001;
})();
cljs.core.logic._build_term = (function _build_term(u,s){if((function (){var and__9617__auto__ = u;if(and__9617__auto__)
{return u.cljs$core$logic$IBuildTerm$_build_term$arity$2;
} else
{return and__9617__auto__;
}
})())
{return u.cljs$core$logic$IBuildTerm$_build_term$arity$2(u,s);
} else
{var x__10232__auto__ = (((u == null))?null:u);return (function (){var or__9629__auto__ = (cljs.core.logic._build_term[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._build_term["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IBuildTerm.-build-term",u);
}
}
})().call(null,u,s);
}
});
cljs.core.logic.IBind = (function (){var obj195003 = {};return obj195003;
})();
cljs.core.logic._bind = (function _bind(this$,g){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$IBind$_bind$arity$2;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$IBind$_bind$arity$2(this$,g);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._bind[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._bind["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IBind.-bind",this$);
}
}
})().call(null,this$,g);
}
});
cljs.core.logic.IMPlus = (function (){var obj195005 = {};return obj195005;
})();
cljs.core.logic._mplus = (function _mplus(a,f){if((function (){var and__9617__auto__ = a;if(and__9617__auto__)
{return a.cljs$core$logic$IMPlus$_mplus$arity$2;
} else
{return and__9617__auto__;
}
})())
{return a.cljs$core$logic$IMPlus$_mplus$arity$2(a,f);
} else
{var x__10232__auto__ = (((a == null))?null:a);return (function (){var or__9629__auto__ = (cljs.core.logic._mplus[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._mplus["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IMPlus.-mplus",a);
}
}
})().call(null,a,f);
}
});
cljs.core.logic.ITake = (function (){var obj195007 = {};return obj195007;
})();
cljs.core.logic._take_STAR_ = (function _take_STAR_(a){if((function (){var and__9617__auto__ = a;if(and__9617__auto__)
{return a.cljs$core$logic$ITake$_take_STAR_$arity$1;
} else
{return and__9617__auto__;
}
})())
{return a.cljs$core$logic$ITake$_take_STAR_$arity$1(a);
} else
{var x__10232__auto__ = (((a == null))?null:a);return (function (){var or__9629__auto__ = (cljs.core.logic._take_STAR_[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._take_STAR_["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ITake.-take*",a);
}
}
})().call(null,a);
}
});
cljs.core.logic.IMemberCount = (function (){var obj195009 = {};return obj195009;
})();
cljs.core.logic._member_count = (function _member_count(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IMemberCount$_member_count$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IMemberCount$_member_count$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._member_count[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._member_count["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IMemberCount.-member-count",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.not_found = (function (){var obj195011 = {};return obj195011;
})();
cljs.core.logic.assoc_meta = (function assoc_meta(x,k,v){return cljs.core.with_meta(x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(x),k,v));
});
cljs.core.logic.dissoc_meta = (function dissoc_meta(x,k){return cljs.core.with_meta(x,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(x),k));
});
cljs.core.logic.assoc_dom = (function assoc_dom(x,k,v){return (cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$4 ? cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$4(x.v,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x.doms,k,v),x.eset,cljs.core.meta(x)) : cljs.core.logic.subst_val.call(null,x.v,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x.doms,k,v),x.eset,cljs.core.meta(x)));
});
cljs.core.logic.dissoc_dom = (function dissoc_dom(x,k){return (cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$4 ? cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$4(x.v,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x.doms,k),x.eset,cljs.core.meta(x)) : cljs.core.logic.subst_val.call(null,x.v,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x.doms,k),x.eset,cljs.core.meta(x)));
});
cljs.core.logic.unbound_names = [new cljs.core.Symbol(null,"_0","_0",-1640528534,null),new cljs.core.Symbol(null,"_1","_1",-1640528533,null),new cljs.core.Symbol(null,"_2","_2",-1640528532,null),new cljs.core.Symbol(null,"_3","_3",-1640528531,null),new cljs.core.Symbol(null,"_4","_4",-1640528530,null),new cljs.core.Symbol(null,"_5","_5",-1640528529,null),new cljs.core.Symbol(null,"_6","_6",-1640528528,null),new cljs.core.Symbol(null,"_7","_7",-1640528527,null),new cljs.core.Symbol(null,"_8","_8",-1640528526,null),new cljs.core.Symbol(null,"_9","_9",-1640528525,null),new cljs.core.Symbol(null,"_10","_10",-1640438665,null),new cljs.core.Symbol(null,"_11","_11",-1640438664,null),new cljs.core.Symbol(null,"_12","_12",-1640438663,null),new cljs.core.Symbol(null,"_13","_13",-1640438662,null),new cljs.core.Symbol(null,"_14","_14",-1640438661,null),new cljs.core.Symbol(null,"_15","_15",-1640438660,null),new cljs.core.Symbol(null,"_16","_16",-1640438659,null),new cljs.core.Symbol(null,"_17","_17",-1640438658,null),new cljs.core.Symbol(null,"_18","_18",-1640438657,null),new cljs.core.Symbol(null,"_19","_19",-1640438656,null),new cljs.core.Symbol(null,"_20","_20",-1640438634,null),new cljs.core.Symbol(null,"_21","_21",-1640438633,null),new cljs.core.Symbol(null,"_22","_22",-1640438632,null),new cljs.core.Symbol(null,"_23","_23",-1640438631,null),new cljs.core.Symbol(null,"_24","_24",-1640438630,null),new cljs.core.Symbol(null,"_25","_25",-1640438629,null),new cljs.core.Symbol(null,"_26","_26",-1640438628,null),new cljs.core.Symbol(null,"_27","_27",-1640438627,null),new cljs.core.Symbol(null,"_28","_28",-1640438626,null),new cljs.core.Symbol(null,"_29","_29",-1640438625,null),new cljs.core.Symbol(null,"_30","_30",-1640438603,null),new cljs.core.Symbol(null,"_31","_31",-1640438602,null),new cljs.core.Symbol(null,"_32","_32",-1640438601,null),new cljs.core.Symbol(null,"_33","_33",-1640438600,null),new cljs.core.Symbol(null,"_34","_34",-1640438599,null),new cljs.core.Symbol(null,"_35","_35",-1640438598,null),new cljs.core.Symbol(null,"_36","_36",-1640438597,null),new cljs.core.Symbol(null,"_37","_37",-1640438596,null),new cljs.core.Symbol(null,"_38","_38",-1640438595,null),new cljs.core.Symbol(null,"_39","_39",-1640438594,null),new cljs.core.Symbol(null,"_40","_40",-1640438572,null),new cljs.core.Symbol(null,"_41","_41",-1640438571,null),new cljs.core.Symbol(null,"_42","_42",-1640438570,null),new cljs.core.Symbol(null,"_43","_43",-1640438569,null),new cljs.core.Symbol(null,"_44","_44",-1640438568,null),new cljs.core.Symbol(null,"_45","_45",-1640438567,null),new cljs.core.Symbol(null,"_46","_46",-1640438566,null),new cljs.core.Symbol(null,"_47","_47",-1640438565,null),new cljs.core.Symbol(null,"_48","_48",-1640438564,null),new cljs.core.Symbol(null,"_49","_49",-1640438563,null),new cljs.core.Symbol(null,"_50","_50",-1640438541,null),new cljs.core.Symbol(null,"_51","_51",-1640438540,null),new cljs.core.Symbol(null,"_52","_52",-1640438539,null),new cljs.core.Symbol(null,"_53","_53",-1640438538,null),new cljs.core.Symbol(null,"_54","_54",-1640438537,null),new cljs.core.Symbol(null,"_55","_55",-1640438536,null),new cljs.core.Symbol(null,"_56","_56",-1640438535,null),new cljs.core.Symbol(null,"_57","_57",-1640438534,null),new cljs.core.Symbol(null,"_58","_58",-1640438533,null),new cljs.core.Symbol(null,"_59","_59",-1640438532,null),new cljs.core.Symbol(null,"_60","_60",-1640438510,null),new cljs.core.Symbol(null,"_61","_61",-1640438509,null),new cljs.core.Symbol(null,"_62","_62",-1640438508,null),new cljs.core.Symbol(null,"_63","_63",-1640438507,null),new cljs.core.Symbol(null,"_64","_64",-1640438506,null),new cljs.core.Symbol(null,"_65","_65",-1640438505,null),new cljs.core.Symbol(null,"_66","_66",-1640438504,null),new cljs.core.Symbol(null,"_67","_67",-1640438503,null),new cljs.core.Symbol(null,"_68","_68",-1640438502,null),new cljs.core.Symbol(null,"_69","_69",-1640438501,null),new cljs.core.Symbol(null,"_70","_70",-1640438479,null),new cljs.core.Symbol(null,"_71","_71",-1640438478,null),new cljs.core.Symbol(null,"_72","_72",-1640438477,null),new cljs.core.Symbol(null,"_73","_73",-1640438476,null),new cljs.core.Symbol(null,"_74","_74",-1640438475,null),new cljs.core.Symbol(null,"_75","_75",-1640438474,null),new cljs.core.Symbol(null,"_76","_76",-1640438473,null),new cljs.core.Symbol(null,"_77","_77",-1640438472,null),new cljs.core.Symbol(null,"_78","_78",-1640438471,null),new cljs.core.Symbol(null,"_79","_79",-1640438470,null),new cljs.core.Symbol(null,"_80","_80",-1640438448,null),new cljs.core.Symbol(null,"_81","_81",-1640438447,null),new cljs.core.Symbol(null,"_82","_82",-1640438446,null),new cljs.core.Symbol(null,"_83","_83",-1640438445,null),new cljs.core.Symbol(null,"_84","_84",-1640438444,null),new cljs.core.Symbol(null,"_85","_85",-1640438443,null),new cljs.core.Symbol(null,"_86","_86",-1640438442,null),new cljs.core.Symbol(null,"_87","_87",-1640438441,null),new cljs.core.Symbol(null,"_88","_88",-1640438440,null),new cljs.core.Symbol(null,"_89","_89",-1640438439,null),new cljs.core.Symbol(null,"_90","_90",-1640438417,null),new cljs.core.Symbol(null,"_91","_91",-1640438416,null),new cljs.core.Symbol(null,"_92","_92",-1640438415,null),new cljs.core.Symbol(null,"_93","_93",-1640438414,null),new cljs.core.Symbol(null,"_94","_94",-1640438413,null),new cljs.core.Symbol(null,"_95","_95",-1640438412,null),new cljs.core.Symbol(null,"_96","_96",-1640438411,null),new cljs.core.Symbol(null,"_97","_97",-1640438410,null),new cljs.core.Symbol(null,"_98","_98",-1640438409,null),new cljs.core.Symbol(null,"_99","_99",-1640438408,null)];
cljs.core.logic.record_QMARK_ = (function record_QMARK_(x){var G__195013 = x;if(G__195013)
{var bit__10248__auto__ = (G__195013.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__10248__auto__) || (G__195013.cljs$core$IRecord$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.IBindable = (function (){var obj195015 = {};return obj195015;
})();
cljs.core.logic.bindable_QMARK_ = (function bindable_QMARK_(x){var or__9629__auto__ = (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.logic.lvar_QMARK_.call(null,x));if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{var G__195017 = x;if(G__195017)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto____$1 = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto____$1))
{return or__9629__auto____$1;
} else
{return G__195017.cljs$core$logic$IBindable$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
}
});

/**
* @constructor
* @param {*} v
* @param {*} doms
* @param {*} eset
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.SubstValue = (function (v,doms,eset,__meta,__extmap){
this.v = v;
this.doms = doms;
this.eset = eset;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.SubstValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10186__auto__){var self__ = this;
var this__10186__auto____$1 = this;var h__10040__auto__ = self__.__hash;if(!((h__10040__auto__ == null)))
{return h__10040__auto__;
} else
{var h__10040__auto____$1 = cljs.core.hash_imap(this__10186__auto____$1);self__.__hash = h__10040__auto____$1;
return h__10040__auto____$1;
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10191__auto__,k__10192__auto__){var self__ = this;
var this__10191__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10191__auto____$1,k__10192__auto__,null);
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10193__auto__,k195019,else__10194__auto__){var self__ = this;
var this__10193__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k195019,cljs.core.constant$keyword$101))
{return self__.v;
} else
{if(cljs.core.keyword_identical_QMARK_(k195019,cljs.core.constant$keyword$102))
{return self__.doms;
} else
{if(cljs.core.keyword_identical_QMARK_(k195019,cljs.core.constant$keyword$103))
{return self__.eset;
} else
{if(cljs.core.constant$keyword$76)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k195019,else__10194__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10198__auto__,k__10199__auto__,G__195018){var self__ = this;
var this__10198__auto____$1 = this;var pred__195021 = cljs.core.keyword_identical_QMARK_;var expr__195022 = k__10199__auto__;if(cljs.core.truth_((pred__195021.cljs$core$IFn$_invoke$arity$2 ? pred__195021.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$101,expr__195022) : pred__195021.call(null,cljs.core.constant$keyword$101,expr__195022))))
{return (new cljs.core.logic.SubstValue(G__195018,self__.doms,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__195021.cljs$core$IFn$_invoke$arity$2 ? pred__195021.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$102,expr__195022) : pred__195021.call(null,cljs.core.constant$keyword$102,expr__195022))))
{return (new cljs.core.logic.SubstValue(self__.v,G__195018,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__195021.cljs$core$IFn$_invoke$arity$2 ? pred__195021.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$103,expr__195022) : pred__195021.call(null,cljs.core.constant$keyword$103,expr__195022))))
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,G__195018,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10199__auto__,G__195018),null));
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10205__auto__,writer__10206__auto__,opts__10207__auto__){var self__ = this;
var this__10205__auto____$1 = this;var pr_pair__10208__auto__ = (function (keyval__10209__auto__){return cljs.core.pr_sequential_writer(writer__10206__auto__,cljs.core.pr_writer,""," ","",opts__10207__auto__,keyval__10209__auto__);
});return cljs.core.pr_sequential_writer(writer__10206__auto__,pr_pair__10208__auto__,"#cljs.core.logic.SubstValue{",", ","}",opts__10207__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$103,self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10196__auto__,entry__10197__auto__){var self__ = this;
var this__10196__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__10197__auto__))
{return cljs.core._assoc(this__10196__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10197__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10197__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10196__auto____$1,entry__10197__auto__);
}
});
cljs.core.logic.SubstValue.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.v)].join('');
});
cljs.core.logic.SubstValue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10203__auto__){var self__ = this;
var this__10203__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$103,self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10195__auto__){var self__ = this;
var this__10195__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10187__auto__,other__10188__auto__){var self__ = this;
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
cljs.core.logic.SubstValue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10190__auto__,G__195018){var self__ = this;
var this__10190__auto____$1 = this;return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,G__195018,self__.__extmap,self__.__hash));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10189__auto__){var self__ = this;
var this__10189__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10200__auto__,k__10201__auto__){var self__ = this;
var this__10200__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$103,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null], null), null),k__10201__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__10200__auto____$1),self__.__meta),k__10201__auto__);
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10201__auto__)),null));
}
});
cljs.core.logic.SubstValue.cljs$lang$type = true;
cljs.core.logic.SubstValue.cljs$lang$ctorPrSeq = (function (this__10225__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.logic/SubstValue");
});
cljs.core.logic.SubstValue.cljs$lang$ctorPrWriter = (function (this__10225__auto__,writer__10226__auto__){return cljs.core._write(writer__10226__auto__,"cljs.core.logic/SubstValue");
});
cljs.core.logic.__GT_SubstValue = (function __GT_SubstValue(v,doms,eset){return (new cljs.core.logic.SubstValue(v,doms,eset));
});
cljs.core.logic.map__GT_SubstValue = (function map__GT_SubstValue(G__195020){return (new cljs.core.logic.SubstValue(cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(G__195020),cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(G__195020),cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(G__195020),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__195020,cljs.core.constant$keyword$101,cljs.core.array_seq([cljs.core.constant$keyword$102,cljs.core.constant$keyword$103], 0))));
});
cljs.core.logic.subst_val_QMARK_ = (function subst_val_QMARK_(x){return (x instanceof cljs.core.logic.SubstValue);
});
cljs.core.logic.subst_val = (function() {
var subst_val = null;
var subst_val__1 = (function (x){return (new cljs.core.logic.SubstValue(x,null,null));
});
var subst_val__2 = (function (x,doms){return (new cljs.core.logic.SubstValue(x,doms,null));
});
var subst_val__3 = (function (x,doms,_meta){return cljs.core.with_meta((new cljs.core.logic.SubstValue(x,doms,null)),_meta);
});
var subst_val__4 = (function (x,doms,eset,_meta){return cljs.core.with_meta((new cljs.core.logic.SubstValue(x,doms,eset)),_meta);
});
subst_val = function(x,doms,eset,_meta){
switch(arguments.length){
case 1:
return subst_val__1.call(this,x);
case 2:
return subst_val__2.call(this,x,doms);
case 3:
return subst_val__3.call(this,x,doms,eset);
case 4:
return subst_val__4.call(this,x,doms,eset,_meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subst_val.cljs$core$IFn$_invoke$arity$1 = subst_val__1;
subst_val.cljs$core$IFn$_invoke$arity$2 = subst_val__2;
subst_val.cljs$core$IFn$_invoke$arity$3 = subst_val__3;
subst_val.cljs$core$IFn$_invoke$arity$4 = subst_val__4;
return subst_val;
})()
;
cljs.core.logic.var_rands = (function var_rands(a,c){return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.filter(cljs.core.logic.lvar_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__195024_SHARP_){return (cljs.core.logic._root_var.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic._root_var.cljs$core$IFn$_invoke$arity$2(a,p1__195024_SHARP_) : cljs.core.logic._root_var.call(null,a,p1__195024_SHARP_));
}),(cljs.core.logic._rands.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic._rands.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.logic._rands.call(null,c)))));
});
cljs.core.logic.unbound_rands = (function unbound_rands(a,c){return cljs.core.filter((function (p1__195025_SHARP_){return (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.logic._root_val.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic._root_val.cljs$core$IFn$_invoke$arity$2(a,p1__195025_SHARP_) : cljs.core.logic._root_val.call(null,a,p1__195025_SHARP_))) : cljs.core.logic.lvar_QMARK_.call(null,(cljs.core.logic._root_val.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic._root_val.cljs$core$IFn$_invoke$arity$2(a,p1__195025_SHARP_) : cljs.core.logic._root_val.call(null,a,p1__195025_SHARP_))));
}),cljs.core.logic.var_rands(a,c));
});
cljs.core.logic.IConstraintStore = (function (){var obj195027 = {};return obj195027;
})();
cljs.core.logic._addc = (function _addc(cs,a,c){if((function (){var and__9617__auto__ = cs;if(and__9617__auto__)
{return cs.cljs$core$logic$IConstraintStore$_addc$arity$3;
} else
{return and__9617__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_addc$arity$3(cs,a,c);
} else
{var x__10232__auto__ = (((cs == null))?null:cs);return (function (){var or__9629__auto__ = (cljs.core.logic._addc[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._addc["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintStore.-addc",cs);
}
}
})().call(null,cs,a,c);
}
});
cljs.core.logic._updatec = (function _updatec(cs,a,c){if((function (){var and__9617__auto__ = cs;if(and__9617__auto__)
{return cs.cljs$core$logic$IConstraintStore$_updatec$arity$3;
} else
{return and__9617__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_updatec$arity$3(cs,a,c);
} else
{var x__10232__auto__ = (((cs == null))?null:cs);return (function (){var or__9629__auto__ = (cljs.core.logic._updatec[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._updatec["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintStore.-updatec",cs);
}
}
})().call(null,cs,a,c);
}
});
cljs.core.logic._remc = (function _remc(cs,a,c){if((function (){var and__9617__auto__ = cs;if(and__9617__auto__)
{return cs.cljs$core$logic$IConstraintStore$_remc$arity$3;
} else
{return and__9617__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_remc$arity$3(cs,a,c);
} else
{var x__10232__auto__ = (((cs == null))?null:cs);return (function (){var or__9629__auto__ = (cljs.core.logic._remc[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._remc["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintStore.-remc",cs);
}
}
})().call(null,cs,a,c);
}
});
cljs.core.logic._runc = (function _runc(cs,c,state){if((function (){var and__9617__auto__ = cs;if(and__9617__auto__)
{return cs.cljs$core$logic$IConstraintStore$_runc$arity$3;
} else
{return and__9617__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_runc$arity$3(cs,c,state);
} else
{var x__10232__auto__ = (((cs == null))?null:cs);return (function (){var or__9629__auto__ = (cljs.core.logic._runc[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._runc["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintStore.-runc",cs);
}
}
})().call(null,cs,c,state);
}
});
cljs.core.logic._constraints_for = (function _constraints_for(cs,a,x,ws){if((function (){var and__9617__auto__ = cs;if(and__9617__auto__)
{return cs.cljs$core$logic$IConstraintStore$_constraints_for$arity$4;
} else
{return and__9617__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_constraints_for$arity$4(cs,a,x,ws);
} else
{var x__10232__auto__ = (((cs == null))?null:cs);return (function (){var or__9629__auto__ = (cljs.core.logic._constraints_for[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._constraints_for["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintStore.-constraints-for",cs);
}
}
})().call(null,cs,a,x,ws);
}
});
cljs.core.logic._migrate = (function _migrate(cs,s,root){if((function (){var and__9617__auto__ = cs;if(and__9617__auto__)
{return cs.cljs$core$logic$IConstraintStore$_migrate$arity$3;
} else
{return and__9617__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_migrate$arity$3(cs,s,root);
} else
{var x__10232__auto__ = (((cs == null))?null:cs);return (function (){var or__9629__auto__ = (cljs.core.logic._migrate[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._migrate["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintStore.-migrate",cs);
}
}
})().call(null,cs,s,root);
}
});
cljs.core.logic.IWithConstraintId = (function (){var obj195029 = {};return obj195029;
})();
cljs.core.logic._with_id = (function _with_id(c,id){if((function (){var and__9617__auto__ = c;if(and__9617__auto__)
{return c.cljs$core$logic$IWithConstraintId$_with_id$arity$2;
} else
{return and__9617__auto__;
}
})())
{return c.cljs$core$logic$IWithConstraintId$_with_id$arity$2(c,id);
} else
{var x__10232__auto__ = (((c == null))?null:c);return (function (){var or__9629__auto__ = (cljs.core.logic._with_id[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._with_id["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithConstraintId.-with-id",c);
}
}
})().call(null,c,id);
}
});
cljs.core.logic.IConstraintId = (function (){var obj195031 = {};return obj195031;
})();
cljs.core.logic._id = (function _id(c){if((function (){var and__9617__auto__ = c;if(and__9617__auto__)
{return c.cljs$core$logic$IConstraintId$_id$arity$1;
} else
{return and__9617__auto__;
}
})())
{return c.cljs$core$logic$IConstraintId$_id$arity$1(c);
} else
{var x__10232__auto__ = (((c == null))?null:c);return (function (){var or__9629__auto__ = (cljs.core.logic._id[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._id["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintId.-id",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.id = (function id(c){if((function (){var G__195033 = c;if(G__195033)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195033.cljs$core$logic$IConstraintId$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.logic._id(c);
} else
{return cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(c));
}
});
cljs.core.logic.with_id = (function with_id(c,id){if((function (){var G__195035 = c;if(G__195035)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195035.cljs$core$logic$IWithConstraintId$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.logic._with_id(c,id);
} else
{return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.assoc,cljs.core.array_seq([cljs.core.constant$keyword$104,id], 0));
}
});

/**
* @constructor
*/
cljs.core.logic.ConstraintStore = (function (km,cm,cid,running){
this.km = km;
this.cm = cm;
this.cid = cid;
this.running = running;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.logic.ConstraintStore.cljs$lang$type = true;
cljs.core.logic.ConstraintStore.cljs$lang$ctorStr = "cljs.core.logic/ConstraintStore";
cljs.core.logic.ConstraintStore.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/ConstraintStore");
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count(self__.cm);
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$ = true;
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_addc$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var vars = cljs.core.logic.var_rands(a,c);var c__$1 = cljs.core.logic.with_id(c,self__.cid);var cs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vars,c__$1){
return (function (cs,v){return (cljs.core.logic.add_var.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.add_var.cljs$core$IFn$_invoke$arity$3(cs,v,c__$1) : cljs.core.logic.add_var.call(null,cs,v,c__$1));
});})(vars,c__$1))
,this$__$1,vars);return (new cljs.core.logic.ConstraintStore(cs.km,cs.cm,(self__.cid + 1),self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_updatec$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var oc = (self__.cm.cljs$core$IFn$_invoke$arity$1 ? self__.cm.cljs$core$IFn$_invoke$arity$1(cljs.core.logic.id(c)) : self__.cm.call(null,cljs.core.logic.id(c)));return (new cljs.core.logic.ConstraintStore(self__.km,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cm,cljs.core.logic.id(c),c),self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_remc$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var vs = cljs.core.logic.var_rands(a,c);var ocid = cljs.core.logic.id(c);var nkm = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,ocid){
return (function (km__$1,v){var vcs = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(km__$1,v),ocid);if(cljs.core.empty_QMARK_(vcs))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(km__$1,v);
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(km__$1,v,vcs);
}
});})(vs,ocid))
,self__.km,vs);var ncm = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.cm,ocid);return (new cljs.core.logic.ConstraintStore(nkm,ncm,self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_runc$arity$3 = (function (this$,c,state){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(state))
{return (new cljs.core.logic.ConstraintStore(self__.km,self__.cm,self__.cid,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.running,cljs.core.logic.id(c))));
} else
{return (new cljs.core.logic.ConstraintStore(self__.km,self__.cm,self__.cid,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.running,cljs.core.logic.id(c))));
}
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_constraints_for$arity$4 = (function (this$,a,x,ws){var self__ = this;
var this$__$1 = this;var temp__4098__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.km,(cljs.core.logic._root_var.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic._root_var.cljs$core$IFn$_invoke$arity$2(a,x) : cljs.core.logic._root_var.call(null,a,x)));if(cljs.core.truth_(temp__4098__auto__))
{var ids = temp__4098__auto__;return cljs.core.filter((function (p1__195036_SHARP_){return (cljs.core.logic._watched_stores.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic._watched_stores.cljs$core$IFn$_invoke$arity$1(p1__195036_SHARP_) : cljs.core.logic._watched_stores.call(null,p1__195036_SHARP_)).call(null,ws);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(self__.cm,cljs.core.remove(self__.running,ids)));
} else
{return null;
}
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_migrate$arity$3 = (function (this$,x,root){var self__ = this;
var this$__$1 = this;var xcs = (self__.km.cljs$core$IFn$_invoke$arity$1 ? self__.km.cljs$core$IFn$_invoke$arity$1(x) : self__.km.call(null,x));var rootcs = (self__.km.cljs$core$IFn$_invoke$arity$2 ? self__.km.cljs$core$IFn$_invoke$arity$2(root,cljs.core.PersistentHashSet.EMPTY) : self__.km.call(null,root,cljs.core.PersistentHashSet.EMPTY));var nkm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.km,x),root,cljs.core.into(rootcs,xcs));return (new cljs.core.logic.ConstraintStore(nkm,self__.cm,self__.cid,self__.running));
});
cljs.core.logic.__GT_ConstraintStore = (function __GT_ConstraintStore(km,cm,cid,running){return (new cljs.core.logic.ConstraintStore(km,cm,cid,running));
});
cljs.core.logic.add_var = (function add_var(cs,x,c){if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.logic.lvar_QMARK_.call(null,x))))
{} else
{throw (new Error([cljs.core.str("constraint store assoc expected logic var key: "),cljs.core.str(x)].join('')));
}
var cm = cs.cm;var km = cs.km;var cid = cs.cid;var nkm = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(km,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (cm,km,cid){
return (function (s){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,cid);
});})(cm,km,cid))
,cljs.core.PersistentHashSet.EMPTY));var ncm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cm,cid,c);return (new cljs.core.logic.ConstraintStore(nkm,ncm,cid,cs.running));
});
cljs.core.logic.make_cs = (function make_cs(){return (new cljs.core.logic.ConstraintStore(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,0,cljs.core.PersistentHashSet.EMPTY));
});
cljs.core.logic.ISubstitutions = (function (){var obj195038 = {};return obj195038;
})();
cljs.core.logic._occurs_check = (function _occurs_check(this$,u,v){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(this$,u,v);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._occurs_check[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._occurs_check["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-occurs-check",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._ext = (function _ext(this$,u,v){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$ISubstitutions$_ext$arity$3;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_ext$arity$3(this$,u,v);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._ext[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._ext["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-ext",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._ext_no_check = (function _ext_no_check(this$,u,v){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(this$,u,v);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._ext_no_check[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._ext_no_check["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-ext-no-check",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._walk = (function _walk(this$,v){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$ISubstitutions$_walk$arity$2;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_walk$arity$2(this$,v);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._walk[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._walk["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-walk",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._walk_STAR_ = (function _walk_STAR_(this$,v){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(this$,v);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._walk_STAR_[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._walk_STAR_["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-walk*",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._unify = (function _unify(this$,u,v){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$ISubstitutions$_unify$arity$3;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_unify$arity$3(this$,u,v);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._unify[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-unify",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._reify_lvar_name = (function _reify_lvar_name(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._reify_lvar_name[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._reify_lvar_name["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-reify-lvar-name",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._reify_STAR_ = (function _reify_STAR_(this$,v){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(this$,v);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._reify_STAR_[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._reify_STAR_["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-reify*",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._reify = (function() {
var _reify = null;
var _reify__2 = (function (s,v){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ISubstitutions$_reify$arity$2;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutions$_reify$arity$2(s,v);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._reify[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._reify["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-reify",s);
}
}
})().call(null,s,v);
}
});
var _reify__3 = (function (s,v,r){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ISubstitutions$_reify$arity$3;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutions$_reify$arity$3(s,v,r);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._reify[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._reify["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutions.-reify",s);
}
}
})().call(null,s,v,r);
}
});
_reify = function(s,v,r){
switch(arguments.length){
case 2:
return _reify__2.call(this,s,v);
case 3:
return _reify__3.call(this,s,v,r);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reify.cljs$core$IFn$_invoke$arity$2 = _reify__2;
_reify.cljs$core$IFn$_invoke$arity$3 = _reify__3;
return _reify;
})()
;
cljs.core.logic.ISubstitutionsCLP = (function (){var obj195040 = {};return obj195040;
})();
cljs.core.logic._root_val = (function _root_val(s,v){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_root_val$arity$2;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_root_val$arity$2(s,v);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._root_val[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._root_val["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutionsCLP.-root-val",s);
}
}
})().call(null,s,v);
}
});
cljs.core.logic._root_var = (function _root_var(s,v){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_root_var$arity$2;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_root_var$arity$2(s,v);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._root_var[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._root_var["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutionsCLP.-root-var",s);
}
}
})().call(null,s,v);
}
});
cljs.core.logic._ext_run_cs = (function _ext_run_cs(s,x,v){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_ext_run_cs$arity$3;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_ext_run_cs$arity$3(s,x,v);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._ext_run_cs[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._ext_run_cs["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutionsCLP.-ext-run-cs",s);
}
}
})().call(null,s,x,v);
}
});
cljs.core.logic._queue = (function _queue(s,c){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_queue$arity$2;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_queue$arity$2(s,c);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._queue[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._queue["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutionsCLP.-queue",s);
}
}
})().call(null,s,c);
}
});
cljs.core.logic._update_var = (function _update_var(s,x,v){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_update_var$arity$3;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_update_var$arity$3(s,x,v);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._update_var[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._update_var["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISubstitutionsCLP.-update-var",s);
}
}
})().call(null,s,x,v);
}
});

/**
* @constructor
*/
cljs.core.logic.Substitutions = (function (s,vs,ts,cs,cq,cqs,oc,_meta){
this.s = s;
this.vs = vs;
this.ts = ts;
this.cs = cs;
this.cq = cq;
this.cqs = cqs;
this.oc = oc;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149974018;
})
cljs.core.logic.Substitutions.cljs$lang$type = true;
cljs.core.logic.Substitutions.cljs$lang$ctorStr = "cljs.core.logic/Substitutions";
cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/Substitutions");
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((cljs.core.logic.bindable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.bindable_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.bindable_QMARK_.call(null,v))))
{var lv = v;var me = cljs.core.find(self__.s,v);while(true){
if((me == null))
{return lv;
} else
{var v__$1 = cljs.core.key(me);var vp = cljs.core.val(me);if(cljs.core.not((cljs.core.logic.bindable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.bindable_QMARK_.cljs$core$IFn$_invoke$arity$1(vp) : cljs.core.logic.bindable_QMARK_.call(null,vp))))
{if(cljs.core.logic.subst_val_QMARK_(vp))
{var sv = vp.v;if(cljs.core.keyword_identical_QMARK_(sv,cljs.core.constant$keyword$105))
{return cljs.core.with_meta(v__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(vp),cljs.core.constant$keyword$105,true));
} else
{return sv;
}
} else
{return vp;
}
} else
{{
var G__195049 = vp;
var G__195050 = cljs.core.find(self__.s,vp);
lv = G__195049;
me = G__195050;
continue;
}
}
}
break;
}
} else
{return v;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk(this$__$1,v);return cljs.core.logic._reify_term(v__$1,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var s__$1 = this$__$1;var v__$1 = v;while(true){
var v__$2 = cljs.core.logic._walk(this$__$1,v__$1);if(cljs.core.truth_((cljs.core.logic.tree_term_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.tree_term_QMARK_.cljs$core$IFn$_invoke$arity$1(v__$2) : cljs.core.logic.tree_term_QMARK_.call(null,v__$2))))
{{
var G__195051 = this$__$1;
var G__195052 = v__$2;
s__$1 = G__195051;
v__$1 = G__195052;
continue;
}
} else
{return cljs.core.logic._walk_term(v__$2,this$__$1);
}
break;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var c = cljs.core.count(self__.s);if((c < 100))
{return (cljs.core.logic.unbound_names[c]);
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("_"),cljs.core.str(cljs.core.count(self__.s))].join(''));
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk_STAR_(this$__$1,v);return cljs.core.with_meta(cljs.core.logic.empty_s,self__._meta).cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(null,v__$1).cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify$arity$3 = (function (this$,v,r){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk_STAR_(this$__$1,v);return cljs.core.logic._reify_STAR_(r,v__$1).cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_unify$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;if((u === v))
{return this$__$1;
} else
{var u__$1 = cljs.core.logic._walk(this$__$1,u);var v__$1 = cljs.core.logic._walk(this$__$1,v);if(cljs.core.truth_((function (){var and__9617__auto__ = (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(u__$1) : cljs.core.logic.lvar_QMARK_.call(null,u__$1));if(cljs.core.truth_(and__9617__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(u__$1,v__$1);
} else
{return and__9617__auto__;
}
})()))
{return this$__$1;
} else
{if(cljs.core.truth_((function (){var and__9617__auto__ = cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(u__$1) : cljs.core.logic.lvar_QMARK_.call(null,u__$1)));if(and__9617__auto__)
{return (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v__$1) : cljs.core.logic.lvar_QMARK_.call(null,v__$1));
} else
{return and__9617__auto__;
}
})()))
{return cljs.core.logic._unify_terms(v__$1,u__$1,this$__$1);
} else
{return cljs.core.logic._unify_terms(u__$1,v__$1,this$__$1);
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;if((cljs.core.logic._STAR_occurs_check_STAR_) && (cljs.core.logic._occurs_check(this$__$1,u,((cljs.core.logic.subst_val_QMARK_(v))?v.v:v))))
{return null;
} else
{return cljs.core.logic._ext_no_check(this$__$1,u,v);
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;var u__$1 = ((cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v))))?cljs.core.logic.assoc_meta(u,cljs.core.constant$keyword$106,true):u);return (new cljs.core.logic.Substitutions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.s,u__$1,v),(cljs.core.truth_(self__.vs)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.vs,u__$1):null),self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_occurs_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk(this$__$1,v);return cljs.core.logic._occurs_check_term(v__$1,u,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(this$__$1) : g.call(null,this$__$1));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_root_val$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v))))
{var lv = v;var G__195042 = cljs.core.find(self__.s,v);var vec__195043 = G__195042;var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195043,0,null);var vp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195043,1,null);var me = vec__195043;var lv__$1 = lv;var G__195042__$1 = G__195042;while(true){
var lv__$2 = lv__$1;var vec__195044 = G__195042__$1;var v__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195044,0,null);var vp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195044,1,null);var me__$1 = vec__195044;if((me__$1 == null))
{return lv__$2;
} else
{if(cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(vp__$1) : cljs.core.logic.lvar_QMARK_.call(null,vp__$1))))
{return vp__$1;
} else
{if(cljs.core.constant$keyword$76)
{{
var G__195053 = vp__$1;
var G__195054 = cljs.core.find(self__.s,vp__$1);
lv__$1 = G__195053;
G__195042__$1 = G__195054;
continue;
}
} else
{return null;
}
}
}
break;
}
} else
{return v;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_root_var$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v))))
{if(cljs.core.truth_(cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v))))
{return v;
} else
{var lv = v;var G__195046 = cljs.core.find(self__.s,v);var vec__195047 = G__195046;var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195047,0,null);var vp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195047,1,null);var me = vec__195047;var lv__$1 = lv;var G__195046__$1 = G__195046;while(true){
var lv__$2 = lv__$1;var vec__195048 = G__195046__$1;var v__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195048,0,null);var vp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195048,1,null);var me__$1 = vec__195048;if((me__$1 == null))
{return lv__$2;
} else
{if(cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(vp__$1) : cljs.core.logic.lvar_QMARK_.call(null,vp__$1))))
{if(cljs.core.logic.subst_val_QMARK_(vp__$1))
{return cljs.core.with_meta(v__$2,cljs.core.meta(vp__$1));
} else
{return v__$2;
}
} else
{if(cljs.core.constant$keyword$76)
{{
var G__195055 = vp__$1;
var G__195056 = cljs.core.find(self__.s,vp__$1);
lv__$1 = G__195055;
G__195046__$1 = G__195056;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return v;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_ext_run_cs$arity$3 = (function (this$,x,v){var self__ = this;
var this$__$1 = this;var x__$1 = cljs.core.logic._root_var(this$__$1,x);var xs = (cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,cljs.core.logic._root_var(this$__$1,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1], null));var s__$1 = (cljs.core.truth_(self__.oc)?cljs.core.logic._ext(this$__$1,x__$1,v):cljs.core.logic._ext_no_check(this$__$1,x__$1,v));if(cljs.core.truth_(s__$1))
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(xs,self__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,xs,self__.cs,cljs.core.constant$keyword$107)).call(null,s__$1);
} else
{return null;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_queue$arity$2 = (function (this$,c){var self__ = this;
var this$__$1 = this;var id = cljs.core.logic.id(c);if(cljs.core.not((self__.cqs.cljs$core$IFn$_invoke$arity$1 ? self__.cqs.cljs$core$IFn$_invoke$arity$1(id) : self__.cqs.call(null,id))))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__9629__auto__ = self__.cq;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),c),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.cqs,id),self__.oc,self__._meta));
} else
{return this$__$1;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_update_var$arity$3 = (function (this$,x,v){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Substitutions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.s,x,v),self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.logic.Substitutions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer(self__.s,writer,opts);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return (cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2(this$__$1,f) : cljs.core.logic.choice.call(null,this$__$1,f));
});
cljs.core.logic.Substitutions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count(self__.s);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((this$__$1 === o)) || (((o instanceof cljs.core.logic.Substitutions)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.s,o.s)));
});
cljs.core.logic.Substitutions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,new_meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__._meta;
});
cljs.core.logic.__GT_Substitutions = (function __GT_Substitutions(s,vs,ts,cs,cq,cqs,oc,_meta){return (new cljs.core.logic.Substitutions(s,vs,ts,cs,cq,cqs,oc,_meta));
});
cljs.core.logic.make_s = (function() {
var make_s = null;
var make_s__0 = (function (){return make_s.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var make_s__1 = (function (m){return make_s.cljs$core$IFn$_invoke$arity$2(m,(cljs.core.logic.make_cs.cljs$core$IFn$_invoke$arity$0 ? cljs.core.logic.make_cs.cljs$core$IFn$_invoke$arity$0() : cljs.core.logic.make_cs.call(null)));
});
var make_s__2 = (function (m,cs){return (new cljs.core.logic.Substitutions(m,null,null,cs,null,cljs.core.PersistentHashSet.EMPTY,true,null));
});
make_s = function(m,cs){
switch(arguments.length){
case 0:
return make_s__0.call(this);
case 1:
return make_s__1.call(this,m);
case 2:
return make_s__2.call(this,m,cs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_s.cljs$core$IFn$_invoke$arity$0 = make_s__0;
make_s.cljs$core$IFn$_invoke$arity$1 = make_s__1;
make_s.cljs$core$IFn$_invoke$arity$2 = make_s__2;
return make_s;
})()
;
cljs.core.logic.tabled_s = (function() {
var tabled_s = null;
var tabled_s__0 = (function (){return tabled_s.cljs$core$IFn$_invoke$arity$1(false);
});
var tabled_s__1 = (function (oc){return tabled_s.cljs$core$IFn$_invoke$arity$2(oc,null);
});
var tabled_s__2 = (function (oc,meta){return (new cljs.core.logic.Substitutions(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),(cljs.core.logic.make_cs.cljs$core$IFn$_invoke$arity$0 ? cljs.core.logic.make_cs.cljs$core$IFn$_invoke$arity$0() : cljs.core.logic.make_cs.call(null)),null,cljs.core.PersistentHashSet.EMPTY,oc,meta));
});
tabled_s = function(oc,meta){
switch(arguments.length){
case 0:
return tabled_s__0.call(this);
case 1:
return tabled_s__1.call(this,oc);
case 2:
return tabled_s__2.call(this,oc,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tabled_s.cljs$core$IFn$_invoke$arity$0 = tabled_s__0;
tabled_s.cljs$core$IFn$_invoke$arity$1 = tabled_s__1;
tabled_s.cljs$core$IFn$_invoke$arity$2 = tabled_s__2;
return tabled_s;
})()
;
cljs.core.logic.empty_s = cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$0();
cljs.core.logic.subst_QMARK_ = (function subst_QMARK_(x){return (x instanceof cljs.core.logic.Substitutions);
});
cljs.core.logic.to_s = (function to_s(v){var s = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__195059){var vec__195060 = p__195059;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195060,0,null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195060,1,null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,v);return (new cljs.core.logic.Substitutions(s,null,null,(cljs.core.logic.make_cs.cljs$core$IFn$_invoke$arity$0 ? cljs.core.logic.make_cs.cljs$core$IFn$_invoke$arity$0() : cljs.core.logic.make_cs.call(null)),null,cljs.core.PersistentHashSet.EMPTY,true,null));
});

/**
* @constructor
*/
cljs.core.logic.LVar = (function (id,unique,name,oname,__hash,meta){
this.id = id;
this.unique = unique;
this.name = name;
this.oname = oname;
this.__hash = __hash;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
})
cljs.core.logic.LVar.cljs$lang$type = true;
cljs.core.logic.LVar.cljs$lang$ctorStr = "cljs.core.logic/LVar";
cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/LVar");
});
cljs.core.logic.LVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.__hash;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,u,v__$1);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var rf = cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(s));if(cljs.core.fn_QMARK_(rf))
{return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(v__$1,s) : rf.call(null,v__$1,s));
} else
{if(cljs.core.truth_(rf))
{return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,s.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(null));
} else
{return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,v__$1.oname);
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v))))
{var repoint = (cljs.core.truth_(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(u__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v], null):(cljs.core.truth_(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,u__$1], null):((cljs.core.constant$keyword$76)?null:null)));if(cljs.core.truth_(repoint))
{var vec__195061 = repoint;var root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195061,0,null);var other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195061,1,null);var s__$1 = (new cljs.core.logic.Substitutions(s.s,s.vs,s.ts,cljs.core.logic._migrate(s.cs,other,root),s.cq,s.cqs,s.oc,s._meta));var s__$2 = (cljs.core.truth_(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(other)))?(cljs.core.logic.merge_with_root.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.merge_with_root.cljs$core$IFn$_invoke$arity$3(s__$1,other,root) : cljs.core.logic.merge_with_root.call(null,s__$1,other,root)):s__$1);if(cljs.core.truth_(s__$2))
{return cljs.core.logic._ext_no_check(s__$2,other,root);
} else
{return null;
}
} else
{return cljs.core.logic._ext_no_check(s,u__$1,v);
}
} else
{if(cljs.core.truth_((cljs.core.logic.non_storable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.non_storable_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.non_storable_QMARK_.call(null,v))))
{throw (new Error([cljs.core.str(v),cljs.core.str(" is non-storable")].join('')));
} else
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.logic.not_found))
{if(cljs.core.truth_((cljs.core.logic.tree_term_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.tree_term_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.tree_term_QMARK_.call(null,v))))
{return cljs.core.logic._ext(s,u__$1,v);
} else
{if(cljs.core.truth_(cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(u__$1))))
{return cljs.core.logic._ext_no_check(s,u__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.logic._root_val(s,u__$1),cljs.core.constant$keyword$101,v));
} else
{return cljs.core.logic._ext_no_check(s,u__$1,v);
}
}
} else
{if(cljs.core.constant$keyword$76)
{return cljs.core.logic._ext_no_check(s,u__$1,v);
} else
{return null;
}
}
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write(writer,[cljs.core.str("<lvar:"),cljs.core.str(self__.name),cljs.core.str(">")].join(''));
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s.cljs$core$logic$ISubstitutions$_walk$arity$2(null,v__$1),x);
});
cljs.core.logic.LVar.prototype.toString = (function (){var self__ = this;
var _ = this;return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.logic.this$], 0));
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IBuildTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IBuildTerm$_build_term$arity$2 = (function (u,s){var self__ = this;
var u__$1 = this;var m = s.s;var cs = s.cs;var lv = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"ignore","ignore",1464039307,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"ignore","ignore",1464039307,null)));if(cljs.core.contains_QMARK_(m,u__$1))
{return s;
} else
{return cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,u__$1,lv),cs);
}
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return v__$1;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var and__9617__auto__ = (o instanceof cljs.core.logic.LVar);if(and__9617__auto__)
{if(cljs.core.truth_(self__.unique))
{return (self__.id === o.id);
} else
{return (self__.name === o.name);
}
} else
{return and__9617__auto__;
}
});
cljs.core.logic.LVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LVar(self__.id,self__.unique,self__.name,self__.oname,self__.__hash,new_meta));
});
cljs.core.logic.LVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,v__$1,u);
});
cljs.core.logic.__GT_LVar = (function __GT_LVar(id,unique,name,oname,__hash,meta){return (new cljs.core.logic.LVar(id,unique,name,oname,__hash,meta));
});
cljs.core.logic.lvar_sym_counter = [0];
cljs.core.logic.next_id = (function next_id(){return [cljs.core.str("_"),cljs.core.str((cljs.core.logic.lvar_sym_counter[0] = ((cljs.core.logic.lvar_sym_counter[0]) + 1)))].join('');
});
cljs.core.logic.lvar = (function() {
var lvar = null;
var lvar__0 = (function (){return lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"gen","gen",-1640429303,null));
});
var lvar__1 = (function (name){return lvar.cljs$core$IFn$_invoke$arity$2(name,true);
});
var lvar__2 = (function (name,unique){var oname = name;var id = (cljs.core.truth_(unique)?cljs.core.logic.next_id():name);var name__$1 = (cljs.core.truth_(unique)?[cljs.core.str(name),cljs.core.str(id)].join(''):[cljs.core.str(name)].join(''));return (new cljs.core.logic.LVar(id,unique,name__$1,oname,cljs.core.hash(name__$1),null));
});
lvar = function(name,unique){
switch(arguments.length){
case 0:
return lvar__0.call(this);
case 1:
return lvar__1.call(this,name);
case 2:
return lvar__2.call(this,name,unique);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lvar.cljs$core$IFn$_invoke$arity$0 = lvar__0;
lvar.cljs$core$IFn$_invoke$arity$1 = lvar__1;
lvar.cljs$core$IFn$_invoke$arity$2 = lvar__2;
return lvar;
})()
;
cljs.core.logic.lvar_QMARK_ = (function lvar_QMARK_(x){return (x instanceof cljs.core.logic.LVar);
});
cljs.core.logic.lvars = (function lvars(n){return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,cljs.core.logic.lvar);
});
cljs.core.logic.ITreeTerm = (function (){var obj195063 = {};return obj195063;
})();
cljs.core.logic.LConsSeq = (function (){var obj195065 = {};return obj195065;
})();
cljs.core.logic._lfirst = (function _lfirst(this$){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1(this$);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._lfirst[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._lfirst["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("LConsSeq.-lfirst",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic._lnext = (function _lnext(this$){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$LConsSeq$_lnext$arity$1;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$LConsSeq$_lnext$arity$1(this$);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._lnext[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._lnext["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("LConsSeq.-lnext",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.LConsPrint = (function (){var obj195067 = {};return obj195067;
})();
cljs.core.logic._pr_seq = (function _pr_seq(lcons){if((function (){var and__9617__auto__ = lcons;if(and__9617__auto__)
{return lcons.cljs$core$logic$LConsPrint$_pr_seq$arity$1;
} else
{return and__9617__auto__;
}
})())
{return lcons.cljs$core$logic$LConsPrint$_pr_seq$arity$1(lcons);
} else
{var x__10232__auto__ = (((lcons == null))?null:lcons);return (function (){var or__9629__auto__ = (cljs.core.logic._pr_seq[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._pr_seq["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("LConsPrint.-pr-seq",lcons);
}
}
})().call(null,lcons);
}
});
cljs.core.logic.lcons_pr_seq = (function lcons_pr_seq(x){if(cljs.core.truth_((cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.logic.lcons_QMARK_.call(null,x))))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(cljs.core.logic._lfirst(x),lcons_pr_seq(cljs.core.logic._lnext(x)));
}),null,null));
} else
{return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),new cljs.core.Symbol(null,".",".",-1640531481,null));
}
});

/**
* @constructor
*/
cljs.core.logic.LCons = (function (a,d,cache,meta){
this.a = a;
this.d = d;
this.cache = cache;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
})
cljs.core.logic.LCons.cljs$lang$type = true;
cljs.core.logic.LCons.cljs$lang$ctorStr = "cljs.core.logic/LCons";
cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/LCons");
});
cljs.core.logic.LCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cache === -1))
{return this$__$1.cache = (((31 | 0) * cljs.core.hash(self__.d)) + cljs.core.hash(self__.a));
} else
{return self__.cache;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._unify_with_lseq(u,v__$1,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.truth_((cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(v__$2) : cljs.core.logic.lcons_QMARK_.call(null,v__$2))))
{{
var G__195068 = cljs.core.logic._lnext(v__$2);
var G__195069 = cljs.core.logic._reify_STAR_(s__$1,cljs.core.logic._lfirst(v__$2));
v__$2 = G__195068;
s__$1 = G__195069;
continue;
}
} else
{return cljs.core.logic._reify_STAR_(s__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.sequential_QMARK_(v))
{return cljs.core.logic._unify_with_seq(u__$1,v,s);
} else
{if(cljs.core.truth_((cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lcons_QMARK_.call(null,v))))
{return cljs.core.logic._unify_with_lseq(v,u__$1,s);
} else
{if(cljs.core.constant$keyword$76)
{return null;
} else
{return null;
}
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return null;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return null;
});
cljs.core.logic.LCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.logic.lcons_pr_seq(x__$1));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$ITreeTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var x__$1 = x;var s__$1 = s;while(true){
if(cljs.core.truth_((cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(v__$2) : cljs.core.logic.lcons_QMARK_.call(null,v__$2))))
{var or__9629__auto__ = s__$1.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(null,x__$1,cljs.core.logic._lfirst(v__$2));if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{{
var G__195070 = cljs.core.logic._lnext(v__$2);
var G__195071 = x__$1;
var G__195072 = s__$1;
v__$2 = G__195070;
x__$1 = G__195071;
s__$1 = G__195072;
continue;
}
}
} else
{return s__$1.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(null,x__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.toString = (function (){var self__ = this;
var this$ = this;if(cljs.core.truth_((cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.d) : cljs.core.logic.lcons_QMARK_.call(null,self__.d))))
{return [cljs.core.str("("),cljs.core.str(self__.a),cljs.core.str(" "),cljs.core.str(cljs.core.logic.lcons_pr_seq(self__.d)),cljs.core.str(")")].join('');
} else
{if(cljs.core.constant$keyword$76)
{return [cljs.core.str("("),cljs.core.str(self__.a),cljs.core.str(" . "),cljs.core.str(self__.d),cljs.core.str(")")].join('');
} else
{return null;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IBuildTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IBuildTerm$_build_term$arity$2 = (function (u,s){var self__ = this;
var u__$1 = this;var u__$2 = u__$1;var s__$1 = s;while(true){
if(cljs.core.truth_((cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(u__$2) : cljs.core.logic.lcons_QMARK_.call(null,u__$2))))
{{
var G__195073 = cljs.core.logic._lnext(u__$2);
var G__195074 = (cljs.core.logic.build.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.build.cljs$core$IFn$_invoke$arity$2(s__$1,cljs.core.logic._lfirst(u__$2)) : cljs.core.logic.build.call(null,s__$1,cljs.core.logic._lfirst(u__$2)));
u__$2 = G__195073;
s__$1 = G__195074;
continue;
}
} else
{return (cljs.core.logic.build.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.build.cljs$core$IFn$_invoke$arity$2(s__$1,u__$2) : cljs.core.logic.build.call(null,s__$1,u__$2));
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return (cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(cljs.core.logic._walk_STAR_(s,cljs.core.logic._lfirst(v__$1)),cljs.core.logic._walk_STAR_(s,cljs.core.logic._lnext(v__$1))) : cljs.core.logic.lcons.call(null,cljs.core.logic._walk_STAR_(s,cljs.core.logic._lfirst(v__$1)),cljs.core.logic._walk_STAR_(s,cljs.core.logic._lnext(v__$1))));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return null;
});
cljs.core.logic.LCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var or__9629__auto__ = (this$__$1 === o);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var and__9617__auto__ = (o instanceof cljs.core.logic.LCons);if(and__9617__auto__)
{var me = this$__$1;var you = o;while(true){
if((me == null))
{return (you == null);
} else
{if(cljs.core.logic.lvar_QMARK_(me))
{return true;
} else
{if(cljs.core.logic.lvar_QMARK_(you))
{return true;
} else
{if(cljs.core.truth_((function (){var and__9617__auto____$1 = (cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(me) : cljs.core.logic.lcons_QMARK_.call(null,me));if(cljs.core.truth_(and__9617__auto____$1))
{return (cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(you) : cljs.core.logic.lcons_QMARK_.call(null,you));
} else
{return and__9617__auto____$1;
}
})()))
{var mef = cljs.core.logic._lfirst(me);var youf = cljs.core.logic._lfirst(you);var and__9617__auto____$1 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mef,youf)) || (cljs.core.logic.lvar_QMARK_(mef)) || (cljs.core.logic.lvar_QMARK_(youf));if(and__9617__auto____$1)
{{
var G__195075 = cljs.core.logic._lnext(me);
var G__195076 = cljs.core.logic._lnext(you);
me = G__195075;
you = G__195076;
continue;
}
} else
{return and__9617__auto____$1;
}
} else
{if(cljs.core.constant$keyword$76)
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(me,you);
} else
{return null;
}
}
}
}
}
break;
}
} else
{return and__9617__auto__;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LCons(self__.a,self__.d,self__.cache,new_meta));
});
cljs.core.logic.LCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lfirst$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.a;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lnext$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.d;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;var u__$1 = u;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.logic.lvar_QMARK_(u__$1))
{return s__$1.cljs$core$logic$ISubstitutions$_unify$arity$3(null,u__$1,v__$2);
} else
{if(cljs.core.logic.lvar_QMARK_(v__$2))
{return s__$1.cljs$core$logic$ISubstitutions$_unify$arity$3(null,v__$2,u__$1);
} else
{if(cljs.core.truth_((function (){var and__9617__auto__ = (cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(u__$1) : cljs.core.logic.lcons_QMARK_.call(null,u__$1));if(cljs.core.truth_(and__9617__auto__))
{return (cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lcons_QMARK_.cljs$core$IFn$_invoke$arity$1(v__$2) : cljs.core.logic.lcons_QMARK_.call(null,v__$2));
} else
{return and__9617__auto__;
}
})()))
{var s__$2 = s__$1.cljs$core$logic$ISubstitutions$_unify$arity$3(null,u__$1.cljs$core$logic$LConsSeq$_lfirst$arity$1(null),v__$2.cljs$core$logic$LConsSeq$_lfirst$arity$1(null));if(cljs.core.not((cljs.core.logic.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(s__$2) : cljs.core.logic.failed_QMARK_.call(null,s__$2))))
{{
var G__195077 = u__$1.cljs$core$logic$LConsSeq$_lnext$arity$1(null);
var G__195078 = v__$2.cljs$core$logic$LConsSeq$_lnext$arity$1(null);
var G__195079 = s__$2;
u__$1 = G__195077;
v__$2 = G__195078;
s__$1 = G__195079;
continue;
}
} else
{return s__$2;
}
} else
{if(cljs.core.constant$keyword$76)
{return s__$1.cljs$core$logic$ISubstitutions$_unify$arity$3(null,u__$1,v__$2);
} else
{return null;
}
}
}
}
break;
}
});
cljs.core.logic.__GT_LCons = (function __GT_LCons(a,d,cache,meta){return (new cljs.core.logic.LCons(a,d,cache,meta));
});
/**
* Constructs a sequence a with an improper tail d if d is a logic variable.
*/
cljs.core.logic.lcons = (function lcons(a,d){if((cljs.core.coll_QMARK_(d)) || ((d == null)))
{return cljs.core.cons(a,cljs.core.seq(d));
} else
{return (new cljs.core.logic.LCons(a,d,-1,null));
}
});
cljs.core.logic.lcons_QMARK_ = (function lcons_QMARK_(x){return (x instanceof cljs.core.logic.LCons);
});
cljs.core.logic.tree_term_QMARK_ = (function tree_term_QMARK_(x){var or__9629__auto__ = cljs.core.coll_QMARK_(x);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var G__195083 = x;if(G__195083)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto____$1 = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto____$1))
{return or__9629__auto____$1;
} else
{return G__195083.cljs$core$logic$ITreeTerm$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
}
});
cljs.core.logic.unify_with_pmap_STAR_ = (function unify_with_pmap_STAR_(u,v,s){if(cljs.core.map_QMARK_(v))
{var ks = cljs.core.keys(u);var s__$1 = s;while(true){
if(cljs.core.seq(ks))
{var kf = cljs.core.first(ks);var vf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,kf,cljs.core.logic.not_found);if((vf === cljs.core.logic.not_found))
{return null;
} else
{var uf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(u,kf);var vf__$1 = cljs.core.logic._walk(s__$1,vf);if(cljs.core.logic.lvar_QMARK_(vf__$1))
{{
var G__195084 = cljs.core.next(ks);
var G__195085 = (cljs.core.logic.featurec.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.featurec.cljs$core$IFn$_invoke$arity$2(vf__$1,uf) : cljs.core.logic.featurec.call(null,vf__$1,uf)).call(null,s__$1);
ks = G__195084;
s__$1 = G__195085;
continue;
}
} else
{if(cljs.core.map_QMARK_(uf))
{var temp__4096__auto__ = cljs.core.logic._unify(s__$1,(cljs.core.logic.partial_map.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.partial_map.cljs$core$IFn$_invoke$arity$1(uf) : cljs.core.logic.partial_map.call(null,uf)),vf__$1);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__195086 = cljs.core.next(ks);
var G__195087 = s__$2;
ks = G__195086;
s__$1 = G__195087;
continue;
}
} else
{return null;
}
} else
{var temp__4096__auto__ = cljs.core.logic._unify(s__$1,uf,vf__$1);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__195088 = cljs.core.next(ks);
var G__195089 = s__$2;
ks = G__195088;
s__$1 = G__195089;
continue;
}
} else
{return null;
}
}
}
}
} else
{return s__$1;
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return cljs.core.logic._unify_with_map(v,u__$1,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return cljs.core.logic._unify_with_map(v,u__$1,s);
});
(cljs.core.logic.IUnifyTerms["_"] = true);
(cljs.core.logic._unify_terms["_"] = (function (u,v,s){if(cljs.core.sequential_QMARK_(u))
{return cljs.core.logic._unify_with_seq(v,u,s);
} else
{if(cljs.core.logic.record_QMARK_(u))
{return cljs.core.logic.unify_with_pmap_STAR_(v,u,s);
} else
{if(cljs.core.constant$keyword$76)
{return cljs.core.logic._unify_with_object(v,u,s);
} else
{return null;
}
}
}
}));
(cljs.core.logic.IUnifyTerms["null"] = true);
(cljs.core.logic._unify_terms["null"] = (function (u,v,s){return cljs.core.logic._unify_with_nil(v,u,s);
}));
(cljs.core.logic.IUnifyWithNil["_"] = true);
(cljs.core.logic._unify_with_nil["_"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithNil["null"] = true);
(cljs.core.logic._unify_with_nil["null"] = (function (v,u,s){return s;
}));
(cljs.core.logic.IUnifyWithObject["_"] = true);
(cljs.core.logic._unify_with_object["_"] = (function (v,u,s){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(u,v))
{return s;
} else
{return null;
}
}));
(cljs.core.logic.IUnifyWithObject["null"] = true);
(cljs.core.logic._unify_with_object["null"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithLVar["_"] = true);
(cljs.core.logic._unify_with_lvar["_"] = (function (v,u,s){return s.cljs$core$logic$ISubstitutions$_ext$arity$3(null,u,v);
}));
(cljs.core.logic.IUnifyWithLVar["null"] = true);
(cljs.core.logic._unify_with_lvar["null"] = (function (v,u,s){return s.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(null,u,v);
}));
(cljs.core.logic.IUnifyWithLSeq["_"] = true);
(cljs.core.logic._unify_with_lseq["_"] = (function (v,u,s){if(cljs.core.sequential_QMARK_(v))
{var u__$1 = u;var v__$1 = cljs.core.seq(v);var s__$1 = s;while(true){
if(cljs.core.truth_(v__$1))
{if(cljs.core.logic.lcons_QMARK_(u__$1))
{var s__$2 = s__$1.cljs$core$logic$ISubstitutions$_unify$arity$3(null,u__$1.cljs$core$logic$LConsSeq$_lfirst$arity$1(null),cljs.core.first(v__$1));if(cljs.core.not((cljs.core.logic.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(s__$2) : cljs.core.logic.failed_QMARK_.call(null,s__$2))))
{{
var G__195090 = u__$1.cljs$core$logic$LConsSeq$_lnext$arity$1(null);
var G__195091 = cljs.core.next(v__$1);
var G__195092 = s__$2;
u__$1 = G__195090;
v__$1 = G__195091;
s__$1 = G__195092;
continue;
}
} else
{return s__$2;
}
} else
{return s__$1.cljs$core$logic$ISubstitutions$_unify$arity$3(null,u__$1,v__$1);
}
} else
{if(cljs.core.logic.lvar_QMARK_(u__$1))
{return s__$1.cljs$core$logic$ISubstitutions$_unify$arity$3(null,u__$1,cljs.core.List.EMPTY);
} else
{return null;
}
}
break;
}
} else
{return null;
}
}));
(cljs.core.logic.IUnifyWithLSeq["null"] = true);
(cljs.core.logic._unify_with_lseq["null"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithSequential["_"] = true);
(cljs.core.logic._unify_with_seq["_"] = (function (v,u,s){if(cljs.core.sequential_QMARK_(v))
{var u__$1 = cljs.core.seq(u);var v__$1 = cljs.core.seq(v);var s__$1 = s;while(true){
if(!((u__$1 == null)))
{if(!((v__$1 == null)))
{var s__$2 = s__$1.cljs$core$logic$ISubstitutions$_unify$arity$3(null,cljs.core.first(u__$1),cljs.core.first(v__$1));if(cljs.core.not((cljs.core.logic.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(s__$2) : cljs.core.logic.failed_QMARK_.call(null,s__$2))))
{{
var G__195093 = cljs.core.next(u__$1);
var G__195094 = cljs.core.next(v__$1);
var G__195095 = s__$2;
u__$1 = G__195093;
v__$1 = G__195094;
s__$1 = G__195095;
continue;
}
} else
{return s__$2;
}
} else
{return null;
}
} else
{if(!((v__$1 == null)))
{return null;
} else
{return s__$1;
}
}
break;
}
} else
{return null;
}
}));
(cljs.core.logic.IUnifyWithSequential["null"] = true);
(cljs.core.logic._unify_with_seq["null"] = (function (v,u,s){return null;
}));
cljs.core.logic.unify_with_map_STAR_ = (function unify_with_map_STAR_(v,u,s){if(!((cljs.core.count(u) === cljs.core.count(v))))
{return null;
} else
{var ks = cljs.core.seq(cljs.core.keys(u));var s__$1 = s;while(true){
if(cljs.core.truth_(ks))
{var kf = cljs.core.first(ks);var vf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,kf,cljs.core.logic.not_found);if((vf === cljs.core.logic.not_found))
{return null;
} else
{var s__$2 = cljs.core.logic._unify(s__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(u,kf),vf);if(cljs.core.not((cljs.core.logic.failed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.failed_QMARK_.cljs$core$IFn$_invoke$arity$1(s__$2) : cljs.core.logic.failed_QMARK_.call(null,s__$2))))
{{
var G__195096 = cljs.core.next(ks);
var G__195097 = s__$2;
ks = G__195096;
s__$1 = G__195097;
continue;
}
} else
{return null;
}
}
} else
{return s__$1;
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic.unify_with_map_STAR_(v__$1,u,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic.unify_with_map_STAR_(v__$1,u,s);
});
(cljs.core.logic.IUnifyWithMap["_"] = true);
(cljs.core.logic._unify_with_map["_"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithMap["null"] = true);
(cljs.core.logic._unify_with_map["null"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IReifyTerm["_"] = true);
(cljs.core.logic._reify_term["_"] = (function (v,s){if(cljs.core.coll_QMARK_(v))
{var v__$1 = v;var s__$1 = s;while(true){
if(cljs.core.seq(v__$1))
{{
var G__195098 = cljs.core.next(v__$1);
var G__195099 = s__$1.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(null,cljs.core.first(v__$1));
v__$1 = G__195098;
s__$1 = G__195099;
continue;
}
} else
{return s__$1;
}
break;
}
} else
{return s;
}
}));
(cljs.core.logic.IReifyTerm["null"] = true);
(cljs.core.logic._reify_term["null"] = (function (v,s){return s;
}));
cljs.core.logic.walk_term_record = (function walk_term_record(v,f){return cljs.core.with_meta((function (){var v__$1 = cljs.core.seq(v);var r = (cljs.core.logic._uninitialized.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic._uninitialized.cljs$core$IFn$_invoke$arity$1(v__$1) : cljs.core.logic._uninitialized.call(null,v__$1));while(true){
if(cljs.core.truth_(v__$1))
{var vec__195101 = cljs.core.first(v__$1);var vfk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195101,0,null);var vfv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195101,1,null);{
var G__195102 = cljs.core.next(v__$1);
var G__195103 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,vfk,cljs.core.logic._walk_STAR_(cljs.core.logic.s,vfv));
v__$1 = G__195102;
r = G__195103;
continue;
}
} else
{return r;
}
break;
}
})(),cljs.core.meta(v));
});
cljs.core.logic.walk_term_map_STAR_ = (function walk_term_map_STAR_(v,s){return cljs.core.with_meta((function (){var v__$1 = cljs.core.seq(v);var r = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if(cljs.core.truth_(v__$1))
{var vec__195105 = cljs.core.first(v__$1);var vfk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195105,0,null);var vfv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195105,1,null);{
var G__195106 = cljs.core.next(v__$1);
var G__195107 = r.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,vfk,s.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,vfv));
v__$1 = G__195106;
r = G__195107;
continue;
}
} else
{return cljs.core.persistent_BANG_(r);
}
break;
}
})(),cljs.core.meta(v));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var v__$1 = this;return cljs.core.with_meta((function (){var v__$2 = cljs.core.seq(v__$1);var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);while(true){
if(cljs.core.truth_(v__$2))
{{
var G__195109 = cljs.core.next(v__$2);
var G__195110 = r.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,s.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,cljs.core.first(v__$2)));
v__$2 = G__195109;
r = G__195110;
continue;
}
} else
{return cljs.core.persistent_BANG_(r);
}
break;
}
})(),cljs.core.meta(v__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_(v__$1,s);
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_(v__$1,s);
});
(cljs.core.logic.IWalkTerm["_"] = true);
(cljs.core.logic._walk_term["_"] = (function (v,s){if(cljs.core.sequential_QMARK_(v))
{return cljs.core.with_meta(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__195108_SHARP_){return s.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(null,p1__195108_SHARP_);
}),v),cljs.core.meta(v));
} else
{if(cljs.core.logic.record_QMARK_(v))
{return cljs.core.logic.walk_term_record(v,s);
} else
{if(cljs.core.constant$keyword$76)
{return v;
} else
{return null;
}
}
}
}));
(cljs.core.logic.IWalkTerm["null"] = true);
(cljs.core.logic._walk_term["null"] = (function (v,s){return null;
}));
(cljs.core.logic.IOccursCheckTerm["_"] = true);
(cljs.core.logic._occurs_check_term["_"] = (function (v,x,s){if(cljs.core.sequential_QMARK_(v))
{var v__$1 = cljs.core.seq(v);var x__$1 = x;var s__$1 = s;while(true){
if(cljs.core.truth_(v__$1))
{var or__9629__auto__ = s__$1.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(null,x__$1,cljs.core.first(v__$1));if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{{
var G__195111 = cljs.core.next(v__$1);
var G__195112 = x__$1;
var G__195113 = s__$1;
v__$1 = G__195111;
x__$1 = G__195112;
s__$1 = G__195113;
continue;
}
}
} else
{return false;
}
break;
}
} else
{return false;
}
}));
(cljs.core.logic.IOccursCheckTerm["null"] = true);
(cljs.core.logic._occurs_check_term["null"] = (function (v,x,s){return false;
}));
(cljs.core.logic.IBuildTerm["_"] = true);
(cljs.core.logic._build_term["_"] = (function (u,s){if(cljs.core.coll_QMARK_(u))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.logic.build,s,u);
} else
{return s;
}
}));
(cljs.core.logic.IBuildTerm["null"] = true);
(cljs.core.logic._build_term["null"] = (function (u,s){return s;
}));
cljs.core.logic.mplus = (function mplus(a,f){if((function (){var G__195115 = a;if(G__195115)
{var bit__10255__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10255__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195115.cljs$core$logic$IMPlus$;
}
})()))
{return true;
} else
{if((!G__195115.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.logic.IMPlus,G__195115);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.logic.IMPlus,G__195115);
}
})())
{return a.cljs$core$logic$IMPlus$_mplus$arity$2(null,f);
} else
{return (new cljs.core.logic.Choice(a,f));
}
});
cljs.core.logic.take_STAR_ = (function take_STAR_(x){if((function (){var G__195117 = x;if(G__195117)
{var bit__10255__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10255__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195117.cljs$core$logic$ITake$;
}
})()))
{return true;
} else
{if((!G__195117.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.logic.ITake,G__195117);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.logic.ITake,G__195117);
}
})())
{return x.cljs$core$logic$ITake$_take_STAR_$arity$1(null);
} else
{return x;
}
});

/**
* @constructor
*/
cljs.core.logic.Choice = (function (a,f){
this.a = a;
this.f = f;
})
cljs.core.logic.Choice.cljs$lang$type = true;
cljs.core.logic.Choice.cljs$lang$ctorStr = "cljs.core.logic/Choice";
cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/Choice");
});
cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(self__.a,(new cljs.core.LazySeq(null,(function (){return cljs.core.logic.take_STAR_(self__.f);
}),null,null)));
}),null,null));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Choice(self__.a,(new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus((fp.cljs$core$IFn$_invoke$arity$0 ? fp.cljs$core$IFn$_invoke$arity$0() : fp.call(null)),self__.f);
})))));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return cljs.core.logic.mplus((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(self__.a) : g.call(null,self__.a)),(new cljs.core.logic.Inc((function (){return self__.f.cljs$core$logic$IBind$_bind$arity$2(null,g);
}))));
});
cljs.core.logic.__GT_Choice = (function __GT_Choice(a,f){return (new cljs.core.logic.Choice(a,f));
});
cljs.core.logic.choice = (function choice(a,f){return (new cljs.core.logic.Choice(a,f));
});

/**
* @constructor
*/
cljs.core.logic.Inc = (function (f){
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.logic.Inc.cljs$lang$type = true;
cljs.core.logic.Inc.cljs$lang$ctorStr = "cljs.core.logic/Inc";
cljs.core.logic.Inc.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/Inc");
});
cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,(function (){return cljs.core.logic.take_STAR_((self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null)));
}),null,null));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus((fp.cljs$core$IFn$_invoke$arity$0 ? fp.cljs$core$IFn$_invoke$arity$0() : fp.call(null)),this$__$1);
})));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Inc((function (){var a = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));return a.cljs$core$logic$IBind$_bind$arity$2(null,g);
})));
});
cljs.core.logic.Inc.prototype.call = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
});
cljs.core.logic.Inc.prototype.apply = (function (self__,args195118){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args195118)));
});
cljs.core.logic.Inc.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
});
cljs.core.logic.__GT_Inc = (function __GT_Inc(f){return (new cljs.core.logic.Inc(f));
});
(cljs.core.logic.ITake["null"] = true);
(cljs.core.logic._take_STAR_["null"] = (function (_){return cljs.core.List.EMPTY;
}));
(cljs.core.logic.IMPlus["null"] = true);
(cljs.core.logic._mplus["null"] = (function (_,f){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
(cljs.core.logic.IBind["null"] = true);
(cljs.core.logic._bind["null"] = (function (_,g){return cljs.core.logic.this$;
}));
cljs.core.logic.failed_QMARK_ = cljs.core.nil_QMARK_;
(cljs.core.logic.ITake["function"] = true);
(cljs.core.logic._take_STAR_["function"] = (function (this$){return (new cljs.core.LazySeq(null,(function (){return cljs.core.logic.take_STAR_((this$.cljs$core$IFn$_invoke$arity$0 ? this$.cljs$core$IFn$_invoke$arity$0() : this$.call(null)));
}),null,null));
}));
(cljs.core.logic.ITake["null"] = true);
(cljs.core.logic._take_STAR_["null"] = (function (_){return cljs.core.List.EMPTY;
}));
(cljs.core.logic.IMPlus["function"] = true);
(cljs.core.logic._mplus["function"] = (function (this$,f){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),this$);
})));
}));
(cljs.core.logic.IMPlus["null"] = true);
(cljs.core.logic._mplus["null"] = (function (_,f){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
(cljs.core.logic.IBind["function"] = true);
(cljs.core.logic._bind["function"] = (function (this$,g){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind((this$.cljs$core$IFn$_invoke$arity$0 ? this$.cljs$core$IFn$_invoke$arity$0() : this$.call(null)),g);
})));
}));
(cljs.core.logic.IBind["null"] = true);
(cljs.core.logic._bind["null"] = (function (_,g){return null;
}));
/**
* A goal that always succeeds.
*/
cljs.core.logic.succeed = (function succeed(a){return a;
});
/**
* A goal that always fails.
*/
cljs.core.logic.fail = (function fail(a){return null;
});
cljs.core.logic.s_SHARP_ = cljs.core.logic.succeed;
cljs.core.logic.u_SHARP_ = cljs.core.logic.fail;
cljs.core.logic.IIfA = (function (){var obj195120 = {};return obj195120;
})();
cljs.core.logic._ifa = (function _ifa(b,gs,c){if((function (){var and__9617__auto__ = b;if(and__9617__auto__)
{return b.cljs$core$logic$IIfA$_ifa$arity$3;
} else
{return and__9617__auto__;
}
})())
{return b.cljs$core$logic$IIfA$_ifa$arity$3(b,gs,c);
} else
{var x__10232__auto__ = (((b == null))?null:b);return (function (){var or__9629__auto__ = (cljs.core.logic._ifa[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._ifa["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IIfA.-ifa",b);
}
}
})().call(null,b,gs,c);
}
});
cljs.core.logic.IIfU = (function (){var obj195122 = {};return obj195122;
})();
cljs.core.logic._ifu = (function _ifu(b,gs,c){if((function (){var and__9617__auto__ = b;if(and__9617__auto__)
{return b.cljs$core$logic$IIfU$_ifu$arity$3;
} else
{return and__9617__auto__;
}
})())
{return b.cljs$core$logic$IIfU$_ifu$arity$3(b,gs,c);
} else
{var x__10232__auto__ = (((b == null))?null:b);return (function (){var or__9629__auto__ = (cljs.core.logic._ifu[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._ifu["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IIfU.-ifu",b);
}
}
})().call(null,b,gs,c);
}
});
(cljs.core.logic.IIfA["function"] = true);
(cljs.core.logic._ifa["function"] = (function (b,gs,c){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._ifa((b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null)),gs,c);
})));
}));
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return (new cljs.core.logic.Inc((function (){return cljs.core.logic._ifa((b__$1.cljs$core$IFn$_invoke$arity$0 ? b__$1.cljs$core$IFn$_invoke$arity$0() : b__$1.call(null)),gs,c);
})));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.logic._bind,b__$1,gs);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__195124 = gs;var vec__195125 = G__195124;var g0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195125,0,null);var goals = cljs.core.nthnext(vec__195125,1);var b__$3 = b__$2;var G__195124__$1 = G__195124;while(true){
var b__$4 = b__$3;var vec__195126 = G__195124__$1;var g0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195126,0,null);var goals__$1 = cljs.core.nthnext(vec__195126,1);if(cljs.core.truth_(g0__$1))
{var temp__4098__auto__ = (g0__$1.cljs$core$IFn$_invoke$arity$1 ? g0__$1.cljs$core$IFn$_invoke$arity$1(b__$4) : g0__$1.call(null,b__$4));if(cljs.core.truth_(temp__4098__auto__))
{var b__$5 = temp__4098__auto__;{
var G__195127 = b__$5;
var G__195128 = goals__$1;
b__$3 = G__195127;
G__195124__$1 = G__195128;
continue;
}
} else
{return null;
}
} else
{return b__$4;
}
break;
}
});
(cljs.core.logic.IIfA["null"] = true);
(cljs.core.logic._ifa["null"] = (function (b,gs,c){if(cljs.core.truth_(c))
{return cljs.core.force(c);
} else
{return null;
}
}));
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.logic._bind,b__$1.a,gs);
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return (new cljs.core.logic.Inc((function (){return cljs.core.logic._ifu((b__$1.cljs$core$IFn$_invoke$arity$0 ? b__$1.cljs$core$IFn$_invoke$arity$0() : b__$1.call(null)),gs,c);
})));
});
(cljs.core.logic.IIfU["function"] = true);
(cljs.core.logic._ifu["function"] = (function (b,gs,c){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._ifu((b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null)),gs,c);
})));
}));
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__195130 = gs;var vec__195131 = G__195130;var g0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195131,0,null);var goals = cljs.core.nthnext(vec__195131,1);var b__$3 = b__$2;var G__195130__$1 = G__195130;while(true){
var b__$4 = b__$3;var vec__195132 = G__195130__$1;var g0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195132,0,null);var goals__$1 = cljs.core.nthnext(vec__195132,1);if(cljs.core.truth_(g0__$1))
{var temp__4098__auto__ = (g0__$1.cljs$core$IFn$_invoke$arity$1 ? g0__$1.cljs$core$IFn$_invoke$arity$1(b__$4) : g0__$1.call(null,b__$4));if(cljs.core.truth_(temp__4098__auto__))
{var b__$5 = temp__4098__auto__;{
var G__195133 = b__$5;
var G__195134 = goals__$1;
b__$3 = G__195133;
G__195130__$1 = G__195134;
continue;
}
} else
{return null;
}
} else
{return b__$4;
}
break;
}
});
(cljs.core.logic.IIfU["null"] = true);
(cljs.core.logic._ifu["null"] = (function (b,gs,c){if(cljs.core.truth_(c))
{return cljs.core.force(c);
} else
{return null;
}
}));
cljs.core.logic.onceo = (function onceo(g){return (function (a195136){return cljs.core.logic._ifu((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a195136) : g.call(null,a195136)),cljs.core.PersistentVector.EMPTY,null);
});
});
/**
* Copies a term u into v. Non-relational.
*/
cljs.core.logic.copy_term = (function copy_term(u,v){return (function (a195138){var u__$1 = cljs.core.logic._walk_STAR_(a195138,u);return (function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic._walk_STAR_((cljs.core.logic.build.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.build.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.empty_s,u__$1) : cljs.core.logic.build.call(null,cljs.core.logic.empty_s,u__$1)),u__$1),v);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
}));
})));
}).call(null,a195138);
});
});
/**
* A relation where a is nil
*/
cljs.core.logic.nilo = (function nilo(a){return (function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),null,a);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
});
});
/**
* A relation where a is the empty list
*/
cljs.core.logic.emptyo = (function emptyo(a){return (function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.List.EMPTY,a);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
* and d is the rest of l. If ground d must be bound to a proper tail.
*/
cljs.core.logic.conso = (function conso(a,d,l){return (function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.lcons(a,d),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
*/
cljs.core.logic.firsto = (function firsto(l,a){return (function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind(a__130492__auto__,cljs.core.logic.conso(a,d,l));
})));
});
});
/**
* A relation where l is a collection, such that d is the rest of l
*/
cljs.core.logic.resto = (function resto(l,d){return (function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-1640531430,null));return cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.lcons(a,d),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
}));
})));
});
});
/**
* A pseudo-relation that takes a coll and ensures that the goal g
* succeeds on every element of the collection.
*/
cljs.core.logic.everyg = (function everyg(g,coll){return (function (a){var coll__$1 = cljs.core.logic._walk(a,coll);return (function everyg_STAR_(g__$1,coll__$2){if(cljs.core.seq(coll__$2))
{return (function (a__130553__auto__){return cljs.core.logic._bind(cljs.core.logic._bind(a__130553__auto__,(g__$1.cljs$core$IFn$_invoke$arity$1 ? g__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll__$2)) : g__$1.call(null,cljs.core.first(coll__$2)))),everyg_STAR_(g__$1,cljs.core.next(coll__$2)));
});
} else
{return cljs.core.logic.s_SHARP_;
}
}).call(null,g,coll__$1).call(null,a);
});
});
/**
* A relation where l is a collection, such that l contains x.
*/
cljs.core.logic.membero = (function membero(x,l){return (function (a195140){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus(cljs.core.logic._bind(a195140,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var tail = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.lcons(x,tail),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a195140,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var head = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.lcons(head,tail),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),membero(x,tail));
})));
}));
}))));
})));
});
});
/**
* Like membero but uses to disequality further constraining
* the results. For example, if x and l are ground and x occurs
* multiple times in l, member1o will succeed only once.
*/
cljs.core.logic.member1o = (function member1o(x,l){return (function (a195144){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus(cljs.core.logic._bind(a195144,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var tail = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.lcons(x,tail),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a195144,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var head = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.lcons(head,tail),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130469__auto__){var cs__130470__auto__ = (cljs.core.logic.disunify.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.disunify.cljs$core$IFn$_invoke$arity$3(a__130469__auto__,x,head) : cljs.core.logic.disunify.call(null,a__130469__auto__,x,head));if(!((cs__130470__auto__ == null)))
{var p__130471__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(cs__130470__auto__);if(cljs.core.empty_QMARK_(p__130471__auto__))
{return null;
} else
{if(cljs.core.truth_(cljs.core.some((function (p__195145){var vec__195146 = p__195145;var u__130472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195146,0,null);var v__130473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195146,1,null);return (cljs.core.logic._unify(a__130469__auto__,u__130472__auto__,v__130473__auto__) == null);
}),p__130471__auto__)))
{return a__130469__auto__;
} else
{return (cljs.core.logic.cgoal.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.cgoal.cljs$core$IFn$_invoke$arity$1((cljs.core.logic._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1(p__130471__auto__) : cljs.core.logic._BANG__EQ_c.call(null,p__130471__auto__))) : cljs.core.logic.cgoal.call(null,(cljs.core.logic._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1(p__130471__auto__) : cljs.core.logic._BANG__EQ_c.call(null,p__130471__auto__)))).call(null,a__130469__auto__);
}
}
} else
{return a__130469__auto__;
}
})),member1o(x,tail));
})));
}));
}))));
})));
});
});
/**
* A relation where x, y, and z are proper collections,
* such that z is x appended to y
*/
cljs.core.logic.appendo = (function appendo(x,y,z){return (function (a195148){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus(cljs.core.logic._bind(a195148,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130492__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a__130492__auto____$1,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),y,z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
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
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a195148,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"a","a",-1640531430,null));var d = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.lcons(a,d),x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130492__auto____$1){return (new cljs.core.logic.Inc((function (){var r = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"r","r",-1640531413,null));return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto____$1,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.lcons(a,r),z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
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
/**
* A relation that will permute xl into the yl. May not
* terminate if xl is not ground.
*/
cljs.core.logic.permuteo = (function permuteo(xl,yl){return (function (a195150){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus(cljs.core.logic._bind(a195150,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.List.EMPTY,xl);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130492__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a__130492__auto____$1,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.List.EMPTY,yl);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
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
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a195150,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var xs = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"xs","xs",-1640527692,null));var x = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-1640531407,null));return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.lcons(x,xs),xl);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130492__auto____$1){return (new cljs.core.logic.Inc((function (){var ys = cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"ys","ys",-1640527661,null));return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto____$1,permuteo(xs,ys)),(cljs.core.logic.rembero.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.rembero.cljs$core$IFn$_invoke$arity$3(x,yl,ys) : cljs.core.logic.rembero.call(null,x,yl,ys)));
})));
}));
})));
}));
}))));
})));
});
});
cljs.core.logic.INonStorable = (function (){var obj195152 = {};return obj195152;
})();
cljs.core.logic.non_storable_QMARK_ = (function non_storable_QMARK_(x){var G__195154 = x;if(G__195154)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195154.cljs$core$logic$INonStorable$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.IUninitialized = (function (){var obj195156 = {};return obj195156;
})();
cljs.core.logic._uninitialized = (function _uninitialized(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IUninitialized$_uninitialized$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IUninitialized$_uninitialized$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._uninitialized[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._uninitialized["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUninitialized.-uninitialized",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.IUnifyWithPMap = (function (){var obj195158 = {};return obj195158;
})();
cljs.core.logic._unify_with_pmap = (function _unify_with_pmap(v,u,s){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3(v,u,s);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._unify_with_pmap[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unify_with_pmap["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyWithPMap.-unify-with-pmap",v);
}
}
})().call(null,v,u,s);
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.PMap = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._unify_with_map(v__$1,u,s);
});
cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10186__auto__){var self__ = this;
var this__10186__auto____$1 = this;var h__10040__auto__ = self__.__hash;if(!((h__10040__auto__ == null)))
{return h__10040__auto__;
} else
{var h__10040__auto____$1 = cljs.core.hash_imap(this__10186__auto____$1);self__.__hash = h__10040__auto____$1;
return h__10040__auto____$1;
}
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10191__auto__,k__10192__auto__){var self__ = this;
var this__10191__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10191__auto____$1,k__10192__auto__,null);
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10193__auto__,k195160,else__10194__auto__){var self__ = this;
var this__10193__auto____$1 = this;if(cljs.core.constant$keyword$76)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k195160,else__10194__auto__);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10198__auto__,k__10199__auto__,G__195159){var self__ = this;
var this__10198__auto____$1 = this;var pred__195162 = cljs.core.keyword_identical_QMARK_;var expr__195163 = k__10199__auto__;return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10199__auto__,G__195159),null));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check(s,u,v__$1);
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.map_QMARK_(v))
{return cljs.core.logic._unify_with_pmap(v,u__$1,s);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$INonStorable$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;var ks = cljs.core.keys(u__$1);var s__$1 = s;while(true){
if(cljs.core.seq(ks))
{var kf = cljs.core.first(ks);var vf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,kf,cljs.core.logic.not_found);if((vf === cljs.core.logic.not_found))
{return null;
} else
{var uf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(u__$1,kf);var vf__$1 = cljs.core.logic._walk(s__$1,vf);if(cljs.core.logic.lvar_QMARK_(vf__$1))
{{
var G__195165 = cljs.core.next(ks);
var G__195166 = (cljs.core.logic.featurec.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.featurec.cljs$core$IFn$_invoke$arity$2(vf__$1,uf) : cljs.core.logic.featurec.call(null,vf__$1,uf)).call(null,s__$1);
ks = G__195165;
s__$1 = G__195166;
continue;
}
} else
{if(cljs.core.map_QMARK_(uf))
{var temp__4096__auto__ = cljs.core.logic._unify(s__$1,(cljs.core.logic.partial_map.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.partial_map.cljs$core$IFn$_invoke$arity$1(uf) : cljs.core.logic.partial_map.call(null,uf)),vf__$1);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__195167 = cljs.core.next(ks);
var G__195168 = s__$2;
ks = G__195167;
s__$1 = G__195168;
continue;
}
} else
{return null;
}
} else
{var temp__4096__auto__ = cljs.core.logic._unify(s__$1,uf,vf__$1);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__195169 = cljs.core.next(ks);
var G__195170 = s__$2;
ks = G__195169;
s__$1 = G__195170;
continue;
}
} else
{return null;
}
}
}
}
} else
{return s__$1;
}
break;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10205__auto__,writer__10206__auto__,opts__10207__auto__){var self__ = this;
var this__10205__auto____$1 = this;var pr_pair__10208__auto__ = (function (keyval__10209__auto__){return cljs.core.pr_sequential_writer(writer__10206__auto__,cljs.core.pr_writer,""," ","",opts__10207__auto__,keyval__10209__auto__);
});return cljs.core.pr_sequential_writer(writer__10206__auto__,pr_pair__10208__auto__,"#cljs.core.logic.PMap{",", ","}",opts__10207__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10196__auto__,entry__10197__auto__){var self__ = this;
var this__10196__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__10197__auto__))
{return cljs.core._assoc(this__10196__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10197__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10197__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10196__auto____$1,entry__10197__auto__);
}
});
cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10203__auto__){var self__ = this;
var this__10203__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_(v__$1,s);
});
cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10195__auto__){var self__ = this;
var this__10195__auto____$1 = this;return (0 + cljs.core.count(self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10187__auto__,other__10188__auto__){var self__ = this;
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
cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10190__auto__,G__195159){var self__ = this;
var this__10190__auto____$1 = this;return (new cljs.core.logic.PMap(G__195159,self__.__extmap,self__.__hash));
});
cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10189__auto__){var self__ = this;
var this__10189__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithRecord$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithRecord$_unify_with_record$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.map_QMARK_(v))
{return cljs.core.logic._unify_with_map(v,u__$1,s);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10200__auto__,k__10201__auto__){var self__ = this;
var this__10200__auto____$1 = this;if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__10201__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__10200__auto____$1),self__.__meta),k__10201__auto__);
} else
{return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10201__auto__)),null));
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUninitialized$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUninitialized$_uninitialized$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.logic.PMap());
});
cljs.core.logic.PMap.cljs$lang$type = true;
cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__10225__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.logic/PMap");
});
cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__10225__auto__,writer__10226__auto__){return cljs.core._write(writer__10226__auto__,"cljs.core.logic/PMap");
});
cljs.core.logic.__GT_PMap = (function __GT_PMap(){return (new cljs.core.logic.PMap());
});
cljs.core.logic.map__GT_PMap = (function map__GT_PMap(G__195161){return (new cljs.core.logic.PMap(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__195161)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._unify_with_map(u,v__$1,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._unify_with_map(u,v__$1,s);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._ext(s,v__$1,u);
});
(cljs.core.logic.IUnifyWithPMap["_"] = true);
(cljs.core.logic._unify_with_pmap["_"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithPMap["null"] = true);
(cljs.core.logic._unify_with_pmap["null"] = (function (v,u,s){return null;
}));
/**
* Given map m, returns partial map that unifies with maps even if it
* doesn't share all of the keys of that map.
*/
cljs.core.logic.partial_map = (function partial_map(m){return cljs.core.logic.map__GT_PMap(m);
});
cljs.core.logic.partial_map_QMARK_ = (function partial_map_QMARK_(x){return (x instanceof cljs.core.logic.PMap);
});
cljs.core.logic.composeg = (function() {
var composeg = null;
var composeg__0 = (function (){return cljs.core.identity;
});
var composeg__2 = (function (g0,g1){return (function (a){var a__$1 = (g0.cljs$core$IFn$_invoke$arity$1 ? g0.cljs$core$IFn$_invoke$arity$1(a) : g0.call(null,a));var and__9617__auto__ = a__$1;if(cljs.core.truth_(and__9617__auto__))
{return (g1.cljs$core$IFn$_invoke$arity$1 ? g1.cljs$core$IFn$_invoke$arity$1(a__$1) : g1.call(null,a__$1));
} else
{return and__9617__auto__;
}
});
});
composeg = function(g0,g1){
switch(arguments.length){
case 0:
return composeg__0.call(this);
case 2:
return composeg__2.call(this,g0,g1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
composeg.cljs$core$IFn$_invoke$arity$0 = composeg__0;
composeg.cljs$core$IFn$_invoke$arity$2 = composeg__2;
return composeg;
})()
;
cljs.core.logic.IFeature = (function (){var obj195172 = {};return obj195172;
})();
cljs.core.logic._feature = (function _feature(x){if((function (){var and__9617__auto__ = x;if(and__9617__auto__)
{return x.cljs$core$logic$IFeature$_feature$arity$1;
} else
{return and__9617__auto__;
}
})())
{return x.cljs$core$logic$IFeature$_feature$arity$1(x);
} else
{var x__10232__auto__ = (((x == null))?null:x);return (function (){var or__9629__auto__ = (cljs.core.logic._feature[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._feature["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IFeature.-feature",x);
}
}
})().call(null,x);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IFeature$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IFeature$_feature$arity$1 = (function (x){var x__$1 = this;return cljs.core.logic.partial_map(x__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IFeature$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IFeature$_feature$arity$1 = (function (x){var x__$1 = this;return cljs.core.logic.partial_map(x__$1);
});
(cljs.core.logic.IFeature["_"] = true);
(cljs.core.logic._feature["_"] = (function (x){if(cljs.core.logic.record_QMARK_(x))
{return cljs.core.logic.partial_map(x);
} else
{return null;
}
}));
cljs.core.logic.IConstraintStep = (function (){var obj195174 = {};return obj195174;
})();
cljs.core.logic._step = (function _step(this$,s){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$IConstraintStep$_step$arity$2;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$IConstraintStep$_step$arity$2(this$,s);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._step[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._step["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintStep.-step",this$);
}
}
})().call(null,this$,s);
}
});
cljs.core.logic.IRunnable = (function (){var obj195176 = {};return obj195176;
})();
cljs.core.logic._runnable_QMARK_ = (function _runnable_QMARK_(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._runnable_QMARK_[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._runnable_QMARK_["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IRunnable.-runnable?",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.IConstraintOp = (function (){var obj195178 = {};return obj195178;
})();
cljs.core.logic._rator = (function _rator(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IConstraintOp$_rator$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IConstraintOp$_rator$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._rator[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._rator["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintOp.-rator",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._rands = (function _rands(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IConstraintOp$_rands$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IConstraintOp$_rands$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._rands[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._rands["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintOp.-rands",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.IReifiableConstraint = (function (){var obj195180 = {};return obj195180;
})();
cljs.core.logic._reifyc = (function _reifyc(_,v,r,a){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4(_,v,r,a);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._reifyc[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._reifyc["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IReifiableConstraint.-reifyc",_);
}
}
})().call(null,_,v,r,a);
}
});
cljs.core.logic.reifiable_QMARK_ = (function reifiable_QMARK_(x){var G__195182 = x;if(G__195182)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195182.cljs$core$logic$IReifiableConstraint$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.IEnforceableConstraint = (function (){var obj195184 = {};return obj195184;
})();
cljs.core.logic.enforceable_QMARK_ = (function enforceable_QMARK_(x){var G__195186 = x;if(G__195186)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195186.cljs$core$logic$IEnforceableConstraint$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.IConstraintWatchedStores = (function (){var obj195188 = {};return obj195188;
})();
cljs.core.logic._watched_stores = (function _watched_stores(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._watched_stores[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._watched_stores["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstraintWatchedStores.-watched-stores",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._featurec = (function _featurec(x,fs){if(typeof cljs.core.logic.t195197 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195197 = (function (fs,x,_featurec,meta195198){
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta195198 = meta195198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t195197.cljs$lang$type = true;
cljs.core.logic.t195197.cljs$lang$ctorStr = "cljs.core.logic/t195197";
cljs.core.logic.t195197.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195197");
});
cljs.core.logic.t195197.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t195197.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null);
});
cljs.core.logic.t195197.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t195197.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,a){var self__ = this;
var ___$1 = this;if(!(cljs.core.logic.lvar_QMARK_(self__.fs)))
{var fs__$2 = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,self__.fs);var r__$1 = cljs.core.logic._reify_STAR_(r,cljs.core.logic._walk_STAR_(a,fs__$2));return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,1354),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,13),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,1354),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,21)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.logic._walk_STAR_(r__$1,self__.x)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.logic._walk_STAR_(r__$1,fs__$2))], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,1354),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,12),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,1354),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,51)], 0)))));
} else
{var vec__195200 = cljs.core.logic._reify.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x,self__.fs], null),r);var x__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195200,0,null);var fs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195200,1,null);return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,1356),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,13),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,1356),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,21)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,x__$2),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,fs__$2)], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,1356),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,12),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,1356),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,29)], 0)))));
}
});
cljs.core.logic.t195197.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t195197.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,1347),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,18),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,1347),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,42)], 0)))));
});
cljs.core.logic.t195197.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t195197.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t195197.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t195201 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195201 = (function (s,this$,meta195198,fs,x,_featurec,meta195202){
this.s = s;
this.this$ = this$;
this.meta195198 = meta195198;
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta195202 = meta195202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t195201.cljs$lang$type = true;
cljs.core.logic.t195201.cljs$lang$ctorStr = "cljs.core.logic/t195201";
cljs.core.logic.t195201.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195201");
});
cljs.core.logic.t195201.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t195201.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (!(cljs.core.logic.lvar_QMARK_(cljs.core.logic._walk(self__.s,self__.x)))) && (!(cljs.core.logic.lvar_QMARK_(cljs.core.logic._walk(self__.s,self__.fs))));
});
cljs.core.logic.t195201.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var fs__$3 = cljs.core.logic._walk(s__$2,self__.fs);return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2((function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.partial_map(fs__$3),self__.x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
}),(cljs.core.logic.remcg.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.remcg.cljs$core$IFn$_invoke$arity$1(self__.this$) : cljs.core.logic.remcg.call(null,self__.this$))).call(null,s__$2);
});
cljs.core.logic.t195201.prototype.apply = (function (self__,args195204){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args195204)));
});
cljs.core.logic.t195201.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var fs__$3 = cljs.core.logic._walk(s__$2,self__.fs);return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2((function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.logic.partial_map(fs__$3),self__.x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return (cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.logic.run_constraints_STAR_.cljs$core$IFn$_invoke$arity$3(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107) : cljs.core.logic.run_constraints_STAR_.call(null,vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107)).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
}),(cljs.core.logic.remcg.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.remcg.cljs$core$IFn$_invoke$arity$1(self__.this$) : cljs.core.logic.remcg.call(null,self__.this$))).call(null,s__$2);
});
cljs.core.logic.t195201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195203){var self__ = this;
var _195203__$1 = this;return self__.meta195202;
});
cljs.core.logic.t195201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195203,meta195202__$1){var self__ = this;
var _195203__$1 = this;return (new cljs.core.logic.t195201(self__.s,self__.this$,self__.meta195198,self__.fs,self__.x,self__._featurec,meta195202__$1));
});
cljs.core.logic.__GT_t195201 = (function __GT_t195201(s__$1,this$__$2,meta195198__$1,fs__$2,x__$2,_featurec__$2,meta195202){return (new cljs.core.logic.t195201(s__$1,this$__$2,meta195198__$1,fs__$2,x__$2,_featurec__$2,meta195202));
});
}
return (new cljs.core.logic.t195201(s,this$__$1,self__.meta195198,self__.fs,self__.x,self__._featurec,null));
});
cljs.core.logic.t195197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195199){var self__ = this;
var _195199__$1 = this;return self__.meta195198;
});
cljs.core.logic.t195197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195199,meta195198__$1){var self__ = this;
var _195199__$1 = this;return (new cljs.core.logic.t195197(self__.fs,self__.x,self__._featurec,meta195198__$1));
});
cljs.core.logic.__GT_t195197 = (function __GT_t195197(fs__$1,x__$1,_featurec__$1,meta195198){return (new cljs.core.logic.t195197(fs__$1,x__$1,_featurec__$1,meta195198));
});
}
return (new cljs.core.logic.t195197(fs,x,_featurec,null));
});
/**
* Ensure that a map contains at least the key-value pairs
* in the map fs. fs must be partially instantiated - that is,
* it may contain values which are logic variables to support
* feature extraction.
*/
cljs.core.logic.featurec = (function featurec(x,fs){return (cljs.core.logic.cgoal.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.cgoal.cljs$core$IFn$_invoke$arity$1(cljs.core.logic._featurec(x,fs)) : cljs.core.logic.cgoal.call(null,cljs.core.logic._featurec(x,fs)));
});
cljs.core.logic.build = (function build(s,u){return cljs.core.logic._build_term(u,s);
});
cljs.core.logic.add_attr = (function add_attr(s,x,attr,attrv){var x__$1 = cljs.core.logic._root_var(s,x);var v = cljs.core.logic._root_val(s,x__$1);if(cljs.core.logic.subst_val_QMARK_(v))
{return cljs.core.logic._update_var(s,x__$1,cljs.core.logic.assoc_meta(v,attr,attrv));
} else
{var v__$1 = (cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v)))?cljs.core.constant$keyword$105:v);return cljs.core.logic._ext_no_check(s,x__$1,cljs.core.with_meta(cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.PersistentArrayMap.fromArray([attr,attrv], true, false)));
}
});
cljs.core.logic.rem_attr = (function rem_attr(s,x,attr){var x__$1 = cljs.core.logic._root_var(s,x);var v = cljs.core.logic._root_val(s,x__$1);if(cljs.core.logic.subst_val_QMARK_(v))
{var new_meta = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(v),attr);if(((cljs.core.count(new_meta) === 0)) && (!(cljs.core.keyword_identical_QMARK_(v.v,cljs.core.constant$keyword$105))))
{return cljs.core.logic._update_var(s,x__$1,v.v);
} else
{return cljs.core.logic._update_var(s,x__$1,cljs.core.with_meta(v,new_meta));
}
} else
{return s;
}
});
cljs.core.logic.get_attr = (function get_attr(s,x,attr){var v = cljs.core.logic._root_val(s,x);if(cljs.core.logic.subst_val_QMARK_(v))
{return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)) : attr.call(null,cljs.core.meta(v)));
} else
{return null;
}
});
cljs.core.logic.sync_eset = (function sync_eset(s,v,seenset,f){if(!(cljs.core.keyword_identical_QMARK_(seenset,cljs.core.constant$keyword$114)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,y){var y__$1 = cljs.core.logic._root_var(s__$1,y);if(!(cljs.core.contains_QMARK_(seenset,y__$1)))
{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(s__$1,y__$1) : f.call(null,s__$1,y__$1));
} else
{return s__$1;
}
}),s,v.eset);
} else
{return s;
}
});
cljs.core.logic.IMergeDomains = (function (){var obj195206 = {};return obj195206;
})();
cljs.core.logic._merge_doms = (function _merge_doms(a,b){if((function (){var and__9617__auto__ = a;if(and__9617__auto__)
{return a.cljs$core$logic$IMergeDomains$_merge_doms$arity$2;
} else
{return and__9617__auto__;
}
})())
{return a.cljs$core$logic$IMergeDomains$_merge_doms$arity$2(a,b);
} else
{var x__10232__auto__ = (((a == null))?null:a);return (function (){var or__9629__auto__ = (cljs.core.logic._merge_doms[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._merge_doms["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IMergeDomains.-merge-doms",a);
}
}
})().call(null,a,b);
}
});
cljs.core.logic.add_dom = (function() {
var add_dom = null;
var add_dom__4 = (function (s,x,dom,domv){var x__$1 = cljs.core.logic._root_var(s,x);return add_dom.cljs$core$IFn$_invoke$arity$5(s,x__$1,dom,domv,null);
});
var add_dom__5 = (function (s,x,dom,domv,seenset){var v = cljs.core.logic._root_val(s,x);var s__$1 = ((cljs.core.logic.subst_val_QMARK_(v))?cljs.core.logic._update_var(s,x,cljs.core.logic.assoc_dom(v,dom,domv)):(function (){var v__$1 = (cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v)))?cljs.core.constant$keyword$105:v);return cljs.core.logic._ext_no_check(s,x,cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$2(v__$1,new cljs.core.PersistentArrayMap.fromArray([dom,domv], true, false)));
})());return cljs.core.logic.sync_eset(s__$1,v,seenset,(function (s__$2,y){return add_dom.cljs$core$IFn$_invoke$arity$5(s__$2,y,dom,domv,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__9629__auto__ = seenset;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x));
}));
});
add_dom = function(s,x,dom,domv,seenset){
switch(arguments.length){
case 4:
return add_dom__4.call(this,s,x,dom,domv);
case 5:
return add_dom__5.call(this,s,x,dom,domv,seenset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_dom.cljs$core$IFn$_invoke$arity$4 = add_dom__4;
add_dom.cljs$core$IFn$_invoke$arity$5 = add_dom__5;
return add_dom;
})()
;
cljs.core.logic.update_dom = (function() {
var update_dom = null;
var update_dom__4 = (function (s,x,dom,f){var x__$1 = cljs.core.logic._root_var(s,x);return update_dom.cljs$core$IFn$_invoke$arity$5(s,x__$1,dom,f,null);
});
var update_dom__5 = (function (s,x,dom,f,seenset){var v = cljs.core.logic._root_val(s,x);var v__$1 = (cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v)))?cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105):v);var doms = v__$1.doms;var s__$1 = cljs.core.logic._update_var(s,x,cljs.core.logic.assoc_dom(v__$1,dom,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(doms,dom)) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(doms,dom)))));return cljs.core.logic.sync_eset(s__$1,v__$1,seenset,(function (s__$2,y){return update_dom.cljs$core$IFn$_invoke$arity$5(s__$2,y,dom,f,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__9629__auto__ = seenset;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x));
}));
});
update_dom = function(s,x,dom,f,seenset){
switch(arguments.length){
case 4:
return update_dom__4.call(this,s,x,dom,f);
case 5:
return update_dom__5.call(this,s,x,dom,f,seenset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_dom.cljs$core$IFn$_invoke$arity$4 = update_dom__4;
update_dom.cljs$core$IFn$_invoke$arity$5 = update_dom__5;
return update_dom;
})()
;
cljs.core.logic.rem_dom = (function() {
var rem_dom = null;
var rem_dom__3 = (function (s,x,dom){var x__$1 = cljs.core.logic._root_var(s,x);return rem_dom.cljs$core$IFn$_invoke$arity$4(s,x__$1,dom,null);
});
var rem_dom__4 = (function (s,x,dom,seenset){var v = cljs.core.logic._root_val(s,x);var s__$1 = ((cljs.core.logic.subst_val_QMARK_(v))?(function (){var new_doms = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v.doms,dom);if(((cljs.core.count(new_doms) === 0)) && (!(cljs.core.keyword_identical_QMARK_(v.v,cljs.core.constant$keyword$105))))
{return cljs.core.logic._update_var(s,x,v.v);
} else
{return cljs.core.logic._update_var(s,x,cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$4(v.v,new_doms,v.eset,cljs.core.meta(v)));
}
})():s);return cljs.core.logic.sync_eset(s__$1,v,seenset,(function (s__$2,y){return rem_dom.cljs$core$IFn$_invoke$arity$4(s__$2,y,dom,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__9629__auto__ = seenset;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x));
}));
});
rem_dom = function(s,x,dom,seenset){
switch(arguments.length){
case 3:
return rem_dom__3.call(this,s,x,dom);
case 4:
return rem_dom__4.call(this,s,x,dom,seenset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rem_dom.cljs$core$IFn$_invoke$arity$3 = rem_dom__3;
rem_dom.cljs$core$IFn$_invoke$arity$4 = rem_dom__4;
return rem_dom;
})()
;
cljs.core.logic.get_dom = (function get_dom(s,x,dom){var v = cljs.core.logic._root_val(s,x);if(cljs.core.logic.subst_val_QMARK_(v))
{var v_SINGLEQUOTE_ = v.v;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v_SINGLEQUOTE_,cljs.core.constant$keyword$105))
{return v_SINGLEQUOTE_;
} else
{return (dom.cljs$core$IFn$_invoke$arity$1 ? dom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(v)) : dom.call(null,cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(v)));
}
} else
{if(cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v))))
{return v;
} else
{return null;
}
}
});
cljs.core.logic.empty_f = (function empty_f(){return null;
});
cljs.core.logic.annotate = (function annotate(k,v){return (function (a){return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$variadic(a,cljs.core.assoc,cljs.core.array_seq([k,v], 0));
});
});
cljs.core.logic.merge_doms = (function merge_doms(s,x,doms){var xdoms = cljs.core.logic._root_val(s,x).doms;var doms__$1 = cljs.core.seq(doms);var s__$1 = s;while(true){
if(cljs.core.truth_(doms__$1))
{var vec__195208 = cljs.core.first(doms__$1);var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195208,0,null);var domv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195208,1,null);var xdomv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(xdoms,dom,cljs.core.logic.not_found);var ndomv = (((xdomv === cljs.core.logic.not_found))?domv:cljs.core.logic._merge_doms(domv,xdomv));if(cljs.core.truth_(ndomv))
{{
var G__195209 = cljs.core.next(doms__$1);
var G__195210 = cljs.core.logic.add_dom.cljs$core$IFn$_invoke$arity$5(s__$1,x,dom,ndomv,cljs.core.PersistentHashSet.EMPTY);
doms__$1 = G__195209;
s__$1 = G__195210;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
});
cljs.core.logic.update_eset = (function update_eset(s,doms,eset){var eset__$1 = cljs.core.seq(eset);var s__$1 = s;while(true){
if(cljs.core.truth_(eset__$1))
{var temp__4098__auto__ = cljs.core.logic.merge_doms(s__$1,s__$1.cljs$core$logic$ISubstitutionsCLP$_root_var$arity$2(null,cljs.core.first(eset__$1)),doms);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__195211 = cljs.core.next(eset__$1);
var G__195212 = s__$2;
eset__$1 = G__195211;
s__$1 = G__195212;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
});
cljs.core.logic.merge_with_root = (function merge_with_root(s,x,root){var xv = cljs.core.logic._root_val(s,x);var rootv = cljs.core.logic._root_val(s,root);var eset = clojure.set.union.cljs$core$IFn$_invoke$arity$2(rootv.eset,xv.eset);var doms = (function (){var xd = cljs.core.seq(xv.doms);var rd = rootv.doms;var r = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.truth_(xd))
{var vec__195215 = cljs.core.first(xd);var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195215,0,null);var xv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195215,1,null);var temp__4096__auto__ = cljs.core.find(rd,xk);if(cljs.core.truth_(temp__4096__auto__))
{var vec__195216 = temp__4096__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195216,0,null);var rv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195216,1,null);var nd = cljs.core.logic._merge_doms(xv__$1,rv);if(cljs.core.truth_(nd))
{{
var G__195217 = cljs.core.next(xd);
var G__195218 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(rd,xk);
var G__195219 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,xk,nd);
xd = G__195217;
rd = G__195218;
r = G__195219;
continue;
}
} else
{return null;
}
} else
{{
var G__195220 = cljs.core.next(xd);
var G__195221 = rd;
var G__195222 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,xk,xv__$1);
xd = G__195220;
rd = G__195221;
r = G__195222;
continue;
}
}
} else
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r,rd], 0));
}
break;
}
})();var nv = (cljs.core.truth_(doms)?cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$4(rootv.v,doms,eset,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(xv),cljs.core.meta(rootv)], 0))):null);if(cljs.core.truth_(nv))
{return cljs.core.logic.update_eset(cljs.core.logic._ext_no_check(s,root,nv),doms,eset);
} else
{return null;
}
});
cljs.core.logic.to_subst_val = (function to_subst_val(v){if(cljs.core.logic.subst_val_QMARK_(v))
{return v;
} else
{return cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105);
}
});
cljs.core.logic.entangle = (function entangle(s,x,y){var x__$1 = cljs.core.logic._root_var(s,x);var y__$1 = cljs.core.logic._root_var(s,y);var xv = cljs.core.logic.to_subst_val(cljs.core.logic._root_val(s,x__$1));var yv = cljs.core.logic.to_subst_val(cljs.core.logic._root_val(s,y__$1));return cljs.core.logic._update_var(cljs.core.logic._update_var(s,x__$1,(new cljs.core.logic.SubstValue(xv.v,xv.doms,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__9629__auto__ = xv.eset;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),y__$1)))),y__$1,(new cljs.core.logic.SubstValue(yv.v,yv.doms,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__9629__auto__ = yv.eset;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x__$1))));
});
cljs.core.logic.ext_run_csg = (function ext_run_csg(u,v){return (function (a){return cljs.core.logic._ext_run_cs(a,u,v);
});
});
cljs.core.logic.solutions = (function() {
var solutions = null;
var solutions__2 = (function (s,g){return solutions.cljs$core$IFn$_invoke$arity$3(s,(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0() : cljs.core.logic.lvar.call(null)),g);
});
var solutions__3 = (function (s,q,g){return cljs.core.logic._take_STAR_((function (a__130553__auto__){return cljs.core.logic._bind(cljs.core.logic._bind(a__130553__auto__,g),(cljs.core.logic.reifyg.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.reifyg.cljs$core$IFn$_invoke$arity$1(q) : cljs.core.logic.reifyg.call(null,q)));
}).call(null,s));
});
solutions = function(s,q,g){
switch(arguments.length){
case 2:
return solutions__2.call(this,s,q);
case 3:
return solutions__3.call(this,s,q,g);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solutions.cljs$core$IFn$_invoke$arity$2 = solutions__2;
solutions.cljs$core$IFn$_invoke$arity$3 = solutions__3;
return solutions;
})()
;
cljs.core.logic.to_stream = (function to_stream(aseq){var aseq__$1 = cljs.core.drop_while(cljs.core.nil_QMARK_,aseq);if(cljs.core.seq(aseq__$1))
{return (cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2(cljs.core.first(aseq__$1),(function (){return to_stream(cljs.core.next(aseq__$1));
})) : cljs.core.logic.choice.call(null,cljs.core.first(aseq__$1),(function (){return to_stream(cljs.core.next(aseq__$1));
})));
} else
{return null;
}
});
cljs.core.logic.IAnswerCache = (function (){var obj195224 = {};return obj195224;
})();
cljs.core.logic._add = (function _add(this$,x){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$IAnswerCache$_add$arity$2;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$IAnswerCache$_add$arity$2(this$,x);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._add[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._add["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IAnswerCache.-add",this$);
}
}
})().call(null,this$,x);
}
});
cljs.core.logic._cached_QMARK_ = (function _cached_QMARK_(this$,x){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$IAnswerCache$_cached_QMARK_$arity$2;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$IAnswerCache$_cached_QMARK_$arity$2(this$,x);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._cached_QMARK_[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._cached_QMARK_["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IAnswerCache.-cached?",this$);
}
}
})().call(null,this$,x);
}
});

/**
* @constructor
*/
cljs.core.logic.AnswerCache = (function (ansl,anss,_meta){
this.ansl = ansl;
this.anss = anss;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
})
cljs.core.logic.AnswerCache.cljs$lang$type = true;
cljs.core.logic.AnswerCache.cljs$lang$ctorStr = "cljs.core.logic/AnswerCache";
cljs.core.logic.AnswerCache.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/AnswerCache");
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write(writer,[cljs.core.str(x__$1)].join(''));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$IAnswerCache$ = true;
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$IAnswerCache$_add$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.AnswerCache(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.ansl,x),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.anss,x),self__._meta));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$IAnswerCache$_cached_QMARK_$arity$2 = (function (_,x){var self__ = this;
var ___$1 = this;return cljs.core.contains_QMARK_(self__.anss,x);
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.logic.AnswerCache(self__.ansl,self__.anss,new_meta));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.logic.AnswerCache.prototype.toString = (function (){var self__ = this;
var this$ = this;return [cljs.core.str("<answer-cache:"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.ansl], 0))),cljs.core.str(">")].join('');
});
cljs.core.logic.__GT_AnswerCache = (function __GT_AnswerCache(ansl,anss,_meta){return (new cljs.core.logic.AnswerCache(ansl,anss,_meta));
});
cljs.core.logic.answer_cache = (function answer_cache(){return (new cljs.core.logic.AnswerCache(cljs.core.List.EMPTY,cljs.core.PersistentHashSet.EMPTY,null));
});
cljs.core.logic.ISuspendedStream = (function (){var obj195226 = {};return obj195226;
})();
cljs.core.logic._ready_QMARK_ = (function _ready_QMARK_(this$){if((function (){var and__9617__auto__ = this$;if(and__9617__auto__)
{return this$.cljs$core$logic$ISuspendedStream$_ready_QMARK_$arity$1;
} else
{return and__9617__auto__;
}
})())
{return this$.cljs$core$logic$ISuspendedStream$_ready_QMARK_$arity$1(this$);
} else
{var x__10232__auto__ = (((this$ == null))?null:this$);return (function (){var or__9629__auto__ = (cljs.core.logic._ready_QMARK_[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._ready_QMARK_["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ISuspendedStream.-ready?",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
* @param {*} cache
* @param {*} ansv_STAR_
* @param {*} f
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.SuspendedStream = (function (cache,ansv_STAR_,f,__meta,__extmap){
this.cache = cache;
this.ansv_STAR_ = ansv_STAR_;
this.f = f;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.SuspendedStream.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10186__auto__){var self__ = this;
var this__10186__auto____$1 = this;var h__10040__auto__ = self__.__hash;if(!((h__10040__auto__ == null)))
{return h__10040__auto__;
} else
{var h__10040__auto____$1 = cljs.core.hash_imap(this__10186__auto____$1);self__.__hash = h__10040__auto____$1;
return h__10040__auto____$1;
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10191__auto__,k__10192__auto__){var self__ = this;
var this__10191__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10191__auto____$1,k__10192__auto__,null);
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10193__auto__,k195228,else__10194__auto__){var self__ = this;
var this__10193__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k195228,cljs.core.constant$keyword$115))
{return self__.cache;
} else
{if(cljs.core.keyword_identical_QMARK_(k195228,cljs.core.constant$keyword$116))
{return self__.ansv_STAR_;
} else
{if(cljs.core.keyword_identical_QMARK_(k195228,cljs.core.constant$keyword$117))
{return self__.f;
} else
{if(cljs.core.constant$keyword$76)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k195228,else__10194__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10198__auto__,k__10199__auto__,G__195227){var self__ = this;
var this__10198__auto____$1 = this;var pred__195230 = cljs.core.keyword_identical_QMARK_;var expr__195231 = k__10199__auto__;if(cljs.core.truth_((pred__195230.cljs$core$IFn$_invoke$arity$2 ? pred__195230.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$115,expr__195231) : pred__195230.call(null,cljs.core.constant$keyword$115,expr__195231))))
{return (new cljs.core.logic.SuspendedStream(G__195227,self__.ansv_STAR_,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__195230.cljs$core$IFn$_invoke$arity$2 ? pred__195230.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$116,expr__195231) : pred__195230.call(null,cljs.core.constant$keyword$116,expr__195231))))
{return (new cljs.core.logic.SuspendedStream(self__.cache,G__195227,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__195230.cljs$core$IFn$_invoke$arity$2 ? pred__195230.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$117,expr__195231) : pred__195230.call(null,cljs.core.constant$keyword$117,expr__195231))))
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,G__195227,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10199__auto__,G__195227),null));
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10205__auto__,writer__10206__auto__,opts__10207__auto__){var self__ = this;
var this__10205__auto____$1 = this;var pr_pair__10208__auto__ = (function (keyval__10209__auto__){return cljs.core.pr_sequential_writer(writer__10206__auto__,cljs.core.pr_writer,""," ","",opts__10207__auto__,keyval__10209__auto__);
});return cljs.core.pr_sequential_writer(writer__10206__auto__,pr_pair__10208__auto__,"#cljs.core.logic.SuspendedStream{",", ","}",opts__10207__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$115,self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$116,self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$117,self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10196__auto__,entry__10197__auto__){var self__ = this;
var this__10196__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__10197__auto__))
{return cljs.core._assoc(this__10196__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10197__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10197__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10196__auto____$1,entry__10197__auto__);
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10203__auto__){var self__ = this;
var this__10203__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$115,self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$116,self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$117,self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10195__auto__){var self__ = this;
var this__10195__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$ISuspendedStream$ = true;
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$ISuspendedStream$_ready_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return !((cljs.core.deref(self__.cache).ansl === self__.ansv_STAR_));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10187__auto__,other__10188__auto__){var self__ = this;
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
cljs.core.logic.SuspendedStream.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10190__auto__,G__195227){var self__ = this;
var this__10190__auto____$1 = this;return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,G__195227,self__.__extmap,self__.__hash));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10189__auto__){var self__ = this;
var this__10189__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10200__auto__,k__10201__auto__){var self__ = this;
var this__10200__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$117,null,cljs.core.constant$keyword$116,null,cljs.core.constant$keyword$115,null], null), null),k__10201__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__10200__auto____$1),self__.__meta),k__10201__auto__);
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10201__auto__)),null));
}
});
cljs.core.logic.SuspendedStream.cljs$lang$type = true;
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrSeq = (function (this__10225__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrWriter = (function (this__10225__auto__,writer__10226__auto__){return cljs.core._write(writer__10226__auto__,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.__GT_SuspendedStream = (function __GT_SuspendedStream(cache,ansv_STAR_,f){return (new cljs.core.logic.SuspendedStream(cache,ansv_STAR_,f));
});
cljs.core.logic.map__GT_SuspendedStream = (function map__GT_SuspendedStream(G__195229){return (new cljs.core.logic.SuspendedStream(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(G__195229),cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(G__195229),cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(G__195229),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__195229,cljs.core.constant$keyword$115,cljs.core.array_seq([cljs.core.constant$keyword$116,cljs.core.constant$keyword$117], 0))));
});
cljs.core.logic.make_suspended_stream = (function make_suspended_stream(cache,ansv_STAR_,f){return (new cljs.core.logic.SuspendedStream(cache,ansv_STAR_,f));
});
cljs.core.logic.suspended_stream_QMARK_ = (function suspended_stream_QMARK_(x){return (x instanceof cljs.core.logic.SuspendedStream);
});
cljs.core.logic.waiting_stream_QMARK_ = (function waiting_stream_QMARK_(x){return cljs.core.vector_QMARK_(x);
});
/**
* Take a waiting stream, a success continuation, and a failure continuation.
* If we don't find any ready suspended streams, invoke the failure
* continuation.
* If we find a ready suspended stream calculate the remainder of the waiting
* stream. If we've reached the fixpoint just call the thunk of the suspended
* stream, otherwise call mplus on the result of the thunk and the remainder
* of the waiting stream. Pass this result to the success contination.
*/
cljs.core.logic.waiting_stream_check = (function waiting_stream_check(w,success_cont,failure_cont){var w__$1 = w;var a = cljs.core.PersistentVector.EMPTY;while(true){
if((w__$1 == null))
{return (failure_cont.cljs$core$IFn$_invoke$arity$0 ? failure_cont.cljs$core$IFn$_invoke$arity$0() : failure_cont.call(null));
} else
{if(cljs.core.truth_(cljs.core.logic._ready_QMARK_(cljs.core.first(w__$1))))
{return (success_cont.cljs$core$IFn$_invoke$arity$1 ? success_cont.cljs$core$IFn$_invoke$arity$1(((function (w__$1,a){
return (function (){var ss = cljs.core.first(w__$1);var f = ss.f;var w__$2 = cljs.core.into(a,cljs.core.next(w__$1));if(cljs.core.empty_QMARK_(w__$2))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.logic._mplus((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),((function (w__$1,a,ss,f,w__$2){
return (function (){return w__$2;
});})(w__$1,a,ss,f,w__$2))
);
}
});})(w__$1,a))
) : success_cont.call(null,((function (w__$1,a){
return (function (){var ss = cljs.core.first(w__$1);var f = ss.f;var w__$2 = cljs.core.into(a,cljs.core.next(w__$1));if(cljs.core.empty_QMARK_(w__$2))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.logic._mplus((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),((function (w__$1,a,ss,f,w__$2){
return (function (){return w__$2;
});})(w__$1,a,ss,f,w__$2))
);
}
});})(w__$1,a))
));
} else
{if(cljs.core.constant$keyword$76)
{{
var G__195233 = cljs.core.next(w__$1);
var G__195234 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.first(w__$1));
w__$1 = G__195233;
a = G__195234;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.logic.ITabled = (function (){var obj195236 = {};return obj195236;
})();
cljs.core.logic._reify_tabled = (function _reify_tabled(s,v){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ITabled$_reify_tabled$arity$2;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ITabled$_reify_tabled$arity$2(s,v);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._reify_tabled[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._reify_tabled["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ITabled.-reify-tabled",s);
}
}
})().call(null,s,v);
}
});
cljs.core.logic._reuse = (function _reuse(s,argv,cache,start,end){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ITabled$_reuse$arity$5;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ITabled$_reuse$arity$5(s,argv,cache,start,end);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._reuse[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._reuse["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ITabled.-reuse",s);
}
}
})().call(null,s,argv,cache,start,end);
}
});
cljs.core.logic._subunify = (function _subunify(s,arg,ans){if((function (){var and__9617__auto__ = s;if(and__9617__auto__)
{return s.cljs$core$logic$ITabled$_subunify$arity$3;
} else
{return and__9617__auto__;
}
})())
{return s.cljs$core$logic$ITabled$_subunify$arity$3(s,arg,ans);
} else
{var x__10232__auto__ = (((s == null))?null:s);return (function (){var or__9629__auto__ = (cljs.core.logic._subunify[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._subunify["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("ITabled.-subunify",s);
}
}
})().call(null,s,arg,ans);
}
});
cljs.core.logic.reify_tabled = (function reify_tabled(s,v){var v__$1 = cljs.core.logic._walk_STAR_(s,v);return cljs.core.logic._walk_STAR_(cljs.core.logic.empty_s.cljs$core$logic$ITabled$_reify_tabled$arity$2(null,v__$1),v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITabled$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITabled$_reify_tabled$arity$2 = (function (this$,v){var this$__$1 = this;var v__$1 = cljs.core.logic._walk(this$__$1,v);if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v__$1) : cljs.core.logic.lvar_QMARK_.call(null,v__$1))))
{return cljs.core.logic._ext_no_check(this$__$1,v__$1,(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(cljs.core.count(this$__$1.s)) : cljs.core.logic.lvar.call(null,cljs.core.count(this$__$1.s))));
} else
{if(cljs.core.coll_QMARK_(v__$1))
{return cljs.core.logic._reify_tabled(cljs.core.logic._reify_tabled(this$__$1,cljs.core.first(v__$1)),cljs.core.next(v__$1));
} else
{if(cljs.core.constant$keyword$76)
{return this$__$1;
} else
{return null;
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITabled$_reuse$arity$5 = (function (this$,argv,cache,start,end){var this$__$1 = this;var start__$1 = (function (){var or__9629__auto__ = start;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return cljs.core.deref(cache).ansl;
}
})();var end__$1 = (function (){var or__9629__auto__ = end;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return 0;
}
})();var reuse_loop = (function reuse_loop(ansv_STAR_){if((cljs.core.count(ansv_STAR_) === end__$1))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.make_suspended_stream(cache,start__$1,(function (){return cljs.core.logic._reuse(this$__$1,argv,cache,cljs.core.deref(cache).ansl,cljs.core.count(start__$1));
}))], null);
} else
{var ans = cljs.core.first(ansv_STAR_);return (new cljs.core.logic.Choice(cljs.core.logic._subunify(this$__$1,argv,cljs.core.logic.reify_tabled(this$__$1,ans)),(function (){return reuse_loop(cljs.core.rest(ansv_STAR_));
})));
}
});
return (reuse_loop.cljs$core$IFn$_invoke$arity$1 ? reuse_loop.cljs$core$IFn$_invoke$arity$1(start__$1) : reuse_loop.call(null,start__$1));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITabled$_subunify$arity$3 = (function (this$,arg,ans){var this$__$1 = this;var arg__$1 = cljs.core.logic._walk(this$__$1,arg);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,ans))
{return this$__$1;
} else
{if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : cljs.core.logic.lvar_QMARK_.call(null,arg__$1))))
{return cljs.core.logic._ext_no_check(this$__$1,arg__$1,ans);
} else
{if(cljs.core.coll_QMARK_(arg__$1))
{return cljs.core.logic._subunify(cljs.core.logic._subunify(this$__$1,cljs.core.next(arg__$1),cljs.core.next(ans)),cljs.core.first(arg__$1),cljs.core.first(ans));
} else
{if(cljs.core.constant$keyword$76)
{return this$__$1;
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$logic$ITake$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.logic.waiting_stream_check(this$__$1,(function (f){return cljs.core.logic.take_STAR_(f);
}),(function (){return cljs.core.List.EMPTY;
}));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,f){var this$__$1 = this;return cljs.core.logic.waiting_stream_check(this$__$1,(function (fp){return cljs.core.logic.mplus(fp,f);
}),(function (){var a_inf = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));if(cljs.core.logic.waiting_stream_QMARK_(a_inf))
{return cljs.core.into(a_inf,this$__$1);
} else
{return cljs.core.logic.mplus(a_inf,(function (){return this$__$1;
}));
}
}));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$IBind$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var this$__$1 = this;return cljs.core.logic.waiting_stream_check(this$__$1,(function (f){return cljs.core.logic._bind(f,g);
}),(function (){return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ss){return cljs.core.logic.make_suspended_stream(ss.cache,ss.ansv_STAR_,(function (){return cljs.core.logic._bind(ss.f.call(null),g);
}));
}),this$__$1));
}));
});
/**
* Take the argument to the goal and check that we don't
* have an alpha equivalent cached answer term in the cache.
* If it doesn't already exist in the cache add the new
* answer term.
*/
cljs.core.logic.master = (function master(argv,cache){return (function (a){var rargv = cljs.core.logic._reify.cljs$core$IFn$_invoke$arity$2(a,argv);if(cljs.core.truth_(cljs.core.logic._cached_QMARK_(cljs.core.deref(cache),rargv)))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache,(function (cache__$1){if(cljs.core.truth_(cljs.core.logic._cached_QMARK_(cache__$1,rargv)))
{return cache__$1;
} else
{return cljs.core.logic._add(cache__$1,cljs.core.logic.reify_tabled(a,argv));
}
}));
return a;
}
});
});
cljs.core.logic.addcg = (function addcg(c){return (function (a){var a__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a__$1,x){return cljs.core.logic._ext_no_check(a__$1,x,cljs.core.logic.subst_val.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105));
}),a,cljs.core.logic.unbound_rands(a,c));return (new cljs.core.logic.Substitutions(a__$1.s,a__$1.vs,a__$1.ts,cljs.core.logic._addc(a__$1.cs,a__$1,c),a__$1.cq,a__$1.cqs,a__$1.oc,a__$1._meta));
});
});
cljs.core.logic.updatecg = (function updatecg(c){return (function (a){return (new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,cljs.core.logic._updatec(a.cs,a,c),a.cq,a.cqs,a.oc,a._meta));
});
});
cljs.core.logic.remcg = (function remcg(c){return (function (a){return (new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,cljs.core.logic._remc(a.cs,a,c),a.cq,a.cqs,a.oc,a._meta));
});
});
cljs.core.logic.runcg = (function runcg(c){return (function (a){return (new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,cljs.core.logic._runc(a.cs,c,true),a.cq,a.cqs,a.oc,a._meta));
});
});
cljs.core.logic.stopcg = (function stopcg(c){return (function (a){return (new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,cljs.core.logic._runc(a.cs,c,false),a.cq,a.cqs,a.oc,a._meta));
});
});
cljs.core.logic.IEntailed = (function (){var obj195238 = {};return obj195238;
})();
cljs.core.logic._entailed_QMARK_ = (function _entailed_QMARK_(c){if((function (){var and__9617__auto__ = c;if(and__9617__auto__)
{return c.cljs$core$logic$IEntailed$_entailed_QMARK_$arity$1;
} else
{return and__9617__auto__;
}
})())
{return c.cljs$core$logic$IEntailed$_entailed_QMARK_$arity$1(c);
} else
{var x__10232__auto__ = (((c == null))?null:c);return (function (){var or__9629__auto__ = (cljs.core.logic._entailed_QMARK_[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._entailed_QMARK_["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IEntailed.-entailed?",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.ientailed_QMARK_ = (function ientailed_QMARK_(c){var G__195240 = c;if(G__195240)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195240.cljs$core$logic$IEntailed$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.entailed_QMARK_ = (function entailed_QMARK_(c,c_SINGLEQUOTE_,a){var id = cljs.core.logic.id(c);var and__9617__auto__ = (function (){var or__9629__auto__ = a.cs.cm.call(null,id);if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return (id == null);
}
})();if(cljs.core.truth_(and__9617__auto__))
{return cljs.core.logic._entailed_QMARK_(c_SINGLEQUOTE_);
} else
{return and__9617__auto__;
}
});
cljs.core.logic.run_constraint = (function run_constraint(c){return (function (a){var c_SINGLEQUOTE_ = cljs.core.logic._step(c,a);if((!(cljs.core.logic.ientailed_QMARK_(c_SINGLEQUOTE_))) || (!(cljs.core.logic.entailed_QMARK_(c,c_SINGLEQUOTE_,a))))
{if(cljs.core.truth_(cljs.core.logic._runnable_QMARK_(c_SINGLEQUOTE_)))
{return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.runcg(c),cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(c_SINGLEQUOTE_,cljs.core.logic.stopcg(c))).call(null,a);
} else
{return a;
}
} else
{return cljs.core.logic.remcg(c).call(null,a);
}
});
});
/**
* A goal to run the constraints in cq until it is empty. Of
* course running a constraint may grow cq so this function
* finds the fixpoint.
*/
cljs.core.logic.fix_constraints = (function fix_constraints(a){var a__$1 = a;while(true){
if(cljs.core.truth_(a__$1))
{var cq = a__$1.cq;if((cljs.core.count(cq) === 0))
{return (new cljs.core.logic.Substitutions(a__$1.s,a__$1.vs,a__$1.ts,a__$1.cs,null,a__$1.cqs,a__$1.oc,a__$1._meta));
} else
{var c = cljs.core.first(cq);{
var G__195241 = cljs.core.logic.run_constraint(c).call(null,(new cljs.core.logic.Substitutions(a__$1.s,a__$1.vs,a__$1.ts,a__$1.cs,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(a__$1.cq,1),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(a__$1.cqs,cljs.core.logic.id(c)),a__$1.oc,a__$1._meta)));
a__$1 = G__195241;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.logic.run_constraints = (function run_constraints(xcs){return (function (a){var cq = a.cq;var a__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cq){
return (function (a__$1,c){return cljs.core.logic._queue(a__$1,c);
});})(cq))
,(new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,a.cs,(function (){var or__9629__auto__ = cq;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),a.cqs,a.oc,a._meta)),xcs);if(cljs.core.truth_(cq))
{return a__$1;
} else
{return cljs.core.logic.fix_constraints(a__$1);
}
});
});
cljs.core.logic.run_constraints_STAR_ = (function run_constraints_STAR_(xs,cs,ws){if(((cljs.core.count(cs) === 0)) || ((cljs.core.seq(xs) == null)))
{return cljs.core.logic.s_SHARP_;
} else
{return (function (a){var xcs = cljs.core.logic._constraints_for(cs,a,cljs.core.first(xs),ws);if(cljs.core.seq(xcs))
{return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.run_constraints(xcs),run_constraints_STAR_(cljs.core.next(xs),cs,ws)).call(null,a);
} else
{return run_constraints_STAR_(cljs.core.next(xs),cs,ws).call(null,a);
}
});
}
});
cljs.core.logic.verify_all_bound = (function verify_all_bound(a,constrained){var verify_all_bound_STAR_ = (function verify_all_bound_STAR_(a__$1,constrained__$1){while(true){
if(cljs.core.truth_(constrained__$1))
{var x = cljs.core.first(constrained__$1);if(cljs.core.truth_((function (){var and__9617__auto__ = (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.logic.lvar_QMARK_.call(null,x));if(cljs.core.truth_(and__9617__auto__))
{var and__9617__auto____$1 = (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.logic._walk(a__$1,x)) : cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic._walk(a__$1,x)));if(cljs.core.truth_(and__9617__auto____$1))
{return (cljs.core.logic.get_dom(a__$1,x,cljs.core.constant$keyword$118) == null);
} else
{return and__9617__auto____$1;
}
} else
{return and__9617__auto__;
}
})()))
{throw (new Error([cljs.core.str("Constrained variable "),cljs.core.str(x),cljs.core.str(" without domain")].join('')));
} else
{{
var G__195242 = a__$1;
var G__195243 = cljs.core.next(constrained__$1);
a__$1 = G__195242;
constrained__$1 = G__195243;
continue;
}
}
} else
{return null;
}
break;
}
});
return (verify_all_bound_STAR_.cljs$core$IFn$_invoke$arity$2 ? verify_all_bound_STAR_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.seq(constrained)) : verify_all_bound_STAR_.call(null,a,cljs.core.seq(constrained)));
});
cljs.core.logic.enforceable_constrained = (function enforceable_constrained(a){var cs = a.cs;var km = cs.km;var cm = cs.cm;var vs = cljs.core.keys(km);return cljs.core.filter((function (v){return cljs.core.some((function (cid){var temp__4098__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cm,cid);if(cljs.core.truth_(temp__4098__auto__))
{var c = temp__4098__auto__;return cljs.core.logic.enforceable_QMARK_(c);
} else
{return null;
}
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(km,v));
}),vs);
});
cljs.core.logic.enforce_constraints = (function enforce_constraints(x){return (function (a__130553__auto__){return cljs.core.logic._bind(cljs.core.logic._bind(a__130553__auto__,(cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.logic.force_ans.call(null,x))),(function (a){var constrained = cljs.core.logic.enforceable_constrained(a);cljs.core.logic.verify_all_bound(a,constrained);
return cljs.core.logic.onceo((cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1(constrained) : cljs.core.logic.force_ans.call(null,constrained))).call(null,a);
}));
});
});
cljs.core.logic.reify_constraints = (function reify_constraints(v,r,a){var cs = a.cs;var rcs = cljs.core.into(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter(((function (cs){
return (function (p1__195245_SHARP_){return !((p1__195245_SHARP_ == null));
});})(cs))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cs){
return (function (p1__195244_SHARP_){return cljs.core.logic._reifyc(p1__195244_SHARP_,v,r,a);
});})(cs))
,cljs.core.filter(cljs.core.logic.reifiable_QMARK_,cljs.core.vals(cs.cm)))));if(cljs.core.empty_QMARK_(rcs))
{return (cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2(v,cljs.core.logic.empty_f) : cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f));
} else
{return (cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$119),cljs.core.array_seq([rcs], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,1877),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,16),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,1877),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,29)], 0))))),cljs.core.logic.empty_f) : cljs.core.logic.choice.call(null,cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$119),cljs.core.array_seq([rcs], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,1877),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,16),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,1877),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,29)], 0))))),cljs.core.logic.empty_f));
}
});
cljs.core.logic.reifyg = (function reifyg(x){return (function (a__130553__auto__){return cljs.core.logic._bind(cljs.core.logic._bind(a__130553__auto__,cljs.core.logic.enforce_constraints(x)),(function (a){var v = cljs.core.logic._walk_STAR_(a,x);var r = cljs.core.logic._reify_STAR_(cljs.core.with_meta(cljs.core.logic.empty_s,cljs.core.meta(a)),v);if((cljs.core.count(r) === 0))
{return (cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.choice.cljs$core$IFn$_invoke$arity$2(v,cljs.core.logic.empty_f) : cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f));
} else
{var v__$1 = cljs.core.logic._walk_STAR_(r,v);return cljs.core.logic.reify_constraints(v__$1,r,a);
}
}));
});
});
cljs.core.logic.IUnwrapConstraint = (function (){var obj195247 = {};return obj195247;
})();
cljs.core.logic._unwrap = (function _unwrap(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IUnwrapConstraint$_unwrap$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IUnwrapConstraint$_unwrap$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._unwrap[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._unwrap["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnwrapConstraint.-unwrap",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.cgoal = (function cgoal(c){if(typeof cljs.core.logic.t195252 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195252 = (function (c,cgoal,meta195253){
this.c = c;
this.cgoal = cgoal;
this.meta195253 = meta195253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t195252.cljs$lang$type = true;
cljs.core.logic.t195252.cljs$lang$ctorStr = "cljs.core.logic/t195252";
cljs.core.logic.t195252.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195252");
});
cljs.core.logic.t195252.prototype.cljs$core$logic$IUnwrapConstraint$ = true;
cljs.core.logic.t195252.prototype.cljs$core$logic$IUnwrapConstraint$_unwrap$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.c;
});
cljs.core.logic.t195252.prototype.call = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var c_SINGLEQUOTE_ = cljs.core.logic._step(self__.c,a);if(cljs.core.truth_(cljs.core.logic._runnable_QMARK_(c_SINGLEQUOTE_)))
{var temp__4098__auto__ = (c_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? c_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(a) : c_SINGLEQUOTE_.call(null,a));if(cljs.core.truth_(temp__4098__auto__))
{var a__$1 = temp__4098__auto__;var c_SINGLEQUOTE___$1 = cljs.core.logic._step(self__.c,a__$1);if((cljs.core.logic.ientailed_QMARK_(c_SINGLEQUOTE___$1)) && (!(cljs.core.logic.entailed_QMARK_(self__.c,c_SINGLEQUOTE___$1,a__$1))))
{return cljs.core.logic.addcg(self__.c).call(null,a__$1);
} else
{return a__$1;
}
} else
{return null;
}
} else
{return cljs.core.logic.addcg(self__.c).call(null,a);
}
});
cljs.core.logic.t195252.prototype.apply = (function (self__,args195255){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args195255)));
});
cljs.core.logic.t195252.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var c_SINGLEQUOTE_ = cljs.core.logic._step(self__.c,a);if(cljs.core.truth_(cljs.core.logic._runnable_QMARK_(c_SINGLEQUOTE_)))
{var temp__4098__auto__ = (c_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? c_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(a) : c_SINGLEQUOTE_.call(null,a));if(cljs.core.truth_(temp__4098__auto__))
{var a__$1 = temp__4098__auto__;var c_SINGLEQUOTE___$1 = cljs.core.logic._step(self__.c,a__$1);if((cljs.core.logic.ientailed_QMARK_(c_SINGLEQUOTE___$1)) && (!(cljs.core.logic.entailed_QMARK_(self__.c,c_SINGLEQUOTE___$1,a__$1))))
{return cljs.core.logic.addcg(self__.c).call(null,a__$1);
} else
{return a__$1;
}
} else
{return null;
}
} else
{return cljs.core.logic.addcg(self__.c).call(null,a);
}
});
cljs.core.logic.t195252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195254){var self__ = this;
var _195254__$1 = this;return self__.meta195253;
});
cljs.core.logic.t195252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195254,meta195253__$1){var self__ = this;
var _195254__$1 = this;return (new cljs.core.logic.t195252(self__.c,self__.cgoal,meta195253__$1));
});
cljs.core.logic.__GT_t195252 = (function __GT_t195252(c__$1,cgoal__$1,meta195253){return (new cljs.core.logic.t195252(c__$1,cgoal__$1,meta195253));
});
}
return (new cljs.core.logic.t195252(c,cgoal,null));
});
cljs.core.logic.get_dom_fd = (function get_dom_fd(a,x){if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.logic.lvar_QMARK_.call(null,x))))
{return cljs.core.logic.get_dom(a,x,cljs.core.constant$keyword$118);
} else
{return x;
}
});
cljs.core.logic.sort_by_member_count = (function sort_by_member_count(a){return (function (x,y){var dx = cljs.core.logic.get_dom_fd(a,x);var dy = cljs.core.logic.get_dom_fd(a,y);return (cljs.core.logic._member_count(dx) < cljs.core.logic._member_count(dy));
});
});
cljs.core.logic.sort_by_strategy = (function sort_by_strategy(v,x,a){var G__195257 = cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,G__195257))
{return cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.sort_by_member_count(a),v));
} else
{if(cljs.core.constant$keyword$76)
{return v;
} else
{return null;
}
}
});
cljs.core.logic.IForceAnswerTerm = (function (){var obj195259 = {};return obj195259;
})();
cljs.core.logic._force_ans = (function _force_ans(v,x){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2(v,x);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._force_ans[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._force_ans["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IForceAnswerTerm.-force-ans",v);
}
}
})().call(null,v,x);
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IForceAnswerTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;var loop = (function loop(ys){return (function (a__130553__auto__){return cljs.core.logic._bind(cljs.core.logic._bind(a__130553__auto__,(cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1(cljs.core.logic._lfirst(ys)) : cljs.core.logic.force_ans.call(null,cljs.core.logic._lfirst(ys)))),((cljs.core.logic.lcons_QMARK_(cljs.core.logic._lnext(ys)))?loop(cljs.core.logic._lnext(ys)):cljs.core.logic.s_SHARP_));
});
});
return (loop.cljs$core$IFn$_invoke$arity$1 ? loop.cljs$core$IFn$_invoke$arity$1(v__$1) : loop.call(null,v__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IForceAnswerTerm$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__130553__auto__){return cljs.core.logic._bind(cljs.core.logic._bind(a__130553__auto__,(cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ys))) : cljs.core.logic.force_ans.call(null,cljs.core.val(cljs.core.first(ys))))),loop(cljs.core.next(ys)));
});
} else
{return cljs.core.logic.s_SHARP_;
}
});
return (loop.cljs$core$IFn$_invoke$arity$1 ? loop.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(v__$1)) : loop.call(null,cljs.core.seq(v__$1)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IForceAnswerTerm$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__130553__auto__){return cljs.core.logic._bind(cljs.core.logic._bind(a__130553__auto__,(cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ys))) : cljs.core.logic.force_ans.call(null,cljs.core.val(cljs.core.first(ys))))),loop(cljs.core.next(ys)));
});
} else
{return cljs.core.logic.s_SHARP_;
}
});
return (loop.cljs$core$IFn$_invoke$arity$1 ? loop.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(v__$1)) : loop.call(null,cljs.core.seq(v__$1)));
});
(cljs.core.logic.IForceAnswerTerm["_"] = true);
(cljs.core.logic._force_ans["_"] = (function (v,x){if(cljs.core.sequential_QMARK_(v))
{var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__130553__auto__){return cljs.core.logic._bind(cljs.core.logic._bind(a__130553__auto__,(cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.force_ans.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ys)) : cljs.core.logic.force_ans.call(null,cljs.core.first(ys)))),(function (a){var temp__4096__auto__ = cljs.core.logic.sort_by_strategy(cljs.core.next(ys),x,a);if(cljs.core.truth_(temp__4096__auto__))
{var ys__$1 = temp__4096__auto__;return loop(ys__$1).call(null,a);
} else
{return a;
}
}));
});
} else
{return cljs.core.logic.s_SHARP_;
}
});
return (loop.cljs$core$IFn$_invoke$arity$1 ? loop.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(v)) : loop.call(null,cljs.core.seq(v)));
} else
{if(cljs.core.constant$keyword$76)
{if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.logic.lvar_QMARK_.call(null,x))))
{return cljs.core.logic.ext_run_csg(x,v);
} else
{return cljs.core.logic.s_SHARP_;
}
} else
{return null;
}
}
}));
(cljs.core.logic.IForceAnswerTerm["null"] = true);
(cljs.core.logic._force_ans["null"] = (function (v,x){return cljs.core.logic.s_SHARP_;
}));
cljs.core.logic.force_ans = (function force_ans(x){return (function (a){return (function (){var v = cljs.core.logic._walk(a,x);if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.logic.lvar_QMARK_.call(null,v))))
{return cljs.core.logic._force_ans(cljs.core.logic.get_dom_fd(a,x),v);
} else
{var x__$1 = cljs.core.logic._root_var(a,x);if(cljs.core.sequential_QMARK_(v))
{return cljs.core.logic._force_ans(cljs.core.logic.sort_by_strategy(v,x__$1,a),x__$1);
} else
{return cljs.core.logic._force_ans(v,x__$1);
}
}
})().call(null,a);
});
});
cljs.core.logic.distribute = (function distribute(v_STAR_,strategy){return (function (a){return cljs.core.logic.add_attr(a,v_STAR_,cljs.core.constant$keyword$120,cljs.core.constant$keyword$121);
});
});
cljs.core.logic.IDisunifyTerms = (function (){var obj195261 = {};return obj195261;
})();
cljs.core.logic._disunify_terms = (function _disunify_terms(u,v,s,cs){if((function (){var and__9617__auto__ = u;if(and__9617__auto__)
{return u.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4;
} else
{return and__9617__auto__;
}
})())
{return u.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4(u,v,s,cs);
} else
{var x__10232__auto__ = (((u == null))?null:u);return (function (){var or__9629__auto__ = (cljs.core.logic._disunify_terms[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._disunify_terms["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisunifyTerms.-disunify-terms",u);
}
}
})().call(null,u,v,s,cs);
}
});
cljs.core.logic.IDisunifyWithNil = (function (){var obj195263 = {};return obj195263;
})();
cljs.core.logic._disunify_with_nil = (function _disunify_with_nil(v,u,s,cs){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IDisunifyWithNil$_disunify_with_nil$arity$4;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithNil$_disunify_with_nil$arity$4(v,u,s,cs);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._disunify_with_nil[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._disunify_with_nil["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisunifyWithNil.-disunify-with-nil",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithObject = (function (){var obj195265 = {};return obj195265;
})();
cljs.core.logic._disunify_with_object = (function _disunify_with_object(v,u,s,cs){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IDisunifyWithObject$_disunify_with_object$arity$4;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithObject$_disunify_with_object$arity$4(v,u,s,cs);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._disunify_with_object[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._disunify_with_object["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisunifyWithObject.-disunify-with-object",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithLSeq = (function (){var obj195267 = {};return obj195267;
})();
cljs.core.logic._disunify_with_lseq = (function _disunify_with_lseq(v,u,s,cs){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IDisunifyWithLSeq$_disunify_with_lseq$arity$4;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithLSeq$_disunify_with_lseq$arity$4(v,u,s,cs);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._disunify_with_lseq[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._disunify_with_lseq["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisunifyWithLSeq.-disunify-with-lseq",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithLVar = (function (){var obj195269 = {};return obj195269;
})();
cljs.core.logic._disunify_with_lvar = (function _disunify_with_lvar(v,u,s,cs){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IDisunifyWithLVar$_disunify_with_lvar$arity$4;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithLVar$_disunify_with_lvar$arity$4(v,u,s,cs);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._disunify_with_lvar[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._disunify_with_lvar["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisunifyWithLVar.-disunify-with-lvar",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithSequential = (function (){var obj195271 = {};return obj195271;
})();
cljs.core.logic._disunify_with_seq = (function _disunify_with_seq(v,u,s,cs){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IDisunifyWithSequential$_disunify_with_seq$arity$4;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithSequential$_disunify_with_seq$arity$4(v,u,s,cs);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._disunify_with_seq[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._disunify_with_seq["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisunifyWithSequential.-disunify-with-seq",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithMap = (function (){var obj195273 = {};return obj195273;
})();
cljs.core.logic._disunify_with_map = (function _disunify_with_map(v,u,s,cs){if((function (){var and__9617__auto__ = v;if(and__9617__auto__)
{return v.cljs$core$logic$IDisunifyWithMap$_disunify_with_map$arity$4;
} else
{return and__9617__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithMap$_disunify_with_map$arity$4(v,u,s,cs);
} else
{var x__10232__auto__ = (((v == null))?null:v);return (function (){var or__9629__auto__ = (cljs.core.logic._disunify_with_map[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._disunify_with_map["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisunifyWithMap.-disunify-with-map",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.disunify = (function() {
var disunify = null;
var disunify__3 = (function (s,u,v){return disunify.cljs$core$IFn$_invoke$arity$4(s,u,v,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$109,cljs.core.PersistentArrayMap.EMPTY], null));
});
var disunify__4 = (function (s,u,v,cs){if((u === v))
{return cs;
} else
{var u__$1 = cljs.core.logic._walk(s,u);var v__$1 = cljs.core.logic._walk(s,v);if(((u__$1 === v__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(u__$1,v__$1)))
{return cs;
} else
{if(cljs.core.truth_((function (){var and__9617__auto__ = cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(u__$1) : cljs.core.logic.lvar_QMARK_.call(null,u__$1)));if(and__9617__auto__)
{return (cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(v__$1) : cljs.core.logic.lvar_QMARK_.call(null,v__$1));
} else
{return and__9617__auto__;
}
})()))
{return cljs.core.logic._disunify_terms(v__$1,u__$1,s,cs);
} else
{return cljs.core.logic._disunify_terms(u__$1,v__$1,s,cs);
}
}
}
});
disunify = function(s,u,v,cs){
switch(arguments.length){
case 3:
return disunify__3.call(this,s,u,v);
case 4:
return disunify__4.call(this,s,u,v,cs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disunify.cljs$core$IFn$_invoke$arity$3 = disunify__3;
disunify.cljs$core$IFn$_invoke$arity$4 = disunify__4;
return disunify;
})()
;
cljs.core.logic.disunify_with_map = (function disunify_with_map(v,u,s,cs){if((cljs.core.map_QMARK_(v)) && ((cljs.core.count(u) === cljs.core.count(v))))
{var ks = cljs.core.seq(cljs.core.keys(u));var cs__$1 = cs;while(true){
if(ks)
{var kf = cljs.core.first(ks);var vf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,kf,cljs.core.logic.not_found);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(vf,cljs.core.logic.not_found))
{return null;
} else
{var temp__4096__auto__ = cljs.core.logic.disunify.cljs$core$IFn$_invoke$arity$4(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(u,kf),vf,cs__$1);if(cljs.core.truth_(temp__4096__auto__))
{var cs__$2 = temp__4096__auto__;{
var G__195274 = cljs.core.next(ks);
var G__195275 = cs__$2;
ks = G__195274;
cs__$1 = G__195275;
continue;
}
} else
{return null;
}
}
} else
{return cs__$1;
}
break;
}
} else
{return null;
}
});
(cljs.core.logic.IDisunifyTerms["_"] = true);
(cljs.core.logic._disunify_terms["_"] = (function (u,v,s,cs){if(cljs.core.sequential_QMARK_(u))
{if(cljs.core.sequential_QMARK_(v))
{var u__$1 = cljs.core.seq(u);var v__$1 = cljs.core.seq(v);var cs__$1 = cs;while(true){
if(cljs.core.truth_(u__$1))
{if(cljs.core.truth_(v__$1))
{var uv = cljs.core.first(u__$1);var vv = cljs.core.first(v__$1);var cs__$2 = cljs.core.logic.disunify.cljs$core$IFn$_invoke$arity$4(s,uv,vv,cs__$1);if(cljs.core.truth_(cs__$2))
{{
var G__195278 = cljs.core.next(u__$1);
var G__195279 = cljs.core.next(v__$1);
var G__195280 = cs__$2;
u__$1 = G__195278;
v__$1 = G__195279;
cs__$1 = G__195280;
continue;
}
} else
{return null;
}
} else
{return null;
}
} else
{if((v__$1 == null))
{return cs__$1;
} else
{return null;
}
}
break;
}
} else
{return null;
}
} else
{if(cljs.core.constant$keyword$76)
{if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(u,v)))
{return null;
} else
{return cs;
}
} else
{return null;
}
}
}));
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IDisunifyTerms$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4 = (function (u,v,s,cs){var u__$1 = this;return cljs.core.logic.disunify_with_map(v,u__$1,s,cs);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IDisunifyTerms$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4 = (function (u,v,s,cs){var u__$1 = this;return cljs.core.logic.disunify_with_map(v,u__$1,s,cs);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IDisunifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4 = (function (u,v,s,p__195276){var map__195277 = p__195276;var map__195277__$1 = ((cljs.core.seq_QMARK_(map__195277))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__195277):map__195277);var cs = map__195277__$1;var pc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__195277__$1,cljs.core.constant$keyword$109);var u__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.constant$keyword$109,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pc,u__$1,v));
});
(cljs.core.logic.IDisunifyTerms["null"] = true);
(cljs.core.logic._disunify_terms["null"] = (function (u,v,s,cs){if(!((v == null)))
{return null;
} else
{return cs;
}
}));
cljs.core.logic.recover_vars_from_term = (function recover_vars_from_term(x){if(cljs.core.coll_QMARK_(x))
{var head = cljs.core.first(x);var tail = cljs.core.next(x);var r = cljs.core.PersistentHashSet.EMPTY;while(true){
if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(head) : cljs.core.logic.lvar_QMARK_.call(null,head))))
{{
var G__195281 = cljs.core.first(tail);
var G__195282 = cljs.core.next(tail);
var G__195283 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,head);
head = G__195281;
tail = G__195282;
r = G__195283;
continue;
}
} else
{if(cljs.core.coll_QMARK_(head))
{{
var G__195284 = cljs.core.first(tail);
var G__195285 = cljs.core.into(cljs.core.next(tail),head);
var G__195286 = r;
head = G__195284;
tail = G__195285;
r = G__195286;
continue;
}
} else
{if(cljs.core.seq(tail))
{{
var G__195287 = cljs.core.first(tail);
var G__195288 = cljs.core.next(tail);
var G__195289 = r;
head = G__195287;
tail = G__195288;
r = G__195289;
continue;
}
} else
{if(cljs.core.constant$keyword$76)
{return r;
} else
{return null;
}
}
}
}
break;
}
} else
{if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.logic.lvar_QMARK_.call(null,x))))
{return cljs.core.PersistentHashSet.fromArray([x], true);
} else
{return null;
}
}
});
cljs.core.logic.recover_vars = (function recover_vars(p){var p__$1 = cljs.core.seq(p);var r = cljs.core.PersistentHashSet.EMPTY;while(true){
if(cljs.core.truth_(p__$1))
{var vec__195291 = cljs.core.first(p__$1);var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195291,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195291,1,null);{
var G__195292 = cljs.core.next(p__$1);
var G__195293 = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.logic.recover_vars_from_term(u),cljs.core.array_seq([cljs.core.logic.recover_vars_from_term(v)], 0));
p__$1 = G__195292;
r = G__195293;
continue;
}
} else
{return r;
}
break;
}
});
cljs.core.logic.ITreeConstraint = (function (){var obj195295 = {};return obj195295;
})();
cljs.core.logic.tree_constraint_QMARK_ = (function tree_constraint_QMARK_(x){var G__195297 = x;if(G__195297)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195297.cljs$core$logic$ITreeConstraint$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.IWithPrefix = (function (){var obj195299 = {};return obj195299;
})();
cljs.core.logic._with_prefix = (function _with_prefix(_,p){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IWithPrefix$_with_prefix$arity$2;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IWithPrefix$_with_prefix$arity$2(_,p);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._with_prefix[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._with_prefix["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithPrefix.-with-prefix",_);
}
}
})().call(null,_,p);
}
});
cljs.core.logic.IPrefix = (function (){var obj195301 = {};return obj195301;
})();
cljs.core.logic._prefix = (function _prefix(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IPrefix$_prefix$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IPrefix$_prefix$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._prefix[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._prefix["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrefix.-prefix",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._BANG__EQ_c = (function _BANG__EQ_c(p){if(typeof cljs.core.logic.t195314 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195314 = (function (p,_BANG__EQ_c,meta195315){
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta195315 = meta195315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t195314.cljs$lang$type = true;
cljs.core.logic.t195314.cljs$lang$ctorStr = "cljs.core.logic/t195314";
cljs.core.logic.t195314.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195314");
});
cljs.core.logic.t195314.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t195314.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null);
});
cljs.core.logic.t195314.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t195314.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic.macros","!=","cljs.core.logic.macros/!=",1300254101,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2161),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,18),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2161),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,43)], 0)))));
});
cljs.core.logic.t195314.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq(cljs.core.logic.recover_vars(self__.p));
});
cljs.core.logic.t195314.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t195314.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (this$,v,r,a){var self__ = this;
var this$__$1 = this;var p_STAR_ = cljs.core.logic._reify.cljs$core$IFn$_invoke$arity$3(a,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__195317){var vec__195318 = p__195317;var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195318,0,null);var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195318,1,null);return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,lhs),cljs.core._conj(cljs.core.List.EMPTY,rhs))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2156),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,48),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2156),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,59)], 0)))));
}),self__.p),r);if(cljs.core.empty_QMARK_(p_STAR_))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"!=","!=",-1640530443,null)),p_STAR_)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2159),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,12),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2159),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,23)], 0)))));
}
});
cljs.core.logic.t195314.prototype.cljs$core$logic$IWithPrefix$ = true;
cljs.core.logic.t195314.prototype.cljs$core$logic$IWithPrefix$_with_prefix$arity$2 = (function (_,p__$2){var self__ = this;
var ___$1 = this;return (self__._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1 ? self__._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1(p__$2) : self__._BANG__EQ_c.call(null,p__$2));
});
cljs.core.logic.t195314.prototype.cljs$core$logic$IPrefix$ = true;
cljs.core.logic.t195314.prototype.cljs$core$logic$IPrefix$_prefix$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.p;
});
cljs.core.logic.t195314.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t195314.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t195319 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195319 = (function (s,this$,meta195315,p,_BANG__EQ_c,meta195320){
this.s = s;
this.this$ = this$;
this.meta195315 = meta195315;
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta195320 = meta195320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t195319.cljs$lang$type = true;
cljs.core.logic.t195319.cljs$lang$ctorStr = "cljs.core.logic/t195319";
cljs.core.logic.t195319.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195319");
});
cljs.core.logic.t195319.prototype.cljs$core$logic$IEntailed$ = true;
cljs.core.logic.t195319.prototype.cljs$core$logic$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.empty_QMARK_(self__.p);
});
cljs.core.logic.t195319.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t195319.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.some((function (p1__195302_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.logic._walk(self__.s,p1__195302_SHARP_),p1__195302_SHARP_);
}),cljs.core.logic.recover_vars(self__.p));
});
cljs.core.logic.t195319.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var p__$3 = (function (){var sp = cljs.core.seq(self__.p);var p__$3 = self__.p;while(true){
if(cljs.core.truth_(sp))
{var vec__195323 = cljs.core.first(sp);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195323,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195323,1,null);var xv = cljs.core.logic._walk_STAR_(s__$2,x);var vv = cljs.core.logic._walk_STAR_(s__$2,v);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xv,vv))
{{
var G__195325 = cljs.core.next(sp);
var G__195326 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p__$3,x);
sp = G__195325;
p__$3 = G__195326;
continue;
}
} else
{if((cljs.core.logic._unify(s__$2,xv,vv) == null))
{return null;
} else
{if(cljs.core.constant$keyword$76)
{{
var G__195327 = cljs.core.next(sp);
var G__195328 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p__$3,x),xv,vv);
sp = G__195327;
p__$3 = G__195328;
continue;
}
} else
{return null;
}
}
}
} else
{return p__$3;
}
break;
}
})();if(cljs.core.truth_(p__$3))
{if(cljs.core.empty_QMARK_(p__$3))
{return null;
} else
{return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.remcg(self__.this$),cljs.core.logic.cgoal((self__._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1 ? self__._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1(p__$3) : self__._BANG__EQ_c.call(null,p__$3)))).call(null,s__$2);
}
} else
{return cljs.core.logic.remcg(self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t195319.prototype.apply = (function (self__,args195322){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args195322)));
});
cljs.core.logic.t195319.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var p__$3 = (function (){var sp = cljs.core.seq(self__.p);var p__$3 = self__.p;while(true){
if(cljs.core.truth_(sp))
{var vec__195324 = cljs.core.first(sp);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195324,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195324,1,null);var xv = cljs.core.logic._walk_STAR_(s__$2,x);var vv = cljs.core.logic._walk_STAR_(s__$2,v);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xv,vv))
{{
var G__195329 = cljs.core.next(sp);
var G__195330 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p__$3,x);
sp = G__195329;
p__$3 = G__195330;
continue;
}
} else
{if((cljs.core.logic._unify(s__$2,xv,vv) == null))
{return null;
} else
{if(cljs.core.constant$keyword$76)
{{
var G__195331 = cljs.core.next(sp);
var G__195332 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p__$3,x),xv,vv);
sp = G__195331;
p__$3 = G__195332;
continue;
}
} else
{return null;
}
}
}
} else
{return p__$3;
}
break;
}
})();if(cljs.core.truth_(p__$3))
{if(cljs.core.empty_QMARK_(p__$3))
{return null;
} else
{return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2(cljs.core.logic.remcg(self__.this$),cljs.core.logic.cgoal((self__._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1 ? self__._BANG__EQ_c.cljs$core$IFn$_invoke$arity$1(p__$3) : self__._BANG__EQ_c.call(null,p__$3)))).call(null,s__$2);
}
} else
{return cljs.core.logic.remcg(self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t195319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195321){var self__ = this;
var _195321__$1 = this;return self__.meta195320;
});
cljs.core.logic.t195319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195321,meta195320__$1){var self__ = this;
var _195321__$1 = this;return (new cljs.core.logic.t195319(self__.s,self__.this$,self__.meta195315,self__.p,self__._BANG__EQ_c,meta195320__$1));
});
cljs.core.logic.__GT_t195319 = (function __GT_t195319(s__$1,this$__$2,meta195315__$1,p__$2,_BANG__EQ_c__$2,meta195320){return (new cljs.core.logic.t195319(s__$1,this$__$2,meta195315__$1,p__$2,_BANG__EQ_c__$2,meta195320));
});
}
return (new cljs.core.logic.t195319(s,this$__$1,self__.meta195315,self__.p,self__._BANG__EQ_c,null));
});
cljs.core.logic.t195314.prototype.cljs$core$logic$ITreeConstraint$ = true;
cljs.core.logic.t195314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195316){var self__ = this;
var _195316__$1 = this;return self__.meta195315;
});
cljs.core.logic.t195314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195316,meta195315__$1){var self__ = this;
var _195316__$1 = this;return (new cljs.core.logic.t195314(self__.p,self__._BANG__EQ_c,meta195315__$1));
});
cljs.core.logic.__GT_t195314 = (function __GT_t195314(p__$1,_BANG__EQ_c__$1,meta195315){return (new cljs.core.logic.t195314(p__$1,_BANG__EQ_c__$1,meta195315));
});
}
return (new cljs.core.logic.t195314(p,_BANG__EQ_c,null));
});
/**
* A relation which guarantees no element of l will unify
* with another element of l.
*/
cljs.core.logic.distincto = (function distincto(l){return (function (a195336){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus(cljs.core.logic._bind(a195336,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),cljs.core.List.EMPTY,l);if(cljs.core.truth_(temp__4098__auto__))
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
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus(cljs.core.logic._bind(a195336,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var h = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"h","h",-1640531423,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h","h",-1640531423,null)));return cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null),l);if(cljs.core.truth_(temp__4098__auto__))
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
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a195336,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var t = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",-1640531411,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"t","t",-1640531411,null)));var h1 = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"h1","h1",-1640528254,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h1","h1",-1640528254,null)));var h0 = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"h0","h0",-1640528255,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h0","h0",-1640528255,null)));return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(h0,(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(h1,t) : cljs.core.logic.lcons.call(null,h1,t))) : cljs.core.logic.lcons.call(null,h0,(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(h1,t) : cljs.core.logic.lcons.call(null,h1,t)))),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130469__auto__){var cs__130470__auto__ = cljs.core.logic.disunify.cljs$core$IFn$_invoke$arity$3(a__130469__auto__,h0,h1);if(!((cs__130470__auto__ == null)))
{var p__130471__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(cs__130470__auto__);if(cljs.core.empty_QMARK_(p__130471__auto__))
{return null;
} else
{if(cljs.core.truth_(cljs.core.some((function (p__195337){var vec__195338 = p__195337;var u__130472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195338,0,null);var v__130473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195338,1,null);return (cljs.core.logic._unify(a__130469__auto__,u__130472__auto__,v__130473__auto__) == null);
}),p__130471__auto__)))
{return a__130469__auto__;
} else
{return cljs.core.logic.cgoal(cljs.core.logic._BANG__EQ_c(p__130471__auto__)).call(null,a__130469__auto__);
}
}
} else
{return a__130469__auto__;
}
})),distincto((cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(h0,t) : cljs.core.logic.lcons.call(null,h0,t)))),distincto((cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(h1,t) : cljs.core.logic.lcons.call(null,h1,t))));
})));
}));
}))));
}))));
})));
});
});
/**
* A relation between l and o where is removed from
* l exactly one time.
*/
cljs.core.logic.rembero = (function rembero(x,l,o){return (function (a195342){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus(cljs.core.logic._bind(a195342,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var xs = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"xs","xs",-1640527692,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"xs","xs",-1640527692,null)));return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(x,xs) : cljs.core.logic.lcons.call(null,x,xs)),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130492__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a__130492__auto____$1,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),xs,o);if(cljs.core.truth_(temp__4098__auto__))
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
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind(a195342,(function (a__130492__auto__){return (new cljs.core.logic.Inc((function (){var ys = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"ys","ys",-1640527661,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"ys","ys",-1640527661,null)));var y = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"y","y",-1640531406,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"y","y",-1640531406,null)));return cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto__,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(y,ys) : cljs.core.logic.lcons.call(null,y,ys)),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130492__auto____$1){return (new cljs.core.logic.Inc((function (){var zs = (cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"zs","zs",-1640527630,null)) : cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"zs","zs",-1640527630,null)));return cljs.core.logic._bind(cljs.core.logic._bind(cljs.core.logic._bind(a__130492__auto____$1,(function (a__130459__auto__){var has_cs_QMARK___130460__auto__ = (cljs.core.count(a__130459__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify(((has_cs_QMARK___130460__auto__)?(new cljs.core.logic.Substitutions(a__130459__auto__.s,cljs.core.PersistentVector.EMPTY,a__130459__auto__.ts,a__130459__auto__.cs,a__130459__auto__.cq,a__130459__auto__.cqs,a__130459__auto__.oc,a__130459__auto__._meta)):a__130459__auto__),(cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.logic.lcons.cljs$core$IFn$_invoke$arity$2(y,zs) : cljs.core.logic.lcons.call(null,y,zs)),o);if(cljs.core.truth_(temp__4098__auto__))
{var ap__130461__auto__ = temp__4098__auto__;var vs__130462__auto__ = ((has_cs_QMARK___130460__auto__)?ap__130461__auto__.vs:null);var changed_QMARK___130463__auto__ = (cljs.core.count(vs__130462__auto__) > 0);if(changed_QMARK___130463__auto__)
{return cljs.core.logic.run_constraints_STAR_(vs__130462__auto__,ap__130461__auto__.cs,cljs.core.constant$keyword$107).call(null,(new cljs.core.logic.Substitutions(ap__130461__auto__.s,null,ap__130461__auto__.ts,ap__130461__auto__.cs,ap__130461__auto__.cq,ap__130461__auto__.cqs,ap__130461__auto__.oc,ap__130461__auto__._meta)));
} else
{return ap__130461__auto__;
}
} else
{return null;
}
})),(function (a__130469__auto__){var cs__130470__auto__ = cljs.core.logic.disunify.cljs$core$IFn$_invoke$arity$3(a__130469__auto__,y,x);if(!((cs__130470__auto__ == null)))
{var p__130471__auto__ = cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(cs__130470__auto__);if(cljs.core.empty_QMARK_(p__130471__auto__))
{return null;
} else
{if(cljs.core.truth_(cljs.core.some((function (p__195343){var vec__195344 = p__195343;var u__130472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195344,0,null);var v__130473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195344,1,null);return (cljs.core.logic._unify(a__130469__auto__,u__130472__auto__,v__130473__auto__) == null);
}),p__130471__auto__)))
{return a__130469__auto__;
} else
{return cljs.core.logic.cgoal(cljs.core.logic._BANG__EQ_c(p__130471__auto__)).call(null,a__130469__auto__);
}
}
} else
{return a__130469__auto__;
}
})),rembero(x,ys,zs));
})));
}));
})));
}));
}))));
})));
});
});
cljs.core.logic.ground_term_QMARK_ = (function ground_term_QMARK_(x,s){var _ground_term_QMARK_ = (function _ground_term_QMARK_(x__$1,s__$1){var x__$2 = cljs.core.logic._walk(s__$1,x__$1);if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(x__$2) : cljs.core.logic.lvar_QMARK_.call(null,x__$2))))
{throw (new Error());
} else
{return cljs.core.logic._walk_term(x__$2,(function (x__$3){var x__$4 = cljs.core.logic._walk(s__$1,x__$3);if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(x__$4) : cljs.core.logic.lvar_QMARK_.call(null,x__$4))))
{throw (new Error());
} else
{if(cljs.core.logic.tree_term_QMARK_(x__$4))
{return _ground_term_QMARK_(x__$4,s__$1);
} else
{if(cljs.core.constant$keyword$76)
{return x__$4;
} else
{return null;
}
}
}
}));
}
});
try{(_ground_term_QMARK_.cljs$core$IFn$_invoke$arity$2 ? _ground_term_QMARK_.cljs$core$IFn$_invoke$arity$2(x,s) : _ground_term_QMARK_.call(null,x,s));
return true;
}catch (e195346){if((e195346 instanceof Error))
{var e = e195346;return false;
} else
{if(cljs.core.constant$keyword$76)
{throw e195346;
} else
{return null;
}
}
}});
cljs.core.logic._predc = (function() {
var _predc = null;
var _predc__2 = (function (x,p){return _predc.cljs$core$IFn$_invoke$arity$3(x,p,p);
});
var _predc__3 = (function (x,p,pform){if(typeof cljs.core.logic.t195354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195354 = (function (pform,p,x,_predc,meta195355){
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta195355 = meta195355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t195354.cljs$lang$type = true;
cljs.core.logic.t195354.cljs$lang$ctorStr = "cljs.core.logic/t195354";
cljs.core.logic.t195354.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195354");
});
cljs.core.logic.t195354.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t195354.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null);
});
cljs.core.logic.t195354.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t195354.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,self__.pform)) && (cljs.core.fn_QMARK_(self__.pform)))
{return (self__.pform.cljs$core$IFn$_invoke$arity$4 ? self__.pform.cljs$core$IFn$_invoke$arity$4(c__$1,v,r,s) : self__.pform.call(null,c__$1,v,r,s));
} else
{return self__.pform;
}
});
cljs.core.logic.t195354.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t195354.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.seq_QMARK_(self__.pform))
{return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2227),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,24),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2227),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,29)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,self__.pform))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2227),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,23),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2227),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,37)], 0)))));
} else
{return cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2228),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,23),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2228),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,44)], 0)))));
}
});
cljs.core.logic.t195354.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t195354.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t195354.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t195357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195357 = (function (s,this$,meta195355,pform,p,x,_predc,meta195358){
this.s = s;
this.this$ = this$;
this.meta195355 = meta195355;
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta195358 = meta195358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t195357.cljs$lang$type = true;
cljs.core.logic.t195357.cljs$lang$ctorStr = "cljs.core.logic/t195357";
cljs.core.logic.t195357.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195357");
});
cljs.core.logic.t195357.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t195357.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.logic._walk(self__.s,self__.x)) : cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic._walk(self__.s,self__.x))));
});
cljs.core.logic.t195357.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var x__$3 = cljs.core.logic._walk(s__$2,self__.x);if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(x__$3) : self__.p.call(null,x__$3))))
{return cljs.core.logic.remcg(self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t195357.prototype.apply = (function (self__,args195360){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args195360)));
});
cljs.core.logic.t195357.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var x__$3 = cljs.core.logic._walk(s__$2,self__.x);if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(x__$3) : self__.p.call(null,x__$3))))
{return cljs.core.logic.remcg(self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t195357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195359){var self__ = this;
var _195359__$1 = this;return self__.meta195358;
});
cljs.core.logic.t195357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195359,meta195358__$1){var self__ = this;
var _195359__$1 = this;return (new cljs.core.logic.t195357(self__.s,self__.this$,self__.meta195355,self__.pform,self__.p,self__.x,self__._predc,meta195358__$1));
});
cljs.core.logic.__GT_t195357 = (function __GT_t195357(s__$1,this$__$2,meta195355__$1,pform__$2,p__$2,x__$2,_predc__$2,meta195358){return (new cljs.core.logic.t195357(s__$1,this$__$2,meta195355__$1,pform__$2,p__$2,x__$2,_predc__$2,meta195358));
});
}
return (new cljs.core.logic.t195357(s,this$__$1,self__.meta195355,self__.pform,self__.p,self__.x,self__._predc,null));
});
cljs.core.logic.t195354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195356){var self__ = this;
var _195356__$1 = this;return self__.meta195355;
});
cljs.core.logic.t195354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195356,meta195355__$1){var self__ = this;
var _195356__$1 = this;return (new cljs.core.logic.t195354(self__.pform,self__.p,self__.x,self__._predc,meta195355__$1));
});
cljs.core.logic.__GT_t195354 = (function __GT_t195354(pform__$1,p__$1,x__$1,_predc__$1,meta195355){return (new cljs.core.logic.t195354(pform__$1,p__$1,x__$1,_predc__$1,meta195355));
});
}
return (new cljs.core.logic.t195354(pform,p,x,_predc,null));
});
_predc = function(x,p,pform){
switch(arguments.length){
case 2:
return _predc__2.call(this,x,p);
case 3:
return _predc__3.call(this,x,p,pform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_predc.cljs$core$IFn$_invoke$arity$2 = _predc__2;
_predc.cljs$core$IFn$_invoke$arity$3 = _predc__3;
return _predc;
})()
;
cljs.core.logic.predc = (function() {
var predc = null;
var predc__2 = (function (x,p){return predc.cljs$core$IFn$_invoke$arity$3(x,p,p);
});
var predc__3 = (function (x,p,pform){return cljs.core.logic.cgoal(cljs.core.logic._predc.cljs$core$IFn$_invoke$arity$3(x,p,pform));
});
predc = function(x,p,pform){
switch(arguments.length){
case 2:
return predc__2.call(this,x,p);
case 3:
return predc__3.call(this,x,p,pform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
predc.cljs$core$IFn$_invoke$arity$2 = predc__2;
predc.cljs$core$IFn$_invoke$arity$3 = predc__3;
return predc;
})()
;
cljs.core.logic.tramp = (function tramp(f){var f__$1 = f;while(true){
if(cljs.core.fn_QMARK_(f__$1))
{{
var G__195361 = (f__$1.cljs$core$IFn$_invoke$arity$0 ? f__$1.cljs$core$IFn$_invoke$arity$0() : f__$1.call(null));
f__$1 = G__195361;
continue;
}
} else
{return f__$1;
}
break;
}
});
cljs.core.logic._nafc = (function _nafc(c,args){if(typeof cljs.core.logic.t195370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195370 = (function (args,c,_nafc,meta195371){
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta195371 = meta195371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t195370.cljs$lang$type = true;
cljs.core.logic.t195370.cljs$lang$ctorStr = "cljs.core.logic/t195370";
cljs.core.logic.t195370.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195370");
});
cljs.core.logic.t195370.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t195370.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null);
});
cljs.core.logic.t195370.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t195370.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2269),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,12),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2269),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,16)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,self__.c),cljs.core.array_seq([cljs.core.logic._reify.cljs$core$IFn$_invoke$arity$3(s,self__.args,r)], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2269),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,11),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2269),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,40)], 0)))));
});
cljs.core.logic.t195370.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t195370.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2265),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,21),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2265),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,41)], 0)))));
});
cljs.core.logic.t195370.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c], null),self__.args));
});
cljs.core.logic.t195370.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t195370.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t195373 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195373 = (function (s,this$,meta195371,args,c,_nafc,meta195374){
this.s = s;
this.this$ = this$;
this.meta195371 = meta195371;
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta195374 = meta195374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t195373.cljs$lang$type = true;
cljs.core.logic.t195373.cljs$lang$ctorStr = "cljs.core.logic/t195373";
cljs.core.logic.t195373.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195373");
});
cljs.core.logic.t195373.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t195373.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.every_QMARK_((function (p1__195362_SHARP_){return cljs.core.logic.ground_term_QMARK_(p1__195362_SHARP_,self__.s);
}),self__.args);
});
cljs.core.logic.t195373.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(cljs.core.logic.tramp(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg(self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t195373.prototype.apply = (function (self__,args195376){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args195376)));
});
cljs.core.logic.t195373.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(cljs.core.logic.tramp(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg(self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t195373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195375){var self__ = this;
var _195375__$1 = this;return self__.meta195374;
});
cljs.core.logic.t195373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195375,meta195374__$1){var self__ = this;
var _195375__$1 = this;return (new cljs.core.logic.t195373(self__.s,self__.this$,self__.meta195371,self__.args,self__.c,self__._nafc,meta195374__$1));
});
cljs.core.logic.__GT_t195373 = (function __GT_t195373(s__$1,this$__$2,meta195371__$1,args__$2,c__$2,_nafc__$2,meta195374){return (new cljs.core.logic.t195373(s__$1,this$__$2,meta195371__$1,args__$2,c__$2,_nafc__$2,meta195374));
});
}
return (new cljs.core.logic.t195373(s,this$__$1,self__.meta195371,self__.args,self__.c,self__._nafc,null));
});
cljs.core.logic.t195370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195372){var self__ = this;
var _195372__$1 = this;return self__.meta195371;
});
cljs.core.logic.t195370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195372,meta195371__$1){var self__ = this;
var _195372__$1 = this;return (new cljs.core.logic.t195370(self__.args,self__.c,self__._nafc,meta195371__$1));
});
cljs.core.logic.__GT_t195370 = (function __GT_t195370(args__$1,c__$1,_nafc__$1,meta195371){return (new cljs.core.logic.t195370(args__$1,c__$1,_nafc__$1,meta195371));
});
}
return (new cljs.core.logic.t195370(args,c,_nafc,null));
});
/**
* EXPERIMENTAL: negation as failure constraint. All arguments to the goal c
* must be ground. If some argument is not ground the execution of this
* constraint will be delayed.
* @param {...*} var_args
*/
cljs.core.logic.nafc = (function() { 
var nafc__delegate = function (c,args){return cljs.core.logic.cgoal(cljs.core.logic._nafc(c,args));
};
var nafc = function (c,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nafc__delegate.call(this,c,args);};
nafc.cljs$lang$maxFixedArity = 1;
nafc.cljs$lang$applyTo = (function (arglist__195377){
var c = cljs.core.first(arglist__195377);
var args = cljs.core.rest(arglist__195377);
return nafc__delegate(c,args);
});
nafc.cljs$core$IFn$_invoke$arity$variadic = nafc__delegate;
return nafc;
})()
;
cljs.core.logic.IConstrainTree = (function (){var obj195379 = {};return obj195379;
})();
cljs.core.logic._constrain_tree = (function _constrain_tree(t,fc,s){if((function (){var and__9617__auto__ = t;if(and__9617__auto__)
{return t.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3;
} else
{return and__9617__auto__;
}
})())
{return t.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3(t,fc,s);
} else
{var x__10232__auto__ = (((t == null))?null:t);return (function (){var or__9629__auto__ = (cljs.core.logic._constrain_tree[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._constrain_tree["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IConstrainTree.-constrain-tree",t);
}
}
})().call(null,t,fc,s);
}
});
cljs.core.logic.constrain_tree_map = (function constrain_tree_map(t,fc,s){var t__$1 = cljs.core.seq(t);var s__$1 = s;while(true){
if(cljs.core.truth_(t__$1))
{var vec__195381 = cljs.core.first(t__$1);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195381,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__195381,1,null);var s__$2 = (fc.cljs$core$IFn$_invoke$arity$2 ? fc.cljs$core$IFn$_invoke$arity$2(v,s__$1) : fc.call(null,v,s__$1));if(cljs.core.truth_(s__$2))
{{
var G__195382 = cljs.core.next(t__$1);
var G__195383 = s__$2;
t__$1 = G__195382;
s__$1 = G__195383;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
});
(cljs.core.logic.IConstrainTree["_"] = true);
(cljs.core.logic._constrain_tree["_"] = (function (t,fc,s){if(cljs.core.sequential_QMARK_(t))
{var t__$1 = cljs.core.seq(t);var s__$1 = s;while(true){
if(cljs.core.truth_(t__$1))
{var temp__4098__auto__ = (fc.cljs$core$IFn$_invoke$arity$2 ? fc.cljs$core$IFn$_invoke$arity$2(cljs.core.first(t__$1),s__$1) : fc.call(null,cljs.core.first(t__$1),s__$1));if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__195384 = cljs.core.next(t__$1);
var G__195385 = s__$2;
t__$1 = G__195384;
s__$1 = G__195385;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
} else
{if(cljs.core.logic.record_QMARK_(t))
{return cljs.core.logic.constrain_tree_map(t,fc,s);
} else
{if(cljs.core.constant$keyword$76)
{return null;
} else
{return null;
}
}
}
}));
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IConstrainTree$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var t__$1 = this;return cljs.core.logic.constrain_tree_map(t__$1,fc,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IConstrainTree$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var t__$1 = this;return cljs.core.logic.constrain_tree_map(t__$1,fc,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IConstrainTree$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var t__$1 = this;var t__$2 = t__$1;var s__$1 = s;while(true){
if(cljs.core.truth_((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(t__$2) : cljs.core.logic.lvar_QMARK_.call(null,t__$2))))
{return (fc.cljs$core$IFn$_invoke$arity$2 ? fc.cljs$core$IFn$_invoke$arity$2(t__$2,s__$1) : fc.call(null,t__$2,s__$1));
} else
{var temp__4098__auto__ = (fc.cljs$core$IFn$_invoke$arity$2 ? fc.cljs$core$IFn$_invoke$arity$2(cljs.core.logic._lfirst(t__$2),s__$1) : fc.call(null,cljs.core.logic._lfirst(t__$2),s__$1));if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__195386 = cljs.core.logic._lnext(t__$2);
var G__195387 = s__$2;
t__$2 = G__195386;
s__$1 = G__195387;
continue;
}
} else
{return null;
}
}
break;
}
});
cljs.core.logic.constrain_tree = (function constrain_tree(t,fc){return (function (a){return cljs.core.logic._constrain_tree(t,fc,a);
});
});
cljs.core.logic._fixc = (function() {
var _fixc = null;
var _fixc__3 = (function (x,f,reifier){return _fixc.cljs$core$IFn$_invoke$arity$4(x,f,null,reifier);
});
var _fixc__4 = (function (x,f,runnable,reifier){if(typeof cljs.core.logic.t195395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195395 = (function (reifier,runnable,f,x,_fixc,meta195396){
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta195396 = meta195396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t195395.cljs$lang$type = true;
cljs.core.logic.t195395.cljs$lang$ctorStr = "cljs.core.logic/t195395";
cljs.core.logic.t195395.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195395");
});
cljs.core.logic.t195395.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t195395.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null);
});
cljs.core.logic.t195395.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t195395.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if(cljs.core.fn_QMARK_(self__.reifier))
{return (self__.reifier.cljs$core$IFn$_invoke$arity$5 ? self__.reifier.cljs$core$IFn$_invoke$arity$5(c__$1,self__.x,v,r,s) : self__.reifier.call(null,c__$1,self__.x,v,r,s));
} else
{var x__$2 = cljs.core.logic._walk_STAR_(r,self__.x);return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2355),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,16),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2355),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,20)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,x__$2),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,self__.reifier)], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2355),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,15),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2355),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,33)], 0)))));
}
});
cljs.core.logic.t195395.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t195395.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2348),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,21),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2348),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,41)], 0)))));
});
cljs.core.logic.t195395.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.vector_QMARK_(self__.x))
{return self__.x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
}
});
cljs.core.logic.t195395.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t195395.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic._walk(s,self__.x);if(typeof cljs.core.logic.t195398 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t195398 = (function (xv,s,this$,meta195396,reifier,runnable,f,x,_fixc,meta195399){
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta195396 = meta195396;
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta195399 = meta195399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t195398.cljs$lang$type = true;
cljs.core.logic.t195398.cljs$lang$ctorStr = "cljs.core.logic/t195398";
cljs.core.logic.t195398.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/t195398");
});
cljs.core.logic.t195398.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t195398.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.fn_QMARK_(self__.runnable))
{return (self__.runnable.cljs$core$IFn$_invoke$arity$2 ? self__.runnable.cljs$core$IFn$_invoke$arity$2(self__.x,self__.s) : self__.runnable.call(null,self__.x,self__.s));
} else
{return cljs.core.not((cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.logic.lvar_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.xv) : cljs.core.logic.lvar_QMARK_.call(null,self__.xv)));
}
});
cljs.core.logic.t195398.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2((self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(self__.xv,s__$2,self__.reifier) : self__.f.call(null,self__.xv,s__$2,self__.reifier)),cljs.core.logic.remcg(self__.this$)).call(null,s__$2);
});
cljs.core.logic.t195398.prototype.apply = (function (self__,args195401){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args195401)));
});
cljs.core.logic.t195398.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2((self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(self__.xv,s__$2,self__.reifier) : self__.f.call(null,self__.xv,s__$2,self__.reifier)),cljs.core.logic.remcg(self__.this$)).call(null,s__$2);
});
cljs.core.logic.t195398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195400){var self__ = this;
var _195400__$1 = this;return self__.meta195399;
});
cljs.core.logic.t195398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195400,meta195399__$1){var self__ = this;
var _195400__$1 = this;return (new cljs.core.logic.t195398(self__.xv,self__.s,self__.this$,self__.meta195396,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta195399__$1));
});
cljs.core.logic.__GT_t195398 = (function __GT_t195398(xv__$1,s__$1,this$__$2,meta195396__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta195399){return (new cljs.core.logic.t195398(xv__$1,s__$1,this$__$2,meta195396__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta195399));
});
}
return (new cljs.core.logic.t195398(xv,s,this$__$1,self__.meta195396,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,null));
});
cljs.core.logic.t195395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_195397){var self__ = this;
var _195397__$1 = this;return self__.meta195396;
});
cljs.core.logic.t195395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_195397,meta195396__$1){var self__ = this;
var _195397__$1 = this;return (new cljs.core.logic.t195395(self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta195396__$1));
});
cljs.core.logic.__GT_t195395 = (function __GT_t195395(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta195396){return (new cljs.core.logic.t195395(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta195396));
});
}
return (new cljs.core.logic.t195395(reifier,runnable,f,x,_fixc,null));
});
_fixc = function(x,f,runnable,reifier){
switch(arguments.length){
case 3:
return _fixc__3.call(this,x,f,runnable);
case 4:
return _fixc__4.call(this,x,f,runnable,reifier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_fixc.cljs$core$IFn$_invoke$arity$3 = _fixc__3;
_fixc.cljs$core$IFn$_invoke$arity$4 = _fixc__4;
return _fixc;
})()
;
cljs.core.logic.fixc = (function() {
var fixc = null;
var fixc__3 = (function (x,f,reifier){return fixc.cljs$core$IFn$_invoke$arity$4(x,f,null,reifier);
});
var fixc__4 = (function (x,f,runnable,reifier){return cljs.core.logic.cgoal(cljs.core.logic._fixc.cljs$core$IFn$_invoke$arity$4(x,f,runnable,reifier));
});
fixc = function(x,f,runnable,reifier){
switch(arguments.length){
case 3:
return fixc__3.call(this,x,f,runnable);
case 4:
return fixc__4.call(this,x,f,runnable,reifier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fixc.cljs$core$IFn$_invoke$arity$3 = fixc__3;
fixc.cljs$core$IFn$_invoke$arity$4 = fixc__4;
return fixc;
})()
;
cljs.core.logic.treec = (function treec(x,fc,reifier){return cljs.core.logic.fixc.cljs$core$IFn$_invoke$arity$3(x,(function loop(t,a,reifier__$1){if(cljs.core.logic.tree_term_QMARK_(t))
{return cljs.core.logic.composeg.cljs$core$IFn$_invoke$arity$2((fc.cljs$core$IFn$_invoke$arity$1 ? fc.cljs$core$IFn$_invoke$arity$1(t) : fc.call(null,t)),cljs.core.logic.constrain_tree(t,(function (t__$1,a__$1){return cljs.core.logic.fixc.cljs$core$IFn$_invoke$arity$3(t__$1,loop,reifier__$1).call(null,a__$1);
})));
} else
{return (fc.cljs$core$IFn$_invoke$arity$1 ? fc.cljs$core$IFn$_invoke$arity$1(t) : fc.call(null,t));
}
}),reifier);
});
cljs.core.logic.seqc = (function seqc(v){return cljs.core.logic.fixc.cljs$core$IFn$_invoke$arity$3(v,(function (t,_,___$1){if(cljs.core.sequential_QMARK_(t))
{return cljs.core.logic.succeed;
} else
{if(cljs.core.logic.lcons_QMARK_(t))
{return seqc(cljs.core.logic._lnext(t));
} else
{if(cljs.core.constant$keyword$76)
{return cljs.core.logic.fail;
} else
{return null;
}
}
}
}),(function (_,v__$1,___$1,r,a){return cljs.core.with_meta(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core.logic","seqc","cljs.core.logic/seqc",1018702372,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2381),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,13),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2381),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,17)], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.logic._reify.cljs$core$IFn$_invoke$arity$3(a,v__$1,r)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$110),cljs.core._conj(cljs.core.List.EMPTY,2381),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$111),cljs.core._conj(cljs.core.List.EMPTY,12),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$112),cljs.core._conj(cljs.core.List.EMPTY,2381),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$113),cljs.core._conj(cljs.core.List.EMPTY,34)], 0)))));
}));
});
cljs.core.logic.benchmark_runner = (function benchmark_runner(){return null;
});
cljs.core.logic.reset = (function reset(){return location.reload(true);
});
cljs.core.logic._main = (function _main(){cljs.core.enable_console_print_BANG_();
return cljs.core.logic.benchmark_runner();
});
goog.exportSymbol('cljs.core.logic._main', cljs.core.logic._main);
cljs.core.logic.IStream = (function (){var obj195403 = {};return obj195403;
})();
cljs.core.logic.IStep = (function (){var obj195405 = {};return obj195405;
})();
cljs.core.logic._yield = (function _yield(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IStep$_yield$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IStep$_yield$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._yield[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._yield["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IStep.-yield",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._skip = (function _skip(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IStep$_skip$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IStep$_skip$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._skip[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._skip["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IStep.-skip",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._done = (function _done(_){if((function (){var and__9617__auto__ = _;if(and__9617__auto__)
{return _.cljs$core$logic$IStep$_done$arity$1;
} else
{return and__9617__auto__;
}
})())
{return _.cljs$core$logic$IStep$_done$arity$1(_);
} else
{var x__10232__auto__ = (((_ == null))?null:_);return (function (){var or__9629__auto__ = (cljs.core.logic._done[goog.typeOf(x__10232__auto__)]);if(or__9629__auto__)
{return or__9629__auto__;
} else
{var or__9629__auto____$1 = (cljs.core.logic._done["_"]);if(or__9629__auto____$1)
{return or__9629__auto____$1;
} else
{throw cljs.core.missing_protocol("IStep.-done",_);
}
}
})().call(null,_);
}
});

/**
* @constructor
*/
cljs.core.logic.Stream = (function (state,size,stepper,done){
this.state = state;
this.size = size;
this.stepper = stepper;
this.done = done;
})
cljs.core.logic.Stream.cljs$lang$type = true;
cljs.core.logic.Stream.cljs$lang$ctorStr = "cljs.core.logic/Stream";
cljs.core.logic.Stream.cljs$lang$ctorPrWriter = (function (this__10173__auto__,writer__10174__auto__,opt__10175__auto__){return cljs.core._write(writer__10174__auto__,"cljs.core.logic/Stream");
});
cljs.core.logic.Stream.prototype.cljs$core$logic$IStep$ = true;
cljs.core.logic.Stream.prototype.cljs$core$logic$IStep$_yield$arity$1 = (function (s){var self__ = this;
var s__$1 = this;return s__$1.state = (self__.stepper.cljs$core$IFn$_invoke$arity$0 ? self__.stepper.cljs$core$IFn$_invoke$arity$0() : self__.stepper.call(null));
});
cljs.core.logic.Stream.prototype.cljs$core$logic$IStep$_skip$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.stepper.cljs$core$IFn$_invoke$arity$0 ? self__.stepper.cljs$core$IFn$_invoke$arity$0() : self__.stepper.call(null));
});
cljs.core.logic.Stream.prototype.cljs$core$logic$IStep$_done$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.logic.s.done = true;
});
cljs.core.logic.Stream.prototype.cljs$core$logic$IStream$ = true;
cljs.core.logic.__GT_Stream = (function __GT_Stream(state,size,stepper,done){return (new cljs.core.logic.Stream(state,size,stepper,done));
});
cljs.core.logic.stream_QMARK_ = (function stream_QMARK_(x){var G__195407 = x;if(G__195407)
{var bit__10248__auto__ = null;if(cljs.core.truth_((function (){var or__9629__auto__ = bit__10248__auto__;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return G__195407.cljs$core$logic$IStream$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
