// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.pldb');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.pldb.empty_db = cljs.core.PersistentArrayMap.EMPTY;
cljs.core.logic.pldb.facts_for = (function facts_for(dbs,kname){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__131299_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__131299_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kname,cljs.core.constant$keyword$129], null));
}),dbs);
});
cljs.core.logic.pldb.facts_using_index = (function facts_using_index(dbs,kname,index,val){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__131300_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__131300_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kname,index,val], null));
}),dbs);
});
cljs.core.logic.pldb.rel_key = (function rel_key(rel){if((rel instanceof cljs.core.Keyword))
{return rel;
} else
{return cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rel));
}
});
cljs.core.logic.pldb.rel_indexes = (function rel_indexes(rel){return cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rel));
});
cljs.core.logic.pldb.indexed_QMARK_ = (function indexed_QMARK_(v){return cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)) === true;
});
cljs.core.logic.pldb.contains_lvar_QMARK_ = (function contains_lvar_QMARK_(x){return cljs.core.some(cljs.core.logic.lvar_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,x));
});
cljs.core.logic.pldb.ground_QMARK_ = (function ground_QMARK_(s,term){return cljs.core.not(cljs.core.logic.pldb.contains_lvar_QMARK_(cljs.core.logic._walk_STAR_(s,term)));
});
cljs.core.logic.pldb.index_for_query = (function index_for_query(s,q,indexes){var indexable = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__131301_SHARP_){return cljs.core.logic.pldb.ground_QMARK_(s,p1__131301_SHARP_);
}),q);var triples = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),indexable,indexes);return cljs.core.first((function (){var iter__10322__auto__ = (function iter__131310(s__131311){return (new cljs.core.LazySeq(null,(function (){var s__131311__$1 = s__131311;while(true){
var temp__4098__auto__ = cljs.core.seq(s__131311__$1);if(temp__4098__auto__)
{var s__131311__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(s__131311__$2))
{var c__10320__auto__ = cljs.core.chunk_first(s__131311__$2);var size__10321__auto__ = cljs.core.count(c__10320__auto__);var b__131313 = cljs.core.chunk_buffer(size__10321__auto__);if((function (){var i__131312 = 0;while(true){
if((i__131312 < size__10321__auto__))
{var vec__131316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__10320__auto__,i__131312);var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131316,0,null);var indexable__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131316,1,null);var indexed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131316,2,null);if(cljs.core.truth_((function (){var and__9617__auto__ = indexable__$1;if(cljs.core.truth_(and__9617__auto__))
{return indexed;
} else
{return and__9617__auto__;
}
})()))
{cljs.core.chunk_append(b__131313,i);
{
var G__131318 = (i__131312 + 1);
i__131312 = G__131318;
continue;
}
} else
{{
var G__131319 = (i__131312 + 1);
i__131312 = G__131319;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__131313),iter__131310(cljs.core.chunk_rest(s__131311__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__131313),null);
}
} else
{var vec__131317 = cljs.core.first(s__131311__$2);var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131317,0,null);var indexable__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131317,1,null);var indexed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131317,2,null);if(cljs.core.truth_((function (){var and__9617__auto__ = indexable__$1;if(cljs.core.truth_(and__9617__auto__))
{return indexed;
} else
{return and__9617__auto__;
}
})()))
{return cljs.core.cons(i,iter__131310(cljs.core.rest(s__131311__$2)));
} else
{{
var G__131320 = cljs.core.rest(s__131311__$2);
s__131311__$1 = G__131320;
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
});return iter__10322__auto__(triples);
})());
});
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db_fact = (function() { 
var db_fact__delegate = function (db,rel,args){var key = cljs.core.logic.pldb.rel_key(rel);var add_to_set = ((function (key){
return (function (current,new$){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__9629__auto__ = current;if(cljs.core.truth_(or__9629__auto__))
{return or__9629__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),new$);
});})(key))
;var db_with_fact = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.constant$keyword$129], null),((function (key,add_to_set){
return (function (p1__131321_SHARP_){return add_to_set(p1__131321_SHARP_,args);
});})(key,add_to_set))
);var indexes_to_update = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.logic.pldb.rel_indexes(rel),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),args);var update_index_fn = ((function (key,add_to_set,db_with_fact,indexes_to_update){
return (function (db__$1,p__131325){var vec__131326 = p__131325;var is_indexed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131326,0,null);var index_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131326,1,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131326,2,null);if(cljs.core.truth_(is_indexed))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,index_num,val], null),((function (vec__131326,is_indexed,index_num,val,key,add_to_set,db_with_fact,indexes_to_update){
return (function (p1__131322_SHARP_){return add_to_set(p1__131322_SHARP_,args);
});})(vec__131326,is_indexed,index_num,val,key,add_to_set,db_with_fact,indexes_to_update))
);
} else
{return db__$1;
}
});})(key,add_to_set,db_with_fact,indexes_to_update))
;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_index_fn,db_with_fact,indexes_to_update);
};
var db_fact = function (db,rel,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return db_fact__delegate.call(this,db,rel,args);};
db_fact.cljs$lang$maxFixedArity = 2;
db_fact.cljs$lang$applyTo = (function (arglist__131327){
var db = cljs.core.first(arglist__131327);
arglist__131327 = cljs.core.next(arglist__131327);
var rel = cljs.core.first(arglist__131327);
var args = cljs.core.rest(arglist__131327);
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
var db_retraction__delegate = function (db,rel,args){var key = cljs.core.logic.pldb.rel_key(rel);var retract_args = ((function (key){
return (function (p1__131328_SHARP_){return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__131328_SHARP_,args);
});})(key))
;var db_without_fact = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.constant$keyword$129], null),retract_args);var indexes_to_update = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.logic.pldb.rel_indexes(rel),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),args);var remove_from_index_fn = ((function (key,retract_args,db_without_fact,indexes_to_update){
return (function (db__$1,p__131331){var vec__131332 = p__131331;var is_indexed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131332,0,null);var index_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131332,1,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131332,2,null);if(cljs.core.truth_(is_indexed))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,index_num,val], null),retract_args);
} else
{return db__$1;
}
});})(key,retract_args,db_without_fact,indexes_to_update))
;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(remove_from_index_fn,db_without_fact,indexes_to_update);
};
var db_retraction = function (db,rel,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return db_retraction__delegate.call(this,db,rel,args);};
db_retraction.cljs$lang$maxFixedArity = 2;
db_retraction.cljs$lang$applyTo = (function (arglist__131333){
var db = cljs.core.first(arglist__131333);
arglist__131333 = cljs.core.next(arglist__131333);
var rel = cljs.core.first(arglist__131333);
var args = cljs.core.rest(arglist__131333);
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
var db_facts__delegate = function (base_db,facts){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__131334_SHARP_,p2__131335_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.logic.pldb.db_fact,p1__131334_SHARP_,p2__131335_SHARP_);
}),base_db,facts);
};
var db_facts = function (base_db,var_args){
var facts = null;if (arguments.length > 1) {
  facts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return db_facts__delegate.call(this,base_db,facts);};
db_facts.cljs$lang$maxFixedArity = 1;
db_facts.cljs$lang$applyTo = (function (arglist__131336){
var base_db = cljs.core.first(arglist__131336);
var facts = cljs.core.rest(arglist__131336);
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
var db__delegate = function (facts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.logic.pldb.db_facts,cljs.core.logic.pldb.empty_db,facts);
};
var db = function (var_args){
var facts = null;if (arguments.length > 0) {
  facts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return db__delegate.call(this,facts);};
db.cljs$lang$maxFixedArity = 0;
db.cljs$lang$applyTo = (function (arglist__131337){
var facts = cljs.core.seq(arglist__131337);
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
var db_retractions__delegate = function (base_db,retractions){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__131338_SHARP_,p2__131339_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.logic.pldb.db_retraction,p1__131338_SHARP_,p2__131339_SHARP_);
}),base_db,retractions);
};
var db_retractions = function (base_db,var_args){
var retractions = null;if (arguments.length > 1) {
  retractions = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return db_retractions__delegate.call(this,base_db,retractions);};
db_retractions.cljs$lang$maxFixedArity = 1;
db_retractions.cljs$lang$applyTo = (function (arglist__131340){
var base_db = cljs.core.first(arglist__131340);
var retractions = cljs.core.rest(arglist__131340);
return db_retractions__delegate(base_db,retractions);
});
db_retractions.cljs$core$IFn$_invoke$arity$variadic = db_retractions__delegate;
return db_retractions;
})()
;
