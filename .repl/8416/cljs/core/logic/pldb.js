// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.logic.pldb');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.pldb.empty_db = cljs.core.PersistentArrayMap.EMPTY;
cljs.core.logic.pldb.facts_for = (function facts_for(dbs,kname){return cljs.core.mapcat.call(null,(function (p1__92572_SHARP_){return cljs.core.get_in.call(null,p1__92572_SHARP_,cljs.core.PersistentVector.fromArray([kname,new cljs.core.Keyword("cljs.core.logic.pldb","unindexed","cljs.core.logic.pldb/unindexed",3813484278)], true));
}),dbs);
});
cljs.core.logic.pldb.facts_using_index = (function facts_using_index(dbs,kname,index,val){return cljs.core.mapcat.call(null,(function (p1__92573_SHARP_){return cljs.core.get_in.call(null,p1__92573_SHARP_,cljs.core.PersistentVector.fromArray([kname,index,val], true));
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
cljs.core.logic.pldb.index_for_query = (function index_for_query(s,q,indexes){var indexable = cljs.core.map.call(null,(function (p1__92574_SHARP_){return cljs.core.logic.pldb.ground_QMARK_.call(null,s,p1__92574_SHARP_);
}),q);var triples = cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),indexable,indexes);return cljs.core.first.call(null,(function (){var iter__5390__auto__ = (function iter__92583(s__92584){return (new cljs.core.LazySeq(null,(function (){var s__92584__$1 = s__92584;while(true){
var temp__4094__auto__ = cljs.core.seq.call(null,s__92584__$1);if(temp__4094__auto__)
{var s__92584__$2 = temp__4094__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__92584__$2))
{var c__5388__auto__ = cljs.core.chunk_first.call(null,s__92584__$2);var size__5389__auto__ = cljs.core.count.call(null,c__5388__auto__);var b__92586 = cljs.core.chunk_buffer.call(null,size__5389__auto__);if((function (){var i__92585 = 0;while(true){
if((i__92585 < size__5389__auto__))
{var vec__92589 = cljs.core._nth.call(null,c__5388__auto__,i__92585);var i = cljs.core.nth.call(null,vec__92589,0,null);var indexable__$1 = cljs.core.nth.call(null,vec__92589,1,null);var indexed = cljs.core.nth.call(null,vec__92589,2,null);if(cljs.core.truth_((function (){var and__4695__auto__ = indexable__$1;if(cljs.core.truth_(and__4695__auto__))
{return indexed;
} else
{return and__4695__auto__;
}
})()))
{cljs.core.chunk_append.call(null,b__92586,i);
{
var G__92591 = (i__92585 + 1);
i__92585 = G__92591;
continue;
}
} else
{{
var G__92592 = (i__92585 + 1);
i__92585 = G__92592;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92586),iter__92583.call(null,cljs.core.chunk_rest.call(null,s__92584__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92586),null);
}
} else
{var vec__92590 = cljs.core.first.call(null,s__92584__$2);var i = cljs.core.nth.call(null,vec__92590,0,null);var indexable__$1 = cljs.core.nth.call(null,vec__92590,1,null);var indexed = cljs.core.nth.call(null,vec__92590,2,null);if(cljs.core.truth_((function (){var and__4695__auto__ = indexable__$1;if(cljs.core.truth_(and__4695__auto__))
{return indexed;
} else
{return and__4695__auto__;
}
})()))
{return cljs.core.cons.call(null,i,iter__92583.call(null,cljs.core.rest.call(null,s__92584__$2)));
} else
{{
var G__92593 = cljs.core.rest.call(null,s__92584__$2);
s__92584__$1 = G__92593;
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
return (function (p1__92594_SHARP_){return add_to_set.call(null,p1__92594_SHARP_,args);
});})(key,add_to_set))
);var indexes_to_update = cljs.core.map.call(null,cljs.core.vector,cljs.core.logic.pldb.rel_indexes.call(null,rel),cljs.core.range.call(null),args);var update_index_fn = ((function (key,add_to_set,db_with_fact,indexes_to_update){
return (function (db__$1,p__92598){var vec__92599 = p__92598;var is_indexed = cljs.core.nth.call(null,vec__92599,0,null);var index_num = cljs.core.nth.call(null,vec__92599,1,null);var val = cljs.core.nth.call(null,vec__92599,2,null);if(cljs.core.truth_(is_indexed))
{return cljs.core.update_in.call(null,db__$1,cljs.core.PersistentVector.fromArray([key,index_num,val], true),((function (vec__92599,is_indexed,index_num,val,key,add_to_set,db_with_fact,indexes_to_update){
return (function (p1__92595_SHARP_){return add_to_set.call(null,p1__92595_SHARP_,args);
});})(vec__92599,is_indexed,index_num,val,key,add_to_set,db_with_fact,indexes_to_update))
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
db_fact.cljs$lang$applyTo = (function (arglist__92600){
var db = cljs.core.first(arglist__92600);
arglist__92600 = cljs.core.next(arglist__92600);
var rel = cljs.core.first(arglist__92600);
var args = cljs.core.rest(arglist__92600);
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
return (function (p1__92601_SHARP_){return cljs.core.disj.call(null,p1__92601_SHARP_,args);
});})(key))
;var db_without_fact = cljs.core.update_in.call(null,db,cljs.core.PersistentVector.fromArray([key,new cljs.core.Keyword("cljs.core.logic.pldb","unindexed","cljs.core.logic.pldb/unindexed",3813484278)], true),retract_args);var indexes_to_update = cljs.core.map.call(null,cljs.core.vector,cljs.core.logic.pldb.rel_indexes.call(null,rel),cljs.core.range.call(null),args);var remove_from_index_fn = ((function (key,retract_args,db_without_fact,indexes_to_update){
return (function (db__$1,p__92604){var vec__92605 = p__92604;var is_indexed = cljs.core.nth.call(null,vec__92605,0,null);var index_num = cljs.core.nth.call(null,vec__92605,1,null);var val = cljs.core.nth.call(null,vec__92605,2,null);if(cljs.core.truth_(is_indexed))
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
db_retraction.cljs$lang$applyTo = (function (arglist__92606){
var db = cljs.core.first(arglist__92606);
arglist__92606 = cljs.core.next(arglist__92606);
var rel = cljs.core.first(arglist__92606);
var args = cljs.core.rest(arglist__92606);
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
var db_facts__delegate = function (base_db,facts){return cljs.core.reduce.call(null,(function (p1__92607_SHARP_,p2__92608_SHARP_){return cljs.core.apply.call(null,cljs.core.logic.pldb.db_fact,p1__92607_SHARP_,p2__92608_SHARP_);
}),base_db,facts);
};
var db_facts = function (base_db,var_args){
var facts = null;if (arguments.length > 1) {
  facts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return db_facts__delegate.call(this,base_db,facts);};
db_facts.cljs$lang$maxFixedArity = 1;
db_facts.cljs$lang$applyTo = (function (arglist__92609){
var base_db = cljs.core.first(arglist__92609);
var facts = cljs.core.rest(arglist__92609);
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
db.cljs$lang$applyTo = (function (arglist__92610){
var facts = cljs.core.seq(arglist__92610);
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
var db_retractions__delegate = function (base_db,retractions){return cljs.core.reduce.call(null,(function (p1__92611_SHARP_,p2__92612_SHARP_){return cljs.core.apply.call(null,cljs.core.logic.pldb.db_retraction,p1__92611_SHARP_,p2__92612_SHARP_);
}),base_db,retractions);
};
var db_retractions = function (base_db,var_args){
var retractions = null;if (arguments.length > 1) {
  retractions = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return db_retractions__delegate.call(this,base_db,retractions);};
db_retractions.cljs$lang$maxFixedArity = 1;
db_retractions.cljs$lang$applyTo = (function (arglist__92613){
var base_db = cljs.core.first(arglist__92613);
var retractions = cljs.core.rest(arglist__92613);
return db_retractions__delegate(base_db,retractions);
});
db_retractions.cljs$core$IFn$_invoke$arity$variadic = db_retractions__delegate;
return db_retractions;
})()
;
