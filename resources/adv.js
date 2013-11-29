;(function(){
function aa() {
  return function(a) {
    return a
  }
}
function f(a) {
  return function() {
    return this[a]
  }
}
function m(a) {
  return function() {
    return a
  }
}
var n, ba = this;
function p(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function ca(a) {
  var b = p(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function da(a) {
  return"string" == typeof a
}
function ea(a) {
  var b = typeof a;
  return"object" == b && null != a || "function" == b
}
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ha(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ia(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function ja(a, b, c) {
  ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
  return ja.apply(null, arguments)
}
var la = Date.now || function() {
  return+new Date
};
function ma(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ue = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function na(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function oa(a) {
  if(!pa.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(qa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ra, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(sa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ta, "\x26quot;"));
  return a
}
var qa = /&/g, ra = /</g, sa = />/g, ta = /\"/g, pa = /[&<>\"]/;
function ua(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function va(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, va) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
ma(va, Error);
va.prototype.name = "CustomError";
function xa(a, b) {
  b.unshift(a);
  va.call(this, na.apply(null, b));
  b.shift();
  this.pe = a
}
ma(xa, va);
xa.prototype.name = "AssertionError";
function ya(a, b) {
  throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var za = Array.prototype, Aa = za.indexOf ? function(a, b, c) {
  return za.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(da(a)) {
    return da(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ba = za.forEach ? function(a, b, c) {
  za.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = da(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Ca = za.filter ? function(a, b, c) {
  return za.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], g = 0, h = da(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[g++] = l)
    }
  }
  return e
};
function Da(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function Ea(a, b) {
  za.sort.call(a, b || Fa)
}
function Ga(a, b) {
  for(var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]}
  }
  var d = b || Fa;
  Ea(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index
  });
  for(c = 0;c < a.length;c++) {
    a[c] = a[c].value
  }
}
function Fa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function Ha(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
;function Ia(a, b) {
  null != a && this.append.apply(this, arguments)
}
Ia.prototype.Za = "";
Ia.prototype.append = function(a, b, c) {
  this.Za += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.Za += arguments[d]
    }
  }
  return this
};
Ia.prototype.toString = f("Za");
var Ja;
function Ka() {
  return new r(null, 5, [La, !0, Ma, !0, Na, !1, Oa, !1, Pa, null], null)
}
function s(a) {
  return null != a && !1 !== a
}
function Qa(a) {
  return null == a
}
function v(a) {
  return s(a) ? !1 : !0
}
function w(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : x ? !1 : null
}
function Ra(a) {
  return null == a ? null : a.constructor
}
function y(a, b) {
  var c = Ra(b), c = s(s(c) ? c.Ca : c) ? c.Ba : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Sa(a) {
  var b = a.Ba;
  return s(b) ? b : "" + z(a)
}
function A(a) {
  for(var b = a.length, c = Array(b), d = 0;;) {
    if(d < b) {
      c[d] = a[d], d += 1
    }else {
      break
    }
  }
  return c
}
function Ta(a) {
  return Array.prototype.slice.call(arguments)
}
var Ua = {}, Va = {};
function Xa(a) {
  if(a ? a.K : a) {
    return a.K(a)
  }
  var b;
  b = Xa[p(null == a ? null : a)];
  if(!b && (b = Xa._, !b)) {
    throw y("ICounted.-count", a);
  }
  return b.call(null, a)
}
function Ya(a) {
  if(a ? a.R : a) {
    return a.R(a)
  }
  var b;
  b = Ya[p(null == a ? null : a)];
  if(!b && (b = Ya._, !b)) {
    throw y("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var Za = {};
function $a(a, b) {
  if(a ? a.M : a) {
    return a.M(a, b)
  }
  var c;
  c = $a[p(null == a ? null : a)];
  if(!c && (c = $a._, !c)) {
    throw y("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var ab = {}, B = function() {
  function a(a, b, c) {
    if(a ? a.ra : a) {
      return a.ra(a, b, c)
    }
    var h;
    h = B[p(null == a ? null : a)];
    if(!h && (h = B._, !h)) {
      throw y("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ha : a) {
      return a.ha(a, b)
    }
    var c;
    c = B[p(null == a ? null : a)];
    if(!c && (c = B._, !c)) {
      throw y("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), bb = {};
function cb(a) {
  if(a ? a.W : a) {
    return a.W(a)
  }
  var b;
  b = cb[p(null == a ? null : a)];
  if(!b && (b = cb._, !b)) {
    throw y("ISeq.-first", a);
  }
  return b.call(null, a)
}
function db(a) {
  if(a ? a.da : a) {
    return a.da(a)
  }
  var b;
  b = db[p(null == a ? null : a)];
  if(!b && (b = db._, !b)) {
    throw y("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var eb = {}, fb = {}, gb = function() {
  function a(a, b, c) {
    if(a ? a.O : a) {
      return a.O(a, b, c)
    }
    var h;
    h = gb[p(null == a ? null : a)];
    if(!h && (h = gb._, !h)) {
      throw y("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.N : a) {
      return a.N(a, b)
    }
    var c;
    c = gb[p(null == a ? null : a)];
    if(!c && (c = gb._, !c)) {
      throw y("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), hb = {};
function ib(a, b) {
  if(a ? a.Mb : a) {
    return a.Mb(a, b)
  }
  var c;
  c = ib[p(null == a ? null : a)];
  if(!c && (c = ib._, !c)) {
    throw y("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b)
}
function jb(a, b, c) {
  if(a ? a.Ia : a) {
    return a.Ia(a, b, c)
  }
  var d;
  d = jb[p(null == a ? null : a)];
  if(!d && (d = jb._, !d)) {
    throw y("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var kb = {};
function lb(a, b) {
  if(a ? a.ab : a) {
    return a.ab(a, b)
  }
  var c;
  c = lb[p(null == a ? null : a)];
  if(!c && (c = lb._, !c)) {
    throw y("IMap.-dissoc", a);
  }
  return c.call(null, a, b)
}
var mb = {};
function nb(a) {
  if(a ? a.cc : a) {
    return a.cc()
  }
  var b;
  b = nb[p(null == a ? null : a)];
  if(!b && (b = nb._, !b)) {
    throw y("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function ob(a) {
  if(a ? a.pc : a) {
    return a.pc()
  }
  var b;
  b = ob[p(null == a ? null : a)];
  if(!b && (b = ob._, !b)) {
    throw y("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var pb = {};
function qb(a, b) {
  if(a ? a.rc : a) {
    return a.rc(0, b)
  }
  var c;
  c = qb[p(null == a ? null : a)];
  if(!c && (c = qb._, !c)) {
    throw y("ISet.-disjoin", a);
  }
  return c.call(null, a, b)
}
var rb = {};
function sb(a, b, c) {
  if(a ? a.dc : a) {
    return a.dc(a, b, c)
  }
  var d;
  d = sb[p(null == a ? null : a)];
  if(!d && (d = sb._, !d)) {
    throw y("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function ub(a) {
  if(a ? a.Xc : a) {
    return a.state
  }
  var b;
  b = ub[p(null == a ? null : a)];
  if(!b && (b = ub._, !b)) {
    throw y("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var vb = {};
function wb(a) {
  if(a ? a.s : a) {
    return a.s(a)
  }
  var b;
  b = wb[p(null == a ? null : a)];
  if(!b && (b = wb._, !b)) {
    throw y("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var xb = {};
function yb(a, b) {
  if(a ? a.t : a) {
    return a.t(a, b)
  }
  var c;
  c = yb[p(null == a ? null : a)];
  if(!c && (c = yb._, !c)) {
    throw y("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var zb = {}, Ab = function() {
  function a(a, b, c) {
    if(a ? a.ca : a) {
      return a.ca(a, b, c)
    }
    var h;
    h = Ab[p(null == a ? null : a)];
    if(!h && (h = Ab._, !h)) {
      throw y("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ba : a) {
      return a.ba(a, b)
    }
    var c;
    c = Ab[p(null == a ? null : a)];
    if(!c && (c = Ab._, !c)) {
      throw y("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Bb(a, b) {
  if(a ? a.w : a) {
    return a.w(a, b)
  }
  var c;
  c = Bb[p(null == a ? null : a)];
  if(!c && (c = Bb._, !c)) {
    throw y("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function Cb(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  b = Cb[p(null == a ? null : a)];
  if(!b && (b = Cb._, !b)) {
    throw y("IHash.-hash", a);
  }
  return b.call(null, a)
}
var Db = {};
function Eb(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  b = Eb[p(null == a ? null : a)];
  if(!b && (b = Eb._, !b)) {
    throw y("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var Fb = {};
function C(a, b) {
  if(a ? a.tc : a) {
    return a.tc(0, b)
  }
  var c;
  c = C[p(null == a ? null : a)];
  if(!c && (c = C._, !c)) {
    throw y("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
var Gb = {};
function Hb(a, b, c) {
  if(a ? a.A : a) {
    return a.A(a, b, c)
  }
  var d;
  d = Hb[p(null == a ? null : a)];
  if(!d && (d = Hb._, !d)) {
    throw y("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function Ib(a) {
  if(a ? a.ib : a) {
    return a.ib(a)
  }
  var b;
  b = Ib[p(null == a ? null : a)];
  if(!b && (b = Ib._, !b)) {
    throw y("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Jb(a, b) {
  if(a ? a.Ja : a) {
    return a.Ja(a, b)
  }
  var c;
  c = Jb[p(null == a ? null : a)];
  if(!c && (c = Jb._, !c)) {
    throw y("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Kb(a) {
  if(a ? a.Qa : a) {
    return a.Qa(a)
  }
  var b;
  b = Kb[p(null == a ? null : a)];
  if(!b && (b = Kb._, !b)) {
    throw y("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Lb(a, b, c) {
  if(a ? a.bb : a) {
    return a.bb(a, b, c)
  }
  var d;
  d = Lb[p(null == a ? null : a)];
  if(!d && (d = Lb._, !d)) {
    throw y("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Mb(a, b, c) {
  if(a ? a.sc : a) {
    return a.sc(0, b, c)
  }
  var d;
  d = Mb[p(null == a ? null : a)];
  if(!d && (d = Mb._, !d)) {
    throw y("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function Nb(a) {
  if(a ? a.nc : a) {
    return a.nc()
  }
  var b;
  b = Nb[p(null == a ? null : a)];
  if(!b && (b = Nb._, !b)) {
    throw y("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Ob(a) {
  if(a ? a.Ob : a) {
    return a.Ob(a)
  }
  var b;
  b = Ob[p(null == a ? null : a)];
  if(!b && (b = Ob._, !b)) {
    throw y("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function Pb(a) {
  if(a ? a.Pb : a) {
    return a.Pb(a)
  }
  var b;
  b = Pb[p(null == a ? null : a)];
  if(!b && (b = Pb._, !b)) {
    throw y("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Qb(a) {
  if(a ? a.Nb : a) {
    return a.Nb(a)
  }
  var b;
  b = Qb[p(null == a ? null : a)];
  if(!b && (b = Qb._, !b)) {
    throw y("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function Rb(a) {
  this.vd = a;
  this.n = 0;
  this.f = 1073741824
}
Rb.prototype.tc = function(a, b) {
  return this.vd.append(b)
};
function Sb(a) {
  var b = new Ia;
  a.A(null, new Rb(b), Ka());
  return"" + z(b)
}
function Tb(a, b) {
  if(s(E.a ? E.a(a, b) : E.call(null, a, b))) {
    return 0
  }
  var c = v(a.$);
  if(s(c ? b.$ : c)) {
    return-1
  }
  if(s(a.$)) {
    if(v(b.$)) {
      return 1
    }
    c = Ub.a ? Ub.a(a.$, b.$) : Ub.call(null, a.$, b.$);
    return 0 === c ? Ub.a ? Ub.a(a.name, b.name) : Ub.call(null, a.name, b.name) : c
  }
  return Vb ? Ub.a ? Ub.a(a.name, b.name) : Ub.call(null, a.name, b.name) : null
}
function F(a, b, c, d, e) {
  this.$ = a;
  this.name = b;
  this.Pa = c;
  this.ka = d;
  this.u = e;
  this.f = 2154168321;
  this.n = 4096
}
n = F.prototype;
n.A = function(a, b) {
  return C(b, this.Pa)
};
n.C = function() {
  var a = this.ka;
  return null != a ? a : this.ka = a = Wb.a ? Wb.a(G.b ? G.b(this.$) : G.call(null, this.$), G.b ? G.b(this.name) : G.call(null, this.name)) : Wb.call(null, G.b ? G.b(this.$) : G.call(null, this.$), G.b ? G.b(this.name) : G.call(null, this.name))
};
n.t = function(a, b) {
  return new F(this.$, this.name, this.Pa, this.ka, b)
};
n.s = f("u");
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return gb.c(c, this, null);
      case 3:
        return gb.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.b = function(a) {
  return gb.c(a, this, null)
};
n.a = function(a, b) {
  return gb.c(a, this, b)
};
n.w = function(a, b) {
  return b instanceof F ? this.Pa === b.Pa : !1
};
n.toString = f("Pa");
var Xb = function() {
  function a(a, b) {
    var c = null != a ? [z(a), z("/"), z(b)].join("") : b;
    return new F(a, b, c, null, null)
  }
  function b(a) {
    return a instanceof F ? a : c.a(null, a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}();
function H(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 8388608 || a.be)) {
    return a.L(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Yb(a, 0)
  }
  if(w(Db, a)) {
    return Eb(a)
  }
  if(x) {
    throw Error([z(a), z("is not ISeqable")].join(""));
  }
  return null
}
function I(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 64 || a.jb)) {
    return a.W(null)
  }
  a = H(a);
  return null == a ? null : cb(a)
}
function J(a) {
  return null != a ? a && (a.f & 64 || a.jb) ? a.da(null) : (a = H(a)) ? db(a) : Zb : Zb
}
function L(a) {
  return null == a ? null : a && (a.f & 128 || a.qc) ? a.ma(null) : H(J(a))
}
var E = function() {
  function a(a, b) {
    return a === b || Bb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.a(a, d)) {
          if(L(e)) {
            a = d, d = I(e), e = L(e)
          }else {
            return b.a(d, I(e))
          }
        }else {
          return!1
        }
      }
    }
    a.m = 2;
    a.g = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.b = m(!0);
  b.a = a;
  b.e = c.e;
  return b
}();
Cb["null"] = m(0);
eb["null"] = !0;
pb["null"] = !0;
qb["null"] = m(null);
Va["null"] = !0;
Xa["null"] = m(0);
Bb["null"] = function(a, b) {
  return null == b
};
xb["null"] = !0;
yb["null"] = m(null);
vb["null"] = !0;
wb["null"] = m(null);
Ya["null"] = m(null);
kb["null"] = !0;
lb["null"] = m(null);
Date.prototype.w = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
Bb.number = function(a, b) {
  return a === b
};
vb["function"] = !0;
wb["function"] = m(null);
Ua["function"] = !0;
Cb._ = function(a) {
  return a[fa] || (a[fa] = ++ga)
};
var $b = function() {
  function a(a, b, c, d) {
    for(var l = Xa(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, B.a(a, d)) : b.call(null, c, B.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = Xa(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, B.a(a, l)) : b.call(null, c, B.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = Xa(a);
    if(0 === c) {
      return b.l ? b.l() : b.call(null)
    }
    for(var d = B.a(a, 0), l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, B.a(a, l)) : b.call(null, d, B.a(a, l)), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.p = a;
  return d
}(), ac = function() {
  function a(a, b, c, d) {
    for(var l = a.length;;) {
      if(d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.l ? b.l() : b.call(null)
    }
    for(var d = a[0], l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.p = a;
  return d
}();
function bc(a) {
  return a ? a.f & 2 || a.Wc ? !0 : a.f ? !1 : w(Va, a) : w(Va, a)
}
function cc(a) {
  return a ? a.f & 16 || a.oc ? !0 : a.f ? !1 : w(ab, a) : w(ab, a)
}
function Yb(a, b) {
  this.d = a;
  this.o = b;
  this.n = 0;
  this.f = 166199550
}
n = Yb.prototype;
n.C = function() {
  return dc.b ? dc.b(this) : dc.call(null, this)
};
n.ma = function() {
  return this.o + 1 < this.d.length ? new Yb(this.d, this.o + 1) : null
};
n.M = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return ac.p(this.d, b, this.d[this.o], this.o + 1)
};
n.ca = function(a, b, c) {
  return ac.p(this.d, b, c, this.o)
};
n.L = function() {
  return this
};
n.K = function() {
  return this.d.length - this.o
};
n.W = function() {
  return this.d[this.o]
};
n.da = function() {
  return this.o + 1 < this.d.length ? new Yb(this.d, this.o + 1) : Zb
};
n.w = function(a, b) {
  return ec.a ? ec.a(this, b) : ec.call(null, this, b)
};
n.ha = function(a, b) {
  var c = b + this.o;
  return c < this.d.length ? this.d[c] : null
};
n.ra = function(a, b, c) {
  a = b + this.o;
  return a < this.d.length ? this.d[a] : c
};
n.R = function() {
  return Zb
};
var fc = function() {
  function a(a, b) {
    return b < a.length ? new Yb(a, b) : null
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}(), M = function() {
  function a(a, b) {
    return fc.a(a, b)
  }
  function b(a) {
    return fc.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}();
Bb._ = function(a, b) {
  return a === b
};
var gc = function() {
  function a(a, b) {
    return null != a ? $a(a, b) : $a(Zb, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(s(e)) {
          a = b.a(a, d), d = I(e), e = L(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.m = 2;
    a.g = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}();
function Q(a) {
  if(null != a) {
    if(a && (a.f & 2 || a.Wc)) {
      a = a.K(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(w(Va, a)) {
            a = Xa(a)
          }else {
            if(x) {
              a: {
                a = H(a);
                for(var b = 0;;) {
                  if(bc(a)) {
                    a = b + Xa(a);
                    break a
                  }
                  a = L(a);
                  b += 1
                }
                a = void 0
              }
            }else {
              a = null
            }
          }
        }
      }
    }
  }else {
    a = 0
  }
  return a
}
var hc = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return H(a) ? I(a) : c
      }
      if(cc(a)) {
        return B.c(a, b, c)
      }
      if(H(a)) {
        a = L(a), b -= 1
      }else {
        return x ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(H(a)) {
          return I(a)
        }
        throw Error("Index out of bounds");
      }
      if(cc(a)) {
        return B.a(a, b)
      }
      if(H(a)) {
        var c = L(a), h = b - 1;
        a = c;
        b = h
      }else {
        if(x) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), R = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.f & 16 || a.oc)) {
        return a.ra(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(w(ab, a)) {
        return B.a(a, b)
      }
      if(x) {
        if(a ? a.f & 64 || a.jb || (a.f ? 0 : w(bb, a)) : w(bb, a)) {
          return hc.c(a, b, c)
        }
        throw Error([z("nth not supported on this type "), z(Sa(Ra(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.f & 16 || a.oc)) {
      return a.ha(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(w(ab, a)) {
      return B.a(a, b)
    }
    if(x) {
      if(a ? a.f & 64 || a.jb || (a.f ? 0 : w(bb, a)) : w(bb, a)) {
        return hc.a(a, b)
      }
      throw Error([z("nth not supported on this type "), z(Sa(Ra(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), S = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Zc) ? a.O(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : w(fb, a) ? gb.c(a, b, c) : x ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Zc) ? a.N(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : w(fb, a) ? gb.a(a, b) : null
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), T = function() {
  function a(a, b, c) {
    return null != a ? jb(a, b, c) : ic.a ? ic.a([b], [c]) : ic.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var q = null;
      3 < arguments.length && (q = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, q)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.c(a, d, e), s(l)) {
          d = I(l), e = I(L(l)), l = L(L(l))
        }else {
          return a
        }
      }
    }
    a.m = 3;
    a.g = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, M(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b
}(), jc = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), s(d)) {
          c = I(d), d = L(d)
        }else {
          return b
        }
      }
    }
    b.m = 2;
    b.g = function(a) {
      var b = I(a);
      a = L(a);
      var c = I(a);
      a = J(a);
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return lb(a, d);
      default:
        return b.e(a, d, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 2;
  a.g = b.g;
  a.b = aa();
  a.a = function(a, b) {
    return lb(a, b)
  };
  a.e = b.e;
  return a
}();
function kc(a) {
  var b = "function" == p(a);
  return b ? b : a ? s(s(null) ? null : a.Vc) ? !0 : a.Kc ? !1 : w(Ua, a) : w(Ua, a)
}
var U = function lc(b, c) {
  return kc(b) && !(b ? b.f & 262144 || b.fe || (b.f ? 0 : w(xb, b)) : w(xb, b)) ? lc(function() {
    "undefined" === typeof Ja && (Ja = function(b, c, g, h) {
      this.i = b;
      this.sb = c;
      this.xd = g;
      this.qd = h;
      this.n = 0;
      this.f = 393217
    }, Ja.Ca = !0, Ja.Ba = "cljs.core/t132499", Ja.Ka = function(b, c) {
      return C(c, "cljs.core/t132499")
    }, Ja.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return mc.a ? mc.a(b.sb, d) : mc.call(null, b.sb, d)
      }
      b.m = 1;
      b.g = function(b) {
        var d = I(b);
        b = J(b);
        return c(d, b)
      };
      b.e = c;
      return b
    }(), Ja.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(A(c)))
    }, Ja.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h)
      }
      function c(b) {
        return mc.a ? mc.a(self__.sb, b) : mc.call(null, self__.sb, b)
      }
      b.m = 0;
      b.g = function(b) {
        b = H(b);
        return c(b)
      };
      b.e = c;
      return b
    }(), Ja.prototype.Vc = !0, Ja.prototype.s = f("qd"), Ja.prototype.t = function(b, c) {
      return new Ja(this.i, this.sb, this.xd, c)
    });
    return new Ja(c, b, lc, null)
  }(), c) : yb(b, c)
};
function nc(a) {
  return(a ? a.f & 131072 || a.ad || (a.f ? 0 : w(vb, a)) : w(vb, a)) ? wb(a) : null
}
var oc = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), s(d)) {
          c = I(d), d = L(d)
        }else {
          return b
        }
      }
    }
    b.m = 2;
    b.g = function(a) {
      var b = I(a);
      a = L(a);
      var c = I(a);
      a = J(a);
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return qb(a, d);
      default:
        return b.e(a, d, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 2;
  a.g = b.g;
  a.b = aa();
  a.a = function(a, b) {
    return qb(a, b)
  };
  a.e = b.e;
  return a
}(), pc = {}, qc = 0;
function G(a) {
  if(a && (a.f & 4194304 || a.Zd)) {
    a = a.C(null)
  }else {
    if("number" === typeof a) {
      a = Math.floor(a) % 2147483647
    }else {
      if(!0 === a) {
        a = 1
      }else {
        if(!1 === a) {
          a = 0
        }else {
          if("string" === typeof a) {
            255 < qc && (pc = {}, qc = 0);
            var b = pc[a];
            "number" !== typeof b && (b = ua(a), pc[a] = b, qc += 1);
            a = b
          }else {
            a = x ? Cb(a) : null
          }
        }
      }
    }
  }
  return a
}
function rc(a) {
  return null == a || v(H(a))
}
function sc(a) {
  return null == a ? !1 : a ? a.f & 8 || a.Wd ? !0 : a.f ? !1 : w(Za, a) : w(Za, a)
}
function tc(a) {
  return a ? a.f & 16777216 || a.ce ? !0 : a.f ? !1 : w(Fb, a) : w(Fb, a)
}
function uc(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.$d ? !0 : a.f ? !1 : w(kb, a) : w(kb, a)
}
function vc(a) {
  return a ? a.f & 16384 || a.ee ? !0 : a.f ? !1 : w(rb, a) : w(rb, a)
}
function wc(a) {
  return a ? a.n & 512 || a.Vd ? !0 : !1 : !1
}
function xc(a) {
  var b = [];
  Ha(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function yc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var zc = {};
function Ac(a) {
  return null == a ? !1 : a ? a.f & 64 || a.jb ? !0 : a.f ? !1 : w(bb, a) : w(bb, a)
}
function Bc(a) {
  return s(a) ? !0 : !1
}
function Cc(a, b) {
  return S.c(a, b, zc) === zc ? !1 : !0
}
function Dc(a, b) {
  return null != a && (a ? a.f & 512 || a.Ud || (a.f ? 0 : w(hb, a)) : w(hb, a)) && Cc(a, b) ? new V(null, 2, 5, W, [b, S.a(a, b)], null) : null
}
function Ub(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(Ra(a) === Ra(b)) {
    return a && (a.n & 2048 || a.vb) ? a.wb(null, b) : Fa(a, b)
  }
  if(x) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Ec = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = Ub(R.a(a, h), R.a(b, h));
      if(0 === k && h + 1 < c) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var g = Q(a), h = Q(b);
    return g < h ? -1 : g > h ? 1 : x ? c.p(a, b, g, 0) : null
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.p = a;
  return c
}();
function Gc(a) {
  return E.a(a, Ub) ? Ub : function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return"number" === typeof d ? d : s(d) ? -1 : s(a.a ? a.a(c, b) : a.call(null, c, b)) ? 1 : 0
  }
}
var Ic = function() {
  function a(a, b) {
    if(H(b)) {
      var c = Hc.b ? Hc.b(b) : Hc.call(null, b);
      Ga(c, Gc(a));
      return H(c)
    }
    return Zb
  }
  function b(a) {
    return c.a(Ub, a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}(), Jc = function() {
  function a(a, b, c) {
    for(c = H(c);;) {
      if(c) {
        b = a.a ? a.a(b, I(c)) : a.call(null, b, I(c)), c = L(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = H(b);
    return c ? X.c ? X.c(a, I(c), L(c)) : X.call(null, a, I(c), L(c)) : a.l ? a.l() : a.call(null)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), X = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.cd) ? c.ca(null, a, b) : c instanceof Array ? ac.c(c, a, b) : "string" === typeof c ? ac.c(c, a, b) : w(zb, c) ? Ab.c(c, a, b) : x ? Jc.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.cd) ? b.ba(null, a) : b instanceof Array ? ac.a(b, a) : "string" === typeof b ? ac.a(b, a) : w(zb, b) ? Ab.a(b, a) : x ? Jc.a(a, b) : null
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Kc(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.b ? Math.floor.b((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.b ? Math.ceil.b((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2)
}
function Lc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function Mc(a) {
  var b = 1;
  for(a = H(a);;) {
    if(a && 0 < b) {
      b -= 1, a = L(a)
    }else {
      return a
    }
  }
}
var z = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      for(var e = new Ia(b.b(a)), l = d;;) {
        if(s(l)) {
          e = e.append(b.b(I(l))), l = L(l)
        }else {
          return e.toString()
        }
      }
    }
    a.m = 1;
    a.g = function(a) {
      var b = I(a);
      a = J(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, M(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.g = c.g;
  b.l = m("");
  b.b = a;
  b.e = c.e;
  return b
}(), Nc = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return a.substring(c)
  };
  a.c = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}();
function ec(a, b) {
  return Bc(tc(b) ? function() {
    for(var c = H(a), d = H(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(E.a(I(c), I(d))) {
        c = L(c), d = L(d)
      }else {
        return x ? !1 : null
      }
    }
  }() : null)
}
function Wb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function dc(a) {
  if(H(a)) {
    var b = G(I(a));
    for(a = L(a);;) {
      if(null == a) {
        return b
      }
      b = Wb(b, G(I(a)));
      a = L(a)
    }
  }else {
    return 0
  }
}
function Oc(a) {
  var b = 0;
  for(a = H(a);;) {
    if(a) {
      var c = I(a), b = (b + (G(Pc.b ? Pc.b(c) : Pc.call(null, c)) ^ G(Qc.b ? Qc.b(c) : Qc.call(null, c)))) % 4503599627370496;
      a = L(a)
    }else {
      return b
    }
  }
}
function Rc(a, b, c, d, e) {
  this.i = a;
  this.ob = b;
  this.Fa = c;
  this.count = d;
  this.j = e;
  this.n = 0;
  this.f = 65937646
}
n = Rc.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.ma = function() {
  return 1 === this.count ? null : this.Fa
};
n.M = function(a, b) {
  return new Rc(this.i, b, this, this.count + 1, null)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return Jc.a(b, this)
};
n.ca = function(a, b, c) {
  return Jc.c(b, c, this)
};
n.L = function() {
  return this
};
n.K = f("count");
n.W = f("ob");
n.da = function() {
  return 1 === this.count ? Zb : this.Fa
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new Rc(b, this.ob, this.Fa, this.count, this.j)
};
n.s = f("i");
n.R = function() {
  return Zb
};
function Sc(a) {
  this.i = a;
  this.n = 0;
  this.f = 65937614
}
n = Sc.prototype;
n.C = m(0);
n.ma = m(null);
n.M = function(a, b) {
  return new Rc(this.i, b, null, 1, null)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return Jc.a(b, this)
};
n.ca = function(a, b, c) {
  return Jc.c(b, c, this)
};
n.L = m(null);
n.K = m(0);
n.W = m(null);
n.da = function() {
  return Zb
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new Sc(b)
};
n.s = f("i");
n.R = function() {
  return this
};
var Zb = new Sc(null);
function Tc(a, b, c, d) {
  this.i = a;
  this.ob = b;
  this.Fa = c;
  this.j = d;
  this.n = 0;
  this.f = 65929452
}
n = Tc.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.ma = function() {
  return null == this.Fa ? null : H(this.Fa)
};
n.M = function(a, b) {
  return new Tc(null, b, this, this.j)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return Jc.a(b, this)
};
n.ca = function(a, b, c) {
  return Jc.c(b, c, this)
};
n.L = function() {
  return this
};
n.W = f("ob");
n.da = function() {
  return null == this.Fa ? Zb : this.Fa
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new Tc(b, this.ob, this.Fa, this.j)
};
n.s = f("i");
n.R = function() {
  return U(Zb, this.i)
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.jb)) ? new Tc(null, a, b, null) : new Tc(null, a, H(b), null)
}
function Y(a, b, c, d) {
  this.$ = a;
  this.name = b;
  this.La = c;
  this.ka = d;
  this.f = 2153775105;
  this.n = 4096
}
n = Y.prototype;
n.A = function(a, b) {
  return C(b, [z(":"), z(this.La)].join(""))
};
n.C = function() {
  null == this.ka && (this.ka = Wb(G(this.$), G(this.name)) + 2654435769);
  return this.ka
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return S.a(c, this);
      case 3:
        return S.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.b = function(a) {
  return S.a(a, this)
};
n.a = function(a, b) {
  return S.c(a, this, b)
};
n.w = function(a, b) {
  return b instanceof Y ? this.La === b.La : !1
};
n.toString = function() {
  return[z(":"), z(this.La)].join("")
};
function Z(a, b) {
  return a === b ? !0 : a instanceof Y && b instanceof Y ? a.La === b.La : !1
}
var Vc = function() {
  function a(a, b) {
    return new Y(a, b, [z(s(a) ? [z(a), z("/")].join("") : null), z(b)].join(""), null)
  }
  function b(a) {
    if(a instanceof Y) {
      return a
    }
    if(a instanceof F) {
      var b;
      if(a && (a.n & 4096 || a.bd)) {
        b = a.$
      }else {
        throw Error([z("Doesn't support namespace: "), z(a)].join(""));
      }
      return new Y(b, Uc.b ? Uc.b(a) : Uc.call(null, a), a.Pa, null)
    }
    return"string" === typeof a ? (b = a.split("/"), 2 === b.length ? new Y(b[0], b[1], a, null) : new Y(null, b[0], a, null)) : null
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}();
function Wc(a, b, c, d) {
  this.i = a;
  this.hb = b;
  this.k = c;
  this.j = d;
  this.n = 0;
  this.f = 32374988
}
n = Wc.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.ma = function() {
  Eb(this);
  return null == this.k ? null : L(this.k)
};
n.M = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return Sb(this)
};
function Xc(a) {
  null != a.hb && (a.k = a.hb.l ? a.hb.l() : a.hb.call(null), a.hb = null);
  return a.k
}
n.ba = function(a, b) {
  return Jc.a(b, this)
};
n.ca = function(a, b, c) {
  return Jc.c(b, c, this)
};
n.L = function() {
  Xc(this);
  if(null == this.k) {
    return null
  }
  for(var a = this.k;;) {
    if(a instanceof Wc) {
      a = Xc(a)
    }else {
      return this.k = a, H(this.k)
    }
  }
};
n.W = function() {
  Eb(this);
  return null == this.k ? null : I(this.k)
};
n.da = function() {
  Eb(this);
  return null != this.k ? J(this.k) : Zb
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new Wc(b, this.hb, this.k, this.j)
};
n.s = f("i");
n.R = function() {
  return U(Zb, this.i)
};
function Yc(a, b) {
  this.Jb = a;
  this.end = b;
  this.n = 0;
  this.f = 2
}
Yc.prototype.K = f("end");
Yc.prototype.add = function(a) {
  this.Jb[this.end] = a;
  return this.end += 1
};
Yc.prototype.la = function() {
  var a = new Zc(this.Jb, 0, this.end);
  this.Jb = null;
  return a
};
function Zc(a, b, c) {
  this.d = a;
  this.J = b;
  this.end = c;
  this.n = 0;
  this.f = 524306
}
n = Zc.prototype;
n.ba = function(a, b) {
  return ac.p(this.d, b, this.d[this.J], this.J + 1)
};
n.ca = function(a, b, c) {
  return ac.p(this.d, b, c, this.J)
};
n.nc = function() {
  if(this.J === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Zc(this.d, this.J + 1, this.end)
};
n.ha = function(a, b) {
  return this.d[this.J + b]
};
n.ra = function(a, b, c) {
  return 0 <= b && b < this.end - this.J ? this.d[this.J + b] : c
};
n.K = function() {
  return this.end - this.J
};
var $c = function() {
  function a(a, b, c) {
    return new Zc(a, b, c)
  }
  function b(a, b) {
    return new Zc(a, b, a.length)
  }
  function c(a) {
    return new Zc(a, 0, a.length)
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}();
function ad(a, b, c, d) {
  this.la = a;
  this.za = b;
  this.i = c;
  this.j = d;
  this.f = 31850732;
  this.n = 1536
}
n = ad.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.ma = function() {
  if(1 < Xa(this.la)) {
    return new ad(Nb(this.la), this.za, this.i, null)
  }
  var a = Eb(this.za);
  return null == a ? null : a
};
n.M = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return Sb(this)
};
n.L = function() {
  return this
};
n.W = function() {
  return B.a(this.la, 0)
};
n.da = function() {
  return 1 < Xa(this.la) ? new ad(Nb(this.la), this.za, this.i, null) : null == this.za ? Zb : this.za
};
n.Nb = function() {
  return null == this.za ? null : this.za
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new ad(this.la, this.za, b, this.j)
};
n.s = f("i");
n.R = function() {
  return U(Zb, this.i)
};
n.Ob = f("la");
n.Pb = function() {
  return null == this.za ? Zb : this.za
};
function bd(a, b) {
  return 0 === Xa(a) ? b : new ad(a, b, null, null)
}
function Hc(a) {
  for(var b = [];;) {
    if(H(a)) {
      b.push(I(a)), a = L(a)
    }else {
      return b
    }
  }
}
function cd(a, b) {
  if(bc(a)) {
    return Q(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && H(c)) {
      c = L(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var ed = function dd(b) {
  return null == b ? null : null == L(b) ? H(I(b)) : x ? O(I(b), dd(L(b))) : null
}, fd = function() {
  function a(a, b) {
    return new Wc(null, function() {
      var c = H(a);
      return c ? wc(c) ? bd(Ob(c), d.a(Pb(c), b)) : O(I(c), d.a(J(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new Wc(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new Wc(null, m(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g)
    }
    function b(a, c, e) {
      return function t(a, b) {
        return new Wc(null, function() {
          var c = H(a);
          return c ? wc(c) ? bd(Ob(c), t(Pb(c), b)) : O(I(c), t(J(c), b)) : s(b) ? t(I(b), L(b)) : null
        }, null, null)
      }(d.a(a, c), e)
    }
    a.m = 2;
    a.g = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.g = e.g;
  d.l = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d
}(), gd = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)))
  }
  function b(a, b, c) {
    return O(a, O(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, q, u) {
      var t = null;
      4 < arguments.length && (t = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, q, t)
    }
    function b(a, c, d, e, g) {
      return O(a, O(c, O(d, O(e, ed(g)))))
    }
    a.m = 4;
    a.g = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var u = I(a);
      a = J(a);
      return b(c, d, e, u, a)
    };
    a.e = b;
    return a
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return H(c);
      case 2:
        return O(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.e(c, g, h, k, M(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 4;
  c.g = d.g;
  c.b = function(a) {
    return H(a)
  };
  c.a = function(a, b) {
    return O(a, b)
  };
  c.c = b;
  c.p = a;
  c.e = d.e;
  return c
}();
function hd(a, b, c) {
  var d = H(c);
  if(0 === b) {
    return a.l ? a.l() : a.call(null)
  }
  c = cb(d);
  var e = db(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c)
  }
  var d = cb(e), g = db(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = cb(g), h = db(g);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var g = cb(h), k = db(h);
  if(4 === b) {
    return a.p ? a.p(c, d, e, g) : a.p ? a.p(c, d, e, g) : a.call(null, c, d, e, g)
  }
  h = cb(k);
  k = db(k);
  if(5 === b) {
    return a.H ? a.H(c, d, e, g, h) : a.H ? a.H(c, d, e, g, h) : a.call(null, c, d, e, g, h)
  }
  a = cb(k);
  var l = db(k);
  if(6 === b) {
    return a.qa ? a.qa(c, d, e, g, h, a) : a.qa ? a.qa(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a)
  }
  var k = cb(l), q = db(l);
  if(7 === b) {
    return a.$a ? a.$a(c, d, e, g, h, a, k) : a.$a ? a.$a(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k)
  }
  var l = cb(q), u = db(q);
  if(8 === b) {
    return a.ac ? a.ac(c, d, e, g, h, a, k, l) : a.ac ? a.ac(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l)
  }
  var q = cb(u), t = db(u);
  if(9 === b) {
    return a.bc ? a.bc(c, d, e, g, h, a, k, l, q) : a.bc ? a.bc(c, d, e, g, h, a, k, l, q) : a.call(null, c, d, e, g, h, a, k, l, q)
  }
  var u = cb(t), D = db(t);
  if(10 === b) {
    return a.Qb ? a.Qb(c, d, e, g, h, a, k, l, q, u) : a.Qb ? a.Qb(c, d, e, g, h, a, k, l, q, u) : a.call(null, c, d, e, g, h, a, k, l, q, u)
  }
  var t = cb(D), N = db(D);
  if(11 === b) {
    return a.Rb ? a.Rb(c, d, e, g, h, a, k, l, q, u, t) : a.Rb ? a.Rb(c, d, e, g, h, a, k, l, q, u, t) : a.call(null, c, d, e, g, h, a, k, l, q, u, t)
  }
  var D = cb(N), K = db(N);
  if(12 === b) {
    return a.Sb ? a.Sb(c, d, e, g, h, a, k, l, q, u, t, D) : a.Sb ? a.Sb(c, d, e, g, h, a, k, l, q, u, t, D) : a.call(null, c, d, e, g, h, a, k, l, q, u, t, D)
  }
  var N = cb(K), P = db(K);
  if(13 === b) {
    return a.Tb ? a.Tb(c, d, e, g, h, a, k, l, q, u, t, D, N) : a.Tb ? a.Tb(c, d, e, g, h, a, k, l, q, u, t, D, N) : a.call(null, c, d, e, g, h, a, k, l, q, u, t, D, N)
  }
  var K = cb(P), ka = db(P);
  if(14 === b) {
    return a.Ub ? a.Ub(c, d, e, g, h, a, k, l, q, u, t, D, N, K) : a.Ub ? a.Ub(c, d, e, g, h, a, k, l, q, u, t, D, N, K) : a.call(null, c, d, e, g, h, a, k, l, q, u, t, D, N, K)
  }
  var P = cb(ka), wa = db(ka);
  if(15 === b) {
    return a.Vb ? a.Vb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P) : a.Vb ? a.Vb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P) : a.call(null, c, d, e, g, h, a, k, l, q, u, t, D, N, K, P)
  }
  var ka = cb(wa), Wa = db(wa);
  if(16 === b) {
    return a.Wb ? a.Wb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka) : a.Wb ? a.Wb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka) : a.call(null, c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka)
  }
  var wa = cb(Wa), tb = db(Wa);
  if(17 === b) {
    return a.Xb ? a.Xb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa) : a.Xb ? a.Xb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa) : a.call(null, c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa)
  }
  var Wa = cb(tb), rd = db(tb);
  if(18 === b) {
    return a.Yb ? a.Yb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa, Wa) : a.Yb ? a.Yb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa, Wa) : a.call(null, c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa, Wa)
  }
  tb = cb(rd);
  rd = db(rd);
  if(19 === b) {
    return a.Zb ? a.Zb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa, Wa, tb) : a.Zb ? a.Zb(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa, Wa, tb) : a.call(null, c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa, Wa, tb)
  }
  var Fc = cb(rd);
  db(rd);
  if(20 === b) {
    return a.$b ? a.$b(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa, Wa, tb, Fc) : a.$b ? a.$b(c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa, Wa, tb, Fc) : a.call(null, c, d, e, g, h, a, k, l, q, u, t, D, N, K, P, ka, wa, Wa, tb, Fc)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var mc = function() {
  function a(a, b, c, d, e) {
    b = gd.p(b, c, d, e);
    c = a.m;
    return a.g ? (d = cd(b, c + 1), d <= c ? hd(a, d, b) : a.g(b)) : a.apply(a, Hc(b))
  }
  function b(a, b, c, d) {
    b = gd.c(b, c, d);
    c = a.m;
    return a.g ? (d = cd(b, c + 1), d <= c ? hd(a, d, b) : a.g(b)) : a.apply(a, Hc(b))
  }
  function c(a, b, c) {
    b = gd.a(b, c);
    c = a.m;
    if(a.g) {
      var d = cd(b, c + 1);
      return d <= c ? hd(a, d, b) : a.g(b)
    }
    return a.apply(a, Hc(b))
  }
  function d(a, b) {
    var c = a.m;
    if(a.g) {
      var d = cd(b, c + 1);
      return d <= c ? hd(a, d, b) : a.g(b)
    }
    return a.apply(a, Hc(b))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, N) {
      var K = null;
      5 < arguments.length && (K = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, K)
    }
    function b(a, c, d, e, g, h) {
      c = O(c, O(d, O(e, O(g, ed(h)))));
      d = a.m;
      return a.g ? (e = cd(c, d + 1), e <= d ? hd(a, e, c) : a.g(c)) : a.apply(a, Hc(c))
    }
    a.m = 5;
    a.g = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var g = I(a);
      a = L(a);
      var h = I(a);
      a = J(a);
      return b(c, d, e, g, h, a)
    };
    a.e = b;
    return a
  }(), e = function(e, k, l, q, u, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, q);
      case 5:
        return a.call(this, e, k, l, q, u);
      default:
        return g.e(e, k, l, q, u, M(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.g = g.g;
  e.a = d;
  e.c = c;
  e.p = b;
  e.H = a;
  e.e = g.e;
  return e
}(), id = function() {
  function a(a, d, e) {
    var g = null;
    2 < arguments.length && (g = M(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, g)
  }
  function b(a, b, e) {
    return U(a, mc.c(b, nc(a), e))
  }
  a.m = 2;
  a.g = function(a) {
    var d = I(a);
    a = L(a);
    var e = I(a);
    a = J(a);
    return b(d, e, a)
  };
  a.e = b;
  return a
}(), jd = function() {
  function a(a, b) {
    return!E.a(a, b)
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l)
    }
    function b(a, c, d) {
      return v(mc.p(E, a, c, d))
    }
    a.m = 2;
    a.g = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.b = m(!1);
  b.a = a;
  b.e = c.e;
  return b
}();
function kd(a) {
  return H(a) ? a : null
}
function ld(a, b) {
  for(;;) {
    if(null == H(b)) {
      return!0
    }
    if(s(a.b ? a.b(I(b)) : a.call(null, I(b)))) {
      var c = a, d = L(b);
      a = c;
      b = d
    }else {
      return x ? !1 : null
    }
  }
}
function md(a, b) {
  for(;;) {
    if(H(b)) {
      var c = a.b ? a.b(I(b)) : a.call(null, I(b));
      if(s(c)) {
        return c
      }
      var c = a, d = L(b);
      a = c;
      b = d
    }else {
      return null
    }
  }
}
function nd(a) {
  return a
}
function od(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l)
      }
      function c(b, d, e) {
        return v(mc.p(a, b, d, e))
      }
      b.m = 2;
      b.g = function(a) {
        var b = I(a);
        a = L(a);
        var d = I(a);
        a = J(a);
        return c(b, d, a)
      };
      b.e = c;
      return b
    }(), b = function(b, e, g) {
      switch(arguments.length) {
        case 0:
          return v(a.l ? a.l() : a.call(null));
        case 1:
          return v(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return v(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.e(b, e, M(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.m = 2;
    b.g = c.g;
    return b
  }()
}
var pd = function() {
  function a(a, b, c, d) {
    return function() {
      var l = null, q = function() {
        function l(a, b, c, d) {
          var e = null;
          3 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 3), 0));
          return q.call(this, a, b, c, e)
        }
        function q(l, u, t, P) {
          return mc.H(a, null == l ? b : l, null == u ? c : u, null == t ? d : t, P)
        }
        l.m = 3;
        l.g = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var d = I(a);
          a = J(a);
          return q(b, c, d, a)
        };
        l.e = q;
        return l
      }(), l = function(l, t, D, N) {
        switch(arguments.length) {
          case 2:
            return a.a ? a.a(null == l ? b : l, null == t ? c : t) : a.call(null, null == l ? b : l, null == t ? c : t);
          case 3:
            return a.c ? a.c(null == l ? b : l, null == t ? c : t, null == D ? d : D) : a.call(null, null == l ? b : l, null == t ? c : t, null == D ? d : D);
          default:
            return q.e(l, t, D, M(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      l.m = 3;
      l.g = q.g;
      return l
    }()
  }
  function b(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = M(Array.prototype.slice.call(arguments, 3), 0));
          return l.call(this, a, b, c, g)
        }
        function l(d, k, q, u) {
          return mc.H(a, null == d ? b : d, null == k ? c : k, q, u)
        }
        d.m = 3;
        d.g = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var d = I(a);
          a = J(a);
          return l(b, c, d, a)
        };
        d.e = l;
        return d
      }(), d = function(d, k, t, D) {
        switch(arguments.length) {
          case 2:
            return a.a ? a.a(null == d ? b : d, null == k ? c : k) : a.call(null, null == d ? b : d, null == k ? c : k);
          case 3:
            return a.c ? a.c(null == d ? b : d, null == k ? c : k, t) : a.call(null, null == d ? b : d, null == k ? c : k, t);
          default:
            return l.e(d, k, t, M(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.m = 3;
      d.g = l.g;
      return d
    }()
  }
  function c(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, g) {
          var h = null;
          3 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h)
        }
        function d(c, h, l, k) {
          return mc.H(a, null == c ? b : c, h, l, k)
        }
        c.m = 3;
        c.g = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var e = I(a);
          a = J(a);
          return d(b, c, e, a)
        };
        c.e = d;
        return c
      }(), c = function(c, h, u, t) {
        switch(arguments.length) {
          case 1:
            return a.b ? a.b(null == c ? b : c) : a.call(null, null == c ? b : c);
          case 2:
            return a.a ? a.a(null == c ? b : c, h) : a.call(null, null == c ? b : c, h);
          case 3:
            return a.c ? a.c(null == c ? b : c, h, u) : a.call(null, null == c ? b : c, h, u);
          default:
            return d.e(c, h, u, M(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.m = 3;
      c.g = d.g;
      return c
    }()
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.p = a;
  return d
}(), qd = function() {
  function a(a, b, c, e) {
    return new Wc(null, function() {
      var q = H(b), u = H(c), t = H(e);
      return q && u && t ? O(a.c ? a.c(I(q), I(u), I(t)) : a.call(null, I(q), I(u), I(t)), d.p(a, J(q), J(u), J(t))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new Wc(null, function() {
      var e = H(b), q = H(c);
      return e && q ? O(a.a ? a.a(I(e), I(q)) : a.call(null, I(e), I(q)), d.c(a, J(e), J(q))) : null
    }, null, null)
  }
  function c(a, b) {
    return new Wc(null, function() {
      var c = H(b);
      if(c) {
        if(wc(c)) {
          for(var e = Ob(c), q = Q(e), u = new Yc(Array(q), 0), t = 0;;) {
            if(t < q) {
              var D = a.b ? a.b(B.a(e, t)) : a.call(null, B.a(e, t));
              u.add(D);
              t += 1
            }else {
              break
            }
          }
          return bd(u.la(), d.a(a, Pb(c)))
        }
        return O(a.b ? a.b(I(c)) : a.call(null, I(c)), d.a(a, J(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, g, t) {
      var D = null;
      4 < arguments.length && (D = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, D)
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return mc.a(a, b)
      }, function N(a) {
        return new Wc(null, function() {
          var b = d.a(H, a);
          return ld(nd, b) ? O(d.a(I, b), N(d.a(J, b))) : null
        }, null, null)
      }(gc.e(h, g, M([e, c], 0))))
    }
    a.m = 4;
    a.g = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, g, a)
    };
    a.e = b;
    return a
  }(), d = function(d, h, k, l, q) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, M(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.p = a;
  d.e = e.e;
  return d
}(), td = function sd(b, c) {
  return new Wc(null, function() {
    var d = H(c);
    if(d) {
      if(wc(d)) {
        for(var e = Ob(d), g = Q(e), h = new Yc(Array(g), 0), k = 0;;) {
          if(k < g) {
            if(s(b.b ? b.b(B.a(e, k)) : b.call(null, B.a(e, k)))) {
              var l = B.a(e, k);
              h.add(l)
            }
            k += 1
          }else {
            break
          }
        }
        return bd(h.la(), sd(b, Pb(d)))
      }
      e = I(d);
      d = J(d);
      return s(b.b ? b.b(e) : b.call(null, e)) ? O(e, sd(b, d)) : sd(b, d)
    }
    return null
  }, null, null)
};
function ud(a, b) {
  var c;
  null != a ? a && (a.n & 4 || a.Xd) ? (c = X.c(Jb, Ib(a), b), c = Kb(c)) : c = X.c($a, a, b) : c = X.c(gc, Zb, b);
  return c
}
var vd = function() {
  function a(a, b, c, d, g, t) {
    var D = R.c(b, 0, null);
    return(b = Mc(b)) ? T.c(a, D, e.qa(S.a(a, D), b, c, d, g, t)) : T.c(a, D, c.p ? c.p(S.a(a, D), d, g, t) : c.call(null, S.a(a, D), d, g, t))
  }
  function b(a, b, c, d, g) {
    var t = R.c(b, 0, null);
    return(b = Mc(b)) ? T.c(a, t, e.H(S.a(a, t), b, c, d, g)) : T.c(a, t, c.c ? c.c(S.a(a, t), d, g) : c.call(null, S.a(a, t), d, g))
  }
  function c(a, b, c, d) {
    var g = R.c(b, 0, null);
    return(b = Mc(b)) ? T.c(a, g, e.p(S.a(a, g), b, c, d)) : T.c(a, g, c.a ? c.a(S.a(a, g), d) : c.call(null, S.a(a, g), d))
  }
  function d(a, b, c) {
    var d = R.c(b, 0, null);
    return(b = Mc(b)) ? T.c(a, d, e.c(S.a(a, d), b, c)) : T.c(a, d, c.b ? c.b(S.a(a, d)) : c.call(null, S.a(a, d)))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, N, K) {
      var P = null;
      6 < arguments.length && (P = M(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, g, h, N, P)
    }
    function b(a, c, d, g, h, k, K) {
      var P = R.c(c, 0, null);
      return(c = Mc(c)) ? T.c(a, P, mc.e(e, S.a(a, P), c, d, g, M([h, k, K], 0))) : T.c(a, P, mc.e(d, S.a(a, P), g, h, k, M([K], 0)))
    }
    a.m = 6;
    a.g = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var g = I(a);
      a = L(a);
      var h = I(a);
      a = L(a);
      var K = I(a);
      a = J(a);
      return b(c, d, e, g, h, K, a)
    };
    a.e = b;
    return a
  }(), e = function(e, k, l, q, u, t, D) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, q);
      case 5:
        return b.call(this, e, k, l, q, u);
      case 6:
        return a.call(this, e, k, l, q, u, t);
      default:
        return g.e(e, k, l, q, u, t, M(arguments, 6))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 6;
  e.g = g.g;
  e.c = d;
  e.p = c;
  e.H = b;
  e.qa = a;
  e.e = g.e;
  return e
}();
function wd(a, b) {
  this.r = a;
  this.d = b
}
function xd(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function yd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new wd(a, Array(32));
    d.d[0] = c;
    c = d;
    b -= 5
  }
}
var Ad = function zd(b, c, d, e) {
  var g = new wd(d.r, A(d.d)), h = b.h - 1 >>> c & 31;
  5 === c ? g.d[h] = e : (d = d.d[h], b = null != d ? zd(b, c - 5, d, e) : yd(null, c - 5, e), g.d[h] = b);
  return g
};
function Bd(a, b) {
  throw Error([z("No item "), z(a), z(" in vector of length "), z(b)].join(""));
}
function Cd(a, b) {
  if(0 <= b && b < a.h) {
    if(b >= xd(a)) {
      return a.X
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      }else {
        return c.d
      }
    }
  }else {
    return Bd(b, a.h)
  }
}
var Ed = function Dd(b, c, d, e, g) {
  var h = new wd(d.r, A(d.d));
  if(0 === c) {
    h.d[e & 31] = g
  }else {
    var k = e >>> c & 31;
    b = Dd(b, c - 5, d.d[k], e, g);
    h.d[k] = b
  }
  return h
};
function V(a, b, c, d, e, g) {
  this.i = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.X = e;
  this.j = g;
  this.n = 4;
  this.f = 167668511
}
n = V.prototype;
n.ib = function() {
  return new Fd(this.h, this.shift, Gd.b ? Gd.b(this.root) : Gd.call(null, this.root), Hd.b ? Hd.b(this.X) : Hd.call(null, this.X))
};
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.N = function(a, b) {
  return B.c(this, b, null)
};
n.O = function(a, b, c) {
  return B.c(this, b, c)
};
n.Ia = function(a, b, c) {
  if(0 <= b && b < this.h) {
    return xd(this) <= b ? (a = A(this.X), a[b & 31] = c, new V(this.i, this.h, this.shift, this.root, a, null)) : new V(this.i, this.h, this.shift, Ed(this, this.shift, this.root, b, c), this.X, null)
  }
  if(b === this.h) {
    return $a(this, c)
  }
  if(x) {
    throw Error([z("Index "), z(b), z(" out of bounds  [0,"), z(this.h), z("]")].join(""));
  }
  return null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ha(null, c);
      case 3:
        return this.ra(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.b = function(a) {
  return this.ha(null, a)
};
n.a = function(a, b) {
  return this.ra(null, a, b)
};
n.M = function(a, b) {
  if(32 > this.h - xd(this)) {
    for(var c = this.X.length, d = Array(c + 1), e = 0;;) {
      if(e < c) {
        d[e] = this.X[e], e += 1
      }else {
        break
      }
    }
    d[c] = b;
    return new V(this.i, this.h + 1, this.shift, this.root, d, null)
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = new wd(null, Array(32)), d.d[0] = this.root, e = yd(null, this.shift, new wd(null, this.X)), d.d[1] = e) : d = Ad(this, this.shift, this.root, new wd(null, this.X));
  return new V(this.i, this.h + 1, c, d, [b], null)
};
n.cc = function() {
  return B.a(this, 0)
};
n.pc = function() {
  return B.a(this, 1)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return $b.a(this, b)
};
n.ca = function(a, b, c) {
  return $b.c(this, b, c)
};
n.L = function() {
  return 0 === this.h ? null : 32 > this.h ? M.b(this.X) : x ? Id.c ? Id.c(this, 0, 0) : Id.call(null, this, 0, 0) : null
};
n.K = f("h");
n.dc = function(a, b, c) {
  return jb(this, b, c)
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new V(b, this.h, this.shift, this.root, this.X, this.j)
};
n.s = f("i");
n.ha = function(a, b) {
  return Cd(this, b)[b & 31]
};
n.ra = function(a, b, c) {
  return 0 <= b && b < this.h ? B.a(this, b) : c
};
n.R = function() {
  return U(Jd, this.i)
};
var W = new wd(null, Array(32)), Jd = new V(null, 0, 5, W, [], 0);
function Kd(a) {
  return Kb(X.c(Jb, Ib(Jd), a))
}
function Ld(a, b, c, d, e, g) {
  this.Q = a;
  this.na = b;
  this.o = c;
  this.J = d;
  this.i = e;
  this.j = g;
  this.f = 32243948;
  this.n = 1536
}
n = Ld.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.ma = function() {
  if(this.J + 1 < this.na.length) {
    var a = Id.p ? Id.p(this.Q, this.na, this.o, this.J + 1) : Id.call(null, this.Q, this.na, this.o, this.J + 1);
    return null == a ? null : a
  }
  return Qb(this)
};
n.M = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return $b.a(Md.c ? Md.c(this.Q, this.o + this.J, Q(this.Q)) : Md.call(null, this.Q, this.o + this.J, Q(this.Q)), b)
};
n.ca = function(a, b, c) {
  return $b.c(Md.c ? Md.c(this.Q, this.o + this.J, Q(this.Q)) : Md.call(null, this.Q, this.o + this.J, Q(this.Q)), b, c)
};
n.L = function() {
  return this
};
n.W = function() {
  return this.na[this.J]
};
n.da = function() {
  if(this.J + 1 < this.na.length) {
    var a = Id.p ? Id.p(this.Q, this.na, this.o, this.J + 1) : Id.call(null, this.Q, this.na, this.o, this.J + 1);
    return null == a ? Zb : a
  }
  return Pb(this)
};
n.Nb = function() {
  var a = this.na.length, a = this.o + a < Xa(this.Q) ? Id.c ? Id.c(this.Q, this.o + a, 0) : Id.call(null, this.Q, this.o + a, 0) : null;
  return null == a ? null : a
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return Id.H ? Id.H(this.Q, this.na, this.o, this.J, b) : Id.call(null, this.Q, this.na, this.o, this.J, b)
};
n.R = function() {
  return U(Jd, this.i)
};
n.Ob = function() {
  return $c.a(this.na, this.J)
};
n.Pb = function() {
  var a = this.na.length, a = this.o + a < Xa(this.Q) ? Id.c ? Id.c(this.Q, this.o + a, 0) : Id.call(null, this.Q, this.o + a, 0) : null;
  return null == a ? Zb : a
};
var Id = function() {
  function a(a, b, c, d, l) {
    return new Ld(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new Ld(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new Ld(a, Cd(a, b), b, c, null, null)
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.p = b;
  d.H = a;
  return d
}();
function Nd(a, b, c, d, e) {
  this.i = a;
  this.D = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.n = 0;
  this.f = 32400159
}
n = Nd.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.N = function(a, b) {
  return B.c(this, b, null)
};
n.O = function(a, b, c) {
  return B.c(this, b, c)
};
n.Ia = function(a, b, c) {
  var d = this, e = d.start + b;
  return Od.H ? Od.H(d.i, T.c(d.D, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Od.call(null, d.i, T.c(d.D, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ha(null, c);
      case 3:
        return this.ra(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.b = function(a) {
  return this.ha(null, a)
};
n.a = function(a, b) {
  return this.ra(null, a, b)
};
n.M = function(a, b) {
  return Od.H ? Od.H(this.i, sb(this.D, this.end, b), this.start, this.end + 1, null) : Od.call(null, this.i, sb(this.D, this.end, b), this.start, this.end + 1, null)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return $b.a(this, b)
};
n.ca = function(a, b, c) {
  return $b.c(this, b, c)
};
n.L = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : O(B.a(a.D, d), new Wc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
n.K = function() {
  return this.end - this.start
};
n.dc = function(a, b, c) {
  return jb(this, b, c)
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return Od.H ? Od.H(b, this.D, this.start, this.end, this.j) : Od.call(null, b, this.D, this.start, this.end, this.j)
};
n.s = f("i");
n.ha = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Bd(b, this.end - this.start) : B.a(this.D, this.start + b)
};
n.ra = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : B.c(this.D, this.start + b, c)
};
n.R = function() {
  return U(Jd, this.i)
};
function Od(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Nd) {
      c = b.start + c, d = b.start + d, b = b.D
    }else {
      var g = Q(b);
      if(0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Nd(a, b, c, d, e)
    }
  }
}
var Md = function() {
  function a(a, b, c) {
    return Od(null, a, b, c, null)
  }
  function b(a, b) {
    return c.c(a, b, Q(a))
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Gd(a) {
  return new wd({}, A(a.d))
}
function Hd(a) {
  var b = Array(32);
  yc(a, 0, b, 0, a.length);
  return b
}
var Qd = function Pd(b, c, d, e) {
  d = b.root.r === d.r ? d : new wd(b.root.r, A(d.d));
  var g = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.d[g];
    b = null != h ? Pd(b, c - 5, h, e) : yd(b.root.r, c - 5, e)
  }
  d.d[g] = b;
  return d
};
function Fd(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.X = d;
  this.f = 275;
  this.n = 88
}
n = Fd.prototype;
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.b = function(a) {
  return this.N(null, a)
};
n.a = function(a, b) {
  return this.O(null, a, b)
};
n.N = function(a, b) {
  return B.c(this, b, null)
};
n.O = function(a, b, c) {
  return B.c(this, b, c)
};
n.ha = function(a, b) {
  if(this.root.r) {
    return Cd(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
n.ra = function(a, b, c) {
  return 0 <= b && b < this.h ? B.a(this, b) : c
};
n.K = function() {
  if(this.root.r) {
    return this.h
  }
  throw Error("count after persistent!");
};
n.sc = function(a, b, c) {
  var d = this;
  if(d.root.r) {
    if(0 <= b && b < d.h) {
      return xd(this) <= b ? d.X[b & 31] = c : (a = function g(a, k) {
        var l = d.root.r === k.r ? k : new wd(d.root.r, A(k.d));
        if(0 === a) {
          l.d[b & 31] = c
        }else {
          var q = b >>> a & 31, u = g(a - 5, l.d[q]);
          l.d[q] = u
        }
        return l
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.h) {
      return Jb(this, c)
    }
    if(x) {
      throw Error([z("Index "), z(b), z(" out of bounds for TransientVector of length"), z(d.h)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
n.bb = function(a, b, c) {
  return Mb(this, b, c)
};
n.Ja = function(a, b) {
  if(this.root.r) {
    if(32 > this.h - xd(this)) {
      this.X[this.h & 31] = b
    }else {
      var c = new wd(this.root.r, this.X), d = Array(32);
      d[0] = b;
      this.X = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = yd(this.root.r, this.shift, c);
        this.root = new wd(this.root.r, d);
        this.shift = e
      }else {
        this.root = Qd(this, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
n.Qa = function() {
  if(this.root.r) {
    this.root.r = null;
    var a = this.h - xd(this), b = Array(a);
    yc(this.X, 0, b, 0, a);
    return new V(null, this.h, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function Rd(a, b, c, d) {
  this.i = a;
  this.sa = b;
  this.Oa = c;
  this.j = d;
  this.n = 0;
  this.f = 31850572
}
n = Rd.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.M = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return Sb(this)
};
n.L = function() {
  return this
};
n.W = function() {
  return I(this.sa)
};
n.da = function() {
  var a = L(this.sa);
  return a ? new Rd(this.i, a, this.Oa, null) : null == this.Oa ? Ya(this) : new Rd(this.i, this.Oa, null, null)
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new Rd(b, this.sa, this.Oa, this.j)
};
n.s = f("i");
n.R = function() {
  return U(Zb, this.i)
};
function Sd(a, b, c, d, e) {
  this.i = a;
  this.count = b;
  this.sa = c;
  this.Oa = d;
  this.j = e;
  this.n = 0;
  this.f = 31858766
}
n = Sd.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.M = function(a, b) {
  var c;
  s(this.sa) ? (c = this.Oa, c = new Sd(this.i, this.count + 1, this.sa, gc.a(s(c) ? c : Jd, b), null)) : c = new Sd(this.i, this.count + 1, gc.a(this.sa, b), Jd, null);
  return c
};
n.toString = function() {
  return Sb(this)
};
n.L = function() {
  var a = H(this.Oa), b = this.sa;
  return s(s(b) ? b : a) ? new Rd(null, this.sa, H(a), null) : null
};
n.K = f("count");
n.W = function() {
  return I(this.sa)
};
n.da = function() {
  return J(H(this))
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new Sd(b, this.count, this.sa, this.Oa, this.j)
};
n.s = f("i");
n.R = function() {
  return Td
};
var Td = new Sd(null, 0, null, Jd, 0);
function Ud() {
  this.n = 0;
  this.f = 2097152
}
Ud.prototype.w = m(!1);
var Vd = new Ud;
function Wd(a, b) {
  return Bc(uc(b) ? Q(a) === Q(b) ? ld(nd, qd.a(function(a) {
    return E.a(S.c(b, I(a), Vd), I(L(a)))
  }, a)) : null : null)
}
function Xd(a, b) {
  var c = a.d;
  if(b instanceof Y) {
    a: {
      for(var d = c.length, e = b.La, g = 0;;) {
        if(d <= g) {
          c = -1;
          break a
        }
        var h = c[g];
        if(h instanceof Y && e === h.La) {
          c = g;
          break a
        }
        if(x) {
          g += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if(da(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for(e = 0;;) {
          if(d <= e) {
            c = -1;
            break a
          }
          if(b === c[e]) {
            c = e;
            break a
          }
          if(x) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof F) {
        a: {
          d = c.length;
          e = b.Pa;
          for(g = 0;;) {
            if(d <= g) {
              c = -1;
              break a
            }
            h = c[g];
            if(h instanceof F && e === h.Pa) {
              c = g;
              break a
            }
            if(x) {
              g += 2
            }else {
              c = null;
              break a
            }
          }
          c = void 0
        }
      }else {
        if(null == b) {
          a: {
            d = c.length;
            for(e = 0;;) {
              if(d <= e) {
                c = -1;
                break a
              }
              if(null == c[e]) {
                c = e;
                break a
              }
              if(x) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(x) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(E.a(b, c[e])) {
                  c = e;
                  break a
                }
                if(x) {
                  e += 2
                }else {
                  c = null;
                  break a
                }
              }
              c = void 0
            }
          }else {
            c = null
          }
        }
      }
    }
  }
  return c
}
function Yd(a, b, c) {
  this.d = a;
  this.o = b;
  this.u = c;
  this.n = 0;
  this.f = 32374990
}
n = Yd.prototype;
n.C = function() {
  return dc(this)
};
n.ma = function() {
  return this.o < this.d.length - 2 ? new Yd(this.d, this.o + 2, this.u) : null
};
n.M = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return Jc.a(b, this)
};
n.ca = function(a, b, c) {
  return Jc.c(b, c, this)
};
n.L = function() {
  return this
};
n.K = function() {
  return(this.d.length - this.o) / 2
};
n.W = function() {
  return new V(null, 2, 5, W, [this.d[this.o], this.d[this.o + 1]], null)
};
n.da = function() {
  return this.o < this.d.length - 2 ? new Yd(this.d, this.o + 2, this.u) : Zb
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new Yd(this.d, this.o, b)
};
n.s = f("u");
n.R = function() {
  return U(Zb, this.u)
};
function r(a, b, c, d) {
  this.i = a;
  this.h = b;
  this.d = c;
  this.j = d;
  this.n = 4;
  this.f = 16123663
}
n = r.prototype;
n.ib = function() {
  return new Zd({}, this.d.length, A(this.d))
};
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Oc(this)
};
n.N = function(a, b) {
  return gb.c(this, b, null)
};
n.O = function(a, b, c) {
  a = Xd(this, b);
  return-1 === a ? c : this.d[a + 1]
};
n.Ia = function(a, b, c) {
  a = Xd(this, b);
  if(-1 === a) {
    if(this.h < $d) {
      a = this.d;
      for(var d = a.length, e = Array(d + 2), g = 0;;) {
        if(g < d) {
          e[g] = a[g], g += 1
        }else {
          break
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new r(this.i, this.h + 1, e, null)
    }
    return yb(jb(ud(ae, this), b, c), this.i)
  }
  return c === this.d[a + 1] ? this : x ? (b = A(this.d), b[a + 1] = c, new r(this.i, this.h, b, null)) : null
};
n.Mb = function(a, b) {
  return-1 !== Xd(this, b)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.b = function(a) {
  return this.N(null, a)
};
n.a = function(a, b) {
  return this.O(null, a, b)
};
n.M = function(a, b) {
  return vc(b) ? jb(this, B.a(b, 0), B.a(b, 1)) : X.c($a, this, b)
};
n.toString = function() {
  return Sb(this)
};
n.L = function() {
  return 0 <= this.d.length - 2 ? new Yd(this.d, 0, null) : null
};
n.K = f("h");
n.w = function(a, b) {
  return Wd(this, b)
};
n.t = function(a, b) {
  return new r(b, this.h, this.d, this.j)
};
n.s = f("i");
n.R = function() {
  return yb(be, this.i)
};
n.ab = function(a, b) {
  if(0 <= Xd(this, b)) {
    var c = this.d.length, d = c - 2;
    if(0 === d) {
      return Ya(this)
    }
    for(var d = Array(d), e = 0, g = 0;;) {
      if(e >= c) {
        return new r(this.i, this.h - 1, d, null)
      }
      if(E.a(b, this.d[e])) {
        e += 2
      }else {
        if(x) {
          d[g] = this.d[e], d[g + 1] = this.d[e + 1], g += 2, e += 2
        }else {
          return null
        }
      }
    }
  }else {
    return this
  }
};
var be = new r(null, 0, [], null), $d = 8;
function ce(a) {
  for(var b = a.length, c = 0, d = Ib(be);;) {
    if(c < b) {
      var e = c + 2, d = Lb(d, a[c], a[c + 1]), c = e
    }else {
      return Kb(d)
    }
  }
}
function Zd(a, b, c) {
  this.fb = a;
  this.Va = b;
  this.d = c;
  this.n = 56;
  this.f = 258
}
n = Zd.prototype;
n.bb = function(a, b, c) {
  if(s(this.fb)) {
    a = Xd(this, b);
    if(-1 === a) {
      if(this.Va + 2 <= 2 * $d) {
        return this.Va += 2, this.d.push(b), this.d.push(c), this
      }
      a = de.a ? de.a(this.Va, this.d) : de.call(null, this.Va, this.d);
      return Lb(a, b, c)
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
n.Ja = function(a, b) {
  if(s(this.fb)) {
    if(b ? b.f & 2048 || b.$c || (b.f ? 0 : w(mb, b)) : w(mb, b)) {
      return Lb(this, Pc.b ? Pc.b(b) : Pc.call(null, b), Qc.b ? Qc.b(b) : Qc.call(null, b))
    }
    for(var c = H(b), d = this;;) {
      var e = I(c);
      if(s(e)) {
        c = L(c), d = Lb(d, Pc.b ? Pc.b(e) : Pc.call(null, e), Qc.b ? Qc.b(e) : Qc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
n.Qa = function() {
  if(s(this.fb)) {
    return this.fb = !1, new r(null, Kc(this.Va), this.d, null)
  }
  throw Error("persistent! called twice");
};
n.N = function(a, b) {
  return gb.c(this, b, null)
};
n.O = function(a, b, c) {
  if(s(this.fb)) {
    return a = Xd(this, b), -1 === a ? c : this.d[a + 1]
  }
  throw Error("lookup after persistent!");
};
n.K = function() {
  if(s(this.fb)) {
    return Kc(this.Va)
  }
  throw Error("count after persistent!");
};
function de(a, b) {
  for(var c = Ib(ae), d = 0;;) {
    if(d < a) {
      c = Lb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function ee() {
  this.Aa = !1
}
function fe(a, b) {
  return a === b ? !0 : Z(a, b) ? !0 : x ? E.a(a, b) : null
}
var ge = function() {
  function a(a, b, c, h, k) {
    a = A(a);
    a[b] = c;
    a[h] = k;
    return a
  }
  function b(a, b, c) {
    a = A(a);
    a[b] = c;
    return a
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.H = a;
  return c
}();
function he(a, b) {
  var c = Array(a.length - 2);
  yc(a, 0, c, 0, 2 * b);
  yc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var ie = function() {
  function a(a, b, c, h, k, l) {
    a = a.gb(b);
    a.d[c] = h;
    a.d[k] = l;
    return a
  }
  function b(a, b, c, h) {
    a = a.gb(b);
    a.d[c] = h;
    return a
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.qa = a;
  return c
}();
function je(a, b, c) {
  this.r = a;
  this.G = b;
  this.d = c
}
n = je.prototype;
n.ua = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Lc(this.G & h - 1);
  if(0 === (this.G & h)) {
    var l = Lc(this.G);
    if(2 * l < this.d.length) {
      a = this.gb(a);
      b = a.d;
      g.Aa = !0;
      a: {
        for(c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.G |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = ke.ua(a, b + 5, c, d, e, g);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.G >>> d & 1) && (k[d] = null != this.d[e] ? ke.ua(a, b + 5, G(this.d[e]), this.d[e], this.d[e + 1], g) : this.d[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new le(a, l + 1, k)
    }
    return x ? (b = Array(2 * (l + 4)), yc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, yc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.Aa = !0, a = this.gb(a), a.d = b, a.G |= h, a) : null
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.ua(a, b + 5, c, d, e, g), l === h ? this : ie.p(this, a, 2 * k + 1, l)) : fe(d, l) ? e === h ? this : ie.p(this, a, 2 * k + 1, e) : x ? (g.Aa = !0, ie.qa(this, a, 2 * k, null, 2 * k + 1, me.$a ? me.$a(a, b + 5, l, h, c, d, e) : me.call(null, a, b + 5, l, h, c, d, e))) : null
};
n.pb = function() {
  return ne.b ? ne.b(this.d) : ne.call(null, this.d)
};
n.gb = function(a) {
  if(a === this.r) {
    return this
  }
  var b = Lc(this.G), c = Array(0 > b ? 4 : 2 * (b + 1));
  yc(this.d, 0, c, 0, 2 * b);
  return new je(a, this.G, c)
};
n.qb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.G & d)) {
    return this
  }
  var e = Lc(this.G & d - 1), g = this.d[2 * e], h = this.d[2 * e + 1];
  return null == g ? (a = h.qb(a + 5, b, c), a === h ? this : null != a ? new je(null, this.G, ge.c(this.d, 2 * e + 1, a)) : this.G === d ? null : x ? new je(null, this.G ^ d, he(this.d, e)) : null) : fe(c, g) ? new je(null, this.G ^ d, he(this.d, e)) : x ? this : null
};
n.ta = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Lc(this.G & g - 1);
  if(0 === (this.G & g)) {
    var k = Lc(this.G);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = ke.ta(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.G >>> c & 1) && (h[c] = null != this.d[d] ? ke.ta(a + 5, G(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new le(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    yc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    yc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.Aa = !0;
    return new je(null, this.G | g, a)
  }
  k = this.d[2 * h];
  g = this.d[2 * h + 1];
  return null == k ? (k = g.ta(a + 5, b, c, d, e), k === g ? this : new je(null, this.G, ge.c(this.d, 2 * h + 1, k))) : fe(c, k) ? d === g ? this : new je(null, this.G, ge.c(this.d, 2 * h + 1, d)) : x ? (e.Aa = !0, new je(null, this.G, ge.H(this.d, 2 * h, null, 2 * h + 1, me.qa ? me.qa(a + 5, k, g, b, c, d) : me.call(null, a + 5, k, g, b, c, d)))) : null
};
n.Ma = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.G & e)) {
    return d
  }
  var g = Lc(this.G & e - 1), e = this.d[2 * g], g = this.d[2 * g + 1];
  return null == e ? g.Ma(a + 5, b, c, d) : fe(c, e) ? g : x ? d : null
};
var ke = new je(null, 0, []);
function le(a, b, c) {
  this.r = a;
  this.h = b;
  this.d = c
}
n = le.prototype;
n.ua = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.d[h];
  if(null == k) {
    return a = ie.p(this, a, h, ke.ua(a, b + 5, c, d, e, g)), a.h += 1, a
  }
  b = k.ua(a, b + 5, c, d, e, g);
  return b === k ? this : ie.p(this, a, h, b)
};
n.pb = function() {
  return oe.b ? oe.b(this.d) : oe.call(null, this.d)
};
n.gb = function(a) {
  return a === this.r ? this : new le(a, this.h, A(this.d))
};
n.qb = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if(null != e) {
    a = e.qb(a + 5, b, c);
    if(a === e) {
      d = this
    }else {
      if(null == a) {
        if(8 >= this.h) {
          a: {
            e = this.d;
            a = 2 * (this.h - 1);
            b = Array(a);
            c = 0;
            for(var g = 1, h = 0;;) {
              if(c < a) {
                c !== d && null != e[c] && (b[g] = e[c], g += 2, h |= 1 << c), c += 1
              }else {
                d = new je(null, h, b);
                break a
              }
            }
            d = void 0
          }
        }else {
          d = new le(null, this.h - 1, ge.c(this.d, d, a))
        }
      }else {
        d = x ? new le(null, this.h, ge.c(this.d, d, a)) : null
      }
    }
    return d
  }
  return this
};
n.ta = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.d[g];
  if(null == h) {
    return new le(null, this.h + 1, ge.c(this.d, g, ke.ta(a + 5, b, c, d, e)))
  }
  a = h.ta(a + 5, b, c, d, e);
  return a === h ? this : new le(null, this.h, ge.c(this.d, g, a))
};
n.Ma = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.Ma(a + 5, b, c, d) : d
};
function pe(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(fe(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function qe(a, b, c, d) {
  this.r = a;
  this.Ea = b;
  this.h = c;
  this.d = d
}
n = qe.prototype;
n.ua = function(a, b, c, d, e, g) {
  if(c === this.Ea) {
    b = pe(this.d, this.h, d);
    if(-1 === b) {
      if(this.d.length > 2 * this.h) {
        return a = ie.qa(this, a, 2 * this.h, d, 2 * this.h + 1, e), g.Aa = !0, a.h += 1, a
      }
      c = this.d.length;
      b = Array(c + 2);
      yc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.Aa = !0;
      g = this.h + 1;
      a === this.r ? (this.d = b, this.h = g, a = this) : a = new qe(this.r, this.Ea, g, b);
      return a
    }
    return this.d[b + 1] === e ? this : ie.p(this, a, b + 1, e)
  }
  return(new je(a, 1 << (this.Ea >>> b & 31), [null, this, null, null])).ua(a, b, c, d, e, g)
};
n.pb = function() {
  return ne.b ? ne.b(this.d) : ne.call(null, this.d)
};
n.gb = function(a) {
  if(a === this.r) {
    return this
  }
  var b = Array(2 * (this.h + 1));
  yc(this.d, 0, b, 0, 2 * this.h);
  return new qe(a, this.Ea, this.h, b)
};
n.qb = function(a, b, c) {
  a = pe(this.d, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : x ? new qe(null, this.Ea, this.h - 1, he(this.d, Kc(a))) : null
};
n.ta = function(a, b, c, d, e) {
  return b === this.Ea ? (a = pe(this.d, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), yc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.Aa = !0, new qe(null, this.Ea, this.h + 1, b)) : E.a(this.d[a], d) ? this : new qe(null, this.Ea, this.h, ge.c(this.d, a + 1, d))) : (new je(null, 1 << (this.Ea >>> a & 31), [null, this])).ta(a, b, c, d, e)
};
n.Ma = function(a, b, c, d) {
  a = pe(this.d, this.h, c);
  return 0 > a ? d : fe(c, this.d[a]) ? this.d[a + 1] : x ? d : null
};
var me = function() {
  function a(a, b, c, h, k, l, q) {
    var u = G(c);
    if(u === k) {
      return new qe(null, u, 2, [c, h, l, q])
    }
    var t = new ee;
    return ke.ua(a, b, u, c, h, t).ua(a, b, k, l, q, t)
  }
  function b(a, b, c, h, k, l) {
    var q = G(b);
    if(q === h) {
      return new qe(null, q, 2, [b, c, k, l])
    }
    var u = new ee;
    return ke.ta(a, q, b, c, u).ta(a, h, k, l, u)
  }
  var c = null, c = function(c, e, g, h, k, l, q) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, q)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.qa = b;
  c.$a = a;
  return c
}();
function re(a, b, c, d, e) {
  this.i = a;
  this.va = b;
  this.o = c;
  this.k = d;
  this.j = e;
  this.n = 0;
  this.f = 32374860
}
n = re.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.M = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return Jc.a(b, this)
};
n.ca = function(a, b, c) {
  return Jc.c(b, c, this)
};
n.L = function() {
  return this
};
n.W = function() {
  return null == this.k ? new V(null, 2, 5, W, [this.va[this.o], this.va[this.o + 1]], null) : I(this.k)
};
n.da = function() {
  return null == this.k ? ne.c ? ne.c(this.va, this.o + 2, null) : ne.call(null, this.va, this.o + 2, null) : ne.c ? ne.c(this.va, this.o, L(this.k)) : ne.call(null, this.va, this.o, L(this.k))
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new re(b, this.va, this.o, this.k, this.j)
};
n.s = f("i");
n.R = function() {
  return U(Zb, this.i)
};
var ne = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new re(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(s(h) && (h = h.pb(), s(h))) {
            return new re(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new re(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.c(a, 0, null)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c
}();
function se(a, b, c, d, e) {
  this.i = a;
  this.va = b;
  this.o = c;
  this.k = d;
  this.j = e;
  this.n = 0;
  this.f = 32374860
}
n = se.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dc(this)
};
n.M = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return Jc.a(b, this)
};
n.ca = function(a, b, c) {
  return Jc.c(b, c, this)
};
n.L = function() {
  return this
};
n.W = function() {
  return I(this.k)
};
n.da = function() {
  return oe.p ? oe.p(null, this.va, this.o, L(this.k)) : oe.call(null, null, this.va, this.o, L(this.k))
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new se(b, this.va, this.o, this.k, this.j)
};
n.s = f("i");
n.R = function() {
  return U(Zb, this.i)
};
var oe = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(s(k) && (k = k.pb(), s(k))) {
            return new se(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new se(a, b, c, h, null)
    }
  }
  function b(a) {
    return c.p(null, a, 0, null)
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.p = a;
  return c
}();
function te(a, b, c, d, e, g) {
  this.i = a;
  this.h = b;
  this.root = c;
  this.Z = d;
  this.ja = e;
  this.j = g;
  this.n = 4;
  this.f = 16123663
}
n = te.prototype;
n.ib = function() {
  return new ue({}, this.root, this.h, this.Z, this.ja)
};
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Oc(this)
};
n.N = function(a, b) {
  return gb.c(this, b, null)
};
n.O = function(a, b, c) {
  return null == b ? this.Z ? this.ja : c : null == this.root ? c : x ? this.root.Ma(0, G(b), b, c) : null
};
n.Ia = function(a, b, c) {
  if(null == b) {
    return this.Z && c === this.ja ? this : new te(this.i, this.Z ? this.h : this.h + 1, this.root, !0, c, null)
  }
  a = new ee;
  b = (null == this.root ? ke : this.root).ta(0, G(b), b, c, a);
  return b === this.root ? this : new te(this.i, a.Aa ? this.h + 1 : this.h, b, this.Z, this.ja, null)
};
n.Mb = function(a, b) {
  return null == b ? this.Z : null == this.root ? !1 : x ? this.root.Ma(0, G(b), b, zc) !== zc : null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.b = function(a) {
  return this.N(null, a)
};
n.a = function(a, b) {
  return this.O(null, a, b)
};
n.M = function(a, b) {
  return vc(b) ? jb(this, B.a(b, 0), B.a(b, 1)) : X.c($a, this, b)
};
n.toString = function() {
  return Sb(this)
};
n.L = function() {
  if(0 < this.h) {
    var a = null != this.root ? this.root.pb() : null;
    return this.Z ? O(new V(null, 2, 5, W, [null, this.ja], null), a) : a
  }
  return null
};
n.K = f("h");
n.w = function(a, b) {
  return Wd(this, b)
};
n.t = function(a, b) {
  return new te(b, this.h, this.root, this.Z, this.ja, this.j)
};
n.s = f("i");
n.R = function() {
  return yb(ae, this.i)
};
n.ab = function(a, b) {
  if(null == b) {
    return this.Z ? new te(this.i, this.h - 1, this.root, !1, null, null) : this
  }
  if(null == this.root) {
    return this
  }
  if(x) {
    var c = this.root.qb(0, G(b), b);
    return c === this.root ? this : new te(this.i, this.h - 1, c, this.Z, this.ja, null)
  }
  return null
};
var ae = new te(null, 0, null, !1, null, 0);
function ic(a, b) {
  for(var c = a.length, d = 0, e = Ib(ae);;) {
    if(d < c) {
      var g = d + 1, e = e.bb(null, a[d], b[d]), d = g
    }else {
      return Kb(e)
    }
  }
}
function ue(a, b, c, d, e) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.Z = d;
  this.ja = e;
  this.n = 56;
  this.f = 258
}
n = ue.prototype;
n.bb = function(a, b, c) {
  return ve(this, b, c)
};
n.Ja = function(a, b) {
  var c;
  a: {
    if(this.r) {
      if(b ? b.f & 2048 || b.$c || (b.f ? 0 : w(mb, b)) : w(mb, b)) {
        c = ve(this, Pc.b ? Pc.b(b) : Pc.call(null, b), Qc.b ? Qc.b(b) : Qc.call(null, b));
        break a
      }
      c = H(b);
      for(var d = this;;) {
        var e = I(c);
        if(s(e)) {
          c = L(c), d = ve(d, Pc.b ? Pc.b(e) : Pc.call(null, e), Qc.b ? Qc.b(e) : Qc.call(null, e))
        }else {
          c = d;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    c = void 0
  }
  return c
};
n.Qa = function() {
  var a;
  if(this.r) {
    this.r = null, a = new te(null, this.count, this.root, this.Z, this.ja, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
n.N = function(a, b) {
  return null == b ? this.Z ? this.ja : null : null == this.root ? null : this.root.Ma(0, G(b), b)
};
n.O = function(a, b, c) {
  return null == b ? this.Z ? this.ja : c : null == this.root ? c : this.root.Ma(0, G(b), b, c)
};
n.K = function() {
  if(this.r) {
    return this.count
  }
  throw Error("count after persistent!");
};
function ve(a, b, c) {
  if(a.r) {
    if(null == b) {
      a.ja !== c && (a.ja = c), a.Z || (a.count += 1, a.Z = !0)
    }else {
      var d = new ee;
      b = (null == a.root ? ke : a.root).ua(a.r, 0, G(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Aa && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var we = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = H(a), e = Ib(ae);;) {
      if(b) {
        a = L(L(b));
        var g = I(b), b = I(L(b)), e = Lb(e, g, b), b = a
      }else {
        return Kb(e)
      }
    }
  }
  a.m = 0;
  a.g = function(a) {
    a = H(a);
    return b(a)
  };
  a.e = b;
  return a
}(), xe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new r(null, Kc(Q(a)), mc.a(Ta, a), null)
  }
  a.m = 0;
  a.g = function(a) {
    a = H(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function ye(a, b) {
  this.Na = a;
  this.u = b;
  this.n = 0;
  this.f = 32374988
}
n = ye.prototype;
n.C = function() {
  return dc(this)
};
n.ma = function() {
  var a = this.Na, a = (a ? a.f & 128 || a.qc || (a.f ? 0 : w(eb, a)) : w(eb, a)) ? this.Na.ma(null) : L(this.Na);
  return null == a ? null : new ye(a, this.u)
};
n.M = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return Sb(this)
};
n.ba = function(a, b) {
  return Jc.a(b, this)
};
n.ca = function(a, b, c) {
  return Jc.c(b, c, this)
};
n.L = function() {
  return this
};
n.W = function() {
  return this.Na.W(null).cc()
};
n.da = function() {
  var a = this.Na, a = (a ? a.f & 128 || a.qc || (a.f ? 0 : w(eb, a)) : w(eb, a)) ? this.Na.ma(null) : L(this.Na);
  return null != a ? new ye(a, this.u) : Zb
};
n.w = function(a, b) {
  return ec(this, b)
};
n.t = function(a, b) {
  return new ye(this.Na, b)
};
n.s = f("u");
n.R = function() {
  return U(Zb, this.u)
};
function ze(a) {
  return(a = H(a)) ? new ye(a, null) : null
}
function Pc(a) {
  return nb(a)
}
function Qc(a) {
  return ob(a)
}
var Ae = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return s(md(nd, a)) ? X.a(function(a, b) {
      return gc.a(s(a) ? a : be, b)
    }, a) : null
  }
  a.m = 0;
  a.g = function(a) {
    a = H(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Be(a, b, c) {
  this.i = a;
  this.Ua = b;
  this.j = c;
  this.n = 4;
  this.f = 15077647
}
n = Be.prototype;
n.ib = function() {
  return new Ce(Ib(this.Ua))
};
n.C = function() {
  var a = this.j;
  if(null != a) {
    return a
  }
  a: {
    for(var a = 0, b = H(this);;) {
      if(b) {
        var c = I(b), a = (a + G(c)) % 4503599627370496, b = L(b)
      }else {
        break a
      }
    }
    a = void 0
  }
  return this.j = a
};
n.N = function(a, b) {
  return gb.c(this, b, null)
};
n.O = function(a, b, c) {
  return ib(this.Ua, b) ? b : c
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.b = function(a) {
  return this.N(null, a)
};
n.a = function(a, b) {
  return this.O(null, a, b)
};
n.M = function(a, b) {
  return new Be(this.i, T.c(this.Ua, b, null), null)
};
n.toString = function() {
  return Sb(this)
};
n.L = function() {
  return ze(this.Ua)
};
n.rc = function(a, b) {
  return new Be(this.i, lb(this.Ua, b), null)
};
n.K = function() {
  return Xa(this.Ua)
};
n.w = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.f & 4096 || b.de ? !0 : b.f ? !1 : w(pb, b) : w(pb, b)) && Q(c) === Q(b) && ld(function(a) {
    return Cc(c, a)
  }, b)
};
n.t = function(a, b) {
  return new Be(b, this.Ua, this.j)
};
n.s = f("i");
n.R = function() {
  return U(De, this.i)
};
var De = new Be(null, be, 0);
function Ee(a) {
  var b = a.length;
  if(b <= $d) {
    for(var c = 0, d = Ib(be);;) {
      if(c < b) {
        var e = c + 1, d = Lb(d, a[c], null), c = e
      }else {
        return new Be(null, Kb(d), null)
      }
    }
  }else {
    for(c = 0, d = Ib(De);;) {
      if(c < b) {
        e = c + 2, d = Jb(d, a[c]), c = e
      }else {
        return Kb(d)
      }
    }
  }
}
function Ce(a) {
  this.Ga = a;
  this.f = 259;
  this.n = 136
}
n = Ce.prototype;
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return gb.c(this.Ga, c, zc) === zc ? null : c;
      case 3:
        return gb.c(this.Ga, c, zc) === zc ? d : c
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.b = function(a) {
  return gb.c(this.Ga, a, zc) === zc ? null : a
};
n.a = function(a, b) {
  return gb.c(this.Ga, a, zc) === zc ? b : a
};
n.N = function(a, b) {
  return gb.c(this, b, null)
};
n.O = function(a, b, c) {
  return gb.c(this.Ga, b, zc) === zc ? c : b
};
n.K = function() {
  return Q(this.Ga)
};
n.Ja = function(a, b) {
  this.Ga = Lb(this.Ga, b, null);
  return this
};
n.Qa = function() {
  return new Be(null, Kb(this.Ga), null)
};
function Uc(a) {
  if(a && (a.n & 4096 || a.bd)) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([z("Doesn't support name: "), z(a)].join(""));
}
var Fe = function() {
  function a(a, b, c) {
    return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var q = null;
      3 < arguments.length && (q = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, q)
    }
    function c(a, d, e, l) {
      return X.c(function(c, d) {
        return b.c(a, c, d)
      }, b.c(a, d, e), l)
    }
    a.m = 3;
    a.g = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, M(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.g = c.g;
  b.a = function(a, b) {
    return b
  };
  b.c = a;
  b.e = c.e;
  return b
}(), Ge = function() {
  function a(a, b) {
    for(;;) {
      if(H(b) && 0 < a) {
        var c = a - 1, h = L(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(H(a)) {
        a = L(a)
      }else {
        return null
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}(), He = function() {
  function a(a, b) {
    Ge.a(a, b);
    return b
  }
  function b(a) {
    Ge.b(a);
    return a
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}();
function Ie(a) {
  var b = Je.exec(a);
  return E.a(I(b), a) ? 1 === Q(b) ? I(b) : Kd(b) : null
}
function Ke(a) {
  a = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(a);
  a = null == a ? null : 1 === Q(a) ? I(a) : Kd(a);
  R.c(a, 0, null);
  R.c(a, 1, null);
  R.c(a, 2, null)
}
function Le(a, b, c, d, e, g, h) {
  C(a, c);
  H(h) && (b.c ? b.c(I(h), a, g) : b.call(null, I(h), a, g));
  c = L(h);
  for(h = Pa.b(g);c && (null == h || 0 !== h);) {
    C(a, d), b.c ? b.c(I(c), a, g) : b.call(null, I(c), a, g), c = L(c), h -= 1
  }
  s(Pa.b(g)) && (C(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
  return C(a, e)
}
var Me = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = H(b), g = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = g.ha(null, k);
        C(a, l);
        k += 1
      }else {
        if(e = H(e)) {
          g = e, wc(g) ? (e = Ob(g), h = Pb(g), g = e, l = Q(e), e = h, h = l) : (l = I(g), C(a, l), e = L(g), g = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.m = 1;
  a.g = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a)
  };
  a.e = b;
  return a
}(), Ne = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Oe(a) {
  return[z('"'), z(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ne[a]
  })), z('"')].join("")
}
var Qe = function Pe(b, c, d) {
  if(null == b) {
    return C(c, "nil")
  }
  if(void 0 === b) {
    return C(c, "#\x3cundefined\x3e")
  }
  if(x) {
    s(function() {
      var c = S.a(d, Na);
      return s(c) ? (c = b ? b.f & 131072 || b.ad ? !0 : b.f ? !1 : w(vb, b) : w(vb, b)) ? nc(b) : c : c
    }()) && (C(c, "^"), Pe(nc(b), c, d), C(c, " "));
    if(null == b) {
      return C(c, "nil")
    }
    if(b.Ca) {
      return b.Ka(b, c, d)
    }
    if(b && (b.f & 2147483648 || b.T)) {
      return b.A(null, c, d)
    }
    if(Ra(b) === Boolean || "number" === typeof b) {
      return C(c, "" + z(b))
    }
    if(b instanceof Array) {
      return Le(c, Pe, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(da(b)) {
      return s(Ma.b(d)) ? C(c, Oe(b)) : C(c, b)
    }
    if(kc(b)) {
      return Me.e(c, M(["#\x3c", "" + z(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + z(b);;) {
          if(Q(d) < c) {
            d = [z("0"), z(d)].join("")
          }else {
            return d
          }
        }
      };
      return Me.e(c, M(['#inst "', "" + z(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return b instanceof RegExp ? Me.e(c, M(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.T || (b.f ? 0 : w(Gb, b)) : w(Gb, b)) ? Hb(b, c, d) : x ? Me.e(c, M(["#\x3c", "" + z(b), "\x3e"], 0)) : null
  }
  return null
}, Re = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(rc(a)) {
      b = ""
    }else {
      b = z;
      var e = Ka(), g = new Ia;
      a: {
        var h = new Rb(g);
        Qe(I(a), h, e);
        a = H(L(a));
        for(var k = null, l = 0, q = 0;;) {
          if(q < l) {
            var u = k.ha(null, q);
            C(h, " ");
            Qe(u, h, e);
            q += 1
          }else {
            if(a = H(a)) {
              k = a, wc(k) ? (a = Ob(k), l = Pb(k), k = a, u = Q(a), a = l, l = u) : (u = I(k), C(h, " "), Qe(u, h, e), a = L(k), k = null, l = 0), q = 0
            }else {
              break a
            }
          }
        }
      }
      b = "" + b(g)
    }
    return b
  }
  a.m = 0;
  a.g = function(a) {
    a = H(a);
    return b(a)
  };
  a.e = b;
  return a
}();
ye.prototype.T = !0;
ye.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
Yb.prototype.T = !0;
Yb.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
Nd.prototype.T = !0;
Nd.prototype.A = function(a, b, c) {
  return Le(b, Qe, "[", " ", "]", c, this)
};
ad.prototype.T = !0;
ad.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
r.prototype.T = !0;
r.prototype.A = function(a, b, c) {
  return Le(b, function(a) {
    return Le(b, Qe, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
Sd.prototype.T = !0;
Sd.prototype.A = function(a, b, c) {
  return Le(b, Qe, "#queue [", " ", "]", c, H(this))
};
Wc.prototype.T = !0;
Wc.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
re.prototype.T = !0;
re.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
Ld.prototype.T = !0;
Ld.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
te.prototype.T = !0;
te.prototype.A = function(a, b, c) {
  return Le(b, function(a) {
    return Le(b, Qe, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
Be.prototype.T = !0;
Be.prototype.A = function(a, b, c) {
  return Le(b, Qe, "#{", " ", "}", c, this)
};
V.prototype.T = !0;
V.prototype.A = function(a, b, c) {
  return Le(b, Qe, "[", " ", "]", c, this)
};
Rc.prototype.T = !0;
Rc.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
Yd.prototype.T = !0;
Yd.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
Sc.prototype.T = !0;
Sc.prototype.A = function(a, b) {
  return C(b, "()")
};
Tc.prototype.T = !0;
Tc.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
se.prototype.T = !0;
se.prototype.A = function(a, b, c) {
  return Le(b, Qe, "(", " ", ")", c, this)
};
V.prototype.vb = !0;
V.prototype.wb = function(a, b) {
  return Ec.a(this, b)
};
Nd.prototype.vb = !0;
Nd.prototype.wb = function(a, b) {
  return Ec.a(this, b)
};
Y.prototype.vb = !0;
Y.prototype.wb = function(a, b) {
  return Tb(this, b)
};
F.prototype.vb = !0;
F.prototype.wb = function(a, b) {
  return Tb(this, b)
};
function Se(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.xe = c;
  this.ye = d;
  this.f = 2153938944;
  this.n = 2
}
n = Se.prototype;
n.C = function() {
  return this[fa] || (this[fa] = ++ga)
};
n.A = function(a, b, c) {
  C(b, "#\x3cAtom: ");
  Qe(this.state, b, c);
  return C(b, "\x3e")
};
n.s = f("i");
n.Xc = f("state");
n.w = function(a, b) {
  return this === b
};
var Ue = function() {
  function a(a) {
    return new Se(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = Ac(c) ? mc.a(we, c) : c, e = S.a(d, Te), d = S.a(d, Na);
      return new Se(a, d, e, null)
    }
    a.m = 1;
    a.g = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, M(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b
}(), Ve = {};
function We(a, b) {
  if(a ? a.Yc : a) {
    return a.Yc(a, b)
  }
  var c;
  c = We[p(null == a ? null : a)];
  if(!c && (c = We._, !c)) {
    throw y("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var Ye = function() {
  function a(a) {
    return b.e(a, M([new r(null, 1, [Xe, !1], null)], 0))
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      if(a ? s(s(null) ? null : a.Yd) || (a.Kc ? 0 : w(Ve, a)) : w(Ve, a)) {
        return We(a, mc.a(xe, c))
      }
      if(H(c)) {
        var d = Ac(c) ? mc.a(we, c) : c, e = S.a(d, Xe);
        return function(a, b, c, d) {
          return function K(e) {
            return Ac(e) ? He.b(qd.a(K, e)) : sc(e) ? ud(Ya(e), qd.a(K, e)) : e instanceof Array ? Kd(qd.a(K, e)) : Ra(e) === Object ? ud(be, function() {
              return function(a, b, c, d) {
                return function Fc(g) {
                  return new Wc(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = H(g);
                        if(a) {
                          if(wc(a)) {
                            var b = Ob(a), c = Q(b), h = new Yc(Array(c), 0);
                            a: {
                              for(var l = 0;;) {
                                if(l < c) {
                                  var k = B.a(b, l), k = new V(null, 2, 5, W, [d.b ? d.b(k) : d.call(null, k), K(e[k])], null);
                                  h.add(k);
                                  l += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? bd(h.la(), Fc(Pb(a))) : bd(h.la(), null)
                          }
                          h = I(a);
                          return O(new V(null, 2, 5, W, [d.b ? d.b(h) : d.call(null, h), K(e[h])], null), Fc(J(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d)(xc(e))
            }()) : x ? e : null
          }
        }(c, d, e, s(e) ? Vc : z)(a)
      }
      return null
    }
    a.m = 1;
    a.g = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, M(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b
}();
function Ze(a) {
  this.mc = a;
  this.n = 0;
  this.f = 2153775104
}
Ze.prototype.C = function() {
  return ua(Re.e(M([this], 0)))
};
Ze.prototype.A = function(a, b) {
  return C(b, [z('#uuid "'), z(this.mc), z('"')].join(""))
};
Ze.prototype.w = function(a, b) {
  return b instanceof Ze && this.mc === b.mc
};
var Oa = new Y(null, "dup", "dup"), Vb = new Y(null, "default", "default"), $e = new Y(null, "prefixc", "prefixc"), af = new Y(null, "reify-vars", "reify-vars"), bf = new Y(null, "eset", "eset"), cf = new Y("cljs.core.logic", "fd", "cljs.core.logic/fd"), df = new Y("cljs.core.logic", "subst", "cljs.core.logic/subst"), ef = new Y("cljs.core.logic", "no-prop", "cljs.core.logic/no-prop"), Xe = new Y(null, "keywordize-keys", "keywordize-keys"), ff = new Y("cljs.core.logic", "id", "cljs.core.logic/id"), 
La = new Y(null, "flush-on-newline", "flush-on-newline"), gf = new Y("cljs.core.logic", "strategy", "cljs.core.logic/strategy"), hf = new Y(null, "f", "f"), jf = new Y("cljs.core.logic", "ff", "cljs.core.logic/ff"), kf = new Y(null, "ansv*", "ansv*"), lf = new Y(null, "cache", "cache"), Pa = new Y(null, "print-length", "print-length"), mf = new Y("cljs.core.logic", "root", "cljs.core.logic/root"), x = new Y(null, "else", "else"), Ma = new Y(null, "readably", "readably"), Te = new Y(null, "validator", 
"validator"), Na = new Y(null, "meta", "meta"), nf = new Y(null, "v", "v"), of = new Y("cljs.core.logic", "unbound", "cljs.core.logic/unbound"), pf = new Y(null, "doms", "doms");
var qf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e)
  }
  function b(a, b) {
    throw Error(mc.a(z, b));
  }
  a.m = 1;
  a.g = function(a) {
    I(a);
    a = J(a);
    return b(0, a)
  };
  a.e = b;
  return a
}();
Ke("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
Ke("([-+]?[0-9]+)/([0-9]+)");
Ke("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
Ke("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
Ke("[0-9A-Fa-f]{2}");
Ke("[0-9A-Fa-f]{4}");
function rf(a) {
  if(E.a(3, Q(a))) {
    return a
  }
  if(3 < Q(a)) {
    return Nc.c(a, 0, 3)
  }
  if(x) {
    for(a = new Ia(a);;) {
      if(3 > a.Za.length) {
        a = a.append("0")
      }else {
        return a.toString()
      }
    }
  }else {
    return null
  }
}
var sf = function() {
  var a = new V(null, 13, 5, W, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new V(null, 13, 5, W, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return S.a(s(d) ? b : a, c)
  }
}(), Je = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function tf(a) {
  a = parseInt(a);
  return v(isNaN(a)) ? a : null
}
function uf(a, b, c, d) {
  a <= b && b <= c || qf.e(null, M([[z(d), z(" Failed:  "), z(a), z("\x3c\x3d"), z(b), z("\x3c\x3d"), z(c)].join("")], 0));
  return b
}
function vf(a) {
  var b = Ie(a);
  R.c(b, 0, null);
  var c = R.c(b, 1, null), d = R.c(b, 2, null), e = R.c(b, 3, null), g = R.c(b, 4, null), h = R.c(b, 5, null), k = R.c(b, 6, null), l = R.c(b, 7, null), q = R.c(b, 8, null), u = R.c(b, 9, null), t = R.c(b, 10, null);
  if(v(b)) {
    return qf.e(null, M([[z("Unrecognized date/time syntax: "), z(a)].join("")], 0))
  }
  a = tf(c);
  var b = function() {
    var a = tf(d);
    return s(a) ? a : 1
  }(), c = function() {
    var a = tf(e);
    return s(a) ? a : 1
  }(), D = function() {
    var a = tf(g);
    return s(a) ? a : 0
  }(), N = function() {
    var a = tf(h);
    return s(a) ? a : 0
  }(), K = function() {
    var a = tf(k);
    return s(a) ? a : 0
  }(), P = function() {
    var a = tf(rf(l));
    return s(a) ? a : 0
  }(), q = (E.a(q, "-") ? -1 : 1) * (60 * function() {
    var a = tf(u);
    return s(a) ? a : 0
  }() + function() {
    var a = tf(t);
    return s(a) ? a : 0
  }());
  return new V(null, 8, 5, W, [a, uf(1, b, 12, "timestamp month field must be in range 1..12"), uf(1, c, sf.a ? sf.a(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : sf.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), uf(0, D, 23, "timestamp hour field must be in range 0..23"), uf(0, N, 59, "timestamp minute field must be in range 0..59"), uf(0, 
  K, E.a(N, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), uf(0, P, 999, "timestamp millisecond field must be in range 0..999"), q], null)
}
Ue.b(new r(null, 3, ["inst", function(a) {
  var b;
  if("string" === typeof a) {
    if(b = vf(a), s(b)) {
      a = R.c(b, 0, null);
      var c = R.c(b, 1, null), d = R.c(b, 2, null), e = R.c(b, 3, null), g = R.c(b, 4, null), h = R.c(b, 5, null), k = R.c(b, 6, null);
      b = R.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, g, h, k) - 6E4 * b)
    }else {
      b = qf.e(null, M([[z("Unrecognized date/time syntax: "), z(a)].join("")], 0))
    }
  }else {
    b = qf.e(null, M(["Instance literal expects a string for its timestamp."], 0))
  }
  return b
}, "uuid", function(a) {
  return"string" === typeof a ? new Ze(a) : qf.e(null, M(["UUID literal expects a string as its representation."], 0))
}, "queue", function(a) {
  return vc(a) ? ud(Td, a) : qf.e(null, M(["Queue literal expects a vector for its elements."], 0))
}], null));
Ue.b(null);
var wf, xf, yf, zf;
function Af() {
  return ba.navigator ? ba.navigator.userAgent : null
}
zf = yf = xf = wf = !1;
var Bf;
if(Bf = Af()) {
  var Cf = ba.navigator;
  wf = 0 == Bf.indexOf("Opera");
  xf = !wf && -1 != Bf.indexOf("MSIE");
  yf = !wf && -1 != Bf.indexOf("WebKit");
  zf = !wf && !yf && "Gecko" == Cf.product
}
var Df = wf, Ef = xf, Ff = zf, Gf = yf;
function Hf() {
  var a = ba.document;
  return a ? a.documentMode : void 0
}
var If;
a: {
  var Jf = "", Kf;
  if(Df && ba.opera) {
    var Lf = ba.opera.version, Jf = "function" == typeof Lf ? Lf() : Lf
  }else {
    if(Ff ? Kf = /rv\:([^\);]+)(\)|;)/ : Ef ? Kf = /MSIE\s+([^\);]+)(\)|;)/ : Gf && (Kf = /WebKit\/(\S+)/), Kf) {
      var Mf = Kf.exec(Af()), Jf = Mf ? Mf[1] : ""
    }
  }
  if(Ef) {
    var Nf = Hf();
    if(Nf > parseFloat(Jf)) {
      If = String(Nf);
      break a
    }
  }
  If = Jf
}
var Of = {};
function Pf(a) {
  var b;
  if(!(b = Of[a])) {
    b = 0;
    for(var c = String(If).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
      do {
        var u = l.exec(h) || ["", "", ""], t = q.exec(k) || ["", "", ""];
        if(0 == u[0].length && 0 == t[0].length) {
          break
        }
        b = ((0 == u[1].length ? 0 : parseInt(u[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == u[1].length ? 0 : parseInt(u[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == u[2].length) < (0 == t[2].length) ? -1 : (0 == u[2].length) > (0 == t[2].length) ? 1 : 0) || (u[2] < t[2] ? -1 : u[2] > t[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Of[a] = 0 <= b
  }
  return b
}
var Qf = ba.document, Rf = Qf && Ef ? Hf() || ("CSS1Compat" == Qf.compatMode ? parseInt(If, 10) : 5) : void 0;
function Sf() {
  0 != Tf && (this.le = Error().stack, this[fa] || (this[fa] = ++ga))
}
var Tf = 0;
Ef && Pf("9");
!Gf || Pf("528");
Ff && Pf("1.9b") || Ef && Pf("8") || Df && Pf("9.5") || Gf && Pf("528");
Ff && !Pf("8") || Ef && Pf("9");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Uf, Vf = !Ff && !Ef || Ef && Ef && 9 <= Rf || Ff && Pf("1.9.1");
Ef && Pf("9");
function Wf(a, b, c) {
  function d(c) {
    c && b.appendChild(da(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var g = c[e];
    !ca(g) || ea(g) && 0 < g.nodeType ? d(g) : Ba(Xf(g) ? Da(g) : g, d)
  }
}
function Xf(a) {
  if(a && "number" == typeof a.length) {
    if(ea(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if("function" == p(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
}
function Yf(a) {
  this.md = a || ba.document || document
}
Yf.prototype.createTextNode = function(a) {
  return this.md.createTextNode(String(a))
};
Yf.prototype.appendChild = function(a, b) {
  a.appendChild(b)
};
Yf.prototype.append = function(a, b) {
  Wf(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
};
Yf.prototype.Nc = function(a) {
  return Vf && void 0 != a.children ? a.children : Ca(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
function Zf(a) {
  return $f(a || arguments.callee.caller, [])
}
function $f(a, b) {
  var c = [];
  if(0 <= Aa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(ag(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var g;
        g = d[e];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = ag(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push($f(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function ag(a) {
  if(bg[a]) {
    return bg[a]
  }
  a = String(a);
  if(!bg[a]) {
    var b = /function ([^\(]+)/.exec(a);
    bg[a] = b ? b[1] : "[Anonymous]"
  }
  return bg[a]
}
var bg = {};
function cg(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
cg.prototype.wd = 0;
cg.prototype.Mc = null;
cg.prototype.Lc = null;
var dg = 0;
cg.prototype.reset = function(a, b, c, d, e) {
  this.wd = "number" == typeof e ? e : dg++;
  this.ve = d || la();
  this.rb = a;
  this.td = b;
  this.oe = c;
  delete this.Mc;
  delete this.Lc
};
cg.prototype.Qc = function(a) {
  this.rb = a
};
function eg(a) {
  this.ud = a
}
eg.prototype.Ib = null;
eg.prototype.rb = null;
eg.prototype.Lb = null;
eg.prototype.Oc = null;
function fg(a, b) {
  this.name = a;
  this.value = b
}
fg.prototype.toString = f("name");
var gg = new fg("INFO", 800), hg = new fg("CONFIG", 700);
n = eg.prototype;
n.getParent = f("Ib");
n.Nc = function() {
  this.Lb || (this.Lb = {});
  return this.Lb
};
n.Qc = function(a) {
  this.rb = a
};
function ig(a) {
  if(a.rb) {
    return a.rb
  }
  if(a.Ib) {
    return ig(a.Ib)
  }
  ya("Root logger has no level set.");
  return null
}
n.log = function(a, b, c) {
  if(a.value >= ig(this).value) {
    for(a = this.nd(a, b, c), b = "log:" + a.td, ba.console && (ba.console.timeStamp ? ba.console.timeStamp(b) : ba.console.markTimeline && ba.console.markTimeline(b)), ba.msWriteProfilerMark && ba.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if(c.Oc) {
        for(var e = 0, g = void 0;g = c.Oc[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
n.nd = function(a, b, c) {
  var d = new cg(a, String(b), this.ud);
  if(c) {
    d.Mc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var k;
      c: {
        for(var l = ["window", "location", "href"], q = ba, u;u = l.shift();) {
          if(null != q[u]) {
            q = q[u]
          }else {
            k = null;
            break c
          }
        }
        k = q
      }
      if(da(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var t, D, l = !1;
        try {
          t = c.lineNumber || c.ne || "Not available"
        }catch(N) {
          t = "Not available", l = !0
        }
        try {
          D = c.fileName || c.filename || c.sourceURL || ba.$googDebugFname || k
        }catch(K) {
          D = "Not available", l = !0
        }
        h = !l && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:t, fileName:D, stack:c.stack || "Not available"}
      }
      e = "Message: " + oa(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + oa(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + oa(Zf(g) + "-\x3e ")
    }catch(P) {
      e = "Exception trying to expose exception! You win, we lose. " + P
    }
    d.Lc = e
  }
  return d
};
n.info = function(a, b) {
  this.log(gg, a, b)
};
var jg = {}, kg = null;
function lg(a) {
  kg || (kg = new eg(""), jg[""] = kg, kg.Qc(hg));
  var b;
  if(!(b = jg[a])) {
    b = new eg(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = lg(a.substr(0, c));
    c.Nc()[d] = b;
    b.Ib = c;
    jg[a] = b
  }
  return b
}
;lg("goog.messaging.AbstractChannel");
var mg = {Ad:"cn", zd:"at", Od:"rat", Kd:"pu", Dd:"ifrid", Rd:"tp", Fd:"lru", Jd:"pru", Rc:"lpu", Sc:"ppu", Id:"ph", Hd:"osh", Pd:"role", Gd:"nativeProtocolVersion"}, ng = lg("goog.net.xpc");
function og(a) {
  Sf.call(this);
  this.me = a || Uf || (Uf = new Yf)
}
ma(og, Sf);
function pg(a, b) {
  og.call(this, b);
  this.Kb = a;
  this.te = this.Kb.Tc[mg.Sc];
  this.re = this.Kb.Tc[mg.Rc];
  this.se = []
}
var qg;
ma(pg, og);
var rg = [], sg = ja(function() {
  var a, b = !1;
  try {
    for(var c = 0;a = rg[c];c++) {
      var d;
      if(!(d = b)) {
        var e = a, g = e.qe.location.href;
        if(g != e.ld) {
          e.ld = g;
          var h = g.split("#")[1];
          h && (h = h.substr(1), e.Td(decodeURIComponent(h)));
          d = !0
        }else {
          d = !1
        }
      }
      b = d
    }
  }catch(k) {
    if(ng.info("receive_() failed: " + k), a = a.we.Kb, ng.info("Transport Error"), a.close(), !rg.length) {
      return
    }
  }
  a = la();
  b && (qg = a);
  window.setTimeout(sg, 1E3 > a - qg ? 10 : 100)
}, pg);
lg("goog.net.XhrIo");
ud(be, qd.a(function(a) {
  var b = R.c(a, 0, null);
  a = R.c(a, 1, null);
  return new V(null, 2, 5, W, [Vc.b(b.toLowerCase()), a], null)
}, Ae.e(M([Ye.b({Bd:"complete", Qd:"success", Cd:"error", yd:"abort", Md:"ready", Nd:"readystatechange", TIMEOUT:"timeout", Ed:"incrementaldata", Ld:"progress"})], 0))));
ud(be, qd.a(function(a) {
  var b = R.c(a, 0, null);
  a = R.c(a, 1, null);
  return new V(null, 2, 5, W, [Vc.b(b.toLowerCase()), a], null)
}, Ye.b(mg)));
Ue.b(null);
Ue.b(0);
function tg(a, b) {
  var c = mc.c(Fe, a, b);
  return O(c, td(od(function(a) {
    return c === a
  }), b))
}
var ug = function() {
  function a(a, b) {
    return Q(a) < Q(b) ? X.c(gc, b, a) : X.c(gc, a, b)
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l)
    }
    function b(a, c, d) {
      a = tg(Q, gc.e(d, c, M([a], 0)));
      return X.c(ud, I(a), J(a))
    }
    a.m = 2;
    a.g = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 0:
        return De;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.l = function() {
    return De
  };
  b.b = aa();
  b.a = a;
  b.e = c.e;
  return b
}(), vg = function() {
  function a(a, b) {
    return Q(a) < Q(b) ? X.c(function(a, c) {
      return Cc(b, c) ? oc.a(a, c) : a
    }, a, a) : X.c(oc, a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      return X.c(b, a, gc.a(e, d))
    }
    a.m = 2;
    a.g = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.b = aa();
  b.a = a;
  b.e = c.e;
  return b
}();
var wg = {}, xg, yg, zg;
function Ag(a, b, c) {
  if(a ? a.lb : a) {
    return a.lb(a, b, c)
  }
  var d;
  d = Ag[p(null == a ? null : a)];
  if(!d && (d = Ag._, !d)) {
    throw y("IUnifyTerms.-unify-terms", a);
  }
  return d.call(null, a, b, c)
}
function Bg(a, b, c) {
  if(a ? a.Gc : a) {
    return a.Gc(0, b, c)
  }
  var d;
  d = Bg[p(null == a ? null : a)];
  if(!d && (d = Bg._, !d)) {
    throw y("IUnifyWithNil.-unify-with-nil", a);
  }
  return d.call(null, a, b, c)
}
function Cg(a, b, c) {
  if(a ? a.Hc : a) {
    return a.Hc(0, b, c)
  }
  var d;
  d = Cg[p(null == a ? null : a)];
  if(!d && (d = Cg._, !d)) {
    throw y("IUnifyWithObject.-unify-with-object", a);
  }
  return d.call(null, a, b, c)
}
function Dg(a, b, c) {
  if(a ? a.Ic : a) {
    return a.Ic(0, b, c)
  }
  var d;
  d = Dg[p(null == a ? null : a)];
  if(!d && (d = Dg._, !d)) {
    throw y("IUnifyWithSequential.-unify-with-seq", a);
  }
  return d.call(null, a, b, c)
}
function Eg(a, b, c) {
  if(a ? a.mb : a) {
    return a.mb(a, b, c)
  }
  var d;
  d = Eg[p(null == a ? null : a)];
  if(!d && (d = Eg._, !d)) {
    throw y("IUnifyWithMap.-unify-with-map", a);
  }
  return d.call(null, a, b, c)
}
function Fg(a, b) {
  if(a ? a.Ac : a) {
    return a.Ac(0, b)
  }
  var c;
  c = Fg[p(null == a ? null : a)];
  if(!c && (c = Fg._, !c)) {
    throw y("IReifyTerm.-reify-term", a);
  }
  return c.call(null, a, b)
}
function Gg(a, b) {
  if(a ? a.eb : a) {
    return a.eb(a, b)
  }
  var c;
  c = Gg[p(null == a ? null : a)];
  if(!c && (c = Gg._, !c)) {
    throw y("IWalkTerm.-walk-term", a);
  }
  return c.call(null, a, b)
}
function Hg(a, b, c) {
  if(a ? a.zc : a) {
    return a.zc(0, b, c)
  }
  var d;
  d = Hg[p(null == a ? null : a)];
  if(!d && (d = Hg._, !d)) {
    throw y("IOccursCheckTerm.-occurs-check-term", a);
  }
  return d.call(null, a, b, c)
}
function Ig(a, b) {
  if(a ? a.Ra : a) {
    return a.Ra(a, b)
  }
  var c;
  c = Ig[p(null == a ? null : a)];
  if(!c && (c = Ig._, !c)) {
    throw y("IBind.-bind", a);
  }
  return c.call(null, a, b)
}
var Jg = {};
function Kg(a, b) {
  if(a ? a.cb : a) {
    return a.cb(a, b)
  }
  var c;
  c = Kg[p(null == a ? null : a)];
  if(!c && (c = Kg._, !c)) {
    throw y("IMPlus.-mplus", a);
  }
  return c.call(null, a, b)
}
function Lg(a) {
  if(a ? a.fd : a) {
    return a.fd(a)
  }
  var b;
  b = Lg[p(null == a ? null : a)];
  if(!b && (b = Lg._, !b)) {
    throw y("IMemberCount.-member-count", a);
  }
  return b.call(null, a)
}
var Mg = {}, Ng = [new F(null, "_0", "_0", -1640528534, null), new F(null, "_1", "_1", -1640528533, null), new F(null, "_2", "_2", -1640528532, null), new F(null, "_3", "_3", -1640528531, null), new F(null, "_4", "_4", -1640528530, null), new F(null, "_5", "_5", -1640528529, null), new F(null, "_6", "_6", -1640528528, null), new F(null, "_7", "_7", -1640528527, null), new F(null, "_8", "_8", -1640528526, null), new F(null, "_9", "_9", -1640528525, null), new F(null, "_10", "_10", -1640438665, null), 
new F(null, "_11", "_11", -1640438664, null), new F(null, "_12", "_12", -1640438663, null), new F(null, "_13", "_13", -1640438662, null), new F(null, "_14", "_14", -1640438661, null), new F(null, "_15", "_15", -1640438660, null), new F(null, "_16", "_16", -1640438659, null), new F(null, "_17", "_17", -1640438658, null), new F(null, "_18", "_18", -1640438657, null), new F(null, "_19", "_19", -1640438656, null), new F(null, "_20", "_20", -1640438634, null), new F(null, "_21", "_21", -1640438633, null), 
new F(null, "_22", "_22", -1640438632, null), new F(null, "_23", "_23", -1640438631, null), new F(null, "_24", "_24", -1640438630, null), new F(null, "_25", "_25", -1640438629, null), new F(null, "_26", "_26", -1640438628, null), new F(null, "_27", "_27", -1640438627, null), new F(null, "_28", "_28", -1640438626, null), new F(null, "_29", "_29", -1640438625, null), new F(null, "_30", "_30", -1640438603, null), new F(null, "_31", "_31", -1640438602, null), new F(null, "_32", "_32", -1640438601, null), 
new F(null, "_33", "_33", -1640438600, null), new F(null, "_34", "_34", -1640438599, null), new F(null, "_35", "_35", -1640438598, null), new F(null, "_36", "_36", -1640438597, null), new F(null, "_37", "_37", -1640438596, null), new F(null, "_38", "_38", -1640438595, null), new F(null, "_39", "_39", -1640438594, null), new F(null, "_40", "_40", -1640438572, null), new F(null, "_41", "_41", -1640438571, null), new F(null, "_42", "_42", -1640438570, null), new F(null, "_43", "_43", -1640438569, null), 
new F(null, "_44", "_44", -1640438568, null), new F(null, "_45", "_45", -1640438567, null), new F(null, "_46", "_46", -1640438566, null), new F(null, "_47", "_47", -1640438565, null), new F(null, "_48", "_48", -1640438564, null), new F(null, "_49", "_49", -1640438563, null), new F(null, "_50", "_50", -1640438541, null), new F(null, "_51", "_51", -1640438540, null), new F(null, "_52", "_52", -1640438539, null), new F(null, "_53", "_53", -1640438538, null), new F(null, "_54", "_54", -1640438537, null), 
new F(null, "_55", "_55", -1640438536, null), new F(null, "_56", "_56", -1640438535, null), new F(null, "_57", "_57", -1640438534, null), new F(null, "_58", "_58", -1640438533, null), new F(null, "_59", "_59", -1640438532, null), new F(null, "_60", "_60", -1640438510, null), new F(null, "_61", "_61", -1640438509, null), new F(null, "_62", "_62", -1640438508, null), new F(null, "_63", "_63", -1640438507, null), new F(null, "_64", "_64", -1640438506, null), new F(null, "_65", "_65", -1640438505, null), 
new F(null, "_66", "_66", -1640438504, null), new F(null, "_67", "_67", -1640438503, null), new F(null, "_68", "_68", -1640438502, null), new F(null, "_69", "_69", -1640438501, null), new F(null, "_70", "_70", -1640438479, null), new F(null, "_71", "_71", -1640438478, null), new F(null, "_72", "_72", -1640438477, null), new F(null, "_73", "_73", -1640438476, null), new F(null, "_74", "_74", -1640438475, null), new F(null, "_75", "_75", -1640438474, null), new F(null, "_76", "_76", -1640438473, null), 
new F(null, "_77", "_77", -1640438472, null), new F(null, "_78", "_78", -1640438471, null), new F(null, "_79", "_79", -1640438470, null), new F(null, "_80", "_80", -1640438448, null), new F(null, "_81", "_81", -1640438447, null), new F(null, "_82", "_82", -1640438446, null), new F(null, "_83", "_83", -1640438445, null), new F(null, "_84", "_84", -1640438444, null), new F(null, "_85", "_85", -1640438443, null), new F(null, "_86", "_86", -1640438442, null), new F(null, "_87", "_87", -1640438441, null), 
new F(null, "_88", "_88", -1640438440, null), new F(null, "_89", "_89", -1640438439, null), new F(null, "_90", "_90", -1640438417, null), new F(null, "_91", "_91", -1640438416, null), new F(null, "_92", "_92", -1640438415, null), new F(null, "_93", "_93", -1640438414, null), new F(null, "_94", "_94", -1640438413, null), new F(null, "_95", "_95", -1640438412, null), new F(null, "_96", "_96", -1640438411, null), new F(null, "_97", "_97", -1640438410, null), new F(null, "_98", "_98", -1640438409, null), 
new F(null, "_99", "_99", -1640438408, null)];
function Og(a) {
  return a ? a.f & 67108864 || a.ae ? !0 : !1 : !1
}
function Pg(a) {
  var b = $.b ? $.b(a) : $.call(null, a);
  return s(b) ? b : a ? s(s(null) ? null : a.ge) ? !0 : !1 : !1
}
function Qg(a, b, c, d, e) {
  this.D = a;
  this.ea = b;
  this.Y = c;
  this.F = d;
  this.q = e;
  this.n = 0;
  this.f = 2229667594;
  3 < arguments.length ? (this.F = d, this.q = e) : this.q = this.F = null
}
n = Qg.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Oc(this)
};
n.N = function(a, b) {
  return gb.c(this, b, null)
};
n.O = function(a, b, c) {
  return Z(b, nf) ? this.D : Z(b, pf) ? this.ea : Z(b, bf) ? this.Y : x ? S.c(this.q, b, c) : null
};
n.Ia = function(a, b, c) {
  return s(Z.a ? Z.a(nf, b) : Z.call(null, nf, b)) ? new Qg(c, this.ea, this.Y, this.F, this.q, null) : s(Z.a ? Z.a(pf, b) : Z.call(null, pf, b)) ? new Qg(this.D, c, this.Y, this.F, this.q, null) : s(Z.a ? Z.a(bf, b) : Z.call(null, bf, b)) ? new Qg(this.D, this.ea, c, this.F, this.q, null) : new Qg(this.D, this.ea, this.Y, this.F, T.c(this.q, b, c), null)
};
n.A = function(a, b, c) {
  return Le(b, function(a) {
    return Le(b, Qe, "", " ", "", c, a)
  }, "#cljs.core.logic.SubstValue{", ", ", "}", c, fd.a(new V(null, 3, 5, W, [new V(null, 2, 5, W, [nf, this.D], null), new V(null, 2, 5, W, [pf, this.ea], null), new V(null, 2, 5, W, [bf, this.Y], null)], null), this.q))
};
n.M = function(a, b) {
  return vc(b) ? jb(this, B.a(b, 0), B.a(b, 1)) : X.c($a, this, b)
};
n.toString = function() {
  return"" + z(this.D)
};
n.L = function() {
  return H(fd.a(new V(null, 3, 5, W, [new V(null, 2, 5, W, [nf, this.D], null), new V(null, 2, 5, W, [pf, this.ea], null), new V(null, 2, 5, W, [bf, this.Y], null)], null), this.q))
};
n.K = function() {
  return 3 + Q(this.q)
};
n.w = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && Wd(this, b) : b) ? !0 : !1
};
n.t = function(a, b) {
  return new Qg(this.D, this.ea, this.Y, b, this.q, this.j)
};
n.s = f("F");
n.ab = function(a, b) {
  return Cc(new Be(null, new r(null, 3, [bf, null, nf, null, pf, null], null), null), b) ? jc.a(U(ud(be, this), this.F), b) : new Qg(this.D, this.ea, this.Y, this.F, kd(jc.a(this.q, b)), null)
};
function Rg(a) {
  return a instanceof Qg
}
var Sg = function() {
  function a(a, b, c, d) {
    return U(new Qg(a, b, c), d)
  }
  function b(a, b, c) {
    return U(new Qg(a, b, null), c)
  }
  function c(a, b) {
    return new Qg(a, b, null)
  }
  function d(a) {
    return new Qg(a, null, null)
  }
  var e = null, e = function(e, h, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
      case 3:
        return b.call(this, e, h, k);
      case 4:
        return a.call(this, e, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.b = d;
  e.a = c;
  e.c = b;
  e.p = a;
  return e
}();
function Tg(a, b) {
  return ud(Jd, td($, qd.a(function(b) {
    return Ug.a ? Ug.a(a, b) : Ug.call(null, a, b)
  }, Vg.b ? Vg.b(b) : Vg.call(null, b))))
}
function Wg(a, b) {
  return td(function(b) {
    return $.b ? $.b(Xg.a ? Xg.a(a, b) : Xg.call(null, a, b)) : $.call(null, Xg.a ? Xg.a(a, b) : Xg.call(null, a, b))
  }, Tg(a, b))
}
function Yg(a, b, c) {
  if(a ? a.uc : a) {
    return a.uc(0, b, c)
  }
  var d;
  d = Yg[p(null == a ? null : a)];
  if(!d && (d = Yg._, !d)) {
    throw y("IConstraintStore.-addc", a);
  }
  return d.call(null, a, b, c)
}
function Zg(a, b, c) {
  if(a ? a.xc : a) {
    return a.xc(0, b, c)
  }
  var d;
  d = Zg[p(null == a ? null : a)];
  if(!d && (d = Zg._, !d)) {
    throw y("IConstraintStore.-remc", a);
  }
  return d.call(null, a, b, c)
}
function $g(a, b, c) {
  if(a ? a.yc : a) {
    return a.yc(0, b, c)
  }
  var d;
  d = $g[p(null == a ? null : a)];
  if(!d && (d = $g._, !d)) {
    throw y("IConstraintStore.-runc", a);
  }
  return d.call(null, a, b, c)
}
function ah(a, b, c, d) {
  if(a ? a.vc : a) {
    return a.vc(0, b, c, d)
  }
  var e;
  e = ah[p(null == a ? null : a)];
  if(!e && (e = ah._, !e)) {
    throw y("IConstraintStore.-constraints-for", a);
  }
  return e.call(null, a, b, c, d)
}
function bh(a, b, c) {
  if(a ? a.wc : a) {
    return a.wc(0, b, c)
  }
  var d;
  d = bh[p(null == a ? null : a)];
  if(!d && (d = bh._, !d)) {
    throw y("IConstraintStore.-migrate", a);
  }
  return d.call(null, a, b, c)
}
function ch(a, b) {
  if(a ? a.kd : a) {
    return a.kd(a, b)
  }
  var c;
  c = ch[p(null == a ? null : a)];
  if(!c && (c = ch._, !c)) {
    throw y("IWithConstraintId.-with-id", a);
  }
  return c.call(null, a, b)
}
function dh(a) {
  if(a ? a.dd : a) {
    return a.dd(a)
  }
  var b;
  b = dh[p(null == a ? null : a)];
  if(!b && (b = dh._, !b)) {
    throw y("IConstraintId.-id", a);
  }
  return b.call(null, a)
}
function eh(a) {
  return a && s(s(null) ? null : a.he) ? dh(a) : ff.b(nc(a))
}
function fh(a, b, c, d) {
  this.ia = a;
  this.Da = b;
  this.Ha = c;
  this.Wa = d;
  this.n = 0;
  this.f = 2
}
n = fh.prototype;
n.K = function() {
  return Q(this.Da)
};
n.uc = function(a, b, c) {
  a = Tg(b, c);
  c = c && s(s(null) ? null : c.ke) ? ch(c, this.Ha) : id.e(c, T, M([ff, this.Ha], 0));
  c = X.c(function(a, b) {
    return function(a, c) {
      return gh.c ? gh.c(a, c, b) : gh.call(null, a, c, b)
    }
  }(a, c), this, a);
  return new fh(c.ia, c.Da, this.Ha + 1, this.Wa)
};
n.xc = function(a, b, c) {
  a = Tg(b, c);
  c = eh(c);
  a = X.c(function(a, b) {
    return function(a, c) {
      var d = oc.a(S.a(a, c), b);
      return rc(d) ? jc.a(a, c) : T.c(a, c, d)
    }
  }(a, c), this.ia, a);
  c = jc.a(this.Da, c);
  return new fh(a, c, this.Ha, this.Wa)
};
n.yc = function(a, b, c) {
  return s(c) ? new fh(this.ia, this.Da, this.Ha, gc.a(this.Wa, eh(b))) : new fh(this.ia, this.Da, this.Ha, oc.a(this.Wa, eh(b)))
};
n.vc = function(a, b, c, d) {
  a = S.a(this.ia, Ug.a ? Ug.a(b, c) : Ug.call(null, b, c));
  return s(a) ? td(function(a) {
    return(hh.b ? hh.b(a) : hh.call(null, a)).call(null, d)
  }, qd.a(this.Da, td(od(this.Wa), a))) : null
};
n.wc = function(a, b, c) {
  a = this.ia.b ? this.ia.b(b) : this.ia.call(null, b);
  var d = this.ia.a ? this.ia.a(c, De) : this.ia.call(null, c, De);
  b = T.c(jc.a(this.ia, b), c, ud(d, a));
  return new fh(b, this.Da, this.Ha, this.Wa)
};
function gh(a, b, c) {
  if(!s($.b ? $.b(b) : $.call(null, b))) {
    throw Error([z("constraint store assoc expected logic var key: "), z(b)].join(""));
  }
  var d = a.Da, e = a.ia, g = a.Ha;
  b = vd.c(e, new V(null, 1, 5, W, [b], null), pd.a(function(a, b, c) {
    return function(a) {
      return gc.a(a, c)
    }
  }(d, e, g), De));
  c = T.c(d, g, c);
  return new fh(b, c, g, a.Wa)
}
function ih() {
  return new fh(be, be, 0, De)
}
function jh(a, b, c) {
  if(a ? a.hc : a) {
    return a.hc(0, b, c)
  }
  var d;
  d = jh[p(null == a ? null : a)];
  if(!d && (d = jh._, !d)) {
    throw y("ISubstitutions.-occurs-check", a);
  }
  return d.call(null, a, b, c)
}
function kh(a, b, c) {
  if(a ? a.Sa : a) {
    return a.Sa(0, b, c)
  }
  var d;
  d = kh[p(null == a ? null : a)];
  if(!d && (d = kh._, !d)) {
    throw y("ISubstitutions.-ext", a);
  }
  return d.call(null, a, b, c)
}
function lh(a, b, c) {
  if(a ? a.gc : a) {
    return a.gc(0, b, c)
  }
  var d;
  d = lh[p(null == a ? null : a)];
  if(!d && (d = lh._, !d)) {
    throw y("ISubstitutions.-ext-no-check", a);
  }
  return d.call(null, a, b, c)
}
function mh(a, b) {
  if(a ? a.jc : a) {
    return a.jc(0, b)
  }
  var c;
  c = mh[p(null == a ? null : a)];
  if(!c && (c = mh._, !c)) {
    throw y("ISubstitutions.-walk", a);
  }
  return c.call(null, a, b)
}
function nh(a, b) {
  if(a ? a.kb : a) {
    return a.kb(0, b)
  }
  var c;
  c = nh[p(null == a ? null : a)];
  if(!c && (c = nh._, !c)) {
    throw y("ISubstitutions.-walk*", a);
  }
  return c.call(null, a, b)
}
function oh(a, b, c) {
  if(a ? a.ic : a) {
    return a.ic(0, b, c)
  }
  var d;
  d = oh[p(null == a ? null : a)];
  if(!d && (d = oh._, !d)) {
    throw y("ISubstitutions.-unify", a);
  }
  return d.call(null, a, b, c)
}
function Xg(a, b) {
  if(a ? a.Dc : a) {
    return a.Dc(0, b)
  }
  var c;
  c = Xg[p(null == a ? null : a)];
  if(!c && (c = Xg._, !c)) {
    throw y("ISubstitutionsCLP.-root-val", a);
  }
  return c.call(null, a, b)
}
function Ug(a, b) {
  if(a ? a.kc : a) {
    return a.kc(0, b)
  }
  var c;
  c = Ug[p(null == a ? null : a)];
  if(!c && (c = Ug._, !c)) {
    throw y("ISubstitutionsCLP.-root-var", a);
  }
  return c.call(null, a, b)
}
function ph(a, b, c) {
  if(a ? a.Bc : a) {
    return a.Bc(0, b, c)
  }
  var d;
  d = ph[p(null == a ? null : a)];
  if(!d && (d = ph._, !d)) {
    throw y("ISubstitutionsCLP.-ext-run-cs", a);
  }
  return d.call(null, a, b, c)
}
function qh(a, b) {
  if(a ? a.Cc : a) {
    return a.Cc(0, b)
  }
  var c;
  c = qh[p(null == a ? null : a)];
  if(!c && (c = qh._, !c)) {
    throw y("ISubstitutionsCLP.-queue", a);
  }
  return c.call(null, a, b)
}
function rh(a, b, c) {
  if(a ? a.Ec : a) {
    return a.Ec(0, b, c)
  }
  var d;
  d = rh[p(null == a ? null : a)];
  if(!d && (d = rh._, !d)) {
    throw y("ISubstitutionsCLP.-update-var", a);
  }
  return d.call(null, a, b, c)
}
function sh(a, b, c, d, e, g, h, k) {
  this.k = a;
  this.aa = b;
  this.V = c;
  this.B = d;
  this.U = e;
  this.P = g;
  this.S = h;
  this.u = k;
  this.n = 0;
  this.f = 2149974018
}
n = sh.prototype;
n.jc = function(a, b) {
  if(s(Pg.b ? Pg.b(b) : Pg.call(null, b))) {
    for(var c = b, d = Dc(this.k, b);;) {
      if(null == d) {
        return c
      }
      c = nb(d);
      d = ob(d);
      if(v(Pg.b ? Pg.b(d) : Pg.call(null, d))) {
        if(Rg(d)) {
          var e = d.D;
          return Z(e, of) ? U(c, T.c(nc(d), of, !0)) : e
        }
        return d
      }
      c = d;
      d = Dc(this.k, d)
    }
  }else {
    return b
  }
};
n.jd = function(a) {
  a = mh(this, a);
  return Fg(a, this)
};
n.kb = function(a, b) {
  for(var c = b;;) {
    if(c = mh(this, c), !s(th.b ? th.b(c) : th.call(null, c))) {
      return Gg(c, this)
    }
  }
};
function uh(a) {
  var b = Q(a.k);
  return 100 > b ? Ng[b] : Xb.b([z("_"), z(Q(a.k))].join(""))
}
n.ic = function(a, b, c) {
  if(b === c) {
    return this
  }
  var d = mh(this, b), e = mh(this, c);
  return s(function() {
    var a = $.b ? $.b(d) : $.call(null, d);
    return s(a) ? E.a(d, e) : a
  }()) ? this : s(function() {
    var a = v($.b ? $.b(d) : $.call(null, d));
    return a ? $.b ? $.b(e) : $.call(null, e) : a
  }()) ? Ag(e, d, this) : Ag(d, e, this)
};
n.Sa = function(a, b, c) {
  return jh(this, b, Rg(c) ? c.D : c) ? null : lh(this, b, c)
};
n.gc = function(a, b, c) {
  a = v($.b ? $.b(c) : $.call(null, c)) ? U(b, T.c(nc(b), mf, !0)) : b;
  return new sh(T.c(this.k, a, c), s(this.aa) ? gc.a(this.aa, a) : null, this.V, this.B, this.U, this.P, this.S, this.u)
};
n.hc = function(a, b, c) {
  a = mh(this, c);
  return Hg(a, b, this)
};
n.Ra = function(a, b) {
  return b.b ? b.b(this) : b.call(null, this)
};
n.Dc = function(a, b) {
  if(s($.b ? $.b(b) : $.call(null, b))) {
    var c = Dc(this.k, b);
    R.c(c, 0, null);
    R.c(c, 1, null);
    for(var d = b;;) {
      var e = c;
      R.c(e, 0, null);
      c = R.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(v($.b ? $.b(c) : $.call(null, c))) {
        return c
      }
      if(x) {
        d = c, c = Dc(this.k, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
n.kc = function(a, b) {
  if(s($.b ? $.b(b) : $.call(null, b))) {
    if(s(mf.b(nc(b)))) {
      return b
    }
    var c = Dc(this.k, b);
    R.c(c, 0, null);
    R.c(c, 1, null);
    for(var d = b;;) {
      var e = c, g = R.c(e, 0, null), c = R.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(v($.b ? $.b(c) : $.call(null, c))) {
        return Rg(c) ? U(g, nc(c)) : g
      }
      if(x) {
        d = c, c = Dc(this.k, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
n.Bc = function(a, b, c) {
  b = Ug(this, b);
  a = s($.b ? $.b(c) : $.call(null, c)) ? new V(null, 2, 5, W, [b, Ug(this, c)], null) : new V(null, 1, 5, W, [b], null);
  c = s(this.S) ? kh(this, b, c) : lh(this, b, c);
  return s(c) ? (vh.c ? vh.c(a, this.B, df) : vh.call(null, a, this.B, df)).call(null, c) : null
};
n.Cc = function(a, b) {
  var c = eh(b);
  if(v(this.P.b ? this.P.b(c) : this.P.call(null, c))) {
    var d = this.U, c = new sh(this.k, this.aa, this.V, this.B, gc.a(s(d) ? d : Jd, b), gc.a(this.P, c), this.S, this.u)
  }else {
    c = this
  }
  return c
};
n.Ec = function(a, b, c) {
  return new sh(T.c(this.k, b, c), this.aa, this.V, this.B, this.U, this.P, this.S, this.u)
};
n.A = function(a, b, c) {
  return Hb(this.k, b, c)
};
n.Db = !0;
n.cb = function(a, b) {
  return wh.a ? wh.a(this, b) : wh.call(null, this, b)
};
n.K = function() {
  return Q(this.k)
};
n.w = function(a, b) {
  return this === b || b instanceof sh && E.a(this.k, b.k)
};
n.t = function(a, b) {
  return new sh(this.k, this.aa, this.V, this.B, this.U, this.P, this.S, b)
};
n.s = f("u");
(function() {
  function a(a, b) {
    return new sh(a, null, null, b, null, De, !0, null)
  }
  function b(a) {
    return d.a(a, ih.l ? ih.l() : ih.call(null))
  }
  function c() {
    return d.b(be)
  }
  var d = null, d = function(d, g) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = c;
  d.b = b;
  d.a = a;
  return d
})().l();
function xh(a, b, c, d, e, g) {
  this.id = a;
  this.unique = b;
  this.name = c;
  this.Pc = d;
  this.j = e;
  this.i = g;
  this.n = 0;
  this.f = 2154168320
}
n = xh.prototype;
n.C = f("j");
n.Ic = function(a, b, c) {
  return c.Sa(0, this, b)
};
n.Ac = function(a, b) {
  var c = af.b(nc(b));
  return kc(c) ? c.a ? c.a(this, b) : c.call(null, this, b) : s(c) ? b.Sa(0, this, uh(b)) : b.Sa(0, this, this.Pc)
};
n.lb = function(a, b, c) {
  if(s($.b ? $.b(b) : $.call(null, b))) {
    return a = s(of.b(nc(this))) ? new V(null, 2, 5, W, [this, b], null) : s(of.b(nc(b))) ? new V(null, 2, 5, W, [b, this], null) : null, s(a) ? (b = R.c(a, 0, null), a = R.c(a, 1, null), c = new sh(c.k, c.aa, c.V, bh(c.B, a, b), c.U, c.P, c.S, c.u), c = s(of.b(nc(a))) ? yh.c ? yh.c(c, a, b) : yh.call(null, c, a, b) : c, s(c) ? lh(c, a, b) : null) : lh(c, this, b)
  }
  if(s(zh.b ? zh.b(b) : zh.call(null, b))) {
    throw Error([z(b), z(" is non-storable")].join(""));
  }
  return jd.a(b, Mg) ? s(th.b ? th.b(b) : th.call(null, b)) ? kh(c, this, b) : s(of.b(nc(this))) ? lh(c, this, T.c(Xg(c, this), nf, b)) : lh(c, this, b) : x ? lh(c, this, b) : null
};
n.Gc = function(a, b, c) {
  return c.gc(0, this, b)
};
n.mb = function(a, b, c) {
  return c.Sa(0, this, b)
};
n.A = function(a, b) {
  return C(b, [z("\x3clvar:"), z(this.name), z("\x3e")].join(""))
};
n.zc = function(a, b, c) {
  return E.a(c.jc(0, this), b)
};
n.toString = function() {
  return Re.e(M([wg.fa], 0))
};
n.eb = function() {
  return this
};
n.Hc = function(a, b, c) {
  return c.Sa(0, this, b)
};
n.w = function(a, b) {
  var c = b instanceof xh;
  return c ? s(this.unique) ? this.id === b.id : this.name === b.name : c
};
n.t = function(a, b) {
  return new xh(this.id, this.unique, this.name, this.Pc, this.j, b)
};
n.s = f("i");
var Ah = [0], Bh = function() {
  function a(a, b) {
    var c = s(b) ? [z("_"), z(Ah[0] += 1)].join("") : a, d = s(b) ? [z(a), z(c)].join("") : "" + z(a);
    return new xh(c, b, d, a, G(d), null)
  }
  function b(a) {
    return d.a(a, !0)
  }
  function c() {
    return d.b(new F(null, "gen", "gen", -1640429303, null))
  }
  var d = null, d = function(d, g) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = c;
  d.b = b;
  d.a = a;
  return d
}();
function $(a) {
  return a instanceof xh
}
function th(a) {
  var b = sc(a);
  return b ? b : a ? s(s(null) ? null : a.je) ? !0 : !1 : !1
}
function Ch(a, b, c) {
  if(uc(b)) {
    for(var d = ze(a);;) {
      if(H(d)) {
        var e = I(d), g = S.c(b, e, Mg);
        if(g === Mg) {
          return null
        }
        e = S.a(a, e);
        g = mh(c, g);
        if($(g)) {
          d = L(d), c = (Dh.a ? Dh.a(g, e) : Dh.call(null, g, e)).call(null, c)
        }else {
          if(c = uc(e) ? oh(c, Eh.b ? Eh.b(e) : Eh.call(null, e), g) : oh(c, e, g), s(c)) {
            d = L(d)
          }else {
            return null
          }
        }
      }else {
        return c
      }
    }
  }else {
    return null
  }
}
te.prototype.lb = function(a, b, c) {
  return Eg(b, this, c)
};
r.prototype.lb = function(a, b, c) {
  return Eg(b, this, c)
};
Ag._ = function(a, b, c) {
  return tc(a) ? Dg(b, a, c) : Og(a) ? Ch(b, a, c) : x ? Cg(b, a, c) : null
};
Ag["null"] = function(a, b, c) {
  return Bg(b, a, c)
};
Bg._ = m(null);
Bg["null"] = function(a, b, c) {
  return c
};
Cg._ = function(a, b, c) {
  return E.a(b, a) ? c : null
};
Cg["null"] = m(null);
Dg._ = function(a, b, c) {
  if(tc(a)) {
    for(b = H(b), a = H(a);;) {
      if(null != b) {
        if(null != a) {
          if(c = c.ic(0, I(b), I(a)), v(Qa.b ? Qa.b(c) : Qa.call(null, c))) {
            b = L(b), a = L(a)
          }else {
            return c
          }
        }else {
          return null
        }
      }else {
        return null != a ? null : c
      }
    }
  }else {
    return null
  }
};
Dg["null"] = m(null);
function Fh(a, b, c) {
  if(Q(b) !== Q(a)) {
    return null
  }
  for(var d = H(ze(b));;) {
    if(s(d)) {
      var e = I(d), g = S.c(a, e, Mg);
      if(g === Mg) {
        return null
      }
      c = oh(c, S.a(b, e), g);
      if(v(Qa.b ? Qa.b(c) : Qa.call(null, c))) {
        d = L(d)
      }else {
        return null
      }
    }else {
      return c
    }
  }
}
te.prototype.mb = function(a, b, c) {
  return Fh(this, b, c)
};
r.prototype.mb = function(a, b, c) {
  return Fh(this, b, c)
};
Eg._ = m(null);
Eg["null"] = m(null);
Fg._ = function(a, b) {
  if(sc(a)) {
    for(var c = a, d = b;;) {
      if(H(c)) {
        var e = L(c), d = d.jd(I(c)), c = e
      }else {
        return d
      }
    }
  }else {
    return b
  }
};
Fg["null"] = function(a, b) {
  return b
};
function Gh(a) {
  var b;
  a: {
    b = H(a);
    for(var c = Hh.b ? Hh.b(b) : Hh.call(null, b);;) {
      if(s(b)) {
        var d = I(b), e = R.c(d, 0, null), d = R.c(d, 1, null);
        b = L(b);
        c = T.c(c, e, nh(wg.k, d))
      }else {
        b = c;
        break a
      }
    }
    b = void 0
  }
  return U(b, nc(a))
}
function Ih(a, b) {
  var c;
  a: {
    c = H(a);
    for(var d = Ib(be);;) {
      if(s(c)) {
        var e = I(c), g = R.c(e, 0, null), e = R.c(e, 1, null);
        c = L(c);
        d = d.bb(null, g, b.kb(0, e))
      }else {
        c = Kb(d);
        break a
      }
    }
    c = void 0
  }
  return U(c, nc(a))
}
V.prototype.eb = function(a, b) {
  var c;
  a: {
    c = H(this);
    for(var d = Ib(Jd);;) {
      if(s(c)) {
        var e = L(c), d = d.Ja(null, b.kb(0, I(c)));
        c = e
      }else {
        c = Kb(d);
        break a
      }
    }
    c = void 0
  }
  return U(c, nc(this))
};
r.prototype.eb = function(a, b) {
  return Ih(this, b)
};
te.prototype.eb = function(a, b) {
  return Ih(this, b)
};
Gg._ = function(a, b) {
  return tc(a) ? U(qd.a(function(a) {
    return b.kb(0, a)
  }, a), nc(a)) : Og(a) ? Gh(a) : x ? a : null
};
Gg["null"] = m(null);
Hg._ = function(a, b, c) {
  if(tc(a)) {
    for(a = H(a);;) {
      if(s(a)) {
        var d = c.hc(0, b, I(a));
        if(s(d)) {
          return d
        }
        a = L(a)
      }else {
        return!1
      }
    }
  }else {
    return!1
  }
};
Hg["null"] = m(!1);
function Jh(a, b) {
  return(a ? s(s(null) ? null : a.Db) || (a.Kc ? 0 : w(Jg, a)) : w(Jg, a)) ? a.cb(null, b) : new Kh(a, b)
}
function Kh(a, b) {
  this.v = a;
  this.I = b
}
Kh.prototype.Db = !0;
Kh.prototype.cb = function(a, b) {
  var c = this;
  return new Kh(c.v, new Lh(function() {
    return Jh(b.l ? b.l() : b.call(null), c.I)
  }))
};
Kh.prototype.Ra = function(a, b) {
  var c = this;
  return Jh(b.b ? b.b(c.v) : b.call(null, c.v), new Lh(function() {
    return c.I.Ra(null, b)
  }))
};
function wh(a, b) {
  return new Kh(a, b)
}
function Lh(a) {
  this.I = a;
  this.n = 0;
  this.f = 1
}
n = Lh.prototype;
n.Db = !0;
n.cb = function(a, b) {
  var c = this;
  return new Lh(function() {
    return Jh(b.l ? b.l() : b.call(null), c)
  })
};
n.Ra = function(a, b) {
  var c = this;
  return new Lh(function() {
    return(c.I.l ? c.I.l() : c.I.call(null)).Ra(null, b)
  })
};
n.call = function(a) {
  a = this;
  return a.I.l ? a.I.l() : a.I.call(null)
};
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(A(b)))
};
n.l = function() {
  return this.I.l ? this.I.l() : this.I.call(null)
};
Jg["null"] = !0;
Kg["null"] = function(a, b) {
  return b.l ? b.l() : b.call(null)
};
Ig["null"] = function() {
  return wg.fa
};
Jg["function"] = !0;
Kg["function"] = function(a, b) {
  return new Lh(function() {
    return Jh(b.l ? b.l() : b.call(null), a)
  })
};
Jg["null"] = !0;
Kg["null"] = function(a, b) {
  return b.l ? b.l() : b.call(null)
};
Ig["function"] = function(a, b) {
  return new Lh(function() {
    return Ig(a.l ? a.l() : a.call(null), b)
  })
};
Ig["null"] = m(null);
function Mh(a) {
  return a
}
function Nh(a, b, c) {
  if(a ? a.Bb : a) {
    return a.Bb(a, b, c)
  }
  var d;
  d = Nh[p(null == a ? null : a)];
  if(!d && (d = Nh._, !d)) {
    throw y("IIfA.-ifa", a);
  }
  return d.call(null, a, b, c)
}
function Oh(a, b, c) {
  if(a ? a.Cb : a) {
    return a.Cb(a, b, c)
  }
  var d;
  d = Oh[p(null == a ? null : a)];
  if(!d && (d = Oh._, !d)) {
    throw y("IIfU.-ifu", a);
  }
  return d.call(null, a, b, c)
}
Nh["function"] = function(a, b, c) {
  return new Lh(function() {
    return Nh(a.l ? a.l() : a.call(null), b, c)
  })
};
Lh.prototype.Bb = function(a, b, c) {
  var d = this;
  return new Lh(function() {
    return Nh(d.l ? d.l() : d.call(null), b, c)
  })
};
Kh.prototype.Bb = function(a, b) {
  return X.c(Ig, this, b)
};
sh.prototype.Bb = function(a, b) {
  R.c(b, 0, null);
  Mc(b);
  for(var c = this, d = b;;) {
    var e = d, d = R.c(e, 0, null), e = Mc(e);
    if(s(d)) {
      if(c = d.b ? d.b(c) : d.call(null, c), s(c)) {
        d = e
      }else {
        return null
      }
    }else {
      return c
    }
  }
};
Nh["null"] = function(a, b, c) {
  return s(c) ? c : null
};
Kh.prototype.Cb = function(a, b) {
  return X.c(Ig, this.v, b)
};
Lh.prototype.Cb = function(a, b, c) {
  var d = this;
  return new Lh(function() {
    return Oh(d.l ? d.l() : d.call(null), b, c)
  })
};
Oh["function"] = function(a, b, c) {
  return new Lh(function() {
    return Oh(a.l ? a.l() : a.call(null), b, c)
  })
};
sh.prototype.Cb = function(a, b) {
  R.c(b, 0, null);
  Mc(b);
  for(var c = this, d = b;;) {
    var e = d, d = R.c(e, 0, null), e = Mc(e);
    if(s(d)) {
      if(c = d.b ? d.b(c) : d.call(null, c), s(c)) {
        d = e
      }else {
        return null
      }
    }else {
      return c
    }
  }
};
Oh["null"] = function(a, b, c) {
  return s(c) ? c : null
};
function zh(a) {
  return a ? s(s(null) ? null : a.hd) ? !0 : !1 : !1
}
function Hh(a) {
  if(a ? a.Jc : a) {
    return a.Jc()
  }
  var b;
  b = Hh[p(null == a ? null : a)];
  if(!b && (b = Hh._, !b)) {
    throw y("IUninitialized.-uninitialized", a);
  }
  return b.call(null, a)
}
function Ph(a, b, c) {
  if(a ? a.nb : a) {
    return a.nb(a, b, c)
  }
  var d;
  d = Ph[p(null == a ? null : a)];
  if(!d && (d = Ph._, !d)) {
    throw y("IUnifyWithPMap.-unify-with-pmap", a);
  }
  return d.call(null, a, b, c)
}
function Qh(a, b) {
  this.F = a;
  this.q = b;
  this.n = 0;
  this.f = 2229667594;
  0 < arguments.length ? (this.F = a, this.q = b) : this.q = this.F = null
}
n = Qh.prototype;
n.nb = function(a, b, c) {
  return Eg(this, b, c)
};
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Oc(this)
};
n.N = function(a, b) {
  return gb.c(this, b, null)
};
n.O = function(a, b, c) {
  return x ? S.c(this.q, b, c) : null
};
n.Ia = function(a, b, c) {
  return new Qh(this.F, T.c(this.q, b, c), null)
};
n.lb = function(a, b, c) {
  return uc(b) ? Ph(b, this, c) : null
};
n.hd = !0;
n.mb = function(a, b, c) {
  for(a = ze(this);;) {
    if(H(a)) {
      var d = I(a), e = S.c(b, d, Mg);
      if(e === Mg) {
        return null
      }
      d = S.a(this, d);
      e = mh(c, e);
      if($(e)) {
        a = L(a), c = (Dh.a ? Dh.a(e, d) : Dh.call(null, e, d)).call(null, c)
      }else {
        if(c = uc(d) ? oh(c, Eh.b ? Eh.b(d) : Eh.call(null, d), e) : oh(c, d, e), s(c)) {
          a = L(a)
        }else {
          return null
        }
      }
    }else {
      return c
    }
  }
};
n.A = function(a, b, c) {
  return Le(b, function(a) {
    return Le(b, Qe, "", " ", "", c, a)
  }, "#cljs.core.logic.PMap{", ", ", "}", c, fd.a(Jd, this.q))
};
n.M = function(a, b) {
  return vc(b) ? jb(this, B.a(b, 0), B.a(b, 1)) : X.c($a, this, b)
};
n.L = function() {
  return H(fd.a(Jd, this.q))
};
n.eb = function(a, b) {
  return Ih(this, b)
};
n.K = function() {
  return 0 + Q(this.q)
};
n.w = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && Wd(this, b) : b) ? !0 : !1
};
n.t = function(a, b) {
  return new Qh(b, this.q, this.j)
};
n.s = f("F");
n.ab = function(a, b) {
  return Cc(De, b) ? jc.a(U(ud(be, this), this.F), b) : new Qh(this.F, kd(jc.a(this.q, b)), null)
};
n.Jc = function() {
  return new Qh
};
te.prototype.nb = function(a, b, c) {
  return Eg(b, this, c)
};
r.prototype.nb = function(a, b, c) {
  return Eg(b, this, c)
};
xh.prototype.nb = function(a, b, c) {
  return kh(c, this, b)
};
Ph._ = m(null);
Ph["null"] = m(null);
function Eh(a) {
  return new Qh(null, jc.b(a))
}
var Rh = function() {
  function a(a, b) {
    return function(e) {
      e = a.b ? a.b(e) : a.call(null, e);
      return s(e) ? b.b ? b.b(e) : b.call(null, e) : e
    }
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 0:
        return nd;
      case 2:
        return a.call(this, b, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = function() {
    return nd
  };
  b.a = a;
  return b
}();
function Sh(a, b) {
  if(a ? a.yb : a) {
    return a.yb(a, b)
  }
  var c;
  c = Sh[p(null == a ? null : a)];
  if(!c && (c = Sh._, !c)) {
    throw y("IConstraintStep.-step", a);
  }
  return c.call(null, a, b)
}
function Th(a) {
  if(a ? a.Eb : a) {
    return a.Eb(a)
  }
  var b;
  b = Th[p(null == a ? null : a)];
  if(!b && (b = Th._, !b)) {
    throw y("IRunnable.-runnable?", a);
  }
  return b.call(null, a)
}
function Vg(a) {
  if(a ? a.xb : a) {
    return a.xb(a)
  }
  var b;
  b = Vg[p(null == a ? null : a)];
  if(!b && (b = Vg._, !b)) {
    throw y("IConstraintOp.-rands", a);
  }
  return b.call(null, a)
}
function hh(a) {
  if(a ? a.zb : a) {
    return a.zb(a)
  }
  var b;
  b = hh[p(null == a ? null : a)];
  if(!b && (b = hh._, !b)) {
    throw y("IConstraintWatchedStores.-watched-stores", a);
  }
  return b.call(null, a)
}
var Wh = function Uh(b, c) {
  "undefined" === typeof xg && (xg = function(b, c, g, h) {
    this.Ta = b;
    this.x = c;
    this.tb = g;
    this.Hb = h;
    this.n = 0;
    this.f = 393216
  }, xg.Ca = !0, xg.Ba = "cljs.core.logic/t195197", xg.Ka = function(b, c) {
    return C(c, "cljs.core.logic/t195197")
  }, xg.prototype.zb = function() {
    return new Be(null, new r(null, 1, [df, null], null), null)
  }, xg.prototype.xb = function() {
    return new V(null, 1, 5, W, [this.x], null)
  }, xg.prototype.yb = function(b, c) {
    "undefined" === typeof yg && (yg = function(b, c, d, e, q, u, t) {
      this.k = b;
      this.fa = c;
      this.Hb = d;
      this.Ta = e;
      this.x = q;
      this.tb = u;
      this.rd = t;
      this.n = 0;
      this.f = 393217
    }, yg.Ca = !0, yg.Ba = "cljs.core.logic/t195201", yg.Ka = function(b, c) {
      return C(c, "cljs.core.logic/t195201")
    }, yg.prototype.Eb = function() {
      return!$(mh(this.k, this.x)) && !$(mh(this.k, this.Ta))
    }, yg.prototype.call = function(b, c) {
      b = this;
      var d = mh(c, b.Ta);
      return Rh.a(function(c) {
        var e = 0 < Q(c.B);
        c = oh(e ? new sh(c.k, Jd, c.V, c.B, c.U, c.P, c.S, c.u) : c, new Qh(null, jc.b(d)), b.x);
        return s(c) ? (e = e ? c.aa : null, 0 < Q(e) ? (vh.c ? vh.c(e, c.B, df) : vh.call(null, e, c.B, df)).call(null, new sh(c.k, null, c.V, c.B, c.U, c.P, c.S, c.u)) : c) : null
      }, Vh.b ? Vh.b(b.fa) : Vh.call(null, b.fa)).call(null, c)
    }, yg.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(A(c)))
    }, yg.prototype.b = function(b) {
      var c = this, d = mh(b, c.Ta);
      return Rh.a(function(b) {
        var e = 0 < Q(b.B);
        b = oh(e ? new sh(b.k, Jd, b.V, b.B, b.U, b.P, b.S, b.u) : b, new Qh(null, jc.b(d)), c.x);
        return s(b) ? (e = e ? b.aa : null, 0 < Q(e) ? (vh.c ? vh.c(e, b.B, df) : vh.call(null, e, b.B, df)).call(null, new sh(b.k, null, b.V, b.B, b.U, b.P, b.S, b.u)) : b) : null
      }, Vh.b ? Vh.b(c.fa) : Vh.call(null, c.fa)).call(null, b)
    }, yg.prototype.s = f("rd"), yg.prototype.t = function(b, c) {
      return new yg(this.k, this.fa, this.Hb, this.Ta, this.x, this.tb, c)
    });
    return new yg(c, this, this.Hb, this.Ta, this.x, this.tb, null)
  }, xg.prototype.s = f("Hb"), xg.prototype.t = function(b, c) {
    return new xg(this.Ta, this.x, this.tb, c)
  });
  return new xg(c, b, Uh, null)
};
function Dh(a, b) {
  return Xh.b ? Xh.b(Wh(a, b)) : Xh.call(null, Wh(a, b))
}
function Yh(a, b, c, d) {
  return Z(c, ef) ? a : X.c(function(a, b) {
    var h = Ug(a, b);
    return Cc(c, h) ? a : d.a ? d.a(a, h) : d.call(null, a, h)
  }, a, b.Y)
}
function Zh(a, b) {
  if(a ? a.gd : a) {
    return a.gd(a, b)
  }
  var c;
  c = Zh[p(null == a ? null : a)];
  if(!c && (c = Zh._, !c)) {
    throw y("IMergeDomains.-merge-doms", a);
  }
  return c.call(null, a, b)
}
var $h = function() {
  function a(a, b, g, h, k) {
    var l = Xg(a, b), q = Rg(l) ? rh(a, b, Sg.p ? Sg.p(l.D, T.c(l.ea, g, h), l.Y, nc(l)) : Sg.call(null, l.D, T.c(l.ea, g, h), l.Y, nc(l))) : function() {
      var c = s($.b ? $.b(l) : $.call(null, l)) ? of : l;
      return lh(a, b, Sg.a(c, new ce([g, h])))
    }();
    return Yh(q, l, k, function(a, d) {
      return c.H(a, d, g, h, gc.a(s(k) ? k : De, b))
    })
  }
  function b(a, b, g, h) {
    b = Ug(a, b);
    return c.H(a, b, g, h, null)
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 5:
        return a.call(this, c, e, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.H = a;
  return c
}();
function yh(a, b, c) {
  var d = Xg(a, b), e = Xg(a, c);
  b = ug.a(e.Y, d.Y);
  var g;
  a: {
    g = H(d.ea);
    for(var h = e.ea, k = be;;) {
      if(s(g)) {
        var l = I(g), q = R.c(l, 0, null), l = R.c(l, 1, null), u = Dc(h, q);
        if(s(u)) {
          if(R.c(u, 0, null), u = R.c(u, 1, null), l = Zh(l, u), s(l)) {
            g = L(g), h = jc.a(h, q), k = T.c(k, q, l)
          }else {
            g = null;
            break a
          }
        }else {
          g = L(g), k = T.c(k, q, l)
        }
      }else {
        g = Ae.e(M([k, h], 0));
        break a
      }
    }
    g = void 0
  }
  d = s(g) ? Sg.p(e.D, g, b, Ae.e(M([nc(d), nc(e)], 0))) : null;
  if(s(d)) {
    a: {
      c = lh(a, c, d);
      a = g;
      for(b = H(b);;) {
        if(s(b)) {
          b: {
            g = c;
            c = c.kc(0, I(b));
            e = a;
            d = Xg(g, c).ea;
            for(e = H(e);;) {
              if(s(e)) {
                if(k = I(e), h = R.c(k, 0, null), k = R.c(k, 1, null), q = S.c(d, h, Mg), k = q === Mg ? k : Zh(k, q), s(k)) {
                  e = L(e), g = $h.H(g, c, h, k, De)
                }else {
                  c = null;
                  break b
                }
              }else {
                c = g;
                break b
              }
            }
            c = void 0
          }
          if(s(c)) {
            b = L(b)
          }else {
            b = null;
            break a
          }
        }else {
          b = c;
          break a
        }
      }
      b = void 0
    }
  }else {
    b = null
  }
  return b
}
function ai(a) {
  return Rg(a) ? a : Sg.b(of)
}
function bi(a, b, c) {
  b = Ug(a, b);
  c = Ug(a, c);
  var d = ai(Xg(a, b)), e = ai(Xg(a, c));
  return rh(rh(a, b, new Qg(d.D, d.ea, gc.a(function() {
    var a = d.Y;
    return s(a) ? a : De
  }(), c))), c, new Qg(e.D, e.ea, gc.a(function() {
    var a = e.Y;
    return s(a) ? a : De
  }(), b)))
}
function ci(a, b) {
  return function(c) {
    return ph(c, a, b)
  }
}
function di(a) {
  if(a ? a.Fc : a) {
    return a.Fc()
  }
  var b;
  b = di[p(null == a ? null : a)];
  if(!b && (b = di._, !b)) {
    throw y("ISuspendedStream.-ready?", a);
  }
  return b.call(null, a)
}
function ei(a, b, c, d, e) {
  this.ya = a;
  this.xa = b;
  this.I = c;
  this.F = d;
  this.q = e;
  this.n = 0;
  this.f = 2229667594;
  3 < arguments.length ? (this.F = d, this.q = e) : this.q = this.F = null
}
n = ei.prototype;
n.C = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Oc(this)
};
n.N = function(a, b) {
  return gb.c(this, b, null)
};
n.O = function(a, b, c) {
  return Z(b, lf) ? this.ya : Z(b, kf) ? this.xa : Z(b, hf) ? this.I : x ? S.c(this.q, b, c) : null
};
n.Ia = function(a, b, c) {
  return s(Z.a ? Z.a(lf, b) : Z.call(null, lf, b)) ? new ei(c, this.xa, this.I, this.F, this.q, null) : s(Z.a ? Z.a(kf, b) : Z.call(null, kf, b)) ? new ei(this.ya, c, this.I, this.F, this.q, null) : s(Z.a ? Z.a(hf, b) : Z.call(null, hf, b)) ? new ei(this.ya, this.xa, c, this.F, this.q, null) : new ei(this.ya, this.xa, this.I, this.F, T.c(this.q, b, c), null)
};
n.A = function(a, b, c) {
  return Le(b, function(a) {
    return Le(b, Qe, "", " ", "", c, a)
  }, "#cljs.core.logic.SuspendedStream{", ", ", "}", c, fd.a(new V(null, 3, 5, W, [new V(null, 2, 5, W, [lf, this.ya], null), new V(null, 2, 5, W, [kf, this.xa], null), new V(null, 2, 5, W, [hf, this.I], null)], null), this.q))
};
n.M = function(a, b) {
  return vc(b) ? jb(this, B.a(b, 0), B.a(b, 1)) : X.c($a, this, b)
};
n.L = function() {
  return H(fd.a(new V(null, 3, 5, W, [new V(null, 2, 5, W, [lf, this.ya], null), new V(null, 2, 5, W, [kf, this.xa], null), new V(null, 2, 5, W, [hf, this.I], null)], null), this.q))
};
n.K = function() {
  return 3 + Q(this.q)
};
n.Fc = function() {
  return ub(this.ya).Sd !== this.xa
};
n.w = function(a, b) {
  return s(s(b) ? this.constructor === b.constructor && Wd(this, b) : b) ? !0 : !1
};
n.t = function(a, b) {
  return new ei(this.ya, this.xa, this.I, b, this.q, this.j)
};
n.s = f("F");
n.ab = function(a, b) {
  return Cc(new Be(null, new r(null, 3, [hf, null, kf, null, lf, null], null), null), b) ? jc.a(U(ud(be, this), this.F), b) : new ei(this.ya, this.xa, this.I, this.F, kd(jc.a(this.q, b)), null)
};
function fi(a, b, c) {
  for(var d = Jd;;) {
    if(null == a) {
      return c.l ? c.l() : c.call(null)
    }
    if(s(di(I(a)))) {
      return b.b ? b.b(function(a, b) {
        return function() {
          var c = I(a), d = c.I, e = ud(b, L(a));
          return rc(e) ? d.l ? d.l() : d.call(null) : Kg(d.l ? d.l() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d)) : b.call(null, function(a, b) {
        return function() {
          var c = I(a), d = c.I, e = ud(b, L(a));
          return rc(e) ? d.l ? d.l() : d.call(null) : Kg(d.l ? d.l() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d))
    }
    if(x) {
      var e = L(a), d = gc.a(d, I(a));
      a = e
    }else {
      return null
    }
  }
}
V.prototype.Db = !0;
V.prototype.cb = function(a, b) {
  var c = this;
  return fi(c, function(a) {
    return Jh(a, b)
  }, function() {
    var a = b.l ? b.l() : b.call(null);
    return vc(a) ? ud(a, c) : Jh(a, function() {
      return c
    })
  })
};
V.prototype.Ra = function(a, b) {
  var c = this;
  return fi(c, function(a) {
    return Ig(a, b)
  }, function() {
    return ud(Jd, qd.a(function(a) {
      return new ei(a.ya, a.xa, function() {
        return Ig(a.I.call(null), b)
      })
    }, c))
  })
};
function gi(a) {
  return function(b) {
    b = X.c(function(a, b) {
      return lh(a, b, Sg.b(of))
    }, b, Wg(b, a));
    return new sh(b.k, b.aa, b.V, Yg(b.B, b, a), b.U, b.P, b.S, b.u)
  }
}
function Vh(a) {
  return function(b) {
    return new sh(b.k, b.aa, b.V, Zg(b.B, b, a), b.U, b.P, b.S, b.u)
  }
}
function hi(a) {
  return function(b) {
    return new sh(b.k, b.aa, b.V, $g(b.B, a, !0), b.U, b.P, b.S, b.u)
  }
}
function ii(a) {
  return function(b) {
    return new sh(b.k, b.aa, b.V, $g(b.B, a, !1), b.U, b.P, b.S, b.u)
  }
}
function ji(a) {
  if(a ? a.ed : a) {
    return a.ed(a)
  }
  var b;
  b = ji[p(null == a ? null : a)];
  if(!b && (b = ji._, !b)) {
    throw y("IEntailed.-entailed?", a);
  }
  return b.call(null, a)
}
function ki(a) {
  return a ? s(s(null) ? null : a.ie) ? !0 : !1 : !1
}
function li(a, b, c) {
  a = eh(a);
  c = c.B.Da.call(null, a);
  c = s(c) ? c : null == a;
  return s(c) ? ji(b) : c
}
function mi(a) {
  return function(b) {
    var c = Sh(a, b);
    return ki(c) && li(a, c, b) ? Vh(a).call(null, b) : s(Th(c)) ? Rh.a(hi(a), Rh.a(c, ii(a))).call(null, b) : b
  }
}
function ni(a) {
  for(;;) {
    if(s(a)) {
      var b = a.U;
      if(0 === Q(b)) {
        return new sh(a.k, a.aa, a.V, a.B, null, a.P, a.S, a.u)
      }
      b = I(b);
      a = mi(b).call(null, new sh(a.k, a.aa, a.V, a.B, Md.a(a.U, 1), oc.a(a.P, eh(b)), a.S, a.u))
    }else {
      return null
    }
  }
}
function oi(a) {
  return function(b) {
    var c = b.U;
    b = X.c(function() {
      return function(a, b) {
        return qh(a, b)
      }
    }(c), new sh(b.k, b.aa, b.V, b.B, s(c) ? c : Jd, b.P, b.S, b.u), a);
    return s(c) ? b : ni(b)
  }
}
var vh = function pi(b, c, d) {
  return 0 === Q(c) || null == H(b) ? Mh : function(e) {
    var g = ah(c, e, I(b), d);
    return H(g) ? Rh.a(oi(g), pi(L(b), c, d)).call(null, e) : pi(L(b), c, d).call(null, e)
  }
}, Xh = function qi(b) {
  "undefined" === typeof zg && (zg = function(b, d, e) {
    this.pa = b;
    this.Uc = d;
    this.sd = e;
    this.n = 0;
    this.f = 393217
  }, zg.Ca = !0, zg.Ba = "cljs.core.logic/t195252", zg.Ka = function(b, d) {
    return C(d, "cljs.core.logic/t195252")
  }, zg.prototype.call = function(b, d) {
    b = this;
    var e = Sh(b.pa, d);
    if(s(Th(e))) {
      e = e.b ? e.b(d) : e.call(null, d);
      if(s(e)) {
        var g = Sh(b.pa, e);
        return ki(g) && !li(b.pa, g, e) ? gi(b.pa).call(null, e) : e
      }
      return null
    }
    return gi(b.pa).call(null, d)
  }, zg.prototype.apply = function(b, d) {
    return this.call.apply(this, [this].concat(A(d)))
  }, zg.prototype.b = function(b) {
    var d = Sh(this.pa, b);
    return s(Th(d)) ? (b = d.b ? d.b(b) : d.call(null, b), s(b) ? (d = Sh(this.pa, b), ki(d) && !li(this.pa, d, b) ? gi(this.pa).call(null, b) : b) : null) : gi(this.pa).call(null, b)
  }, zg.prototype.s = f("sd"), zg.prototype.t = function(b, d) {
    return new zg(this.pa, this.Uc, d)
  });
  return new zg(b, qi, null)
};
function ri(a, b) {
  var c;
  if(s($.b ? $.b(b) : $.call(null, b))) {
    if(c = Xg(a, b), Rg(c)) {
      var d = c.D;
      c = jd.a(d, of) ? d : cf.b ? cf.b(pf.b(c)) : cf.call(null, pf.b(c))
    }else {
      c = v($.b ? $.b(c) : $.call(null, c)) ? c : null
    }
  }else {
    c = b
  }
  return c
}
function si(a) {
  return function(b, c) {
    var d = ri(a, b), e = ri(a, c);
    return Lg(d) < Lg(e)
  }
}
function ti(a, b, c) {
  b = gf.b(nc(b));
  return E.a(jf, b) ? H(Ic.a(si(c), a)) : x ? a : null
}
function ui(a, b) {
  if(a ? a.fc : a) {
    return a.fc(a, b)
  }
  var c;
  c = ui[p(null == a ? null : a)];
  if(!c && (c = ui._, !c)) {
    throw y("IForceAnswerTerm.-force-ans", a);
  }
  return c.call(null, a, b)
}
r.prototype.fc = function() {
  var a = function c(a) {
    return s(a) ? function(e) {
      return Ig(Ig(e, vi.b ? vi.b(Qc(I(a))) : vi.call(null, Qc(I(a)))), c(L(a)))
    } : Mh
  };
  return a.b ? a.b(H(this)) : a.call(null, H(this))
};
te.prototype.fc = function() {
  var a = function c(a) {
    return s(a) ? function(e) {
      return Ig(Ig(e, vi.b ? vi.b(Qc(I(a))) : vi.call(null, Qc(I(a)))), c(L(a)))
    } : Mh
  };
  return a.b ? a.b(H(this)) : a.call(null, H(this))
};
ui._ = function(a, b) {
  if(tc(a)) {
    var c = function e(a) {
      return s(a) ? function(c) {
        return Ig(Ig(c, vi.b ? vi.b(I(a)) : vi.call(null, I(a))), function(c) {
          var h = ti(L(a), b, c);
          return s(h) ? e(h).call(null, c) : c
        })
      } : Mh
    };
    return c.b ? c.b(H(a)) : c.call(null, H(a))
  }
  return x ? s($.b ? $.b(b) : $.call(null, b)) ? ci(b, a) : Mh : null
};
ui["null"] = function() {
  return Mh
};
function vi(a) {
  return function(b) {
    var c;
    c = mh(b, a);
    if(s($.b ? $.b(c) : $.call(null, c))) {
      c = ui(ri(b, a), c)
    }else {
      var d = Ug(b, a);
      c = tc(c) ? ui(ti(c, d, b), d) : ui(c, d)
    }
    return c.call(null, b)
  }
}
function wi(a, b, c, d) {
  if(a ? a.Ab : a) {
    return a.Ab(a, b, c, d)
  }
  var e;
  e = wi[p(null == a ? null : a)];
  if(!e && (e = wi._, !e)) {
    throw y("IDisunifyTerms.-disunify-terms", a);
  }
  return e.call(null, a, b, c, d)
}
var xi = function() {
  function a(a, b, c, h) {
    if(b === c) {
      return h
    }
    b = mh(a, b);
    c = mh(a, c);
    if(b === c || E.a(b, c)) {
      a = h
    }else {
      var k;
      k = (k = v($.b ? $.b(b) : $.call(null, b))) ? $.b ? $.b(c) : $.call(null, c) : k;
      a = s(k) ? wi(c, b, a, h) : wi(b, c, a, h)
    }
    return a
  }
  function b(a, b, g) {
    return c.p(a, b, g, new r(null, 1, [$e, be], null))
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 4:
        return a.call(this, c, e, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.p = a;
  return c
}();
function yi(a, b, c, d) {
  if(uc(a) && Q(b) === Q(a)) {
    for(var e = H(ze(b));;) {
      if(e) {
        var g = I(e), h = S.c(a, g, Mg);
        if(E.a(h, Mg)) {
          return null
        }
        d = xi.p(c, S.a(b, g), h, d);
        if(s(d)) {
          e = L(e)
        }else {
          return null
        }
      }else {
        return d
      }
    }
  }else {
    return null
  }
}
wi._ = function(a, b, c, d) {
  if(tc(a)) {
    if(tc(b)) {
      for(a = H(a), b = H(b);;) {
        if(s(a)) {
          if(s(b)) {
            var e = I(a), g = I(b);
            d = xi.p(c, e, g, d);
            if(s(d)) {
              a = L(a), b = L(b)
            }else {
              return null
            }
          }else {
            return null
          }
        }else {
          return null == b ? d : null
        }
      }
    }else {
      return null
    }
  }else {
    return x ? E.a(a, b) ? d : null : null
  }
};
te.prototype.Ab = function(a, b, c, d) {
  return yi(b, this, c, d)
};
r.prototype.Ab = function(a, b, c, d) {
  return yi(b, this, c, d)
};
xh.prototype.Ab = function(a, b, c, d) {
  a = Ac(d) ? mc.a(we, d) : d;
  c = S.a(a, $e);
  return T.c(a, $e, T.c(c, this, b))
};
wi["null"] = function(a, b, c, d) {
  return null != b ? null : d
};
function zi(a, b, c) {
  if(a ? a.ec : a) {
    return a.ec(a, b, c)
  }
  var d;
  d = zi[p(null == a ? null : a)];
  if(!d && (d = zi._, !d)) {
    throw y("IConstrainTree.-constrain-tree", a);
  }
  return d.call(null, a, b, c)
}
function Ai(a, b, c) {
  for(a = H(a);;) {
    if(s(a)) {
      var d = I(a);
      R.c(d, 0, null);
      d = R.c(d, 1, null);
      c = b.a ? b.a(d, c) : b.call(null, d, c);
      if(s(c)) {
        a = L(a)
      }else {
        return null
      }
    }else {
      return c
    }
  }
}
zi._ = function(a, b, c) {
  if(tc(a)) {
    for(a = H(a);;) {
      if(s(a)) {
        if(c = b.a ? b.a(I(a), c) : b.call(null, I(a), c), s(c)) {
          a = L(a)
        }else {
          return null
        }
      }else {
        return c
      }
    }
  }else {
    return Og(a) ? Ai(a, b, c) : null
  }
};
te.prototype.ec = function(a, b, c) {
  return Ai(this, b, c)
};
r.prototype.ec = function(a, b, c) {
  return Ai(this, b, c)
};
function Bi(a, b) {
  return function(c) {
    return zi(a, b, c)
  }
}
function Ci() {
  return null
}
var Di = ["cljs", "core", "logic", "_main"], Ei = ba;
Di[0] in Ei || !Ei.execScript || Ei.execScript("var " + Di[0]);
for(var Fi;Di.length && (Fi = Di.shift());) {
  Di.length || void 0 === Ci ? Ei = Ei[Fi] ? Ei[Fi] : Ei[Fi] = {} : Ei[Fi] = Ci
}
;Lg.number = m(1);
var Gi = ic([new F(null, "+", "+", -1640531484, null), new F(null, "*", "*", -1640531485, null), new F(null, "-", "-", -1640531482, null), new F(null, "/", "/", -1640531480, null), new F(null, "\x3c", "\x3c", -1640531467, null), new F(null, "!\x3d", "!\x3d", -1640530443, null), new F(null, "\x3d", "\x3d", -1640531466, null), new F(null, "\x3e", "\x3e", -1640531465, null), new F(null, "\x3e\x3d", "\x3e\x3d", -1640529544, null), new F(null, "\x3c\x3d", "\x3c\x3d", -1640529606, null)], [new F("cljs.core.logic.fd", 
"+", "cljs.core.logic.fd/+", 1528484149, null), new F("cljs.core.logic.fd", "*", "cljs.core.logic.fd/*", 1528484146, null), new F("cljs.core.logic.fd", "-", "cljs.core.logic.fd/-", 1528484151, null), new F("cljs.core.logic.fd", "quot", "cljs.core.logic.fd/quot", 1533391379, null), new F("cljs.core.logic.fd", "\x3c", "cljs.core.logic.fd/\x3c", 1528484292, null), new F("cljs.core.logic.fd", "!\x3d", "cljs.core.logic.fd/!\x3d", 1528485316, null), new F("cljs.core.logic.fd", "\x3d\x3d", "cljs.core.logic.fd/\x3d\x3d", 
1528485544, null), new F("cljs.core.logic.fd", "\x3e", "cljs.core.logic.fd/\x3e", 1528484294, null), new F("cljs.core.logic.fd", "\x3e\x3d", "cljs.core.logic.fd/\x3e\x3d", 1528482121, null), new F("cljs.core.logic.fd", "\x3c\x3d", "cljs.core.logic.fd/\x3c\x3d", 1528485515, null)]);
(function(a) {
  a = H(a);
  if(null == a) {
    return De
  }
  if(a instanceof Yb) {
    a = a.d;
    a: {
      for(var b = 0, c = Ib(De);;) {
        if(b < a.length) {
          var d = b + 1, c = c.Ja(null, a[b]), b = d
        }else {
          a = c;
          break a
        }
      }
      a = void 0
    }
    return a.Qa(null)
  }
  if(x) {
    for(d = Ib(De);;) {
      if(null != a) {
        b = a.ma(null), d = d.Ja(null, a.W(null)), a = b
      }else {
        return d.Qa(null)
      }
    }
  }else {
    return null
  }
})(ze(Gi));
var Hi, Ii, Ji, Ki;
function Li(a, b, c) {
  if(a ? a.lc : a) {
    return a.lc(a, b, c)
  }
  var d;
  d = Li[p(null == a ? null : a)];
  if(!d && (d = Li._, !d)) {
    throw y("INomSwap.swap-noms", a);
  }
  return d.call(null, a, b, c)
}
V.prototype.lc = function(a, b, c) {
  b = Li(H(this), b, c);
  a = R.c(b, 0, null);
  b = R.c(b, 1, null);
  return new V(null, 2, 5, W, [Kd(a), b], null)
};
xh.prototype.lc = function(a, b, c) {
  var d = mh(c, this);
  if(s($.b ? $.b(d) : $.call(null, d))) {
    a = U(Bh.l ? Bh.l() : Bh.call(null), nc(d));
    var e = Xg(c, d);
    b = (Mi.c ? Mi.c(a, d, b) : Mi.call(null, a, d, b)).call(null, bi(Rg(e) ? lh(c, a, e) : c, d, a));
    return new V(null, 2, 5, W, [a, b], null)
  }
  return Li(d, b, c)
};
Li._ = function(a, b, c) {
  if(sc(a)) {
    if(H(a)) {
      var d = Li(I(a), b, c);
      c = R.c(d, 0, null);
      d = R.c(d, 1, null);
      d = Li(L(a), b, d);
      b = R.c(d, 0, null);
      d = R.c(d, 1, null);
      return new V(null, 2, 5, W, [U(O(c, b), nc(a)), d], null)
    }
    return new V(null, 2, 5, W, [a, c], null)
  }
  return uc(a) ? (c = Li(H(a), b, c), a = R.c(c, 0, null), d = R.c(c, 1, null), new V(null, 2, 5, W, [ud(be, a), d], null)) : x ? new V(null, 2, 5, W, [a, c], null) : null
};
Li["null"] = function(a, b, c) {
  return new V(null, 2, 5, W, [a, c], null)
};
var Qi = function Ni(b, c) {
  "undefined" === typeof Hi && (Hi = function(b, c, g, h) {
    this.x = b;
    this.v = c;
    this.ka = g;
    this.Fb = h;
    this.n = 0;
    this.f = 393216
  }, Hi.Ca = !0, Hi.Ba = "cljs.core.logic.nominal/t131261", Hi.Ka = function(b, c) {
    return C(c, "cljs.core.logic.nominal/t131261")
  }, Hi.prototype.zb = function() {
    return new Be(null, new r(null, 1, [df, null], null), null)
  }, Hi.prototype.xb = function() {
    return new V(null, 2, 5, W, [this.v, this.x], null)
  }, Hi.prototype.yb = function(b, c) {
    var g = mh(c, this.v), h = mh(c, this.x);
    "undefined" === typeof Ii && (Ii = function(b, c, d, e, g, h, N) {
      this.k = b;
      this.fa = c;
      this.Fb = d;
      this.x = e;
      this.v = g;
      this.ka = h;
      this.od = N;
      this.n = 0;
      this.f = 393217
    }, Ii.Ca = !0, Ii.Ba = "cljs.core.logic.nominal/t131264", Ii.Ka = function(b, c) {
      return C(c, "cljs.core.logic.nominal/t131264")
    }, Ii.prototype.Eb = function() {
      if(s($.b ? $.b(this.v) : $.call(null, this.v))) {
        var b;
        b = $.b ? $.b(this.x) : $.call(null, this.x);
        b = s(b) ? E.a(this.x, this.v) : b;
        return s(b) ? b : th(this.x) && v(Oi.b ? Oi.b(this.x) : Oi.call(null))
      }
      return!0
    }, Ii.prototype.call = function(b, c) {
      b = this;
      return Rh.a(Vh(b.fa), function(c) {
        return s(function() {
          var c = $.b ? $.b(b.v) : $.call(null, b.v);
          return s(c) ? (c = $.b ? $.b(b.x) : $.call(null, b.x), s(c) ? E.a(b.x, b.v) : c) : c
        }()) ? null : v($.b ? $.b(b.v) : $.call(null, b.v)) ? null : s(!1) ? c : th(b.x) && v(Oi.b ? Oi.b(b.x) : Oi.call(null)) ? Bi(b.x, function(c, d) {
          return(Pi.a ? Pi.a(b.v, c) : Pi.call(null, b.v, c)).call(null, d)
        }).call(null, c) : x ? c : null
      }).call(null, c)
    }, Ii.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(A(c)))
    }, Ii.prototype.b = function(b) {
      var c = this;
      return Rh.a(Vh(c.fa), function(b) {
        return s(function() {
          var b = $.b ? $.b(c.v) : $.call(null, c.v);
          return s(b) ? (b = $.b ? $.b(c.x) : $.call(null, c.x), s(b) ? E.a(c.x, c.v) : b) : b
        }()) ? null : v($.b ? $.b(c.v) : $.call(null, c.v)) ? null : s(!1) ? b : th(c.x) && v(Oi.b ? Oi.b(c.x) : Oi.call(null)) ? Bi(c.x, function(b, d) {
          return(Pi.a ? Pi.a(c.v, b) : Pi.call(null, c.v, b)).call(null, d)
        }).call(null, b) : x ? b : null
      }).call(null, b)
    }, Ii.prototype.s = f("od"), Ii.prototype.t = function(b, c) {
      return new Ii(this.k, this.fa, this.Fb, this.x, this.v, this.ka, c)
    });
    return new Ii(c, this, this.Fb, h, g, this.ka, null)
  }, Hi.prototype.toString = function() {
    return[z(this.v), z("#"), z(this.x)].join("")
  }, Hi.prototype.s = f("Fb"), Hi.prototype.t = function(b, c) {
    return new Hi(this.x, this.v, this.ka, c)
  });
  return new Hi(c, b, Ni, null)
};
function Pi(a, b) {
  return Xh(Qi(a, b))
}
function Ri(a, b, c, d) {
  var e = function() {
    for(var c = Ee([b]), e = De;;) {
      var g = vg.a(c, e);
      if(rc(g)) {
        return!0
      }
      if(s(md(function() {
        return function(b) {
          return jh(d, b, a)
        }
      }(c, e, g), g))) {
        return!1
      }
      if(x) {
        c = X.c(function() {
          return function(a, b) {
            return ug.a(a, Xg(d, b).Y)
          }
        }(c, e, g), De, g), e = ug.a(g, e)
      }else {
        return null
      }
    }
  }();
  if(s(e)) {
    c = Li(a, c, d);
    var g = R.c(c, 0, null);
    c = R.c(c, 1, null);
    return function(a) {
      var c = 0 < Q(a.B);
      a = oh(c ? new sh(a.k, Jd, a.V, a.B, a.U, a.P, a.S, a.u) : a, g, b);
      return s(a) ? (c = c ? a.aa : null, 0 < Q(c) ? vh(c, a.B, df).call(null, new sh(a.k, null, a.V, a.B, a.U, a.P, a.S, a.u)) : a) : null
    }.call(null, c)
  }
  return null
}
var Ti = function Si(b, c, d) {
  "undefined" === typeof Ji && (Ji = function(b, c, d, k, l) {
    this.wa = b;
    this.Ya = c;
    this.Xa = d;
    this.ub = k;
    this.Gb = l;
    this.n = 0;
    this.f = 393216
  }, Ji.Ca = !0, Ji.Ba = "cljs.core.logic.nominal/t131280", Ji.Ka = function(b, c) {
    return C(c, "cljs.core.logic.nominal/t131280")
  }, Ji.prototype.zb = function() {
    return new Be(null, new r(null, 1, [df, null], null), null)
  }, Ji.prototype.xb = function() {
    return new V(null, 2, 5, W, [this.Xa, this.Ya], null)
  }, Ji.prototype.yb = function(b, c) {
    var d = mh(c, this.Xa), k = mh(c, this.Ya);
    "undefined" === typeof Ki && (Ki = function(b, c, d, e, g, h, k, P, ka, wa) {
      this.ga = b;
      this.oa = c;
      this.v = d;
      this.fa = e;
      this.Gb = g;
      this.wa = h;
      this.Ya = k;
      this.Xa = P;
      this.ub = ka;
      this.pd = wa;
      this.n = 0;
      this.f = 393217
    }, Ki.Ca = !0, Ki.Ba = "cljs.core.logic.nominal/t131283", Ki.Ka = function(b, c) {
      return C(c, "cljs.core.logic.nominal/t131283")
    }, Ki.prototype.Eb = function() {
      return v($.b ? $.b(this.oa) : $.call(null, this.oa)) || v($.b ? $.b(this.ga) : $.call(null, this.ga)) || E.a(this.oa, this.ga)
    }, Ki.prototype.call = function(b, c) {
      b = this;
      return Rh.a(Vh(b.fa), function(c) {
        if(v($.b ? $.b(b.oa) : $.call(null, b.oa))) {
          return Ri(b.oa, b.ga, b.wa, c)
        }
        if(v($.b ? $.b(b.ga) : $.call(null, b.ga))) {
          return Ri(b.ga, b.oa, b.wa, c)
        }
        if(x) {
          for(var d = b.wa, e = c;;) {
            if(rc(d)) {
              return e
            }
            c = J(d);
            e = Pi(I(d), b.ga).call(null, e);
            d = c
          }
        }else {
          return null
        }
      }).call(null, c)
    }, Ki.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(A(c)))
    }, Ki.prototype.b = function(b) {
      var c = this;
      return Rh.a(Vh(c.fa), function(b) {
        if(v($.b ? $.b(c.oa) : $.call(null, c.oa))) {
          return Ri(c.oa, c.ga, c.wa, b)
        }
        if(v($.b ? $.b(c.ga) : $.call(null, c.ga))) {
          return Ri(c.ga, c.oa, c.wa, b)
        }
        if(x) {
          for(var d = c.wa, e = b;;) {
            if(rc(d)) {
              return e
            }
            b = J(d);
            e = Pi(I(d), c.ga).call(null, e);
            d = b
          }
        }else {
          return null
        }
      }).call(null, b)
    }, Ki.prototype.s = f("pd"), Ki.prototype.t = function(b, c) {
      return new Ki(this.ga, this.oa, this.v, this.fa, this.Gb, this.wa, this.Ya, this.Xa, this.ub, c)
    });
    return new Ki(k, d, c, this, this.Gb, this.wa, this.Ya, this.Xa, this.ub, null)
  }, Ji.prototype.toString = function() {
    return[z("suspc"), z(this.Xa), z(this.Ya), z(this.wa)].join("")
  }, Ji.prototype.s = f("Gb"), Ji.prototype.t = function(b, c) {
    return new Ji(this.wa, this.Ya, this.Xa, this.ub, c)
  });
  return new Ji(d, c, b, Si, null)
};
function Mi(a, b, c) {
  return Xh(Ti(a, b, c))
}
function Oi() {
  return!1
}
;
})();

//# sourceMappingURL=adv.js.map