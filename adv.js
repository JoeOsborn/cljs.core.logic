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
function ba(a) {
  return function() {
    return a
  }
}
var m;
function n(a) {
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
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;var fa = Array.prototype;
function ga(a, b) {
  fa.sort.call(a, b || ha)
}
function ia(a, b) {
  for(var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]}
  }
  var d = b || ha;
  ga(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index
  });
  for(c = 0;c < a.length;c++) {
    a[c] = a[c].value
  }
}
function ha(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ja(a, b) {
  null != a && this.append.apply(this, arguments)
}
ja.prototype.Pa = "";
ja.prototype.append = function(a, b, c) {
  this.Pa += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.Pa += arguments[d]
    }
  }
  return this
};
ja.prototype.toString = f("Pa");
var ka;
function la() {
  return new ma(null, 5, [na, !0, oa, !0, qa, !1, ra, !1, sa, null], null)
}
function q(a) {
  return null != a && !1 !== a
}
function ta(a) {
  return q(a) ? !1 : !0
}
function t(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null
}
function ua(a) {
  return null == a ? null : a.constructor
}
function v(a, b) {
  var c = ua(b), c = q(q(c) ? c.qb : c) ? c.pb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function wa(a) {
  var b = a.pb;
  return q(b) ? b : "" + w(a)
}
function xa(a) {
  for(var b = a.length, c = Array(b), d = 0;;) {
    if(d < b) {
      c[d] = a[d], d += 1
    }else {
      break
    }
  }
  return c
}
var ya = {}, za = {};
function Aa(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  b = Aa[n(null == a ? null : a)];
  if(!b && (b = Aa._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a)
}
function Ba(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  b = Ba[n(null == a ? null : a)];
  if(!b && (b = Ba._, !b)) {
    throw v("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var Ca = {};
function Da(a, b) {
  if(a ? a.H : a) {
    return a.H(a, b)
  }
  var c;
  c = Da[n(null == a ? null : a)];
  if(!c && (c = Da._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var Ea = {}, x = function() {
  function a(a, b, c) {
    if(a ? a.ia : a) {
      return a.ia(a, b, c)
    }
    var h;
    h = x[n(null == a ? null : a)];
    if(!h && (h = x._, !h)) {
      throw v("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.$ : a) {
      return a.$(a, b)
    }
    var c;
    c = x[n(null == a ? null : a)];
    if(!c && (c = x._, !c)) {
      throw v("IIndexed.-nth", a);
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
}(), Fa = {};
function Ga(a) {
  if(a ? a.D : a) {
    return a.D(a)
  }
  var b;
  b = Ga[n(null == a ? null : a)];
  if(!b && (b = Ga._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a)
}
function Ha(a) {
  if(a ? a.U : a) {
    return a.U(a)
  }
  var b;
  b = Ha[n(null == a ? null : a)];
  if(!b && (b = Ha._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var Ia = {}, Ja = {}, La = function() {
  function a(a, b, c) {
    if(a ? a.N : a) {
      return a.N(a, b, c)
    }
    var h;
    h = La[n(null == a ? null : a)];
    if(!h && (h = La._, !h)) {
      throw v("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.M : a) {
      return a.M(a, b)
    }
    var c;
    c = La[n(null == a ? null : a)];
    if(!c && (c = La._, !c)) {
      throw v("ILookup.-lookup", a);
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
}(), Ma = {};
function Na(a, b) {
  if(a ? a.tb : a) {
    return a.tb(a, b)
  }
  var c;
  c = Na[n(null == a ? null : a)];
  if(!c && (c = Na._, !c)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b)
}
function Oa(a, b, c) {
  if(a ? a.Ia : a) {
    return a.Ia(a, b, c)
  }
  var d;
  d = Oa[n(null == a ? null : a)];
  if(!d && (d = Oa._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var Pa = {};
function Qa(a, b) {
  if(a ? a.Za : a) {
    return a.Za(a, b)
  }
  var c;
  c = Qa[n(null == a ? null : a)];
  if(!c && (c = Qa._, !c)) {
    throw v("IMap.-dissoc", a);
  }
  return c.call(null, a, b)
}
var Ra = {};
function Sa(a) {
  if(a ? a.Kb : a) {
    return a.Kb()
  }
  var b;
  b = Sa[n(null == a ? null : a)];
  if(!b && (b = Sa._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function Ta(a) {
  if(a ? a.Zb : a) {
    return a.Zb()
  }
  var b;
  b = Ta[n(null == a ? null : a)];
  if(!b && (b = Ta._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var Ua = {};
function Va(a, b) {
  if(a ? a.ac : a) {
    return a.ac(0, b)
  }
  var c;
  c = Va[n(null == a ? null : a)];
  if(!c && (c = Va._, !c)) {
    throw v("ISet.-disjoin", a);
  }
  return c.call(null, a, b)
}
var Wa = {};
function Xa(a, b, c) {
  if(a ? a.Mb : a) {
    return a.Mb(a, b, c)
  }
  var d;
  d = Xa[n(null == a ? null : a)];
  if(!d && (d = Xa._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function Ya(a) {
  if(a ? a.yc : a) {
    return a.state
  }
  var b;
  b = Ya[n(null == a ? null : a)];
  if(!b && (b = Ya._, !b)) {
    throw v("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var Za = {};
function $a(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  b = $a[n(null == a ? null : a)];
  if(!b && (b = $a._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var ab = {};
function bb(a, b) {
  if(a ? a.A : a) {
    return a.A(a, b)
  }
  var c;
  c = bb[n(null == a ? null : a)];
  if(!c && (c = bb._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var cb = {}, db = function() {
  function a(a, b, c) {
    if(a ? a.T : a) {
      return a.T(a, b, c)
    }
    var h;
    h = db[n(null == a ? null : a)];
    if(!h && (h = db._, !h)) {
      throw v("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.S : a) {
      return a.S(a, b)
    }
    var c;
    c = db[n(null == a ? null : a)];
    if(!c && (c = db._, !c)) {
      throw v("IReduce.-reduce", a);
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
function fb(a, b) {
  if(a ? a.r : a) {
    return a.r(a, b)
  }
  var c;
  c = fb[n(null == a ? null : a)];
  if(!c && (c = fb._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function gb(a) {
  if(a ? a.u : a) {
    return a.u(a)
  }
  var b;
  b = gb[n(null == a ? null : a)];
  if(!b && (b = gb._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a)
}
var hb = {};
function ib(a) {
  if(a ? a.v : a) {
    return a.v(a)
  }
  var b;
  b = ib[n(null == a ? null : a)];
  if(!b && (b = ib._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var jb = {}, kb = {};
function lb(a) {
  if(a ? a.Lb : a) {
    return a.Lb(a)
  }
  var b;
  b = lb[n(null == a ? null : a)];
  if(!b && (b = lb._, !b)) {
    throw v("IReversible.-rseq", a);
  }
  return b.call(null, a)
}
function y(a, b) {
  if(a ? a.cc : a) {
    return a.cc(0, b)
  }
  var c;
  c = y[n(null == a ? null : a)];
  if(!c && (c = y._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
var mb = {};
function nb(a, b, c) {
  if(a ? a.t : a) {
    return a.t(a, b, c)
  }
  var d;
  d = nb[n(null == a ? null : a)];
  if(!d && (d = nb._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function ob(a) {
  if(a ? a.Ya : a) {
    return a.Ya(a)
  }
  var b;
  b = ob[n(null == a ? null : a)];
  if(!b && (b = ob._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function pb(a, b) {
  if(a ? a.Aa : a) {
    return a.Aa(a, b)
  }
  var c;
  c = pb[n(null == a ? null : a)];
  if(!c && (c = pb._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function qb(a) {
  if(a ? a.Ja : a) {
    return a.Ja(a)
  }
  var b;
  b = qb[n(null == a ? null : a)];
  if(!b && (b = qb._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function rb(a, b, c) {
  if(a ? a.Ra : a) {
    return a.Ra(a, b, c)
  }
  var d;
  d = rb[n(null == a ? null : a)];
  if(!d && (d = rb._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function sb(a, b, c) {
  if(a ? a.bc : a) {
    return a.bc(0, b, c)
  }
  var d;
  d = sb[n(null == a ? null : a)];
  if(!d && (d = sb._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function tb(a) {
  if(a ? a.Xb : a) {
    return a.Xb()
  }
  var b;
  b = tb[n(null == a ? null : a)];
  if(!b && (b = tb._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function ub(a) {
  if(a ? a.vb : a) {
    return a.vb(a)
  }
  var b;
  b = ub[n(null == a ? null : a)];
  if(!b && (b = ub._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function vb(a) {
  if(a ? a.wb : a) {
    return a.wb(a)
  }
  var b;
  b = vb[n(null == a ? null : a)];
  if(!b && (b = vb._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function wb(a) {
  if(a ? a.ub : a) {
    return a.ub(a)
  }
  var b;
  b = wb[n(null == a ? null : a)];
  if(!b && (b = wb._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function xb(a) {
  this.Vc = a;
  this.p = 0;
  this.f = 1073741824
}
xb.prototype.cc = function(a, b) {
  return this.Vc.append(b)
};
function yb(a) {
  var b = new ja;
  a.t(null, new xb(b), la());
  return"" + w(b)
}
function zb(a, b) {
  if(q(z.b ? z.b(a, b) : z.call(null, a, b))) {
    return 0
  }
  var c = ta(a.Z);
  if(q(c ? b.Z : c)) {
    return-1
  }
  if(q(a.Z)) {
    if(ta(b.Z)) {
      return 1
    }
    c = Ab.b ? Ab.b(a.Z, b.Z) : Ab.call(null, a.Z, b.Z);
    return 0 === c ? Ab.b ? Ab.b(a.name, b.name) : Ab.call(null, a.name, b.name) : c
  }
  return Bb ? Ab.b ? Ab.b(a.name, b.name) : Ab.call(null, a.name, b.name) : null
}
function A(a, b, c, d, e) {
  this.Z = a;
  this.name = b;
  this.Oa = c;
  this.Ga = d;
  this.G = e;
  this.f = 2154168321;
  this.p = 4096
}
m = A.prototype;
m.t = function(a, b) {
  return y(b, this.Oa)
};
m.u = function() {
  var a = this.Ga;
  return null != a ? a : this.Ga = a = Cb.b ? Cb.b(B.a ? B.a(this.Z) : B.call(null, this.Z), B.a ? B.a(this.name) : B.call(null, this.name)) : Cb.call(null, B.a ? B.a(this.Z) : B.call(null, this.Z), B.a ? B.a(this.name) : B.call(null, this.name))
};
m.A = function(a, b) {
  return new A(this.Z, this.name, this.Oa, this.Ga, b)
};
m.w = f("G");
m.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return La.c(c, this, null);
      case 3:
        return La.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.a = function(a) {
  return La.c(a, this, null)
};
m.b = function(a, b) {
  return La.c(a, this, b)
};
m.r = function(a, b) {
  return b instanceof A ? this.Oa === b.Oa : !1
};
m.toString = f("Oa");
var Db = function() {
  function a(a, b) {
    var c = null != a ? [w(a), w("/"), w(b)].join("") : b;
    return new A(a, b, c, null, null)
  }
  function b(a) {
    return a instanceof A ? a : c.b(null, a)
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
function D(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 8388608 || a.gd)) {
    return a.v(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Eb(a, 0)
  }
  if(t(hb, a)) {
    return ib(a)
  }
  if(u) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null
}
function E(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 64 || a.$a)) {
    return a.D(null)
  }
  a = D(a);
  return null == a ? null : Ga(a)
}
function F(a) {
  return null != a ? a && (a.f & 64 || a.$a) ? a.U(null) : (a = D(a)) ? Ha(a) : G : G
}
function H(a) {
  return null == a ? null : a && (a.f & 128 || a.$b) ? a.R(null) : D(F(a))
}
var z = function() {
  function a(a, b) {
    return a === b || fb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = I(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.b(a, d)) {
          if(H(e)) {
            a = d, d = E(e), e = H(e)
          }else {
            return b.b(d, E(e))
          }
        }else {
          return!1
        }
      }
    }
    a.l = 2;
    a.g = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.e(b, e, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.a = ba(!0);
  b.b = a;
  b.e = c.e;
  return b
}();
gb["null"] = ba(0);
Ia["null"] = !0;
Ua["null"] = !0;
Va["null"] = ba(null);
za["null"] = !0;
Aa["null"] = ba(0);
fb["null"] = function(a, b) {
  return null == b
};
ab["null"] = !0;
bb["null"] = ba(null);
Za["null"] = !0;
$a["null"] = ba(null);
Ba["null"] = ba(null);
Pa["null"] = !0;
Qa["null"] = ba(null);
Date.prototype.r = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
fb.number = function(a, b) {
  return a === b
};
Za["function"] = !0;
$a["function"] = ba(null);
ya["function"] = !0;
gb._ = function(a) {
  return a[ca] || (a[ca] = ++da)
};
var Fb = function() {
  function a(a, b, c, d) {
    for(var l = Aa(a);;) {
      if(d < l) {
        c = b.b ? b.b(c, x.b(a, d)) : b.call(null, c, x.b(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = Aa(a), l = 0;;) {
      if(l < d) {
        c = b.b ? b.b(c, x.b(a, l)) : b.call(null, c, x.b(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = Aa(a);
    if(0 === c) {
      return b.k ? b.k() : b.call(null)
    }
    for(var d = x.b(a, 0), l = 1;;) {
      if(l < c) {
        d = b.b ? b.b(d, x.b(a, l)) : b.call(null, d, x.b(a, l)), l += 1
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
  d.o = a;
  return d
}(), Gb = function() {
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
      return b.k ? b.k() : b.call(null)
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
  d.o = a;
  return d
}();
function Hb(a) {
  return a ? a.f & 2 || a.xc ? !0 : a.f ? !1 : t(za, a) : t(za, a)
}
function Ib(a) {
  return a ? a.f & 16 || a.Yb ? !0 : a.f ? !1 : t(Ea, a) : t(Ea, a)
}
function Eb(a, b) {
  this.d = a;
  this.m = b;
  this.p = 0;
  this.f = 166199550
}
m = Eb.prototype;
m.u = function() {
  return Jb.a ? Jb.a(this) : Jb.call(null, this)
};
m.R = function() {
  return this.m + 1 < this.d.length ? new Eb(this.d, this.m + 1) : null
};
m.H = function(a, b) {
  return J.b ? J.b(b, this) : J.call(null, b, this)
};
m.Lb = function() {
  var a = Aa(this);
  return 0 < a ? new Kb(this, a - 1, null) : null
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return Gb.o(this.d, b, this.d[this.m], this.m + 1)
};
m.T = function(a, b, c) {
  return Gb.o(this.d, b, c, this.m)
};
m.v = function() {
  return this
};
m.I = function() {
  return this.d.length - this.m
};
m.D = function() {
  return this.d[this.m]
};
m.U = function() {
  return this.m + 1 < this.d.length ? new Eb(this.d, this.m + 1) : G
};
m.r = function(a, b) {
  return Lb.b ? Lb.b(this, b) : Lb.call(null, this, b)
};
m.$ = function(a, b) {
  var c = b + this.m;
  return c < this.d.length ? this.d[c] : null
};
m.ia = function(a, b, c) {
  a = b + this.m;
  return a < this.d.length ? this.d[a] : c
};
m.L = function() {
  return G
};
var Mb = function() {
  function a(a, b) {
    return b < a.length ? new Eb(a, b) : null
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
}(), I = function() {
  function a(a, b) {
    return Mb.b(a, b)
  }
  function b(a) {
    return Mb.b(a, 0)
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
function Kb(a, b, c) {
  this.sb = a;
  this.m = b;
  this.i = c;
  this.p = 0;
  this.f = 32374862
}
m = Kb.prototype;
m.u = function() {
  return Jb.a ? Jb.a(this) : Jb.call(null, this)
};
m.H = function(a, b) {
  return J.b ? J.b(b, this) : J.call(null, b, this)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return L.b ? L.b(b, this) : L.call(null, b, this)
};
m.T = function(a, b, c) {
  return L.c ? L.c(b, c, this) : L.call(null, b, c, this)
};
m.v = function() {
  return this
};
m.I = function() {
  return this.m + 1
};
m.D = function() {
  return x.b(this.sb, this.m)
};
m.U = function() {
  return 0 < this.m ? new Kb(this.sb, this.m - 1, null) : null
};
m.r = function(a, b) {
  return Lb.b ? Lb.b(this, b) : Lb.call(null, this, b)
};
m.A = function(a, b) {
  return new Kb(this.sb, this.m, b)
};
m.w = f("i");
m.L = function() {
  return O.b ? O.b(G, this.i) : O.call(null, G, this.i)
};
fb._ = function(a, b) {
  return a === b
};
var Nb = function() {
  function a(a, b) {
    return null != a ? Da(a, b) : Da(G, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = I(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(q(e)) {
          a = b.b(a, d), d = E(e), e = H(e)
        }else {
          return b.b(a, d)
        }
      }
    }
    a.l = 2;
    a.g = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b
}();
function P(a) {
  if(null != a) {
    if(a && (a.f & 2 || a.xc)) {
      a = a.I(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(t(za, a)) {
            a = Aa(a)
          }else {
            if(u) {
              a: {
                a = D(a);
                for(var b = 0;;) {
                  if(Hb(a)) {
                    a = b + Aa(a);
                    break a
                  }
                  a = H(a);
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
var Ob = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return D(a) ? E(a) : c
      }
      if(Ib(a)) {
        return x.c(a, b, c)
      }
      if(D(a)) {
        a = H(a), b -= 1
      }else {
        return u ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(D(a)) {
          return E(a)
        }
        throw Error("Index out of bounds");
      }
      if(Ib(a)) {
        return x.b(a, b)
      }
      if(D(a)) {
        var c = H(a), h = b - 1;
        a = c;
        b = h
      }else {
        if(u) {
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
}(), Q = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.f & 16 || a.Yb)) {
        return a.ia(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(t(Ea, a)) {
        return x.b(a, b)
      }
      if(u) {
        if(a ? a.f & 64 || a.$a || (a.f ? 0 : t(Fa, a)) : t(Fa, a)) {
          return Ob.c(a, b, c)
        }
        throw Error([w("nth not supported on this type "), w(wa(ua(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.f & 16 || a.Yb)) {
      return a.$(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(t(Ea, a)) {
      return x.b(a, b)
    }
    if(u) {
      if(a ? a.f & 64 || a.$a || (a.f ? 0 : t(Fa, a)) : t(Fa, a)) {
        return Ob.b(a, b)
      }
      throw Error([w("nth not supported on this type "), w(wa(ua(a)))].join(""));
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
}(), R = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.zc) ? a.N(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(Ja, a) ? La.c(a, b, c) : u ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.zc) ? a.M(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(Ja, a) ? La.b(a, b) : null
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
    return null != a ? Oa(a, b, c) : Pb.b ? Pb.b([b], [c]) : Pb.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = I(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.c(a, d, e), q(l)) {
          d = E(l), e = E(H(l)), l = H(H(l))
        }else {
          return a
        }
      }
    }
    a.l = 3;
    a.g = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var l = E(a);
      a = F(a);
      return c(b, d, l, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, I(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b
}(), Qb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = I(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.b(b, c), q(d)) {
          c = E(d), d = H(d)
        }else {
          return b
        }
      }
    }
    b.l = 2;
    b.g = function(a) {
      var b = E(a);
      a = H(a);
      var c = E(a);
      a = F(a);
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Qa(a, d);
      default:
        return b.e(a, d, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.g = b.g;
  a.a = aa();
  a.b = function(a, b) {
    return Qa(a, b)
  };
  a.e = b.e;
  return a
}();
function Rb(a) {
  var b = "function" == n(a);
  return b ? b : a ? q(q(null) ? null : a.wc) ? !0 : a.sd ? !1 : t(ya, a) : t(ya, a)
}
var O = function Sb(b, c) {
  return Rb(b) && !(b ? b.f & 262144 || b.ld || (b.f ? 0 : t(ab, b)) : t(ab, b)) ? Sb(function() {
    "undefined" === typeof ka && (ka = function(b, c, g, h) {
      this.i = b;
      this.ib = c;
      this.Wc = g;
      this.Uc = h;
      this.p = 0;
      this.f = 393217
    }, ka.qb = !0, ka.pb = "cljs.core/t17327", ka.Ub = function(b, c) {
      return y(c, "cljs.core/t17327")
    }, ka.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = I(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return T.b ? T.b(b.ib, d) : T.call(null, b.ib, d)
      }
      b.l = 1;
      b.g = function(b) {
        var d = E(b);
        b = F(b);
        return c(d, b)
      };
      b.e = c;
      return b
    }(), ka.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(xa(c)))
    }, ka.prototype.b = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = I(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h)
      }
      function c(b) {
        return T.b ? T.b(self__.ib, b) : T.call(null, self__.ib, b)
      }
      b.l = 0;
      b.g = function(b) {
        b = D(b);
        return c(b)
      };
      b.e = c;
      return b
    }(), ka.prototype.wc = !0, ka.prototype.w = f("Uc"), ka.prototype.A = function(b, c) {
      return new ka(this.i, this.ib, this.Wc, c)
    });
    return new ka(c, b, Sb, null)
  }(), c) : bb(b, c)
};
function Tb(a) {
  return(a ? a.f & 131072 || a.Bc || (a.f ? 0 : t(Za, a)) : t(Za, a)) ? $a(a) : null
}
var Ub = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = I(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.b(b, c), q(d)) {
          c = E(d), d = H(d)
        }else {
          return b
        }
      }
    }
    b.l = 2;
    b.g = function(a) {
      var b = E(a);
      a = H(a);
      var c = E(a);
      a = F(a);
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Va(a, d);
      default:
        return b.e(a, d, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.g = b.g;
  a.a = aa();
  a.b = function(a, b) {
    return Va(a, b)
  };
  a.e = b.e;
  return a
}(), Vb = {}, Wb = 0;
function B(a) {
  if(a && (a.f & 4194304 || a.cd)) {
    a = a.u(null)
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
            255 < Wb && (Vb = {}, Wb = 0);
            var b = Vb[a];
            "number" !== typeof b && (b = ea(a), Vb[a] = b, Wb += 1);
            a = b
          }else {
            a = u ? gb(a) : null
          }
        }
      }
    }
  }
  return a
}
function Xb(a) {
  return null == a || ta(D(a))
}
function Yb(a) {
  return null == a ? !1 : a ? a.f & 8 || a.ad ? !0 : a.f ? !1 : t(Ca, a) : t(Ca, a)
}
function Zb(a) {
  return a ? a.f & 16777216 || a.hd ? !0 : a.f ? !1 : t(jb, a) : t(jb, a)
}
function $b(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.dd ? !0 : a.f ? !1 : t(Pa, a) : t(Pa, a)
}
function ac(a) {
  return a ? a.f & 16384 || a.kd ? !0 : a.f ? !1 : t(Wa, a) : t(Wa, a)
}
function bc(a) {
  return a ? a.p & 512 || a.$c ? !0 : !1 : !1
}
function cc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var dc = {};
function ec(a) {
  return null == a ? !1 : a ? a.f & 64 || a.$a ? !0 : a.f ? !1 : t(Fa, a) : t(Fa, a)
}
function fc(a) {
  return q(a) ? !0 : !1
}
function gc(a, b) {
  return R.c(a, b, dc) === dc ? !1 : !0
}
function hc(a, b) {
  return null != a && (a ? a.f & 512 || a.Zc || (a.f ? 0 : t(Ma, a)) : t(Ma, a)) && gc(a, b) ? new U(null, 2, 5, V, [b, R.b(a, b)], null) : null
}
function Ab(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(ua(a) === ua(b)) {
    return a && (a.p & 2048 || a.jb) ? a.kb(null, b) : ha(a, b)
  }
  if(u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var ic = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = Ab(Q.b(a, h), Q.b(b, h));
      if(0 === k && h + 1 < c) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var g = P(a), h = P(b);
    return g < h ? -1 : g > h ? 1 : u ? c.o(a, b, g, 0) : null
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
  c.o = a;
  return c
}();
function jc(a) {
  return z.b(a, Ab) ? Ab : function(b, c) {
    var d = a.b ? a.b(b, c) : a.call(null, b, c);
    return"number" === typeof d ? d : q(d) ? -1 : q(a.b ? a.b(c, b) : a.call(null, c, b)) ? 1 : 0
  }
}
var lc = function() {
  function a(a, b) {
    if(D(b)) {
      var c = kc.a ? kc.a(b) : kc.call(null, b);
      ia(c, jc(a));
      return D(c)
    }
    return G
  }
  function b(a) {
    return c.b(Ab, a)
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
}(), L = function() {
  function a(a, b, c) {
    for(c = D(c);;) {
      if(c) {
        b = a.b ? a.b(b, E(c)) : a.call(null, b, E(c)), c = H(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = D(b);
    return c ? mc.c ? mc.c(a, E(c), H(c)) : mc.call(null, a, E(c), H(c)) : a.k ? a.k() : a.call(null)
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
}(), mc = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.Cc) ? c.T(null, a, b) : c instanceof Array ? Gb.c(c, a, b) : "string" === typeof c ? Gb.c(c, a, b) : t(cb, c) ? db.c(c, a, b) : u ? L.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.Cc) ? b.S(null, a) : b instanceof Array ? Gb.b(b, a) : "string" === typeof b ? Gb.b(b, a) : t(cb, b) ? db.b(b, a) : u ? L.b(a, b) : null
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
function nc(a) {
  return 0 <= a ? Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a) : Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a)
}
function oc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function pc(a) {
  var b = 1;
  for(a = D(a);;) {
    if(a && 0 < b) {
      b -= 1, a = H(a)
    }else {
      return a
    }
  }
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = I(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      for(var e = new ja(b.a(a)), l = d;;) {
        if(q(l)) {
          e = e.append(b.a(E(l))), l = H(l)
        }else {
          return e.toString()
        }
      }
    }
    a.l = 1;
    a.g = function(a) {
      var b = E(a);
      a = F(a);
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
        return c.e(b, I(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.g = c.g;
  b.k = ba("");
  b.a = a;
  b.e = c.e;
  return b
}(), qc = function() {
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
function Lb(a, b) {
  return fc(Zb(b) ? function() {
    for(var c = D(a), d = D(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(z.b(E(c), E(d))) {
        c = H(c), d = H(d)
      }else {
        return u ? !1 : null
      }
    }
  }() : null)
}
function Cb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Jb(a) {
  if(D(a)) {
    var b = B(E(a));
    for(a = H(a);;) {
      if(null == a) {
        return b
      }
      b = Cb(b, B(E(a)));
      a = H(a)
    }
  }else {
    return 0
  }
}
function rc(a) {
  var b = 0;
  for(a = D(a);;) {
    if(a) {
      var c = E(a), b = (b + (B(sc.a ? sc.a(c) : sc.call(null, c)) ^ B(tc.a ? tc.a(c) : tc.call(null, c)))) % 4503599627370496;
      a = H(a)
    }else {
      return b
    }
  }
}
function uc(a, b, c, d, e) {
  this.i = a;
  this.fb = b;
  this.ya = c;
  this.count = d;
  this.j = e;
  this.p = 0;
  this.f = 65937646
}
m = uc.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.R = function() {
  return 1 === this.count ? null : this.ya
};
m.H = function(a, b) {
  return new uc(this.i, b, this, this.count + 1, null)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return L.b(b, this)
};
m.T = function(a, b, c) {
  return L.c(b, c, this)
};
m.v = function() {
  return this
};
m.I = f("count");
m.D = f("fb");
m.U = function() {
  return 1 === this.count ? G : this.ya
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new uc(b, this.fb, this.ya, this.count, this.j)
};
m.w = f("i");
m.L = function() {
  return G
};
function vc(a) {
  this.i = a;
  this.p = 0;
  this.f = 65937614
}
m = vc.prototype;
m.u = ba(0);
m.R = ba(null);
m.H = function(a, b) {
  return new uc(this.i, b, null, 1, null)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return L.b(b, this)
};
m.T = function(a, b, c) {
  return L.c(b, c, this)
};
m.v = ba(null);
m.I = ba(0);
m.D = ba(null);
m.U = function() {
  return G
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new vc(b)
};
m.w = f("i");
m.L = function() {
  return this
};
var G = new vc(null);
function wc(a) {
  return(a ? a.f & 134217728 || a.fd || (a.f ? 0 : t(kb, a)) : t(kb, a)) ? lb(a) : mc.c(Nb, G, a)
}
function xc(a, b, c, d) {
  this.i = a;
  this.fb = b;
  this.ya = c;
  this.j = d;
  this.p = 0;
  this.f = 65929452
}
m = xc.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.R = function() {
  return null == this.ya ? null : D(this.ya)
};
m.H = function(a, b) {
  return new xc(null, b, this, this.j)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return L.b(b, this)
};
m.T = function(a, b, c) {
  return L.c(b, c, this)
};
m.v = function() {
  return this
};
m.D = f("fb");
m.U = function() {
  return null == this.ya ? G : this.ya
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new xc(b, this.fb, this.ya, this.j)
};
m.w = f("i");
m.L = function() {
  return O(G, this.i)
};
function J(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.$a)) ? new xc(null, a, b, null) : new xc(null, a, D(b), null)
}
function W(a, b, c, d) {
  this.Z = a;
  this.name = b;
  this.Ca = c;
  this.Ga = d;
  this.f = 2153775105;
  this.p = 4096
}
m = W.prototype;
m.t = function(a, b) {
  return y(b, [w(":"), w(this.Ca)].join(""))
};
m.u = function() {
  null == this.Ga && (this.Ga = Cb(B(this.Z), B(this.name)) + 2654435769);
  return this.Ga
};
m.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return R.b(c, this);
      case 3:
        return R.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.a = function(a) {
  return R.b(a, this)
};
m.b = function(a, b) {
  return R.c(a, this, b)
};
m.r = function(a, b) {
  return b instanceof W ? this.Ca === b.Ca : !1
};
m.toString = function() {
  return[w(":"), w(this.Ca)].join("")
};
function X(a, b) {
  return a === b ? !0 : a instanceof W && b instanceof W ? a.Ca === b.Ca : !1
}
function yc(a, b, c, d) {
  this.i = a;
  this.Va = b;
  this.n = c;
  this.j = d;
  this.p = 0;
  this.f = 32374988
}
m = yc.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.R = function() {
  ib(this);
  return null == this.n ? null : H(this.n)
};
m.H = function(a, b) {
  return J(b, this)
};
m.toString = function() {
  return yb(this)
};
function zc(a) {
  null != a.Va && (a.n = a.Va.k ? a.Va.k() : a.Va.call(null), a.Va = null);
  return a.n
}
m.S = function(a, b) {
  return L.b(b, this)
};
m.T = function(a, b, c) {
  return L.c(b, c, this)
};
m.v = function() {
  zc(this);
  if(null == this.n) {
    return null
  }
  for(var a = this.n;;) {
    if(a instanceof yc) {
      a = zc(a)
    }else {
      return this.n = a, D(this.n)
    }
  }
};
m.D = function() {
  ib(this);
  return null == this.n ? null : E(this.n)
};
m.U = function() {
  ib(this);
  return null != this.n ? F(this.n) : G
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new yc(b, this.Va, this.n, this.j)
};
m.w = f("i");
m.L = function() {
  return O(G, this.i)
};
function Ac(a, b) {
  this.rb = a;
  this.end = b;
  this.p = 0;
  this.f = 2
}
Ac.prototype.I = f("end");
Ac.prototype.add = function(a) {
  this.rb[this.end] = a;
  return this.end += 1
};
Ac.prototype.sa = function() {
  var a = new Bc(this.rb, 0, this.end);
  this.rb = null;
  return a
};
function Bc(a, b, c) {
  this.d = a;
  this.K = b;
  this.end = c;
  this.p = 0;
  this.f = 524306
}
m = Bc.prototype;
m.S = function(a, b) {
  return Gb.o(this.d, b, this.d[this.K], this.K + 1)
};
m.T = function(a, b, c) {
  return Gb.o(this.d, b, c, this.K)
};
m.Xb = function() {
  if(this.K === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Bc(this.d, this.K + 1, this.end)
};
m.$ = function(a, b) {
  return this.d[this.K + b]
};
m.ia = function(a, b, c) {
  return 0 <= b && b < this.end - this.K ? this.d[this.K + b] : c
};
m.I = function() {
  return this.end - this.K
};
var Cc = function() {
  function a(a, b, c) {
    return new Bc(a, b, c)
  }
  function b(a, b) {
    return new Bc(a, b, a.length)
  }
  function c(a) {
    return new Bc(a, 0, a.length)
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
function Dc(a, b, c, d) {
  this.sa = a;
  this.ta = b;
  this.i = c;
  this.j = d;
  this.f = 31850732;
  this.p = 1536
}
m = Dc.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.R = function() {
  if(1 < Aa(this.sa)) {
    return new Dc(tb(this.sa), this.ta, this.i, null)
  }
  var a = ib(this.ta);
  return null == a ? null : a
};
m.H = function(a, b) {
  return J(b, this)
};
m.toString = function() {
  return yb(this)
};
m.v = function() {
  return this
};
m.D = function() {
  return x.b(this.sa, 0)
};
m.U = function() {
  return 1 < Aa(this.sa) ? new Dc(tb(this.sa), this.ta, this.i, null) : null == this.ta ? G : this.ta
};
m.ub = function() {
  return null == this.ta ? null : this.ta
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new Dc(this.sa, this.ta, b, this.j)
};
m.w = f("i");
m.L = function() {
  return O(G, this.i)
};
m.vb = f("sa");
m.wb = function() {
  return null == this.ta ? G : this.ta
};
function Ec(a, b) {
  return 0 === Aa(a) ? b : new Dc(a, b, null, null)
}
function kc(a) {
  for(var b = [];;) {
    if(D(a)) {
      b.push(E(a)), a = H(a)
    }else {
      return b
    }
  }
}
function Fc(a, b) {
  if(Hb(a)) {
    return P(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && D(c)) {
      c = H(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Hc = function Gc(b) {
  return null == b ? null : null == H(b) ? D(E(b)) : u ? J(E(b), Gc(H(b))) : null
}, Ic = function() {
  function a(a, b) {
    return new yc(null, function() {
      var c = D(a);
      return c ? bc(c) ? Ec(ub(c), d.b(vb(c), b)) : J(E(c), d.b(F(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new yc(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new yc(null, ba(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = I(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g)
    }
    function b(a, c, e) {
      return function s(a, b) {
        return new yc(null, function() {
          var c = D(a);
          return c ? bc(c) ? Ec(ub(c), s(vb(c), b)) : J(E(c), s(F(c), b)) : q(b) ? s(E(b), H(b)) : null
        }, null, null)
      }(d.b(a, c), e)
    }
    a.l = 2;
    a.g = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return e.e(d, h, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 2;
  d.g = e.g;
  d.k = c;
  d.a = b;
  d.b = a;
  d.e = e.e;
  return d
}(), Jc = function() {
  function a(a, b, c, d) {
    return J(a, J(b, J(c, d)))
  }
  function b(a, b, c) {
    return J(a, J(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, p, r) {
      var s = null;
      4 < arguments.length && (s = I(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, s)
    }
    function b(a, c, d, e, g) {
      return J(a, J(c, J(d, J(e, Hc(g)))))
    }
    a.l = 4;
    a.g = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var r = E(a);
      a = F(a);
      return b(c, d, e, r, a)
    };
    a.e = b;
    return a
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return D(c);
      case 2:
        return J(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.e(c, g, h, k, I(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 4;
  c.g = d.g;
  c.a = function(a) {
    return D(a)
  };
  c.b = function(a, b) {
    return J(a, b)
  };
  c.c = b;
  c.o = a;
  c.e = d.e;
  return c
}();
function Kc(a, b, c) {
  var d = D(c);
  if(0 === b) {
    return a.k ? a.k() : a.call(null)
  }
  c = Ga(d);
  var e = Ha(d);
  if(1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c)
  }
  var d = Ga(e), g = Ha(e);
  if(2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d)
  }
  var e = Ga(g), h = Ha(g);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var g = Ga(h), k = Ha(h);
  if(4 === b) {
    return a.o ? a.o(c, d, e, g) : a.o ? a.o(c, d, e, g) : a.call(null, c, d, e, g)
  }
  h = Ga(k);
  k = Ha(k);
  if(5 === b) {
    return a.s ? a.s(c, d, e, g, h) : a.s ? a.s(c, d, e, g, h) : a.call(null, c, d, e, g, h)
  }
  a = Ga(k);
  var l = Ha(k);
  if(6 === b) {
    return a.la ? a.la(c, d, e, g, h, a) : a.la ? a.la(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a)
  }
  var k = Ga(l), p = Ha(l);
  if(7 === b) {
    return a.Qa ? a.Qa(c, d, e, g, h, a, k) : a.Qa ? a.Qa(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k)
  }
  var l = Ga(p), r = Ha(p);
  if(8 === b) {
    return a.Ib ? a.Ib(c, d, e, g, h, a, k, l) : a.Ib ? a.Ib(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l)
  }
  var p = Ga(r), s = Ha(r);
  if(9 === b) {
    return a.Jb ? a.Jb(c, d, e, g, h, a, k, l, p) : a.Jb ? a.Jb(c, d, e, g, h, a, k, l, p) : a.call(null, c, d, e, g, h, a, k, l, p)
  }
  var r = Ga(s), C = Ha(s);
  if(10 === b) {
    return a.xb ? a.xb(c, d, e, g, h, a, k, l, p, r) : a.xb ? a.xb(c, d, e, g, h, a, k, l, p, r) : a.call(null, c, d, e, g, h, a, k, l, p, r)
  }
  var s = Ga(C), K = Ha(C);
  if(11 === b) {
    return a.yb ? a.yb(c, d, e, g, h, a, k, l, p, r, s) : a.yb ? a.yb(c, d, e, g, h, a, k, l, p, r, s) : a.call(null, c, d, e, g, h, a, k, l, p, r, s)
  }
  var C = Ga(K), M = Ha(K);
  if(12 === b) {
    return a.zb ? a.zb(c, d, e, g, h, a, k, l, p, r, s, C) : a.zb ? a.zb(c, d, e, g, h, a, k, l, p, r, s, C) : a.call(null, c, d, e, g, h, a, k, l, p, r, s, C)
  }
  var K = Ga(M), N = Ha(M);
  if(13 === b) {
    return a.Ab ? a.Ab(c, d, e, g, h, a, k, l, p, r, s, C, K) : a.Ab ? a.Ab(c, d, e, g, h, a, k, l, p, r, s, C, K) : a.call(null, c, d, e, g, h, a, k, l, p, r, s, C, K)
  }
  var M = Ga(N), pa = Ha(N);
  if(14 === b) {
    return a.Bb ? a.Bb(c, d, e, g, h, a, k, l, p, r, s, C, K, M) : a.Bb ? a.Bb(c, d, e, g, h, a, k, l, p, r, s, C, K, M) : a.call(null, c, d, e, g, h, a, k, l, p, r, s, C, K, M)
  }
  var N = Ga(pa), va = Ha(pa);
  if(15 === b) {
    return a.Cb ? a.Cb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N) : a.Cb ? a.Cb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N) : a.call(null, c, d, e, g, h, a, k, l, p, r, s, C, K, M, N)
  }
  var pa = Ga(va), Ka = Ha(va);
  if(16 === b) {
    return a.Db ? a.Db(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa) : a.Db ? a.Db(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa) : a.call(null, c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa)
  }
  var va = Ga(Ka), eb = Ha(Ka);
  if(17 === b) {
    return a.Eb ? a.Eb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va) : a.Eb ? a.Eb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va) : a.call(null, c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va)
  }
  var Ka = Ga(eb), Pc = Ha(eb);
  if(18 === b) {
    return a.Fb ? a.Fb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va, Ka) : a.Fb ? a.Fb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va, Ka) : a.call(null, c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va, Ka)
  }
  eb = Ga(Pc);
  Pc = Ha(Pc);
  if(19 === b) {
    return a.Gb ? a.Gb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va, Ka, eb) : a.Gb ? a.Gb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va, Ka, eb) : a.call(null, c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va, Ka, eb)
  }
  var $d = Ga(Pc);
  Ha(Pc);
  if(20 === b) {
    return a.Hb ? a.Hb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va, Ka, eb, $d) : a.Hb ? a.Hb(c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va, Ka, eb, $d) : a.call(null, c, d, e, g, h, a, k, l, p, r, s, C, K, M, N, pa, va, Ka, eb, $d)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function a(a, b, c, d, e) {
    b = Jc.o(b, c, d, e);
    c = a.l;
    return a.g ? (d = Fc(b, c + 1), d <= c ? Kc(a, d, b) : a.g(b)) : a.apply(a, kc(b))
  }
  function b(a, b, c, d) {
    b = Jc.c(b, c, d);
    c = a.l;
    return a.g ? (d = Fc(b, c + 1), d <= c ? Kc(a, d, b) : a.g(b)) : a.apply(a, kc(b))
  }
  function c(a, b, c) {
    b = Jc.b(b, c);
    c = a.l;
    if(a.g) {
      var d = Fc(b, c + 1);
      return d <= c ? Kc(a, d, b) : a.g(b)
    }
    return a.apply(a, kc(b))
  }
  function d(a, b) {
    var c = a.l;
    if(a.g) {
      var d = Fc(b, c + 1);
      return d <= c ? Kc(a, d, b) : a.g(b)
    }
    return a.apply(a, kc(b))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, K) {
      var M = null;
      5 < arguments.length && (M = I(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, M)
    }
    function b(a, c, d, e, g, h) {
      c = J(c, J(d, J(e, J(g, Hc(h)))));
      d = a.l;
      return a.g ? (e = Fc(c, d + 1), e <= d ? Kc(a, e, c) : a.g(c)) : a.apply(a, kc(c))
    }
    a.l = 5;
    a.g = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var g = E(a);
      a = H(a);
      var h = E(a);
      a = F(a);
      return b(c, d, e, g, h, a)
    };
    a.e = b;
    return a
  }(), e = function(e, k, l, p, r, s) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, r);
      default:
        return g.e(e, k, l, p, r, I(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 5;
  e.g = g.g;
  e.b = d;
  e.c = c;
  e.o = b;
  e.s = a;
  e.e = g.e;
  return e
}(), Lc = function() {
  function a(a, b) {
    return!z.b(a, b)
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = I(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l)
    }
    function b(a, c, d) {
      return ta(T.o(z, a, c, d))
    }
    a.l = 2;
    a.g = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.e(b, e, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.a = ba(!1);
  b.b = a;
  b.e = c.e;
  return b
}();
function Mc(a) {
  return D(a) ? a : null
}
function Nc(a, b) {
  for(;;) {
    if(null == D(b)) {
      return!0
    }
    if(q(a.a ? a.a(E(b)) : a.call(null, E(b)))) {
      var c = a, d = H(b);
      a = c;
      b = d
    }else {
      return u ? !1 : null
    }
  }
}
function Oc(a) {
  for(var b = Qc;;) {
    if(D(a)) {
      var c = b.a ? b.a(E(a)) : b.call(null, E(a));
      if(q(c)) {
        return c
      }
      a = H(a)
    }else {
      return null
    }
  }
}
function Qc(a) {
  return a
}
function Rc(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = I(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l)
      }
      function c(b, d, e) {
        return ta(T.o(a, b, d, e))
      }
      b.l = 2;
      b.g = function(a) {
        var b = E(a);
        a = H(a);
        var d = E(a);
        a = F(a);
        return c(b, d, a)
      };
      b.e = c;
      return b
    }(), b = function(b, e, g) {
      switch(arguments.length) {
        case 0:
          return ta(a.k ? a.k() : a.call(null));
        case 1:
          return ta(a.a ? a.a(b) : a.call(null, b));
        case 2:
          return ta(a.b ? a.b(b, e) : a.call(null, b, e));
        default:
          return c.e(b, e, I(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.l = 2;
    b.g = c.g;
    return b
  }()
}
var Sc = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = I(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, g)
        }
        function k(d, l, p, r) {
          return a.a ? a.a(b.a ? b.a(T.s(c, d, l, p, r)) : b.call(null, T.s(c, d, l, p, r))) : a.call(null, b.a ? b.a(T.s(c, d, l, p, r)) : b.call(null, T.s(c, d, l, p, r)))
        }
        d.l = 3;
        d.g = function(a) {
          var b = E(a);
          a = H(a);
          var c = E(a);
          a = H(a);
          var d = E(a);
          a = F(a);
          return k(b, c, d, a)
        };
        d.e = k;
        return d
      }(), d = function(d, k, s, C) {
        switch(arguments.length) {
          case 0:
            return a.a ? a.a(b.a ? b.a(c.k ? c.k() : c.call(null)) : b.call(null, c.k ? c.k() : c.call(null))) : a.call(null, b.a ? b.a(c.k ? c.k() : c.call(null)) : b.call(null, c.k ? c.k() : c.call(null)));
          case 1:
            return a.a ? a.a(b.a ? b.a(c.a ? c.a(d) : c.call(null, d)) : b.call(null, c.a ? c.a(d) : c.call(null, d))) : a.call(null, b.a ? b.a(c.a ? c.a(d) : c.call(null, d)) : b.call(null, c.a ? c.a(d) : c.call(null, d)));
          case 2:
            return a.a ? a.a(b.a ? b.a(c.b ? c.b(d, k) : c.call(null, d, k)) : b.call(null, c.b ? c.b(d, k) : c.call(null, d, k))) : a.call(null, b.a ? b.a(c.b ? c.b(d, k) : c.call(null, d, k)) : b.call(null, c.b ? c.b(d, k) : c.call(null, d, k)));
          case 3:
            return a.a ? a.a(b.a ? b.a(c.c ? c.c(d, k, s) : c.call(null, d, k, s)) : b.call(null, c.c ? c.c(d, k, s) : c.call(null, d, k, s))) : a.call(null, b.a ? b.a(c.c ? c.c(d, k, s) : c.call(null, d, k, s)) : b.call(null, c.c ? c.c(d, k, s) : c.call(null, d, k, s)));
          default:
            return l.e(d, k, s, I(arguments, 3))
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
          3 < arguments.length && (h = I(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h)
        }
        function d(c, h, k, l) {
          return a.a ? a.a(T.s(b, c, h, k, l)) : a.call(null, T.s(b, c, h, k, l))
        }
        c.l = 3;
        c.g = function(a) {
          var b = E(a);
          a = H(a);
          var c = E(a);
          a = H(a);
          var e = E(a);
          a = F(a);
          return d(b, c, e, a)
        };
        c.e = d;
        return c
      }(), c = function(c, h, r, s) {
        switch(arguments.length) {
          case 0:
            return a.a ? a.a(b.k ? b.k() : b.call(null)) : a.call(null, b.k ? b.k() : b.call(null));
          case 1:
            return a.a ? a.a(b.a ? b.a(c) : b.call(null, c)) : a.call(null, b.a ? b.a(c) : b.call(null, c));
          case 2:
            return a.a ? a.a(b.b ? b.b(c, h) : b.call(null, c, h)) : a.call(null, b.b ? b.b(c, h) : b.call(null, c, h));
          case 3:
            return a.a ? a.a(b.c ? b.c(c, h, r) : b.call(null, c, h, r)) : a.call(null, b.c ? b.c(c, h, r) : b.call(null, c, h, r));
          default:
            return d.e(c, h, r, I(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.l = 3;
      c.g = d.g;
      return c
    }()
  }
  var c = null, d = function() {
    function a(c, d, e, p) {
      var r = null;
      3 < arguments.length && (r = I(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, r)
    }
    function b(a, c, d, e) {
      var g = wc(Jc.o(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d)
        }
        function b(a) {
          a = T.b(E(g), a);
          for(var c = H(g);;) {
            if(c) {
              a = E(c).call(null, a), c = H(c)
            }else {
              return a
            }
          }
        }
        a.l = 0;
        a.g = function(a) {
          a = D(a);
          return b(a)
        };
        a.e = b;
        return a
      }()
    }
    a.l = 3;
    a.g = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = F(a);
      return b(c, d, e, a)
    };
    a.e = b;
    return a
  }(), c = function(c, g, h, k) {
    switch(arguments.length) {
      case 0:
        return Qc;
      case 1:
        return c;
      case 2:
        return b.call(this, c, g);
      case 3:
        return a.call(this, c, g, h);
      default:
        return d.e(c, g, h, I(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 3;
  c.g = d.g;
  c.k = function() {
    return Qc
  };
  c.a = aa();
  c.b = b;
  c.c = a;
  c.e = d.e;
  return c
}(), Tc = function() {
  function a(a, b, c, d) {
    return function() {
      var l = null, p = function() {
        function l(a, b, c, d) {
          var e = null;
          3 < arguments.length && (e = I(Array.prototype.slice.call(arguments, 3), 0));
          return p.call(this, a, b, c, e)
        }
        function p(l, r, s, N) {
          return T.s(a, null == l ? b : l, null == r ? c : r, null == s ? d : s, N)
        }
        l.l = 3;
        l.g = function(a) {
          var b = E(a);
          a = H(a);
          var c = E(a);
          a = H(a);
          var d = E(a);
          a = F(a);
          return p(b, c, d, a)
        };
        l.e = p;
        return l
      }(), l = function(l, s, C, K) {
        switch(arguments.length) {
          case 2:
            return a.b ? a.b(null == l ? b : l, null == s ? c : s) : a.call(null, null == l ? b : l, null == s ? c : s);
          case 3:
            return a.c ? a.c(null == l ? b : l, null == s ? c : s, null == C ? d : C) : a.call(null, null == l ? b : l, null == s ? c : s, null == C ? d : C);
          default:
            return p.e(l, s, C, I(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      l.l = 3;
      l.g = p.g;
      return l
    }()
  }
  function b(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = I(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, g)
        }
        function k(d, l, p, r) {
          return T.s(a, null == d ? b : d, null == l ? c : l, p, r)
        }
        d.l = 3;
        d.g = function(a) {
          var b = E(a);
          a = H(a);
          var c = E(a);
          a = H(a);
          var d = E(a);
          a = F(a);
          return k(b, c, d, a)
        };
        d.e = k;
        return d
      }(), d = function(d, k, s, C) {
        switch(arguments.length) {
          case 2:
            return a.b ? a.b(null == d ? b : d, null == k ? c : k) : a.call(null, null == d ? b : d, null == k ? c : k);
          case 3:
            return a.c ? a.c(null == d ? b : d, null == k ? c : k, s) : a.call(null, null == d ? b : d, null == k ? c : k, s);
          default:
            return l.e(d, k, s, I(arguments, 3))
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
          3 < arguments.length && (h = I(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h)
        }
        function d(c, h, k, l) {
          return T.s(a, null == c ? b : c, h, k, l)
        }
        c.l = 3;
        c.g = function(a) {
          var b = E(a);
          a = H(a);
          var c = E(a);
          a = H(a);
          var e = E(a);
          a = F(a);
          return d(b, c, e, a)
        };
        c.e = d;
        return c
      }(), c = function(c, h, r, s) {
        switch(arguments.length) {
          case 1:
            return a.a ? a.a(null == c ? b : c) : a.call(null, null == c ? b : c);
          case 2:
            return a.b ? a.b(null == c ? b : c, h) : a.call(null, null == c ? b : c, h);
          case 3:
            return a.c ? a.c(null == c ? b : c, h, r) : a.call(null, null == c ? b : c, h, r);
          default:
            return d.e(c, h, r, I(arguments, 3))
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
  d.o = a;
  return d
}(), Uc = function() {
  function a(a, b, c, e) {
    return new yc(null, function() {
      var p = D(b), r = D(c), s = D(e);
      return p && r && s ? J(a.c ? a.c(E(p), E(r), E(s)) : a.call(null, E(p), E(r), E(s)), d.o(a, F(p), F(r), F(s))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new yc(null, function() {
      var e = D(b), p = D(c);
      return e && p ? J(a.b ? a.b(E(e), E(p)) : a.call(null, E(e), E(p)), d.c(a, F(e), F(p))) : null
    }, null, null)
  }
  function c(a, b) {
    return new yc(null, function() {
      var c = D(b);
      if(c) {
        if(bc(c)) {
          for(var e = ub(c), p = P(e), r = new Ac(Array(p), 0), s = 0;;) {
            if(s < p) {
              var C = a.a ? a.a(x.b(e, s)) : a.call(null, x.b(e, s));
              r.add(C);
              s += 1
            }else {
              break
            }
          }
          return Ec(r.sa(), d.b(a, vb(c)))
        }
        return J(a.a ? a.a(E(c)) : a.call(null, E(c)), d.b(a, F(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, g, s) {
      var C = null;
      4 < arguments.length && (C = I(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, C)
    }
    function b(a, c, e, g, h) {
      return d.b(function(b) {
        return T.b(a, b)
      }, function K(a) {
        return new yc(null, function() {
          var b = d.b(D, a);
          return Nc(Qc, b) ? J(d.b(E, b), K(d.b(F, b))) : null
        }, null, null)
      }(Nb.e(h, g, I([e, c], 0))))
    }
    a.l = 4;
    a.g = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var g = E(a);
      a = F(a);
      return b(c, d, e, g, a)
    };
    a.e = b;
    return a
  }(), d = function(d, h, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, I(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.g = e.g;
  d.b = c;
  d.c = b;
  d.o = a;
  d.e = e.e;
  return d
}(), Wc = function Vc(b, c) {
  return new yc(null, function() {
    if(0 < b) {
      var d = D(c);
      return d ? J(E(d), Vc(b - 1, F(d))) : null
    }
    return null
  }, null, null)
}, Xc = function() {
  function a(a, b) {
    return Wc(a, c.a(b))
  }
  function b(a) {
    return new yc(null, function() {
      return J(a, c.a(a))
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
}(), Zc = function Yc(b, c) {
  return new yc(null, function() {
    var d = D(c);
    if(d) {
      if(bc(d)) {
        for(var e = ub(d), g = P(e), h = new Ac(Array(g), 0), k = 0;;) {
          if(k < g) {
            if(q(b.a ? b.a(x.b(e, k)) : b.call(null, x.b(e, k)))) {
              var l = x.b(e, k);
              h.add(l)
            }
            k += 1
          }else {
            break
          }
        }
        return Ec(h.sa(), Yc(b, vb(d)))
      }
      e = E(d);
      d = F(d);
      return q(b.a ? b.a(e) : b.call(null, e)) ? J(e, Yc(b, d)) : Yc(b, d)
    }
    return null
  }, null, null)
};
function $c(a, b) {
  var c;
  null != a ? a && (a.p & 4 || a.bd) ? (c = mc.c(pb, ob(a), b), c = qb(c)) : c = mc.c(Da, a, b) : c = mc.c(Nb, G, b);
  return c
}
var ad = function() {
  function a(a, b, c, d, g, s) {
    var C = Q.c(b, 0, null);
    return(b = pc(b)) ? S.c(a, C, e.la(R.b(a, C), b, c, d, g, s)) : S.c(a, C, c.o ? c.o(R.b(a, C), d, g, s) : c.call(null, R.b(a, C), d, g, s))
  }
  function b(a, b, c, d, g) {
    var s = Q.c(b, 0, null);
    return(b = pc(b)) ? S.c(a, s, e.s(R.b(a, s), b, c, d, g)) : S.c(a, s, c.c ? c.c(R.b(a, s), d, g) : c.call(null, R.b(a, s), d, g))
  }
  function c(a, b, c, d) {
    var g = Q.c(b, 0, null);
    return(b = pc(b)) ? S.c(a, g, e.o(R.b(a, g), b, c, d)) : S.c(a, g, c.b ? c.b(R.b(a, g), d) : c.call(null, R.b(a, g), d))
  }
  function d(a, b, c) {
    var d = Q.c(b, 0, null);
    return(b = pc(b)) ? S.c(a, d, e.c(R.b(a, d), b, c)) : S.c(a, d, c.a ? c.a(R.b(a, d)) : c.call(null, R.b(a, d)))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, K, M) {
      var N = null;
      6 < arguments.length && (N = I(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, g, h, K, N)
    }
    function b(a, c, d, g, h, k, M) {
      var N = Q.c(c, 0, null);
      return(c = pc(c)) ? S.c(a, N, T.e(e, R.b(a, N), c, d, g, I([h, k, M], 0))) : S.c(a, N, T.e(d, R.b(a, N), g, h, k, I([M], 0)))
    }
    a.l = 6;
    a.g = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var g = E(a);
      a = H(a);
      var h = E(a);
      a = H(a);
      var M = E(a);
      a = F(a);
      return b(c, d, e, g, h, M, a)
    };
    a.e = b;
    return a
  }(), e = function(e, k, l, p, r, s, C) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, p);
      case 5:
        return b.call(this, e, k, l, p, r);
      case 6:
        return a.call(this, e, k, l, p, r, s);
      default:
        return g.e(e, k, l, p, r, s, I(arguments, 6))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 6;
  e.g = g.g;
  e.c = d;
  e.o = c;
  e.s = b;
  e.la = a;
  e.e = g.e;
  return e
}();
function bd(a, b) {
  this.q = a;
  this.d = b
}
function cd(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function dd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new bd(a, Array(32));
    d.d[0] = c;
    c = d;
    b -= 5
  }
}
var fd = function ed(b, c, d, e) {
  var g = new bd(d.q, xa(d.d)), h = b.h - 1 >>> c & 31;
  5 === c ? g.d[h] = e : (d = d.d[h], b = null != d ? ed(b, c - 5, d, e) : dd(null, c - 5, e), g.d[h] = b);
  return g
};
function gd(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function hd(a, b) {
  if(0 <= b && b < a.h) {
    if(b >= cd(a)) {
      return a.V
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      }else {
        return c.d
      }
    }
  }else {
    return gd(b, a.h)
  }
}
var jd = function id(b, c, d, e, g) {
  var h = new bd(d.q, xa(d.d));
  if(0 === c) {
    h.d[e & 31] = g
  }else {
    var k = e >>> c & 31;
    b = id(b, c - 5, d.d[k], e, g);
    h.d[k] = b
  }
  return h
};
function U(a, b, c, d, e, g) {
  this.i = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.V = e;
  this.j = g;
  this.p = 4;
  this.f = 167668511
}
m = U.prototype;
m.Ya = function() {
  return new kd(this.h, this.shift, ld.a ? ld.a(this.root) : ld.call(null, this.root), md.a ? md.a(this.V) : md.call(null, this.V))
};
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.M = function(a, b) {
  return x.c(this, b, null)
};
m.N = function(a, b, c) {
  return x.c(this, b, c)
};
m.Ia = function(a, b, c) {
  if(0 <= b && b < this.h) {
    return cd(this) <= b ? (a = xa(this.V), a[b & 31] = c, new U(this.i, this.h, this.shift, this.root, a, null)) : new U(this.i, this.h, this.shift, jd(this, this.shift, this.root, b, c), this.V, null)
  }
  if(b === this.h) {
    return Da(this, c)
  }
  if(u) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.h), w("]")].join(""));
  }
  return null
};
m.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.$(null, c);
      case 3:
        return this.ia(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.a = function(a) {
  return this.$(null, a)
};
m.b = function(a, b) {
  return this.ia(null, a, b)
};
m.H = function(a, b) {
  if(32 > this.h - cd(this)) {
    for(var c = this.V.length, d = Array(c + 1), e = 0;;) {
      if(e < c) {
        d[e] = this.V[e], e += 1
      }else {
        break
      }
    }
    d[c] = b;
    return new U(this.i, this.h + 1, this.shift, this.root, d, null)
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = new bd(null, Array(32)), d.d[0] = this.root, e = dd(null, this.shift, new bd(null, this.V)), d.d[1] = e) : d = fd(this, this.shift, this.root, new bd(null, this.V));
  return new U(this.i, this.h + 1, c, d, [b], null)
};
m.Lb = function() {
  return 0 < this.h ? new Kb(this, this.h - 1, null) : null
};
m.Kb = function() {
  return x.b(this, 0)
};
m.Zb = function() {
  return x.b(this, 1)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return Fb.b(this, b)
};
m.T = function(a, b, c) {
  return Fb.c(this, b, c)
};
m.v = function() {
  return 0 === this.h ? null : 32 > this.h ? I.a(this.V) : u ? nd.c ? nd.c(this, 0, 0) : nd.call(null, this, 0, 0) : null
};
m.I = f("h");
m.Mb = function(a, b, c) {
  return Oa(this, b, c)
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new U(b, this.h, this.shift, this.root, this.V, this.j)
};
m.w = f("i");
m.$ = function(a, b) {
  return hd(this, b)[b & 31]
};
m.ia = function(a, b, c) {
  return 0 <= b && b < this.h ? x.b(this, b) : c
};
m.L = function() {
  return O(od, this.i)
};
var V = new bd(null, Array(32)), od = new U(null, 0, 5, V, [], 0);
function pd(a) {
  return qb(mc.c(pb, ob(od), a))
}
function qd(a, b, c, d, e, g) {
  this.P = a;
  this.ja = b;
  this.m = c;
  this.K = d;
  this.i = e;
  this.j = g;
  this.f = 32243948;
  this.p = 1536
}
m = qd.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.R = function() {
  if(this.K + 1 < this.ja.length) {
    var a = nd.o ? nd.o(this.P, this.ja, this.m, this.K + 1) : nd.call(null, this.P, this.ja, this.m, this.K + 1);
    return null == a ? null : a
  }
  return wb(this)
};
m.H = function(a, b) {
  return J(b, this)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return Fb.b(rd.c ? rd.c(this.P, this.m + this.K, P(this.P)) : rd.call(null, this.P, this.m + this.K, P(this.P)), b)
};
m.T = function(a, b, c) {
  return Fb.c(rd.c ? rd.c(this.P, this.m + this.K, P(this.P)) : rd.call(null, this.P, this.m + this.K, P(this.P)), b, c)
};
m.v = function() {
  return this
};
m.D = function() {
  return this.ja[this.K]
};
m.U = function() {
  if(this.K + 1 < this.ja.length) {
    var a = nd.o ? nd.o(this.P, this.ja, this.m, this.K + 1) : nd.call(null, this.P, this.ja, this.m, this.K + 1);
    return null == a ? G : a
  }
  return vb(this)
};
m.ub = function() {
  var a = this.ja.length, a = this.m + a < Aa(this.P) ? nd.c ? nd.c(this.P, this.m + a, 0) : nd.call(null, this.P, this.m + a, 0) : null;
  return null == a ? null : a
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return nd.s ? nd.s(this.P, this.ja, this.m, this.K, b) : nd.call(null, this.P, this.ja, this.m, this.K, b)
};
m.L = function() {
  return O(od, this.i)
};
m.vb = function() {
  return Cc.b(this.ja, this.K)
};
m.wb = function() {
  var a = this.ja.length, a = this.m + a < Aa(this.P) ? nd.c ? nd.c(this.P, this.m + a, 0) : nd.call(null, this.P, this.m + a, 0) : null;
  return null == a ? G : a
};
var nd = function() {
  function a(a, b, c, d, l) {
    return new qd(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new qd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new qd(a, hd(a, b), b, c, null, null)
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
  d.o = b;
  d.s = a;
  return d
}();
function sd(a, b, c, d, e) {
  this.i = a;
  this.F = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.p = 0;
  this.f = 32400159
}
m = sd.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.M = function(a, b) {
  return x.c(this, b, null)
};
m.N = function(a, b, c) {
  return x.c(this, b, c)
};
m.Ia = function(a, b, c) {
  var d = this, e = d.start + b;
  return td.s ? td.s(d.i, S.c(d.F, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : td.call(null, d.i, S.c(d.F, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
m.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.$(null, c);
      case 3:
        return this.ia(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.a = function(a) {
  return this.$(null, a)
};
m.b = function(a, b) {
  return this.ia(null, a, b)
};
m.H = function(a, b) {
  return td.s ? td.s(this.i, Xa(this.F, this.end, b), this.start, this.end + 1, null) : td.call(null, this.i, Xa(this.F, this.end, b), this.start, this.end + 1, null)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return Fb.b(this, b)
};
m.T = function(a, b, c) {
  return Fb.c(this, b, c)
};
m.v = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : J(x.b(a.F, d), new yc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
m.I = function() {
  return this.end - this.start
};
m.Mb = function(a, b, c) {
  return Oa(this, b, c)
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return td.s ? td.s(b, this.F, this.start, this.end, this.j) : td.call(null, b, this.F, this.start, this.end, this.j)
};
m.w = f("i");
m.$ = function(a, b) {
  return 0 > b || this.end <= this.start + b ? gd(b, this.end - this.start) : x.b(this.F, this.start + b)
};
m.ia = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : x.c(this.F, this.start + b, c)
};
m.L = function() {
  return O(od, this.i)
};
function td(a, b, c, d, e) {
  for(;;) {
    if(b instanceof sd) {
      c = b.start + c, d = b.start + d, b = b.F
    }else {
      var g = P(b);
      if(0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new sd(a, b, c, d, e)
    }
  }
}
var rd = function() {
  function a(a, b, c) {
    return td(null, a, b, c, null)
  }
  function b(a, b) {
    return c.c(a, b, P(a))
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
function ld(a) {
  return new bd({}, xa(a.d))
}
function md(a) {
  var b = Array(32);
  cc(a, 0, b, 0, a.length);
  return b
}
var vd = function ud(b, c, d, e) {
  d = b.root.q === d.q ? d : new bd(b.root.q, xa(d.d));
  var g = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.d[g];
    b = null != h ? ud(b, c - 5, h, e) : dd(b.root.q, c - 5, e)
  }
  d.d[g] = b;
  return d
};
function kd(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.V = d;
  this.f = 275;
  this.p = 88
}
m = kd.prototype;
m.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.N(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.a = function(a) {
  return this.M(null, a)
};
m.b = function(a, b) {
  return this.N(null, a, b)
};
m.M = function(a, b) {
  return x.c(this, b, null)
};
m.N = function(a, b, c) {
  return x.c(this, b, c)
};
m.$ = function(a, b) {
  if(this.root.q) {
    return hd(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
m.ia = function(a, b, c) {
  return 0 <= b && b < this.h ? x.b(this, b) : c
};
m.I = function() {
  if(this.root.q) {
    return this.h
  }
  throw Error("count after persistent!");
};
m.bc = function(a, b, c) {
  var d = this;
  if(d.root.q) {
    if(0 <= b && b < d.h) {
      return cd(this) <= b ? d.V[b & 31] = c : (a = function g(a, k) {
        var l = d.root.q === k.q ? k : new bd(d.root.q, xa(k.d));
        if(0 === a) {
          l.d[b & 31] = c
        }else {
          var p = b >>> a & 31, r = g(a - 5, l.d[p]);
          l.d[p] = r
        }
        return l
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.h) {
      return pb(this, c)
    }
    if(u) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.h)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
m.Ra = function(a, b, c) {
  return sb(this, b, c)
};
m.Aa = function(a, b) {
  if(this.root.q) {
    if(32 > this.h - cd(this)) {
      this.V[this.h & 31] = b
    }else {
      var c = new bd(this.root.q, this.V), d = Array(32);
      d[0] = b;
      this.V = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = dd(this.root.q, this.shift, c);
        this.root = new bd(this.root.q, d);
        this.shift = e
      }else {
        this.root = vd(this, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
m.Ja = function() {
  if(this.root.q) {
    this.root.q = null;
    var a = this.h - cd(this), b = Array(a);
    cc(this.V, 0, b, 0, a);
    return new U(null, this.h, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function wd(a, b, c, d) {
  this.i = a;
  this.ma = b;
  this.Fa = c;
  this.j = d;
  this.p = 0;
  this.f = 31850572
}
m = wd.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.H = function(a, b) {
  return J(b, this)
};
m.toString = function() {
  return yb(this)
};
m.v = function() {
  return this
};
m.D = function() {
  return E(this.ma)
};
m.U = function() {
  var a = H(this.ma);
  return a ? new wd(this.i, a, this.Fa, null) : null == this.Fa ? Ba(this) : new wd(this.i, this.Fa, null, null)
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new wd(b, this.ma, this.Fa, this.j)
};
m.w = f("i");
m.L = function() {
  return O(G, this.i)
};
function xd(a, b, c, d, e) {
  this.i = a;
  this.count = b;
  this.ma = c;
  this.Fa = d;
  this.j = e;
  this.p = 0;
  this.f = 31858766
}
m = xd.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.H = function(a, b) {
  var c;
  q(this.ma) ? (c = this.Fa, c = new xd(this.i, this.count + 1, this.ma, Nb.b(q(c) ? c : od, b), null)) : c = new xd(this.i, this.count + 1, Nb.b(this.ma, b), od, null);
  return c
};
m.toString = function() {
  return yb(this)
};
m.v = function() {
  var a = D(this.Fa), b = this.ma;
  return q(q(b) ? b : a) ? new wd(null, this.ma, D(a), null) : null
};
m.I = f("count");
m.D = function() {
  return E(this.ma)
};
m.U = function() {
  return F(D(this))
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new xd(b, this.count, this.ma, this.Fa, this.j)
};
m.w = f("i");
m.L = function() {
  return yd
};
var yd = new xd(null, 0, null, od, 0);
function zd() {
  this.p = 0;
  this.f = 2097152
}
zd.prototype.r = ba(!1);
var Ad = new zd;
function Bd(a, b) {
  return fc($b(b) ? P(a) === P(b) ? Nc(Qc, Uc.b(function(a) {
    return z.b(R.c(b, E(a), Ad), E(H(a)))
  }, a)) : null : null)
}
function Cd(a, b) {
  var c = a.d;
  if(b instanceof W) {
    a: {
      for(var d = c.length, e = b.Ca, g = 0;;) {
        if(d <= g) {
          c = -1;
          break a
        }
        var h = c[g];
        if(h instanceof W && e === h.Ca) {
          c = g;
          break a
        }
        if(u) {
          g += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if("string" == typeof b || "number" === typeof b) {
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
          if(u) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof A) {
        a: {
          d = c.length;
          e = b.Oa;
          for(g = 0;;) {
            if(d <= g) {
              c = -1;
              break a
            }
            h = c[g];
            if(h instanceof A && e === h.Oa) {
              c = g;
              break a
            }
            if(u) {
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
              if(u) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(u) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(z.b(b, c[e])) {
                  c = e;
                  break a
                }
                if(u) {
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
function Dd(a, b, c) {
  this.d = a;
  this.m = b;
  this.G = c;
  this.p = 0;
  this.f = 32374990
}
m = Dd.prototype;
m.u = function() {
  return Jb(this)
};
m.R = function() {
  return this.m < this.d.length - 2 ? new Dd(this.d, this.m + 2, this.G) : null
};
m.H = function(a, b) {
  return J(b, this)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return L.b(b, this)
};
m.T = function(a, b, c) {
  return L.c(b, c, this)
};
m.v = function() {
  return this
};
m.I = function() {
  return(this.d.length - this.m) / 2
};
m.D = function() {
  return new U(null, 2, 5, V, [this.d[this.m], this.d[this.m + 1]], null)
};
m.U = function() {
  return this.m < this.d.length - 2 ? new Dd(this.d, this.m + 2, this.G) : G
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new Dd(this.d, this.m, b)
};
m.w = f("G");
m.L = function() {
  return O(G, this.G)
};
function ma(a, b, c, d) {
  this.i = a;
  this.h = b;
  this.d = c;
  this.j = d;
  this.p = 4;
  this.f = 16123663
}
m = ma.prototype;
m.Ya = function() {
  return new Ed({}, this.d.length, xa(this.d))
};
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = rc(this)
};
m.M = function(a, b) {
  return La.c(this, b, null)
};
m.N = function(a, b, c) {
  a = Cd(this, b);
  return-1 === a ? c : this.d[a + 1]
};
m.Ia = function(a, b, c) {
  a = Cd(this, b);
  if(-1 === a) {
    if(this.h < Fd) {
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
      return new ma(this.i, this.h + 1, e, null)
    }
    return bb(Oa($c(Gd, this), b, c), this.i)
  }
  return c === this.d[a + 1] ? this : u ? (b = xa(this.d), b[a + 1] = c, new ma(this.i, this.h, b, null)) : null
};
m.tb = function(a, b) {
  return-1 !== Cd(this, b)
};
m.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.N(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.a = function(a) {
  return this.M(null, a)
};
m.b = function(a, b) {
  return this.N(null, a, b)
};
m.H = function(a, b) {
  return ac(b) ? Oa(this, x.b(b, 0), x.b(b, 1)) : mc.c(Da, this, b)
};
m.toString = function() {
  return yb(this)
};
m.v = function() {
  return 0 <= this.d.length - 2 ? new Dd(this.d, 0, null) : null
};
m.I = f("h");
m.r = function(a, b) {
  return Bd(this, b)
};
m.A = function(a, b) {
  return new ma(b, this.h, this.d, this.j)
};
m.w = f("i");
m.L = function() {
  return bb(Hd, this.i)
};
m.Za = function(a, b) {
  if(0 <= Cd(this, b)) {
    var c = this.d.length, d = c - 2;
    if(0 === d) {
      return Ba(this)
    }
    for(var d = Array(d), e = 0, g = 0;;) {
      if(e >= c) {
        return new ma(this.i, this.h - 1, d, null)
      }
      if(z.b(b, this.d[e])) {
        e += 2
      }else {
        if(u) {
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
var Hd = new ma(null, 0, [], null), Fd = 8;
function Id(a) {
  for(var b = a.length, c = 0, d = ob(Hd);;) {
    if(c < b) {
      var e = c + 2, d = rb(d, a[c], a[c + 1]), c = e
    }else {
      return qb(d)
    }
  }
}
function Ed(a, b, c) {
  this.Ta = a;
  this.xa = b;
  this.d = c;
  this.p = 56;
  this.f = 258
}
m = Ed.prototype;
m.Ra = function(a, b, c) {
  if(q(this.Ta)) {
    a = Cd(this, b);
    if(-1 === a) {
      if(this.xa + 2 <= 2 * Fd) {
        return this.xa += 2, this.d.push(b), this.d.push(c), this
      }
      a = Jd.b ? Jd.b(this.xa, this.d) : Jd.call(null, this.xa, this.d);
      return rb(a, b, c)
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
m.Aa = function(a, b) {
  if(q(this.Ta)) {
    if(b ? b.f & 2048 || b.Ac || (b.f ? 0 : t(Ra, b)) : t(Ra, b)) {
      return rb(this, sc.a ? sc.a(b) : sc.call(null, b), tc.a ? tc.a(b) : tc.call(null, b))
    }
    for(var c = D(b), d = this;;) {
      var e = E(c);
      if(q(e)) {
        c = H(c), d = rb(d, sc.a ? sc.a(e) : sc.call(null, e), tc.a ? tc.a(e) : tc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
m.Ja = function() {
  if(q(this.Ta)) {
    return this.Ta = !1, new ma(null, nc((this.xa - this.xa % 2) / 2), this.d, null)
  }
  throw Error("persistent! called twice");
};
m.M = function(a, b) {
  return La.c(this, b, null)
};
m.N = function(a, b, c) {
  if(q(this.Ta)) {
    return a = Cd(this, b), -1 === a ? c : this.d[a + 1]
  }
  throw Error("lookup after persistent!");
};
m.I = function() {
  if(q(this.Ta)) {
    return nc((this.xa - this.xa % 2) / 2)
  }
  throw Error("count after persistent!");
};
function Jd(a, b) {
  for(var c = ob(Gd), d = 0;;) {
    if(d < a) {
      c = rb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Kd() {
  this.ua = !1
}
function Ld(a, b) {
  return a === b ? !0 : X(a, b) ? !0 : u ? z.b(a, b) : null
}
var Md = function() {
  function a(a, b, c, h, k) {
    a = xa(a);
    a[b] = c;
    a[h] = k;
    return a
  }
  function b(a, b, c) {
    a = xa(a);
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
  c.s = a;
  return c
}();
function Nd(a, b) {
  var c = Array(a.length - 2);
  cc(a, 0, c, 0, 2 * b);
  cc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var Od = function() {
  function a(a, b, c, h, k, l) {
    a = a.Ua(b);
    a.d[c] = h;
    a.d[k] = l;
    return a
  }
  function b(a, b, c, h) {
    a = a.Ua(b);
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
  c.o = b;
  c.la = a;
  return c
}();
function Pd(a, b, c) {
  this.q = a;
  this.B = b;
  this.d = c
}
m = Pd.prototype;
m.oa = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = oc(this.B & h - 1);
  if(0 === (this.B & h)) {
    var l = oc(this.B);
    if(2 * l < this.d.length) {
      a = this.Ua(a);
      b = a.d;
      g.ua = !0;
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
      a.B |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = Qd.oa(a, b + 5, c, d, e, g);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.B >>> d & 1) && (k[d] = null != this.d[e] ? Qd.oa(a, b + 5, B(this.d[e]), this.d[e], this.d[e + 1], g) : this.d[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Rd(a, l + 1, k)
    }
    return u ? (b = Array(2 * (l + 4)), cc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, cc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.ua = !0, a = this.Ua(a), a.d = b, a.B |= h, a) : null
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.oa(a, b + 5, c, d, e, g), l === h ? this : Od.o(this, a, 2 * k + 1, l)) : Ld(d, l) ? e === h ? this : Od.o(this, a, 2 * k + 1, e) : u ? (g.ua = !0, Od.la(this, a, 2 * k, null, 2 * k + 1, Sd.Qa ? Sd.Qa(a, b + 5, l, h, c, d, e) : Sd.call(null, a, b + 5, l, h, c, d, e))) : null
};
m.gb = function() {
  return Td.a ? Td.a(this.d) : Td.call(null, this.d)
};
m.Ua = function(a) {
  if(a === this.q) {
    return this
  }
  var b = oc(this.B), c = Array(0 > b ? 4 : 2 * (b + 1));
  cc(this.d, 0, c, 0, 2 * b);
  return new Pd(a, this.B, c)
};
m.hb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.B & d)) {
    return this
  }
  var e = oc(this.B & d - 1), g = this.d[2 * e], h = this.d[2 * e + 1];
  return null == g ? (a = h.hb(a + 5, b, c), a === h ? this : null != a ? new Pd(null, this.B, Md.c(this.d, 2 * e + 1, a)) : this.B === d ? null : u ? new Pd(null, this.B ^ d, Nd(this.d, e)) : null) : Ld(c, g) ? new Pd(null, this.B ^ d, Nd(this.d, e)) : u ? this : null
};
m.na = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = oc(this.B & g - 1);
  if(0 === (this.B & g)) {
    var k = oc(this.B);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = Qd.na(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.B >>> c & 1) && (h[c] = null != this.d[d] ? Qd.na(a + 5, B(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Rd(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    cc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    cc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ua = !0;
    return new Pd(null, this.B | g, a)
  }
  k = this.d[2 * h];
  g = this.d[2 * h + 1];
  return null == k ? (k = g.na(a + 5, b, c, d, e), k === g ? this : new Pd(null, this.B, Md.c(this.d, 2 * h + 1, k))) : Ld(c, k) ? d === g ? this : new Pd(null, this.B, Md.c(this.d, 2 * h + 1, d)) : u ? (e.ua = !0, new Pd(null, this.B, Md.s(this.d, 2 * h, null, 2 * h + 1, Sd.la ? Sd.la(a + 5, k, g, b, c, d) : Sd.call(null, a + 5, k, g, b, c, d)))) : null
};
m.Da = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.B & e)) {
    return d
  }
  var g = oc(this.B & e - 1), e = this.d[2 * g], g = this.d[2 * g + 1];
  return null == e ? g.Da(a + 5, b, c, d) : Ld(c, e) ? g : u ? d : null
};
var Qd = new Pd(null, 0, []);
function Rd(a, b, c) {
  this.q = a;
  this.h = b;
  this.d = c
}
m = Rd.prototype;
m.oa = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.d[h];
  if(null == k) {
    return a = Od.o(this, a, h, Qd.oa(a, b + 5, c, d, e, g)), a.h += 1, a
  }
  b = k.oa(a, b + 5, c, d, e, g);
  return b === k ? this : Od.o(this, a, h, b)
};
m.gb = function() {
  return Ud.a ? Ud.a(this.d) : Ud.call(null, this.d)
};
m.Ua = function(a) {
  return a === this.q ? this : new Rd(a, this.h, xa(this.d))
};
m.hb = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if(null != e) {
    a = e.hb(a + 5, b, c);
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
                d = new Pd(null, h, b);
                break a
              }
            }
            d = void 0
          }
        }else {
          d = new Rd(null, this.h - 1, Md.c(this.d, d, a))
        }
      }else {
        d = u ? new Rd(null, this.h, Md.c(this.d, d, a)) : null
      }
    }
    return d
  }
  return this
};
m.na = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.d[g];
  if(null == h) {
    return new Rd(null, this.h + 1, Md.c(this.d, g, Qd.na(a + 5, b, c, d, e)))
  }
  a = h.na(a + 5, b, c, d, e);
  return a === h ? this : new Rd(null, this.h, Md.c(this.d, g, a))
};
m.Da = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.Da(a + 5, b, c, d) : d
};
function Vd(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Ld(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Wd(a, b, c, d) {
  this.q = a;
  this.wa = b;
  this.h = c;
  this.d = d
}
m = Wd.prototype;
m.oa = function(a, b, c, d, e, g) {
  if(c === this.wa) {
    b = Vd(this.d, this.h, d);
    if(-1 === b) {
      if(this.d.length > 2 * this.h) {
        return a = Od.la(this, a, 2 * this.h, d, 2 * this.h + 1, e), g.ua = !0, a.h += 1, a
      }
      c = this.d.length;
      b = Array(c + 2);
      cc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.ua = !0;
      g = this.h + 1;
      a === this.q ? (this.d = b, this.h = g, a = this) : a = new Wd(this.q, this.wa, g, b);
      return a
    }
    return this.d[b + 1] === e ? this : Od.o(this, a, b + 1, e)
  }
  return(new Pd(a, 1 << (this.wa >>> b & 31), [null, this, null, null])).oa(a, b, c, d, e, g)
};
m.gb = function() {
  return Td.a ? Td.a(this.d) : Td.call(null, this.d)
};
m.Ua = function(a) {
  if(a === this.q) {
    return this
  }
  var b = Array(2 * (this.h + 1));
  cc(this.d, 0, b, 0, 2 * this.h);
  return new Wd(a, this.wa, this.h, b)
};
m.hb = function(a, b, c) {
  a = Vd(this.d, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : u ? new Wd(null, this.wa, this.h - 1, Nd(this.d, nc((a - a % 2) / 2))) : null
};
m.na = function(a, b, c, d, e) {
  return b === this.wa ? (a = Vd(this.d, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), cc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ua = !0, new Wd(null, this.wa, this.h + 1, b)) : z.b(this.d[a], d) ? this : new Wd(null, this.wa, this.h, Md.c(this.d, a + 1, d))) : (new Pd(null, 1 << (this.wa >>> a & 31), [null, this])).na(a, b, c, d, e)
};
m.Da = function(a, b, c, d) {
  a = Vd(this.d, this.h, c);
  return 0 > a ? d : Ld(c, this.d[a]) ? this.d[a + 1] : u ? d : null
};
var Sd = function() {
  function a(a, b, c, h, k, l, p) {
    var r = B(c);
    if(r === k) {
      return new Wd(null, r, 2, [c, h, l, p])
    }
    var s = new Kd;
    return Qd.oa(a, b, r, c, h, s).oa(a, b, k, l, p, s)
  }
  function b(a, b, c, h, k, l) {
    var p = B(b);
    if(p === h) {
      return new Wd(null, p, 2, [b, c, k, l])
    }
    var r = new Kd;
    return Qd.na(a, p, b, c, r).na(a, h, k, l, r)
  }
  var c = null, c = function(c, e, g, h, k, l, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, p)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.la = b;
  c.Qa = a;
  return c
}();
function Xd(a, b, c, d, e) {
  this.i = a;
  this.pa = b;
  this.m = c;
  this.n = d;
  this.j = e;
  this.p = 0;
  this.f = 32374860
}
m = Xd.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.H = function(a, b) {
  return J(b, this)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return L.b(b, this)
};
m.T = function(a, b, c) {
  return L.c(b, c, this)
};
m.v = function() {
  return this
};
m.D = function() {
  return null == this.n ? new U(null, 2, 5, V, [this.pa[this.m], this.pa[this.m + 1]], null) : E(this.n)
};
m.U = function() {
  return null == this.n ? Td.c ? Td.c(this.pa, this.m + 2, null) : Td.call(null, this.pa, this.m + 2, null) : Td.c ? Td.c(this.pa, this.m, H(this.n)) : Td.call(null, this.pa, this.m, H(this.n))
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new Xd(b, this.pa, this.m, this.n, this.j)
};
m.w = f("i");
m.L = function() {
  return O(G, this.i)
};
var Td = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new Xd(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(q(h) && (h = h.gb(), q(h))) {
            return new Xd(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new Xd(null, a, b, c, null)
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
function Yd(a, b, c, d, e) {
  this.i = a;
  this.pa = b;
  this.m = c;
  this.n = d;
  this.j = e;
  this.p = 0;
  this.f = 32374860
}
m = Yd.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.H = function(a, b) {
  return J(b, this)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return L.b(b, this)
};
m.T = function(a, b, c) {
  return L.c(b, c, this)
};
m.v = function() {
  return this
};
m.D = function() {
  return E(this.n)
};
m.U = function() {
  return Ud.o ? Ud.o(null, this.pa, this.m, H(this.n)) : Ud.call(null, null, this.pa, this.m, H(this.n))
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new Yd(b, this.pa, this.m, this.n, this.j)
};
m.w = f("i");
m.L = function() {
  return O(G, this.i)
};
var Ud = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(q(k) && (k = k.gb(), q(k))) {
            return new Yd(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new Yd(a, b, c, h, null)
    }
  }
  function b(a) {
    return c.o(null, a, 0, null)
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
  c.o = a;
  return c
}();
function Zd(a, b, c, d, e, g) {
  this.i = a;
  this.h = b;
  this.root = c;
  this.Y = d;
  this.ga = e;
  this.j = g;
  this.p = 4;
  this.f = 16123663
}
m = Zd.prototype;
m.Ya = function() {
  return new ae({}, this.root, this.h, this.Y, this.ga)
};
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = rc(this)
};
m.M = function(a, b) {
  return La.c(this, b, null)
};
m.N = function(a, b, c) {
  return null == b ? this.Y ? this.ga : c : null == this.root ? c : u ? this.root.Da(0, B(b), b, c) : null
};
m.Ia = function(a, b, c) {
  if(null == b) {
    return this.Y && c === this.ga ? this : new Zd(this.i, this.Y ? this.h : this.h + 1, this.root, !0, c, null)
  }
  a = new Kd;
  b = (null == this.root ? Qd : this.root).na(0, B(b), b, c, a);
  return b === this.root ? this : new Zd(this.i, a.ua ? this.h + 1 : this.h, b, this.Y, this.ga, null)
};
m.tb = function(a, b) {
  return null == b ? this.Y : null == this.root ? !1 : u ? this.root.Da(0, B(b), b, dc) !== dc : null
};
m.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.N(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.a = function(a) {
  return this.M(null, a)
};
m.b = function(a, b) {
  return this.N(null, a, b)
};
m.H = function(a, b) {
  return ac(b) ? Oa(this, x.b(b, 0), x.b(b, 1)) : mc.c(Da, this, b)
};
m.toString = function() {
  return yb(this)
};
m.v = function() {
  if(0 < this.h) {
    var a = null != this.root ? this.root.gb() : null;
    return this.Y ? J(new U(null, 2, 5, V, [null, this.ga], null), a) : a
  }
  return null
};
m.I = f("h");
m.r = function(a, b) {
  return Bd(this, b)
};
m.A = function(a, b) {
  return new Zd(b, this.h, this.root, this.Y, this.ga, this.j)
};
m.w = f("i");
m.L = function() {
  return bb(Gd, this.i)
};
m.Za = function(a, b) {
  if(null == b) {
    return this.Y ? new Zd(this.i, this.h - 1, this.root, !1, null, null) : this
  }
  if(null == this.root) {
    return this
  }
  if(u) {
    var c = this.root.hb(0, B(b), b);
    return c === this.root ? this : new Zd(this.i, this.h - 1, c, this.Y, this.ga, null)
  }
  return null
};
var Gd = new Zd(null, 0, null, !1, null, 0);
function Pb(a, b) {
  for(var c = a.length, d = 0, e = ob(Gd);;) {
    if(d < c) {
      var g = d + 1, e = e.Ra(null, a[d], b[d]), d = g
    }else {
      return qb(e)
    }
  }
}
function ae(a, b, c, d, e) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.Y = d;
  this.ga = e;
  this.p = 56;
  this.f = 258
}
m = ae.prototype;
m.Ra = function(a, b, c) {
  return be(this, b, c)
};
m.Aa = function(a, b) {
  var c;
  a: {
    if(this.q) {
      if(b ? b.f & 2048 || b.Ac || (b.f ? 0 : t(Ra, b)) : t(Ra, b)) {
        c = be(this, sc.a ? sc.a(b) : sc.call(null, b), tc.a ? tc.a(b) : tc.call(null, b));
        break a
      }
      c = D(b);
      for(var d = this;;) {
        var e = E(c);
        if(q(e)) {
          c = H(c), d = be(d, sc.a ? sc.a(e) : sc.call(null, e), tc.a ? tc.a(e) : tc.call(null, e))
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
m.Ja = function() {
  var a;
  if(this.q) {
    this.q = null, a = new Zd(null, this.count, this.root, this.Y, this.ga, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
m.M = function(a, b) {
  return null == b ? this.Y ? this.ga : null : null == this.root ? null : this.root.Da(0, B(b), b)
};
m.N = function(a, b, c) {
  return null == b ? this.Y ? this.ga : c : null == this.root ? c : this.root.Da(0, B(b), b, c)
};
m.I = function() {
  if(this.q) {
    return this.count
  }
  throw Error("count after persistent!");
};
function be(a, b, c) {
  if(a.q) {
    if(null == b) {
      a.ga !== c && (a.ga = c), a.Y || (a.count += 1, a.Y = !0)
    }else {
      var d = new Kd;
      b = (null == a.root ? Qd : a.root).oa(a.q, 0, B(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ua && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var ce = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = D(a), e = ob(Gd);;) {
      if(b) {
        a = H(H(b));
        var g = E(b), b = E(H(b)), e = rb(e, g, b), b = a
      }else {
        return qb(e)
      }
    }
  }
  a.l = 0;
  a.g = function(a) {
    a = D(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function de(a, b) {
  this.Ea = a;
  this.G = b;
  this.p = 0;
  this.f = 32374988
}
m = de.prototype;
m.u = function() {
  return Jb(this)
};
m.R = function() {
  var a = this.Ea, a = (a ? a.f & 128 || a.$b || (a.f ? 0 : t(Ia, a)) : t(Ia, a)) ? this.Ea.R(null) : H(this.Ea);
  return null == a ? null : new de(a, this.G)
};
m.H = function(a, b) {
  return J(b, this)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return L.b(b, this)
};
m.T = function(a, b, c) {
  return L.c(b, c, this)
};
m.v = function() {
  return this
};
m.D = function() {
  return this.Ea.D(null).Kb()
};
m.U = function() {
  var a = this.Ea, a = (a ? a.f & 128 || a.$b || (a.f ? 0 : t(Ia, a)) : t(Ia, a)) ? this.Ea.R(null) : H(this.Ea);
  return null != a ? new de(a, this.G) : G
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new de(this.Ea, b)
};
m.w = f("G");
m.L = function() {
  return O(G, this.G)
};
function ee(a) {
  return(a = D(a)) ? new de(a, null) : null
}
function sc(a) {
  return Sa(a)
}
function tc(a) {
  return Ta(a)
}
var fe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return q(Oc(a)) ? mc.b(function(a, b) {
      return Nb.b(q(a) ? a : Hd, b)
    }, a) : null
  }
  a.l = 0;
  a.g = function(a) {
    a = D(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function ge(a, b, c) {
  this.i = a;
  this.Ma = b;
  this.j = c;
  this.p = 4;
  this.f = 15077647
}
m = ge.prototype;
m.Ya = function() {
  return new he(ob(this.Ma))
};
m.u = function() {
  var a = this.j;
  if(null != a) {
    return a
  }
  a: {
    for(var a = 0, b = D(this);;) {
      if(b) {
        var c = E(b), a = (a + B(c)) % 4503599627370496, b = H(b)
      }else {
        break a
      }
    }
    a = void 0
  }
  return this.j = a
};
m.M = function(a, b) {
  return La.c(this, b, null)
};
m.N = function(a, b, c) {
  return Na(this.Ma, b) ? b : c
};
m.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.N(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.a = function(a) {
  return this.M(null, a)
};
m.b = function(a, b) {
  return this.N(null, a, b)
};
m.H = function(a, b) {
  return new ge(this.i, S.c(this.Ma, b, null), null)
};
m.toString = function() {
  return yb(this)
};
m.v = function() {
  return ee(this.Ma)
};
m.ac = function(a, b) {
  return new ge(this.i, Qa(this.Ma, b), null)
};
m.I = function() {
  return Aa(this.Ma)
};
m.r = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.f & 4096 || b.jd ? !0 : b.f ? !1 : t(Ua, b) : t(Ua, b)) && P(c) === P(b) && Nc(function(a) {
    return gc(c, a)
  }, b)
};
m.A = function(a, b) {
  return new ge(b, this.Ma, this.j)
};
m.w = f("i");
m.L = function() {
  return O(ie, this.i)
};
var ie = new ge(null, Hd, 0);
function he(a) {
  this.za = a;
  this.f = 259;
  this.p = 136
}
m = he.prototype;
m.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return La.c(this.za, c, dc) === dc ? null : c;
      case 3:
        return La.c(this.za, c, dc) === dc ? d : c
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.a = function(a) {
  return La.c(this.za, a, dc) === dc ? null : a
};
m.b = function(a, b) {
  return La.c(this.za, a, dc) === dc ? b : a
};
m.M = function(a, b) {
  return La.c(this, b, null)
};
m.N = function(a, b, c) {
  return La.c(this.za, b, dc) === dc ? c : b
};
m.I = function() {
  return P(this.za)
};
m.Aa = function(a, b) {
  this.za = rb(this.za, b, null);
  return this
};
m.Ja = function() {
  return new ge(null, qb(this.za), null)
};
var je = function() {
  function a(a, b, c) {
    return(a.a ? a.a(b) : a.call(null, b)) > (a.a ? a.a(c) : a.call(null, c)) ? b : c
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = I(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p)
    }
    function c(a, d, e, l) {
      return mc.c(function(c, d) {
        return b.c(a, c, d)
      }, b.c(a, d, e), l)
    }
    a.l = 3;
    a.g = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var l = E(a);
      a = F(a);
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
        return c.e(b, e, g, I(arguments, 3))
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
function ke(a, b, c, d, e) {
  this.i = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.j = e;
  this.p = 0;
  this.f = 32375006
}
m = ke.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Jb(this)
};
m.R = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ke(this.i, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ke(this.i, this.start + this.step, this.end, this.step, null) : null
};
m.H = function(a, b) {
  return J(b, this)
};
m.toString = function() {
  return yb(this)
};
m.S = function(a, b) {
  return Fb.b(this, b)
};
m.T = function(a, b, c) {
  return Fb.c(this, b, c)
};
m.v = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null
};
m.I = function() {
  return ta(ib(this)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
m.D = f("start");
m.U = function() {
  return null != ib(this) ? new ke(this.i, this.start + this.step, this.end, this.step, null) : G
};
m.r = function(a, b) {
  return Lb(this, b)
};
m.A = function(a, b) {
  return new ke(b, this.start, this.end, this.step, this.j)
};
m.w = f("i");
m.$ = function(a, b) {
  if(b < Aa(this)) {
    return this.start + b * this.step
  }
  if(this.start > this.end && 0 === this.step) {
    return this.start
  }
  throw Error("Index out of bounds");
};
m.ia = function(a, b, c) {
  return b < Aa(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c
};
m.L = function() {
  return O(G, this.i)
};
var le = function() {
  function a(a, b, c) {
    return new ke(null, a, b, c, null)
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
  e.k = d;
  e.a = c;
  e.b = b;
  e.c = a;
  return e
}(), me = function() {
  function a(a, b) {
    for(;;) {
      if(D(b) && 0 < a) {
        var c = a - 1, h = H(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(D(a)) {
        a = H(a)
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
}(), ne = function() {
  function a(a, b) {
    me.b(a, b);
    return b
  }
  function b(a) {
    me.a(a);
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
function oe(a) {
  var b = pe.exec(a);
  return z.b(E(b), a) ? 1 === P(b) ? E(b) : pd(b) : null
}
function qe(a) {
  a = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(a);
  a = null == a ? null : 1 === P(a) ? E(a) : pd(a);
  Q.c(a, 0, null);
  Q.c(a, 1, null);
  Q.c(a, 2, null)
}
function Y(a, b, c, d, e, g, h) {
  y(a, c);
  D(h) && (b.c ? b.c(E(h), a, g) : b.call(null, E(h), a, g));
  c = H(h);
  for(h = sa.a(g);c && (null == h || 0 !== h);) {
    y(a, d), b.c ? b.c(E(c), a, g) : b.call(null, E(c), a, g), c = H(c), h -= 1
  }
  q(sa.a(g)) && (y(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
  return y(a, e)
}
var re = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = I(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = D(b), g = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = g.$(null, k);
        y(a, l);
        k += 1
      }else {
        if(e = D(e)) {
          g = e, bc(g) ? (e = ub(g), h = vb(g), g = e, l = P(e), e = h, h = l) : (l = E(g), y(a, l), e = H(g), g = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.l = 1;
  a.g = function(a) {
    var d = E(a);
    a = F(a);
    return b(d, a)
  };
  a.e = b;
  return a
}(), se = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function te(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return se[a]
  })), w('"')].join("")
}
var ve = function ue(b, c, d) {
  if(null == b) {
    return y(c, "nil")
  }
  if(void 0 === b) {
    return y(c, "#\x3cundefined\x3e")
  }
  if(u) {
    q(function() {
      var c = R.b(d, qa);
      return q(c) ? (c = b ? b.f & 131072 || b.Bc ? !0 : b.f ? !1 : t(Za, b) : t(Za, b)) ? Tb(b) : c : c
    }()) && (y(c, "^"), ue(Tb(b), c, d), y(c, " "));
    if(null == b) {
      return y(c, "nil")
    }
    if(b.qb) {
      return b.Ub(b, c, d)
    }
    if(b && (b.f & 2147483648 || b.O)) {
      return b.t(null, c, d)
    }
    if(ua(b) === Boolean || "number" === typeof b) {
      return y(c, "" + w(b))
    }
    if(b instanceof Array) {
      return Y(c, ue, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if("string" == typeof b) {
      return q(oa.a(d)) ? y(c, te(b)) : y(c, b)
    }
    if(Rb(b)) {
      return re.e(c, I(["#\x3c", "" + w(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + w(b);;) {
          if(P(d) < c) {
            d = [w("0"), w(d)].join("")
          }else {
            return d
          }
        }
      };
      return re.e(c, I(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return b instanceof RegExp ? re.e(c, I(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.O || (b.f ? 0 : t(mb, b)) : t(mb, b)) ? nb(b, c, d) : u ? re.e(c, I(["#\x3c", "" + w(b), "\x3e"], 0)) : null
  }
  return null
}, we = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(Xb(a)) {
      b = ""
    }else {
      b = w;
      var e = la(), g = new ja;
      a: {
        var h = new xb(g);
        ve(E(a), h, e);
        a = D(H(a));
        for(var k = null, l = 0, p = 0;;) {
          if(p < l) {
            var r = k.$(null, p);
            y(h, " ");
            ve(r, h, e);
            p += 1
          }else {
            if(a = D(a)) {
              k = a, bc(k) ? (a = ub(k), l = vb(k), k = a, r = P(a), a = l, l = r) : (r = E(k), y(h, " "), ve(r, h, e), a = H(k), k = null, l = 0), p = 0
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
  a.l = 0;
  a.g = function(a) {
    a = D(a);
    return b(a)
  };
  a.e = b;
  return a
}();
de.prototype.O = !0;
de.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
Eb.prototype.O = !0;
Eb.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
sd.prototype.O = !0;
sd.prototype.t = function(a, b, c) {
  return Y(b, ve, "[", " ", "]", c, this)
};
Dc.prototype.O = !0;
Dc.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
ma.prototype.O = !0;
ma.prototype.t = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, ve, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
xd.prototype.O = !0;
xd.prototype.t = function(a, b, c) {
  return Y(b, ve, "#queue [", " ", "]", c, D(this))
};
yc.prototype.O = !0;
yc.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
Kb.prototype.O = !0;
Kb.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
Xd.prototype.O = !0;
Xd.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
qd.prototype.O = !0;
qd.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
Zd.prototype.O = !0;
Zd.prototype.t = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, ve, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
ge.prototype.O = !0;
ge.prototype.t = function(a, b, c) {
  return Y(b, ve, "#{", " ", "}", c, this)
};
U.prototype.O = !0;
U.prototype.t = function(a, b, c) {
  return Y(b, ve, "[", " ", "]", c, this)
};
uc.prototype.O = !0;
uc.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
Dd.prototype.O = !0;
Dd.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
vc.prototype.O = !0;
vc.prototype.t = function(a, b) {
  return y(b, "()")
};
xc.prototype.O = !0;
xc.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
ke.prototype.O = !0;
ke.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
Yd.prototype.O = !0;
Yd.prototype.t = function(a, b, c) {
  return Y(b, ve, "(", " ", ")", c, this)
};
U.prototype.jb = !0;
U.prototype.kb = function(a, b) {
  return ic.b(this, b)
};
sd.prototype.jb = !0;
sd.prototype.kb = function(a, b) {
  return ic.b(this, b)
};
W.prototype.jb = !0;
W.prototype.kb = function(a, b) {
  return zb(this, b)
};
A.prototype.jb = !0;
A.prototype.kb = function(a, b) {
  return zb(this, b)
};
function xe(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.vd = c;
  this.wd = d;
  this.f = 2153938944;
  this.p = 2
}
m = xe.prototype;
m.u = function() {
  return this[ca] || (this[ca] = ++da)
};
m.t = function(a, b, c) {
  y(b, "#\x3cAtom: ");
  ve(this.state, b, c);
  return y(b, "\x3e")
};
m.w = f("i");
m.yc = f("state");
m.r = function(a, b) {
  return this === b
};
var ze = function() {
  function a(a) {
    return new xe(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = I(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = ec(c) ? T.b(ce, c) : c, e = R.b(d, ye), d = R.b(d, qa);
      return new xe(a, d, e, null)
    }
    a.l = 1;
    a.g = function(a) {
      var c = E(a);
      a = F(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, I(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}();
function Ae(a) {
  this.Vb = a;
  this.p = 0;
  this.f = 2153775104
}
Ae.prototype.u = function() {
  return ea(we.e(I([this], 0)))
};
Ae.prototype.t = function(a, b) {
  return y(b, [w('#uuid "'), w(this.Vb), w('"')].join(""))
};
Ae.prototype.r = function(a, b) {
  return b instanceof Ae && this.Vb === b.Vb
};
var ra = new W(null, "dup", "dup"), Bb = new W(null, "default", "default"), Be = new W(null, "prefixc", "prefixc"), Ce = new W(null, "reify-vars", "reify-vars"), De = new W(null, "eset", "eset"), Ee = new W("cljs.core.logic", "fd", "cljs.core.logic/fd"), Fe = new W("cljs.core.logic", "subst", "cljs.core.logic/subst"), Ge = new W("cljs.core.logic", "no-prop", "cljs.core.logic/no-prop"), He = new W("cljs.core.logic", "id", "cljs.core.logic/id"), na = new W(null, "flush-on-newline", "flush-on-newline"), 
Ie = new W("cljs.core.logic", "strategy", "cljs.core.logic/strategy"), Je = new W(null, "f", "f"), Ke = new W("cljs.core.logic", "ff", "cljs.core.logic/ff"), Le = new W(null, "ansv*", "ansv*"), Me = new W(null, "cache", "cache"), sa = new W(null, "print-length", "print-length"), Ne = new W("cljs.core.logic", "root", "cljs.core.logic/root"), u = new W(null, "else", "else"), oa = new W(null, "readably", "readably"), ye = new W(null, "validator", "validator"), qa = new W(null, "meta", "meta"), Oe = 
new W(null, "v", "v"), Pe = new W("cljs.core.logic", "unbound", "cljs.core.logic/unbound"), Qe = new W(null, "doms", "doms");
var Re = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = I(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e)
  }
  function b(a, b) {
    throw Error(T.b(w, b));
  }
  a.l = 1;
  a.g = function(a) {
    E(a);
    a = F(a);
    return b(0, a)
  };
  a.e = b;
  return a
}();
qe("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
qe("([-+]?[0-9]+)/([0-9]+)");
qe("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
qe("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
qe("[0-9A-Fa-f]{2}");
qe("[0-9A-Fa-f]{4}");
function Se(a) {
  if(z.b(3, P(a))) {
    return a
  }
  if(3 < P(a)) {
    return qc.c(a, 0, 3)
  }
  if(u) {
    for(a = new ja(a);;) {
      if(3 > a.Pa.length) {
        a = a.append("0")
      }else {
        return a.toString()
      }
    }
  }else {
    return null
  }
}
var Te = function() {
  var a = new U(null, 13, 5, V, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new U(null, 13, 5, V, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return R.b(q(d) ? b : a, c)
  }
}(), pe = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Ue(a) {
  a = parseInt(a);
  return ta(isNaN(a)) ? a : null
}
function Ve(a, b, c, d) {
  a <= b && b <= c || Re.e(null, I([[w(d), w(" Failed:  "), w(a), w("\x3c\x3d"), w(b), w("\x3c\x3d"), w(c)].join("")], 0));
  return b
}
function We(a) {
  var b = oe(a);
  Q.c(b, 0, null);
  var c = Q.c(b, 1, null), d = Q.c(b, 2, null), e = Q.c(b, 3, null), g = Q.c(b, 4, null), h = Q.c(b, 5, null), k = Q.c(b, 6, null), l = Q.c(b, 7, null), p = Q.c(b, 8, null), r = Q.c(b, 9, null), s = Q.c(b, 10, null);
  if(ta(b)) {
    return Re.e(null, I([[w("Unrecognized date/time syntax: "), w(a)].join("")], 0))
  }
  a = Ue(c);
  var b = function() {
    var a = Ue(d);
    return q(a) ? a : 1
  }(), c = function() {
    var a = Ue(e);
    return q(a) ? a : 1
  }(), C = function() {
    var a = Ue(g);
    return q(a) ? a : 0
  }(), K = function() {
    var a = Ue(h);
    return q(a) ? a : 0
  }(), M = function() {
    var a = Ue(k);
    return q(a) ? a : 0
  }(), N = function() {
    var a = Ue(Se(l));
    return q(a) ? a : 0
  }(), p = (z.b(p, "-") ? -1 : 1) * (60 * function() {
    var a = Ue(r);
    return q(a) ? a : 0
  }() + function() {
    var a = Ue(s);
    return q(a) ? a : 0
  }());
  return new U(null, 8, 5, V, [a, Ve(1, b, 12, "timestamp month field must be in range 1..12"), Ve(1, c, Te.b ? Te.b(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : Te.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), Ve(0, C, 23, "timestamp hour field must be in range 0..23"), Ve(0, K, 59, "timestamp minute field must be in range 0..59"), Ve(0, 
  M, z.b(K, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Ve(0, N, 999, "timestamp millisecond field must be in range 0..999"), p], null)
}
ze.a(new ma(null, 3, ["inst", function(a) {
  var b;
  if("string" === typeof a) {
    if(b = We(a), q(b)) {
      a = Q.c(b, 0, null);
      var c = Q.c(b, 1, null), d = Q.c(b, 2, null), e = Q.c(b, 3, null), g = Q.c(b, 4, null), h = Q.c(b, 5, null), k = Q.c(b, 6, null);
      b = Q.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, g, h, k) - 6E4 * b)
    }else {
      b = Re.e(null, I([[w("Unrecognized date/time syntax: "), w(a)].join("")], 0))
    }
  }else {
    b = Re.e(null, I(["Instance literal expects a string for its timestamp."], 0))
  }
  return b
}, "uuid", function(a) {
  return"string" === typeof a ? new Ae(a) : Re.e(null, I(["UUID literal expects a string as its representation."], 0))
}, "queue", function(a) {
  return ac(a) ? $c(yd, a) : Re.e(null, I(["Queue literal expects a vector for its elements."], 0))
}], null));
ze.a(null);
function Xe(a, b) {
  var c = T.c(je, a, b);
  return J(c, Zc(Rc(function(a) {
    return c === a
  }), b))
}
var Ye = function() {
  function a(a, b) {
    return P(a) < P(b) ? mc.c(Nb, b, a) : mc.c(Nb, a, b)
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = I(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l)
    }
    function b(a, c, d) {
      a = Xe(P, Nb.e(d, c, I([a], 0)));
      return mc.c($c, E(a), F(a))
    }
    a.l = 2;
    a.g = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 0:
        return ie;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.g = c.g;
  b.k = function() {
    return ie
  };
  b.a = aa();
  b.b = a;
  b.e = c.e;
  return b
}();
var Ze = {}, $e;
function af(a, b, c) {
  if(a ? a.nb : a) {
    return a.nb(a, b, c)
  }
  var d;
  d = af[n(null == a ? null : a)];
  if(!d && (d = af._, !d)) {
    throw v("IUnifyTerms.-unify-terms", a);
  }
  return d.call(null, a, b, c)
}
function bf(a, b, c) {
  if(a ? a.oc : a) {
    return a.oc(0, b, c)
  }
  var d;
  d = bf[n(null == a ? null : a)];
  if(!d && (d = bf._, !d)) {
    throw v("IUnifyWithNil.-unify-with-nil", a);
  }
  return d.call(null, a, b, c)
}
function cf(a, b, c) {
  if(a ? a.nc : a) {
    return a.nc(0, b, c)
  }
  var d;
  d = cf[n(null == a ? null : a)];
  if(!d && (d = cf._, !d)) {
    throw v("IUnifyWithLVar.-unify-with-lvar", a);
  }
  return d.call(null, a, b, c)
}
function df(a, b, c) {
  if(a ? a.pc : a) {
    return a.pc(0, b, c)
  }
  var d;
  d = df[n(null == a ? null : a)];
  if(!d && (d = df._, !d)) {
    throw v("IUnifyWithSequential.-unify-with-seq", a);
  }
  return d.call(null, a, b, c)
}
function ef(a, b, c) {
  if(a ? a.ob : a) {
    return a.ob(a, b, c)
  }
  var d;
  d = ef[n(null == a ? null : a)];
  if(!d && (d = ef._, !d)) {
    throw v("IUnifyWithMap.-unify-with-map", a);
  }
  return d.call(null, a, b, c)
}
function ff(a, b, c) {
  if(a ? a.Lc : a) {
    return a.Lc(a, b, c)
  }
  var d;
  d = ff[n(null == a ? null : a)];
  if(!d && (d = ff._, !d)) {
    throw v("IUnifyWithRecord.-unify-with-record", a);
  }
  return d.call(null, a, b, c)
}
function gf(a, b) {
  if(a ? a.jc : a) {
    return a.jc(0, b)
  }
  var c;
  c = gf[n(null == a ? null : a)];
  if(!c && (c = gf._, !c)) {
    throw v("IReifyTerm.-reify-term", a);
  }
  return c.call(null, a, b)
}
function hf(a, b) {
  if(a ? a.eb : a) {
    return a.eb(a, b)
  }
  var c;
  c = hf[n(null == a ? null : a)];
  if(!c && (c = hf._, !c)) {
    throw v("IWalkTerm.-walk-term", a);
  }
  return c.call(null, a, b)
}
function jf(a, b, c) {
  if(a ? a.ic : a) {
    return a.ic(0, b, c)
  }
  var d;
  d = jf[n(null == a ? null : a)];
  if(!d && (d = jf._, !d)) {
    throw v("IOccursCheckTerm.-occurs-check-term", a);
  }
  return d.call(null, a, b, c)
}
function kf(a, b) {
  if(a ? a.Ba : a) {
    return a.Ba(a, b)
  }
  var c;
  c = kf[n(null == a ? null : a)];
  if(!c && (c = kf._, !c)) {
    throw v("IBind.-bind", a);
  }
  return c.call(null, a, b)
}
function lf(a, b) {
  if(a ? a.Ka : a) {
    return a.Ka(a, b)
  }
  var c;
  c = lf[n(null == a ? null : a)];
  if(!c && (c = lf._, !c)) {
    throw v("IMPlus.-mplus", a);
  }
  return c.call(null, a, b)
}
var mf = {}, nf, of = le.a(100);
a: {
  for(var pf = Uc.c(Sc.b(Db, w), Xc.a("_"), of), qf = ob(Hd), rf = D(of), sf = D(pf);;) {
    if(rf && sf) {
      var tf, uf = E(rf), vf = E(sf);
      tf = rb(qf, uf, vf);
      var wf = H(rf), xf = H(sf), qf = tf, rf = wf, sf = xf
    }else {
      nf = qb(qf);
      break a
    }
  }
  nf = void 0
}
function yf(a) {
  var b = Z.a ? Z.a(a) : Z.call(null, a);
  return q(b) ? b : a ? q(q(null) ? null : a.md) ? !0 : !1 : !1
}
function zf(a, b, c, d, e) {
  this.F = a;
  this.aa = b;
  this.ea = c;
  this.Q = d;
  this.C = e;
  this.p = 0;
  this.f = 2229667594;
  3 < arguments.length ? (this.Q = d, this.C = e) : this.C = this.Q = null
}
m = zf.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = rc(this)
};
m.M = function(a, b) {
  return La.c(this, b, null)
};
m.N = function(a, b, c) {
  return X(b, Oe) ? this.F : X(b, Qe) ? this.aa : X(b, De) ? this.ea : u ? R.c(this.C, b, c) : null
};
m.Ia = function(a, b, c) {
  return q(X.b ? X.b(Oe, b) : X.call(null, Oe, b)) ? new zf(c, this.aa, this.ea, this.Q, this.C, null) : q(X.b ? X.b(Qe, b) : X.call(null, Qe, b)) ? new zf(this.F, c, this.ea, this.Q, this.C, null) : q(X.b ? X.b(De, b) : X.call(null, De, b)) ? new zf(this.F, this.aa, c, this.Q, this.C, null) : new zf(this.F, this.aa, this.ea, this.Q, S.c(this.C, b, c), null)
};
m.t = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, ve, "", " ", "", c, a)
  }, "#cljs.core.logic.SubstValue{", ", ", "}", c, Ic.b(new U(null, 3, 5, V, [new U(null, 2, 5, V, [Oe, this.F], null), new U(null, 2, 5, V, [Qe, this.aa], null), new U(null, 2, 5, V, [De, this.ea], null)], null), this.C))
};
m.H = function(a, b) {
  return ac(b) ? Oa(this, x.b(b, 0), x.b(b, 1)) : mc.c(Da, this, b)
};
m.toString = function() {
  return"" + w(this.F)
};
m.v = function() {
  return D(Ic.b(new U(null, 3, 5, V, [new U(null, 2, 5, V, [Oe, this.F], null), new U(null, 2, 5, V, [Qe, this.aa], null), new U(null, 2, 5, V, [De, this.ea], null)], null), this.C))
};
m.I = function() {
  return 3 + P(this.C)
};
m.r = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bd(this, b) : b) ? !0 : !1
};
m.A = function(a, b) {
  return new zf(this.F, this.aa, this.ea, b, this.C, this.j)
};
m.w = f("Q");
m.Za = function(a, b) {
  return gc(new ge(null, new ma(null, 3, [De, null, Oe, null, Qe, null], null), null), b) ? Qb.b(O($c(Hd, this), this.Q), b) : new zf(this.F, this.aa, this.ea, this.Q, Mc(Qb.b(this.C, b)), null)
};
function Af(a) {
  return a instanceof zf
}
var Bf = function() {
  function a(a, b, c, d) {
    return O(new zf(a, b, c), d)
  }
  function b(a, b, c) {
    return O(new zf(a, b, null), c)
  }
  function c(a, b) {
    return new zf(a, b, null)
  }
  function d(a) {
    return new zf(a, null, null)
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
  e.o = a;
  return e
}();
function Cf(a, b) {
  return $c(od, Zc(Z, Uc.b(function(b) {
    return Df.b ? Df.b(a, b) : Df.call(null, a, b)
  }, Ef.a ? Ef.a(b) : Ef.call(null, b))))
}
function Ff(a, b) {
  return Zc(function(b) {
    return Z.a ? Z.a(Gf.b ? Gf.b(a, b) : Gf.call(null, a, b)) : Z.call(null, Gf.b ? Gf.b(a, b) : Gf.call(null, a, b))
  }, Cf(a, b))
}
function Hf(a, b, c) {
  if(a ? a.dc : a) {
    return a.dc(0, b, c)
  }
  var d;
  d = Hf[n(null == a ? null : a)];
  if(!d && (d = Hf._, !d)) {
    throw v("IConstraintStore.-addc", a);
  }
  return d.call(null, a, b, c)
}
function If(a, b, c) {
  if(a ? a.gc : a) {
    return a.gc(0, b, c)
  }
  var d;
  d = If[n(null == a ? null : a)];
  if(!d && (d = If._, !d)) {
    throw v("IConstraintStore.-remc", a);
  }
  return d.call(null, a, b, c)
}
function Jf(a, b, c) {
  if(a ? a.hc : a) {
    return a.hc(0, b, c)
  }
  var d;
  d = Jf[n(null == a ? null : a)];
  if(!d && (d = Jf._, !d)) {
    throw v("IConstraintStore.-runc", a);
  }
  return d.call(null, a, b, c)
}
function Kf(a, b, c, d) {
  if(a ? a.ec : a) {
    return a.ec(0, b, c, d)
  }
  var e;
  e = Kf[n(null == a ? null : a)];
  if(!e && (e = Kf._, !e)) {
    throw v("IConstraintStore.-constraints-for", a);
  }
  return e.call(null, a, b, c, d)
}
function Lf(a, b, c) {
  if(a ? a.fc : a) {
    return a.fc(0, b, c)
  }
  var d;
  d = Lf[n(null == a ? null : a)];
  if(!d && (d = Lf._, !d)) {
    throw v("IConstraintStore.-migrate", a);
  }
  return d.call(null, a, b, c)
}
function Mf(a, b) {
  if(a ? a.Nc : a) {
    return a.Nc(a, b)
  }
  var c;
  c = Mf[n(null == a ? null : a)];
  if(!c && (c = Mf._, !c)) {
    throw v("IWithConstraintId.-with-id", a);
  }
  return c.call(null, a, b)
}
function Nf(a) {
  if(a ? a.Dc : a) {
    return a.Dc(a)
  }
  var b;
  b = Nf[n(null == a ? null : a)];
  if(!b && (b = Nf._, !b)) {
    throw v("IConstraintId.-id", a);
  }
  return b.call(null, a)
}
function Of(a) {
  return a && q(q(null) ? null : a.nd) ? Nf(a) : He.a(Tb(a))
}
function Pf(a, b, c, d) {
  this.fa = a;
  this.va = b;
  this.Ha = c;
  this.Na = d;
  this.p = 0;
  this.f = 2
}
m = Pf.prototype;
m.I = function() {
  return P(this.va)
};
m.dc = function(a, b, c) {
  a = Cf(b, c);
  c = Mf(c, this.Ha);
  c = mc.c(function(a, b) {
    return function(a, c) {
      return Qf.c ? Qf.c(a, c, b) : Qf.call(null, a, c, b)
    }
  }(a, c), this, a);
  return new Pf(c.fa, c.va, this.Ha + 1, this.Na)
};
m.gc = function(a, b, c) {
  a = Cf(b, c);
  c = Of(c);
  a = mc.c(function(a, b) {
    return function(a, c) {
      var d = Ub.b(R.b(a, c), b);
      return Xb(d) ? Qb.b(a, c) : S.c(a, c, d)
    }
  }(a, c), this.fa, a);
  c = Qb.b(this.va, c);
  return new Pf(a, c, this.Ha, this.Na)
};
m.hc = function(a, b, c) {
  return q(c) ? new Pf(this.fa, this.va, this.Ha, Nb.b(this.Na, Of(b))) : new Pf(this.fa, this.va, this.Ha, Ub.b(this.Na, Of(b)))
};
m.ec = function(a, b, c, d) {
  a = R.b(this.fa, Df.b ? Df.b(b, c) : Df.call(null, b, c));
  return q(a) ? Zc(function(a) {
    return(Rf.a ? Rf.a(a) : Rf.call(null, a)).call(null, d)
  }, Uc.b(this.va, Zc(Rc(this.Na), a))) : null
};
m.fc = function(a, b, c) {
  a = this.fa.a ? this.fa.a(b) : this.fa.call(null, b);
  var d = this.fa.b ? this.fa.b(c, ie) : this.fa.call(null, c, ie);
  b = S.c(Qb.b(this.fa, b), c, $c(d, a));
  return new Pf(b, this.va, this.Ha, this.Na)
};
function Qf(a, b, c) {
  if(!q(Z.a ? Z.a(b) : Z.call(null, b))) {
    throw Error([w("constraint store assoc expected logic var key: "), w(b)].join(""));
  }
  var d = a.va, e = a.fa, g = a.Ha;
  b = ad.c(e, new U(null, 1, 5, V, [b], null), Tc.b(function(a, b, c) {
    return function(a) {
      return Nb.b(a, c)
    }
  }(d, e, g), ie));
  c = S.c(d, g, c);
  return new Pf(b, c, g, a.Na)
}
function Sf() {
  return new Pf(Hd, Hd, 0, ie)
}
function Tf(a, b, c) {
  if(a ? a.Ob : a) {
    return a.Ob(0, b, c)
  }
  var d;
  d = Tf[n(null == a ? null : a)];
  if(!d && (d = Tf._, !d)) {
    throw v("ISubstitutions.-occurs-check", a);
  }
  return d.call(null, a, b, c)
}
function Uf(a, b, c) {
  if(a ? a.La : a) {
    return a.La(0, b, c)
  }
  var d;
  d = Uf[n(null == a ? null : a)];
  if(!d && (d = Uf._, !d)) {
    throw v("ISubstitutions.-ext", a);
  }
  return d.call(null, a, b, c)
}
function Vf(a, b, c) {
  if(a ? a.Sa : a) {
    return a.Sa(0, b, c)
  }
  var d;
  d = Vf[n(null == a ? null : a)];
  if(!d && (d = Vf._, !d)) {
    throw v("ISubstitutions.-ext-no-check", a);
  }
  return d.call(null, a, b, c)
}
function Wf(a, b) {
  if(a ? a.Qb : a) {
    return a.Qb(0, b)
  }
  var c;
  c = Wf[n(null == a ? null : a)];
  if(!c && (c = Wf._, !c)) {
    throw v("ISubstitutions.-walk", a);
  }
  return c.call(null, a, b)
}
function Xf(a, b, c) {
  if(a ? a.Pb : a) {
    return a.Pb(0, b, c)
  }
  var d;
  d = Xf[n(null == a ? null : a)];
  if(!d && (d = Xf._, !d)) {
    throw v("ISubstitutions.-unify", a);
  }
  return d.call(null, a, b, c)
}
function Gf(a, b) {
  if(a ? a.Rb : a) {
    return a.Rb(0, b)
  }
  var c;
  c = Gf[n(null == a ? null : a)];
  if(!c && (c = Gf._, !c)) {
    throw v("ISubstitutionsCLP.-root-val", a);
  }
  return c.call(null, a, b)
}
function Df(a, b) {
  if(a ? a.mb : a) {
    return a.mb(0, b)
  }
  var c;
  c = Df[n(null == a ? null : a)];
  if(!c && (c = Df._, !c)) {
    throw v("ISubstitutionsCLP.-root-var", a);
  }
  return c.call(null, a, b)
}
function Yf(a, b, c) {
  if(a ? a.kc : a) {
    return a.kc(0, b, c)
  }
  var d;
  d = Yf[n(null == a ? null : a)];
  if(!d && (d = Yf._, !d)) {
    throw v("ISubstitutionsCLP.-ext-run-cs", a);
  }
  return d.call(null, a, b, c)
}
function Zf(a, b) {
  if(a ? a.lc : a) {
    return a.lc(0, b)
  }
  var c;
  c = Zf[n(null == a ? null : a)];
  if(!c && (c = Zf._, !c)) {
    throw v("ISubstitutionsCLP.-queue", a);
  }
  return c.call(null, a, b)
}
function $f(a, b, c) {
  if(a ? a.Sb : a) {
    return a.Sb(0, b, c)
  }
  var d;
  d = $f[n(null == a ? null : a)];
  if(!d && (d = $f._, !d)) {
    throw v("ISubstitutionsCLP.-update-var", a);
  }
  return d.call(null, a, b, c)
}
function ag(a, b, c, d, e, g, h, k) {
  this.n = a;
  this.ca = b;
  this.ha = c;
  this.X = d;
  this.da = e;
  this.W = g;
  this.ba = h;
  this.G = k;
  this.p = 0;
  this.f = 2149974026
}
m = ag.prototype;
m.Qb = function(a, b) {
  if(q(yf.a ? yf.a(b) : yf.call(null, b))) {
    for(var c = b, d = hc(this.n, b);;) {
      if(null == d) {
        return c
      }
      c = Sa(d);
      d = Ta(d);
      if(ta(yf.a ? yf.a(d) : yf.call(null, d))) {
        if(Af(d)) {
          var e = d.F;
          return X(e, Pe) ? O(c, S.c(Tb(d), Pe, !0)) : e
        }
        return d
      }
      c = d;
      d = hc(this.n, d)
    }
  }else {
    return b
  }
};
m.Kc = function(a) {
  a = Wf(this, a);
  return gf(a, this)
};
function bg(a) {
  var b = P(a.n);
  return 100 > b ? nf.a ? nf.a(b) : nf.call(null, b) : Db.a([w("_"), w(P(a.n))].join(""))
}
m.Pb = function(a, b, c) {
  if(b === c) {
    return this
  }
  var d = Wf(this, b), e = Wf(this, c);
  return q(function() {
    var a = Z.a ? Z.a(d) : Z.call(null, d);
    return q(a) ? z.b(d, e) : a
  }()) ? this : q(function() {
    var a = ta(Z.a ? Z.a(d) : Z.call(null, d));
    return a ? Z.a ? Z.a(e) : Z.call(null, e) : a
  }()) ? af(e, d, this.n) : af(d, e, this.n)
};
m.La = function(a, b, c) {
  return Tf(this, b, c) ? $.a ? $.a(this) : $.call(null, this) : Vf(this, b, c)
};
m.Sa = function(a, b, c) {
  a = ta(Z.a ? Z.a(c) : Z.call(null, c)) ? O(b, S.c(Tb(b), Ne, !0)) : b;
  return new ag(S.c(this.n, a, c), q(this.ca) ? Nb.b(this.ca, a) : null, this.ha, this.X, this.da, this.W, this.ba, this.G)
};
m.Ob = function(a, b, c) {
  a = Wf(this, c);
  return jf(a, b, this)
};
m.Ba = function(a, b) {
  return b.a ? b.a(this) : b.call(null, this)
};
m.Rb = function(a, b) {
  if(q(Z.a ? Z.a(b) : Z.call(null, b))) {
    var c = hc(this.n, b);
    Q.c(c, 0, null);
    Q.c(c, 1, null);
    for(var d = b;;) {
      var e = c;
      Q.c(e, 0, null);
      c = Q.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(ta(Z.a ? Z.a(c) : Z.call(null, c))) {
        return c
      }
      if(u) {
        d = c, c = hc(this.n, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
m.mb = function(a, b) {
  if(q(Z.a ? Z.a(b) : Z.call(null, b))) {
    if(q(Ne.a(Tb(b)))) {
      return b
    }
    var c = hc(this.n, b);
    Q.c(c, 0, null);
    Q.c(c, 1, null);
    for(var d = b;;) {
      var e = c, g = Q.c(e, 0, null), c = Q.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(ta(Z.a ? Z.a(c) : Z.call(null, c))) {
        return Af(c) ? O(g, Tb(c)) : g
      }
      if(u) {
        d = c, c = hc(this.n, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
m.kc = function(a, b, c) {
  b = Df(this, b);
  a = q(Z.a ? Z.a(c) : Z.call(null, c)) ? new U(null, 2, 5, V, [b, Df(this, c)], null) : new U(null, 1, 5, V, [b], null);
  c = q(this.ba) ? Uf(this, b, c) : Vf(this, b, c);
  return q(c) ? (cg.c ? cg.c(a, this.X, Fe) : cg.call(null, a, this.X, Fe)).call(null, c) : null
};
m.lc = function(a, b) {
  var c = Of(b);
  if(ta(this.W.a ? this.W.a(c) : this.W.call(null, c))) {
    var d = this.da, c = new ag(this.n, this.ca, this.ha, this.X, Nb.b(q(d) ? d : od, b), Nb.b(this.W, c), this.ba, this.G)
  }else {
    c = this
  }
  return c
};
m.Sb = function(a, b, c) {
  return new ag(S.c(this.n, b, c), this.ca, this.ha, this.X, this.da, this.W, this.ba, this.G)
};
m.t = function(a, b, c) {
  return nb(this.n, b, c)
};
m.H = function(a, b) {
  return new ag(Nb.b(this.n, b), this.ca, this.ha, this.X, this.da, this.W, this.ba, Ze.td)
};
m.cb = !0;
m.Ka = function(a, b) {
  return dg.b ? dg.b(this, b) : dg.call(null, this, b)
};
m.I = function() {
  return P(this.n)
};
m.r = function(a, b) {
  return this === b || b instanceof ag && z.b(this.n, b.n)
};
m.A = function(a, b) {
  return new ag(this.n, this.ca, this.ha, this.X, this.da, this.W, this.ba, b)
};
m.w = f("G");
(function() {
  function a(a, b) {
    return new ag(a, null, null, b, null, ie, !0, null)
  }
  function b(a) {
    return d.b(a, Sf.k ? Sf.k() : Sf.call(null))
  }
  function c() {
    return d.a(Hd)
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
  d.k = c;
  d.a = b;
  d.b = a;
  return d
})().k();
function eg(a, b, c, d, e, g) {
  this.id = a;
  this.unique = b;
  this.name = c;
  this.qc = d;
  this.j = e;
  this.i = g;
  this.p = 0;
  this.f = 2154168320
}
m = eg.prototype;
m.u = f("j");
m.nc = function(a, b, c) {
  a = q(Pe.a(Tb(b))) ? new U(null, 2, 5, V, [b, this], null) : q(Pe.a(Tb(this))) ? new U(null, 2, 5, V, [this, b], null) : null;
  return q(a) ? (b = Q.c(a, 0, null), a = Q.c(a, 1, null), c = new ag(c.n, c.ca, c.ha, Lf(c.X, a, b), c.da, c.W, c.ba, c.G()), c = q(Pe.a(Tb(a))) ? fg.c ? fg.c(c, a, b) : fg.call(null, c, a, b) : c, q(c) ? Vf(c, a, b) : null) : c.Sa(0, b, this)
};
m.pc = function(a, b, c) {
  return c.La(0, this, b)
};
m.jc = function(a, b) {
  var c = Ce.a(Tb(b));
  return Rb(c) ? c.b ? c.b(this, b) : c.call(null, this, b) : q(c) ? b.La(0, this, bg(b)) : b.La(0, this, this.qc)
};
m.nb = function(a, b, c) {
  if(q(Z.a ? Z.a(b) : Z.call(null, b))) {
    return cf(b, this, c)
  }
  if(q(gg.a ? gg.a(b) : gg.call(null, b))) {
    throw Error([w(b), w(" is non-storable")].join(""));
  }
  return b !== mf ? q(hg.a ? hg.a(b) : hg.call(null, b)) ? Uf(Ze.Xc, this, b) : q(Pe.a(Tb(this))) ? Vf(c, this, S.c(Gf(c, this), Oe, b)) : Vf(c, this, b) : null
};
m.oc = function(a, b, c) {
  return c.Sa(0, this, b)
};
m.ob = function(a, b, c) {
  return c.La(0, this, b)
};
m.t = function(a, b) {
  return y(b, [w("\x3clvar:"), w(this.name), w("\x3e")].join(""))
};
m.ic = function(a, b, c) {
  return z.b(c.Qb(0, this), b)
};
m.toString = function() {
  return we.e(I([Ze.ud], 0))
};
m.eb = function(a, b) {
  return b.a ? b.a(this) : b.call(null, this)
};
m.r = function(a, b) {
  var c = b instanceof eg;
  return c ? q(this.unique) ? this.id === b.id : this.name === b.name : c
};
m.A = function(a, b) {
  return new eg(this.id, this.unique, this.name, this.qc, this.j, b)
};
m.w = f("i");
var ig = [0], jg = function() {
  function a(a, b) {
    var c = q(b) ? [w("_"), w(ig[0] += 1)].join("") : a, d = q(b) ? [w(a), w(c)].join("") : "" + w(a);
    return new eg(c, b, d, a, B(d), null)
  }
  function b(a) {
    return d.b(a, !0)
  }
  function c() {
    return d.a(new A(null, "gen", "gen", -1640429303, null))
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
  d.k = c;
  d.a = b;
  d.b = a;
  return d
}();
function Z(a) {
  return a instanceof eg
}
function hg(a) {
  var b = Yb(a);
  return b ? b : a ? q(q(null) ? null : a.qd) ? !0 : !1 : !1
}
Zd.prototype.nb = function(a, b, c) {
  return ef(b, this, c)
};
ma.prototype.nb = function(a, b, c) {
  return ef(b, this, c)
};
af._ = function(a, b, c) {
  return Zb(a) ? df(b, a, c) : b && q(q(null) ? null : b.rd) ? ff(b, a, c) : u ? z.b(a, b) ? c : null : null
};
af["null"] = function(a, b, c) {
  return bf(b, a, c)
};
bf._ = function(a, b, c) {
  return $.a ? $.a(c) : $.call(null, c)
};
bf["null"] = function(a, b, c) {
  return c
};
cf._ = function(a, b, c) {
  return c.La(0, b, a)
};
cf["null"] = function(a, b, c) {
  return c.Sa(0, b, a)
};
df._ = function(a, b, c) {
  if(Zb(a) && null != a && Hb(b) && Hb(a) && P(b) !== P(a)) {
    for(b = b.v(null), a = a.v(null);;) {
      if(null != b) {
        if(null != a) {
          if(c = c.Pb(0, b.D(null), a.D(null)), ta(kg.a ? kg.a(c) : kg.call(null, c))) {
            b = b.R(null), a = a.R(null)
          }else {
            return c
          }
        }else {
          return $.a ? $.a(c) : $.call(null, c)
        }
      }else {
        return null != a ? $.a ? $.a(c) : $.call(null, c) : c
      }
    }
  }else {
    return $.a ? $.a(c) : $.call(null, c)
  }
};
df["null"] = function(a, b, c) {
  return $.a ? $.a(c) : $.call(null, c)
};
function lg(a, b, c) {
  if(P(b) !== P(a)) {
    return $.a ? $.a(c) : $.call(null, c)
  }
  for(var d = ee(b);;) {
    if(D(d)) {
      var e = E(d), g = R.c(a, e, mf);
      if(g === mf) {
        return $.a ? $.a(c) : $.call(null, c)
      }
      c = Xf(c, R.b(b, e), g);
      if(ta(kg.a ? kg.a(c) : kg.call(null, c))) {
        d = H(d)
      }else {
        return $.a ? $.a(c) : $.call(null, c)
      }
    }else {
      return c
    }
  }
}
Zd.prototype.ob = function(a, b, c) {
  return lg(this, b, c)
};
ma.prototype.ob = function(a, b, c) {
  return lg(this, b, c)
};
ef._ = function(a, b, c) {
  return $.a ? $.a(c) : $.call(null, c)
};
ef["null"] = function(a, b, c) {
  return $.a ? $.a(c) : $.call(null, c)
};
gf._ = function(a, b) {
  if(Zb(a)) {
    for(var c = a, d = b;;) {
      if(D(c)) {
        var e = H(c), d = d.Kc(E(c)), c = e
      }else {
        return d
      }
    }
  }else {
    return b
  }
};
gf["null"] = function(a, b) {
  return b
};
function mg(a, b) {
  var c = O, d;
  a: {
    d = a;
    for(var e = ng.a ? ng.a(d) : ng.call(null, d);;) {
      if(q(d.v(null))) {
        var g = E(d), h = Q.c(g, 0, null), g = Q.c(g, 1, null);
        d = H(d);
        e = S.c(e, hf(b.a ? b.a(h) : b.call(null, h), b), hf(b.a ? b.a(g) : b.call(null, g), b))
      }else {
        d = e;
        break a
      }
    }
    d = void 0
  }
  return c(d, Tb(a))
}
function og(a, b) {
  var c = O, d;
  a: {
    d = a;
    for(var e = ob(Hd);;) {
      if(q(d.v(null))) {
        var g = d.D(null), h = Q.c(g, 0, null), g = Q.c(g, 1, null);
        d = d.R(null);
        e = e.Ra(null, hf(b.a ? b.a(h) : b.call(null, h), b), hf(b.a ? b.a(g) : b.call(null, g), b))
      }else {
        d = qb(e);
        break a
      }
    }
    d = void 0
  }
  return c(d, Tb(a))
}
U.prototype.eb = function(a, b) {
  var c = O, d;
  a: {
    d = this;
    for(var e = ob(od);;) {
      if(q(d.v(null))) {
        var g = d.R(null), e = e.Aa(null, hf(b.a ? b.a(E(d)) : b.call(null, E(d)), b));
        d = g
      }else {
        d = qb(e);
        break a
      }
    }
    d = void 0
  }
  return c(d, Tb(this))
};
ma.prototype.eb = function(a, b) {
  return og(this, b)
};
Zd.prototype.eb = function(a, b) {
  return og(this, b)
};
hf._ = function(a, b) {
  return Zb(a) ? O(ne.a(Uc.b(function(a) {
    return hf(b.a ? b.a(a) : b.call(null, a), b)
  }, a)), Tb(a)) : a && (a.f & 67108864 || a.ed) ? mg(a, b) : u ? b.a ? b.a(a) : b.call(null, a) : null
};
hf["null"] = function(a, b) {
  return b.a ? b.a(null) : b.call(null, null)
};
jf._ = function(a, b, c) {
  if(Zb(a)) {
    for(a = ib(a);;) {
      if(null != a) {
        var d = c.Ob(0, b, a.D(null));
        if(q(d)) {
          return d
        }
        a = a.R(null)
      }else {
        return!1
      }
    }
  }else {
    return!1
  }
};
jf["null"] = ba(!1);
function pg(a, b) {
  return a && q(q(null) ? null : a.cb) ? a.Ka(null, b) : new qg(a, b)
}
function qg(a, b) {
  this.Xa = a;
  this.J = b
}
qg.prototype.cb = !0;
qg.prototype.Ka = function(a, b) {
  var c = this;
  return new qg(c.Xa, new rg(function() {
    return lf(b.k ? b.k() : b.call(null), c.J)
  }))
};
qg.prototype.Ba = function(a, b) {
  var c = this;
  return pg(b.a ? b.a(c.Xa) : b.call(null, c.Xa), new rg(function() {
    return c.J.Ba(null, b)
  }))
};
function dg(a, b) {
  return new qg(a, b)
}
function rg(a) {
  this.J = a;
  this.p = 0;
  this.f = 1
}
m = rg.prototype;
m.cb = !0;
m.Ka = function(a, b) {
  var c = this;
  return new rg(function() {
    return pg(b.k ? b.k() : b.call(null), c)
  })
};
m.Ba = function(a, b) {
  var c = this;
  return new rg(function() {
    return(c.J.k ? c.J.k() : c.J.call(null)).Ba(null, b)
  })
};
m.call = function(a) {
  a = this;
  return a.J.k ? a.J.k() : a.J.call(null)
};
m.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)))
};
m.k = function() {
  return this.J.k ? this.J.k() : this.J.call(null)
};
function sg(a) {
  this.Xa = a
}
sg.prototype.cb = !0;
sg.prototype.Ka = function(a, b) {
  return b
};
sg.prototype.Ba = function() {
  return this
};
function kg(a) {
  return a instanceof sg
}
function tg(a) {
  return a
}
function $(a) {
  return new sg(a)
}
function ug(a, b, c) {
  if(a ? a.ab : a) {
    return a.ab(a, b, c)
  }
  var d;
  d = ug[n(null == a ? null : a)];
  if(!d && (d = ug._, !d)) {
    throw v("IIfA.-ifa", a);
  }
  return d.call(null, a, b, c)
}
function vg(a, b, c) {
  if(a ? a.bb : a) {
    return a.bb(a, b, c)
  }
  var d;
  d = vg[n(null == a ? null : a)];
  if(!d && (d = vg._, !d)) {
    throw v("IIfU.-ifu", a);
  }
  return d.call(null, a, b, c)
}
ug._ = function(a, b, c) {
  return Rb(a) ? new rg(function() {
    return ug(a.k ? a.k() : a.call(null), b, c)
  }) : null
};
rg.prototype.ab = function(a, b, c) {
  var d = this;
  return new rg(function() {
    return ug(d.k ? d.k() : d.call(null), b, c)
  })
};
qg.prototype.ab = function(a, b) {
  return mc.c(kf, this, b)
};
ag.prototype.ab = function(a, b) {
  Q.c(b, 0, null);
  pc(b);
  for(var c = this, d = b;;) {
    var e = Q.c(d, 0, null);
    pc(d);
    if(q(e)) {
      if(c = e.a ? e.a(c) : e.call(null, c), q(c)) {
        d = Ze.Rc
      }else {
        return null
      }
    }else {
      return c
    }
  }
};
sg.prototype.ab = function(a, b, c) {
  return q(c) ? c : null
};
ug["null"] = function(a, b, c) {
  return q(c) ? c : null
};
vg._ = function(a, b, c) {
  return Rb(a) ? new rg(function() {
    return vg(a.k ? a.k() : a.call(null), b, c)
  }) : null
};
qg.prototype.bb = function(a, b) {
  return mc.c(kf, this.Xa, b)
};
rg.prototype.bb = function(a, b, c) {
  var d = this;
  return new rg(function() {
    return vg(d.k ? d.k() : d.call(null), b, c)
  })
};
ag.prototype.bb = function(a, b) {
  Q.c(b, 0, null);
  pc(b);
  for(var c = this, d = b;;) {
    var e = Q.c(d, 0, null);
    pc(d);
    if(q(e)) {
      if(c = e.a ? e.a(c) : e.call(null, c), q(c)) {
        d = Ze.Rc
      }else {
        return null
      }
    }else {
      return c
    }
  }
};
sg.prototype.bb = function(a, b, c) {
  return q(c) ? c : null
};
vg["null"] = function(a, b, c) {
  return q(c) ? c : null
};
function gg(a) {
  return a ? q(q(null) ? null : a.pd) ? !0 : !1 : !1
}
function ng(a) {
  if(a ? a.Mc : a) {
    return a.Mc(a)
  }
  var b;
  b = ng[n(null == a ? null : a)];
  if(!b && (b = ng._, !b)) {
    throw v("IUninitialized.-uninitialized", a);
  }
  return b.call(null, a)
}
var wg = function() {
  function a(a, b) {
    return function(e) {
      e = a.a ? a.a(e) : a.call(null, e);
      return q(e) ? b.a ? b.a(e) : b.call(null, e) : e
    }
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 0:
        return Qc;
      case 2:
        return a.call(this, b, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = function() {
    return Qc
  };
  b.b = a;
  return b
}();
function xg(a, b) {
  if(a ? a.Fc : a) {
    return a.Fc(a, b)
  }
  var c;
  c = xg[n(null == a ? null : a)];
  if(!c && (c = xg._, !c)) {
    throw v("IConstraintStep.-step", a);
  }
  return c.call(null, a, b)
}
function yg(a) {
  if(a ? a.Jc : a) {
    return a.Jc(a)
  }
  var b;
  b = yg[n(null == a ? null : a)];
  if(!b && (b = yg._, !b)) {
    throw v("IRunnable.-runnable?", a);
  }
  return b.call(null, a)
}
function Ef(a) {
  if(a ? a.Ec : a) {
    return a.Ec(a)
  }
  var b;
  b = Ef[n(null == a ? null : a)];
  if(!b && (b = Ef._, !b)) {
    throw v("IConstraintOp.-rands", a);
  }
  return b.call(null, a)
}
function Rf(a) {
  if(a ? a.Gc : a) {
    return a.Gc(a)
  }
  var b;
  b = Rf[n(null == a ? null : a)];
  if(!b && (b = Rf._, !b)) {
    throw v("IConstraintWatchedStores.-watched-stores", a);
  }
  return b.call(null, a)
}
function zg(a, b, c, d) {
  return X(c, Ge) ? a : mc.c(function(a, b) {
    var h = Df(a, b);
    return gc(c, h) ? a : d.b ? d.b(a, h) : d.call(null, a, h)
  }, a, b.ea)
}
function Ag(a, b) {
  if(a ? a.Ic : a) {
    return a.Ic(a, b)
  }
  var c;
  c = Ag[n(null == a ? null : a)];
  if(!c && (c = Ag._, !c)) {
    throw v("IMergeDomains.-merge-doms", a);
  }
  return c.call(null, a, b)
}
var Bg = function() {
  function a(a, b, g, h, k) {
    var l = a.Rb(0, b), p = Af(l) ? a.Sb(0, b, S.c(l, Qe, S.c(l.aa, g, h))) : function() {
      var c = q(Z.a ? Z.a(l) : Z.call(null, l)) ? Pe : l;
      return a.Sa(0, b, Bf.b(c, new Id([g, h])))
    }();
    return zg(p, l, k, function(a, d) {
      return c.s(a, d, g, h, Nb.b(q(k) ? k : ie, b))
    })
  }
  function b(a, b, g, h) {
    b = a.mb(0, b);
    return c.s(a, b, g, h, null)
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
  c.o = b;
  c.s = a;
  return c
}();
function fg(a, b, c) {
  var d = Gf(a, b), e = Gf(a, c);
  b = Ye.b(e.ea, d.ea);
  var g;
  a: {
    g = D(d.aa);
    for(var h = e.aa, k = Hd;;) {
      if(q(g)) {
        var l = E(g), p = Q.c(l, 0, null), l = Q.c(l, 1, null), r = hc(h, p);
        if(q(r)) {
          if(Q.c(r, 0, null), r = Q.c(r, 1, null), l = Ag(l, r), q(l)) {
            g = H(g), h = Qb.b(h, p), k = S.c(k, p, l)
          }else {
            g = null;
            break a
          }
        }else {
          g = H(g), k = S.c(k, p, l)
        }
      }else {
        g = fe.e(I([k, h], 0));
        break a
      }
    }
    g = void 0
  }
  d = q(g) ? Bf.o(e.F, g, b, fe.e(I([Tb(d), Tb(e)], 0))) : null;
  if(q(d)) {
    a: {
      c = Vf(a, c, d);
      a = g;
      for(b = D(b);;) {
        if(q(b)) {
          b: {
            g = c;
            c = c.mb(0, E(b));
            e = a;
            d = Gf(g, c).aa;
            for(e = D(e);;) {
              if(q(e)) {
                if(k = E(e), h = Q.c(k, 0, null), k = Q.c(k, 1, null), p = R.c(d, h, mf), k = p === mf ? k : Ag(k, p), q(k)) {
                  e = H(e), g = Bg.s(g, c, h, k, ie)
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
          if(q(c)) {
            b = H(b)
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
function Cg(a) {
  return Af(a) ? a : Bf.a(Pe)
}
function Dg(a, b, c) {
  b = Df(a, b);
  c = Df(a, c);
  var d = Cg(Gf(a, b)), e = Cg(Gf(a, c));
  return $f($f(a, b, new zf(d.F, d.aa, Nb.b(function() {
    var a = d.ea;
    return q(a) ? a : ie
  }(), c))), c, new zf(e.F, e.aa, Nb.b(function() {
    var a = e.ea;
    return q(a) ? a : ie
  }(), b)))
}
function Eg(a, b) {
  return function(c) {
    return Yf(c, a, b)
  }
}
function Fg(a) {
  if(a ? a.mc : a) {
    return a.mc()
  }
  var b;
  b = Fg[n(null == a ? null : a)];
  if(!b && (b = Fg._, !b)) {
    throw v("ISuspendedStream.-ready?", a);
  }
  return b.call(null, a)
}
function Gg(a, b, c, d, e) {
  this.ra = a;
  this.qa = b;
  this.J = c;
  this.Q = d;
  this.C = e;
  this.p = 0;
  this.f = 2229667594;
  3 < arguments.length ? (this.Q = d, this.C = e) : this.C = this.Q = null
}
m = Gg.prototype;
m.u = function() {
  var a = this.j;
  return null != a ? a : this.j = a = rc(this)
};
m.M = function(a, b) {
  return La.c(this, b, null)
};
m.N = function(a, b, c) {
  return X(b, Me) ? this.ra : X(b, Le) ? this.qa : X(b, Je) ? this.J : u ? R.c(this.C, b, c) : null
};
m.Ia = function(a, b, c) {
  return q(X.b ? X.b(Me, b) : X.call(null, Me, b)) ? new Gg(c, this.qa, this.J, this.Q, this.C, null) : q(X.b ? X.b(Le, b) : X.call(null, Le, b)) ? new Gg(this.ra, c, this.J, this.Q, this.C, null) : q(X.b ? X.b(Je, b) : X.call(null, Je, b)) ? new Gg(this.ra, this.qa, c, this.Q, this.C, null) : new Gg(this.ra, this.qa, this.J, this.Q, S.c(this.C, b, c), null)
};
m.t = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, ve, "", " ", "", c, a)
  }, "#cljs.core.logic.SuspendedStream{", ", ", "}", c, Ic.b(new U(null, 3, 5, V, [new U(null, 2, 5, V, [Me, this.ra], null), new U(null, 2, 5, V, [Le, this.qa], null), new U(null, 2, 5, V, [Je, this.J], null)], null), this.C))
};
m.H = function(a, b) {
  return ac(b) ? Oa(this, x.b(b, 0), x.b(b, 1)) : mc.c(Da, this, b)
};
m.v = function() {
  return D(Ic.b(new U(null, 3, 5, V, [new U(null, 2, 5, V, [Me, this.ra], null), new U(null, 2, 5, V, [Le, this.qa], null), new U(null, 2, 5, V, [Je, this.J], null)], null), this.C))
};
m.I = function() {
  return 3 + P(this.C)
};
m.mc = function() {
  return Ya(this.ra).Yc !== this.qa
};
m.r = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bd(this, b) : b) ? !0 : !1
};
m.A = function(a, b) {
  return new Gg(this.ra, this.qa, this.J, b, this.C, this.j)
};
m.w = f("Q");
m.Za = function(a, b) {
  return gc(new ge(null, new ma(null, 3, [Je, null, Le, null, Me, null], null), null), b) ? Qb.b(O($c(Hd, this), this.Q), b) : new Gg(this.ra, this.qa, this.J, this.Q, Mc(Qb.b(this.C, b)), null)
};
function Hg(a, b) {
  for(var c = a, d = od;;) {
    if(null == c) {
      return b.k ? b.k() : b.call(null)
    }
    if(q(Fg(E(c)))) {
      return Ze.Wb.a ? Ze.Wb.a(function(a, b) {
        return function() {
          var c = E(a), d = c.J, e = $c(b, H(a));
          return Xb(e) ? d.k ? d.k() : d.call(null) : lf(d.k ? d.k() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(c, d)) : Ze.Wb.call(null, function(a, b) {
        return function() {
          var c = E(a), d = c.J, e = $c(b, H(a));
          return Xb(e) ? d.k ? d.k() : d.call(null) : lf(d.k ? d.k() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(c, d))
    }
    if(u) {
      var e = H(c), d = Nb.b(d, E(c)), c = e
    }else {
      return null
    }
  }
}
U.prototype.cb = !0;
U.prototype.Ka = function(a, b) {
  var c = this;
  return Hg(c, function() {
    var a = b.k ? b.k() : b.call(null);
    return ac(a) ? $c(a, c) : lf(a, function() {
      return c
    })
  })
};
U.prototype.Ba = function(a, b) {
  var c = this;
  return Hg(c, function() {
    return $c(od, Uc.b(function(a) {
      return new Gg(a.ra, a.qa, function() {
        return kf(a.J.call(null), b)
      })
    }, c))
  })
};
function Ig(a) {
  return function(b) {
    b = mc.c(function(a, b) {
      return Vf(a, b, Bf.a(Pe))
    }, b, Ff(b, a));
    return new ag(b.n, b.ca, b.ha, Hf(b.X, b, a), b.da, b.W, b.ba, b.G)
  }
}
function Jg(a) {
  return function(b) {
    return new ag(b.n, b.ca, b.ha, If(b.X, b, a), b.da, b.W, b.ba, b.G)
  }
}
function Kg(a) {
  return function(b) {
    return new ag(b.n, b.ca, b.ha, Jf(b.X, a, !0), b.da, b.W, b.ba, b.G)
  }
}
function Lg(a) {
  return function(b) {
    return new ag(b.n, b.ca, b.ha, Jf(b.X, a, !1), b.da, b.W, b.ba, b.G)
  }
}
function Mg(a) {
  if(a ? a.Hc : a) {
    return a.Hc(a)
  }
  var b;
  b = Mg[n(null == a ? null : a)];
  if(!b && (b = Mg._, !b)) {
    throw v("IEntailed.-entailed?", a);
  }
  return b.call(null, a)
}
function Ng(a) {
  return a ? q(q(null) ? null : a.od) ? !0 : !1 : !1
}
function Og(a, b, c) {
  a = Of(a);
  c = c.X.va.call(null, a);
  c = q(c) ? c : null == a;
  return q(c) ? Mg(b) : c
}
function Pg(a) {
  return function(b) {
    var c = xg(a, b);
    return Ng(c) && Og(a, c, b) ? Jg(a).call(null, b) : q(yg(c)) ? wg.b(Kg(a), wg.b(c, Lg(a))).call(null, b) : b
  }
}
function Qg(a) {
  for(;;) {
    if(q(a)) {
      var b = a.da;
      if(0 === P(b)) {
        return new ag(a.n, a.ca, a.ha, a.X, null, a.W, a.ba, a.G)
      }
      b = E(b);
      a = Pg(b).call(null, new ag(a.n, a.ca, a.ha, a.X, rd.b(a.da, 1), Ub.b(a.W, Of(b)), a.ba, a.G))
    }else {
      return null
    }
  }
}
function Rg(a) {
  return function(b) {
    var c = b.da;
    b = mc.c(function() {
      return function(a, b) {
        return Zf(a, b)
      }
    }(c), new ag(b.n, b.ca, b.ha, b.X, q(c) ? c : od, b.W, b.ba, b.G), a);
    return q(c) ? b : Qg(b)
  }
}
var cg = function Sg(b, c, d) {
  return 0 === P(c) || null == D(b) ? tg : function(e) {
    var g = Kf(c, e, E(b), d);
    return D(g) ? wg.b(Rg(g), Sg(H(b), c, d)).call(null, e) : Sg(H(b), c, d).call(null, e)
  }
}, Ug = function Tg(b) {
  "undefined" === typeof $e && ($e = function(b, d, e) {
    this.ka = b;
    this.vc = d;
    this.Tc = e;
    this.p = 0;
    this.f = 393217
  }, $e.qb = !0, $e.pb = "cljs.core.logic/t16593", $e.Ub = function(b, d) {
    return y(d, "cljs.core.logic/t16593")
  }, $e.prototype.call = function(b, d) {
    b = this;
    var e = xg(b.ka, d);
    if(q(yg(e))) {
      e = e.a ? e.a(d) : e.call(null, d);
      if(q(e)) {
        var g = xg(b.ka, e);
        return Ng(g) && !Og(b.ka, g, e) ? Ig(b.ka).call(null, e) : e
      }
      return null
    }
    return Ig(b.ka).call(null, d)
  }, $e.prototype.apply = function(b, d) {
    return this.call.apply(this, [this].concat(xa(d)))
  }, $e.prototype.a = function(b) {
    var d = xg(this.ka, b);
    return q(yg(d)) ? (b = d.a ? d.a(b) : d.call(null, b), q(b) ? (d = xg(this.ka, b), Ng(d) && !Og(this.ka, d, b) ? Ig(this.ka).call(null, b) : b) : null) : Ig(this.ka).call(null, b)
  }, $e.prototype.w = f("Tc"), $e.prototype.A = function(b, d) {
    return new $e(this.ka, this.vc, d)
  });
  return new $e(b, Tg, null)
};
function Vg(a, b) {
  var c;
  if(q(Z.a ? Z.a(b) : Z.call(null, b))) {
    if(c = Gf(a, b), Af(c)) {
      var d = c.F;
      c = Lc.b(d, Pe) ? d : Ee.a ? Ee.a(Qe.a(c)) : Ee.call(null, Qe.a(c))
    }else {
      c = ta(Z.a ? Z.a(c) : Z.call(null, c)) ? c : null
    }
  }else {
    c = b
  }
  return c
}
function Wg(a) {
  return function(b, c) {
    var d = Vg(a, b), e = Vg(a, c);
    return(Ze.Wa.a ? Ze.Wa.a(d) : Ze.Wa.call(null, d)) < (Ze.Wa.a ? Ze.Wa.a(e) : Ze.Wa.call(null, e))
  }
}
function Xg(a, b, c) {
  b = Ie.a(Tb(b));
  return z.b(Ke, b) ? D(lc.b(Wg(c), a)) : u ? a : null
}
function Yg(a, b) {
  if(a ? a.Nb : a) {
    return a.Nb(a, b)
  }
  var c;
  c = Yg[n(null == a ? null : a)];
  if(!c && (c = Yg._, !c)) {
    throw v("IForceAnswerTerm.-force-ans", a);
  }
  return c.call(null, a, b)
}
ma.prototype.Nb = function() {
  var a = function c(a) {
    return q(a) ? function(e) {
      return kf(kf(e, Zg.a ? Zg.a(tc(E(a))) : Zg.call(null, tc(E(a)))), c(H(a)))
    } : tg
  };
  return a.a ? a.a(D(this)) : a.call(null, D(this))
};
Zd.prototype.Nb = function() {
  var a = function c(a) {
    return q(a) ? function(e) {
      return kf(kf(e, Zg.a ? Zg.a(tc(E(a))) : Zg.call(null, tc(E(a)))), c(H(a)))
    } : tg
  };
  return a.a ? a.a(D(this)) : a.call(null, D(this))
};
Yg._ = function(a, b) {
  if(Zb(a)) {
    var c = function e(a) {
      return q(a) ? function(c) {
        return kf(kf(c, Zg.a ? Zg.a(E(a)) : Zg.call(null, E(a))), function(c) {
          var h = Xg(H(a), b, c);
          return q(h) ? e(h).call(null, c) : c
        })
      } : tg
    };
    return c.a ? c.a(D(a)) : c.call(null, D(a))
  }
  return u ? q(Z.a ? Z.a(b) : Z.call(null, b)) ? Eg(b, a) : tg : null
};
Yg["null"] = function() {
  return tg
};
function Zg(a) {
  return function(b) {
    var c;
    c = Wf(b, a);
    if(q(Z.a ? Z.a(c) : Z.call(null, c))) {
      c = Yg(Vg(b, a), c)
    }else {
      var d = Df(b, a);
      c = Zb(c) ? Yg(Xg(c, d, b), d) : Yg(c, d)
    }
    return c.call(null, b)
  }
}
function $g(a, b, c, d) {
  if(a ? a.lb : a) {
    return a.lb(a, b, c, d)
  }
  var e;
  e = $g[n(null == a ? null : a)];
  if(!e && (e = $g._, !e)) {
    throw v("IDisunifyTerms.-disunify-terms", a);
  }
  return e.call(null, a, b, c, d)
}
var ah = function() {
  function a(a, b, c, h) {
    if(b === c) {
      return h
    }
    b = Wf(a, b);
    c = Wf(a, c);
    if(b === c || z.b(b, c)) {
      a = h
    }else {
      var k;
      k = (k = ta(Z.a ? Z.a(b) : Z.call(null, b))) ? Z.a ? Z.a(c) : Z.call(null, c) : k;
      a = q(k) ? $g(c, b, a, h) : $g(b, c, a, h)
    }
    return a
  }
  function b(a, b, g) {
    return c.o(a, b, g, new ma(null, 1, [Be, Hd], null))
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
  c.o = a;
  return c
}();
function bh(a, b, c, d) {
  if($b(a) && P(b) === P(a)) {
    for(var e = D(ee(b));;) {
      if(e) {
        var g = E(e), h = R.c(a, g, mf);
        if(z.b(h, mf)) {
          return null
        }
        d = ah.o(c, R.b(b, g), h, d);
        if(q(d)) {
          e = H(e)
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
$g._ = function(a, b, c, d) {
  if(Zb(a)) {
    if(Zb(b)) {
      for(a = D(a), b = D(b);;) {
        if(q(a)) {
          if(q(b)) {
            var e = a.D(null), g = b.D(null);
            d = ah.o(c, e, g, d);
            if(q(d)) {
              a = H(a), b = H(b)
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
    return u ? z.b(a, b) ? d : null : null
  }
};
Zd.prototype.lb = function(a, b, c, d) {
  return bh(b, this, c, d)
};
ma.prototype.lb = function(a, b, c, d) {
  return bh(b, this, c, d)
};
eg.prototype.lb = function(a, b, c, d) {
  a = ec(d) ? T.b(ce, d) : d;
  c = R.b(a, Be);
  return S.c(a, Be, S.c(c, this, b))
};
$g["null"] = function(a, b, c, d) {
  return null != b ? null : d
};
function ch(a, b, c) {
  if(a ? a.Oc : a) {
    return a.Oc(a, b, c)
  }
  var d;
  d = ch[n(null == a ? null : a)];
  if(!d && (d = ch._, !d)) {
    throw v("ISubstitutions.ext-no-check", a);
  }
  return d.call(null, a, b, c)
}
function dh(a, b) {
  if(a ? a.Pc : a) {
    return a.Pc(a, b)
  }
  var c;
  c = dh[n(null == a ? null : a)];
  if(!c && (c = dh._, !c)) {
    throw v("ISubstitutions.walk", a);
  }
  return c.call(null, a, b)
}
function eh(a, b) {
  if(a ? a.Qc : a) {
    return a.Qc(a, b)
  }
  var c;
  c = eh[n(null == a ? null : a)];
  if(!c && (c = eh._, !c)) {
    throw v("ISubstitutionsCLP.root-val", a);
  }
  return c.call(null, a, b)
}
;var fh = Pb([new A(null, "+", "+", -1640531484, null), new A(null, "*", "*", -1640531485, null), new A(null, "-", "-", -1640531482, null), new A(null, "/", "/", -1640531480, null), new A(null, "\x3c", "\x3c", -1640531467, null), new A(null, "!\x3d", "!\x3d", -1640530443, null), new A(null, "\x3d", "\x3d", -1640531466, null), new A(null, "\x3e", "\x3e", -1640531465, null), new A(null, "\x3e\x3d", "\x3e\x3d", -1640529544, null), new A(null, "\x3c\x3d", "\x3c\x3d", -1640529606, null)], [new A("cljs.core.logic.fd", 
"+", "cljs.core.logic.fd/+", 1528484149, null), new A("cljs.core.logic.fd", "*", "cljs.core.logic.fd/*", 1528484146, null), new A("cljs.core.logic.fd", "-", "cljs.core.logic.fd/-", 1528484151, null), new A("cljs.core.logic.fd", "quot", "cljs.core.logic.fd/quot", 1533391379, null), new A("cljs.core.logic.fd", "\x3c", "cljs.core.logic.fd/\x3c", 1528484292, null), new A("cljs.core.logic.fd", "!\x3d", "cljs.core.logic.fd/!\x3d", 1528485316, null), new A("cljs.core.logic.fd", "\x3d\x3d", "cljs.core.logic.fd/\x3d\x3d", 
1528485544, null), new A("cljs.core.logic.fd", "\x3e", "cljs.core.logic.fd/\x3e", 1528484294, null), new A("cljs.core.logic.fd", "\x3e\x3d", "cljs.core.logic.fd/\x3e\x3d", 1528482121, null), new A("cljs.core.logic.fd", "\x3c\x3d", "cljs.core.logic.fd/\x3c\x3d", 1528485515, null)]);
(function(a) {
  a = D(a);
  if(null == a) {
    return ie
  }
  if(a instanceof Eb) {
    a = a.d;
    a: {
      for(var b = 0, c = ob(ie);;) {
        if(b < a.length) {
          var d = b + 1, c = c.Aa(null, a[b]), b = d
        }else {
          a = c;
          break a
        }
      }
      a = void 0
    }
    return a.Ja(null)
  }
  if(u) {
    for(d = ob(ie);;) {
      if(null != a) {
        b = a.R(null), d = d.Aa(null, a.D(null)), a = b
      }else {
        return d.Ja(null)
      }
    }
  }else {
    return null
  }
})(ee(fh));
var gh;
function hh(a, b, c) {
  if(a ? a.Tb : a) {
    return a.Tb(a, b, c)
  }
  var d;
  d = hh[n(null == a ? null : a)];
  if(!d && (d = hh._, !d)) {
    throw v("INomSwap.swap-noms", a);
  }
  return d.call(null, a, b, c)
}
U.prototype.Tb = function(a, b, c) {
  b = hh(D(this), b, c);
  a = Q.c(b, 0, null);
  b = Q.c(b, 1, null);
  return new U(null, 2, 5, V, [pd(a), b], null)
};
eg.prototype.Tb = function(a, b, c) {
  var d = dh(c, this);
  if(q(Z.a ? Z.a(d) : Z.call(null, d))) {
    a = O(jg.k ? jg.k() : jg.call(null), Tb(d));
    var e = eh(c, d);
    b = (ih.c ? ih.c(a, d, b) : ih.call(null, a, d, b)).call(null, Dg(Af(e) ? ch(c, a, e) : c, d, a));
    return new U(null, 2, 5, V, [a, b], null)
  }
  return hh(d, b, c)
};
hh._ = function(a, b, c) {
  if(Yb(a)) {
    if(D(a)) {
      var d = hh(E(a), b, c);
      c = Q.c(d, 0, null);
      d = Q.c(d, 1, null);
      d = hh(H(a), b, d);
      b = Q.c(d, 0, null);
      d = Q.c(d, 1, null);
      return new U(null, 2, 5, V, [O(J(c, b), Tb(a)), d], null)
    }
    return new U(null, 2, 5, V, [a, c], null)
  }
  return $b(a) ? (c = hh(D(a), b, c), a = Q.c(c, 0, null), d = Q.c(c, 1, null), new U(null, 2, 5, V, [$c(Hd, a), d], null)) : u ? new U(null, 2, 5, V, [a, c], null) : null
};
hh["null"] = function(a, b, c) {
  return new U(null, 2, 5, V, [a, c], null)
};
var kh = function jh(b, c, d) {
  "undefined" === typeof gh && (gh = function(b, c, d, k, l) {
    this.rc = b;
    this.tc = c;
    this.sc = d;
    this.uc = k;
    this.Sc = l;
    this.p = 0;
    this.f = 393216
  }, gh.qb = !0, gh.pb = "cljs.core.logic.nominal/t16132", gh.Ub = function(b, c) {
    return y(c, "cljs.core.logic.nominal/t16132")
  }, gh.prototype.toString = function() {
    return[w("suspc"), w(this.sc), w(this.tc), w(this.rc)].join("")
  }, gh.prototype.w = f("Sc"), gh.prototype.A = function(b, c) {
    return new gh(this.rc, this.tc, this.sc, this.uc, c)
  });
  return new gh(d, c, b, jh, null)
};
function ih(a, b, c) {
  return Ug(kh(a, b, c))
}
;
})();
