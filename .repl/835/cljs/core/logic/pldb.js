// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.logic.pldb');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.pldb.empty_db = cljs.core.PersistentArrayMap.EMPTY;
cljs.core.logic.pldb.facts_for = (function facts_for(dbs,kname){return cljs.core.mapcat.call(null,(function (p1__21785_SHARP_){return cljs.core.get_in.call(null,p1__21785_SHARP_,cljs.core.PersistentVector.fromArray([kname,new cljs.core.Keyword("cljs.core.logic.pldb","unindexed","cljs.core.logic.pldb/unindexed",3813484278)], true));
}),dbs);
});
cljs.core.logic.pldb.facts_using_index = (function facts_using_index(dbs,kname,index,val){return cljs.core.mapcat.call(null,(function (p1__21786_SHARP_){return cljs.core.get_in.call(null,p1__21786_SHARP_,cljs.core.PersistentVector.fromArray([kname,index,val], true));
}),dbs);
});
cljs.core.logic.pldb.rel_key = (function rel_key(rel){if((rel instanceof cljs.core.Keyword))
{return rel;
} else
{return new cljs.core.Keyword(null,"rel-name","rel-name",4706225841).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rel));
}
});
cljs.core.logic.pldb.rel_indexes = (function rel_indexes(rel){return new cljs.core.Keyword(null,"indexes","indexes",2957196402).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rel));
});
cljs.core.logic.pldb.indexed_QMARK_ = (function indexed_QMARK_(v){return new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)) === true;
});
cljs.core.logic.pldb.contains_lvar_QMARK_ = (function contains_lvar_QMARK_(x){return cljs.core.some.call(null,cljs.core.logic.lvar_QMARK_,cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.seq,x));
});
cljs.core.logic.pldb.ground_QMARK_ = (function ground_QMARK_(s,term){return cljs.core.not.call(null,cljs.core.logic.pldb.contains_lvar_QMARK_.call(null,cljs.core.logic.walk_STAR_.call(null,s,term)));
});
cljs.core.logic.pldb.index_for_query = (function index_for_query(s,q,indexes){var indexable = cljs.core.map.call(null,(function (p1__21787_SHARP_){return cljs.core.logic.pldb.ground_QMARK_.call(null,s,p1__21787_SHARP_);
}),q);var triples = cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),indexable,indexes);return cljs.core.first.call(null,(function (){var iter__5390__auto__ = (function iter__21796(s__21797){return (new cljs.core.LazySeq(null,(function (){var s__21797__$1 = s__21797;while(true){
var temp__4094__auto__ = cljs.core.seq.call(null,s__21797__$1);if(temp__4094__auto__)
{var s__21797__$2 = temp__4094__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21797__$2))
{var c__5388__auto__ = cljs.core.chunk_first.call(null,s__21797__$2);var size__5389__auto__ = cljs.core.count.call(null,c__5388__auto__);var b__21799 = cljs.core.chunk_buffer.call(null,size__5389__auto__);if((function (){var i__21798 = 0;while(true){
if((i__21798 < size__5389__auto__))
{var vec__21802 = cljs.core._nth.call(null,c__5388__auto__,i__21798);var i = cljs.core.nth.call(null,vec__21802,0,null);var indexable__$1 = cljs.core.nth.call(null,vec__21802,1,null);var indexed = cljs.core.nth.call(null,vec__21802,2,null);if(cljs.core.truth_((function (){var and__4695__auto__ = indexable__$1;if(cljs.core.truth_(and__4695__auto__))
{return indexed;
} else
{return and__4695__auto__;
}
})()))
{cljs.core.chunk_append.call(null,b__21799,i);
{
var G__21804 = (i__21798 + 1);
i__21798 = G__21804;
continue;
}
} else
{{
var G__21805 = (i__21798 + 1);
i__21798 = G__21805;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21799),iter__21796.call(null,cljs.core.chunk_rest.call(null,s__21797__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21799),null);
}
} else
{var vec__21803 = cljs.core.first.call(null,s__21797__$2);var i = cljs.core.nth.call(null,vec__21803,0,null);var indexable__$1 = cljs.core.nth.call(null,vec__21803,1,null);var indexed = cljs.core.nth.call(null,vec__21803,2,null);if(cljs.core.truth_((function (){var and__4695__auto__ = indexable__$1;if(cljs.core.truth_(and__4695__auto__))
{return indexed;
} else
{return and__4695__auto__;
}
})()))
{return cljs.core.cons.call(null,i,iter__21796.call(null,cljs.core.rest.call(null,s__21797__$2)));
} else
{{
var G__21806 = cljs.core.rest.call(null,s__21797__$2);
s__21797__$1 = G__21806;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5390__auto__.call(null,triples);
})());
});
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db_fact = (function() { 
var db_fact__delegate = function (db,rel,args){var key = cljs.core.logic.pldb.rel_key.call(null,rel);var add_to_set = ((function (key){
return (function (current,new$){return cljs.core.conj.call(null,(function (){var or__4704__auto__ = current;if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),new$);
});})(key))
;var db_with_fact = cljs.core.update_in.call(null,db,cljs.core.PersistentVector.fromArray([key,new cljs.core.Keyword("cljs.core.logic.pldb","unindexed","cljs.core.logic.pldb/unindexed",3813484278)], true),((function (key,add_to_set){
return (function (p1__21807_SHARP_){return add_to_set.call(null,p1__21807_SHARP_,args);
});})(key,add_to_set))
);var indexes_to_update = cljs.core.map.call(null,cljs.core.vector,cljs.core.logic.pldb.rel_indexes.call(null,rel),cljs.core.range.call(null),args);var update_index_fn = ((function (key,add_to_set,db_with_fact,indexes_to_update){
return (function (db__$1,p__21811){var vec__21812 = p__21811;var is_indexed = cljs.core.nth.call(null,vec__21812,0,null);var index_num = cljs.core.nth.call(null,vec__21812,1,null);var val = cljs.core.nth.call(null,vec__21812,2,null);if(cljs.core.truth_(is_indexed))
{return cljs.core.update_in.call(null,db__$1,cljs.core.PersistentVector.fromArray([key,index_num,val], true),((function (vec__21812,is_indexed,index_num,val,key,add_to_set,db_with_fact,indexes_to_update){
return (function (p1__21808_SHARP_){return add_to_set.call(null,p1__21808_SHARP_,args);
});})(vec__21812,is_indexed,index_num,val,key,add_to_set,db_with_fact,indexes_to_update))
);
} else
{return db__$1;
}
});})(key,add_to_set,db_with_fact,indexes_to_update))
;return cljs.core.reduce.call(null,update_index_fn,db_with_fact,indexes_to_update);
};
var db_fact = function (db,rel,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return db_fact__delegate.call(this,db,rel,args);};
db_fact.cljs$lang$maxFixedArity = 2;
db_fact.cljs$lang$applyTo = (function (arglist__21813){
var db = cljs.core.first(arglist__21813);
arglist__21813 = cljs.core.next(arglist__21813);
var rel = cljs.core.first(arglist__21813);
var args = cljs.core.rest(arglist__21813);
return db_fact__delegate(db,rel,args);
});
db_fact.cljs$core$IFn$_invoke$arity$variadic = db_fact__delegate;
return db_fact;
})()
;
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db_retraction = (function() { 
var db_retraction__delegate = function (db,rel,args){var key = cljs.core.logic.pldb.rel_key.call(null,rel);var retract_args = ((function (key){
return (function (p1__21814_SHARP_){return cljs.core.disj.call(null,p1__21814_SHARP_,args);
});})(key))
;var db_without_fact = cljs.core.update_in.call(null,db,cljs.core.PersistentVector.fromArray([key,new cljs.core.Keyword("cljs.core.logic.pldb","unindexed","cljs.core.logic.pldb/unindexed",3813484278)], true),retract_args);var indexes_to_update = cljs.core.map.call(null,cljs.core.vector,cljs.core.logic.pldb.rel_indexes.call(null,rel),cljs.core.range.call(null),args);var remove_from_index_fn = ((function (key,retract_args,db_without_fact,indexes_to_update){
return (function (db__$1,p__21817){var vec__21818 = p__21817;var is_indexed = cljs.core.nth.call(null,vec__21818,0,null);var index_num = cljs.core.nth.call(null,vec__21818,1,null);var val = cljs.core.nth.call(null,vec__21818,2,null);if(cljs.core.truth_(is_indexed))
{return cljs.core.update_in.call(null,db__$1,cljs.core.PersistentVector.fromArray([key,index_num,val], true),retract_args);
} else
{return db__$1;
}
});})(key,retract_args,db_without_fact,indexes_to_update))
;return cljs.core.reduce.call(null,remove_from_index_fn,db_without_fact,indexes_to_update);
};
var db_retraction = function (db,rel,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return db_retraction__delegate.call(this,db,rel,args);};
db_retraction.cljs$lang$maxFixedArity = 2;
db_retraction.cljs$lang$applyTo = (function (arglist__21819){
var db = cljs.core.first(arglist__21819);
arglist__21819 = cljs.core.next(arglist__21819);
var rel = cljs.core.first(arglist__21819);
var args = cljs.core.rest(arglist__21819);
return db_retraction__delegate(db,rel,args);
});
db_retraction.cljs$core$IFn$_invoke$arity$variadic = db_retraction__delegate;
return db_retraction;
})()
;
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db_facts = (function() { 
var db_facts__delegate = function (base_db,facts){return cljs.core.reduce.call(null,(function (p1__21820_SHARP_,p2__21821_SHARP_){return cljs.core.apply.call(null,cljs.core.logic.pldb.db_fact,p1__21820_SHARP_,p2__21821_SHARP_);
}),base_db,facts);
};
var db_facts = function (base_db,var_args){
var facts = null;if (arguments.length > 1) {
  facts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return db_facts__delegate.call(this,base_db,facts);};
db_facts.cljs$lang$maxFixedArity = 1;
db_facts.cljs$lang$applyTo = (function (arglist__21822){
var base_db = cljs.core.first(arglist__21822);
var facts = cljs.core.rest(arglist__21822);
return db_facts__delegate(base_db,facts);
});
db_facts.cljs$core$IFn$_invoke$arity$variadic = db_facts__delegate;
return db_facts;
})()
;
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db = (function() { 
var db__delegate = function (facts){return cljs.core.apply.call(null,cljs.core.logic.pldb.db_facts,cljs.core.logic.pldb.empty_db,facts);
};
var db = function (var_args){
var facts = null;if (arguments.length > 0) {
  facts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return db__delegate.call(this,facts);};
db.cljs$lang$maxFixedArity = 0;
db.cljs$lang$applyTo = (function (arglist__21823){
var facts = cljs.core.seq(arglist__21823);
return db__delegate(facts);
});
db.cljs$core$IFn$_invoke$arity$variadic = db__delegate;
return db;
})()
;
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db_retractions = (function() { 
var db_retractions__delegate = function (base_db,retractions){return cljs.core.reduce.call(null,(function (p1__21824_SHARP_,p2__21825_SHARP_){return cljs.core.apply.call(null,cljs.core.logic.pldb.db_retraction,p1__21824_SHARP_,p2__21825_SHARP_);
}),base_db,retractions);
};
var db_retractions = function (base_db,var_args){
var retractions = null;if (arguments.length > 1) {
  retractions = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return db_retractions__delegate.call(this,base_db,retractions);};
db_retractions.cljs$lang$maxFixedArity = 1;
db_retractions.cljs$lang$applyTo = (function (arglist__21826){
var base_db = cljs.core.first(arglist__21826);
var retractions = cljs.core.rest(arglist__21826);
return db_retractions__delegate(base_db,retractions);
});
db_retractions.cljs$core$IFn$_invoke$arity$variadic = db_retractions__delegate;
return db_retractions;
})()
;
