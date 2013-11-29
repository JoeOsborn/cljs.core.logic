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
var n;
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
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function da(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;var ea = Array.prototype;
function fa(a, b) {
  ea.sort.call(a, b || ga)
}
function ha(a, b) {
  for(var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]}
  }
  var d = b || ga;
  fa(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index
  });
  for(c = 0;c < a.length;c++) {
    a[c] = a[c].value
  }
}
function ga(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ia(a, b) {
  null != a && this.append.apply(this, arguments)
}
ia.prototype.Za = "";
ia.prototype.append = function(a, b, c) {
  this.Za += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.Za += arguments[d]
    }
  }
  return this
};
ia.prototype.toString = f("Za");
var ja;
function ka() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var la = !0;
function ma() {
  return new na(null, 5, [oa, !0, pa, !0, qa, !1, ra, !1, sa, null], null)
}
function ua() {
  la = !1;
  ka = function() {
    function a(a) {
      var d = null;
      0 < arguments.length && (d = q(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, d)
    }
    function b(a) {
      return console.log.apply(console, va.b ? va.b(a) : va.call(null, a))
    }
    a.m = 0;
    a.g = function(a) {
      a = r(a);
      return b(a)
    };
    a.e = b;
    return a
  }()
}
function t(a) {
  return null != a && !1 !== a
}
function wa(a) {
  return null == a
}
function w(a) {
  return t(a) ? !1 : !0
}
function x(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : y ? !1 : null
}
function xa(a) {
  return null == a ? null : a.constructor
}
function z(a, b) {
  var c = xa(b), c = t(t(c) ? c.Fa : c) ? c.Ea : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function ya(a) {
  var b = a.Ea;
  return t(b) ? b : "" + A(a)
}
function za(a) {
  for(var b = a.length, c = Array(b), d = 0;;) {
    if(d < b) {
      c[d] = a[d], d += 1
    }else {
      break
    }
  }
  return c
}
var va = function() {
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
    return c.a(null, a)
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
  c.b = b;
  c.a = a;
  return c
}(), Aa = {}, Ba = {};
function Da(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  b = Da[p(null == a ? null : a)];
  if(!b && (b = Da._, !b)) {
    throw z("ICounted.-count", a);
  }
  return b.call(null, a)
}
function Ea(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  b = Ea[p(null == a ? null : a)];
  if(!b && (b = Ea._, !b)) {
    throw z("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var Fa = {};
function C(a, b) {
  if(a ? a.K : a) {
    return a.K(a, b)
  }
  var c;
  c = C[p(null == a ? null : a)];
  if(!c && (c = C._, !c)) {
    throw z("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var Ga = {}, D = function() {
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
    if(a ? a.ia : a) {
      return a.ia(a, b)
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
  c.a = b;
  c.c = a;
  return c
}(), Ha = {};
function Ia(a) {
  if(a ? a.S : a) {
    return a.S(a)
  }
  var b;
  b = Ia[p(null == a ? null : a)];
  if(!b && (b = Ia._, !b)) {
    throw z("ISeq.-first", a);
  }
  return b.call(null, a)
}
function Ja(a) {
  if(a ? a.Z : a) {
    return a.Z(a)
  }
  var b;
  b = Ja[p(null == a ? null : a)];
  if(!b && (b = Ja._, !b)) {
    throw z("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var Ka = {}, La = {}, Ma = function() {
  function a(a, b, c) {
    if(a ? a.Q : a) {
      return a.Q(a, b, c)
    }
    var h;
    h = Ma[p(null == a ? null : a)];
    if(!h && (h = Ma._, !h)) {
      throw z("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.P : a) {
      return a.P(a, b)
    }
    var c;
    c = Ma[p(null == a ? null : a)];
    if(!c && (c = Ma._, !c)) {
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
  c.a = b;
  c.c = a;
  return c
}(), Na = {};
function Oa(a, b) {
  if(a ? a.Ob : a) {
    return a.Ob(a, b)
  }
  var c;
  c = Oa[p(null == a ? null : a)];
  if(!c && (c = Oa._, !c)) {
    throw z("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b)
}
function Pa(a, b, c) {
  if(a ? a.La : a) {
    return a.La(a, b, c)
  }
  var d;
  d = Pa[p(null == a ? null : a)];
  if(!d && (d = Pa._, !d)) {
    throw z("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var Qa = {};
function Ra(a, b) {
  if(a ? a.ab : a) {
    return a.ab(a, b)
  }
  var c;
  c = Ra[p(null == a ? null : a)];
  if(!c && (c = Ra._, !c)) {
    throw z("IMap.-dissoc", a);
  }
  return c.call(null, a, b)
}
var Sa = {};
function Ta(a) {
  if(a ? a.ec : a) {
    return a.ec()
  }
  var b;
  b = Ta[p(null == a ? null : a)];
  if(!b && (b = Ta._, !b)) {
    throw z("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function Ua(a) {
  if(a ? a.fc : a) {
    return a.fc()
  }
  var b;
  b = Ua[p(null == a ? null : a)];
  if(!b && (b = Ua._, !b)) {
    throw z("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var Va = {};
function Wa(a, b) {
  if(a ? a.uc : a) {
    return a.uc(0, b)
  }
  var c;
  c = Wa[p(null == a ? null : a)];
  if(!c && (c = Wa._, !c)) {
    throw z("ISet.-disjoin", a);
  }
  return c.call(null, a, b)
}
var Xa = {};
function Ya(a, b, c) {
  if(a ? a.hc : a) {
    return a.hc(a, b, c)
  }
  var d;
  d = Ya[p(null == a ? null : a)];
  if(!d && (d = Ya._, !d)) {
    throw z("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function Za(a) {
  if(a ? a.Uc : a) {
    return a.state
  }
  var b;
  b = Za[p(null == a ? null : a)];
  if(!b && (b = Za._, !b)) {
    throw z("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var $a = {};
function bb(a) {
  if(a ? a.s : a) {
    return a.s(a)
  }
  var b;
  b = bb[p(null == a ? null : a)];
  if(!b && (b = bb._, !b)) {
    throw z("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var cb = {};
function db(a, b) {
  if(a ? a.t : a) {
    return a.t(a, b)
  }
  var c;
  c = db[p(null == a ? null : a)];
  if(!c && (c = db._, !c)) {
    throw z("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var eb = {}, fb = function() {
  function a(a, b, c) {
    if(a ? a.Y : a) {
      return a.Y(a, b, c)
    }
    var h;
    h = fb[p(null == a ? null : a)];
    if(!h && (h = fb._, !h)) {
      throw z("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.X : a) {
      return a.X(a, b)
    }
    var c;
    c = fb[p(null == a ? null : a)];
    if(!c && (c = fb._, !c)) {
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
  c.a = b;
  c.c = a;
  return c
}();
function gb(a, b) {
  if(a ? a.v : a) {
    return a.v(a, b)
  }
  var c;
  c = gb[p(null == a ? null : a)];
  if(!c && (c = gb._, !c)) {
    throw z("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function hb(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  b = hb[p(null == a ? null : a)];
  if(!b && (b = hb._, !b)) {
    throw z("IHash.-hash", a);
  }
  return b.call(null, a)
}
var ib = {};
function jb(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  b = jb[p(null == a ? null : a)];
  if(!b && (b = jb._, !b)) {
    throw z("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var kb = {}, lb = {};
function mb(a) {
  if(a ? a.gc : a) {
    return a.gc(a)
  }
  var b;
  b = mb[p(null == a ? null : a)];
  if(!b && (b = mb._, !b)) {
    throw z("IReversible.-rseq", a);
  }
  return b.call(null, a)
}
function E(a, b) {
  if(a ? a.wc : a) {
    return a.wc(0, b)
  }
  var c;
  c = E[p(null == a ? null : a)];
  if(!c && (c = E._, !c)) {
    throw z("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
var nb = {};
function ob(a, b, c) {
  if(a ? a.B : a) {
    return a.B(a, b, c)
  }
  var d;
  d = ob[p(null == a ? null : a)];
  if(!d && (d = ob._, !d)) {
    throw z("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function pb(a) {
  if(a ? a.ib : a) {
    return a.ib(a)
  }
  var b;
  b = pb[p(null == a ? null : a)];
  if(!b && (b = pb._, !b)) {
    throw z("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function qb(a, b) {
  if(a ? a.Ma : a) {
    return a.Ma(a, b)
  }
  var c;
  c = qb[p(null == a ? null : a)];
  if(!c && (c = qb._, !c)) {
    throw z("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function rb(a) {
  if(a ? a.Ta : a) {
    return a.Ta(a)
  }
  var b;
  b = rb[p(null == a ? null : a)];
  if(!b && (b = rb._, !b)) {
    throw z("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function sb(a, b, c) {
  if(a ? a.bb : a) {
    return a.bb(a, b, c)
  }
  var d;
  d = sb[p(null == a ? null : a)];
  if(!d && (d = sb._, !d)) {
    throw z("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function tb(a, b, c) {
  if(a ? a.vc : a) {
    return a.vc(0, b, c)
  }
  var d;
  d = tb[p(null == a ? null : a)];
  if(!d && (d = tb._, !d)) {
    throw z("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function ub(a) {
  if(a ? a.sc : a) {
    return a.sc()
  }
  var b;
  b = ub[p(null == a ? null : a)];
  if(!b && (b = ub._, !b)) {
    throw z("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function vb(a) {
  if(a ? a.Qb : a) {
    return a.Qb(a)
  }
  var b;
  b = vb[p(null == a ? null : a)];
  if(!b && (b = vb._, !b)) {
    throw z("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function wb(a) {
  if(a ? a.Rb : a) {
    return a.Rb(a)
  }
  var b;
  b = wb[p(null == a ? null : a)];
  if(!b && (b = wb._, !b)) {
    throw z("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function yb(a) {
  if(a ? a.Pb : a) {
    return a.Pb(a)
  }
  var b;
  b = yb[p(null == a ? null : a)];
  if(!b && (b = yb._, !b)) {
    throw z("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function zb(a) {
  this.ld = a;
  this.o = 0;
  this.f = 1073741824
}
zb.prototype.wc = function(a, b) {
  return this.ld.append(b)
};
function Ab(a) {
  var b = new ia;
  a.B(null, new zb(b), ma());
  return"" + A(b)
}
function Bb(a, b) {
  if(t(G.a ? G.a(a, b) : G.call(null, a, b))) {
    return 0
  }
  var c = w(a.ga);
  if(t(c ? b.ga : c)) {
    return-1
  }
  if(t(a.ga)) {
    if(w(b.ga)) {
      return 1
    }
    c = Cb.a ? Cb.a(a.ga, b.ga) : Cb.call(null, a.ga, b.ga);
    return 0 === c ? Cb.a ? Cb.a(a.name, b.name) : Cb.call(null, a.name, b.name) : c
  }
  return Db ? Cb.a ? Cb.a(a.name, b.name) : Cb.call(null, a.name, b.name) : null
}
function H(a, b, c, d, e) {
  this.ga = a;
  this.name = b;
  this.Ya = c;
  this.ma = d;
  this.q = e;
  this.f = 2154168321;
  this.o = 4096
}
n = H.prototype;
n.B = function(a, b) {
  return E(b, this.Ya)
};
n.C = function() {
  var a = this.ma;
  return null != a ? a : this.ma = a = Eb.a ? Eb.a(I.b ? I.b(this.ga) : I.call(null, this.ga), I.b ? I.b(this.name) : I.call(null, this.name)) : Eb.call(null, I.b ? I.b(this.ga) : I.call(null, this.ga), I.b ? I.b(this.name) : I.call(null, this.name))
};
n.t = function(a, b) {
  return new H(this.ga, this.name, this.Ya, this.ma, b)
};
n.s = f("q");
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ma.c(c, this, null);
      case 3:
        return Ma.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.b = function(a) {
  return Ma.c(a, this, null)
};
n.a = function(a, b) {
  return Ma.c(a, this, b)
};
n.v = function(a, b) {
  return b instanceof H ? this.Ya === b.Ya : !1
};
n.toString = f("Ya");
var Fb = function() {
  function a(a, b) {
    var c = null != a ? [A(a), A("/"), A(b)].join("") : b;
    return new H(a, b, c, null, null)
  }
  function b(a) {
    return a instanceof H ? a : c.a(null, a)
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
function r(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 8388608 || a.wd)) {
    return a.J(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Gb(a, 0)
  }
  if(x(ib, a)) {
    return jb(a)
  }
  if(y) {
    throw Error([A(a), A("is not ISeqable")].join(""));
  }
  return null
}
function J(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 64 || a.jb)) {
    return a.S(null)
  }
  a = r(a);
  return null == a ? null : Ia(a)
}
function K(a) {
  return null != a ? a && (a.f & 64 || a.jb) ? a.Z(null) : (a = r(a)) ? Ja(a) : L : L
}
function M(a) {
  return null == a ? null : a && (a.f & 128 || a.wb) ? a.ca(null) : r(K(a))
}
var G = function() {
  function a(a, b) {
    return a === b || gb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.a(a, d)) {
          if(M(e)) {
            a = d, d = J(e), e = M(e)
          }else {
            return b.a(d, J(e))
          }
        }else {
          return!1
        }
      }
    }
    a.m = 2;
    a.g = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
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
        return c.e(b, e, q(arguments, 2))
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
hb["null"] = m(0);
Ka["null"] = !0;
Va["null"] = !0;
Wa["null"] = m(null);
Ba["null"] = !0;
Da["null"] = m(0);
gb["null"] = function(a, b) {
  return null == b
};
cb["null"] = !0;
db["null"] = m(null);
$a["null"] = !0;
bb["null"] = m(null);
Ea["null"] = m(null);
Qa["null"] = !0;
Ra["null"] = m(null);
Date.prototype.v = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
gb.number = function(a, b) {
  return a === b
};
$a["function"] = !0;
bb["function"] = m(null);
Aa["function"] = !0;
hb._ = function(a) {
  return a[ba] || (a[ba] = ++ca)
};
var Hb = function() {
  function a(a, b, c, d) {
    for(var l = Da(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, D.a(a, d)) : b.call(null, c, D.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = Da(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, D.a(a, l)) : b.call(null, c, D.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = Da(a);
    if(0 === c) {
      return b.j ? b.j() : b.call(null)
    }
    for(var d = D.a(a, 0), l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, D.a(a, l)) : b.call(null, d, D.a(a, l)), l += 1
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
}(), Ib = function() {
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
      return b.j ? b.j() : b.call(null)
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
function Jb(a) {
  return a ? a.f & 2 || a.Tc ? !0 : a.f ? !1 : x(Ba, a) : x(Ba, a)
}
function Kb(a) {
  return a ? a.f & 16 || a.tc ? !0 : a.f ? !1 : x(Ga, a) : x(Ga, a)
}
function Gb(a, b) {
  this.d = a;
  this.n = b;
  this.o = 0;
  this.f = 166199550
}
n = Gb.prototype;
n.C = function() {
  return Lb.b ? Lb.b(this) : Lb.call(null, this)
};
n.ca = function() {
  return this.n + 1 < this.d.length ? new Gb(this.d, this.n + 1) : null
};
n.K = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this)
};
n.gc = function() {
  var a = Da(this);
  return 0 < a ? new Mb(this, a - 1, null) : null
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Ib.p(this.d, b, this.d[this.n], this.n + 1)
};
n.Y = function(a, b, c) {
  return Ib.p(this.d, b, c, this.n)
};
n.J = function() {
  return this
};
n.L = function() {
  return this.d.length - this.n
};
n.S = function() {
  return this.d[this.n]
};
n.Z = function() {
  return this.n + 1 < this.d.length ? new Gb(this.d, this.n + 1) : L
};
n.v = function(a, b) {
  return Nb.a ? Nb.a(this, b) : Nb.call(null, this, b)
};
n.ia = function(a, b) {
  var c = b + this.n;
  return c < this.d.length ? this.d[c] : null
};
n.na = function(a, b, c) {
  a = b + this.n;
  return a < this.d.length ? this.d[a] : c
};
n.O = function() {
  return L
};
var Ob = function() {
  function a(a, b) {
    return b < a.length ? new Gb(a, b) : null
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
}(), q = function() {
  function a(a, b) {
    return Ob.a(a, b)
  }
  function b(a) {
    return Ob.a(a, 0)
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
function Mb(a, b, c) {
  this.Nb = a;
  this.n = b;
  this.i = c;
  this.o = 0;
  this.f = 32374862
}
n = Mb.prototype;
n.C = function() {
  return Lb.b ? Lb.b(this) : Lb.call(null, this)
};
n.K = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Pb.a ? Pb.a(b, this) : Pb.call(null, b, this)
};
n.Y = function(a, b, c) {
  return Pb.c ? Pb.c(b, c, this) : Pb.call(null, b, c, this)
};
n.J = function() {
  return this
};
n.L = function() {
  return this.n + 1
};
n.S = function() {
  return D.a(this.Nb, this.n)
};
n.Z = function() {
  return 0 < this.n ? new Mb(this.Nb, this.n - 1, null) : null
};
n.v = function(a, b) {
  return Nb.a ? Nb.a(this, b) : Nb.call(null, this, b)
};
n.t = function(a, b) {
  return new Mb(this.Nb, this.n, b)
};
n.s = f("i");
n.O = function() {
  return O.a ? O.a(L, this.i) : O.call(null, L, this.i)
};
gb._ = function(a, b) {
  return a === b
};
var Qb = function() {
  function a(a, b) {
    return null != a ? C(a, b) : C(L, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(t(e)) {
          a = b.a(a, d), d = J(e), e = M(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.m = 2;
    a.g = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}();
function P(a) {
  if(null != a) {
    if(a && (a.f & 2 || a.Tc)) {
      a = a.L(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(x(Ba, a)) {
            a = Da(a)
          }else {
            if(y) {
              a: {
                a = r(a);
                for(var b = 0;;) {
                  if(Jb(a)) {
                    a = b + Da(a);
                    break a
                  }
                  a = M(a);
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
var Rb = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return r(a) ? J(a) : c
      }
      if(Kb(a)) {
        return D.c(a, b, c)
      }
      if(r(a)) {
        a = M(a), b -= 1
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
        if(r(a)) {
          return J(a)
        }
        throw Error("Index out of bounds");
      }
      if(Kb(a)) {
        return D.a(a, b)
      }
      if(r(a)) {
        var c = M(a), h = b - 1;
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
  c.a = b;
  c.c = a;
  return c
}(), T = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.f & 16 || a.tc)) {
        return a.na(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(x(Ga, a)) {
        return D.a(a, b)
      }
      if(y) {
        if(a ? a.f & 64 || a.jb || (a.f ? 0 : x(Ha, a)) : x(Ha, a)) {
          return Rb.c(a, b, c)
        }
        throw Error([A("nth not supported on this type "), A(ya(xa(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.f & 16 || a.tc)) {
      return a.ia(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(x(Ga, a)) {
      return D.a(a, b)
    }
    if(y) {
      if(a ? a.f & 64 || a.jb || (a.f ? 0 : x(Ha, a)) : x(Ha, a)) {
        return Rb.a(a, b)
      }
      throw Error([A("nth not supported on this type "), A(ya(xa(a)))].join(""));
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
}(), U = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Vc) ? a.Q(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(La, a) ? Ma.c(a, b, c) : y ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Vc) ? a.P(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x(La, a) ? Ma.a(a, b) : null
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
}(), V = function() {
  function a(a, b, c) {
    return null != a ? Pa(a, b, c) : Sb.a ? Sb.a([b], [c]) : Sb.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var s = null;
      3 < arguments.length && (s = q(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, s)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.c(a, d, e), t(l)) {
          d = J(l), e = J(M(l)), l = M(M(l))
        }else {
          return a
        }
      }
    }
    a.m = 3;
    a.g = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var l = J(a);
      a = K(a);
      return c(b, d, l, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, q(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b
}(), Tb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = q(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), t(d)) {
          c = J(d), d = M(d)
        }else {
          return b
        }
      }
    }
    b.m = 2;
    b.g = function(a) {
      var b = J(a);
      a = M(a);
      var c = J(a);
      a = K(a);
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Ra(a, d);
      default:
        return b.e(a, d, q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 2;
  a.g = b.g;
  a.b = aa();
  a.a = function(a, b) {
    return Ra(a, b)
  };
  a.e = b.e;
  return a
}();
function Ub(a) {
  var b = "function" == p(a);
  return b ? b : a ? t(t(null) ? null : a.Sc) ? !0 : a.Pc ? !1 : x(Aa, a) : x(Aa, a)
}
var O = function Vb(b, c) {
  return Ub(b) && !(b ? b.f & 262144 || b.Ad || (b.f ? 0 : x(cb, b)) : x(cb, b)) ? Vb(function() {
    "undefined" === typeof ja && (ja = function(b, c, g, h) {
      this.i = b;
      this.rb = c;
      this.md = g;
      this.hd = h;
      this.o = 0;
      this.f = 393217
    }, ja.Fa = !0, ja.Ea = "cljs.core/t35987", ja.Na = function(b, c) {
      return E(c, "cljs.core/t35987")
    }, ja.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = q(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return W.a ? W.a(b.rb, d) : W.call(null, b.rb, d)
      }
      b.m = 1;
      b.g = function(b) {
        var d = J(b);
        b = K(b);
        return c(d, b)
      };
      b.e = c;
      return b
    }(), ja.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(za(c)))
    }, ja.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = q(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h)
      }
      function c(b) {
        return W.a ? W.a(self__.rb, b) : W.call(null, self__.rb, b)
      }
      b.m = 0;
      b.g = function(b) {
        b = r(b);
        return c(b)
      };
      b.e = c;
      return b
    }(), ja.prototype.Sc = !0, ja.prototype.s = f("hd"), ja.prototype.t = function(b, c) {
      return new ja(this.i, this.rb, this.md, c)
    });
    return new ja(c, b, Vb, null)
  }(), c) : db(b, c)
};
function Wb(a) {
  return(a ? a.f & 131072 || a.Xc || (a.f ? 0 : x($a, a)) : x($a, a)) ? bb(a) : null
}
var Xb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = q(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), t(d)) {
          c = J(d), d = M(d)
        }else {
          return b
        }
      }
    }
    b.m = 2;
    b.g = function(a) {
      var b = J(a);
      a = M(a);
      var c = J(a);
      a = K(a);
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Wa(a, d);
      default:
        return b.e(a, d, q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 2;
  a.g = b.g;
  a.b = aa();
  a.a = function(a, b) {
    return Wa(a, b)
  };
  a.e = b.e;
  return a
}(), Yb = {}, Zb = 0;
function I(a) {
  if(a && (a.f & 4194304 || a.sd)) {
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
            255 < Zb && (Yb = {}, Zb = 0);
            var b = Yb[a];
            "number" !== typeof b && (b = da(a), Yb[a] = b, Zb += 1);
            a = b
          }else {
            a = y ? hb(a) : null
          }
        }
      }
    }
  }
  return a
}
function $b(a) {
  return null == a || w(r(a))
}
function ac(a) {
  return null == a ? !1 : a ? a.f & 8 || a.qd ? !0 : a.f ? !1 : x(Fa, a) : x(Fa, a)
}
function bc(a) {
  return a ? a.f & 16777216 || a.xd ? !0 : a.f ? !1 : x(kb, a) : x(kb, a)
}
function cc(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.td ? !0 : a.f ? !1 : x(Qa, a) : x(Qa, a)
}
function dc(a) {
  return a ? a.f & 16384 || a.zd ? !0 : a.f ? !1 : x(Xa, a) : x(Xa, a)
}
function ec(a) {
  return a ? a.o & 512 || a.pd ? !0 : !1 : !1
}
function fc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var gc = {};
function hc(a) {
  return null == a ? !1 : a ? a.f & 64 || a.jb ? !0 : a.f ? !1 : x(Ha, a) : x(Ha, a)
}
function ic(a) {
  return t(a) ? !0 : !1
}
function jc(a, b) {
  return U.c(a, b, gc) === gc ? !1 : !0
}
function kc(a, b) {
  return null != a && (a ? a.f & 512 || a.od || (a.f ? 0 : x(Na, a)) : x(Na, a)) && jc(a, b) ? new X(null, 2, 5, Y, [b, U.a(a, b)], null) : null
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
  if(xa(a) === xa(b)) {
    return a && (a.o & 2048 || a.ub) ? a.vb(null, b) : ga(a, b)
  }
  if(y) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var lc = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = Cb(T.a(a, h), T.a(b, h));
      if(0 === k && h + 1 < c) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var g = P(a), h = P(b);
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
  c.a = b;
  c.p = a;
  return c
}();
function mc(a) {
  return G.a(a, Cb) ? Cb : function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return"number" === typeof d ? d : t(d) ? -1 : t(a.a ? a.a(c, b) : a.call(null, c, b)) ? 1 : 0
  }
}
var oc = function() {
  function a(a, b) {
    if(r(b)) {
      var c = nc.b ? nc.b(b) : nc.call(null, b);
      ha(c, mc(a));
      return r(c)
    }
    return L
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
}(), Pb = function() {
  function a(a, b, c) {
    for(c = r(c);;) {
      if(c) {
        b = a.a ? a.a(b, J(c)) : a.call(null, b, J(c)), c = M(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = r(b);
    return c ? B.c ? B.c(a, J(c), M(c)) : B.call(null, a, J(c), M(c)) : a.j ? a.j() : a.call(null)
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
}(), B = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.Yc) ? c.Y(null, a, b) : c instanceof Array ? Ib.c(c, a, b) : "string" === typeof c ? Ib.c(c, a, b) : x(eb, c) ? fb.c(c, a, b) : y ? Pb.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.Yc) ? b.X(null, a) : b instanceof Array ? Ib.a(b, a) : "string" === typeof b ? Ib.a(b, a) : x(eb, b) ? fb.a(b, a) : y ? Pb.a(a, b) : null
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
function pc(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a)
}
function qc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function rc(a) {
  var b = 1;
  for(a = r(a);;) {
    if(a && 0 < b) {
      b -= 1, a = M(a)
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
      1 < arguments.length && (k = q(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      for(var e = new ia(b.b(a)), l = d;;) {
        if(t(l)) {
          e = e.append(b.b(J(l))), l = M(l)
        }else {
          return e.toString()
        }
      }
    }
    a.m = 1;
    a.g = function(a) {
      var b = J(a);
      a = K(a);
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
        return c.e(b, q(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.g = c.g;
  b.j = m("");
  b.b = a;
  b.e = c.e;
  return b
}(), sc = function() {
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
function Nb(a, b) {
  return ic(bc(b) ? function() {
    for(var c = r(a), d = r(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(G.a(J(c), J(d))) {
        c = M(c), d = M(d)
      }else {
        return y ? !1 : null
      }
    }
  }() : null)
}
function Eb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Lb(a) {
  if(r(a)) {
    var b = I(J(a));
    for(a = M(a);;) {
      if(null == a) {
        return b
      }
      b = Eb(b, I(J(a)));
      a = M(a)
    }
  }else {
    return 0
  }
}
function tc(a) {
  var b = 0;
  for(a = r(a);;) {
    if(a) {
      var c = J(a), b = (b + (I(uc.b ? uc.b(c) : uc.call(null, c)) ^ I(vc.b ? vc.b(c) : vc.call(null, c)))) % 4503599627370496;
      a = M(a)
    }else {
      return b
    }
  }
}
function wc(a, b, c, d, e) {
  this.i = a;
  this.ob = b;
  this.Ia = c;
  this.count = d;
  this.k = e;
  this.o = 0;
  this.f = 65937646
}
n = wc.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.ca = function() {
  return 1 === this.count ? null : this.Ia
};
n.K = function(a, b) {
  return new wc(this.i, b, this, this.count + 1, null)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Pb.a(b, this)
};
n.Y = function(a, b, c) {
  return Pb.c(b, c, this)
};
n.J = function() {
  return this
};
n.L = f("count");
n.S = f("ob");
n.Z = function() {
  return 1 === this.count ? L : this.Ia
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new wc(b, this.ob, this.Ia, this.count, this.k)
};
n.s = f("i");
n.O = function() {
  return L
};
function xc(a) {
  this.i = a;
  this.o = 0;
  this.f = 65937614
}
n = xc.prototype;
n.C = m(0);
n.ca = m(null);
n.K = function(a, b) {
  return new wc(this.i, b, null, 1, null)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Pb.a(b, this)
};
n.Y = function(a, b, c) {
  return Pb.c(b, c, this)
};
n.J = m(null);
n.L = m(0);
n.S = m(null);
n.Z = function() {
  return L
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new xc(b)
};
n.s = f("i");
n.O = function() {
  return this
};
var L = new xc(null);
function yc(a) {
  return(a ? a.f & 134217728 || a.vd || (a.f ? 0 : x(lb, a)) : x(lb, a)) ? mb(a) : B.c(Qb, L, a)
}
function zc(a, b, c, d) {
  this.i = a;
  this.ob = b;
  this.Ia = c;
  this.k = d;
  this.o = 0;
  this.f = 65929452
}
n = zc.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.ca = function() {
  return null == this.Ia ? null : r(this.Ia)
};
n.K = function(a, b) {
  return new zc(null, b, this, this.k)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Pb.a(b, this)
};
n.Y = function(a, b, c) {
  return Pb.c(b, c, this)
};
n.J = function() {
  return this
};
n.S = f("ob");
n.Z = function() {
  return null == this.Ia ? L : this.Ia
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new zc(b, this.ob, this.Ia, this.k)
};
n.s = f("i");
n.O = function() {
  return O(L, this.i)
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.jb)) ? new zc(null, a, b, null) : new zc(null, a, r(b), null)
}
function Z(a, b, c, d) {
  this.ga = a;
  this.name = b;
  this.Oa = c;
  this.ma = d;
  this.f = 2153775105;
  this.o = 4096
}
n = Z.prototype;
n.B = function(a, b) {
  return E(b, [A(":"), A(this.Oa)].join(""))
};
n.C = function() {
  null == this.ma && (this.ma = Eb(I(this.ga), I(this.name)) + 2654435769);
  return this.ma
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return U.a(c, this);
      case 3:
        return U.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.b = function(a) {
  return U.a(a, this)
};
n.a = function(a, b) {
  return U.c(a, this, b)
};
n.v = function(a, b) {
  return b instanceof Z ? this.Oa === b.Oa : !1
};
n.toString = function() {
  return[A(":"), A(this.Oa)].join("")
};
function Ac(a, b) {
  return a === b ? !0 : a instanceof Z && b instanceof Z ? a.Oa === b.Oa : !1
}
function Bc(a, b, c, d) {
  this.i = a;
  this.hb = b;
  this.l = c;
  this.k = d;
  this.o = 0;
  this.f = 32374988
}
n = Bc.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.ca = function() {
  jb(this);
  return null == this.l ? null : M(this.l)
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
function Cc(a) {
  null != a.hb && (a.l = a.hb.j ? a.hb.j() : a.hb.call(null), a.hb = null);
  return a.l
}
n.X = function(a, b) {
  return Pb.a(b, this)
};
n.Y = function(a, b, c) {
  return Pb.c(b, c, this)
};
n.J = function() {
  Cc(this);
  if(null == this.l) {
    return null
  }
  for(var a = this.l;;) {
    if(a instanceof Bc) {
      a = Cc(a)
    }else {
      return this.l = a, r(this.l)
    }
  }
};
n.S = function() {
  jb(this);
  return null == this.l ? null : J(this.l)
};
n.Z = function() {
  jb(this);
  return null != this.l ? K(this.l) : L
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new Bc(b, this.hb, this.l, this.k)
};
n.s = f("i");
n.O = function() {
  return O(L, this.i)
};
function Dc(a, b) {
  this.Mb = a;
  this.end = b;
  this.o = 0;
  this.f = 2
}
Dc.prototype.L = f("end");
Dc.prototype.add = function(a) {
  this.Mb[this.end] = a;
  return this.end += 1
};
Dc.prototype.Aa = function() {
  var a = new Ec(this.Mb, 0, this.end);
  this.Mb = null;
  return a
};
function Ec(a, b, c) {
  this.d = a;
  this.M = b;
  this.end = c;
  this.o = 0;
  this.f = 524306
}
n = Ec.prototype;
n.X = function(a, b) {
  return Ib.p(this.d, b, this.d[this.M], this.M + 1)
};
n.Y = function(a, b, c) {
  return Ib.p(this.d, b, c, this.M)
};
n.sc = function() {
  if(this.M === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Ec(this.d, this.M + 1, this.end)
};
n.ia = function(a, b) {
  return this.d[this.M + b]
};
n.na = function(a, b, c) {
  return 0 <= b && b < this.end - this.M ? this.d[this.M + b] : c
};
n.L = function() {
  return this.end - this.M
};
var Fc = function() {
  function a(a, b, c) {
    return new Ec(a, b, c)
  }
  function b(a, b) {
    return new Ec(a, b, a.length)
  }
  function c(a) {
    return new Ec(a, 0, a.length)
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
function Gc(a, b, c, d) {
  this.Aa = a;
  this.Ca = b;
  this.i = c;
  this.k = d;
  this.f = 31850732;
  this.o = 1536
}
n = Gc.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.ca = function() {
  if(1 < Da(this.Aa)) {
    return new Gc(ub(this.Aa), this.Ca, this.i, null)
  }
  var a = jb(this.Ca);
  return null == a ? null : a
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
n.J = function() {
  return this
};
n.S = function() {
  return D.a(this.Aa, 0)
};
n.Z = function() {
  return 1 < Da(this.Aa) ? new Gc(ub(this.Aa), this.Ca, this.i, null) : null == this.Ca ? L : this.Ca
};
n.Pb = function() {
  return null == this.Ca ? null : this.Ca
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new Gc(this.Aa, this.Ca, b, this.k)
};
n.s = f("i");
n.O = function() {
  return O(L, this.i)
};
n.Qb = f("Aa");
n.Rb = function() {
  return null == this.Ca ? L : this.Ca
};
function Hc(a, b) {
  return 0 === Da(a) ? b : new Gc(a, b, null, null)
}
function nc(a) {
  for(var b = [];;) {
    if(r(a)) {
      b.push(J(a)), a = M(a)
    }else {
      return b
    }
  }
}
function Ic(a, b) {
  if(Jb(a)) {
    return P(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && r(c)) {
      c = M(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Kc = function Jc(b) {
  return null == b ? null : null == M(b) ? r(J(b)) : y ? N(J(b), Jc(M(b))) : null
}, Lc = function() {
  function a(a, b) {
    return new Bc(null, function() {
      var c = r(a);
      return c ? ec(c) ? Hc(vb(c), d.a(wb(c), b)) : N(J(c), d.a(K(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new Bc(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new Bc(null, m(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = q(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g)
    }
    function b(a, c, e) {
      return function u(a, b) {
        return new Bc(null, function() {
          var c = r(a);
          return c ? ec(c) ? Hc(vb(c), u(wb(c), b)) : N(J(c), u(K(c), b)) : t(b) ? u(J(b), M(b)) : null
        }, null, null)
      }(d.a(a, c), e)
    }
    a.m = 2;
    a.g = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
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
        return e.e(d, h, q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.g = e.g;
  d.j = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d
}(), Mc = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)))
  }
  function b(a, b, c) {
    return N(a, N(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, s, v) {
      var u = null;
      4 < arguments.length && (u = q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, s, u)
    }
    function b(a, c, d, e, g) {
      return N(a, N(c, N(d, N(e, Kc(g)))))
    }
    a.m = 4;
    a.g = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var v = J(a);
      a = K(a);
      return b(c, d, e, v, a)
    };
    a.e = b;
    return a
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return r(c);
      case 2:
        return N(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.e(c, g, h, k, q(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 4;
  c.g = d.g;
  c.b = function(a) {
    return r(a)
  };
  c.a = function(a, b) {
    return N(a, b)
  };
  c.c = b;
  c.p = a;
  c.e = d.e;
  return c
}();
function Nc(a, b, c) {
  var d = r(c);
  if(0 === b) {
    return a.j ? a.j() : a.call(null)
  }
  c = Ia(d);
  var e = Ja(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c)
  }
  var d = Ia(e), g = Ja(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = Ia(g), h = Ja(g);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var g = Ia(h), k = Ja(h);
  if(4 === b) {
    return a.p ? a.p(c, d, e, g) : a.p ? a.p(c, d, e, g) : a.call(null, c, d, e, g)
  }
  h = Ia(k);
  k = Ja(k);
  if(5 === b) {
    return a.D ? a.D(c, d, e, g, h) : a.D ? a.D(c, d, e, g, h) : a.call(null, c, d, e, g, h)
  }
  a = Ia(k);
  var l = Ja(k);
  if(6 === b) {
    return a.sa ? a.sa(c, d, e, g, h, a) : a.sa ? a.sa(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a)
  }
  var k = Ia(l), s = Ja(l);
  if(7 === b) {
    return a.$a ? a.$a(c, d, e, g, h, a, k) : a.$a ? a.$a(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k)
  }
  var l = Ia(s), v = Ja(s);
  if(8 === b) {
    return a.cc ? a.cc(c, d, e, g, h, a, k, l) : a.cc ? a.cc(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l)
  }
  var s = Ia(v), u = Ja(v);
  if(9 === b) {
    return a.dc ? a.dc(c, d, e, g, h, a, k, l, s) : a.dc ? a.dc(c, d, e, g, h, a, k, l, s) : a.call(null, c, d, e, g, h, a, k, l, s)
  }
  var v = Ia(u), F = Ja(u);
  if(10 === b) {
    return a.Sb ? a.Sb(c, d, e, g, h, a, k, l, s, v) : a.Sb ? a.Sb(c, d, e, g, h, a, k, l, s, v) : a.call(null, c, d, e, g, h, a, k, l, s, v)
  }
  var u = Ia(F), Q = Ja(F);
  if(11 === b) {
    return a.Tb ? a.Tb(c, d, e, g, h, a, k, l, s, v, u) : a.Tb ? a.Tb(c, d, e, g, h, a, k, l, s, v, u) : a.call(null, c, d, e, g, h, a, k, l, s, v, u)
  }
  var F = Ia(Q), R = Ja(Q);
  if(12 === b) {
    return a.Ub ? a.Ub(c, d, e, g, h, a, k, l, s, v, u, F) : a.Ub ? a.Ub(c, d, e, g, h, a, k, l, s, v, u, F) : a.call(null, c, d, e, g, h, a, k, l, s, v, u, F)
  }
  var Q = Ia(R), S = Ja(R);
  if(13 === b) {
    return a.Vb ? a.Vb(c, d, e, g, h, a, k, l, s, v, u, F, Q) : a.Vb ? a.Vb(c, d, e, g, h, a, k, l, s, v, u, F, Q) : a.call(null, c, d, e, g, h, a, k, l, s, v, u, F, Q)
  }
  var R = Ia(S), ta = Ja(S);
  if(14 === b) {
    return a.Wb ? a.Wb(c, d, e, g, h, a, k, l, s, v, u, F, Q, R) : a.Wb ? a.Wb(c, d, e, g, h, a, k, l, s, v, u, F, Q, R) : a.call(null, c, d, e, g, h, a, k, l, s, v, u, F, Q, R)
  }
  var S = Ia(ta), Ca = Ja(ta);
  if(15 === b) {
    return a.Xb ? a.Xb(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S) : a.Xb ? a.Xb(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S) : a.call(null, c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S)
  }
  var ta = Ia(Ca), ab = Ja(Ca);
  if(16 === b) {
    return a.Yb ? a.Yb(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta) : a.Yb ? a.Yb(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta) : a.call(null, c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta)
  }
  var Ca = Ia(ab), xb = Ja(ab);
  if(17 === b) {
    return a.Zb ? a.Zb(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca) : a.Zb ? a.Zb(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca) : a.call(null, c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca)
  }
  var ab = Ia(xb), xd = Ja(xb);
  if(18 === b) {
    return a.$b ? a.$b(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca, ab) : a.$b ? a.$b(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca, ab) : a.call(null, c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca, ab)
  }
  xb = Ia(xd);
  xd = Ja(xd);
  if(19 === b) {
    return a.ac ? a.ac(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca, ab, xb) : a.ac ? a.ac(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca, ab, xb) : a.call(null, c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca, ab, xb)
  }
  var Re = Ia(xd);
  Ja(xd);
  if(20 === b) {
    return a.bc ? a.bc(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca, ab, xb, Re) : a.bc ? a.bc(c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca, ab, xb, Re) : a.call(null, c, d, e, g, h, a, k, l, s, v, u, F, Q, R, S, ta, Ca, ab, xb, Re)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var W = function() {
  function a(a, b, c, d, e) {
    b = Mc.p(b, c, d, e);
    c = a.m;
    return a.g ? (d = Ic(b, c + 1), d <= c ? Nc(a, d, b) : a.g(b)) : a.apply(a, nc(b))
  }
  function b(a, b, c, d) {
    b = Mc.c(b, c, d);
    c = a.m;
    return a.g ? (d = Ic(b, c + 1), d <= c ? Nc(a, d, b) : a.g(b)) : a.apply(a, nc(b))
  }
  function c(a, b, c) {
    b = Mc.a(b, c);
    c = a.m;
    if(a.g) {
      var d = Ic(b, c + 1);
      return d <= c ? Nc(a, d, b) : a.g(b)
    }
    return a.apply(a, nc(b))
  }
  function d(a, b) {
    var c = a.m;
    if(a.g) {
      var d = Ic(b, c + 1);
      return d <= c ? Nc(a, d, b) : a.g(b)
    }
    return a.apply(a, nc(b))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, Q) {
      var R = null;
      5 < arguments.length && (R = q(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, R)
    }
    function b(a, c, d, e, g, h) {
      c = N(c, N(d, N(e, N(g, Kc(h)))));
      d = a.m;
      return a.g ? (e = Ic(c, d + 1), e <= d ? Nc(a, e, c) : a.g(c)) : a.apply(a, nc(c))
    }
    a.m = 5;
    a.g = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = M(a);
      var h = J(a);
      a = K(a);
      return b(c, d, e, g, h, a)
    };
    a.e = b;
    return a
  }(), e = function(e, k, l, s, v, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, s);
      case 5:
        return a.call(this, e, k, l, s, v);
      default:
        return g.e(e, k, l, s, v, q(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.g = g.g;
  e.a = d;
  e.c = c;
  e.p = b;
  e.D = a;
  e.e = g.e;
  return e
}(), Oc = function() {
  function a(a, d, e) {
    var g = null;
    2 < arguments.length && (g = q(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, g)
  }
  function b(a, b, e) {
    return O(a, W.c(b, Wb(a), e))
  }
  a.m = 2;
  a.g = function(a) {
    var d = J(a);
    a = M(a);
    var e = J(a);
    a = K(a);
    return b(d, e, a)
  };
  a.e = b;
  return a
}(), Pc = function() {
  function a(a, b) {
    return!G.a(a, b)
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = q(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l)
    }
    function b(a, c, d) {
      return w(W.p(G, a, c, d))
    }
    a.m = 2;
    a.g = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
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
        return c.e(b, e, q(arguments, 2))
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
function Qc(a) {
  return r(a) ? a : null
}
function Rc(a, b) {
  for(;;) {
    if(null == r(b)) {
      return!0
    }
    if(t(a.b ? a.b(J(b)) : a.call(null, J(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d
    }else {
      return y ? !1 : null
    }
  }
}
function Sc(a, b) {
  for(;;) {
    if(r(b)) {
      var c = a.b ? a.b(J(b)) : a.call(null, J(b));
      if(t(c)) {
        return c
      }
      var c = a, d = M(b);
      a = c;
      b = d
    }else {
      return null
    }
  }
}
function Tc(a) {
  return a
}
function Uc(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = q(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l)
      }
      function c(b, d, e) {
        return w(W.p(a, b, d, e))
      }
      b.m = 2;
      b.g = function(a) {
        var b = J(a);
        a = M(a);
        var d = J(a);
        a = K(a);
        return c(b, d, a)
      };
      b.e = c;
      return b
    }(), b = function(b, e, g) {
      switch(arguments.length) {
        case 0:
          return w(a.j ? a.j() : a.call(null));
        case 1:
          return w(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return w(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.e(b, e, q(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.m = 2;
    b.g = c.g;
    return b
  }()
}
var Vc = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = q(Array.prototype.slice.call(arguments, 3), 0));
          return l.call(this, a, b, c, g)
        }
        function l(d, k, s, v) {
          return a.b ? a.b(b.b ? b.b(W.D(c, d, k, s, v)) : b.call(null, W.D(c, d, k, s, v))) : a.call(null, b.b ? b.b(W.D(c, d, k, s, v)) : b.call(null, W.D(c, d, k, s, v)))
        }
        d.m = 3;
        d.g = function(a) {
          var b = J(a);
          a = M(a);
          var c = J(a);
          a = M(a);
          var d = J(a);
          a = K(a);
          return l(b, c, d, a)
        };
        d.e = l;
        return d
      }(), d = function(d, k, u, F) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.b ? b.b(c.j ? c.j() : c.call(null)) : b.call(null, c.j ? c.j() : c.call(null))) : a.call(null, b.b ? b.b(c.j ? c.j() : c.call(null)) : b.call(null, c.j ? c.j() : c.call(null)));
          case 1:
            return a.b ? a.b(b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d))) : a.call(null, b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d)));
          case 2:
            return a.b ? a.b(b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.b ? a.b(b.b ? b.b(c.c ? c.c(d, k, u) : c.call(null, d, k, u)) : b.call(null, c.c ? c.c(d, k, u) : c.call(null, d, k, u))) : a.call(null, b.b ? b.b(c.c ? c.c(d, k, u) : c.call(null, d, k, u)) : b.call(null, c.c ? c.c(d, k, u) : c.call(null, d, k, u)));
          default:
            return l.e(d, k, u, q(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.m = 3;
      d.g = l.g;
      return d
    }()
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, g) {
          var h = null;
          3 < arguments.length && (h = q(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h)
        }
        function d(c, h, l, k) {
          return a.b ? a.b(W.D(b, c, h, l, k)) : a.call(null, W.D(b, c, h, l, k))
        }
        c.m = 3;
        c.g = function(a) {
          var b = J(a);
          a = M(a);
          var c = J(a);
          a = M(a);
          var e = J(a);
          a = K(a);
          return d(b, c, e, a)
        };
        c.e = d;
        return c
      }(), c = function(c, h, v, u) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.j ? b.j() : b.call(null)) : a.call(null, b.j ? b.j() : b.call(null));
          case 1:
            return a.b ? a.b(b.b ? b.b(c) : b.call(null, c)) : a.call(null, b.b ? b.b(c) : b.call(null, c));
          case 2:
            return a.b ? a.b(b.a ? b.a(c, h) : b.call(null, c, h)) : a.call(null, b.a ? b.a(c, h) : b.call(null, c, h));
          case 3:
            return a.b ? a.b(b.c ? b.c(c, h, v) : b.call(null, c, h, v)) : a.call(null, b.c ? b.c(c, h, v) : b.call(null, c, h, v));
          default:
            return d.e(c, h, v, q(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.m = 3;
      c.g = d.g;
      return c
    }()
  }
  var c = null, d = function() {
    function a(c, d, e, s) {
      var v = null;
      3 < arguments.length && (v = q(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, v)
    }
    function b(a, c, d, e) {
      var g = yc(Mc.p(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = q(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d)
        }
        function b(a) {
          a = W.a(J(g), a);
          for(var c = M(g);;) {
            if(c) {
              a = J(c).call(null, a), c = M(c)
            }else {
              return a
            }
          }
        }
        a.m = 0;
        a.g = function(a) {
          a = r(a);
          return b(a)
        };
        a.e = b;
        return a
      }()
    }
    a.m = 3;
    a.g = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = K(a);
      return b(c, d, e, a)
    };
    a.e = b;
    return a
  }(), c = function(c, g, h, k) {
    switch(arguments.length) {
      case 0:
        return Tc;
      case 1:
        return c;
      case 2:
        return b.call(this, c, g);
      case 3:
        return a.call(this, c, g, h);
      default:
        return d.e(c, g, h, q(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 3;
  c.g = d.g;
  c.j = function() {
    return Tc
  };
  c.b = aa();
  c.a = b;
  c.c = a;
  c.e = d.e;
  return c
}(), Wc = function() {
  function a(a, b, c, d) {
    return function() {
      var l = null, s = function() {
        function l(a, b, c, d) {
          var e = null;
          3 < arguments.length && (e = q(Array.prototype.slice.call(arguments, 3), 0));
          return s.call(this, a, b, c, e)
        }
        function s(l, v, u, S) {
          return W.D(a, null == l ? b : l, null == v ? c : v, null == u ? d : u, S)
        }
        l.m = 3;
        l.g = function(a) {
          var b = J(a);
          a = M(a);
          var c = J(a);
          a = M(a);
          var d = J(a);
          a = K(a);
          return s(b, c, d, a)
        };
        l.e = s;
        return l
      }(), l = function(l, u, F, Q) {
        switch(arguments.length) {
          case 2:
            return a.a ? a.a(null == l ? b : l, null == u ? c : u) : a.call(null, null == l ? b : l, null == u ? c : u);
          case 3:
            return a.c ? a.c(null == l ? b : l, null == u ? c : u, null == F ? d : F) : a.call(null, null == l ? b : l, null == u ? c : u, null == F ? d : F);
          default:
            return s.e(l, u, F, q(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      l.m = 3;
      l.g = s.g;
      return l
    }()
  }
  function b(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = q(Array.prototype.slice.call(arguments, 3), 0));
          return l.call(this, a, b, c, g)
        }
        function l(d, k, s, v) {
          return W.D(a, null == d ? b : d, null == k ? c : k, s, v)
        }
        d.m = 3;
        d.g = function(a) {
          var b = J(a);
          a = M(a);
          var c = J(a);
          a = M(a);
          var d = J(a);
          a = K(a);
          return l(b, c, d, a)
        };
        d.e = l;
        return d
      }(), d = function(d, k, u, F) {
        switch(arguments.length) {
          case 2:
            return a.a ? a.a(null == d ? b : d, null == k ? c : k) : a.call(null, null == d ? b : d, null == k ? c : k);
          case 3:
            return a.c ? a.c(null == d ? b : d, null == k ? c : k, u) : a.call(null, null == d ? b : d, null == k ? c : k, u);
          default:
            return l.e(d, k, u, q(arguments, 3))
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
          3 < arguments.length && (h = q(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h)
        }
        function d(c, h, l, k) {
          return W.D(a, null == c ? b : c, h, l, k)
        }
        c.m = 3;
        c.g = function(a) {
          var b = J(a);
          a = M(a);
          var c = J(a);
          a = M(a);
          var e = J(a);
          a = K(a);
          return d(b, c, e, a)
        };
        c.e = d;
        return c
      }(), c = function(c, h, v, u) {
        switch(arguments.length) {
          case 1:
            return a.b ? a.b(null == c ? b : c) : a.call(null, null == c ? b : c);
          case 2:
            return a.a ? a.a(null == c ? b : c, h) : a.call(null, null == c ? b : c, h);
          case 3:
            return a.c ? a.c(null == c ? b : c, h, v) : a.call(null, null == c ? b : c, h, v);
          default:
            return d.e(c, h, v, q(arguments, 3))
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
}(), Xc = function() {
  function a(a, b, c, e) {
    return new Bc(null, function() {
      var s = r(b), v = r(c), u = r(e);
      return s && v && u ? N(a.c ? a.c(J(s), J(v), J(u)) : a.call(null, J(s), J(v), J(u)), d.p(a, K(s), K(v), K(u))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new Bc(null, function() {
      var e = r(b), s = r(c);
      return e && s ? N(a.a ? a.a(J(e), J(s)) : a.call(null, J(e), J(s)), d.c(a, K(e), K(s))) : null
    }, null, null)
  }
  function c(a, b) {
    return new Bc(null, function() {
      var c = r(b);
      if(c) {
        if(ec(c)) {
          for(var e = vb(c), s = P(e), v = new Dc(Array(s), 0), u = 0;;) {
            if(u < s) {
              var F = a.b ? a.b(D.a(e, u)) : a.call(null, D.a(e, u));
              v.add(F);
              u += 1
            }else {
              break
            }
          }
          return Hc(v.Aa(), d.a(a, wb(c)))
        }
        return N(a.b ? a.b(J(c)) : a.call(null, J(c)), d.a(a, K(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, g, u) {
      var F = null;
      4 < arguments.length && (F = q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, F)
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return W.a(a, b)
      }, function Q(a) {
        return new Bc(null, function() {
          var b = d.a(r, a);
          return Rc(Tc, b) ? N(d.a(J, b), Q(d.a(K, b))) : null
        }, null, null)
      }(Qb.e(h, g, q([e, c], 0))))
    }
    a.m = 4;
    a.g = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = K(a);
      return b(c, d, e, g, a)
    };
    a.e = b;
    return a
  }(), d = function(d, h, k, l, s) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, q(arguments, 4))
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
}(), Zc = function Yc(b, c) {
  return new Bc(null, function() {
    if(0 < b) {
      var d = r(c);
      return d ? N(J(d), Yc(b - 1, K(d))) : null
    }
    return null
  }, null, null)
}, $c = function() {
  function a(a, b) {
    return Zc(a, c.b(b))
  }
  function b(a) {
    return new Bc(null, function() {
      return N(a, c.b(a))
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
}();
function ad(a) {
  return function c(a, e) {
    return new Bc(null, function() {
      var g = r(a);
      return g ? N(J(g), c(K(g), e)) : r(e) ? c(J(e), K(e)) : null
    }, null, null)
  }(null, a)
}
var bd = function() {
  function a(a, b) {
    return ad(Xc.a(a, b))
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = q(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l)
    }
    function b(a, c, d) {
      return ad(W.p(Xc, a, c, d))
    }
    a.m = 2;
    a.g = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}(), dd = function cd(b, c) {
  return new Bc(null, function() {
    var d = r(c);
    if(d) {
      if(ec(d)) {
        for(var e = vb(d), g = P(e), h = new Dc(Array(g), 0), k = 0;;) {
          if(k < g) {
            if(t(b.b ? b.b(D.a(e, k)) : b.call(null, D.a(e, k)))) {
              var l = D.a(e, k);
              h.add(l)
            }
            k += 1
          }else {
            break
          }
        }
        return Hc(h.Aa(), cd(b, wb(d)))
      }
      e = J(d);
      d = K(d);
      return t(b.b ? b.b(e) : b.call(null, e)) ? N(e, cd(b, d)) : cd(b, d)
    }
    return null
  }, null, null)
};
function ed(a) {
  var b = r;
  return function d(a) {
    return new Bc(null, function() {
      return N(a, t(bc.b ? bc.b(a) : bc.call(null, a)) ? bd.a(d, b.b ? b.b(a) : b.call(null, a)) : null)
    }, null, null)
  }(a)
}
function fd(a) {
  return dd(function(a) {
    return!bc(a)
  }, K(ed(a)))
}
function gd(a, b) {
  var c;
  null != a ? a && (a.o & 4 || a.rd) ? (c = B.c(qb, pb(a), b), c = rb(c)) : c = B.c(C, a, b) : c = B.c(Qb, L, b);
  return c
}
var hd = function() {
  function a(a, b, c, d, g, u) {
    var F = T.c(b, 0, null);
    return(b = rc(b)) ? V.c(a, F, e.sa(U.a(a, F), b, c, d, g, u)) : V.c(a, F, c.p ? c.p(U.a(a, F), d, g, u) : c.call(null, U.a(a, F), d, g, u))
  }
  function b(a, b, c, d, g) {
    var u = T.c(b, 0, null);
    return(b = rc(b)) ? V.c(a, u, e.D(U.a(a, u), b, c, d, g)) : V.c(a, u, c.c ? c.c(U.a(a, u), d, g) : c.call(null, U.a(a, u), d, g))
  }
  function c(a, b, c, d) {
    var g = T.c(b, 0, null);
    return(b = rc(b)) ? V.c(a, g, e.p(U.a(a, g), b, c, d)) : V.c(a, g, c.a ? c.a(U.a(a, g), d) : c.call(null, U.a(a, g), d))
  }
  function d(a, b, c) {
    var d = T.c(b, 0, null);
    return(b = rc(b)) ? V.c(a, d, e.c(U.a(a, d), b, c)) : V.c(a, d, c.b ? c.b(U.a(a, d)) : c.call(null, U.a(a, d)))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, Q, R) {
      var S = null;
      6 < arguments.length && (S = q(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, g, h, Q, S)
    }
    function b(a, c, d, g, h, k, R) {
      var S = T.c(c, 0, null);
      return(c = rc(c)) ? V.c(a, S, W.e(e, U.a(a, S), c, d, g, q([h, k, R], 0))) : V.c(a, S, W.e(d, U.a(a, S), g, h, k, q([R], 0)))
    }
    a.m = 6;
    a.g = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = M(a);
      var h = J(a);
      a = M(a);
      var R = J(a);
      a = K(a);
      return b(c, d, e, g, h, R, a)
    };
    a.e = b;
    return a
  }(), e = function(e, k, l, s, v, u, F) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, s);
      case 5:
        return b.call(this, e, k, l, s, v);
      case 6:
        return a.call(this, e, k, l, s, v, u);
      default:
        return g.e(e, k, l, s, v, u, q(arguments, 6))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 6;
  e.g = g.g;
  e.c = d;
  e.p = c;
  e.D = b;
  e.sa = a;
  e.e = g.e;
  return e
}();
function id(a, b) {
  this.w = a;
  this.d = b
}
function jd(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function kd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new id(a, Array(32));
    d.d[0] = c;
    c = d;
    b -= 5
  }
}
var md = function ld(b, c, d, e) {
  var g = new id(d.w, za(d.d)), h = b.h - 1 >>> c & 31;
  5 === c ? g.d[h] = e : (d = d.d[h], b = null != d ? ld(b, c - 5, d, e) : kd(null, c - 5, e), g.d[h] = b);
  return g
};
function nd(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function od(a, b) {
  if(0 <= b && b < a.h) {
    if(b >= jd(a)) {
      return a.aa
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      }else {
        return c.d
      }
    }
  }else {
    return nd(b, a.h)
  }
}
var qd = function pd(b, c, d, e, g) {
  var h = new id(d.w, za(d.d));
  if(0 === c) {
    h.d[e & 31] = g
  }else {
    var k = e >>> c & 31;
    b = pd(b, c - 5, d.d[k], e, g);
    h.d[k] = b
  }
  return h
};
function X(a, b, c, d, e, g) {
  this.i = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.aa = e;
  this.k = g;
  this.o = 4;
  this.f = 167668511
}
n = X.prototype;
n.ib = function() {
  return new rd(this.h, this.shift, sd.b ? sd.b(this.root) : sd.call(null, this.root), td.b ? td.b(this.aa) : td.call(null, this.aa))
};
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.P = function(a, b) {
  return D.c(this, b, null)
};
n.Q = function(a, b, c) {
  return D.c(this, b, c)
};
n.La = function(a, b, c) {
  if(0 <= b && b < this.h) {
    return jd(this) <= b ? (a = za(this.aa), a[b & 31] = c, new X(this.i, this.h, this.shift, this.root, a, null)) : new X(this.i, this.h, this.shift, qd(this, this.shift, this.root, b, c), this.aa, null)
  }
  if(b === this.h) {
    return C(this, c)
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
        return this.ia(null, c);
      case 3:
        return this.na(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.b = function(a) {
  return this.ia(null, a)
};
n.a = function(a, b) {
  return this.na(null, a, b)
};
n.K = function(a, b) {
  if(32 > this.h - jd(this)) {
    for(var c = this.aa.length, d = Array(c + 1), e = 0;;) {
      if(e < c) {
        d[e] = this.aa[e], e += 1
      }else {
        break
      }
    }
    d[c] = b;
    return new X(this.i, this.h + 1, this.shift, this.root, d, null)
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = new id(null, Array(32)), d.d[0] = this.root, e = kd(null, this.shift, new id(null, this.aa)), d.d[1] = e) : d = md(this, this.shift, this.root, new id(null, this.aa));
  return new X(this.i, this.h + 1, c, d, [b], null)
};
n.gc = function() {
  return 0 < this.h ? new Mb(this, this.h - 1, null) : null
};
n.ec = function() {
  return D.a(this, 0)
};
n.fc = function() {
  return D.a(this, 1)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Hb.a(this, b)
};
n.Y = function(a, b, c) {
  return Hb.c(this, b, c)
};
n.J = function() {
  return 0 === this.h ? null : 32 > this.h ? q.b(this.aa) : y ? ud.c ? ud.c(this, 0, 0) : ud.call(null, this, 0, 0) : null
};
n.L = f("h");
n.hc = function(a, b, c) {
  return Pa(this, b, c)
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new X(b, this.h, this.shift, this.root, this.aa, this.k)
};
n.s = f("i");
n.ia = function(a, b) {
  return od(this, b)[b & 31]
};
n.na = function(a, b, c) {
  return 0 <= b && b < this.h ? D.a(this, b) : c
};
n.O = function() {
  return O(vd, this.i)
};
var Y = new id(null, Array(32)), vd = new X(null, 0, 5, Y, [], 0);
function wd(a) {
  return rb(B.c(qb, pb(vd), a))
}
function yd(a, b, c, d, e, g) {
  this.W = a;
  this.oa = b;
  this.n = c;
  this.M = d;
  this.i = e;
  this.k = g;
  this.f = 32243948;
  this.o = 1536
}
n = yd.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.ca = function() {
  if(this.M + 1 < this.oa.length) {
    var a = ud.p ? ud.p(this.W, this.oa, this.n, this.M + 1) : ud.call(null, this.W, this.oa, this.n, this.M + 1);
    return null == a ? null : a
  }
  return yb(this)
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Hb.a(zd.c ? zd.c(this.W, this.n + this.M, P(this.W)) : zd.call(null, this.W, this.n + this.M, P(this.W)), b)
};
n.Y = function(a, b, c) {
  return Hb.c(zd.c ? zd.c(this.W, this.n + this.M, P(this.W)) : zd.call(null, this.W, this.n + this.M, P(this.W)), b, c)
};
n.J = function() {
  return this
};
n.S = function() {
  return this.oa[this.M]
};
n.Z = function() {
  if(this.M + 1 < this.oa.length) {
    var a = ud.p ? ud.p(this.W, this.oa, this.n, this.M + 1) : ud.call(null, this.W, this.oa, this.n, this.M + 1);
    return null == a ? L : a
  }
  return wb(this)
};
n.Pb = function() {
  var a = this.oa.length, a = this.n + a < Da(this.W) ? ud.c ? ud.c(this.W, this.n + a, 0) : ud.call(null, this.W, this.n + a, 0) : null;
  return null == a ? null : a
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return ud.D ? ud.D(this.W, this.oa, this.n, this.M, b) : ud.call(null, this.W, this.oa, this.n, this.M, b)
};
n.O = function() {
  return O(vd, this.i)
};
n.Qb = function() {
  return Fc.a(this.oa, this.M)
};
n.Rb = function() {
  var a = this.oa.length, a = this.n + a < Da(this.W) ? ud.c ? ud.c(this.W, this.n + a, 0) : ud.call(null, this.W, this.n + a, 0) : null;
  return null == a ? L : a
};
var ud = function() {
  function a(a, b, c, d, l) {
    return new yd(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new yd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new yd(a, od(a, b), b, c, null, null)
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
  d.D = a;
  return d
}();
function Ad(a, b, c, d, e) {
  this.i = a;
  this.G = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.o = 0;
  this.f = 32400159
}
n = Ad.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.P = function(a, b) {
  return D.c(this, b, null)
};
n.Q = function(a, b, c) {
  return D.c(this, b, c)
};
n.La = function(a, b, c) {
  var d = this, e = d.start + b;
  return Bd.D ? Bd.D(d.i, V.c(d.G, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Bd.call(null, d.i, V.c(d.G, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ia(null, c);
      case 3:
        return this.na(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.b = function(a) {
  return this.ia(null, a)
};
n.a = function(a, b) {
  return this.na(null, a, b)
};
n.K = function(a, b) {
  return Bd.D ? Bd.D(this.i, Ya(this.G, this.end, b), this.start, this.end + 1, null) : Bd.call(null, this.i, Ya(this.G, this.end, b), this.start, this.end + 1, null)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Hb.a(this, b)
};
n.Y = function(a, b, c) {
  return Hb.c(this, b, c)
};
n.J = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : N(D.a(a.G, d), new Bc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
n.L = function() {
  return this.end - this.start
};
n.hc = function(a, b, c) {
  return Pa(this, b, c)
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return Bd.D ? Bd.D(b, this.G, this.start, this.end, this.k) : Bd.call(null, b, this.G, this.start, this.end, this.k)
};
n.s = f("i");
n.ia = function(a, b) {
  return 0 > b || this.end <= this.start + b ? nd(b, this.end - this.start) : D.a(this.G, this.start + b)
};
n.na = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : D.c(this.G, this.start + b, c)
};
n.O = function() {
  return O(vd, this.i)
};
function Bd(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Ad) {
      c = b.start + c, d = b.start + d, b = b.G
    }else {
      var g = P(b);
      if(0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Ad(a, b, c, d, e)
    }
  }
}
var zd = function() {
  function a(a, b, c) {
    return Bd(null, a, b, c, null)
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
  c.a = b;
  c.c = a;
  return c
}();
function sd(a) {
  return new id({}, za(a.d))
}
function td(a) {
  var b = Array(32);
  fc(a, 0, b, 0, a.length);
  return b
}
var Dd = function Cd(b, c, d, e) {
  d = b.root.w === d.w ? d : new id(b.root.w, za(d.d));
  var g = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.d[g];
    b = null != h ? Cd(b, c - 5, h, e) : kd(b.root.w, c - 5, e)
  }
  d.d[g] = b;
  return d
};
function rd(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.aa = d;
  this.f = 275;
  this.o = 88
}
n = rd.prototype;
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.b = function(a) {
  return this.P(null, a)
};
n.a = function(a, b) {
  return this.Q(null, a, b)
};
n.P = function(a, b) {
  return D.c(this, b, null)
};
n.Q = function(a, b, c) {
  return D.c(this, b, c)
};
n.ia = function(a, b) {
  if(this.root.w) {
    return od(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
n.na = function(a, b, c) {
  return 0 <= b && b < this.h ? D.a(this, b) : c
};
n.L = function() {
  if(this.root.w) {
    return this.h
  }
  throw Error("count after persistent!");
};
n.vc = function(a, b, c) {
  var d = this;
  if(d.root.w) {
    if(0 <= b && b < d.h) {
      return jd(this) <= b ? d.aa[b & 31] = c : (a = function g(a, k) {
        var l = d.root.w === k.w ? k : new id(d.root.w, za(k.d));
        if(0 === a) {
          l.d[b & 31] = c
        }else {
          var s = b >>> a & 31, v = g(a - 5, l.d[s]);
          l.d[s] = v
        }
        return l
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.h) {
      return qb(this, c)
    }
    if(y) {
      throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.h)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
n.bb = function(a, b, c) {
  return tb(this, b, c)
};
n.Ma = function(a, b) {
  if(this.root.w) {
    if(32 > this.h - jd(this)) {
      this.aa[this.h & 31] = b
    }else {
      var c = new id(this.root.w, this.aa), d = Array(32);
      d[0] = b;
      this.aa = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = kd(this.root.w, this.shift, c);
        this.root = new id(this.root.w, d);
        this.shift = e
      }else {
        this.root = Dd(this, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
n.Ta = function() {
  if(this.root.w) {
    this.root.w = null;
    var a = this.h - jd(this), b = Array(a);
    fc(this.aa, 0, b, 0, a);
    return new X(null, this.h, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function Ed(a, b, c, d) {
  this.i = a;
  this.ua = b;
  this.Qa = c;
  this.k = d;
  this.o = 0;
  this.f = 31850572
}
n = Ed.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
n.J = function() {
  return this
};
n.S = function() {
  return J(this.ua)
};
n.Z = function() {
  var a = M(this.ua);
  return a ? new Ed(this.i, a, this.Qa, null) : null == this.Qa ? Ea(this) : new Ed(this.i, this.Qa, null, null)
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new Ed(b, this.ua, this.Qa, this.k)
};
n.s = f("i");
n.O = function() {
  return O(L, this.i)
};
function Fd(a, b, c, d, e) {
  this.i = a;
  this.count = b;
  this.ua = c;
  this.Qa = d;
  this.k = e;
  this.o = 0;
  this.f = 31858766
}
n = Fd.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.K = function(a, b) {
  var c;
  t(this.ua) ? (c = this.Qa, c = new Fd(this.i, this.count + 1, this.ua, Qb.a(t(c) ? c : vd, b), null)) : c = new Fd(this.i, this.count + 1, Qb.a(this.ua, b), vd, null);
  return c
};
n.toString = function() {
  return Ab(this)
};
n.J = function() {
  var a = r(this.Qa), b = this.ua;
  return t(t(b) ? b : a) ? new Ed(null, this.ua, r(a), null) : null
};
n.L = f("count");
n.S = function() {
  return J(this.ua)
};
n.Z = function() {
  return K(r(this))
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new Fd(b, this.count, this.ua, this.Qa, this.k)
};
n.s = f("i");
n.O = function() {
  return Gd
};
var Gd = new Fd(null, 0, null, vd, 0);
function Hd() {
  this.o = 0;
  this.f = 2097152
}
Hd.prototype.v = m(!1);
var Id = new Hd;
function Jd(a, b) {
  return ic(cc(b) ? P(a) === P(b) ? Rc(Tc, Xc.a(function(a) {
    return G.a(U.c(b, J(a), Id), J(M(a)))
  }, a)) : null : null)
}
function Kd(a, b) {
  var c = a.d;
  if(b instanceof Z) {
    a: {
      for(var d = c.length, e = b.Oa, g = 0;;) {
        if(d <= g) {
          c = -1;
          break a
        }
        var h = c[g];
        if(h instanceof Z && e === h.Oa) {
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
      if(b instanceof H) {
        a: {
          d = c.length;
          e = b.Ya;
          for(g = 0;;) {
            if(d <= g) {
              c = -1;
              break a
            }
            h = c[g];
            if(h instanceof H && e === h.Ya) {
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
                if(G.a(b, c[e])) {
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
function Ld(a, b, c) {
  this.d = a;
  this.n = b;
  this.q = c;
  this.o = 0;
  this.f = 32374990
}
n = Ld.prototype;
n.C = function() {
  return Lb(this)
};
n.ca = function() {
  return this.n < this.d.length - 2 ? new Ld(this.d, this.n + 2, this.q) : null
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Pb.a(b, this)
};
n.Y = function(a, b, c) {
  return Pb.c(b, c, this)
};
n.J = function() {
  return this
};
n.L = function() {
  return(this.d.length - this.n) / 2
};
n.S = function() {
  return new X(null, 2, 5, Y, [this.d[this.n], this.d[this.n + 1]], null)
};
n.Z = function() {
  return this.n < this.d.length - 2 ? new Ld(this.d, this.n + 2, this.q) : L
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new Ld(this.d, this.n, b)
};
n.s = f("q");
n.O = function() {
  return O(L, this.q)
};
function na(a, b, c, d) {
  this.i = a;
  this.h = b;
  this.d = c;
  this.k = d;
  this.o = 4;
  this.f = 16123663
}
n = na.prototype;
n.ib = function() {
  return new Md({}, this.d.length, za(this.d))
};
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = tc(this)
};
n.P = function(a, b) {
  return Ma.c(this, b, null)
};
n.Q = function(a, b, c) {
  a = Kd(this, b);
  return-1 === a ? c : this.d[a + 1]
};
n.La = function(a, b, c) {
  a = Kd(this, b);
  if(-1 === a) {
    if(this.h < Nd) {
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
      return new na(this.i, this.h + 1, e, null)
    }
    return db(Pa(gd(Od, this), b, c), this.i)
  }
  return c === this.d[a + 1] ? this : y ? (b = za(this.d), b[a + 1] = c, new na(this.i, this.h, b, null)) : null
};
n.Ob = function(a, b) {
  return-1 !== Kd(this, b)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.b = function(a) {
  return this.P(null, a)
};
n.a = function(a, b) {
  return this.Q(null, a, b)
};
n.K = function(a, b) {
  return dc(b) ? Pa(this, D.a(b, 0), D.a(b, 1)) : B.c(C, this, b)
};
n.toString = function() {
  return Ab(this)
};
n.J = function() {
  return 0 <= this.d.length - 2 ? new Ld(this.d, 0, null) : null
};
n.L = f("h");
n.v = function(a, b) {
  return Jd(this, b)
};
n.t = function(a, b) {
  return new na(b, this.h, this.d, this.k)
};
n.s = f("i");
n.O = function() {
  return db(Pd, this.i)
};
n.ab = function(a, b) {
  if(0 <= Kd(this, b)) {
    var c = this.d.length, d = c - 2;
    if(0 === d) {
      return Ea(this)
    }
    for(var d = Array(d), e = 0, g = 0;;) {
      if(e >= c) {
        return new na(this.i, this.h - 1, d, null)
      }
      if(G.a(b, this.d[e])) {
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
var Pd = new na(null, 0, [], null), Nd = 8;
function Qd(a) {
  for(var b = a.length, c = 0, d = pb(Pd);;) {
    if(c < b) {
      var e = c + 2, d = sb(d, a[c], a[c + 1]), c = e
    }else {
      return rb(d)
    }
  }
}
function Md(a, b, c) {
  this.fb = a;
  this.Ha = b;
  this.d = c;
  this.o = 56;
  this.f = 258
}
n = Md.prototype;
n.bb = function(a, b, c) {
  if(t(this.fb)) {
    a = Kd(this, b);
    if(-1 === a) {
      if(this.Ha + 2 <= 2 * Nd) {
        return this.Ha += 2, this.d.push(b), this.d.push(c), this
      }
      a = Rd.a ? Rd.a(this.Ha, this.d) : Rd.call(null, this.Ha, this.d);
      return sb(a, b, c)
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
n.Ma = function(a, b) {
  if(t(this.fb)) {
    if(b ? b.f & 2048 || b.Wc || (b.f ? 0 : x(Sa, b)) : x(Sa, b)) {
      return sb(this, uc.b ? uc.b(b) : uc.call(null, b), vc.b ? vc.b(b) : vc.call(null, b))
    }
    for(var c = r(b), d = this;;) {
      var e = J(c);
      if(t(e)) {
        c = M(c), d = sb(d, uc.b ? uc.b(e) : uc.call(null, e), vc.b ? vc.b(e) : vc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
n.Ta = function() {
  if(t(this.fb)) {
    return this.fb = !1, new na(null, pc((this.Ha - this.Ha % 2) / 2), this.d, null)
  }
  throw Error("persistent! called twice");
};
n.P = function(a, b) {
  return Ma.c(this, b, null)
};
n.Q = function(a, b, c) {
  if(t(this.fb)) {
    return a = Kd(this, b), -1 === a ? c : this.d[a + 1]
  }
  throw Error("lookup after persistent!");
};
n.L = function() {
  if(t(this.fb)) {
    return pc((this.Ha - this.Ha % 2) / 2)
  }
  throw Error("count after persistent!");
};
function Rd(a, b) {
  for(var c = pb(Od), d = 0;;) {
    if(d < a) {
      c = sb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Sd() {
  this.Da = !1
}
function Td(a, b) {
  return a === b ? !0 : Ac(a, b) ? !0 : y ? G.a(a, b) : null
}
var Ud = function() {
  function a(a, b, c, h, k) {
    a = za(a);
    a[b] = c;
    a[h] = k;
    return a
  }
  function b(a, b, c) {
    a = za(a);
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
  c.D = a;
  return c
}();
function Vd(a, b) {
  var c = Array(a.length - 2);
  fc(a, 0, c, 0, 2 * b);
  fc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var Wd = function() {
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
  c.sa = a;
  return c
}();
function Xd(a, b, c) {
  this.w = a;
  this.I = b;
  this.d = c
}
n = Xd.prototype;
n.wa = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = qc(this.I & h - 1);
  if(0 === (this.I & h)) {
    var l = qc(this.I);
    if(2 * l < this.d.length) {
      a = this.gb(a);
      b = a.d;
      g.Da = !0;
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
      a.I |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = Yd.wa(a, b + 5, c, d, e, g);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.I >>> d & 1) && (k[d] = null != this.d[e] ? Yd.wa(a, b + 5, I(this.d[e]), this.d[e], this.d[e + 1], g) : this.d[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Zd(a, l + 1, k)
    }
    return y ? (b = Array(2 * (l + 4)), fc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, fc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.Da = !0, a = this.gb(a), a.d = b, a.I |= h, a) : null
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.wa(a, b + 5, c, d, e, g), l === h ? this : Wd.p(this, a, 2 * k + 1, l)) : Td(d, l) ? e === h ? this : Wd.p(this, a, 2 * k + 1, e) : y ? (g.Da = !0, Wd.sa(this, a, 2 * k, null, 2 * k + 1, $d.$a ? $d.$a(a, b + 5, l, h, c, d, e) : $d.call(null, a, b + 5, l, h, c, d, e))) : null
};
n.pb = function() {
  return ae.b ? ae.b(this.d) : ae.call(null, this.d)
};
n.gb = function(a) {
  if(a === this.w) {
    return this
  }
  var b = qc(this.I), c = Array(0 > b ? 4 : 2 * (b + 1));
  fc(this.d, 0, c, 0, 2 * b);
  return new Xd(a, this.I, c)
};
n.qb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.I & d)) {
    return this
  }
  var e = qc(this.I & d - 1), g = this.d[2 * e], h = this.d[2 * e + 1];
  return null == g ? (a = h.qb(a + 5, b, c), a === h ? this : null != a ? new Xd(null, this.I, Ud.c(this.d, 2 * e + 1, a)) : this.I === d ? null : y ? new Xd(null, this.I ^ d, Vd(this.d, e)) : null) : Td(c, g) ? new Xd(null, this.I ^ d, Vd(this.d, e)) : y ? this : null
};
n.va = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = qc(this.I & g - 1);
  if(0 === (this.I & g)) {
    var k = qc(this.I);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = Yd.va(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.I >>> c & 1) && (h[c] = null != this.d[d] ? Yd.va(a + 5, I(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Zd(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    fc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    fc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.Da = !0;
    return new Xd(null, this.I | g, a)
  }
  k = this.d[2 * h];
  g = this.d[2 * h + 1];
  return null == k ? (k = g.va(a + 5, b, c, d, e), k === g ? this : new Xd(null, this.I, Ud.c(this.d, 2 * h + 1, k))) : Td(c, k) ? d === g ? this : new Xd(null, this.I, Ud.c(this.d, 2 * h + 1, d)) : y ? (e.Da = !0, new Xd(null, this.I, Ud.D(this.d, 2 * h, null, 2 * h + 1, $d.sa ? $d.sa(a + 5, k, g, b, c, d) : $d.call(null, a + 5, k, g, b, c, d)))) : null
};
n.Pa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.I & e)) {
    return d
  }
  var g = qc(this.I & e - 1), e = this.d[2 * g], g = this.d[2 * g + 1];
  return null == e ? g.Pa(a + 5, b, c, d) : Td(c, e) ? g : y ? d : null
};
var Yd = new Xd(null, 0, []);
function Zd(a, b, c) {
  this.w = a;
  this.h = b;
  this.d = c
}
n = Zd.prototype;
n.wa = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.d[h];
  if(null == k) {
    return a = Wd.p(this, a, h, Yd.wa(a, b + 5, c, d, e, g)), a.h += 1, a
  }
  b = k.wa(a, b + 5, c, d, e, g);
  return b === k ? this : Wd.p(this, a, h, b)
};
n.pb = function() {
  return be.b ? be.b(this.d) : be.call(null, this.d)
};
n.gb = function(a) {
  return a === this.w ? this : new Zd(a, this.h, za(this.d))
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
                d = new Xd(null, h, b);
                break a
              }
            }
            d = void 0
          }
        }else {
          d = new Zd(null, this.h - 1, Ud.c(this.d, d, a))
        }
      }else {
        d = y ? new Zd(null, this.h, Ud.c(this.d, d, a)) : null
      }
    }
    return d
  }
  return this
};
n.va = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.d[g];
  if(null == h) {
    return new Zd(null, this.h + 1, Ud.c(this.d, g, Yd.va(a + 5, b, c, d, e)))
  }
  a = h.va(a + 5, b, c, d, e);
  return a === h ? this : new Zd(null, this.h, Ud.c(this.d, g, a))
};
n.Pa = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.Pa(a + 5, b, c, d) : d
};
function ce(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Td(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function de(a, b, c, d) {
  this.w = a;
  this.Ga = b;
  this.h = c;
  this.d = d
}
n = de.prototype;
n.wa = function(a, b, c, d, e, g) {
  if(c === this.Ga) {
    b = ce(this.d, this.h, d);
    if(-1 === b) {
      if(this.d.length > 2 * this.h) {
        return a = Wd.sa(this, a, 2 * this.h, d, 2 * this.h + 1, e), g.Da = !0, a.h += 1, a
      }
      c = this.d.length;
      b = Array(c + 2);
      fc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.Da = !0;
      g = this.h + 1;
      a === this.w ? (this.d = b, this.h = g, a = this) : a = new de(this.w, this.Ga, g, b);
      return a
    }
    return this.d[b + 1] === e ? this : Wd.p(this, a, b + 1, e)
  }
  return(new Xd(a, 1 << (this.Ga >>> b & 31), [null, this, null, null])).wa(a, b, c, d, e, g)
};
n.pb = function() {
  return ae.b ? ae.b(this.d) : ae.call(null, this.d)
};
n.gb = function(a) {
  if(a === this.w) {
    return this
  }
  var b = Array(2 * (this.h + 1));
  fc(this.d, 0, b, 0, 2 * this.h);
  return new de(a, this.Ga, this.h, b)
};
n.qb = function(a, b, c) {
  a = ce(this.d, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : y ? new de(null, this.Ga, this.h - 1, Vd(this.d, pc((a - a % 2) / 2))) : null
};
n.va = function(a, b, c, d, e) {
  return b === this.Ga ? (a = ce(this.d, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), fc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.Da = !0, new de(null, this.Ga, this.h + 1, b)) : G.a(this.d[a], d) ? this : new de(null, this.Ga, this.h, Ud.c(this.d, a + 1, d))) : (new Xd(null, 1 << (this.Ga >>> a & 31), [null, this])).va(a, b, c, d, e)
};
n.Pa = function(a, b, c, d) {
  a = ce(this.d, this.h, c);
  return 0 > a ? d : Td(c, this.d[a]) ? this.d[a + 1] : y ? d : null
};
var $d = function() {
  function a(a, b, c, h, k, l, s) {
    var v = I(c);
    if(v === k) {
      return new de(null, v, 2, [c, h, l, s])
    }
    var u = new Sd;
    return Yd.wa(a, b, v, c, h, u).wa(a, b, k, l, s, u)
  }
  function b(a, b, c, h, k, l) {
    var s = I(b);
    if(s === h) {
      return new de(null, s, 2, [b, c, k, l])
    }
    var v = new Sd;
    return Yd.va(a, s, b, c, v).va(a, h, k, l, v)
  }
  var c = null, c = function(c, e, g, h, k, l, s) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, s)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.sa = b;
  c.$a = a;
  return c
}();
function ee(a, b, c, d, e) {
  this.i = a;
  this.xa = b;
  this.n = c;
  this.l = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860
}
n = ee.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Pb.a(b, this)
};
n.Y = function(a, b, c) {
  return Pb.c(b, c, this)
};
n.J = function() {
  return this
};
n.S = function() {
  return null == this.l ? new X(null, 2, 5, Y, [this.xa[this.n], this.xa[this.n + 1]], null) : J(this.l)
};
n.Z = function() {
  return null == this.l ? ae.c ? ae.c(this.xa, this.n + 2, null) : ae.call(null, this.xa, this.n + 2, null) : ae.c ? ae.c(this.xa, this.n, M(this.l)) : ae.call(null, this.xa, this.n, M(this.l))
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new ee(b, this.xa, this.n, this.l, this.k)
};
n.s = f("i");
n.O = function() {
  return O(L, this.i)
};
var ae = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new ee(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(t(h) && (h = h.pb(), t(h))) {
            return new ee(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new ee(null, a, b, c, null)
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
function fe(a, b, c, d, e) {
  this.i = a;
  this.xa = b;
  this.n = c;
  this.l = d;
  this.k = e;
  this.o = 0;
  this.f = 32374860
}
n = fe.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Pb.a(b, this)
};
n.Y = function(a, b, c) {
  return Pb.c(b, c, this)
};
n.J = function() {
  return this
};
n.S = function() {
  return J(this.l)
};
n.Z = function() {
  return be.p ? be.p(null, this.xa, this.n, M(this.l)) : be.call(null, null, this.xa, this.n, M(this.l))
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new fe(b, this.xa, this.n, this.l, this.k)
};
n.s = f("i");
n.O = function() {
  return O(L, this.i)
};
var be = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(t(k) && (k = k.pb(), t(k))) {
            return new fe(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new fe(a, b, c, h, null)
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
function ge(a, b, c, d, e, g) {
  this.i = a;
  this.h = b;
  this.root = c;
  this.ea = d;
  this.la = e;
  this.k = g;
  this.o = 4;
  this.f = 16123663
}
n = ge.prototype;
n.ib = function() {
  return new he({}, this.root, this.h, this.ea, this.la)
};
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = tc(this)
};
n.P = function(a, b) {
  return Ma.c(this, b, null)
};
n.Q = function(a, b, c) {
  return null == b ? this.ea ? this.la : c : null == this.root ? c : y ? this.root.Pa(0, I(b), b, c) : null
};
n.La = function(a, b, c) {
  if(null == b) {
    return this.ea && c === this.la ? this : new ge(this.i, this.ea ? this.h : this.h + 1, this.root, !0, c, null)
  }
  a = new Sd;
  b = (null == this.root ? Yd : this.root).va(0, I(b), b, c, a);
  return b === this.root ? this : new ge(this.i, a.Da ? this.h + 1 : this.h, b, this.ea, this.la, null)
};
n.Ob = function(a, b) {
  return null == b ? this.ea : null == this.root ? !1 : y ? this.root.Pa(0, I(b), b, gc) !== gc : null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.b = function(a) {
  return this.P(null, a)
};
n.a = function(a, b) {
  return this.Q(null, a, b)
};
n.K = function(a, b) {
  return dc(b) ? Pa(this, D.a(b, 0), D.a(b, 1)) : B.c(C, this, b)
};
n.toString = function() {
  return Ab(this)
};
n.J = function() {
  if(0 < this.h) {
    var a = null != this.root ? this.root.pb() : null;
    return this.ea ? N(new X(null, 2, 5, Y, [null, this.la], null), a) : a
  }
  return null
};
n.L = f("h");
n.v = function(a, b) {
  return Jd(this, b)
};
n.t = function(a, b) {
  return new ge(b, this.h, this.root, this.ea, this.la, this.k)
};
n.s = f("i");
n.O = function() {
  return db(Od, this.i)
};
n.ab = function(a, b) {
  if(null == b) {
    return this.ea ? new ge(this.i, this.h - 1, this.root, !1, null, null) : this
  }
  if(null == this.root) {
    return this
  }
  if(y) {
    var c = this.root.qb(0, I(b), b);
    return c === this.root ? this : new ge(this.i, this.h - 1, c, this.ea, this.la, null)
  }
  return null
};
var Od = new ge(null, 0, null, !1, null, 0);
function Sb(a, b) {
  for(var c = a.length, d = 0, e = pb(Od);;) {
    if(d < c) {
      var g = d + 1, e = e.bb(null, a[d], b[d]), d = g
    }else {
      return rb(e)
    }
  }
}
function he(a, b, c, d, e) {
  this.w = a;
  this.root = b;
  this.count = c;
  this.ea = d;
  this.la = e;
  this.o = 56;
  this.f = 258
}
n = he.prototype;
n.bb = function(a, b, c) {
  return ie(this, b, c)
};
n.Ma = function(a, b) {
  var c;
  a: {
    if(this.w) {
      if(b ? b.f & 2048 || b.Wc || (b.f ? 0 : x(Sa, b)) : x(Sa, b)) {
        c = ie(this, uc.b ? uc.b(b) : uc.call(null, b), vc.b ? vc.b(b) : vc.call(null, b));
        break a
      }
      c = r(b);
      for(var d = this;;) {
        var e = J(c);
        if(t(e)) {
          c = M(c), d = ie(d, uc.b ? uc.b(e) : uc.call(null, e), vc.b ? vc.b(e) : vc.call(null, e))
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
n.Ta = function() {
  var a;
  if(this.w) {
    this.w = null, a = new ge(null, this.count, this.root, this.ea, this.la, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
n.P = function(a, b) {
  return null == b ? this.ea ? this.la : null : null == this.root ? null : this.root.Pa(0, I(b), b)
};
n.Q = function(a, b, c) {
  return null == b ? this.ea ? this.la : c : null == this.root ? c : this.root.Pa(0, I(b), b, c)
};
n.L = function() {
  if(this.w) {
    return this.count
  }
  throw Error("count after persistent!");
};
function ie(a, b, c) {
  if(a.w) {
    if(null == b) {
      a.la !== c && (a.la = c), a.ea || (a.count += 1, a.ea = !0)
    }else {
      var d = new Sd;
      b = (null == a.root ? Yd : a.root).wa(a.w, 0, I(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Da && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var je = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = r(a), e = pb(Od);;) {
      if(b) {
        a = M(M(b));
        var g = J(b), b = J(M(b)), e = sb(e, g, b), b = a
      }else {
        return rb(e)
      }
    }
  }
  a.m = 0;
  a.g = function(a) {
    a = r(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function ke(a, b) {
  this.$ = a;
  this.q = b;
  this.o = 0;
  this.f = 32374988
}
n = ke.prototype;
n.C = function() {
  return Lb(this)
};
n.ca = function() {
  var a = this.$, a = (a ? a.f & 128 || a.wb || (a.f ? 0 : x(Ka, a)) : x(Ka, a)) ? this.$.ca(null) : M(this.$);
  return null == a ? null : new ke(a, this.q)
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Pb.a(b, this)
};
n.Y = function(a, b, c) {
  return Pb.c(b, c, this)
};
n.J = function() {
  return this
};
n.S = function() {
  return this.$.S(null).ec()
};
n.Z = function() {
  var a = this.$, a = (a ? a.f & 128 || a.wb || (a.f ? 0 : x(Ka, a)) : x(Ka, a)) ? this.$.ca(null) : M(this.$);
  return null != a ? new ke(a, this.q) : L
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new ke(this.$, b)
};
n.s = f("q");
n.O = function() {
  return O(L, this.q)
};
function le(a) {
  return(a = r(a)) ? new ke(a, null) : null
}
function uc(a) {
  return Ta(a)
}
function me(a, b) {
  this.$ = a;
  this.q = b;
  this.o = 0;
  this.f = 32374988
}
n = me.prototype;
n.C = function() {
  return Lb(this)
};
n.ca = function() {
  var a = this.$, a = (a ? a.f & 128 || a.wb || (a.f ? 0 : x(Ka, a)) : x(Ka, a)) ? this.$.ca(null) : M(this.$);
  return null == a ? null : new me(a, this.q)
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Pb.a(b, this)
};
n.Y = function(a, b, c) {
  return Pb.c(b, c, this)
};
n.J = function() {
  return this
};
n.S = function() {
  return this.$.S(null).fc()
};
n.Z = function() {
  var a = this.$, a = (a ? a.f & 128 || a.wb || (a.f ? 0 : x(Ka, a)) : x(Ka, a)) ? this.$.ca(null) : M(this.$);
  return null != a ? new me(a, this.q) : L
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new me(this.$, b)
};
n.s = f("q");
n.O = function() {
  return O(L, this.q)
};
function ne(a) {
  return(a = r(a)) ? new me(a, null) : null
}
function vc(a) {
  return Ua(a)
}
var oe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return t(Sc(Tc, a)) ? B.a(function(a, b) {
      return Qb.a(t(a) ? a : Pd, b)
    }, a) : null
  }
  a.m = 0;
  a.g = function(a) {
    a = r(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function pe(a, b, c) {
  this.i = a;
  this.Wa = b;
  this.k = c;
  this.o = 4;
  this.f = 15077647
}
n = pe.prototype;
n.ib = function() {
  return new qe(pb(this.Wa))
};
n.C = function() {
  var a = this.k;
  if(null != a) {
    return a
  }
  a: {
    for(var a = 0, b = r(this);;) {
      if(b) {
        var c = J(b), a = (a + I(c)) % 4503599627370496, b = M(b)
      }else {
        break a
      }
    }
    a = void 0
  }
  return this.k = a
};
n.P = function(a, b) {
  return Ma.c(this, b, null)
};
n.Q = function(a, b, c) {
  return Oa(this.Wa, b) ? b : c
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.b = function(a) {
  return this.P(null, a)
};
n.a = function(a, b) {
  return this.Q(null, a, b)
};
n.K = function(a, b) {
  return new pe(this.i, V.c(this.Wa, b, null), null)
};
n.toString = function() {
  return Ab(this)
};
n.J = function() {
  return le(this.Wa)
};
n.uc = function(a, b) {
  return new pe(this.i, Ra(this.Wa, b), null)
};
n.L = function() {
  return Da(this.Wa)
};
n.v = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.f & 4096 || b.yd ? !0 : b.f ? !1 : x(Va, b) : x(Va, b)) && P(c) === P(b) && Rc(function(a) {
    return jc(c, a)
  }, b)
};
n.t = function(a, b) {
  return new pe(b, this.Wa, this.k)
};
n.s = f("i");
n.O = function() {
  return O(re, this.i)
};
var re = new pe(null, Pd, 0);
function se(a) {
  var b = a.length;
  if(b <= Nd) {
    for(var c = 0, d = pb(Pd);;) {
      if(c < b) {
        var e = c + 1, d = sb(d, a[c], null), c = e
      }else {
        return new pe(null, rb(d), null)
      }
    }
  }else {
    for(c = 0, d = pb(re);;) {
      if(c < b) {
        e = c + 2, d = qb(d, a[c]), c = e
      }else {
        return rb(d)
      }
    }
  }
}
function qe(a) {
  this.Ja = a;
  this.f = 259;
  this.o = 136
}
n = qe.prototype;
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ma.c(this.Ja, c, gc) === gc ? null : c;
      case 3:
        return Ma.c(this.Ja, c, gc) === gc ? d : c
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.b = function(a) {
  return Ma.c(this.Ja, a, gc) === gc ? null : a
};
n.a = function(a, b) {
  return Ma.c(this.Ja, a, gc) === gc ? b : a
};
n.P = function(a, b) {
  return Ma.c(this, b, null)
};
n.Q = function(a, b, c) {
  return Ma.c(this.Ja, b, gc) === gc ? c : b
};
n.L = function() {
  return P(this.Ja)
};
n.Ma = function(a, b) {
  this.Ja = sb(this.Ja, b, null);
  return this
};
n.Ta = function() {
  return new pe(null, rb(this.Ja), null)
};
var te = function() {
  function a(a, b, c) {
    return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var s = null;
      3 < arguments.length && (s = q(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, s)
    }
    function c(a, d, e, l) {
      return B.c(function(c, d) {
        return b.c(a, c, d)
      }, b.c(a, d, e), l)
    }
    a.m = 3;
    a.g = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var l = J(a);
      a = K(a);
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
        return c.e(b, e, g, q(arguments, 3))
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
}();
function ue(a, b, c, d, e) {
  this.i = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.k = e;
  this.o = 0;
  this.f = 32375006
}
n = ue.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Lb(this)
};
n.ca = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ue(this.i, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ue(this.i, this.start + this.step, this.end, this.step, null) : null
};
n.K = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Ab(this)
};
n.X = function(a, b) {
  return Hb.a(this, b)
};
n.Y = function(a, b, c) {
  return Hb.c(this, b, c)
};
n.J = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null
};
n.L = function() {
  return w(jb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
n.S = f("start");
n.Z = function() {
  return null != jb(this) ? new ue(this.i, this.start + this.step, this.end, this.step, null) : L
};
n.v = function(a, b) {
  return Nb(this, b)
};
n.t = function(a, b) {
  return new ue(b, this.start, this.end, this.step, this.k)
};
n.s = f("i");
n.ia = function(a, b) {
  if(b < Da(this)) {
    return this.start + b * this.step
  }
  if(this.start > this.end && 0 === this.step) {
    return this.start
  }
  throw Error("Index out of bounds");
};
n.na = function(a, b, c) {
  return b < Da(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c
};
n.O = function() {
  return O(L, this.i)
};
var ve = function() {
  function a(a, b, c) {
    return new ue(null, a, b, c, null)
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
  e.b = c;
  e.a = b;
  e.c = a;
  return e
}(), we = function() {
  function a(a, b) {
    for(;;) {
      if(r(b) && 0 < a) {
        var c = a - 1, h = M(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(r(a)) {
        a = M(a)
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
}(), xe = function() {
  function a(a, b) {
    we.a(a, b);
    return b
  }
  function b(a) {
    we.b(a);
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
function ye(a) {
  var b = ze.exec(a);
  return G.a(J(b), a) ? 1 === P(b) ? J(b) : wd(b) : null
}
function Ae(a) {
  a = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(a);
  a = null == a ? null : 1 === P(a) ? J(a) : wd(a);
  T.c(a, 0, null);
  T.c(a, 1, null);
  T.c(a, 2, null)
}
function Be(a, b, c, d, e, g, h) {
  E(a, c);
  r(h) && (b.c ? b.c(J(h), a, g) : b.call(null, J(h), a, g));
  c = M(h);
  for(h = sa.b(g);c && (null == h || 0 !== h);) {
    E(a, d), b.c ? b.c(J(c), a, g) : b.call(null, J(c), a, g), c = M(c), h -= 1
  }
  t(sa.b(g)) && (E(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
  return E(a, e)
}
var Ce = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = q(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = r(b), g = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = g.ia(null, k);
        E(a, l);
        k += 1
      }else {
        if(e = r(e)) {
          g = e, ec(g) ? (e = vb(g), h = wb(g), g = e, l = P(e), e = h, h = l) : (l = J(g), E(a, l), e = M(g), g = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.m = 1;
  a.g = function(a) {
    var d = J(a);
    a = K(a);
    return b(d, a)
  };
  a.e = b;
  return a
}(), De = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Ee(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return De[a]
  })), A('"')].join("")
}
var Ge = function Fe(b, c, d) {
  if(null == b) {
    return E(c, "nil")
  }
  if(void 0 === b) {
    return E(c, "#\x3cundefined\x3e")
  }
  if(y) {
    t(function() {
      var c = U.a(d, qa);
      return t(c) ? (c = b ? b.f & 131072 || b.Xc ? !0 : b.f ? !1 : x($a, b) : x($a, b)) ? Wb(b) : c : c
    }()) && (E(c, "^"), Fe(Wb(b), c, d), E(c, " "));
    if(null == b) {
      return E(c, "nil")
    }
    if(b.Fa) {
      return b.Na(b, c, d)
    }
    if(b && (b.f & 2147483648 || b.R)) {
      return b.B(null, c, d)
    }
    if(xa(b) === Boolean || "number" === typeof b) {
      return E(c, "" + A(b))
    }
    if(b instanceof Array) {
      return Be(c, Fe, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if("string" == typeof b) {
      return t(pa.b(d)) ? E(c, Ee(b)) : E(c, b)
    }
    if(Ub(b)) {
      return Ce.e(c, q(["#\x3c", "" + A(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + A(b);;) {
          if(P(d) < c) {
            d = [A("0"), A(d)].join("")
          }else {
            return d
          }
        }
      };
      return Ce.e(c, q(['#inst "', "" + A(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return b instanceof RegExp ? Ce.e(c, q(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.R || (b.f ? 0 : x(nb, b)) : x(nb, b)) ? ob(b, c, d) : y ? Ce.e(c, q(["#\x3c", "" + A(b), "\x3e"], 0)) : null
  }
  return null
};
function He(a) {
  var b = ma();
  if($b(a)) {
    b = ""
  }else {
    var c = A, d = new ia;
    a: {
      var e = new zb(d);
      Ge(J(a), e, b);
      a = r(M(a));
      for(var g = null, h = 0, k = 0;;) {
        if(k < h) {
          var l = g.ia(null, k);
          E(e, " ");
          Ge(l, e, b);
          k += 1
        }else {
          if(a = r(a)) {
            g = a, ec(g) ? (a = vb(g), h = wb(g), g = a, l = P(a), a = h, h = l) : (l = J(g), E(e, " "), Ge(l, e, b), a = M(g), g = null, h = 0), k = 0
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
var Ie = function() {
  function a(a) {
    var c = null;
    0 < arguments.length && (c = q(Array.prototype.slice.call(arguments, 0), 0));
    return He(c)
  }
  a.m = 0;
  a.g = function(a) {
    a = r(a);
    return He(a)
  };
  a.e = function(a) {
    return He(a)
  };
  return a
}(), Je = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    a = He(a);
    ka.b ? ka.b(a) : ka.call(null, a);
    t(la) ? (a = ma(), ka.b ? ka.b("\n") : ka.call(null, "\n"), a = (U.a(a, oa), null)) : a = null;
    return a
  }
  a.m = 0;
  a.g = function(a) {
    a = r(a);
    return b(a)
  };
  a.e = b;
  return a
}();
ke.prototype.R = !0;
ke.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
Gb.prototype.R = !0;
Gb.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
Ad.prototype.R = !0;
Ad.prototype.B = function(a, b, c) {
  return Be(b, Ge, "[", " ", "]", c, this)
};
Gc.prototype.R = !0;
Gc.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
na.prototype.R = !0;
na.prototype.B = function(a, b, c) {
  return Be(b, function(a) {
    return Be(b, Ge, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
Fd.prototype.R = !0;
Fd.prototype.B = function(a, b, c) {
  return Be(b, Ge, "#queue [", " ", "]", c, r(this))
};
Bc.prototype.R = !0;
Bc.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
Mb.prototype.R = !0;
Mb.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
ee.prototype.R = !0;
ee.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
yd.prototype.R = !0;
yd.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
ge.prototype.R = !0;
ge.prototype.B = function(a, b, c) {
  return Be(b, function(a) {
    return Be(b, Ge, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
pe.prototype.R = !0;
pe.prototype.B = function(a, b, c) {
  return Be(b, Ge, "#{", " ", "}", c, this)
};
X.prototype.R = !0;
X.prototype.B = function(a, b, c) {
  return Be(b, Ge, "[", " ", "]", c, this)
};
wc.prototype.R = !0;
wc.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
Ld.prototype.R = !0;
Ld.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
xc.prototype.R = !0;
xc.prototype.B = function(a, b) {
  return E(b, "()")
};
zc.prototype.R = !0;
zc.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
ue.prototype.R = !0;
ue.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
fe.prototype.R = !0;
fe.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
me.prototype.R = !0;
me.prototype.B = function(a, b, c) {
  return Be(b, Ge, "(", " ", ")", c, this)
};
X.prototype.ub = !0;
X.prototype.vb = function(a, b) {
  return lc.a(this, b)
};
Ad.prototype.ub = !0;
Ad.prototype.vb = function(a, b) {
  return lc.a(this, b)
};
Z.prototype.ub = !0;
Z.prototype.vb = function(a, b) {
  return Bb(this, b)
};
H.prototype.ub = !0;
H.prototype.vb = function(a, b) {
  return Bb(this, b)
};
function Ke(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Hd = c;
  this.Id = d;
  this.f = 2153938944;
  this.o = 2
}
n = Ke.prototype;
n.C = function() {
  return this[ba] || (this[ba] = ++ca)
};
n.B = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  Ge(this.state, b, c);
  return E(b, "\x3e")
};
n.s = f("i");
n.Uc = f("state");
n.v = function(a, b) {
  return this === b
};
var Me = function() {
  function a(a) {
    return new Ke(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = q(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = hc(c) ? W.a(je, c) : c, e = U.a(d, Le), d = U.a(d, qa);
      return new Ke(a, d, e, null)
    }
    a.m = 1;
    a.g = function(a) {
      var c = J(a);
      a = K(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, q(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b
}();
function Ne(a) {
  this.rc = a;
  this.o = 0;
  this.f = 2153775104
}
Ne.prototype.C = function() {
  return da(Ie.e(q([this], 0)))
};
Ne.prototype.B = function(a, b) {
  return E(b, [A('#uuid "'), A(this.rc), A('"')].join(""))
};
Ne.prototype.v = function(a, b) {
  return b instanceof Ne && this.rc === b.rc
};
var ra = new Z(null, "dup", "dup"), Db = new Z(null, "default", "default"), Oe = new Z(null, "-", "-"), Pe = new Z(null, "occurs-check", "occurs-check"), Qe = new Z(null, "prefixc", "prefixc"), Se = new Z(null, "reify-vars", "reify-vars"), Te = new Z(null, "eset", "eset"), Ue = new Z("cljs.core.logic", "fd", "cljs.core.logic/fd"), Ve = new Z("cljs.core.logic", "subst", "cljs.core.logic/subst"), We = new Z("cljs.core.logic", "no-prop", "cljs.core.logic/no-prop"), Xe = new Z("cljs.core.logic", "id", 
"cljs.core.logic/id"), oa = new Z(null, "flush-on-newline", "flush-on-newline"), Ye = new Z("cljs.core.logic", "strategy", "cljs.core.logic/strategy"), Ze = new Z(null, "end-column", "end-column"), $e = new Z(null, "f", "f"), af = new Z("cljs.core.logic", "ff", "cljs.core.logic/ff"), bf = new Z(null, "ansv*", "ansv*"), cf = new Z(null, "column", "column"), df = new Z(null, "n", "n"), ef = new Z(null, "cache", "cache"), sa = new Z(null, "print-length", "print-length"), ff = new Z("cljs.core.logic", 
"root", "cljs.core.logic/root"), y = new Z(null, "else", "else"), pa = new Z(null, "readably", "readably"), Le = new Z(null, "validator", "validator"), qa = new Z(null, "meta", "meta"), gf = new Z(null, "v", "v"), hf = new Z("cljs.core.logic", "unbound", "cljs.core.logic/unbound"), jf = new Z(null, "line", "line"), kf = new Z(null, "end-line", "end-line"), lf = new Z(null, "doms", "doms"), mf = new Z(null, "db", "db");
var nf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = q(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e)
  }
  function b(a, b) {
    throw Error(W.a(A, b));
  }
  a.m = 1;
  a.g = function(a) {
    J(a);
    a = K(a);
    return b(0, a)
  };
  a.e = b;
  return a
}();
Ae("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
Ae("([-+]?[0-9]+)/([0-9]+)");
Ae("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
Ae("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
Ae("[0-9A-Fa-f]{2}");
Ae("[0-9A-Fa-f]{4}");
function of(a) {
  if(G.a(3, P(a))) {
    return a
  }
  if(3 < P(a)) {
    return sc.c(a, 0, 3)
  }
  if(y) {
    for(a = new ia(a);;) {
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
var pf = function() {
  var a = new X(null, 13, 5, Y, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new X(null, 13, 5, Y, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return U.a(t(d) ? b : a, c)
  }
}(), ze = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function qf(a) {
  a = parseInt(a);
  return w(isNaN(a)) ? a : null
}
function rf(a, b, c, d) {
  a <= b && b <= c || nf.e(null, q([[A(d), A(" Failed:  "), A(a), A("\x3c\x3d"), A(b), A("\x3c\x3d"), A(c)].join("")], 0));
  return b
}
function sf(a) {
  var b = ye(a);
  T.c(b, 0, null);
  var c = T.c(b, 1, null), d = T.c(b, 2, null), e = T.c(b, 3, null), g = T.c(b, 4, null), h = T.c(b, 5, null), k = T.c(b, 6, null), l = T.c(b, 7, null), s = T.c(b, 8, null), v = T.c(b, 9, null), u = T.c(b, 10, null);
  if(w(b)) {
    return nf.e(null, q([[A("Unrecognized date/time syntax: "), A(a)].join("")], 0))
  }
  a = qf(c);
  var b = function() {
    var a = qf(d);
    return t(a) ? a : 1
  }(), c = function() {
    var a = qf(e);
    return t(a) ? a : 1
  }(), F = function() {
    var a = qf(g);
    return t(a) ? a : 0
  }(), Q = function() {
    var a = qf(h);
    return t(a) ? a : 0
  }(), R = function() {
    var a = qf(k);
    return t(a) ? a : 0
  }(), S = function() {
    var a = qf(of(l));
    return t(a) ? a : 0
  }(), s = (G.a(s, "-") ? -1 : 1) * (60 * function() {
    var a = qf(v);
    return t(a) ? a : 0
  }() + function() {
    var a = qf(u);
    return t(a) ? a : 0
  }());
  return new X(null, 8, 5, Y, [a, rf(1, b, 12, "timestamp month field must be in range 1..12"), rf(1, c, pf.a ? pf.a(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : pf.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), rf(0, F, 23, "timestamp hour field must be in range 0..23"), rf(0, Q, 59, "timestamp minute field must be in range 0..59"), rf(0, 
  R, G.a(Q, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), rf(0, S, 999, "timestamp millisecond field must be in range 0..999"), s], null)
}
Me.b(new na(null, 3, ["inst", function(a) {
  var b;
  if("string" === typeof a) {
    if(b = sf(a), t(b)) {
      a = T.c(b, 0, null);
      var c = T.c(b, 1, null), d = T.c(b, 2, null), e = T.c(b, 3, null), g = T.c(b, 4, null), h = T.c(b, 5, null), k = T.c(b, 6, null);
      b = T.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, g, h, k) - 6E4 * b)
    }else {
      b = nf.e(null, q([[A("Unrecognized date/time syntax: "), A(a)].join("")], 0))
    }
  }else {
    b = nf.e(null, q(["Instance literal expects a string for its timestamp."], 0))
  }
  return b
}, "uuid", function(a) {
  return"string" === typeof a ? new Ne(a) : nf.e(null, q(["UUID literal expects a string as its representation."], 0))
}, "queue", function(a) {
  return dc(a) ? gd(Gd, a) : nf.e(null, q(["Queue literal expects a vector for its elements."], 0))
}], null));
Me.b(null);
function tf(a, b) {
  var c = W.c(te, a, b);
  return N(c, dd(Uc(function(a) {
    return c === a
  }), b))
}
var uf = function() {
  function a(a, b) {
    return P(a) < P(b) ? B.c(Qb, b, a) : B.c(Qb, a, b)
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = q(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l)
    }
    function b(a, c, d) {
      a = tf(P, Qb.e(d, c, q([a], 0)));
      return B.c(gd, J(a), K(a))
    }
    a.m = 2;
    a.g = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 0:
        return re;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.j = function() {
    return re
  };
  b.b = aa();
  b.a = a;
  b.e = c.e;
  return b
}(), vf = function() {
  function a(a, b) {
    return P(a) < P(b) ? B.c(function(a, c) {
      return jc(b, c) ? Xb.a(a, c) : a
    }, a, a) : B.c(Xb, a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      return B.c(b, a, Qb.a(e, d))
    }
    a.m = 2;
    a.g = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
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
        return c.e(b, e, q(arguments, 2))
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
var wf = {}, xf, yf, zf;
function Af(a, b, c) {
  if(a ? a.lb : a) {
    return a.lb(a, b, c)
  }
  var d;
  d = Af[p(null == a ? null : a)];
  if(!d && (d = Af._, !d)) {
    throw z("IUnifyTerms.-unify-terms", a);
  }
  return d.call(null, a, b, c)
}
function Bf(a, b, c) {
  if(a ? a.Lc : a) {
    return a.Lc(0, b, c)
  }
  var d;
  d = Bf[p(null == a ? null : a)];
  if(!d && (d = Bf._, !d)) {
    throw z("IUnifyWithNil.-unify-with-nil", a);
  }
  return d.call(null, a, b, c)
}
function Cf(a, b, c) {
  if(a ? a.Mc : a) {
    return a.Mc(0, b, c)
  }
  var d;
  d = Cf[p(null == a ? null : a)];
  if(!d && (d = Cf._, !d)) {
    throw z("IUnifyWithObject.-unify-with-object", a);
  }
  return d.call(null, a, b, c)
}
function Df(a, b, c) {
  if(a ? a.Nc : a) {
    return a.Nc(0, b, c)
  }
  var d;
  d = Df[p(null == a ? null : a)];
  if(!d && (d = Df._, !d)) {
    throw z("IUnifyWithSequential.-unify-with-seq", a);
  }
  return d.call(null, a, b, c)
}
function Ef(a, b, c) {
  if(a ? a.mb : a) {
    return a.mb(a, b, c)
  }
  var d;
  d = Ef[p(null == a ? null : a)];
  if(!d && (d = Ef._, !d)) {
    throw z("IUnifyWithMap.-unify-with-map", a);
  }
  return d.call(null, a, b, c)
}
function Ff(a, b) {
  if(a ? a.Dc : a) {
    return a.Dc(0, b)
  }
  var c;
  c = Ff[p(null == a ? null : a)];
  if(!c && (c = Ff._, !c)) {
    throw z("IReifyTerm.-reify-term", a);
  }
  return c.call(null, a, b)
}
function Gf(a, b) {
  if(a ? a.eb : a) {
    return a.eb(a, b)
  }
  var c;
  c = Gf[p(null == a ? null : a)];
  if(!c && (c = Gf._, !c)) {
    throw z("IWalkTerm.-walk-term", a);
  }
  return c.call(null, a, b)
}
function Hf(a, b, c) {
  if(a ? a.Cc : a) {
    return a.Cc(0, b, c)
  }
  var d;
  d = Hf[p(null == a ? null : a)];
  if(!d && (d = Hf._, !d)) {
    throw z("IOccursCheckTerm.-occurs-check-term", a);
  }
  return d.call(null, a, b, c)
}
function If(a, b) {
  if(a ? a.Ua : a) {
    return a.Ua(a, b)
  }
  var c;
  c = If[p(null == a ? null : a)];
  if(!c && (c = If._, !c)) {
    throw z("IBind.-bind", a);
  }
  return c.call(null, a, b)
}
var Jf = {};
function Kf(a, b) {
  if(a ? a.cb : a) {
    return a.cb(a, b)
  }
  var c;
  c = Kf[p(null == a ? null : a)];
  if(!c && (c = Kf._, !c)) {
    throw z("IMPlus.-mplus", a);
  }
  return c.call(null, a, b)
}
var Lf = {};
function Mf(a) {
  if(a ? a.ad : a) {
    return a.ad(a)
  }
  var b;
  b = Mf[p(null == a ? null : a)];
  if(!b && (b = Mf._, !b)) {
    throw z("IMemberCount.-member-count", a);
  }
  return b.call(null, a)
}
var Nf = {}, Of, Pf = ve.b(100);
a: {
  for(var Qf = Xc.c(Vc.a(Fb, A), $c.b("_"), Pf), Rf = pb(Pd), Sf = r(Pf), Tf = r(Qf);;) {
    if(Sf && Tf) {
      var Uf, Vf = J(Sf), Wf = J(Tf);
      Uf = sb(Rf, Vf, Wf);
      var Xf = M(Sf), Yf = M(Tf), Rf = Uf, Sf = Xf, Tf = Yf
    }else {
      Of = rb(Rf);
      break a
    }
  }
  Of = void 0
}
function Zf(a) {
  return a ? a.f & 67108864 || a.ud ? !0 : !1 : !1
}
function $f(a) {
  var b = $.b ? $.b(a) : $.call(null, a);
  return t(b) ? b : a ? t(t(null) ? null : a.Bd) ? !0 : !1 : !1
}
function ag(a, b, c, d, e) {
  this.G = a;
  this.fa = b;
  this.da = c;
  this.H = d;
  this.r = e;
  this.o = 0;
  this.f = 2229667594;
  3 < arguments.length ? (this.H = d, this.r = e) : this.r = this.H = null
}
n = ag.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = tc(this)
};
n.P = function(a, b) {
  return Ma.c(this, b, null)
};
n.Q = function(a, b, c) {
  return Ac(b, gf) ? this.G : Ac(b, lf) ? this.fa : Ac(b, Te) ? this.da : y ? U.c(this.r, b, c) : null
};
n.La = function(a, b, c) {
  return t(Ac.a ? Ac.a(gf, b) : Ac.call(null, gf, b)) ? new ag(c, this.fa, this.da, this.H, this.r, null) : t(Ac.a ? Ac.a(lf, b) : Ac.call(null, lf, b)) ? new ag(this.G, c, this.da, this.H, this.r, null) : t(Ac.a ? Ac.a(Te, b) : Ac.call(null, Te, b)) ? new ag(this.G, this.fa, c, this.H, this.r, null) : new ag(this.G, this.fa, this.da, this.H, V.c(this.r, b, c), null)
};
n.B = function(a, b, c) {
  return Be(b, function(a) {
    return Be(b, Ge, "", " ", "", c, a)
  }, "#cljs.core.logic.SubstValue{", ", ", "}", c, Lc.a(new X(null, 3, 5, Y, [new X(null, 2, 5, Y, [gf, this.G], null), new X(null, 2, 5, Y, [lf, this.fa], null), new X(null, 2, 5, Y, [Te, this.da], null)], null), this.r))
};
n.K = function(a, b) {
  return dc(b) ? Pa(this, D.a(b, 0), D.a(b, 1)) : B.c(C, this, b)
};
n.toString = function() {
  return"" + A(this.G)
};
n.J = function() {
  return r(Lc.a(new X(null, 3, 5, Y, [new X(null, 2, 5, Y, [gf, this.G], null), new X(null, 2, 5, Y, [lf, this.fa], null), new X(null, 2, 5, Y, [Te, this.da], null)], null), this.r))
};
n.L = function() {
  return 3 + P(this.r)
};
n.v = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Jd(this, b) : b) ? !0 : !1
};
n.t = function(a, b) {
  return new ag(this.G, this.fa, this.da, b, this.r, this.k)
};
n.s = f("H");
n.ab = function(a, b) {
  return jc(new pe(null, new na(null, 3, [Te, null, gf, null, lf, null], null), null), b) ? Tb.a(O(gd(Pd, this), this.H), b) : new ag(this.G, this.fa, this.da, this.H, Qc(Tb.a(this.r, b)), null)
};
function bg(a) {
  return a instanceof ag
}
var cg = function() {
  function a(a, b, c, d) {
    return O(new ag(a, b, c), d)
  }
  function b(a, b, c) {
    return O(new ag(a, b, null), c)
  }
  function c(a, b) {
    return new ag(a, b, null)
  }
  function d(a) {
    return new ag(a, null, null)
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
function dg(a, b) {
  return gd(vd, dd($, Xc.a(function(b) {
    return eg.a ? eg.a(a, b) : eg.call(null, a, b)
  }, fg.b ? fg.b(b) : fg.call(null, b))))
}
function gg(a, b) {
  return dd(function(b) {
    return $.b ? $.b(hg.a ? hg.a(a, b) : hg.call(null, a, b)) : $.call(null, hg.a ? hg.a(a, b) : hg.call(null, a, b))
  }, dg(a, b))
}
function ig(a, b, c) {
  if(a ? a.xc : a) {
    return a.xc(0, b, c)
  }
  var d;
  d = ig[p(null == a ? null : a)];
  if(!d && (d = ig._, !d)) {
    throw z("IConstraintStore.-addc", a);
  }
  return d.call(null, a, b, c)
}
function jg(a, b, c) {
  if(a ? a.Ac : a) {
    return a.Ac(0, b, c)
  }
  var d;
  d = jg[p(null == a ? null : a)];
  if(!d && (d = jg._, !d)) {
    throw z("IConstraintStore.-remc", a);
  }
  return d.call(null, a, b, c)
}
function kg(a, b, c) {
  if(a ? a.Bc : a) {
    return a.Bc(0, b, c)
  }
  var d;
  d = kg[p(null == a ? null : a)];
  if(!d && (d = kg._, !d)) {
    throw z("IConstraintStore.-runc", a);
  }
  return d.call(null, a, b, c)
}
function lg(a, b, c, d) {
  if(a ? a.yc : a) {
    return a.yc(0, b, c, d)
  }
  var e;
  e = lg[p(null == a ? null : a)];
  if(!e && (e = lg._, !e)) {
    throw z("IConstraintStore.-constraints-for", a);
  }
  return e.call(null, a, b, c, d)
}
function mg(a, b, c) {
  if(a ? a.zc : a) {
    return a.zc(0, b, c)
  }
  var d;
  d = mg[p(null == a ? null : a)];
  if(!d && (d = mg._, !d)) {
    throw z("IConstraintStore.-migrate", a);
  }
  return d.call(null, a, b, c)
}
function ng(a, b) {
  if(a ? a.dd : a) {
    return a.dd(a, b)
  }
  var c;
  c = ng[p(null == a ? null : a)];
  if(!c && (c = ng._, !c)) {
    throw z("IWithConstraintId.-with-id", a);
  }
  return c.call(null, a, b)
}
function og(a) {
  if(a ? a.Zc : a) {
    return a.Zc(a)
  }
  var b;
  b = og[p(null == a ? null : a)];
  if(!b && (b = og._, !b)) {
    throw z("IConstraintId.-id", a);
  }
  return b.call(null, a)
}
function pg(a) {
  return a && t(t(null) ? null : a.Cd) ? og(a) : Xe.b(Wb(a))
}
function qg(a, b, c, d) {
  this.ja = a;
  this.ta = b;
  this.Ka = c;
  this.Xa = d;
  this.o = 0;
  this.f = 2
}
n = qg.prototype;
n.L = function() {
  return P(this.ta)
};
n.xc = function(a, b, c) {
  a = dg(b, c);
  c = c && t(t(null) ? null : c.Gd) ? ng(c, this.Ka) : Oc.e(c, V, q([Xe, this.Ka], 0));
  c = B.c(function(a, b) {
    return function(a, c) {
      return rg.c ? rg.c(a, c, b) : rg.call(null, a, c, b)
    }
  }(a, c), this, a);
  return new qg(c.ja, c.ta, this.Ka + 1, this.Xa)
};
n.Ac = function(a, b, c) {
  a = dg(b, c);
  c = pg(c);
  a = B.c(function(a, b) {
    return function(a, c) {
      var d = Xb.a(U.a(a, c), b);
      return $b(d) ? Tb.a(a, c) : V.c(a, c, d)
    }
  }(a, c), this.ja, a);
  c = Tb.a(this.ta, c);
  return new qg(a, c, this.Ka, this.Xa)
};
n.Bc = function(a, b, c) {
  return t(c) ? new qg(this.ja, this.ta, this.Ka, Qb.a(this.Xa, pg(b))) : new qg(this.ja, this.ta, this.Ka, Xb.a(this.Xa, pg(b)))
};
n.yc = function(a, b, c, d) {
  a = U.a(this.ja, eg.a ? eg.a(b, c) : eg.call(null, b, c));
  return t(a) ? dd(function(a) {
    return(sg.b ? sg.b(a) : sg.call(null, a)).call(null, d)
  }, Xc.a(this.ta, dd(Uc(this.Xa), a))) : null
};
n.zc = function(a, b, c) {
  a = this.ja.b ? this.ja.b(b) : this.ja.call(null, b);
  var d = this.ja.a ? this.ja.a(c, re) : this.ja.call(null, c, re);
  b = V.c(Tb.a(this.ja, b), c, gd(d, a));
  return new qg(b, this.ta, this.Ka, this.Xa)
};
function rg(a, b, c) {
  if(!t($.b ? $.b(b) : $.call(null, b))) {
    throw Error([A("constraint store assoc expected logic var key: "), A(b)].join(""));
  }
  var d = a.ta, e = a.ja, g = a.Ka;
  b = hd.c(e, new X(null, 1, 5, Y, [b], null), Wc.a(function(a, b, c) {
    return function(a) {
      return Qb.a(a, c)
    }
  }(d, e, g), re));
  c = V.c(d, g, c);
  return new qg(b, c, g, a.Xa)
}
function tg() {
  return new qg(Pd, Pd, 0, re)
}
function ug(a, b, c) {
  if(a ? a.mc : a) {
    return a.mc(0, b, c)
  }
  var d;
  d = ug[p(null == a ? null : a)];
  if(!d && (d = ug._, !d)) {
    throw z("ISubstitutions.-occurs-check", a);
  }
  return d.call(null, a, b, c)
}
function vg(a, b, c) {
  if(a ? a.Va : a) {
    return a.Va(0, b, c)
  }
  var d;
  d = vg[p(null == a ? null : a)];
  if(!d && (d = vg._, !d)) {
    throw z("ISubstitutions.-ext", a);
  }
  return d.call(null, a, b, c)
}
function wg(a, b, c) {
  if(a ? a.lc : a) {
    return a.lc(0, b, c)
  }
  var d;
  d = wg[p(null == a ? null : a)];
  if(!d && (d = wg._, !d)) {
    throw z("ISubstitutions.-ext-no-check", a);
  }
  return d.call(null, a, b, c)
}
function xg(a, b) {
  if(a ? a.oc : a) {
    return a.oc(0, b)
  }
  var c;
  c = xg[p(null == a ? null : a)];
  if(!c && (c = xg._, !c)) {
    throw z("ISubstitutions.-walk", a);
  }
  return c.call(null, a, b)
}
function yg(a, b) {
  if(a ? a.Hb : a) {
    return a.Hb(0, b)
  }
  var c;
  c = yg[p(null == a ? null : a)];
  if(!c && (c = yg._, !c)) {
    throw z("ISubstitutions.-walk*", a);
  }
  return c.call(null, a, b)
}
function zg(a, b, c) {
  if(a ? a.nc : a) {
    return a.nc(0, b, c)
  }
  var d;
  d = zg[p(null == a ? null : a)];
  if(!d && (d = zg._, !d)) {
    throw z("ISubstitutions.-unify", a);
  }
  return d.call(null, a, b, c)
}
function Ag(a, b) {
  if(a ? a.Gb : a) {
    return a.Gb(0, b)
  }
  var c;
  c = Ag[p(null == a ? null : a)];
  if(!c && (c = Ag._, !c)) {
    throw z("ISubstitutions.-reify*", a);
  }
  return c.call(null, a, b)
}
var Bg = function() {
  function a(a, b, c) {
    if(a ? a.Fc : a) {
      return a.Fc(0, b, c)
    }
    var h;
    h = Bg[p(null == a ? null : a)];
    if(!h && (h = Bg._, !h)) {
      throw z("ISubstitutions.-reify", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.Ec : a) {
      return a.Ec(0, b)
    }
    var c;
    c = Bg[p(null == a ? null : a)];
    if(!c && (c = Bg._, !c)) {
      throw z("ISubstitutions.-reify", a);
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
function hg(a, b) {
  if(a ? a.Ic : a) {
    return a.Ic(0, b)
  }
  var c;
  c = hg[p(null == a ? null : a)];
  if(!c && (c = hg._, !c)) {
    throw z("ISubstitutionsCLP.-root-val", a);
  }
  return c.call(null, a, b)
}
function eg(a, b) {
  if(a ? a.pc : a) {
    return a.pc(0, b)
  }
  var c;
  c = eg[p(null == a ? null : a)];
  if(!c && (c = eg._, !c)) {
    throw z("ISubstitutionsCLP.-root-var", a);
  }
  return c.call(null, a, b)
}
function Cg(a, b, c) {
  if(a ? a.Gc : a) {
    return a.Gc(0, b, c)
  }
  var d;
  d = Cg[p(null == a ? null : a)];
  if(!d && (d = Cg._, !d)) {
    throw z("ISubstitutionsCLP.-ext-run-cs", a);
  }
  return d.call(null, a, b, c)
}
function Dg(a, b) {
  if(a ? a.Hc : a) {
    return a.Hc(0, b)
  }
  var c;
  c = Dg[p(null == a ? null : a)];
  if(!c && (c = Dg._, !c)) {
    throw z("ISubstitutionsCLP.-queue", a);
  }
  return c.call(null, a, b)
}
function Eg(a, b, c) {
  if(a ? a.Jc : a) {
    return a.Jc(0, b, c)
  }
  var d;
  d = Eg[p(null == a ? null : a)];
  if(!d && (d = Eg._, !d)) {
    throw z("ISubstitutionsCLP.-update-var", a);
  }
  return d.call(null, a, b, c)
}
function Fg(a, b, c, d, e, g, h, k) {
  this.l = a;
  this.ba = b;
  this.V = c;
  this.u = d;
  this.U = e;
  this.N = g;
  this.T = h;
  this.q = k;
  this.o = 0;
  this.f = 2149974018
}
n = Fg.prototype;
n.oc = function(a, b) {
  if(t($f.b ? $f.b(b) : $f.call(null, b))) {
    for(var c = b, d = kc(this.l, b);;) {
      if(null == d) {
        return c
      }
      c = Ta(d);
      d = Ua(d);
      if(w($f.b ? $f.b(d) : $f.call(null, d))) {
        if(bg(d)) {
          var e = d.G;
          return Ac(e, hf) ? O(c, V.c(Wb(d), hf, !0)) : e
        }
        return d
      }
      c = d;
      d = kc(this.l, d)
    }
  }else {
    return b
  }
};
n.Gb = function(a, b) {
  var c = xg(this, b);
  return Ff(c, this)
};
n.Hb = function(a, b) {
  var c = this, d = xg(c, b);
  return Gf(d, function(a) {
    a = xg(c, a);
    return t(Gg.b ? Gg.b(a) : Gg.call(null, a)) ? yg(c, a) : a
  })
};
function Hg(a) {
  var b = P(a.l);
  return 100 > b ? Of.b ? Of.b(b) : Of.call(null, b) : Fb.b([A("_"), A(P(a.l))].join(""))
}
n.Ec = function(a, b) {
  var c = yg(this, b);
  return O(Ig, this.q).Gb(0, c).Hb(0, c)
};
n.Fc = function(a, b, c) {
  a = yg(this, b);
  return Ag(c, a).Hb(0, a)
};
n.nc = function(a, b, c) {
  if(b === c) {
    return this
  }
  var d = xg(this, b), e = xg(this, c);
  return t(function() {
    var a = $.b ? $.b(d) : $.call(null, d);
    return t(a) ? G.a(d, e) : a
  }()) ? this : t(function() {
    var a = w($.b ? $.b(d) : $.call(null, d));
    return a ? $.b ? $.b(e) : $.call(null, e) : a
  }()) ? Af(e, d, this) : Af(d, e, this)
};
n.Va = function(a, b, c) {
  return ug(this, b, bg(c) ? c.G : c) ? null : wg(this, b, c)
};
n.lc = function(a, b, c) {
  a = w($.b ? $.b(c) : $.call(null, c)) ? O(b, V.c(Wb(b), ff, !0)) : b;
  return new Fg(V.c(this.l, a, c), t(this.ba) ? Qb.a(this.ba, a) : null, this.V, this.u, this.U, this.N, this.T, this.q)
};
n.mc = function(a, b, c) {
  a = xg(this, c);
  return Hf(a, b, this)
};
n.Ua = function(a, b) {
  return b.b ? b.b(this) : b.call(null, this)
};
n.Ic = function(a, b) {
  if(t($.b ? $.b(b) : $.call(null, b))) {
    var c = kc(this.l, b);
    T.c(c, 0, null);
    T.c(c, 1, null);
    for(var d = b;;) {
      var e = c;
      T.c(e, 0, null);
      c = T.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(w($.b ? $.b(c) : $.call(null, c))) {
        return c
      }
      if(y) {
        d = c, c = kc(this.l, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
n.pc = function(a, b) {
  if(t($.b ? $.b(b) : $.call(null, b))) {
    if(t(ff.b(Wb(b)))) {
      return b
    }
    var c = kc(this.l, b);
    T.c(c, 0, null);
    T.c(c, 1, null);
    for(var d = b;;) {
      var e = c, g = T.c(e, 0, null), c = T.c(e, 1, null);
      if(null == e) {
        return d
      }
      if(w($.b ? $.b(c) : $.call(null, c))) {
        return bg(c) ? O(g, Wb(c)) : g
      }
      if(y) {
        d = c, c = kc(this.l, c)
      }else {
        return null
      }
    }
  }else {
    return b
  }
};
n.Gc = function(a, b, c) {
  b = eg(this, b);
  a = t($.b ? $.b(c) : $.call(null, c)) ? new X(null, 2, 5, Y, [b, eg(this, c)], null) : new X(null, 1, 5, Y, [b], null);
  c = t(this.T) ? vg(this, b, c) : wg(this, b, c);
  return t(c) ? (Jg.c ? Jg.c(a, this.u, Ve) : Jg.call(null, a, this.u, Ve)).call(null, c) : null
};
n.Hc = function(a, b) {
  var c = pg(b);
  if(w(this.N.b ? this.N.b(c) : this.N.call(null, c))) {
    var d = this.U, c = new Fg(this.l, this.ba, this.V, this.u, Qb.a(t(d) ? d : vd, b), Qb.a(this.N, c), this.T, this.q)
  }else {
    c = this
  }
  return c
};
n.Jc = function(a, b, c) {
  return new Fg(V.c(this.l, b, c), this.ba, this.V, this.u, this.U, this.N, this.T, this.q)
};
n.Ib = !0;
n.kb = function() {
  return this
};
n.B = function(a, b, c) {
  return ob(this.l, b, c)
};
n.Db = !0;
n.cb = function(a, b) {
  return Kg.a ? Kg.a(this, b) : Kg.call(null, this, b)
};
n.L = function() {
  return P(this.l)
};
n.v = function(a, b) {
  return this === b || b instanceof Fg && G.a(this.l, b.l)
};
n.t = function(a, b) {
  return new Fg(this.l, this.ba, this.V, this.u, this.U, this.N, this.T, b)
};
n.s = f("q");
var Lg = function() {
  function a(a, b) {
    return new Fg(Pd, null, Me.b(Pd), tg.j ? tg.j() : tg.call(null), null, re, a, b)
  }
  function b(a) {
    return d.a(a, null)
  }
  function c() {
    return d.b(!1)
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
  d.b = b;
  d.a = a;
  return d
}(), Ig = function() {
  function a(a, b) {
    return new Fg(a, null, null, b, null, re, !0, null)
  }
  function b(a) {
    return d.a(a, tg.j ? tg.j() : tg.call(null))
  }
  function c() {
    return d.b(Pd)
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
  d.b = b;
  d.a = a;
  return d
}().j();
function Mg(a, b, c, d, e, g) {
  this.id = a;
  this.unique = b;
  this.name = c;
  this.Qc = d;
  this.k = e;
  this.i = g;
  this.o = 0;
  this.f = 2154168320
}
n = Mg.prototype;
n.C = f("k");
n.Nc = function(a, b, c) {
  return c.Va(0, this, b)
};
n.Dc = function(a, b) {
  var c = Se.b(Wb(b));
  return Ub(c) ? c.a ? c.a(this, b) : c.call(null, this, b) : t(c) ? b.Va(0, this, Hg(b)) : b.Va(0, this, this.Qc)
};
n.lb = function(a, b, c) {
  if(t($.b ? $.b(b) : $.call(null, b))) {
    return a = t(hf.b(Wb(this))) ? new X(null, 2, 5, Y, [this, b], null) : t(hf.b(Wb(b))) ? new X(null, 2, 5, Y, [b, this], null) : null, t(a) ? (b = T.c(a, 0, null), a = T.c(a, 1, null), c = new Fg(c.l, c.ba, c.V, mg(c.u, a, b), c.U, c.N, c.T, c.q), c = t(hf.b(Wb(a))) ? Ng.c ? Ng.c(c, a, b) : Ng.call(null, c, a, b) : c, t(c) ? wg(c, a, b) : null) : wg(c, this, b)
  }
  if(t(Og.b ? Og.b(b) : Og.call(null, b))) {
    throw Error([A(b), A(" is non-storable")].join(""));
  }
  return Pc.a(b, Nf) ? t(Gg.b ? Gg.b(b) : Gg.call(null, b)) ? vg(c, this, b) : t(hf.b(Wb(this))) ? wg(c, this, V.c(hg(c, this), gf, b)) : wg(c, this, b) : y ? wg(c, this, b) : null
};
n.Lc = function(a, b, c) {
  return c.lc(0, this, b)
};
n.mb = function(a, b, c) {
  return c.Va(0, this, b)
};
n.B = function(a, b) {
  return E(b, [A("\x3clvar:"), A(this.name), A("\x3e")].join(""))
};
n.Cc = function(a, b, c) {
  return G.a(c.oc(0, this), b)
};
n.toString = function() {
  return Ie.e(q([wf.ha], 0))
};
n.eb = function(a, b) {
  return b.b ? b.b(this) : b.call(null, this)
};
n.Mc = function(a, b, c) {
  return c.Va(0, this, b)
};
n.v = function(a, b) {
  var c = b instanceof Mg;
  return c ? t(this.unique) ? this.id === b.id : this.name === b.name : c
};
n.t = function(a, b) {
  return new Mg(this.id, this.unique, this.name, this.Qc, this.k, b)
};
n.s = f("i");
var Pg = [0], Qg = function() {
  function a(a, b) {
    var c = t(b) ? [A("_"), A(Pg[0] += 1)].join("") : a, d = t(b) ? [A(a), A(c)].join("") : "" + A(a);
    return new Mg(c, b, d, a, I(d), null)
  }
  function b(a) {
    return d.a(a, !0)
  }
  function c() {
    return d.b(new H(null, "gen", "gen", -1640429303, null))
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
  d.b = b;
  d.a = a;
  return d
}();
function $(a) {
  return a instanceof Mg
}
function Gg(a) {
  var b = ac(a);
  return b ? b : a ? t(t(null) ? null : a.Fd) ? !0 : !1 : !1
}
function Rg(a, b, c) {
  if(cc(b)) {
    for(var d = le(a);;) {
      if(r(d)) {
        var e = J(d), g = U.c(b, e, Nf);
        if(g === Nf) {
          return null
        }
        e = U.a(a, e);
        g = xg(c, g);
        if($(g)) {
          d = M(d), c = (Sg.a ? Sg.a(g, e) : Sg.call(null, g, e)).call(null, c)
        }else {
          if(c = cc(e) ? zg(c, Tg.b ? Tg.b(e) : Tg.call(null, e), g) : zg(c, e, g), t(c)) {
            d = M(d)
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
ge.prototype.lb = function(a, b, c) {
  return Ef(b, this, c)
};
na.prototype.lb = function(a, b, c) {
  return Ef(b, this, c)
};
Af._ = function(a, b, c) {
  return bc(a) ? Df(b, a, c) : Zf(a) ? Rg(b, a, c) : y ? Cf(b, a, c) : null
};
Af["null"] = function(a, b, c) {
  return Bf(b, a, c)
};
Bf._ = m(null);
Bf["null"] = function(a, b, c) {
  return c
};
Cf._ = function(a, b, c) {
  return G.a(b, a) ? c : null
};
Cf["null"] = m(null);
Df._ = function(a, b, c) {
  if(bc(a)) {
    for(b = r(b), a = r(a);;) {
      if(null != b) {
        if(null != a) {
          if(c = c.nc(0, J(b), J(a)), w(wa.b ? wa.b(c) : wa.call(null, c))) {
            b = M(b), a = M(a)
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
Df["null"] = m(null);
function Ug(a, b, c) {
  if(P(b) !== P(a)) {
    return null
  }
  for(var d = r(le(b));;) {
    if(t(d)) {
      var e = J(d), g = U.c(a, e, Nf);
      if(g === Nf) {
        return null
      }
      c = zg(c, U.a(b, e), g);
      if(w(wa.b ? wa.b(c) : wa.call(null, c))) {
        d = M(d)
      }else {
        return null
      }
    }else {
      return c
    }
  }
}
ge.prototype.mb = function(a, b, c) {
  return Ug(this, b, c)
};
na.prototype.mb = function(a, b, c) {
  return Ug(this, b, c)
};
Ef._ = m(null);
Ef["null"] = m(null);
Ff._ = function(a, b) {
  if(ac(a)) {
    for(var c = a, d = b;;) {
      if(r(c)) {
        var e = M(c), d = d.Gb(0, J(c)), c = e
      }else {
        return d
      }
    }
  }else {
    return b
  }
};
Ff["null"] = function(a, b) {
  return b
};
function Vg(a, b) {
  var c = O, d;
  a: {
    d = a;
    for(var e = Wg.b ? Wg.b(d) : Wg.call(null, d);;) {
      if(r(d)) {
        var g = J(d), h = T.c(g, 0, null), g = T.c(g, 1, null);
        d = M(d);
        e = V.c(e, Gf(b.b ? b.b(h) : b.call(null, h), b), Gf(b.b ? b.b(g) : b.call(null, g), b))
      }else {
        d = e;
        break a
      }
    }
    d = void 0
  }
  return c(d, Wb(a))
}
function Xg(a, b) {
  var c = O, d;
  a: {
    d = a;
    for(var e = pb(Pd);;) {
      if(r(d)) {
        var g = J(d), h = T.c(g, 0, null), g = T.c(g, 1, null);
        d = M(d);
        e = e.bb(null, Gf(b.b ? b.b(h) : b.call(null, h), b), Gf(b.b ? b.b(g) : b.call(null, g), b))
      }else {
        d = rb(e);
        break a
      }
    }
    d = void 0
  }
  return c(d, Wb(a))
}
X.prototype.eb = function(a, b) {
  var c = O, d;
  a: {
    d = r(this);
    for(var e = pb(vd);;) {
      if(t(d)) {
        var g = M(d), e = e.Ma(null, Gf(b.b ? b.b(J(d)) : b.call(null, J(d)), b));
        d = g
      }else {
        d = rb(e);
        break a
      }
    }
    d = void 0
  }
  return c(d, Wb(this))
};
na.prototype.eb = function(a, b) {
  return Xg(this, b)
};
ge.prototype.eb = function(a, b) {
  return Xg(this, b)
};
Gf._ = function(a, b) {
  return bc(a) ? O(xe.b(Xc.a(function(a) {
    return Gf(b.b ? b.b(a) : b.call(null, a), b)
  }, a)), Wb(a)) : Zf(a) ? Vg(a, b) : y ? b.b ? b.b(a) : b.call(null, a) : null
};
Gf["null"] = function(a, b) {
  return b.b ? b.b(null) : b.call(null, null)
};
Hf._ = function(a, b, c) {
  if(bc(a)) {
    for(a = r(a);;) {
      if(null != a) {
        var d = c.mc(0, b, J(a));
        if(t(d)) {
          return d
        }
        a = M(a)
      }else {
        return!1
      }
    }
  }else {
    return!1
  }
};
Hf["null"] = m(!1);
function Yg(a, b) {
  return(a ? t(t(null) ? null : a.Db) || (a.Pc ? 0 : x(Jf, a)) : x(Jf, a)) ? a.cb(null, b) : new Zg(a, b)
}
function $g(a) {
  return(a ? t(t(null) ? null : a.Ib) || (a.Pc ? 0 : x(Lf, a)) : x(Lf, a)) ? a.kb(null) : a
}
function Zg(a, b) {
  this.A = a;
  this.F = b
}
n = Zg.prototype;
n.Ib = !0;
n.kb = function() {
  var a = this;
  return new Bc(null, function() {
    return N(a.A, new Bc(null, function() {
      return $g(a.F)
    }, null, null))
  }, null, null)
};
n.Db = !0;
n.cb = function(a, b) {
  var c = this;
  return new Zg(c.A, new ah(function() {
    return Yg(b.j ? b.j() : b.call(null), c.F)
  }))
};
n.Ua = function(a, b) {
  var c = this;
  return Yg(b.b ? b.b(c.A) : b.call(null, c.A), new ah(function() {
    return c.F.Ua(null, b)
  }))
};
function Kg(a, b) {
  return new Zg(a, b)
}
function ah(a) {
  this.F = a;
  this.o = 0;
  this.f = 1
}
n = ah.prototype;
n.Ib = !0;
n.kb = function() {
  var a = this;
  return new Bc(null, function() {
    return $g(a.F.j ? a.F.j() : a.F.call(null))
  }, null, null)
};
n.Db = !0;
n.cb = function(a, b) {
  var c = this;
  return new ah(function() {
    return Yg(b.j ? b.j() : b.call(null), c)
  })
};
n.Ua = function(a, b) {
  var c = this;
  return new ah(function() {
    return(c.F.j ? c.F.j() : c.F.call(null)).Ua(null, b)
  })
};
n.call = function(a) {
  a = this;
  return a.F.j ? a.F.j() : a.F.call(null)
};
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(za(b)))
};
n.j = function() {
  return this.F.j ? this.F.j() : this.F.call(null)
};
Lf["null"] = !0;
Jf["null"] = !0;
Kf["null"] = function(a, b) {
  return b.j ? b.j() : b.call(null)
};
If["null"] = function() {
  return wf.ha
};
Lf["function"] = !0;
Lf["null"] = !0;
Jf["function"] = !0;
Kf["function"] = function(a, b) {
  return new ah(function() {
    return Yg(b.j ? b.j() : b.call(null), a)
  })
};
Jf["null"] = !0;
Kf["null"] = function(a, b) {
  return b.j ? b.j() : b.call(null)
};
If["function"] = function(a, b) {
  return new ah(function() {
    return If(a.j ? a.j() : a.call(null), b)
  })
};
If["null"] = m(null);
function bh(a) {
  return a
}
function ch(a, b, c) {
  if(a ? a.Bb : a) {
    return a.Bb(a, b, c)
  }
  var d;
  d = ch[p(null == a ? null : a)];
  if(!d && (d = ch._, !d)) {
    throw z("IIfA.-ifa", a);
  }
  return d.call(null, a, b, c)
}
function dh(a, b, c) {
  if(a ? a.Cb : a) {
    return a.Cb(a, b, c)
  }
  var d;
  d = dh[p(null == a ? null : a)];
  if(!d && (d = dh._, !d)) {
    throw z("IIfU.-ifu", a);
  }
  return d.call(null, a, b, c)
}
ch["function"] = function(a, b, c) {
  return new ah(function() {
    return ch(a.j ? a.j() : a.call(null), b, c)
  })
};
ah.prototype.Bb = function(a, b, c) {
  var d = this;
  return new ah(function() {
    return ch(d.j ? d.j() : d.call(null), b, c)
  })
};
Zg.prototype.Bb = function(a, b) {
  return B.c(If, this, b)
};
Fg.prototype.Bb = function(a, b) {
  T.c(b, 0, null);
  rc(b);
  for(var c = this, d = b;;) {
    var e = T.c(d, 0, null);
    rc(d);
    if(t(e)) {
      if(c = e.b ? e.b(c) : e.call(null, c), t(c)) {
        d = wf.ed
      }else {
        return null
      }
    }else {
      return c
    }
  }
};
ch["null"] = function(a, b, c) {
  return t(c) ? c : null
};
Zg.prototype.Cb = function(a, b) {
  return B.c(If, this.A, b)
};
ah.prototype.Cb = function(a, b, c) {
  var d = this;
  return new ah(function() {
    return dh(d.j ? d.j() : d.call(null), b, c)
  })
};
dh["function"] = function(a, b, c) {
  return new ah(function() {
    return dh(a.j ? a.j() : a.call(null), b, c)
  })
};
Fg.prototype.Cb = function(a, b) {
  T.c(b, 0, null);
  rc(b);
  for(var c = this, d = b;;) {
    var e = T.c(d, 0, null);
    rc(d);
    if(t(e)) {
      if(c = e.b ? e.b(c) : e.call(null, c), t(c)) {
        d = wf.ed
      }else {
        return null
      }
    }else {
      return c
    }
  }
};
dh["null"] = function(a, b, c) {
  return t(c) ? c : null
};
function eh(a) {
  return function(b) {
    return dh(a.b ? a.b(b) : a.call(null, b), vd, null)
  }
}
function Og(a) {
  return a ? t(t(null) ? null : a.cd) ? !0 : !1 : !1
}
function Wg(a) {
  if(a ? a.Oc : a) {
    return a.Oc()
  }
  var b;
  b = Wg[p(null == a ? null : a)];
  if(!b && (b = Wg._, !b)) {
    throw z("IUninitialized.-uninitialized", a);
  }
  return b.call(null, a)
}
function fh(a, b, c) {
  if(a ? a.nb : a) {
    return a.nb(a, b, c)
  }
  var d;
  d = fh[p(null == a ? null : a)];
  if(!d && (d = fh._, !d)) {
    throw z("IUnifyWithPMap.-unify-with-pmap", a);
  }
  return d.call(null, a, b, c)
}
function gh(a, b) {
  this.H = a;
  this.r = b;
  this.o = 0;
  this.f = 2229667594;
  0 < arguments.length ? (this.H = a, this.r = b) : this.r = this.H = null
}
n = gh.prototype;
n.nb = function(a, b, c) {
  return Ef(this, b, c)
};
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = tc(this)
};
n.P = function(a, b) {
  return Ma.c(this, b, null)
};
n.Q = function(a, b, c) {
  return y ? U.c(this.r, b, c) : null
};
n.La = function(a, b, c) {
  return new gh(this.H, V.c(this.r, b, c), null)
};
n.lb = function(a, b, c) {
  return cc(b) ? fh(b, this, c) : null
};
n.cd = !0;
n.mb = function(a, b, c) {
  for(a = le(this);;) {
    if(r(a)) {
      var d = J(a), e = U.c(b, d, Nf);
      if(e === Nf) {
        return null
      }
      d = U.a(this, d);
      e = xg(c, e);
      if($(e)) {
        a = M(a), c = (Sg.a ? Sg.a(e, d) : Sg.call(null, e, d)).call(null, c)
      }else {
        if(c = cc(d) ? zg(c, Tg.b ? Tg.b(d) : Tg.call(null, d), e) : zg(c, d, e), t(c)) {
          a = M(a)
        }else {
          return null
        }
      }
    }else {
      return c
    }
  }
};
n.B = function(a, b, c) {
  return Be(b, function(a) {
    return Be(b, Ge, "", " ", "", c, a)
  }, "#cljs.core.logic.PMap{", ", ", "}", c, Lc.a(vd, this.r))
};
n.K = function(a, b) {
  return dc(b) ? Pa(this, D.a(b, 0), D.a(b, 1)) : B.c(C, this, b)
};
n.J = function() {
  return r(Lc.a(vd, this.r))
};
n.eb = function(a, b) {
  return Xg(this, b)
};
n.L = function() {
  return 0 + P(this.r)
};
n.v = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Jd(this, b) : b) ? !0 : !1
};
n.t = function(a, b) {
  return new gh(b, this.r, this.k)
};
n.s = f("H");
n.ab = function(a, b) {
  return jc(re, b) ? Tb.a(O(gd(Pd, this), this.H), b) : new gh(this.H, Qc(Tb.a(this.r, b)), null)
};
n.Oc = function() {
  return new gh
};
ge.prototype.nb = function(a, b, c) {
  return Ef(b, this, c)
};
na.prototype.nb = function(a, b, c) {
  return Ef(b, this, c)
};
Mg.prototype.nb = function(a, b, c) {
  return vg(c, this, b)
};
fh._ = m(null);
fh["null"] = m(null);
function Tg(a) {
  return new gh(null, Tb.b(a))
}
var hh = function() {
  function a(a, b) {
    return function(e) {
      e = a.b ? a.b(e) : a.call(null, e);
      return t(e) ? b.b ? b.b(e) : b.call(null, e) : e
    }
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 0:
        return Tc;
      case 2:
        return a.call(this, b, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = function() {
    return Tc
  };
  b.a = a;
  return b
}();
function ih(a, b) {
  if(a ? a.yb : a) {
    return a.yb(a, b)
  }
  var c;
  c = ih[p(null == a ? null : a)];
  if(!c && (c = ih._, !c)) {
    throw z("IConstraintStep.-step", a);
  }
  return c.call(null, a, b)
}
function jh(a) {
  if(a ? a.Fb : a) {
    return a.Fb(a)
  }
  var b;
  b = jh[p(null == a ? null : a)];
  if(!b && (b = jh._, !b)) {
    throw z("IRunnable.-runnable?", a);
  }
  return b.call(null, a)
}
function fg(a) {
  if(a ? a.xb : a) {
    return a.xb(a)
  }
  var b;
  b = fg[p(null == a ? null : a)];
  if(!b && (b = fg._, !b)) {
    throw z("IConstraintOp.-rands", a);
  }
  return b.call(null, a)
}
function kh(a, b, c, d) {
  if(a ? a.Eb : a) {
    return a.Eb(a, b, c, d)
  }
  var e;
  e = kh[p(null == a ? null : a)];
  if(!e && (e = kh._, !e)) {
    throw z("IReifiableConstraint.-reifyc", a);
  }
  return e.call(null, a, b, c, d)
}
function lh(a) {
  return a ? t(t(null) ? null : a.kc) ? !0 : !1 : !1
}
function sg(a) {
  if(a ? a.zb : a) {
    return a.zb(a)
  }
  var b;
  b = sg[p(null == a ? null : a)];
  if(!b && (b = sg._, !b)) {
    throw z("IConstraintWatchedStores.-watched-stores", a);
  }
  return b.call(null, a)
}
var oh = function mh(b, c) {
  "undefined" === typeof xf && (xf = function(b, c, g, h) {
    this.Ba = b;
    this.x = c;
    this.sb = g;
    this.Lb = h;
    this.o = 0;
    this.f = 393216
  }, xf.Fa = !0, xf.Ea = "cljs.core.logic/t39174", xf.Na = function(b, c) {
    return E(c, "cljs.core.logic/t39174")
  }, xf.prototype.zb = function() {
    return new pe(null, new na(null, 1, [Ve, null], null), null)
  }, xf.prototype.kc = !0, xf.prototype.Eb = function(b, c, g, h) {
    if($(this.Ba)) {
      return h = Bg.c(h, new X(null, 2, 5, Y, [this.x, this.Ba], null), g), g = T.c(h, 0, null), b = T.c(h, 1, null), O(r(Lc.e(C(L, O(new H("cljs.core.logic", "featurec", "cljs.core.logic/featurec", -851976461, null), W.a(je, r(Lc.e(C(L, jf), C(L, 1366), q([C(L, cf), C(L, 13), C(L, kf), C(L, 1366), C(L, Ze), C(L, 21)], 0)))))), C(L, g), q([C(L, b)], 0))), W.a(je, r(Lc.e(C(L, jf), C(L, 1366), q([C(L, cf), C(L, 12), C(L, kf), C(L, 1366), C(L, Ze), C(L, 29)], 0)))))
    }
    b = gd(Pd, this.Ba);
    g = Ag(g, yg(h, b));
    return O(r(Lc.e(C(L, O(new H("cljs.core.logic", "featurec", "cljs.core.logic/featurec", -851976461, null), W.a(je, r(Lc.e(C(L, jf), C(L, 1364), q([C(L, cf), C(L, 13), C(L, kf), C(L, 1364), C(L, Ze), C(L, 21)], 0)))))), C(L, yg(g, this.x)), q([C(L, yg(g, b))], 0))), W.a(je, r(Lc.e(C(L, jf), C(L, 1364), q([C(L, cf), C(L, 12), C(L, kf), C(L, 1364), C(L, Ze), C(L, 51)], 0)))))
  }, xf.prototype.xb = function() {
    return new X(null, 1, 5, Y, [this.x], null)
  }, xf.prototype.yb = function(b, c) {
    "undefined" === typeof yf && (yf = function(b, c, d, e, s, v, u) {
      this.l = b;
      this.ha = c;
      this.Lb = d;
      this.Ba = e;
      this.x = s;
      this.sb = v;
      this.jd = u;
      this.o = 0;
      this.f = 393217
    }, yf.Fa = !0, yf.Ea = "cljs.core.logic/t39178", yf.Na = function(b, c) {
      return E(c, "cljs.core.logic/t39178")
    }, yf.prototype.Fb = function() {
      return!$(xg(this.l, this.x)) && !$(xg(this.l, this.Ba))
    }, yf.prototype.call = function(b, c) {
      b = this;
      var d = xg(c, b.Ba);
      return hh.a(function(c) {
        var e = 0 < P(c.u);
        c = zg(e ? new Fg(c.l, vd, c.V, c.u, c.U, c.N, c.T, c.q) : c, new gh(null, Tb.b(d)), b.x);
        return t(c) ? (e = e ? c.ba : null, 0 < P(e) ? (Jg.c ? Jg.c(e, c.u, Ve) : Jg.call(null, e, c.u, Ve)).call(null, new Fg(c.l, null, c.V, c.u, c.U, c.N, c.T, c.q)) : c) : null
      }, nh.b ? nh.b(b.ha) : nh.call(null, b.ha)).call(null, c)
    }, yf.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(za(c)))
    }, yf.prototype.b = function(b) {
      var c = this, d = xg(b, c.Ba);
      return hh.a(function(b) {
        var e = 0 < P(b.u);
        b = zg(e ? new Fg(b.l, vd, b.V, b.u, b.U, b.N, b.T, b.q) : b, new gh(null, Tb.b(d)), c.x);
        return t(b) ? (e = e ? b.ba : null, 0 < P(e) ? (Jg.c ? Jg.c(e, b.u, Ve) : Jg.call(null, e, b.u, Ve)).call(null, new Fg(b.l, null, b.V, b.u, b.U, b.N, b.T, b.q)) : b) : null
      }, nh.b ? nh.b(c.ha) : nh.call(null, c.ha)).call(null, b)
    }, yf.prototype.s = f("jd"), yf.prototype.t = function(b, c) {
      return new yf(this.l, this.ha, this.Lb, this.Ba, this.x, this.sb, c)
    });
    return new yf(c, this, this.Lb, this.Ba, this.x, this.sb, null)
  }, xf.prototype.s = f("Lb"), xf.prototype.t = function(b, c) {
    return new xf(this.Ba, this.x, this.sb, c)
  });
  return new xf(c, b, mh, null)
};
function Sg(a, b) {
  return ph.b ? ph.b(oh(a, b)) : ph.call(null, oh(a, b))
}
function qh(a, b, c, d) {
  return Ac(c, We) ? a : B.c(function(a, b) {
    var h = eg(a, b);
    return jc(c, h) ? a : d.a ? d.a(a, h) : d.call(null, a, h)
  }, a, b.da)
}
function rh(a, b) {
  if(a ? a.bd : a) {
    return a.bd(a, b)
  }
  var c;
  c = rh[p(null == a ? null : a)];
  if(!c && (c = rh._, !c)) {
    throw z("IMergeDomains.-merge-doms", a);
  }
  return c.call(null, a, b)
}
var sh = function() {
  function a(a, b, g, h, k) {
    var l = hg(a, b), s = bg(l) ? Eg(a, b, cg.p ? cg.p(l.G, V.c(l.fa, g, h), l.da, Wb(l)) : cg.call(null, l.G, V.c(l.fa, g, h), l.da, Wb(l))) : function() {
      var c = t($.b ? $.b(l) : $.call(null, l)) ? hf : l;
      return wg(a, b, cg.a(c, new Qd([g, h])))
    }();
    return qh(s, l, k, function(a, d) {
      return c.D(a, d, g, h, Qb.a(t(k) ? k : re, b))
    })
  }
  function b(a, b, g, h) {
    b = eg(a, b);
    return c.D(a, b, g, h, null)
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
  c.D = a;
  return c
}();
function th(a, b) {
  var c = hg(a, b);
  if(bg(c)) {
    var d = c.G;
    return Pc.a(d, hf) ? d : Ue.b ? Ue.b(lf.b(c)) : Ue.call(null, lf.b(c))
  }
  return w($.b ? $.b(c) : $.call(null, c)) ? c : null
}
function uh() {
  return null
}
function Ng(a, b, c) {
  var d = hg(a, b), e = hg(a, c);
  b = uf.a(e.da, d.da);
  var g;
  a: {
    g = r(d.fa);
    for(var h = e.fa, k = Pd;;) {
      if(t(g)) {
        var l = J(g), s = T.c(l, 0, null), l = T.c(l, 1, null), v = kc(h, s);
        if(t(v)) {
          if(T.c(v, 0, null), v = T.c(v, 1, null), l = rh(l, v), t(l)) {
            g = M(g), h = Tb.a(h, s), k = V.c(k, s, l)
          }else {
            g = null;
            break a
          }
        }else {
          g = M(g), k = V.c(k, s, l)
        }
      }else {
        g = oe.e(q([k, h], 0));
        break a
      }
    }
    g = void 0
  }
  d = t(g) ? cg.p(e.G, g, b, oe.e(q([Wb(d), Wb(e)], 0))) : null;
  if(t(d)) {
    a: {
      c = wg(a, c, d);
      a = g;
      for(b = r(b);;) {
        if(t(b)) {
          b: {
            g = c;
            c = c.pc(0, J(b));
            e = a;
            d = hg(g, c).fa;
            for(e = r(e);;) {
              if(t(e)) {
                if(k = J(e), h = T.c(k, 0, null), k = T.c(k, 1, null), s = U.c(d, h, Nf), k = s === Nf ? k : rh(k, s), t(k)) {
                  e = M(e), g = sh.D(g, c, h, k, re)
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
          if(t(c)) {
            b = M(b)
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
function vh(a) {
  return bg(a) ? a : cg.b(hf)
}
function wh(a, b, c) {
  b = eg(a, b);
  c = eg(a, c);
  var d = vh(hg(a, b)), e = vh(hg(a, c));
  return Eg(Eg(a, b, new ag(d.G, d.fa, Qb.a(function() {
    var a = d.da;
    return t(a) ? a : re
  }(), c))), c, new ag(e.G, e.fa, Qb.a(function() {
    var a = e.da;
    return t(a) ? a : re
  }(), b)))
}
function xh(a, b) {
  return function(c) {
    return Cg(c, a, b)
  }
}
function yh(a) {
  if(a ? a.Kc : a) {
    return a.Kc()
  }
  var b;
  b = yh[p(null == a ? null : a)];
  if(!b && (b = yh._, !b)) {
    throw z("ISuspendedStream.-ready?", a);
  }
  return b.call(null, a)
}
function zh(a, b, c, d, e) {
  this.za = a;
  this.ya = b;
  this.F = c;
  this.H = d;
  this.r = e;
  this.o = 0;
  this.f = 2229667594;
  3 < arguments.length ? (this.H = d, this.r = e) : this.r = this.H = null
}
n = zh.prototype;
n.C = function() {
  var a = this.k;
  return null != a ? a : this.k = a = tc(this)
};
n.P = function(a, b) {
  return Ma.c(this, b, null)
};
n.Q = function(a, b, c) {
  return Ac(b, ef) ? this.za : Ac(b, bf) ? this.ya : Ac(b, $e) ? this.F : y ? U.c(this.r, b, c) : null
};
n.La = function(a, b, c) {
  return t(Ac.a ? Ac.a(ef, b) : Ac.call(null, ef, b)) ? new zh(c, this.ya, this.F, this.H, this.r, null) : t(Ac.a ? Ac.a(bf, b) : Ac.call(null, bf, b)) ? new zh(this.za, c, this.F, this.H, this.r, null) : t(Ac.a ? Ac.a($e, b) : Ac.call(null, $e, b)) ? new zh(this.za, this.ya, c, this.H, this.r, null) : new zh(this.za, this.ya, this.F, this.H, V.c(this.r, b, c), null)
};
n.B = function(a, b, c) {
  return Be(b, function(a) {
    return Be(b, Ge, "", " ", "", c, a)
  }, "#cljs.core.logic.SuspendedStream{", ", ", "}", c, Lc.a(new X(null, 3, 5, Y, [new X(null, 2, 5, Y, [ef, this.za], null), new X(null, 2, 5, Y, [bf, this.ya], null), new X(null, 2, 5, Y, [$e, this.F], null)], null), this.r))
};
n.K = function(a, b) {
  return dc(b) ? Pa(this, D.a(b, 0), D.a(b, 1)) : B.c(C, this, b)
};
n.J = function() {
  return r(Lc.a(new X(null, 3, 5, Y, [new X(null, 2, 5, Y, [ef, this.za], null), new X(null, 2, 5, Y, [bf, this.ya], null), new X(null, 2, 5, Y, [$e, this.F], null)], null), this.r))
};
n.L = function() {
  return 3 + P(this.r)
};
n.Kc = function() {
  return Za(this.za).nd !== this.ya
};
n.v = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Jd(this, b) : b) ? !0 : !1
};
n.t = function(a, b) {
  return new zh(this.za, this.ya, this.F, b, this.r, this.k)
};
n.s = f("H");
n.ab = function(a, b) {
  return jc(new pe(null, new na(null, 3, [$e, null, bf, null, ef, null], null), null), b) ? Tb.a(O(gd(Pd, this), this.H), b) : new zh(this.za, this.ya, this.F, this.H, Qc(Tb.a(this.r, b)), null)
};
function Ah(a, b, c) {
  for(var d = vd;;) {
    if(null == a) {
      return c.j ? c.j() : c.call(null)
    }
    if(t(yh(J(a)))) {
      return b.b ? b.b(function(a, b) {
        return function() {
          var c = J(a), d = c.F, e = gd(b, M(a));
          return $b(e) ? d.j ? d.j() : d.call(null) : Kf(d.j ? d.j() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d)) : b.call(null, function(a, b) {
        return function() {
          var c = J(a), d = c.F, e = gd(b, M(a));
          return $b(e) ? d.j ? d.j() : d.call(null) : Kf(d.j ? d.j() : d.call(null), function(a, b, c, d, e) {
            return function() {
              return e
            }
          }(a, b, c, d, e))
        }
      }(a, d))
    }
    if(y) {
      var e = M(a), d = Qb.a(d, J(a));
      a = e
    }else {
      return null
    }
  }
}
n = X.prototype;
n.Ib = !0;
n.kb = function() {
  return Ah(this, function(a) {
    return $g(a)
  }, function() {
    return L
  })
};
n.Db = !0;
n.cb = function(a, b) {
  var c = this;
  return Ah(c, function(a) {
    return Yg(a, b)
  }, function() {
    var a = b.j ? b.j() : b.call(null);
    return dc(a) ? gd(a, c) : Yg(a, function() {
      return c
    })
  })
};
n.Ua = function(a, b) {
  var c = this;
  return Ah(c, function(a) {
    return If(a, b)
  }, function() {
    return gd(vd, Xc.a(function(a) {
      return new zh(a.za, a.ya, function() {
        return If(a.F.call(null), b)
      })
    }, c))
  })
};
function Bh(a) {
  return function(b) {
    b = B.c(function(a, b) {
      return wg(a, b, cg.b(hf))
    }, b, gg(b, a));
    return new Fg(b.l, b.ba, b.V, ig(b.u, b, a), b.U, b.N, b.T, b.q)
  }
}
function nh(a) {
  return function(b) {
    return new Fg(b.l, b.ba, b.V, jg(b.u, b, a), b.U, b.N, b.T, b.q)
  }
}
function Ch(a) {
  return function(b) {
    return new Fg(b.l, b.ba, b.V, kg(b.u, a, !0), b.U, b.N, b.T, b.q)
  }
}
function Dh(a) {
  return function(b) {
    return new Fg(b.l, b.ba, b.V, kg(b.u, a, !1), b.U, b.N, b.T, b.q)
  }
}
function Eh(a) {
  if(a ? a.$c : a) {
    return a.$c(a)
  }
  var b;
  b = Eh[p(null == a ? null : a)];
  if(!b && (b = Eh._, !b)) {
    throw z("IEntailed.-entailed?", a);
  }
  return b.call(null, a)
}
function Fh(a) {
  return a ? t(t(null) ? null : a.Ed) ? !0 : !1 : !1
}
function Gh(a, b, c) {
  a = pg(a);
  c = c.u.ta.call(null, a);
  c = t(c) ? c : null == a;
  return t(c) ? Eh(b) : c
}
function Hh(a) {
  return function(b) {
    var c = ih(a, b);
    return Fh(c) && Gh(a, c, b) ? nh(a).call(null, b) : t(jh(c)) ? hh.a(Ch(a), hh.a(c, Dh(a))).call(null, b) : b
  }
}
function Ih(a) {
  for(;;) {
    if(t(a)) {
      var b = a.U;
      if(0 === P(b)) {
        return new Fg(a.l, a.ba, a.V, a.u, null, a.N, a.T, a.q)
      }
      b = J(b);
      a = Hh(b).call(null, new Fg(a.l, a.ba, a.V, a.u, zd.a(a.U, 1), Xb.a(a.N, pg(b)), a.T, a.q))
    }else {
      return null
    }
  }
}
function Jh(a) {
  return function(b) {
    var c = b.U;
    b = B.c(function() {
      return function(a, b) {
        return Dg(a, b)
      }
    }(c), new Fg(b.l, b.ba, b.V, b.u, t(c) ? c : vd, b.N, b.T, b.q), a);
    return t(c) ? b : Ih(b)
  }
}
var Jg = function Kh(b, c, d) {
  return 0 === P(c) || null == r(b) ? bh : function(e) {
    var g = lg(c, e, J(b), d);
    return r(g) ? hh.a(Jh(g), Kh(M(b), c, d)).call(null, e) : Kh(M(b), c, d).call(null, e)
  }
};
function Lh(a, b) {
  function c(a, b) {
    for(;;) {
      if(t(b)) {
        var c = J(b), h;
        h = $.b ? $.b(c) : $.call(null, c);
        t(h) && (h = $.b ? $.b(xg(a, c)) : $.call(null, xg(a, c)), h = t(h) ? null == th(a, c) : h);
        if(t(h)) {
          throw Error([A("Constrained variable "), A(c), A(" without domain")].join(""));
        }
        c = a;
        h = M(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  c.a ? c.a(a, r(b)) : c.call(null, a, r(b))
}
function Mh(a) {
  a = a.u;
  var b = a.ja, c = a.ta;
  a = le(b);
  return dd(function(a) {
    return Sc(function(a) {
      a = U.a(c, a);
      return t(a) ? a ? t(t(null) ? null : a.Dd) ? !0 : !1 : !1 : null
    }, U.a(b, a))
  }, a)
}
function Nh(a) {
  return function(b) {
    return If(If(b, Oh.b ? Oh.b(a) : Oh.call(null, a)), function(a) {
      var b = Mh(a);
      Lh(a, b);
      return eh(Oh.b ? Oh.b(b) : Oh.call(null, b)).call(null, a)
    })
  }
}
function Ph(a, b, c) {
  var d = c.u, d = gd(re, dd(function() {
    return function(a) {
      return null != a
    }
  }(d), Xc.a(function() {
    return function(d) {
      return kh(d, a, b, c)
    }
  }(d), dd(lh, ne(d.ta)))));
  return $b(d) ? Kg.a ? Kg.a(a, uh) : Kg.call(null, a, uh) : Kg.a ? Kg.a(O(r(Lc.e(C(L, a), C(L, Oe), q([d], 0))), W.a(je, r(Lc.e(C(L, jf), C(L, 1887), q([C(L, cf), C(L, 16), C(L, kf), C(L, 1887), C(L, Ze), C(L, 29)], 0))))), uh) : Kg.call(null, O(r(Lc.e(C(L, a), C(L, Oe), q([d], 0))), W.a(je, r(Lc.e(C(L, jf), C(L, 1887), q([C(L, cf), C(L, 16), C(L, kf), C(L, 1887), C(L, Ze), C(L, 29)], 0))))), uh)
}
function Qh(a) {
  return function(b) {
    return If(If(b, Nh(a)), function(b) {
      var d = yg(b, a), e = Ag(O(Ig, Wb(b)), d);
      if(0 === P(e)) {
        return Kg.a ? Kg.a(d, uh) : Kg.call(null, d, uh)
      }
      d = yg(e, d);
      return Ph(d, e, b)
    })
  }
}
var ph = function Rh(b) {
  "undefined" === typeof zf && (zf = function(b, d, e) {
    this.ra = b;
    this.Rc = d;
    this.kd = e;
    this.o = 0;
    this.f = 393217
  }, zf.Fa = !0, zf.Ea = "cljs.core.logic/t39229", zf.Na = function(b, d) {
    return E(d, "cljs.core.logic/t39229")
  }, zf.prototype.call = function(b, d) {
    b = this;
    var e = ih(b.ra, d);
    if(t(jh(e))) {
      e = e.b ? e.b(d) : e.call(null, d);
      if(t(e)) {
        var g = ih(b.ra, e);
        return Fh(g) && !Gh(b.ra, g, e) ? Bh(b.ra).call(null, e) : e
      }
      return null
    }
    return Bh(b.ra).call(null, d)
  }, zf.prototype.apply = function(b, d) {
    return this.call.apply(this, [this].concat(za(d)))
  }, zf.prototype.b = function(b) {
    var d = ih(this.ra, b);
    return t(jh(d)) ? (b = d.b ? d.b(b) : d.call(null, b), t(b) ? (d = ih(this.ra, b), Fh(d) && !Gh(this.ra, d, b) ? Bh(this.ra).call(null, b) : b) : null) : Bh(this.ra).call(null, b)
  }, zf.prototype.s = f("kd"), zf.prototype.t = function(b, d) {
    return new zf(this.ra, this.Rc, d)
  });
  return new zf(b, Rh, null)
};
function Sh(a, b) {
  return t($.b ? $.b(b) : $.call(null, b)) ? th(a, b) : b
}
function Th(a) {
  return function(b, c) {
    var d = Sh(a, b), e = Sh(a, c);
    return Mf(d) < Mf(e)
  }
}
function Uh(a, b, c) {
  b = Ye.b(Wb(b));
  return G.a(af, b) ? r(oc.a(Th(c), a)) : y ? a : null
}
function Vh(a, b) {
  if(a ? a.jc : a) {
    return a.jc(a, b)
  }
  var c;
  c = Vh[p(null == a ? null : a)];
  if(!c && (c = Vh._, !c)) {
    throw z("IForceAnswerTerm.-force-ans", a);
  }
  return c.call(null, a, b)
}
na.prototype.jc = function() {
  var a = function c(a) {
    return t(a) ? function(e) {
      return If(If(e, Oh.b ? Oh.b(vc(J(a))) : Oh.call(null, vc(J(a)))), c(M(a)))
    } : bh
  };
  return a.b ? a.b(r(this)) : a.call(null, r(this))
};
ge.prototype.jc = function() {
  var a = function c(a) {
    return t(a) ? function(e) {
      return If(If(e, Oh.b ? Oh.b(vc(J(a))) : Oh.call(null, vc(J(a)))), c(M(a)))
    } : bh
  };
  return a.b ? a.b(r(this)) : a.call(null, r(this))
};
Vh._ = function(a, b) {
  if(bc(a)) {
    var c = function e(a) {
      return t(a) ? function(c) {
        return If(If(c, Oh.b ? Oh.b(J(a)) : Oh.call(null, J(a))), function(c) {
          var h = Uh(M(a), b, c);
          return t(h) ? e(h).call(null, c) : c
        })
      } : bh
    };
    return c.b ? c.b(r(a)) : c.call(null, r(a))
  }
  return y ? t($.b ? $.b(b) : $.call(null, b)) ? xh(b, a) : bh : null
};
Vh["null"] = function() {
  return bh
};
function Oh(a) {
  return function(b) {
    var c;
    c = xg(b, a);
    if(t($.b ? $.b(c) : $.call(null, c))) {
      c = Vh(Sh(b, a), c)
    }else {
      var d = eg(b, a);
      c = bc(c) ? Vh(Uh(c, d, b), d) : Vh(c, d)
    }
    return c.call(null, b)
  }
}
function Wh(a, b, c, d) {
  if(a ? a.Ab : a) {
    return a.Ab(a, b, c, d)
  }
  var e;
  e = Wh[p(null == a ? null : a)];
  if(!e && (e = Wh._, !e)) {
    throw z("IDisunifyTerms.-disunify-terms", a);
  }
  return e.call(null, a, b, c, d)
}
var Xh = function() {
  function a(a, b, c, h) {
    if(b === c) {
      return h
    }
    b = xg(a, b);
    c = xg(a, c);
    if(b === c || G.a(b, c)) {
      a = h
    }else {
      var k;
      k = (k = w($.b ? $.b(b) : $.call(null, b))) ? $.b ? $.b(c) : $.call(null, c) : k;
      a = t(k) ? Wh(c, b, a, h) : Wh(b, c, a, h)
    }
    return a
  }
  function b(a, b, g) {
    return c.p(a, b, g, new na(null, 1, [Qe, Pd], null))
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
function Yh(a, b, c, d) {
  if(cc(a) && P(b) === P(a)) {
    for(var e = r(le(b));;) {
      if(e) {
        var g = J(e), h = U.c(a, g, Nf);
        if(G.a(h, Nf)) {
          return null
        }
        d = Xh.p(c, U.a(b, g), h, d);
        if(t(d)) {
          e = M(e)
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
Wh._ = function(a, b, c, d) {
  if(bc(a)) {
    if(bc(b)) {
      for(a = r(a), b = r(b);;) {
        if(t(a)) {
          if(t(b)) {
            var e = J(a), g = J(b);
            d = Xh.p(c, e, g, d);
            if(t(d)) {
              a = M(a), b = M(b)
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
    return y ? G.a(a, b) ? d : null : null
  }
};
ge.prototype.Ab = function(a, b, c, d) {
  return Yh(b, this, c, d)
};
na.prototype.Ab = function(a, b, c, d) {
  return Yh(b, this, c, d)
};
Mg.prototype.Ab = function(a, b, c, d) {
  a = hc(d) ? W.a(je, d) : d;
  c = U.a(a, Qe);
  return V.c(a, Qe, V.c(c, this, b))
};
Wh["null"] = function(a, b, c, d) {
  return null != b ? null : d
};
function Zh(a, b, c) {
  if(a ? a.ic : a) {
    return a.ic(a, b, c)
  }
  var d;
  d = Zh[p(null == a ? null : a)];
  if(!d && (d = Zh._, !d)) {
    throw z("IConstrainTree.-constrain-tree", a);
  }
  return d.call(null, a, b, c)
}
function $h(a, b, c) {
  for(a = r(a);;) {
    if(t(a)) {
      var d = J(a);
      T.c(d, 0, null);
      d = T.c(d, 1, null);
      c = b.a ? b.a(d, c) : b.call(null, d, c);
      if(t(c)) {
        a = M(a)
      }else {
        return null
      }
    }else {
      return c
    }
  }
}
Zh._ = function(a, b, c) {
  if(bc(a)) {
    for(a = r(a);;) {
      if(t(a)) {
        if(c = b.a ? b.a(J(a), c) : b.call(null, J(a), c), t(c)) {
          a = M(a)
        }else {
          return null
        }
      }else {
        return c
      }
    }
  }else {
    return Zf(a) ? $h(a, b, c) : null
  }
};
ge.prototype.ic = function(a, b, c) {
  return $h(this, b, c)
};
na.prototype.ic = function(a, b, c) {
  return $h(this, b, c)
};
function ai(a, b) {
  return function(c) {
    return Zh(a, b, c)
  }
}
function bi() {
  var a = performance.now();
  (function() {
    for(var b = 0;;) {
      if(1E3 > b) {
        xe.b(function() {
          var c = new na(null, 3, [Pe, !0, df, !1, mf, vd], null), d = (new ah(function(a, b, c, d) {
            return function() {
              return function(a, b, c, d) {
                return function(e) {
                  return new ah(function(a, b, c, d) {
                    return function() {
                      var g = Qg.b ? Qg.b(new H(null, "q", "q", -1640531414, null)) : Qg.call(null, new H(null, "q", "q", -1640531414, null));
                      return If(If(e, function(a, b) {
                        return function(a) {
                          var c = 0 < P(a.u);
                          a = zg(c ? new Fg(a.l, vd, a.V, a.u, a.U, a.N, a.T, a.q) : a, b, !0);
                          return t(a) ? (c = c ? a.ba : null, 0 < P(c) ? Jg(c, a.u, Ve).call(null, new Fg(a.l, null, a.V, a.u, a.U, a.N, a.T, a.q)) : a) : null
                        }
                      }(a, g, b, c, d)), Qh(g))
                    }
                  }(a, b, c, d))
                }
              }(a, b, c, d).call(null, Lg.a(Pe.b(b), oe.e(q([new na(null, 1, [Se, !0], null), b], 0))))
            }
          }(b, c, 1E3, a))).kb(null), c = df.b(c);
          return t(c) ? Zc(c, d) : d
        }()), b += 1
      }else {
        return null
      }
    }
  })();
  return Je.e(q([[A("Elapsed time: "), A((performance.now() - a).toFixed(6)), A(" msecs")].join("")], 0))
}
function ci() {
  ua();
  return bi()
}
var di = ["cljs", "core", "logic", "_main"], ei = this;
di[0] in ei || !ei.execScript || ei.execScript("var " + di[0]);
for(var fi;di.length && (fi = di.shift());) {
  di.length || void 0 === ci ? ei = ei[fi] ? ei[fi] : ei[fi] = {} : ei[fi] = ci
}
;Mf.number = m(1);
var gi = Sb([new H(null, "+", "+", -1640531484, null), new H(null, "*", "*", -1640531485, null), new H(null, "-", "-", -1640531482, null), new H(null, "/", "/", -1640531480, null), new H(null, "\x3c", "\x3c", -1640531467, null), new H(null, "!\x3d", "!\x3d", -1640530443, null), new H(null, "\x3d", "\x3d", -1640531466, null), new H(null, "\x3e", "\x3e", -1640531465, null), new H(null, "\x3e\x3d", "\x3e\x3d", -1640529544, null), new H(null, "\x3c\x3d", "\x3c\x3d", -1640529606, null)], [new H("cljs.core.logic.fd", 
"+", "cljs.core.logic.fd/+", 1528484149, null), new H("cljs.core.logic.fd", "*", "cljs.core.logic.fd/*", 1528484146, null), new H("cljs.core.logic.fd", "-", "cljs.core.logic.fd/-", 1528484151, null), new H("cljs.core.logic.fd", "quot", "cljs.core.logic.fd/quot", 1533391379, null), new H("cljs.core.logic.fd", "\x3c", "cljs.core.logic.fd/\x3c", 1528484292, null), new H("cljs.core.logic.fd", "!\x3d", "cljs.core.logic.fd/!\x3d", 1528485316, null), new H("cljs.core.logic.fd", "\x3d\x3d", "cljs.core.logic.fd/\x3d\x3d", 
1528485544, null), new H("cljs.core.logic.fd", "\x3e", "cljs.core.logic.fd/\x3e", 1528484294, null), new H("cljs.core.logic.fd", "\x3e\x3d", "cljs.core.logic.fd/\x3e\x3d", 1528482121, null), new H("cljs.core.logic.fd", "\x3c\x3d", "cljs.core.logic.fd/\x3c\x3d", 1528485515, null)]);
(function(a) {
  a = r(a);
  if(null == a) {
    return re
  }
  if(a instanceof Gb) {
    a = a.d;
    a: {
      for(var b = 0, c = pb(re);;) {
        if(b < a.length) {
          var d = b + 1, c = c.Ma(null, a[b]), b = d
        }else {
          a = c;
          break a
        }
      }
      a = void 0
    }
    return a.Ta(null)
  }
  if(y) {
    for(d = pb(re);;) {
      if(null != a) {
        b = a.ca(null), d = d.Ma(null, a.S(null)), a = b
      }else {
        return d.Ta(null)
      }
    }
  }else {
    return null
  }
})(le(gi));
var hi, ii, ji, ki;
function li(a, b, c) {
  if(a ? a.qc : a) {
    return a.qc(a, b, c)
  }
  var d;
  d = li[p(null == a ? null : a)];
  if(!d && (d = li._, !d)) {
    throw z("INomSwap.swap-noms", a);
  }
  return d.call(null, a, b, c)
}
X.prototype.qc = function(a, b, c) {
  b = li(r(this), b, c);
  a = T.c(b, 0, null);
  b = T.c(b, 1, null);
  return new X(null, 2, 5, Y, [wd(a), b], null)
};
Mg.prototype.qc = function(a, b, c) {
  var d = xg(c, this);
  if(t($.b ? $.b(d) : $.call(null, d))) {
    a = O(Qg.j ? Qg.j() : Qg.call(null), Wb(d));
    var e = hg(c, d);
    b = (mi.c ? mi.c(a, d, b) : mi.call(null, a, d, b)).call(null, wh(bg(e) ? wg(c, a, e) : c, d, a));
    return new X(null, 2, 5, Y, [a, b], null)
  }
  return li(d, b, c)
};
li._ = function(a, b, c) {
  if(ac(a)) {
    if(r(a)) {
      var d = li(J(a), b, c);
      c = T.c(d, 0, null);
      d = T.c(d, 1, null);
      d = li(M(a), b, d);
      b = T.c(d, 0, null);
      d = T.c(d, 1, null);
      return new X(null, 2, 5, Y, [O(N(c, b), Wb(a)), d], null)
    }
    return new X(null, 2, 5, Y, [a, c], null)
  }
  return cc(a) ? (c = li(r(a), b, c), a = T.c(c, 0, null), d = T.c(c, 1, null), new X(null, 2, 5, Y, [gd(Pd, a), d], null)) : y ? new X(null, 2, 5, Y, [a, c], null) : null
};
li["null"] = function(a, b, c) {
  return new X(null, 2, 5, Y, [a, c], null)
};
var qi = function ni(b, c) {
  "undefined" === typeof hi && (hi = function(b, c, g, h) {
    this.x = b;
    this.A = c;
    this.ma = g;
    this.Jb = h;
    this.o = 0;
    this.f = 393216
  }, hi.Fa = !0, hi.Ea = "cljs.core.logic.nominal/t34755", hi.Na = function(b, c) {
    return E(c, "cljs.core.logic.nominal/t34755")
  }, hi.prototype.zb = function() {
    return new pe(null, new na(null, 1, [Ve, null], null), null)
  }, hi.prototype.kc = !0, hi.prototype.Eb = function(b, c, g, h) {
    b = yg(g, yg(h, this.x));
    g = yg(g, yg(h, this.A));
    return g instanceof H && $b(dd($, fd(C(L, b)))) ? Fb.b([A(g), A("#"), A(b)].join("")) : null
  }, hi.prototype.xb = function() {
    return new X(null, 2, 5, Y, [this.A, this.x], null)
  }, hi.prototype.yb = function(b, c) {
    var g = xg(c, this.A), h = xg(c, this.x);
    "undefined" === typeof ii && (ii = function(b, c, d, e, g, h, Q) {
      this.l = b;
      this.ha = c;
      this.Jb = d;
      this.x = e;
      this.A = g;
      this.ma = h;
      this.fd = Q;
      this.o = 0;
      this.f = 393217
    }, ii.Fa = !0, ii.Ea = "cljs.core.logic.nominal/t34758", ii.Na = function(b, c) {
      return E(c, "cljs.core.logic.nominal/t34758")
    }, ii.prototype.Fb = function() {
      if(t($.b ? $.b(this.A) : $.call(null, this.A))) {
        var b;
        b = $.b ? $.b(this.x) : $.call(null, this.x);
        b = t(b) ? G.a(this.x, this.A) : b;
        return t(b) ? b : Gg(this.x) && w(oi.b ? oi.b(this.x) : oi.call(null))
      }
      return!0
    }, ii.prototype.call = function(b, c) {
      b = this;
      return hh.a(nh(b.ha), function(c) {
        return t(function() {
          var c = $.b ? $.b(b.A) : $.call(null, b.A);
          return t(c) ? (c = $.b ? $.b(b.x) : $.call(null, b.x), t(c) ? G.a(b.x, b.A) : c) : c
        }()) ? null : w($.b ? $.b(b.A) : $.call(null, b.A)) ? null : t(!1) ? c : Gg(b.x) && w(oi.b ? oi.b(b.x) : oi.call(null)) ? ai(b.x, function(c, d) {
          return(pi.a ? pi.a(b.A, c) : pi.call(null, b.A, c)).call(null, d)
        }).call(null, c) : y ? c : null
      }).call(null, c)
    }, ii.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(za(c)))
    }, ii.prototype.b = function(b) {
      var c = this;
      return hh.a(nh(c.ha), function(b) {
        return t(function() {
          var b = $.b ? $.b(c.A) : $.call(null, c.A);
          return t(b) ? (b = $.b ? $.b(c.x) : $.call(null, c.x), t(b) ? G.a(c.x, c.A) : b) : b
        }()) ? null : w($.b ? $.b(c.A) : $.call(null, c.A)) ? null : t(!1) ? b : Gg(c.x) && w(oi.b ? oi.b(c.x) : oi.call(null)) ? ai(c.x, function(b, d) {
          return(pi.a ? pi.a(c.A, b) : pi.call(null, c.A, b)).call(null, d)
        }).call(null, b) : y ? b : null
      }).call(null, b)
    }, ii.prototype.s = f("fd"), ii.prototype.t = function(b, c) {
      return new ii(this.l, this.ha, this.Jb, this.x, this.A, this.ma, c)
    });
    return new ii(c, this, this.Jb, h, g, this.ma, null)
  }, hi.prototype.toString = function() {
    return[A(this.A), A("#"), A(this.x)].join("")
  }, hi.prototype.s = f("Jb"), hi.prototype.t = function(b, c) {
    return new hi(this.x, this.A, this.ma, c)
  });
  return new hi(c, b, ni, null)
};
function pi(a, b) {
  return ph(qi(a, b))
}
function ri(a, b, c, d) {
  var e = function() {
    for(var c = se([b]), e = re;;) {
      var g = vf.a(c, e);
      if($b(g)) {
        return!0
      }
      if(t(Sc(function() {
        return function(b) {
          return ug(d, b, a)
        }
      }(c, e, g), g))) {
        return!1
      }
      if(y) {
        c = B.c(function() {
          return function(a, b) {
            return uf.a(a, hg(d, b).da)
          }
        }(c, e, g), re, g), e = uf.a(g, e)
      }else {
        return null
      }
    }
  }();
  if(t(e)) {
    c = li(a, c, d);
    var g = T.c(c, 0, null);
    c = T.c(c, 1, null);
    return function(a) {
      var c = 0 < P(a.u);
      a = zg(c ? new Fg(a.l, vd, a.V, a.u, a.U, a.N, a.T, a.q) : a, g, b);
      return t(a) ? (c = c ? a.ba : null, 0 < P(c) ? Jg(c, a.u, Ve).call(null, new Fg(a.l, null, a.V, a.u, a.U, a.N, a.T, a.q)) : a) : null
    }.call(null, c)
  }
  return null
}
var ti = function si(b, c, d) {
  "undefined" === typeof ji && (ji = function(b, c, d, k, l) {
    this.pa = b;
    this.Sa = c;
    this.Ra = d;
    this.tb = k;
    this.Kb = l;
    this.o = 0;
    this.f = 393216
  }, ji.Fa = !0, ji.Ea = "cljs.core.logic.nominal/t34774", ji.Na = function(b, c) {
    return E(c, "cljs.core.logic.nominal/t34774")
  }, ji.prototype.zb = function() {
    return new pe(null, new na(null, 1, [Ve, null], null), null)
  }, ji.prototype.kc = !0, ji.prototype.Eb = function(b, c, d, k) {
    b = yg(d, yg(k, this.Ra));
    k = yg(d, yg(k, this.Sa));
    d = yg(d, this.pa);
    return w($.b ? $.b(b) : $.call(null, b)) && w($.b ? $.b(k) : $.call(null, k)) && J(d) instanceof H && J(M(d)) instanceof H ? O(r(Lc.e(C(L, new H(null, "swap", "swap", -1636988084, null)), C(L, d), q([C(L, b), C(L, k)], 0))), W.a(je, r(Lc.e(C(L, jf), C(L, 247), q([C(L, cf), C(L, 12), C(L, kf), C(L, 247), C(L, Ze), C(L, 34)], 0))))) : null
  }, ji.prototype.xb = function() {
    return new X(null, 2, 5, Y, [this.Ra, this.Sa], null)
  }, ji.prototype.yb = function(b, c) {
    var d = xg(c, this.Ra), k = xg(c, this.Sa);
    "undefined" === typeof ki && (ki = function(b, c, d, e, g, h, k, S, ta, Ca) {
      this.ka = b;
      this.qa = c;
      this.A = d;
      this.ha = e;
      this.Kb = g;
      this.pa = h;
      this.Sa = k;
      this.Ra = S;
      this.tb = ta;
      this.gd = Ca;
      this.o = 0;
      this.f = 393217
    }, ki.Fa = !0, ki.Ea = "cljs.core.logic.nominal/t34777", ki.Na = function(b, c) {
      return E(c, "cljs.core.logic.nominal/t34777")
    }, ki.prototype.Fb = function() {
      return w($.b ? $.b(this.qa) : $.call(null, this.qa)) || w($.b ? $.b(this.ka) : $.call(null, this.ka)) || G.a(this.qa, this.ka)
    }, ki.prototype.call = function(b, c) {
      b = this;
      return hh.a(nh(b.ha), function(c) {
        if(w($.b ? $.b(b.qa) : $.call(null, b.qa))) {
          return ri(b.qa, b.ka, b.pa, c)
        }
        if(w($.b ? $.b(b.ka) : $.call(null, b.ka))) {
          return ri(b.ka, b.qa, b.pa, c)
        }
        if(y) {
          for(var d = b.pa, e = c;;) {
            if($b(d)) {
              return e
            }
            c = K(d);
            e = pi(J(d), b.ka).call(null, e);
            d = c
          }
        }else {
          return null
        }
      }).call(null, c)
    }, ki.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(za(c)))
    }, ki.prototype.b = function(b) {
      var c = this;
      return hh.a(nh(c.ha), function(b) {
        if(w($.b ? $.b(c.qa) : $.call(null, c.qa))) {
          return ri(c.qa, c.ka, c.pa, b)
        }
        if(w($.b ? $.b(c.ka) : $.call(null, c.ka))) {
          return ri(c.ka, c.qa, c.pa, b)
        }
        if(y) {
          for(var d = c.pa, e = b;;) {
            if($b(d)) {
              return e
            }
            b = K(d);
            e = pi(J(d), c.ka).call(null, e);
            d = b
          }
        }else {
          return null
        }
      }).call(null, b)
    }, ki.prototype.s = f("gd"), ki.prototype.t = function(b, c) {
      return new ki(this.ka, this.qa, this.A, this.ha, this.Kb, this.pa, this.Sa, this.Ra, this.tb, c)
    });
    return new ki(k, d, c, this, this.Kb, this.pa, this.Sa, this.Ra, this.tb, null)
  }, ji.prototype.toString = function() {
    return[A("suspc"), A(this.Ra), A(this.Sa), A(this.pa)].join("")
  }, ji.prototype.s = f("Kb"), ji.prototype.t = function(b, c) {
    return new ji(this.pa, this.Sa, this.Ra, this.tb, c)
  });
  return new ji(d, c, b, si, null)
};
function mi(a, b, c) {
  return ph(ti(a, b, c))
}
function oi() {
  return!1
}
;
})();

//# sourceMappingURL=adv.js.map