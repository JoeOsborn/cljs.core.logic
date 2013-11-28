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
var ka = Date.now || function() {
  return+new Date
};
function la(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.we = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ma(a, b) {
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
la(va, Error);
va.prototype.name = "CustomError";
function wa(a, b) {
  b.unshift(a);
  va.call(this, ma.apply(null, b));
  b.shift();
  this.re = a
}
la(wa, va);
wa.prototype.name = "AssertionError";
function xa(a, b) {
  throw new wa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var ya = Array.prototype, Aa = ya.indexOf ? function(a, b, c) {
  return ya.indexOf.call(a, b, c)
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
}, Ba = ya.forEach ? function(a, b, c) {
  ya.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = da(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Ca = ya.filter ? function(a, b, c) {
  return ya.filter.call(a, b, c)
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
  ya.sort.call(a, b || Fa)
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
  throw Error("No *print-fn* fn set for evaluation environment");
}
var La = !0;
function Ma() {
  return new Na(null, 5, [Oa, !0, Pa, !0, Qa, !1, Ra, !1, Sa, null], null)
}
function Ta() {
  La = !1;
  Ka = function() {
    function a(a) {
      var d = null;
      0 < arguments.length && (d = t(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, d)
    }
    function b(a) {
      return console.log.apply(console, Ua.a ? Ua.a(a) : Ua.call(null, a))
    }
    a.l = 0;
    a.g = function(a) {
      a = u(a);
      return b(a)
    };
    a.e = b;
    return a
  }()
}
function v(a) {
  return null != a && !1 !== a
}
function Va(a) {
  return null == a
}
function w(a) {
  return v(a) ? !1 : !0
}
function x(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : y ? !1 : null
}
function Xa(a) {
  return null == a ? null : a.constructor
}
function z(a, b) {
  var c = Xa(b), c = v(v(c) ? c.Ca : c) ? c.Ba : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Ya(a) {
  var b = a.Ba;
  return v(b) ? b : "" + A(a)
}
function Za(a) {
  for(var b = a.length, c = Array(b), d = 0;;) {
    if(d < b) {
      c[d] = a[d], d += 1
    }else {
      break
    }
  }
  return c
}
function $a(a) {
  return Array.prototype.slice.call(arguments)
}
var Ua = function() {
  function a(a, b) {
    return B.c ? B.c(function(a, b) {
      a.push(b);
      return a
    }, [], b) : B.call(null, function(a, b) {
      a.push(b);
      return a
    }, [], b)
  }
  function b(a) {
    return c.b(null, a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, 0, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}(), ab = {}, bb = {};
function cb(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  b = cb[p(null == a ? null : a)];
  if(!b && (b = cb._, !b)) {
    throw z("ICounted.-count", a);
  }
  return b.call(null, a)
}
function db(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  b = db[p(null == a ? null : a)];
  if(!b && (b = db._, !b)) {
    throw z("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var eb = {};
function fb(a, b) {
  if(a ? a.K : a) {
    return a.K(a, b)
  }
  var c;
  c = fb[p(null == a ? null : a)];
  if(!c && (c = fb._, !c)) {
    throw z("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var gb = {}, D = function() {
  function a(a, b, c) {
    if(a ? a.na : a) {
      return a.na(a, b, c)
    }
    var h;
    h = D[p(null == a ? null : a)];
    if(!h && (h = D._, !h)) {
      throw z("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ga : a) {
      return a.ga(a, b)
    }
    var c;
    c = D[p(null == a ? null : a)];
    if(!c && (c = D._, !c)) {
      throw z("IIndexed.-nth", a);
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
  c.b = b;
  c.c = a;
  return c
}(), hb = {};
function ib(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  b = ib[p(null == a ? null : a)];
  if(!b && (b = ib._, !b)) {
    throw z("ISeq.-first", a);
  }
  return b.call(null, a)
}
function jb(a) {
  if(a ? a.Z : a) {
    return a.Z(a)
  }
  var b;
  b = jb[p(null == a ? null : a)];
  if(!b && (b = jb._, !b)) {
    throw z("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var kb = {}, lb = {}, mb = function() {
  function a(a, b, c) {
    if(a ? a.O : a) {
      return a.O(a, b, c)
    }
    var h;
    h = mb[p(null == a ? null : a)];
    if(!h && (h = mb._, !h)) {
      throw z("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.N : a) {
      return a.N(a, b)
    }
    var c;
    c = mb[p(null == a ? null : a)];
    if(!c && (c = mb._, !c)) {
      throw z("ILookup.-lookup", a);
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
  c.b = b;
  c.c = a;
  return c
}(), nb = {};
function ob(a, b) {
  if(a ? a.Mb : a) {
    return a.Mb(a, b)
  }
  var c;
  c = ob[p(null == a ? null : a)];
  if(!c && (c = ob._, !c)) {
    throw z("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b)
}
function pb(a, b, c) {
  if(a ? a.Ia : a) {
    return a.Ia(a, b, c)
  }
  var d;
  d = pb[p(null == a ? null : a)];
  if(!d && (d = pb._, !d)) {
    throw z("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var qb = {};
function rb(a, b) {
  if(a ? a.ab : a) {
    return a.ab(a, b)
  }
  var c;
  c = rb[p(null == a ? null : a)];
  if(!c && (c = rb._, !c)) {
    throw z("IMap.-dissoc", a);
  }
  return c.call(null, a, b)
}
var sb = {};
function tb(a) {
  if(a ? a.cc : a) {
    return a.cc()
  }
  var b;
  b = tb[p(null == a ? null : a)];
  if(!b && (b = tb._, !b)) {
    throw z("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function ub(a) {
  if(a ? a.qc : a) {
    return a.qc()
  }
  var b;
  b = ub[p(null == a ? null : a)];
  if(!b && (b = ub._, !b)) {
    throw z("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var wb = {};
function xb(a, b) {
  if(a ? a.sc : a) {
    return a.sc(0, b)
  }
  var c;
  c = xb[p(null == a ? null : a)];
  if(!c && (c = xb._, !c)) {
    throw z("ISet.-disjoin", a);
  }
  return c.call(null, a, b)
}
var yb = {};
function zb(a, b, c) {
  if(a ? a.ec : a) {
    return a.ec(a, b, c)
  }
  var d;
  d = zb[p(null == a ? null : a)];
  if(!d && (d = zb._, !d)) {
    throw z("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function Ab(a) {
  if(a ? a.Yc : a) {
    return a.state
  }
  var b;
  b = Ab[p(null == a ? null : a)];
  if(!b && (b = Ab._, !b)) {
    throw z("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var Bb = {};
function Cb(a) {
  if(a ? a.r : a) {
    return a.r(a)
  }
  var b;
  b = Cb[p(null == a ? null : a)];
  if(!b && (b = Cb._, !b)) {
    throw z("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var Db = {};
function Eb(a, b) {
  if(a ? a.s : a) {
    return a.s(a, b)
  }
  var c;
  c = Eb[p(null == a ? null : a)];
  if(!c && (c = Eb._, !c)) {
    throw z("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var Fb = {}, Gb = function() {
  function a(a, b, c) {
    if(a ? a.Y : a) {
      return a.Y(a, b, c)
    }
    var h;
    h = Gb[p(null == a ? null : a)];
    if(!h && (h = Gb._, !h)) {
      throw z("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.X : a) {
      return a.X(a, b)
    }
    var c;
    c = Gb[p(null == a ? null : a)];
    if(!c && (c = Gb._, !c)) {
      throw z("IReduce.-reduce", a);
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
  c.b = b;
  c.c = a;
  return c
}();
function Hb(a, b) {
  if(a ? a.u : a) {
    return a.u(a, b)
  }
  var c;
  c = Hb[p(null == a ? null : a)];
  if(!c && (c = Hb._, !c)) {
    throw z("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function Ib(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  b = Ib[p(null == a ? null : a)];
  if(!b && (b = Ib._, !b)) {
    throw z("IHash.-hash", a);
  }
  return b.call(null, a)
}
var Jb = {};
function Kb(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  b = Kb[p(null == a ? null : a)];
  if(!b && (b = Kb._, !b)) {
    throw z("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var Lb = {}, Mb = {};
function Nb(a) {
  if(a ? a.dc : a) {
    return a.dc(a)
  }
  var b;
  b = Nb[p(null == a ? null : a)];
  if(!b && (b = Nb._, !b)) {
    throw z("IReversible.-rseq", a);
  }
  return b.call(null, a)
}
function E(a, b) {
  if(a ? a.uc : a) {
    return a.uc(0, b)
  }
  var c;
  c = E[p(null == a ? null : a)];
  if(!c && (c = E._, !c)) {
    throw z("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
var Ob = {};
function Pb(a, b, c) {
  if(a ? a.v : a) {
    return a.v(a, b, c)
  }
  var d;
  d = Pb[p(null == a ? null : a)];
  if(!d && (d = Pb._, !d)) {
    throw z("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function Qb(a) {
  if(a ? a.ib : a) {
    return a.ib(a)
  }
  var b;
  b = Qb[p(null == a ? null : a)];
  if(!b && (b = Qb._, !b)) {
    throw z("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Rb(a, b) {
  if(a ? a.Ja : a) {
    return a.Ja(a, b)
  }
  var c;
  c = Rb[p(null == a ? null : a)];
  if(!c && (c = Rb._, !c)) {
    throw z("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Sb(a) {
  if(a ? a.Qa : a) {
    return a.Qa(a)
  }
  var b;
  b = Sb[p(null == a ? null : a)];
  if(!b && (b = Sb._, !b)) {
    throw z("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Tb(a, b, c) {
  if(a ? a.bb : a) {
    return a.bb(a, b, c)
  }
  var d;
  d = Tb[p(null == a ? null : a)];
  if(!d && (d = Tb._, !d)) {
    throw z("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Ub(a, b, c) {
  if(a ? a.tc : a) {
    return a.tc(0, b, c)
  }
  var d;
  d = Ub[p(null == a ? null : a)];
  if(!d && (d = Ub._, !d)) {
    throw z("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function Vb(a) {
  if(a ? a.oc : a) {
    return a.oc()
  }
  var b;
  b = Vb[p(null == a ? null : a)];
  if(!b && (b = Vb._, !b)) {
    throw z("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Wb(a) {
  if(a ? a.Ob : a) {
    return a.Ob(a)
  }
  var b;
  b = Wb[p(null == a ? null : a)];
  if(!b && (b = Wb._, !b)) {
    throw z("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function Xb(a) {
  if(a ? a.Pb : a) {
    return a.Pb(a)
  }
  var b;
  b = Xb[p(null == a ? null : a)];
  if(!b && (b = Xb._, !b)) {
    throw z("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Yb(a) {
  if(a ? a.Nb : a) {
    return a.Nb(a)
  }
  var b;
  b = Yb[p(null == a ? null : a)];
  if(!b && (b = Yb._, !b)) {
    throw z("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function Zb(a) {
  this.wd = a;
  this.o = 0;
  this.f = 1073741824
}
Zb.prototype.uc = function(a, b) {
  return this.wd.append(b)
};
function $b(a) {
  var b = new Ia;
  a.v(null, new Zb(b), Ma());
  return"" + A(b)
}
function ac(a, b) {
  if(v(F.b ? F.b(a, b) : F.call(null, a, b))) {
    return 0
  }
  var c = w(a.ca);
  if(v(c ? b.ca : c)) {
    return-1
  }
  if(v(a.ca)) {
    if(w(b.ca)) {
      return 1
    }
    c = bc.b ? bc.b(a.ca, b.ca) : bc.call(null, a.ca, b.ca);
    return 0 === c ? bc.b ? bc.b(a.name, b.name) : bc.call(null, a.name, b.name) : c
  }
  return cc ? bc.b ? bc.b(a.name, b.name) : bc.call(null, a.name, b.name) : null
}
function G(a, b, c, d, e) {
  this.ca = a;
  this.name = b;
  this.Pa = c;
  this.la = d;
  this.w = e;
  this.f = 2154168321;
  this.o = 4096
}
n = G.prototype;
n.v = function(a, b) {
  return E(b, this.Pa)
};
n.C = function() {
  var a = this.la;
  return null != a ? a : this.la = a = dc.b ? dc.b(H.a ? H.a(this.ca) : H.call(null, this.ca), H.a ? H.a(this.name) : H.call(null, this.name)) : dc.call(null, H.a ? H.a(this.ca) : H.call(null, this.ca), H.a ? H.a(this.name) : H.call(null, this.name))
};
n.s = function(a, b) {
  return new G(this.ca, this.name, this.Pa, this.la, b)
};
n.r = f("w");
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return mb.c(c, this, null);
      case 3:
        return mb.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Za(b)))
};
n.a = function(a) {
  return mb.c(a, this, null)
};
n.b = function(a, b) {
  return mb.c(a, this, b)
};
n.u = function(a, b) {
  return b instanceof G ? this.Pa === b.Pa : !1
};
n.toString = f("Pa");
var ec = function() {
  function a(a, b) {
    var c = null != a ? [A(a), A("/"), A(b)].join("") : b;
    return new G(a, b, c, null, null)
  }
  function b(a) {
    return a instanceof G ? a : c.b(null, a)
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
  c.a = b;
  c.b = a;
  return c
}();
function u(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 8388608 || a.de)) {
    return a.J(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new fc(a, 0)
  }
  if(x(Jb, a)) {
    return Kb(a)
  }
  if(y) {
    throw Error([A(a), A("is not ISeqable")].join(""));
  }
  return null
}
function I(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 64 || a.jb)) {
    return a.T(null)
  }
  a = u(a);
  return null == a ? null : ib(a)
}
function J(a) {
  return null != a ? a && (a.f & 64 || a.jb) ? a.Z(null) : (a = u(a)) ? jb(a) : K : K
}
function N(a) {
  return null == a ? null : a && (a.f & 128 || a.rc) ? a.ia(null) : u(J(a))
}
var F = function() {
  function a(a, b) {
    return a === b || Hb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = t(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.b(a, d)) {
          if(N(e)) {
            a = d, d = I(e), e = N(e)
          }else {
            return b.b(d, I(e))
          }
        }else {
          return!1
        }
      }
    }
    a.l = 2;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
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
        return c.e(b, e, t(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.a = m(!0);
  b.b = a;
  b.e = c.e;
  return b
}();
Ib["null"] = m(0);
kb["null"] = !0;
wb["null"] = !0;
xb["null"] = m(null);
bb["null"] = !0;
cb["null"] = m(0);
Hb["null"] = function(a, b) {
  return null == b
};
Db["null"] = !0;
Eb["null"] = m(null);
Bb["null"] = !0;
Cb["null"] = m(null);
db["null"] = m(null);
qb["null"] = !0;
rb["null"] = m(null);
Date.prototype.u = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
Hb.number = function(a, b) {
  return a === b
};
Bb["function"] = !0;
Cb["function"] = m(null);
ab["function"] = !0;
Ib._ = function(a) {
  return a[fa] || (a[fa] = ++ga)
};
var gc = function() {
  function a(a, b, c, d) {
    for(var l = cb(a);;) {
      if(d < l) {
        c = b.b ? b.b(c, D.b(a, d)) : b.call(null, c, D.b(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = cb(a), l = 0;;) {
      if(l < d) {
        c = b.b ? b.b(c, D.b(a, l)) : b.call(null, c, D.b(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = cb(a);
    if(0 === c) {
      return b.j ? b.j() : b.call(null)
    }
    for(var d = D.b(a, 0), l = 1;;) {
      if(l < c) {
        d = b.b ? b.b(d, D.b(a, l)) : b.call(null, d, D.b(a, l)), l += 1
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
  d.b = c;
  d.c = b;
  d.p = a;
  return d
}(), hc = function() {
  function a(a, b, c, d) {
    for(var l = a.length;;) {
      if(d < l) {
        c = b.b ? b.b(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, l = 0;;) {
      if(l < d) {
        c = b.b ? b.b(c, a[l]) : b.call(null, c, a[l]), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.j ? b.j() : b.call(null)
    }
    for(var d = a[0], l = 1;;) {
      if(l < c) {
        d = b.b ? b.b(d, a[l]) : b.call(null, d, a[l]), l += 1
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
  d.b = c;
  d.c = b;
  d.p = a;
  return d
}();
function ic(a) {
  return a ? a.f & 2 || a.Xc ? !0 : a.f ? !1 : x(bb, a) : x(bb, a)
}
function jc(a) {
  return a ? a.f & 16 || a.pc ? !0 : a.f ? !1 : x(gb, a) : x(gb, a)
}
function fc(a, b) {
  this.d = a;
  this.n = b;
  this.o = 0;
  this.f = 166199550
}
n = fc.prototype;
n.C = function() {
  return kc.a ? kc.a(this) : kc.call(null, this)
};
n.ia = function() {
  return this.n + 1 < this.d.length ? new fc(this.d, this.n + 1) : null
};
n.K = function(a, b) {
  return P.b ? P.b(b, this) : P.call(null, b, this)
};
n.dc = function() {
  var a = cb(this);
  return 0 < a ? new lc(this, a - 1, null) : null
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return hc.p(this.d, b, this.d[this.n], this.n + 1)
};
n.Y = function(a, b, c) {
  return hc.p(this.d, b, c, this.n)
};
n.J = function() {
  return this
};
n.I = function() {
  return this.d.length - this.n
};
n.T = function() {
  return this.d[this.n]
};
n.Z = function() {
  return this.n + 1 < this.d.length ? new fc(this.d, this.n + 1) : K
};
n.u = function(a, b) {
  return mc.b ? mc.b(this, b) : mc.call(null, this, b)
};
n.ga = function(a, b) {
  var c = b + this.n;
  return c < this.d.length ? this.d[c] : null
};
n.na = function(a, b, c) {
  a = b + this.n;
  return a < this.d.length ? this.d[a] : c
};
n.P = function() {
  return K
};
var nc = function() {
  function a(a, b) {
    return b < a.length ? new fc(a, b) : null
  }
  function b(a) {
    return c.b(a, 0)
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
  c.a = b;
  c.b = a;
  return c
}(), t = function() {
  function a(a, b) {
    return nc.b(a, b)
  }
  function b(a) {
    return nc.b(a, 0)
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
  c.a = b;
  c.b = a;
  return c
}();
function lc(a, b, c) {
  this.Lb = a;
  this.n = b;
  this.i = c;
  this.o = 0;
  this.f = 32374862
}
n = lc.prototype;
n.C = function() {
  return kc.a ? kc.a(this) : kc.call(null, this)
};
n.K = function(a, b) {
  return P.b ? P.b(b, this) : P.call(null, b, this)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return oc.b ? oc.b(b, this) : oc.call(null, b, this)
};
n.Y = function(a, b, c) {
  return oc.c ? oc.c(b, c, this) : oc.call(null, b, c, this)
};
n.J = function() {
  return this
};
n.I = function() {
  return this.n + 1
};
n.T = function() {
  return D.b(this.Lb, this.n)
};
n.Z = function() {
  return 0 < this.n ? new lc(this.Lb, this.n - 1, null) : null
};
n.u = function(a, b) {
  return mc.b ? mc.b(this, b) : mc.call(null, this, b)
};
n.s = function(a, b) {
  return new lc(this.Lb, this.n, b)
};
n.r = f("i");
n.P = function() {
  return Q.b ? Q.b(K, this.i) : Q.call(null, K, this.i)
};
Hb._ = function(a, b) {
  return a === b
};
var pc = function() {
  function a(a, b) {
    return null != a ? fb(a, b) : fb(K, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = t(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(v(e)) {
          a = b.b(a, d), d = I(e), e = N(e)
        }else {
          return b.b(a, d)
        }
      }
    }
    a.l = 2;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
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
        return c.e(b, e, t(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b
}();
function R(a) {
  if(null != a) {
    if(a && (a.f & 2 || a.Xc)) {
      a = a.I(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(x(bb, a)) {
            a = cb(a)
          }else {
            if(y) {
              a: {
                a = u(a);
                for(var b = 0;;) {
                  if(ic(a)) {
                    a = b + cb(a);
                    break a
                  }
                  a = N(a);
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
var qc = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return u(a) ? I(a) : c
      }
      if(jc(a)) {
        return D.c(a, b, c)
      }
      if(u(a)) {
        a = N(a), b -= 1
      }else {
        return y ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(u(a)) {
          return I(a)
        }
        throw Error("Index out of bounds");
      }
      if(jc(a)) {
        return D.b(a, b)
      }
      if(u(a)) {
        var c = N(a), h = b - 1;
        a = c;
        b = h
      }else {
        if(y) {
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
  c.b = b;
  c.c = a;
  return c
}(), S = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.f & 16 || a.pc)) {
        return a.na(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(x(gb, a)) {
        return D.b(a, b)
      }
      if(y) {
        if(a ? a.f & 64 || a.jb || (a.f ? 0 : x(hb, a)) : x(hb, a)) {
          return qc.c(a, b, c)
        }
        throw Error([A("nth not supported on this type "), A(Ya(Xa(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.f & 16 || a.pc)) {
      return a.ga(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(x(gb, a)) {
      return D.b(a, b)
    }
    if(y) {
      if(a ? a.f & 64 || a.jb || (a.f ? 0 : x(hb, a)) : x(hb, a)) {
        return qc.b(a, b)
      }
      throw Error([A("nth not supported on this type "), A(Ya(Xa(a)))].join(""));
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
  c.b = b;
  c.c = a;
  return c
}(), T = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.$c) ? a.O(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(lb, a) ? mb.c(a, b, c) : y ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.$c) ? a.N(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x(lb, a) ? mb.b(a, b) : null
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
  c.b = b;
  c.c = a;
  return c
}(), U = function() {
  function a(a, b, c) {
    return null != a ? pb(a, b, c) : rc.b ? rc.b([b], [c]) : rc.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var q = null;
      3 < arguments.length && (q = t(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, q)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.c(a, d, e), v(l)) {
          d = I(l), e = I(N(l)), l = N(N(l))
        }else {
          return a
        }
      }
    }
    a.l = 3;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
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
        return c.e(b, e, g, t(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b
}(), sc = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = t(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.b(b, c), v(d)) {
          c = I(d), d = N(d)
        }else {
          return b
        }
      }
    }
    b.l = 2;
    b.g = function(a) {
      var b = I(a);
      a = N(a);
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
        return rb(a, d);
      default:
        return b.e(a, d, t(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.g = b.g;
  a.a = aa();
  a.b = function(a, b) {
    return rb(a, b)
  };
  a.e = b.e;
  return a
}();
function tc(a) {
  var b = "function" == p(a);
  return b ? b : a ? v(v(null) ? null : a.Wc) ? !0 : a.Lc ? !1 : x(ab, a) : x(ab, a)
}
var Q = function uc(b, c) {
  return tc(b) && !(b ? b.f & 262144 || b.he || (b.f ? 0 : x(Db, b)) : x(Db, b)) ? uc(function() {
    "undefined" === typeof Ja && (Ja = function(b, c, g, h) {
      this.i = b;
      this.rb = c;
      this.yd = g;
      this.rd = h;
      this.o = 0;
      this.f = 393217
    }, Ja.Ca = !0, Ja.Ba = "cljs.core/t54599", Ja.Ka = function(b, c) {
      return E(c, "cljs.core/t54599")
    }, Ja.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = t(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return V.b ? V.b(b.rb, d) : V.call(null, b.rb, d)
      }
      b.l = 1;
      b.g = function(b) {
        var d = I(b);
        b = J(b);
        return c(d, b)
      };
      b.e = c;
      return b
    }(), Ja.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(Za(c)))
    }, Ja.prototype.b = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = t(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h)
      }
      function c(b) {
        return V.b ? V.b(self__.rb, b) : V.call(null, self__.rb, b)
      }
      b.l = 0;
      b.g = function(b) {
        b = u(b);
        return c(b)
      };
      b.e = c;
      return b
    }(), Ja.prototype.Wc = !0, Ja.prototype.r = f("rd"), Ja.prototype.s = function(b, c) {
      return new Ja(this.i, this.rb, this.yd, c)
    });
    return new Ja(c, b, uc, null)
  }(), c) : Eb(b, c)
};
function vc(a) {
  return(a ? a.f & 131072 || a.bd || (a.f ? 0 : x(Bb, a)) : x(Bb, a)) ? Cb(a) : null
}
var wc = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = t(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.b(b, c), v(d)) {
          c = I(d), d = N(d)
        }else {
          return b
        }
      }
    }
    b.l = 2;
    b.g = function(a) {
      var b = I(a);
      a = N(a);
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
        return xb(a, d);
      default:
        return b.e(a, d, t(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.g = b.g;
  a.a = aa();
  a.b = function(a, b) {
    return xb(a, b)
  };
  a.e = b.e;
  return a
}(), xc = {}, yc = 0;
function H(a) {
  if(a && (a.f & 4194304 || a.$d)) {
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
            255 < yc && (xc = {}, yc = 0);
            var b = xc[a];
            "number" !== typeof b && (b = ua(a), xc[a] = b, yc += 1);
            a = b
          }else {
            a = y ? Ib(a) : null
          }
        }
      }
    }
  }
  return a
}
function zc(a) {
  return null == a || w(u(a))
}
function Ac(a) {
  return null == a ? !1 : a ? a.f & 8 || a.Xd ? !0 : a.f ? !1 : x(eb, a) : x(eb, a)
}
function Bc(a) {
  return a ? a.f & 16777216 || a.ee ? !0 : a.f ? !1 : x(Lb, a) : x(Lb, a)
}
function Cc(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.ae ? !0 : a.f ? !1 : x(qb, a) : x(qb, a)
}
function Dc(a) {
  return a ? a.f & 16384 || a.ge ? !0 : a.f ? !1 : x(yb, a) : x(yb, a)
}
function Ec(a) {
  return a ? a.o & 512 || a.Wd ? !0 : !1 : !1
}
function Fc(a) {
  var b = [];
  Ha(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function Gc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var Hc = {};
function Ic(a) {
  return null == a ? !1 : a ? a.f & 64 || a.jb ? !0 : a.f ? !1 : x(hb, a) : x(hb, a)
}
function Kc(a) {
  return v(a) ? !0 : !1
}
function Lc(a, b) {
  return T.c(a, b, Hc) === Hc ? !1 : !0
}
function Mc(a, b) {
  return null != a && (a ? a.f & 512 || a.Vd || (a.f ? 0 : x(nb, a)) : x(nb, a)) && Lc(a, b) ? new W(null, 2, 5, X, [b, T.b(a, b)], null) : null
}
function bc(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(Xa(a) === Xa(b)) {
    return a && (a.o & 2048 || a.ub) ? a.vb(null, b) : Fa(a, b)
  }
  if(y) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Nc = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = bc(S.b(a, h), S.b(b, h));
      if(0 === k && h + 1 < c) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var g = R(a), h = R(b);
    return g < h ? -1 : g > h ? 1 : y ? c.p(a, b, g, 0) : null
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
  c.b = b;
  c.p = a;
  return c
}();
function Oc(a) {
  return F.b(a, bc) ? bc : function(b, c) {
    var d = a.b ? a.b(b, c) : a.call(null, b, c);
    return"number" === typeof d ? d : v(d) ? -1 : v(a.b ? a.b(c, b) : a.call(null, c, b)) ? 1 : 0
  }
}
var Qc = function() {
  function a(a, b) {
    if(u(b)) {
      var c = Pc.a ? Pc.a(b) : Pc.call(null, b);
      Ga(c, Oc(a));
      return u(c)
    }
    return K
  }
  function b(a) {
    return c.b(bc, a)
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
  c.a = b;
  c.b = a;
  return c
}(), oc = function() {
  function a(a, b, c) {
    for(c = u(c);;) {
      if(c) {
        b = a.b ? a.b(b, I(c)) : a.call(null, b, I(c)), c = N(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = u(b);
    return c ? B.c ? B.c(a, I(c), N(c)) : B.call(null, a, I(c), N(c)) : a.j ? a.j() : a.call(null)
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
  c.b = b;
  c.c = a;
  return c
}(), B = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.dd) ? c.Y(null, a, b) : c instanceof Array ? hc.c(c, a, b) : "string" === typeof c ? hc.c(c, a, b) : x(Fb, c) ? Gb.c(c, a, b) : y ? oc.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.dd) ? b.X(null, a) : b instanceof Array ? hc.b(b, a) : "string" === typeof b ? hc.b(b, a) : x(Fb, b) ? Gb.b(b, a) : y ? oc.b(a, b) : null
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
  c.b = b;
  c.c = a;
  return c
}();
function Rc(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.a ? Math.floor.a((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.a ? Math.ceil.a((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2)
}
function Sc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function Tc(a) {
  var b = 1;
  for(a = u(a);;) {
    if(a && 0 < b) {
      b -= 1, a = N(a)
    }else {
      return a
    }
  }
}
var A = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = t(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      for(var e = new Ia(b.a(a)), l = d;;) {
        if(v(l)) {
          e = e.append(b.a(I(l))), l = N(l)
        }else {
          return e.toString()
        }
      }
    }
    a.l = 1;
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
        return c.e(b, t(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.g = c.g;
  b.j = m("");
  b.a = a;
  b.e = c.e;
  return b
}(), Uc = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return a.substring(c)
  };
  a.c = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}();
function mc(a, b) {
  return Kc(Bc(b) ? function() {
    for(var c = u(a), d = u(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(F.b(I(c), I(d))) {
        c = N(c), d = N(d)
      }else {
        return y ? !1 : null
      }
    }
  }() : null)
}
function dc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function kc(a) {
  if(u(a)) {
    var b = H(I(a));
    for(a = N(a);;) {
      if(null == a) {
        return b
      }
      b = dc(b, H(I(a)));
      a = N(a)
    }
  }else {
    return 0
  }
}
function Vc(a) {
  var b = 0;
  for(a = u(a);;) {
    if(a) {
      var c = I(a), b = (b + (H(Wc.a ? Wc.a(c) : Wc.call(null, c)) ^ H(Xc.a ? Xc.a(c) : Xc.call(null, c)))) % 4503599627370496;
      a = N(a)
    }else {
      return b
    }
  }
}
function Yc(a, b, c, d, e) {
  this.i = a;
  this.nb = b;
  this.Fa = c;
  this.count = d;
  this.k = e;
  this.o = 0;
  this.f = 65937646
}
n = Yc.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.ia = function() {
  return 1 === this.count ? null : this.Fa
};
n.K = function(a, b) {
  return new Yc(this.i, b, this, this.count + 1, null)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return oc.b(b, this)
};
n.Y = function(a, b, c) {
  return oc.c(b, c, this)
};
n.J = function() {
  return this
};
n.I = f("count");
n.T = f("nb");
n.Z = function() {
  return 1 === this.count ? K : this.Fa
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new Yc(b, this.nb, this.Fa, this.count, this.k)
};
n.r = f("i");
n.P = function() {
  return K
};
function Zc(a) {
  this.i = a;
  this.o = 0;
  this.f = 65937614
}
n = Zc.prototype;
n.C = m(0);
n.ia = m(null);
n.K = function(a, b) {
  return new Yc(this.i, b, null, 1, null)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return oc.b(b, this)
};
n.Y = function(a, b, c) {
  return oc.c(b, c, this)
};
n.J = m(null);
n.I = m(0);
n.T = m(null);
n.Z = function() {
  return K
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new Zc(b)
};
n.r = f("i");
n.P = function() {
  return this
};
var K = new Zc(null);
function $c(a) {
  return(a ? a.f & 134217728 || a.ce || (a.f ? 0 : x(Mb, a)) : x(Mb, a)) ? Nb(a) : B.c(pc, K, a)
}
function ad(a, b, c, d) {
  this.i = a;
  this.nb = b;
  this.Fa = c;
  this.k = d;
  this.o = 0;
  this.f = 65929452
}
n = ad.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.ia = function() {
  return null == this.Fa ? null : u(this.Fa)
};
n.K = function(a, b) {
  return new ad(null, b, this, this.k)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return oc.b(b, this)
};
n.Y = function(a, b, c) {
  return oc.c(b, c, this)
};
n.J = function() {
  return this
};
n.T = f("nb");
n.Z = function() {
  return null == this.Fa ? K : this.Fa
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new ad(b, this.nb, this.Fa, this.k)
};
n.r = f("i");
n.P = function() {
  return Q(K, this.i)
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.jb)) ? new ad(null, a, b, null) : new ad(null, a, u(b), null)
}
function Y(a, b, c, d) {
  this.ca = a;
  this.name = b;
  this.La = c;
  this.la = d;
  this.f = 2153775105;
  this.o = 4096
}
n = Y.prototype;
n.v = function(a, b) {
  return E(b, [A(":"), A(this.La)].join(""))
};
n.C = function() {
  null == this.la && (this.la = dc(H(this.ca), H(this.name)) + 2654435769);
  return this.la
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return T.b(c, this);
      case 3:
        return T.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Za(b)))
};
n.a = function(a) {
  return T.b(a, this)
};
n.b = function(a, b) {
  return T.c(a, this, b)
};
n.u = function(a, b) {
  return b instanceof Y ? this.La === b.La : !1
};
n.toString = function() {
  return[A(":"), A(this.La)].join("")
};
function Z(a, b) {
  return a === b ? !0 : a instanceof Y && b instanceof Y ? a.La === b.La : !1
}
var cd = function() {
  function a(a, b) {
    return new Y(a, b, [A(v(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null)
  }
  function b(a) {
    if(a instanceof Y) {
      return a
    }
    if(a instanceof G) {
      var b;
      if(a && (a.o & 4096 || a.cd)) {
        b = a.ca
      }else {
        throw Error([A("Doesn't support namespace: "), A(a)].join(""));
      }
      return new Y(b, bd.a ? bd.a(a) : bd.call(null, a), a.Pa, null)
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
  c.a = b;
  c.b = a;
  return c
}();
function dd(a, b, c, d) {
  this.i = a;
  this.hb = b;
  this.m = c;
  this.k = d;
  this.o = 0;
  this.f = 32374988
}
n = dd.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.ia = function() {
  Kb(this);
  return null == this.m ? null : N(this.m)
};
n.K = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return $b(this)
};
function ed(a) {
  null != a.hb && (a.m = a.hb.j ? a.hb.j() : a.hb.call(null), a.hb = null);
  return a.m
}
n.X = function(a, b) {
  return oc.b(b, this)
};
n.Y = function(a, b, c) {
  return oc.c(b, c, this)
};
n.J = function() {
  ed(this);
  if(null == this.m) {
    return null
  }
  for(var a = this.m;;) {
    if(a instanceof dd) {
      a = ed(a)
    }else {
      return this.m = a, u(this.m)
    }
  }
};
n.T = function() {
  Kb(this);
  return null == this.m ? null : I(this.m)
};
n.Z = function() {
  Kb(this);
  return null != this.m ? J(this.m) : K
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new dd(b, this.hb, this.m, this.k)
};
n.r = f("i");
n.P = function() {
  return Q(K, this.i)
};
function fd(a, b) {
  this.Ib = a;
  this.end = b;
  this.o = 0;
  this.f = 2
}
fd.prototype.I = f("end");
fd.prototype.add = function(a) {
  this.Ib[this.end] = a;
  return this.end += 1
};
fd.prototype.ma = function() {
  var a = new gd(this.Ib, 0, this.end);
  this.Ib = null;
  return a
};
function gd(a, b, c) {
  this.d = a;
  this.M = b;
  this.end = c;
  this.o = 0;
  this.f = 524306
}
n = gd.prototype;
n.X = function(a, b) {
  return hc.p(this.d, b, this.d[this.M], this.M + 1)
};
n.Y = function(a, b, c) {
  return hc.p(this.d, b, c, this.M)
};
n.oc = function() {
  if(this.M === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new gd(this.d, this.M + 1, this.end)
};
n.ga = function(a, b) {
  return this.d[this.M + b]
};
n.na = function(a, b, c) {
  return 0 <= b && b < this.end - this.M ? this.d[this.M + b] : c
};
n.I = function() {
  return this.end - this.M
};
var hd = function() {
  function a(a, b, c) {
    return new gd(a, b, c)
  }
  function b(a, b) {
    return new gd(a, b, a.length)
  }
  function c(a) {
    return new gd(a, 0, a.length)
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
  d.a = c;
  d.b = b;
  d.c = a;
  return d
}();
function id(a, b, c, d) {
  this.ma = a;
  this.za = b;
  this.i = c;
  this.k = d;
  this.f = 31850732;
  this.o = 1536
}
n = id.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.ia = function() {
  if(1 < cb(this.ma)) {
    return new id(Vb(this.ma), this.za, this.i, null)
  }
  var a = Kb(this.za);
  return null == a ? null : a
};
n.K = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return $b(this)
};
n.J = function() {
  return this
};
n.T = function() {
  return D.b(this.ma, 0)
};
n.Z = function() {
  return 1 < cb(this.ma) ? new id(Vb(this.ma), this.za, this.i, null) : null == this.za ? K : this.za
};
n.Nb = function() {
  return null == this.za ? null : this.za
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new id(this.ma, this.za, b, this.k)
};
n.r = f("i");
n.P = function() {
  return Q(K, this.i)
};
n.Ob = f("ma");
n.Pb = function() {
  return null == this.za ? K : this.za
};
function jd(a, b) {
  return 0 === cb(a) ? b : new id(a, b, null, null)
}
function Pc(a) {
  for(var b = [];;) {
    if(u(a)) {
      b.push(I(a)), a = N(a)
    }else {
      return b
    }
  }
}
function kd(a, b) {
  if(ic(a)) {
    return R(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && u(c)) {
      c = N(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var md = function ld(b) {
  return null == b ? null : null == N(b) ? u(I(b)) : y ? P(I(b), ld(N(b))) : null
}, nd = function() {
  function a(a, b) {
    return new dd(null, function() {
      var c = u(a);
      return c ? Ec(c) ? jd(Wb(c), d.b(Xb(c), b)) : P(I(c), d.b(J(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new dd(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new dd(null, m(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = t(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g)
    }
    function b(a, c, e) {
      return function r(a, b) {
        return new dd(null, function() {
          var c = u(a);
          return c ? Ec(c) ? jd(Wb(c), r(Xb(c), b)) : P(I(c), r(J(c), b)) : v(b) ? r(I(b), N(b)) : null
        }, null, null)
      }(d.b(a, c), e)
    }
    a.l = 2;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
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
        return e.e(d, h, t(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 2;
  d.g = e.g;
  d.j = c;
  d.a = b;
  d.b = a;
  d.e = e.e;
  return d
}(), od = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)))
  }
  function b(a, b, c) {
    return P(a, P(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, q, s) {
      var r = null;
      4 < arguments.length && (r = t(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, q, r)
    }
    function b(a, c, d, e, g) {
      return P(a, P(c, P(d, P(e, md(g)))))
    }
    a.l = 4;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var s = I(a);
      a = J(a);
      return b(c, d, e, s, a)
    };
    a.e = b;
    return a
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return u(c);
      case 2:
        return P(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.e(c, g, h, k, t(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 4;
  c.g = d.g;
  c.a = function(a) {
    return u(a)
  };
  c.b = function(a, b) {
    return P(a, b)
  };
  c.c = b;
  c.p = a;
  c.e = d.e;
  return c
}();
function pd(a, b, c) {
  var d = u(c);
  if(0 === b) {
    return a.j ? a.j() : a.call(null)
  }
  c = ib(d);
  var e = jb(d);
  if(1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c)
  }
  var d = ib(e), g = jb(e);
  if(2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d)
  }
  var e = ib(g), h = jb(g);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var g = ib(h), k = jb(h);
  if(4 === b) {
    return a.p ? a.p(c, d, e, g) : a.p ? a.p(c, d, e, g) : a.call(null, c, d, e, g)
  }
  h = ib(k);
  k = jb(k);
  if(5 === b) {
    return a.B ? a.B(c, d, e, g, h) : a.B ? a.B(c, d, e, g, h) : a.call(null, c, d, e, g, h)
  }
  a = ib(k);
  var l = jb(k);
  if(6 === b) {
    return a.ra ? a.ra(c, d, e, g, h, a) : a.ra ? a.ra(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a)
  }
  var k = ib(l), q = jb(l);
  if(7 === b) {
    return a.$a ? a.$a(c, d, e, g, h, a, k) : a.$a ? a.$a(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k)
  }
  var l = ib(q), s = jb(q);
  if(8 === b) {
    return a.ac ? a.ac(c, d, e, g, h, a, k, l) : a.ac ? a.ac(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l)
  }
  var q = ib(s), r = jb(s);
  if(9 === b) {
    return a.bc ? a.bc(c, d, e, g, h, a, k, l, q) : a.bc ? a.bc(c, d, e, g, h, a, k, l, q) : a.call(null, c, d, e, g, h, a, k, l, q)
  }
  var s = ib(r), C = jb(r);
  if(10 === b) {
    return a.Qb ? a.Qb(c, d, e, g, h, a, k, l, q, s) : a.Qb ? a.Qb(c, d, e, g, h, a, k, l, q, s) : a.call(null, c, d, e, g, h, a, k, l, q, s)
  }
  var r = ib(C), M = jb(C);
  if(11 === b) {
    return a.Rb ? a.Rb(c, d, e, g, h, a, k, l, q, s, r) : a.Rb ? a.Rb(c, d, e, g, h, a, k, l, q, s, r) : a.call(null, c, d, e, g, h, a, k, l, q, s, r)
  }
  var C = ib(M), L = jb(M);
  if(12 === b) {
    return a.Sb ? a.Sb(c, d, e, g, h, a, k, l, q, s, r, C) : a.Sb ? a.Sb(c, d, e, g, h, a, k, l, q, s, r, C) : a.call(null, c, d, e, g, h, a, k, l, q, s, r, C)
  }
  var M = ib(L), O = jb(L);
  if(13 === b) {
    return a.Tb ? a.Tb(c, d, e, g, h, a, k, l, q, s, r, C, M) : a.Tb ? a.Tb(c, d, e, g, h, a, k, l, q, s, r, C, M) : a.call(null, c, d, e, g, h, a, k, l, q, s, r, C, M)
  }
  var L = ib(O), na = jb(O);
  if(14 === b) {
    return a.Ub ? a.Ub(c, d, e, g, h, a, k, l, q, s, r, C, M, L) : a.Ub ? a.Ub(c, d, e, g, h, a, k, l, q, s, r, C, M, L) : a.call(null, c, d, e, g, h, a, k, l, q, s, r, C, M, L)
  }
  var O = ib(na), za = jb(na);
  if(15 === b) {
    return a.Vb ? a.Vb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O) : a.Vb ? a.Vb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O) : a.call(null, c, d, e, g, h, a, k, l, q, s, r, C, M, L, O)
  }
  var na = ib(za), Wa = jb(za);
  if(16 === b) {
    return a.Wb ? a.Wb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na) : a.Wb ? a.Wb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na) : a.call(null, c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na)
  }
  var za = ib(Wa), vb = jb(Wa);
  if(17 === b) {
    return a.Xb ? a.Xb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za) : a.Xb ? a.Xb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za) : a.call(null, c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za)
  }
  var Wa = ib(vb), xd = jb(vb);
  if(18 === b) {
    return a.Yb ? a.Yb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za, Wa) : a.Yb ? a.Yb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za, Wa) : a.call(null, c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za, Wa)
  }
  vb = ib(xd);
  xd = jb(xd);
  if(19 === b) {
    return a.Zb ? a.Zb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za, Wa, vb) : a.Zb ? a.Zb(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za, Wa, vb) : a.call(null, c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za, Wa, vb)
  }
  var Jc = ib(xd);
  jb(xd);
  if(20 === b) {
    return a.$b ? a.$b(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za, Wa, vb, Jc) : a.$b ? a.$b(c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za, Wa, vb, Jc) : a.call(null, c, d, e, g, h, a, k, l, q, s, r, C, M, L, O, na, za, Wa, vb, Jc)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var V = function() {
  function a(a, b, c, d, e) {
    b = od.p(b, c, d, e);
    c = a.l;
    return a.g ? (d = kd(b, c + 1), d <= c ? pd(a, d, b) : a.g(b)) : a.apply(a, Pc(b))
  }
  function b(a, b, c, d) {
    b = od.c(b, c, d);
    c = a.l;
    return a.g ? (d = kd(b, c + 1), d <= c ? pd(a, d, b) : a.g(b)) : a.apply(a, Pc(b))
  }
  function c(a, b, c) {
    b = od.b(b, c);
    c = a.l;
    if(a.g) {
      var d = kd(b, c + 1);
      return d <= c ? pd(a, d, b) : a.g(b)
    }
    return a.apply(a, Pc(b))
  }
  function d(a, b) {
    var c = a.l;
    if(a.g) {
      var d = kd(b, c + 1);
      return d <= c ? pd(a, d, b) : a.g(b)
    }
    return a.apply(a, Pc(b))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, M) {
      var L = null;
      5 < arguments.length && (L = t(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, L)
    }
    function b(a, c, d, e, g, h) {
      c = P(c, P(d, P(e, P(g, md(h)))));
      d = a.l;
      return a.g ? (e = kd(c, d + 1), e <= d ? pd(a, e, c) : a.g(c)) : a.apply(a, Pc(c))
    }
    a.l = 5;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var g = I(a);
      a = N(a);
      var h = I(a);
      a = J(a);
      return b(c, d, e, g, h, a)
    };
    a.e = b;
    return a
  }(), e = function(e, k, l, q, s, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, q);
      case 5:
        return a.call(this, e, k, l, q, s);
      default:
        return g.e(e, k, l, q, s, t(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 5;
  e.g = g.g;
  e.b = d;
  e.c = c;
  e.p = b;
  e.B = a;
  e.e = g.e;
  return e
}(), qd = function() {
  function a(a, d, e) {
    var g = null;
    2 < arguments.length && (g = t(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, g)
  }
  function b(a, b, e) {
    return Q(a, V.c(b, vc(a), e))
  }
  a.l = 2;
  a.g = function(a) {
    var d = I(a);
    a = N(a);
    var e = I(a);
    a = J(a);
    return b(d, e, a)
  };
  a.e = b;
  return a
}(), rd = function() {
  function a(a, b) {
    return!F.b(a, b)
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = t(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l)
    }
    function b(a, c, d) {
      return w(V.p(F, a, c, d))
    }
    a.l = 2;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
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
        return c.e(b, e, t(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.a = m(!1);
  b.b = a;
  b.e = c.e;
  return b
}();
function sd(a) {
  return u(a) ? a : null
}
function td(a, b) {
  for(;;) {
    if(null == u(b)) {
      return!0
    }
    if(v(a.a ? a.a(I(b)) : a.call(null, I(b)))) {
      var c = a, d = N(b);
      a = c;
      b = d
    }else {
      return y ? !1 : null
    }
  }
}
function ud(a, b) {
  for(;;) {
    if(u(b)) {
      var c = a.a ? a.a(I(b)) : a.call(null, I(b));
      if(v(c)) {
        return c
      }
      var c = a, d = N(b);
      a = c;
      b = d
    }else {
      return null
    }
  }
}
function vd(a) {
  return a
}
function wd(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = t(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l)
      }
      function c(b, d, e) {
        return w(V.p(a, b, d, e))
      }
      b.l = 2;
      b.g = function(a) {
        var b = I(a);
        a = N(a);
        var d = I(a);
        a = J(a);
        return c(b, d, a)
      };
      b.e = c;
      return b
    }(), b = function(b, e, g) {
      switch(arguments.length) {
        case 0:
          return w(a.j ? a.j() : a.call(null));
        case 1:
          return w(a.a ? a.a(b) : a.call(null, b));
        case 2:
          return w(a.b ? a.b(b, e) : a.call(null, b, e));
        default:
          return c.e(b, e, t(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.l = 2;
    b.g = c.g;
    return b
  }()
}
var yd = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = t(Array.prototype.slice.call(arguments, 3), 0));
          return l.call(this, a, b, c, g)
        }
        function l(d, k, q, s) {
          return a.a ? a.a(b.a ? b.a(V.B(c, d, k, q, s)) : b.call(null, V.B(c, d, k, q, s))) : a.call(null, b.a ? b.a(V.B(c, d, k, q, s)) : b.call(null, V.B(c, d, k, q, s)))
        }
        d.l = 3;
        d.g = function(a) {
          var b = I(a);
          a = N(a);
          var c = I(a);
          a = N(a);
          var d = I(a);
          a = J(a);
          return l(b, c, d, a)
        };
        d.e = l;
        return d
      }(), d = function(d, k, r, C) {
        switch(arguments.length) {
          case 0:
            return a.a ? a.a(b.a ? b.a(c.j ? c.j() : c.call(null)) : b.call(null, c.j ? c.j() : c.call(null))) : a.call(null, b.a ? b.a(c.j ? c.j() : c.call(null)) : b.call(null, c.j ? c.j() : c.call(null)));
          case 1:
            return a.a ? a.a(b.a ? b.a(c.a ? c.a(d) : c.call(null, d)) : b.call(null, c.a ? c.a(d) : c.call(null, d))) : a.call(null, b.a ? b.a(c.a ? c.a(d) : c.call(null, d)) : b.call(null, c.a ? c.a(d) : c.call(null, d)));
          case 2:
            return a.a ? a.a(b.a ? b.a(c.b ? c.b(d, k) : c.call(null, d, k)) : b.call(null, c.b ? c.b(d, k) : c.call(null, d, k))) : a.call(null, b.a ? b.a(c.b ? c.b(d, k) : c.call(null, d, k)) : b.call(null, c.b ? c.b(d, k) : c.call(null, d, k)));
          case 3:
            return a.a ? a.a(b.a ? b.a(c.c ? c.c(d, k, r) : c.call(null, d, k, r)) : b.call(null, c.c ? c.c(d, k, r) : c.call(null, d, k, r))) : a.call(null, b.a ? b.a(c.c ? c.c(d, k, r) : c.call(null, d, k, r)) : b.call(null, c.c ? c.c(d, k, r) : c.call(null, d, k, r)));
          default:
            return l.e(d, k, r, t(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.l = 3;
      d.g = l.g;
      return d
    }()
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, g) {
          var h = null;
          3 < arguments.length && (h = t(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h)
        }
        function d(c, h, l, k) {
          return a.a ? a.a(V.B(b, c, h, l, k)) : a.call(null, V.B(b, c, h, l, k))
        }
        c.l = 3;
        c.g = function(a) {
          var b = I(a);
          a = N(a);
          var c = I(a);
          a = N(a);
          var e = I(a);
          a = J(a);
          return d(b, c, e, a)
        };
        c.e = d;
        return c
      }(), c = function(c, h, s, r) {
        switch(arguments.length) {
          case 0:
            return a.a ? a.a(b.j ? b.j() : b.call(null)) : a.call(null, b.j ? b.j() : b.call(null));
          case 1:
            return a.a ? a.a(b.a ? b.a(c) : b.call(null, c)) : a.call(null, b.a ? b.a(c) : b.call(null, c));
          case 2:
            return a.a ? a.a(b.b ? b.b(c, h) : b.call(null, c, h)) : a.call(null, b.b ? b.b(c, h) : b.call(null, c, h));
          case 3:
            return a.a ? a.a(b.c ? b.c(c, h, s) : b.call(null, c, h, s)) : a.call(null, b.c ? b.c(c, h, s) : b.call(null, c, h, s));
          default:
            return d.e(c, h, s, t(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.l = 3;
      c.g = d.g;
      return c
    }()
  }
  var c = null, d = function() {
    function a(c, d, e, q) {
      var s = null;
      3 < arguments.length && (s = t(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, s)
    }
    function b(a, c, d, e) {
      var g = $c(od.p(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = t(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d)
        }
        function b(a) {
          a = V.b(I(g), a);
          for(var c = N(g);;) {
            if(c) {
              a = I(c).call(null, a), c = N(c)
            }else {
              return a
            }
          }
        }
        a.l = 0;
        a.g = function(a) {
          a = u(a);
          return b(a)
        };
        a.e = b;
        return a
      }()
    }
    a.l = 3;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = J(a);
      return b(c, d, e, a)
    };
    a.e = b;
    return a
  }(), c = function(c, g, h, k) {
    switch(arguments.length) {
      case 0:
        return vd;
      case 1:
        return c;
      case 2:
        return b.call(this, c, g);
      case 3:
        return a.call(this, c, g, h);
      default:
        return d.e(c, g, h, t(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 3;
  c.g = d.g;
  c.j = function() {
    return vd
  };
  c.a = aa();
  c.b = b;
  c.c = a;
  c.e = d.e;
  return c
}(), zd = function() {
  function a(a, b, c, d) {
    return function() {
      var l = null, q = function() {
        function l(a, b, c, d) {
          var e = null;
          3 < arguments.length && (e = t(Array.prototype.slice.call(arguments, 3), 0));
          return q.call(this, a, b, c, e)
        }
        function q(l, s, r, O) {
          return V.B(a, null == l ? b : l, null == s ? c : s, null == r ? d : r, O)
        }
        l.l = 3;
        l.g = function(a) {
          var b = I(a);
          a = N(a);
          var c = I(a);
          a = N(a);
          var d = I(a);
          a = J(a);
          return q(b, c, d, a)
        };
        l.e = q;
        return l
      }(), l = function(l, r, C, M) {
        switch(arguments.length) {
          case 2:
            return a.b ? a.b(null == l ? b : l, null == r ? c : r) : a.call(null, null == l ? b : l, null == r ? c : r);
          case 3:
            return a.c ? a.c(null == l ? b : l, null == r ? c : r, null == C ? d : C) : a.call(null, null == l ? b : l, null == r ? c : r, null == C ? d : C);
          default:
            return q.e(l, r, C, t(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      l.l = 3;
      l.g = q.g;
      return l
    }()
  }
  function b(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = t(Array.prototype.slice.call(arguments, 3), 0));
          return l.call(this, a, b, c, g)
        }
        function l(d, k, q, s) {
          return V.B(a, null == d ? b : d, null == k ? c : k, q, s)
        }
        d.l = 3;
        d.g = function(a) {
          var b = I(a);
          a = N(a);
          var c = I(a);
          a = N(a);
          var d = I(a);
          a = J(a);
          return l(b, c, d, a)
        };
        d.e = l;
        return d
      }(), d = function(d, k, r, C) {
        switch(arguments.length) {
          case 2:
            return a.b ? a.b(null == d ? b : d, null == k ? c : k) : a.call(null, null == d ? b : d, null == k ? c : k);
          case 3:
            return a.c ? a.c(null == d ? b : d, null == k ? c : k, r) : a.call(null, null == d ? b : d, null == k ? c : k, r);
          default:
            return l.e(d, k, r, t(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.l = 3;
      d.g = l.g;
      return d
    }()
  }
  function c(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, g) {
          var h = null;
          3 < arguments.length && (h = t(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h)
        }
        function d(c, h, l, k) {
          return V.B(a, null == c ? b : c, h, l, k)
        }
        c.l = 3;
        c.g = function(a) {
          var b = I(a);
          a = N(a);
          var c = I(a);
          a = N(a);
          var e = I(a);
          a = J(a);
          return d(b, c, e, a)
        };
        c.e = d;
        return c
      }(), c = function(c, h, s, r) {
        switch(arguments.length) {
          case 1:
            return a.a ? a.a(null == c ? b : c) : a.call(null, null == c ? b : c);
          case 2:
            return a.b ? a.b(null == c ? b : c, h) : a.call(null, null == c ? b : c, h);
          case 3:
            return a.c ? a.c(null == c ? b : c, h, s) : a.call(null, null == c ? b : c, h, s);
          default:
            return d.e(c, h, s, t(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.l = 3;
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
  d.b = c;
  d.c = b;
  d.p = a;
  return d
}(), Ad = function() {
  function a(a, b, c, e) {
    return new dd(null, function() {
      var q = u(b), s = u(c), r = u(e);
      return q && s && r ? P(a.c ? a.c(I(q), I(s), I(r)) : a.call(null, I(q), I(s), I(r)), d.p(a, J(q), J(s), J(r))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new dd(null, function() {
      var e = u(b), q = u(c);
      return e && q ? P(a.b ? a.b(I(e), I(q)) : a.call(null, I(e), I(q)), d.c(a, J(e), J(q))) : null
    }, null, null)
  }
  function c(a, b) {
    return new dd(null, function() {
      var c = u(b);
      if(c) {
        if(Ec(c)) {
          for(var e = Wb(c), q = R(e), s = new fd(Array(q), 0), r = 0;;) {
            if(r < q) {
              var C = a.a ? a.a(D.b(e, r)) : a.call(null, D.b(e, r));
              s.add(C);
              r += 1
            }else {
              break
            }
          }
          return jd(s.ma(), d.b(a, Xb(c)))
        }
        return P(a.a ? a.a(I(c)) : a.call(null, I(c)), d.b(a, J(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, g, r) {
      var C = null;
      4 < arguments.length && (C = t(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, C)
    }
    function b(a, c, e, g, h) {
      return d.b(function(b) {
        return V.b(a, b)
      }, function M(a) {
        return new dd(null, function() {
          var b = d.b(u, a);
          return td(vd, b) ? P(d.b(I, b), M(d.b(J, b))) : null
        }, null, null)
      }(pc.e(h, g, t([e, c], 0))))
    }
    a.l = 4;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
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
        return e.e(d, h, k, l, t(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.g = e.g;
  d.b = c;
  d.c = b;
  d.p = a;
  d.e = e.e;
  return d
}(), Cd = function Bd(b, c) {
  return new dd(null, function() {
    if(0 < b) {
      var d = u(c);
      return d ? P(I(d), Bd(b - 1, J(d))) : null
    }
    return null
  }, null, null)
}, Dd = function() {
  function a(a, b) {
    return Cd(a, c.a(b))
  }
  function b(a) {
    return new dd(null, function() {
      return P(a, c.a(a))
    }, null, null)
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
  c.a = b;
  c.b = a;
  return c
}(), Fd = function Ed(b, c) {
  return new dd(null, function() {
    var d = u(c);
    if(d) {
      if(Ec(d)) {
        for(var e = Wb(d), g = R(e), h = new fd(Array(g), 0), k = 0;;) {
          if(k < g) {
            if(v(b.a ? b.a(D.b(e, k)) : b.call(null, D.b(e, k)))) {
              var l = D.b(e, k);
              h.add(l)
            }
            k += 1
          }else {
            break
          }
        }
        return jd(h.ma(), Ed(b, Xb(d)))
      }
      e = I(d);
      d = J(d);
      return v(b.a ? b.a(e) : b.call(null, e)) ? P(e, Ed(b, d)) : Ed(b, d)
    }
    return null
  }, null, null)
};
function Gd(a, b) {
  var c;
  null != a ? a && (a.o & 4 || a.Yd) ? (c = B.c(Rb, Qb(a), b), c = Sb(c)) : c = B.c(fb, a, b) : c = B.c(pc, K, b);
  return c
}
var Hd = function() {
  function a(a, b, c, d, g, r) {
    var C = S.c(b, 0, null);
    return(b = Tc(b)) ? U.c(a, C, e.ra(T.b(a, C), b, c, d, g, r)) : U.c(a, C, c.p ? c.p(T.b(a, C), d, g, r) : c.call(null, T.b(a, C), d, g, r))
  }
  function b(a, b, c, d, g) {
    var r = S.c(b, 0, null);
    return(b = Tc(b)) ? U.c(a, r, e.B(T.b(a, r), b, c, d, g)) : U.c(a, r, c.c ? c.c(T.b(a, r), d, g) : c.call(null, T.b(a, r), d, g))
  }
  function c(a, b, c, d) {
    var g = S.c(b, 0, null);
    return(b = Tc(b)) ? U.c(a, g, e.p(T.b(a, g), b, c, d)) : U.c(a, g, c.b ? c.b(T.b(a, g), d) : c.call(null, T.b(a, g), d))
  }
  function d(a, b, c) {
    var d = S.c(b, 0, null);
    return(b = Tc(b)) ? U.c(a, d, e.c(T.b(a, d), b, c)) : U.c(a, d, c.a ? c.a(T.b(a, d)) : c.call(null, T.b(a, d)))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, M, L) {
      var O = null;
      6 < arguments.length && (O = t(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, g, h, M, O)
    }
    function b(a, c, d, g, h, k, L) {
      var O = S.c(c, 0, null);
      return(c = Tc(c)) ? U.c(a, O, V.e(e, T.b(a, O), c, d, g, t([h, k, L], 0))) : U.c(a, O, V.e(d, T.b(a, O), g, h, k, t([L], 0)))
    }
    a.l = 6;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var g = I(a);
      a = N(a);
      var h = I(a);
      a = N(a);
      var L = I(a);
      a = J(a);
      return b(c, d, e, g, h, L, a)
    };
    a.e = b;
    return a
  }(), e = function(e, k, l, q, s, r, C) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, q);
      case 5:
        return b.call(this, e, k, l, q, s);
      case 6:
        return a.call(this, e, k, l, q, s, r);
      default:
        return g.e(e, k, l, q, s, r, t(arguments, 6))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 6;
  e.g = g.g;
  e.c = d;
  e.p = c;
  e.B = b;
  e.ra = a;
  e.e = g.e;
  return e
}();
function Id(a, b) {
  this.t = a;
  this.d = b
}
function Jd(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Kd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Id(a, Array(32));
    d.d[0] = c;
    c = d;
    b -= 5
  }
}
var Md = function Ld(b, c, d, e) {
  var g = new Id(d.t, Za(d.d)), h = b.h - 1 >>> c & 31;
  5 === c ? g.d[h] = e : (d = d.d[h], b = null != d ? Ld(b, c - 5, d, e) : Kd(null, c - 5, e), g.d[h] = b);
  return g
};
function Nd(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function Od(a, b) {
  if(0 <= b && b < a.h) {
    if(b >= Jd(a)) {
      return a.$
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      }else {
        return c.d
      }
    }
  }else {
    return Nd(b, a.h)
  }
}
var Qd = function Pd(b, c, d, e, g) {
  var h = new Id(d.t, Za(d.d));
  if(0 === c) {
    h.d[e & 31] = g
  }else {
    var k = e >>> c & 31;
    b = Pd(b, c - 5, d.d[k], e, g);
    h.d[k] = b
  }
  return h
};
function W(a, b, c, d, e, g) {
  this.i = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.$ = e;
  this.k = g;
  this.o = 4;
  this.f = 167668511
}
n = W.prototype;
n.ib = function() {
  return new Rd(this.h, this.shift, Sd.a ? Sd.a(this.root) : Sd.call(null, this.root), Td.a ? Td.a(this.$) : Td.call(null, this.$))
};
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.N = function(a, b) {
  return D.c(this, b, null)
};
n.O = function(a, b, c) {
  return D.c(this, b, c)
};
n.Ia = function(a, b, c) {
  if(0 <= b && b < this.h) {
    return Jd(this) <= b ? (a = Za(this.$), a[b & 31] = c, new W(this.i, this.h, this.shift, this.root, a, null)) : new W(this.i, this.h, this.shift, Qd(this, this.shift, this.root, b, c), this.$, null)
  }
  if(b === this.h) {
    return fb(this, c)
  }
  if(y) {
    throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.h), A("]")].join(""));
  }
  return null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ga(null, c);
      case 3:
        return this.na(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Za(b)))
};
n.a = function(a) {
  return this.ga(null, a)
};
n.b = function(a, b) {
  return this.na(null, a, b)
};
n.K = function(a, b) {
  if(32 > this.h - Jd(this)) {
    for(var c = this.$.length, d = Array(c + 1), e = 0;;) {
      if(e < c) {
        d[e] = this.$[e], e += 1
      }else {
        break
      }
    }
    d[c] = b;
    return new W(this.i, this.h + 1, this.shift, this.root, d, null)
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = new Id(null, Array(32)), d.d[0] = this.root, e = Kd(null, this.shift, new Id(null, this.$)), d.d[1] = e) : d = Md(this, this.shift, this.root, new Id(null, this.$));
  return new W(this.i, this.h + 1, c, d, [b], null)
};
n.dc = function() {
  return 0 < this.h ? new lc(this, this.h - 1, null) : null
};
n.cc = function() {
  return D.b(this, 0)
};
n.qc = function() {
  return D.b(this, 1)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return gc.b(this, b)
};
n.Y = function(a, b, c) {
  return gc.c(this, b, c)
};
n.J = function() {
  return 0 === this.h ? null : 32 > this.h ? t.a(this.$) : y ? Ud.c ? Ud.c(this, 0, 0) : Ud.call(null, this, 0, 0) : null
};
n.I = f("h");
n.ec = function(a, b, c) {
  return pb(this, b, c)
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new W(b, this.h, this.shift, this.root, this.$, this.k)
};
n.r = f("i");
n.ga = function(a, b) {
  return Od(this, b)[b & 31]
};
n.na = function(a, b, c) {
  return 0 <= b && b < this.h ? D.b(this, b) : c
};
n.P = function() {
  return Q(Vd, this.i)
};
var X = new Id(null, Array(32)), Vd = new W(null, 0, 5, X, [], 0);
function Wd(a) {
  return Sb(B.c(Rb, Qb(Vd), a))
}
function Xd(a, b, c, d, e, g) {
  this.S = a;
  this.oa = b;
  this.n = c;
  this.M = d;
  this.i = e;
  this.k = g;
  this.f = 32243948;
  this.o = 1536
}
n = Xd.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.ia = function() {
  if(this.M + 1 < this.oa.length) {
    var a = Ud.p ? Ud.p(this.S, this.oa, this.n, this.M + 1) : Ud.call(null, this.S, this.oa, this.n, this.M + 1);
    return null == a ? null : a
  }
  return Yb(this)
};
n.K = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return gc.b(Yd.c ? Yd.c(this.S, this.n + this.M, R(this.S)) : Yd.call(null, this.S, this.n + this.M, R(this.S)), b)
};
n.Y = function(a, b, c) {
  return gc.c(Yd.c ? Yd.c(this.S, this.n + this.M, R(this.S)) : Yd.call(null, this.S, this.n + this.M, R(this.S)), b, c)
};
n.J = function() {
  return this
};
n.T = function() {
  return this.oa[this.M]
};
n.Z = function() {
  if(this.M + 1 < this.oa.length) {
    var a = Ud.p ? Ud.p(this.S, this.oa, this.n, this.M + 1) : Ud.call(null, this.S, this.oa, this.n, this.M + 1);
    return null == a ? K : a
  }
  return Xb(this)
};
n.Nb = function() {
  var a = this.oa.length, a = this.n + a < cb(this.S) ? Ud.c ? Ud.c(this.S, this.n + a, 0) : Ud.call(null, this.S, this.n + a, 0) : null;
  return null == a ? null : a
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return Ud.B ? Ud.B(this.S, this.oa, this.n, this.M, b) : Ud.call(null, this.S, this.oa, this.n, this.M, b)
};
n.P = function() {
  return Q(Vd, this.i)
};
n.Ob = function() {
  return hd.b(this.oa, this.M)
};
n.Pb = function() {
  var a = this.oa.length, a = this.n + a < cb(this.S) ? Ud.c ? Ud.c(this.S, this.n + a, 0) : Ud.call(null, this.S, this.n + a, 0) : null;
  return null == a ? K : a
};
var Ud = function() {
  function a(a, b, c, d, l) {
    return new Xd(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new Xd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new Xd(a, Od(a, b), b, c, null, null)
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
  d.B = a;
  return d
}();
function Zd(a, b, c, d, e) {
  this.i = a;
  this.F = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.o = 0;
  this.f = 32400159
}
n = Zd.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.N = function(a, b) {
  return D.c(this, b, null)
};
n.O = function(a, b, c) {
  return D.c(this, b, c)
};
n.Ia = function(a, b, c) {
  var d = this, e = d.start + b;
  return $d.B ? $d.B(d.i, U.c(d.F, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : $d.call(null, d.i, U.c(d.F, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ga(null, c);
      case 3:
        return this.na(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Za(b)))
};
n.a = function(a) {
  return this.ga(null, a)
};
n.b = function(a, b) {
  return this.na(null, a, b)
};
n.K = function(a, b) {
  return $d.B ? $d.B(this.i, zb(this.F, this.end, b), this.start, this.end + 1, null) : $d.call(null, this.i, zb(this.F, this.end, b), this.start, this.end + 1, null)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return gc.b(this, b)
};
n.Y = function(a, b, c) {
  return gc.c(this, b, c)
};
n.J = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : P(D.b(a.F, d), new dd(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
n.I = function() {
  return this.end - this.start
};
n.ec = function(a, b, c) {
  return pb(this, b, c)
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return $d.B ? $d.B(b, this.F, this.start, this.end, this.k) : $d.call(null, b, this.F, this.start, this.end, this.k)
};
n.r = f("i");
n.ga = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Nd(b, this.end - this.start) : D.b(this.F, this.start + b)
};
n.na = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : D.c(this.F, this.start + b, c)
};
n.P = function() {
  return Q(Vd, this.i)
};
function $d(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Zd) {
      c = b.start + c, d = b.start + d, b = b.F
    }else {
      var g = R(b);
      if(0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Zd(a, b, c, d, e)
    }
  }
}
var Yd = function() {
  function a(a, b, c) {
    return $d(null, a, b, c, null)
  }
  function b(a, b) {
    return c.c(a, b, R(a))
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
  c.b = b;
  c.c = a;
  return c
}();
function Sd(a) {
  return new Id({}, Za(a.d))
}
function Td(a) {
  var b = Array(32);
  Gc(a, 0, b, 0, a.length);
  return b
}
var be = function ae(b, c, d, e) {
  d = b.root.t === d.t ? d : new Id(b.root.t, Za(d.d));
  var g = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.d[g];
    b = null != h ? ae(b, c - 5, h, e) : Kd(b.root.t, c - 5, e)
  }
  d.d[g] = b;
  return d
};
function Rd(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.$ = d;
  this.f = 275;
  this.o = 88
}
n = Rd.prototype;
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
  return this.call.apply(this, [this].concat(Za(b)))
};
n.a = function(a) {
  return this.N(null, a)
};
n.b = function(a, b) {
  return this.O(null, a, b)
};
n.N = function(a, b) {
  return D.c(this, b, null)
};
n.O = function(a, b, c) {
  return D.c(this, b, c)
};
n.ga = function(a, b) {
  if(this.root.t) {
    return Od(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
n.na = function(a, b, c) {
  return 0 <= b && b < this.h ? D.b(this, b) : c
};
n.I = function() {
  if(this.root.t) {
    return this.h
  }
  throw Error("count after persistent!");
};
n.tc = function(a, b, c) {
  var d = this;
  if(d.root.t) {
    if(0 <= b && b < d.h) {
      return Jd(this) <= b ? d.$[b & 31] = c : (a = function g(a, k) {
        var l = d.root.t === k.t ? k : new Id(d.root.t, Za(k.d));
        if(0 === a) {
          l.d[b & 31] = c
        }else {
          var q = b >>> a & 31, s = g(a - 5, l.d[q]);
          l.d[q] = s
        }
        return l
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.h) {
      return Rb(this, c)
    }
    if(y) {
      throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.h)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
n.bb = function(a, b, c) {
  return Ub(this, b, c)
};
n.Ja = function(a, b) {
  if(this.root.t) {
    if(32 > this.h - Jd(this)) {
      this.$[this.h & 31] = b
    }else {
      var c = new Id(this.root.t, this.$), d = Array(32);
      d[0] = b;
      this.$ = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = Kd(this.root.t, this.shift, c);
        this.root = new Id(this.root.t, d);
        this.shift = e
      }else {
        this.root = be(this, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
n.Qa = function() {
  if(this.root.t) {
    this.root.t = null;
    var a = this.h - Jd(this), b = Array(a);
    Gc(this.$, 0, b, 0, a);
    return new W(null, this.h, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function ce(a, b, c, d) {
  this.i = a;
  this.sa = b;
  this.Oa = c;
  this.k = d;
  this.o = 0;
  this.f = 31850572
}
n = ce.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.K = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return $b(this)
};
n.J = function() {
  return this
};
n.T = function() {
  return I(this.sa)
};
n.Z = function() {
  var a = N(this.sa);
  return a ? new ce(this.i, a, this.Oa, null) : null == this.Oa ? db(this) : new ce(this.i, this.Oa, null, null)
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new ce(b, this.sa, this.Oa, this.k)
};
n.r = f("i");
n.P = function() {
  return Q(K, this.i)
};
function de(a, b, c, d, e) {
  this.i = a;
  this.count = b;
  this.sa = c;
  this.Oa = d;
  this.k = e;
  this.o = 0;
  this.f = 31858766
}
n = de.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.K = function(a, b) {
  var c;
  v(this.sa) ? (c = this.Oa, c = new de(this.i, this.count + 1, this.sa, pc.b(v(c) ? c : Vd, b), null)) : c = new de(this.i, this.count + 1, pc.b(this.sa, b), Vd, null);
  return c
};
n.toString = function() {
  return $b(this)
};
n.J = function() {
  var a = u(this.Oa), b = this.sa;
  return v(v(b) ? b : a) ? new ce(null, this.sa, u(a), null) : null
};
n.I = f("count");
n.T = function() {
  return I(this.sa)
};
n.Z = function() {
  return J(u(this))
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new de(b, this.count, this.sa, this.Oa, this.k)
};
n.r = f("i");
n.P = function() {
  return ee
};
var ee = new de(null, 0, null, Vd, 0);
function fe() {
  this.o = 0;
  this.f = 2097152
}
fe.prototype.u = m(!1);
var ge = new fe;
function he(a, b) {
  return Kc(Cc(b) ? R(a) === R(b) ? td(vd, Ad.b(function(a) {
    return F.b(T.c(b, I(a), ge), I(N(a)))
  }, a)) : null : null)
}
function ie(a, b) {
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
        if(y) {
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
          if(y) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof G) {
        a: {
          d = c.length;
          e = b.Pa;
          for(g = 0;;) {
            if(d <= g) {
              c = -1;
              break a
            }
            h = c[g];
            if(h instanceof G && e === h.Pa) {
              c = g;
              break a
            }
            if(y) {
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
              if(y) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(y) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(F.b(b, c[e])) {
                  c = e;
                  break a
                }
                if(y) {
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
function je(a, b, c) {
  this.d = a;
  this.n = b;
  this.w = c;
  this.o = 0;
  this.f = 32374990
}
n = je.prototype;
n.C = function() {
  return kc(this)
};
n.ia = function() {
  return this.n < this.d.length - 2 ? new je(this.d, this.n + 2, this.w) : null
};
n.K = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return oc.b(b, this)
};
n.Y = function(a, b, c) {
  return oc.c(b, c, this)
};
n.J = function() {
  return this
};
n.I = function() {
  return(this.d.length - this.n) / 2
};
n.T = function() {
  return new W(null, 2, 5, X, [this.d[this.n], this.d[this.n + 1]], null)
};
n.Z = function() {
  return this.n < this.d.length - 2 ? new je(this.d, this.n + 2, this.w) : K
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new je(this.d, this.n, b)
};
n.r = f("w");
n.P = function() {
  return Q(K, this.w)
};
function Na(a, b, c, d) {
  this.i = a;
  this.h = b;
  this.d = c;
  this.k = d;
  this.o = 4;
  this.f = 16123663
}
n = Na.prototype;
n.ib = function() {
  return new ke({}, this.d.length, Za(this.d))
};
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Vc(this)
};
n.N = function(a, b) {
  return mb.c(this, b, null)
};
n.O = function(a, b, c) {
  a = ie(this, b);
  return-1 === a ? c : this.d[a + 1]
};
n.Ia = function(a, b, c) {
  a = ie(this, b);
  if(-1 === a) {
    if(this.h < le) {
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
      return new Na(this.i, this.h + 1, e, null)
    }
    return Eb(pb(Gd(me, this), b, c), this.i)
  }
  return c === this.d[a + 1] ? this : y ? (b = Za(this.d), b[a + 1] = c, new Na(this.i, this.h, b, null)) : null
};
n.Mb = function(a, b) {
  return-1 !== ie(this, b)
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
  return this.call.apply(this, [this].concat(Za(b)))
};
n.a = function(a) {
  return this.N(null, a)
};
n.b = function(a, b) {
  return this.O(null, a, b)
};
n.K = function(a, b) {
  return Dc(b) ? pb(this, D.b(b, 0), D.b(b, 1)) : B.c(fb, this, b)
};
n.toString = function() {
  return $b(this)
};
n.J = function() {
  return 0 <= this.d.length - 2 ? new je(this.d, 0, null) : null
};
n.I = f("h");
n.u = function(a, b) {
  return he(this, b)
};
n.s = function(a, b) {
  return new Na(b, this.h, this.d, this.k)
};
n.r = f("i");
n.P = function() {
  return Eb(ne, this.i)
};
n.ab = function(a, b) {
  if(0 <= ie(this, b)) {
    var c = this.d.length, d = c - 2;
    if(0 === d) {
      return db(this)
    }
    for(var d = Array(d), e = 0, g = 0;;) {
      if(e >= c) {
        return new Na(this.i, this.h - 1, d, null)
      }
      if(F.b(b, this.d[e])) {
        e += 2
      }else {
        if(y) {
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
var ne = new Na(null, 0, [], null), le = 8;
function oe(a) {
  for(var b = a.length, c = 0, d = Qb(ne);;) {
    if(c < b) {
      var e = c + 2, d = Tb(d, a[c], a[c + 1]), c = e
    }else {
      return Sb(d)
    }
  }
}
function ke(a, b, c) {
  this.fb = a;
  this.Va = b;
  this.d = c;
  this.o = 56;
  this.f = 258
}
n = ke.prototype;
n.bb = function(a, b, c) {
  if(v(this.fb)) {
    a = ie(this, b);
    if(-1 === a) {
      if(this.Va + 2 <= 2 * le) {
        return this.Va += 2, this.d.push(b), this.d.push(c), this
      }
      a = pe.b ? pe.b(this.Va, this.d) : pe.call(null, this.Va, this.d);
      return Tb(a, b, c)
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
n.Ja = function(a, b) {
  if(v(this.fb)) {
    if(b ? b.f & 2048 || b.ad || (b.f ? 0 : x(sb, b)) : x(sb, b)) {
      return Tb(this, Wc.a ? Wc.a(b) : Wc.call(null, b), Xc.a ? Xc.a(b) : Xc.call(null, b))
    }
    for(var c = u(b), d = this;;) {
      var e = I(c);
      if(v(e)) {
        c = N(c), d = Tb(d, Wc.a ? Wc.a(e) : Wc.call(null, e), Xc.a ? Xc.a(e) : Xc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
n.Qa = function() {
  if(v(this.fb)) {
    return this.fb = !1, new Na(null, Rc(this.Va), this.d, null)
  }
  throw Error("persistent! called twice");
};
n.N = function(a, b) {
  return mb.c(this, b, null)
};
n.O = function(a, b, c) {
  if(v(this.fb)) {
    return a = ie(this, b), -1 === a ? c : this.d[a + 1]
  }
  throw Error("lookup after persistent!");
};
n.I = function() {
  if(v(this.fb)) {
    return Rc(this.Va)
  }
  throw Error("count after persistent!");
};
function pe(a, b) {
  for(var c = Qb(me), d = 0;;) {
    if(d < a) {
      c = Tb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function qe() {
  this.Aa = !1
}
function re(a, b) {
  return a === b ? !0 : Z(a, b) ? !0 : y ? F.b(a, b) : null
}
var se = function() {
  function a(a, b, c, h, k) {
    a = Za(a);
    a[b] = c;
    a[h] = k;
    return a
  }
  function b(a, b, c) {
    a = Za(a);
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
  c.B = a;
  return c
}();
function te(a, b) {
  var c = Array(a.length - 2);
  Gc(a, 0, c, 0, 2 * b);
  Gc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var ue = function() {
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
  c.ra = a;
  return c
}();
function ve(a, b, c) {
  this.t = a;
  this.H = b;
  this.d = c
}
n = ve.prototype;
n.ua = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Sc(this.H & h - 1);
  if(0 === (this.H & h)) {
    var l = Sc(this.H);
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
      a.H |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = we.ua(a, b + 5, c, d, e, g);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.H >>> d & 1) && (k[d] = null != this.d[e] ? we.ua(a, b + 5, H(this.d[e]), this.d[e], this.d[e + 1], g) : this.d[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new xe(a, l + 1, k)
    }
    return y ? (b = Array(2 * (l + 4)), Gc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Gc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.Aa = !0, a = this.gb(a), a.d = b, a.H |= h, a) : null
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.ua(a, b + 5, c, d, e, g), l === h ? this : ue.p(this, a, 2 * k + 1, l)) : re(d, l) ? e === h ? this : ue.p(this, a, 2 * k + 1, e) : y ? (g.Aa = !0, ue.ra(this, a, 2 * k, null, 2 * k + 1, ye.$a ? ye.$a(a, b + 5, l, h, c, d, e) : ye.call(null, a, b + 5, l, h, c, d, e))) : null
};
n.ob = function() {
  return ze.a ? ze.a(this.d) : ze.call(null, this.d)
};
n.gb = function(a) {
  if(a === this.t) {
    return this
  }
  var b = Sc(this.H), c = Array(0 > b ? 4 : 2 * (b + 1));
  Gc(this.d, 0, c, 0, 2 * b);
  return new ve(a, this.H, c)
};
n.pb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.H & d)) {
    return this
  }
  var e = Sc(this.H & d - 1), g = this.d[2 * e], h = this.d[2 * e + 1];
  return null == g ? (a = h.pb(a + 5, b, c), a === h ? this : null != a ? new ve(null, this.H, se.c(this.d, 2 * e + 1, a)) : this.H === d ? null : y ? new ve(null, this.H ^ d, te(this.d, e)) : null) : re(c, g) ? new ve(null, this.H ^ d, te(this.d, e)) : y ? this : null
};
n.ta = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Sc(this.H & g - 1);
  if(0 === (this.H & g)) {
    var k = Sc(this.H);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = we.ta(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.H >>> c & 1) && (h[c] = null != this.d[d] ? we.ta(a + 5, H(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new xe(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    Gc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Gc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.Aa = !0;
    return new ve(null, this.H | g, a)
  }
  k = this.d[2 * h];
  g = this.d[2 * h + 1];
  return null == k ? (k = g.ta(a + 5, b, c, d, e), k === g ? this : new ve(null, this.H, se.c(this.d, 2 * h + 1, k))) : re(c, k) ? d === g ? this : new ve(null, this.H, se.c(this.d, 2 * h + 1, d)) : y ? (e.Aa = !0, new ve(null, this.H, se.B(this.d, 2 * h, null, 2 * h + 1, ye.ra ? ye.ra(a + 5, k, g, b, c, d) : ye.call(null, a + 5, k, g, b, c, d)))) : null
};
n.Ma = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.H & e)) {
    return d
  }
  var g = Sc(this.H & e - 1), e = this.d[2 * g], g = this.d[2 * g + 1];
  return null == e ? g.Ma(a + 5, b, c, d) : re(c, e) ? g : y ? d : null
};
var we = new ve(null, 0, []);
function xe(a, b, c) {
  this.t = a;
  this.h = b;
  this.d = c
}
n = xe.prototype;
n.ua = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.d[h];
  if(null == k) {
    return a = ue.p(this, a, h, we.ua(a, b + 5, c, d, e, g)), a.h += 1, a
  }
  b = k.ua(a, b + 5, c, d, e, g);
  return b === k ? this : ue.p(this, a, h, b)
};
n.ob = function() {
  return Ae.a ? Ae.a(this.d) : Ae.call(null, this.d)
};
n.gb = function(a) {
  return a === this.t ? this : new xe(a, this.h, Za(this.d))
};
n.pb = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if(null != e) {
    a = e.pb(a + 5, b, c);
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
                d = new ve(null, h, b);
                break a
              }
            }
            d = void 0
          }
        }else {
          d = new xe(null, this.h - 1, se.c(this.d, d, a))
        }
      }else {
        d = y ? new xe(null, this.h, se.c(this.d, d, a)) : null
      }
    }
    return d
  }
  return this
};
n.ta = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.d[g];
  if(null == h) {
    return new xe(null, this.h + 1, se.c(this.d, g, we.ta(a + 5, b, c, d, e)))
  }
  a = h.ta(a + 5, b, c, d, e);
  return a === h ? this : new xe(null, this.h, se.c(this.d, g, a))
};
n.Ma = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.Ma(a + 5, b, c, d) : d
};
function Be(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(re(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Ce(a, b, c, d) {
  this.t = a;
  this.Ea = b;
  this.h = c;
  this.d = d
}
n = Ce.prototype;
n.ua = function(a, b, c, d, e, g) {
  if(c === this.Ea) {
    b = Be(this.d, this.h, d);
    if(-1 === b) {
      if(this.d.length > 2 * this.h) {
        return a = ue.ra(this, a, 2 * this.h, d, 2 * this.h + 1, e), g.Aa = !0, a.h += 1, a
      }
      c = this.d.length;
      b = Array(c + 2);
      Gc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.Aa = !0;
      g = this.h + 1;
      a === this.t ? (this.d = b, this.h = g, a = this) : a = new Ce(this.t, this.Ea, g, b);
      return a
    }
    return this.d[b + 1] === e ? this : ue.p(this, a, b + 1, e)
  }
  return(new ve(a, 1 << (this.Ea >>> b & 31), [null, this, null, null])).ua(a, b, c, d, e, g)
};
n.ob = function() {
  return ze.a ? ze.a(this.d) : ze.call(null, this.d)
};
n.gb = function(a) {
  if(a === this.t) {
    return this
  }
  var b = Array(2 * (this.h + 1));
  Gc(this.d, 0, b, 0, 2 * this.h);
  return new Ce(a, this.Ea, this.h, b)
};
n.pb = function(a, b, c) {
  a = Be(this.d, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : y ? new Ce(null, this.Ea, this.h - 1, te(this.d, Rc(a))) : null
};
n.ta = function(a, b, c, d, e) {
  return b === this.Ea ? (a = Be(this.d, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), Gc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.Aa = !0, new Ce(null, this.Ea, this.h + 1, b)) : F.b(this.d[a], d) ? this : new Ce(null, this.Ea, this.h, se.c(this.d, a + 1, d))) : (new ve(null, 1 << (this.Ea >>> a & 31), [null, this])).ta(a, b, c, d, e)
};
n.Ma = function(a, b, c, d) {
  a = Be(this.d, this.h, c);
  return 0 > a ? d : re(c, this.d[a]) ? this.d[a + 1] : y ? d : null
};
var ye = function() {
  function a(a, b, c, h, k, l, q) {
    var s = H(c);
    if(s === k) {
      return new Ce(null, s, 2, [c, h, l, q])
    }
    var r = new qe;
    return we.ua(a, b, s, c, h, r).ua(a, b, k, l, q, r)
  }
  function b(a, b, c, h, k, l) {
    var q = H(b);
    if(q === h) {
      return new Ce(null, q, 2, [b, c, k, l])
    }
    var s = new qe;
    return we.ta(a, q, b, c, s).ta(a, h, k, l, s)
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
  c.ra = b;
  c.$a = a;
  return c
}();
function De(a, b, c, d, e) {
  this.i = a;
  this.va = b;
  this.n = c;
  this.m = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860
}
n = De.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.K = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return oc.b(b, this)
};
n.Y = function(a, b, c) {
  return oc.c(b, c, this)
};
n.J = function() {
  return this
};
n.T = function() {
  return null == this.m ? new W(null, 2, 5, X, [this.va[this.n], this.va[this.n + 1]], null) : I(this.m)
};
n.Z = function() {
  return null == this.m ? ze.c ? ze.c(this.va, this.n + 2, null) : ze.call(null, this.va, this.n + 2, null) : ze.c ? ze.c(this.va, this.n, N(this.m)) : ze.call(null, this.va, this.n, N(this.m))
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new De(b, this.va, this.n, this.m, this.k)
};
n.r = f("i");
n.P = function() {
  return Q(K, this.i)
};
var ze = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new De(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(v(h) && (h = h.ob(), v(h))) {
            return new De(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new De(null, a, b, c, null)
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
  c.a = b;
  c.c = a;
  return c
}();
function Ee(a, b, c, d, e) {
  this.i = a;
  this.va = b;
  this.n = c;
  this.m = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860
}
n = Ee.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.K = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return oc.b(b, this)
};
n.Y = function(a, b, c) {
  return oc.c(b, c, this)
};
n.J = function() {
  return this
};
n.T = function() {
  return I(this.m)
};
n.Z = function() {
  return Ae.p ? Ae.p(null, this.va, this.n, N(this.m)) : Ae.call(null, null, this.va, this.n, N(this.m))
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new Ee(b, this.va, this.n, this.m, this.k)
};
n.r = f("i");
n.P = function() {
  return Q(K, this.i)
};
var Ae = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(v(k) && (k = k.ob(), v(k))) {
            return new Ee(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new Ee(a, b, c, h, null)
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
  c.a = b;
  c.p = a;
  return c
}();
function Fe(a, b, c, d, e, g) {
  this.i = a;
  this.h = b;
  this.root = c;
  this.ba = d;
  this.ka = e;
  this.k = g;
  this.o = 4;
  this.f = 16123663
}
n = Fe.prototype;
n.ib = function() {
  return new Ge({}, this.root, this.h, this.ba, this.ka)
};
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Vc(this)
};
n.N = function(a, b) {
  return mb.c(this, b, null)
};
n.O = function(a, b, c) {
  return null == b ? this.ba ? this.ka : c : null == this.root ? c : y ? this.root.Ma(0, H(b), b, c) : null
};
n.Ia = function(a, b, c) {
  if(null == b) {
    return this.ba && c === this.ka ? this : new Fe(this.i, this.ba ? this.h : this.h + 1, this.root, !0, c, null)
  }
  a = new qe;
  b = (null == this.root ? we : this.root).ta(0, H(b), b, c, a);
  return b === this.root ? this : new Fe(this.i, a.Aa ? this.h + 1 : this.h, b, this.ba, this.ka, null)
};
n.Mb = function(a, b) {
  return null == b ? this.ba : null == this.root ? !1 : y ? this.root.Ma(0, H(b), b, Hc) !== Hc : null
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
  return this.call.apply(this, [this].concat(Za(b)))
};
n.a = function(a) {
  return this.N(null, a)
};
n.b = function(a, b) {
  return this.O(null, a, b)
};
n.K = function(a, b) {
  return Dc(b) ? pb(this, D.b(b, 0), D.b(b, 1)) : B.c(fb, this, b)
};
n.toString = function() {
  return $b(this)
};
n.J = function() {
  if(0 < this.h) {
    var a = null != this.root ? this.root.ob() : null;
    return this.ba ? P(new W(null, 2, 5, X, [null, this.ka], null), a) : a
  }
  return null
};
n.I = f("h");
n.u = function(a, b) {
  return he(this, b)
};
n.s = function(a, b) {
  return new Fe(b, this.h, this.root, this.ba, this.ka, this.k)
};
n.r = f("i");
n.P = function() {
  return Eb(me, this.i)
};
n.ab = function(a, b) {
  if(null == b) {
    return this.ba ? new Fe(this.i, this.h - 1, this.root, !1, null, null) : this
  }
  if(null == this.root) {
    return this
  }
  if(y) {
    var c = this.root.pb(0, H(b), b);
    return c === this.root ? this : new Fe(this.i, this.h - 1, c, this.ba, this.ka, null)
  }
  return null
};
var me = new Fe(null, 0, null, !1, null, 0);
function rc(a, b) {
  for(var c = a.length, d = 0, e = Qb(me);;) {
    if(d < c) {
      var g = d + 1, e = e.bb(null, a[d], b[d]), d = g
    }else {
      return Sb(e)
    }
  }
}
function Ge(a, b, c, d, e) {
  this.t = a;
  this.root = b;
  this.count = c;
  this.ba = d;
  this.ka = e;
  this.o = 56;
  this.f = 258
}
n = Ge.prototype;
n.bb = function(a, b, c) {
  return He(this, b, c)
};
n.Ja = function(a, b) {
  var c;
  a: {
    if(this.t) {
      if(b ? b.f & 2048 || b.ad || (b.f ? 0 : x(sb, b)) : x(sb, b)) {
        c = He(this, Wc.a ? Wc.a(b) : Wc.call(null, b), Xc.a ? Xc.a(b) : Xc.call(null, b));
        break a
      }
      c = u(b);
      for(var d = this;;) {
        var e = I(c);
        if(v(e)) {
          c = N(c), d = He(d, Wc.a ? Wc.a(e) : Wc.call(null, e), Xc.a ? Xc.a(e) : Xc.call(null, e))
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
  if(this.t) {
    this.t = null, a = new Fe(null, this.count, this.root, this.ba, this.ka, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
n.N = function(a, b) {
  return null == b ? this.ba ? this.ka : null : null == this.root ? null : this.root.Ma(0, H(b), b)
};
n.O = function(a, b, c) {
  return null == b ? this.ba ? this.ka : c : null == this.root ? c : this.root.Ma(0, H(b), b, c)
};
n.I = function() {
  if(this.t) {
    return this.count
  }
  throw Error("count after persistent!");
};
function He(a, b, c) {
  if(a.t) {
    if(null == b) {
      a.ka !== c && (a.ka = c), a.ba || (a.count += 1, a.ba = !0)
    }else {
      var d = new qe;
      b = (null == a.root ? we : a.root).ua(a.t, 0, H(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Aa && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var Ie = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = t(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = u(a), e = Qb(me);;) {
      if(b) {
        a = N(N(b));
        var g = I(b), b = I(N(b)), e = Tb(e, g, b), b = a
      }else {
        return Sb(e)
      }
    }
  }
  a.l = 0;
  a.g = function(a) {
    a = u(a);
    return b(a)
  };
  a.e = b;
  return a
}(), Je = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = t(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new Na(null, Rc(R(a)), V.b($a, a), null)
  }
  a.l = 0;
  a.g = function(a) {
    a = u(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Ke(a, b) {
  this.Na = a;
  this.w = b;
  this.o = 0;
  this.f = 32374988
}
n = Ke.prototype;
n.C = function() {
  return kc(this)
};
n.ia = function() {
  var a = this.Na, a = (a ? a.f & 128 || a.rc || (a.f ? 0 : x(kb, a)) : x(kb, a)) ? this.Na.ia(null) : N(this.Na);
  return null == a ? null : new Ke(a, this.w)
};
n.K = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return oc.b(b, this)
};
n.Y = function(a, b, c) {
  return oc.c(b, c, this)
};
n.J = function() {
  return this
};
n.T = function() {
  return this.Na.T(null).cc()
};
n.Z = function() {
  var a = this.Na, a = (a ? a.f & 128 || a.rc || (a.f ? 0 : x(kb, a)) : x(kb, a)) ? this.Na.ia(null) : N(this.Na);
  return null != a ? new Ke(a, this.w) : K
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new Ke(this.Na, b)
};
n.r = f("w");
n.P = function() {
  return Q(K, this.w)
};
function Le(a) {
  return(a = u(a)) ? new Ke(a, null) : null
}
function Wc(a) {
  return tb(a)
}
function Xc(a) {
  return ub(a)
}
var Me = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = t(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return v(ud(vd, a)) ? B.b(function(a, b) {
      return pc.b(v(a) ? a : ne, b)
    }, a) : null
  }
  a.l = 0;
  a.g = function(a) {
    a = u(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Ne(a, b, c) {
  this.i = a;
  this.Ua = b;
  this.k = c;
  this.o = 4;
  this.f = 15077647
}
n = Ne.prototype;
n.ib = function() {
  return new Oe(Qb(this.Ua))
};
n.C = function() {
  var a = this.k;
  if(null != a) {
    return a
  }
  a: {
    for(var a = 0, b = u(this);;) {
      if(b) {
        var c = I(b), a = (a + H(c)) % 4503599627370496, b = N(b)
      }else {
        break a
      }
    }
    a = void 0
  }
  return this.k = a
};
n.N = function(a, b) {
  return mb.c(this, b, null)
};
n.O = function(a, b, c) {
  return ob(this.Ua, b) ? b : c
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
  return this.call.apply(this, [this].concat(Za(b)))
};
n.a = function(a) {
  return this.N(null, a)
};
n.b = function(a, b) {
  return this.O(null, a, b)
};
n.K = function(a, b) {
  return new Ne(this.i, U.c(this.Ua, b, null), null)
};
n.toString = function() {
  return $b(this)
};
n.J = function() {
  return Le(this.Ua)
};
n.sc = function(a, b) {
  return new Ne(this.i, rb(this.Ua, b), null)
};
n.I = function() {
  return cb(this.Ua)
};
n.u = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.f & 4096 || b.fe ? !0 : b.f ? !1 : x(wb, b) : x(wb, b)) && R(c) === R(b) && td(function(a) {
    return Lc(c, a)
  }, b)
};
n.s = function(a, b) {
  return new Ne(b, this.Ua, this.k)
};
n.r = f("i");
n.P = function() {
  return Q(Pe, this.i)
};
var Pe = new Ne(null, ne, 0);
function Qe(a) {
  var b = a.length;
  if(b <= le) {
    for(var c = 0, d = Qb(ne);;) {
      if(c < b) {
        var e = c + 1, d = Tb(d, a[c], null), c = e
      }else {
        return new Ne(null, Sb(d), null)
      }
    }
  }else {
    for(c = 0, d = Qb(Pe);;) {
      if(c < b) {
        e = c + 2, d = Rb(d, a[c]), c = e
      }else {
        return Sb(d)
      }
    }
  }
}
function Oe(a) {
  this.Ga = a;
  this.f = 259;
  this.o = 136
}
n = Oe.prototype;
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return mb.c(this.Ga, c, Hc) === Hc ? null : c;
      case 3:
        return mb.c(this.Ga, c, Hc) === Hc ? d : c
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Za(b)))
};
n.a = function(a) {
  return mb.c(this.Ga, a, Hc) === Hc ? null : a
};
n.b = function(a, b) {
  return mb.c(this.Ga, a, Hc) === Hc ? b : a
};
n.N = function(a, b) {
  return mb.c(this, b, null)
};
n.O = function(a, b, c) {
  return mb.c(this.Ga, b, Hc) === Hc ? c : b
};
n.I = function() {
  return R(this.Ga)
};
n.Ja = function(a, b) {
  this.Ga = Tb(this.Ga, b, null);
  return this
};
n.Qa = function() {
  return new Ne(null, Sb(this.Ga), null)
};
function bd(a) {
  if(a && (a.o & 4096 || a.cd)) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([A("Doesn't support name: "), A(a)].join(""));
}
var Re = function() {
  function a(a, b, c) {
    return(a.a ? a.a(b) : a.call(null, b)) > (a.a ? a.a(c) : a.call(null, c)) ? b : c
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var q = null;
      3 < arguments.length && (q = t(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, q)
    }
    function c(a, d, e, l) {
      return B.c(function(c, d) {
        return b.c(a, c, d)
      }, b.c(a, d, e), l)
    }
    a.l = 3;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
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
        return c.e(b, e, g, t(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.g = c.g;
  b.b = function(a, b) {
    return b
  };
  b.c = a;
  b.e = c.e;
  return b
}();
function Se(a, b, c, d, e) {
  this.i = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.k = e;
  this.o = 0;
  this.f = 32375006
}
n = Se.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = kc(this)
};
n.ia = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Se(this.i, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Se(this.i, this.start + this.step, this.end, this.step, null) : null
};
n.K = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return $b(this)
};
n.X = function(a, b) {
  return gc.b(this, b)
};
n.Y = function(a, b, c) {
  return gc.c(this, b, c)
};
n.J = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null
};
n.I = function() {
  return w(Kb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
n.T = f("start");
n.Z = function() {
  return null != Kb(this) ? new Se(this.i, this.start + this.step, this.end, this.step, null) : K
};
n.u = function(a, b) {
  return mc(this, b)
};
n.s = function(a, b) {
  return new Se(b, this.start, this.end, this.step, this.k)
};
n.r = f("i");
n.ga = function(a, b) {
  if(b < cb(this)) {
    return this.start + b * this.step
  }
  if(this.start > this.end && 0 === this.step) {
    return this.start
  }
  throw Error("Index out of bounds");
};
n.na = function(a, b, c) {
  return b < cb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c
};
n.P = function() {
  return Q(K, this.i)
};
var Te = function() {
  function a(a, b, c) {
    return new Se(null, a, b, c, null)
  }
  function b(a, b) {
    return e.c(a, b, 1)
  }
  function c(a) {
    return e.c(0, a, 1)
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, h);
      case 3:
        return a.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = d;
  e.a = c;
  e.b = b;
  e.c = a;
  return e
}(), Ue = function() {
  function a(a, b) {
    for(;;) {
      if(u(b) && 0 < a) {
        var c = a - 1, h = N(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(u(a)) {
        a = N(a)
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
  c.a = b;
  c.b = a;
  return c
}(), Ve = function() {
  function a(a, b) {
    Ue.b(a, b);
    return b
  }
  function b(a) {
    Ue.a(a);
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
  c.a = b;
  c.b = a;
  return c
}();
function We(a) {
  var b = Xe.exec(a);
  return F.b(I(b), a) ? 1 === R(b) ? I(b) : Wd(b) : null
}
function Ye(a) {
  a = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(a);
  a = null == a ? null : 1 === R(a) ? I(a) : Wd(a);
  S.c(a, 0, null);
  S.c(a, 1, null);
  S.c(a, 2, null)
}
function Ze(a, b, c, d, e, g, h) {
  E(a, c);
  u(h) && (b.c ? b.c(I(h), a, g) : b.call(null, I(h), a, g));
  c = N(h);
  for(h = Sa.a(g);c && (null == h || 0 !== h);) {
    E(a, d), b.c ? b.c(I(c), a, g) : b.call(null, I(c), a, g), c = N(c), h -= 1
  }
  v(Sa.a(g)) && (E(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
  return E(a, e)
}
var $e = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = t(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = u(b), g = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = g.ga(null, k);
        E(a, l);
        k += 1
      }else {
        if(e = u(e)) {
          g = e, Ec(g) ? (e = Wb(g), h = Xb(g), g = e, l = R(e), e = h, h = l) : (l = I(g), E(a, l), e = N(g), g = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.l = 1;
  a.g = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a)
  };
  a.e = b;
  return a
}(), af = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function bf(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return af[a]
  })), A('"')].join("")
}
var df = function cf(b, c, d) {
  if(null == b) {
    return E(c, "nil")
  }
  if(void 0 === b) {
    return E(c, "#\x3cundefined\x3e")
  }
  if(y) {
    v(function() {
      var c = T.b(d, Qa);
      return v(c) ? (c = b ? b.f & 131072 || b.bd ? !0 : b.f ? !1 : x(Bb, b) : x(Bb, b)) ? vc(b) : c : c
    }()) && (E(c, "^"), cf(vc(b), c, d), E(c, " "));
    if(null == b) {
      return E(c, "nil")
    }
    if(b.Ca) {
      return b.Ka(b, c, d)
    }
    if(b && (b.f & 2147483648 || b.R)) {
      return b.v(null, c, d)
    }
    if(Xa(b) === Boolean || "number" === typeof b) {
      return E(c, "" + A(b))
    }
    if(b instanceof Array) {
      return Ze(c, cf, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(da(b)) {
      return v(Pa.a(d)) ? E(c, bf(b)) : E(c, b)
    }
    if(tc(b)) {
      return $e.e(c, t(["#\x3c", "" + A(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + A(b);;) {
          if(R(d) < c) {
            d = [A("0"), A(d)].join("")
          }else {
            return d
          }
        }
      };
      return $e.e(c, t(['#inst "', "" + A(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return b instanceof RegExp ? $e.e(c, t(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.R || (b.f ? 0 : x(Ob, b)) : x(Ob, b)) ? Pb(b, c, d) : y ? $e.e(c, t(["#\x3c", "" + A(b), "\x3e"], 0)) : null
  }
  return null
};
function ef(a) {
  var b = Ma();
  if(zc(a)) {
    b = ""
  }else {
    var c = A, d = new Ia;
    a: {
      var e = new Zb(d);
      df(I(a), e, b);
      a = u(N(a));
      for(var g = null, h = 0, k = 0;;) {
        if(k < h) {
          var l = g.ga(null, k);
          E(e, " ");
          df(l, e, b);
          k += 1
        }else {
          if(a = u(a)) {
            g = a, Ec(g) ? (a = Wb(g), h = Xb(g), g = a, l = R(a), a = h, h = l) : (l = I(g), E(e, " "), df(l, e, b), a = N(g), g = null, h = 0), k = 0
          }else {
            break a
          }
        }
      }
    }
    b = "" + c(d)
  }
  return b
}
var ff = function() {
  function a(a) {
    var c = null;
    0 < arguments.length && (c = t(Array.prototype.slice.call(arguments, 0), 0));
    return ef(c)
  }
  a.l = 0;
  a.g = function(a) {
    a = u(a);
    return ef(a)
  };
  a.e = function(a) {
    return ef(a)
  };
  return a
}(), gf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = t(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    a = ef(a);
    Ka.a ? Ka.a(a) : Ka.call(null, a);
    v(La) ? (a = Ma(), Ka.a ? Ka.a("\n") : Ka.call(null, "\n"), a = (T.b(a, Oa), null)) : a = null;
    return a
  }
  a.l = 0;
  a.g = function(a) {
    a = u(a);
    return b(a)
  };
  a.e = b;
  return a
}();
Ke.prototype.R = !0;
Ke.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
fc.prototype.R = !0;
fc.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
Zd.prototype.R = !0;
Zd.prototype.v = function(a, b, c) {
  return Ze(b, df, "[", " ", "]", c, this)
};
id.prototype.R = !0;
id.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
Na.prototype.R = !0;
Na.prototype.v = function(a, b, c) {
  return Ze(b, function(a) {
    return Ze(b, df, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
de.prototype.R = !0;
de.prototype.v = function(a, b, c) {
  return Ze(b, df, "#queue [", " ", "]", c, u(this))
};
dd.prototype.R = !0;
dd.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
lc.prototype.R = !0;
lc.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
De.prototype.R = !0;
De.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
Xd.prototype.R = !0;
Xd.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
Fe.prototype.R = !0;
Fe.prototype.v = function(a, b, c) {
  return Ze(b, function(a) {
    return Ze(b, df, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
Ne.prototype.R = !0;
Ne.prototype.v = function(a, b, c) {
  return Ze(b, df, "#{", " ", "}", c, this)
};
W.prototype.R = !0;
W.prototype.v = function(a, b, c) {
  return Ze(b, df, "[", " ", "]", c, this)
};
Yc.prototype.R = !0;
Yc.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
je.prototype.R = !0;
je.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
Zc.prototype.R = !0;
Zc.prototype.v = function(a, b) {
  return E(b, "()")
};
ad.prototype.R = !0;
ad.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
Se.prototype.R = !0;
Se.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
Ee.prototype.R = !0;
Ee.prototype.v = function(a, b, c) {
  return Ze(b, df, "(", " ", ")", c, this)
};
W.prototype.ub = !0;
W.prototype.vb = function(a, b) {
  return Nc.b(this, b)
};
Zd.prototype.ub = !0;
Zd.prototype.vb = function(a, b) {
  return Nc.b(this, b)
};
Y.prototype.ub = !0;
Y.prototype.vb = function(a, b) {
  return ac(this, b)
};
G.prototype.ub = !0;
G.prototype.vb = function(a, b) {
  return ac(this, b)
};
function hf(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.ze = c;
  this.Ae = d;
  this.f = 2153938944;
  this.o = 2
}
n = hf.prototype;
n.C = function() {
  return this[fa] || (this[fa] = ++ga)
};
n.v = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  df(this.state, b, c);
  return E(b, "\x3e")
};
n.r = f("i");
n.Yc = f("state");
n.u = function(a, b) {
  return this === b
};
var kf = function() {
  function a(a) {
    return new hf(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = t(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = Ic(c) ? V.b(Ie, c) : c, e = T.b(d, jf), d = T.b(d, Qa);
      return new hf(a, d, e, null)
    }
    a.l = 1;
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
        return c.e(b, t(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}(), lf = {};
function mf(a, b) {
  if(a ? a.Zc : a) {
    return a.Zc(a, b)
  }
  var c;
  c = mf[p(null == a ? null : a)];
  if(!c && (c = mf._, !c)) {
    throw z("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var of = function() {
  function a(a) {
    return b.e(a, t([new Na(null, 1, [nf, !1], null)], 0))
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = t(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      if(a ? v(v(null) ? null : a.Zd) || (a.Lc ? 0 : x(lf, a)) : x(lf, a)) {
        return mf(a, V.b(Je, c))
      }
      if(u(c)) {
        var d = Ic(c) ? V.b(Ie, c) : c, e = T.b(d, nf);
        return function(a, b, c, d) {
          return function L(e) {
            return Ic(e) ? Ve.a(Ad.b(L, e)) : Ac(e) ? Gd(db(e), Ad.b(L, e)) : e instanceof Array ? Wd(Ad.b(L, e)) : Xa(e) === Object ? Gd(ne, function() {
              return function(a, b, c, d) {
                return function Jc(g) {
                  return new dd(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = u(g);
                        if(a) {
                          if(Ec(a)) {
                            var b = Wb(a), c = R(b), h = new fd(Array(c), 0);
                            a: {
                              for(var l = 0;;) {
                                if(l < c) {
                                  var k = D.b(b, l), k = new W(null, 2, 5, X, [d.a ? d.a(k) : d.call(null, k), L(e[k])], null);
                                  h.add(k);
                                  l += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? jd(h.ma(), Jc(Xb(a))) : jd(h.ma(), null)
                          }
                          h = I(a);
                          return P(new W(null, 2, 5, X, [d.a ? d.a(h) : d.call(null, h), L(e[h])], null), Jc(J(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d)(Fc(e))
            }()) : y ? e : null
          }
        }(c, d, e, v(e) ? cd : A)(a)
      }
      return null
    }
    a.l = 1;
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
        return c.e(b, t(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}();
function pf(a) {
  this.nc = a;
  this.o = 0;
  this.f = 2153775104
}
pf.prototype.C = function() {
  return ua(ff.e(t([this], 0)))
};
pf.prototype.v = function(a, b) {
  return E(b, [A('#uuid "'), A(this.nc), A('"')].join(""))
};
pf.prototype.u = function(a, b) {
  return b instanceof pf && this.nc === b.nc
};
var Ra = new Y(null, "dup", "dup"), cc = new Y(null, "default", "default"), qf = new Y(null, "prefixc", "prefixc"), rf = new Y(null, "reify-vars", "reify-vars"), sf = new Y(null, "eset", "eset"), tf = new Y("cljs.core.logic", "fd", "cljs.core.logic/fd"), uf = new Y("cljs.core.logic", "subst", "cljs.core.logic/subst"), vf = new Y("cljs.core.logic", "no-prop", "cljs.core.logic/no-prop"), nf = new Y(null, "keywordize-keys", "keywordize-keys"), wf = new Y("cljs.core.logic", "id", "cljs.core.logic/id"), 
Oa = new Y(null, "flush-on-newline", "flush-on-newline"), xf = new Y("cljs.core.logic", "strategy", "cljs.core.logic/strategy"), yf = new Y(null, "f", "f"), zf = new Y("cljs.core.logic", "ff", "cljs.core.logic/ff"), Af = new Y(null, "ansv*", "ansv*"), Bf = new Y(null, "cache", "cache"), Sa = new Y(null, "print-length", "print-length"), Cf = new Y("cljs.core.logic", "root", "cljs.core.logic/root"), y = new Y(null, "else", "else"), Pa = new Y(null, "readably", "readably"), jf = new Y(null, "validator", 
"validator"), Qa = new Y(null, "meta", "meta"), Df = new Y(null, "v", "v"), Ef = new Y("cljs.core.logic", "unbound", "cljs.core.logic/unbound"), Ff = new Y(null, "doms", "doms");
var Gf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = t(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e)
  }
  function b(a, b) {
    throw Error(V.b(A, b));
  }
  a.l = 1;
  a.g = function(a) {
    I(a);
    a = J(a);
    return b(0, a)
  };
  a.e = b;
  return a
}();
Ye("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
Ye("([-+]?[0-9]+)/([0-9]+)");
Ye("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
Ye("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
Ye("[0-9A-Fa-f]{2}");
Ye("[0-9A-Fa-f]{4}");
function Hf(a) {
  if(F.b(3, R(a))) {
    return a
  }
  if(3 < R(a)) {
    return Uc.c(a, 0, 3)
  }
  if(y) {
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
var If = function() {
  var a = new W(null, 13, 5, X, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new W(null, 13, 5, X, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return T.b(v(d) ? b : a, c)
  }
}(), Xe = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Jf(a) {
  a = parseInt(a);
  return w(isNaN(a)) ? a : null
}
function Kf(a, b, c, d) {
  a <= b && b <= c || Gf.e(null, t([[A(d), A(" Failed:  "), A(a), A("\x3c\x3d"), A(b), A("\x3c\x3d"), A(c)].join("")], 0));
  return b
}
function Lf(a) {
  var b = We(a);
  S.c(b, 0, null);
  var c = S.c(b, 1, null), d = S.c(b, 2, null), e = S.c(b, 3, null), g = S.c(b, 4, null), h = S.c(b, 5, null), k = S.c(b, 6, null), l = S.c(b, 7, null), q = S.c(b, 8, null), s = S.c(b, 9, null), r = S.c(b, 10, null);
  if(w(b)) {
    return Gf.e(null, t([[A("Unrecognized date/time syntax: "), A(a)].join("")], 0))
  }
  a = Jf(c);
  var b = function() {
    var a = Jf(d);
    return v(a) ? a : 1
  }(), c = function() {
    var a = Jf(e);
    return v(a) ? a : 1
  }(), C = function() {
    var a = Jf(g);
    return v(a) ? a : 0
  }(), M = function() {
    var a = Jf(h);
    return v(a) ? a : 0
  }(), L = function() {
    var a = Jf(k);
    return v(a) ? a : 0
  }(), O = function() {
    var a = Jf(Hf(l));
    return v(a) ? a : 0
  }(), q = (F.b(q, "-") ? -1 : 1) * (60 * function() {
    var a = Jf(s);
    return v(a) ? a : 0
  }() + function() {
    var a = Jf(r);
    return v(a) ? a : 0
  }());
  return new W(null, 8, 5, X, [a, Kf(1, b, 12, "timestamp month field must be in range 1..12"), Kf(1, c, If.b ? If.b(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : If.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), Kf(0, C, 23, "timestamp hour field must be in range 0..23"), Kf(0, M, 59, "timestamp minute field must be in range 0..59"), Kf(0, 
  L, F.b(M, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Kf(0, O, 999, "timestamp millisecond field must be in range 0..999"), q], null)
}
kf.a(new Na(null, 3, ["inst", function(a) {
  var b;
  if("string" === typeof a) {
    if(b = Lf(a), v(b)) {
      a = S.c(b, 0, null);
      var c = S.c(b, 1, null), d = S.c(b, 2, null), e = S.c(b, 3, null), g = S.c(b, 4, null), h = S.c(b, 5, null), k = S.c(b, 6, null);
      b = S.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, g, h, k) - 6E4 * b)
    }else {
      b = Gf.e(null, t([[A("Unrecognized date/time syntax: "), A(a)].join("")], 0))
    }
  }else {
    b = Gf.e(null, t(["Instance literal expects a string for its timestamp."], 0))
  }
  return b
}, "uuid", function(a) {
  return"string" === typeof a ? new pf(a) : Gf.e(null, t(["UUID literal expects a string as its representation."], 0))
}, "queue", function(a) {
  return Dc(a) ? Gd(ee, a) : Gf.e(null, t(["Queue literal expects a vector for its elements."], 0))
}], null));
kf.a(null);
var Mf, Nf, Of, Pf;
function Qf() {
  return ba.navigator ? ba.navigator.userAgent : null
}
Pf = Of = Nf = Mf = !1;
var Rf;
if(Rf = Qf()) {
  var Sf = ba.navigator;
  Mf = 0 == Rf.indexOf("Opera");
  Nf = !Mf && -1 != Rf.indexOf("MSIE");
  Of = !Mf && -1 != Rf.indexOf("WebKit");
  Pf = !Mf && !Of && "Gecko" == Sf.product
}
var Tf = Mf, Uf = Nf, Vf = Pf, Wf = Of;
function Xf() {
  var a = ba.document;
  return a ? a.documentMode : void 0
}
var Yf;
a: {
  var Zf = "", $f;
  if(Tf && ba.opera) {
    var ag = ba.opera.version, Zf = "function" == typeof ag ? ag() : ag
  }else {
    if(Vf ? $f = /rv\:([^\);]+)(\)|;)/ : Uf ? $f = /MSIE\s+([^\);]+)(\)|;)/ : Wf && ($f = /WebKit\/(\S+)/), $f) {
      var bg = $f.exec(Qf()), Zf = bg ? bg[1] : ""
    }
  }
  if(Uf) {
    var cg = Xf();
    if(cg > parseFloat(Zf)) {
      Yf = String(cg);
      break a
    }
  }
  Yf = Zf
}
var dg = {};
function eg(a) {
  var b;
  if(!(b = dg[a])) {
    b = 0;
    for(var c = String(Yf).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(h) || ["", "", ""], r = q.exec(k) || ["", "", ""];
        if(0 == s[0].length && 0 == r[0].length) {
          break
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == r[2].length) ? -1 : (0 == s[2].length) > (0 == r[2].length) ? 1 : 0) || (s[2] < r[2] ? -1 : s[2] > r[2] ? 1 : 0)
      }while(0 == b)
    }
    b = dg[a] = 0 <= b
  }
  return b
}
var fg = ba.document, gg = fg && Uf ? Xf() || ("CSS1Compat" == fg.compatMode ? parseInt(Yf, 10) : 5) : void 0;
function hg() {
  0 != ig && (this.ne = Error().stack, this[fa] || (this[fa] = ++ga))
}
var ig = 0;
Uf && eg("9");
!Wf || eg("528");
Vf && eg("1.9b") || Uf && eg("8") || Tf && eg("9.5") || Wf && eg("528");
Vf && !eg("8") || Uf && eg("9");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var jg, kg = !Vf && !Uf || Uf && Uf && 9 <= gg || Vf && eg("1.9.1");
Uf && eg("9");
function lg(a, b, c) {
  function d(c) {
    c && b.appendChild(da(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var g = c[e];
    !ca(g) || ea(g) && 0 < g.nodeType ? d(g) : Ba(mg(g) ? Da(g) : g, d)
  }
}
function mg(a) {
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
function ng(a) {
  this.nd = a || ba.document || document
}
ng.prototype.createTextNode = function(a) {
  return this.nd.createTextNode(String(a))
};
ng.prototype.appendChild = function(a, b) {
  a.appendChild(b)
};
ng.prototype.append = function(a, b) {
  lg(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
};
ng.prototype.Oc = function(a) {
  return kg && void 0 != a.children ? a.children : Ca(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
function og(a) {
  return pg(a || arguments.callee.caller, [])
}
function pg(a, b) {
  var c = [];
  if(0 <= Aa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(qg(a) + "(");
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
            g = (g = qg(g)) ? g : "[fn]";
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
        c.push(pg(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function qg(a) {
  if(rg[a]) {
    return rg[a]
  }
  a = String(a);
  if(!rg[a]) {
    var b = /function ([^\(]+)/.exec(a);
    rg[a] = b ? b[1] : "[Anonymous]"
  }
  return rg[a]
}
var rg = {};
function sg(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
sg.prototype.xd = 0;
sg.prototype.Nc = null;
sg.prototype.Mc = null;
var tg = 0;
sg.prototype.reset = function(a, b, c, d, e) {
  this.xd = "number" == typeof e ? e : tg++;
  this.xe = d || ka();
  this.qb = a;
  this.ud = b;
  this.qe = c;
  delete this.Nc;
  delete this.Mc
};
sg.prototype.Rc = function(a) {
  this.qb = a
};
function ug(a) {
  this.vd = a
}
ug.prototype.Hb = null;
ug.prototype.qb = null;
ug.prototype.Kb = null;
ug.prototype.Pc = null;
function vg(a, b) {
  this.name = a;
  this.value = b
}
vg.prototype.toString = f("name");
var wg = new vg("INFO", 800), xg = new vg("CONFIG", 700);
n = ug.prototype;
n.getParent = f("Hb");
n.Oc = function() {
  this.Kb || (this.Kb = {});
  return this.Kb
};
n.Rc = function(a) {
  this.qb = a
};
function yg(a) {
  if(a.qb) {
    return a.qb
  }
  if(a.Hb) {
    return yg(a.Hb)
  }
  xa("Root logger has no level set.");
  return null
}
n.log = function(a, b, c) {
  if(a.value >= yg(this).value) {
    for(a = this.od(a, b, c), b = "log:" + a.ud, ba.console && (ba.console.timeStamp ? ba.console.timeStamp(b) : ba.console.markTimeline && ba.console.markTimeline(b)), ba.msWriteProfilerMark && ba.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if(c.Pc) {
        for(var e = 0, g = void 0;g = c.Pc[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
n.od = function(a, b, c) {
  var d = new sg(a, String(b), this.vd);
  if(c) {
    d.Nc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var k;
      c: {
        for(var l = ["window", "location", "href"], q = ba, s;s = l.shift();) {
          if(null != q[s]) {
            q = q[s]
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
        var r, C, l = !1;
        try {
          r = c.lineNumber || c.pe || "Not available"
        }catch(M) {
          r = "Not available", l = !0
        }
        try {
          C = c.fileName || c.filename || c.sourceURL || ba.$googDebugFname || k
        }catch(L) {
          C = "Not available", l = !0
        }
        h = !l && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:r, fileName:C, stack:c.stack || "Not available"}
      }
      e = "Message: " + oa(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + oa(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + oa(og(g) + "-\x3e ")
    }catch(O) {
      e = "Exception trying to expose exception! You win, we lose. " + O
    }
    d.Mc = e
  }
  return d
};
n.info = function(a, b) {
  this.log(wg, a, b)
};
var zg = {}, Ag = null;
function Bg(a) {
  Ag || (Ag = new ug(""), zg[""] = Ag, Ag.Rc(xg));
  var b;
  if(!(b = zg[a])) {
    b = new ug(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Bg(a.substr(0, c));
    c.Oc()[d] = b;
    b.Hb = c;
    zg[a] = b
  }
  return b
}
;Bg("goog.messaging.AbstractChannel");
var Cg = {Bd:"cn", Ad:"at", Pd:"rat", Ld:"pu", Ed:"ifrid", Sd:"tp", Gd:"lru", Kd:"pru", Sc:"lpu", Tc:"ppu", Jd:"ph", Id:"osh", Qd:"role", Hd:"nativeProtocolVersion"}, Dg = Bg("goog.net.xpc");
function Eg(a) {
  hg.call(this);
  this.oe = a || jg || (jg = new ng)
}
la(Eg, hg);
function Fg(a, b) {
  Eg.call(this, b);
  this.Jb = a;
  this.ve = this.Jb.Uc[Cg.Tc];
  this.te = this.Jb.Uc[Cg.Sc];
  this.ue = []
}
var Gg;
la(Fg, Eg);
var Hg = [], Ig = ja(function() {
  var a, b = !1;
  try {
    for(var c = 0;a = Hg[c];c++) {
      var d;
      if(!(d = b)) {
        var e = a, g = e.se.location.href;
        if(g != e.md) {
          e.md = g;
          var h = g.split("#")[1];
          h && (h = h.substr(1), e.Ud(decodeURIComponent(h)));
          d = !0
        }else {
          d = !1
        }
      }
      b = d
    }
  }catch(k) {
    if(Dg.info("receive_() failed: " + k), a = a.ye.Jb, Dg.info("Transport Error"), a.close(), !Hg.length) {
      return
    }
  }
  a = ka();
  b && (Gg = a);
  window.setTimeout(Ig, 1E3 > a - Gg ? 10 : 100)
}, Fg);
Bg("goog.net.XhrIo");
Gd(ne, Ad.b(function(a) {
  var b = S.c(a, 0, null);
  a = S.c(a, 1, null);
  return new W(null, 2, 5, X, [cd.a(b.toLowerCase()), a], null)
}, Me.e(t([of.a({Cd:"complete", Rd:"success", Dd:"error", zd:"abort", Nd:"ready", Od:"readystatechange", TIMEOUT:"timeout", Fd:"incrementaldata", Md:"progress"})], 0))));
Gd(ne, Ad.b(function(a) {
  var b = S.c(a, 0, null);
  a = S.c(a, 1, null);
  return new W(null, 2, 5, X, [cd.a(b.toLowerCase()), a], null)
}, of.a(Cg)));
kf.a(null);
kf.a(0);
function Jg(a, b) {
  var c = V.c(Re, a, b);
  return P(c, Fd(wd(function(a) {
    return c === a
  }), b))
}
var Kg = function() {
  function a(a, b) {
    return R(a) < R(b) ? B.c(pc, b, a) : B.c(pc, a, b)
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = t(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l)
    }
    function b(a, c, d) {
      a = Jg(R, pc.e(d, c, t([a], 0)));
      return B.c(Gd, I(a), J(a))
    }
    a.l = 2;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 0:
        return Pe;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, t(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.j = function() {
    return Pe
  };
  b.a = aa();
  b.b = a;
  b.e = c.e;
  return b
}(), Lg = function() {
  function a(a, b) {
    return R(a) < R(b) ? B.c(function(a, c) {
      return Lc(b, c) ? wc.b(a, c) : a
    }, a, a) : B.c(wc, a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = t(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      return B.c(b, a, pc.b(e, d))
    }
    a.l = 2;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
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
        return c.e(b, e, t(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.a = aa();
  b.b = a;
  b.e = c.e;
  return b
}();
var Mg = {}, Ng, Og, Pg;
function Qg(a, b, c) {
  if(a ? a.kb : a) {
    return a.kb(a, b, c)
  }
  var d;
  d = Qg[p(null == a ? null : a)];
  if(!d && (d = Qg._, !d)) {
    throw z("IUnifyTerms.-unify-terms", a);
  }
  return d.call(null, a, b, c)
}
function Rg(a, b, c) {
  if(a ? a.Hc : a) {
    return a.Hc(0, b, c)
  }
  var d;
  d = Rg[p(null == a ? null : a)];
  if(!d && (d = Rg._, !d)) {
    throw z("IUnifyWithNil.-unify-with-nil", a);
  }
  return d.call(null, a, b, c)
}
function Sg(a, b, c) {
  if(a ? a.Ic : a) {
    return a.Ic(0, b, c)
  }
  var d;
  d = Sg[p(null == a ? null : a)];
  if(!d && (d = Sg._, !d)) {
    throw z("IUnifyWithObject.-unify-with-object", a);
  }
  return d.call(null, a, b, c)
}
function Tg(a, b, c) {
  if(a ? a.Jc : a) {
    return a.Jc(0, b, c)
  }
  var d;
  d = Tg[p(null == a ? null : a)];
  if(!d && (d = Tg._, !d)) {
    throw z("IUnifyWithSequential.-unify-with-seq", a);
  }
  return d.call(null, a, b, c)
}
function Ug(a, b, c) {
  if(a ? a.lb : a) {
    return a.lb(a, b, c)
  }
  var d;
  d = Ug[p(null == a ? null : a)];
  if(!d && (d = Ug._, !d)) {
    throw z("IUnifyWithMap.-unify-with-map", a);
  }
  return d.call(null, a, b, c)
}
function Vg(a, b) {
  if(a ? a.Bc : a) {
    return a.Bc(0, b)
  }
  var c;
  c = Vg[p(null == a ? null : a)];
  if(!c && (c = Vg._, !c)) {
    throw z("IReifyTerm.-reify-term", a);
  }
  return c.call(null, a, b)
}
function Wg(a, b) {
  if(a ? a.eb : a) {
    return a.eb(a, b)
  }
  var c;
  c = Wg[p(null == a ? null : a)];
  if(!c && (c = Wg._, !c)) {
    throw z("IWalkTerm.-walk-term", a);
  }
  return c.call(null, a, b)
}
function Xg(a, b, c) {
  if(a ? a.Ac : a) {
    return a.Ac(0, b, c)
  }
  var d;
  d = Xg[p(null == a ? null : a)];
  if(!d && (d = Xg._, !d)) {
    throw z("IOccursCheckTerm.-occurs-check-term", a);
  }
  return d.call(null, a, b, c)
}
function Yg(a, b) {
  if(a ? a.Ra : a) {
    return a.Ra(a, b)
  }
  var c;
  c = Yg[p(null == a ? null : a)];
  if(!c && (c = Yg._, !c)) {
    throw z("IBind.-bind", a);
  }
  return c.call(null, a, b)
}
var Zg = {};
function $g(a, b) {
  if(a ? a.cb : a) {
    return a.cb(a, b)
  }
  var c;
  c = $g[p(null == a ? null : a)];
  if(!c && (c = $g._, !c)) {
    throw z("IMPlus.-mplus", a);
  }
  return c.call(null, a, b)
}
function ah(a) {
  if(a ? a.gd : a) {
    return a.gd(a)
  }
  var b;
  b = ah[p(null == a ? null : a)];
  if(!b && (b = ah._, !b)) {
    throw z("IMemberCount.-member-count", a);
  }
  return b.call(null, a)
}
var bh = {}, ch, dh = Te.a(100);
a: {
  for(var eh = Ad.c(yd.b(ec, A), Dd.a("_"), dh), fh = Qb(ne), gh = u(dh), hh = u(eh);;) {
    if(gh && hh) {
      var ih, jh = I(gh), kh = I(hh);
      ih = Tb(fh, jh, kh);
      var lh = N(gh), mh = N(hh), fh = ih, gh = lh, hh = mh
    }else {
      ch = Sb(fh);
      break a
    }
  }
  ch = void 0
}
function nh(a) {
  return a ? a.f & 67108864 || a.be ? !0 : !1 : !1
}
function oh(a) {
  var b = $.a ? $.a(a) : $.call(null, a);
  return v(b) ? b : a ? v(v(null) ? null : a.ie) ? !0 : !1 : !1
}
function ph(a, b, c, d, e) {
  this.F = a;
  this.ea = b;
  this.aa = c;
  this.G = d;
  this.q = e;
  this.o = 0;
  this.f = 2229667594;
  3 < arguments.length ? (this.G = d, this.q = e) : this.q = this.G = null
}
n = ph.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Vc(this)
};
n.N = function(a, b) {
  return mb.c(this, b, null)
};
n.O = function(a, b, c) {
  return Z(b, Df) ? this.F : Z(b, Ff) ? this.ea : Z(b, sf) ? this.aa : y ? T.c(this.q, b, c) : null
};
n.Ia = function(a, b, c) {
  return v(Z.b ? Z.b(Df, b) : Z.call(null, Df, b)) ? new ph(c, this.ea, this.aa, this.G, this.q, null) : v(Z.b ? Z.b(Ff, b) : Z.call(null, Ff, b)) ? new ph(this.F, c, this.aa, this.G, this.q, null) : v(Z.b ? Z.b(sf, b) : Z.call(null, sf, b)) ? new ph(this.F, this.ea, c, this.G, this.q, null) : new ph(this.F, this.ea, this.aa, this.G, U.c(this.q, b, c), null)
};
n.v = function(a, b, c) {
  return Ze(b, function(a) {
    return Ze(b, df, "", " ", "", c, a)
  }, "#cljs.core.logic.SubstValue{", ", ", "}", c, nd.b(new W(null, 3, 5, X, [new W(null, 2, 5, X, [Df, this.F], null), new W(null, 2, 5, X, [Ff, this.ea], null), new W(null, 2, 5, X, [sf, this.aa], null)], null), this.q))
};
n.K = function(a, b) {
  return Dc(b) ? pb(this, D.b(b, 0), D.b(b, 1)) : B.c(fb, this, b)
};
n.toString = function() {
  return"" + A(this.F)
};
n.J = function() {
  return u(nd.b(new W(null, 3, 5, X, [new W(null, 2, 5, X, [Df, this.F], null), new W(null, 2, 5, X, [Ff, this.ea], null), new W(null, 2, 5, X, [sf, this.aa], null)], null), this.q))
};
n.I = function() {
  return 3 + R(this.q)
};
n.u = function(a, b) {
  return v(v(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1
};
n.s = function(a, b) {
  return new ph(this.F, this.ea, this.aa, b, this.q, this.k)
};
n.r = f("G");
n.ab = function(a, b) {
  return Lc(new Ne(null, new Na(null, 3, [sf, null, Df, null, Ff, null], null), null), b) ? sc.b(Q(Gd(ne, this), this.G), b) : new ph(this.F, this.ea, this.aa, this.G, sd(sc.b(this.q, b)), null)
};
function qh(a) {
  return a instanceof ph
}
var rh = function() {
  function a(a, b, c, d) {
    return Q(new ph(a, b, c), d)
  }
  function b(a, b, c) {
    return Q(new ph(a, b, null), c)
  }
  function c(a, b) {
    return new ph(a, b, null)
  }
  function d(a) {
    return new ph(a, null, null)
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
  e.a = d;
  e.b = c;
  e.c = b;
  e.p = a;
  return e
}();
function sh(a, b) {
  return Gd(Vd, Fd($, Ad.b(function(b) {
    return th.b ? th.b(a, b) : th.call(null, a, b)
  }, uh.a ? uh.a(b) : uh.call(null, b))))
}
function vh(a, b) {
  return Fd(function(b) {
    return $.a ? $.a(wh.b ? wh.b(a, b) : wh.call(null, a, b)) : $.call(null, wh.b ? wh.b(a, b) : wh.call(null, a, b))
  }, sh(a, b))
}
function xh(a, b, c) {
  if(a ? a.vc : a) {
    return a.vc(0, b, c)
  }
  var d;
  d = xh[p(null == a ? null : a)];
  if(!d && (d = xh._, !d)) {
    throw z("IConstraintStore.-addc", a);
  }
  return d.call(null, a, b, c)
}
function yh(a, b, c) {
  if(a ? a.yc : a) {
    return a.yc(0, b, c)
  }
  var d;
  d = yh[p(null == a ? null : a)];
  if(!d && (d = yh._, !d)) {
    throw z("IConstraintStore.-remc", a);
  }
  return d.call(null, a, b, c)
}
function zh(a, b, c) {
  if(a ? a.zc : a) {
    return a.zc(0, b, c)
  }
  var d;
  d = zh[p(null == a ? null : a)];
  if(!d && (d = zh._, !d)) {
    throw z("IConstraintStore.-runc", a);
  }
  return d.call(null, a, b, c)
}
function Ah(a, b, c, d) {
  if(a ? a.wc : a) {
    return a.wc(0, b, c, d)
  }
  var e;
  e = Ah[p(null == a ? null : a)];
  if(!e && (e = Ah._, !e)) {
    throw z("IConstraintStore.-constraints-for", a);
  }
  return e.call(null, a, b, c, d)
}
function Bh(a, b, c) {
  if(a ? a.xc : a) {
    return a.xc(0, b, c)
  }
  var d;
  d = Bh[p(null == a ? null : a)];
  if(!d && (d = Bh._, !d)) {
    throw z("IConstraintStore.-migrate", a);
  }
  return d.call(null, a, b, c)
}
function Ch(a, b) {
  if(a ? a.ld : a) {
    return a.ld(a, b)
  }
  var c;
  c = Ch[p(null == a ? null : a)];
  if(!c && (c = Ch._, !c)) {
    throw z("IWithConstraintId.-with-id", a);
  }
  return c.call(null, a, b)
}
function Dh(a) {
  if(a ? a.ed : a) {
    return a.ed(a)
  }
  var b;
  b = Dh[p(null == a ? null : a)];
  if(!b && (b = Dh._, !b)) {
    throw z("IConstraintId.-id", a);
  }
  return b.call(null, a)
}
function Eh(a) {
  return a && v(v(null) ? null : a.je) ? Dh(a) : wf.a(vc(a))
}
function Fh(a, b, c, d) {
  this.ja = a;
  this.Da = b;
  this.Ha = c;
  this.Wa = d;
  this.o = 0;
  this.f = 2
}
n = Fh.prototype;
n.I = function() {
  return R(this.Da)
};
n.vc = function(a, b, c) {
  a = sh(b, c);
  c = c && v(v(null) ? null : c.me) ? Ch(c, this.Ha) : qd.e(c, U, t([wf, this.Ha], 0));
  c = B.c(function(a, b) {
    return function(a, c) {
      return Gh.c ? Gh.c(a, c, b) : Gh.call(null, a, c, b)
    }
  }(a, c), this, a);
  return new Fh(c.ja, c.Da, this.Ha + 1, this.Wa)
};
n.yc = function(a, b, c) {
  a = sh(b, c);
  c = Eh(c);
  a = B.c(function(a, b) {
    return function(a, c) {
      var d = wc.b(T.b(a, c), b);
      return zc(d) ? sc.b(a, c) : U.c(a, c, d)
    }
  }(a, c), this.ja, a);
  c = sc.b(this.Da, c);
  return new Fh(a, c, this.Ha, this.Wa)
};
n.zc = function(a, b, c) {
  return v(c) ? new Fh(this.ja, this.Da, this.Ha, pc.b(this.Wa, Eh(b))) : new Fh(this.ja, this.Da, this.Ha, wc.b(this.Wa, Eh(b)))
};
n.wc = function(a, b, c, d) {
  a = T.b(this.ja, th.b ? th.b(b, c) : th.call(null, b, c));
  return v(a) ? Fd(function(a) {
    return(Hh.a ? Hh.a(a) : Hh.call(null, a)).call(null, d)
  }, Ad.b(this.Da, Fd(wd(this.Wa), a))) : null
};
n.xc = function(a, b, c) {
  a = this.ja.a ? this.ja.a(b) : this.ja.call(null, b);
  var d = this.ja.b ? this.ja.b(c, Pe) : this.ja.call(null, c, Pe);
  b = U.c(sc.b(this.ja, b), c, Gd(d, a));
  return new Fh(b, this.Da, this.Ha, this.Wa)
};
function Gh(a, b, c) {
  if(!v($.a ? $.a(b) : $.call(null, b))) {
    throw Error([A("constraint store assoc expected logic var key: "), A(b)].join(""));
  }
  var d = a.Da, e = a.ja, g = a.Ha;
  b = Hd.c(e, new W(null, 1, 5, X, [b], null), zd.b(function(a, b, c) {
    return function(a) {
      return pc.b(a, c)
    }
  }(d, e, g), Pe));
  c = U.c(d, g, c);
  return new Fh(b, c, g, a.Wa)
}
function Ih() {
  return new Fh(ne, ne, 0, Pe)
}
function Jh(a, b, c) {
  if(a ? a.ic : a) {
    return a.ic(0, b, c)
  }
  var d;
  d = Jh[p(null == a ? null : a)];
  if(!d && (d = Jh._, !d)) {
    throw z("ISubstitutions.-occurs-check", a);
  }
  return d.call(null, a, b, c)
}
function Kh(a, b, c) {
  if(a ? a.Sa : a) {
    return a.Sa(0, b, c)
  }
  var d;
  d = Kh[p(null == a ? null : a)];
  if(!d && (d = Kh._, !d)) {
    throw z("ISubstitutions.-ext", a);
  }
  return d.call(null, a, b, c)
}
function Lh(a, b, c) {
  if(a ? a.hc : a) {
    return a.hc(0, b, c)
  }
  var d;
  d = Lh[p(null == a ? null : a)];
  if(!d && (d = Lh._, !d)) {
    throw z("ISubstitutions.-ext-no-check", a);
  }
  return d.call(null, a, b, c)
}
function Mh(a, b) {
  if(a ? a.kc : a) {
    return a.kc(0, b)
  }
  var c;
  c = Mh[p(null == a ? null : a)];
  if(!c && (c = Mh._, !c)) {
    throw z("ISubstitutions.-walk", a);
  }
  return c.call(null, a, b)
}
function Nh(a, b, c) {
  if(a ? a.jc : a) {
    return a.jc(0, b, c)
  }
  var d;
  d = Nh[p(null == a ? null : a)];
  if(!d && (d = Nh._, !d)) {
    throw z("ISubstitutions.-unify", a);
  }
  return d.call(null, a, b, c)
}
function wh(a, b) {
  if(a ? a.Ec : a) {
    return a.Ec(0, b)
  }
  var c;
  c = wh[p(null == a ? null : a)];
  if(!c && (c = wh._, !c)) {
    throw z("ISubstitutionsCLP.-root-val", a);
  }
  return c.call(null, a, b)
}
function th(a, b) {
  if(a ? a.lc : a) {
    return a.lc(0, b)
  }
  var c;
  c = th[p(null == a ? null : a)];
  if(!c && (c = th._, !c)) {
    throw z("ISubstitutionsCLP.-root-var", a);
  }
  return c.call(null, a, b)
}
function Oh(a, b, c) {
  if(a ? a.Cc : a) {
    return a.Cc(0, b, c)
  }
  var d;
  d = Oh[p(null == a ? null : a)];
  if(!d && (d = Oh._, !d)) {
    throw z("ISubstitutionsCLP.-ext-run-cs", a);
  }
  return d.call(null, a, b, c)
}
function Ph(a, b) {
  if(a ? a.Dc : a) {
    return a.Dc(0, b)
  }
  var c;
  c = Ph[p(null == a ? null : a)];
  if(!c && (c = Ph._, !c)) {
    throw z("ISubstitutionsCLP.-queue", a);
  }
  return c.call(null, a, b)
}
function Qh(a, b, c) {
  if(a ? a.Fc : a) {
    return a.Fc(0, b, c)
  }
  var d;
  d = Qh[p(null == a ? null : a)];
  if(!d && (d = Qh._, !d)) {
    throw z("ISubstitutionsCLP.-update-var", a);
  }
  return d.call(null, a, b, c)
}
function Rh(a, b, c, d, e, g, h, k) {
  this.m = a;
  this.da = b;
  this.W = c;
  this.D = d;
  this.V = e;
  this.Q = g;
  this.U = h;
  this.w = k;
  this.o = 0;
  this.f = 2149974018
}
n = Rh.prototype;
n.kc = function(a, b) {
  if(v(oh.a ? oh.a(b) : oh.call(null, b))) {
    for(var c = b, d = Mc(this.m, b);;) {
      if(null == d) {
        return c
      }
      c = tb(d);
      d = ub(d);
      if(w(oh.a ? oh.a(d) : oh.call(null, d))) {
        if(qh(d)) {
          var e = d.F;
          return Z(e, Ef) ? Q(c, U.c(vc(d), Ef, !0)) : e
        }
        return d
      }
      c = d;
      d = Mc(this.m, d)
    }
  }else {
    return b
  }
};
n.kd = function(a) {
  a = Mh(this, a);
  return Vg(a, this)
};
function Sh(a) {
  var b = R(a.m);
  return 100 > b ? ch.a ? ch.a(b) : ch.call(null, b) : ec.a([A("_"), A(R(a.m))].join(""))
}
n.jc = function(a, b, c) {
  if(b === c) {
    return this
  }
  var d = Mh(this, b), e = Mh(this, c);
  return v(function() {
    var a = $.a ? $.a(d) : $.call(null, d);
    return v(a) ? F.b(d, e) : a
  }()) ? this : v(function() {
    var a = w($.a ? $.a(d) : $.call(null, d));
    return a ? $.a ? $.a(e) : $.call(null, e) : a
  }()) ? Qg(e, d, this) : Qg(d, e, this)
};
n.Sa = function(a, b, c) {
  return Jh(this, b, qh(c) ? c.F : c) ? null : Lh(this, b, c)
};
n.hc = function(a, b, c) {
  a = w($.a ? $.a(c) : $.call(null, c)) ? Q(b, U.c(vc(b), Cf, !0)) : b;
  return new Rh(U.c(this.m, a, c), v(this.da) ? pc.b(this.da, a) : null, this.W, this.D, this.V, this.Q, this.U, this.w)
};
n.ic = function(a, b, c) {
  a = Mh(this, c);
  return Xg(a, b, this)
};
n.Ra = function(a, b) {
  return b.a ? b.a(this) : b.call(null, this)
};
n.Ec = function(a, b) {
  if(v($.a ? $.a(b) : $.call(null, b))) {
    var c = Mc(this.m, b);
    S.c(c, 0, null);
    S.c(c, 1, null);
    for(var d = b;;) {
      var e = c;
      S.c(e, 0, null);
      c = S.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(w($.a ? $.a(c) : $.call(null, c))) {
        return c
      }
      if(y) {
        d = c, c = Mc(this.m, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
n.lc = function(a, b) {
  if(v($.a ? $.a(b) : $.call(null, b))) {
    if(v(Cf.a(vc(b)))) {
      return b
    }
    var c = Mc(this.m, b);
    S.c(c, 0, null);
    S.c(c, 1, null);
    for(var d = b;;) {
      var e = c, g = S.c(e, 0, null), c = S.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(w($.a ? $.a(c) : $.call(null, c))) {
        return qh(c) ? Q(g, vc(c)) : g
      }
      if(y) {
        d = c, c = Mc(this.m, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
n.Cc = function(a, b, c) {
  b = th(this, b);
  a = v($.a ? $.a(c) : $.call(null, c)) ? new W(null, 2, 5, X, [b, th(this, c)], null) : new W(null, 1, 5, X, [b], null);
  c = v(this.U) ? Kh(this, b, c) : Lh(this, b, c);
  return v(c) ? (Th.c ? Th.c(a, this.D, uf) : Th.call(null, a, this.D, uf)).call(null, c) : null
};
n.Dc = function(a, b) {
  var c = Eh(b);
  if(w(this.Q.a ? this.Q.a(c) : this.Q.call(null, c))) {
    var d = this.V, c = new Rh(this.m, this.da, this.W, this.D, pc.b(v(d) ? d : Vd, b), pc.b(this.Q, c), this.U, this.w)
  }else {
    c = this
  }
  return c
};
n.Fc = function(a, b, c) {
  return new Rh(U.c(this.m, b, c), this.da, this.W, this.D, this.V, this.Q, this.U, this.w)
};
n.v = function(a, b, c) {
  return Pb(this.m, b, c)
};
n.Cb = !0;
n.cb = function(a, b) {
  return Uh.b ? Uh.b(this, b) : Uh.call(null, this, b)
};
n.I = function() {
  return R(this.m)
};
n.u = function(a, b) {
  return this === b || b instanceof Rh && F.b(this.m, b.m)
};
n.s = function(a, b) {
  return new Rh(this.m, this.da, this.W, this.D, this.V, this.Q, this.U, b)
};
n.r = f("w");
(function() {
  function a(a, b) {
    return new Rh(a, null, null, b, null, Pe, !0, null)
  }
  function b(a) {
    return d.b(a, Ih.j ? Ih.j() : Ih.call(null))
  }
  function c() {
    return d.a(ne)
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
  d.j = c;
  d.a = b;
  d.b = a;
  return d
})().j();
function Vh(a, b, c, d, e, g) {
  this.id = a;
  this.unique = b;
  this.name = c;
  this.Qc = d;
  this.k = e;
  this.i = g;
  this.o = 0;
  this.f = 2154168320
}
n = Vh.prototype;
n.C = f("k");
n.Jc = function(a, b, c) {
  return c.Sa(0, this, b)
};
n.Bc = function(a, b) {
  var c = rf.a(vc(b));
  return tc(c) ? c.b ? c.b(this, b) : c.call(null, this, b) : v(c) ? b.Sa(0, this, Sh(b)) : b.Sa(0, this, this.Qc)
};
n.kb = function(a, b, c) {
  if(v($.a ? $.a(b) : $.call(null, b))) {
    return a = v(Ef.a(vc(this))) ? new W(null, 2, 5, X, [this, b], null) : v(Ef.a(vc(b))) ? new W(null, 2, 5, X, [b, this], null) : null, v(a) ? (b = S.c(a, 0, null), a = S.c(a, 1, null), c = new Rh(c.m, c.da, c.W, Bh(c.D, a, b), c.V, c.Q, c.U, c.w), c = v(Ef.a(vc(a))) ? Wh.c ? Wh.c(c, a, b) : Wh.call(null, c, a, b) : c, v(c) ? Lh(c, a, b) : null) : Lh(c, this, b)
  }
  if(v(Xh.a ? Xh.a(b) : Xh.call(null, b))) {
    throw Error([A(b), A(" is non-storable")].join(""));
  }
  return rd.b(b, bh) ? v(Yh.a ? Yh.a(b) : Yh.call(null, b)) ? Kh(c, this, b) : v(Ef.a(vc(this))) ? Lh(c, this, U.c(wh(c, this), Df, b)) : Lh(c, this, b) : y ? Lh(c, this, b) : null
};
n.Hc = function(a, b, c) {
  return c.hc(0, this, b)
};
n.lb = function(a, b, c) {
  return c.Sa(0, this, b)
};
n.v = function(a, b) {
  return E(b, [A("\x3clvar:"), A(this.name), A("\x3e")].join(""))
};
n.Ac = function(a, b, c) {
  return F.b(c.kc(0, this), b)
};
n.toString = function() {
  return ff.e(t([Mg.fa], 0))
};
n.eb = function(a, b) {
  return b.a ? b.a(this) : b.call(null, this)
};
n.Ic = function(a, b, c) {
  return c.Sa(0, this, b)
};
n.u = function(a, b) {
  var c = b instanceof Vh;
  return c ? v(this.unique) ? this.id === b.id : this.name === b.name : c
};
n.s = function(a, b) {
  return new Vh(this.id, this.unique, this.name, this.Qc, this.k, b)
};
n.r = f("i");
var Zh = [0], $h = function() {
  function a(a, b) {
    var c = v(b) ? [A("_"), A(Zh[0] += 1)].join("") : a, d = v(b) ? [A(a), A(c)].join("") : "" + A(a);
    return new Vh(c, b, d, a, H(d), null)
  }
  function b(a) {
    return d.b(a, !0)
  }
  function c() {
    return d.a(new G(null, "gen", "gen", -1640429303, null))
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
  d.j = c;
  d.a = b;
  d.b = a;
  return d
}();
function $(a) {
  return a instanceof Vh
}
function Yh(a) {
  var b = Ac(a);
  return b ? b : a ? v(v(null) ? null : a.le) ? !0 : !1 : !1
}
function ai(a, b, c) {
  if(Cc(b)) {
    for(var d = Le(a);;) {
      if(u(d)) {
        var e = I(d), g = T.c(b, e, bh);
        if(g === bh) {
          return null
        }
        e = T.b(a, e);
        g = Mh(c, g);
        if($(g)) {
          d = N(d), c = (bi.b ? bi.b(g, e) : bi.call(null, g, e)).call(null, c)
        }else {
          if(c = Cc(e) ? Nh(c, ci.a ? ci.a(e) : ci.call(null, e), g) : Nh(c, e, g), v(c)) {
            d = N(d)
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
Fe.prototype.kb = function(a, b, c) {
  return Ug(b, this, c)
};
Na.prototype.kb = function(a, b, c) {
  return Ug(b, this, c)
};
Qg._ = function(a, b, c) {
  return Bc(a) ? Tg(b, a, c) : nh(a) ? ai(b, a, c) : y ? Sg(b, a, c) : null
};
Qg["null"] = function(a, b, c) {
  return Rg(b, a, c)
};
Rg._ = m(null);
Rg["null"] = function(a, b, c) {
  return c
};
Sg._ = function(a, b, c) {
  return F.b(b, a) ? c : null
};
Sg["null"] = m(null);
Tg._ = function(a, b, c) {
  if(Bc(a)) {
    for(b = u(b), a = u(a);;) {
      if(null != b) {
        if(null != a) {
          if(c = c.jc(0, I(b), I(a)), w(Va.a ? Va.a(c) : Va.call(null, c))) {
            b = N(b), a = N(a)
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
Tg["null"] = m(null);
function di(a, b, c) {
  if(R(b) !== R(a)) {
    return null
  }
  for(var d = u(Le(b));;) {
    if(v(d)) {
      var e = I(d), g = T.c(a, e, bh);
      if(g === bh) {
        return null
      }
      c = Nh(c, T.b(b, e), g);
      if(w(Va.a ? Va.a(c) : Va.call(null, c))) {
        d = N(d)
      }else {
        return null
      }
    }else {
      return c
    }
  }
}
Fe.prototype.lb = function(a, b, c) {
  return di(this, b, c)
};
Na.prototype.lb = function(a, b, c) {
  return di(this, b, c)
};
Ug._ = m(null);
Ug["null"] = m(null);
Vg._ = function(a, b) {
  if(Ac(a)) {
    for(var c = a, d = b;;) {
      if(u(c)) {
        var e = N(c), d = d.kd(I(c)), c = e
      }else {
        return d
      }
    }
  }else {
    return b
  }
};
Vg["null"] = function(a, b) {
  return b
};
function ei(a, b) {
  var c = Q, d;
  a: {
    d = a;
    for(var e = fi.a ? fi.a(d) : fi.call(null, d);;) {
      if(u(d)) {
        var g = I(d), h = S.c(g, 0, null), g = S.c(g, 1, null);
        d = N(d);
        e = U.c(e, Wg(b.a ? b.a(h) : b.call(null, h), b), Wg(b.a ? b.a(g) : b.call(null, g), b))
      }else {
        d = e;
        break a
      }
    }
    d = void 0
  }
  return c(d, vc(a))
}
function gi(a, b) {
  var c = Q, d;
  a: {
    d = a;
    for(var e = Qb(ne);;) {
      if(u(d)) {
        var g = I(d), h = S.c(g, 0, null), g = S.c(g, 1, null);
        d = N(d);
        e = e.bb(null, Wg(b.a ? b.a(h) : b.call(null, h), b), Wg(b.a ? b.a(g) : b.call(null, g), b))
      }else {
        d = Sb(e);
        break a
      }
    }
    d = void 0
  }
  return c(d, vc(a))
}
W.prototype.eb = function(a, b) {
  var c = Q, d;
  a: {
    d = u(this);
    for(var e = Qb(Vd);;) {
      if(v(d)) {
        var g = N(d), e = e.Ja(null, Wg(b.a ? b.a(I(d)) : b.call(null, I(d)), b));
        d = g
      }else {
        d = Sb(e);
        break a
      }
    }
    d = void 0
  }
  return c(d, vc(this))
};
Na.prototype.eb = function(a, b) {
  return gi(this, b)
};
Fe.prototype.eb = function(a, b) {
  return gi(this, b)
};
Wg._ = function(a, b) {
  return Bc(a) ? Q(Ve.a(Ad.b(function(a) {
    return Wg(b.a ? b.a(a) : b.call(null, a), b)
  }, a)), vc(a)) : nh(a) ? ei(a, b) : y ? b.a ? b.a(a) : b.call(null, a) : null
};
Wg["null"] = function(a, b) {
  return b.a ? b.a(null) : b.call(null, null)
};
Xg._ = function(a, b, c) {
  if(Bc(a)) {
    for(a = u(a);;) {
      if(null != a) {
        var d = c.ic(0, b, I(a));
        if(v(d)) {
          return d
        }
        a = N(a)
      }else {
        return!1
      }
    }
  }else {
    return!1
  }
};
Xg["null"] = m(!1);
function hi(a, b) {
  return(a ? v(v(null) ? null : a.Cb) || (a.Lc ? 0 : x(Zg, a)) : x(Zg, a)) ? a.cb(null, b) : new ii(a, b)
}
function ii(a, b) {
  this.A = a;
  this.L = b
}
ii.prototype.Cb = !0;
ii.prototype.cb = function(a, b) {
  var c = this;
  return new ii(c.A, new ji(function() {
    return hi(b.j ? b.j() : b.call(null), c.L)
  }))
};
ii.prototype.Ra = function(a, b) {
  var c = this;
  return hi(b.a ? b.a(c.A) : b.call(null, c.A), new ji(function() {
    return c.L.Ra(null, b)
  }))
};
function Uh(a, b) {
  return new ii(a, b)
}
function ji(a) {
  this.L = a;
  this.o = 0;
  this.f = 1
}
n = ji.prototype;
n.Cb = !0;
n.cb = function(a, b) {
  var c = this;
  return new ji(function() {
    return hi(b.j ? b.j() : b.call(null), c)
  })
};
n.Ra = function(a, b) {
  var c = this;
  return new ji(function() {
    return(c.L.j ? c.L.j() : c.L.call(null)).Ra(null, b)
  })
};
n.call = function(a) {
  a = this;
  return a.L.j ? a.L.j() : a.L.call(null)
};
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Za(b)))
};
n.j = function() {
  return this.L.j ? this.L.j() : this.L.call(null)
};
Zg["null"] = !0;
$g["null"] = function(a, b) {
  return b.j ? b.j() : b.call(null)
};
Yg["null"] = function() {
  return Mg.fa
};
Zg["function"] = !0;
$g["function"] = function(a, b) {
  return new ji(function() {
    return hi(b.j ? b.j() : b.call(null), a)
  })
};
Zg["null"] = !0;
$g["null"] = function(a, b) {
  return b.j ? b.j() : b.call(null)
};
Yg["function"] = function(a, b) {
  return new ji(function() {
    return Yg(a.j ? a.j() : a.call(null), b)
  })
};
Yg["null"] = m(null);
function ki(a) {
  return a
}
function li(a, b, c) {
  if(a ? a.Ab : a) {
    return a.Ab(a, b, c)
  }
  var d;
  d = li[p(null == a ? null : a)];
  if(!d && (d = li._, !d)) {
    throw z("IIfA.-ifa", a);
  }
  return d.call(null, a, b, c)
}
function mi(a, b, c) {
  if(a ? a.Bb : a) {
    return a.Bb(a, b, c)
  }
  var d;
  d = mi[p(null == a ? null : a)];
  if(!d && (d = mi._, !d)) {
    throw z("IIfU.-ifu", a);
  }
  return d.call(null, a, b, c)
}
li["function"] = function(a, b, c) {
  return new ji(function() {
    return li(a.j ? a.j() : a.call(null), b, c)
  })
};
ji.prototype.Ab = function(a, b, c) {
  var d = this;
  return new ji(function() {
    return li(d.j ? d.j() : d.call(null), b, c)
  })
};
ii.prototype.Ab = function(a, b) {
  return B.c(Yg, this, b)
};
Rh.prototype.Ab = function(a, b) {
  S.c(b, 0, null);
  Tc(b);
  for(var c = this, d = b;;) {
    var e = d, d = S.c(e, 0, null), e = Tc(e);
    if(v(d)) {
      if(c = d.a ? d.a(c) : d.call(null, c), v(c)) {
        d = e
      }else {
        return null
      }
    }else {
      return c
    }
  }
};
li["null"] = function(a, b, c) {
  return v(c) ? c : null
};
ii.prototype.Bb = function(a, b) {
  return B.c(Yg, this.A, b)
};
ji.prototype.Bb = function(a, b, c) {
  var d = this;
  return new ji(function() {
    return mi(d.j ? d.j() : d.call(null), b, c)
  })
};
mi["function"] = function(a, b, c) {
  return new ji(function() {
    return mi(a.j ? a.j() : a.call(null), b, c)
  })
};
Rh.prototype.Bb = function(a, b) {
  S.c(b, 0, null);
  Tc(b);
  for(var c = this, d = b;;) {
    var e = d, d = S.c(e, 0, null), e = Tc(e);
    if(v(d)) {
      if(c = d.a ? d.a(c) : d.call(null, c), v(c)) {
        d = e
      }else {
        return null
      }
    }else {
      return c
    }
  }
};
mi["null"] = function(a, b, c) {
  return v(c) ? c : null
};
function Xh(a) {
  return a ? v(v(null) ? null : a.jd) ? !0 : !1 : !1
}
function fi(a) {
  if(a ? a.Kc : a) {
    return a.Kc()
  }
  var b;
  b = fi[p(null == a ? null : a)];
  if(!b && (b = fi._, !b)) {
    throw z("IUninitialized.-uninitialized", a);
  }
  return b.call(null, a)
}
function ni(a, b, c) {
  if(a ? a.mb : a) {
    return a.mb(a, b, c)
  }
  var d;
  d = ni[p(null == a ? null : a)];
  if(!d && (d = ni._, !d)) {
    throw z("IUnifyWithPMap.-unify-with-pmap", a);
  }
  return d.call(null, a, b, c)
}
function oi(a, b) {
  this.G = a;
  this.q = b;
  this.o = 0;
  this.f = 2229667594;
  0 < arguments.length ? (this.G = a, this.q = b) : this.q = this.G = null
}
n = oi.prototype;
n.mb = function(a, b, c) {
  return Ug(this, b, c)
};
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Vc(this)
};
n.N = function(a, b) {
  return mb.c(this, b, null)
};
n.O = function(a, b, c) {
  return y ? T.c(this.q, b, c) : null
};
n.Ia = function(a, b, c) {
  return new oi(this.G, U.c(this.q, b, c), null)
};
n.kb = function(a, b, c) {
  return Cc(b) ? ni(b, this, c) : null
};
n.jd = !0;
n.lb = function(a, b, c) {
  for(a = Le(this);;) {
    if(u(a)) {
      var d = I(a), e = T.c(b, d, bh);
      if(e === bh) {
        return null
      }
      d = T.b(this, d);
      e = Mh(c, e);
      if($(e)) {
        a = N(a), c = (bi.b ? bi.b(e, d) : bi.call(null, e, d)).call(null, c)
      }else {
        if(c = Cc(d) ? Nh(c, ci.a ? ci.a(d) : ci.call(null, d), e) : Nh(c, d, e), v(c)) {
          a = N(a)
        }else {
          return null
        }
      }
    }else {
      return c
    }
  }
};
n.v = function(a, b, c) {
  return Ze(b, function(a) {
    return Ze(b, df, "", " ", "", c, a)
  }, "#cljs.core.logic.PMap{", ", ", "}", c, nd.b(Vd, this.q))
};
n.K = function(a, b) {
  return Dc(b) ? pb(this, D.b(b, 0), D.b(b, 1)) : B.c(fb, this, b)
};
n.J = function() {
  return u(nd.b(Vd, this.q))
};
n.eb = function(a, b) {
  return gi(this, b)
};
n.I = function() {
  return 0 + R(this.q)
};
n.u = function(a, b) {
  return v(v(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1
};
n.s = function(a, b) {
  return new oi(b, this.q, this.k)
};
n.r = f("G");
n.ab = function(a, b) {
  return Lc(Pe, b) ? sc.b(Q(Gd(ne, this), this.G), b) : new oi(this.G, sd(sc.b(this.q, b)), null)
};
n.Kc = function() {
  return new oi
};
Fe.prototype.mb = function(a, b, c) {
  return Ug(b, this, c)
};
Na.prototype.mb = function(a, b, c) {
  return Ug(b, this, c)
};
Vh.prototype.mb = function(a, b, c) {
  return Kh(c, this, b)
};
ni._ = m(null);
ni["null"] = m(null);
function ci(a) {
  return new oi(null, sc.a(a))
}
var pi = function() {
  function a(a, b) {
    return function(e) {
      e = a.a ? a.a(e) : a.call(null, e);
      return v(e) ? b.a ? b.a(e) : b.call(null, e) : e
    }
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 0:
        return vd;
      case 2:
        return a.call(this, b, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = function() {
    return vd
  };
  b.b = a;
  return b
}();
function qi(a, b) {
  if(a ? a.xb : a) {
    return a.xb(a, b)
  }
  var c;
  c = qi[p(null == a ? null : a)];
  if(!c && (c = qi._, !c)) {
    throw z("IConstraintStep.-step", a);
  }
  return c.call(null, a, b)
}
function ri(a) {
  if(a ? a.Db : a) {
    return a.Db(a)
  }
  var b;
  b = ri[p(null == a ? null : a)];
  if(!b && (b = ri._, !b)) {
    throw z("IRunnable.-runnable?", a);
  }
  return b.call(null, a)
}
function uh(a) {
  if(a ? a.wb : a) {
    return a.wb(a)
  }
  var b;
  b = uh[p(null == a ? null : a)];
  if(!b && (b = uh._, !b)) {
    throw z("IConstraintOp.-rands", a);
  }
  return b.call(null, a)
}
function Hh(a) {
  if(a ? a.yb : a) {
    return a.yb(a)
  }
  var b;
  b = Hh[p(null == a ? null : a)];
  if(!b && (b = Hh._, !b)) {
    throw z("IConstraintWatchedStores.-watched-stores", a);
  }
  return b.call(null, a)
}
var ui = function si(b, c) {
  "undefined" === typeof Ng && (Ng = function(b, c, g, h) {
    this.Ta = b;
    this.x = c;
    this.sb = g;
    this.Gb = h;
    this.o = 0;
    this.f = 393216
  }, Ng.Ca = !0, Ng.Ba = "cljs.core.logic/t65301", Ng.Ka = function(b, c) {
    return E(c, "cljs.core.logic/t65301")
  }, Ng.prototype.yb = function() {
    return new Ne(null, new Na(null, 1, [uf, null], null), null)
  }, Ng.prototype.wb = function() {
    return new W(null, 1, 5, X, [this.x], null)
  }, Ng.prototype.xb = function(b, c) {
    "undefined" === typeof Og && (Og = function(b, c, d, e, q, s, r) {
      this.m = b;
      this.fa = c;
      this.Gb = d;
      this.Ta = e;
      this.x = q;
      this.sb = s;
      this.sd = r;
      this.o = 0;
      this.f = 393217
    }, Og.Ca = !0, Og.Ba = "cljs.core.logic/t65305", Og.Ka = function(b, c) {
      return E(c, "cljs.core.logic/t65305")
    }, Og.prototype.Db = function() {
      return!$(Mh(this.m, this.x)) && !$(Mh(this.m, this.Ta))
    }, Og.prototype.call = function(b, c) {
      b = this;
      var d = Mh(c, b.Ta);
      return pi.b(function(c) {
        var e = 0 < R(c.D);
        c = Nh(e ? new Rh(c.m, Vd, c.W, c.D, c.V, c.Q, c.U, c.w) : c, new oi(null, sc.a(d)), b.x);
        return v(c) ? (e = e ? c.da : null, 0 < R(e) ? (Th.c ? Th.c(e, c.D, uf) : Th.call(null, e, c.D, uf)).call(null, new Rh(c.m, null, c.W, c.D, c.V, c.Q, c.U, c.w)) : c) : null
      }, ti.a ? ti.a(b.fa) : ti.call(null, b.fa)).call(null, c)
    }, Og.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(Za(c)))
    }, Og.prototype.a = function(b) {
      var c = this, d = Mh(b, c.Ta);
      return pi.b(function(b) {
        var e = 0 < R(b.D);
        b = Nh(e ? new Rh(b.m, Vd, b.W, b.D, b.V, b.Q, b.U, b.w) : b, new oi(null, sc.a(d)), c.x);
        return v(b) ? (e = e ? b.da : null, 0 < R(e) ? (Th.c ? Th.c(e, b.D, uf) : Th.call(null, e, b.D, uf)).call(null, new Rh(b.m, null, b.W, b.D, b.V, b.Q, b.U, b.w)) : b) : null
      }, ti.a ? ti.a(c.fa) : ti.call(null, c.fa)).call(null, b)
    }, Og.prototype.r = f("sd"), Og.prototype.s = function(b, c) {
      return new Og(this.m, this.fa, this.Gb, this.Ta, this.x, this.sb, c)
    });
    return new Og(c, this, this.Gb, this.Ta, this.x, this.sb, null)
  }, Ng.prototype.r = f("Gb"), Ng.prototype.s = function(b, c) {
    return new Ng(this.Ta, this.x, this.sb, c)
  });
  return new Ng(c, b, si, null)
};
function bi(a, b) {
  return vi.a ? vi.a(ui(a, b)) : vi.call(null, ui(a, b))
}
function wi(a, b, c, d) {
  return Z(c, vf) ? a : B.c(function(a, b) {
    var h = th(a, b);
    return Lc(c, h) ? a : d.b ? d.b(a, h) : d.call(null, a, h)
  }, a, b.aa)
}
function xi(a, b) {
  if(a ? a.hd : a) {
    return a.hd(a, b)
  }
  var c;
  c = xi[p(null == a ? null : a)];
  if(!c && (c = xi._, !c)) {
    throw z("IMergeDomains.-merge-doms", a);
  }
  return c.call(null, a, b)
}
var yi = function() {
  function a(a, b, g, h, k) {
    var l = wh(a, b), q = qh(l) ? Qh(a, b, rh.p ? rh.p(l.F, U.c(l.ea, g, h), l.aa, vc(l)) : rh.call(null, l.F, U.c(l.ea, g, h), l.aa, vc(l))) : function() {
      var c = v($.a ? $.a(l) : $.call(null, l)) ? Ef : l;
      return Lh(a, b, rh.b(c, new oe([g, h])))
    }();
    return wi(q, l, k, function(a, d) {
      return c.B(a, d, g, h, pc.b(v(k) ? k : Pe, b))
    })
  }
  function b(a, b, g, h) {
    b = th(a, b);
    return c.B(a, b, g, h, null)
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
  c.B = a;
  return c
}();
function Wh(a, b, c) {
  var d = wh(a, b), e = wh(a, c);
  b = Kg.b(e.aa, d.aa);
  var g;
  a: {
    g = u(d.ea);
    for(var h = e.ea, k = ne;;) {
      if(v(g)) {
        var l = I(g), q = S.c(l, 0, null), l = S.c(l, 1, null), s = Mc(h, q);
        if(v(s)) {
          if(S.c(s, 0, null), s = S.c(s, 1, null), l = xi(l, s), v(l)) {
            g = N(g), h = sc.b(h, q), k = U.c(k, q, l)
          }else {
            g = null;
            break a
          }
        }else {
          g = N(g), k = U.c(k, q, l)
        }
      }else {
        g = Me.e(t([k, h], 0));
        break a
      }
    }
    g = void 0
  }
  d = v(g) ? rh.p(e.F, g, b, Me.e(t([vc(d), vc(e)], 0))) : null;
  if(v(d)) {
    a: {
      c = Lh(a, c, d);
      a = g;
      for(b = u(b);;) {
        if(v(b)) {
          b: {
            g = c;
            c = c.lc(0, I(b));
            e = a;
            d = wh(g, c).ea;
            for(e = u(e);;) {
              if(v(e)) {
                if(k = I(e), h = S.c(k, 0, null), k = S.c(k, 1, null), q = T.c(d, h, bh), k = q === bh ? k : xi(k, q), v(k)) {
                  e = N(e), g = yi.B(g, c, h, k, Pe)
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
          if(v(c)) {
            b = N(b)
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
function zi(a) {
  return qh(a) ? a : rh.a(Ef)
}
function Ai(a, b, c) {
  b = th(a, b);
  c = th(a, c);
  var d = zi(wh(a, b)), e = zi(wh(a, c));
  return Qh(Qh(a, b, new ph(d.F, d.ea, pc.b(function() {
    var a = d.aa;
    return v(a) ? a : Pe
  }(), c))), c, new ph(e.F, e.ea, pc.b(function() {
    var a = e.aa;
    return v(a) ? a : Pe
  }(), b)))
}
function Bi(a, b) {
  return function(c) {
    return Oh(c, a, b)
  }
}
function Ci(a) {
  if(a ? a.Gc : a) {
    return a.Gc()
  }
  var b;
  b = Ci[p(null == a ? null : a)];
  if(!b && (b = Ci._, !b)) {
    throw z("ISuspendedStream.-ready?", a);
  }
  return b.call(null, a)
}
function Di(a, b, c, d, e) {
  this.ya = a;
  this.xa = b;
  this.L = c;
  this.G = d;
  this.q = e;
  this.o = 0;
  this.f = 2229667594;
  3 < arguments.length ? (this.G = d, this.q = e) : this.q = this.G = null
}
n = Di.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Vc(this)
};
n.N = function(a, b) {
  return mb.c(this, b, null)
};
n.O = function(a, b, c) {
  return Z(b, Bf) ? this.ya : Z(b, Af) ? this.xa : Z(b, yf) ? this.L : y ? T.c(this.q, b, c) : null
};
n.Ia = function(a, b, c) {
  return v(Z.b ? Z.b(Bf, b) : Z.call(null, Bf, b)) ? new Di(c, this.xa, this.L, this.G, this.q, null) : v(Z.b ? Z.b(Af, b) : Z.call(null, Af, b)) ? new Di(this.ya, c, this.L, this.G, this.q, null) : v(Z.b ? Z.b(yf, b) : Z.call(null, yf, b)) ? new Di(this.ya, this.xa, c, this.G, this.q, null) : new Di(this.ya, this.xa, this.L, this.G, U.c(this.q, b, c), null)
};
n.v = function(a, b, c) {
  return Ze(b, function(a) {
    return Ze(b, df, "", " ", "", c, a)
  }, "#cljs.core.logic.SuspendedStream{", ", ", "}", c, nd.b(new W(null, 3, 5, X, [new W(null, 2, 5, X, [Bf, this.ya], null), new W(null, 2, 5, X, [Af, this.xa], null), new W(null, 2, 5, X, [yf, this.L], null)], null), this.q))
};
n.K = function(a, b) {
  return Dc(b) ? pb(this, D.b(b, 0), D.b(b, 1)) : B.c(fb, this, b)
};
n.J = function() {
  return u(nd.b(new W(null, 3, 5, X, [new W(null, 2, 5, X, [Bf, this.ya], null), new W(null, 2, 5, X, [Af, this.xa], null), new W(null, 2, 5, X, [yf, this.L], null)], null), this.q))
};
n.I = function() {
  return 3 + R(this.q)
};
n.Gc = function() {
  return Ab(this.ya).Td !== this.xa
};
n.u = function(a, b) {
  return v(v(b) ? this.constructor === b.constructor && he(this, b) : b) ? !0 : !1
};
n.s = function(a, b) {
  return new Di(this.ya, this.xa, this.L, b, this.q, this.k)
};
n.r = f("G");
n.ab = function(a, b) {
  return Lc(new Ne(null, new Na(null, 3, [yf, null, Af, null, Bf, null], null), null), b) ? sc.b(Q(Gd(ne, this), this.G), b) : new Di(this.ya, this.xa, this.L, this.G, sd(sc.b(this.q, b)), null)
};
function Ei(a, b, c) {
  for(var d = Vd;;) {
    if(null == a) {
      return c.j ? c.j() : c.call(null)
    }
    if(v(Ci(I(a)))) {
      return b.a ? b.a(function(a, b) {
        return function() {
          var c = I(a), d = c.L, e = Gd(b, N(a));
          return zc(e) ? d.j ? d.j() : d.call(null) : $g(d.j ? d.j() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d)) : b.call(null, function(a, b) {
        return function() {
          var c = I(a), d = c.L, e = Gd(b, N(a));
          return zc(e) ? d.j ? d.j() : d.call(null) : $g(d.j ? d.j() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d))
    }
    if(y) {
      var e = N(a), d = pc.b(d, I(a));
      a = e
    }else {
      return null
    }
  }
}
W.prototype.Cb = !0;
W.prototype.cb = function(a, b) {
  var c = this;
  return Ei(c, function(a) {
    return hi(a, b)
  }, function() {
    var a = b.j ? b.j() : b.call(null);
    return Dc(a) ? Gd(a, c) : hi(a, function() {
      return c
    })
  })
};
W.prototype.Ra = function(a, b) {
  var c = this;
  return Ei(c, function(a) {
    return Yg(a, b)
  }, function() {
    return Gd(Vd, Ad.b(function(a) {
      return new Di(a.ya, a.xa, function() {
        return Yg(a.L.call(null), b)
      })
    }, c))
  })
};
function Fi(a) {
  return function(b) {
    b = B.c(function(a, b) {
      return Lh(a, b, rh.a(Ef))
    }, b, vh(b, a));
    return new Rh(b.m, b.da, b.W, xh(b.D, b, a), b.V, b.Q, b.U, b.w)
  }
}
function ti(a) {
  return function(b) {
    return new Rh(b.m, b.da, b.W, yh(b.D, b, a), b.V, b.Q, b.U, b.w)
  }
}
function Gi(a) {
  return function(b) {
    return new Rh(b.m, b.da, b.W, zh(b.D, a, !0), b.V, b.Q, b.U, b.w)
  }
}
function Hi(a) {
  return function(b) {
    return new Rh(b.m, b.da, b.W, zh(b.D, a, !1), b.V, b.Q, b.U, b.w)
  }
}
function Ii(a) {
  if(a ? a.fd : a) {
    return a.fd(a)
  }
  var b;
  b = Ii[p(null == a ? null : a)];
  if(!b && (b = Ii._, !b)) {
    throw z("IEntailed.-entailed?", a);
  }
  return b.call(null, a)
}
function Ji(a) {
  return a ? v(v(null) ? null : a.ke) ? !0 : !1 : !1
}
function Ki(a, b, c) {
  a = Eh(a);
  c = c.D.Da.call(null, a);
  c = v(c) ? c : null == a;
  return v(c) ? Ii(b) : c
}
function Li(a) {
  return function(b) {
    var c = qi(a, b);
    return Ji(c) && Ki(a, c, b) ? ti(a).call(null, b) : v(ri(c)) ? pi.b(Gi(a), pi.b(c, Hi(a))).call(null, b) : b
  }
}
function Mi(a) {
  for(;;) {
    if(v(a)) {
      var b = a.V;
      if(0 === R(b)) {
        return new Rh(a.m, a.da, a.W, a.D, null, a.Q, a.U, a.w)
      }
      b = I(b);
      a = Li(b).call(null, new Rh(a.m, a.da, a.W, a.D, Yd.b(a.V, 1), wc.b(a.Q, Eh(b)), a.U, a.w))
    }else {
      return null
    }
  }
}
function Ni(a) {
  return function(b) {
    var c = b.V;
    b = B.c(function() {
      return function(a, b) {
        return Ph(a, b)
      }
    }(c), new Rh(b.m, b.da, b.W, b.D, v(c) ? c : Vd, b.Q, b.U, b.w), a);
    return v(c) ? b : Mi(b)
  }
}
var Th = function Oi(b, c, d) {
  return 0 === R(c) || null == u(b) ? ki : function(e) {
    var g = Ah(c, e, I(b), d);
    return u(g) ? pi.b(Ni(g), Oi(N(b), c, d)).call(null, e) : Oi(N(b), c, d).call(null, e)
  }
}, vi = function Pi(b) {
  "undefined" === typeof Pg && (Pg = function(b, d, e) {
    this.qa = b;
    this.Vc = d;
    this.td = e;
    this.o = 0;
    this.f = 393217
  }, Pg.Ca = !0, Pg.Ba = "cljs.core.logic/t65356", Pg.Ka = function(b, d) {
    return E(d, "cljs.core.logic/t65356")
  }, Pg.prototype.call = function(b, d) {
    b = this;
    var e = qi(b.qa, d);
    if(v(ri(e))) {
      e = e.a ? e.a(d) : e.call(null, d);
      if(v(e)) {
        var g = qi(b.qa, e);
        return Ji(g) && !Ki(b.qa, g, e) ? Fi(b.qa).call(null, e) : e
      }
      return null
    }
    return Fi(b.qa).call(null, d)
  }, Pg.prototype.apply = function(b, d) {
    return this.call.apply(this, [this].concat(Za(d)))
  }, Pg.prototype.a = function(b) {
    var d = qi(this.qa, b);
    return v(ri(d)) ? (b = d.a ? d.a(b) : d.call(null, b), v(b) ? (d = qi(this.qa, b), Ji(d) && !Ki(this.qa, d, b) ? Fi(this.qa).call(null, b) : b) : null) : Fi(this.qa).call(null, b)
  }, Pg.prototype.r = f("td"), Pg.prototype.s = function(b, d) {
    return new Pg(this.qa, this.Vc, d)
  });
  return new Pg(b, Pi, null)
};
function Qi(a, b) {
  var c;
  if(v($.a ? $.a(b) : $.call(null, b))) {
    if(c = wh(a, b), qh(c)) {
      var d = c.F;
      c = rd.b(d, Ef) ? d : tf.a ? tf.a(Ff.a(c)) : tf.call(null, Ff.a(c))
    }else {
      c = w($.a ? $.a(c) : $.call(null, c)) ? c : null
    }
  }else {
    c = b
  }
  return c
}
function Ri(a) {
  return function(b, c) {
    var d = Qi(a, b), e = Qi(a, c);
    return ah(d) < ah(e)
  }
}
function Si(a, b, c) {
  b = xf.a(vc(b));
  return F.b(zf, b) ? u(Qc.b(Ri(c), a)) : y ? a : null
}
function Ti(a, b) {
  if(a ? a.gc : a) {
    return a.gc(a, b)
  }
  var c;
  c = Ti[p(null == a ? null : a)];
  if(!c && (c = Ti._, !c)) {
    throw z("IForceAnswerTerm.-force-ans", a);
  }
  return c.call(null, a, b)
}
Na.prototype.gc = function() {
  var a = function c(a) {
    return v(a) ? function(e) {
      return Yg(Yg(e, Ui.a ? Ui.a(Xc(I(a))) : Ui.call(null, Xc(I(a)))), c(N(a)))
    } : ki
  };
  return a.a ? a.a(u(this)) : a.call(null, u(this))
};
Fe.prototype.gc = function() {
  var a = function c(a) {
    return v(a) ? function(e) {
      return Yg(Yg(e, Ui.a ? Ui.a(Xc(I(a))) : Ui.call(null, Xc(I(a)))), c(N(a)))
    } : ki
  };
  return a.a ? a.a(u(this)) : a.call(null, u(this))
};
Ti._ = function(a, b) {
  if(Bc(a)) {
    var c = function e(a) {
      return v(a) ? function(c) {
        return Yg(Yg(c, Ui.a ? Ui.a(I(a)) : Ui.call(null, I(a))), function(c) {
          var h = Si(N(a), b, c);
          return v(h) ? e(h).call(null, c) : c
        })
      } : ki
    };
    return c.a ? c.a(u(a)) : c.call(null, u(a))
  }
  return y ? v($.a ? $.a(b) : $.call(null, b)) ? Bi(b, a) : ki : null
};
Ti["null"] = function() {
  return ki
};
function Ui(a) {
  return function(b) {
    var c;
    c = Mh(b, a);
    if(v($.a ? $.a(c) : $.call(null, c))) {
      c = Ti(Qi(b, a), c)
    }else {
      var d = th(b, a);
      c = Bc(c) ? Ti(Si(c, d, b), d) : Ti(c, d)
    }
    return c.call(null, b)
  }
}
function Vi(a, b, c, d) {
  if(a ? a.zb : a) {
    return a.zb(a, b, c, d)
  }
  var e;
  e = Vi[p(null == a ? null : a)];
  if(!e && (e = Vi._, !e)) {
    throw z("IDisunifyTerms.-disunify-terms", a);
  }
  return e.call(null, a, b, c, d)
}
var Wi = function() {
  function a(a, b, c, h) {
    if(b === c) {
      return h
    }
    b = Mh(a, b);
    c = Mh(a, c);
    if(b === c || F.b(b, c)) {
      a = h
    }else {
      var k;
      k = (k = w($.a ? $.a(b) : $.call(null, b))) ? $.a ? $.a(c) : $.call(null, c) : k;
      a = v(k) ? Vi(c, b, a, h) : Vi(b, c, a, h)
    }
    return a
  }
  function b(a, b, g) {
    return c.p(a, b, g, new Na(null, 1, [qf, ne], null))
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
function Xi(a, b, c, d) {
  if(Cc(a) && R(b) === R(a)) {
    for(var e = u(Le(b));;) {
      if(e) {
        var g = I(e), h = T.c(a, g, bh);
        if(F.b(h, bh)) {
          return null
        }
        d = Wi.p(c, T.b(b, g), h, d);
        if(v(d)) {
          e = N(e)
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
Vi._ = function(a, b, c, d) {
  if(Bc(a)) {
    if(Bc(b)) {
      for(a = u(a), b = u(b);;) {
        if(v(a)) {
          if(v(b)) {
            var e = I(a), g = I(b);
            d = Wi.p(c, e, g, d);
            if(v(d)) {
              a = N(a), b = N(b)
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
    return y ? F.b(a, b) ? d : null : null
  }
};
Fe.prototype.zb = function(a, b, c, d) {
  return Xi(b, this, c, d)
};
Na.prototype.zb = function(a, b, c, d) {
  return Xi(b, this, c, d)
};
Vh.prototype.zb = function(a, b, c, d) {
  a = Ic(d) ? V.b(Ie, d) : d;
  c = T.b(a, qf);
  return U.c(a, qf, U.c(c, this, b))
};
Vi["null"] = function(a, b, c, d) {
  return null != b ? null : d
};
function Yi(a, b, c) {
  if(a ? a.fc : a) {
    return a.fc(a, b, c)
  }
  var d;
  d = Yi[p(null == a ? null : a)];
  if(!d && (d = Yi._, !d)) {
    throw z("IConstrainTree.-constrain-tree", a);
  }
  return d.call(null, a, b, c)
}
function Zi(a, b, c) {
  for(a = u(a);;) {
    if(v(a)) {
      var d = I(a);
      S.c(d, 0, null);
      d = S.c(d, 1, null);
      c = b.b ? b.b(d, c) : b.call(null, d, c);
      if(v(c)) {
        a = N(a)
      }else {
        return null
      }
    }else {
      return c
    }
  }
}
Yi._ = function(a, b, c) {
  if(Bc(a)) {
    for(a = u(a);;) {
      if(v(a)) {
        if(c = b.b ? b.b(I(a), c) : b.call(null, I(a), c), v(c)) {
          a = N(a)
        }else {
          return null
        }
      }else {
        return c
      }
    }
  }else {
    return nh(a) ? Zi(a, b, c) : null
  }
};
Fe.prototype.fc = function(a, b, c) {
  return Zi(this, b, c)
};
Na.prototype.fc = function(a, b, c) {
  return Zi(this, b, c)
};
function $i(a, b) {
  return function(c) {
    return Yi(a, b, c)
  }
}
function aj() {
  var a = performance.now();
  (function() {
    for(var b = 0;;) {
      if(1E6 > b) {
        (function() {
          return function() {
            return[A("hello"), A("there")].join("")
          }
        })(b, 1E6, a).call(null), b += 1
      }else {
        return null
      }
    }
  })();
  return gf.e(t([[A("Elapsed time: "), A((performance.now() - a).toFixed(6)), A(" msecs")].join("")], 0))
}
function bj() {
  Ta();
  return aj()
}
var cj = ["cljs", "core", "logic", "_main"], dj = ba;
cj[0] in dj || !dj.execScript || dj.execScript("var " + cj[0]);
for(var ej;cj.length && (ej = cj.shift());) {
  cj.length || void 0 === bj ? dj = dj[ej] ? dj[ej] : dj[ej] = {} : dj[ej] = bj
}
;ah.number = m(1);
var fj = rc([new G(null, "+", "+", -1640531484, null), new G(null, "*", "*", -1640531485, null), new G(null, "-", "-", -1640531482, null), new G(null, "/", "/", -1640531480, null), new G(null, "\x3c", "\x3c", -1640531467, null), new G(null, "!\x3d", "!\x3d", -1640530443, null), new G(null, "\x3d", "\x3d", -1640531466, null), new G(null, "\x3e", "\x3e", -1640531465, null), new G(null, "\x3e\x3d", "\x3e\x3d", -1640529544, null), new G(null, "\x3c\x3d", "\x3c\x3d", -1640529606, null)], [new G("cljs.core.logic.fd", 
"+", "cljs.core.logic.fd/+", 1528484149, null), new G("cljs.core.logic.fd", "*", "cljs.core.logic.fd/*", 1528484146, null), new G("cljs.core.logic.fd", "-", "cljs.core.logic.fd/-", 1528484151, null), new G("cljs.core.logic.fd", "quot", "cljs.core.logic.fd/quot", 1533391379, null), new G("cljs.core.logic.fd", "\x3c", "cljs.core.logic.fd/\x3c", 1528484292, null), new G("cljs.core.logic.fd", "!\x3d", "cljs.core.logic.fd/!\x3d", 1528485316, null), new G("cljs.core.logic.fd", "\x3d\x3d", "cljs.core.logic.fd/\x3d\x3d", 
1528485544, null), new G("cljs.core.logic.fd", "\x3e", "cljs.core.logic.fd/\x3e", 1528484294, null), new G("cljs.core.logic.fd", "\x3e\x3d", "cljs.core.logic.fd/\x3e\x3d", 1528482121, null), new G("cljs.core.logic.fd", "\x3c\x3d", "cljs.core.logic.fd/\x3c\x3d", 1528485515, null)]);
(function(a) {
  a = u(a);
  if(null == a) {
    return Pe
  }
  if(a instanceof fc) {
    a = a.d;
    a: {
      for(var b = 0, c = Qb(Pe);;) {
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
  if(y) {
    for(d = Qb(Pe);;) {
      if(null != a) {
        b = a.ia(null), d = d.Ja(null, a.T(null)), a = b
      }else {
        return d.Qa(null)
      }
    }
  }else {
    return null
  }
})(Le(fj));
var gj, hj, ij, jj;
function kj(a, b, c) {
  if(a ? a.mc : a) {
    return a.mc(a, b, c)
  }
  var d;
  d = kj[p(null == a ? null : a)];
  if(!d && (d = kj._, !d)) {
    throw z("INomSwap.swap-noms", a);
  }
  return d.call(null, a, b, c)
}
W.prototype.mc = function(a, b, c) {
  b = kj(u(this), b, c);
  a = S.c(b, 0, null);
  b = S.c(b, 1, null);
  return new W(null, 2, 5, X, [Wd(a), b], null)
};
Vh.prototype.mc = function(a, b, c) {
  var d = Mh(c, this);
  if(v($.a ? $.a(d) : $.call(null, d))) {
    a = Q($h.j ? $h.j() : $h.call(null), vc(d));
    var e = wh(c, d);
    b = (lj.c ? lj.c(a, d, b) : lj.call(null, a, d, b)).call(null, Ai(qh(e) ? Lh(c, a, e) : c, d, a));
    return new W(null, 2, 5, X, [a, b], null)
  }
  return kj(d, b, c)
};
kj._ = function(a, b, c) {
  if(Ac(a)) {
    if(u(a)) {
      var d = kj(I(a), b, c);
      c = S.c(d, 0, null);
      d = S.c(d, 1, null);
      d = kj(N(a), b, d);
      b = S.c(d, 0, null);
      d = S.c(d, 1, null);
      return new W(null, 2, 5, X, [Q(P(c, b), vc(a)), d], null)
    }
    return new W(null, 2, 5, X, [a, c], null)
  }
  return Cc(a) ? (c = kj(u(a), b, c), a = S.c(c, 0, null), d = S.c(c, 1, null), new W(null, 2, 5, X, [Gd(ne, a), d], null)) : y ? new W(null, 2, 5, X, [a, c], null) : null
};
kj["null"] = function(a, b, c) {
  return new W(null, 2, 5, X, [a, c], null)
};
var pj = function mj(b, c) {
  "undefined" === typeof gj && (gj = function(b, c, g, h) {
    this.x = b;
    this.A = c;
    this.la = g;
    this.Eb = h;
    this.o = 0;
    this.f = 393216
  }, gj.Ca = !0, gj.Ba = "cljs.core.logic.nominal/t53366", gj.Ka = function(b, c) {
    return E(c, "cljs.core.logic.nominal/t53366")
  }, gj.prototype.yb = function() {
    return new Ne(null, new Na(null, 1, [uf, null], null), null)
  }, gj.prototype.wb = function() {
    return new W(null, 2, 5, X, [this.A, this.x], null)
  }, gj.prototype.xb = function(b, c) {
    var g = Mh(c, this.A), h = Mh(c, this.x);
    "undefined" === typeof hj && (hj = function(b, c, d, e, g, h, M) {
      this.m = b;
      this.fa = c;
      this.Eb = d;
      this.x = e;
      this.A = g;
      this.la = h;
      this.pd = M;
      this.o = 0;
      this.f = 393217
    }, hj.Ca = !0, hj.Ba = "cljs.core.logic.nominal/t53369", hj.Ka = function(b, c) {
      return E(c, "cljs.core.logic.nominal/t53369")
    }, hj.prototype.Db = function() {
      if(v($.a ? $.a(this.A) : $.call(null, this.A))) {
        var b;
        b = $.a ? $.a(this.x) : $.call(null, this.x);
        b = v(b) ? F.b(this.x, this.A) : b;
        return v(b) ? b : Yh(this.x) && w(nj.a ? nj.a(this.x) : nj.call(null))
      }
      return!0
    }, hj.prototype.call = function(b, c) {
      b = this;
      return pi.b(ti(b.fa), function(c) {
        return v(function() {
          var c = $.a ? $.a(b.A) : $.call(null, b.A);
          return v(c) ? (c = $.a ? $.a(b.x) : $.call(null, b.x), v(c) ? F.b(b.x, b.A) : c) : c
        }()) ? null : w($.a ? $.a(b.A) : $.call(null, b.A)) ? null : v(!1) ? c : Yh(b.x) && w(nj.a ? nj.a(b.x) : nj.call(null)) ? $i(b.x, function(c, d) {
          return(oj.b ? oj.b(b.A, c) : oj.call(null, b.A, c)).call(null, d)
        }).call(null, c) : y ? c : null
      }).call(null, c)
    }, hj.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(Za(c)))
    }, hj.prototype.a = function(b) {
      var c = this;
      return pi.b(ti(c.fa), function(b) {
        return v(function() {
          var b = $.a ? $.a(c.A) : $.call(null, c.A);
          return v(b) ? (b = $.a ? $.a(c.x) : $.call(null, c.x), v(b) ? F.b(c.x, c.A) : b) : b
        }()) ? null : w($.a ? $.a(c.A) : $.call(null, c.A)) ? null : v(!1) ? b : Yh(c.x) && w(nj.a ? nj.a(c.x) : nj.call(null)) ? $i(c.x, function(b, d) {
          return(oj.b ? oj.b(c.A, b) : oj.call(null, c.A, b)).call(null, d)
        }).call(null, b) : y ? b : null
      }).call(null, b)
    }, hj.prototype.r = f("pd"), hj.prototype.s = function(b, c) {
      return new hj(this.m, this.fa, this.Eb, this.x, this.A, this.la, c)
    });
    return new hj(c, this, this.Eb, h, g, this.la, null)
  }, gj.prototype.toString = function() {
    return[A(this.A), A("#"), A(this.x)].join("")
  }, gj.prototype.r = f("Eb"), gj.prototype.s = function(b, c) {
    return new gj(this.x, this.A, this.la, c)
  });
  return new gj(c, b, mj, null)
};
function oj(a, b) {
  return vi(pj(a, b))
}
function qj(a, b, c, d) {
  var e = function() {
    for(var c = Qe([b]), e = Pe;;) {
      var g = Lg.b(c, e);
      if(zc(g)) {
        return!0
      }
      if(v(ud(function() {
        return function(b) {
          return Jh(d, b, a)
        }
      }(c, e, g), g))) {
        return!1
      }
      if(y) {
        c = B.c(function() {
          return function(a, b) {
            return Kg.b(a, wh(d, b).aa)
          }
        }(c, e, g), Pe, g), e = Kg.b(g, e)
      }else {
        return null
      }
    }
  }();
  if(v(e)) {
    c = kj(a, c, d);
    var g = S.c(c, 0, null);
    c = S.c(c, 1, null);
    return function(a) {
      var c = 0 < R(a.D);
      a = Nh(c ? new Rh(a.m, Vd, a.W, a.D, a.V, a.Q, a.U, a.w) : a, g, b);
      return v(a) ? (c = c ? a.da : null, 0 < R(c) ? Th(c, a.D, uf).call(null, new Rh(a.m, null, a.W, a.D, a.V, a.Q, a.U, a.w)) : a) : null
    }.call(null, c)
  }
  return null
}
var sj = function rj(b, c, d) {
  "undefined" === typeof ij && (ij = function(b, c, d, k, l) {
    this.wa = b;
    this.Ya = c;
    this.Xa = d;
    this.tb = k;
    this.Fb = l;
    this.o = 0;
    this.f = 393216
  }, ij.Ca = !0, ij.Ba = "cljs.core.logic.nominal/t53385", ij.Ka = function(b, c) {
    return E(c, "cljs.core.logic.nominal/t53385")
  }, ij.prototype.yb = function() {
    return new Ne(null, new Na(null, 1, [uf, null], null), null)
  }, ij.prototype.wb = function() {
    return new W(null, 2, 5, X, [this.Xa, this.Ya], null)
  }, ij.prototype.xb = function(b, c) {
    var d = Mh(c, this.Xa), k = Mh(c, this.Ya);
    "undefined" === typeof jj && (jj = function(b, c, d, e, g, h, k, O, na, za) {
      this.ha = b;
      this.pa = c;
      this.A = d;
      this.fa = e;
      this.Fb = g;
      this.wa = h;
      this.Ya = k;
      this.Xa = O;
      this.tb = na;
      this.qd = za;
      this.o = 0;
      this.f = 393217
    }, jj.Ca = !0, jj.Ba = "cljs.core.logic.nominal/t53388", jj.Ka = function(b, c) {
      return E(c, "cljs.core.logic.nominal/t53388")
    }, jj.prototype.Db = function() {
      return w($.a ? $.a(this.pa) : $.call(null, this.pa)) || w($.a ? $.a(this.ha) : $.call(null, this.ha)) || F.b(this.pa, this.ha)
    }, jj.prototype.call = function(b, c) {
      b = this;
      return pi.b(ti(b.fa), function(c) {
        if(w($.a ? $.a(b.pa) : $.call(null, b.pa))) {
          return qj(b.pa, b.ha, b.wa, c)
        }
        if(w($.a ? $.a(b.ha) : $.call(null, b.ha))) {
          return qj(b.ha, b.pa, b.wa, c)
        }
        if(y) {
          for(var d = b.wa, e = c;;) {
            if(zc(d)) {
              return e
            }
            c = J(d);
            e = oj(I(d), b.ha).call(null, e);
            d = c
          }
        }else {
          return null
        }
      }).call(null, c)
    }, jj.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(Za(c)))
    }, jj.prototype.a = function(b) {
      var c = this;
      return pi.b(ti(c.fa), function(b) {
        if(w($.a ? $.a(c.pa) : $.call(null, c.pa))) {
          return qj(c.pa, c.ha, c.wa, b)
        }
        if(w($.a ? $.a(c.ha) : $.call(null, c.ha))) {
          return qj(c.ha, c.pa, c.wa, b)
        }
        if(y) {
          for(var d = c.wa, e = b;;) {
            if(zc(d)) {
              return e
            }
            b = J(d);
            e = oj(I(d), c.ha).call(null, e);
            d = b
          }
        }else {
          return null
        }
      }).call(null, b)
    }, jj.prototype.r = f("qd"), jj.prototype.s = function(b, c) {
      return new jj(this.ha, this.pa, this.A, this.fa, this.Fb, this.wa, this.Ya, this.Xa, this.tb, c)
    });
    return new jj(k, d, c, this, this.Fb, this.wa, this.Ya, this.Xa, this.tb, null)
  }, ij.prototype.toString = function() {
    return[A("suspc"), A(this.Xa), A(this.Ya), A(this.wa)].join("")
  }, ij.prototype.r = f("Fb"), ij.prototype.s = function(b, c) {
    return new ij(this.wa, this.Ya, this.Xa, this.tb, c)
  });
  return new ij(d, c, b, rj, null)
};
function lj(a, b, c) {
  return vi(sj(a, b, c))
}
function nj() {
  return!1
}
;
})();

//# sourceMappingURL=adv.js.map