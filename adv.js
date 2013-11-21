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
;function ka(a, b) {
  null != a && this.append.apply(this, arguments)
}
ka.prototype.hc = "";
ka.prototype.append = function(a, b, c) {
  this.hc += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.hc += arguments[d]
    }
  }
  return this
};
ka.prototype.toString = f("hc");
var la;
function ma() {
  return p(q([na, !0, oa, !0, pa, !1, qa, !1], !0), q([s, 41, t, 20], !0))
}
function u(a) {
  return null != a && !1 !== a
}
function ra(a) {
  return u(a) ? !1 : !0
}
function v(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : w ? !1 : null
}
function sa(a) {
  return null == a ? null : a.constructor
}
function z(a, b) {
  var c = sa(b), c = u(u(c) ? c.ka : c) ? c.ja : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function ta(a) {
  var b = a.ja;
  return u(b) ? b : "" + A(a)
}
var ua = {}, va = {};
function wa(a) {
  if(a ? a.S : a) {
    return a.S(a)
  }
  var b;
  b = wa[n(null == a ? null : a)];
  if(!b && (b = wa._, !b)) {
    throw z("ICounted.-count", a);
  }
  return b.call(null, a)
}
function ya(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  b = ya[n(null == a ? null : a)];
  if(!b && (b = ya._, !b)) {
    throw z("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var za = {};
function B(a, b) {
  if(a ? a.R : a) {
    return a.R(a, b)
  }
  var c;
  c = B[n(null == a ? null : a)];
  if(!c && (c = B._, !c)) {
    throw z("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var Aa = {}, C = function() {
  function a(a, b, c) {
    if(a ? a.ua : a) {
      return a.ua(a, b, c)
    }
    var k;
    k = C[n(null == a ? null : a)];
    if(!k && (k = C._, !k)) {
      throw z("IIndexed.-nth", a);
    }
    return k.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ia : a) {
      return a.ia(a, b)
    }
    var c;
    c = C[n(null == a ? null : a)];
    if(!c && (c = C._, !c)) {
      throw z("IIndexed.-nth", a);
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
}(), Ca = {};
function Da(a) {
  if(a ? a.aa : a) {
    return a.aa(a)
  }
  var b;
  b = Da[n(null == a ? null : a)];
  if(!b && (b = Da._, !b)) {
    throw z("ISeq.-first", a);
  }
  return b.call(null, a)
}
function Ea(a) {
  if(a ? a.ma : a) {
    return a.ma(a)
  }
  var b;
  b = Ea[n(null == a ? null : a)];
  if(!b && (b = Ea._, !b)) {
    throw z("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var Fa = {}, Ga = {}, Ha = function() {
  function a(a, b, c) {
    if(a ? a.L : a) {
      return a.L(a, b, c)
    }
    var k;
    k = Ha[n(null == a ? null : a)];
    if(!k && (k = Ha._, !k)) {
      throw z("ILookup.-lookup", a);
    }
    return k.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.K : a) {
      return a.K(a, b)
    }
    var c;
    c = Ha[n(null == a ? null : a)];
    if(!c && (c = Ha._, !c)) {
      throw z("ILookup.-lookup", a);
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
}(), Ia = {};
function Ja(a, b) {
  if(a ? a.yc : a) {
    return a.yc(a, b)
  }
  var c;
  c = Ja[n(null == a ? null : a)];
  if(!c && (c = Ja._, !c)) {
    throw z("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b)
}
function Ka(a, b, c) {
  if(a ? a.Za : a) {
    return a.Za(a, b, c)
  }
  var d;
  d = Ka[n(null == a ? null : a)];
  if(!d && (d = Ka._, !d)) {
    throw z("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var La = {};
function Ma(a, b) {
  if(a ? a.jc : a) {
    return a.jc(a, b)
  }
  var c;
  c = Ma[n(null == a ? null : a)];
  if(!c && (c = Ma._, !c)) {
    throw z("IMap.-dissoc", a);
  }
  return c.call(null, a, b)
}
var Na = {};
function Oa(a) {
  if(a ? a.kc : a) {
    return a.kc(a)
  }
  var b;
  b = Oa[n(null == a ? null : a)];
  if(!b && (b = Oa._, !b)) {
    throw z("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function Pa(a) {
  if(a ? a.Ac : a) {
    return a.Ac(a)
  }
  var b;
  b = Pa[n(null == a ? null : a)];
  if(!b && (b = Pa._, !b)) {
    throw z("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var Qa = {};
function Ra(a, b) {
  if(a ? a.Fd : a) {
    return a.Fd(a, b)
  }
  var c;
  c = Ra[n(null == a ? null : a)];
  if(!c && (c = Ra._, !c)) {
    throw z("ISet.-disjoin", a);
  }
  return c.call(null, a, b)
}
function Sa(a) {
  if(a ? a.Fb : a) {
    return a.Fb(a)
  }
  var b;
  b = Sa[n(null == a ? null : a)];
  if(!b && (b = Sa._, !b)) {
    throw z("IStack.-peek", a);
  }
  return b.call(null, a)
}
function Ta(a) {
  if(a ? a.Gb : a) {
    return a.Gb(a)
  }
  var b;
  b = Ta[n(null == a ? null : a)];
  if(!b && (b = Ta._, !b)) {
    throw z("IStack.-pop", a);
  }
  return b.call(null, a)
}
var Ua = {};
function Va(a, b, c) {
  if(a ? a.Ec : a) {
    return a.Ec(a, b, c)
  }
  var d;
  d = Va[n(null == a ? null : a)];
  if(!d && (d = Va._, !d)) {
    throw z("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function Wa(a) {
  if(a ? a.Ge : a) {
    return a.state
  }
  var b;
  b = Wa[n(null == a ? null : a)];
  if(!b && (b = Wa._, !b)) {
    throw z("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var Xa = {};
function Ya(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  b = Ya[n(null == a ? null : a)];
  if(!b && (b = Ya._, !b)) {
    throw z("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var Za = {};
function $a(a, b) {
  if(a ? a.H : a) {
    return a.H(a, b)
  }
  var c;
  c = $a[n(null == a ? null : a)];
  if(!c && (c = $a._, !c)) {
    throw z("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var ab = {}, bb = function() {
  function a(a, b, c) {
    if(a ? a.da : a) {
      return a.da(a, b, c)
    }
    var k;
    k = bb[n(null == a ? null : a)];
    if(!k && (k = bb._, !k)) {
      throw z("IReduce.-reduce", a);
    }
    return k.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ca : a) {
      return a.ca(a, b)
    }
    var c;
    c = bb[n(null == a ? null : a)];
    if(!c && (c = bb._, !c)) {
      throw z("IReduce.-reduce", a);
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
function cb(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  c = cb[n(null == a ? null : a)];
  if(!c && (c = cb._, !c)) {
    throw z("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function db(a) {
  if(a ? a.N : a) {
    return a.N(a)
  }
  var b;
  b = db[n(null == a ? null : a)];
  if(!b && (b = db._, !b)) {
    throw z("IHash.-hash", a);
  }
  return b.call(null, a)
}
var eb = {};
function fb(a) {
  if(a ? a.Q : a) {
    return a.Q(a)
  }
  var b;
  b = fb[n(null == a ? null : a)];
  if(!b && (b = fb._, !b)) {
    throw z("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var gb = {}, hb = {}, ib = {};
function jb(a) {
  if(a ? a.Bc : a) {
    return a.Bc(a)
  }
  var b;
  b = jb[n(null == a ? null : a)];
  if(!b && (b = jb._, !b)) {
    throw z("IReversible.-rseq", a);
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
    throw z("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function kb(a) {
  if(a ? a.Le : a) {
    return null
  }
  var b;
  b = kb[n(null == a ? null : a)];
  if(!b && (b = kb._, !b)) {
    throw z("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var lb = {};
function mb(a, b, c) {
  if(a ? a.M : a) {
    return a.M(a, b, c)
  }
  var d;
  d = mb[n(null == a ? null : a)];
  if(!d && (d = mb._, !d)) {
    throw z("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function nb(a, b, c) {
  if(a ? a.ce : a) {
    return a.ce(0, b, c)
  }
  var d;
  d = nb[n(null == a ? null : a)];
  if(!d && (d = nb._, !d)) {
    throw z("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function ob(a) {
  if(a ? a.zc : a) {
    return a.zc(a)
  }
  var b;
  b = ob[n(null == a ? null : a)];
  if(!b && (b = ob._, !b)) {
    throw z("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function pb(a, b) {
  if(a ? a.Rb : a) {
    return a.Rb(a, b)
  }
  var c;
  c = pb[n(null == a ? null : a)];
  if(!c && (c = pb._, !c)) {
    throw z("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function qb(a) {
  if(a ? a.Sb : a) {
    return a.Sb(a)
  }
  var b;
  b = qb[n(null == a ? null : a)];
  if(!b && (b = qb._, !b)) {
    throw z("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function rb(a, b, c) {
  if(a ? a.Dc : a) {
    return a.Dc(a, b, c)
  }
  var d;
  d = rb[n(null == a ? null : a)];
  if(!d && (d = rb._, !d)) {
    throw z("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function sb(a, b, c) {
  if(a ? a.be : a) {
    return a.be(0, b, c)
  }
  var d;
  d = sb[n(null == a ? null : a)];
  if(!d && (d = sb._, !d)) {
    throw z("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function tb(a) {
  if(a ? a.Xd : a) {
    return a.Xd()
  }
  var b;
  b = tb[n(null == a ? null : a)];
  if(!b && (b = tb._, !b)) {
    throw z("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function ub(a) {
  if(a ? a.qd : a) {
    return a.qd(a)
  }
  var b;
  b = ub[n(null == a ? null : a)];
  if(!b && (b = ub._, !b)) {
    throw z("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function vb(a) {
  if(a ? a.rd : a) {
    return a.rd(a)
  }
  var b;
  b = vb[n(null == a ? null : a)];
  if(!b && (b = vb._, !b)) {
    throw z("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function wb(a) {
  if(a ? a.pd : a) {
    return a.pd(a)
  }
  var b;
  b = wb[n(null == a ? null : a)];
  if(!b && (b = wb._, !b)) {
    throw z("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function xb(a) {
  this.ff = a;
  this.u = 0;
  this.h = 1073741824
}
xb.prototype.de = function(a, b) {
  return this.ff.append(b)
};
xb.prototype.Le = ba(null);
function yb(a) {
  var b = new ka, c = new xb(b);
  a.M(null, c, ma());
  kb(c);
  return"" + A(b)
}
function zb(a, b, c, d, e) {
  this.Yb = a;
  this.name = b;
  this.Zb = c;
  this.Qb = d;
  this.$ = e;
  this.h = 2154168321;
  this.u = 4096
}
g = zb.prototype;
g.M = function(a, b) {
  return D(b, this.Zb)
};
g.N = function() {
  var a = this.Qb;
  return null != a ? a : this.Qb = a = Ab.a ? Ab.a(Bb.b ? Bb.b(this.Yb) : Bb.call(null, this.Yb), Bb.b ? Bb.b(this.name) : Bb.call(null, this.name)) : Ab.call(null, Bb.b ? Bb.b(this.Yb) : Bb.call(null, this.Yb), Bb.b ? Bb.b(this.name) : Bb.call(null, this.name))
};
g.H = function(a, b) {
  return new zb(this.Yb, this.name, this.Zb, this.Qb, b)
};
g.G = f("$");
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ha.c(c, this, null);
      case 3:
        return Ha.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return Ha.c(a, this, null)
};
g.a = function(a, b) {
  return Ha.c(a, this, b)
};
g.J = function(a, b) {
  return b instanceof zb ? this.Zb === b.Zb : !1
};
g.toString = f("Zb");
var Cb = function() {
  function a(a, b) {
    var c = null != a ? [A(a), A("/"), A(b)].join("") : b;
    return new zb(a, b, c, null, null)
  }
  function b(a) {
    return a instanceof zb ? a : c.a(null, a)
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
function E(a) {
  if(null == a) {
    return null
  }
  if(a && (a.h & 8388608 || a.Rf)) {
    return a.Q(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Db(a, 0)
  }
  if(v(eb, a)) {
    return fb(a)
  }
  if(w) {
    throw Error([A(a), A("is not ISeqable")].join(""));
  }
  return null
}
function F(a) {
  if(null == a) {
    return null
  }
  if(a && (a.h & 64 || a.Cc)) {
    return a.aa(null)
  }
  a = E(a);
  return null == a ? null : Da(a)
}
function G(a) {
  return null != a ? a && (a.h & 64 || a.Cc) ? a.ma(null) : (a = E(a)) ? Ea(a) : H : H
}
function I(a) {
  return null == a ? null : a && (a.h & 128 || a.ae) ? a.Ca(null) : E(G(a))
}
var K = function() {
  function a(a, b) {
    return a === b || cb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.a(a, d)) {
          if(I(e)) {
            a = d, d = F(e), e = I(e)
          }else {
            return b.a(d, F(e))
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2))
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
db["null"] = ba(0);
Fa["null"] = !0;
Qa["null"] = !0;
Ra["null"] = ba(null);
va["null"] = !0;
wa["null"] = ba(0);
Sa["null"] = ba(null);
Ta["null"] = ba(null);
cb["null"] = function(a, b) {
  return null == b
};
Za["null"] = !0;
$a["null"] = ba(null);
Xa["null"] = !0;
Ya["null"] = ba(null);
ya["null"] = ba(null);
La["null"] = !0;
Ma["null"] = ba(null);
Date.prototype.J = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
cb.number = function(a, b) {
  return a === b
};
Xa["function"] = !0;
Ya["function"] = ba(null);
ua["function"] = !0;
db._ = function(a) {
  return a[ca] || (a[ca] = ++da)
};
function Eb(a) {
  return a + 1
}
var Fb = function() {
  function a(a, b, c, d) {
    for(var m = wa(a);;) {
      if(d < m) {
        c = b.a ? b.a(c, C.a(a, d)) : b.call(null, c, C.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = wa(a), m = 0;;) {
      if(m < d) {
        c = b.a ? b.a(c, C.a(a, m)) : b.call(null, c, C.a(a, m)), m += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = wa(a);
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
}(), Gb = function() {
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
function Hb(a) {
  return a ? a.h & 2 || a.Fe ? !0 : a.h ? !1 : v(va, a) : v(va, a)
}
function Jb(a) {
  return a ? a.h & 16 || a.$d ? !0 : a.h ? !1 : v(Aa, a) : v(Aa, a)
}
function Db(a, b) {
  this.e = a;
  this.C = b;
  this.u = 0;
  this.h = 166199550
}
g = Db.prototype;
g.N = function() {
  return Kb.b ? Kb.b(this) : Kb.call(null, this)
};
g.Ca = function() {
  return this.C + 1 < this.e.length ? new Db(this.e, this.C + 1) : null
};
g.R = function(a, b) {
  return L.a ? L.a(b, this) : L.call(null, b, this)
};
g.Bc = function() {
  var a = wa(this);
  return 0 < a ? new Lb(this, a - 1, null) : null
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Gb.o(this.e, b, this.e[this.C], this.C + 1)
};
g.da = function(a, b, c) {
  return Gb.o(this.e, b, c, this.C)
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
  return this.C + 1 < this.e.length ? new Db(this.e, this.C + 1) : H
};
g.J = function(a, b) {
  return Mb.a ? Mb.a(this, b) : Mb.call(null, this, b)
};
g.ia = function(a, b) {
  var c = b + this.C;
  return c < this.e.length ? this.e[c] : null
};
g.ua = function(a, b, c) {
  a = b + this.C;
  return a < this.e.length ? this.e[a] : c
};
g.T = function() {
  return H
};
var Nb = function() {
  function a(a, b) {
    return b < a.length ? new Db(a, b) : null
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
}(), J = function() {
  function a(a, b) {
    return Nb.a(a, b)
  }
  function b(a) {
    return Nb.a(a, 0)
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
function Lb(a, b, c) {
  this.od = a;
  this.C = b;
  this.j = c;
  this.u = 0;
  this.h = 32374862
}
g = Lb.prototype;
g.N = function() {
  return Kb.b ? Kb.b(this) : Kb.call(null, this)
};
g.R = function(a, b) {
  return L.a ? L.a(b, this) : L.call(null, b, this)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Ob.a ? Ob.a(b, this) : Ob.call(null, b, this)
};
g.da = function(a, b, c) {
  return Ob.c ? Ob.c(b, c, this) : Ob.call(null, b, c, this)
};
g.Q = function() {
  return this
};
g.S = function() {
  return this.C + 1
};
g.aa = function() {
  return C.a(this.od, this.C)
};
g.ma = function() {
  return 0 < this.C ? new Lb(this.od, this.C - 1, null) : null
};
g.J = function(a, b) {
  return Mb.a ? Mb.a(this, b) : Mb.call(null, this, b)
};
g.H = function(a, b) {
  return new Lb(this.od, this.C, b)
};
g.G = f("j");
g.T = function() {
  return p.a ? p.a(H, this.j) : p.call(null, H, this.j)
};
cb._ = function(a, b) {
  return a === b
};
var Pb = function() {
  function a(a, b) {
    return null != a ? B(a, b) : B(H, b)
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      for(;;) {
        if(u(e)) {
          a = b.a(a, d), d = F(e), e = I(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, J(arguments, 2))
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
          if(v(va, a)) {
            a = wa(a)
          }else {
            if(w) {
              a: {
                a = E(a);
                for(var b = 0;;) {
                  if(Hb(a)) {
                    a = b + wa(a);
                    break a
                  }
                  a = I(a);
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
var Qb = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return E(a) ? F(a) : c
      }
      if(Jb(a)) {
        return C.c(a, b, c)
      }
      if(E(a)) {
        a = I(a), b -= 1
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
        if(E(a)) {
          return F(a)
        }
        throw Error("Index out of bounds");
      }
      if(Jb(a)) {
        return C.a(a, b)
      }
      if(E(a)) {
        var c = I(a), k = b - 1;
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
        return a.ua(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(v(Aa, a)) {
        return C.a(a, b)
      }
      if(w) {
        if(a ? a.h & 64 || a.Cc || (a.h ? 0 : v(Ca, a)) : v(Ca, a)) {
          return Qb.c(a, b, c)
        }
        throw Error([A("nth not supported on this type "), A(ta(sa(a)))].join(""));
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
      return a.ia(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(v(Aa, a)) {
      return C.a(a, b)
    }
    if(w) {
      if(a ? a.h & 64 || a.Cc || (a.h ? 0 : v(Ca, a)) : v(Ca, a)) {
        return Qb.a(a, b)
      }
      throw Error([A("nth not supported on this type "), A(ta(sa(a)))].join(""));
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
}(), Rb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.h & 256 || a.He) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : v(Ga, a) ? Ha.c(a, b, c) : w ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.h & 256 || a.He) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : v(Ga, a) ? Ha.a(a, b) : null
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
    return null != a ? Ka(a, b, c) : Sb.a ? Sb.a([b], [c]) : Sb.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, l, m) {
      var r = null;
      3 < arguments.length && (r = J(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, l, r)
    }
    function c(a, d, e, m) {
      for(;;) {
        if(a = b.c(a, d, e), u(m)) {
          d = F(m), e = F(I(m)), m = I(I(m))
        }else {
          return a
        }
      }
    }
    a.p = 3;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var m = F(a);
      a = G(a);
      return c(b, d, m, a)
    };
    a.d = c;
    return a
  }(), b = function(b, e, h, k) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, h);
      default:
        return c.d(b, e, h, J(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 3;
  b.g = c.g;
  b.c = a;
  b.d = c.d;
  return b
}(), Tb = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), u(d)) {
          c = F(d), d = I(d)
        }else {
          return b
        }
      }
    }
    b.p = 2;
    b.g = function(a) {
      var b = F(a);
      a = I(a);
      var c = F(a);
      a = G(a);
      return d(b, c, a)
    };
    b.d = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Ma(a, d);
      default:
        return b.d(a, d, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.b = aa();
  a.a = function(a, b) {
    return Ma(a, b)
  };
  a.d = b.d;
  return a
}();
function Ub(a) {
  var b = "function" == n(a);
  return b ? b : a ? u(u(null) ? null : a.Ee) ? !0 : a.mc ? !1 : v(ua, a) : v(ua, a)
}
var p = function Vb(b, c) {
  return Ub(b) && !(b ? b.h & 262144 || b.Vf || (b.h ? 0 : v(Za, b)) : v(Za, b)) ? Vb(function() {
    "undefined" === typeof la && (la = function(b, c, h, k) {
      this.j = b;
      this.Jc = c;
      this.jf = h;
      this.df = k;
      this.u = 0;
      this.h = 393217
    }, la.ka = !0, la.ja = "cljs.core/t20030", la.na = function(b, c) {
      return D(c, "cljs.core/t20030")
    }, la.prototype.call = function() {
      function b(d, k) {
        d = this;
        var l = null;
        1 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, l)
      }
      function c(b, d) {
        return Q.a ? Q.a(b.Jc, d) : Q.call(null, b.Jc, d)
      }
      b.p = 1;
      b.g = function(b) {
        var d = F(b);
        b = G(b);
        return c(d, b)
      };
      b.d = c;
      return b
    }(), la.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, la.prototype.a = function() {
      function b(d) {
        var k = null;
        0 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, k)
      }
      function c(b) {
        return Q.a ? Q.a(self__.Jc, b) : Q.call(null, self__.Jc, b)
      }
      b.p = 0;
      b.g = function(b) {
        b = E(b);
        return c(b)
      };
      b.d = c;
      return b
    }(), la.prototype.Ee = !0, la.prototype.G = f("df"), la.prototype.H = function(b, c) {
      return new la(this.j, this.Jc, this.jf, c)
    });
    return new la(c, b, Vb, null)
  }(), c) : $a(b, c)
};
function Wb(a) {
  return(a ? a.h & 131072 || a.Je || (a.h ? 0 : v(Xa, a)) : v(Xa, a)) ? Ya(a) : null
}
var Xb = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), u(d)) {
          c = F(d), d = I(d)
        }else {
          return b
        }
      }
    }
    b.p = 2;
    b.g = function(a) {
      var b = F(a);
      a = I(a);
      var c = F(a);
      a = G(a);
      return d(b, c, a)
    };
    b.d = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Ra(a, d);
      default:
        return b.d(a, d, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.g = b.g;
  a.b = aa();
  a.a = function(a, b) {
    return Ra(a, b)
  };
  a.d = b.d;
  return a
}(), Yb = {}, Zb = 0;
function Bb(a) {
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
            255 < Zb && (Yb = {}, Zb = 0);
            var b = Yb[a];
            "number" !== typeof b && (b = ea(a), Yb[a] = b, Zb += 1);
            a = b
          }else {
            a = w ? db(a) : null
          }
        }
      }
    }
  }
  return a
}
function $b(a) {
  return null == a || ra(E(a))
}
function ac(a) {
  return null == a ? !1 : a ? a.h & 8 || a.Lf ? !0 : a.h ? !1 : v(za, a) : v(za, a)
}
function bc(a) {
  return null == a ? !1 : a ? a.h & 4096 || a.Tf ? !0 : a.h ? !1 : v(Qa, a) : v(Qa, a)
}
function cc(a) {
  return a ? a.h & 16777216 || a.Sf ? !0 : a.h ? !1 : v(gb, a) : v(gb, a)
}
function dc(a) {
  return null == a ? !1 : a ? a.h & 1024 || a.Of ? !0 : a.h ? !1 : v(La, a) : v(La, a)
}
function ec(a) {
  return a ? a.h & 16384 || a.Uf ? !0 : a.h ? !1 : v(Ua, a) : v(Ua, a)
}
function fc(a) {
  return a ? a.u & 512 || a.Kf ? !0 : !1 : !1
}
function gc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var hc = {};
function ic(a) {
  return null == a ? !1 : a ? a.h & 64 || a.Cc ? !0 : a.h ? !1 : v(Ca, a) : v(Ca, a)
}
function jc(a) {
  return u(a) ? !0 : !1
}
function kc(a) {
  return"number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10)
}
function lc(a, b) {
  return Rb.c(a, b, hc) === hc ? !1 : !0
}
function mc(a, b) {
  return null != a && (a ? a.h & 512 || a.Jf || (a.h ? 0 : v(Ia, a)) : v(Ia, a)) && lc(a, b) ? p(R([b, Rb.a(a, b)], !0), q([s, 1223, t, 21], !0)) : null
}
function nc(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(sa(a) === sa(b)) {
    return a && (a.u & 2048 || a.Yd) ? a.Zd(null, b) : ha(a, b)
  }
  if(w) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var oc = function() {
  function a(a, b, c, k) {
    for(;;) {
      var l = nc(N.a(a, k), N.a(b, k));
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
function pc(a) {
  return K.a(a, nc) ? nc : function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return"number" === typeof d ? d : u(d) ? -1 : u(a.a ? a.a(c, b) : a.call(null, c, b)) ? 1 : 0
  }
}
var rc = function() {
  function a(a, b) {
    if(E(b)) {
      var c = qc.b ? qc.b(b) : qc.call(null, b);
      ia(c, pc(a));
      return E(c)
    }
    return H
  }
  function b(a) {
    return c.a(nc, a)
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
}(), Ob = function() {
  function a(a, b, c) {
    for(c = E(c);;) {
      if(c) {
        b = a.a ? a.a(b, F(c)) : a.call(null, b, F(c)), c = I(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = E(b);
    return c ? sc.c ? sc.c(a, F(c), I(c)) : sc.call(null, a, F(c), I(c)) : a.A ? a.A() : a.call(null)
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
}(), sc = function() {
  function a(a, b, c) {
    return c && (c.h & 524288 || c.Ke) ? c.da(null, a, b) : c instanceof Array ? Gb.c(c, a, b) : "string" === typeof c ? Gb.c(c, a, b) : v(ab, c) ? bb.c(c, a, b) : w ? Ob.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.h & 524288 || b.Ke) ? b.ca(null, a) : b instanceof Array ? Gb.a(b, a) : "string" === typeof b ? Gb.a(b, a) : v(ab, b) ? bb.a(b, a) : w ? Ob.a(a, b) : null
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
}(), tc = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      return sc.c(a, b + c, d)
    }
    b.p = 2;
    b.g = function(a) {
      var b = F(a);
      a = I(a);
      var c = F(a);
      a = G(a);
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
        return b.d(a, d, J(arguments, 2))
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
}(), uc = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      return sc.c(a, b - c, d)
    }
    b.p = 2;
    b.g = function(a) {
      var b = F(a);
      a = I(a);
      var c = F(a);
      a = G(a);
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
        return b.d(a, d, J(arguments, 2))
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
}(), vc = function() {
  var a = null, b = function() {
    function b(a, c, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, l)
    }
    function d(b, c, d) {
      return sc.c(a, b * c, d)
    }
    b.p = 2;
    b.g = function(a) {
      var b = F(a);
      a = I(a);
      var c = F(a);
      a = G(a);
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
        return b.d(a, d, J(arguments, 2))
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
}(), wc = function() {
  var a = null, b = function() {
    function a(c, h, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, h, l)
    }
    function b(a, c, d) {
      for(;;) {
        if(a < c) {
          if(I(d)) {
            a = c, c = F(d), d = I(d)
          }else {
            return c < F(d)
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var k = F(a);
      a = G(a);
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
        return b.d(a, d, J(arguments, 2))
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
}(), xc = function() {
  var a = null, b = function() {
    function a(c, h, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, h, l)
    }
    function b(a, c, d) {
      for(;;) {
        if(a <= c) {
          if(I(d)) {
            a = c, c = F(d), d = I(d)
          }else {
            return c <= F(d)
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var k = F(a);
      a = G(a);
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
        return b.d(a, d, J(arguments, 2))
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
}(), yc = function() {
  var a = null, b = function() {
    function a(c, h, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, h, l)
    }
    function b(a, c, d) {
      for(;;) {
        if(a > c) {
          if(I(d)) {
            a = c, c = F(d), d = I(d)
          }else {
            return c > F(d)
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var k = F(a);
      a = G(a);
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
        return b.d(a, d, J(arguments, 2))
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
}(), zc = function() {
  var a = null, b = function() {
    function a(c, h, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, h, l)
    }
    function b(a, c, d) {
      for(;;) {
        if(a >= c) {
          if(I(d)) {
            a = c, c = F(d), d = I(d)
          }else {
            return c >= F(d)
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var k = F(a);
      a = G(a);
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
        return b.d(a, d, J(arguments, 2))
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
}(), Ac = function() {
  function a(a, b) {
    return a > b ? a : b
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      return sc.c(b, a > d ? a : d, e)
    }
    a.p = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.b = aa();
  b.a = a;
  b.d = c.d;
  return b
}(), Bc = function() {
  function a(a, b) {
    return a < b ? a : b
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      return sc.c(b, a < d ? a : d, e)
    }
    a.p = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2))
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
function Cc(a, b) {
  return 0 <= (a - a % b) / b ? Math.floor.b ? Math.floor.b((a - a % b) / b) : Math.floor.call(null, (a - a % b) / b) : Math.ceil.b ? Math.ceil.b((a - a % b) / b) : Math.ceil.call(null, (a - a % b) / b)
}
function Dc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function Ec(a) {
  var b = 1;
  for(a = E(a);;) {
    if(a && 0 < b) {
      b -= 1, a = I(a)
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
      1 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, l)
    }
    function c(a, d) {
      for(var e = new ka(b.b(a)), m = d;;) {
        if(u(m)) {
          e = e.append(b.b(F(m))), m = I(m)
        }else {
          return e.toString()
        }
      }
    }
    a.p = 1;
    a.g = function(a) {
      var b = F(a);
      a = G(a);
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
        return c.d(b, J(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.g = c.g;
  b.A = ba("");
  b.b = a;
  b.d = c.d;
  return b
}(), Fc = function() {
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
function Mb(a, b) {
  return jc(cc(b) ? function() {
    for(var c = E(a), d = E(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(K.a(F(c), F(d))) {
        c = I(c), d = I(d)
      }else {
        return w ? !1 : null
      }
    }
  }() : null)
}
function Ab(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Kb(a) {
  if(E(a)) {
    var b = Bb(F(a));
    for(a = I(a);;) {
      if(null == a) {
        return b
      }
      b = Ab(b, Bb(F(a)));
      a = I(a)
    }
  }else {
    return 0
  }
}
function Gc(a) {
  var b = 0;
  for(a = E(a);;) {
    if(a) {
      var c = F(a), b = (b + (Bb(Hc.b ? Hc.b(c) : Hc.call(null, c)) ^ Bb(Ic.b ? Ic.b(c) : Ic.call(null, c)))) % 4503599627370496;
      a = I(a)
    }else {
      return b
    }
  }
}
function Jc(a) {
  var b = 0;
  for(a = E(a);;) {
    if(a) {
      var c = F(a), b = (b + Bb(c)) % 4503599627370496;
      a = I(a)
    }else {
      return b
    }
  }
}
function Kc(a, b, c, d, e) {
  this.j = a;
  this.qc = b;
  this.zb = c;
  this.count = d;
  this.n = e;
  this.u = 0;
  this.h = 65937646
}
g = Kc.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.Ca = function() {
  return 1 === this.count ? null : this.zb
};
g.R = function(a, b) {
  return new Kc(this.j, b, this, this.count + 1, null)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Ob.a(b, this)
};
g.da = function(a, b, c) {
  return Ob.c(b, c, this)
};
g.Q = function() {
  return this
};
g.S = f("count");
g.Fb = f("qc");
g.Gb = function() {
  return Ea(this)
};
g.aa = f("qc");
g.ma = function() {
  return 1 === this.count ? H : this.zb
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new Kc(b, this.qc, this.zb, this.count, this.n)
};
g.G = f("j");
g.T = function() {
  return H
};
function Lc(a) {
  this.j = a;
  this.u = 0;
  this.h = 65937614
}
g = Lc.prototype;
g.N = ba(0);
g.Ca = ba(null);
g.R = function(a, b) {
  return new Kc(this.j, b, null, 1, null)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Ob.a(b, this)
};
g.da = function(a, b, c) {
  return Ob.c(b, c, this)
};
g.Q = ba(null);
g.S = ba(0);
g.Fb = ba(null);
g.Gb = function() {
  throw Error("Can't pop empty list");
};
g.aa = ba(null);
g.ma = function() {
  return H
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new Lc(b)
};
g.G = f("j");
g.T = function() {
  return this
};
var H = new Lc(null);
function Mc(a) {
  return(a ? a.h & 134217728 || a.Qf || (a.h ? 0 : v(ib, a)) : v(ib, a)) ? jb(a) : sc.c(Pb, H, a)
}
var Nc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof Db) {
      b = a.e
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.aa(null)), a = a.Ca(null)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var e = H;;) {
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
    a = E(a);
    return b(a)
  };
  a.d = b;
  return a
}();
function Oc(a, b, c, d) {
  this.j = a;
  this.qc = b;
  this.zb = c;
  this.n = d;
  this.u = 0;
  this.h = 65929452
}
g = Oc.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.Ca = function() {
  return null == this.zb ? null : E(this.zb)
};
g.R = function(a, b) {
  return new Oc(null, b, this, this.n)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Ob.a(b, this)
};
g.da = function(a, b, c) {
  return Ob.c(b, c, this)
};
g.Q = function() {
  return this
};
g.aa = f("qc");
g.ma = function() {
  return null == this.zb ? H : this.zb
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new Oc(b, this.qc, this.zb, this.n)
};
g.G = f("j");
g.T = function() {
  return p(H, this.j)
};
function L(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.Cc)) ? new Oc(null, a, b, null) : new Oc(null, a, E(b), null)
}
function T(a, b, c, d) {
  this.Yb = a;
  this.name = b;
  this.Ib = c;
  this.Qb = d;
  this.h = 2153775105;
  this.u = 4096
}
g = T.prototype;
g.M = function(a, b) {
  return D(b, [A(":"), A(this.Ib)].join(""))
};
g.N = function() {
  null == this.Qb && (this.Qb = Ab(Bb(this.Yb), Bb(this.name)) + 2654435769);
  return this.Qb
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Rb.a(c, this);
      case 3:
        return Rb.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return Rb.a(a, this)
};
g.a = function(a, b) {
  return Rb.c(a, this, b)
};
g.J = function(a, b) {
  return b instanceof T ? this.Ib === b.Ib : !1
};
g.toString = function() {
  return[A(":"), A(this.Ib)].join("")
};
function Pc(a, b) {
  return a === b ? !0 : a instanceof T && b instanceof T ? a.Ib === b.Ib : !1
}
function Qc(a, b, c, d) {
  this.j = a;
  this.rc = b;
  this.q = c;
  this.n = d;
  this.u = 0;
  this.h = 32374988
}
g = Qc.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.Ca = function() {
  fb(this);
  return null == this.q ? null : I(this.q)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
function Rc(a) {
  null != a.rc && (a.q = a.rc.A ? a.rc.A() : a.rc.call(null), a.rc = null);
  return a.q
}
g.ca = function(a, b) {
  return Ob.a(b, this)
};
g.da = function(a, b, c) {
  return Ob.c(b, c, this)
};
g.Q = function() {
  Rc(this);
  if(null == this.q) {
    return null
  }
  for(var a = this.q;;) {
    if(a instanceof Qc) {
      a = Rc(a)
    }else {
      return this.q = a, E(this.q)
    }
  }
};
g.aa = function() {
  fb(this);
  return null == this.q ? null : F(this.q)
};
g.ma = function() {
  fb(this);
  return null != this.q ? G(this.q) : H
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new Qc(b, this.rc, this.q, this.n)
};
g.G = f("j");
g.T = function() {
  return p(H, this.j)
};
function Sc(a, b) {
  this.nd = a;
  this.end = b;
  this.u = 0;
  this.h = 2
}
Sc.prototype.S = f("end");
Sc.prototype.add = function(a) {
  this.nd[this.end] = a;
  return this.end += 1
};
Sc.prototype.kb = function() {
  var a = new Tc(this.nd, 0, this.end);
  this.nd = null;
  return a
};
function Tc(a, b, c) {
  this.e = a;
  this.X = b;
  this.end = c;
  this.u = 0;
  this.h = 524306
}
g = Tc.prototype;
g.ca = function(a, b) {
  return Gb.o(this.e, b, this.e[this.X], this.X + 1)
};
g.da = function(a, b, c) {
  return Gb.o(this.e, b, c, this.X)
};
g.Xd = function() {
  if(this.X === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Tc(this.e, this.X + 1, this.end)
};
g.ia = function(a, b) {
  return this.e[this.X + b]
};
g.ua = function(a, b, c) {
  return 0 <= b && b < this.end - this.X ? this.e[this.X + b] : c
};
g.S = function() {
  return this.end - this.X
};
var Uc = function() {
  function a(a, b, c) {
    return new Tc(a, b, c)
  }
  function b(a, b) {
    return new Tc(a, b, a.length)
  }
  function c(a) {
    return new Tc(a, 0, a.length)
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
function Vc(a, b, c, d) {
  this.kb = a;
  this.ob = b;
  this.j = c;
  this.n = d;
  this.h = 31850732;
  this.u = 1536
}
g = Vc.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.Ca = function() {
  if(1 < wa(this.kb)) {
    return new Vc(tb(this.kb), this.ob, this.j, null)
  }
  var a = fb(this.ob);
  return null == a ? null : a
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return C.a(this.kb, 0)
};
g.ma = function() {
  return 1 < wa(this.kb) ? new Vc(tb(this.kb), this.ob, this.j, null) : null == this.ob ? H : this.ob
};
g.pd = function() {
  return null == this.ob ? null : this.ob
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new Vc(this.kb, this.ob, b, this.n)
};
g.G = f("j");
g.T = function() {
  return p(H, this.j)
};
g.qd = f("kb");
g.rd = function() {
  return null == this.ob ? H : this.ob
};
function Wc(a, b) {
  return 0 === wa(a) ? b : new Vc(a, b, null, null)
}
function qc(a) {
  for(var b = [];;) {
    if(E(a)) {
      b.push(F(a)), a = I(a)
    }else {
      return b
    }
  }
}
function Xc(a, b) {
  if(Hb(a)) {
    return M(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && E(c)) {
      c = I(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Zc = function Yc(b) {
  return null == b ? null : null == I(b) ? E(F(b)) : w ? L(F(b), Yc(I(b))) : null
}, $c = function() {
  function a(a, b) {
    return new Qc(null, function() {
      var c = E(a);
      return c ? fc(c) ? Wc(ub(c), d.a(vb(c), b)) : L(F(c), d.a(G(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new Qc(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new Qc(null, ba(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var h = null;
      2 < arguments.length && (h = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, h)
    }
    function b(a, c, e) {
      return function y(a, b) {
        return new Qc(null, function() {
          var c = E(a);
          return c ? fc(c) ? Wc(ub(c), y(vb(c), b)) : L(F(c), y(G(c), b)) : u(b) ? y(F(b), I(b)) : null
        }, null, null)
      }(d.a(a, c), e)
    }
    a.p = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
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
        return e.d(d, k, J(arguments, 2))
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
}(), ad = function() {
  function a(a, b, c, d) {
    return L(a, L(b, L(c, d)))
  }
  function b(a, b, c) {
    return L(a, L(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, r, x) {
      var y = null;
      4 < arguments.length && (y = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, r, y)
    }
    function b(a, c, d, e, h) {
      return L(a, L(c, L(d, L(e, Zc(h)))))
    }
    a.p = 4;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var x = F(a);
      a = G(a);
      return b(c, d, e, x, a)
    };
    a.d = b;
    return a
  }(), c = function(c, h, k, l, m) {
    switch(arguments.length) {
      case 1:
        return E(c);
      case 2:
        return L(c, h);
      case 3:
        return b.call(this, c, h, k);
      case 4:
        return a.call(this, c, h, k, l);
      default:
        return d.d(c, h, k, l, J(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 4;
  c.g = d.g;
  c.b = function(a) {
    return E(a)
  };
  c.a = function(a, b) {
    return L(a, b)
  };
  c.c = b;
  c.o = a;
  c.d = d.d;
  return c
}();
function bd(a) {
  return ob(a)
}
function cd(a, b, c) {
  return rb(a, b, c)
}
function dd(a, b, c) {
  var d = E(c);
  if(0 === b) {
    return a.A ? a.A() : a.call(null)
  }
  c = Da(d);
  var e = Ea(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c)
  }
  var d = Da(e), h = Ea(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = Da(h), k = Ea(h);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var h = Da(k), l = Ea(k);
  if(4 === b) {
    return a.o ? a.o(c, d, e, h) : a.o ? a.o(c, d, e, h) : a.call(null, c, d, e, h)
  }
  k = Da(l);
  l = Ea(l);
  if(5 === b) {
    return a.O ? a.O(c, d, e, h, k) : a.O ? a.O(c, d, e, h, k) : a.call(null, c, d, e, h, k)
  }
  a = Da(l);
  var m = Ea(l);
  if(6 === b) {
    return a.$a ? a.$a(c, d, e, h, k, a) : a.$a ? a.$a(c, d, e, h, k, a) : a.call(null, c, d, e, h, k, a)
  }
  var l = Da(m), r = Ea(m);
  if(7 === b) {
    return a.ic ? a.ic(c, d, e, h, k, a, l) : a.ic ? a.ic(c, d, e, h, k, a, l) : a.call(null, c, d, e, h, k, a, l)
  }
  var m = Da(r), x = Ea(r);
  if(8 === b) {
    return a.Dd ? a.Dd(c, d, e, h, k, a, l, m) : a.Dd ? a.Dd(c, d, e, h, k, a, l, m) : a.call(null, c, d, e, h, k, a, l, m)
  }
  var r = Da(x), y = Ea(x);
  if(9 === b) {
    return a.Ed ? a.Ed(c, d, e, h, k, a, l, m, r) : a.Ed ? a.Ed(c, d, e, h, k, a, l, m, r) : a.call(null, c, d, e, h, k, a, l, m, r)
  }
  var x = Da(y), P = Ea(y);
  if(10 === b) {
    return a.sd ? a.sd(c, d, e, h, k, a, l, m, r, x) : a.sd ? a.sd(c, d, e, h, k, a, l, m, r, x) : a.call(null, c, d, e, h, k, a, l, m, r, x)
  }
  var y = Da(P), S = Ea(P);
  if(11 === b) {
    return a.td ? a.td(c, d, e, h, k, a, l, m, r, x, y) : a.td ? a.td(c, d, e, h, k, a, l, m, r, x, y) : a.call(null, c, d, e, h, k, a, l, m, r, x, y)
  }
  var P = Da(S), U = Ea(S);
  if(12 === b) {
    return a.ud ? a.ud(c, d, e, h, k, a, l, m, r, x, y, P) : a.ud ? a.ud(c, d, e, h, k, a, l, m, r, x, y, P) : a.call(null, c, d, e, h, k, a, l, m, r, x, y, P)
  }
  var S = Da(U), Y = Ea(U);
  if(13 === b) {
    return a.vd ? a.vd(c, d, e, h, k, a, l, m, r, x, y, P, S) : a.vd ? a.vd(c, d, e, h, k, a, l, m, r, x, y, P, S) : a.call(null, c, d, e, h, k, a, l, m, r, x, y, P, S)
  }
  var U = Da(Y), Ba = Ea(Y);
  if(14 === b) {
    return a.wd ? a.wd(c, d, e, h, k, a, l, m, r, x, y, P, S, U) : a.wd ? a.wd(c, d, e, h, k, a, l, m, r, x, y, P, S, U) : a.call(null, c, d, e, h, k, a, l, m, r, x, y, P, S, U)
  }
  var Y = Da(Ba), Z = Ea(Ba);
  if(15 === b) {
    return a.xd ? a.xd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y) : a.xd ? a.xd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y) : a.call(null, c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y)
  }
  var Ba = Da(Z), ja = Ea(Z);
  if(16 === b) {
    return a.yd ? a.yd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba) : a.yd ? a.yd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba) : a.call(null, c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba)
  }
  var Z = Da(ja), xa = Ea(ja);
  if(17 === b) {
    return a.zd ? a.zd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z) : a.zd ? a.zd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z) : a.call(null, c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z)
  }
  var ja = Da(xa), Ib = Ea(xa);
  if(18 === b) {
    return a.Ad ? a.Ad(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z, ja) : a.Ad ? a.Ad(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z, ja) : a.call(null, c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z, ja)
  }
  xa = Da(Ib);
  Ib = Ea(Ib);
  if(19 === b) {
    return a.Bd ? a.Bd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z, ja, xa) : a.Bd ? a.Bd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z, ja, xa) : a.call(null, c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z, ja, xa)
  }
  var Te = Da(Ib);
  Ea(Ib);
  if(20 === b) {
    return a.Cd ? a.Cd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z, ja, xa, Te) : a.Cd ? a.Cd(c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z, ja, xa, Te) : a.call(null, c, d, e, h, k, a, l, m, r, x, y, P, S, U, Y, Ba, Z, ja, xa, Te)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Q = function() {
  function a(a, b, c, d, e) {
    b = ad.o(b, c, d, e);
    c = a.p;
    return a.g ? (d = Xc(b, c + 1), d <= c ? dd(a, d, b) : a.g(b)) : a.apply(a, qc(b))
  }
  function b(a, b, c, d) {
    b = ad.c(b, c, d);
    c = a.p;
    return a.g ? (d = Xc(b, c + 1), d <= c ? dd(a, d, b) : a.g(b)) : a.apply(a, qc(b))
  }
  function c(a, b, c) {
    b = ad.a(b, c);
    c = a.p;
    if(a.g) {
      var d = Xc(b, c + 1);
      return d <= c ? dd(a, d, b) : a.g(b)
    }
    return a.apply(a, qc(b))
  }
  function d(a, b) {
    var c = a.p;
    if(a.g) {
      var d = Xc(b, c + 1);
      return d <= c ? dd(a, d, b) : a.g(b)
    }
    return a.apply(a, qc(b))
  }
  var e = null, h = function() {
    function a(c, d, e, h, k, S) {
      var U = null;
      5 < arguments.length && (U = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, h, k, U)
    }
    function b(a, c, d, e, h, k) {
      c = L(c, L(d, L(e, L(h, Zc(k)))));
      d = a.p;
      return a.g ? (e = Xc(c, d + 1), e <= d ? dd(a, e, c) : a.g(c)) : a.apply(a, qc(c))
    }
    a.p = 5;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var h = F(a);
      a = I(a);
      var k = F(a);
      a = G(a);
      return b(c, d, e, h, k, a)
    };
    a.d = b;
    return a
  }(), e = function(e, l, m, r, x, y) {
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
        return h.d(e, l, m, r, x, J(arguments, 5))
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
}(), ed = function() {
  function a(a, d, e) {
    var h = null;
    2 < arguments.length && (h = J(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, h)
  }
  function b(a, b, e) {
    return p(a, Q.c(b, Wb(a), e))
  }
  a.p = 2;
  a.g = function(a) {
    var d = F(a);
    a = I(a);
    var e = F(a);
    a = G(a);
    return b(d, e, a)
  };
  a.d = b;
  return a
}(), fd = function() {
  function a(a, b) {
    return!K.a(a, b)
  }
  var b = null, c = function() {
    function a(c, d, l) {
      var m = null;
      2 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, m)
    }
    function b(a, c, d) {
      return ra(Q.o(K, a, c, d))
    }
    a.p = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2))
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
function gd(a) {
  return E(a) ? a : null
}
function hd(a, b) {
  for(;;) {
    if(null == E(b)) {
      return!0
    }
    if(u(a.b ? a.b(F(b)) : a.call(null, F(b)))) {
      var c = a, d = I(b);
      a = c;
      b = d
    }else {
      return w ? !1 : null
    }
  }
}
function id(a, b) {
  for(;;) {
    if(E(b)) {
      var c = a.b ? a.b(F(b)) : a.call(null, F(b));
      if(u(c)) {
        return c
      }
      var c = a, d = I(b);
      a = c;
      b = d
    }else {
      return null
    }
  }
}
function jd(a) {
  return a
}
function kd(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, l) {
        var m = null;
        2 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, m)
      }
      function c(b, d, e) {
        return ra(Q.o(a, b, d, e))
      }
      b.p = 2;
      b.g = function(a) {
        var b = F(a);
        a = I(a);
        var d = F(a);
        a = G(a);
        return c(b, d, a)
      };
      b.d = c;
      return b
    }(), b = function(b, e, h) {
      switch(arguments.length) {
        case 0:
          return ra(a.A ? a.A() : a.call(null));
        case 1:
          return ra(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return ra(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.d(b, e, J(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.p = 2;
    b.g = c.g;
    return b
  }()
}
var ld = function() {
  function a(a, b, c) {
    return function() {
      var d = null, m = function() {
        function d(a, b, c, e) {
          var h = null;
          3 < arguments.length && (h = J(Array.prototype.slice.call(arguments, 3), 0));
          return l.call(this, a, b, c, h)
        }
        function l(d, r, m, x) {
          return a.b ? a.b(b.b ? b.b(Q.O(c, d, r, m, x)) : b.call(null, Q.O(c, d, r, m, x))) : a.call(null, b.b ? b.b(Q.O(c, d, r, m, x)) : b.call(null, Q.O(c, d, r, m, x)))
        }
        d.p = 3;
        d.g = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = I(a);
          var d = F(a);
          a = G(a);
          return l(b, c, d, a)
        };
        d.d = l;
        return d
      }(), d = function(d, l, y, P) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.b ? b.b(c.A ? c.A() : c.call(null)) : b.call(null, c.A ? c.A() : c.call(null))) : a.call(null, b.b ? b.b(c.A ? c.A() : c.call(null)) : b.call(null, c.A ? c.A() : c.call(null)));
          case 1:
            return a.b ? a.b(b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d))) : a.call(null, b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d)));
          case 2:
            return a.b ? a.b(b.b ? b.b(c.a ? c.a(d, l) : c.call(null, d, l)) : b.call(null, c.a ? c.a(d, l) : c.call(null, d, l))) : a.call(null, b.b ? b.b(c.a ? c.a(d, l) : c.call(null, d, l)) : b.call(null, c.a ? c.a(d, l) : c.call(null, d, l)));
          case 3:
            return a.b ? a.b(b.b ? b.b(c.c ? c.c(d, l, y) : c.call(null, d, l, y)) : b.call(null, c.c ? c.c(d, l, y) : c.call(null, d, l, y))) : a.call(null, b.b ? b.b(c.c ? c.c(d, l, y) : c.call(null, d, l, y)) : b.call(null, c.c ? c.c(d, l, y) : c.call(null, d, l, y)));
          default:
            return m.d(d, l, y, J(arguments, 3))
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
          var k = null;
          3 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, k)
        }
        function d(c, k, l, r) {
          return a.b ? a.b(Q.O(b, c, k, l, r)) : a.call(null, Q.O(b, c, k, l, r))
        }
        c.p = 3;
        c.g = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = I(a);
          var e = F(a);
          a = G(a);
          return d(b, c, e, a)
        };
        c.d = d;
        return c
      }(), c = function(c, k, x, y) {
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
            return d.d(c, k, x, J(arguments, 3))
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
      3 < arguments.length && (x = J(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, x)
    }
    function b(a, c, d, e) {
      var h = Mc(ad.o(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d)
        }
        function b(a) {
          a = Q.a(F(h), a);
          for(var c = I(h);;) {
            if(c) {
              a = F(c).call(null, a), c = I(c)
            }else {
              return a
            }
          }
        }
        a.p = 0;
        a.g = function(a) {
          a = E(a);
          return b(a)
        };
        a.d = b;
        return a
      }()
    }
    a.p = 3;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = G(a);
      return b(c, d, e, a)
    };
    a.d = b;
    return a
  }(), c = function(c, h, k, l) {
    switch(arguments.length) {
      case 0:
        return jd;
      case 1:
        return c;
      case 2:
        return b.call(this, c, h);
      case 3:
        return a.call(this, c, h, k);
      default:
        return d.d(c, h, k, J(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 3;
  c.g = d.g;
  c.A = function() {
    return jd
  };
  c.b = aa();
  c.a = b;
  c.c = a;
  c.d = d.d;
  return c
}(), md = function() {
  function a(a, b, c, d) {
    return function() {
      var m = null, r = function() {
        function r(a, b, c, d) {
          var e = null;
          3 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 3), 0));
          return m.call(this, a, b, c, e)
        }
        function m(r, x, y, Y) {
          return Q.O(a, null == r ? b : r, null == x ? c : x, null == y ? d : y, Y)
        }
        r.p = 3;
        r.g = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = I(a);
          var d = F(a);
          a = G(a);
          return m(b, c, d, a)
        };
        r.d = m;
        return r
      }(), m = function(m, y, P, S) {
        switch(arguments.length) {
          case 2:
            return a.a ? a.a(null == m ? b : m, null == y ? c : y) : a.call(null, null == m ? b : m, null == y ? c : y);
          case 3:
            return a.c ? a.c(null == m ? b : m, null == y ? c : y, null == P ? d : P) : a.call(null, null == m ? b : m, null == y ? c : y, null == P ? d : P);
          default:
            return r.d(m, y, P, J(arguments, 3))
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
          3 < arguments.length && (h = J(Array.prototype.slice.call(arguments, 3), 0));
          return l.call(this, a, b, c, h)
        }
        function l(d, m, r, x) {
          return Q.O(a, null == d ? b : d, null == m ? c : m, r, x)
        }
        d.p = 3;
        d.g = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = I(a);
          var d = F(a);
          a = G(a);
          return l(b, c, d, a)
        };
        d.d = l;
        return d
      }(), d = function(d, l, y, P) {
        switch(arguments.length) {
          case 2:
            return a.a ? a.a(null == d ? b : d, null == l ? c : l) : a.call(null, null == d ? b : d, null == l ? c : l);
          case 3:
            return a.c ? a.c(null == d ? b : d, null == l ? c : l, y) : a.call(null, null == d ? b : d, null == l ? c : l, y);
          default:
            return m.d(d, l, y, J(arguments, 3))
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
          3 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, l)
        }
        function d(c, l, k, m) {
          return Q.O(a, null == c ? b : c, l, k, m)
        }
        c.p = 3;
        c.g = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = I(a);
          var e = F(a);
          a = G(a);
          return d(b, c, e, a)
        };
        c.d = d;
        return c
      }(), c = function(c, k, x, y) {
        switch(arguments.length) {
          case 1:
            return a.b ? a.b(null == c ? b : c) : a.call(null, null == c ? b : c);
          case 2:
            return a.a ? a.a(null == c ? b : c, k) : a.call(null, null == c ? b : c, k);
          case 3:
            return a.c ? a.c(null == c ? b : c, k, x) : a.call(null, null == c ? b : c, k, x);
          default:
            return d.d(c, k, x, J(arguments, 3))
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
}(), nd = function() {
  function a(a, b, c, e) {
    return new Qc(null, function() {
      var r = E(b), x = E(c), y = E(e);
      return r && x && y ? L(a.c ? a.c(F(r), F(x), F(y)) : a.call(null, F(r), F(x), F(y)), d.o(a, G(r), G(x), G(y))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new Qc(null, function() {
      var e = E(b), r = E(c);
      return e && r ? L(a.a ? a.a(F(e), F(r)) : a.call(null, F(e), F(r)), d.c(a, G(e), G(r))) : null
    }, null, null)
  }
  function c(a, b) {
    return new Qc(null, function() {
      var c = E(b);
      if(c) {
        if(fc(c)) {
          for(var e = ub(c), r = M(e), x = new Sc(Array(r), 0), y = 0;;) {
            if(y < r) {
              var P = a.b ? a.b(C.a(e, y)) : a.call(null, C.a(e, y));
              x.add(P);
              y += 1
            }else {
              break
            }
          }
          return Wc(x.kb(), d.a(a, vb(c)))
        }
        return L(a.b ? a.b(F(c)) : a.call(null, F(c)), d.a(a, G(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, h, y) {
      var P = null;
      4 < arguments.length && (P = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, h, P)
    }
    function b(a, c, e, h, k) {
      return d.a(function(b) {
        return Q.a(a, b)
      }, function S(a) {
        return new Qc(null, function() {
          var b = d.a(E, a);
          return hd(jd, b) ? L(d.a(F, b), S(d.a(G, b))) : null
        }, null, null)
      }(Pb.d(k, h, J([e, c], 0))))
    }
    a.p = 4;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var h = F(a);
      a = G(a);
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
        return e.d(d, k, l, m, J(arguments, 4))
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
}(), pd = function od(b, c) {
  return new Qc(null, function() {
    if(0 < b) {
      var d = E(c);
      return d ? L(F(d), od(b - 1, G(d))) : null
    }
    return null
  }, null, null)
};
function qd(a, b) {
  return new Qc(null, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        var d = E(d), e;
        e = (e = d) ? c.b ? c.b(F(d)) : c.call(null, F(d)) : e;
        if(u(e)) {
          d = G(d)
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
var rd = function() {
  function a(a, b) {
    return pd(a, c.b(b))
  }
  function b(a) {
    return new Qc(null, function() {
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
}(), td = function sd(b, c) {
  return new Qc(null, function() {
    var d = E(c);
    if(d) {
      if(fc(d)) {
        for(var e = ub(d), h = M(e), k = new Sc(Array(h), 0), l = 0;;) {
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
        return Wc(k.kb(), sd(b, vb(d)))
      }
      e = F(d);
      d = G(d);
      return u(b.b ? b.b(e) : b.call(null, e)) ? L(e, sd(b, d)) : sd(b, d)
    }
    return null
  }, null, null)
};
function ud(a, b) {
  var c;
  null != a ? a && (a.u & 4 || a.Mf) ? (c = sc.c(pb, ob(a), b), c = qb(c)) : c = sc.c(B, a, b) : c = sc.c(Pb, H, b);
  return c
}
var vd = function() {
  function a(a, b, c, d, h, y) {
    var P = N.c(b, 0, null);
    b = Ec(b);
    return u(b) ? O.c(a, P, e.$a(Rb.a(a, P), b, c, d, h, y)) : O.c(a, P, c.o ? c.o(Rb.a(a, P), d, h, y) : c.call(null, Rb.a(a, P), d, h, y))
  }
  function b(a, b, c, d, h) {
    var y = N.c(b, 0, null);
    b = Ec(b);
    return u(b) ? O.c(a, y, e.O(Rb.a(a, y), b, c, d, h)) : O.c(a, y, c.c ? c.c(Rb.a(a, y), d, h) : c.call(null, Rb.a(a, y), d, h))
  }
  function c(a, b, c, d) {
    var h = N.c(b, 0, null);
    b = Ec(b);
    return u(b) ? O.c(a, h, e.o(Rb.a(a, h), b, c, d)) : O.c(a, h, c.a ? c.a(Rb.a(a, h), d) : c.call(null, Rb.a(a, h), d))
  }
  function d(a, b, c) {
    var d = N.c(b, 0, null);
    b = Ec(b);
    return u(b) ? O.c(a, d, e.c(Rb.a(a, d), b, c)) : O.c(a, d, c.b ? c.b(Rb.a(a, d)) : c.call(null, Rb.a(a, d)))
  }
  var e = null, h = function() {
    function a(c, d, e, h, k, S, U) {
      var Y = null;
      6 < arguments.length && (Y = J(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, h, k, S, Y)
    }
    function b(a, c, d, h, k, l, U) {
      var Y = N.c(c, 0, null);
      c = Ec(c);
      return u(c) ? O.c(a, Y, Q.d(e, Rb.a(a, Y), c, d, h, J([k, l, U], 0))) : O.c(a, Y, Q.d(d, Rb.a(a, Y), h, k, l, J([U], 0)))
    }
    a.p = 6;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var h = F(a);
      a = I(a);
      var k = F(a);
      a = I(a);
      var U = F(a);
      a = G(a);
      return b(c, d, e, h, k, U, a)
    };
    a.d = b;
    return a
  }(), e = function(e, l, m, r, x, y, P) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, l, m);
      case 4:
        return c.call(this, e, l, m, r);
      case 5:
        return b.call(this, e, l, m, r, x);
      case 6:
        return a.call(this, e, l, m, r, x, y);
      default:
        return h.d(e, l, m, r, x, y, J(arguments, 6))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 6;
  e.g = h.g;
  e.c = d;
  e.o = c;
  e.O = b;
  e.$a = a;
  e.d = h.d;
  return e
}();
function wd(a, b) {
  this.P = a;
  this.e = b
}
function xd(a) {
  return new wd(a.P, a.e.slice())
}
function yd(a) {
  a = a.i;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function zd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new wd(a, Array(32));
    d.e[0] = c;
    c = d;
    b -= 5
  }
}
var Bd = function Ad(b, c, d, e) {
  var h = xd(d), k = b.i - 1 >>> c & 31;
  5 === c ? h.e[k] = e : (d = d.e[k], b = null != d ? Ad(b, c - 5, d, e) : zd(null, c - 5, e), h.e[k] = b);
  return h
};
function Cd(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function Dd(a, b) {
  if(0 <= b && b < a.i) {
    if(b >= yd(a)) {
      return a.qa
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.e[b >>> d & 31], d = e
      }else {
        return c.e
      }
    }
  }else {
    return Cd(b, a.i)
  }
}
var Fd = function Ed(b, c, d, e, h) {
  var k = xd(d);
  if(0 === c) {
    k.e[e & 31] = h
  }else {
    var l = e >>> c & 31;
    b = Ed(b, c - 5, d.e[l], e, h);
    k.e[l] = b
  }
  return k
}, Hd = function Gd(b, c, d) {
  var e = b.i - 2 >>> c & 31;
  if(5 < c) {
    b = Gd(b, c - 5, d.e[e]);
    if(null == b && 0 === e) {
      return null
    }
    d = xd(d);
    d.e[e] = b;
    return d
  }
  return 0 === e ? null : w ? (d = xd(d), d.e[e] = null, d) : null
};
function Id(a, b, c, d, e, h) {
  this.j = a;
  this.i = b;
  this.shift = c;
  this.root = d;
  this.qa = e;
  this.n = h;
  this.u = 4;
  this.h = 167668511
}
g = Id.prototype;
g.zc = function() {
  return new Jd(this.i, this.shift, Kd.b ? Kd.b(this.root) : Kd.call(null, this.root), Ld.b ? Ld.b(this.qa) : Ld.call(null, this.qa))
};
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.K = function(a, b) {
  return C.c(this, b, null)
};
g.L = function(a, b, c) {
  return C.c(this, b, c)
};
g.Za = function(a, b, c) {
  if(0 <= b && b < this.i) {
    return yd(this) <= b ? (a = this.qa.slice(), a[b & 31] = c, new Id(this.j, this.i, this.shift, this.root, a, null)) : new Id(this.j, this.i, this.shift, Fd(this, this.shift, this.root, b, c), this.qa, null)
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
        return this.ia(null, c);
      case 3:
        return this.ua(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return this.ia(null, a)
};
g.a = function(a, b) {
  return this.ua(null, a, b)
};
g.R = function(a, b) {
  if(32 > this.i - yd(this)) {
    var c = this.qa.slice();
    c.push(b);
    return new Id(this.j, this.i + 1, this.shift, this.root, c, null)
  }
  var d = this.i >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new wd(null, Array(32));
    d.e[0] = this.root;
    var e = zd(null, this.shift, new wd(null, this.qa));
    d.e[1] = e
  }else {
    d = Bd(this, this.shift, this.root, new wd(null, this.qa))
  }
  return new Id(this.j, this.i + 1, c, d, [b], null)
};
g.Bc = function() {
  return 0 < this.i ? new Lb(this, this.i - 1, null) : null
};
g.kc = function() {
  return C.a(this, 0)
};
g.Ac = function() {
  return C.a(this, 1)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Fb.a(this, b)
};
g.da = function(a, b, c) {
  return Fb.c(this, b, c)
};
g.Q = function() {
  return 0 === this.i ? null : 32 > this.i ? J.b(this.qa) : w ? Md.c ? Md.c(this, 0, 0) : Md.call(null, this, 0, 0) : null
};
g.S = f("i");
g.Fb = function() {
  return 0 < this.i ? C.a(this, this.i - 1) : null
};
g.Gb = function() {
  if(0 === this.i) {
    throw Error("Can't pop empty vector");
  }
  if(1 === this.i) {
    return $a(Nd, this.j)
  }
  if(1 < this.i - yd(this)) {
    return new Id(this.j, this.i - 1, this.shift, this.root, this.qa.slice(0, -1), null)
  }
  if(w) {
    var a = Dd(this, this.i - 2), b = Hd(this, this.shift, this.root), b = null == b ? Od : b, c = this.i - 1;
    return 5 < this.shift && null == b.e[1] ? new Id(this.j, c, this.shift - 5, b.e[0], a, null) : new Id(this.j, c, this.shift, b, a, null)
  }
  return null
};
g.Ec = function(a, b, c) {
  return Ka(this, b, c)
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new Id(b, this.i, this.shift, this.root, this.qa, this.n)
};
g.G = f("j");
g.ia = function(a, b) {
  return Dd(this, b)[b & 31]
};
g.ua = function(a, b, c) {
  return 0 <= b && b < this.i ? C.a(this, b) : c
};
g.T = function() {
  return p(Nd, this.j)
};
var Od = new wd(null, Array(32)), Nd = new Id(null, 0, 5, Od, [], 0);
function R(a, b) {
  var c = a.length, d = b ? a : a.slice();
  if(32 > c) {
    return new Id(null, c, 5, Od, d, null)
  }
  for(var e = d.slice(0, 32), h = 32, k = ob(new Id(null, 32, 5, Od, e, null));;) {
    if(h < c) {
      e = h + 1, k = pb(k, d[h]), h = e
    }else {
      return qb(k)
    }
  }
}
function Pd(a) {
  return qb(sc.c(pb, ob(Nd), a))
}
var Qd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return a instanceof Db ? R.a ? R.a(a.e, !0) : R.call(null, a.e, !0) : Pd(a)
  }
  a.p = 0;
  a.g = function(a) {
    a = E(a);
    return b(a)
  };
  a.d = b;
  return a
}();
function Rd(a, b, c, d, e, h) {
  this.fa = a;
  this.Na = b;
  this.C = c;
  this.X = d;
  this.j = e;
  this.n = h;
  this.h = 32243948;
  this.u = 1536
}
g = Rd.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.Ca = function() {
  if(this.X + 1 < this.Na.length) {
    var a = Md.o ? Md.o(this.fa, this.Na, this.C, this.X + 1) : Md.call(null, this.fa, this.Na, this.C, this.X + 1);
    return null == a ? null : a
  }
  return wb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Fb.a(Sd.c ? Sd.c(this.fa, this.C + this.X, M(this.fa)) : Sd.call(null, this.fa, this.C + this.X, M(this.fa)), b)
};
g.da = function(a, b, c) {
  return Fb.c(Sd.c ? Sd.c(this.fa, this.C + this.X, M(this.fa)) : Sd.call(null, this.fa, this.C + this.X, M(this.fa)), b, c)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return this.Na[this.X]
};
g.ma = function() {
  if(this.X + 1 < this.Na.length) {
    var a = Md.o ? Md.o(this.fa, this.Na, this.C, this.X + 1) : Md.call(null, this.fa, this.Na, this.C, this.X + 1);
    return null == a ? H : a
  }
  return vb(this)
};
g.pd = function() {
  var a = this.Na.length, a = this.C + a < wa(this.fa) ? Md.c ? Md.c(this.fa, this.C + a, 0) : Md.call(null, this.fa, this.C + a, 0) : null;
  return null == a ? null : a
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return Md.O ? Md.O(this.fa, this.Na, this.C, this.X, b) : Md.call(null, this.fa, this.Na, this.C, this.X, b)
};
g.T = function() {
  return p(Nd, this.j)
};
g.qd = function() {
  return Uc.a(this.Na, this.X)
};
g.rd = function() {
  var a = this.Na.length, a = this.C + a < wa(this.fa) ? Md.c ? Md.c(this.fa, this.C + a, 0) : Md.call(null, this.fa, this.C + a, 0) : null;
  return null == a ? H : a
};
var Md = function() {
  function a(a, b, c, d, m) {
    return new Rd(a, b, c, d, m, null)
  }
  function b(a, b, c, d) {
    return new Rd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new Rd(a, Dd(a, b), b, c, null, null)
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
function Td(a, b, c, d, e) {
  this.j = a;
  this.m = b;
  this.start = c;
  this.end = d;
  this.n = e;
  this.u = 0;
  this.h = 32400159
}
g = Td.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.K = function(a, b) {
  return C.c(this, b, null)
};
g.L = function(a, b, c) {
  return C.c(this, b, c)
};
g.Za = function(a, b, c) {
  var d = this, e = d.start + b;
  return Ud.O ? Ud.O(d.j, O.c(d.m, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Ud.call(null, d.j, O.c(d.m, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ia(null, c);
      case 3:
        return this.ua(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return this.ia(null, a)
};
g.a = function(a, b) {
  return this.ua(null, a, b)
};
g.R = function(a, b) {
  return Ud.O ? Ud.O(this.j, Va(this.m, this.end, b), this.start, this.end + 1, null) : Ud.call(null, this.j, Va(this.m, this.end, b), this.start, this.end + 1, null)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Fb.a(this, b)
};
g.da = function(a, b, c) {
  return Fb.c(this, b, c)
};
g.Q = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : L(C.a(a.m, d), new Qc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
g.S = function() {
  return this.end - this.start
};
g.Fb = function() {
  return C.a(this.m, this.end - 1)
};
g.Gb = function() {
  if(this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return Ud.O ? Ud.O(this.j, this.m, this.start, this.end - 1, null) : Ud.call(null, this.j, this.m, this.start, this.end - 1, null)
};
g.Ec = function(a, b, c) {
  return Ka(this, b, c)
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return Ud.O ? Ud.O(b, this.m, this.start, this.end, this.n) : Ud.call(null, b, this.m, this.start, this.end, this.n)
};
g.G = f("j");
g.ia = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Cd(b, this.end - this.start) : C.a(this.m, this.start + b)
};
g.ua = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : C.c(this.m, this.start + b, c)
};
g.T = function() {
  return p(Nd, this.j)
};
function Ud(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Td) {
      c = b.start + c, d = b.start + d, b = b.m
    }else {
      var h = M(b);
      if(0 > c || 0 > d || c > h || d > h) {
        throw Error("Index out of bounds");
      }
      return new Td(a, b, c, d, e)
    }
  }
}
var Sd = function() {
  function a(a, b, c) {
    return Ud(null, a, b, c, null)
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
function Kd(a) {
  return new wd({}, a.e.slice())
}
function Ld(a) {
  var b = Array(32);
  gc(a, 0, b, 0, a.length);
  return b
}
var Wd = function Vd(b, c, d, e) {
  d = b.root.P === d.P ? d : new wd(b.root.P, d.e.slice());
  var h = b.i - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var k = d.e[h];
    b = null != k ? Vd(b, c - 5, k, e) : zd(b.root.P, c - 5, e)
  }
  d.e[h] = b;
  return d
};
function Jd(a, b, c, d) {
  this.i = a;
  this.shift = b;
  this.root = c;
  this.qa = d;
  this.h = 275;
  this.u = 88
}
g = Jd.prototype;
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
  return this.call.apply(this, [this].concat(b.slice()))
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
g.ia = function(a, b) {
  if(this.root.P) {
    return Dd(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
g.ua = function(a, b, c) {
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
      return yd(this) <= b ? d.qa[b & 31] = c : (a = function h(a, l) {
        var m = d.root.P === l.P ? l : new wd(d.root.P, l.e.slice());
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
      return pb(this, c)
    }
    if(w) {
      throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.i)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
g.Dc = function(a, b, c) {
  return sb(this, b, c)
};
g.Rb = function(a, b) {
  if(this.root.P) {
    if(32 > this.i - yd(this)) {
      this.qa[this.i & 31] = b
    }else {
      var c = new wd(this.root.P, this.qa), d = Array(32);
      d[0] = b;
      this.qa = d;
      if(this.i >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = zd(this.root.P, this.shift, c);
        this.root = new wd(this.root.P, d);
        this.shift = e
      }else {
        this.root = Wd(this, this.shift, this.root, c)
      }
    }
    this.i += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
g.Sb = function() {
  if(this.root.P) {
    this.root.P = null;
    var a = this.i - yd(this), b = Array(a);
    gc(this.qa, 0, b, 0, a);
    return new Id(null, this.i, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function Xd(a, b, c, d) {
  this.j = a;
  this.Ea = b;
  this.qb = c;
  this.n = d;
  this.u = 0;
  this.h = 31850572
}
g = Xd.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return F(this.Ea)
};
g.ma = function() {
  var a = I(this.Ea);
  return a ? new Xd(this.j, a, this.qb, null) : null == this.qb ? ya(this) : new Xd(this.j, this.qb, null, null)
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new Xd(b, this.Ea, this.qb, this.n)
};
g.G = f("j");
g.T = function() {
  return p(H, this.j)
};
function Yd(a, b, c, d, e) {
  this.j = a;
  this.count = b;
  this.Ea = c;
  this.qb = d;
  this.n = e;
  this.u = 0;
  this.h = 31858766
}
g = Yd.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.R = function(a, b) {
  var c = this;
  return u(c.Ea) ? new Yd(c.j, c.count + 1, c.Ea, Pb.a(function() {
    var a = c.qb;
    return u(a) ? a : p(Nd, q([s, 3798, t, 65], !0))
  }(), b), null) : new Yd(c.j, c.count + 1, Pb.a(c.Ea, b), p(Nd, q([s, 3799, t, 59], !0)), null)
};
g.toString = function() {
  return yb(this)
};
g.Q = function() {
  var a = E(this.qb), b = this.Ea;
  return u(u(b) ? b : a) ? new Xd(null, this.Ea, E(a), null) : null
};
g.S = f("count");
g.Fb = function() {
  return F(this.Ea)
};
g.Gb = function() {
  if(u(this.Ea)) {
    var a = I(this.Ea);
    return a ? new Yd(this.j, this.count - 1, a, this.qb, null) : new Yd(this.j, this.count - 1, E(this.qb), p(Nd, q([s, 3792, t, 57], !0)), null)
  }
  return this
};
g.aa = function() {
  return F(this.Ea)
};
g.ma = function() {
  return G(E(this))
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new Yd(b, this.count, this.Ea, this.qb, this.n)
};
g.G = f("j");
g.T = function() {
  return Zd
};
var Zd = new Yd(null, 0, null, p(Nd, q([s, 3820, t, 69], !0)), 0);
function $d() {
  this.u = 0;
  this.h = 2097152
}
$d.prototype.J = ba(!1);
var ae = new $d;
function be(a, b) {
  return jc(dc(b) ? M(a) === M(b) ? hd(jd, nd.a(function(a) {
    return K.a(Rb.c(b, F(a), ae), F(I(a)))
  }, a)) : null : null)
}
function ce(a, b) {
  var c = a.e;
  if(b instanceof T) {
    a: {
      for(var d = c.length, e = b.Ib, h = 0;;) {
        if(d <= h) {
          c = -1;
          break a
        }
        var k = c[h];
        if(k instanceof T && e === k.Ib) {
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
      if(b instanceof zb) {
        a: {
          d = c.length;
          e = b.Zb;
          for(h = 0;;) {
            if(d <= h) {
              c = -1;
              break a
            }
            k = c[h];
            if(k instanceof zb && e === k.Zb) {
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
                if(K.a(b, c[e])) {
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
function de(a, b, c) {
  this.e = a;
  this.C = b;
  this.$ = c;
  this.u = 0;
  this.h = 32374990
}
g = de.prototype;
g.N = function() {
  return Kb(this)
};
g.Ca = function() {
  return this.C < this.e.length - 2 ? new de(this.e, this.C + 2, this.$) : null
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Ob.a(b, this)
};
g.da = function(a, b, c) {
  return Ob.c(b, c, this)
};
g.Q = function() {
  return this
};
g.S = function() {
  return(this.e.length - this.C) / 2
};
g.aa = function() {
  return p(R([this.e[this.C], this.e[this.C + 1]], !0), q([s, 4108, t, 38], !0))
};
g.ma = function() {
  return this.C < this.e.length - 2 ? new de(this.e, this.C + 2, this.$) : H
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new de(this.e, this.C, b)
};
g.G = f("$");
g.T = function() {
  return p(H, this.$)
};
function ee(a, b, c, d) {
  this.j = a;
  this.i = b;
  this.e = c;
  this.n = d;
  this.u = 4;
  this.h = 16123663
}
g = ee.prototype;
g.zc = function() {
  return new fe({}, this.e.length, this.e.slice())
};
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Gc(this)
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  a = ce(this, b);
  return-1 === a ? c : this.e[a + 1]
};
g.Za = function(a, b, c) {
  a = ce(this, b);
  if(-1 === a) {
    if(this.i < ge) {
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
      return new ee(this.j, this.i + 1, e, null)
    }
    return $a(Ka(ud(he, this), b, c), this.j)
  }
  return c === this.e[a + 1] ? this : w ? (b = this.e.slice(), b[a + 1] = c, new ee(this.j, this.i, b, null)) : null
};
g.yc = function(a, b) {
  return-1 !== ce(this, b)
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
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return ec(b) ? Ka(this, C.a(b, 0), C.a(b, 1)) : sc.c(B, this, b)
};
g.toString = function() {
  return yb(this)
};
g.Q = function() {
  return 0 <= this.e.length - 2 ? new de(this.e, 0, null) : null
};
g.S = f("i");
g.J = function(a, b) {
  return be(this, b)
};
g.H = function(a, b) {
  return new ee(b, this.i, this.e, this.n)
};
g.G = f("j");
g.T = function() {
  return $a(ie, this.j)
};
g.jc = function(a, b) {
  if(0 <= ce(this, b)) {
    var c = this.e.length, d = c - 2;
    if(0 === d) {
      return ya(this)
    }
    for(var d = Array(d), e = 0, h = 0;;) {
      if(e >= c) {
        return new ee(this.j, this.i - 1, d, null)
      }
      if(K.a(b, this.e[e])) {
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
var ie = new ee(null, 0, [], null), ge = 8;
function q(a, b) {
  var c = b ? a : a.slice();
  return new ee(null, c.length / 2, c, null)
}
function fe(a, b, c) {
  this.oc = a;
  this.Xb = b;
  this.e = c;
  this.u = 56;
  this.h = 258
}
g = fe.prototype;
g.Dc = function(a, b, c) {
  if(u(this.oc)) {
    a = ce(this, b);
    if(-1 === a) {
      return this.Xb + 2 <= 2 * ge ? (this.Xb += 2, this.e.push(b), this.e.push(c), this) : cd(je.a ? je.a(this.Xb, this.e) : je.call(null, this.Xb, this.e), b, c)
    }
    c !== this.e[a + 1] && (this.e[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
g.Rb = function(a, b) {
  if(u(this.oc)) {
    if(b ? b.h & 2048 || b.Ie || (b.h ? 0 : v(Na, b)) : v(Na, b)) {
      return rb(this, Hc.b ? Hc.b(b) : Hc.call(null, b), Ic.b ? Ic.b(b) : Ic.call(null, b))
    }
    for(var c = E(b), d = this;;) {
      var e = F(c);
      if(u(e)) {
        c = I(c), d = rb(d, Hc.b ? Hc.b(e) : Hc.call(null, e), Ic.b ? Ic.b(e) : Ic.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
g.Sb = function() {
  if(u(this.oc)) {
    return this.oc = !1, new ee(null, Cc(this.Xb, 2), this.e, null)
  }
  throw Error("persistent! called twice");
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  if(u(this.oc)) {
    return a = ce(this, b), -1 === a ? c : this.e[a + 1]
  }
  throw Error("lookup after persistent!");
};
g.S = function() {
  if(u(this.oc)) {
    return Cc(this.Xb, 2)
  }
  throw Error("count after persistent!");
};
function je(a, b) {
  for(var c = ob(he), d = 0;;) {
    if(d < a) {
      c = rb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function ke() {
  this.r = !1
}
function le(a, b) {
  return a === b ? !0 : Pc(a, b) ? !0 : w ? K.a(a, b) : null
}
var me = function() {
  function a(a, b, c, k, l) {
    a = a.slice();
    a[b] = c;
    a[k] = l;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
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
function ne(a, b) {
  var c = Array(a.length - 2);
  gc(a, 0, c, 0, 2 * b);
  gc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var oe = function() {
  function a(a, b, c, k, l, m) {
    a = a.pc(b);
    a.e[c] = k;
    a.e[l] = m;
    return a
  }
  function b(a, b, c, k) {
    a = a.pc(b);
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
  c.$a = a;
  return c
}();
function pe(a, b, c) {
  this.P = a;
  this.U = b;
  this.e = c
}
g = pe.prototype;
g.fb = function(a, b, c, d, e, h) {
  var k = 1 << (c >>> b & 31), l = Dc(this.U & k - 1);
  if(0 === (this.U & k)) {
    var m = Dc(this.U);
    if(2 * m < this.e.length) {
      a = this.pc(a);
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
      l[c >>> b & 31] = qe.fb(a, b + 5, c, d, e, h);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.U >>> d & 1) && (l[d] = null != this.e[e] ? qe.fb(a, b + 5, Bb(this.e[e]), this.e[e], this.e[e + 1], h) : this.e[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new re(a, m + 1, l)
    }
    return w ? (b = Array(2 * (m + 4)), gc(this.e, 0, b, 0, 2 * l), b[2 * l] = d, b[2 * l + 1] = e, gc(this.e, 2 * l, b, 2 * (l + 1), 2 * (m - l)), h.r = !0, a = this.pc(a), a.e = b, a.U |= k, a) : null
  }
  m = this.e[2 * l];
  k = this.e[2 * l + 1];
  return null == m ? (m = k.fb(a, b + 5, c, d, e, h), m === k ? this : oe.o(this, a, 2 * l + 1, m)) : le(d, m) ? e === k ? this : oe.o(this, a, 2 * l + 1, e) : w ? (h.r = !0, oe.$a(this, a, 2 * l, null, 2 * l + 1, se.ic ? se.ic(a, b + 5, m, k, c, d, e) : se.call(null, a, b + 5, m, k, c, d, e))) : null
};
g.Hc = function() {
  return te.b ? te.b(this.e) : te.call(null, this.e)
};
g.pc = function(a) {
  if(a === this.P) {
    return this
  }
  var b = Dc(this.U), c = Array(0 > b ? 4 : 2 * (b + 1));
  gc(this.e, 0, c, 0, 2 * b);
  return new pe(a, this.U, c)
};
g.Ic = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.U & d)) {
    return this
  }
  var e = Dc(this.U & d - 1), h = this.e[2 * e], k = this.e[2 * e + 1];
  return null == h ? (a = k.Ic(a + 5, b, c), a === k ? this : null != a ? new pe(null, this.U, me.c(this.e, 2 * e + 1, a)) : this.U === d ? null : w ? new pe(null, this.U ^ d, ne(this.e, e)) : null) : le(c, h) ? new pe(null, this.U ^ d, ne(this.e, e)) : w ? this : null
};
g.eb = function(a, b, c, d, e) {
  var h = 1 << (b >>> a & 31), k = Dc(this.U & h - 1);
  if(0 === (this.U & h)) {
    var l = Dc(this.U);
    if(16 <= l) {
      k = Array(32);
      k[b >>> a & 31] = qe.eb(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.U >>> c & 1) && (k[c] = null != this.e[d] ? qe.eb(a + 5, Bb(this.e[d]), this.e[d], this.e[d + 1], e) : this.e[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new re(null, l + 1, k)
    }
    a = Array(2 * (l + 1));
    gc(this.e, 0, a, 0, 2 * k);
    a[2 * k] = c;
    a[2 * k + 1] = d;
    gc(this.e, 2 * k, a, 2 * (k + 1), 2 * (l - k));
    e.r = !0;
    return new pe(null, this.U | h, a)
  }
  l = this.e[2 * k];
  h = this.e[2 * k + 1];
  return null == l ? (l = h.eb(a + 5, b, c, d, e), l === h ? this : new pe(null, this.U, me.c(this.e, 2 * k + 1, l))) : le(c, l) ? d === h ? this : new pe(null, this.U, me.c(this.e, 2 * k + 1, d)) : w ? (e.r = !0, new pe(null, this.U, me.O(this.e, 2 * k, null, 2 * k + 1, se.$a ? se.$a(a + 5, l, h, b, c, d) : se.call(null, a + 5, l, h, b, c, d)))) : null
};
g.Jb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.U & e)) {
    return d
  }
  var h = Dc(this.U & e - 1), e = this.e[2 * h], h = this.e[2 * h + 1];
  return null == e ? h.Jb(a + 5, b, c, d) : le(c, e) ? h : w ? d : null
};
var qe = new pe(null, 0, []);
function re(a, b, c) {
  this.P = a;
  this.i = b;
  this.e = c
}
g = re.prototype;
g.fb = function(a, b, c, d, e, h) {
  var k = c >>> b & 31, l = this.e[k];
  if(null == l) {
    return a = oe.o(this, a, k, qe.fb(a, b + 5, c, d, e, h)), a.i += 1, a
  }
  b = l.fb(a, b + 5, c, d, e, h);
  return b === l ? this : oe.o(this, a, k, b)
};
g.Hc = function() {
  return ue.b ? ue.b(this.e) : ue.call(null, this.e)
};
g.pc = function(a) {
  return a === this.P ? this : new re(a, this.i, this.e.slice())
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
                d = new pe(null, k, b);
                break a
              }
            }
            d = void 0
          }
        }else {
          d = new re(null, this.i - 1, me.c(this.e, d, a))
        }
      }else {
        d = w ? new re(null, this.i, me.c(this.e, d, a)) : null
      }
    }
    return d
  }
  return this
};
g.eb = function(a, b, c, d, e) {
  var h = b >>> a & 31, k = this.e[h];
  if(null == k) {
    return new re(null, this.i + 1, me.c(this.e, h, qe.eb(a + 5, b, c, d, e)))
  }
  a = k.eb(a + 5, b, c, d, e);
  return a === k ? this : new re(null, this.i, me.c(this.e, h, a))
};
g.Jb = function(a, b, c, d) {
  var e = this.e[b >>> a & 31];
  return null != e ? e.Jb(a + 5, b, c, d) : d
};
function ve(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(le(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function we(a, b, c, d) {
  this.P = a;
  this.yb = b;
  this.i = c;
  this.e = d
}
g = we.prototype;
g.fb = function(a, b, c, d, e, h) {
  if(c === this.yb) {
    b = ve(this.e, this.i, d);
    if(-1 === b) {
      if(this.e.length > 2 * this.i) {
        return a = oe.$a(this, a, 2 * this.i, d, 2 * this.i + 1, e), h.r = !0, a.i += 1, a
      }
      c = this.e.length;
      b = Array(c + 2);
      gc(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      h.r = !0;
      h = this.i + 1;
      a === this.P ? (this.e = b, this.i = h, a = this) : a = new we(this.P, this.yb, h, b);
      return a
    }
    return this.e[b + 1] === e ? this : oe.o(this, a, b + 1, e)
  }
  return(new pe(a, 1 << (this.yb >>> b & 31), [null, this, null, null])).fb(a, b, c, d, e, h)
};
g.Hc = function() {
  return te.b ? te.b(this.e) : te.call(null, this.e)
};
g.pc = function(a) {
  if(a === this.P) {
    return this
  }
  var b = Array(2 * (this.i + 1));
  gc(this.e, 0, b, 0, 2 * this.i);
  return new we(a, this.yb, this.i, b)
};
g.Ic = function(a, b, c) {
  a = ve(this.e, this.i, c);
  return-1 === a ? this : 1 === this.i ? null : w ? new we(null, this.yb, this.i - 1, ne(this.e, Cc(a, 2))) : null
};
g.eb = function(a, b, c, d, e) {
  return b === this.yb ? (a = ve(this.e, this.i, c), -1 === a ? (a = 2 * this.i, b = Array(a + 2), gc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.r = !0, new we(null, this.yb, this.i + 1, b)) : K.a(this.e[a], d) ? this : new we(null, this.yb, this.i, me.c(this.e, a + 1, d))) : (new pe(null, 1 << (this.yb >>> a & 31), [null, this])).eb(a, b, c, d, e)
};
g.Jb = function(a, b, c, d) {
  a = ve(this.e, this.i, c);
  return 0 > a ? d : le(c, this.e[a]) ? this.e[a + 1] : w ? d : null
};
var se = function() {
  function a(a, b, c, k, l, m, r) {
    var x = Bb(c);
    if(x === l) {
      return new we(null, x, 2, [c, k, m, r])
    }
    var y = new ke;
    return qe.fb(a, b, x, c, k, y).fb(a, b, l, m, r, y)
  }
  function b(a, b, c, k, l, m) {
    var r = Bb(b);
    if(r === k) {
      return new we(null, r, 2, [b, c, l, m])
    }
    var x = new ke;
    return qe.eb(a, r, b, c, x).eb(a, k, l, m, x)
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
  c.$a = b;
  c.ic = a;
  return c
}();
function xe(a, b, c, d, e) {
  this.j = a;
  this.ib = b;
  this.C = c;
  this.q = d;
  this.n = e;
  this.u = 0;
  this.h = 32374860
}
g = xe.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Ob.a(b, this)
};
g.da = function(a, b, c) {
  return Ob.c(b, c, this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return null == this.q ? p(R([this.ib[this.C], this.ib[this.C + 1]], !0), q([s, 4848, t, 44], !0)) : F(this.q)
};
g.ma = function() {
  return null == this.q ? te.c ? te.c(this.ib, this.C + 2, null) : te.call(null, this.ib, this.C + 2, null) : te.c ? te.c(this.ib, this.C, I(this.q)) : te.call(null, this.ib, this.C, I(this.q))
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new xe(b, this.ib, this.C, this.q, this.n)
};
g.G = f("j");
g.T = function() {
  return p(H, this.j)
};
var te = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new xe(null, a, b, null, null)
          }
          var k = a[b + 1];
          if(u(k) && (k = k.Hc(), u(k))) {
            return new xe(null, a, b + 2, k, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new xe(null, a, b, c, null)
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
function ye(a, b, c, d, e) {
  this.j = a;
  this.ib = b;
  this.C = c;
  this.q = d;
  this.n = e;
  this.u = 0;
  this.h = 32374860
}
g = ye.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Ob.a(b, this)
};
g.da = function(a, b, c) {
  return Ob.c(b, c, this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return F(this.q)
};
g.ma = function() {
  return ue.o ? ue.o(null, this.ib, this.C, I(this.q)) : ue.call(null, null, this.ib, this.C, I(this.q))
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new ye(b, this.ib, this.C, this.q, this.n)
};
g.G = f("j");
g.T = function() {
  return p(H, this.j)
};
var ue = function() {
  function a(a, b, c, k) {
    if(null == k) {
      for(k = b.length;;) {
        if(c < k) {
          var l = b[c];
          if(u(l) && (l = l.Hc(), u(l))) {
            return new ye(a, b, c + 1, l, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new ye(a, b, c, k, null)
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
function ze(a, b, c, d, e, h) {
  this.j = a;
  this.i = b;
  this.root = c;
  this.ta = d;
  this.Ia = e;
  this.n = h;
  this.u = 4;
  this.h = 16123663
}
g = ze.prototype;
g.zc = function() {
  return new Ae({}, this.root, this.i, this.ta, this.Ia)
};
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Gc(this)
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return null == b ? this.ta ? this.Ia : c : null == this.root ? c : w ? this.root.Jb(0, Bb(b), b, c) : null
};
g.Za = function(a, b, c) {
  if(null == b) {
    return this.ta && c === this.Ia ? this : new ze(this.j, this.ta ? this.i : this.i + 1, this.root, !0, c, null)
  }
  a = new ke;
  b = (null == this.root ? qe : this.root).eb(0, Bb(b), b, c, a);
  return b === this.root ? this : new ze(this.j, a.r ? this.i + 1 : this.i, b, this.ta, this.Ia, null)
};
g.yc = function(a, b) {
  return null == b ? this.ta : null == this.root ? !1 : w ? this.root.Jb(0, Bb(b), b, hc) !== hc : null
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
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return ec(b) ? Ka(this, C.a(b, 0), C.a(b, 1)) : sc.c(B, this, b)
};
g.toString = function() {
  return yb(this)
};
g.Q = function() {
  if(0 < this.i) {
    var a = null != this.root ? this.root.Hc() : null;
    return this.ta ? L(p(R([null, this.Ia], !0), q([s, 4974, t, 30], !0)), a) : a
  }
  return null
};
g.S = f("i");
g.J = function(a, b) {
  return be(this, b)
};
g.H = function(a, b) {
  return new ze(b, this.i, this.root, this.ta, this.Ia, this.n)
};
g.G = f("j");
g.T = function() {
  return $a(he, this.j)
};
g.jc = function(a, b) {
  if(null == b) {
    return this.ta ? new ze(this.j, this.i - 1, this.root, !1, null, null) : this
  }
  if(null == this.root) {
    return this
  }
  if(w) {
    var c = this.root.Ic(0, Bb(b), b);
    return c === this.root ? this : new ze(this.j, this.i - 1, c, this.ta, this.Ia, null)
  }
  return null
};
var he = new ze(null, 0, null, !1, null, 0);
function Sb(a, b) {
  for(var c = a.length, d = 0, e = ob(he);;) {
    if(d < c) {
      var h = d + 1, e = e.Dc(null, a[d], b[d]), d = h
    }else {
      return qb(e)
    }
  }
}
function Ae(a, b, c, d, e) {
  this.P = a;
  this.root = b;
  this.count = c;
  this.ta = d;
  this.Ia = e;
  this.u = 56;
  this.h = 258
}
g = Ae.prototype;
g.Dc = function(a, b, c) {
  return Be(this, b, c)
};
g.Rb = function(a, b) {
  var c;
  a: {
    if(this.P) {
      if(b ? b.h & 2048 || b.Ie || (b.h ? 0 : v(Na, b)) : v(Na, b)) {
        c = Be(this, Hc.b ? Hc.b(b) : Hc.call(null, b), Ic.b ? Ic.b(b) : Ic.call(null, b));
        break a
      }
      c = E(b);
      for(var d = this;;) {
        var e = F(c);
        if(u(e)) {
          c = I(c), d = Be(d, Hc.b ? Hc.b(e) : Hc.call(null, e), Ic.b ? Ic.b(e) : Ic.call(null, e))
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
g.Sb = function() {
  var a;
  if(this.P) {
    this.P = null, a = new ze(null, this.count, this.root, this.ta, this.Ia, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
g.K = function(a, b) {
  return null == b ? this.ta ? this.Ia : null : null == this.root ? null : this.root.Jb(0, Bb(b), b)
};
g.L = function(a, b, c) {
  return null == b ? this.ta ? this.Ia : c : null == this.root ? c : this.root.Jb(0, Bb(b), b, c)
};
g.S = function() {
  if(this.P) {
    return this.count
  }
  throw Error("count after persistent!");
};
function Be(a, b, c) {
  if(a.P) {
    if(null == b) {
      a.Ia !== c && (a.Ia = c), a.ta || (a.count += 1, a.ta = !0)
    }else {
      var d = new ke;
      b = (null == a.root ? qe : a.root).fb(a.P, 0, Bb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.r && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
function Ce(a, b, c) {
  for(var d = b;;) {
    if(null != a) {
      b = c ? a.left : a.right, d = Pb.a(d, a), a = b
    }else {
      return d
    }
  }
}
function De(a, b, c, d, e) {
  this.j = a;
  this.stack = b;
  this.Lc = c;
  this.i = d;
  this.n = e;
  this.u = 0;
  this.h = 32374862
}
g = De.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Ob.a(b, this)
};
g.da = function(a, b, c) {
  return Ob.c(b, c, this)
};
g.Q = function() {
  return this
};
g.S = function() {
  return 0 > this.i ? M(I(this)) + 1 : this.i
};
g.aa = function() {
  return Sa(this.stack)
};
g.ma = function() {
  var a = F(this.stack), a = Ce(this.Lc ? a.right : a.left, I(this.stack), this.Lc);
  return null != a ? new De(null, a, this.Lc, this.i - 1, null) : H
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new De(b, this.stack, this.Lc, this.i, this.n)
};
g.G = f("j");
g.T = function() {
  return p(H, this.j)
};
function Ee(a, b, c, d) {
  return c instanceof V ? c.left instanceof V ? new V(c.key, c.r, c.left.tb(), new Fe(a, b, c.right, d, null), null) : c.right instanceof V ? new V(c.right.key, c.right.r, new Fe(c.key, c.r, c.left, c.right.left, null), new Fe(a, b, c.right.right, d, null), null) : w ? new Fe(a, b, c, d, null) : null : new Fe(a, b, c, d, null)
}
function Ge(a, b, c, d) {
  return d instanceof V ? d.right instanceof V ? new V(d.key, d.r, new Fe(a, b, c, d.left, null), d.right.tb(), null) : d.left instanceof V ? new V(d.left.key, d.left.r, new Fe(a, b, c, d.left.left, null), new Fe(d.key, d.r, d.left.right, d.right, null), null) : w ? new Fe(a, b, c, d, null) : null : new Fe(a, b, c, d, null)
}
function He(a, b, c, d) {
  if(c instanceof V) {
    return new V(a, b, c.tb(), d, null)
  }
  if(d instanceof Fe) {
    return Ge(a, b, c, d.Kc())
  }
  if(d instanceof V && d.left instanceof Fe) {
    return new V(d.left.key, d.left.r, new Fe(a, b, c, d.left.left, null), Ge(d.key, d.r, d.left.right, d.right.Kc()), null)
  }
  if(w) {
    throw Error("red-black tree invariant violation");
  }
  return null
}
function Fe(a, b, c, d, e) {
  this.key = a;
  this.r = b;
  this.left = c;
  this.right = d;
  this.n = e;
  this.u = 0;
  this.h = 32402207
}
g = Fe.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.K = function(a, b) {
  return C.c(this, b, null)
};
g.L = function(a, b, c) {
  return C.c(this, b, c)
};
g.Za = function(a, b, c) {
  return O.c(p(R([this.key, this.r], !0), q([s, 5402, t, 21], !0)), b, c)
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
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return p(R([this.key, this.r, b], !0), q([s, 5373, t, 30], !0))
};
g.kc = f("key");
g.Ac = f("r");
g.Ud = function(a) {
  return a.Wd(this)
};
g.Kc = function() {
  return new V(this.key, this.r, this.left, this.right, null)
};
g.replace = function(a, b, c, d) {
  return new Fe(a, b, c, d, null)
};
g.Td = function(a) {
  return a.Vd(this)
};
g.Vd = function(a) {
  return new Fe(a.key, a.r, this, a.right, null)
};
g.Wd = function(a) {
  return new Fe(a.key, a.r, a.left, this, null)
};
g.tb = function() {
  return this
};
g.ca = function(a, b) {
  return Fb.a(this, b)
};
g.da = function(a, b, c) {
  return Fb.c(this, b, c)
};
g.Q = function() {
  return B(B(H, this.r), this.key)
};
g.S = ba(2);
g.Fb = f("r");
g.Gb = function() {
  return p(R([this.key], !0), q([s, 5370, t, 21], !0))
};
g.Ec = function(a, b, c) {
  return Va(p(R([this.key, this.r], !0), q([s, 5406, t, 24], !0)), b, c)
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return p(p(R([this.key, this.r], !0), q([s, 5365, t, 25], !0)), b)
};
g.G = ba(null);
g.ia = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.r : null
};
g.ua = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.r : w ? c : null
};
g.T = function() {
  return p(Nd, q([s, 5376, t, 20], !0))
};
function V(a, b, c, d, e) {
  this.key = a;
  this.r = b;
  this.left = c;
  this.right = d;
  this.n = e;
  this.u = 0;
  this.h = 32402207
}
g = V.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.K = function(a, b) {
  return C.c(this, b, null)
};
g.L = function(a, b, c) {
  return C.c(this, b, c)
};
g.Za = function(a, b, c) {
  return O.c(p(R([this.key, this.r], !0), q([s, 5543, t, 21], !0)), b, c)
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
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return p(R([this.key, this.r, b], !0), q([s, 5514, t, 30], !0))
};
g.kc = f("key");
g.Ac = f("r");
g.Ud = function(a) {
  return new V(this.key, this.r, this.left, a, null)
};
g.Kc = function() {
  throw Error("red-black tree invariant violation");
};
g.replace = function(a, b, c, d) {
  return new V(a, b, c, d, null)
};
g.Td = function(a) {
  return new V(this.key, this.r, a, this.right, null)
};
g.Vd = function(a) {
  return this.left instanceof V ? new V(this.key, this.r, this.left.tb(), new Fe(a.key, a.r, this.right, a.right, null), null) : this.right instanceof V ? new V(this.right.key, this.right.r, new Fe(this.key, this.r, this.left, this.right.left, null), new Fe(a.key, a.r, this.right.right, a.right, null), null) : w ? new Fe(a.key, a.r, this, a.right, null) : null
};
g.Wd = function(a) {
  return this.right instanceof V ? new V(this.key, this.r, new Fe(a.key, a.r, a.left, this.left, null), this.right.tb(), null) : this.left instanceof V ? new V(this.left.key, this.left.r, new Fe(a.key, a.r, a.left, this.left.left, null), new Fe(this.key, this.r, this.left.right, this.right, null), null) : w ? new Fe(a.key, a.r, a.left, this, null) : null
};
g.tb = function() {
  return new Fe(this.key, this.r, this.left, this.right, null)
};
g.ca = function(a, b) {
  return Fb.a(this, b)
};
g.da = function(a, b, c) {
  return Fb.c(this, b, c)
};
g.Q = function() {
  return B(B(H, this.r), this.key)
};
g.S = ba(2);
g.Fb = f("r");
g.Gb = function() {
  return p(R([this.key], !0), q([s, 5511, t, 21], !0))
};
g.Ec = function(a, b, c) {
  return Va(p(R([this.key, this.r], !0), q([s, 5547, t, 24], !0)), b, c)
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return p(p(R([this.key, this.r], !0), q([s, 5506, t, 25], !0)), b)
};
g.G = ba(null);
g.ia = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.r : null
};
g.ua = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.r : w ? c : null
};
g.T = function() {
  return p(Nd, q([s, 5517, t, 20], !0))
};
var Je = function Ie(b, c, d, e, h) {
  if(null == c) {
    return new V(d, e, null, null, null)
  }
  var k = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
  return 0 === k ? (h[0] = c, null) : 0 > k ? (b = Ie(b, c.left, d, e, h), null != b ? c.Td(b) : null) : w ? (b = Ie(b, c.right, d, e, h), null != b ? c.Ud(b) : null) : null
}, Le = function Ke(b, c) {
  if(null == b) {
    return c
  }
  if(null == c) {
    return b
  }
  if(b instanceof V) {
    if(c instanceof V) {
      var d = Ke(b.right, c.left);
      return d instanceof V ? new V(d.key, d.r, new V(b.key, b.r, b.left, d.left, null), new V(c.key, c.r, d.right, c.right, null), null) : new V(b.key, b.r, b.left, new V(c.key, c.r, d, c.right, null), null)
    }
    return new V(b.key, b.r, b.left, Ke(b.right, c), null)
  }
  return c instanceof V ? new V(c.key, c.r, Ke(b, c.left), c.right, null) : w ? (d = Ke(b.right, c.left), d instanceof V ? new V(d.key, d.r, new Fe(b.key, b.r, b.left, d.left, null), new Fe(c.key, c.r, d.right, c.right, null), null) : He(b.key, b.r, b.left, new Fe(c.key, c.r, d, c.right, null))) : null
}, Ne = function Me(b, c, d, e) {
  if(null != c) {
    var h = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
    if(0 === h) {
      return e[0] = c, Le(c.left, c.right)
    }
    if(0 > h) {
      return b = Me(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Fe ? He(c.key, c.r, b, c.right) : new V(c.key, c.r, b, c.right, null) : null
    }
    if(w) {
      b = Me(b, c.right, d, e);
      if(null != b || null != e[0]) {
        if(c.right instanceof Fe) {
          if(e = c.key, d = c.r, c = c.left, b instanceof V) {
            c = new V(e, d, c, b.tb(), null)
          }else {
            if(c instanceof Fe) {
              c = Ee(e, d, c.Kc(), b)
            }else {
              if(c instanceof V && c.right instanceof Fe) {
                c = new V(c.right.key, c.right.r, Ee(c.key, c.r, c.left.Kc(), c.right.left), new Fe(e, d, c.right.right, b, null), null)
              }else {
                if(w) {
                  throw Error("red-black tree invariant violation");
                }
                c = null
              }
            }
          }
        }else {
          c = new V(c.key, c.r, c.left, b, null)
        }
      }else {
        c = null
      }
      return c
    }
  }
  return null
}, Pe = function Oe(b, c, d, e) {
  var h = c.key, k = b.a ? b.a(d, h) : b.call(null, d, h);
  return 0 === k ? c.replace(h, e, c.left, c.right) : 0 > k ? c.replace(h, c.r, Oe(b, c.left, d, e), c.right) : w ? c.replace(h, c.r, c.left, Oe(b, c.right, d, e)) : null
};
function Qe(a, b, c, d, e) {
  this.ab = a;
  this.$b = b;
  this.i = c;
  this.j = d;
  this.n = e;
  this.u = 0;
  this.h = 418776847
}
g = Qe.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Gc(this)
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  a = Re(this, b);
  return null != a ? a.r : c
};
g.Za = function(a, b, c) {
  a = [null];
  var d = Je(this.ab, this.$b, b, c, a);
  return null == d ? (a = N.a(a, 0), K.a(c, a.r) ? this : new Qe(this.ab, Pe(this.ab, this.$b, b, c), this.i, this.j, null)) : new Qe(this.ab, d.tb(), this.i + 1, this.j, null)
};
g.yc = function(a, b) {
  return null != Re(this, b)
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
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return ec(b) ? Ka(this, C.a(b, 0), C.a(b, 1)) : sc.c(B, this, b)
};
g.Bc = function() {
  return 0 < this.i ? new De(null, Ce(this.$b, null, !1), !1, this.i, null) : null
};
function Re(a, b) {
  for(var c = a.$b;;) {
    if(null != c) {
      var d = a.ab.a ? a.ab.a(b, c.key) : a.ab.call(null, b, c.key);
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
  return 0 < this.i ? new De(null, Ce(this.$b, null, !0), !0, this.i, null) : null
};
g.S = f("i");
g.J = function(a, b) {
  return be(this, b)
};
g.H = function(a, b) {
  return new Qe(this.ab, this.$b, this.i, b, this.n)
};
g.G = f("j");
g.T = function() {
  return p(Se, this.j)
};
g.jc = function(a, b) {
  var c = [null], d = Ne(this.ab, this.$b, b, c);
  return null == d ? null == N.a(c, 0) ? this : new Qe(this.ab, null, 0, this.j, null) : new Qe(this.ab, d.tb(), this.i - 1, this.j, null)
};
var Se = new Qe(nc, null, 0, null, 0), Ue = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    a = E(a);
    for(var b = ob(he);;) {
      if(a) {
        var e = I(I(a)), b = cd(b, F(a), F(I(a)));
        a = e
      }else {
        return qb(b)
      }
    }
  }
  a.p = 0;
  a.g = function(a) {
    a = E(a);
    return b(a)
  };
  a.d = b;
  return a
}();
function Ve(a, b) {
  this.Mb = a;
  this.$ = b;
  this.u = 0;
  this.h = 32374988
}
g = Ve.prototype;
g.N = function() {
  return Kb(this)
};
g.Ca = function() {
  var a = this.Mb, a = (a ? a.h & 128 || a.ae || (a.h ? 0 : v(Fa, a)) : v(Fa, a)) ? this.Mb.Ca(null) : I(this.Mb);
  return null == a ? null : new Ve(a, this.$)
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Ob.a(b, this)
};
g.da = function(a, b, c) {
  return Ob.c(b, c, this)
};
g.Q = function() {
  return this
};
g.aa = function() {
  return this.Mb.aa(null).kc(null)
};
g.ma = function() {
  var a = this.Mb, a = (a ? a.h & 128 || a.ae || (a.h ? 0 : v(Fa, a)) : v(Fa, a)) ? this.Mb.Ca(null) : I(this.Mb);
  return null != a ? new Ve(a, this.$) : H
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new Ve(this.Mb, b)
};
g.G = f("$");
g.T = function() {
  return p(H, this.$)
};
function We(a) {
  return(a = E(a)) ? new Ve(a, null) : null
}
function Hc(a) {
  return Oa(a)
}
function Ic(a) {
  return Pa(a)
}
function Xe(a, b, c) {
  this.j = a;
  this.Vb = b;
  this.n = c;
  this.u = 4;
  this.h = 15077647
}
g = Xe.prototype;
g.zc = function() {
  return new Ye(ob(this.Vb))
};
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Jc(this)
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return u(Ja(this.Vb, b)) ? b : c
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
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return new Xe(this.j, O.c(this.Vb, b, null), null)
};
g.toString = function() {
  return yb(this)
};
g.Q = function() {
  return We(this.Vb)
};
g.Fd = function(a, b) {
  return new Xe(this.j, Ma(this.Vb, b), null)
};
g.S = function() {
  return wa(this.Vb)
};
g.J = function(a, b) {
  var c = this;
  return bc(b) && M(c) === M(b) && hd(function(a) {
    return lc(c, a)
  }, b)
};
g.H = function(a, b) {
  return new Xe(b, this.Vb, this.n)
};
g.G = f("j");
g.T = function() {
  return p(Ze, this.j)
};
var Ze = new Xe(null, ie, 0);
function $e(a) {
  var b = a.length;
  if(b / 2 <= ge) {
    return new Xe(null, q.a ? q.a(a, !0) : q.call(null, a, !0), null)
  }
  for(var c = 0, d = ob(Ze);;) {
    if(c < b) {
      var e = c + 2, d = pb(d, a[c]), c = e
    }else {
      return qb(d)
    }
  }
}
function Ye(a) {
  this.Ab = a;
  this.h = 259;
  this.u = 136
}
g = Ye.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ha.c(this.Ab, c, hc) === hc ? null : c;
      case 3:
        return Ha.c(this.Ab, c, hc) === hc ? d : c
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return Ha.c(this.Ab, a, hc) === hc ? null : a
};
g.a = function(a, b) {
  return Ha.c(this.Ab, a, hc) === hc ? b : a
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return Ha.c(this.Ab, b, hc) === hc ? c : b
};
g.S = function() {
  return M(this.Ab)
};
g.Rb = function(a, b) {
  this.Ab = rb(this.Ab, b, null);
  return this
};
g.Sb = function() {
  return new Xe(null, qb(this.Ab), null)
};
function af(a, b, c) {
  this.j = a;
  this.Ob = b;
  this.n = c;
  this.u = 0;
  this.h = 417730831
}
g = af.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Jc(this)
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  a = Re(this.Ob, b);
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
  return this.call.apply(this, [this].concat(b.slice()))
};
g.b = function(a) {
  return this.K(null, a)
};
g.a = function(a, b) {
  return this.L(null, a, b)
};
g.R = function(a, b) {
  return new af(this.j, O.c(this.Ob, b, null), null)
};
g.Bc = function() {
  return 0 < M(this.Ob) ? nd.a(Hc, jb(this.Ob)) : null
};
g.toString = function() {
  return yb(this)
};
g.Q = function() {
  return We(this.Ob)
};
g.Fd = function(a, b) {
  return new af(this.j, Tb.a(this.Ob, b), null)
};
g.S = function() {
  return M(this.Ob)
};
g.J = function(a, b) {
  var c = this;
  return bc(b) && M(c) === M(b) && hd(function(a) {
    return lc(c, a)
  }, b)
};
g.H = function(a, b) {
  return new af(b, this.Ob, this.n)
};
g.G = f("j");
g.T = function() {
  return p(bf, this.j)
};
var bf = new af(null, Se, 0), cf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return sc.c(B, bf, a)
  }
  a.p = 0;
  a.g = function(a) {
    a = E(a);
    return b(a)
  };
  a.d = b;
  return a
}(), df = function() {
  function a(a, b, c) {
    return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c
  }
  var b = null, c = function() {
    function a(b, d, l, m) {
      var r = null;
      3 < arguments.length && (r = J(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, l, r)
    }
    function c(a, d, e, m) {
      return sc.c(function(c, d) {
        return b.c(a, c, d)
      }, b.c(a, d, e), m)
    }
    a.p = 3;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var m = F(a);
      a = G(a);
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
        return c.d(b, e, h, J(arguments, 3))
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
}(), ff = function ef(b, c) {
  return new Qc(null, function() {
    var d = E(c);
    return d ? u(b.b ? b.b(F(d)) : b.call(null, F(d))) ? L(F(d), ef(b, G(d))) : null : null
  }, null, null)
};
function gf(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.n = e;
  this.u = 0;
  this.h = 32375006
}
g = gf.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Kb(this)
};
g.Ca = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new gf(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new gf(this.j, this.start + this.step, this.end, this.step, null) : null
};
g.R = function(a, b) {
  return L(b, this)
};
g.toString = function() {
  return yb(this)
};
g.ca = function(a, b) {
  return Fb.a(this, b)
};
g.da = function(a, b, c) {
  return Fb.c(this, b, c)
};
g.Q = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null
};
g.S = function() {
  return ra(fb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
g.aa = f("start");
g.ma = function() {
  return null != fb(this) ? new gf(this.j, this.start + this.step, this.end, this.step, null) : H
};
g.J = function(a, b) {
  return Mb(this, b)
};
g.H = function(a, b) {
  return new gf(b, this.start, this.end, this.step, this.n)
};
g.G = f("j");
g.ia = function(a, b) {
  if(b < wa(this)) {
    return this.start + b * this.step
  }
  if(this.start > this.end && 0 === this.step) {
    return this.start
  }
  throw Error("Index out of bounds");
};
g.ua = function(a, b, c) {
  return b < wa(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c
};
g.T = function() {
  return p(H, this.j)
};
var hf = function() {
  function a(a, b, c) {
    return new gf(null, a, b, c, null)
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
}(), jf = function() {
  function a(a, b) {
    for(;;) {
      if(E(b) && 0 < a) {
        var c = a - 1, k = I(b);
        a = c;
        b = k
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(E(a)) {
        a = I(a)
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
}(), kf = function() {
  function a(a, b) {
    jf.a(a, b);
    return b
  }
  function b(a) {
    jf.b(a);
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
function lf(a) {
  var b = mf.exec(a);
  return K.a(F(b), a) ? 1 === M(b) ? F(b) : Pd(b) : null
}
function nf(a) {
  a = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(a);
  a = null == a ? null : 1 === M(a) ? F(a) : Pd(a);
  N.c(a, 0, null);
  N.c(a, 1, null);
  N.c(a, 2, null)
}
function of(a, b, c, d, e, h, k) {
  D(a, c);
  E(k) && (b.c ? b.c(F(k), a, h) : b.call(null, F(k), a, h));
  c = E(I(k));
  k = null;
  for(var l = 0, m = 0;;) {
    if(m < l) {
      var r = k.ia(null, m);
      D(a, d);
      b.c ? b.c(r, a, h) : b.call(null, r, a, h);
      m += 1
    }else {
      if(c = E(c)) {
        k = c, fc(k) ? (c = ub(k), m = vb(k), k = c, l = M(c), c = m) : (c = F(k), D(a, d), b.c ? b.c(c, a, h) : b.call(null, c, a, h), c = I(k), k = null, l = 0), m = 0
      }else {
        break
      }
    }
  }
  return D(a, e)
}
var pf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = E(b), h = null, k = 0, l = 0;;) {
      if(l < k) {
        var m = h.ia(null, l);
        D(a, m);
        l += 1
      }else {
        if(e = E(e)) {
          h = e, fc(h) ? (e = ub(h), k = vb(h), h = e, m = M(e), e = k, k = m) : (m = F(h), D(a, m), e = I(h), h = null, k = 0), l = 0
        }else {
          return null
        }
      }
    }
  }
  a.p = 1;
  a.g = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a)
  };
  a.d = b;
  return a
}(), qf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function rf(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return qf[a]
  })), A('"')].join("")
}
var tf = function sf(b, c, d) {
  if(null == b) {
    return D(c, "nil")
  }
  if(void 0 === b) {
    return D(c, "#\x3cundefined\x3e")
  }
  if(w) {
    u(function() {
      var c = Rb.a(d, pa);
      return u(c) ? (c = b ? b.h & 131072 || b.Je ? !0 : b.h ? !1 : v(Xa, b) : v(Xa, b)) ? Wb(b) : c : c
    }()) && (D(c, "^"), sf(Wb(b), c, d), D(c, " "));
    if(null == b) {
      return D(c, "nil")
    }
    if(b.ka) {
      return b.na(b, c, d)
    }
    if(b && (b.h & 2147483648 || b.W)) {
      return b.M(null, c, d)
    }
    if(sa(b) === Boolean || "number" === typeof b) {
      return D(c, "" + A(b))
    }
    if(b instanceof Array) {
      return of(c, sf, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if("string" == typeof b) {
      return u(oa.b(d)) ? D(c, rf(b)) : D(c, b)
    }
    if(Ub(b)) {
      return pf.d(c, J(["#\x3c", "" + A(b), "\x3e"], 0))
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
      return pf.d(c, J(['#inst "', "" + A(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return u(b instanceof RegExp) ? pf.d(c, J(['#"', b.source, '"'], 0)) : (b ? b.h & 2147483648 || b.W || (b.h ? 0 : v(lb, b)) : v(lb, b)) ? mb(b, c, d) : w ? pf.d(c, J(["#\x3c", "" + A(b), "\x3e"], 0)) : null
  }
  return null
}, uf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = ma();
    if($b(a)) {
      b = ""
    }else {
      var e = A, h = new ka, k = new xb(h);
      a: {
        tf(F(a), k, b);
        a = E(I(a));
        for(var l = null, m = 0, r = 0;;) {
          if(r < m) {
            var x = l.ia(null, r);
            D(k, " ");
            tf(x, k, b);
            r += 1
          }else {
            if(a = E(a)) {
              l = a, fc(l) ? (a = ub(l), m = vb(l), l = a, x = M(a), a = m, m = x) : (x = F(l), D(k, " "), tf(x, k, b), a = I(l), l = null, m = 0), r = 0
            }else {
              break a
            }
          }
        }
      }
      kb(k);
      b = "" + e(h)
    }
    return b
  }
  a.p = 0;
  a.g = function(a) {
    a = E(a);
    return b(a)
  };
  a.d = b;
  return a
}();
Ve.prototype.W = !0;
Ve.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
Db.prototype.W = !0;
Db.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
Td.prototype.W = !0;
Td.prototype.M = function(a, b, c) {
  return of(b, tf, "[", " ", "]", c, this)
};
Vc.prototype.W = !0;
Vc.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
Qe.prototype.W = !0;
Qe.prototype.M = function(a, b, c) {
  return of(b, function(a) {
    return of(b, tf, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
ee.prototype.W = !0;
ee.prototype.M = function(a, b, c) {
  return of(b, function(a) {
    return of(b, tf, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
Yd.prototype.W = !0;
Yd.prototype.M = function(a, b, c) {
  return of(b, tf, "#queue [", " ", "]", c, E(this))
};
Qc.prototype.W = !0;
Qc.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
Lb.prototype.W = !0;
Lb.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
af.prototype.W = !0;
af.prototype.M = function(a, b, c) {
  return of(b, tf, "#{", " ", "}", c, this)
};
xe.prototype.W = !0;
xe.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
V.prototype.W = !0;
V.prototype.M = function(a, b, c) {
  return of(b, tf, "[", " ", "]", c, this)
};
Rd.prototype.W = !0;
Rd.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
ze.prototype.W = !0;
ze.prototype.M = function(a, b, c) {
  return of(b, function(a) {
    return of(b, tf, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
Xe.prototype.W = !0;
Xe.prototype.M = function(a, b, c) {
  return of(b, tf, "#{", " ", "}", c, this)
};
Id.prototype.W = !0;
Id.prototype.M = function(a, b, c) {
  return of(b, tf, "[", " ", "]", c, this)
};
Kc.prototype.W = !0;
Kc.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
de.prototype.W = !0;
de.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
Lc.prototype.W = !0;
Lc.prototype.M = function(a, b) {
  return D(b, "()")
};
Fe.prototype.W = !0;
Fe.prototype.M = function(a, b, c) {
  return of(b, tf, "[", " ", "]", c, this)
};
Oc.prototype.W = !0;
Oc.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
gf.prototype.W = !0;
gf.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
ye.prototype.W = !0;
ye.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
De.prototype.W = !0;
De.prototype.M = function(a, b, c) {
  return of(b, tf, "(", " ", ")", c, this)
};
Id.prototype.Yd = !0;
Id.prototype.Zd = function(a, b) {
  return oc.a(this, b)
};
Td.prototype.Yd = !0;
Td.prototype.Zd = function(a, b) {
  return oc.a(this, b)
};
function vf(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.gf = c;
  this.hf = d;
  this.h = 2153938944;
  this.u = 2
}
g = vf.prototype;
g.N = function() {
  return this[ca] || (this[ca] = ++da)
};
g.ce = function(a, b, c) {
  a = E(this.hf);
  for(var d = null, e = 0, h = 0;;) {
    if(h < e) {
      var k = d.ia(null, h), l = N.c(k, 0, null), k = N.c(k, 1, null);
      k.o ? k.o(l, this, b, c) : k.call(null, l, this, b, c);
      h += 1
    }else {
      if(a = E(a)) {
        fc(a) ? (d = ub(a), a = vb(a), l = d, e = M(d), d = l) : (d = F(a), l = N.c(d, 0, null), k = N.c(d, 1, null), k.o ? k.o(l, this, b, c) : k.call(null, l, this, b, c), a = I(a), d = null, e = 0), h = 0
      }else {
        return null
      }
    }
  }
};
g.M = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  tf(this.state, b, c);
  return D(b, "\x3e")
};
g.G = f("j");
g.Ge = f("state");
g.J = function(a, b) {
  return this === b
};
var xf = function() {
  function a(a) {
    return new vf(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var l = null;
      1 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, l)
    }
    function b(a, c) {
      var d = ic(c) ? Q.a(Ue, c) : c, e = Rb.a(d, wf), d = Rb.a(d, pa);
      return new vf(a, d, e, null)
    }
    a.p = 1;
    a.g = function(a) {
      var c = F(a);
      a = G(a);
      return b(c, a)
    };
    a.d = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.d(b, J(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.g = c.g;
  b.b = a;
  b.d = c.d;
  return b
}();
function yf(a, b) {
  var c = a.gf;
  if(u(c) && !u(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(uf.d(J([p(Nc(new zb(null, "validate", "validate", 1233162959, null), new zb(null, "new-value", "new-value", 972165309, null)), q([s, 6925, t, 33], !0))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  nb(a, c, b);
  return b
}
var zf = function() {
  function a(a, b, c, d, e) {
    return yf(a, b.o ? b.o(a.state, c, d, e) : b.call(null, a.state, c, d, e))
  }
  function b(a, b, c, d) {
    return yf(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return yf(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return yf(a, b.b ? b.b(a.state) : b.call(null, a.state))
  }
  var e = null, h = function() {
    function a(c, d, e, h, k, S) {
      var U = null;
      5 < arguments.length && (U = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, h, k, U)
    }
    function b(a, c, d, e, h, l) {
      return yf(a, Q.d(c, a.state, d, e, h, J([l], 0)))
    }
    a.p = 5;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var h = F(a);
      a = I(a);
      var k = F(a);
      a = G(a);
      return b(c, d, e, h, k, a)
    };
    a.d = b;
    return a
  }(), e = function(e, l, m, r, x, y) {
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
        return h.d(e, l, m, r, x, J(arguments, 5))
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
}(), Af = null, Bf = function() {
  function a(a) {
    null == Af && (Af = xf.b(0));
    return Cb.b([A(a), A(zf.a(Af, Eb))].join(""))
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
function Cf(a) {
  var b = W;
  return sc.c(function(a, d) {
    var e = b.b ? b.b(d) : b.call(null, d);
    return O.c(a, e, Pb.a(Rb.c(a, e, p(Nd, q([s, 7197, t, 40], !0))), d))
  }, p(ie, q([s, 7198, t, 5], !0)), a)
}
function Df(a) {
  this.Qd = a;
  this.u = 0;
  this.h = 2153775104
}
Df.prototype.N = function() {
  return ea(uf.d(J([this], 0)))
};
Df.prototype.M = function(a, b) {
  return D(b, [A('#uuid "'), A(this.Qd), A('"')].join(""))
};
Df.prototype.J = function(a, b) {
  return b instanceof Df && this.Qd === b.Qd
};
function Ef(a, b, c) {
  this.message = a;
  this.data = b;
  this.If = c
}
Ef.prototype = Error();
Ef.prototype.constructor = Ef;
var Ff = function() {
  function a(a, b, c) {
    return new Ef(a, b, c)
  }
  function b(a, b) {
    return new Ef(a, b, null)
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
var qa = new T(null, "dup", "dup"), Gf = new T(null, "ts", "ts"), Hf = new T(null, "is", "is"), If = new T(null, "ansl", "ansl"), Jf = new T("cljs.core.logic.protocols", "id", "cljs.core.logic.protocols/id"), Kf = new T(null, "eset", "eset"), Lf = new T("cljs.core.logic", "fd", "cljs.core.logic/fd"), Mf = new T("cljs.core.logic", "subst", "cljs.core.logic/subst"), Nf = new T("cljs.core.logic", "not-found", "cljs.core.logic/not-found"), Of = new T(null, "cqs", "cqs"), Pf = new T(null, "a", "a"), Qf = 
new T("cljs.core.logic", "no-prop", "cljs.core.logic/no-prop"), na = new T(null, "flush-on-newline", "flush-on-newline"), Rf = new T("cljs.core.logic", "strategy", "cljs.core.logic/strategy"), Sf = new T(null, "km", "km"), t = new T(null, "end-column", "end-column"), Tf = new T(null, "f", "f"), Uf = new T("cljs.core.logic", "ff", "cljs.core.logic/ff"), Vf = new T(null, "ansv*", "ansv*"), Wf = new T(null, "vs", "vs"), Xf = new T(null, "max", "max"), Yf = new T(null, "cid", "cid"), Zf = new T(null, 
"running", "running"), $f = new T(null, "coll", "coll"), ag = new T(null, "column", "column"), bg = new T(null, "lower", "lower"), cg = new T(null, "cm", "cm"), dg = new T(null, "oc", "oc"), eg = new T(null, "cq", "cq"), fg = new T(null, "cache", "cache"), gg = new T("cljs.core.logic", "root", "cljs.core.logic/root"), w = new T(null, "else", "else"), oa = new T(null, "readably", "readably"), wf = new T(null, "validator", "validator"), pa = new T(null, "meta", "meta"), hg = new T(null, "index", "index"), 
ig = new T(null, "min", "min"), jg = new T(null, "v", "v"), kg = new T("cljs.core.logic", "unbound", "cljs.core.logic/unbound"), lg = new T(null, "lhs", "lhs"), mg = new T(null, "line", "line"), ng = new T(null, "upper", "upper"), s = new T(null, "end-line", "end-line"), og = new T(null, "doms", "doms"), pg = new T(null, "rhs", "rhs"), qg = new T(null, "cs", "cs"), rg = new T(null, "s", "s");
var X = {}, sg, tg = {}, ug = {};
function vg(a) {
  if(a ? a.Oe : a) {
    return a.Oe(a)
  }
  var b;
  b = vg[n(null == a ? null : a)];
  if(!b && (b = vg._, !b)) {
    throw z("IUninitialized.-uninitialized", a);
  }
  return b.call(null, a)
}
function wg(a, b, c) {
  if(a ? a.Hd : a) {
    return a.Hd(0, b, c)
  }
  var d;
  d = wg[n(null == a ? null : a)];
  if(!d && (d = wg._, !d)) {
    throw z("IUnifyTerms.unify-terms", a);
  }
  return d.call(null, a, b, c)
}
var xg = {};
function yg(a, b, c) {
  if(a ? a.Ne : a) {
    return a.Ne(a, b, c)
  }
  var d;
  d = yg[n(null == a ? null : a)];
  if(!d && (d = yg._, !d)) {
    throw z("IUnifyWithRecord.unify-with-record", a);
  }
  return d.call(null, a, b, c)
}
function zg(a) {
  if(a ? a.Qe : a) {
    return a.pa
  }
  var b;
  b = zg[n(null == a ? null : a)];
  if(!b && (b = zg._, !b)) {
    throw z("LConsSeq.lfirst", a);
  }
  return b.call(null, a)
}
function Ag(a) {
  if(a ? a.Re : a) {
    return a.Ha
  }
  var b;
  b = Ag[n(null == a ? null : a)];
  if(!b && (b = Ag._, !b)) {
    throw z("LConsSeq.lnext", a);
  }
  return b.call(null, a)
}
function Bg(a) {
  if(a ? a.te : a) {
    return a.te()
  }
  var b;
  b = Bg[n(null == a ? null : a)];
  if(!b && (b = Bg._, !b)) {
    throw z("LConsPrint.toShortString", a);
  }
  return b.call(null, a)
}
function Cg(a, b, c) {
  if(a ? a.le : a) {
    return a.le(0, b, c)
  }
  var d;
  d = Cg[n(null == a ? null : a)];
  if(!d && (d = Cg._, !d)) {
    throw z("ISubstitutions.ext-no-check", a);
  }
  return d.call(null, a, b, c)
}
function Dg(a, b) {
  if(a ? a.me : a) {
    return a.me(0, b)
  }
  var c;
  c = Dg[n(null == a ? null : a)];
  if(!c && (c = Dg._, !c)) {
    throw z("ISubstitutions.walk", a);
  }
  return c.call(null, a, b)
}
function Eg(a, b) {
  if(a ? a.ke : a) {
    return a.ke(0, b)
  }
  var c;
  c = Eg[n(null == a ? null : a)];
  if(!c && (c = Eg._, !c)) {
    throw z("IReifyTerm.reify-term", a);
  }
  return c.call(null, a, b)
}
function Fg(a, b) {
  if(a ? a.Gc : a) {
    return a.Gc(a, b)
  }
  var c;
  c = Fg[n(null == a ? null : a)];
  if(!c && (c = Fg._, !c)) {
    throw z("IWalkTerm.walk-term", a);
  }
  return c.call(null, a, b)
}
function Gg(a, b, c) {
  if(a ? a.je : a) {
    return a.je(0, b, c)
  }
  var d;
  d = Gg[n(null == a ? null : a)];
  if(!d && (d = Gg._, !d)) {
    throw z("IOccursCheckTerm.occurs-check-term", a);
  }
  return d.call(null, a, b, c)
}
function Hg(a, b) {
  if(a ? a.ee : a) {
    return a.ee(0, b)
  }
  var c;
  c = Hg[n(null == a ? null : a)];
  if(!c && (c = Hg._, !c)) {
    throw z("IBuildTerm.build-term", a);
  }
  return c.call(null, a, b)
}
function Ig(a, b) {
  if(a ? a.Xc : a) {
    return a.Xc(a, b)
  }
  var c;
  c = Ig[n(null == a ? null : a)];
  if(!c && (c = Ig._, !c)) {
    throw z("IBind.bind", a);
  }
  return c.call(null, a, b)
}
function Jg(a, b) {
  if(a ? a.Yc : a) {
    return a.Yc(a, b)
  }
  var c;
  c = Jg[n(null == a ? null : a)];
  if(!c && (c = Jg._, !c)) {
    throw z("IMPlus.mplus", a);
  }
  return c.call(null, a, b)
}
function Kg(a) {
  if(a ? a.$c : a) {
    return a.$c(a)
  }
  var b;
  b = Kg[n(null == a ? null : a)];
  if(!b && (b = Kg._, !b)) {
    throw z("ITake.take*", a);
  }
  return b.call(null, a)
}
function Lg(a) {
  if(a ? a.se : a) {
    return a.se()
  }
  var b;
  b = Lg[n(null == a ? null : a)];
  if(!b && (b = Lg._, !b)) {
    throw z("ISuspendedStream.ready?", a);
  }
  return b.call(null, a)
}
function Mg(a, b) {
  if(a ? a.pe : a) {
    return a.pe(0, b)
  }
  var c;
  c = Mg[n(null == a ? null : a)];
  if(!c && (c = Mg._, !c)) {
    throw z("ISubstitutionsCLP.root-val", a);
  }
  return c.call(null, a, b)
}
function Ng(a, b) {
  if(a ? a.qe : a) {
    return a.qe(0, b)
  }
  var c;
  c = Ng[n(null == a ? null : a)];
  if(!c && (c = Ng._, !c)) {
    throw z("ISubstitutionsCLP.root-var", a);
  }
  return c.call(null, a, b)
}
function Og(a, b, c) {
  if(a ? a.ne : a) {
    return a.ne(0, b, c)
  }
  var d;
  d = Og[n(null == a ? null : a)];
  if(!d && (d = Og._, !d)) {
    throw z("ISubstitutionsCLP.ext-run-cs", a);
  }
  return d.call(null, a, b, c)
}
function Pg(a, b) {
  if(a ? a.oe : a) {
    return a.oe(0, b)
  }
  var c;
  c = Pg[n(null == a ? null : a)];
  if(!c && (c = Pg._, !c)) {
    throw z("ISubstitutionsCLP.queue", a);
  }
  return c.call(null, a, b)
}
function Qg(a, b, c) {
  if(a ? a.re : a) {
    return a.re(0, b, c)
  }
  var d;
  d = Qg[n(null == a ? null : a)];
  if(!d && (d = Qg._, !d)) {
    throw z("ISubstitutionsCLP.update-var", a);
  }
  return d.call(null, a, b, c)
}
function Rg(a, b, c) {
  if(a ? a.fe : a) {
    return a.fe(0, b, c)
  }
  var d;
  d = Rg[n(null == a ? null : a)];
  if(!d && (d = Rg._, !d)) {
    throw z("IConstraintStore.addc", a);
  }
  return d.call(null, a, b, c)
}
function Sg(a, b, c) {
  if(a ? a.he : a) {
    return a.he(0, b, c)
  }
  var d;
  d = Sg[n(null == a ? null : a)];
  if(!d && (d = Sg._, !d)) {
    throw z("IConstraintStore.remc", a);
  }
  return d.call(null, a, b, c)
}
function Tg(a, b, c) {
  if(a ? a.ie : a) {
    return a.ie(0, b, c)
  }
  var d;
  d = Tg[n(null == a ? null : a)];
  if(!d && (d = Tg._, !d)) {
    throw z("IConstraintStore.runc", a);
  }
  return d.call(null, a, b, c)
}
function Ug(a, b, c, d) {
  if(a ? a.ge : a) {
    return a.ge(0, b, c, d)
  }
  var e;
  e = Ug[n(null == a ? null : a)];
  if(!e && (e = Ug._, !e)) {
    throw z("IConstraintStore.constraints-for", a);
  }
  return e.call(null, a, b, c, d)
}
function Vg(a, b) {
  if(a ? a.vb : a) {
    return a.vb(a, b)
  }
  var c;
  c = Vg[n(null == a ? null : a)];
  if(!c && (c = Vg._, !c)) {
    throw z("IConstraintStep.-step", a);
  }
  return c.call(null, a, b)
}
function Wg(a) {
  if(a ? a.xb : a) {
    return a.xb(a)
  }
  var b;
  b = Wg[n(null == a ? null : a)];
  if(!b && (b = Wg._, !b)) {
    throw z("IRunnable.-runnable?", a);
  }
  return b.call(null, a)
}
var Xg = {};
function Yg(a) {
  if(a ? a.Tb : a) {
    return a.Tb(a)
  }
  var b;
  b = Yg[n(null == a ? null : a)];
  if(!b && (b = Yg._, !b)) {
    throw z("IEntailed.-entailed?", a);
  }
  return b.call(null, a)
}
var Zg = {};
function $g(a, b) {
  if(a ? a.Pe : a) {
    return a.Pe(a, b)
  }
  var c;
  c = $g[n(null == a ? null : a)];
  if(!c && (c = $g._, !c)) {
    throw z("IWithConstraintId.-with-id", a);
  }
  return c.call(null, a, b)
}
var ah = {};
function bh(a) {
  if(a ? a.Me : a) {
    return a.Me(a)
  }
  var b;
  b = bh[n(null == a ? null : a)];
  if(!b && (b = bh._, !b)) {
    throw z("IConstraintId.-id", a);
  }
  return b.call(null, a)
}
function ch(a) {
  return(a ? u(u(null) ? null : a.Xf) || (a.mc ? 0 : v(ah, a)) : v(ah, a)) ? bh(a) : Jf.b(Wb(a))
}
function dh(a) {
  if(a ? a.wb : a) {
    return a.wb(a)
  }
  var b;
  b = dh[n(null == a ? null : a)];
  if(!b && (b = dh._, !b)) {
    throw z("IConstraintWatchedStores.-watched-stores", a);
  }
  return b.call(null, a)
}
function eh(a) {
  if(a ? a.ub : a) {
    return a.ub(a)
  }
  var b;
  b = eh[n(null == a ? null : a)];
  if(!b && (b = eh._, !b)) {
    throw z("IConstraintOp.-rands", a);
  }
  return b.call(null, a)
}
function fh(a) {
  if(a ? a.Zc : a) {
    return a.Zc(a)
  }
  var b;
  b = fh[n(null == a ? null : a)];
  if(!b && (b = fh._, !b)) {
    throw z("IMemberCount.-member-count", a);
  }
  return b.call(null, a)
}
function gh(a, b) {
  if(a ? a.Fc : a) {
    return a.Fc(a, b)
  }
  var c;
  c = gh[n(null == a ? null : a)];
  if(!c && (c = gh._, !c)) {
    throw z("IForceAnswerTerm.-force-ans", a);
  }
  return c.call(null, a, b)
}
;var hh = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e)
  }
  function b(a, b) {
    throw Error(Q.a(A, b));
  }
  a.p = 1;
  a.g = function(a) {
    F(a);
    a = G(a);
    return b(0, a)
  };
  a.d = b;
  return a
}();
nf("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
nf("([-+]?[0-9]+)/([0-9]+)");
nf("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
nf("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
nf("[0-9A-Fa-f]{2}");
nf("[0-9A-Fa-f]{4}");
function ih(a) {
  if(K.a(3, M(a))) {
    return a
  }
  if(3 < M(a)) {
    return Fc.c(a, 0, 3)
  }
  if(w) {
    for(a = new ka(a);;) {
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
function jh(a) {
  var b = 0 === (a % 4 + 4) % 4;
  return u(b) ? (b = ra(0 === (a % 100 + 100) % 100), u(b) ? b : 0 === (a % 400 + 400) % 400) : b
}
var kh = function() {
  var a = p(R([null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], !0), q([s, 463, t, 59], !0)), b = p(R([null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], !0), q([s, 464, t, 59], !0));
  return function(c, d) {
    return Rb.a(u(d) ? b : a, c)
  }
}(), mf = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function lh(a) {
  a = parseInt(a);
  return ra(isNaN(a)) ? a : null
}
function mh(a, b, c, d) {
  a <= b && b <= c || hh.d(null, J([[A(d), A(" Failed:  "), A(a), A("\x3c\x3d"), A(b), A("\x3c\x3d"), A(c)].join("")], 0));
  return b
}
function nh(a) {
  var b = lf(a);
  N.c(b, 0, null);
  var c = N.c(b, 1, null), d = N.c(b, 2, null), e = N.c(b, 3, null), h = N.c(b, 4, null), k = N.c(b, 5, null), l = N.c(b, 6, null), m = N.c(b, 7, null), r = N.c(b, 8, null), x = N.c(b, 9, null), y = N.c(b, 10, null);
  if(ra(b)) {
    return hh.d(null, J([[A("Unrecognized date/time syntax: "), A(a)].join("")], 0))
  }
  a = lh(c);
  var b = function() {
    var a = lh(d);
    return u(a) ? a : 1
  }(), c = function() {
    var a = lh(e);
    return u(a) ? a : 1
  }(), P = function() {
    var a = lh(h);
    return u(a) ? a : 0
  }(), S = function() {
    var a = lh(k);
    return u(a) ? a : 0
  }(), U = function() {
    var a = lh(l);
    return u(a) ? a : 0
  }(), Y = function() {
    var a = lh(ih(m));
    return u(a) ? a : 0
  }(), r = (K.a(r, "-") ? -1 : 1) * (60 * function() {
    var a = lh(x);
    return u(a) ? a : 0
  }() + function() {
    var a = lh(y);
    return u(a) ? a : 0
  }());
  return p(R([a, mh(1, b, 12, "timestamp month field must be in range 1..12"), mh(1, c, kh.a ? kh.a(b, jh(a)) : kh.call(null, b, jh(a)), "timestamp day field must be in range 1..last day in month"), mh(0, P, 23, "timestamp hour field must be in range 0..23"), mh(0, S, 59, "timestamp minute field must be in range 0..59"), mh(0, U, K.a(S, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), mh(0, Y, 999, "timestamp millisecond field must be in range 0..999"), r], !0), q([s, 503, t, 17], 
  !0))
}
xf.b(p(q(["inst", function(a) {
  var b;
  if("string" === typeof a) {
    if(b = nh(a), u(b)) {
      a = N.c(b, 0, null);
      var c = N.c(b, 1, null), d = N.c(b, 2, null), e = N.c(b, 3, null), h = N.c(b, 4, null), k = N.c(b, 5, null), l = N.c(b, 6, null);
      b = N.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, h, k, l) - 6E4 * b)
    }else {
      b = hh.d(null, J([[A("Unrecognized date/time syntax: "), A(a)].join("")], 0))
    }
  }else {
    b = hh.d(null, J(["Instance literal expects a string for its timestamp."], 0))
  }
  return b
}, "uuid", function(a) {
  return"string" === typeof a ? new Df(a) : hh.d(null, J(["UUID literal expects a string as its representation."], 0))
}, "queue", function(a) {
  return ec(a) ? ud(Zd, a) : hh.d(null, J(["Queue literal expects a vector for its elements."], 0))
}], !0), q([s, 536, t, 43], !0)));
xf.b(null);
function oh(a, b) {
  var c = Q.c(df, a, b);
  return L(c, td(kd(function(a) {
    return c === a
  }), b))
}
var ph = function() {
  function a(a, b) {
    for(;;) {
      if(M(b) < M(a)) {
        var c = a;
        a = b;
        b = c
      }else {
        return sc.c(function(a, b) {
          return function(a, c) {
            return lc(b, c) ? a : Xb.a(a, c)
          }
        }(a, b), a, a)
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      a = oh(function(a) {
        return-M(a)
      }, Pb.d(e, d, J([a], 0)));
      return sc.c(b, F(a), G(a))
    }
    a.p = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.g = c.g;
  b.b = aa();
  b.a = a;
  b.d = c.d;
  return b
}(), qh = function() {
  function a(a, b) {
    return M(a) < M(b) ? sc.c(function(a, c) {
      return lc(b, c) ? Xb.a(a, c) : a
    }, a, a) : sc.c(Xb, a, b)
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var m = null;
      2 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m)
    }
    function c(a, d, e) {
      return sc.c(b, a, Pb.a(e, d))
    }
    a.p = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2))
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
p(Nd, q([s, 22, t, 30], !0));
var $ = Lf;
function rh(a, b) {
  this.Kb = a;
  this.Nb = b;
  this.u = 0;
  this.h = 2149583122
}
g = rh.prototype;
g.M = function(a, b) {
  return D(b, [A("("), A(this.Kb), A(" . "), A(this.Nb), A(")")].join(""))
};
g.J = function(a, b) {
  return b instanceof rh ? K.a(this.Kb, b.Kb) && K.a(this.Nb, b.Nb) : !1
};
g.kc = f("Kb");
g.Ac = f("Nb");
g.ia = function(a, b) {
  if(K.a(1, b)) {
    return this.Nb
  }
  if(K.a(0, b)) {
    return this.Kb
  }
  if(w) {
    throw Ff.a("Index out of bounds", p(q([hg, b, $f, this], !0), q([s, 71, t, 65], !0)));
  }
  return null
};
g.ua = function(a, b, c) {
  return K.a(1, b) ? this.Nb : K.a(0, b) ? this.Kb : w ? c : null
};
g.S = ba(2);
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return K.a(pg, b) ? this.Nb : K.a(lg, b) ? this.Kb : w ? c : null
};
g.toString = function() {
  return[A("("), A(this.Kb), A(" . "), A(this.Nb), A(")")].join("")
};
function sh(a, b) {
  return new rh(a, b)
}
function th(a, b) {
  return ud(p(Nd, q([s, 104, t, 16], !0)), td(W, nd.a(function(b) {
    return Ng(a, b)
  }, eh(b))))
}
function uh(a, b) {
  return td(function(b) {
    return W.b ? W.b(Mg(a, b)) : W.call(null, Mg(a, b))
  }, th(a, b))
}
function vh(a, b, c, d) {
  this.Wb = a;
  this.Hb = b;
  this.Eb = c;
  this.tc = d;
  this.u = 0;
  this.h = 258
}
g = vh.prototype;
g.S = function() {
  return M(this.Hb)
};
g.fe = function(a, b, c) {
  a = th(b, c);
  c = (c ? u(u(null) ? null : c.$f) || (c.mc ? 0 : v(Zg, c)) : v(Zg, c)) ? $g(c, this.Eb) : ed.d(c, O, J([Jf, this.Eb], 0));
  c = sc.c(function(a, b) {
    return function(a, c) {
      return wh.c ? wh.c(a, c, b) : wh.call(null, a, c, b)
    }
  }(a, c), this, a);
  return new vh(c.Wb, c.Hb, this.Eb + 1, this.tc)
};
g.he = function(a, b, c) {
  a = th(b, c);
  c = ch(c);
  a = sc.c(function(a, b) {
    return function(a, c) {
      var d = Xb.a(Rb.a(a, c), b);
      return $b(d) ? Tb.a(a, c) : O.c(a, c, d)
    }
  }(a, c), this.Wb, a);
  c = Tb.a(this.Hb, c);
  return new vh(a, c, this.Eb, this.tc)
};
g.ie = function(a, b, c) {
  return u(c) ? new vh(this.Wb, this.Hb, this.Eb, Pb.a(this.tc, ch(b))) : new vh(this.Wb, this.Hb, this.Eb, Xb.a(this.tc, ch(b)))
};
g.ge = function(a, b, c, d) {
  a = Rb.a(this.Wb, Ng(b, c));
  return u(a) ? td(function(a) {
    return dh(a).call(null, d)
  }, nd.a(this.Hb, td(kd(this.tc), a))) : null
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return K.a(Zf, b) ? this.tc : K.a(Yf, b) ? this.Eb : K.a(cg, b) ? this.Hb : K.a(Sf, b) ? this.Wb : w ? c : null
};
function wh(a, b, c) {
  if(!u(W.b ? W.b(b) : W.call(null, b))) {
    throw Ff.a([A("constraint store assoc expected logic var key: "), A(b)].join(""), p(ie, q([s, 181, t, 72], !0)));
  }
  var d = a.Hb, e = a.Wb, h = a.Eb;
  b = vd.c(e, p(R([b], !0), q([s, 185, t, 30], !0)), md.a(function(a, b, c) {
    return function(a) {
      return Pb.a(a, c)
    }
  }(d, e, h), Ze));
  c = O.c(d, h, c);
  return new vh(b, c, h, Zf.b(a))
}
function xh(a, b, c, d, e) {
  this.m = a;
  this.Ma = b;
  this.cb = c;
  this.ga = d;
  this.V = e;
  this.u = 0;
  this.h = 2229667594;
  3 < arguments.length ? (this.ga = d, this.V = e) : this.V = this.ga = null
}
g = xh.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Gc(this)
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return Pc(b, jg) ? this.m : Pc(b, og) ? this.Ma : Pc(b, Kf) ? this.cb : w ? Rb.c(this.V, b, c) : null
};
g.Za = function(a, b, c) {
  return(Pc.a ? Pc.a(jg, b) : Pc.call(null, jg, b)) ? new xh(c, this.Ma, this.cb, this.ga, this.V, null) : (Pc.a ? Pc.a(og, b) : Pc.call(null, og, b)) ? new xh(this.m, c, this.cb, this.ga, this.V, null) : (Pc.a ? Pc.a(Kf, b) : Pc.call(null, Kf, b)) ? new xh(this.m, this.Ma, c, this.ga, this.V, null) : new xh(this.m, this.Ma, this.cb, this.ga, O.c(this.V, b, c), null)
};
g.M = function(a, b, c) {
  return of(b, function(a) {
    return of(b, tf, "", " ", "", c, a)
  }, "#cljs.core.logic.SubstValue{", ", ", "}", c, $c.a(R([R.a ? R.a([jg, this.m], !0) : R.call(null, [jg, this.m], !0), R.a ? R.a([og, this.Ma], !0) : R.call(null, [og, this.Ma], !0), R.a ? R.a([Kf, this.cb], !0) : R.call(null, [Kf, this.cb], !0)], !0), this.V))
};
g.R = function(a, b) {
  return ec(b) ? Ka(this, C.a(b, 0), C.a(b, 1)) : sc.c(B, this, b)
};
g.toString = function() {
  return"" + A(this.m)
};
g.Q = function() {
  return E($c.a(R([R.a ? R.a([jg, this.m], !0) : R.call(null, [jg, this.m], !0), R.a ? R.a([og, this.Ma], !0) : R.call(null, [og, this.Ma], !0), R.a ? R.a([Kf, this.cb], !0) : R.call(null, [Kf, this.cb], !0)], !0), this.V))
};
g.S = function() {
  return 3 + M(this.V)
};
g.J = function(a, b) {
  var c;
  c = u(b) ? (c = this.constructor === b.constructor) ? be(this, b) : c : b;
  return u(c) ? !0 : !1
};
g.H = function(a, b) {
  return new xh(this.m, this.Ma, this.cb, b, this.V, this.n)
};
g.G = f("ga");
g.jc = function(a, b) {
  return lc($e([Kf, null, jg, null, og, null]), b) ? Tb.a(p(ud(ie, this), this.ga), b) : new xh(this.m, this.Ma, this.cb, this.ga, gd(Tb.a(this.V, b)), null)
};
function yh(a) {
  return a instanceof xh
}
var zh = function() {
  function a(a, b, c, d) {
    return p(new xh(a, b, c), d)
  }
  function b(a, b, c) {
    return p(new xh(a, b, null), c)
  }
  function c(a, b) {
    return new xh(a, b, null)
  }
  function d(a) {
    return new xh(a, null, null)
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
function Ah(a, b, c) {
  c = Dg(a, c);
  return Gg(c, b, a)
}
function Bh(a, b, c) {
  if(b === c) {
    return a
  }
  var d = Dg(a, b), e = Dg(a, c);
  return u(function() {
    var a = W.b ? W.b(d) : W.call(null, d);
    return u(a) ? K.a(d, e) : a
  }()) ? a : u(function() {
    var a = ra(W.b ? W.b(d) : W.call(null, d));
    return a ? W.b ? W.b(e) : W.call(null, e) : a
  }()) ? wg(e, d, a) : wg(d, e, a)
}
var Ch = hf.b(100);
a: {
  for(var Dh = nd.c(ld.a(Cb, A), rd.b("_"), Ch), Eh = bd(p(ie, q([s, 6278, t, 28], !0))), Fh = E(Ch), Gh = E(Dh);;) {
    if(Fh && Gh) {
      var Hh = cd(Eh, F(Fh), F(Gh)), Ih = I(Fh), Jh = I(Gh), Eh = Hh, Fh = Ih, Gh = Jh
    }else {
      qb(Eh);
      break a
    }
  }
}
function Kh(a, b) {
  var c = Dg(a, b);
  return Eg(c, a)
}
function Lh(a, b) {
  return Hg(b, a)
}
function Mh(a, b, c, d, e, h, k, l) {
  this.q = a;
  this.sb = b;
  this.Bb = c;
  this.bb = d;
  this.lb = e;
  this.Ga = h;
  this.jb = k;
  this.$ = l;
  this.u = 0;
  this.h = 2491150
}
g = Mh.prototype;
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return K.a(dg, b) ? this.jb : K.a(Of, b) ? this.Ga : K.a(eg, b) ? this.lb : K.a(qg, b) ? this.bb : K.a(Gf, b) ? this.Bb : K.a(Wf, b) ? this.sb : K.a(rg, b) ? this.q : w ? c : null
};
g.yc = function(a, b) {
  return lc($e([Of, null, Wf, null, dg, null, eg, null, qg, null, rg, null]), b)
};
g.Za = function(a, b, c) {
  if(K.a(dg, b)) {
    return new Mh(this.q, this.sb, this.Bb, this.bb, this.lb, this.Ga, c, this.$)
  }
  if(K.a(Of, b)) {
    return new Mh(this.q, this.sb, this.Bb, this.bb, this.lb, c, this.jb, this.$)
  }
  if(K.a(eg, b)) {
    return new Mh(this.q, this.sb, this.Bb, this.bb, c, this.Ga, this.jb, this.$)
  }
  if(K.a(qg, b)) {
    return new Mh(this.q, this.sb, this.Bb, c, this.lb, this.Ga, this.jb, this.$)
  }
  if(K.a(Gf, b)) {
    return new Mh(this.q, this.sb, c, this.bb, this.lb, this.Ga, this.jb, this.$)
  }
  if(K.a(Wf, b)) {
    return new Mh(this.q, c, this.Bb, this.bb, this.lb, this.Ga, this.jb, this.$)
  }
  if(K.a(rg, b)) {
    return new Mh(c, this.sb, this.Bb, this.bb, this.lb, this.Ga, this.jb, this.$)
  }
  if(w) {
    throw Ff.a([A("Substitutions has no field for key"), A(b)].join(""), p(ie, q([s, 340, t, 69], !0)));
  }
  return null
};
g.Yc = function(a, b) {
  return Nh.a ? Nh.a(this, b) : Nh.call(null, this, b)
};
g.Xc = function(a, b) {
  return b.b ? b.b(this) : b.call(null, this)
};
g.$c = function() {
  return this
};
g.R = function(a, b) {
  var c = N.c(b, 0, null), d = N.c(b, 1, null);
  if(u(W.b ? W.b(c) : W.call(null, c))) {
    return O.c(this, c, d)
  }
  throw Ff.a("" + A("key must be a logic var"), p(ie, q([s, 323, t, 56], !0)));
};
g.toString = function() {
  return"" + A(this.q)
};
g.S = function() {
  return M(this.q)
};
g.J = function(a, b) {
  return this === b || b instanceof Mh && K.a(this.q, b.q)
};
g.le = function(a, b, c) {
  a = ra(W.b ? W.b(c) : W.call(null, c)) ? p(b, O.c(Wb(b), gg, !0)) : b;
  return new Mh(O.c(this.q, a, c), u(this.sb) ? Pb.a(this.sb, a) : null, this.Bb, this.bb, this.lb, this.Ga, this.jb, this.$)
};
g.me = function(a, b) {
  if(u(Oh.b ? Oh.b(b) : Oh.call(null, b))) {
    for(var c = b, d = mc(this.q, b);;) {
      if(null == d) {
        return c
      }
      c = Oa(d);
      d = Pa(d);
      if(ra(Oh.b ? Oh.b(d) : Oh.call(null, d))) {
        if(yh(d)) {
          var e = jg.b(d);
          return Pc(e, kg) ? p(c, O.c(Wb(d), kg, !0)) : e
        }
        return d
      }
      c = d;
      d = mc(this.q, d)
    }
  }else {
    return b
  }
};
g.H = function(a, b) {
  return new Mh(this.q, this.sb, this.Bb, this.bb, this.lb, this.Ga, this.jb, b)
};
g.G = f("$");
g.T = function() {
  return Ph
};
g.pe = function(a, b) {
  if(u(W.b ? W.b(b) : W.call(null, b))) {
    var c = mc(this.q, b);
    N.c(c, 0, null);
    N.c(c, 1, null);
    for(var d = b;;) {
      var e = c;
      N.c(e, 0, null);
      c = N.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(ra(W.b ? W.b(c) : W.call(null, c))) {
        return c
      }
      if(w) {
        d = c, c = mc(this.q, c)
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
    if(u(gg.b(Wb(b)))) {
      return b
    }
    var c = mc(this.q, b);
    N.c(c, 0, null);
    N.c(c, 1, null);
    for(var d = b;;) {
      var e = c, h = N.c(e, 0, null), c = N.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(ra(W.b ? W.b(c) : W.call(null, c))) {
        return yh(c) ? p(h, Wb(c)) : h
      }
      if(w) {
        d = c, c = mc(this.q, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
g.ne = function(a, b, c) {
  b = Ng(this, b);
  a = u(W.b ? W.b(c) : W.call(null, c)) ? p(R([b, Ng(this, c)], !0), q([s, 396, t, 43], !0)) : p(R([b], !0), q([s, 397, t, 19], !0));
  if(u(this.jb)) {
    var d;
    d = this.jb;
    d = u(d) ? Ah(this, b, yh(c) ? c.m : c) : d;
    c = u(d) ? null : Cg(this, b, c)
  }else {
    c = Cg(this, b, c)
  }
  return u(c) ? (Qh.c ? Qh.c(a, this.bb, Mf) : Qh.call(null, a, this.bb, Mf)).call(null, c) : null
};
g.oe = function(a, b) {
  var c = this, d = ch(b);
  return ra(c.Ga.b ? c.Ga.b(d) : c.Ga.call(null, d)) ? O.c(O.c(this, eg, Pb.a(function() {
    var a = c.lb;
    return u(a) ? a : p(Nd, q([s, 408, t, 39], !0))
  }(), b)), Of, Pb.a(c.Ga, d)) : this
};
g.re = function(a, b, c) {
  return O.c(this, rg, O.c(this.q, b, c))
};
function Rh(a, b, c, d) {
  return fd.a(c, Qf) ? sc.c(function(a, b) {
    var k = Ng(a, b);
    return lc(c, k) ? a : d.a ? d.a(a, k) : d.call(null, a, k)
  }, a, b.cb) : a
}
var Sh = function() {
  function a(a, b, h, k, l) {
    var m = Mg(a, b), r = yh(m) ? Qg(a, b, O.c(m, og, O.c(m.Ma, h, k))) : function() {
      var c = u(W.b ? W.b(m) : W.call(null, m)) ? kg : m;
      return Cg(a, b, zh.a(c, p(q([h, k], !0), q([s, 470, t, 58], !0))))
    }();
    return Rh(r, m, l, function(a, d) {
      return c.O(a, d, h, k, Pb.a(u(l) ? l : Ze, b))
    })
  }
  function b(a, b, h, k) {
    b = Ng(a, b);
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
}(), Th = function() {
  function a(a, b, h, k) {
    var l = Mg(a, b), m = yh(l) ? function() {
      var c = Tb.a(l.Ma, h);
      return 0 === M(c) && fd.a(l.m, kg) ? Qg(a, b, l.m) : Qg(a, b, O.c(l, og, c))
    }() : a;
    return Rh(m, l, k, function(a, d) {
      return c.o(a, d, h, Pb.a(u(k) ? k : Ze, b))
    })
  }
  function b(a, b, h) {
    b = Ng(a, b);
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
function Uh(a, b) {
  var c = Mg(a, b);
  if(yh(c)) {
    var d = jg.b(c);
    return fd.a(d, kg) ? d : Lf.b ? Lf.b(og.b(c)) : Lf.call(null, og.b(c))
  }
  return ra(W.b ? W.b(c) : W.call(null, c)) ? c : null
}
var Ph = function() {
  function a(a, b) {
    return new Mh(a, null, null, b, null, Ze, !0, null)
  }
  function b(a) {
    return d.a(a, new vh(p(ie, q([s, 190, t, 22], !0)), p(ie, q([s, 190, t, 25], !0)), 0, Ze))
  }
  function c() {
    return d.b(p(ie, q([s, 515, t, 16], !0)))
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
  return a ? u(u(null) ? null : a.Zf) ? !0 : a.mc ? !1 : v(ug, a) : v(ug, a)
}
function Oh(a) {
  var b = W(a);
  return b ? b : a ? u(u(null) ? null : a.Wf) ? !0 : a.mc ? !1 : v(tg, a) : v(tg, a)
}
function Vh(a, b, c, d) {
  this.pa = a;
  this.Ha = b;
  this.sa = c;
  this.j = d;
  this.u = 0;
  this.h = 2154168320
}
g = Vh.prototype;
g.ke = function(a, b) {
  for(var c = this, d = b;;) {
    if(u(Wh.b ? Wh.b(c) : Wh.call(null, c))) {
      var e = Ag(c), d = Kh(d, zg(c)), c = e
    }else {
      return Kh(d, c)
    }
  }
};
g.N = function() {
  -1 === this.sa && (this.sa = 31 * Bb(this.Ha) + Bb(this.pa));
  return this.sa
};
g.Hd = function(a, b, c) {
  if(cc(b)) {
    for(a = this, b = E(b);;) {
      if(null != b) {
        if(u(Wh.b ? Wh.b(a) : Wh.call(null, a))) {
          var d = Bh(c, a.pa, F(b));
          if(u(d)) {
            c = d, a = a.Ha, b = I(b)
          }else {
            return null
          }
        }else {
          return Bh(c, a, b)
        }
      }else {
        return W(a) ? (d = Bh(c, a, H), u(d) ? c = d : Bh(c, a, null)) : null
      }
    }
  }else {
    if(u(Wh.b ? Wh.b(b) : Wh.call(null, b))) {
      for(a = this;;) {
        if(W(a)) {
          return Bh(c, a, b)
        }
        if(W(b)) {
          return Bh(c, b, a)
        }
        d = Wh.b ? Wh.b(a) : Wh.call(null, a);
        d = u(d) ? Wh.b ? Wh.b(b) : Wh.call(null, b) : d;
        if(u(d)) {
          if(d = Bh(c, a.pa, b.pa), u(d)) {
            c = d, b = b.Ha, a = a.Ha
          }else {
            return null
          }
        }else {
          return w ? Bh(c, a, b) : null
        }
      }
    }else {
      return null
    }
  }
};
g.Qe = f("pa");
g.Re = f("Ha");
g.M = function(a, b) {
  return D(b, "" + A(this))
};
g.Gc = function(a, b) {
  return Xh.a ? Xh.a(b.b ? b.b(zg(this)) : b.call(null, zg(this)), b.b ? b.b(Ag(this)) : b.call(null, Ag(this))) : Xh.call(null, b.b ? b.b(zg(this)) : b.call(null, zg(this)), b.b ? b.b(Ag(this)) : b.call(null, Ag(this)))
};
g.toString = function() {
  return this.Ha instanceof Vh ? [A("("), A(this.pa), A(" "), A(Bg(this.Ha)), A(")")].join("") : w ? [A("("), A(this.pa), A(" . "), A(this.Ha), A(")")].join("") : null
};
g.te = function() {
  return this.Ha instanceof Vh ? [A(this.pa), A(" "), A(Bg(this.Ha))].join("") : w ? [A(this.pa), A(" . "), A(this.Ha)].join("") : null
};
g.je = function(a, b, c) {
  for(a = this;;) {
    if(u(Wh.b ? Wh.b(a) : Wh.call(null, a))) {
      var d = Ah(c, b, zg(a));
      if(u(d)) {
        return d
      }
      a = Ag(a)
    }else {
      return Ah(c, b, a)
    }
  }
};
g.J = function(a, b) {
  var c = this === b;
  if(!c && (c = b instanceof Vh)) {
    for(var c = this, d = b;;) {
      if(null == c) {
        return null == d
      }
      if(W(c) || W(d)) {
        return!0
      }
      var e;
      e = Wh.b ? Wh.b(c) : Wh.call(null, c);
      e = u(e) ? Wh.b ? Wh.b(d) : Wh.call(null, d) : e;
      if(u(e)) {
        e = zg(c);
        var h = zg(d);
        if(e = K.a(e, h) || W(e) || W(h)) {
          c = Ag(c), d = Ag(d)
        }else {
          return e
        }
      }else {
        return w ? K.a(c, d) : null
      }
    }
  }else {
    return c
  }
};
g.H = function(a, b) {
  return new Vh(this.pa, this.Ha, this.sa, b)
};
g.G = f("j");
g.ee = function(a, b) {
  for(var c = this, d = b;;) {
    if(u(Wh.b ? Wh.b(c) : Wh.call(null, c))) {
      var e = Ag(c), d = Lh(d, zg(c)), c = e
    }else {
      return Hg(c, d)
    }
  }
};
function Xh(a, b) {
  return ac(b) || null == b ? L(a, E(b)) : new Vh(a, b, -1, null)
}
function Wh(a) {
  return a instanceof Vh
}
function Yh(a, b, c) {
  if(cc(b)) {
    if(Hb(a) && Hb(b) && !K.a(M(a), M(b))) {
      return null
    }
    a = a.Q(null);
    for(b = b.Q(null);;) {
      if(null != a) {
        if(null != b) {
          if(c = Bh(c, F(a), F(b)), u(c)) {
            a = I(a), b = I(b)
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
    return Wh(b) ? b.Hd(0, a, c) : null
  }
}
wg._ = function(a, b, c) {
  if(cc(a)) {
    a = Yh(a, b, c)
  }else {
    if(dc(a)) {
      if(b ? u(u(null) ? null : b.Yf) || (b.mc ? 0 : v(xg, b)) : v(xg, b)) {
        a = yg(b, a, c)
      }else {
        if(dc(b)) {
          a: {
            if(K.a(M(a), M(b))) {
              for(var d = We(a);;) {
                if(E(d)) {
                  var e = F(d), h = Rb.c(b, e, Nf);
                  if(Pc(h, Nf)) {
                    a = null;
                    break a
                  }
                  c = Bh(c, Rb.a(a, e), h);
                  if(u(c)) {
                    d = I(d)
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
      a = w ? K.a(a, b) ? c : null : null
    }
  }
  return a
};
wg["null"] = function(a, b, c) {
  return null == b ? c : null
};
Eg._ = function(a, b) {
  if(ac(a)) {
    for(var c = a, d = b;;) {
      if(E(c)) {
        var e = I(c), d = Kh(d, F(c)), c = e
      }else {
        return d
      }
    }
  }else {
    return w ? b : null
  }
};
Eg["null"] = function(a, b) {
  return b
};
function Zh(a, b) {
  var c = p, d;
  a: {
    d = a;
    for(var e = vg(d);;) {
      if(E(d)) {
        var h = F(d), k = N.c(h, 0, null), h = N.c(h, 1, null);
        d = I(d);
        e = O.c(e, Fg(b.b ? b.b(k) : b.call(null, k), b), Fg(b.b ? b.b(h) : b.call(null, h), b))
      }else {
        d = e;
        break a
      }
    }
    d = void 0
  }
  return c(d, Wb(a))
}
function $h(a, b) {
  var c = p, d;
  a: {
    d = a;
    for(var e = bd(p(ie, q([s, 951, t, 54], !0)));;) {
      if(E(d)) {
        var h = F(d), k = N.c(h, 0, null), h = N.c(h, 1, null);
        d = I(d);
        e = cd(e, Fg(b.b ? b.b(k) : b.call(null, k), b), Fg(b.b ? b.b(h) : b.call(null, h), b))
      }else {
        d = qb(e);
        break a
      }
    }
    d = void 0
  }
  return c(d, Wb(a))
}
Id.prototype.Gc = function(a, b) {
  var c = p, d;
  a: {
    for(var e = this, h = bd(p(Nd, q([s, 982, t, 45], !0)));;) {
      if(E(e)) {
        d = I(e), e = Fg(b.b ? b.b(F(e)) : b.call(null, F(e)), b), h = pb(h, e), e = d
      }else {
        d = qb(h);
        break a
      }
    }
    d = void 0
  }
  return c(d, Wb(this))
};
ee.prototype.Gc = function(a, b) {
  return $h(this, b)
};
ze.prototype.Gc = function(a, b) {
  return $h(this, b)
};
Fg._ = function(a, b) {
  return ic(a) ? p(kf.b(nd.a(function(a) {
    return Fg(b.b ? b.b(a) : b.call(null, a), b)
  }, a)), Wb(a)) : (a ? a.h & 67108864 || a.Pf || (a.h ? 0 : v(hb, a)) : v(hb, a)) ? Zh(a, b) : w ? b.b ? b.b(a) : b.call(null, a) : null
};
Fg["null"] = function(a, b) {
  return b.b ? b.b(null) : b.call(null, null)
};
Gg._ = function(a, b, c) {
  if(ac(a)) {
    for(;;) {
      if(E(a)) {
        var d = Ah(c, b, F(a));
        if(u(d)) {
          return d
        }
        a = I(a)
      }else {
        return!1
      }
    }
  }else {
    return w ? !1 : null
  }
};
Gg["null"] = ba(!1);
Hg._ = function(a, b) {
  return ac(a) ? sc.c(Lh, b, a) : w ? b : null
};
Hg["null"] = function(a, b) {
  return b
};
var ai = function() {
  function a(a, b) {
    return function(e) {
      e = a.b ? a.b(e) : a.call(null, e);
      return u(e) ? b.b ? b.b(e) : b.call(null, e) : e
    }
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 0:
        return jd;
      case 2:
        return a.call(this, b, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = function() {
    return jd
  };
  b.a = a;
  return b
}();
function bi(a, b) {
  this.pa = a;
  this.Da = b;
  this.u = 0;
  this.h = 256
}
g = bi.prototype;
g.$c = function() {
  var a = this;
  return new Qc(null, function() {
    return L(a.pa, new Qc(null, function() {
      return Kg(a.Da)
    }, null, null))
  }, null, null)
};
g.Yc = function(a, b) {
  var c = this;
  return new bi(c.pa, function() {
    return Jg(b.A ? b.A() : b.call(null), c.Da)
  })
};
g.Xc = function(a, b) {
  var c = this;
  return Jg(b.b ? b.b(c.pa) : b.call(null, c.pa), function() {
    return Ig(c.Da, b)
  })
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return K.a(Pf, b) ? this.pa : w ? c : null
};
function Nh(a, b) {
  return new bi(a, b)
}
Kg["null"] = function() {
  return H
};
Jg["null"] = function(a, b) {
  return b.A ? b.A() : b.call(null)
};
Ig["null"] = ba(null);
Ig._ = function(a, b) {
  if(Ub(a)) {
    return function() {
      return Ig(a.A ? a.A() : a.call(null), b)
    }
  }
  if(w) {
    throw Ff.a("No protocol method", p(ie, q([s, 1070, t, 55], !0)));
  }
  return null
};
Jg._ = function(a, b) {
  return Ub(a) ? function() {
    return Jg(b.A ? b.A() : b.call(null), a)
  } : w ? new bi(a, b) : null
};
Kg._ = function(a) {
  return Ub(a) ? new Qc(null, function() {
    return Kg(a.A ? a.A() : a.call(null))
  }, null, null) : w ? a : null
};
function ci(a) {
  return a
}
function di(a, b) {
  return function(c) {
    return Og(c, a, b)
  }
}
function ei(a, b) {
  return function(c) {
    var d = 0 < M(qg.b(c));
    c = Bh(d ? O.c(c, Wf, p(Nd, q([s, 1109, t, 50], !0))) : c, a, b);
    d = d ? Wf.b(c) : null;
    return 0 < M(d) ? (Qh.c ? Qh.c(d, qg.b(c), Mf) : Qh.call(null, d, qg.b(c), Mf)).call(null, O.c(c, Wf, null)) : c
  }
}
function fi(a, b, c, d, e) {
  this.sa = a;
  this.Xa = b;
  this.Da = c;
  this.ga = d;
  this.V = e;
  this.u = 0;
  this.h = 2229667594;
  3 < arguments.length ? (this.ga = d, this.V = e) : this.V = this.ga = null
}
g = fi.prototype;
g.N = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Gc(this)
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return Pc(b, fg) ? this.sa : Pc(b, Vf) ? this.Xa : Pc(b, Tf) ? this.Da : w ? Rb.c(this.V, b, c) : null
};
g.Za = function(a, b, c) {
  return(Pc.a ? Pc.a(fg, b) : Pc.call(null, fg, b)) ? new fi(c, this.Xa, this.Da, this.ga, this.V, null) : (Pc.a ? Pc.a(Vf, b) : Pc.call(null, Vf, b)) ? new fi(this.sa, c, this.Da, this.ga, this.V, null) : (Pc.a ? Pc.a(Tf, b) : Pc.call(null, Tf, b)) ? new fi(this.sa, this.Xa, c, this.ga, this.V, null) : new fi(this.sa, this.Xa, this.Da, this.ga, O.c(this.V, b, c), null)
};
g.M = function(a, b, c) {
  return of(b, function(a) {
    return of(b, tf, "", " ", "", c, a)
  }, "#cljs.core.logic.SuspendedStream{", ", ", "}", c, $c.a(R([R.a ? R.a([fg, this.sa], !0) : R.call(null, [fg, this.sa], !0), R.a ? R.a([Vf, this.Xa], !0) : R.call(null, [Vf, this.Xa], !0), R.a ? R.a([Tf, this.Da], !0) : R.call(null, [Tf, this.Da], !0)], !0), this.V))
};
g.R = function(a, b) {
  return ec(b) ? Ka(this, C.a(b, 0), C.a(b, 1)) : sc.c(B, this, b)
};
g.Q = function() {
  return E($c.a(R([R.a ? R.a([fg, this.sa], !0) : R.call(null, [fg, this.sa], !0), R.a ? R.a([Vf, this.Xa], !0) : R.call(null, [Vf, this.Xa], !0), R.a ? R.a([Tf, this.Da], !0) : R.call(null, [Tf, this.Da], !0)], !0), this.V))
};
g.S = function() {
  return 3 + M(this.V)
};
g.J = function(a, b) {
  var c;
  c = u(b) ? (c = this.constructor === b.constructor) ? be(this, b) : c : b;
  return u(c) ? !0 : !1
};
g.H = function(a, b) {
  return new fi(this.sa, this.Xa, this.Da, b, this.V, this.n)
};
g.G = f("ga");
g.jc = function(a, b) {
  return lc($e([Tf, null, Vf, null, fg, null]), b) ? Tb.a(p(ud(ie, this), this.ga), b) : new fi(this.sa, this.Xa, this.Da, this.ga, gd(Tb.a(this.V, b)), null)
};
g.se = function() {
  return If.b(Wa(this.sa)) !== this.Xa
};
function gi(a, b, c) {
  return new fi(a, b, c)
}
function hi(a, b, c) {
  for(var d = p(Nd, q([s, 1353, t, 18], !0));;) {
    if(null == a) {
      return c.A ? c.A() : c.call(null)
    }
    if(u(Lg(F(a)))) {
      return b.b ? b.b(function(a, b) {
        return function() {
          var c = F(a), d = Tf.b(c), e = ud(b, I(a));
          return $b(e) ? d.A ? d.A() : d.call(null) : Jg(d.A ? d.A() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d)) : b.call(null, function(a, b) {
        return function() {
          var c = F(a), d = Tf.b(c), e = ud(b, I(a));
          return $b(e) ? d.A ? d.A() : d.call(null) : Jg(d.A ? d.A() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d))
    }
    if(w) {
      var e = I(a), d = Pb.a(d, F(a));
      a = e
    }else {
      return null
    }
  }
}
Id.prototype.$c = function() {
  return hi(this, function(a) {
    return Kg(a)
  }, function() {
    return H
  })
};
Id.prototype.Yc = function(a, b) {
  var c = this;
  return hi(c, function(a) {
    return Jg(a, b)
  }, function() {
    var a = b.A ? b.A() : b.call(null);
    return ec(a) ? ud(a, c) : Jg(a, function() {
      return c
    })
  })
};
Id.prototype.Xc = function(a, b) {
  var c = this;
  return hi(c, function(a) {
    return Ig(a, b)
  }, function() {
    return ud(p(Nd, q([s, 1440, t, 16], !0)), nd.a(function(a) {
      return gi(fg.b(a), Vf.b(a), function() {
        return Ig(Tf.b(a).call(null), b)
      })
    }, c))
  })
};
function ii(a) {
  return function(b) {
    b = sc.c(function(a, b) {
      return Cg(a, b, zh.b(kg))
    }, b, uh(b, a));
    return O.c(b, qg, Rg(qg.b(b), b, a))
  }
}
function ji(a) {
  return function(b) {
    return O.c(b, qg, Sg(qg.b(b), b, a))
  }
}
function ki(a) {
  return function(b) {
    return O.c(b, qg, Tg(qg.b(b), a, !0))
  }
}
function li(a) {
  return function(b) {
    return O.c(b, qg, Tg(qg.b(b), a, !1))
  }
}
function mi(a) {
  return a ? u(u(null) ? null : a.lc) ? !0 : a.mc ? !1 : v(Xg, a) : v(Xg, a)
}
function ni(a, b, c) {
  a = ch(a);
  c = cg.b(qg.b(c)).call(null, a);
  c = u(c) ? c : null == a;
  return u(c) ? Yg(b) : c
}
function oi(a) {
  return function(b) {
    var c = Vg(a, b);
    return mi(c) && ni(a, c, b) ? ji(a).call(null, b) : u(Wg(c)) ? (X.f.D.a ? X.f.D.a(ki(a), X.f.D.a ? X.f.D.a(c, li(a)) : X.f.D.call(null, c, li(a))) : X.f.D.call(null, ki(a), X.f.D.a ? X.f.D.a(c, li(a)) : X.f.D.call(null, c, li(a)))).call(null, b) : b
  }
}
function pi(a) {
  for(;;) {
    if(u(a)) {
      var b = eg.b(a);
      if(0 === M(b)) {
        return O.c(a, eg, null)
      }
      b = F(b);
      a = oi(b).call(null, O.c(O.c(a, eg, Sd.a(eg.b(a), 1)), Of, Xb.a(Of.b(a), ch(b))))
    }else {
      return null
    }
  }
}
function qi(a) {
  return function(b) {
    var c = eg.b(b);
    b = sc.c(function() {
      return function(a, b) {
        return Pg(a, b)
      }
    }(c), O.c(b, eg, u(c) ? c : p(Nd, q([s, 1558, t, 44], !0))), a);
    return u(c) ? b : pi(b)
  }
}
var Qh = function ri(b, c, d) {
  return 0 === M(c) || null == E(b) ? ci : function(e) {
    var h = Ug(c, e, F(b), d);
    return E(h) ? (X.f.D.a ? X.f.D.a(qi(h), ri(I(b), c, d)) : X.f.D.call(null, qi(h), ri(I(b), c, d))).call(null, e) : ri(I(b), c, d).call(null, e)
  }
}, ti = function si(b) {
  "undefined" === typeof sg && (sg = function(b, d, e) {
    this.Ya = b;
    this.De = d;
    this.cf = e;
    this.u = 0;
    this.h = 393217
  }, sg.ka = !0, sg.ja = "cljs.core.logic/t19520", sg.na = function(b, d) {
    return D(d, "cljs.core.logic/t19520")
  }, sg.prototype.call = function(b, d) {
    b = this;
    var e = Vg(b.Ya, d);
    if(u(Wg(e))) {
      e = e.b ? e.b(d) : e.call(null, d);
      if(u(e)) {
        var h = Vg(b.Ya, e);
        return mi(h) && !ni(b.Ya, h, e) ? ii(b.Ya).call(null, e) : e
      }
      return null
    }
    return ii(b.Ya).call(null, d)
  }, sg.prototype.apply = function(b, d) {
    return this.call.apply(this, [this].concat(d.slice()))
  }, sg.prototype.b = function(b) {
    var d = Vg(this.Ya, b);
    return u(Wg(d)) ? (b = d.b ? d.b(b) : d.call(null, b), u(b) ? (d = Vg(this.Ya, b), mi(d) && !ni(this.Ya, d, b) ? ii(this.Ya).call(null, b) : b) : null) : ii(this.Ya).call(null, b)
  }, sg.prototype.G = f("cf"), sg.prototype.H = function(b, d) {
    return new sg(this.Ya, this.De, d)
  });
  return new sg(b, si, null)
};
function ui(a) {
  return function(b, c) {
    var d = X.f.I.a ? X.f.I.a(a, b) : X.f.I.call(null, a, b), e = X.f.I.a ? X.f.I.a(a, c) : X.f.I.call(null, a, c);
    return fh(d) < fh(e)
  }
}
function vi(a, b, c) {
  b = Rf.b(Wb(b));
  return K.a(Uf, b) ? E(rc.a(ui(c), a)) : w ? a : null
}
Vh.prototype.Fc = function() {
  var a = function c(a) {
    return function(e) {
      return Ig(Ig(e, wi.b ? wi.b(zg(a)) : wi.call(null, zg(a))), Wh(Ag(a)) ? c(Ag(a)) : ci)
    }
  };
  return a.b ? a.b(this) : a.call(null, this)
};
gh._ = function(a, b) {
  if(cc(a)) {
    var c = function e(a) {
      return u(a) ? function(c) {
        return Ig(Ig(c, wi.b ? wi.b(F(a)) : wi.call(null, F(a))), function(c) {
          var k = vi(I(a), b, c);
          return u(k) ? e(k).call(null, c) : c
        })
      } : ci
    };
    return c.b ? c.b(E(a)) : c.call(null, E(a))
  }
  return dc(a) ? (c = function h(a) {
    return u(a) ? function(b) {
      return Ig(Ig(b, wi.b ? wi.b(Ic(F(a))) : wi.call(null, Ic(F(a)))), h(I(a)))
    } : ci
  }, c.b ? c.b(E(a)) : c.call(null, E(a))) : w ? W(b) ? di(b, a) : ci : null
};
gh["null"] = function() {
  return ci
};
function wi(a) {
  return function(b) {
    var c;
    c = Dg(b, a);
    if(W(c)) {
      c = gh(W(a) ? Uh(b, a) : a, c)
    }else {
      var d = Ng(b, a);
      c = cc(c) ? gh(vi(c, d, b), d) : gh(c, d)
    }
    return c.call(null, b)
  }
}
;$ = {ve:{}, t:function(a) {
  if(a ? a.Nc : a) {
    return a.Nc(a)
  }
  var b;
  b = $.t[n(null == a ? null : a)];
  if(!b && (b = $.t._, !b)) {
    throw z("IInterval.-lb", a);
  }
  return b.call(null, a)
}, B:function(a) {
  if(a ? a.Oc : a) {
    return a.Oc(a)
  }
  var b;
  b = $.B[n(null == a ? null : a)];
  if(!b && (b = $.B._, !b)) {
    throw z("IInterval.-ub", a);
  }
  return b.call(null, a)
}, we:{}, Fa:function(a) {
  if(a ? a.Pc : a) {
    return a.Pc(a)
  }
  var b;
  b = $.Fa[n(null == a ? null : a)];
  if(!b && (b = $.Fa._, !b)) {
    throw z("IIntervals.-intervals", a);
  }
  return b.call(null, a)
}, ye:{}, xc:function(a) {
  if(a ? a.Vc : a) {
    return a.Vc(a)
  }
  var b;
  b = $.xc[n(null == a ? null : a)];
  if(!b && (b = $.xc._, !b)) {
    throw z("ISortedDomain.-drop-one", a);
  }
  return b.call(null, a)
}, Cb:function(a, b) {
  if(a ? a.Uc : a) {
    return a.Uc(a, b)
  }
  var c;
  c = $.Cb[n(null == a ? null : a)];
  if(!c && (c = $.Cb._, !c)) {
    throw z("ISortedDomain.-drop-before", a);
  }
  return c.call(null, a, b)
}, Db:function(a, b) {
  if(a ? a.Wc : a) {
    return a.Wc(a, b)
  }
  var c;
  c = $.Db[n(null == a ? null : a)];
  if(!c && (c = $.Db._, !c)) {
    throw z("ISortedDomain.-keep-before", a);
  }
  return c.call(null, a, b)
}, xe:{}, ra:function(a, b) {
  if(a ? a.Tc : a) {
    return a.Tc(a, b)
  }
  var c;
  c = $.ra[n(null == a ? null : a)];
  if(!c && (c = $.ra._, !c)) {
    throw z("ISet.-member?", a);
  }
  return c.call(null, a, b)
}, Wa:function(a, b) {
  if(a ? a.Rc : a) {
    return a.Rc(a, b)
  }
  var c;
  c = $.Wa[n(null == a ? null : a)];
  if(!c && (c = $.Wa._, !c)) {
    throw z("ISet.-disjoint?", a);
  }
  return c.call(null, a, b)
}, Z:function(a, b) {
  if(a ? a.Sc : a) {
    return a.Sc(a, b)
  }
  var c;
  c = $.Z[n(null == a ? null : a)];
  if(!c && (c = $.Z._, !c)) {
    throw z("ISet.-intersection", a);
  }
  return c.call(null, a, b)
}, La:function(a, b) {
  if(a ? a.Qc : a) {
    return a.Qc(a, b)
  }
  var c;
  c = $.La[n(null == a ? null : a)];
  if(!c && (c = $.La._, !c)) {
    throw z("ISet.-difference", a);
  }
  return c.call(null, a, b)
}, ha:function(a) {
  return sh.a ? sh.a($.t(a), $.B(a)) : sh.call(null, $.t(a), $.B(a))
}, Nd:function(a, b) {
  return wc.a($.B(a), $.t(b))
}, Ue:function(a, b) {
  return xc.a($.B(a), $.t(b))
}, Md:function(a, b) {
  return yc.a($.t(a), $.B(b))
}, cg:function(a, b) {
  return zc.a($.t(a), $.B(b))
}};
function xi(a, b, c) {
  this.q = a;
  this.min = b;
  this.max = c;
  this.u = 0;
  this.h = 2149581056
}
g = xi.prototype;
g.M = function(a, b) {
  return D(b, [A("\x3cdomain:"), A(E(rg.b(this))), A("\x3e")].join(""))
};
g.Pc = function() {
  return E(this.q)
};
g.Tc = function(a, b) {
  return u(this.q.b ? this.q.b(b) : this.q.call(null, b)) ? !0 : !1
};
g.Rc = function(a, b) {
  return kc(b) ? u(this.q.b ? this.q.b(b) : this.q.call(null, b)) ? !1 : !0 : b instanceof xi ? wc.a(this.max, ig.b(b)) ? !0 : yc.a(this.min, Xf.b(b)) ? !0 : w ? $b(ph.a(this.q, rg.b(b))) : null : w ? $.Ub.a ? $.Ub.a(this, b) : $.Ub.call(null, this, b) : null
};
g.Sc = function(a, b) {
  return kc(b) ? u($.ra(this, b)) ? b : null : b instanceof xi ? $.rb.b ? $.rb.b(ph.a(this.q, rg.b(b))) : $.rb.call(null, ph.a(this.q, rg.b(b))) : w ? $.nb.a ? $.nb.a(this, b) : $.nb.call(null, this, b) : null
};
g.Qc = function(a, b) {
  return kc(b) ? $.rb.b ? $.rb.b(Xb.a(this.q, b)) : $.rb.call(null, Xb.a(this.q, b)) : b instanceof xi ? $.rb.b ? $.rb.b(qh.a(this.q, rg.b(b))) : $.rb.call(null, qh.a(this.q, rg.b(b))) : w ? $.mb.a ? $.mb.a(this, b) : $.mb.call(null, this, b) : null
};
g.Vc = function() {
  var a = Xb.a(this.q, this.min), b = M(a);
  return K.a(b, 1) ? F(a) : yc.a(b, 1) ? new xi(a, F(a), this.max) : null
};
g.Uc = function(a, b) {
  return Q.a($.domain, qd(function(a) {
    return wc.a(a, b)
  }, this.q))
};
g.Wc = function(a, b) {
  return Q.a($.domain, ff(function(a) {
    return wc.a(a, b)
  }, this.q))
};
g.Nc = f("min");
g.Oc = f("max");
g.Zc = function() {
  return M(this.q)
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return K.a(Xf, b) ? this.max : K.a(ig, b) ? this.min : K.a(rg, b) ? this.q : w ? c : null
};
g.J = function(a, b) {
  return u($.Kd.b ? $.Kd.b(b) : $.Kd.call(null, b)) ? K.a(fh(this), fh(b)) ? K.a(this.q, rg.b(b)) : !1 : !1
};
$.of = function(a, b, c) {
  return new xi(a, b, c)
};
$.Kd = function(a) {
  return a instanceof xi
};
$.rb = function(a) {
  var b = M(a);
  return 0 === b ? null : K.a(b, 1) ? F(a) : w ? new xi(a, F(a), F(jb(a))) : null
};
$.domain = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return E(a) ? $.rb(ud(cf(), a)) : null
  }
  a.p = 0;
  a.g = function(a) {
    a = E(a);
    return b(a)
  };
  a.d = b;
  return a
}();
$.we.number = !0;
$.Fa.number = function(a) {
  return B(H, a)
};
$.xe.number = !0;
$.ra.number = function(a, b) {
  return kc(b) ? K.a(a, b) : X.f.ra.a ? X.f.ra.a(b, a) : X.f.ra.call(null, b, a)
};
$.Wa.number = function(a, b) {
  return kc(b) ? fd.a(a, b) : X.f.Wa.a ? X.f.Wa.a(b, a) : X.f.Wa.call(null, b, a)
};
$.Z.number = function(a, b) {
  return kc(b) ? K.a(a, b) ? a : null : u(X.f.va.b ? X.f.va.b(b) : X.f.va.call(null, b)) ? X.f.Z.a ? X.f.Z.a(b, a) : X.f.Z.call(null, b, a) : w ? X.f.nb.a ? X.f.nb.a(a, b) : X.f.nb.call(null, a, b) : null
};
$.La.number = function(a, b) {
  return kc(b) ? K.a(a, b) ? null : a : u(X.f.va.b ? X.f.va.b(b) : X.f.va.call(null, b)) ? X.f.La.a ? X.f.La.a(b, a) : X.f.La.call(null, b, a) : w ? X.f.mb.a ? X.f.mb.a(a, b) : X.f.mb.call(null, a, b) : null
};
$.ye.number = !0;
$.xc.number = ba(null);
$.Cb.number = function(a, b) {
  return a >= b ? a : null
};
$.Db.number = function(a, b) {
  return a < b ? a : null
};
$.ve.number = !0;
$.t.number = aa();
$.B.number = aa();
fh.number = ba(1);
function yi(a, b) {
  this.oa = a;
  this.ba = b;
  this.u = 0;
  this.h = 2149580800
}
g = yi.prototype;
g.M = function(a, b) {
  return D(b, [A("\x3cinterval:"), A($.t(this)), A(".."), A($.B(this)), A("\x3e")].join(""))
};
g.Pc = function() {
  return B(H, this)
};
g.Tc = function(a, b) {
  return zc.a(b, this.oa) && xc.a(b, this.ba)
};
g.Rc = function(a, b) {
  if(kc(b)) {
    return ra($.ra(this, b))
  }
  if(u($.va.b ? $.va.b(b) : $.va.call(null, b))) {
    var c = $.ha(this), d = N.c(c, 0, null), c = N.c(c, 1, null), e = $.ha(b), h = N.c(e, 0, null), e = N.c(e, 1, null);
    return yc.a(d, e) || wc.a(c, h)
  }
  return w ? $.Ub.a ? $.Ub.a(this, b) : $.Ub.call(null, this, b) : null
};
g.Sc = function(a, b) {
  if(kc(b)) {
    return u($.ra(this, b)) ? b : null
  }
  if(u($.va.b ? $.va.b(b) : $.va.call(null, b))) {
    var c = $.t(this), d = $.B(this), e = $.t(b), h = $.B(b);
    if(wc.a(d, e) || wc.a(h, c)) {
      return null
    }
    if(xc.a(c, e) && zc.a(d, h)) {
      return b
    }
    if(xc.a(e, c) && zc.a(h, d)) {
      return this
    }
    if(xc.a(c, e) && xc.a(d, h)) {
      return $.interval.a ? $.interval.a(e, d) : $.interval.call(null, e, d)
    }
    if(xc.a(e, c) && xc.a(h, d)) {
      return $.interval.a ? $.interval.a(c, h) : $.interval.call(null, c, h)
    }
    if(w) {
      throw Ff.a([A("Interval intersection not defined "), A(this), A(" "), A(b)].join(""), p(ie, q([s, 260, t, 103], !0)));
    }
    return null
  }
  return w ? $.nb.a ? $.nb.a(this, b) : $.nb.call(null, this, b) : null
};
g.Qc = function(a, b) {
  if(kc(b)) {
    return K.a(this.oa, b) ? $.interval.a ? $.interval.a(this.oa + 1, this.ba) : $.interval.call(null, this.oa + 1, this.ba) : K.a(this.ba, b) ? $.interval.a ? $.interval.a(this.oa, this.ba - 1) : $.interval.call(null, this.oa, this.ba - 1) : w ? u($.ra(this, b)) ? $.hb.a ? $.hb.a($.interval.a ? $.interval.a(this.oa, b - 1) : $.interval.call(null, this.oa, b - 1), $.interval.a ? $.interval.a(b + 1, this.ba) : $.interval.call(null, b + 1, this.ba)) : $.hb.call(null, $.interval.a ? $.interval.a(this.oa, 
    b - 1) : $.interval.call(null, this.oa, b - 1), $.interval.a ? $.interval.a(b + 1, this.ba) : $.interval.call(null, b + 1, this.ba)) : this : null
  }
  if(u($.va.b ? $.va.b(b) : $.va.call(null, b))) {
    var c = $.t(this), d = $.B(this), e = $.t(b), h = $.B(b);
    if(yc.a(e, d)) {
      return this
    }
    if(xc.a(e, c) && zc.a(h, d)) {
      return null
    }
    if(wc.a(c, e) && yc.a(d, h)) {
      return $.hb.a ? $.hb.a($.interval.a ? $.interval.a(c, e - 1) : $.interval.call(null, c, e - 1), $.interval.a ? $.interval.a(h + 1, d) : $.interval.call(null, h + 1, d)) : $.hb.call(null, $.interval.a ? $.interval.a(c, e - 1) : $.interval.call(null, c, e - 1), $.interval.a ? $.interval.a(h + 1, d) : $.interval.call(null, h + 1, d))
    }
    if(wc.a(c, e) && xc.a(e, d)) {
      return $.interval.a ? $.interval.a(c, e - 1) : $.interval.call(null, c, e - 1)
    }
    if(yc.a(d, h) && xc.a(e, c)) {
      return $.interval.a ? $.interval.a(h + 1, d) : $.interval.call(null, h + 1, d)
    }
    if(w) {
      throw Ff.a([A("Interval difference not defined "), A(this), A(" "), A(b)].join(""), p(ie, q([s, 291, t, 101], !0)));
    }
    return null
  }
  return w ? $.mb.a ? $.mb.a(this, b) : $.mb.call(null, this, b) : null
};
g.Vc = function() {
  var a = this.oa + 1;
  return xc.a(a, this.ba) ? $.interval.a ? $.interval.a(a, this.ba) : $.interval.call(null, a, this.ba) : null
};
g.Uc = function(a, b) {
  return K.a(b, this.ba) ? b : wc.a(b, this.oa) ? this : yc.a(b, this.ba) ? null : w ? $.interval.a ? $.interval.a(b, this.ba) : $.interval.call(null, b, this.ba) : null
};
g.Wc = function(a, b) {
  return xc.a(b, this.oa) ? null : yc.a(b, this.ba) ? this : w ? $.interval.a ? $.interval.a(this.oa, b - 1) : $.interval.call(null, this.oa, b - 1) : null
};
g.Nc = f("oa");
g.Oc = f("ba");
g.Zc = function() {
  return uc.a(this.ba, this.oa) + 1
};
g.toString = function() {
  return uf.d(J([this], 0))
};
g.J = function(a, b) {
  return b instanceof yi ? K.a(this.oa, $.t(b)) && K.a(this.ba, $.B(b)) : !1
};
$.pf = function(a, b) {
  return new yi(a, b)
};
$.va = function(a) {
  return a instanceof yi
};
$.interval = function() {
  function a(a, b) {
    return 0 === uc.a(b, a) ? b : new yi(a, b)
  }
  function b(a) {
    return new yi(0, a)
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
$.nb = function(a, b) {
  for(var c = E($.Fa(a)), d = E($.Fa(b)), e = p(Nd, q([s, 321, t, 64], !0));;) {
    if(c && d) {
      var h = F(c), k = F(d);
      if(u($.Nd(h, k))) {
        c = I(c)
      }else {
        if(u($.Md(h, k))) {
          d = I(d)
        }else {
          if(w) {
            var l = $.ha(h), m = N.c(l, 0, null), l = N.c(l, 1, null), r = $.ha(k), x = N.c(r, 0, null), r = N.c(r, 1, null);
            if(xc.a(m, x)) {
              if(wc.a(l, r)) {
                c = I(c), d = L($.interval.a(l + 1, r), I(d)), e = Pb.a(e, $.interval.a(x, l))
              }else {
                if(yc.a(l, r)) {
                  c = L($.interval.a(r + 1, l), I(c)), d = I(d), e = Pb.a(e, k)
                }else {
                  if(w) {
                    c = I(c), d = I(d), e = Pb.a(e, $.interval.a(x, r))
                  }else {
                    return null
                  }
                }
              }
            }else {
              if(yc.a(m, x)) {
                if(yc.a(l, r)) {
                  c = L($.interval.a(r + 1, l), I(c)), d = I(d), e = Pb.a(e, $.interval.a(m, r))
                }else {
                  if(wc.a(l, r)) {
                    d = L($.interval.a(l + 1, r), I(d)), e = Pb.a(e, h)
                  }else {
                    if(w) {
                      c = I(c), d = I(d), e = Pb.a(e, $.interval.a(m, l))
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
      return Q.a($.hb, e)
    }
  }
};
$.mb = function(a, b) {
  for(var c = E($.Fa(a)), d = E($.Fa(b)), e = p(Nd, q([s, 360, t, 64], !0));;) {
    if(c) {
      if(d) {
        var h = F(c), k = F(d);
        if(u($.Nd(h, k))) {
          c = I(c), e = Pb.a(e, h)
        }else {
          if(u($.Md(h, k))) {
            d = I(d)
          }else {
            if(w) {
              var l = $.ha(h), h = N.c(l, 0, null), l = N.c(l, 1, null), m = $.ha(k), k = N.c(m, 0, null), m = N.c(m, 1, null);
              if(wc.a(h, k)) {
                if(wc.a(m, l)) {
                  c = L($.interval.a(m + 1, l), I(c)), d = I(d), e = Pb.a(e, $.interval.a(h, k - 1))
                }else {
                  if(yc.a(m, l)) {
                    c = I(c), d = L($.interval.a(l + 1, m), I(d)), e = Pb.a(e, $.interval.a(h, k - 1))
                  }else {
                    if(w) {
                      c = I(c), d = I(d), e = Pb.a(e, $.interval.a(h, k - 1))
                    }else {
                      return null
                    }
                  }
                }
              }else {
                if(zc.a(h, k)) {
                  if(wc.a(l, m)) {
                    c = I(c), d = L($.interval.a(l + 1, m), I(d))
                  }else {
                    if(yc.a(l, m)) {
                      c = L($.interval.a(m + 1, l), I(c)), d = I(d)
                    }else {
                      if(w) {
                        c = I(c), d = I(d)
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
        return Q.a($.hb, ud(e, c))
      }
    }else {
      return Q.a($.hb, e)
    }
  }
};
$.Ub = function(a, b) {
  if(u($.Wa($.interval.a($.t(a), $.B(a)), $.interval.a($.t(b), $.B(b))))) {
    return!0
  }
  for(var c = $.Fa(a), d = $.Fa(b);;) {
    if(null == c || null == d) {
      return!0
    }
    var e = F(c), h = F(d);
    if(u($.Nd(e, h))) {
      c = I(c)
    }else {
      if(u($.Md(e, h))) {
        d = I(d)
      }else {
        if(u($.Wa(e, h))) {
          c = I(c)
        }else {
          return w ? !1 : null
        }
      }
    }
  }
};
function zi(a, b, c) {
  this.min = a;
  this.max = b;
  this.gb = c;
  this.u = 0;
  this.h = 2149581056
}
g = zi.prototype;
g.M = function(a, b) {
  return D(b, [A("\x3cintervals:"), A(Q.a(uf, Hf.b(this))), A("\x3e")].join(""))
};
g.Pc = function() {
  return E(this.gb)
};
g.Tc = function(a, b) {
  return u(id(function(a) {
    return $.ra(a, b)
  }, this.gb)) ? !0 : !1
};
g.Rc = function(a, b) {
  return $.Ub(this, b)
};
g.Sc = function(a, b) {
  return $.nb(this, b)
};
g.Qc = function(a, b) {
  return $.mb(this, b)
};
g.Vc = function() {
  var a = F(this.gb);
  if(u($.ea.b ? $.ea.b(a) : $.ea.call(null, a))) {
    return a = G(this.gb), new zi($.t(F(a)), this.max, a)
  }
  a = $.xc(a);
  return new zi($.t(a), this.max, L(a, G(this.gb)))
};
g.Uc = function(a, b) {
  for(var c = E(this.gb), d = p(Nd, q([s, 471, t, 24], !0));;) {
    if(c) {
      var e = $.Cb(F(c), b);
      u(e) ? (c = I(c), d = Pb.a(d, e)) : c = I(c)
    }else {
      return 0 < M(d) ? Q.a($.hb, d) : null
    }
  }
};
g.Wc = function(a, b) {
  for(var c = E(this.gb), d = p(Nd, q([s, 482, t, 24], !0));;) {
    if(c) {
      var e = $.Db(F(c), b);
      u(e) ? (c = I(c), d = Pb.a(d, e)) : c = I(c)
    }else {
      return 0 < M(d) ? Q.a($.hb, d) : null
    }
  }
};
g.Nc = f("min");
g.Oc = f("max");
g.Zc = function() {
  return sc.c(tc, 0, nd.a(function(a) {
    return fh(a)
  }, this.gb))
};
g.J = function(a, b) {
  if(b instanceof zi) {
    var c = $.ha(b), d = N.c(c, 0, null), c = N.c(c, 1, null);
    if(K.a(this.min, d) && K.a(this.max, c)) {
      return d = $.sc.b ? $.sc.b(this.gb) : $.sc.call(null, this.gb), c = $.sc.b ? $.sc.b($.Fa(b)) : $.sc.call(null, $.Fa(b)), K.a(d, c)
    }
  }
  return!1
};
g.K = function(a, b) {
  return Ha.c(this, b, null)
};
g.L = function(a, b, c) {
  return K.a(Xf, b) ? this.max : K.a(ig, b) ? this.min : K.a(Hf, b) ? this.gb : w ? c : null
};
$.qf = function(a, b, c) {
  return new zi(a, b, c)
};
$.sc = function(a) {
  return sc.c(function(a, c) {
    if(0 === M(a)) {
      return Pb.a(a, c)
    }
    var d = Sa(a), e = $.B(d), h = $.t(c);
    return xc.a(h - 1, e) ? Pb.a(Ta(a), $.interval.a($.t(d), $.B(c))) : Pb.a(a, c)
  }, p(Nd, q([s, 525, t, 13], !0)), a)
};
$.hb = function() {
  function a(a, b) {
    var c = p(R([a, b], !0), q([s, 531, t, 22], !0));
    return new zi(sc.a(Bc, nd.a($.t, c)), sc.a(Ac, nd.a($.B, c)), c)
  }
  var b = null, c = function() {
    function a(c, d, l) {
      var m = null;
      2 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, m)
    }
    function b(a, c, d) {
      a = ud(p(Nd, q([s, 535, t, 23], !0)), $c.a(B(B(H, c), a), d));
      return new zi(sc.a(Bc, nd.a($.t, a)), sc.a(Ac, nd.a($.B, a)), a)
    }
    a.p = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2))
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
$.Ld = function(a, b) {
  return W(b) ? Uh(a, b) : b
};
$.Te = function(a, b, c, d) {
  a = Sh.o(a, b, Lf, c);
  return fd.a(d, c) ? Qh(p(R([b], !0), q([s, 552, t, 31], !0)), qg.b(a), Lf).call(null, a) : a
};
$.ea = function(a) {
  return kc(a)
};
$.ef = function(a, b, c, d) {
  return u($.ea(c)) ? (d = Dg(a, b), W(d) ? Og(Th.c(a, b, Lf), b, c) : a) : $.Te(a, b, c, d)
};
$.w = function(a, b, c) {
  return function(d) {
    return u(b) ? W(a) ? $.ef(d, a, b, c) : u($.ra(b, a)) ? d : null : null
  }
};
$.Id = function(a, b) {
  return function(c) {
    var d = $.Ld(c, a), e = u(d) ? $.Z(b, d) : b;
    return ai.a($.w(a, e, d), null == d && ra($.ea(e)) ? $.Jd.b ? $.Jd.b(a) : $.Jd.call(null, a) : jd).call(null, c)
  }
};
$.Od = function(a) {
  return function c(d) {
    return $b(d) ? ba(null) : function(e) {
      return Jg((a.b ? a.b(F(d)) : a.call(null, F(d))).call(null, e), function() {
        return c(G(d)).call(null, e)
      })
    }
  }
};
$.Pd = function(a) {
  var b = function d(a) {
    if(u(a)) {
      var b = F(a);
      return new Qc(null, function() {
        var k = L, l = $.t(b), m;
        m = $.xc(b);
        m = u(m) ? d(L(m, I(a))) : d(I(a));
        return k(l, m)
      }, null, null)
    }
    return null
  };
  return b.b ? b.b(E($.Fa(a))) : b.call(null, E($.Fa(a)))
};
zi.prototype.Fc = function(a, b) {
  return $.Od(function(a) {
    return di(b, a)
  }).call(null, $.Pd(this))
};
yi.prototype.Fc = function(a, b) {
  return $.Od(function(a) {
    return di(b, a)
  }).call(null, $.Pd(this))
};
xi.prototype.Fc = function(a, b) {
  return $.Od(function(a) {
    return di(b, a)
  }).call(null, $.Pd(this))
};
$.gc = function Ai(b) {
  "undefined" === typeof $.Oa && ($.Oa = function(b, d, e) {
    this.x = b;
    this.gc = d;
    this.ad = e;
    this.u = 0;
    this.h = 393216
  }, $.Oa.ka = !0, $.Oa.ja = "cljs.core.logic.fd/t19042", $.Oa.na = function(b, d) {
    return D(d, "cljs.core.logic.fd/t19042")
  }, $.Oa.prototype.wb = function() {
    return $e([Mf, null])
  }, $.Oa.prototype.ub = function() {
    return p(R([this.x], !0), q([s, 653, t, 20], !0))
  }, $.Oa.prototype.vb = function(b, d) {
    var e = Dg(d, this.x), h = Lf.b(og.b(Mg(d, this.x)));
    "undefined" === typeof $.wa && ($.wa = function(b, c, d, e, h, y, P, S) {
      this.vc = b;
      this.kd = c;
      this.q = d;
      this.la = e;
      this.ad = h;
      this.x = y;
      this.gc = P;
      this.Ve = S;
      this.u = 0;
      this.h = 393217
    }, $.wa.ka = !0, $.wa.ja = "cljs.core.logic.fd/t19045", $.wa.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t19045")
    }, $.wa.prototype.xb = function() {
      return!W(this.kd)
    }, $.wa.prototype.lc = !0, $.wa.prototype.Tb = function() {
      return null == this.vc
    }, $.wa.prototype.call = function(b, c) {
      b = this;
      return u(b.vc) ? u($.ra(b.vc, b.kd)) ? Th.c(c, b.x, Lf) : null : c
    }, $.wa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, $.wa.prototype.b = function(b) {
      return u(this.vc) ? u($.ra(this.vc, this.kd)) ? Th.c(b, this.x, Lf) : null : b
    }, $.wa.prototype.G = f("Ve"), $.wa.prototype.H = function(b, c) {
      return new $.wa(this.vc, this.kd, this.q, this.la, this.ad, this.x, this.gc, c)
    }, $.sf = function(b, c, d, e, h, y, P, S) {
      return new $.wa(b, c, d, e, h, y, P, S)
    });
    return new $.wa(h, e, d, this, this.ad, this.x, this.gc, null)
  }, $.Oa.prototype.G = f("ad"), $.Oa.prototype.H = function(b, d) {
    return new $.Oa(this.x, this.gc, d)
  }, $.rf = function(b, d, e) {
    return new $.Oa(b, d, e)
  });
  return new $.Oa(b, Ai, null)
};
$.Jd = function(a) {
  return ti($.gc(a))
};
$.bc = function Bi(b, c) {
  "undefined" === typeof $.Pa && ($.Pa = function(b, c, h, k) {
    this.m = b;
    this.v = c;
    this.bc = h;
    this.bd = k;
    this.u = 0;
    this.h = 393216
  }, $.Pa.ka = !0, $.Pa.ja = "cljs.core.logic.fd/t19056", $.Pa.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t19056")
  }, $.Pa.prototype.wb = function() {
    return $e([Lf, null, Mf, null])
  }, $.Pa.prototype.ub = function() {
    return p(R([this.v, this.m], !0), q([s, 683, t, 22], !0))
  }, $.Pa.prototype.vb = function(b, c) {
    var h = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), k = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m);
    "undefined" === typeof $.xa && ($.xa = function(b, c, d, e, h, k, S, U, Y) {
      this.l = b;
      this.k = c;
      this.q = d;
      this.la = e;
      this.bd = h;
      this.m = k;
      this.v = S;
      this.bc = U;
      this.We = Y;
      this.u = 0;
      this.h = 393217
    }, $.xa.ka = !0, $.xa.ja = "cljs.core.logic.fd/t19059", $.xa.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t19059")
    }, $.xa.prototype.xb = function() {
      var b = this.k;
      return u(b) ? this.l : b
    }, $.xa.prototype.lc = !0, $.xa.prototype.Tb = function() {
      var b = $.ea(this.k);
      return u(b) ? (b = $.ea(this.l), u(b) ? K.a(this.k, this.l) : b) : b
    }, $.xa.prototype.call = function(b, c) {
      b = this;
      var d = $.Z(b.k, b.l);
      return ai.a($.w(b.v, d, b.k), $.w(b.m, d, b.l)).call(null, c)
    }, $.xa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, $.xa.prototype.b = function(b) {
      var c = $.Z(this.k, this.l);
      return ai.a($.w(this.v, c, this.k), $.w(this.m, c, this.l)).call(null, b)
    }, $.xa.prototype.G = f("We"), $.xa.prototype.H = function(b, c) {
      return new $.xa(this.l, this.k, this.q, this.la, this.bd, this.m, this.v, this.bc, c)
    }, $.uf = function(b, c, d, e, h, k, S, U, Y) {
      return new $.xa(b, c, d, e, h, k, S, U, Y)
    });
    return new $.xa(k, h, c, this, this.bd, this.m, this.v, this.bc, null)
  }, $.Pa.prototype.G = f("bd"), $.Pa.prototype.H = function(b, c) {
    return new $.Pa(this.m, this.v, this.bc, c)
  }, $.tf = function(b, c, h, k) {
    return new $.Pa(b, c, h, k)
  });
  return new $.Pa(c, b, Bi, null)
};
$.lf = function(a, b) {
  return ti($.bc(a, b))
};
$.ac = function Ci(b, c) {
  "undefined" === typeof $.Qa && ($.Qa = function(b, c, h, k) {
    this.m = b;
    this.v = c;
    this.ac = h;
    this.cd = k;
    this.u = 0;
    this.h = 393216
  }, $.Qa.ka = !0, $.Qa.ja = "cljs.core.logic.fd/t19070", $.Qa.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t19070")
  }, $.Qa.prototype.wb = function() {
    return $e([Lf, null, Mf, null])
  }, $.Qa.prototype.ub = function() {
    return p(R([this.v, this.m], !0), q([s, 720, t, 22], !0))
  }, $.Qa.prototype.vb = function(b, c) {
    var h = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), k = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m), l = $.ea(h), m = $.ea(k);
    "undefined" === typeof $.ya && ($.ya = function(b, c, d, e, h, k, l, m, Z, ja, xa) {
      this.m = b;
      this.v = c;
      this.ac = d;
      this.cd = e;
      this.q = h;
      this.k = k;
      this.l = l;
      this.jd = m;
      this.uc = Z;
      this.la = ja;
      this.Xe = xa;
      this.u = 0;
      this.h = 393217
    }, $.ya.ka = !0, $.ya.ja = "cljs.core.logic.fd/t19073", $.ya.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t19073")
    }, $.ya.prototype.xb = function() {
      var b = this.k;
      return u(b) && (b = this.l, u(b)) ? (b = this.uc, u(b) ? b : this.jd) : b
    }, $.ya.prototype.lc = !0, $.ya.prototype.Tb = function() {
      var b = this.k;
      return u(b) ? (b = this.l, u(b) ? $.Wa(this.k, this.l) : b) : b
    }, $.ya.prototype.call = function(b, c) {
      b = this;
      var d;
      d = b.uc;
      u(d) && (d = b.jd, d = u(d) ? K.a(b.k, b.l) : d);
      return u(d) ? null : u($.Wa(b.k, b.l)) ? c : u(b.uc) ? (d = $.La(b.l, b.k), u(d) ? $.w(b.m, d, b.l).call(null, c) : null) : w ? (d = $.La(b.k, b.l), u(d) ? $.w(b.v, d, b.k).call(null, c) : null) : null
    }, $.ya.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, $.ya.prototype.b = function(b) {
      var c;
      c = this.uc;
      u(c) && (c = this.jd, c = u(c) ? K.a(this.k, this.l) : c);
      return u(c) ? null : u($.Wa(this.k, this.l)) ? b : u(this.uc) ? (c = $.La(this.l, this.k), u(c) ? $.w(this.m, c, this.l).call(null, b) : null) : w ? (c = $.La(this.k, this.l), u(c) ? $.w(this.v, c, this.k).call(null, b) : null) : null
    }, $.ya.prototype.G = f("Xe"), $.ya.prototype.H = function(b, c) {
      return new $.ya(this.m, this.v, this.ac, this.cd, this.q, this.k, this.l, this.jd, this.uc, this.la, c)
    }, $.wf = function(b, c, d, e, h, k, l, m, Z, ja, xa) {
      return new $.ya(b, c, d, e, h, k, l, m, Z, ja, xa)
    });
    return new $.ya(this.m, this.v, this.ac, this.cd, c, h, k, m, l, this, null)
  }, $.Qa.prototype.G = f("cd"), $.Qa.prototype.H = function(b, c) {
    return new $.Qa(this.m, this.v, this.ac, c)
  }, $.vf = function(b, c, h, k) {
    return new $.Qa(b, c, h, k)
  });
  return new $.Qa(c, b, Ci, null)
};
$.ze = function(a, b) {
  return ti($.ac(a, b))
};
$.cc = function Di(b, c) {
  "undefined" === typeof $.Ra && ($.Ra = function(b, c, h, k) {
    this.m = b;
    this.v = c;
    this.cc = h;
    this.dd = k;
    this.u = 0;
    this.h = 393216
  }, $.Ra.ka = !0, $.Ra.ja = "cljs.core.logic.fd/t19084", $.Ra.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t19084")
  }, $.Ra.prototype.wb = function() {
    return $e([Lf, null, Mf, null])
  }, $.Ra.prototype.ub = function() {
    return p(R([this.v, this.m], !0), q([s, 753, t, 22], !0))
  }, $.Ra.prototype.vb = function(b, c) {
    var h = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), k = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m);
    "undefined" === typeof $.za && ($.za = function(b, c, d, e, h, k, S, U, Y) {
      this.l = b;
      this.k = c;
      this.q = d;
      this.la = e;
      this.dd = h;
      this.m = k;
      this.v = S;
      this.cc = U;
      this.Ye = Y;
      this.u = 0;
      this.h = 393217
    }, $.za.ka = !0, $.za.ja = "cljs.core.logic.fd/t19087", $.za.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t19087")
    }, $.za.prototype.xb = function() {
      var b = this.k;
      return u(b) ? this.l : b
    }, $.za.prototype.lc = !0, $.za.prototype.Tb = function() {
      var b = this.k;
      return u(b) ? (b = this.l, u(b) ? $.Ue(this.k, this.l) : b) : b
    }, $.za.prototype.call = function(b, c) {
      b = this;
      var d = $.t(b.k), e = $.B(b.l);
      return(X.f.D.a ? X.f.D.a($.w(b.v, $.Db(b.k, e + 1), b.k), $.w(b.m, $.Cb(b.l, d), b.l)) : X.f.D.call(null, $.w(b.v, $.Db(b.k, e + 1), b.k), $.w(b.m, $.Cb(b.l, d), b.l))).call(null, c)
    }, $.za.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, $.za.prototype.b = function(b) {
      var c = $.t(this.k), d = $.B(this.l);
      return(X.f.D.a ? X.f.D.a($.w(this.v, $.Db(this.k, d + 1), this.k), $.w(this.m, $.Cb(this.l, c), this.l)) : X.f.D.call(null, $.w(this.v, $.Db(this.k, d + 1), this.k), $.w(this.m, $.Cb(this.l, c), this.l))).call(null, b)
    }, $.za.prototype.G = f("Ye"), $.za.prototype.H = function(b, c) {
      return new $.za(this.l, this.k, this.q, this.la, this.dd, this.m, this.v, this.cc, c)
    }, $.yf = function(b, c, d, e, h, k, S, U, Y) {
      return new $.za(b, c, d, e, h, k, S, U, Y)
    });
    return new $.za(k, h, c, this, this.dd, this.m, this.v, this.cc, null)
  }, $.Ra.prototype.G = f("dd"), $.Ra.prototype.H = function(b, c) {
    return new $.Ra(this.m, this.v, this.cc, c)
  }, $.xf = function(b, c, h, k) {
    return new $.Ra(b, c, h, k)
  });
  return new $.Ra(c, b, Di, null)
};
$.ld = function(a, b) {
  return ti($.cc(a, b))
};
$.Ae = function(a, b) {
  return function(c) {
    return Ig(Ig(c, $.ld(a, b)), $.ze(a, b))
  }
};
$.mf = function(a, b) {
  return $.Ae(b, a)
};
$.nf = function(a, b) {
  return $.ld(b, a)
};
$.dc = function Ei(b, c, d) {
  "undefined" === typeof $.Sa && ($.Sa = function(b, c, d, l, m) {
    this.Y = b;
    this.m = c;
    this.v = d;
    this.dc = l;
    this.ed = m;
    this.u = 0;
    this.h = 393216
  }, $.Sa.ka = !0, $.Sa.ja = "cljs.core.logic.fd/t19104", $.Sa.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t19104")
  }, $.Sa.prototype.wb = function() {
    return $e([Lf, null, Mf, null])
  }, $.Sa.prototype.ub = function() {
    return p(R([this.v, this.m, this.Y], !0), q([s, 840, t, 24], !0))
  }, $.Sa.prototype.vb = function(b, c) {
    var d = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), l = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m), m = X.f.I.a ? X.f.I.a(c, this.Y) : X.f.I.call(null, c, this.Y);
    "undefined" === typeof $.Aa && ($.Aa = function(b, c, d, e, h, k, l, m, Z, ja, xa) {
      this.m = b;
      this.Y = c;
      this.v = d;
      this.q = e;
      this.dc = h;
      this.k = k;
      this.s = l;
      this.l = m;
      this.ed = Z;
      this.la = ja;
      this.Ze = xa;
      this.u = 0;
      this.h = 393217
    }, $.Aa.ka = !0, $.Aa.ja = "cljs.core.logic.fd/t19107", $.Aa.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t19107")
    }, $.Aa.prototype.xb = function() {
      if(u(this.k)) {
        var b = this.l;
        return u(b) ? b : this.s
      }
      return u(this.l) ? (b = this.k, u(b) ? b : this.s) : u(this.s) ? (b = this.k, u(b) ? b : this.l) : w ? !1 : null
    }, $.Aa.prototype.lc = !0, $.Aa.prototype.Tb = function() {
      var b = $.ea(this.k);
      return u(b) && (b = $.ea(this.l), u(b)) ? (b = $.ea(this.s), u(b) ? K.a(tc.a(this.k, this.l), this.s) : b) : b
    }, $.Aa.prototype.call = function(b, c) {
      b = this;
      var d = u(b.s) ? $.ha(b.s) : p(R([tc.a($.t(b.k), $.t(b.l)), tc.a($.B(b.k), $.B(b.l))], !0), q([s, 797, t, 56], !0)), e = N.c(d, 0, null), d = N.c(d, 1, null), h = u(b.k) ? $.ha(b.k) : p(R([uc.a($.t(b.s), $.B(b.l)), uc.a($.B(b.s), $.t(b.l))], !0), q([s, 802, t, 56], !0)), k = N.c(h, 0, null), h = N.c(h, 1, null), l = u(b.l) ? $.ha(b.l) : p(R([uc.a($.t(b.s), $.B(b.k)), uc.a($.B(b.s), $.t(b.k))], !0), q([s, 807, t, 56], !0)), m = N.c(l, 0, null), Z = N.c(l, 1, null), l = $.interval.a(tc.a(k, m), 
      tc.a(h, Z)), m = $.interval.a(uc.a(e, Z), uc.a(d, m)), e = $.interval.a(uc.a(e, h), uc.a(d, k)), d = u(u(l) ? b.s : l) ? $.Z(l, b.s) : l;
      return u(d) && (k = u(u(m) ? b.k : m) ? $.Z(m, b.k) : m, u(k)) ? (e = u(u(e) ? b.l : e) ? $.Z(e, b.l) : e, u(e) ? !hd($.ea, p(R([d, k, e], !0), q([s, 818, t, 76], !0))) || K.a(tc.a(k, e), d) ? (X.f.D.a ? X.f.D.a($.w(b.Y, d, b.s), X.f.D.a ? X.f.D.a($.w(b.v, k, b.k), $.w(b.m, e, b.l)) : X.f.D.call(null, $.w(b.v, k, b.k), $.w(b.m, e, b.l))) : X.f.D.call(null, $.w(b.Y, d, b.s), X.f.D.a ? X.f.D.a($.w(b.v, k, b.k), $.w(b.m, e, b.l)) : X.f.D.call(null, $.w(b.v, k, b.k), $.w(b.m, e, b.l)))).call(null, 
      c) : null : null) : null
    }, $.Aa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, $.Aa.prototype.b = function(b) {
      var c = u(this.s) ? $.ha(this.s) : p(R([tc.a($.t(this.k), $.t(this.l)), tc.a($.B(this.k), $.B(this.l))], !0), q([s, 797, t, 56], !0)), d = N.c(c, 0, null), c = N.c(c, 1, null), e = u(this.k) ? $.ha(this.k) : p(R([uc.a($.t(this.s), $.B(this.l)), uc.a($.B(this.s), $.t(this.l))], !0), q([s, 802, t, 56], !0)), h = N.c(e, 0, null), e = N.c(e, 1, null), k = u(this.l) ? $.ha(this.l) : p(R([uc.a($.t(this.s), $.B(this.k)), uc.a($.B(this.s), $.t(this.k))], !0), q([s, 807, t, 56], !0)), l = N.c(k, 0, 
      null), m = N.c(k, 1, null), k = $.interval.a(tc.a(h, l), tc.a(e, m)), l = $.interval.a(uc.a(d, m), uc.a(c, l)), d = $.interval.a(uc.a(d, e), uc.a(c, h)), c = u(u(k) ? this.s : k) ? $.Z(k, this.s) : k;
      return u(c) && (h = u(u(l) ? this.k : l) ? $.Z(l, this.k) : l, u(h)) ? (d = u(u(d) ? this.l : d) ? $.Z(d, this.l) : d, u(d) ? !hd($.ea, p(R([c, h, d], !0), q([s, 818, t, 76], !0))) || K.a(tc.a(h, d), c) ? (X.f.D.a ? X.f.D.a($.w(this.Y, c, this.s), X.f.D.a ? X.f.D.a($.w(this.v, h, this.k), $.w(this.m, d, this.l)) : X.f.D.call(null, $.w(this.v, h, this.k), $.w(this.m, d, this.l))) : X.f.D.call(null, $.w(this.Y, c, this.s), X.f.D.a ? X.f.D.a($.w(this.v, h, this.k), $.w(this.m, d, this.l)) : X.f.D.call(null, 
      $.w(this.v, h, this.k), $.w(this.m, d, this.l)))).call(null, b) : null : null) : null
    }, $.Aa.prototype.G = f("Ze"), $.Aa.prototype.H = function(b, c) {
      return new $.Aa(this.m, this.Y, this.v, this.q, this.dc, this.k, this.s, this.l, this.ed, this.la, c)
    }, $.Af = function(b, c, d, e, h, k, l, m, Z, ja, xa) {
      return new $.Aa(b, c, d, e, h, k, l, m, Z, ja, xa)
    });
    return new $.Aa(this.m, this.Y, this.v, c, this.dc, d, m, l, this.ed, this, null)
  }, $.Sa.prototype.G = f("ed"), $.Sa.prototype.H = function(b, c) {
    return new $.Sa(this.Y, this.m, this.v, this.dc, c)
  }, $.zf = function(b, c, d, l, m) {
    return new $.Sa(b, c, d, l, m)
  });
  return new $.Sa(d, c, b, Ei, null)
};
$.Rd = function(a, b, c) {
  return ti($.dc(a, b, c))
};
$.kf = function(a, b, c) {
  return $.Rd(b, c, a)
};
$.ec = function Fi(b, c, d) {
  "undefined" === typeof $.Ta && ($.Ta = function(b, c, d, l, m, r) {
    this.F = b;
    this.Y = c;
    this.m = d;
    this.v = l;
    this.ec = m;
    this.fd = r;
    this.u = 0;
    this.h = 393216
  }, $.Ta.ka = !0, $.Ta.ja = "cljs.core.logic.fd/t19134", $.Ta.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t19134")
  }, $.Ta.prototype.wb = function() {
    return $e([Lf, null, Mf, null])
  }, $.Ta.prototype.ub = function() {
    return p(R([this.v, this.m, this.Y], !0), q([s, 924, t, 26], !0))
  }, $.Ta.prototype.vb = function(b, c) {
    var d = X.f.I.a ? X.f.I.a(c, this.v) : X.f.I.call(null, c, this.v), l = X.f.I.a ? X.f.I.a(c, this.m) : X.f.I.call(null, c, this.m), m = X.f.I.a ? X.f.I.a(c, this.Y) : X.f.I.call(null, c, this.Y);
    "undefined" === typeof $.Ba && ($.Ba = function(b, c, d, e, h, k, l, m, Z, ja, xa, Ib) {
      this.m = b;
      this.Y = c;
      this.v = d;
      this.q = e;
      this.k = h;
      this.fd = k;
      this.ec = l;
      this.s = m;
      this.l = Z;
      this.F = ja;
      this.la = xa;
      this.$e = Ib;
      this.u = 0;
      this.h = 393217
    }, $.Ba.ka = !0, $.Ba.ja = "cljs.core.logic.fd/t19137", $.Ba.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t19137")
    }, $.Ba.prototype.xb = function() {
      if(u(this.k)) {
        var b = this.l;
        return u(b) ? b : this.s
      }
      return u(this.l) ? (b = this.k, u(b) ? b : this.s) : u(this.s) ? (b = this.k, u(b) ? b : this.l) : w ? !1 : null
    }, $.Ba.prototype.lc = !0, $.Ba.prototype.Tb = function() {
      var b = $.ea(this.k);
      return u(b) && (b = $.ea(this.l), u(b)) ? (b = $.ea(this.s), u(b) ? K.a(vc.a(this.k, this.l), this.s) : b) : b
    }, $.Ba.prototype.call = function(b, c) {
      b = this;
      var d = u(b.s) ? $.ha(b.s) : p(R([vc.a($.t(b.k), $.t(b.l)), vc.a($.B(b.k), $.B(b.l))], !0), q([s, 877, t, 58], !0)), e = N.c(d, 0, null), d = N.c(d, 1, null), h = u(b.k) ? $.ha(b.k) : p(R([b.F.o ? b.F.o($.B(b.l), $.t(b.s), $.t(b.s), bg) : b.F.call(null, $.B(b.l), $.t(b.s), $.t(b.s), bg), b.F.o ? b.F.o($.t(b.l), $.t(b.s), $.B(b.s), ng) : b.F.call(null, $.t(b.l), $.t(b.s), $.B(b.s), ng)], !0), q([s, 882, t, 76], !0)), k = N.c(h, 0, null), l = N.c(h, 1, null), h = u(b.l) ? $.ha(b.l) : p(R([b.F.o ? 
      b.F.o($.B(b.k), $.t(b.s), $.t(b.s), bg) : b.F.call(null, $.B(b.k), $.t(b.s), $.t(b.s), bg), b.F.o ? b.F.o($.t(b.k), $.t(b.s), $.B(b.s), ng) : b.F.call(null, $.t(b.k), $.t(b.s), $.B(b.s), ng)], !0), q([s, 887, t, 76], !0)), m = N.c(h, 0, null), Z = N.c(h, 1, null), ja = $.interval.a(vc.a(k, m), vc.a(l, Z)), h = $.interval.a(b.F.o ? b.F.o(Z, k, e, bg) : b.F.call(null, Z, k, e, bg), b.F.o ? b.F.o(m, l, d, ng) : b.F.call(null, m, l, d, ng)), e = $.interval.a(b.F.o ? b.F.o(l, m, e, bg) : b.F.call(null, 
      l, m, e, bg), b.F.o ? b.F.o(k, Z, d, ng) : b.F.call(null, k, Z, d, ng)), d = u(u(ja) ? b.s : ja) ? $.Z(ja, b.s) : ja;
      return u(d) && (k = u(u(h) ? b.k : h) ? $.Z(h, b.k) : h, u(k)) ? (e = u(u(e) ? b.l : e) ? $.Z(e, b.l) : e, u(e) ? !hd($.ea, p(R([d, k, e], !0), q([s, 903, t, 63], !0))) || K.a(vc.a(k, e), d) ? (X.f.D.a ? X.f.D.a($.w(b.Y, d, b.s), X.f.D.a ? X.f.D.a($.w(b.v, k, b.k), $.w(b.m, e, b.l)) : X.f.D.call(null, $.w(b.v, k, b.k), $.w(b.m, e, b.l))) : X.f.D.call(null, $.w(b.Y, d, b.s), X.f.D.a ? X.f.D.a($.w(b.v, k, b.k), $.w(b.m, e, b.l)) : X.f.D.call(null, $.w(b.v, k, b.k), $.w(b.m, e, b.l)))).call(null, 
      c) : null : null) : null
    }, $.Ba.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, $.Ba.prototype.b = function(b) {
      var c = u(this.s) ? $.ha(this.s) : p(R([vc.a($.t(this.k), $.t(this.l)), vc.a($.B(this.k), $.B(this.l))], !0), q([s, 877, t, 58], !0)), d = N.c(c, 0, null), c = N.c(c, 1, null), e = u(this.k) ? $.ha(this.k) : p(R([this.F.o ? this.F.o($.B(this.l), $.t(this.s), $.t(this.s), bg) : this.F.call(null, $.B(this.l), $.t(this.s), $.t(this.s), bg), this.F.o ? this.F.o($.t(this.l), $.t(this.s), $.B(this.s), ng) : this.F.call(null, $.t(this.l), $.t(this.s), $.B(this.s), ng)], !0), q([s, 882, t, 76], !0)), 
      h = N.c(e, 0, null), k = N.c(e, 1, null), e = u(this.l) ? $.ha(this.l) : p(R([this.F.o ? this.F.o($.B(this.k), $.t(this.s), $.t(this.s), bg) : this.F.call(null, $.B(this.k), $.t(this.s), $.t(this.s), bg), this.F.o ? this.F.o($.t(this.k), $.t(this.s), $.B(this.s), ng) : this.F.call(null, $.t(this.k), $.t(this.s), $.B(this.s), ng)], !0), q([s, 887, t, 76], !0)), l = N.c(e, 0, null), m = N.c(e, 1, null), Z = $.interval.a(vc.a(h, l), vc.a(k, m)), e = $.interval.a(this.F.o ? this.F.o(m, h, d, bg) : 
      this.F.call(null, m, h, d, bg), this.F.o ? this.F.o(l, k, c, ng) : this.F.call(null, l, k, c, ng)), d = $.interval.a(this.F.o ? this.F.o(k, l, d, bg) : this.F.call(null, k, l, d, bg), this.F.o ? this.F.o(h, m, c, ng) : this.F.call(null, h, m, c, ng)), c = u(u(Z) ? this.s : Z) ? $.Z(Z, this.s) : Z;
      return u(c) && (h = u(u(e) ? this.k : e) ? $.Z(e, this.k) : e, u(h)) ? (d = u(u(d) ? this.l : d) ? $.Z(d, this.l) : d, u(d) ? !hd($.ea, p(R([c, h, d], !0), q([s, 903, t, 63], !0))) || K.a(vc.a(h, d), c) ? (X.f.D.a ? X.f.D.a($.w(this.Y, c, this.s), X.f.D.a ? X.f.D.a($.w(this.v, h, this.k), $.w(this.m, d, this.l)) : X.f.D.call(null, $.w(this.v, h, this.k), $.w(this.m, d, this.l))) : X.f.D.call(null, $.w(this.Y, c, this.s), X.f.D.a ? X.f.D.a($.w(this.v, h, this.k), $.w(this.m, d, this.l)) : X.f.D.call(null, 
      $.w(this.v, h, this.k), $.w(this.m, d, this.l)))).call(null, b) : null : null) : null
    }, $.Ba.prototype.G = f("$e"), $.Ba.prototype.H = function(b, c) {
      return new $.Ba(this.m, this.Y, this.v, this.q, this.k, this.fd, this.ec, this.s, this.l, this.F, this.la, c)
    }, $.Cf = function(b, c, d, e, h, k, l, m, Z, ja, xa, Ib) {
      return new $.Ba(b, c, d, e, h, k, l, m, Z, ja, xa, Ib)
    });
    return new $.Ba(this.m, this.Y, this.v, c, d, this.fd, this.ec, m, l, this.F, this, null)
  }, $.Ta.prototype.G = f("fd"), $.Ta.prototype.H = function(b, c) {
    return new $.Ta(this.F, this.Y, this.m, this.v, this.ec, c)
  }, $.Bf = function(b, c, d, l, m, r) {
    return new $.Ta(b, c, d, l, m, r)
  });
  return new $.Ta(function(b, c, d, l) {
    if(0 === b) {
      return c
    }
    c = Cc(d, b);
    if(K.a(ng, l)) {
      return c
    }
    if(K.a(bg, l)) {
      return l = Cc(d, b), 0 < d - b * l ? c + 1 : c
    }
    if(w) {
      throw Error([A("No matching clause: "), A(l)].join(""));
    }
    return null
  }, d, c, b, Fi, null)
};
$.Be = function(a, b, c) {
  return ti($.ec(a, b, c))
};
$.dg = function(a, b, c) {
  return $.Be(b, c, a)
};
$.fc = function Gi(b, c, d) {
  "undefined" === typeof $.Ua && ($.Ua = function(b, c, d, l, m) {
    this.pb = b;
    this.wc = c;
    this.x = d;
    this.fc = l;
    this.gd = m;
    this.u = 0;
    this.h = 393216
  }, $.Ua.ka = !0, $.Ua.ja = "cljs.core.logic.fd/t19154", $.Ua.na = function(b, c) {
    return D(c, "cljs.core.logic.fd/t19154")
  }, $.Ua.prototype.wb = function() {
    return $e([Mf, null])
  }, $.Ua.prototype.ub = function() {
    return p(R([this.x], !0), q([s, 976, t, 20], !0))
  }, $.Ua.prototype.vb = function(b, c) {
    var d = Dg(c, this.x);
    "undefined" === typeof $.Ja && ($.Ja = function(b, c, d, e, h, k, S, U) {
      this.q = b;
      this.la = c;
      this.gd = d;
      this.pb = e;
      this.wc = h;
      this.x = k;
      this.fc = S;
      this.af = U;
      this.u = 0;
      this.h = 393217
    }, $.Ja.ka = !0, $.Ja.ja = "cljs.core.logic.fd/t19157", $.Ja.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t19157")
    }, $.Ja.prototype.xb = function() {
      return $.ea(this.x)
    }, $.Ja.prototype.call = function(b, c) {
      b = this;
      if(u(b.pb.b ? b.pb.b(b.x) : b.pb.call(null, b.x))) {
        return null
      }
      for(var d = E(b.wc), e = c;;) {
        if(d) {
          var h = F(d), k;
          k = $.Ld(e, h);
          k = u(k) ? k : Dg(e, h);
          e = W(k) ? e : K.a(b.x, k) ? null : u($.ra(k, b.x)) ? $.w(h, $.La(k, b.x), k).call(null, e) : w ? e : null;
          if(u(e)) {
            d = I(d)
          }else {
            return null
          }
        }else {
          return ji(b.la).call(null, e)
        }
      }
    }, $.Ja.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, $.Ja.prototype.b = function(b) {
      if(u(this.pb.b ? this.pb.b(this.x) : this.pb.call(null, this.x))) {
        return null
      }
      for(var c = E(this.wc);;) {
        if(c) {
          var d = F(c), e;
          e = $.Ld(b, d);
          e = u(e) ? e : Dg(b, d);
          b = W(e) ? b : K.a(this.x, e) ? null : u($.ra(e, this.x)) ? $.w(d, $.La(e, this.x), e).call(null, b) : w ? b : null;
          if(u(b)) {
            c = I(c)
          }else {
            return null
          }
        }else {
          return ji(this.la).call(null, b)
        }
      }
    }, $.Ja.prototype.G = f("af"), $.Ja.prototype.H = function(b, c) {
      return new $.Ja(this.q, this.la, this.gd, this.pb, this.wc, this.x, this.fc, c)
    }, $.Ef = function(b, c, d, e, h, k, S, U) {
      return new $.Ja(b, c, d, e, h, k, S, U)
    });
    return new $.Ja(c, this, this.gd, this.pb, this.wc, d, this.fc, null)
  }, $.Ua.prototype.G = f("gd"), $.Ua.prototype.H = function(b, c) {
    return new $.Ua(this.pb, this.wc, this.x, this.fc, c)
  }, $.Df = function(b, c, d, l, m) {
    return new $.Ua(b, c, d, l, m)
  });
  return new $.Ua(d, c, b, Gi, null)
};
$.Sd = function(a, b, c) {
  return ti($.fc(a, b, c))
};
$.ue = function(a) {
  if($b(a)) {
    return!0
  }
  var b = F(a);
  for(a = I(a);;) {
    if(a) {
      var c = F(a);
      if(u(wc.a ? wc.a(b, c) : wc.call(null, b, c))) {
        b = c, a = I(a)
      }else {
        return!1
      }
    }else {
      return!0
    }
  }
};
$.nc = function Hi(b) {
  "undefined" === typeof $.Va && ($.Va = function(b, d, e) {
    this.Pb = b;
    this.nc = d;
    this.hd = e;
    this.u = 0;
    this.h = 393216
  }, $.Va.ka = !0, $.Va.ja = "cljs.core.logic.fd/t19176", $.Va.na = function(b, d) {
    return D(d, "cljs.core.logic.fd/t19176")
  }, $.Va.prototype.wb = function() {
    return $e([Mf, null])
  }, $.Va.prototype.ub = function() {
    return p(R([this.Pb], !0), q([s, 1025, t, 21], !0))
  }, $.Va.prototype.vb = function(b, d) {
    var e = Dg(d, this.Pb);
    "undefined" === typeof $.Ka && ($.Ka = function(b, c, d, e, r, x) {
      this.q = b;
      this.la = c;
      this.hd = d;
      this.Pb = e;
      this.nc = r;
      this.bf = x;
      this.u = 0;
      this.h = 393217
    }, $.Ka.ka = !0, $.Ka.ja = "cljs.core.logic.fd/t19179", $.Ka.na = function(b, c) {
      return D(c, "cljs.core.logic.fd/t19179")
    }, $.Ka.prototype.xb = function() {
      return!W(this.Pb)
    }, $.Ka.prototype.call = function(b, c) {
      b = this;
      var d = Cf(b.Pb), e = ic(d) ? Q.a(Ue, d) : d, d = Rb.a(e, !0), e = Rb.a(e, !1), e = rc.a(wc, e);
      if(u($.ue(e))) {
        for(var d = ud(Ze, d), e = ud(cf(), e), r = E(d), x = c;;) {
          if(r) {
            var y = F(r), x = $.Sd(y, Xb.a(d, y), e).call(null, x);
            if(u(x)) {
              r = I(r)
            }else {
              return null
            }
          }else {
            return ji(b.la).call(null, x)
          }
        }
      }else {
        return null
      }
    }, $.Ka.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, $.Ka.prototype.b = function(b) {
      var c = Cf(this.Pb), d = ic(c) ? Q.a(Ue, c) : c, c = Rb.a(d, !0), d = Rb.a(d, !1), d = rc.a(wc, d);
      if(u($.ue(d))) {
        for(var c = ud(Ze, c), d = ud(cf(), d), e = E(c);;) {
          if(e) {
            var r = F(e);
            b = $.Sd(r, Xb.a(c, r), d).call(null, b);
            if(u(b)) {
              e = I(e)
            }else {
              return null
            }
          }else {
            return ji(this.la).call(null, b)
          }
        }
      }else {
        return null
      }
    }, $.Ka.prototype.G = f("bf"), $.Ka.prototype.H = function(b, c) {
      return new $.Ka(this.q, this.la, this.hd, this.Pb, this.nc, c)
    }, $.Gf = function(b, c, d, e, r, x) {
      return new $.Ka(b, c, d, e, r, x)
    });
    return new $.Ka(d, this, this.hd, e, this.nc, null)
  }, $.Va.prototype.G = f("hd"), $.Va.prototype.H = function(b, d) {
    return new $.Va(this.Pb, this.nc, d)
  }, $.Ff = function(b, d, e) {
    return new $.Va(b, d, e)
  });
  return new $.Va(b, Hi, null)
};
$.ag = function(a) {
  return ti($.nc(a))
};
$.Hf = function Ii(b, c) {
  return function(d) {
    return function() {
      return Jg(Ig(d, function(d) {
        return function() {
          return Ig(Ig(d, ei(H, b)), $.ld(0, c))
        }
      }), function() {
        return Ig(d, function(d) {
          return function() {
            var h = X.f.Lb.b ? X.f.Lb.b(new zb(null, "t", "t", -1640531411, null)) : X.f.Lb.call(null, new zb(null, "t", "t", -1640531411, null)), k = X.f.Lb.b ? X.f.Lb.b(new zb(null, "h", "h", -1640531423, null)) : X.f.Lb.call(null, new zb(null, "h", "h", -1640531423, null));
            return Ig(Ig(d, ei(Xh(k, h), b)), function(b) {
              return function() {
                return Ig(Ig(b, ei(c, c)), function(b) {
                  return function() {
                    var d = X.f.Lb.b ? X.f.Lb.b(new zb(null, "m", "m", -1640531418, null)) : X.f.Lb.call(null, new zb(null, "m", "m", -1640531418, null));
                    return Ig(Ig(Ig(b, function() {
                      var b = $.interval.a(0, Number.MAX_VALUE);
                      return function(c) {
                        return function() {
                          return Ig(c, X.f.Id.a ? X.f.Id.a(d, b) : X.f.Id.call(null, d, b))
                        }
                      }
                    }()), $.Rd(d, 1, c)), Ii(h, d))
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
$.Mc = p(Sb([new zb(null, "+", "+", -1640531484, null), new zb(null, "*", "*", -1640531485, null), new zb(null, "-", "-", -1640531482, null), new zb(null, "/", "/", -1640531480, null), new zb(null, "\x3c", "\x3c", -1640531467, null), new zb(null, "!\x3d", "!\x3d", -1640530443, null), new zb(null, "\x3d", "\x3d", -1640531466, null), new zb(null, "\x3e", "\x3e", -1640531465, null), new zb(null, "\x3e\x3d", "\x3e\x3d", -1640529544, null), new zb(null, "\x3c\x3d", "\x3c\x3d", -1640529606, null)], [new zb("cljs.core.logic.fd", 
"+", "cljs.core.logic.fd/+", 1528484149, null), new zb("cljs.core.logic.fd", "*", "cljs.core.logic.fd/*", 1528484146, null), new zb("cljs.core.logic.fd", "-", "cljs.core.logic.fd/-", 1528484151, null), new zb("cljs.core.logic.fd", "quot", "cljs.core.logic.fd/quot", 1533391379, null), new zb("cljs.core.logic.fd", "\x3c", "cljs.core.logic.fd/\x3c", 1528484292, null), new zb("cljs.core.logic.fd", "!\x3d", "cljs.core.logic.fd/!\x3d", 1528485316, null), new zb("cljs.core.logic.fd", "\x3d\x3d", "cljs.core.logic.fd/\x3d\x3d", 
1528485544, null), new zb("cljs.core.logic.fd", "\x3e", "cljs.core.logic.fd/\x3e", 1528484294, null), new zb("cljs.core.logic.fd", "\x3e\x3d", "cljs.core.logic.fd/\x3e\x3d", 1528482121, null), new zb("cljs.core.logic.fd", "\x3c\x3d", "cljs.core.logic.fd/\x3c\x3d", 1528485515, null)]), q([s, 1061, t, 28], !0));
$.md = function(a) {
  a = E(a);
  if(null == a) {
    return Ze
  }
  if(a instanceof Db) {
    a = a.e;
    a: {
      for(var b = 0, c = ob(Ze);;) {
        if(b < a.length) {
          var d = b + 1, c = c.Rb(null, a[b]), b = d
        }else {
          a = c;
          break a
        }
      }
      a = void 0
    }
    return a.Sb(null)
  }
  if(w) {
    for(d = ob(Ze);;) {
      if(null != a) {
        b = a.Ca(null), d = d.Rb(null, a.aa(null)), a = b
      }else {
        return d.Sb(null)
      }
    }
  }else {
    return null
  }
}(We($.Mc));
$.expand = function Ji(b) {
  if(ic(b)) {
    var c = N.c(b, 0, null);
    b = Ec(b);
    var d;
    d = $.md.b ? $.md.b(c) : $.md.call(null, c);
    d = u(d) ? yc.a(M(b), 2) : d;
    return u(d) ? B(B(B(H, Ji(L(c, G(b)))), Ji(F(b))), c) : L(c, nd.a(Ji, b))
  }
  return b
};
$.Se = function() {
  function a(a, b, h) {
    if(ic(a)) {
      var k = N.c(a, 0, null), l = N.c(a, 1, null);
      a = N.c(a, 2, null);
      var m = ic(l) ? function() {
        var a = Bf.A();
        zf.c(b, Pb, a);
        return p(R([a, !0], !0), q([s, 1082, t, 40], !0))
      }() : p(R([l, !1], !0), q([s, 1083, t, 40], !0)), r = N.c(m, 0, null), m = N.c(m, 1, null), x = ic(a) ? function() {
        var a = Bf.A();
        zf.c(b, Pb, a);
        return p(R([a, !0], !0), q([s, 1087, t, 40], !0))
      }() : p(R([a, !1], !0), q([s, 1088, t, 40], !0)), y = N.c(x, 0, null), x = N.c(x, 1, null), k = $.Mc.b ? $.Mc.b(k) : $.Mc.call(null, k);
      return L(u(h) ? B(B(B(B(H, h), y), r), k) : B(B(B(H, y), r), k), $c.a(ic(l) ? c.c(l, b, u(m) ? r : null) : null, ic(a) ? c.c(a, b, u(x) ? y : null) : null))
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
$.Ce = function(a, b) {
  return p(E($c.d(B(H, p(new zb("cljs.core.logic.fd", "fresh", "cljs.core.logic.fd/fresh", 1623660598, null), Q.a(Ue, E($c.d(B(H, mg), B(H, 1100), J([B(H, ag), B(H, 5), B(H, s), B(H, 1100), B(H, t), B(H, 10)], 0)))))), B(H, p(Q.a(Qd, E($c.b(a))), Q.a(Ue, E($c.d(B(H, mg), B(H, 1100), J([B(H, ag), B(H, 11), B(H, s), B(H, 1100), B(H, t), B(H, 19)], 0)))))), J([Mc(b)], 0))), Q.a(Ue, E($c.d(B(H, mg), B(H, 1100), J([B(H, ag), B(H, 4), B(H, s), B(H, 1101), B(H, t), B(H, 24)], 0)))))
};
$.bg = function(a) {
  var b = xf.b(p(Nd, q([s, 1104, t, 22], !0)));
  a = $.Se.a($.expand(a), b);
  return $.Ce(Wa(b), a)
};
p(ie, q([s, 15, t, 16], !0));
function Ki(a, b, c) {
  if(a ? a.Gd : a) {
    return a.Gd(a, b, c)
  }
  var d;
  d = Ki[n(null == a ? null : a)];
  if(!d && (d = Ki._, !d)) {
    throw z("INomSwap.swap-noms", a);
  }
  return d.call(null, a, b, c)
}
Id.prototype.Gd = function(a, b, c) {
  b = Ki(E(this), b, c);
  a = N.c(b, 0, null);
  b = N.c(b, 1, null);
  return p(R([Pd(a), b], !0), q([s, 88, t, 19], !0))
};
Vh.prototype.Gd = function(a, b, c) {
  c = Ki(zg(this), b, c);
  a = N.c(c, 0, null);
  c = N.c(c, 1, null);
  c = Ki(Ag(this), b, c);
  b = N.c(c, 0, null);
  c = N.c(c, 1, null);
  return p(R([p(Xh(a, b), Wb(this)), c], !0), q([s, 83, t, 10], !0))
};
Ki._ = function(a, b, c) {
  if(ac(a)) {
    if(E(a)) {
      var d = Ki(F(a), b, c);
      c = N.c(d, 0, null);
      d = N.c(d, 1, null);
      d = Ki(I(a), b, d);
      b = N.c(d, 0, null);
      d = N.c(d, 1, null);
      return p(R([p(L(c, b), Wb(a)), d], !0), q([s, 59, t, 59], !0))
    }
    return p(R([a, c], !0), q([s, 60, t, 18], !0))
  }
  return dc(a) ? (c = Ki(E(a), b, c), a = N.c(c, 0, null), d = N.c(c, 1, null), p(R([ud(p(ie, q([s, 63, t, 21], !0)), a), d], !0), q([s, 63, t, 31], !0))) : w ? p(R([a, c], !0), q([s, 64, t, 22], !0)) : null
};
Ki["null"] = function(a, b, c) {
  return p(R([a, c], !0), q([s, 51, t, 30], !0))
};

})();
