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
var g;
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
ja.prototype.hc = "";
ja.prototype.append = function(a, b, c) {
  this.hc += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.hc += arguments[d]
    }
  }
  return this
};
ja.prototype.toString = f("hc");
var ka;
function ma() {
  return p(new q(null, 5, [na, !0, oa, !0, pa, !1, qa, !1, ra, null], null), new q(null, 2, [s, 44, t, 32], null))
}
function u(a) {
  return null != a && !1 !== a
}
function sa(a) {
  return u(a) ? !1 : !0
}
function v(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : w ? !1 : null
}
function ta(a) {
  return null == a ? null : a.constructor
}
function y(a, b) {
  var c = ta(b), c = u(u(c) ? c.ja : c) ? c.ia : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function ua(a) {
  var b = a.ia;
  return u(b) ? b : "" + A(a)
}
function va(a) {
  for(var b = a.length, c = Array(b), d = 0;;) {
    if(d < b) {
      c[d] = a[d], d += 1
    }else {
      break
    }
  }
  return c
}
var wa = {}, xa = {};
function ya(a) {
  if(a ? a.S : a) {
    return a.S(a)
  }
  var b;
  b = ya[n(null == a ? null : a)];
  if(!b && (b = ya._, !b)) {
    throw y("ICounted.-count", a);
  }
  return b.call(null, a)
}
function Aa(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  b = Aa[n(null == a ? null : a)];
  if(!b && (b = Aa._, !b)) {
    throw y("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var Ba = {};
function B(a, b) {
  if(a ? a.R : a) {
    return a.R(a, b)
  }
  var c;
  c = B[n(null == a ? null : a)];
  if(!c && (c = B._, !c)) {
    throw y("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var Ca = {}, C = function() {
  function a(a, b, c) {
    if(a ? a.ta : a) {
      return a.ta(a, b, c)
    }
    var k;
    k = C[n(null == a ? null : a)];
    if(!k && (k = C._, !k)) {
      throw y("IIndexed.-nth", a);
    }
    return k.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.la : a) {
      return a.la(a, b)
    }
    var c;
    c = C[n(null == a ? null : a)];
    if(!c && (c = C._, !c)) {
      throw y("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), Da = {};
function Fa(a) {
  if(a ? a.aa : a) {
    return a.aa(a)
  }
  var b;
  b = Fa[n(null == a ? null : a)];
  if(!b && (b = Fa._, !b)) {
    throw y("ISeq.-first", a);
  }
  return b.call(null, a)
}
function Ga(a) {
  if(a ? a.ma : a) {
    return a.ma(a)
  }
  var b;
  b = Ga[n(null == a ? null : a)];
  if(!b && (b = Ga._, !b)) {
    throw y("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var Ha = {}, Ia = {}, Ja = function() {
  function a(a, b, c) {
    if(a ? a.L : a) {
      return a.L(a, b, c)
    }
    var k;
    k = Ja[n(null == a ? null : a)];
    if(!k && (k = Ja._, !k)) {
      throw y("ILookup.-lookup", a);
    }
    return k.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.K : a) {
      return a.K(a, b)
    }
    var c;
    c = Ja[n(null == a ? null : a)];
    if(!c && (c = Ja._, !c)) {
      throw y("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), Ka = {};
function La(a, b) {
  if(a ? a.zc : a) {
    return a.zc(a, b)
  }
  var c;
  c = La[n(null == a ? null : a)];
  if(!c && (c = La._, !c)) {
    throw y("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b)
}
function Ma(a, b, c) {
  if(a ? a.Ya : a) {
    return a.Ya(a, b, c)
  }
  var d;
  d = Ma[n(null == a ? null : a)];
  if(!d && (d = Ma._, !d)) {
    throw y("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var Na = {};
function Oa(a, b) {
  if(a ? a.jc : a) {
    return a.jc(a, b)
  }
  var c;
  c = Oa[n(null == a ? null : a)];
  if(!c && (c = Oa._, !c)) {
    throw y("IMap.-dissoc", a);
  }
  return c.call(null, a, b)
}
var Pa = {};
function Qa(a) {
  if(a ? a.kc : a) {
    return a.kc(a)
  }
  var b;
  b = Qa[n(null == a ? null : a)];
  if(!b && (b = Qa._, !b)) {
    throw y("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function Ra(a) {
  if(a ? a.Bc : a) {
    return a.Bc(a)
  }
  var b;
  b = Ra[n(null == a ? null : a)];
  if(!b && (b = Ra._, !b)) {
    throw y("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var Sa = {};
function Ta(a, b) {
  if(a ? a.Hd : a) {
    return a.Hd(a, b)
  }
  var c;
  c = Ta[n(null == a ? null : a)];
  if(!c && (c = Ta._, !c)) {
    throw y("ISet.-disjoin", a);
  }
  return c.call(null, a, b)
}
function Ua(a) {
  if(a ? a.Gb : a) {
    return a.Gb(a)
  }
  var b;
  b = Ua[n(null == a ? null : a)];
  if(!b && (b = Ua._, !b)) {
    throw y("IStack.-peek", a);
  }
  return b.call(null, a)
}
function Va(a) {
  if(a ? a.Hb : a) {
    return a.Hb(a)
  }
  var b;
  b = Va[n(null == a ? null : a)];
  if(!b && (b = Va._, !b)) {
    throw y("IStack.-pop", a);
  }
  return b.call(null, a)
}
var Wa = {};
function Xa(a, b, c) {
  if(a ? a.Ec : a) {
    return a.Ec(a, b, c)
  }
  var d;
  d = Xa[n(null == a ? null : a)];
  if(!d && (d = Xa._, !d)) {
    throw y("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function Ya(a) {
  if(a ? a.Ge : a) {
    return a.state
  }
  var b;
  b = Ya[n(null == a ? null : a)];
  if(!b && (b = Ya._, !b)) {
    throw y("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var Za = {};
function $a(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  b = $a[n(null == a ? null : a)];
  if(!b && (b = $a._, !b)) {
    throw y("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var ab = {};
function bb(a, b) {
  if(a ? a.H : a) {
    return a.H(a, b)
  }
  var c;
  c = bb[n(null == a ? null : a)];
  if(!c && (c = bb._, !c)) {
    throw y("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var cb = {}, db = function() {
  function a(a, b, c) {
    if(a ? a.da : a) {
      return a.da(a, b, c)
    }
    var k;
    k = db[n(null == a ? null : a)];
    if(!k && (k = db._, !k)) {
      throw y("IReduce.-reduce", a);
    }
    return k.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ca : a) {
      return a.ca(a, b)
    }
    var c;
    c = db[n(null == a ? null : a)];
    if(!c && (c = db._, !c)) {
      throw y("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function eb(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  c = eb[n(null == a ? null : a)];
  if(!c && (c = eb._, !c)) {
    throw y("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function fb(a) {
  if(a ? a.N : a) {
    return a.N(a)
  }
  var b;
  b = fb[n(null == a ? null : a)];
  if(!b && (b = fb._, !b)) {
    throw y("IHash.-hash", a);
  }
  return b.call(null, a)
}
var gb = {};
function hb(a) {
  if(a ? a.Q : a) {
    return a.Q(a)
  }
  var b;
  b = hb[n(null == a ? null : a)];
  if(!b && (b = hb._, !b)) {
    throw y("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var ib = {}, jb = {}, kb = {};
function lb(a) {
  if(a ? a.Cc : a) {
    return a.Cc(a)
  }
  var b;
  b = lb[n(null == a ? null : a)];
  if(!b && (b = lb._, !b)) {
    throw y("IReversible.-rseq", a);
  }
  return b.call(null, a)
}
function D(a, b) {
  if(a ? a.de : a) {
    return a.de(0, b)
  }
  var c;
  c = D[n(null == a ? null : a)];
  if(!c && (c = D._, !c)) {
    throw y("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function mb(a) {
  if(a ? a.Le : a) {
    return null
  }
  var b;
  b = mb[n(null == a ? null : a)];
  if(!b && (b = mb._, !b)) {
    throw y("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var nb = {};
function ob(a, b, c) {
  if(a ? a.M : a) {
    return a.M(a, b, c)
  }
  var d;
  d = ob[n(null == a ? null : a)];
  if(!d && (d = ob._, !d)) {
    throw y("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function pb(a, b, c) {
  if(a ? a.ce : a) {
    return a.ce(0, b, c)
  }
  var d;
  d = pb[n(null == a ? null : a)];
  if(!d && (d = pb._, !d)) {
    throw y("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function qb(a) {
  if(a ? a.Ac : a) {
    return a.Ac(a)
  }
  var b;
  b = qb[n(null == a ? null : a)];
  if(!b && (b = qb._, !b)) {
    throw y("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function rb(a, b) {
  if(a ? a.Tb : a) {
    return a.Tb(a, b)
  }
  var c;
  c = rb[n(null == a ? null : a)];
  if(!c && (c = rb._, !c)) {
    throw y("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function sb(a) {
  if(a ? a.Ib : a) {
    return a.Ib(a)
  }
  var b;
  b = sb[n(null == a ? null : a)];
  if(!b && (b = sb._, !b)) {
    throw y("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function tb(a, b, c) {
  if(a ? a.lc : a) {
    return a.lc(a, b, c)
  }
  var d;
  d = tb[n(null == a ? null : a)];
  if(!d && (d = tb._, !d)) {
    throw y("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function ub(a, b, c) {
  if(a ? a.be : a) {
    return a.be(0, b, c)
  }
  var d;
  d = ub[n(null == a ? null : a)];
  if(!d && (d = ub._, !d)) {
    throw y("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function vb(a) {
  if(a ? a.Zd : a) {
    return a.Zd()
  }
  var b;
  b = vb[n(null == a ? null : a)];
  if(!b && (b = vb._, !b)) {
    throw y("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function wb(a) {
  if(a ? a.sd : a) {
    return a.sd(a)
  }
  var b;
  b = wb[n(null == a ? null : a)];
  if(!b && (b = wb._, !b)) {
    throw y("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function xb(a) {
  if(a ? a.td : a) {
    return a.td(a)
  }
  var b;
  b = xb[n(null == a ? null : a)];
  if(!b && (b = xb._, !b)) {
    throw y("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function yb(a) {
  if(a ? a.rd : a) {
    return a.rd(a)
  }
  var b;
  b = yb[n(null == a ? null : a)];
  if(!b && (b = yb._, !b)) {
    throw y("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function zb(a) {
  this.ff = a;
  this.u = 0;
  this.h = 1073741824
}
zb.prototype.de = function(a, b) {
  return this.ff.append(b)
};
zb.prototype.Le = ba(null);
function Ab(a) {
  var b = new ja, c = new zb(b);
  a.M(null, c, ma());
  mb(c);
  return"" + A(b)
}
function Bb(a, b) {
  if(u(E.a ? E.a(a, b) : E.call(null, a, b))) {
    return 0
  }
  var c = sa(a.va);
  if(u(c ? b.va : c)) {
    return-1
  }
  if(u(a.va)) {
    if(sa(b.va)) {
      return 1
    }
    c = Cb.a ? Cb.a(a.va, b.va) : Cb.call(null, a.va, b.va);
    return 0 === c ? Cb.a ? Cb.a(a.name, b.name) : Cb.call(null, a.name, b.name) : c
  }
  return Db ? Cb.a ? Cb.a(a.name, b.name) : Cb.call(null, a.name, b.name) : null
}
function Eb(a, b, c, d, e) {
  this.va = a;
  this.name = b;
  this.Zb = c;
  this.Sb = d;
  this.$ = e;
  this.h = 2154168321;
  this.u = 4096
}
g = Eb.prototype;
g.M = function(a, b) {
  return D(b, this.Zb)
};
g.N = function() {
  var a = this.Sb;
  return null != a ? a : this.Sb = a = Fb.a ? Fb.a(Gb.b ? Gb.b(this.va) : Gb.call(null, this.va), Gb.b ? Gb.b(this.name) : Gb.call(null, this.name)) : Fb.call(null, Gb.b ? Gb.b(this.va) : Gb.call(null, this.va), Gb.b ? Gb.b(this.name) : Gb.call(null, this.name))
};
g.H = function(a, b) {
  return new Eb(this.va, this.name, this.Zb, this.Sb, b)
};
g.G = f("$");
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ja.c(c, this, null);
      case 3:
        return Ja.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return Ja.c(a, this, null)
};
g.a = function(a, b) {
  return Ja.c(a, this, b)
};
g.J = function(a, b) {
  return b instanceof Eb ? this.Zb === b.Zb : !1
};
g.toString = f("Zb");
var Ib = function() {
  function a(a, b) {
    var c = null != a ? [A(a), A("/"), A(b)].join("") : b;
    return new Eb(a, b, c, null, null)
  }
  function b(a) {
    return a instanceof Eb ? a : c.a(null, a)
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
function F(a) {
  if(null == a) {
    return null
  }
  if(a && (a.h & 8388608 || a.Rf)) {
    return a.Q(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Jb(a, 0)
  }
  if(v(gb, a)) {
    return hb(a)
  }
  if(w) {
    throw Error([A(a), A("is not ISeqable")].join(""));
  }
  return null
}
function G(a) {
  if(null == a) {
    return null
  }
  if(a && (a.h & 64 || a.Dc)) {
    return a.aa(null)
  }
  a = F(a);
  return null == a ? null : Fa(a)
}
function H(a) {
  return null != a ? a && (a.h & 64 || a.Dc) ? a.ma(null) : (a = F(a)) ? Ga(a) : I : I
}
function J(a) {
  return null == a ? null : a && (a.h & 128 || a.ae) ? a.Da(null) : F(H(a))
}
var E = function() {
  function a(a, b) {
    return a === b || eb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.a(a, d)) {
          if(J(e)) {
            a = d, d = G(e), e = J(e)
          }else {
            return b.a(d, G(e))
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var b = G(a);
      a = J(a);
      var d = G(a);
      a = H(a);
      return c(b, d, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.b = ba(!0);
  b.a = a;
  b.d = c.d;
  return b
}();
fb["null"] = ba(0);
Ha["null"] = !0;
Sa["null"] = !0;
Ta["null"] = ba(null);
xa["null"] = !0;
ya["null"] = ba(0);
Ua["null"] = ba(null);
Va["null"] = ba(null);
eb["null"] = function(a, b) {
  return null == b
};
ab["null"] = !0;
bb["null"] = ba(null);
Za["null"] = !0;
$a["null"] = ba(null);
Aa["null"] = ba(null);
Na["null"] = !0;
Oa["null"] = ba(null);
Date.prototype.J = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
eb.number = function(a, b) {
  return a === b
};
Za["function"] = !0;
$a["function"] = ba(null);
wa["function"] = !0;
fb._ = function(a) {
  return a[ca] || (a[ca] = ++da)
};
function Kb(a) {
  return a + 1
}
var Lb = function() {
  function a(a, b, c, d) {
    for(var m = ya(a);;) {
      if(d < m) {
        c = b.a ? b.a(c, C.a(a, d)) : b.call(null, c, C.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = ya(a), m = 0;;) {
      if(m < d) {
        c = b.a ? b.a(c, C.a(a, m)) : b.call(null, c, C.a(a, m)), m += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = ya(a);
    if(0 === c) {
      return b.A ? b.A() : b.call(null)
    }
    for(var d = C.a(a, 0), m = 1;;) {
      if(m < c) {
        d = b.a ? b.a(d, C.a(a, m)) : b.call(null, d, C.a(a, m)), m += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, h, k, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.o = a;
  return d
}(), Mb = function() {
  function a(a, b, c, d) {
    for(var m = a.length;;) {
      if(d < m) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, m = 0;;) {
      if(m < d) {
        c = b.a ? b.a(c, a[m]) : b.call(null, c, a[m]), m += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.A ? b.A() : b.call(null)
    }
    for(var d = a[0], m = 1;;) {
      if(m < c) {
        d = b.a ? b.a(d, a[m]) : b.call(null, d, a[m]), m += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, h, k, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.o = a;
  return d
}();
function Nb(a) {
  return a ? a.h & 2 || a.Fe ? !0 : a.h ? !1 : v(xa, a) : v(xa, a)
}
function Ob(a) {
  return a ? a.h & 16 || a.$d ? !0 : a.h ? !1 : v(Ca, a) : v(Ca, a)
}
function Jb(a, b) {
  this.e = a;
  this.C = b;
  this.u = 0;
  this.h = 166199550
}
g = Jb.prototype;
g.N = function() {
  return Pb.b ? Pb.b(this) : Pb.call(null, this)
};
g.Da = function() {
  return this.C + 1 < this.e.length ? new Jb(this.e, this.C + 1) : null
};
g.R = function(a, b) {
  return L.a ? L.a(b, this) : L.call(null, b, this)
};
g.Cc = function() {
  var a = ya(this);
  return 0 < a ? new Qb(this, a - 1, null) : null
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Mb.o(this.e, b, this.e[this.C], this.C + 1)
};
g.da = function(a, b, c) {
  return Mb.o(this.e, b, c, this.C)
};
g.Q = function() {
  return this
};
g.S = function() {
  return this.e.length - this.C
};
g.aa = function() {
  return this.e[this.C]
};
g.ma = function() {
  return this.C + 1 < this.e.length ? new Jb(this.e, this.C + 1) : I
};
g.J = function(a, b) {
  return Rb.a ? Rb.a(this, b) : Rb.call(null, this, b)
};
g.la = function(a, b) {
  var c = b + this.C;
  return c < this.e.length ? this.e[c] : null
};
g.ta = function(a, b, c) {
  a = b + this.C;
  return a < this.e.length ? this.e[a] : c
};
g.T = function() {
  return I
};
var Sb = function() {
  function a(a, b) {
    return b < a.length ? new Jb(a, b) : null
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
}(), K = function() {
  function a(a, b) {
    return Sb.a(a, b)
  }
  function b(a) {
    return Sb.a(a, 0)
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
function Qb(a, b, c) {
  this.qd = a;
  this.C = b;
  this.j = c;
  this.u = 0;
  this.h = 32374862
}
g = Qb.prototype;
g.N = function() {
  return Pb.b ? Pb.b(this) : Pb.call(null, this)
};
g.R = function(a, b) {
  return L.a ? L.a(b, this) : L.call(null, b, this)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Tb.a ? Tb.a(b, this) : Tb.call(null, b, this)
};
g.da = function(a, b, c) {
  return Tb.c ? Tb.c(b, c, this) : Tb.call(null, b, c, this)
};
g.Q = function() {
  return this
};
g.S = function() {
  return this.C + 1
};
g.aa = function() {
  return C.a(this.qd, this.C)
};
g.ma = function() {
  return 0 < this.C ? new Qb(this.qd, this.C - 1, null) : null
};
g.J = function(a, b) {
  return Rb.a ? Rb.a(this, b) : Rb.call(null, this, b)
};
g.H = function(a, b) {
  return new Qb(this.qd, this.C, b)
};
g.G = f("j");
g.T = function() {
  return p.a ? p.a(I, this.j) : p.call(null, I, this.j)
};
eb._ = function(a, b) {
  return a === b
};
var Ub = function() {
  function a(a, b) {
    return null != a ? B(a, b) : B(I, b)
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      for(;;) {
        if(u(e)) {
          a = b.a(a, d), d = G(e), e = J(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var b = G(a);
      a = J(a);
      var d = G(a);
      a = H(a);
      return c(b, d, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.a = a;
  b.d = c.d;
  return b
}();
function M(a) {
  if(null != a) {
    if(a && (a.h & 2 || a.Fe)) {
      a = a.S(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(v(xa, a)) {
            a = ya(a)
          }else {
            if(w) {
              a: {
                a = F(a);
                for(var b = 0;;) {
                  if(Nb(a)) {
                    a = b + ya(a);
                    break a
                  }
                  a = J(a);
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
var Vb = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return F(a) ? G(a) : c
      }
      if(Ob(a)) {
        return C.c(a, b, c)
      }
      if(F(a)) {
        a = J(a), b -= 1
      }else {
        return w ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(F(a)) {
          return G(a)
        }
        throw Error("Index out of bounds");
      }
      if(Ob(a)) {
        return C.a(a, b)
      }
      if(F(a)) {
        var c = J(a), k = b - 1;
        a = c;
        b = k
      }else {
        if(w) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), N = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.h & 16 || a.$d)) {
        return a.ta(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(v(Ca, a)) {
        return C.a(a, b)
      }
      if(w) {
        if(a ? a.h & 64 || a.Dc || (a.h ? 0 : v(Da, a)) : v(Da, a)) {
          return Vb.c(a, b, c)
        }
        throw Error([A("nth not supported on this type "), A(ua(ta(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.h & 16 || a.$d)) {
      return a.la(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(v(Ca, a)) {
      return C.a(a, b)
    }
    if(w) {
      if(a ? a.h & 64 || a.Dc || (a.h ? 0 : v(Da, a)) : v(Da, a)) {
        return Vb.a(a, b)
      }
      throw Error([A("nth not supported on this type "), A(ua(ta(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), Wb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.h & 256 || a.He) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : v(Ia, a) ? Ja.c(a, b, c) : w ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.h & 256 || a.He) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : v(Ia, a) ? Ja.a(a, b) : null
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), O = function() {
  function a(a, b, c) {
    return null != a ? Ma(a, b, c) : Xb.a ? Xb.a([b], [c]) : Xb.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, l, m) {
      var r = null;
      3 < arguments.length && (r = K(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, l, r)
    }
    function c(a, d, e, m) {
      for(;;) {
        if(a = b.c(a, d, e), u(m)) {
          d = G(m), e = G(J(m)), m = J(J(m))
        }else {
          return a
        }
      }
    }
    a.p = 3;
    a.g = function(a) {
      var b = G(a);
      a = J(a);
      var d = G(a);
      a = J(a);
      var m = G(a);
      a = H(a);
      return c(b, d, m, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h, k) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, h);
      default:
        return c.d(b, e, h, K(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 3;
  b.g = c.g;
  b.c = a;
  b.d = c.d;
  return b
}(), Yb = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), u(d)) {
          c = G(d), d = J(d)
        }else {
          return b
        }
      }
    }
    b.p = 2;
    b.g = function(a) {
      var b = G(a);
      a = J(a);
      var c = G(a);
      a = H(a);
      return d(b, c, a)
    };
    b.d = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Oa(a, d);
      default:
        return b.d(a, d, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.b = aa();
  a.a = function(a, b) {
    return Oa(a, b)
  };
  a.d = b.d;
  return a
}();
function Zb(a) {
  var b = "function" == n(a);
  return b ? b : a ? u(u(null) ? null : a.Ee) ? !0 : a.nc ? !1 : v(wa, a) : v(wa, a)
}
var p = function $b(b, c) {
  return Zb(b) && !(b ? b.h & 262144 || b.Vf || (b.h ? 0 : v(ab, b)) : v(ab, b)) ? $b(function() {
    "undefined" === typeof ka && (ka = function(b, c, h, k) {
      this.j = b;
      this.Jc = c;
      this.jf = h;
      this.df = k;
      this.u = 0;
      this.h = 393217
    }, ka.ja = !0, ka.ia = "cljs.core/t19424", ka.na = function(b, c) {
      return D(c, "cljs.core/t19424")
    }, ka.prototype.call = function() {
      function b(d, k) {
        d = this;
        var l = null;
        1 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, l)
      }
      function c(b, d) {
        return ac.a ? ac.a(b.Jc, d) : ac.call(null, b.Jc, d)
      }
      b.p = 1;
      b.g = function(b) {
        var d = G(b);
        b = H(b);
        return c(d, b)
      };
      b.d = c;
      return b
    }(), ka.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)))
    }, ka.prototype.a = function() {
      function b(d) {
        var k = null;
        0 < arguments.length && (k = K(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, k)
      }
      function c(b) {
        return ac.a ? ac.a(self__.Jc, b) : ac.call(null, self__.Jc, b)
      }
      b.p = 0;
      b.g = function(b) {
        b = F(b);
        return c(b)
      };
      b.d = c;
      return b
    }(), ka.prototype.Ee = !0, ka.prototype.G = f("df"), ka.prototype.H = function(b, c) {
      return new ka(this.j, this.Jc, this.jf, c)
    });
    return new ka(c, b, $b, null)
  }(), c) : bb(b, c)
};
function bc(a) {
  return(a ? a.h & 131072 || a.Je || (a.h ? 0 : v(Za, a)) : v(Za, a)) ? $a(a) : null
}
var cc = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), u(d)) {
          c = G(d), d = J(d)
        }else {
          return b
        }
      }
    }
    b.p = 2;
    b.g = function(a) {
      var b = G(a);
      a = J(a);
      var c = G(a);
      a = H(a);
      return d(b, c, a)
    };
    b.d = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Ta(a, d);
      default:
        return b.d(a, d, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.b = aa();
  a.a = function(a, b) {
    return Ta(a, b)
  };
  a.d = b.d;
  return a
}(), dc = {}, ec = 0;
function Gb(a) {
  if(a && (a.h & 4194304 || a.Nf)) {
    a = a.N(null)
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
            255 < ec && (dc = {}, ec = 0);
            var b = dc[a];
            "number" !== typeof b && (b = ea(a), dc[a] = b, ec += 1);
            a = b
          }else {
            a = w ? fb(a) : null
          }
        }
      }
    }
  }
  return a
}
function fc(a) {
  return null == a || sa(F(a))
}
function gc(a) {
  return null == a ? !1 : a ? a.h & 8 || a.Lf ? !0 : a.h ? !1 : v(Ba, a) : v(Ba, a)
}
function hc(a) {
  return null == a ? !1 : a ? a.h & 4096 || a.Tf ? !0 : a.h ? !1 : v(Sa, a) : v(Sa, a)
}
function ic(a) {
  return a ? a.h & 16777216 || a.Sf ? !0 : a.h ? !1 : v(ib, a) : v(ib, a)
}
function jc(a) {
  return null == a ? !1 : a ? a.h & 1024 || a.Of ? !0 : a.h ? !1 : v(Na, a) : v(Na, a)
}
function kc(a) {
  return a ? a.h & 16384 || a.Uf ? !0 : a.h ? !1 : v(Wa, a) : v(Wa, a)
}
function lc(a) {
  return a ? a.u & 512 || a.Kf ? !0 : !1 : !1
}
function mc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var nc = {};
function oc(a) {
  return null == a ? !1 : a ? a.h & 64 || a.Dc ? !0 : a.h ? !1 : v(Da, a) : v(Da, a)
}
function pc(a) {
  return u(a) ? !0 : !1
}
function qc(a) {
  return"number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10)
}
function rc(a, b) {
  return Wb.c(a, b, nc) === nc ? !1 : !0
}
function sc(a, b) {
  return null != a && (a ? a.h & 512 || a.Jf || (a.h ? 0 : v(Ka, a)) : v(Ka, a)) && rc(a, b) ? p(new P(null, 2, 5, Q, [b, Wb.a(a, b)], null), new q(null, 2, [s, 1252, t, 21], null)) : null
}
function Cb(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(ta(a) === ta(b)) {
    return a && (a.u & 2048 || a.Nc) ? a.Oc(null, b) : ha(a, b)
  }
  if(w) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var tc = function() {
  function a(a, b, c, k) {
    for(;;) {
      var l = Cb(N.a(a, k), N.a(b, k));
      if(0 === l && k + 1 < c) {
        k += 1
      }else {
        return l
      }
    }
  }
  function b(a, b) {
    var h = M(a), k = M(b);
    return h < k ? -1 : h > k ? 1 : w ? c.o(a, b, h, 0) : null
  }
  var c = null, c = function(c, e, h, k) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.o = a;
  return c
}();
function uc(a) {
  return E.a(a, Cb) ? Cb : function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return"number" === typeof d ? d : u(d) ? -1 : u(a.a ? a.a(c, b) : a.call(null, c, b)) ? 1 : 0
  }
}
var wc = function() {
  function a(a, b) {
    if(F(b)) {
      var c = vc.b ? vc.b(b) : vc.call(null, b);
      ia(c, uc(a));
      return F(c)
    }
    return I
  }
  function b(a) {
    return c.a(Cb, a)
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
}(), Tb = function() {
  function a(a, b, c) {
    for(c = F(c);;) {
      if(c) {
        b = a.a ? a.a(b, G(c)) : a.call(null, b, G(c)), c = J(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = F(b);
    return c ? xc.c ? xc.c(a, G(c), J(c)) : xc.call(null, a, G(c), J(c)) : a.A ? a.A() : a.call(null)
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), xc = function() {
  function a(a, b, c) {
    return c && (c.h & 524288 || c.Ke) ? c.da(null, a, b) : c instanceof Array ? Mb.c(c, a, b) : "string" === typeof c ? Mb.c(c, a, b) : v(cb, c) ? db.c(c, a, b) : w ? Tb.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.h & 524288 || b.Ke) ? b.ca(null, a) : b instanceof Array ? Mb.a(b, a) : "string" === typeof b ? Mb.a(b, a) : v(cb, b) ? db.a(b, a) : w ? Tb.a(a, b) : null
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), yc = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      return xc.c(a, b + c, d)
    }
    b.p = 2;
    b.g = function(a) {
      var b = G(a);
      a = J(a);
      var c = G(a);
      a = H(a);
      return d(b, c, a)
    };
    b.d = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.d(a, d, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.A = ba(0);
  a.b = aa();
  a.a = function(a, b) {
    return a + b
  };
  a.d = b.d;
  return a
}(), zc = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      return xc.c(a, b - c, d)
    }
    b.p = 2;
    b.g = function(a) {
      var b = G(a);
      a = J(a);
      var c = G(a);
      a = H(a);
      return d(b, c, a)
    };
    b.d = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return-a;
      case 2:
        return a - d;
      default:
        return b.d(a, d, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.b = function(a) {
    return-a
  };
  a.a = function(a, b) {
    return a - b
  };
  a.d = b.d;
  return a
}(), Ac = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      return xc.c(a, b * c, d)
    }
    b.p = 2;
    b.g = function(a) {
      var b = G(a);
      a = J(a);
      var c = G(a);
      a = H(a);
      return d(b, c, a)
    };
    b.d = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 1;
      case 1:
        return a;
      case 2:
        return a * d;
      default:
        return b.d(a, d, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.A = ba(1);
  a.b = aa();
  a.a = function(a, b) {
    return a * b
  };
  a.d = b.d;
  return a
}(), Bc = function() {
  var a = null, b = function() {
    function a(c, h, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, h, l)
    }
    function b(a, c, d) {
      for(;;) {
        if(a < c) {
          if(J(d)) {
            a = c, c = G(d), d = J(d)
          }else {
            return c < G(d)
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var k = G(a);
      a = H(a);
      return b(c, k, a)
    };
    a.d = b;
    return a
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a < d;
      default:
        return b.d(a, d, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.b = ba(!0);
  a.a = function(a, b) {
    return a < b
  };
  a.d = b.d;
  return a
}(), Cc = function() {
  var a = null, b = function() {
    function a(c, h, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, h, l)
    }
    function b(a, c, d) {
      for(;;) {
        if(a <= c) {
          if(J(d)) {
            a = c, c = G(d), d = J(d)
          }else {
            return c <= G(d)
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var k = G(a);
      a = H(a);
      return b(c, k, a)
    };
    a.d = b;
    return a
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a <= d;
      default:
        return b.d(a, d, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.b = ba(!0);
  a.a = function(a, b) {
    return a <= b
  };
  a.d = b.d;
  return a
}(), Dc = function() {
  var a = null, b = function() {
    function a(c, h, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, h, l)
    }
    function b(a, c, d) {
      for(;;) {
        if(a > c) {
          if(J(d)) {
            a = c, c = G(d), d = J(d)
          }else {
            return c > G(d)
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var k = G(a);
      a = H(a);
      return b(c, k, a)
    };
    a.d = b;
    return a
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > d;
      default:
        return b.d(a, d, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.b = ba(!0);
  a.a = function(a, b) {
    return a > b
  };
  a.d = b.d;
  return a
}(), Ec = function() {
  var a = null, b = function() {
    function a(c, h, k) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, h, l)
    }
    function b(a, c, d) {
      for(;;) {
        if(a >= c) {
          if(J(d)) {
            a = c, c = G(d), d = J(d)
          }else {
            return c >= G(d)
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var k = G(a);
      a = H(a);
      return b(c, k, a)
    };
    a.d = b;
    return a
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a >= d;
      default:
        return b.d(a, d, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.b = ba(!0);
  a.a = function(a, b) {
    return a >= b
  };
  a.d = b.d;
  return a
}(), Fc = function() {
  function a(a, b) {
    return a > b ? a : b
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      return xc.c(b, a > d ? a : d, e)
    }
    a.p = 2;
    a.g = function(a) {
      var b = G(a);
      a = J(a);
      var d = G(a);
      a = H(a);
      return c(b, d, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.b = aa();
  b.a = a;
  b.d = c.d;
  return b
}(), Gc = function() {
  function a(a, b) {
    return a < b ? a : b
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      return xc.c(b, a < d ? a : d, e)
    }
    a.p = 2;
    a.g = function(a) {
      var b = G(a);
      a = J(a);
      var d = G(a);
      a = H(a);
      return c(b, d, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.b = aa();
  b.a = a;
  b.d = c.d;
  return b
}();
function Hc(a, b) {
  return 0 <= (a - a % b) / b ? Math.floor.b ? Math.floor.b((a - a % b) / b) : Math.floor.call(null, (a - a % b) / b) : Math.ceil.b ? Math.ceil.b((a - a % b) / b) : Math.ceil.call(null, (a - a % b) / b)
}
function Ic(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function Jc(a) {
  var b = 1;
  for(a = F(a);;) {
    if(a && 0 < b) {
      b -= 1, a = J(a)
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
      var l = null;
      1 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, l)
    }
    function c(a, d) {
      for(var e = new ja(b.b(a)), m = d;;) {
        if(u(m)) {
          e = e.append(b.b(G(m))), m = J(m)
        }else {
          return e.toString()
        }
      }
    }
    a.p = 1;
    a.g = function(a) {
      var b = G(a);
      a = H(a);
      return c(b, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.d(b, K(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.g = c.g;
  b.A = ba("");
  b.b = a;
  b.d = c.d;
  return b
}(), Kc = function() {
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
function Rb(a, b) {
  return pc(ic(b) ? function() {
    for(var c = F(a), d = F(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(E.a(G(c), G(d))) {
        c = J(c), d = J(d)
      }else {
        return w ? !1 : null
      }
    }
  }() : null)
}
function Fb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Pb(a) {
  if(F(a)) {
    var b = Gb(G(a));
    for(a = J(a);;) {
      if(null == a) {
        return b
      }
      b = Fb(b, Gb(G(a)));
      a = J(a)
    }
  }else {
    return 0
  }
}
function Lc(a) {
  var b = 0;
  for(a = F(a);;) {
    if(a) {
      var c = G(a), b = (b + (Gb(Mc.b ? Mc.b(c) : Mc.call(null, c)) ^ Gb(Nc.b ? Nc.b(c) : Nc.call(null, c)))) % 4503599627370496;
      a = J(a)
    }else {
      return b
    }
  }
}
function Oc(a) {
  var b = 0;
  for(a = F(a);;) {
    if(a) {
      var c = G(a), b = (b + Gb(c)) % 4503599627370496;
      a = J(a)
    }else {
      return b
    }
  }
}
function Pc(a, b, c, d, e) {
  this.j = a;
  this.rc = b;
  this.Ab = c;
  this.count = d;
  this.n = e;
  this.u = 0;
  this.h = 65937646
}
g = Pc.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.Da = function() {
  return 1 === this.count ? null : this.Ab
};
g.R = function(a, b) {
  return new Pc(this.j, b, this, this.count + 1, null)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Tb.a(b, this)
};
g.da = function(a, b, c) {
  return Tb.c(b, c, this)
};
g.Q = function() {
  return this
};
g.S = f("count");
g.Gb = f("rc");
g.Hb = function() {
  return Ga(this)
};
g.aa = f("rc");
g.ma = function() {
  return 1 === this.count ? I : this.Ab
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new Pc(b, this.rc, this.Ab, this.count, this.n)
};
g.G = f("j");
g.T = function() {
  return I
};
function Qc(a) {
  this.j = a;
  this.u = 0;
  this.h = 65937614
}
g = Qc.prototype;
g.N = ba(0);
g.Da = ba(null);
g.R = function(a, b) {
  return new Pc(this.j, b, null, 1, null)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Tb.a(b, this)
};
g.da = function(a, b, c) {
  return Tb.c(b, c, this)
};
g.Q = ba(null);
g.S = ba(0);
g.Gb = ba(null);
g.Hb = function() {
  throw Error("Can't pop empty list");
};
g.aa = ba(null);
g.ma = function() {
  return I
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new Qc(b)
};
g.G = f("j");
g.T = function() {
  return this
};
var I = new Qc(null);
function Rc(a) {
  return(a ? a.h & 134217728 || a.Qf || (a.h ? 0 : v(kb, a)) : v(kb, a)) ? lb(a) : xc.c(Ub, I, a)
}
var Sc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof Jb) {
      b = a.e
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.aa(null)), a = a.Da(null)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var e = I;;) {
      if(0 < a) {
        var h = a - 1, e = e.R(null, b[a - 1]);
        a = h
      }else {
        return e
      }
    }
  }
  a.p = 0;
  a.g = function(a) {
    a = F(a);
    return b(a)
  };
  a.d = b;
  return a
}();
function Tc(a, b, c, d) {
  this.j = a;
  this.rc = b;
  this.Ab = c;
  this.n = d;
  this.u = 0;
  this.h = 65929452
}
g = Tc.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.Da = function() {
  return null == this.Ab ? null : F(this.Ab)
};
g.R = function(a, b) {
  return new Tc(null, b, this, this.n)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Tb.a(b, this)
};
g.da = function(a, b, c) {
  return Tb.c(b, c, this)
};
g.Q = function() {
  return this
};
g.aa = f("rc");
g.ma = function() {
  return null == this.Ab ? I : this.Ab
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new Tc(b, this.rc, this.Ab, this.n)
};
g.G = f("j");
g.T = function() {
  return p(I, this.j)
};
function L(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.Dc)) ? new Tc(null, a, b, null) : new Tc(null, a, F(b), null)
}
function S(a, b, c, d) {
  this.va = a;
  this.name = b;
  this.Kb = c;
  this.Sb = d;
  this.h = 2153775105;
  this.u = 4096
}
g = S.prototype;
g.M = function(a, b) {
  return D(b, [A(":"), A(this.Kb)].join(""))
};
g.N = function() {
  null == this.Sb && (this.Sb = Fb(Gb(this.va), Gb(this.name)) + 2654435769);
  return this.Sb
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Wb.a(c, this);
      case 3:
        return Wb.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return Wb.a(a, this)
};
g.a = function(a, b) {
  return Wb.c(a, this, b)
};
g.J = function(a, b) {
  return b instanceof S ? this.Kb === b.Kb : !1
};
g.toString = function() {
  return[A(":"), A(this.Kb)].join("")
};
function Uc(a, b) {
  return a === b ? !0 : a instanceof S && b instanceof S ? a.Kb === b.Kb : !1
}
function Vc(a, b, c, d) {
  this.j = a;
  this.sc = b;
  this.q = c;
  this.n = d;
  this.u = 0;
  this.h = 32374988
}
g = Vc.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.Da = function() {
  hb(this);
  return null == this.q ? null : J(this.q)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
function Wc(a) {
  null != a.sc && (a.q = a.sc.A ? a.sc.A() : a.sc.call(null), a.sc = null);
  return a.q
}
g.ca = function(a, b) {
  return Tb.a(b, this)
};
g.da = function(a, b, c) {
  return Tb.c(b, c, this)
};
g.Q = function() {
  Wc(this);
  if(null == this.q) {
    return null
  }
  for(var a = this.q;;) {
    if(a instanceof Vc) {
      a = Wc(a)
    }else {
      return this.q = a, F(this.q)
    }
  }
};
g.aa = function() {
  hb(this);
  return null == this.q ? null : G(this.q)
};
g.ma = function() {
  hb(this);
  return null != this.q ? H(this.q) : I
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new Vc(b, this.sc, this.q, this.n)
};
g.G = f("j");
g.T = function() {
  return p(I, this.j)
};
function Xc(a, b) {
  this.pd = a;
  this.end = b;
  this.u = 0;
  this.h = 2
}
Xc.prototype.S = f("end");
Xc.prototype.add = function(a) {
  this.pd[this.end] = a;
  return this.end += 1
};
Xc.prototype.ib = function() {
  var a = new Yc(this.pd, 0, this.end);
  this.pd = null;
  return a
};
function Yc(a, b, c) {
  this.e = a;
  this.X = b;
  this.end = c;
  this.u = 0;
  this.h = 524306
}
g = Yc.prototype;
g.ca = function(a, b) {
  return Mb.o(this.e, b, this.e[this.X], this.X + 1)
};
g.da = function(a, b, c) {
  return Mb.o(this.e, b, c, this.X)
};
g.Zd = function() {
  if(this.X === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Yc(this.e, this.X + 1, this.end)
};
g.la = function(a, b) {
  return this.e[this.X + b]
};
g.ta = function(a, b, c) {
  return 0 <= b && b < this.end - this.X ? this.e[this.X + b] : c
};
g.S = function() {
  return this.end - this.X
};
var Zc = function() {
  function a(a, b, c) {
    return new Yc(a, b, c)
  }
  function b(a, b) {
    return new Yc(a, b, a.length)
  }
  function c(a) {
    return new Yc(a, 0, a.length)
  }
  var d = null, d = function(d, h, k) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}();
function $c(a, b, c, d) {
  this.ib = a;
  this.nb = b;
  this.j = c;
  this.n = d;
  this.h = 31850732;
  this.u = 1536
}
g = $c.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.Da = function() {
  if(1 < ya(this.ib)) {
    return new $c(vb(this.ib), this.nb, this.j, null)
  }
  var a = hb(this.nb);
  return null == a ? null : a
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return C.a(this.ib, 0)
};
g.ma = function() {
  return 1 < ya(this.ib) ? new $c(vb(this.ib), this.nb, this.j, null) : null == this.nb ? I : this.nb
};
g.rd = function() {
  return null == this.nb ? null : this.nb
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new $c(this.ib, this.nb, b, this.n)
};
g.G = f("j");
g.T = function() {
  return p(I, this.j)
};
g.sd = f("ib");
g.td = function() {
  return null == this.nb ? I : this.nb
};
function ad(a, b) {
  return 0 === ya(a) ? b : new $c(a, b, null, null)
}
function vc(a) {
  for(var b = [];;) {
    if(F(a)) {
      b.push(G(a)), a = J(a)
    }else {
      return b
    }
  }
}
function bd(a, b) {
  if(Nb(a)) {
    return M(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && F(c)) {
      c = J(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var dd = function cd(b) {
  return null == b ? null : null == J(b) ? F(G(b)) : w ? L(G(b), cd(J(b))) : null
}, ed = function() {
  function a(a, b) {
    return new Vc(null, function() {
      var c = F(a);
      return c ? lc(c) ? ad(wb(c), d.a(xb(c), b)) : L(G(c), d.a(H(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new Vc(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new Vc(null, ba(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var h = null;
      2 < arguments.length && (h = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, h)
    }
    function b(a, c, e) {
      return function z(a, b) {
        return new Vc(null, function() {
          var c = F(a);
          return c ? lc(c) ? ad(wb(c), z(xb(c), b)) : L(G(c), z(H(c), b)) : u(b) ? z(G(b), J(b)) : null
        }, null, null)
      }(d.a(a, c), e)
    }
    a.p = 2;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var d = G(a);
      a = H(a);
      return b(c, d, a)
    };
    a.d = b;
    return a
  }(), d = function(d, k, l) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, k);
      default:
        return e.d(d, k, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 2;
  d.g = e.g;
  d.A = c;
  d.b = b;
  d.a = a;
  d.d = e.d;
  return d
}(), fd = function() {
  function a(a, b, c, d) {
    return L(a, L(b, L(c, d)))
  }
  function b(a, b, c) {
    return L(a, L(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, r, x) {
      var z = null;
      4 < arguments.length && (z = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, r, z)
    }
    function b(a, c, d, e, h) {
      return L(a, L(c, L(d, L(e, dd(h)))))
    }
    a.p = 4;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var d = G(a);
      a = J(a);
      var e = G(a);
      a = J(a);
      var x = G(a);
      a = H(a);
      return b(c, d, e, x, a)
    };
    a.d = b;
    return a
  }(), c = function(c, h, k, l, m) {
    switch(arguments.length) {
      case 1:
        return F(c);
      case 2:
        return L(c, h);
      case 3:
        return b.call(this, c, h, k);
      case 4:
        return a.call(this, c, h, k, l);
      default:
        return d.d(c, h, k, l, K(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 4;
  c.g = d.g;
  c.b = function(a) {
    return F(a)
  };
  c.a = function(a, b) {
    return L(a, b)
  };
  c.c = b;
  c.o = a;
  c.d = d.d;
  return c
}();
function gd(a) {
  return qb(a)
}
function hd(a, b, c) {
  return tb(a, b, c)
}
function id(a, b, c) {
  var d = F(c);
  if(0 === b) {
    return a.A ? a.A() : a.call(null)
  }
  c = Fa(d);
  var e = Ga(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c)
  }
  var d = Fa(e), h = Ga(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = Fa(h), k = Ga(h);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var h = Fa(k), l = Ga(k);
  if(4 === b) {
    return a.o ? a.o(c, d, e, h) : a.o ? a.o(c, d, e, h) : a.call(null, c, d, e, h)
  }
  k = Fa(l);
  l = Ga(l);
  if(5 === b) {
    return a.O ? a.O(c, d, e, h, k) : a.O ? a.O(c, d, e, h, k) : a.call(null, c, d, e, h, k)
  }
  a = Fa(l);
  var m = Ga(l);
  if(6 === b) {
    return a.Za ? a.Za(c, d, e, h, k, a) : a.Za ? a.Za(c, d, e, h, k, a) : a.call(null, c, d, e, h, k, a)
  }
  var l = Fa(m), r = Ga(m);
  if(7 === b) {
    return a.ic ? a.ic(c, d, e, h, k, a, l) : a.ic ? a.ic(c, d, e, h, k, a, l) : a.call(null, c, d, e, h, k, a, l)
  }
  var m = Fa(r), x = Ga(r);
  if(8 === b) {
    return a.Fd ? a.Fd(c, d, e, h, k, a, l, m) : a.Fd ? a.Fd(c, d, e, h, k, a, l, m) : a.call(null, c, d, e, h, k, a, l, m)
  }
  var r = Fa(x), z = Ga(x);
  if(9 === b) {
    return a.Gd ? a.Gd(c, d, e, h, k, a, l, m, r) : a.Gd ? a.Gd(c, d, e, h, k, a, l, m, r) : a.call(null, c, d, e, h, k, a, l, m, r)
  }
  var x = Fa(z), R = Ga(z);
  if(10 === b) {
    return a.ud ? a.ud(c, d, e, h, k, a, l, m, r, x) : a.ud ? a.ud(c, d, e, h, k, a, l, m, r, x) : a.call(null, c, d, e, h, k, a, l, m, r, x)
  }
  var z = Fa(R), T = Ga(R);
  if(11 === b) {
    return a.vd ? a.vd(c, d, e, h, k, a, l, m, r, x, z) : a.vd ? a.vd(c, d, e, h, k, a, l, m, r, x, z) : a.call(null, c, d, e, h, k, a, l, m, r, x, z)
  }
  var R = Fa(T), V = Ga(T);
  if(12 === b) {
    return a.wd ? a.wd(c, d, e, h, k, a, l, m, r, x, z, R) : a.wd ? a.wd(c, d, e, h, k, a, l, m, r, x, z, R) : a.call(null, c, d, e, h, k, a, l, m, r, x, z, R)
  }
  var T = Fa(V), Z = Ga(V);
  if(13 === b) {
    return a.xd ? a.xd(c, d, e, h, k, a, l, m, r, x, z, R, T) : a.xd ? a.xd(c, d, e, h, k, a, l, m, r, x, z, R, T) : a.call(null, c, d, e, h, k, a, l, m, r, x, z, R, T)
  }
  var V = Fa(Z), Ea = Ga(Z);
  if(14 === b) {
    return a.yd ? a.yd(c, d, e, h, k, a, l, m, r, x, z, R, T, V) : a.yd ? a.yd(c, d, e, h, k, a, l, m, r, x, z, R, T, V) : a.call(null, c, d, e, h, k, a, l, m, r, x, z, R, T, V)
  }
  var Z = Fa(Ea), $ = Ga(Ea);
  if(15 === b) {
    return a.zd ? a.zd(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z) : a.zd ? a.zd(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z) : a.call(null, c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z)
  }
  var Ea = Fa($), la = Ga($);
  if(16 === b) {
    return a.Ad ? a.Ad(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea) : a.Ad ? a.Ad(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea) : a.call(null, c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea)
  }
  var $ = Fa(la), za = Ga(la);
  if(17 === b) {
    return a.Bd ? a.Bd(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $) : a.Bd ? a.Bd(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $) : a.call(null, c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $)
  }
  var la = Fa(za), Hb = Ga(za);
  if(18 === b) {
    return a.Cd ? a.Cd(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $, la) : a.Cd ? a.Cd(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $, la) : a.call(null, c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $, la)
  }
  za = Fa(Hb);
  Hb = Ga(Hb);
  if(19 === b) {
    return a.Dd ? a.Dd(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $, la, za) : a.Dd ? a.Dd(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $, la, za) : a.call(null, c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $, la, za)
  }
  var Se = Fa(Hb);
  Ga(Hb);
  if(20 === b) {
    return a.Ed ? a.Ed(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $, la, za, Se) : a.Ed ? a.Ed(c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $, la, za, Se) : a.call(null, c, d, e, h, k, a, l, m, r, x, z, R, T, V, Z, Ea, $, la, za, Se)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var ac = function() {
  function a(a, b, c, d, e) {
    b = fd.o(b, c, d, e);
    c = a.p;
    return a.g ? (d = bd(b, c + 1), d <= c ? id(a, d, b) : a.g(b)) : a.apply(a, vc(b))
  }
  function b(a, b, c, d) {
    b = fd.c(b, c, d);
    c = a.p;
    return a.g ? (d = bd(b, c + 1), d <= c ? id(a, d, b) : a.g(b)) : a.apply(a, vc(b))
  }
  function c(a, b, c) {
    b = fd.a(b, c);
    c = a.p;
    if(a.g) {
      var d = bd(b, c + 1);
      return d <= c ? id(a, d, b) : a.g(b)
    }
    return a.apply(a, vc(b))
  }
  function d(a, b) {
    var c = a.p;
    if(a.g) {
      var d = bd(b, c + 1);
      return d <= c ? id(a, d, b) : a.g(b)
    }
    return a.apply(a, vc(b))
  }
  var e = null, h = function() {
    function a(c, d, e, h, k, T) {
      var V = null;
      5 < arguments.length && (V = K(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, h, k, V)
    }
    function b(a, c, d, e, h, k) {
      c = L(c, L(d, L(e, L(h, dd(k)))));
      d = a.p;
      return a.g ? (e = bd(c, d + 1), e <= d ? id(a, e, c) : a.g(c)) : a.apply(a, vc(c))
    }
    a.p = 5;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var d = G(a);
      a = J(a);
      var e = G(a);
      a = J(a);
      var h = G(a);
      a = J(a);
      var k = G(a);
      a = H(a);
      return b(c, d, e, h, k, a)
    };
    a.d = b;
    return a
  }(), e = function(e, l, m, r, x, z) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, l);
      case 3:
        return c.call(this, e, l, m);
      case 4:
        return b.call(this, e, l, m, r);
      case 5:
        return a.call(this, e, l, m, r, x);
      default:
        return h.d(e, l, m, r, x, K(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 5;
  e.g = h.g;
  e.a = d;
  e.c = c;
  e.o = b;
  e.O = a;
  e.d = h.d;
  return e
}(), jd = function() {
  function a(a, d, e) {
    var h = null;
    2 < arguments.length && (h = K(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, h)
  }
  function b(a, b, e) {
    return p(a, ac.c(b, bc(a), e))
  }
  a.p = 2;
  a.g = function(a) {
    var d = G(a);
    a = J(a);
    var e = G(a);
    a = H(a);
    return b(d, e, a)
  };
  a.d = b;
  return a
}(), kd = function() {
  function a(a, b) {
    return!E.a(a, b)
  }
  var b = null, c = function() {
    function a(c, d, l) {
      var m = null;
      2 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, m)
    }
    function b(a, c, d) {
      return sa(ac.o(E, a, c, d))
    }
    a.p = 2;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var d = G(a);
      a = H(a);
      return b(c, d, a)
    };
    a.d = b;
    return a
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.b = ba(!1);
  b.a = a;
  b.d = c.d;
  return b
}();
function ld(a) {
  return F(a) ? a : null
}
function md(a, b) {
  for(;;) {
    if(null == F(b)) {
      return!0
    }
    if(u(a.b ? a.b(G(b)) : a.call(null, G(b)))) {
      var c = a, d = J(b);
      a = c;
      b = d
    }else {
      return w ? !1 : null
    }
  }
}
function nd(a, b) {
  for(;;) {
    if(F(b)) {
      var c = a.b ? a.b(G(b)) : a.call(null, G(b));
      if(u(c)) {
        return c
      }
      var c = a, d = J(b);
      a = c;
      b = d
    }else {
      return null
    }
  }
}
function od(a) {
  return a
}
function pd(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, l) {
        var m = null;
        2 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, m)
      }
      function c(b, d, e) {
        return sa(ac.o(a, b, d, e))
      }
      b.p = 2;
      b.g = function(a) {
        var b = G(a);
        a = J(a);
        var d = G(a);
        a = H(a);
        return c(b, d, a)
      };
      b.d = c;
      return b
    }(), b = function(b, e, h) {
      switch(arguments.length) {
        case 0:
          return sa(a.A ? a.A() : a.call(null));
        case 1:
          return sa(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return sa(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.d(b, e, K(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.p = 2;
    b.g = c.g;
    return b
  }()
}
var qd = function() {
  function a(a, b, c) {
    return function() {
      var d = null, m = function() {
        function d(a, b, c, e) {
          var h = null;
          3 < arguments.length && (h = K(Array.prototype.slice.call(arguments, 3), 0));
          return l.call(this, a, b, c, h)
        }
        function l(d, r, m, x) {
          return a.b ? a.b(b.b ? b.b(ac.O(c, d, r, m, x)) : b.call(null, ac.O(c, d, r, m, x))) : a.call(null, b.b ? b.b(ac.O(c, d, r, m, x)) : b.call(null, ac.O(c, d, r, m, x)))
        }
        d.p = 3;
        d.g = function(a) {
          var b = G(a);
          a = J(a);
          var c = G(a);
          a = J(a);
          var d = G(a);
          a = H(a);
          return l(b, c, d, a)
        };
        d.d = l;
        return d
      }(), d = function(d, l, z, R) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.b ? b.b(c.A ? c.A() : c.call(null)) : b.call(null, c.A ? c.A() : c.call(null))) : a.call(null, b.b ? b.b(c.A ? c.A() : c.call(null)) : b.call(null, c.A ? c.A() : c.call(null)));
          case 1:
            return a.b ? a.b(b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d))) : a.call(null, b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d)));
          case 2:
            return a.b ? a.b(b.b ? b.b(c.a ? c.a(d, l) : c.call(null, d, l)) : b.call(null, c.a ? c.a(d, l) : c.call(null, d, l))) : a.call(null, b.b ? b.b(c.a ? c.a(d, l) : c.call(null, d, l)) : b.call(null, c.a ? c.a(d, l) : c.call(null, d, l)));
          case 3:
            return a.b ? a.b(b.b ? b.b(c.c ? c.c(d, l, z) : c.call(null, d, l, z)) : b.call(null, c.c ? c.c(d, l, z) : c.call(null, d, l, z))) : a.call(null, b.b ? b.b(c.c ? c.c(d, l, z) : c.call(null, d, l, z)) : b.call(null, c.c ? c.c(d, l, z) : c.call(null, d, l, z)));
          default:
            return m.d(d, l, z, K(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.p = 3;
      d.g = m.g;
      return d
    }()
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, h) {
          var l = null;
          3 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, l)
        }
        function d(c, l, k, r) {
          return a.b ? a.b(ac.O(b, c, l, k, r)) : a.call(null, ac.O(b, c, l, k, r))
        }
        c.p = 3;
        c.g = function(a) {
          var b = G(a);
          a = J(a);
          var c = G(a);
          a = J(a);
          var e = G(a);
          a = H(a);
          return d(b, c, e, a)
        };
        c.d = d;
        return c
      }(), c = function(c, k, x, z) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.A ? b.A() : b.call(null)) : a.call(null, b.A ? b.A() : b.call(null));
          case 1:
            return a.b ? a.b(b.b ? b.b(c) : b.call(null, c)) : a.call(null, b.b ? b.b(c) : b.call(null, c));
          case 2:
            return a.b ? a.b(b.a ? b.a(c, k) : b.call(null, c, k)) : a.call(null, b.a ? b.a(c, k) : b.call(null, c, k));
          case 3:
            return a.b ? a.b(b.c ? b.c(c, k, x) : b.call(null, c, k, x)) : a.call(null, b.c ? b.c(c, k, x) : b.call(null, c, k, x));
          default:
            return d.d(c, k, x, K(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.p = 3;
      c.g = d.g;
      return c
    }()
  }
  var c = null, d = function() {
    function a(c, d, e, r) {
      var x = null;
      3 < arguments.length && (x = K(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, x)
    }
    function b(a, c, d, e) {
      var h = Rc(fd.o(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d)
        }
        function b(a) {
          a = ac.a(G(h), a);
          for(var c = J(h);;) {
            if(c) {
              a = G(c).call(null, a), c = J(c)
            }else {
              return a
            }
          }
        }
        a.p = 0;
        a.g = function(a) {
          a = F(a);
          return b(a)
        };
        a.d = b;
        return a
      }()
    }
    a.p = 3;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var d = G(a);
      a = J(a);
      var e = G(a);
      a = H(a);
      return b(c, d, e, a)
    };
    a.d = b;
    return a
  }(), c = function(c, h, k, l) {
    switch(arguments.length) {
      case 0:
        return od;
      case 1:
        return c;
      case 2:
        return b.call(this, c, h);
      case 3:
        return a.call(this, c, h, k);
      default:
        return d.d(c, h, k, K(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 3;
  c.g = d.g;
  c.A = function() {
    return od
  };
  c.b = aa();
  c.a = b;
  c.c = a;
  c.d = d.d;
  return c
}(), rd = function() {
  function a(a, b, c, d) {
    return function() {
      var m = null, r = function() {
        function r(a, b, c, d) {
          var e = null;
          3 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 3), 0));
          return m.call(this, a, b, c, e)
        }
        function m(r, x, z, Z) {
          return ac.O(a, null == r ? b : r, null == x ? c : x, null == z ? d : z, Z)
        }
        r.p = 3;
        r.g = function(a) {
          var b = G(a);
          a = J(a);
          var c = G(a);
          a = J(a);
          var d = G(a);
          a = H(a);
          return m(b, c, d, a)
        };
        r.d = m;
        return r
      }(), m = function(m, z, R, T) {
        switch(arguments.length) {
          case 2:
            return a.a ? a.a(null == m ? b : m, null == z ? c : z) : a.call(null, null == m ? b : m, null == z ? c : z);
          case 3:
            return a.c ? a.c(null == m ? b : m, null == z ? c : z, null == R ? d : R) : a.call(null, null == m ? b : m, null == z ? c : z, null == R ? d : R);
          default:
            return r.d(m, z, R, K(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      m.p = 3;
      m.g = r.g;
      return m
    }()
  }
  function b(a, b, c) {
    return function() {
      var d = null, m = function() {
        function d(a, b, c, e) {
          var h = null;
          3 < arguments.length && (h = K(Array.prototype.slice.call(arguments, 3), 0));
          return l.call(this, a, b, c, h)
        }
        function l(d, r, m, x) {
          return ac.O(a, null == d ? b : d, null == r ? c : r, m, x)
        }
        d.p = 3;
        d.g = function(a) {
          var b = G(a);
          a = J(a);
          var c = G(a);
          a = J(a);
          var d = G(a);
          a = H(a);
          return l(b, c, d, a)
        };
        d.d = l;
        return d
      }(), d = function(d, l, z, R) {
        switch(arguments.length) {
          case 2:
            return a.a ? a.a(null == d ? b : d, null == l ? c : l) : a.call(null, null == d ? b : d, null == l ? c : l);
          case 3:
            return a.c ? a.c(null == d ? b : d, null == l ? c : l, z) : a.call(null, null == d ? b : d, null == l ? c : l, z);
          default:
            return m.d(d, l, z, K(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.p = 3;
      d.g = m.g;
      return d
    }()
  }
  function c(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, h) {
          var l = null;
          3 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, l)
        }
        function d(c, l, k, m) {
          return ac.O(a, null == c ? b : c, l, k, m)
        }
        c.p = 3;
        c.g = function(a) {
          var b = G(a);
          a = J(a);
          var c = G(a);
          a = J(a);
          var e = G(a);
          a = H(a);
          return d(b, c, e, a)
        };
        c.d = d;
        return c
      }(), c = function(c, k, x, z) {
        switch(arguments.length) {
          case 1:
            return a.b ? a.b(null == c ? b : c) : a.call(null, null == c ? b : c);
          case 2:
            return a.a ? a.a(null == c ? b : c, k) : a.call(null, null == c ? b : c, k);
          case 3:
            return a.c ? a.c(null == c ? b : c, k, x) : a.call(null, null == c ? b : c, k, x);
          default:
            return d.d(c, k, x, K(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.p = 3;
      c.g = d.g;
      return c
    }()
  }
  var d = null, d = function(d, h, k, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.o = a;
  return d
}(), sd = function() {
  function a(a, b, c, e) {
    return new Vc(null, function() {
      var r = F(b), x = F(c), z = F(e);
      return r && x && z ? L(a.c ? a.c(G(r), G(x), G(z)) : a.call(null, G(r), G(x), G(z)), d.o(a, H(r), H(x), H(z))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new Vc(null, function() {
      var e = F(b), r = F(c);
      return e && r ? L(a.a ? a.a(G(e), G(r)) : a.call(null, G(e), G(r)), d.c(a, H(e), H(r))) : null
    }, null, null)
  }
  function c(a, b) {
    return new Vc(null, function() {
      var c = F(b);
      if(c) {
        if(lc(c)) {
          for(var e = wb(c), r = M(e), x = new Xc(Array(r), 0), z = 0;;) {
            if(z < r) {
              var R = a.b ? a.b(C.a(e, z)) : a.call(null, C.a(e, z));
              x.add(R);
              z += 1
            }else {
              break
            }
          }
          return ad(x.ib(), d.a(a, xb(c)))
        }
        return L(a.b ? a.b(G(c)) : a.call(null, G(c)), d.a(a, H(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, h, z) {
      var R = null;
      4 < arguments.length && (R = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, h, R)
    }
    function b(a, c, e, h, k) {
      return d.a(function(b) {
        return ac.a(a, b)
      }, function T(a) {
        return new Vc(null, function() {
          var b = d.a(F, a);
          return md(od, b) ? L(d.a(G, b), T(d.a(H, b))) : null
        }, null, null)
      }(Ub.d(k, h, K([e, c], 0))))
    }
    a.p = 4;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var d = G(a);
      a = J(a);
      var e = G(a);
      a = J(a);
      var h = G(a);
      a = H(a);
      return b(c, d, e, h, a)
    };
    a.d = b;
    return a
  }(), d = function(d, k, l, m, r) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, k);
      case 3:
        return b.call(this, d, k, l);
      case 4:
        return a.call(this, d, k, l, m);
      default:
        return e.d(d, k, l, m, K(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.o = a;
  d.d = e.d;
  return d
}(), ud = function td(b, c) {
  return new Vc(null, function() {
    if(0 < b) {
      var d = F(c);
      return d ? L(G(d), td(b - 1, H(d))) : null
    }
    return null
  }, null, null)
};
function vd(a, b) {
  return new Vc(null, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        var d = F(d), e;
        e = (e = d) ? c.b ? c.b(G(d)) : c.call(null, G(d)) : e;
        if(u(e)) {
          d = H(d)
        }else {
          c = d;
          break a
        }
      }
      c = void 0
    }
    return c
  }, null, null)
}
var wd = function() {
  function a(a, b) {
    return ud(a, c.b(b))
  }
  function b(a) {
    return new Vc(null, function() {
      return L(a, c.b(a))
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
  c.b = b;
  c.a = a;
  return c
}(), yd = function xd(b, c) {
  return new Vc(null, function() {
    var d = F(c);
    if(d) {
      if(lc(d)) {
        for(var e = wb(d), h = M(e), k = new Xc(Array(h), 0), l = 0;;) {
          if(l < h) {
            if(u(b.b ? b.b(C.a(e, l)) : b.call(null, C.a(e, l)))) {
              var m = C.a(e, l);
              k.add(m)
            }
            l += 1
          }else {
            break
          }
        }
        return ad(k.ib(), xd(b, xb(d)))
      }
      e = G(d);
      d = H(d);
      return u(b.b ? b.b(e) : b.call(null, e)) ? L(e, xd(b, d)) : xd(b, d)
    }
    return null
  }, null, null)
};
function zd(a, b) {
  var c;
  null != a ? a && (a.u & 4 || a.Mf) ? (c = xc.c(rb, qb(a), b), c = sb(c)) : c = xc.c(B, a, b) : c = xc.c(Ub, I, b);
  return c
}
var Ad = function() {
  function a(a, b, c, d, h, z) {
    var R = N.c(b, 0, null);
    b = Jc(b);
    return u(b) ? O.c(a, R, e.Za(Wb.a(a, R), b, c, d, h, z)) : O.c(a, R, c.o ? c.o(Wb.a(a, R), d, h, z) : c.call(null, Wb.a(a, R), d, h, z))
  }
  function b(a, b, c, d, h) {
    var z = N.c(b, 0, null);
    b = Jc(b);
    return u(b) ? O.c(a, z, e.O(Wb.a(a, z), b, c, d, h)) : O.c(a, z, c.c ? c.c(Wb.a(a, z), d, h) : c.call(null, Wb.a(a, z), d, h))
  }
  function c(a, b, c, d) {
    var h = N.c(b, 0, null);
    b = Jc(b);
    return u(b) ? O.c(a, h, e.o(Wb.a(a, h), b, c, d)) : O.c(a, h, c.a ? c.a(Wb.a(a, h), d) : c.call(null, Wb.a(a, h), d))
  }
  function d(a, b, c) {
    var d = N.c(b, 0, null);
    b = Jc(b);
    return u(b) ? O.c(a, d, e.c(Wb.a(a, d), b, c)) : O.c(a, d, c.b ? c.b(Wb.a(a, d)) : c.call(null, Wb.a(a, d)))
  }
  var e = null, h = function() {
    function a(c, d, e, h, k, T, V) {
      var Z = null;
      6 < arguments.length && (Z = K(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, h, k, T, Z)
    }
    function b(a, c, d, h, k, l, V) {
      var Z = N.c(c, 0, null);
      c = Jc(c);
      return u(c) ? O.c(a, Z, ac.d(e, Wb.a(a, Z), c, d, h, K([k, l, V], 0))) : O.c(a, Z, ac.d(d, Wb.a(a, Z), h, k, l, K([V], 0)))
    }
    a.p = 6;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var d = G(a);
      a = J(a);
      var e = G(a);
      a = J(a);
      var h = G(a);
      a = J(a);
      var k = G(a);
      a = J(a);
      var V = G(a);
      a = H(a);
      return b(c, d, e, h, k, V, a)
    };
    a.d = b;
    return a
  }(), e = function(e, l, m, r, x, z, R) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, l, m);
      case 4:
        return c.call(this, e, l, m, r);
      case 5:
        return b.call(this, e, l, m, r, x);
      case 6:
        return a.call(this, e, l, m, r, x, z);
      default:
        return h.d(e, l, m, r, x, z, K(arguments, 6))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 6;
  e.g = h.g;
  e.c = d;
  e.o = c;
  e.O = b;
  e.Za = a;
  e.d = h.d;
  return e
}();
function Bd(a, b) {
  this.P = a;
  this.e = b
}
function Cd(a) {
  return new Bd(a.P, va(a.e))
}
function Dd(a) {
  a = a.i;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Ed(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Bd(a, Array(32));
    d.e[0] = c;
    c = d;
    b -= 5
  }
}
var Gd = function Fd(b, c, d, e) {
  var h = Cd(d), k = b.i - 1 >>> c & 31;
  5 === c ? h.e[k] = e : (d = d.e[k], b = null != d ? Fd(b, c - 5, d, e) : Ed(null, c - 5, e), h.e[k] = b);
  return h
};
function Hd(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function Id(a, b) {
  if(0 <= b && b < a.i) {
    if(b >= Dd(a)) {
      return a.pa
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.e[b >>> d & 31], d = e
      }else {
        return c.e
      }
    }
  }else {
    return Hd(b, a.i)
  }
}
var Kd = function Jd(b, c, d, e, h) {
  var k = Cd(d);
  if(0 === c) {
    k.e[e & 31] = h
  }else {
    var l = e >>> c & 31;
    b = Jd(b, c - 5, d.e[l], e, h);
    k.e[l] = b
  }
  return k
}, Md = function Ld(b, c, d) {
  var e = b.i - 2 >>> c & 31;
  if(5 < c) {
    b = Ld(b, c - 5, d.e[e]);
    if(null == b && 0 === e) {
      return null
    }
    d = Cd(d);
    d.e[e] = b;
    return d
  }
  return 0 === e ? null : w ? (d = Cd(d), d.e[e] = null, d) : null
};
function P(a, b, c, d, e, h) {
  this.j = a;
  this.i = b;
  this.shift = c;
  this.root = d;
  this.pa = e;
  this.n = h;
  this.u = 4;
  this.h = 167668511
}
g = P.prototype;
g.Ac = function() {
  return new Nd(this.i, this.shift, Od.b ? Od.b(this.root) : Od.call(null, this.root), Pd.b ? Pd.b(this.pa) : Pd.call(null, this.pa))
};
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.K = function(a, b) {
  return C.c(this, b, null)
};
g.L = function(a, b, c) {
  return C.c(this, b, c)
};
g.Ya = function(a, b, c) {
  if(0 <= b && b < this.i) {
    return Dd(this) <= b ? (a = va(this.pa), a[b & 31] = c, new P(this.j, this.i, this.shift, this.root, a, null)) : new P(this.j, this.i, this.shift, Kd(this, this.shift, this.root, b, c), this.pa, null)
  }
  if(b === this.i) {
    return B(this, c)
  }
  if(w) {
    throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.i), A("]")].join(""));
  }
  return null
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.la(null, c);
      case 3:
        return this.ta(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.la(null, a)
};
g.a = function(a, b) {
  return this.ta(null, a, b)
};
g.R = function(a, b) {
  if(32 > this.i - Dd(this)) {
    for(var c = this.pa.length, d = Array(c + 1), e = 0;;) {
      if(e < c) {
        d[e] = this.pa[e], e += 1
      }else {
        break
      }
    }
    d[c] = b;
    return new P(this.j, this.i + 1, this.shift, this.root, d, null)
  }
  c = (d = this.i >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = new Bd(null, Array(32)), d.e[0] = this.root, e = Ed(null, this.shift, new Bd(null, this.pa)), d.e[1] = e) : d = Gd(this, this.shift, this.root, new Bd(null, this.pa));
  return new P(this.j, this.i + 1, c, d, [b], null)
};
g.Cc = function() {
  return 0 < this.i ? new Qb(this, this.i - 1, null) : null
};
g.kc = function() {
  return C.a(this, 0)
};
g.Bc = function() {
  return C.a(this, 1)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Lb.a(this, b)
};
g.da = function(a, b, c) {
  return Lb.c(this, b, c)
};
g.Q = function() {
  return 0 === this.i ? null : 32 > this.i ? K.b(this.pa) : w ? Qd.c ? Qd.c(this, 0, 0) : Qd.call(null, this, 0, 0) : null
};
g.S = f("i");
g.Gb = function() {
  return 0 < this.i ? C.a(this, this.i - 1) : null
};
g.Hb = function() {
  if(0 === this.i) {
    throw Error("Can't pop empty vector");
  }
  if(1 === this.i) {
    return bb(Rd, this.j)
  }
  if(1 < this.i - Dd(this)) {
    return new P(this.j, this.i - 1, this.shift, this.root, this.pa.slice(0, -1), null)
  }
  if(w) {
    var a = Id(this, this.i - 2), b = Md(this, this.shift, this.root), b = null == b ? Q : b, c = this.i - 1;
    return 5 < this.shift && null == b.e[1] ? new P(this.j, c, this.shift - 5, b.e[0], a, null) : new P(this.j, c, this.shift, b, a, null)
  }
  return null
};
g.Ec = function(a, b, c) {
  return Ma(this, b, c)
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new P(b, this.i, this.shift, this.root, this.pa, this.n)
};
g.G = f("j");
g.la = function(a, b) {
  return Id(this, b)[b & 31]
};
g.ta = function(a, b, c) {
  return 0 <= b && b < this.i ? C.a(this, b) : c
};
g.T = function() {
  return p(Rd, this.j)
};
var Q = new Bd(null, Array(32)), Rd = new P(null, 0, 5, Q, [], 0);
function Sd(a, b) {
  var c = a.length, d = b ? a : va(a);
  if(32 > c) {
    return new P(null, c, 5, Q, d, null)
  }
  for(var e = d.slice(0, 32), h = 32, k = qb(new P(null, 32, 5, Q, e, null));;) {
    if(h < c) {
      e = h + 1, k = rb(k, d[h]), h = e
    }else {
      return sb(k)
    }
  }
}
function Td(a) {
  return sb(xc.c(rb, qb(Rd), a))
}
var Ud = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return a instanceof Jb ? Sd.a ? Sd.a(a.e, !0) : Sd.call(null, a.e, !0) : Td(a)
  }
  a.p = 0;
  a.g = function(a) {
    a = F(a);
    return b(a)
  };
  a.d = b;
  return a
}();
function Vd(a, b, c, d, e, h) {
  this.fa = a;
  this.Na = b;
  this.C = c;
  this.X = d;
  this.j = e;
  this.n = h;
  this.h = 32243948;
  this.u = 1536
}
g = Vd.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.Da = function() {
  if(this.X + 1 < this.Na.length) {
    var a = Qd.o ? Qd.o(this.fa, this.Na, this.C, this.X + 1) : Qd.call(null, this.fa, this.Na, this.C, this.X + 1);
    return null == a ? null : a
  }
  return yb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Lb.a(Wd.c ? Wd.c(this.fa, this.C + this.X, M(this.fa)) : Wd.call(null, this.fa, this.C + this.X, M(this.fa)), b)
};
g.da = function(a, b, c) {
  return Lb.c(Wd.c ? Wd.c(this.fa, this.C + this.X, M(this.fa)) : Wd.call(null, this.fa, this.C + this.X, M(this.fa)), b, c)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return this.Na[this.X]
};
g.ma = function() {
  if(this.X + 1 < this.Na.length) {
    var a = Qd.o ? Qd.o(this.fa, this.Na, this.C, this.X + 1) : Qd.call(null, this.fa, this.Na, this.C, this.X + 1);
    return null == a ? I : a
  }
  return xb(this)
};
g.rd = function() {
  var a = this.Na.length, a = this.C + a < ya(this.fa) ? Qd.c ? Qd.c(this.fa, this.C + a, 0) : Qd.call(null, this.fa, this.C + a, 0) : null;
  return null == a ? null : a
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return Qd.O ? Qd.O(this.fa, this.Na, this.C, this.X, b) : Qd.call(null, this.fa, this.Na, this.C, this.X, b)
};
g.T = function() {
  return p(Rd, this.j)
};
g.sd = function() {
  return Zc.a(this.Na, this.X)
};
g.td = function() {
  var a = this.Na.length, a = this.C + a < ya(this.fa) ? Qd.c ? Qd.c(this.fa, this.C + a, 0) : Qd.call(null, this.fa, this.C + a, 0) : null;
  return null == a ? I : a
};
var Qd = function() {
  function a(a, b, c, d, m) {
    return new Vd(a, b, c, d, m, null)
  }
  function b(a, b, c, d) {
    return new Vd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new Vd(a, Id(a, b), b, c, null, null)
  }
  var d = null, d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, k);
      case 4:
        return b.call(this, d, h, k, l);
      case 5:
        return a.call(this, d, h, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.o = b;
  d.O = a;
  return d
}();
function Xd(a, b, c, d, e) {
  this.j = a;
  this.m = b;
  this.start = c;
  this.end = d;
  this.n = e;
  this.u = 0;
  this.h = 32400159
}
g = Xd.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.K = function(a, b) {
  return C.c(this, b, null)
};
g.L = function(a, b, c) {
  return C.c(this, b, c)
};
g.Ya = function(a, b, c) {
  var d = this, e = d.start + b;
  return Yd.O ? Yd.O(d.j, O.c(d.m, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Yd.call(null, d.j, O.c(d.m, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.la(null, c);
      case 3:
        return this.ta(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.la(null, a)
};
g.a = function(a, b) {
  return this.ta(null, a, b)
};
g.R = function(a, b) {
  return Yd.O ? Yd.O(this.j, Xa(this.m, this.end, b), this.start, this.end + 1, null) : Yd.call(null, this.j, Xa(this.m, this.end, b), this.start, this.end + 1, null)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Lb.a(this, b)
};
g.da = function(a, b, c) {
  return Lb.c(this, b, c)
};
g.Q = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : L(C.a(a.m, d), new Vc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
g.S = function() {
  return this.end - this.start
};
g.Gb = function() {
  return C.a(this.m, this.end - 1)
};
g.Hb = function() {
  if(this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return Yd.O ? Yd.O(this.j, this.m, this.start, this.end - 1, null) : Yd.call(null, this.j, this.m, this.start, this.end - 1, null)
};
g.Ec = function(a, b, c) {
  return Ma(this, b, c)
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return Yd.O ? Yd.O(b, this.m, this.start, this.end, this.n) : Yd.call(null, b, this.m, this.start, this.end, this.n)
};
g.G = f("j");
g.la = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Hd(b, this.end - this.start) : C.a(this.m, this.start + b)
};
g.ta = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : C.c(this.m, this.start + b, c)
};
g.T = function() {
  return p(Rd, this.j)
};
function Yd(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Xd) {
      c = b.start + c, d = b.start + d, b = b.m
    }else {
      var h = M(b);
      if(0 > c || 0 > d || c > h || d > h) {
        throw Error("Index out of bounds");
      }
      return new Xd(a, b, c, d, e)
    }
  }
}
var Wd = function() {
  function a(a, b, c) {
    return Yd(null, a, b, c, null)
  }
  function b(a, b) {
    return c.c(a, b, M(a))
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Od(a) {
  return new Bd({}, va(a.e))
}
function Pd(a) {
  var b = Array(32);
  mc(a, 0, b, 0, a.length);
  return b
}
var $d = function Zd(b, c, d, e) {
  d = b.root.P === d.P ? d : new Bd(b.root.P, va(d.e));
  var h = b.i - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var k = d.e[h];
    b = null != k ? Zd(b, c - 5, k, e) : Ed(b.root.P, c - 5, e)
  }
  d.e[h] = b;
  return d
};
function Nd(a, b, c, d) {
  this.i = a;
  this.shift = b;
  this.root = c;
  this.pa = d;
  this.h = 275;
  this.u = 88
}
g = Nd.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.K = function(a, b) {
  return C.c(this, b, null)
};
g.L = function(a, b, c) {
  return C.c(this, b, c)
};
g.la = function(a, b) {
  if(this.root.P) {
    return Id(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
g.ta = function(a, b, c) {
  return 0 <= b && b < this.i ? C.a(this, b) : c
};
g.S = function() {
  if(this.root.P) {
    return this.i
  }
  throw Error("count after persistent!");
};
g.be = function(a, b, c) {
  var d = this;
  if(d.root.P) {
    if(0 <= b && b < d.i) {
      return Dd(this) <= b ? d.pa[b & 31] = c : (a = function h(a, l) {
        var m = d.root.P === l.P ? l : new Bd(d.root.P, va(l.e));
        if(0 === a) {
          m.e[b & 31] = c
        }else {
          var r = b >>> a & 31, x = h(a - 5, m.e[r]);
          m.e[r] = x
        }
        return m
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.i) {
      return rb(this, c)
    }
    if(w) {
      throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.i)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
g.lc = function(a, b, c) {
  return ub(this, b, c)
};
g.Tb = function(a, b) {
  if(this.root.P) {
    if(32 > this.i - Dd(this)) {
      this.pa[this.i & 31] = b
    }else {
      var c = new Bd(this.root.P, this.pa), d = Array(32);
      d[0] = b;
      this.pa = d;
      if(this.i >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = Ed(this.root.P, this.shift, c);
        this.root = new Bd(this.root.P, d);
        this.shift = e
      }else {
        this.root = $d(this, this.shift, this.root, c)
      }
    }
    this.i += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
g.Ib = function() {
  if(this.root.P) {
    this.root.P = null;
    var a = this.i - Dd(this), b = Array(a);
    mc(this.pa, 0, b, 0, a);
    return new P(null, this.i, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function ae(a, b, c, d) {
  this.j = a;
  this.Ea = b;
  this.pb = c;
  this.n = d;
  this.u = 0;
  this.h = 31850572
}
g = ae.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return G(this.Ea)
};
g.ma = function() {
  var a = J(this.Ea);
  return a ? new ae(this.j, a, this.pb, null) : null == this.pb ? Aa(this) : new ae(this.j, this.pb, null, null)
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new ae(b, this.Ea, this.pb, this.n)
};
g.G = f("j");
g.T = function() {
  return p(I, this.j)
};
function be(a, b, c, d, e) {
  this.j = a;
  this.count = b;
  this.Ea = c;
  this.pb = d;
  this.n = e;
  this.u = 0;
  this.h = 31858766
}
g = be.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.R = function(a, b) {
  var c = this;
  return u(c.Ea) ? new be(c.j, c.count + 1, c.Ea, Ub.a(function() {
    var a = c.pb;
    return u(a) ? a : p(Rd, new q(null, 2, [s, 3830, t, 65], null))
  }(), b), null) : new be(c.j, c.count + 1, Ub.a(c.Ea, b), p(Rd, new q(null, 2, [s, 3831, t, 59], null)), null)
};
g.toString = function() {
  return Ab(this)
};
g.Q = function() {
  var a = F(this.pb), b = this.Ea;
  return u(u(b) ? b : a) ? new ae(null, this.Ea, F(a), null) : null
};
g.S = f("count");
g.Gb = function() {
  return G(this.Ea)
};
g.Hb = function() {
  if(u(this.Ea)) {
    var a = J(this.Ea);
    return a ? new be(this.j, this.count - 1, a, this.pb, null) : new be(this.j, this.count - 1, F(this.pb), p(Rd, new q(null, 2, [s, 3824, t, 57], null)), null)
  }
  return this
};
g.aa = function() {
  return G(this.Ea)
};
g.ma = function() {
  return H(F(this))
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new be(b, this.count, this.Ea, this.pb, this.n)
};
g.G = f("j");
g.T = function() {
  return ce
};
var ce = new be(null, 0, null, p(Rd, new q(null, 2, [s, 3852, t, 69], null)), 0);
function de() {
  this.u = 0;
  this.h = 2097152
}
de.prototype.J = ba(!1);
var ee = new de;
function fe(a, b) {
  return pc(jc(b) ? M(a) === M(b) ? md(od, sd.a(function(a) {
    return E.a(Wb.c(b, G(a), ee), G(J(a)))
  }, a)) : null : null)
}
function ge(a, b) {
  var c = a.e;
  if(b instanceof S) {
    a: {
      for(var d = c.length, e = b.Kb, h = 0;;) {
        if(d <= h) {
          c = -1;
          break a
        }
        var k = c[h];
        if(k instanceof S && e === k.Kb) {
          c = h;
          break a
        }
        if(w) {
          h += 2
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
          if(w) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof Eb) {
        a: {
          d = c.length;
          e = b.Zb;
          for(h = 0;;) {
            if(d <= h) {
              c = -1;
              break a
            }
            k = c[h];
            if(k instanceof Eb && e === k.Zb) {
              c = h;
              break a
            }
            if(w) {
              h += 2
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
              if(w) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(w) {
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
                if(w) {
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
function he(a, b, c) {
  this.e = a;
  this.C = b;
  this.$ = c;
  this.u = 0;
  this.h = 32374990
}
g = he.prototype;
g.N = function() {
  return Pb(this)
};
g.Da = function() {
  return this.C < this.e.length - 2 ? new he(this.e, this.C + 2, this.$) : null
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Tb.a(b, this)
};
g.da = function(a, b, c) {
  return Tb.c(b, c, this)
};
g.Q = function() {
  return this
};
g.S = function() {
  return(this.e.length - this.C) / 2
};
g.aa = function() {
  return p(new P(null, 2, 5, Q, [this.e[this.C], this.e[this.C + 1]], null), new q(null, 2, [s, 4140, t, 38], null))
};
g.ma = function() {
  return this.C < this.e.length - 2 ? new he(this.e, this.C + 2, this.$) : I
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new he(this.e, this.C, b)
};
g.G = f("$");
g.T = function() {
  return p(I, this.$)
};
function q(a, b, c, d) {
  this.j = a;
  this.i = b;
  this.e = c;
  this.n = d;
  this.u = 4;
  this.h = 16123663
}
g = q.prototype;
g.Ac = function() {
  return new ie({}, this.e.length, va(this.e))
};
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Lc(this)
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  a = ge(this, b);
  return-1 === a ? c : this.e[a + 1]
};
g.Ya = function(a, b, c) {
  a = ge(this, b);
  if(-1 === a) {
    if(this.i < je) {
      a = this.e;
      for(var d = a.length, e = Array(d + 2), h = 0;;) {
        if(h < d) {
          e[h] = a[h], h += 1
        }else {
          break
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new q(this.j, this.i + 1, e, null)
    }
    return bb(Ma(zd(ke, this), b, c), this.j)
  }
  return c === this.e[a + 1] ? this : w ? (b = va(this.e), b[a + 1] = c, new q(this.j, this.i, b, null)) : null
};
g.zc = function(a, b) {
  return-1 !== ge(this, b)
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return kc(b) ? Ma(this, C.a(b, 0), C.a(b, 1)) : xc.c(B, this, b)
};
g.toString = function() {
  return Ab(this)
};
g.Q = function() {
  return 0 <= this.e.length - 2 ? new he(this.e, 0, null) : null
};
g.S = f("i");
g.J = function(a, b) {
  return fe(this, b)
};
g.H = function(a, b) {
  return new q(b, this.i, this.e, this.n)
};
g.G = f("j");
g.T = function() {
  return bb(le, this.j)
};
g.jc = function(a, b) {
  if(0 <= ge(this, b)) {
    var c = this.e.length, d = c - 2;
    if(0 === d) {
      return Aa(this)
    }
    for(var d = Array(d), e = 0, h = 0;;) {
      if(e >= c) {
        return new q(this.j, this.i - 1, d, null)
      }
      if(E.a(b, this.e[e])) {
        e += 2
      }else {
        if(w) {
          d[h] = this.e[e], d[h + 1] = this.e[e + 1], h += 2, e += 2
        }else {
          return null
        }
      }
    }
  }else {
    return this
  }
};
var le = new q(null, 0, [], null), je = 8;
function me(a) {
  for(var b = a.length, c = 0, d = qb(le);;) {
    if(c < b) {
      var e = c + 2, d = d.lc(null, a[c], a[c + 1]), c = e
    }else {
      return d.Ib(null)
    }
  }
}
function ie(a, b, c) {
  this.pc = a;
  this.Yb = b;
  this.e = c;
  this.u = 56;
  this.h = 258
}
g = ie.prototype;
g.lc = function(a, b, c) {
  if(u(this.pc)) {
    a = ge(this, b);
    if(-1 === a) {
      return this.Yb + 2 <= 2 * je ? (this.Yb += 2, this.e.push(b), this.e.push(c), this) : hd(ne.a ? ne.a(this.Yb, this.e) : ne.call(null, this.Yb, this.e), b, c)
    }
    c !== this.e[a + 1] && (this.e[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
g.Tb = function(a, b) {
  if(u(this.pc)) {
    if(b ? b.h & 2048 || b.Ie || (b.h ? 0 : v(Pa, b)) : v(Pa, b)) {
      return tb(this, Mc.b ? Mc.b(b) : Mc.call(null, b), Nc.b ? Nc.b(b) : Nc.call(null, b))
    }
    for(var c = F(b), d = this;;) {
      var e = G(c);
      if(u(e)) {
        c = J(c), d = tb(d, Mc.b ? Mc.b(e) : Mc.call(null, e), Nc.b ? Nc.b(e) : Nc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
g.Ib = function() {
  if(u(this.pc)) {
    return this.pc = !1, new q(null, Hc(this.Yb, 2), this.e, null)
  }
  throw Error("persistent! called twice");
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  if(u(this.pc)) {
    return a = ge(this, b), -1 === a ? c : this.e[a + 1]
  }
  throw Error("lookup after persistent!");
};
g.S = function() {
  if(u(this.pc)) {
    return Hc(this.Yb, 2)
  }
  throw Error("count after persistent!");
};
function ne(a, b) {
  for(var c = qb(ke), d = 0;;) {
    if(d < a) {
      c = tb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function oe() {
  this.r = !1
}
function pe(a, b) {
  return a === b ? !0 : Uc(a, b) ? !0 : w ? E.a(a, b) : null
}
var qe = function() {
  function a(a, b, c, k, l) {
    a = va(a);
    a[b] = c;
    a[k] = l;
    return a
  }
  function b(a, b, c) {
    a = va(a);
    a[b] = c;
    return a
  }
  var c = null, c = function(c, e, h, k, l) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, h);
      case 5:
        return a.call(this, c, e, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.O = a;
  return c
}();
function re(a, b) {
  var c = Array(a.length - 2);
  mc(a, 0, c, 0, 2 * b);
  mc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var se = function() {
  function a(a, b, c, k, l, m) {
    a = a.qc(b);
    a.e[c] = k;
    a.e[l] = m;
    return a
  }
  function b(a, b, c, k) {
    a = a.qc(b);
    a.e[c] = k;
    return a
  }
  var c = null, c = function(c, e, h, k, l, m) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, h, k);
      case 6:
        return a.call(this, c, e, h, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.Za = a;
  return c
}();
function te(a, b, c) {
  this.P = a;
  this.U = b;
  this.e = c
}
g = te.prototype;
g.cb = function(a, b, c, d, e, h) {
  var k = 1 << (c >>> b & 31), l = Ic(this.U & k - 1);
  if(0 === (this.U & k)) {
    var m = Ic(this.U);
    if(2 * m < this.e.length) {
      a = this.qc(a);
      b = a.e;
      h.r = !0;
      a: {
        for(c = 2 * (m - l), h = 2 * l + (c - 1), m = 2 * (l + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[m] = b[h];
          m -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * l] = d;
      b[2 * l + 1] = e;
      a.U |= k;
      return a
    }
    if(16 <= m) {
      l = Array(32);
      l[c >>> b & 31] = ue.cb(a, b + 5, c, d, e, h);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.U >>> d & 1) && (l[d] = null != this.e[e] ? ue.cb(a, b + 5, Gb(this.e[e]), this.e[e], this.e[e + 1], h) : this.e[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new ve(a, m + 1, l)
    }
    return w ? (b = Array(2 * (m + 4)), mc(this.e, 0, b, 0, 2 * l), b[2 * l] = d, b[2 * l + 1] = e, mc(this.e, 2 * l, b, 2 * (l + 1), 2 * (m - l)), h.r = !0, a = this.qc(a), a.e = b, a.U |= k, a) : null
  }
  m = this.e[2 * l];
  k = this.e[2 * l + 1];
  return null == m ? (m = k.cb(a, b + 5, c, d, e, h), m === k ? this : se.o(this, a, 2 * l + 1, m)) : pe(d, m) ? e === k ? this : se.o(this, a, 2 * l + 1, e) : w ? (h.r = !0, se.Za(this, a, 2 * l, null, 2 * l + 1, we.ic ? we.ic(a, b + 5, m, k, c, d, e) : we.call(null, a, b + 5, m, k, c, d, e))) : null
};
g.Hc = function() {
  return xe.b ? xe.b(this.e) : xe.call(null, this.e)
};
g.qc = function(a) {
  if(a === this.P) {
    return this
  }
  var b = Ic(this.U), c = Array(0 > b ? 4 : 2 * (b + 1));
  mc(this.e, 0, c, 0, 2 * b);
  return new te(a, this.U, c)
};
g.Ic = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.U & d)) {
    return this
  }
  var e = Ic(this.U & d - 1), h = this.e[2 * e], k = this.e[2 * e + 1];
  return null == h ? (a = k.Ic(a + 5, b, c), a === k ? this : null != a ? new te(null, this.U, qe.c(this.e, 2 * e + 1, a)) : this.U === d ? null : w ? new te(null, this.U ^ d, re(this.e, e)) : null) : pe(c, h) ? new te(null, this.U ^ d, re(this.e, e)) : w ? this : null
};
g.bb = function(a, b, c, d, e) {
  var h = 1 << (b >>> a & 31), k = Ic(this.U & h - 1);
  if(0 === (this.U & h)) {
    var l = Ic(this.U);
    if(16 <= l) {
      k = Array(32);
      k[b >>> a & 31] = ue.bb(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.U >>> c & 1) && (k[c] = null != this.e[d] ? ue.bb(a + 5, Gb(this.e[d]), this.e[d], this.e[d + 1], e) : this.e[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new ve(null, l + 1, k)
    }
    a = Array(2 * (l + 1));
    mc(this.e, 0, a, 0, 2 * k);
    a[2 * k] = c;
    a[2 * k + 1] = d;
    mc(this.e, 2 * k, a, 2 * (k + 1), 2 * (l - k));
    e.r = !0;
    return new te(null, this.U | h, a)
  }
  l = this.e[2 * k];
  h = this.e[2 * k + 1];
  return null == l ? (l = h.bb(a + 5, b, c, d, e), l === h ? this : new te(null, this.U, qe.c(this.e, 2 * k + 1, l))) : pe(c, l) ? d === h ? this : new te(null, this.U, qe.c(this.e, 2 * k + 1, d)) : w ? (e.r = !0, new te(null, this.U, qe.O(this.e, 2 * k, null, 2 * k + 1, we.Za ? we.Za(a + 5, l, h, b, c, d) : we.call(null, a + 5, l, h, b, c, d)))) : null
};
g.Lb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.U & e)) {
    return d
  }
  var h = Ic(this.U & e - 1), e = this.e[2 * h], h = this.e[2 * h + 1];
  return null == e ? h.Lb(a + 5, b, c, d) : pe(c, e) ? h : w ? d : null
};
var ue = new te(null, 0, []);
function ve(a, b, c) {
  this.P = a;
  this.i = b;
  this.e = c
}
g = ve.prototype;
g.cb = function(a, b, c, d, e, h) {
  var k = c >>> b & 31, l = this.e[k];
  if(null == l) {
    return a = se.o(this, a, k, ue.cb(a, b + 5, c, d, e, h)), a.i += 1, a
  }
  b = l.cb(a, b + 5, c, d, e, h);
  return b === l ? this : se.o(this, a, k, b)
};
g.Hc = function() {
  return ye.b ? ye.b(this.e) : ye.call(null, this.e)
};
g.qc = function(a) {
  return a === this.P ? this : new ve(a, this.i, va(this.e))
};
g.Ic = function(a, b, c) {
  var d = b >>> a & 31, e = this.e[d];
  if(null != e) {
    a = e.Ic(a + 5, b, c);
    if(a === e) {
      d = this
    }else {
      if(null == a) {
        if(8 >= this.i) {
          a: {
            e = this.e;
            a = 2 * (this.i - 1);
            b = Array(a);
            c = 0;
            for(var h = 1, k = 0;;) {
              if(c < a) {
                c !== d && null != e[c] && (b[h] = e[c], h += 2, k |= 1 << c), c += 1
              }else {
                d = new te(null, k, b);
                break a
              }
            }
            d = void 0
          }
        }else {
          d = new ve(null, this.i - 1, qe.c(this.e, d, a))
        }
      }else {
        d = w ? new ve(null, this.i, qe.c(this.e, d, a)) : null
      }
    }
    return d
  }
  return this
};
g.bb = function(a, b, c, d, e) {
  var h = b >>> a & 31, k = this.e[h];
  if(null == k) {
    return new ve(null, this.i + 1, qe.c(this.e, h, ue.bb(a + 5, b, c, d, e)))
  }
  a = k.bb(a + 5, b, c, d, e);
  return a === k ? this : new ve(null, this.i, qe.c(this.e, h, a))
};
g.Lb = function(a, b, c, d) {
  var e = this.e[b >>> a & 31];
  return null != e ? e.Lb(a + 5, b, c, d) : d
};
function ze(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(pe(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Ae(a, b, c, d) {
  this.P = a;
  this.yb = b;
  this.i = c;
  this.e = d
}
g = Ae.prototype;
g.cb = function(a, b, c, d, e, h) {
  if(c === this.yb) {
    b = ze(this.e, this.i, d);
    if(-1 === b) {
      if(this.e.length > 2 * this.i) {
        return a = se.Za(this, a, 2 * this.i, d, 2 * this.i + 1, e), h.r = !0, a.i += 1, a
      }
      c = this.e.length;
      b = Array(c + 2);
      mc(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      h.r = !0;
      h = this.i + 1;
      a === this.P ? (this.e = b, this.i = h, a = this) : a = new Ae(this.P, this.yb, h, b);
      return a
    }
    return this.e[b + 1] === e ? this : se.o(this, a, b + 1, e)
  }
  return(new te(a, 1 << (this.yb >>> b & 31), [null, this, null, null])).cb(a, b, c, d, e, h)
};
g.Hc = function() {
  return xe.b ? xe.b(this.e) : xe.call(null, this.e)
};
g.qc = function(a) {
  if(a === this.P) {
    return this
  }
  var b = Array(2 * (this.i + 1));
  mc(this.e, 0, b, 0, 2 * this.i);
  return new Ae(a, this.yb, this.i, b)
};
g.Ic = function(a, b, c) {
  a = ze(this.e, this.i, c);
  return-1 === a ? this : 1 === this.i ? null : w ? new Ae(null, this.yb, this.i - 1, re(this.e, Hc(a, 2))) : null
};
g.bb = function(a, b, c, d, e) {
  return b === this.yb ? (a = ze(this.e, this.i, c), -1 === a ? (a = 2 * this.i, b = Array(a + 2), mc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.r = !0, new Ae(null, this.yb, this.i + 1, b)) : E.a(this.e[a], d) ? this : new Ae(null, this.yb, this.i, qe.c(this.e, a + 1, d))) : (new te(null, 1 << (this.yb >>> a & 31), [null, this])).bb(a, b, c, d, e)
};
g.Lb = function(a, b, c, d) {
  a = ze(this.e, this.i, c);
  return 0 > a ? d : pe(c, this.e[a]) ? this.e[a + 1] : w ? d : null
};
var we = function() {
  function a(a, b, c, k, l, m, r) {
    var x = Gb(c);
    if(x === l) {
      return new Ae(null, x, 2, [c, k, m, r])
    }
    var z = new oe;
    return ue.cb(a, b, x, c, k, z).cb(a, b, l, m, r, z)
  }
  function b(a, b, c, k, l, m) {
    var r = Gb(b);
    if(r === k) {
      return new Ae(null, r, 2, [b, c, l, m])
    }
    var x = new oe;
    return ue.bb(a, r, b, c, x).bb(a, k, l, m, x)
  }
  var c = null, c = function(c, e, h, k, l, m, r) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, h, k, l, m);
      case 7:
        return a.call(this, c, e, h, k, l, m, r)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.Za = b;
  c.ic = a;
  return c
}();
function Be(a, b, c, d, e) {
  this.j = a;
  this.gb = b;
  this.C = c;
  this.q = d;
  this.n = e;
  this.u = 0;
  this.h = 32374860
}
g = Be.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Tb.a(b, this)
};
g.da = function(a, b, c) {
  return Tb.c(b, c, this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return null == this.q ? p(new P(null, 2, 5, Q, [this.gb[this.C], this.gb[this.C + 1]], null), new q(null, 2, [s, 4888, t, 44], null)) : G(this.q)
};
g.ma = function() {
  return null == this.q ? xe.c ? xe.c(this.gb, this.C + 2, null) : xe.call(null, this.gb, this.C + 2, null) : xe.c ? xe.c(this.gb, this.C, J(this.q)) : xe.call(null, this.gb, this.C, J(this.q))
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new Be(b, this.gb, this.C, this.q, this.n)
};
g.G = f("j");
g.T = function() {
  return p(I, this.j)
};
var xe = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new Be(null, a, b, null, null)
          }
          var k = a[b + 1];
          if(u(k) && (k = k.Hc(), u(k))) {
            return new Be(null, a, b + 2, k, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new Be(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.c(a, 0, null)
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c
}();
function Ce(a, b, c, d, e) {
  this.j = a;
  this.gb = b;
  this.C = c;
  this.q = d;
  this.n = e;
  this.u = 0;
  this.h = 32374860
}
g = Ce.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Tb.a(b, this)
};
g.da = function(a, b, c) {
  return Tb.c(b, c, this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return G(this.q)
};
g.ma = function() {
  return ye.o ? ye.o(null, this.gb, this.C, J(this.q)) : ye.call(null, null, this.gb, this.C, J(this.q))
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new Ce(b, this.gb, this.C, this.q, this.n)
};
g.G = f("j");
g.T = function() {
  return p(I, this.j)
};
var ye = function() {
  function a(a, b, c, k) {
    if(null == k) {
      for(k = b.length;;) {
        if(c < k) {
          var l = b[c];
          if(u(l) && (l = l.Hc(), u(l))) {
            return new Ce(a, b, c + 1, l, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new Ce(a, b, c, k, null)
    }
  }
  function b(a) {
    return c.o(null, a, 0, null)
  }
  var c = null, c = function(c, e, h, k) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.o = a;
  return c
}();
function De(a, b, c, d, e, h) {
  this.j = a;
  this.i = b;
  this.root = c;
  this.sa = d;
  this.Ia = e;
  this.n = h;
  this.u = 4;
  this.h = 16123663
}
g = De.prototype;
g.Ac = function() {
  return new Ee({}, this.root, this.i, this.sa, this.Ia)
};
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Lc(this)
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return null == b ? this.sa ? this.Ia : c : null == this.root ? c : w ? this.root.Lb(0, Gb(b), b, c) : null
};
g.Ya = function(a, b, c) {
  if(null == b) {
    return this.sa && c === this.Ia ? this : new De(this.j, this.sa ? this.i : this.i + 1, this.root, !0, c, null)
  }
  a = new oe;
  b = (null == this.root ? ue : this.root).bb(0, Gb(b), b, c, a);
  return b === this.root ? this : new De(this.j, a.r ? this.i + 1 : this.i, b, this.sa, this.Ia, null)
};
g.zc = function(a, b) {
  return null == b ? this.sa : null == this.root ? !1 : w ? this.root.Lb(0, Gb(b), b, nc) !== nc : null
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return kc(b) ? Ma(this, C.a(b, 0), C.a(b, 1)) : xc.c(B, this, b)
};
g.toString = function() {
  return Ab(this)
};
g.Q = function() {
  if(0 < this.i) {
    var a = null != this.root ? this.root.Hc() : null;
    return this.sa ? L(p(new P(null, 2, 5, Q, [null, this.Ia], null), new q(null, 2, [s, 5014, t, 30], null)), a) : a
  }
  return null
};
g.S = f("i");
g.J = function(a, b) {
  return fe(this, b)
};
g.H = function(a, b) {
  return new De(b, this.i, this.root, this.sa, this.Ia, this.n)
};
g.G = f("j");
g.T = function() {
  return bb(ke, this.j)
};
g.jc = function(a, b) {
  if(null == b) {
    return this.sa ? new De(this.j, this.i - 1, this.root, !1, null, null) : this
  }
  if(null == this.root) {
    return this
  }
  if(w) {
    var c = this.root.Ic(0, Gb(b), b);
    return c === this.root ? this : new De(this.j, this.i - 1, c, this.sa, this.Ia, null)
  }
  return null
};
var ke = new De(null, 0, null, !1, null, 0);
function Xb(a, b) {
  for(var c = a.length, d = 0, e = qb(ke);;) {
    if(d < c) {
      var h = d + 1, e = e.lc(null, a[d], b[d]), d = h
    }else {
      return sb(e)
    }
  }
}
function Ee(a, b, c, d, e) {
  this.P = a;
  this.root = b;
  this.count = c;
  this.sa = d;
  this.Ia = e;
  this.u = 56;
  this.h = 258
}
g = Ee.prototype;
g.lc = function(a, b, c) {
  return Fe(this, b, c)
};
g.Tb = function(a, b) {
  var c;
  a: {
    if(this.P) {
      if(b ? b.h & 2048 || b.Ie || (b.h ? 0 : v(Pa, b)) : v(Pa, b)) {
        c = Fe(this, Mc.b ? Mc.b(b) : Mc.call(null, b), Nc.b ? Nc.b(b) : Nc.call(null, b));
        break a
      }
      c = F(b);
      for(var d = this;;) {
        var e = G(c);
        if(u(e)) {
          c = J(c), d = Fe(d, Mc.b ? Mc.b(e) : Mc.call(null, e), Nc.b ? Nc.b(e) : Nc.call(null, e))
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
g.Ib = function() {
  var a;
  if(this.P) {
    this.P = null, a = new De(null, this.count, this.root, this.sa, this.Ia, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
g.K = function(a, b) {
  return null == b ? this.sa ? this.Ia : null : null == this.root ? null : this.root.Lb(0, Gb(b), b)
};
g.L = function(a, b, c) {
  return null == b ? this.sa ? this.Ia : c : null == this.root ? c : this.root.Lb(0, Gb(b), b, c)
};
g.S = function() {
  if(this.P) {
    return this.count
  }
  throw Error("count after persistent!");
};
function Fe(a, b, c) {
  if(a.P) {
    if(null == b) {
      a.Ia !== c && (a.Ia = c), a.sa || (a.count += 1, a.sa = !0)
    }else {
      var d = new oe;
      b = (null == a.root ? ue : a.root).cb(a.P, 0, Gb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.r && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
function Ge(a, b, c) {
  for(var d = b;;) {
    if(null != a) {
      b = c ? a.left : a.right, d = Ub.a(d, a), a = b
    }else {
      return d
    }
  }
}
function He(a, b, c, d, e) {
  this.j = a;
  this.stack = b;
  this.Lc = c;
  this.i = d;
  this.n = e;
  this.u = 0;
  this.h = 32374862
}
g = He.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Tb.a(b, this)
};
g.da = function(a, b, c) {
  return Tb.c(b, c, this)
};
g.Q = function() {
  return this
};
g.S = function() {
  return 0 > this.i ? M(J(this)) + 1 : this.i
};
g.aa = function() {
  return Ua(this.stack)
};
g.ma = function() {
  var a = G(this.stack), a = Ge(this.Lc ? a.right : a.left, J(this.stack), this.Lc);
  return null != a ? new He(null, a, this.Lc, this.i - 1, null) : I
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new He(b, this.stack, this.Lc, this.i, this.n)
};
g.G = f("j");
g.T = function() {
  return p(I, this.j)
};
function Ie(a, b, c, d) {
  return c instanceof U ? c.left instanceof U ? new U(c.key, c.r, c.left.tb(), new Je(a, b, c.right, d, null), null) : c.right instanceof U ? new U(c.right.key, c.right.r, new Je(c.key, c.r, c.left, c.right.left, null), new Je(a, b, c.right.right, d, null), null) : w ? new Je(a, b, c, d, null) : null : new Je(a, b, c, d, null)
}
function Ke(a, b, c, d) {
  return d instanceof U ? d.right instanceof U ? new U(d.key, d.r, new Je(a, b, c, d.left, null), d.right.tb(), null) : d.left instanceof U ? new U(d.left.key, d.left.r, new Je(a, b, c, d.left.left, null), new Je(d.key, d.r, d.left.right, d.right, null), null) : w ? new Je(a, b, c, d, null) : null : new Je(a, b, c, d, null)
}
function Le(a, b, c, d) {
  if(c instanceof U) {
    return new U(a, b, c.tb(), d, null)
  }
  if(d instanceof Je) {
    return Ke(a, b, c, d.Kc())
  }
  if(d instanceof U && d.left instanceof Je) {
    return new U(d.left.key, d.left.r, new Je(a, b, c, d.left.left, null), Ke(d.key, d.r, d.left.right, d.right.Kc()), null)
  }
  if(w) {
    throw Error("red-black tree invariant violation");
  }
  return null
}
function Je(a, b, c, d, e) {
  this.key = a;
  this.r = b;
  this.left = c;
  this.right = d;
  this.n = e;
  this.u = 0;
  this.h = 32402207
}
g = Je.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.K = function(a, b) {
  return C.c(this, b, null)
};
g.L = function(a, b, c) {
  return C.c(this, b, c)
};
g.Ya = function(a, b, c) {
  return O.c(p(new P(null, 2, 5, Q, [this.key, this.r], null), new q(null, 2, [s, 5442, t, 21], null)), b, c)
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return p(new P(null, 3, 5, Q, [this.key, this.r, b], null), new q(null, 2, [s, 5413, t, 30], null))
};
g.kc = f("key");
g.Bc = f("r");
g.Wd = function(a) {
  return a.Yd(this)
};
g.Kc = function() {
  return new U(this.key, this.r, this.left, this.right, null)
};
g.replace = function(a, b, c, d) {
  return new Je(a, b, c, d, null)
};
g.Vd = function(a) {
  return a.Xd(this)
};
g.Xd = function(a) {
  return new Je(a.key, a.r, this, a.right, null)
};
g.Yd = function(a) {
  return new Je(a.key, a.r, a.left, this, null)
};
g.tb = function() {
  return this
};
g.ca = function(a, b) {
  return Lb.a(this, b)
};
g.da = function(a, b, c) {
  return Lb.c(this, b, c)
};
g.Q = function() {
  return B(B(I, this.r), this.key)
};
g.S = ba(2);
g.Gb = f("r");
g.Hb = function() {
  return p(new P(null, 1, 5, Q, [this.key], null), new q(null, 2, [s, 5410, t, 21], null))
};
g.Ec = function(a, b, c) {
  return Xa(p(new P(null, 2, 5, Q, [this.key, this.r], null), new q(null, 2, [s, 5446, t, 24], null)), b, c)
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return p(p(new P(null, 2, 5, Q, [this.key, this.r], null), new q(null, 2, [s, 5405, t, 25], null)), b)
};
g.G = ba(null);
g.la = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.r : null
};
g.ta = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.r : w ? c : null
};
g.T = function() {
  return p(Rd, new q(null, 2, [s, 5416, t, 20], null))
};
function U(a, b, c, d, e) {
  this.key = a;
  this.r = b;
  this.left = c;
  this.right = d;
  this.n = e;
  this.u = 0;
  this.h = 32402207
}
g = U.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.K = function(a, b) {
  return C.c(this, b, null)
};
g.L = function(a, b, c) {
  return C.c(this, b, c)
};
g.Ya = function(a, b, c) {
  return O.c(p(new P(null, 2, 5, Q, [this.key, this.r], null), new q(null, 2, [s, 5583, t, 21], null)), b, c)
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return p(new P(null, 3, 5, Q, [this.key, this.r, b], null), new q(null, 2, [s, 5554, t, 30], null))
};
g.kc = f("key");
g.Bc = f("r");
g.Wd = function(a) {
  return new U(this.key, this.r, this.left, a, null)
};
g.Kc = function() {
  throw Error("red-black tree invariant violation");
};
g.replace = function(a, b, c, d) {
  return new U(a, b, c, d, null)
};
g.Vd = function(a) {
  return new U(this.key, this.r, a, this.right, null)
};
g.Xd = function(a) {
  return this.left instanceof U ? new U(this.key, this.r, this.left.tb(), new Je(a.key, a.r, this.right, a.right, null), null) : this.right instanceof U ? new U(this.right.key, this.right.r, new Je(this.key, this.r, this.left, this.right.left, null), new Je(a.key, a.r, this.right.right, a.right, null), null) : w ? new Je(a.key, a.r, this, a.right, null) : null
};
g.Yd = function(a) {
  return this.right instanceof U ? new U(this.key, this.r, new Je(a.key, a.r, a.left, this.left, null), this.right.tb(), null) : this.left instanceof U ? new U(this.left.key, this.left.r, new Je(a.key, a.r, a.left, this.left.left, null), new Je(this.key, this.r, this.left.right, this.right, null), null) : w ? new Je(a.key, a.r, a.left, this, null) : null
};
g.tb = function() {
  return new Je(this.key, this.r, this.left, this.right, null)
};
g.ca = function(a, b) {
  return Lb.a(this, b)
};
g.da = function(a, b, c) {
  return Lb.c(this, b, c)
};
g.Q = function() {
  return B(B(I, this.r), this.key)
};
g.S = ba(2);
g.Gb = f("r");
g.Hb = function() {
  return p(new P(null, 1, 5, Q, [this.key], null), new q(null, 2, [s, 5551, t, 21], null))
};
g.Ec = function(a, b, c) {
  return Xa(p(new P(null, 2, 5, Q, [this.key, this.r], null), new q(null, 2, [s, 5587, t, 24], null)), b, c)
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return p(p(new P(null, 2, 5, Q, [this.key, this.r], null), new q(null, 2, [s, 5546, t, 25], null)), b)
};
g.G = ba(null);
g.la = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.r : null
};
g.ta = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.r : w ? c : null
};
g.T = function() {
  return p(Rd, new q(null, 2, [s, 5557, t, 20], null))
};
var Ne = function Me(b, c, d, e, h) {
  if(null == c) {
    return new U(d, e, null, null, null)
  }
  var k = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
  return 0 === k ? (h[0] = c, null) : 0 > k ? (b = Me(b, c.left, d, e, h), null != b ? c.Vd(b) : null) : w ? (b = Me(b, c.right, d, e, h), null != b ? c.Wd(b) : null) : null
}, Pe = function Oe(b, c) {
  if(null == b) {
    return c
  }
  if(null == c) {
    return b
  }
  if(b instanceof U) {
    if(c instanceof U) {
      var d = Oe(b.right, c.left);
      return d instanceof U ? new U(d.key, d.r, new U(b.key, b.r, b.left, d.left, null), new U(c.key, c.r, d.right, c.right, null), null) : new U(b.key, b.r, b.left, new U(c.key, c.r, d, c.right, null), null)
    }
    return new U(b.key, b.r, b.left, Oe(b.right, c), null)
  }
  return c instanceof U ? new U(c.key, c.r, Oe(b, c.left), c.right, null) : w ? (d = Oe(b.right, c.left), d instanceof U ? new U(d.key, d.r, new Je(b.key, b.r, b.left, d.left, null), new Je(c.key, c.r, d.right, c.right, null), null) : Le(b.key, b.r, b.left, new Je(c.key, c.r, d, c.right, null))) : null
}, Re = function Qe(b, c, d, e) {
  if(null != c) {
    var h = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
    if(0 === h) {
      return e[0] = c, Pe(c.left, c.right)
    }
    if(0 > h) {
      return b = Qe(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Je ? Le(c.key, c.r, b, c.right) : new U(c.key, c.r, b, c.right, null) : null
    }
    if(w) {
      b = Qe(b, c.right, d, e);
      if(null != b || null != e[0]) {
        if(c.right instanceof Je) {
          if(e = c.key, d = c.r, c = c.left, b instanceof U) {
            c = new U(e, d, c, b.tb(), null)
          }else {
            if(c instanceof Je) {
              c = Ie(e, d, c.Kc(), b)
            }else {
              if(c instanceof U && c.right instanceof Je) {
                c = new U(c.right.key, c.right.r, Ie(c.key, c.r, c.left.Kc(), c.right.left), new Je(e, d, c.right.right, b, null), null)
              }else {
                if(w) {
                  throw Error("red-black tree invariant violation");
                }
                c = null
              }
            }
          }
        }else {
          c = new U(c.key, c.r, c.left, b, null)
        }
      }else {
        c = null
      }
      return c
    }
  }
  return null
}, Ue = function Te(b, c, d, e) {
  var h = c.key, k = b.a ? b.a(d, h) : b.call(null, d, h);
  return 0 === k ? c.replace(h, e, c.left, c.right) : 0 > k ? c.replace(h, c.r, Te(b, c.left, d, e), c.right) : w ? c.replace(h, c.r, c.left, Te(b, c.right, d, e)) : null
};
function Ve(a, b, c, d, e) {
  this.$a = a;
  this.$b = b;
  this.i = c;
  this.j = d;
  this.n = e;
  this.u = 0;
  this.h = 418776847
}
g = Ve.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Lc(this)
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  a = We(this, b);
  return null != a ? a.r : c
};
g.Ya = function(a, b, c) {
  a = [null];
  var d = Ne(this.$a, this.$b, b, c, a);
  return null == d ? (a = N.a(a, 0), E.a(c, a.r) ? this : new Ve(this.$a, Ue(this.$a, this.$b, b, c), this.i, this.j, null)) : new Ve(this.$a, d.tb(), this.i + 1, this.j, null)
};
g.zc = function(a, b) {
  return null != We(this, b)
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return kc(b) ? Ma(this, C.a(b, 0), C.a(b, 1)) : xc.c(B, this, b)
};
g.Cc = function() {
  return 0 < this.i ? new He(null, Ge(this.$b, null, !1), !1, this.i, null) : null
};
function We(a, b) {
  for(var c = a.$b;;) {
    if(null != c) {
      var d = a.$a.a ? a.$a.a(b, c.key) : a.$a.call(null, b, c.key);
      if(0 === d) {
        return c
      }
      if(0 > d) {
        c = c.left
      }else {
        if(w) {
          c = c.right
        }else {
          return null
        }
      }
    }else {
      return null
    }
  }
}
g.Q = function() {
  return 0 < this.i ? new He(null, Ge(this.$b, null, !0), !0, this.i, null) : null
};
g.S = f("i");
g.J = function(a, b) {
  return fe(this, b)
};
g.H = function(a, b) {
  return new Ve(this.$a, this.$b, this.i, b, this.n)
};
g.G = f("j");
g.T = function() {
  return p(Xe, this.j)
};
g.jc = function(a, b) {
  var c = [null], d = Re(this.$a, this.$b, b, c);
  return null == d ? null == N.a(c, 0) ? this : new Ve(this.$a, null, 0, this.j, null) : new Ve(this.$a, d.tb(), this.i - 1, this.j, null)
};
var Xe = new Ve(Cb, null, 0, null, 0), Ye = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    a = F(a);
    for(var b = qb(ke);;) {
      if(a) {
        var e = J(J(a)), b = hd(b, G(a), G(J(a)));
        a = e
      }else {
        return sb(b)
      }
    }
  }
  a.p = 0;
  a.g = function(a) {
    a = F(a);
    return b(a)
  };
  a.d = b;
  return a
}();
function Ze(a, b) {
  this.Ob = a;
  this.$ = b;
  this.u = 0;
  this.h = 32374988
}
g = Ze.prototype;
g.N = function() {
  return Pb(this)
};
g.Da = function() {
  var a = this.Ob, a = (a ? a.h & 128 || a.ae || (a.h ? 0 : v(Ha, a)) : v(Ha, a)) ? this.Ob.Da(null) : J(this.Ob);
  return null == a ? null : new Ze(a, this.$)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Tb.a(b, this)
};
g.da = function(a, b, c) {
  return Tb.c(b, c, this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return this.Ob.aa(null).kc(null)
};
g.ma = function() {
  var a = this.Ob, a = (a ? a.h & 128 || a.ae || (a.h ? 0 : v(Ha, a)) : v(Ha, a)) ? this.Ob.Da(null) : J(this.Ob);
  return null != a ? new Ze(a, this.$) : I
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new Ze(this.Ob, b)
};
g.G = f("$");
g.T = function() {
  return p(I, this.$)
};
function $e(a) {
  return(a = F(a)) ? new Ze(a, null) : null
}
function Mc(a) {
  return Qa(a)
}
function Nc(a) {
  return Ra(a)
}
function af(a, b, c) {
  this.j = a;
  this.Wb = b;
  this.n = c;
  this.u = 4;
  this.h = 15077647
}
g = af.prototype;
g.Ac = function() {
  return new bf(qb(this.Wb))
};
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Oc(this)
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return u(La(this.Wb, b)) ? b : c
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return new af(this.j, O.c(this.Wb, b, null), null)
};
g.toString = function() {
  return Ab(this)
};
g.Q = function() {
  return $e(this.Wb)
};
g.Hd = function(a, b) {
  return new af(this.j, Oa(this.Wb, b), null)
};
g.S = function() {
  return ya(this.Wb)
};
g.J = function(a, b) {
  var c = this;
  return hc(b) && M(c) === M(b) && md(function(a) {
    return rc(c, a)
  }, b)
};
g.H = function(a, b) {
  return new af(b, this.Wb, this.n)
};
g.G = f("j");
g.T = function() {
  return p(cf, this.j)
};
var cf = new af(null, le, 0);
function bf(a) {
  this.Bb = a;
  this.h = 259;
  this.u = 136
}
g = bf.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ja.c(this.Bb, c, nc) === nc ? null : c;
      case 3:
        return Ja.c(this.Bb, c, nc) === nc ? d : c
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return Ja.c(this.Bb, a, nc) === nc ? null : a
};
g.a = function(a, b) {
  return Ja.c(this.Bb, a, nc) === nc ? b : a
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return Ja.c(this.Bb, b, nc) === nc ? c : b
};
g.S = function() {
  return M(this.Bb)
};
g.Tb = function(a, b) {
  this.Bb = tb(this.Bb, b, null);
  return this
};
g.Ib = function() {
  return new af(null, sb(this.Bb), null)
};
function df(a, b, c) {
  this.j = a;
  this.Qb = b;
  this.n = c;
  this.u = 0;
  this.h = 417730831
}
g = df.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Oc(this)
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  a = We(this.Qb, b);
  return null != a ? a.key : c
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return new df(this.j, O.c(this.Qb, b, null), null)
};
g.Cc = function() {
  return 0 < M(this.Qb) ? sd.a(Mc, lb(this.Qb)) : null
};
g.toString = function() {
  return Ab(this)
};
g.Q = function() {
  return $e(this.Qb)
};
g.Hd = function(a, b) {
  return new df(this.j, Yb.a(this.Qb, b), null)
};
g.S = function() {
  return M(this.Qb)
};
g.J = function(a, b) {
  var c = this;
  return hc(b) && M(c) === M(b) && md(function(a) {
    return rc(c, a)
  }, b)
};
g.H = function(a, b) {
  return new df(b, this.Qb, this.n)
};
g.G = f("j");
g.T = function() {
  return p(ef, this.j)
};
var ef = new df(null, Xe, 0), ff = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return xc.c(B, ef, a)
  }
  a.p = 0;
  a.g = function(a) {
    a = F(a);
    return b(a)
  };
  a.d = b;
  return a
}(), gf = function() {
  function a(a, b, c) {
    return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c
  }
  var b = null, c = function() {
    function a(b, d, l, m) {
      var r = null;
      3 < arguments.length && (r = K(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, l, r)
    }
    function c(a, d, e, m) {
      return xc.c(function(c, d) {
        return b.c(a, c, d)
      }, b.c(a, d, e), m)
    }
    a.p = 3;
    a.g = function(a) {
      var b = G(a);
      a = J(a);
      var d = G(a);
      a = J(a);
      var m = G(a);
      a = H(a);
      return c(b, d, m, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h, k) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, h);
      default:
        return c.d(b, e, h, K(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 3;
  b.g = c.g;
  b.a = function(a, b) {
    return b
  };
  b.c = a;
  b.d = c.d;
  return b
}(), jf = function hf(b, c) {
  return new Vc(null, function() {
    var d = F(c);
    return d ? u(b.b ? b.b(G(d)) : b.call(null, G(d))) ? L(G(d), hf(b, H(d))) : null : null
  }, null, null)
};
function kf(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.n = e;
  this.u = 0;
  this.h = 32375006
}
g = kf.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Pb(this)
};
g.Da = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new kf(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new kf(this.j, this.start + this.step, this.end, this.step, null) : null
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return Ab(this)
};
g.ca = function(a, b) {
  return Lb.a(this, b)
};
g.da = function(a, b, c) {
  return Lb.c(this, b, c)
};
g.Q = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null
};
g.S = function() {
  return sa(hb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
g.aa = f("start");
g.ma = function() {
  return null != hb(this) ? new kf(this.j, this.start + this.step, this.end, this.step, null) : I
};
g.J = function(a, b) {
  return Rb(this, b)
};
g.H = function(a, b) {
  return new kf(b, this.start, this.end, this.step, this.n)
};
g.G = f("j");
g.la = function(a, b) {
  if(b < ya(this)) {
    return this.start + b * this.step
  }
  if(this.start > this.end && 0 === this.step) {
    return this.start
  }
  throw Error("Index out of bounds");
};
g.ta = function(a, b, c) {
  return b < ya(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c
};
g.T = function() {
  return p(I, this.j)
};
var lf = function() {
  function a(a, b, c) {
    return new kf(null, a, b, c, null)
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
  var e = null, e = function(e, k, l) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, k);
      case 3:
        return a.call(this, e, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.A = d;
  e.b = c;
  e.a = b;
  e.c = a;
  return e
}(), mf = function() {
  function a(a, b) {
    for(;;) {
      if(F(b) && 0 < a) {
        var c = a - 1, k = J(b);
        a = c;
        b = k
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(F(a)) {
        a = J(a)
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
}(), nf = function() {
  function a(a, b) {
    mf.a(a, b);
    return b
  }
  function b(a) {
    mf.b(a);
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
function of(a) {
  var b = pf.exec(a);
  return E.a(G(b), a) ? 1 === M(b) ? G(b) : Td(b) : null
}
function qf(a) {
  a = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(a);
  a = null == a ? null : 1 === M(a) ? G(a) : Td(a);
  N.c(a, 0, null);
  N.c(a, 1, null);
  N.c(a, 2, null)
}
function rf(a, b, c, d, e, h, k) {
  D(a, c);
  F(k) && (b.c ? b.c(G(k), a, h) : b.call(null, G(k), a, h));
  c = J(k);
  for(k = ra.b(h);c && (null == k || 0 !== k);) {
    D(a, d), b.c ? b.c(G(c), a, h) : b.call(null, G(c), a, h), c = J(c), k -= 1
  }
  u(ra.b(h)) && (D(a, d), b.c ? b.c("...", a, h) : b.call(null, "...", a, h));
  return D(a, e)
}
var sf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = F(b), h = null, k = 0, l = 0;;) {
      if(l < k) {
        var m = h.la(null, l);
        D(a, m);
        l += 1
      }else {
        if(e = F(e)) {
          h = e, lc(h) ? (e = wb(h), k = xb(h), h = e, m = M(e), e = k, k = m) : (m = G(h), D(a, m), e = J(h), h = null, k = 0), l = 0
        }else {
          return null
        }
      }
    }
  }
  a.p = 1;
  a.g = function(a) {
    var d = G(a);
    a = H(a);
    return b(d, a)
  };
  a.d = b;
  return a
}(), tf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function uf(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return tf[a]
  })), A('"')].join("")
}
var wf = function vf(b, c, d) {
  if(null == b) {
    return D(c, "nil")
  }
  if(void 0 === b) {
    return D(c, "#\x3cundefined\x3e")
  }
  if(w) {
    u(function() {
      var c = Wb.a(d, pa);
      return u(c) ? (c = b ? b.h & 131072 || b.Je ? !0 : b.h ? !1 : v(Za, b) : v(Za, b)) ? bc(b) : c : c
    }()) && (D(c, "^"), vf(bc(b), c, d), D(c, " "));
    if(null == b) {
      return D(c, "nil")
    }
    if(b.ja) {
      return b.na(b, c, d)
    }
    if(b && (b.h & 2147483648 || b.W)) {
      return b.M(null, c, d)
    }
    if(ta(b) === Boolean || "number" === typeof b) {
      return D(c, "" + A(b))
    }
    if(b instanceof Array) {
      return rf(c, vf, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if("string" == typeof b) {
      return u(oa.b(d)) ? D(c, uf(b)) : D(c, b)
    }
    if(Zb(b)) {
      return sf.d(c, K(["#\x3c", "" + A(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + A(b);;) {
          if(M(d) < c) {
            d = [A("0"), A(d)].join("")
          }else {
            return d
          }
        }
      };
      return sf.d(c, K(['#inst "', "" + A(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return u(b instanceof RegExp) ? sf.d(c, K(['#"', b.source, '"'], 0)) : (b ? b.h & 2147483648 || b.W || (b.h ? 0 : v(nb, b)) : v(nb, b)) ? ob(b, c, d) : w ? sf.d(c, K(["#\x3c", "" + A(b), "\x3e"], 0)) : null
  }
  return null
}, xf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = ma();
    if(fc(a)) {
      b = ""
    }else {
      var e = A, h = new ja, k = new zb(h);
      a: {
        wf(G(a), k, b);
        a = F(J(a));
        for(var l = null, m = 0, r = 0;;) {
          if(r < m) {
            var x = l.la(null, r);
            D(k, " ");
            wf(x, k, b);
            r += 1
          }else {
            if(a = F(a)) {
              l = a, lc(l) ? (a = wb(l), m = xb(l), l = a, x = M(a), a = m, m = x) : (x = G(l), D(k, " "), wf(x, k, b), a = J(l), l = null, m = 0), r = 0
            }else {
              break a
            }
          }
        }
      }
      mb(k);
      b = "" + e(h)
    }
    return b
  }
  a.p = 0;
  a.g = function(a) {
    a = F(a);
    return b(a)
  };
  a.d = b;
  return a
}();
Ze.prototype.W = !0;
Ze.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
Jb.prototype.W = !0;
Jb.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
Xd.prototype.W = !0;
Xd.prototype.M = function(a, b, c) {
  return rf(b, wf, "[", " ", "]", c, this)
};
$c.prototype.W = !0;
$c.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
Ve.prototype.W = !0;
Ve.prototype.M = function(a, b, c) {
  return rf(b, function(a) {
    return rf(b, wf, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
q.prototype.W = !0;
q.prototype.M = function(a, b, c) {
  return rf(b, function(a) {
    return rf(b, wf, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
be.prototype.W = !0;
be.prototype.M = function(a, b, c) {
  return rf(b, wf, "#queue [", " ", "]", c, F(this))
};
Vc.prototype.W = !0;
Vc.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
Qb.prototype.W = !0;
Qb.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
df.prototype.W = !0;
df.prototype.M = function(a, b, c) {
  return rf(b, wf, "#{", " ", "}", c, this)
};
Be.prototype.W = !0;
Be.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
U.prototype.W = !0;
U.prototype.M = function(a, b, c) {
  return rf(b, wf, "[", " ", "]", c, this)
};
Vd.prototype.W = !0;
Vd.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
De.prototype.W = !0;
De.prototype.M = function(a, b, c) {
  return rf(b, function(a) {
    return rf(b, wf, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
af.prototype.W = !0;
af.prototype.M = function(a, b, c) {
  return rf(b, wf, "#{", " ", "}", c, this)
};
P.prototype.W = !0;
P.prototype.M = function(a, b, c) {
  return rf(b, wf, "[", " ", "]", c, this)
};
Pc.prototype.W = !0;
Pc.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
he.prototype.W = !0;
he.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
Qc.prototype.W = !0;
Qc.prototype.M = function(a, b) {
  return D(b, "()")
};
Je.prototype.W = !0;
Je.prototype.M = function(a, b, c) {
  return rf(b, wf, "[", " ", "]", c, this)
};
Tc.prototype.W = !0;
Tc.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
kf.prototype.W = !0;
kf.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
Ce.prototype.W = !0;
Ce.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
He.prototype.W = !0;
He.prototype.M = function(a, b, c) {
  return rf(b, wf, "(", " ", ")", c, this)
};
P.prototype.Nc = !0;
P.prototype.Oc = function(a, b) {
  return tc.a(this, b)
};
Xd.prototype.Nc = !0;
Xd.prototype.Oc = function(a, b) {
  return tc.a(this, b)
};
S.prototype.Nc = !0;
S.prototype.Oc = function(a, b) {
  return Bb(this, b)
};
Eb.prototype.Nc = !0;
Eb.prototype.Oc = function(a, b) {
  return Bb(this, b)
};
function yf(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.gf = c;
  this.hf = d;
  this.h = 2153938944;
  this.u = 2
}
g = yf.prototype;
g.N = function() {
  return this[ca] || (this[ca] = ++da)
};
g.ce = function(a, b, c) {
  a = F(this.hf);
  for(var d = null, e = 0, h = 0;;) {
    if(h < e) {
      var k = d.la(null, h), l = N.c(k, 0, null), k = N.c(k, 1, null);
      k.o ? k.o(l, this, b, c) : k.call(null, l, this, b, c);
      h += 1
    }else {
      if(a = F(a)) {
        lc(a) ? (d = wb(a), a = xb(a), l = d, e = M(d), d = l) : (d = G(a), l = N.c(d, 0, null), k = N.c(d, 1, null), k.o ? k.o(l, this, b, c) : k.call(null, l, this, b, c), a = J(a), d = null, e = 0), h = 0
      }else {
        return null
      }
    }
  }
};
g.M = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  wf(this.state, b, c);
  return D(b, "\x3e")
};
g.G = f("j");
g.Ge = f("state");
g.J = function(a, b) {
  return this === b
};
var Af = function() {
  function a(a) {
    return new yf(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var l = null;
      1 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, l)
    }
    function b(a, c) {
      var d = oc(c) ? ac.a(Ye, c) : c, e = Wb.a(d, zf), d = Wb.a(d, pa);
      return new yf(a, d, e, null)
    }
    a.p = 1;
    a.g = function(a) {
      var c = G(a);
      a = H(a);
      return b(c, a)
    };
    a.d = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.d(b, K(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.g = c.g;
  b.b = a;
  b.d = c.d;
  return b
}();
function Bf(a, b) {
  var c = a.gf;
  if(u(c) && !u(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(xf.d(K([p(Sc(new Eb(null, "validate", "validate", 1233162959, null), new Eb(null, "new-value", "new-value", 972165309, null)), new q(null, 2, [s, 6982, t, 33], null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  pb(a, c, b);
  return b
}
var Cf = function() {
  function a(a, b, c, d, e) {
    return Bf(a, b.o ? b.o(a.state, c, d, e) : b.call(null, a.state, c, d, e))
  }
  function b(a, b, c, d) {
    return Bf(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return Bf(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return Bf(a, b.b ? b.b(a.state) : b.call(null, a.state))
  }
  var e = null, h = function() {
    function a(c, d, e, h, k, T) {
      var V = null;
      5 < arguments.length && (V = K(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, h, k, V)
    }
    function b(a, c, d, e, h, l) {
      return Bf(a, ac.d(c, a.state, d, e, h, K([l], 0)))
    }
    a.p = 5;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var d = G(a);
      a = J(a);
      var e = G(a);
      a = J(a);
      var h = G(a);
      a = J(a);
      var k = G(a);
      a = H(a);
      return b(c, d, e, h, k, a)
    };
    a.d = b;
    return a
  }(), e = function(e, l, m, r, x, z) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, l);
      case 3:
        return c.call(this, e, l, m);
      case 4:
        return b.call(this, e, l, m, r);
      case 5:
        return a.call(this, e, l, m, r, x);
      default:
        return h.d(e, l, m, r, x, K(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 5;
  e.g = h.g;
  e.a = d;
  e.c = c;
  e.o = b;
  e.O = a;
  e.d = h.d;
  return e
}(), Df = null, Ef = function() {
  function a(a) {
    null == Df && (Df = Af.b(0));
    return Ib.b([A(a), A(Cf.a(Df, Kb))].join(""))
  }
  function b() {
    return c.b("G__")
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.A = b;
  c.b = a;
  return c
}();
function Ff(a) {
  var b = W;
  return xc.c(function(a, d) {
    var e = b.b ? b.b(d) : b.call(null, d);
    return O.c(a, e, Ub.a(Wb.c(a, e, p(Rd, new q(null, 2, [s, 7254, t, 40], null))), d))
  }, p(le, new q(null, 2, [s, 7255, t, 5], null)), a)
}
function Gf(a) {
  this.Sd = a;
  this.u = 0;
  this.h = 2153775104
}
Gf.prototype.N = function() {
  return ea(xf.d(K([this], 0)))
};
Gf.prototype.M = function(a, b) {
  return D(b, [A('#uuid "'), A(this.Sd), A('"')].join(""))
};
Gf.prototype.J = function(a, b) {
  return b instanceof Gf && this.Sd === b.Sd
};
function Hf(a, b, c) {
  this.message = a;
  this.data = b;
  this.If = c
}
Hf.prototype = Error();
Hf.prototype.constructor = Hf;
var If = function() {
  function a(a, b, c) {
    return new Hf(a, b, c)
  }
  function b(a, b) {
    return new Hf(a, b, null)
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
var qa = new S(null, "dup", "dup"), Jf = new S(null, "ts", "ts"), Db = new S(null, "default", "default"), Kf = new S(null, "is", "is"), Lf = new S(null, "ansl", "ansl"), Mf = new S("cljs.core.logic.protocols", "id", "cljs.core.logic.protocols/id"), Nf = new S(null, "eset", "eset"), Of = new S("cljs.core.logic", "fd", "cljs.core.logic/fd"), Pf = new S("cljs.core.logic", "subst", "cljs.core.logic/subst"), Qf = new S("cljs.core.logic", "not-found", "cljs.core.logic/not-found"), Rf = new S(null, "cqs", 
"cqs"), Sf = new S(null, "a", "a"), Tf = new S("cljs.core.logic", "no-prop", "cljs.core.logic/no-prop"), na = new S(null, "flush-on-newline", "flush-on-newline"), Uf = new S("cljs.core.logic", "strategy", "cljs.core.logic/strategy"), Vf = new S(null, "km", "km"), t = new S(null, "end-column", "end-column"), Wf = new S(null, "f", "f"), Xf = new S("cljs.core.logic", "ff", "cljs.core.logic/ff"), Yf = new S(null, "ansv*", "ansv*"), Zf = new S(null, "vs", "vs"), $f = new S(null, "max", "max"), ag = new S(null, 
"cid", "cid"), bg = new S(null, "running", "running"), cg = new S(null, "coll", "coll"), dg = new S(null, "column", "column"), eg = new S(null, "lower", "lower"), fg = new S(null, "cm", "cm"), gg = new S(null, "oc", "oc"), hg = new S(null, "cq", "cq"), ig = new S(null, "cache", "cache"), ra = new S(null, "print-length", "print-length"), jg = new S("cljs.core.logic", "root", "cljs.core.logic/root"), w = new S(null, "else", "else"), oa = new S(null, "readably", "readably"), zf = new S(null, "validator", 
"validator"), pa = new S(null, "meta", "meta"), kg = new S(null, "index", "index"), lg = new S(null, "min", "min"), mg = new S(null, "v", "v"), ng = new S("cljs.core.logic", "unbound", "cljs.core.logic/unbound"), og = new S(null, "lhs", "lhs"), pg = new S(null, "line", "line"), qg = new S(null, "upper", "upper"), s = new S(null, "end-line", "end-line"), rg = new S(null, "doms", "doms"), sg = new S(null, "rhs", "rhs"), tg = new S(null, "cs", "cs"), ug = new S(null, "s", "s");
var X = {}, vg, wg = {}, xg = {};
function yg(a) {
  if(a ? a.Oe : a) {
    return a.Oe(a)
  }
  var b;
  b = yg[n(null == a ? null : a)];
  if(!b && (b = yg._, !b)) {
    throw y("IUninitialized.-uninitialized", a);
  }
  return b.call(null, a)
}
function zg(a, b, c) {
  if(a ? a.Jd : a) {
    return a.Jd(0, b, c)
  }
  var d;
  d = zg[n(null == a ? null : a)];
  if(!d && (d = zg._, !d)) {
    throw y("IUnifyTerms.unify-terms", a);
  }
  return d.call(null, a, b, c)
}
var Ag = {};
function Bg(a, b, c) {
  if(a ? a.Ne : a) {
    return a.Ne(a, b, c)
  }
  var d;
  d = Bg[n(null == a ? null : a)];
  if(!d && (d = Bg._, !d)) {
    throw y("IUnifyWithRecord.unify-with-record", a);
  }
  return d.call(null, a, b, c)
}
function Cg(a) {
  if(a ? a.Qe : a) {
    return a.qa
  }
  var b;
  b = Cg[n(null == a ? null : a)];
  if(!b && (b = Cg._, !b)) {
    throw y("LConsSeq.lfirst", a);
  }
  return b.call(null, a)
}
function Dg(a) {
  if(a ? a.Re : a) {
    return a.Ha
  }
  var b;
  b = Dg[n(null == a ? null : a)];
  if(!b && (b = Dg._, !b)) {
    throw y("LConsSeq.lnext", a);
  }
  return b.call(null, a)
}
function Eg(a) {
  if(a ? a.te : a) {
    return a.te()
  }
  var b;
  b = Eg[n(null == a ? null : a)];
  if(!b && (b = Eg._, !b)) {
    throw y("LConsPrint.toShortString", a);
  }
  return b.call(null, a)
}
function Fg(a, b, c) {
  if(a ? a.le : a) {
    return a.le(0, b, c)
  }
  var d;
  d = Fg[n(null == a ? null : a)];
  if(!d && (d = Fg._, !d)) {
    throw y("ISubstitutions.ext-no-check", a);
  }
  return d.call(null, a, b, c)
}
function Gg(a, b) {
  if(a ? a.me : a) {
    return a.me(0, b)
  }
  var c;
  c = Gg[n(null == a ? null : a)];
  if(!c && (c = Gg._, !c)) {
    throw y("ISubstitutions.walk", a);
  }
  return c.call(null, a, b)
}
function Hg(a, b) {
  if(a ? a.ke : a) {
    return a.ke(0, b)
  }
  var c;
  c = Hg[n(null == a ? null : a)];
  if(!c && (c = Hg._, !c)) {
    throw y("IReifyTerm.reify-term", a);
  }
  return c.call(null, a, b)
}
function Ig(a, b) {
  if(a ? a.Gc : a) {
    return a.Gc(a, b)
  }
  var c;
  c = Ig[n(null == a ? null : a)];
  if(!c && (c = Ig._, !c)) {
    throw y("IWalkTerm.walk-term", a);
  }
  return c.call(null, a, b)
}
function Jg(a, b, c) {
  if(a ? a.je : a) {
    return a.je(0, b, c)
  }
  var d;
  d = Jg[n(null == a ? null : a)];
  if(!d && (d = Jg._, !d)) {
    throw y("IOccursCheckTerm.occurs-check-term", a);
  }
  return d.call(null, a, b, c)
}
function Kg(a, b) {
  if(a ? a.ee : a) {
    return a.ee(0, b)
  }
  var c;
  c = Kg[n(null == a ? null : a)];
  if(!c && (c = Kg._, !c)) {
    throw y("IBuildTerm.build-term", a);
  }
  return c.call(null, a, b)
}
function Lg(a, b) {
  if(a ? a.Zc : a) {
    return a.Zc(a, b)
  }
  var c;
  c = Lg[n(null == a ? null : a)];
  if(!c && (c = Lg._, !c)) {
    throw y("IBind.bind", a);
  }
  return c.call(null, a, b)
}
function Mg(a, b) {
  if(a ? a.$c : a) {
    return a.$c(a, b)
  }
  var c;
  c = Mg[n(null == a ? null : a)];
  if(!c && (c = Mg._, !c)) {
    throw y("IMPlus.mplus", a);
  }
  return c.call(null, a, b)
}
function Ng(a) {
  if(a ? a.bd : a) {
    return a.bd(a)
  }
  var b;
  b = Ng[n(null == a ? null : a)];
  if(!b && (b = Ng._, !b)) {
    throw y("ITake.take*", a);
  }
  return b.call(null, a)
}
function Og(a) {
  if(a ? a.se : a) {
    return a.se()
  }
  var b;
  b = Og[n(null == a ? null : a)];
  if(!b && (b = Og._, !b)) {
    throw y("ISuspendedStream.ready?", a);
  }
  return b.call(null, a)
}
function Pg(a, b) {
  if(a ? a.pe : a) {
    return a.pe(0, b)
  }
  var c;
  c = Pg[n(null == a ? null : a)];
  if(!c && (c = Pg._, !c)) {
    throw y("ISubstitutionsCLP.root-val", a);
  }
  return c.call(null, a, b)
}
function Qg(a, b) {
  if(a ? a.qe : a) {
    return a.qe(0, b)
  }
  var c;
  c = Qg[n(null == a ? null : a)];
  if(!c && (c = Qg._, !c)) {
    throw y("ISubstitutionsCLP.root-var", a);
  }
  return c.call(null, a, b)
}
function Rg(a, b, c) {
  if(a ? a.ne : a) {
    return a.ne(0, b, c)
  }
  var d;
  d = Rg[n(null == a ? null : a)];
  if(!d && (d = Rg._, !d)) {
    throw y("ISubstitutionsCLP.ext-run-cs", a);
  }
  return d.call(null, a, b, c)
}
function Sg(a, b) {
  if(a ? a.oe : a) {
    return a.oe(0, b)
  }
  var c;
  c = Sg[n(null == a ? null : a)];
  if(!c && (c = Sg._, !c)) {
    throw y("ISubstitutionsCLP.queue", a);
  }
  return c.call(null, a, b)
}
function Tg(a, b, c) {
  if(a ? a.re : a) {
    return a.re(0, b, c)
  }
  var d;
  d = Tg[n(null == a ? null : a)];
  if(!d && (d = Tg._, !d)) {
    throw y("ISubstitutionsCLP.update-var", a);
  }
  return d.call(null, a, b, c)
}
function Ug(a, b, c) {
  if(a ? a.fe : a) {
    return a.fe(0, b, c)
  }
  var d;
  d = Ug[n(null == a ? null : a)];
  if(!d && (d = Ug._, !d)) {
    throw y("IConstraintStore.addc", a);
  }
  return d.call(null, a, b, c)
}
function Vg(a, b, c) {
  if(a ? a.he : a) {
    return a.he(0, b, c)
  }
  var d;
  d = Vg[n(null == a ? null : a)];
  if(!d && (d = Vg._, !d)) {
    throw y("IConstraintStore.remc", a);
  }
  return d.call(null, a, b, c)
}
function Wg(a, b, c) {
  if(a ? a.ie : a) {
    return a.ie(0, b, c)
  }
  var d;
  d = Wg[n(null == a ? null : a)];
  if(!d && (d = Wg._, !d)) {
    throw y("IConstraintStore.runc", a);
  }
  return d.call(null, a, b, c)
}
function Xg(a, b, c, d) {
  if(a ? a.ge : a) {
    return a.ge(0, b, c, d)
  }
  var e;
  e = Xg[n(null == a ? null : a)];
  if(!e && (e = Xg._, !e)) {
    throw y("IConstraintStore.constraints-for", a);
  }
  return e.call(null, a, b, c, d)
}
function Yg(a, b) {
  if(a ? a.vb : a) {
    return a.vb(a, b)
  }
  var c;
  c = Yg[n(null == a ? null : a)];
  if(!c && (c = Yg._, !c)) {
    throw y("IConstraintStep.-step", a);
  }
  return c.call(null, a, b)
}
function Zg(a) {
  if(a ? a.xb : a) {
    return a.xb(a)
  }
  var b;
  b = Zg[n(null == a ? null : a)];
  if(!b && (b = Zg._, !b)) {
    throw y("IRunnable.-runnable?", a);
  }
  return b.call(null, a)
}
var $g = {};
function ah(a) {
  if(a ? a.Ub : a) {
    return a.Ub(a)
  }
  var b;
  b = ah[n(null == a ? null : a)];
  if(!b && (b = ah._, !b)) {
    throw y("IEntailed.-entailed?", a);
  }
  return b.call(null, a)
}
var bh = {};
function ch(a, b) {
  if(a ? a.Pe : a) {
    return a.Pe(a, b)
  }
  var c;
  c = ch[n(null == a ? null : a)];
  if(!c && (c = ch._, !c)) {
    throw y("IWithConstraintId.-with-id", a);
  }
  return c.call(null, a, b)
}
var dh = {};
function eh(a) {
  if(a ? a.Me : a) {
    return a.Me(a)
  }
  var b;
  b = eh[n(null == a ? null : a)];
  if(!b && (b = eh._, !b)) {
    throw y("IConstraintId.-id", a);
  }
  return b.call(null, a)
}
function fh(a) {
  return(a ? u(u(null) ? null : a.Xf) || (a.nc ? 0 : v(dh, a)) : v(dh, a)) ? eh(a) : Mf.b(bc(a))
}
function gh(a) {
  if(a ? a.wb : a) {
    return a.wb(a)
  }
  var b;
  b = gh[n(null == a ? null : a)];
  if(!b && (b = gh._, !b)) {
    throw y("IConstraintWatchedStores.-watched-stores", a);
  }
  return b.call(null, a)
}
function hh(a) {
  if(a ? a.ub : a) {
    return a.ub(a)
  }
  var b;
  b = hh[n(null == a ? null : a)];
  if(!b && (b = hh._, !b)) {
    throw y("IConstraintOp.-rands", a);
  }
  return b.call(null, a)
}
function ih(a) {
  if(a ? a.ad : a) {
    return a.ad(a)
  }
  var b;
  b = ih[n(null == a ? null : a)];
  if(!b && (b = ih._, !b)) {
    throw y("IMemberCount.-member-count", a);
  }
  return b.call(null, a)
}
function jh(a, b) {
  if(a ? a.Fc : a) {
    return a.Fc(a, b)
  }
  var c;
  c = jh[n(null == a ? null : a)];
  if(!c && (c = jh._, !c)) {
    throw y("IForceAnswerTerm.-force-ans", a);
  }
  return c.call(null, a, b)
}
;var kh = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e)
  }
  function b(a, b) {
    throw Error(ac.a(A, b));
  }
  a.p = 1;
  a.g = function(a) {
    G(a);
    a = H(a);
    return b(0, a)
  };
  a.d = b;
  return a
}();
qf("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
qf("([-+]?[0-9]+)/([0-9]+)");
qf("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
qf("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
qf("[0-9A-Fa-f]{2}");
qf("[0-9A-Fa-f]{4}");
function lh(a) {
  if(E.a(3, M(a))) {
    return a
  }
  if(3 < M(a)) {
    return Kc.c(a, 0, 3)
  }
  if(w) {
    for(a = new ja(a);;) {
      if(3 > a.hc.length) {
        a = a.append("0")
      }else {
        return a.toString()
      }
    }
  }else {
    return null
  }
}
function mh(a) {
  var b = 0 === (a % 4 + 4) % 4;
  return u(b) ? (b = sa(0 === (a % 100 + 100) % 100), u(b) ? b : 0 === (a % 400 + 400) % 400) : b
}
var nh = function() {
  var a = p(new P(null, 13, 5, Q, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new q(null, 2, [s, 463, t, 59], null)), b = p(new P(null, 13, 5, Q, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new q(null, 2, [s, 464, t, 59], null));
  return function(c, d) {
    return Wb.a(u(d) ? b : a, c)
  }
}(), pf = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function oh(a) {
  a = parseInt(a);
  return sa(isNaN(a)) ? a : null
}
function ph(a, b, c, d) {
  a <= b && b <= c || kh.d(null, K([[A(d), A(" Failed:  "), A(a), A("\x3c\x3d"), A(b), A("\x3c\x3d"), A(c)].join("")], 0));
  return b
}
function qh(a) {
  var b = of(a);
  N.c(b, 0, null);
  var c = N.c(b, 1, null), d = N.c(b, 2, null), e = N.c(b, 3, null), h = N.c(b, 4, null), k = N.c(b, 5, null), l = N.c(b, 6, null), m = N.c(b, 7, null), r = N.c(b, 8, null), x = N.c(b, 9, null), z = N.c(b, 10, null);
  if(sa(b)) {
    return kh.d(null, K([[A("Unrecognized date/time syntax: "), A(a)].join("")], 0))
  }
  a = oh(c);
  var b = function() {
    var a = oh(d);
    return u(a) ? a : 1
  }(), c = function() {
    var a = oh(e);
    return u(a) ? a : 1
  }(), R = function() {
    var a = oh(h);
    return u(a) ? a : 0
  }(), T = function() {
    var a = oh(k);
    return u(a) ? a : 0
  }(), V = function() {
    var a = oh(l);
    return u(a) ? a : 0
  }(), Z = function() {
    var a = oh(lh(m));
    return u(a) ? a : 0
  }(), r = (E.a(r, "-") ? -1 : 1) * (60 * function() {
    var a = oh(x);
    return u(a) ? a : 0
  }() + function() {
    var a = oh(z);
    return u(a) ? a : 0
  }());
  return p(new P(null, 8, 5, Q, [a, ph(1, b, 12, "timestamp month field must be in range 1..12"), ph(1, c, nh.a ? nh.a(b, mh(a)) : nh.call(null, b, mh(a)), "timestamp day field must be in range 1..last day in month"), ph(0, R, 23, "timestamp hour field must be in range 0..23"), ph(0, T, 59, "timestamp minute field must be in range 0..59"), ph(0, V, E.a(T, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), ph(0, Z, 999, "timestamp millisecond field must be in range 0..999"), r], null), 
  new q(null, 2, [s, 503, t, 17], null))
}
Af.b(p(new q(null, 3, ["inst", function(a) {
  var b;
  if("string" === typeof a) {
    if(b = qh(a), u(b)) {
      a = N.c(b, 0, null);
      var c = N.c(b, 1, null), d = N.c(b, 2, null), e = N.c(b, 3, null), h = N.c(b, 4, null), k = N.c(b, 5, null), l = N.c(b, 6, null);
      b = N.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, h, k, l) - 6E4 * b)
    }else {
      b = kh.d(null, K([[A("Unrecognized date/time syntax: "), A(a)].join("")], 0))
    }
  }else {
    b = kh.d(null, K(["Instance literal expects a string for its timestamp."], 0))
  }
  return b
}, "uuid", function(a) {
  return"string" === typeof a ? new Gf(a) : kh.d(null, K(["UUID literal expects a string as its representation."], 0))
}, "queue", function(a) {
  return kc(a) ? zd(ce, a) : kh.d(null, K(["Queue literal expects a vector for its elements."], 0))
}], null), new q(null, 2, [s, 536, t, 43], null)));
Af.b(null);
function rh(a, b) {
  var c = ac.c(gf, a, b);
  return L(c, yd(pd(function(a) {
    return c === a
  }), b))
}
var sh = function() {
  function a(a, b) {
    for(;;) {
      if(M(b) < M(a)) {
        var c = a;
        a = b;
        b = c
      }else {
        return xc.c(function(a, b) {
          return function(a, c) {
            return rc(b, c) ? a : cc.a(a, c)
          }
        }(a, b), a, a)
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      a = rh(function(a) {
        return-M(a)
      }, Ub.d(e, d, K([a], 0)));
      return xc.c(b, G(a), H(a))
    }
    a.p = 2;
    a.g = function(a) {
      var b = G(a);
      a = J(a);
      var d = G(a);
      a = H(a);
      return c(b, d, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.b = aa();
  b.a = a;
  b.d = c.d;
  return b
}(), th = function() {
  function a(a, b) {
    return M(a) < M(b) ? xc.c(function(a, c) {
      return rc(b, c) ? cc.a(a, c) : a
    }, a, a) : xc.c(cc, a, b)
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      return xc.c(b, a, Ub.a(e, d))
    }
    a.p = 2;
    a.g = function(a) {
      var b = G(a);
      a = J(a);
      var d = G(a);
      a = H(a);
      return c(b, d, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.b = aa();
  b.a = a;
  b.d = c.d;
  return b
}();
p(Rd, new q(null, 2, [s, 22, t, 30], null));
var Y = Of;
function uh(a, b) {
  this.Mb = a;
  this.Pb = b;
  this.u = 0;
  this.h = 2149583122
}
g = uh.prototype;
g.M = function(a, b) {
  return D(b, [A("("), A(this.Mb), A(" . "), A(this.Pb), A(")")].join(""))
};
g.J = function(a, b) {
  return b instanceof uh ? E.a(this.Mb, b.Mb) && E.a(this.Pb, b.Pb) : !1
};
g.kc = f("Mb");
g.Bc = f("Pb");
g.la = function(a, b) {
  if(E.a(1, b)) {
    return this.Pb
  }
  if(E.a(0, b)) {
    return this.Mb
  }
  if(w) {
    throw If.a("Index out of bounds", p(new q(null, 2, [kg, b, cg, this], null), new q(null, 2, [s, 71, t, 65], null)));
  }
  return null
};
g.ta = function(a, b, c) {
  return E.a(1, b) ? this.Pb : E.a(0, b) ? this.Mb : w ? c : null
};
g.S = ba(2);
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return E.a(sg, b) ? this.Pb : E.a(og, b) ? this.Mb : w ? c : null
};
g.toString = function() {
  return[A("("), A(this.Mb), A(" . "), A(this.Pb), A(")")].join("")
};
function vh(a, b) {
  return new uh(a, b)
}
function wh(a, b) {
  return zd(p(Rd, new q(null, 2, [s, 104, t, 16], null)), yd(W, sd.a(function(b) {
    return Qg(a, b)
  }, hh(b))))
}
function xh(a, b) {
  return yd(function(b) {
    return W.b ? W.b(Pg(a, b)) : W.call(null, Pg(a, b))
  }, wh(a, b))
}
function yh(a, b, c, d) {
  this.Xb = a;
  this.Jb = b;
  this.Fb = c;
  this.uc = d;
  this.u = 0;
  this.h = 258
}
g = yh.prototype;
g.S = function() {
  return M(this.Jb)
};
g.fe = function(a, b, c) {
  a = wh(b, c);
  c = (c ? u(u(null) ? null : c.$f) || (c.nc ? 0 : v(bh, c)) : v(bh, c)) ? ch(c, this.Fb) : jd.d(c, O, K([Mf, this.Fb], 0));
  c = xc.c(function(a, b) {
    return function(a, c) {
      return zh.c ? zh.c(a, c, b) : zh.call(null, a, c, b)
    }
  }(a, c), this, a);
  return new yh(c.Xb, c.Jb, this.Fb + 1, this.uc)
};
g.he = function(a, b, c) {
  a = wh(b, c);
  c = fh(c);
  a = xc.c(function(a, b) {
    return function(a, c) {
      var d = cc.a(Wb.a(a, c), b);
      return fc(d) ? Yb.a(a, c) : O.c(a, c, d)
    }
  }(a, c), this.Xb, a);
  c = Yb.a(this.Jb, c);
  return new yh(a, c, this.Fb, this.uc)
};
g.ie = function(a, b, c) {
  return u(c) ? new yh(this.Xb, this.Jb, this.Fb, Ub.a(this.uc, fh(b))) : new yh(this.Xb, this.Jb, this.Fb, cc.a(this.uc, fh(b)))
};
g.ge = function(a, b, c, d) {
  a = Wb.a(this.Xb, Qg(b, c));
  return u(a) ? yd(function(a) {
    return gh(a).call(null, d)
  }, sd.a(this.Jb, yd(pd(this.uc), a))) : null
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return E.a(bg, b) ? this.uc : E.a(ag, b) ? this.Fb : E.a(fg, b) ? this.Jb : E.a(Vf, b) ? this.Xb : w ? c : null
};
function zh(a, b, c) {
  if(!u(W.b ? W.b(b) : W.call(null, b))) {
    throw If.a([A("constraint store assoc expected logic var key: "), A(b)].join(""), p(le, new q(null, 2, [s, 181, t, 72], null)));
  }
  var d = a.Jb, e = a.Xb, h = a.Fb;
  b = Ad.c(e, p(new P(null, 1, 5, Q, [b], null), new q(null, 2, [s, 185, t, 30], null)), rd.a(function(a, b, c) {
    return function(a) {
      return Ub.a(a, c)
    }
  }(d, e, h), cf));
  c = O.c(d, h, c);
  return new yh(b, c, h, bg.b(a))
}
function Ah(a, b, c, d, e) {
  this.m = a;
  this.lb = b;
  this.zb = c;
  this.ga = d;
  this.V = e;
  this.u = 0;
  this.h = 2229667594;
  3 < arguments.length ? (this.ga = d, this.V = e) : this.V = this.ga = null
}
g = Ah.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Lc(this)
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return Uc(b, mg) ? this.m : Uc(b, rg) ? this.lb : Uc(b, Nf) ? this.zb : w ? Wb.c(this.V, b, c) : null
};
g.Ya = function(a, b, c) {
  return(Uc.a ? Uc.a(mg, b) : Uc.call(null, mg, b)) ? new Ah(c, this.lb, this.zb, this.ga, this.V, null) : (Uc.a ? Uc.a(rg, b) : Uc.call(null, rg, b)) ? new Ah(this.m, c, this.zb, this.ga, this.V, null) : (Uc.a ? Uc.a(Nf, b) : Uc.call(null, Nf, b)) ? new Ah(this.m, this.lb, c, this.ga, this.V, null) : new Ah(this.m, this.lb, this.zb, this.ga, O.c(this.V, b, c), null)
};
g.M = function(a, b, c) {
  return rf(b, function(a) {
    return rf(b, wf, "", " ", "", c, a)
  }, "#cljs.core.logic.SubstValue{", ", ", "}", c, ed.a(new P(null, 3, 5, Q, [new P(null, 2, 5, Q, [mg, this.m], null), new P(null, 2, 5, Q, [rg, this.lb], null), new P(null, 2, 5, Q, [Nf, this.zb], null)], null), this.V))
};
g.R = function(a, b) {
  return kc(b) ? Ma(this, C.a(b, 0), C.a(b, 1)) : xc.c(B, this, b)
};
g.toString = function() {
  return"" + A(this.m)
};
g.Q = function() {
  return F(ed.a(new P(null, 3, 5, Q, [new P(null, 2, 5, Q, [mg, this.m], null), new P(null, 2, 5, Q, [rg, this.lb], null), new P(null, 2, 5, Q, [Nf, this.zb], null)], null), this.V))
};
g.S = function() {
  return 3 + M(this.V)
};
g.J = function(a, b) {
  var c;
  c = u(b) ? (c = this.constructor === b.constructor) ? fe(this, b) : c : b;
  return u(c) ? !0 : !1
};
g.H = function(a, b) {
  return new Ah(this.m, this.lb, this.zb, b, this.V, this.n)
};
g.G = f("ga");
g.jc = function(a, b) {
  return rc(new af(null, new q(null, 3, [Nf, null, mg, null, rg, null], null), null), b) ? Yb.a(p(zd(le, this), this.ga), b) : new Ah(this.m, this.lb, this.zb, this.ga, ld(Yb.a(this.V, b)), null)
};
function Bh(a) {
  return a instanceof Ah
}
var Ch = function() {
  function a(a, b, c, d) {
    return p(new Ah(a, b, c), d)
  }
  function b(a, b, c) {
    return p(new Ah(a, b, null), c)
  }
  function c(a, b) {
    return new Ah(a, b, null)
  }
  function d(a) {
    return new Ah(a, null, null)
  }
  var e = null, e = function(e, k, l, m) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, k);
      case 3:
        return b.call(this, e, k, l);
      case 4:
        return a.call(this, e, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.b = d;
  e.a = c;
  e.c = b;
  e.o = a;
  return e
}();
function Dh(a, b, c) {
  c = Gg(a, c);
  return Jg(c, b, a)
}
function Eh(a, b, c) {
  if(b === c) {
    return a
  }
  var d = Gg(a, b), e = Gg(a, c);
  return u(function() {
    var a = W.b ? W.b(d) : W.call(null, d);
    return u(a) ? E.a(d, e) : a
  }()) ? a : u(function() {
    var a = sa(W.b ? W.b(d) : W.call(null, d));
    return a ? W.b ? W.b(e) : W.call(null, e) : a
  }()) ? zg(e, d, a) : zg(d, e, a)
}
var Fh = lf.b(100);
a: {
  for(var Gh = sd.c(qd.a(Ib, A), wd.b("_"), Fh), Hh = gd(p(le, new q(null, 2, [s, 6321, t, 28], null))), Ih = F(Fh), Jh = F(Gh);;) {
    if(Ih && Jh) {
      var Kh = hd(Hh, G(Ih), G(Jh)), Lh = J(Ih), Mh = J(Jh), Hh = Kh, Ih = Lh, Jh = Mh
    }else {
      sb(Hh);
      break a
    }
  }
}
function Nh(a, b) {
  var c = Gg(a, b);
  return Hg(c, a)
}
function Oh(a, b) {
  return Kg(b, a)
}
function Ph(a, b, c, d, e, h, k, l) {
  this.q = a;
  this.rb = b;
  this.Cb = c;
  this.ab = d;
  this.jb = e;
  this.Ga = h;
  this.hb = k;
  this.$ = l;
  this.u = 0;
  this.h = 2491150
}
g = Ph.prototype;
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return E.a(gg, b) ? this.hb : E.a(Rf, b) ? this.Ga : E.a(hg, b) ? this.jb : E.a(tg, b) ? this.ab : E.a(Jf, b) ? this.Cb : E.a(Zf, b) ? this.rb : E.a(ug, b) ? this.q : w ? c : null
};
g.zc = function(a, b) {
  return rc(new af(null, new q(null, 6, [Rf, null, Zf, null, gg, null, hg, null, tg, null, ug, null], null), null), b)
};
g.Ya = function(a, b, c) {
  if(E.a(gg, b)) {
    return new Ph(this.q, this.rb, this.Cb, this.ab, this.jb, this.Ga, c, this.$)
  }
  if(E.a(Rf, b)) {
    return new Ph(this.q, this.rb, this.Cb, this.ab, this.jb, c, this.hb, this.$)
  }
  if(E.a(hg, b)) {
    return new Ph(this.q, this.rb, this.Cb, this.ab, c, this.Ga, this.hb, this.$)
  }
  if(E.a(tg, b)) {
    return new Ph(this.q, this.rb, this.Cb, c, this.jb, this.Ga, this.hb, this.$)
  }
  if(E.a(Jf, b)) {
    return new Ph(this.q, this.rb, c, this.ab, this.jb, this.Ga, this.hb, this.$)
  }
  if(E.a(Zf, b)) {
    return new Ph(this.q, c, this.Cb, this.ab, this.jb, this.Ga, this.hb, this.$)
  }
  if(E.a(ug, b)) {
    return new Ph(c, this.rb, this.Cb, this.ab, this.jb, this.Ga, this.hb, this.$)
  }
  if(w) {
    throw If.a([A("Substitutions has no field for key"), A(b)].join(""), p(le, new q(null, 2, [s, 340, t, 69], null)));
  }
  return null
};
g.$c = function(a, b) {
  return Qh.a ? Qh.a(this, b) : Qh.call(null, this, b)
};
g.Zc = function(a, b) {
  return b.b ? b.b(this) : b.call(null, this)
};
g.bd = function() {
  return this
};
g.R = function(a, b) {
  var c = N.c(b, 0, null), d = N.c(b, 1, null);
  if(u(W.b ? W.b(c) : W.call(null, c))) {
    return O.c(this, c, d)
  }
  throw If.a("" + A("key must be a logic var"), p(le, new q(null, 2, [s, 323, t, 56], null)));
};
g.toString = function() {
  return"" + A(this.q)
};
g.S = function() {
  return M(this.q)
};
g.J = function(a, b) {
  return this === b || b instanceof Ph && E.a(this.q, b.q)
};
g.le = function(a, b, c) {
  a = sa(W.b ? W.b(c) : W.call(null, c)) ? p(b, O.c(bc(b), jg, !0)) : b;
  return new Ph(O.c(this.q, a, c), u(this.rb) ? Ub.a(this.rb, a) : null, this.Cb, this.ab, this.jb, this.Ga, this.hb, this.$)
};
g.me = function(a, b) {
  if(u(Rh.b ? Rh.b(b) : Rh.call(null, b))) {
    for(var c = b, d = sc(this.q, b);;) {
      if(null == d) {
        return c
      }
      c = Qa(d);
      d = Ra(d);
      if(sa(Rh.b ? Rh.b(d) : Rh.call(null, d))) {
        if(Bh(d)) {
          var e = mg.b(d);
          return Uc(e, ng) ? p(c, O.c(bc(d), ng, !0)) : e
        }
        return d
      }
      c = d;
      d = sc(this.q, d)
    }
  }else {
    return b
  }
};
g.H = function(a, b) {
  return new Ph(this.q, this.rb, this.Cb, this.ab, this.jb, this.Ga, this.hb, b)
};
g.G = f("$");
g.T = function() {
  return Sh
};
g.pe = function(a, b) {
  if(u(W.b ? W.b(b) : W.call(null, b))) {
    var c = sc(this.q, b);
    N.c(c, 0, null);
    N.c(c, 1, null);
    for(var d = b;;) {
      var e = c;
      N.c(e, 0, null);
      c = N.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(sa(W.b ? W.b(c) : W.call(null, c))) {
        return c
      }
      if(w) {
        d = c, c = sc(this.q, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
g.qe = function(a, b) {
  if(u(W.b ? W.b(b) : W.call(null, b))) {
    if(u(jg.b(bc(b)))) {
      return b
    }
    var c = sc(this.q, b);
    N.c(c, 0, null);
    N.c(c, 1, null);
    for(var d = b;;) {
      var e = c, h = N.c(e, 0, null), c = N.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(sa(W.b ? W.b(c) : W.call(null, c))) {
        return Bh(c) ? p(h, bc(c)) : h
      }
      if(w) {
        d = c, c = sc(this.q, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
g.ne = function(a, b, c) {
  b = Qg(this, b);
  a = u(W.b ? W.b(c) : W.call(null, c)) ? p(new P(null, 2, 5, Q, [b, Qg(this, c)], null), new q(null, 2, [s, 396, t, 43], null)) : p(new P(null, 1, 5, Q, [b], null), new q(null, 2, [s, 397, t, 19], null));
  if(u(this.hb)) {
    var d;
    d = this.hb;
    d = u(d) ? Dh(this, b, Bh(c) ? c.m : c) : d;
    c = u(d) ? null : Fg(this, b, c)
  }else {
    c = Fg(this, b, c)
  }
  return u(c) ? (Th.c ? Th.c(a, this.ab, Pf) : Th.call(null, a, this.ab, Pf)).call(null, c) : null
};
g.oe = function(a, b) {
  var c = this, d = fh(b);
  return sa(c.Ga.b ? c.Ga.b(d) : c.Ga.call(null, d)) ? O.c(O.c(this, hg, Ub.a(function() {
    var a = c.jb;
    return u(a) ? a : p(Rd, new q(null, 2, [s, 408, t, 39], null))
  }(), b)), Rf, Ub.a(c.Ga, d)) : this
};
g.re = function(a, b, c) {
  return O.c(this, ug, O.c(this.q, b, c))
};
function Uh(a, b, c, d) {
  return kd.a(c, Tf) ? xc.c(function(a, b) {
    var k = Qg(a, b);
    return rc(c, k) ? a : d.a ? d.a(a, k) : d.call(null, a, k)
  }, a, b.zb) : a
}
var Vh = function() {
  function a(a, b, h, k, l) {
    var m = Pg(a, b), r = Bh(m) ? Tg(a, b, O.c(m, rg, O.c(m.lb, h, k))) : function() {
      var c = u(W.b ? W.b(m) : W.call(null, m)) ? ng : m;
      return Fg(a, b, Ch.a(c, p(new me([h, k]), new q(null, 2, [s, 470, t, 58], null))))
    }();
    return Uh(r, m, l, function(a, d) {
      return c.O(a, d, h, k, Ub.a(u(l) ? l : cf, b))
    })
  }
  function b(a, b, h, k) {
    b = Qg(a, b);
    return c.O(a, b, h, k, null)
  }
  var c = null, c = function(c, e, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, h, k);
      case 5:
        return a.call(this, c, e, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.O = a;
  return c
}(), Wh = function() {
  function a(a, b, h, k) {
    var l = Pg(a, b), m = Bh(l) ? function() {
      var c = Yb.a(l.lb, h);
      return 0 === M(c) && kd.a(l.m, ng) ? Tg(a, b, l.m) : Tg(a, b, O.c(l, rg, c))
    }() : a;
    return Uh(m, l, k, function(a, d) {
      return c.o(a, d, h, Ub.a(u(k) ? k : cf, b))
    })
  }
  function b(a, b, h) {
    b = Qg(a, b);
    return c.o(a, b, h, null)
  }
  var c = null, c = function(c, e, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, h);
      case 4:
        return a.call(this, c, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.o = a;
  return c
}();
function Xh(a, b) {
  var c = Pg(a, b);
  if(Bh(c)) {
    var d = mg.b(c);
    return kd.a(d, ng) ? d : Of.b ? Of.b(rg.b(c)) : Of.call(null, rg.b(c))
  }
  return sa(W.b ? W.b(c) : W.call(null, c)) ? c : null
}
var Sh = function() {
  function a(a, b) {
    return new Ph(a, null, null, b, null, cf, !0, null)
  }
  function b(a) {
    return d.a(a, new yh(p(le, new q(null, 2, [s, 190, t, 22], null)), p(le, new q(null, 2, [s, 190, t, 25], null)), 0, cf))
  }
  function c() {
    return d.b(p(le, new q(null, 2, [s, 515, t, 16], null)))
  }
  var d = null, d = function(d, h) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.A = c;
  d.b = b;
  d.a = a;
  return d
}().A();
function W(a) {
  return a ? u(u(null) ? null : a.Zf) ? !0 : a.nc ? !1 : v(xg, a) : v(xg, a)
}
function Rh(a) {
  var b = W(a);
  return b ? b : a ? u(u(null) ? null : a.Wf) ? !0 : a.nc ? !1 : v(wg, a) : v(wg, a)
}
function Yh(a, b, c, d) {
  this.qa = a;
  this.Ha = b;
  this.Ca = c;
  this.j = d;
  this.u = 0;
  this.h = 2154168320
}
g = Yh.prototype;
g.ke = function(a, b) {
  for(var c = this, d = b;;) {
    if(u(Zh.b ? Zh.b(c) : Zh.call(null, c))) {
      var e = Dg(c), d = Nh(d, Cg(c)), c = e
    }else {
      return Nh(d, c)
    }
  }
};
g.N = function() {
  -1 === this.Ca && (this.Ca = 31 * Gb(this.Ha) + Gb(this.qa));
  return this.Ca
};
g.Jd = function(a, b, c) {
  if(ic(b)) {
    for(a = this, b = F(b);;) {
      if(null != b) {
        if(u(Zh.b ? Zh.b(a) : Zh.call(null, a))) {
          var d = Eh(c, a.qa, G(b));
          if(u(d)) {
            c = d, a = a.Ha, b = J(b)
          }else {
            return null
          }
        }else {
          return Eh(c, a, b)
        }
      }else {
        return W(a) ? (d = Eh(c, a, I), u(d) ? c = d : Eh(c, a, null)) : null
      }
    }
  }else {
    if(u(Zh.b ? Zh.b(b) : Zh.call(null, b))) {
      for(a = this;;) {
        if(W(a)) {
          return Eh(c, a, b)
        }
        if(W(b)) {
          return Eh(c, b, a)
        }
        d = Zh.b ? Zh.b(a) : Zh.call(null, a);
        d = u(d) ? Zh.b ? Zh.b(b) : Zh.call(null, b) : d;
        if(u(d)) {
          if(d = Eh(c, a.qa, b.qa), u(d)) {
            c = d, b = b.Ha, a = a.Ha
          }else {
            return null
          }
        }else {
          return w ? Eh(c, a, b) : null
        }
      }
    }else {
      return null
    }
  }
};
g.Qe = f("qa");
g.Re = f("Ha");
g.M = function(a, b) {
  return D(b, "" + A(this))
};
g.Gc = function(a, b) {
  return $h.a ? $h.a(b.b ? b.b(Cg(this)) : b.call(null, Cg(this)), b.b ? b.b(Dg(this)) : b.call(null, Dg(this))) : $h.call(null, b.b ? b.b(Cg(this)) : b.call(null, Cg(this)), b.b ? b.b(Dg(this)) : b.call(null, Dg(this)))
};
g.toString = function() {
  return this.Ha instanceof Yh ? [A("("), A(this.qa), A(" "), A(Eg(this.Ha)), A(")")].join("") : w ? [A("("), A(this.qa), A(" . "), A(this.Ha), A(")")].join("") : null
};
g.te = function() {
  return this.Ha instanceof Yh ? [A(this.qa), A(" "), A(Eg(this.Ha))].join("") : w ? [A(this.qa), A(" . "), A(this.Ha)].join("") : null
};
g.je = function(a, b, c) {
  for(a = this;;) {
    if(u(Zh.b ? Zh.b(a) : Zh.call(null, a))) {
      var d = Dh(c, b, Cg(a));
      if(u(d)) {
        return d
      }
      a = Dg(a)
    }else {
      return Dh(c, b, a)
    }
  }
};
g.J = function(a, b) {
  var c = this === b;
  if(!c && (c = b instanceof Yh)) {
    for(var c = this, d = b;;) {
      if(null == c) {
        return null == d
      }
      if(W(c) || W(d)) {
        return!0
      }
      var e;
      e = Zh.b ? Zh.b(c) : Zh.call(null, c);
      e = u(e) ? Zh.b ? Zh.b(d) : Zh.call(null, d) : e;
      if(u(e)) {
        e = Cg(c);
        var h = Cg(d);
        if(e = E.a(e, h) || W(e) || W(h)) {
          c = Dg(c), d = Dg(d)
        }else {
          return e
        }
      }else {
        return w ? E.a(c, d) : null
      }
    }
  }else {
    return c
  }
};
g.H = function(a, b) {
  return new Yh(this.qa, this.Ha, this.Ca, b)
};
g.G = f("j");
g.ee = function(a, b) {
  for(var c = this, d = b;;) {
    if(u(Zh.b ? Zh.b(c) : Zh.call(null, c))) {
      var e = Dg(c), d = Oh(d, Cg(c)), c = e
    }else {
      return Kg(c, d)
    }
  }
};
function $h(a, b) {
  return gc(b) || null == b ? L(a, F(b)) : new Yh(a, b, -1, null)
}
function Zh(a) {
  return a instanceof Yh
}
function ai(a, b, c) {
  if(ic(b)) {
    if(Nb(a) && Nb(b) && !E.a(M(a), M(b))) {
      return null
    }
    a = a.Q(null);
    for(b = b.Q(null);;) {
      if(null != a) {
        if(null != b) {
          if(c = Eh(c, G(a), G(b)), u(c)) {
            a = J(a), b = J(b)
          }else {
            return null
          }
        }else {
          return null
        }
      }else {
        return null != b ? null : c
      }
    }
  }else {
    return Zh(b) ? b.Jd(0, a, c) : null
  }
}
zg._ = function(a, b, c) {
  if(ic(a)) {
    a = ai(a, b, c)
  }else {
    if(jc(a)) {
      if(b ? u(u(null) ? null : b.Yf) || (b.nc ? 0 : v(Ag, b)) : v(Ag, b)) {
        a = Bg(b, a, c)
      }else {
        if(jc(b)) {
          a: {
            if(E.a(M(a), M(b))) {
              for(var d = $e(a);;) {
                if(F(d)) {
                  var e = G(d), h = Wb.c(b, e, Qf);
                  if(Uc(h, Qf)) {
                    a = null;
                    break a
                  }
                  c = Eh(c, Wb.a(a, e), h);
                  if(u(c)) {
                    d = J(d)
                  }else {
                    a = null;
                    break a
                  }
                }else {
                  a = c;
                  break a
                }
              }
              a = void 0
            }else {
              a = null
            }
          }
        }else {
          a = null
        }
      }
    }else {
      a = w ? E.a(a, b) ? c : null : null
    }
  }
  return a
};
zg["null"] = function(a, b, c) {
  return null == b ? c : null
};
Hg._ = function(a, b) {
  if(gc(a)) {
    for(var c = a, d = b;;) {
      if(F(c)) {
        var e = J(c), d = Nh(d, G(c)), c = e
      }else {
        return d
      }
    }
  }else {
    return w ? b : null
  }
};
Hg["null"] = function(a, b) {
  return b
};
function bi(a, b) {
  var c = p, d;
  a: {
    d = a;
    for(var e = yg(d);;) {
      if(F(d)) {
        var h = G(d), k = N.c(h, 0, null), h = N.c(h, 1, null);
        d = J(d);
        e = O.c(e, Ig(b.b ? b.b(k) : b.call(null, k), b), Ig(b.b ? b.b(h) : b.call(null, h), b))
      }else {
        d = e;
        break a
      }
    }
    d = void 0
  }
  return c(d, bc(a))
}
function ci(a, b) {
  var c = p, d;
  a: {
    d = a;
    for(var e = gd(p(le, new q(null, 2, [s, 951, t, 54], null)));;) {
      if(F(d)) {
        var h = G(d), k = N.c(h, 0, null), h = N.c(h, 1, null);
        d = J(d);
        e = hd(e, Ig(b.b ? b.b(k) : b.call(null, k), b), Ig(b.b ? b.b(h) : b.call(null, h), b))
      }else {
        d = sb(e);
        break a
      }
    }
    d = void 0
  }
  return c(d, bc(a))
}
P.prototype.Gc = function(a, b) {
  var c = p, d;
  a: {
    for(var e = this, h = gd(p(Rd, new q(null, 2, [s, 982, t, 45], null)));;) {
      if(F(e)) {
        d = J(e), e = Ig(b.b ? b.b(G(e)) : b.call(null, G(e)), b), h = rb(h, e), e = d
      }else {
        d = sb(h);
        break a
      }
    }
    d = void 0
  }
  return c(d, bc(this))
};
q.prototype.Gc = function(a, b) {
  return ci(this, b)
};
De.prototype.Gc = function(a, b) {
  return ci(this, b)
};
Ig._ = function(a, b) {
  return oc(a) ? p(nf.b(sd.a(function(a) {
    return Ig(b.b ? b.b(a) : b.call(null, a), b)
  }, a)), bc(a)) : (a ? a.h & 67108864 || a.Pf || (a.h ? 0 : v(jb, a)) : v(jb, a)) ? bi(a, b) : w ? b.b ? b.b(a) : b.call(null, a) : null
};
Ig["null"] = function(a, b) {
  return b.b ? b.b(null) : b.call(null, null)
};
Jg._ = function(a, b, c) {
  if(gc(a)) {
    for(;;) {
      if(F(a)) {
        var d = Dh(c, b, G(a));
        if(u(d)) {
          return d
        }
        a = J(a)
      }else {
        return!1
      }
    }
  }else {
    return w ? !1 : null
  }
};
Jg["null"] = ba(!1);
Kg._ = function(a, b) {
  return gc(a) ? xc.c(Oh, b, a) : w ? b : null
};
Kg["null"] = function(a, b) {
  return b
};
var di = function() {
  function a(a, b) {
    return function(e) {
      e = a.b ? a.b(e) : a.call(null, e);
      return u(e) ? b.b ? b.b(e) : b.call(null, e) : e
    }
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 0:
        return od;
      case 2:
        return a.call(this, b, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = function() {
    return od
  };
  b.a = a;
  return b
}();
function ei(a, b) {
  this.qa = a;
  this.Ma = b;
  this.u = 0;
  this.h = 256
}
g = ei.prototype;
g.bd = function() {
  var a = this;
  return new Vc(null, function() {
    return L(a.qa, new Vc(null, function() {
      return Ng(a.Ma)
    }, null, null))
  }, null, null)
};
g.$c = function(a, b) {
  var c = this;
  return new ei(c.qa, function() {
    return Mg(b.A ? b.A() : b.call(null), c.Ma)
  })
};
g.Zc = function(a, b) {
  var c = this;
  return Mg(b.b ? b.b(c.qa) : b.call(null, c.qa), function() {
    return Lg(c.Ma, b)
  })
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return E.a(Sf, b) ? this.qa : w ? c : null
};
function Qh(a, b) {
  return new ei(a, b)
}
Ng["null"] = function() {
  return I
};
Mg["null"] = function(a, b) {
  return b.A ? b.A() : b.call(null)
};
Lg["null"] = ba(null);
Lg._ = function(a, b) {
  if(Zb(a)) {
    return function() {
      return Lg(a.A ? a.A() : a.call(null), b)
    }
  }
  if(w) {
    throw If.a("No protocol method", p(le, new q(null, 2, [s, 1070, t, 55], null)));
  }
  return null
};
Mg._ = function(a, b) {
  return Zb(a) ? function() {
    return Mg(b.A ? b.A() : b.call(null), a)
  } : w ? new ei(a, b) : null
};
Ng._ = function(a) {
  return Zb(a) ? new Vc(null, function() {
    return Ng(a.A ? a.A() : a.call(null))
  }, null, null) : w ? a : null
};
function fi(a) {
  return a
}
function gi(a, b) {
  return function(c) {
    return Rg(c, a, b)
  }
}
function hi(a, b) {
  return function(c) {
    var d = 0 < M(tg.b(c));
    c = Eh(d ? O.c(c, Zf, p(Rd, new q(null, 2, [s, 1109, t, 50], null))) : c, a, b);
    d = d ? Zf.b(c) : null;
    return 0 < M(d) ? (Th.c ? Th.c(d, tg.b(c), Pf) : Th.call(null, d, tg.b(c), Pf)).call(null, O.c(c, Zf, null)) : c
  }
}
function ii(a, b, c, d, e) {
  this.Ca = a;
  this.sb = b;
  this.Ma = c;
  this.ga = d;
  this.V = e;
  this.u = 0;
  this.h = 2229667594;
  3 < arguments.length ? (this.ga = d, this.V = e) : this.V = this.ga = null
}
g = ii.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Lc(this)
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return Uc(b, ig) ? this.Ca : Uc(b, Yf) ? this.sb : Uc(b, Wf) ? this.Ma : w ? Wb.c(this.V, b, c) : null
};
g.Ya = function(a, b, c) {
  return(Uc.a ? Uc.a(ig, b) : Uc.call(null, ig, b)) ? new ii(c, this.sb, this.Ma, this.ga, this.V, null) : (Uc.a ? Uc.a(Yf, b) : Uc.call(null, Yf, b)) ? new ii(this.Ca, c, this.Ma, this.ga, this.V, null) : (Uc.a ? Uc.a(Wf, b) : Uc.call(null, Wf, b)) ? new ii(this.Ca, this.sb, c, this.ga, this.V, null) : new ii(this.Ca, this.sb, this.Ma, this.ga, O.c(this.V, b, c), null)
};
g.M = function(a, b, c) {
  return rf(b, function(a) {
    return rf(b, wf, "", " ", "", c, a)
  }, "#cljs.core.logic.SuspendedStream{", ", ", "}", c, ed.a(new P(null, 3, 5, Q, [new P(null, 2, 5, Q, [ig, this.Ca], null), new P(null, 2, 5, Q, [Yf, this.sb], null), new P(null, 2, 5, Q, [Wf, this.Ma], null)], null), this.V))
};
g.R = function(a, b) {
  return kc(b) ? Ma(this, C.a(b, 0), C.a(b, 1)) : xc.c(B, this, b)
};
g.Q = function() {
  return F(ed.a(new P(null, 3, 5, Q, [new P(null, 2, 5, Q, [ig, this.Ca], null), new P(null, 2, 5, Q, [Yf, this.sb], null), new P(null, 2, 5, Q, [Wf, this.Ma], null)], null), this.V))
};
g.S = function() {
  return 3 + M(this.V)
};
g.J = function(a, b) {
  var c;
  c = u(b) ? (c = this.constructor === b.constructor) ? fe(this, b) : c : b;
  return u(c) ? !0 : !1
};
g.H = function(a, b) {
  return new ii(this.Ca, this.sb, this.Ma, b, this.V, this.n)
};
g.G = f("ga");
g.jc = function(a, b) {
  return rc(new af(null, new q(null, 3, [Wf, null, Yf, null, ig, null], null), null), b) ? Yb.a(p(zd(le, this), this.ga), b) : new ii(this.Ca, this.sb, this.Ma, this.ga, ld(Yb.a(this.V, b)), null)
};
g.se = function() {
  return Lf.b(Ya(this.Ca)) !== this.sb
};
function ji(a, b, c) {
  return new ii(a, b, c)
}
function ki(a, b, c) {
  for(var d = p(Rd, new q(null, 2, [s, 1353, t, 18], null));;) {
    if(null == a) {
      return c.A ? c.A() : c.call(null)
    }
    if(u(Og(G(a)))) {
      return b.b ? b.b(function(a, b) {
        return function() {
          var c = G(a), d = Wf.b(c), e = zd(b, J(a));
          return fc(e) ? d.A ? d.A() : d.call(null) : Mg(d.A ? d.A() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d)) : b.call(null, function(a, b) {
        return function() {
          var c = G(a), d = Wf.b(c), e = zd(b, J(a));
          return fc(e) ? d.A ? d.A() : d.call(null) : Mg(d.A ? d.A() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d))
    }
    if(w) {
      var e = J(a), d = Ub.a(d, G(a));
      a = e
    }else {
      return null
    }
  }
}
P.prototype.bd = function() {
  return ki(this, function(a) {
    return Ng(a)
  }, function() {
    return I
  })
};
P.prototype.$c = function(a, b) {
  var c = this;
  return ki(c, function(a) {
    return Mg(a, b)
  }, function() {
    var a = b.A ? b.A() : b.call(null);
    return kc(a) ? zd(a, c) : Mg(a, function() {
      return c
    })
  })
};
P.prototype.Zc = function(a, b) {
  var c = this;
  return ki(c, function(a) {
    return Lg(a, b)
  }, function() {
    return zd(p(Rd, new q(null, 2, [s, 1440, t, 16], null)), sd.a(function(a) {
      return ji(ig.b(a), Yf.b(a), function() {
        return Lg(Wf.b(a).call(null), b)
      })
    }, c))
  })
};
function li(a) {
  return function(b) {
    b = xc.c(function(a, b) {
      return Fg(a, b, Ch.b(ng))
    }, b, xh(b, a));
    return O.c(b, tg, Ug(tg.b(b), b, a))
  }
}
function mi(a) {
  return function(b) {
    return O.c(b, tg, Vg(tg.b(b), b, a))
  }
}
function ni(a) {
  return function(b) {
    return O.c(b, tg, Wg(tg.b(b), a, !0))
  }
}
function oi(a) {
  return function(b) {
    return O.c(b, tg, Wg(tg.b(b), a, !1))
  }
}
function pi(a) {
  return a ? u(u(null) ? null : a.mc) ? !0 : a.nc ? !1 : v($g, a) : v($g, a)
}
function qi(a, b, c) {
  a = fh(a);
  c = fg.b(tg.b(c)).call(null, a);
  c = u(c) ? c : null == a;
  return u(c) ? ah(b) : c
}
function ri(a) {
  return function(b) {
    var c = Yg(a, b);
    return pi(c) && qi(a, c, b) ? mi(a).call(null, b) : u(Zg(c)) ? (X.f.D.a ? X.f.D.a(ni(a), X.f.D.a ? X.f.D.a(c, oi(a)) : X.f.D.call(null, c, oi(a))) : X.f.D.call(null, ni(a), X.f.D.a ? X.f.D.a(c, oi(a)) : X.f.D.call(null, c, oi(a)))).call(null, b) : b
  }
}
function si(a) {
  for(;;) {
    if(u(a)) {
      var b = hg.b(a);
      if(0 === M(b)) {
        return O.c(a, hg, null)
      }
      b = G(b);
      a = ri(b).call(null, O.c(O.c(a, hg, Wd.a(hg.b(a), 1)), Rf, cc.a(Rf.b(a), fh(b))))
    }else {
      return null
    }
  }
}
function ti(a) {
  return function(b) {
    var c = hg.b(b);
    b = xc.c(function() {
      return function(a, b) {
        return Sg(a, b)
      }
    }(c), O.c(b, hg, u(c) ? c : p(Rd, new q(null, 2, [s, 1558, t, 44], null))), a);
    return u(c) ? b : si(b)
  }
}
var Th = function ui(b, c, d) {
  return 0 === M(c) || null == F(b) ? fi : function(e) {
    var h = Xg(c, e, G(b), d);
    return F(h) ? (X.f.D.a ? X.f.D.a(ti(h), ui(J(b), c, d)) : X.f.D.call(null, ti(h), ui(J(b), c, d))).call(null, e) : ui(J(b), c, d).call(null, e)
  }
}, wi = function vi(b) {
  "undefined" === typeof vg && (vg = function(b, d, e) {
    this.Xa = b;
    this.De = d;
    this.cf = e;
    this.u = 0;
    this.h = 393217
  }, vg.ja = !0, vg.ia = "cljs.core.logic/t18695", vg.na = function(b, d) {
    return D(d, "cljs.core.logic/t18695")
  }, vg.prototype.call = function(b, d) {
    b = this;
    var e = Yg(b.Xa, d);
    if(u(Zg(e))) {
      e = e.b ? e.b(d) : e.call(null, d);
      if(u(e)) {
        var h = Yg(b.Xa, e);
        return pi(h) && !qi(b.Xa, h, e) ? li(b.Xa).call(null, e) : e
      }
      return null
    }
    return li(b.Xa).call(null, d)
  }, vg.prototype.apply = function(b, d) {
    return this.call.apply(this, [this].concat(va(d)))
  }, vg.prototype.b = function(b) {
    var d = Yg(this.Xa, b);
    return u(Zg(d)) ? (b = d.b ? d.b(b) : d.call(null, b), u(b) ? (d = Yg(this.Xa, b), pi(d) && !qi(this.Xa, d, b) ? li(this.Xa).call(null, b) : b) : null) : li(this.Xa).call(null, b)
  }, vg.prototype.G = f("cf"), vg.prototype.H = function(b, d) {
    return new vg(this.Xa, this.De, d)
  });
  return new vg(b, vi, null)
};
function xi(a) {
  return function(b, c) {
    var d = X.f.I.a ? X.f.I.a(a, b) : X.f.I.call(null, a, b), e = X.f.I.a ? X.f.I.a(a, c) : X.f.I.call(null, a, c);
    return ih(d) < ih(e)
  }
}
function yi(a, b, c) {
  b = Uf.b(bc(b));
  return E.a(Xf, b) ? F(wc.a(xi(c), a)) : w ? a : null
}
Yh.prototype.Fc = function() {
  var a = function c(a) {
    return function(e) {
      return Lg(Lg(e, zi.b ? zi.b(Cg(a)) : zi.call(null, Cg(a))), Zh(Dg(a)) ? c(Dg(a)) : fi)
    }
  };
  return a.b ? a.b(this) : a.call(null, this)
};
jh._ = function(a, b) {
  if(ic(a)) {
    var c = function e(a) {
      return u(a) ? function(c) {
        return Lg(Lg(c, zi.b ? zi.b(G(a)) : zi.call(null, G(a))), function(c) {
          var k = yi(J(a), b, c);
          return u(k) ? e(k).call(null, c) : c
        })
      } : fi
    };
    return c.b ? c.b(F(a)) : c.call(null, F(a))
  }
  return jc(a) ? (c = function h(a) {
    return u(a) ? function(b) {
      return Lg(Lg(b, zi.b ? zi.b(Nc(G(a))) : zi.call(null, Nc(G(a)))), h(J(a)))
    } : fi
  }, c.b ? c.b(F(a)) : c.call(null, F(a))) : w ? W(b) ? gi(b, a) : fi : null
};
jh["null"] = function() {
  return fi
};
function zi(a) {
  return function(b) {
    var c;
    c = Gg(b, a);
    if(W(c)) {
      c = jh(W(a) ? Xh(b, a) : a, c)
    }else {
      var d = Qg(b, a);
      c = ic(c) ? jh(yi(c, d, b), d) : jh(c, d)
    }
    return c.call(null, b)
  }
}
;Y = {ve:{}, t:function(a) {
  if(a ? a.Pc : a) {
    return a.Pc(a)
  }
  var b;
  b = Y.t[n(null == a ? null : a)];
  if(!b && (b = Y.t._, !b)) {
    throw y("IInterval.-lb", a);
  }
  return b.call(null, a)
}, B:function(a) {
  if(a ? a.Qc : a) {
    return a.Qc(a)
  }
  var b;
  b = Y.B[n(null == a ? null : a)];
  if(!b && (b = Y.B._, !b)) {
    throw y("IInterval.-ub", a);
  }
  return b.call(null, a)
}, we:{}, Fa:function(a) {
  if(a ? a.Rc : a) {
    return a.Rc(a)
  }
  var b;
  b = Y.Fa[n(null == a ? null : a)];
  if(!b && (b = Y.Fa._, !b)) {
    throw y("IIntervals.-intervals", a);
  }
  return b.call(null, a)
}, ye:{}, yc:function(a) {
  if(a ? a.Xc : a) {
    return a.Xc(a)
  }
  var b;
  b = Y.yc[n(null == a ? null : a)];
  if(!b && (b = Y.yc._, !b)) {
    throw y("ISortedDomain.-drop-one", a);
  }
  return b.call(null, a)
}, Db:function(a, b) {
  if(a ? a.Wc : a) {
    return a.Wc(a, b)
  }
  var c;
  c = Y.Db[n(null == a ? null : a)];
  if(!c && (c = Y.Db._, !c)) {
    throw y("ISortedDomain.-drop-before", a);
  }
  return c.call(null, a, b)
}, Eb:function(a, b) {
  if(a ? a.Yc : a) {
    return a.Yc(a, b)
  }
  var c;
  c = Y.Eb[n(null == a ? null : a)];
  if(!c && (c = Y.Eb._, !c)) {
    throw y("ISortedDomain.-keep-before", a);
  }
  return c.call(null, a, b)
}, xe:{}, ra:function(a, b) {
  if(a ? a.Vc : a) {
    return a.Vc(a, b)
  }
  var c;
  c = Y.ra[n(null == a ? null : a)];
  if(!c && (c = Y.ra._, !c)) {
    throw y("ISet.-member?", a);
  }
  return c.call(null, a, b)
}, Wa:function(a, b) {
  if(a ? a.Tc : a) {
    return a.Tc(a, b)
  }
  var c;
  c = Y.Wa[n(null == a ? null : a)];
  if(!c && (c = Y.Wa._, !c)) {
    throw y("ISet.-disjoint?", a);
  }
  return c.call(null, a, b)
}, Z:function(a, b) {
  if(a ? a.Uc : a) {
    return a.Uc(a, b)
  }
  var c;
  c = Y.Z[n(null == a ? null : a)];
  if(!c && (c = Y.Z._, !c)) {
    throw y("ISet.-intersection", a);
  }
  return c.call(null, a, b)
}, La:function(a, b) {
  if(a ? a.Sc : a) {
    return a.Sc(a, b)
  }
  var c;
  c = Y.La[n(null == a ? null : a)];
  if(!c && (c = Y.La._, !c)) {
    throw y("ISet.-difference", a);
  }
  return c.call(null, a, b)
}, ha:function(a) {
  return vh.a ? vh.a(Y.t(a), Y.B(a)) : vh.call(null, Y.t(a), Y.B(a))
}, Pd:function(a, b) {
  return Bc.a(Y.B(a), Y.t(b))
}, Ue:function(a, b) {
  return Cc.a(Y.B(a), Y.t(b))
}, Od:function(a, b) {
  return Dc.a(Y.t(a), Y.B(b))
}, cg:function(a, b) {
  return Ec.a(Y.t(a), Y.B(b))
}};
function Ai(a, b, c) {
  this.q = a;
  this.min = b;
  this.max = c;
  this.u = 0;
  this.h = 2149581056
}
g = Ai.prototype;
g.M = function(a, b) {
  return D(b, [A("\x3cdomain:"), A(F(ug.b(this))), A("\x3e")].join(""))
};
g.Rc = function() {
  return F(this.q)
};
g.Vc = function(a, b) {
  return u(this.q.b ? this.q.b(b) : this.q.call(null, b)) ? !0 : !1
};
g.Tc = function(a, b) {
  return qc(b) ? u(this.q.b ? this.q.b(b) : this.q.call(null, b)) ? !1 : !0 : b instanceof Ai ? Bc.a(this.max, lg.b(b)) ? !0 : Dc.a(this.min, $f.b(b)) ? !0 : w ? fc(sh.a(this.q, ug.b(b))) : null : w ? Y.Vb.a ? Y.Vb.a(this, b) : Y.Vb.call(null, this, b) : null
};
g.Uc = function(a, b) {
  return qc(b) ? u(Y.ra(this, b)) ? b : null : b instanceof Ai ? Y.qb.b ? Y.qb.b(sh.a(this.q, ug.b(b))) : Y.qb.call(null, sh.a(this.q, ug.b(b))) : w ? Y.mb.a ? Y.mb.a(this, b) : Y.mb.call(null, this, b) : null
};
g.Sc = function(a, b) {
  return qc(b) ? Y.qb.b ? Y.qb.b(cc.a(this.q, b)) : Y.qb.call(null, cc.a(this.q, b)) : b instanceof Ai ? Y.qb.b ? Y.qb.b(th.a(this.q, ug.b(b))) : Y.qb.call(null, th.a(this.q, ug.b(b))) : w ? Y.kb.a ? Y.kb.a(this, b) : Y.kb.call(null, this, b) : null
};
g.Xc = function() {
  var a = cc.a(this.q, this.min), b = M(a);
  return E.a(b, 1) ? G(a) : Dc.a(b, 1) ? new Ai(a, G(a), this.max) : null
};
g.Wc = function(a, b) {
  return ac.a(Y.domain, vd(function(a) {
    return Bc.a(a, b)
  }, this.q))
};
g.Yc = function(a, b) {
  return ac.a(Y.domain, jf(function(a) {
    return Bc.a(a, b)
  }, this.q))
};
g.Pc = f("min");
g.Qc = f("max");
g.ad = function() {
  return M(this.q)
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return E.a($f, b) ? this.max : E.a(lg, b) ? this.min : E.a(ug, b) ? this.q : w ? c : null
};
g.J = function(a, b) {
  return u(Y.Md.b ? Y.Md.b(b) : Y.Md.call(null, b)) ? E.a(ih(this), ih(b)) ? E.a(this.q, ug.b(b)) : !1 : !1
};
Y.of = function(a, b, c) {
  return new Ai(a, b, c)
};
Y.Md = function(a) {
  return a instanceof Ai
};
Y.qb = function(a) {
  var b = M(a);
  return 0 === b ? null : E.a(b, 1) ? G(a) : w ? new Ai(a, G(a), G(lb(a))) : null
};
Y.domain = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return F(a) ? Y.qb(zd(ff(), a)) : null
  }
  a.p = 0;
  a.g = function(a) {
    a = F(a);
    return b(a)
  };
  a.d = b;
  return a
}();
Y.we.number = !0;
Y.Fa.number = function(a) {
  return B(I, a)
};
Y.xe.number = !0;
Y.ra.number = function(a, b) {
  return qc(b) ? E.a(a, b) : X.f.ra.a ? X.f.ra.a(b, a) : X.f.ra.call(null, b, a)
};
Y.Wa.number = function(a, b) {
  return qc(b) ? kd.a(a, b) : X.f.Wa.a ? X.f.Wa.a(b, a) : X.f.Wa.call(null, b, a)
};
Y.Z.number = function(a, b) {
  return qc(b) ? E.a(a, b) ? a : null : u(X.f.ua.b ? X.f.ua.b(b) : X.f.ua.call(null, b)) ? X.f.Z.a ? X.f.Z.a(b, a) : X.f.Z.call(null, b, a) : w ? X.f.mb.a ? X.f.mb.a(a, b) : X.f.mb.call(null, a, b) : null
};
Y.La.number = function(a, b) {
  return qc(b) ? E.a(a, b) ? null : a : u(X.f.ua.b ? X.f.ua.b(b) : X.f.ua.call(null, b)) ? X.f.La.a ? X.f.La.a(b, a) : X.f.La.call(null, b, a) : w ? X.f.kb.a ? X.f.kb.a(a, b) : X.f.kb.call(null, a, b) : null
};
Y.ye.number = !0;
Y.yc.number = ba(null);
Y.Db.number = function(a, b) {
  return a >= b ? a : null
};
Y.Eb.number = function(a, b) {
  return a < b ? a : null
};
Y.ve.number = !0;
Y.t.number = aa();
Y.B.number = aa();
ih.number = ba(1);
function Bi(a, b) {
  this.oa = a;
  this.ba = b;
  this.u = 0;
  this.h = 2149580800
}
g = Bi.prototype;
g.M = function(a, b) {
  return D(b, [A("\x3cinterval:"), A(Y.t(this)), A(".."), A(Y.B(this)), A("\x3e")].join(""))
};
g.Rc = function() {
  return B(I, this)
};
g.Vc = function(a, b) {
  return Ec.a(b, this.oa) && Cc.a(b, this.ba)
};
g.Tc = function(a, b) {
  if(qc(b)) {
    return sa(Y.ra(this, b))
  }
  if(u(Y.ua.b ? Y.ua.b(b) : Y.ua.call(null, b))) {
    var c = Y.ha(this), d = N.c(c, 0, null), c = N.c(c, 1, null), e = Y.ha(b), h = N.c(e, 0, null), e = N.c(e, 1, null);
    return Dc.a(d, e) || Bc.a(c, h)
  }
  return w ? Y.Vb.a ? Y.Vb.a(this, b) : Y.Vb.call(null, this, b) : null
};
g.Uc = function(a, b) {
  if(qc(b)) {
    return u(Y.ra(this, b)) ? b : null
  }
  if(u(Y.ua.b ? Y.ua.b(b) : Y.ua.call(null, b))) {
    var c = Y.t(this), d = Y.B(this), e = Y.t(b), h = Y.B(b);
    if(Bc.a(d, e) || Bc.a(h, c)) {
      return null
    }
    if(Cc.a(c, e) && Ec.a(d, h)) {
      return b
    }
    if(Cc.a(e, c) && Ec.a(h, d)) {
      return this
    }
    if(Cc.a(c, e) && Cc.a(d, h)) {
      return Y.interval.a ? Y.interval.a(e, d) : Y.interval.call(null, e, d)
    }
    if(Cc.a(e, c) && Cc.a(h, d)) {
      return Y.interval.a ? Y.interval.a(c, h) : Y.interval.call(null, c, h)
    }
    if(w) {
      throw If.a([A("Interval intersection not defined "), A(this), A(" "), A(b)].join(""), p(le, new q(null, 2, [s, 260, t, 103], null)));
    }
    return null
  }
  return w ? Y.mb.a ? Y.mb.a(this, b) : Y.mb.call(null, this, b) : null
};
g.Sc = function(a, b) {
  if(qc(b)) {
    return E.a(this.oa, b) ? Y.interval.a ? Y.interval.a(this.oa + 1, this.ba) : Y.interval.call(null, this.oa + 1, this.ba) : E.a(this.ba, b) ? Y.interval.a ? Y.interval.a(this.oa, this.ba - 1) : Y.interval.call(null, this.oa, this.ba - 1) : w ? u(Y.ra(this, b)) ? Y.fb.a ? Y.fb.a(Y.interval.a ? Y.interval.a(this.oa, b - 1) : Y.interval.call(null, this.oa, b - 1), Y.interval.a ? Y.interval.a(b + 1, this.ba) : Y.interval.call(null, b + 1, this.ba)) : Y.fb.call(null, Y.interval.a ? Y.interval.a(this.oa, 
    b - 1) : Y.interval.call(null, this.oa, b - 1), Y.interval.a ? Y.interval.a(b + 1, this.ba) : Y.interval.call(null, b + 1, this.ba)) : this : null
  }
  if(u(Y.ua.b ? Y.ua.b(b) : Y.ua.call(null, b))) {
    var c = Y.t(this), d = Y.B(this), e = Y.t(b), h = Y.B(b);
    if(Dc.a(e, d)) {
      return this
    }
    if(Cc.a(e, c) && Ec.a(h, d)) {
      return null
    }
    if(Bc.a(c, e) && Dc.a(d, h)) {
      return Y.fb.a ? Y.fb.a(Y.interval.a ? Y.interval.a(c, e - 1) : Y.interval.call(null, c, e - 1), Y.interval.a ? Y.interval.a(h + 1, d) : Y.interval.call(null, h + 1, d)) : Y.fb.call(null, Y.interval.a ? Y.interval.a(c, e - 1) : Y.interval.call(null, c, e - 1), Y.interval.a ? Y.interval.a(h + 1, d) : Y.interval.call(null, h + 1, d))
    }
    if(Bc.a(c, e) && Cc.a(e, d)) {
      return Y.interval.a ? Y.interval.a(c, e - 1) : Y.interval.call(null, c, e - 1)
    }
    if(Dc.a(d, h) && Cc.a(e, c)) {
      return Y.interval.a ? Y.interval.a(h + 1, d) : Y.interval.call(null, h + 1, d)
    }
    if(w) {
      throw If.a([A("Interval difference not defined "), A(this), A(" "), A(b)].join(""), p(le, new q(null, 2, [s, 291, t, 101], null)));
    }
    return null
  }
  return w ? Y.kb.a ? Y.kb.a(this, b) : Y.kb.call(null, this, b) : null
};
g.Xc = function() {
  var a = this.oa + 1;
  return Cc.a(a, this.ba) ? Y.interval.a ? Y.interval.a(a, this.ba) : Y.interval.call(null, a, this.ba) : null
};
g.Wc = function(a, b) {
  return E.a(b, this.ba) ? b : Bc.a(b, this.oa) ? this : Dc.a(b, this.ba) ? null : w ? Y.interval.a ? Y.interval.a(b, this.ba) : Y.interval.call(null, b, this.ba) : null
};
g.Yc = function(a, b) {
  return Cc.a(b, this.oa) ? null : Dc.a(b, this.ba) ? this : w ? Y.interval.a ? Y.interval.a(this.oa, b - 1) : Y.interval.call(null, this.oa, b - 1) : null
};
g.Pc = f("oa");
g.Qc = f("ba");
g.ad = function() {
  return zc.a(this.ba, this.oa) + 1
};
g.toString = function() {
  return xf.d(K([this], 0))
};
g.J = function(a, b) {
  return b instanceof Bi ? E.a(this.oa, Y.t(b)) && E.a(this.ba, Y.B(b)) : !1
};
Y.pf = function(a, b) {
  return new Bi(a, b)
};
Y.ua = function(a) {
  return a instanceof Bi
};
Y.interval = function() {
  function a(a, b) {
    return 0 === zc.a(b, a) ? b : new Bi(a, b)
  }
  function b(a) {
    return new Bi(0, a)
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
Y.mb = function(a, b) {
  for(var c = F(Y.Fa(a)), d = F(Y.Fa(b)), e = p(Rd, new q(null, 2, [s, 321, t, 64], null));;) {
    if(c && d) {
      var h = G(c), k = G(d);
      if(u(Y.Pd(h, k))) {
        c = J(c)
      }else {
        if(u(Y.Od(h, k))) {
          d = J(d)
        }else {
          if(w) {
            var l = Y.ha(h), m = N.c(l, 0, null), l = N.c(l, 1, null), r = Y.ha(k), x = N.c(r, 0, null), r = N.c(r, 1, null);
            if(Cc.a(m, x)) {
              if(Bc.a(l, r)) {
                c = J(c), d = L(Y.interval.a(l + 1, r), J(d)), e = Ub.a(e, Y.interval.a(x, l))
              }else {
                if(Dc.a(l, r)) {
                  c = L(Y.interval.a(r + 1, l), J(c)), d = J(d), e = Ub.a(e, k)
                }else {
                  if(w) {
                    c = J(c), d = J(d), e = Ub.a(e, Y.interval.a(x, r))
                  }else {
                    return null
                  }
                }
              }
            }else {
              if(Dc.a(m, x)) {
                if(Dc.a(l, r)) {
                  c = L(Y.interval.a(r + 1, l), J(c)), d = J(d), e = Ub.a(e, Y.interval.a(m, r))
                }else {
                  if(Bc.a(l, r)) {
                    d = L(Y.interval.a(l + 1, r), J(d)), e = Ub.a(e, h)
                  }else {
                    if(w) {
                      c = J(c), d = J(d), e = Ub.a(e, Y.interval.a(m, l))
                    }else {
                      return null
                    }
                  }
                }
              }else {
                return null
              }
            }
          }else {
            return null
          }
        }
      }
    }else {
      return ac.a(Y.fb, e)
    }
  }
};
Y.kb = function(a, b) {
  for(var c = F(Y.Fa(a)), d = F(Y.Fa(b)), e = p(Rd, new q(null, 2, [s, 360, t, 64], null));;) {
    if(c) {
      if(d) {
        var h = G(c), k = G(d);
        if(u(Y.Pd(h, k))) {
          c = J(c), e = Ub.a(e, h)
        }else {
          if(u(Y.Od(h, k))) {
            d = J(d)
          }else {
            if(w) {
              var l = Y.ha(h), h = N.c(l, 0, null), l = N.c(l, 1, null), m = Y.ha(k), k = N.c(m, 0, null), m = N.c(m, 1, null);
              if(Bc.a(h, k)) {
                if(Bc.a(m, l)) {
                  c = L(Y.interval.a(m + 1, l), J(c)), d = J(d), e = Ub.a(e, Y.interval.a(h, k - 1))
                }else {
                  if(Dc.a(m, l)) {
                    c = J(c), d = L(Y.interval.a(l + 1, m), J(d)), e = Ub.a(e, Y.interval.a(h, k - 1))
                  }else {
                    if(w) {
                      c = J(c), d = J(d), e = Ub.a(e, Y.interval.a(h, k - 1))
                    }else {
                      return null
                    }
                  }
                }
              }else {
                if(Ec.a(h, k)) {
                  if(Bc.a(l, m)) {
                    c = J(c), d = L(Y.interval.a(l + 1, m), J(d))
                  }else {
                    if(Dc.a(l, m)) {
                      c = L(Y.interval.a(m + 1, l), J(c)), d = J(d)
                    }else {
                      if(w) {
                        c = J(c), d = J(d)
                      }else {
                        return null
                      }
                    }
                  }
                }else {
                  return null
                }
              }
            }else {
              return null
            }
          }
        }
      }else {
        return ac.a(Y.fb, zd(e, c))
      }
    }else {
      return ac.a(Y.fb, e)
    }
  }
};
Y.Vb = function(a, b) {
  if(u(Y.Wa(Y.interval.a(Y.t(a), Y.B(a)), Y.interval.a(Y.t(b), Y.B(b))))) {
    return!0
  }
  for(var c = Y.Fa(a), d = Y.Fa(b);;) {
    if(null == c || null == d) {
      return!0
    }
    var e = G(c), h = G(d);
    if(u(Y.Pd(e, h))) {
      c = J(c)
    }else {
      if(u(Y.Od(e, h))) {
        d = J(d)
      }else {
        if(u(Y.Wa(e, h))) {
          c = J(c)
        }else {
          return w ? !1 : null
        }
      }
    }
  }
};
function Ci(a, b, c) {
  this.min = a;
  this.max = b;
  this.eb = c;
  this.u = 0;
  this.h = 2149581056
}
g = Ci.prototype;
g.M = function(a, b) {
  return D(b, [A("\x3cintervals:"), A(ac.a(xf, Kf.b(this))), A("\x3e")].join(""))
};
g.Rc = function() {
  return F(this.eb)
};
g.Vc = function(a, b) {
  return u(nd(function(a) {
    return Y.ra(a, b)
  }, this.eb)) ? !0 : !1
};
g.Tc = function(a, b) {
  return Y.Vb(this, b)
};
g.Uc = function(a, b) {
  return Y.mb(this, b)
};
g.Sc = function(a, b) {
  return Y.kb(this, b)
};
g.Xc = function() {
  var a = G(this.eb);
  if(u(Y.ea.b ? Y.ea.b(a) : Y.ea.call(null, a))) {
    return a = H(this.eb), new Ci(Y.t(G(a)), this.max, a)
  }
  a = Y.yc(a);
  return new Ci(Y.t(a), this.max, L(a, H(this.eb)))
};
g.Wc = function(a, b) {
  for(var c = F(this.eb), d = p(Rd, new q(null, 2, [s, 471, t, 24], null));;) {
    if(c) {
      var e = Y.Db(G(c), b);
      u(e) ? (c = J(c), d = Ub.a(d, e)) : c = J(c)
    }else {
      return 0 < M(d) ? ac.a(Y.fb, d) : null
    }
  }
};
g.Yc = function(a, b) {
  for(var c = F(this.eb), d = p(Rd, new q(null, 2, [s, 482, t, 24], null));;) {
    if(c) {
      var e = Y.Eb(G(c), b);
      u(e) ? (c = J(c), d = Ub.a(d, e)) : c = J(c)
    }else {
      return 0 < M(d) ? ac.a(Y.fb, d) : null
    }
  }
};
g.Pc = f("min");
g.Qc = f("max");
g.ad = function() {
  return xc.c(yc, 0, sd.a(function(a) {
    return ih(a)
  }, this.eb))
};
g.J = function(a, b) {
  if(b instanceof Ci) {
    var c = Y.ha(b), d = N.c(c, 0, null), c = N.c(c, 1, null);
    if(E.a(this.min, d) && E.a(this.max, c)) {
      return d = Y.tc.b ? Y.tc.b(this.eb) : Y.tc.call(null, this.eb), c = Y.tc.b ? Y.tc.b(Y.Fa(b)) : Y.tc.call(null, Y.Fa(b)), E.a(d, c)
    }
  }
  return!1
};
g.K = function(a, b) {
  return Ja.c(this, b, null)
};
g.L = function(a, b, c) {
  return E.a($f, b) ? this.max : E.a(lg, b) ? this.min : E.a(Kf, b) ? this.eb : w ? c : null
};
Y.qf = function(a, b, c) {
  return new Ci(a, b, c)
};
Y.tc = function(a) {
  return xc.c(function(a, c) {
    if(0 === M(a)) {
      return Ub.a(a, c)
    }
    var d = Ua(a), e = Y.B(d), h = Y.t(c);
    return Cc.a(h - 1, e) ? Ub.a(Va(a), Y.interval.a(Y.t(d), Y.B(c))) : Ub.a(a, c)
  }, p(Rd, new q(null, 2, [s, 525, t, 13], null)), a)
};
Y.fb = function() {
  function a(a, b) {
    var c = p(new P(null, 2, 5, Q, [a, b], null), new q(null, 2, [s, 531, t, 22], null));
    return new Ci(xc.a(Gc, sd.a(Y.t, c)), xc.a(Fc, sd.a(Y.B, c)), c)
  }
  var b = null, c = function() {
    function a(c, d, l) {
      var m = null;
      2 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, m)
    }
    function b(a, c, d) {
      a = zd(p(Rd, new q(null, 2, [s, 535, t, 23], null)), ed.a(B(B(I, c), a), d));
      return new Ci(xc.a(Gc, sd.a(Y.t, a)), xc.a(Fc, sd.a(Y.B, a)), a)
    }
    a.p = 2;
    a.g = function(a) {
      var c = G(a);
      a = J(a);
      var d = G(a);
      a = H(a);
      return b(c, d, a)
    };
    a.d = b;
    return a
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 0:
        return null;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, K(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.A = ba(null);
  b.b = aa();
  b.a = a;
  b.d = c.d;
  return b
}();
Y.Nd = function(a, b) {
  return W(b) ? Xh(a, b) : b
};
Y.Te = function(a, b, c, d) {
  a = Vh.o(a, b, Of, c);
  return kd.a(d, c) ? Th(p(new P(null, 1, 5, Q, [b], null), new q(null, 2, [s, 552, t, 31], null)), tg.b(a), Of).call(null, a) : a
};
Y.ea = function(a) {
  return qc(a)
};
Y.ef = function(a, b, c, d) {
  return u(Y.ea(c)) ? (d = Gg(a, b), W(d) ? Rg(Wh.c(a, b, Of), b, c) : a) : Y.Te(a, b, c, d)
};
Y.w = function(a, b, c) {
  return function(d) {
    return u(b) ? W(a) ? Y.ef(d, a, b, c) : u(Y.ra(b, a)) ? d : null : null
  }
};
Y.Kd = function(a, b) {
  return function(c) {
    var d = Y.Nd(c, a), e = u(d) ? Y.Z(b, d) : b;
    return di.a(Y.w(a, e, d), null == d && sa(Y.ea(e)) ? Y.Ld.b ? Y.Ld.b(a) : Y.Ld.call(null, a) : od).call(null, c)
  }
};
Y.Qd = function(a) {
  return function c(d) {
    return fc(d) ? ba(null) : function(e) {
      return Mg((a.b ? a.b(G(d)) : a.call(null, G(d))).call(null, e), function() {
        return c(H(d)).call(null, e)
      })
    }
  }
};
Y.Rd = function(a) {
  var b = function d(a) {
    if(u(a)) {
      var b = G(a);
      return new Vc(null, function() {
        var k = L, l = Y.t(b), m;
        m = Y.yc(b);
        m = u(m) ? d(L(m, J(a))) : d(J(a));
        return k(l, m)
      }, null, null)
    }
    return null
  };
  return b.b ? b.b(F(Y.Fa(a))) : b.call(null, F(Y.Fa(a)))
};
Ci.prototype.Fc = function(a, b) {
  return Y.Qd(function(a) {
    return gi(b, a)
  }).call(null, Y.Rd(this))
};
Bi.prototype.Fc = function(a, b) {
  return Y.Qd(function(a) {
    return gi(b, a)
  }).call(null, Y.Rd(this))
};
Ai.prototype.Fc = function(a, b) {
  return Y.Qd(function(a) {
    return gi(b, a)
  }).call(null, Y.Rd(this))
};
Y.gc = function Di(b) {
  "undefined" === typeof Y.Oa && (Y.Oa = function(b, d, e) {
    this.x = b;
    this.gc = d;
    this.cd = e;
    this.u = 0;
    this.h = 393216
  }, Y.Oa.ja = !0, Y.Oa.ia = "cljs.core.logic.fd/t18123", Y.Oa.na = function(b, d) {
    return D(d, "cljs.core.logic.fd/t18123")
  }, Y.Oa.prototype.wb = function() {
    return new af(null, new q(null, 1, [Pf, null], null), null)
  }, Y.Oa.prototype.ub = function() {
    return p(new P(null, 1, 5, Q, [this.x], null), new q(null, 2, [s, 653, t, 20], null))
  }, Y.Oa.prototype.vb = function(b, d) {
    var e = Gg(d, this.x), h = Of.b(rg.b(Pg(d, this.x)));
    "undefined" === typeof Y.wa && (Y.wa = function(b, c, d, e, h, z, R, T) {
      this.wc = b;
      this.md = c;
      this.q = d;
      this.ka = e;
      this.cd = h;
      this.x = z;
      this.gc = R;
      this.Ve = T;
      this.u = 0;
      this.h = 393217
    }, Y.wa.ja = !0, Y.wa.ia = "cljs.core.logic.fd/t18126", Y.wa.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t18126")
    }, Y.wa.prototype.xb = function() {
      return!W(this.md)
    }, Y.wa.prototype.mc = !0, Y.wa.prototype.Ub = function() {
      return null == this.wc
    }, Y.wa.prototype.call = function(b, c) {
      b = this;
      return u(b.wc) ? u(Y.ra(b.wc, b.md)) ? Wh.c(c, b.x, Of) : null : c
    }, Y.wa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)))
    }, Y.wa.prototype.b = function(b) {
      return u(this.wc) ? u(Y.ra(this.wc, this.md)) ? Wh.c(b, this.x, Of) : null : b
    }, Y.wa.prototype.G = f("Ve"), Y.wa.prototype.H = function(b, c) {
      return new Y.wa(this.wc, this.md, this.q, this.ka, this.cd, this.x, this.gc, c)
    }, Y.sf = function(b, c, d, e, h, z, R, T) {
      return new Y.wa(b, c, d, e, h, z, R, T)
    });
    return new Y.wa(h, e, d, this, this.cd, this.x, this.gc, null)
  }, Y.Oa.prototype.G = f("cd"), Y.Oa.prototype.H = function(b, d) {
    return new Y.Oa(this.x, this.gc, d)
  }, Y.rf = function(b, d, e) {
    return new Y.Oa(b, d, e)
  });
  return new Y.Oa(b, Di, null)
};
Y.Ld = function(a) {
  return wi(Y.gc(a))
};
Y.bc = function Ei(b, c) {
  "undefined" === typeof Y.Pa && (Y.Pa = function(b, c, h, k) {
    this.m = b;
    this.v = c;
    this.bc = h;
    this.dd = k;
    this.u = 0;
    this.h = 393216
  }, Y.Pa.ja = !0, Y.Pa.ia = "cljs.core.logic.fd/t18137", Y.Pa.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t18137")
  }, Y.Pa.prototype.wb = function() {
    return new af(null, new q(null, 2, [Of, null, Pf, null], null), null)
  }, Y.Pa.prototype.ub = function() {
    return p(new P(null, 2, 5, Q, [this.v, this.m], null), new q(null, 2, [s, 683, t, 22], null))
  }, Y.Pa.prototype.vb = function(b, c) {
    var h = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), k = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m);
    "undefined" === typeof Y.xa && (Y.xa = function(b, c, d, e, h, k, T, V, Z) {
      this.l = b;
      this.k = c;
      this.q = d;
      this.ka = e;
      this.dd = h;
      this.m = k;
      this.v = T;
      this.bc = V;
      this.We = Z;
      this.u = 0;
      this.h = 393217
    }, Y.xa.ja = !0, Y.xa.ia = "cljs.core.logic.fd/t18140", Y.xa.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t18140")
    }, Y.xa.prototype.xb = function() {
      var b = this.k;
      return u(b) ? this.l : b
    }, Y.xa.prototype.mc = !0, Y.xa.prototype.Ub = function() {
      var b = Y.ea(this.k);
      return u(b) ? (b = Y.ea(this.l), u(b) ? E.a(this.k, this.l) : b) : b
    }, Y.xa.prototype.call = function(b, c) {
      b = this;
      var d = Y.Z(b.k, b.l);
      return di.a(Y.w(b.v, d, b.k), Y.w(b.m, d, b.l)).call(null, c)
    }, Y.xa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)))
    }, Y.xa.prototype.b = function(b) {
      var c = Y.Z(this.k, this.l);
      return di.a(Y.w(this.v, c, this.k), Y.w(this.m, c, this.l)).call(null, b)
    }, Y.xa.prototype.G = f("We"), Y.xa.prototype.H = function(b, c) {
      return new Y.xa(this.l, this.k, this.q, this.ka, this.dd, this.m, this.v, this.bc, c)
    }, Y.uf = function(b, c, d, e, h, k, T, V, Z) {
      return new Y.xa(b, c, d, e, h, k, T, V, Z)
    });
    return new Y.xa(k, h, c, this, this.dd, this.m, this.v, this.bc, null)
  }, Y.Pa.prototype.G = f("dd"), Y.Pa.prototype.H = function(b, c) {
    return new Y.Pa(this.m, this.v, this.bc, c)
  }, Y.tf = function(b, c, h, k) {
    return new Y.Pa(b, c, h, k)
  });
  return new Y.Pa(c, b, Ei, null)
};
Y.lf = function(a, b) {
  return wi(Y.bc(a, b))
};
Y.ac = function Fi(b, c) {
  "undefined" === typeof Y.Qa && (Y.Qa = function(b, c, h, k) {
    this.m = b;
    this.v = c;
    this.ac = h;
    this.ed = k;
    this.u = 0;
    this.h = 393216
  }, Y.Qa.ja = !0, Y.Qa.ia = "cljs.core.logic.fd/t18151", Y.Qa.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t18151")
  }, Y.Qa.prototype.wb = function() {
    return new af(null, new q(null, 2, [Of, null, Pf, null], null), null)
  }, Y.Qa.prototype.ub = function() {
    return p(new P(null, 2, 5, Q, [this.v, this.m], null), new q(null, 2, [s, 720, t, 22], null))
  }, Y.Qa.prototype.vb = function(b, c) {
    var h = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), k = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m), l = Y.ea(h), m = Y.ea(k);
    "undefined" === typeof Y.ya && (Y.ya = function(b, c, d, e, h, l, k, m, $, la, za) {
      this.m = b;
      this.ed = c;
      this.v = d;
      this.ac = e;
      this.q = h;
      this.k = l;
      this.l = k;
      this.ld = m;
      this.vc = $;
      this.ka = la;
      this.Xe = za;
      this.u = 0;
      this.h = 393217
    }, Y.ya.ja = !0, Y.ya.ia = "cljs.core.logic.fd/t18154", Y.ya.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t18154")
    }, Y.ya.prototype.xb = function() {
      var b = this.k;
      return u(b) && (b = this.l, u(b)) ? (b = this.vc, u(b) ? b : this.ld) : b
    }, Y.ya.prototype.mc = !0, Y.ya.prototype.Ub = function() {
      var b = this.k;
      return u(b) ? (b = this.l, u(b) ? Y.Wa(this.k, this.l) : b) : b
    }, Y.ya.prototype.call = function(b, c) {
      b = this;
      var d;
      d = b.vc;
      u(d) && (d = b.ld, d = u(d) ? E.a(b.k, b.l) : d);
      return u(d) ? null : u(Y.Wa(b.k, b.l)) ? c : u(b.vc) ? (d = Y.La(b.l, b.k), u(d) ? Y.w(b.m, d, b.l).call(null, c) : null) : w ? (d = Y.La(b.k, b.l), u(d) ? Y.w(b.v, d, b.k).call(null, c) : null) : null
    }, Y.ya.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)))
    }, Y.ya.prototype.b = function(b) {
      var c;
      c = this.vc;
      u(c) && (c = this.ld, c = u(c) ? E.a(this.k, this.l) : c);
      return u(c) ? null : u(Y.Wa(this.k, this.l)) ? b : u(this.vc) ? (c = Y.La(this.l, this.k), u(c) ? Y.w(this.m, c, this.l).call(null, b) : null) : w ? (c = Y.La(this.k, this.l), u(c) ? Y.w(this.v, c, this.k).call(null, b) : null) : null
    }, Y.ya.prototype.G = f("Xe"), Y.ya.prototype.H = function(b, c) {
      return new Y.ya(this.m, this.ed, this.v, this.ac, this.q, this.k, this.l, this.ld, this.vc, this.ka, c)
    }, Y.wf = function(b, c, d, e, h, l, k, m, $, la, za) {
      return new Y.ya(b, c, d, e, h, l, k, m, $, la, za)
    });
    return new Y.ya(this.m, this.ed, this.v, this.ac, c, h, k, m, l, this, null)
  }, Y.Qa.prototype.G = f("ed"), Y.Qa.prototype.H = function(b, c) {
    return new Y.Qa(this.m, this.v, this.ac, c)
  }, Y.vf = function(b, c, h, k) {
    return new Y.Qa(b, c, h, k)
  });
  return new Y.Qa(c, b, Fi, null)
};
Y.ze = function(a, b) {
  return wi(Y.ac(a, b))
};
Y.cc = function Gi(b, c) {
  "undefined" === typeof Y.Ra && (Y.Ra = function(b, c, h, k) {
    this.m = b;
    this.v = c;
    this.cc = h;
    this.fd = k;
    this.u = 0;
    this.h = 393216
  }, Y.Ra.ja = !0, Y.Ra.ia = "cljs.core.logic.fd/t18165", Y.Ra.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t18165")
  }, Y.Ra.prototype.wb = function() {
    return new af(null, new q(null, 2, [Of, null, Pf, null], null), null)
  }, Y.Ra.prototype.ub = function() {
    return p(new P(null, 2, 5, Q, [this.v, this.m], null), new q(null, 2, [s, 753, t, 22], null))
  }, Y.Ra.prototype.vb = function(b, c) {
    var h = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), k = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m);
    "undefined" === typeof Y.za && (Y.za = function(b, c, d, e, h, k, T, V, Z) {
      this.l = b;
      this.k = c;
      this.q = d;
      this.ka = e;
      this.fd = h;
      this.m = k;
      this.v = T;
      this.cc = V;
      this.Ye = Z;
      this.u = 0;
      this.h = 393217
    }, Y.za.ja = !0, Y.za.ia = "cljs.core.logic.fd/t18168", Y.za.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t18168")
    }, Y.za.prototype.xb = function() {
      var b = this.k;
      return u(b) ? this.l : b
    }, Y.za.prototype.mc = !0, Y.za.prototype.Ub = function() {
      var b = this.k;
      return u(b) ? (b = this.l, u(b) ? Y.Ue(this.k, this.l) : b) : b
    }, Y.za.prototype.call = function(b, c) {
      b = this;
      var d = Y.t(b.k), e = Y.B(b.l);
      return(X.f.D.a ? X.f.D.a(Y.w(b.v, Y.Eb(b.k, e + 1), b.k), Y.w(b.m, Y.Db(b.l, d), b.l)) : X.f.D.call(null, Y.w(b.v, Y.Eb(b.k, e + 1), b.k), Y.w(b.m, Y.Db(b.l, d), b.l))).call(null, c)
    }, Y.za.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)))
    }, Y.za.prototype.b = function(b) {
      var c = Y.t(this.k), d = Y.B(this.l);
      return(X.f.D.a ? X.f.D.a(Y.w(this.v, Y.Eb(this.k, d + 1), this.k), Y.w(this.m, Y.Db(this.l, c), this.l)) : X.f.D.call(null, Y.w(this.v, Y.Eb(this.k, d + 1), this.k), Y.w(this.m, Y.Db(this.l, c), this.l))).call(null, b)
    }, Y.za.prototype.G = f("Ye"), Y.za.prototype.H = function(b, c) {
      return new Y.za(this.l, this.k, this.q, this.ka, this.fd, this.m, this.v, this.cc, c)
    }, Y.yf = function(b, c, d, e, h, k, T, V, Z) {
      return new Y.za(b, c, d, e, h, k, T, V, Z)
    });
    return new Y.za(k, h, c, this, this.fd, this.m, this.v, this.cc, null)
  }, Y.Ra.prototype.G = f("fd"), Y.Ra.prototype.H = function(b, c) {
    return new Y.Ra(this.m, this.v, this.cc, c)
  }, Y.xf = function(b, c, h, k) {
    return new Y.Ra(b, c, h, k)
  });
  return new Y.Ra(c, b, Gi, null)
};
Y.nd = function(a, b) {
  return wi(Y.cc(a, b))
};
Y.Ae = function(a, b) {
  return function(c) {
    return Lg(Lg(c, Y.nd(a, b)), Y.ze(a, b))
  }
};
Y.mf = function(a, b) {
  return Y.Ae(b, a)
};
Y.nf = function(a, b) {
  return Y.nd(b, a)
};
Y.dc = function Hi(b, c, d) {
  "undefined" === typeof Y.Sa && (Y.Sa = function(b, c, d, l, m) {
    this.Y = b;
    this.m = c;
    this.v = d;
    this.dc = l;
    this.gd = m;
    this.u = 0;
    this.h = 393216
  }, Y.Sa.ja = !0, Y.Sa.ia = "cljs.core.logic.fd/t18185", Y.Sa.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t18185")
  }, Y.Sa.prototype.wb = function() {
    return new af(null, new q(null, 2, [Of, null, Pf, null], null), null)
  }, Y.Sa.prototype.ub = function() {
    return p(new P(null, 3, 5, Q, [this.v, this.m, this.Y], null), new q(null, 2, [s, 840, t, 24], null))
  }, Y.Sa.prototype.vb = function(b, c) {
    var d = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), l = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m), m = X.f.I.a ? X.f.I.a(c, this.Y) : X.f.I.call(null, c, this.Y);
    "undefined" === typeof Y.Aa && (Y.Aa = function(b, c, d, e, h, k, l, m, $, la, za) {
      this.m = b;
      this.Y = c;
      this.v = d;
      this.q = e;
      this.dc = h;
      this.k = k;
      this.s = l;
      this.l = m;
      this.gd = $;
      this.ka = la;
      this.Ze = za;
      this.u = 0;
      this.h = 393217
    }, Y.Aa.ja = !0, Y.Aa.ia = "cljs.core.logic.fd/t18188", Y.Aa.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t18188")
    }, Y.Aa.prototype.xb = function() {
      if(u(this.k)) {
        var b = this.l;
        return u(b) ? b : this.s
      }
      return u(this.l) ? (b = this.k, u(b) ? b : this.s) : u(this.s) ? (b = this.k, u(b) ? b : this.l) : w ? !1 : null
    }, Y.Aa.prototype.mc = !0, Y.Aa.prototype.Ub = function() {
      var b = Y.ea(this.k);
      return u(b) && (b = Y.ea(this.l), u(b)) ? (b = Y.ea(this.s), u(b) ? E.a(yc.a(this.k, this.l), this.s) : b) : b
    }, Y.Aa.prototype.call = function(b, c) {
      b = this;
      var d = u(b.s) ? Y.ha(b.s) : p(new P(null, 2, 5, Q, [yc.a(Y.t(b.k), Y.t(b.l)), yc.a(Y.B(b.k), Y.B(b.l))], null), new q(null, 2, [s, 797, t, 56], null)), e = N.c(d, 0, null), d = N.c(d, 1, null), h = u(b.k) ? Y.ha(b.k) : p(new P(null, 2, 5, Q, [zc.a(Y.t(b.s), Y.B(b.l)), zc.a(Y.B(b.s), Y.t(b.l))], null), new q(null, 2, [s, 802, t, 56], null)), k = N.c(h, 0, null), h = N.c(h, 1, null), l = u(b.l) ? Y.ha(b.l) : p(new P(null, 2, 5, Q, [zc.a(Y.t(b.s), Y.B(b.k)), zc.a(Y.B(b.s), Y.t(b.k))], null), 
      new q(null, 2, [s, 807, t, 56], null)), m = N.c(l, 0, null), $ = N.c(l, 1, null), l = Y.interval.a(yc.a(k, m), yc.a(h, $)), m = Y.interval.a(zc.a(e, $), zc.a(d, m)), e = Y.interval.a(zc.a(e, h), zc.a(d, k)), d = u(u(l) ? b.s : l) ? Y.Z(l, b.s) : l;
      return u(d) && (k = u(u(m) ? b.k : m) ? Y.Z(m, b.k) : m, u(k)) ? (e = u(u(e) ? b.l : e) ? Y.Z(e, b.l) : e, u(e) ? !md(Y.ea, p(new P(null, 3, 5, Q, [d, k, e], null), new q(null, 2, [s, 818, t, 76], null))) || E.a(yc.a(k, e), d) ? (X.f.D.a ? X.f.D.a(Y.w(b.Y, d, b.s), X.f.D.a ? X.f.D.a(Y.w(b.v, k, b.k), Y.w(b.m, e, b.l)) : X.f.D.call(null, Y.w(b.v, k, b.k), Y.w(b.m, e, b.l))) : X.f.D.call(null, Y.w(b.Y, d, b.s), X.f.D.a ? X.f.D.a(Y.w(b.v, k, b.k), Y.w(b.m, e, b.l)) : X.f.D.call(null, Y.w(b.v, 
      k, b.k), Y.w(b.m, e, b.l)))).call(null, c) : null : null) : null
    }, Y.Aa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)))
    }, Y.Aa.prototype.b = function(b) {
      var c = u(this.s) ? Y.ha(this.s) : p(new P(null, 2, 5, Q, [yc.a(Y.t(this.k), Y.t(this.l)), yc.a(Y.B(this.k), Y.B(this.l))], null), new q(null, 2, [s, 797, t, 56], null)), d = N.c(c, 0, null), c = N.c(c, 1, null), e = u(this.k) ? Y.ha(this.k) : p(new P(null, 2, 5, Q, [zc.a(Y.t(this.s), Y.B(this.l)), zc.a(Y.B(this.s), Y.t(this.l))], null), new q(null, 2, [s, 802, t, 56], null)), h = N.c(e, 0, null), e = N.c(e, 1, null), k = u(this.l) ? Y.ha(this.l) : p(new P(null, 2, 5, Q, [zc.a(Y.t(this.s), 
      Y.B(this.k)), zc.a(Y.B(this.s), Y.t(this.k))], null), new q(null, 2, [s, 807, t, 56], null)), l = N.c(k, 0, null), m = N.c(k, 1, null), k = Y.interval.a(yc.a(h, l), yc.a(e, m)), l = Y.interval.a(zc.a(d, m), zc.a(c, l)), d = Y.interval.a(zc.a(d, e), zc.a(c, h)), c = u(u(k) ? this.s : k) ? Y.Z(k, this.s) : k;
      return u(c) && (h = u(u(l) ? this.k : l) ? Y.Z(l, this.k) : l, u(h)) ? (d = u(u(d) ? this.l : d) ? Y.Z(d, this.l) : d, u(d) ? !md(Y.ea, p(new P(null, 3, 5, Q, [c, h, d], null), new q(null, 2, [s, 818, t, 76], null))) || E.a(yc.a(h, d), c) ? (X.f.D.a ? X.f.D.a(Y.w(this.Y, c, this.s), X.f.D.a ? X.f.D.a(Y.w(this.v, h, this.k), Y.w(this.m, d, this.l)) : X.f.D.call(null, Y.w(this.v, h, this.k), Y.w(this.m, d, this.l))) : X.f.D.call(null, Y.w(this.Y, c, this.s), X.f.D.a ? X.f.D.a(Y.w(this.v, h, this.k), 
      Y.w(this.m, d, this.l)) : X.f.D.call(null, Y.w(this.v, h, this.k), Y.w(this.m, d, this.l)))).call(null, b) : null : null) : null
    }, Y.Aa.prototype.G = f("Ze"), Y.Aa.prototype.H = function(b, c) {
      return new Y.Aa(this.m, this.Y, this.v, this.q, this.dc, this.k, this.s, this.l, this.gd, this.ka, c)
    }, Y.Af = function(b, c, d, e, h, k, l, m, $, la, za) {
      return new Y.Aa(b, c, d, e, h, k, l, m, $, la, za)
    });
    return new Y.Aa(this.m, this.Y, this.v, c, this.dc, d, m, l, this.gd, this, null)
  }, Y.Sa.prototype.G = f("gd"), Y.Sa.prototype.H = function(b, c) {
    return new Y.Sa(this.Y, this.m, this.v, this.dc, c)
  }, Y.zf = function(b, c, d, l, m) {
    return new Y.Sa(b, c, d, l, m)
  });
  return new Y.Sa(d, c, b, Hi, null)
};
Y.Td = function(a, b, c) {
  return wi(Y.dc(a, b, c))
};
Y.kf = function(a, b, c) {
  return Y.Td(b, c, a)
};
Y.ec = function Ii(b, c, d) {
  "undefined" === typeof Y.Ta && (Y.Ta = function(b, c, d, l, m, r) {
    this.F = b;
    this.Y = c;
    this.m = d;
    this.v = l;
    this.ec = m;
    this.hd = r;
    this.u = 0;
    this.h = 393216
  }, Y.Ta.ja = !0, Y.Ta.ia = "cljs.core.logic.fd/t18215", Y.Ta.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t18215")
  }, Y.Ta.prototype.wb = function() {
    return new af(null, new q(null, 2, [Of, null, Pf, null], null), null)
  }, Y.Ta.prototype.ub = function() {
    return p(new P(null, 3, 5, Q, [this.v, this.m, this.Y], null), new q(null, 2, [s, 924, t, 26], null))
  }, Y.Ta.prototype.vb = function(b, c) {
    var d = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), l = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m), m = X.f.I.a ? X.f.I.a(c, this.Y) : X.f.I.call(null, c, this.Y);
    "undefined" === typeof Y.Ba && (Y.Ba = function(b, c, d, e, h, k, l, m, $, la, za, Hb) {
      this.m = b;
      this.Y = c;
      this.v = d;
      this.q = e;
      this.k = h;
      this.ec = k;
      this.s = l;
      this.l = m;
      this.hd = $;
      this.F = la;
      this.ka = za;
      this.$e = Hb;
      this.u = 0;
      this.h = 393217
    }, Y.Ba.ja = !0, Y.Ba.ia = "cljs.core.logic.fd/t18218", Y.Ba.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t18218")
    }, Y.Ba.prototype.xb = function() {
      if(u(this.k)) {
        var b = this.l;
        return u(b) ? b : this.s
      }
      return u(this.l) ? (b = this.k, u(b) ? b : this.s) : u(this.s) ? (b = this.k, u(b) ? b : this.l) : w ? !1 : null
    }, Y.Ba.prototype.mc = !0, Y.Ba.prototype.Ub = function() {
      var b = Y.ea(this.k);
      return u(b) && (b = Y.ea(this.l), u(b)) ? (b = Y.ea(this.s), u(b) ? E.a(Ac.a(this.k, this.l), this.s) : b) : b
    }, Y.Ba.prototype.call = function(b, c) {
      b = this;
      var d = u(b.s) ? Y.ha(b.s) : p(new P(null, 2, 5, Q, [Ac.a(Y.t(b.k), Y.t(b.l)), Ac.a(Y.B(b.k), Y.B(b.l))], null), new q(null, 2, [s, 877, t, 58], null)), e = N.c(d, 0, null), d = N.c(d, 1, null), h = u(b.k) ? Y.ha(b.k) : p(new P(null, 2, 5, Q, [b.F.o ? b.F.o(Y.B(b.l), Y.t(b.s), Y.t(b.s), eg) : b.F.call(null, Y.B(b.l), Y.t(b.s), Y.t(b.s), eg), b.F.o ? b.F.o(Y.t(b.l), Y.t(b.s), Y.B(b.s), qg) : b.F.call(null, Y.t(b.l), Y.t(b.s), Y.B(b.s), qg)], null), new q(null, 2, [s, 882, t, 76], null)), k = 
      N.c(h, 0, null), l = N.c(h, 1, null), h = u(b.l) ? Y.ha(b.l) : p(new P(null, 2, 5, Q, [b.F.o ? b.F.o(Y.B(b.k), Y.t(b.s), Y.t(b.s), eg) : b.F.call(null, Y.B(b.k), Y.t(b.s), Y.t(b.s), eg), b.F.o ? b.F.o(Y.t(b.k), Y.t(b.s), Y.B(b.s), qg) : b.F.call(null, Y.t(b.k), Y.t(b.s), Y.B(b.s), qg)], null), new q(null, 2, [s, 887, t, 76], null)), m = N.c(h, 0, null), $ = N.c(h, 1, null), la = Y.interval.a(Ac.a(k, m), Ac.a(l, $)), h = Y.interval.a(b.F.o ? b.F.o($, k, e, eg) : b.F.call(null, $, k, e, eg), 
      b.F.o ? b.F.o(m, l, d, qg) : b.F.call(null, m, l, d, qg)), e = Y.interval.a(b.F.o ? b.F.o(l, m, e, eg) : b.F.call(null, l, m, e, eg), b.F.o ? b.F.o(k, $, d, qg) : b.F.call(null, k, $, d, qg)), d = u(u(la) ? b.s : la) ? Y.Z(la, b.s) : la;
      return u(d) && (k = u(u(h) ? b.k : h) ? Y.Z(h, b.k) : h, u(k)) ? (e = u(u(e) ? b.l : e) ? Y.Z(e, b.l) : e, u(e) ? !md(Y.ea, p(new P(null, 3, 5, Q, [d, k, e], null), new q(null, 2, [s, 903, t, 63], null))) || E.a(Ac.a(k, e), d) ? (X.f.D.a ? X.f.D.a(Y.w(b.Y, d, b.s), X.f.D.a ? X.f.D.a(Y.w(b.v, k, b.k), Y.w(b.m, e, b.l)) : X.f.D.call(null, Y.w(b.v, k, b.k), Y.w(b.m, e, b.l))) : X.f.D.call(null, Y.w(b.Y, d, b.s), X.f.D.a ? X.f.D.a(Y.w(b.v, k, b.k), Y.w(b.m, e, b.l)) : X.f.D.call(null, Y.w(b.v, 
      k, b.k), Y.w(b.m, e, b.l)))).call(null, c) : null : null) : null
    }, Y.Ba.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)))
    }, Y.Ba.prototype.b = function(b) {
      var c = u(this.s) ? Y.ha(this.s) : p(new P(null, 2, 5, Q, [Ac.a(Y.t(this.k), Y.t(this.l)), Ac.a(Y.B(this.k), Y.B(this.l))], null), new q(null, 2, [s, 877, t, 58], null)), d = N.c(c, 0, null), c = N.c(c, 1, null), e = u(this.k) ? Y.ha(this.k) : p(new P(null, 2, 5, Q, [this.F.o ? this.F.o(Y.B(this.l), Y.t(this.s), Y.t(this.s), eg) : this.F.call(null, Y.B(this.l), Y.t(this.s), Y.t(this.s), eg), this.F.o ? this.F.o(Y.t(this.l), Y.t(this.s), Y.B(this.s), qg) : this.F.call(null, Y.t(this.l), Y.t(this.s), 
      Y.B(this.s), qg)], null), new q(null, 2, [s, 882, t, 76], null)), h = N.c(e, 0, null), k = N.c(e, 1, null), e = u(this.l) ? Y.ha(this.l) : p(new P(null, 2, 5, Q, [this.F.o ? this.F.o(Y.B(this.k), Y.t(this.s), Y.t(this.s), eg) : this.F.call(null, Y.B(this.k), Y.t(this.s), Y.t(this.s), eg), this.F.o ? this.F.o(Y.t(this.k), Y.t(this.s), Y.B(this.s), qg) : this.F.call(null, Y.t(this.k), Y.t(this.s), Y.B(this.s), qg)], null), new q(null, 2, [s, 887, t, 76], null)), l = N.c(e, 0, null), m = N.c(e, 
      1, null), $ = Y.interval.a(Ac.a(h, l), Ac.a(k, m)), e = Y.interval.a(this.F.o ? this.F.o(m, h, d, eg) : this.F.call(null, m, h, d, eg), this.F.o ? this.F.o(l, k, c, qg) : this.F.call(null, l, k, c, qg)), d = Y.interval.a(this.F.o ? this.F.o(k, l, d, eg) : this.F.call(null, k, l, d, eg), this.F.o ? this.F.o(h, m, c, qg) : this.F.call(null, h, m, c, qg)), c = u(u($) ? this.s : $) ? Y.Z($, this.s) : $;
      return u(c) && (h = u(u(e) ? this.k : e) ? Y.Z(e, this.k) : e, u(h)) ? (d = u(u(d) ? this.l : d) ? Y.Z(d, this.l) : d, u(d) ? !md(Y.ea, p(new P(null, 3, 5, Q, [c, h, d], null), new q(null, 2, [s, 903, t, 63], null))) || E.a(Ac.a(h, d), c) ? (X.f.D.a ? X.f.D.a(Y.w(this.Y, c, this.s), X.f.D.a ? X.f.D.a(Y.w(this.v, h, this.k), Y.w(this.m, d, this.l)) : X.f.D.call(null, Y.w(this.v, h, this.k), Y.w(this.m, d, this.l))) : X.f.D.call(null, Y.w(this.Y, c, this.s), X.f.D.a ? X.f.D.a(Y.w(this.v, h, this.k), 
      Y.w(this.m, d, this.l)) : X.f.D.call(null, Y.w(this.v, h, this.k), Y.w(this.m, d, this.l)))).call(null, b) : null : null) : null
    }, Y.Ba.prototype.G = f("$e"), Y.Ba.prototype.H = function(b, c) {
      return new Y.Ba(this.m, this.Y, this.v, this.q, this.k, this.ec, this.s, this.l, this.hd, this.F, this.ka, c)
    }, Y.Cf = function(b, c, d, e, h, k, l, m, $, la, za, Hb) {
      return new Y.Ba(b, c, d, e, h, k, l, m, $, la, za, Hb)
    });
    return new Y.Ba(this.m, this.Y, this.v, c, d, this.ec, m, l, this.hd, this.F, this, null)
  }, Y.Ta.prototype.G = f("hd"), Y.Ta.prototype.H = function(b, c) {
    return new Y.Ta(this.F, this.Y, this.m, this.v, this.ec, c)
  }, Y.Bf = function(b, c, d, l, m, r) {
    return new Y.Ta(b, c, d, l, m, r)
  });
  return new Y.Ta(function(b, c, d, l) {
    if(0 === b) {
      return c
    }
    c = Hc(d, b);
    if(E.a(qg, l)) {
      return c
    }
    if(E.a(eg, l)) {
      return l = Hc(d, b), 0 < d - b * l ? c + 1 : c
    }
    if(w) {
      throw Error([A("No matching clause: "), A(l)].join(""));
    }
    return null
  }, d, c, b, Ii, null)
};
Y.Be = function(a, b, c) {
  return wi(Y.ec(a, b, c))
};
Y.dg = function(a, b, c) {
  return Y.Be(b, c, a)
};
Y.fc = function Ji(b, c, d) {
  "undefined" === typeof Y.Ua && (Y.Ua = function(b, c, d, l, m) {
    this.ob = b;
    this.xc = c;
    this.x = d;
    this.fc = l;
    this.jd = m;
    this.u = 0;
    this.h = 393216
  }, Y.Ua.ja = !0, Y.Ua.ia = "cljs.core.logic.fd/t18235", Y.Ua.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t18235")
  }, Y.Ua.prototype.wb = function() {
    return new af(null, new q(null, 1, [Pf, null], null), null)
  }, Y.Ua.prototype.ub = function() {
    return p(new P(null, 1, 5, Q, [this.x], null), new q(null, 2, [s, 976, t, 20], null))
  }, Y.Ua.prototype.vb = function(b, c) {
    var d = Gg(c, this.x);
    "undefined" === typeof Y.Ja && (Y.Ja = function(b, c, d, e, h, k, T, V) {
      this.q = b;
      this.ka = c;
      this.jd = d;
      this.ob = e;
      this.xc = h;
      this.x = k;
      this.fc = T;
      this.af = V;
      this.u = 0;
      this.h = 393217
    }, Y.Ja.ja = !0, Y.Ja.ia = "cljs.core.logic.fd/t18238", Y.Ja.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t18238")
    }, Y.Ja.prototype.xb = function() {
      return Y.ea(this.x)
    }, Y.Ja.prototype.call = function(b, c) {
      b = this;
      if(u(b.ob.b ? b.ob.b(b.x) : b.ob.call(null, b.x))) {
        return null
      }
      for(var d = F(b.xc), e = c;;) {
        if(d) {
          var h = G(d), k;
          k = Y.Nd(e, h);
          k = u(k) ? k : Gg(e, h);
          e = W(k) ? e : E.a(b.x, k) ? null : u(Y.ra(k, b.x)) ? Y.w(h, Y.La(k, b.x), k).call(null, e) : w ? e : null;
          if(u(e)) {
            d = J(d)
          }else {
            return null
          }
        }else {
          return mi(b.ka).call(null, e)
        }
      }
    }, Y.Ja.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)))
    }, Y.Ja.prototype.b = function(b) {
      if(u(this.ob.b ? this.ob.b(this.x) : this.ob.call(null, this.x))) {
        return null
      }
      for(var c = F(this.xc);;) {
        if(c) {
          var d = G(c), e;
          e = Y.Nd(b, d);
          e = u(e) ? e : Gg(b, d);
          b = W(e) ? b : E.a(this.x, e) ? null : u(Y.ra(e, this.x)) ? Y.w(d, Y.La(e, this.x), e).call(null, b) : w ? b : null;
          if(u(b)) {
            c = J(c)
          }else {
            return null
          }
        }else {
          return mi(this.ka).call(null, b)
        }
      }
    }, Y.Ja.prototype.G = f("af"), Y.Ja.prototype.H = function(b, c) {
      return new Y.Ja(this.q, this.ka, this.jd, this.ob, this.xc, this.x, this.fc, c)
    }, Y.Ef = function(b, c, d, e, h, k, T, V) {
      return new Y.Ja(b, c, d, e, h, k, T, V)
    });
    return new Y.Ja(c, this, this.jd, this.ob, this.xc, d, this.fc, null)
  }, Y.Ua.prototype.G = f("jd"), Y.Ua.prototype.H = function(b, c) {
    return new Y.Ua(this.ob, this.xc, this.x, this.fc, c)
  }, Y.Df = function(b, c, d, l, m) {
    return new Y.Ua(b, c, d, l, m)
  });
  return new Y.Ua(d, c, b, Ji, null)
};
Y.Ud = function(a, b, c) {
  return wi(Y.fc(a, b, c))
};
Y.ue = function(a) {
  if(fc(a)) {
    return!0
  }
  var b = G(a);
  for(a = J(a);;) {
    if(a) {
      var c = G(a);
      if(u(Bc.a ? Bc.a(b, c) : Bc.call(null, b, c))) {
        b = c, a = J(a)
      }else {
        return!1
      }
    }else {
      return!0
    }
  }
};
Y.oc = function Ki(b) {
  "undefined" === typeof Y.Va && (Y.Va = function(b, d, e) {
    this.Rb = b;
    this.oc = d;
    this.kd = e;
    this.u = 0;
    this.h = 393216
  }, Y.Va.ja = !0, Y.Va.ia = "cljs.core.logic.fd/t18257", Y.Va.na = function(b, d) {
    return D(d, "cljs.core.logic.fd/t18257")
  }, Y.Va.prototype.wb = function() {
    return new af(null, new q(null, 1, [Pf, null], null), null)
  }, Y.Va.prototype.ub = function() {
    return p(new P(null, 1, 5, Q, [this.Rb], null), new q(null, 2, [s, 1025, t, 21], null))
  }, Y.Va.prototype.vb = function(b, d) {
    var e = Gg(d, this.Rb);
    "undefined" === typeof Y.Ka && (Y.Ka = function(b, c, d, e, r, x) {
      this.q = b;
      this.ka = c;
      this.kd = d;
      this.Rb = e;
      this.oc = r;
      this.bf = x;
      this.u = 0;
      this.h = 393217
    }, Y.Ka.ja = !0, Y.Ka.ia = "cljs.core.logic.fd/t18260", Y.Ka.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t18260")
    }, Y.Ka.prototype.xb = function() {
      return!W(this.Rb)
    }, Y.Ka.prototype.call = function(b, c) {
      b = this;
      var d = Ff(b.Rb), e = oc(d) ? ac.a(Ye, d) : d, d = Wb.a(e, !0), e = Wb.a(e, !1), e = wc.a(Bc, e);
      if(u(Y.ue(e))) {
        for(var d = zd(cf, d), e = zd(ff(), e), r = F(d), x = c;;) {
          if(r) {
            var z = G(r), x = Y.Ud(z, cc.a(d, z), e).call(null, x);
            if(u(x)) {
              r = J(r)
            }else {
              return null
            }
          }else {
            return mi(b.ka).call(null, x)
          }
        }
      }else {
        return null
      }
    }, Y.Ka.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)))
    }, Y.Ka.prototype.b = function(b) {
      var c = Ff(this.Rb), d = oc(c) ? ac.a(Ye, c) : c, c = Wb.a(d, !0), d = Wb.a(d, !1), d = wc.a(Bc, d);
      if(u(Y.ue(d))) {
        for(var c = zd(cf, c), d = zd(ff(), d), e = F(c);;) {
          if(e) {
            var r = G(e);
            b = Y.Ud(r, cc.a(c, r), d).call(null, b);
            if(u(b)) {
              e = J(e)
            }else {
              return null
            }
          }else {
            return mi(this.ka).call(null, b)
          }
        }
      }else {
        return null
      }
    }, Y.Ka.prototype.G = f("bf"), Y.Ka.prototype.H = function(b, c) {
      return new Y.Ka(this.q, this.ka, this.kd, this.Rb, this.oc, c)
    }, Y.Gf = function(b, c, d, e, r, x) {
      return new Y.Ka(b, c, d, e, r, x)
    });
    return new Y.Ka(d, this, this.kd, e, this.oc, null)
  }, Y.Va.prototype.G = f("kd"), Y.Va.prototype.H = function(b, d) {
    return new Y.Va(this.Rb, this.oc, d)
  }, Y.Ff = function(b, d, e) {
    return new Y.Va(b, d, e)
  });
  return new Y.Va(b, Ki, null)
};
Y.ag = function(a) {
  return wi(Y.oc(a))
};
Y.Hf = function Li(b, c) {
  return function(d) {
    return function() {
      return Mg(Lg(d, function(d) {
        return function() {
          return Lg(Lg(d, hi(I, b)), Y.nd(0, c))
        }
      }), function() {
        return Lg(d, function(d) {
          return function() {
            var h = X.f.Nb.b ? X.f.Nb.b(new Eb(null, "t", "t", -1640531411, null)) : X.f.Nb.call(null, new Eb(null, "t", "t", -1640531411, null)), k = X.f.Nb.b ? X.f.Nb.b(new Eb(null, "h", "h", -1640531423, null)) : X.f.Nb.call(null, new Eb(null, "h", "h", -1640531423, null));
            return Lg(Lg(d, hi($h(k, h), b)), function(b) {
              return function() {
                return Lg(Lg(b, hi(c, c)), function(b) {
                  return function() {
                    var d = X.f.Nb.b ? X.f.Nb.b(new Eb(null, "m", "m", -1640531418, null)) : X.f.Nb.call(null, new Eb(null, "m", "m", -1640531418, null));
                    return Lg(Lg(Lg(b, function() {
                      var b = Y.interval.a(0, Number.MAX_VALUE);
                      return function(c) {
                        return function() {
                          return Lg(c, X.f.Kd.a ? X.f.Kd.a(d, b) : X.f.Kd.call(null, d, b))
                        }
                      }
                    }()), Y.Td(d, 1, c)), Li(h, d))
                  }
                })
              }
            })
          }
        })
      })
    }
  }
};
Y.Mc = p(Xb([new Eb(null, "+", "+", -1640531484, null), new Eb(null, "*", "*", -1640531485, null), new Eb(null, "-", "-", -1640531482, null), new Eb(null, "/", "/", -1640531480, null), new Eb(null, "\x3c", "\x3c", -1640531467, null), new Eb(null, "!\x3d", "!\x3d", -1640530443, null), new Eb(null, "\x3d", "\x3d", -1640531466, null), new Eb(null, "\x3e", "\x3e", -1640531465, null), new Eb(null, "\x3e\x3d", "\x3e\x3d", -1640529544, null), new Eb(null, "\x3c\x3d", "\x3c\x3d", -1640529606, null)], [new Eb("cljs.core.logic.fd", 
"+", "cljs.core.logic.fd/+", 1528484149, null), new Eb("cljs.core.logic.fd", "*", "cljs.core.logic.fd/*", 1528484146, null), new Eb("cljs.core.logic.fd", "-", "cljs.core.logic.fd/-", 1528484151, null), new Eb("cljs.core.logic.fd", "quot", "cljs.core.logic.fd/quot", 1533391379, null), new Eb("cljs.core.logic.fd", "\x3c", "cljs.core.logic.fd/\x3c", 1528484292, null), new Eb("cljs.core.logic.fd", "!\x3d", "cljs.core.logic.fd/!\x3d", 1528485316, null), new Eb("cljs.core.logic.fd", "\x3d\x3d", "cljs.core.logic.fd/\x3d\x3d", 
1528485544, null), new Eb("cljs.core.logic.fd", "\x3e", "cljs.core.logic.fd/\x3e", 1528484294, null), new Eb("cljs.core.logic.fd", "\x3e\x3d", "cljs.core.logic.fd/\x3e\x3d", 1528482121, null), new Eb("cljs.core.logic.fd", "\x3c\x3d", "cljs.core.logic.fd/\x3c\x3d", 1528485515, null)]), new q(null, 2, [s, 1061, t, 28], null));
Y.od = function(a) {
  a = F(a);
  if(null == a) {
    return cf
  }
  if(a instanceof Jb) {
    a = a.e;
    a: {
      for(var b = 0, c = qb(cf);;) {
        if(b < a.length) {
          var d = b + 1, c = c.Tb(null, a[b]), b = d
        }else {
          a = c;
          break a
        }
      }
      a = void 0
    }
    return a.Ib(null)
  }
  if(w) {
    for(d = qb(cf);;) {
      if(null != a) {
        b = a.Da(null), d = d.Tb(null, a.aa(null)), a = b
      }else {
        return d.Ib(null)
      }
    }
  }else {
    return null
  }
}($e(Y.Mc));
Y.expand = function Mi(b) {
  if(oc(b)) {
    var c = N.c(b, 0, null);
    b = Jc(b);
    var d;
    d = Y.od.b ? Y.od.b(c) : Y.od.call(null, c);
    d = u(d) ? Dc.a(M(b), 2) : d;
    return u(d) ? B(B(B(I, Mi(L(c, H(b)))), Mi(G(b))), c) : L(c, sd.a(Mi, b))
  }
  return b
};
Y.Se = function() {
  function a(a, b, h) {
    if(oc(a)) {
      var k = N.c(a, 0, null), l = N.c(a, 1, null);
      a = N.c(a, 2, null);
      var m = oc(l) ? function() {
        var a = Ef.A();
        Cf.c(b, Ub, a);
        return p(new P(null, 2, 5, Q, [a, !0], null), new q(null, 2, [s, 1082, t, 40], null))
      }() : p(new P(null, 2, 5, Q, [l, !1], null), new q(null, 2, [s, 1083, t, 40], null)), r = N.c(m, 0, null), m = N.c(m, 1, null), x = oc(a) ? function() {
        var a = Ef.A();
        Cf.c(b, Ub, a);
        return p(new P(null, 2, 5, Q, [a, !0], null), new q(null, 2, [s, 1087, t, 40], null))
      }() : p(new P(null, 2, 5, Q, [a, !1], null), new q(null, 2, [s, 1088, t, 40], null)), z = N.c(x, 0, null), x = N.c(x, 1, null), k = Y.Mc.b ? Y.Mc.b(k) : Y.Mc.call(null, k);
      return L(u(h) ? B(B(B(B(I, h), z), r), k) : B(B(B(I, z), r), k), ed.a(oc(l) ? c.c(l, b, u(m) ? r : null) : null, oc(a) ? c.c(a, b, u(x) ? z : null) : null))
    }
    return a
  }
  function b(a, b) {
    return c.c(a, b, null)
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
Y.Ce = function(a, b) {
  return p(F(ed.d(B(I, p(new Eb("cljs.core.logic.fd", "fresh", "cljs.core.logic.fd/fresh", 1623660598, null), ac.a(Ye, F(ed.d(B(I, pg), B(I, 1100), K([B(I, dg), B(I, 5), B(I, s), B(I, 1100), B(I, t), B(I, 10)], 0)))))), B(I, p(ac.a(Ud, F(ed.b(a))), ac.a(Ye, F(ed.d(B(I, pg), B(I, 1100), K([B(I, dg), B(I, 11), B(I, s), B(I, 1100), B(I, t), B(I, 19)], 0)))))), K([Rc(b)], 0))), ac.a(Ye, F(ed.d(B(I, pg), B(I, 1100), K([B(I, dg), B(I, 4), B(I, s), B(I, 1101), B(I, t), B(I, 24)], 0)))))
};
Y.bg = function(a) {
  var b = Af.b(p(Rd, new q(null, 2, [s, 1104, t, 22], null)));
  a = Y.Se.a(Y.expand(a), b);
  return Y.Ce(Ya(b), a)
};
p(le, new q(null, 2, [s, 15, t, 16], null));
function Ni(a, b, c) {
  if(a ? a.Id : a) {
    return a.Id(a, b, c)
  }
  var d;
  d = Ni[n(null == a ? null : a)];
  if(!d && (d = Ni._, !d)) {
    throw y("INomSwap.swap-noms", a);
  }
  return d.call(null, a, b, c)
}
P.prototype.Id = function(a, b, c) {
  b = Ni(F(this), b, c);
  a = N.c(b, 0, null);
  b = N.c(b, 1, null);
  return p(new P(null, 2, 5, Q, [Td(a), b], null), new q(null, 2, [s, 88, t, 19], null))
};
Yh.prototype.Id = function(a, b, c) {
  c = Ni(Cg(this), b, c);
  a = N.c(c, 0, null);
  c = N.c(c, 1, null);
  c = Ni(Dg(this), b, c);
  b = N.c(c, 0, null);
  c = N.c(c, 1, null);
  return p(new P(null, 2, 5, Q, [p($h(a, b), bc(this)), c], null), new q(null, 2, [s, 83, t, 10], null))
};
Ni._ = function(a, b, c) {
  if(gc(a)) {
    if(F(a)) {
      var d = Ni(G(a), b, c);
      c = N.c(d, 0, null);
      d = N.c(d, 1, null);
      d = Ni(J(a), b, d);
      b = N.c(d, 0, null);
      d = N.c(d, 1, null);
      return p(new P(null, 2, 5, Q, [p(L(c, b), bc(a)), d], null), new q(null, 2, [s, 59, t, 59], null))
    }
    return p(new P(null, 2, 5, Q, [a, c], null), new q(null, 2, [s, 60, t, 18], null))
  }
  return jc(a) ? (c = Ni(F(a), b, c), a = N.c(c, 0, null), d = N.c(c, 1, null), p(new P(null, 2, 5, Q, [zd(p(le, new q(null, 2, [s, 63, t, 21], null)), a), d], null), new q(null, 2, [s, 63, t, 31], null))) : w ? p(new P(null, 2, 5, Q, [a, c], null), new q(null, 2, [s, 64, t, 22], null)) : null
};
Ni["null"] = function(a, b, c) {
  return p(new P(null, 2, 5, Q, [a, c], null), new q(null, 2, [s, 51, t, 30], null))
};

})();
