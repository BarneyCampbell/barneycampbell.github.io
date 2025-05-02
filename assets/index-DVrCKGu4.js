const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PostView-BrdcEJIo.js","assets/PostView-B_s5-Cn5.css","assets/PostsView-JEsdIqcU.js","assets/PostsView-DRhEw9bm.css"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
let Pf, xe, lh, md, vd, cd, J, ie, be, Ye, kt, de, gh, ut, mh, Si, ar, vc, ph, wh, oe, xd, Ie, yo, Zs, Yd, je;
let __tla = (async () => {
  var _t2, _e2, _s2, _a2, _t3, _e3, _s3, _b, _t4, _c2, _t5, _e4, _s4, _n2, _r2, _l2, _o2, _Td_instances, i_fn, _d2, _t6, _e5, _t7, _e6, _s5, _Fd_instances, n_fn, _f2, _t8, _e7, _s6, _g, _t9, _e8, _s7, _n3, _r3, _l3, _o3, _i2, _h, _t10, _e9, _s8, _n4, _r4, _l4, _o4, _i3, _m, _d3, _h2, _c3, _u2, _a3, _p, _$d_instances, f_fn, g_fn, y_fn, b_fn, v_fn, w_fn, __fn, x_fn, S_fn, _i4;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
    new MutationObserver((r) => {
      for (const i of r) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function s(r) {
      const i = {};
      return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function n(r) {
      if (r.ep) return;
      r.ep = true;
      const i = s(r);
      fetch(r.href, i);
    }
  })();
  function Jn(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const s of e.split(",")) t[s] = 1;
    return (s) => s in t;
  }
  const se = {}, qt = [], lt = () => {
  }, Ol = () => false, Gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xn = (e) => e.startsWith("onUpdate:"), Ce = Object.assign, Zn = (e, t) => {
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1);
  }, kl = Object.prototype.hasOwnProperty, te = (e, t) => kl.call(e, t), H = Array.isArray, Bt = (e) => Ws(e) === "[object Map]", Fi = (e) => Ws(e) === "[object Set]", z = (e) => typeof e == "function", ge = (e) => typeof e == "string", bt = (e) => typeof e == "symbol", ue = (e) => e !== null && typeof e == "object", Di = (e) => (ue(e) || z(e)) && z(e.then) && z(e.catch), ji = Object.prototype.toString, Ws = (e) => ji.call(e), Al = (e) => Ws(e).slice(8, -1), Li = (e) => Ws(e) === "[object Object]", er = (e) => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, as = Jn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ys = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (s) => t[s] || (t[s] = e(s));
  }, Ml = /-(\w)/g, ze = Ys((e) => e.replace(Ml, (t, s) => s ? s.toUpperCase() : "")), Tl = /\B([A-Z])/g, At = Ys((e) => e.replace(Tl, "-$1").toLowerCase()), Js = Ys((e) => e.charAt(0).toUpperCase() + e.slice(1)), un = Ys((e) => e ? `on${Js(e)}` : ""), De = (e, t) => !Object.is(e, t), fn = (e, ...t) => {
    for (let s = 0; s < e.length; s++) e[s](...t);
  }, $i = (e, t, s, n = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: n,
      value: s
    });
  }, Il = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  let Er;
  const Xs = () => Er || (Er = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function tr(e) {
    if (H(e)) {
      const t = {};
      for (let s = 0; s < e.length; s++) {
        const n = e[s], r = ge(n) ? Ll(n) : tr(n);
        if (r) for (const i in r) t[i] = r[i];
      }
      return t;
    } else if (ge(e) || ue(e)) return e;
  }
  const Fl = /;(?![^(]*\))/g, Dl = /:([^]+)/, jl = /\/\*[^]*?\*\//g;
  function Ll(e) {
    const t = {};
    return e.replace(jl, "").split(Fl).forEach((s) => {
      if (s) {
        const n = s.split(Dl);
        n.length > 1 && (t[n[0].trim()] = n[1].trim());
      }
    }), t;
  }
  function Rs(e) {
    let t = "";
    if (ge(e)) t = e;
    else if (H(e)) for (let s = 0; s < e.length; s++) {
      const n = Rs(e[s]);
      n && (t += n + " ");
    }
    else if (ue(e)) for (const s in e) e[s] && (t += s + " ");
    return t.trim();
  }
  const $l = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nl = Jn($l);
  function Ni(e) {
    return !!e || e === "";
  }
  let Ui, Qi, dn;
  Ui = (e) => !!(e && e.__v_isRef === true);
  Zs = (e) => ge(e) ? e : e == null ? "" : H(e) || ue(e) && (e.toString === ji || !z(e.toString)) ? Ui(e) ? Zs(e.value) : JSON.stringify(e, Qi, 2) : String(e);
  Qi = (e, t) => Ui(t) ? Qi(e, t.value) : Bt(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((s, [n, r], i) => (s[dn(n, i) + " =>"] = r, s), {})
  } : Fi(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((s) => dn(s))
  } : bt(t) ? dn(t) : ue(t) && !H(t) && !Li(t) ? String(t) : t;
  dn = (e, t = "") => {
    var s;
    return bt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
  };
  let Me;
  class Ul {
    constructor(t = false) {
      this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Me, !t && Me && (this.index = (Me.scopes || (Me.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, s;
        if (this.scopes) for (t = 0, s = this.scopes.length; t < s; t++) this.scopes[t].pause();
        for (t = 0, s = this.effects.length; t < s; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, s;
        if (this.scopes) for (t = 0, s = this.scopes.length; t < s; t++) this.scopes[t].resume();
        for (t = 0, s = this.effects.length; t < s; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const s = Me;
        try {
          return Me = this, t();
        } finally {
          Me = s;
        }
      }
    }
    on() {
      Me = this;
    }
    off() {
      Me = this.parent;
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let s, n;
        for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
        for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
        if (this.cleanups.length = 0, this.scopes) {
          for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const r = this.parent.scopes.pop();
          r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function Ql() {
    return Me;
  }
  function Hl(e, t = false) {
    Me && Me.cleanups.push(e);
  }
  let ce;
  const hn = /* @__PURE__ */ new WeakSet();
  class Hi {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && Me.active && Me.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, hn.has(this) && (hn.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zi(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Or(this), qi(this);
      const t = ce, s = Ze;
      ce = this, Ze = true;
      try {
        return this.fn();
      } finally {
        Bi(this), ce = t, Ze = s, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) rr(t);
        this.deps = this.depsTail = void 0, Or(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? hn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      On(this) && this.run();
    }
    get dirty() {
      return On(this);
    }
  }
  let Vi = 0, cs, us;
  function zi(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = us, us = e;
      return;
    }
    e.next = cs, cs = e;
  }
  function sr() {
    Vi++;
  }
  function nr() {
    if (--Vi > 0) return;
    if (us) {
      let t = us;
      for (us = void 0; t; ) {
        const s = t.next;
        t.next = void 0, t.flags &= -9, t = s;
      }
    }
    let e;
    for (; cs; ) {
      let t = cs;
      for (cs = void 0; t; ) {
        const s = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
        t = s;
      }
    }
    if (e) throw e;
  }
  function qi(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Bi(e) {
    let t, s = e.depsTail, n = s;
    for (; n; ) {
      const r = n.prevDep;
      n.version === -1 ? (n === s && (s = r), rr(n), Vl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
    }
    e.deps = t, e.depsTail = s;
  }
  function On(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ki(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Ki(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ms)) return;
    e.globalVersion = ms;
    const t = e.dep;
    if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !On(e)) {
      e.flags &= -3;
      return;
    }
    const s = ce, n = Ze;
    ce = e, Ze = true;
    try {
      qi(e);
      const r = e.fn(e._value);
      (t.version === 0 || De(r, e._value)) && (e._value = r, t.version++);
    } catch (r) {
      throw t.version++, r;
    } finally {
      ce = s, Ze = n, Bi(e), e.flags &= -3;
    }
  }
  function rr(e, t = false) {
    const { dep: s, prevSub: n, nextSub: r } = e;
    if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
      s.computed.flags &= -5;
      for (let i = s.computed.deps; i; i = i.nextDep) rr(i, true);
    }
    !t && !--s.sc && s.map && s.map.delete(s.key);
  }
  function Vl(e) {
    const { prevDep: t, nextDep: s } = e;
    t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
  }
  let Ze = true;
  const Gi = [];
  function Mt() {
    Gi.push(Ze), Ze = false;
  }
  function Tt() {
    const e = Gi.pop();
    Ze = e === void 0 ? true : e;
  }
  function Or(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const s = ce;
      ce = void 0;
      try {
        t();
      } finally {
        ce = s;
      }
    }
  }
  let ms = 0;
  class zl {
    constructor(t, s) {
      this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class en {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(t) {
      if (!ce || !Ze || ce === this.computed) return;
      let s = this.activeLink;
      if (s === void 0 || s.sub !== ce) s = this.activeLink = new zl(ce, this), ce.deps ? (s.prevDep = ce.depsTail, ce.depsTail.nextDep = s, ce.depsTail = s) : ce.deps = ce.depsTail = s, Wi(s);
      else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
        const n = s.nextDep;
        n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ce.depsTail, s.nextDep = void 0, ce.depsTail.nextDep = s, ce.depsTail = s, ce.deps === s && (ce.deps = n);
      }
      return s;
    }
    trigger(t) {
      this.version++, ms++, this.notify(t);
    }
    notify(t) {
      sr();
      try {
        for (let s = this.subs; s; s = s.prevSub) s.sub.notify() && s.sub.dep.notify();
      } finally {
        nr();
      }
    }
  }
  function Wi(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let n = t.deps; n; n = n.nextDep) Wi(n);
      }
      const s = e.dep.subs;
      s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
    }
  }
  const Ns = /* @__PURE__ */ new WeakMap(), Lt = Symbol(""), kn = Symbol(""), gs = Symbol("");
  function Pe(e, t, s) {
    if (Ze && ce) {
      let n = Ns.get(e);
      n || Ns.set(e, n = /* @__PURE__ */ new Map());
      let r = n.get(s);
      r || (n.set(s, r = new en()), r.map = n, r.key = s), r.track();
    }
  }
  function yt(e, t, s, n, r, i) {
    const o = Ns.get(e);
    if (!o) {
      ms++;
      return;
    }
    const l = (a) => {
      a && a.trigger();
    };
    if (sr(), t === "clear") o.forEach(l);
    else {
      const a = H(e), f = a && er(s);
      if (a && s === "length") {
        const c = Number(n);
        o.forEach((d, m) => {
          (m === "length" || m === gs || !bt(m) && m >= c) && l(d);
        });
      } else switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), f && l(o.get(gs)), t) {
        case "add":
          a ? f && l(o.get("length")) : (l(o.get(Lt)), Bt(e) && l(o.get(kn)));
          break;
        case "delete":
          a || (l(o.get(Lt)), Bt(e) && l(o.get(kn)));
          break;
        case "set":
          Bt(e) && l(o.get(Lt));
          break;
      }
    }
    nr();
  }
  function ql(e, t) {
    const s = Ns.get(e);
    return s && s.get(t);
  }
  function Qt(e) {
    const t = Z(e);
    return t === e ? t : (Pe(t, "iterate", gs), We(e) ? t : t.map(Ee));
  }
  function tn(e) {
    return Pe(e = Z(e), "iterate", gs), e;
  }
  const Bl = {
    __proto__: null,
    [Symbol.iterator]() {
      return pn(this, Symbol.iterator, Ee);
    },
    concat(...e) {
      return Qt(this).concat(...e.map((t) => H(t) ? Qt(t) : t));
    },
    entries() {
      return pn(this, "entries", (e) => (e[1] = Ee(e[1]), e));
    },
    every(e, t) {
      return ht(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return ht(this, "filter", e, t, (s) => s.map(Ee), arguments);
    },
    find(e, t) {
      return ht(this, "find", e, t, Ee, arguments);
    },
    findIndex(e, t) {
      return ht(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return ht(this, "findLast", e, t, Ee, arguments);
    },
    findLastIndex(e, t) {
      return ht(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return ht(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return mn(this, "includes", e);
    },
    indexOf(...e) {
      return mn(this, "indexOf", e);
    },
    join(e) {
      return Qt(this).join(e);
    },
    lastIndexOf(...e) {
      return mn(this, "lastIndexOf", e);
    },
    map(e, t) {
      return ht(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return ns(this, "pop");
    },
    push(...e) {
      return ns(this, "push", e);
    },
    reduce(e, ...t) {
      return kr(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return kr(this, "reduceRight", e, t);
    },
    shift() {
      return ns(this, "shift");
    },
    some(e, t) {
      return ht(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return ns(this, "splice", e);
    },
    toReversed() {
      return Qt(this).toReversed();
    },
    toSorted(e) {
      return Qt(this).toSorted(e);
    },
    toSpliced(...e) {
      return Qt(this).toSpliced(...e);
    },
    unshift(...e) {
      return ns(this, "unshift", e);
    },
    values() {
      return pn(this, "values", Ee);
    }
  };
  function pn(e, t, s) {
    const n = tn(e), r = n[t]();
    return n !== e && !We(e) && (r._next = r.next, r.next = () => {
      const i = r._next();
      return i.value && (i.value = s(i.value)), i;
    }), r;
  }
  const Kl = Array.prototype;
  function ht(e, t, s, n, r, i) {
    const o = tn(e), l = o !== e && !We(e), a = o[t];
    if (a !== Kl[t]) {
      const d = a.apply(e, i);
      return l ? Ee(d) : d;
    }
    let f = s;
    o !== e && (l ? f = function(d, m) {
      return s.call(this, Ee(d), m, e);
    } : s.length > 2 && (f = function(d, m) {
      return s.call(this, d, m, e);
    }));
    const c = a.call(o, f, n);
    return l && r ? r(c) : c;
  }
  function kr(e, t, s, n) {
    const r = tn(e);
    let i = s;
    return r !== e && (We(e) ? s.length > 3 && (i = function(o, l, a) {
      return s.call(this, o, l, a, e);
    }) : i = function(o, l, a) {
      return s.call(this, o, Ee(l), a, e);
    }), r[t](i, ...n);
  }
  function mn(e, t, s) {
    const n = Z(e);
    Pe(n, "iterate", gs);
    const r = n[t](...s);
    return (r === -1 || r === false) && lr(s[0]) ? (s[0] = Z(s[0]), n[t](...s)) : r;
  }
  function ns(e, t, s = []) {
    Mt(), sr();
    const n = Z(e)[t].apply(e, s);
    return nr(), Tt(), n;
  }
  const Gl = Jn("__proto__,__v_isRef,__isVue"), Yi = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt));
  function Wl(e) {
    bt(e) || (e = String(e));
    const t = Z(this);
    return Pe(t, "has", e), t.hasOwnProperty(e);
  }
  class Ji {
    constructor(t = false, s = false) {
      this._isReadonly = t, this._isShallow = s;
    }
    get(t, s, n) {
      if (s === "__v_skip") return t.__v_skip;
      const r = this._isReadonly, i = this._isShallow;
      if (s === "__v_isReactive") return !r;
      if (s === "__v_isReadonly") return r;
      if (s === "__v_isShallow") return i;
      if (s === "__v_raw") return n === (r ? i ? no : so : i ? to : eo).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
      const o = H(t);
      if (!r) {
        let a;
        if (o && (a = Bl[s])) return a;
        if (s === "hasOwnProperty") return Wl;
      }
      const l = Reflect.get(t, s, ve(t) ? t : n);
      return (bt(s) ? Yi.has(s) : Gl(s)) || (r || Pe(t, "get", s), i) ? l : ve(l) ? o && er(s) ? l : l.value : ue(l) ? r ? or(l) : Ps(l) : l;
    }
  }
  class Xi extends Ji {
    constructor(t = false) {
      super(false, t);
    }
    set(t, s, n, r) {
      let i = t[s];
      if (!this._isShallow) {
        const a = Nt(i);
        if (!We(n) && !Nt(n) && (i = Z(i), n = Z(n)), !H(t) && ve(i) && !ve(n)) return a ? false : (i.value = n, true);
      }
      const o = H(t) && er(s) ? Number(s) < t.length : te(t, s), l = Reflect.set(t, s, n, ve(t) ? t : r);
      return t === Z(r) && (o ? De(n, i) && yt(t, "set", s, n) : yt(t, "add", s, n)), l;
    }
    deleteProperty(t, s) {
      const n = te(t, s);
      t[s];
      const r = Reflect.deleteProperty(t, s);
      return r && n && yt(t, "delete", s, void 0), r;
    }
    has(t, s) {
      const n = Reflect.has(t, s);
      return (!bt(s) || !Yi.has(s)) && Pe(t, "has", s), n;
    }
    ownKeys(t) {
      return Pe(t, "iterate", H(t) ? "length" : Lt), Reflect.ownKeys(t);
    }
  }
  class Zi extends Ji {
    constructor(t = false) {
      super(true, t);
    }
    set(t, s) {
      return true;
    }
    deleteProperty(t, s) {
      return true;
    }
  }
  const Yl = new Xi(), Jl = new Zi(), Xl = new Xi(true), Zl = new Zi(true), An = (e) => e, As = (e) => Reflect.getPrototypeOf(e);
  function ea(e, t, s) {
    return function(...n) {
      const r = this.__v_raw, i = Z(r), o = Bt(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = r[e](...n), c = s ? An : t ? Mn : Ee;
      return !t && Pe(i, "iterate", a ? kn : Lt), {
        next() {
          const { value: d, done: m } = f.next();
          return m ? {
            value: d,
            done: m
          } : {
            value: l ? [
              c(d[0]),
              c(d[1])
            ] : c(d),
            done: m
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function Ms(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function ta(e, t) {
    const s = {
      get(r) {
        const i = this.__v_raw, o = Z(i), l = Z(r);
        e || (De(r, l) && Pe(o, "get", r), Pe(o, "get", l));
        const { has: a } = As(o), f = t ? An : e ? Mn : Ee;
        if (a.call(o, r)) return f(i.get(r));
        if (a.call(o, l)) return f(i.get(l));
        i !== o && i.get(r);
      },
      get size() {
        const r = this.__v_raw;
        return !e && Pe(Z(r), "iterate", Lt), Reflect.get(r, "size", r);
      },
      has(r) {
        const i = this.__v_raw, o = Z(i), l = Z(r);
        return e || (De(r, l) && Pe(o, "has", r), Pe(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
      },
      forEach(r, i) {
        const o = this, l = o.__v_raw, a = Z(l), f = t ? An : e ? Mn : Ee;
        return !e && Pe(a, "iterate", Lt), l.forEach((c, d) => r.call(i, f(c), f(d), o));
      }
    };
    return Ce(s, e ? {
      add: Ms("add"),
      set: Ms("set"),
      delete: Ms("delete"),
      clear: Ms("clear")
    } : {
      add(r) {
        !t && !We(r) && !Nt(r) && (r = Z(r));
        const i = Z(this);
        return As(i).has.call(i, r) || (i.add(r), yt(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !We(i) && !Nt(i) && (i = Z(i));
        const o = Z(this), { has: l, get: a } = As(o);
        let f = l.call(o, r);
        f || (r = Z(r), f = l.call(o, r));
        const c = a.call(o, r);
        return o.set(r, i), f ? De(i, c) && yt(o, "set", r, i) : yt(o, "add", r, i), this;
      },
      delete(r) {
        const i = Z(this), { has: o, get: l } = As(i);
        let a = o.call(i, r);
        a || (r = Z(r), a = o.call(i, r)), l && l.call(i, r);
        const f = i.delete(r);
        return a && yt(i, "delete", r, void 0), f;
      },
      clear() {
        const r = Z(this), i = r.size !== 0, o = r.clear();
        return i && yt(r, "clear", void 0, void 0), o;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((r) => {
      s[r] = ea(r, e, t);
    }), s;
  }
  function sn(e, t) {
    const s = ta(e, t);
    return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(te(s, r) && r in n ? s : n, r, i);
  }
  const sa = {
    get: sn(false, false)
  }, na = {
    get: sn(false, true)
  }, ra = {
    get: sn(true, false)
  }, ia = {
    get: sn(true, true)
  }, eo = /* @__PURE__ */ new WeakMap(), to = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap();
  function oa(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function la(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : oa(Al(e));
  }
  function Ps(e) {
    return Nt(e) ? e : nn(e, false, Yl, sa, eo);
  }
  function ir(e) {
    return nn(e, false, Xl, na, to);
  }
  function or(e) {
    return nn(e, true, Jl, ra, so);
  }
  function aa(e) {
    return nn(e, true, Zl, ia, no);
  }
  function nn(e, t, s, n, r) {
    if (!ue(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = r.get(e);
    if (i) return i;
    const o = la(e);
    if (o === 0) return e;
    const l = new Proxy(e, o === 2 ? n : s);
    return r.set(e, l), l;
  }
  function Kt(e) {
    return Nt(e) ? Kt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Nt(e) {
    return !!(e && e.__v_isReadonly);
  }
  function We(e) {
    return !!(e && e.__v_isShallow);
  }
  function lr(e) {
    return e ? !!e.__v_raw : false;
  }
  function Z(e) {
    const t = e && e.__v_raw;
    return t ? Z(t) : e;
  }
  function ca(e) {
    return !te(e, "__v_skip") && Object.isExtensible(e) && $i(e, "__v_skip", true), e;
  }
  const Ee = (e) => ue(e) ? Ps(e) : e, Mn = (e) => ue(e) ? or(e) : e;
  function ve(e) {
    return e ? e.__v_isRef === true : false;
  }
  ar = function(e) {
    return io(e, false);
  };
  function ro(e) {
    return io(e, true);
  }
  function io(e, t) {
    return ve(e) ? e : new ua(e, t);
  }
  class ua {
    constructor(t, s) {
      this.dep = new en(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = s ? t : Z(t), this._value = s ? t : Ee(t), this.__v_isShallow = s;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const s = this._rawValue, n = this.__v_isShallow || We(t) || Nt(t);
      t = n ? t : Z(t), De(t, s) && (this._rawValue = t, this._value = n ? t : Ee(t), this.dep.trigger());
    }
  }
  de = function(e) {
    return ve(e) ? e.value : e;
  };
  const fa = {
    get: (e, t, s) => t === "__v_raw" ? e : de(Reflect.get(e, t, s)),
    set: (e, t, s, n) => {
      const r = e[t];
      return ve(r) && !ve(s) ? (r.value = s, true) : Reflect.set(e, t, s, n);
    }
  };
  function oo(e) {
    return Kt(e) ? e : new Proxy(e, fa);
  }
  class da {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const s = this.dep = new en(), { get: n, set: r } = t(s.track.bind(s), s.trigger.bind(s));
      this._get = n, this._set = r;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function ha(e) {
    return new da(e);
  }
  function pa(e) {
    const t = H(e) ? new Array(e.length) : {};
    for (const s in e) t[s] = ga(e, s);
    return t;
  }
  class ma {
    constructor(t, s, n) {
      this._object = t, this._key = s, this._defaultValue = n, this.__v_isRef = true, this._value = void 0;
    }
    get value() {
      const t = this._object[this._key];
      return this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return ql(Z(this._object), this._key);
    }
  }
  function ga(e, t, s) {
    const n = e[t];
    return ve(n) ? n : new ma(e, t, s);
  }
  class ya {
    constructor(t, s, n) {
      this.fn = t, this.setter = s, this._value = void 0, this.dep = new en(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ms - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && ce !== this) return zi(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Ki(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function ba(e, t, s = false) {
    let n, r;
    return z(e) ? n = e : (n = e.get, r = e.set), new ya(n, r, s);
  }
  const Ts = {}, Us = /* @__PURE__ */ new WeakMap();
  let jt;
  function va(e, t = false, s = jt) {
    if (s) {
      let n = Us.get(s);
      n || Us.set(s, n = []), n.push(e);
    }
  }
  function wa(e, t, s = se) {
    const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = s, f = (M) => r ? M : We(M) || r === false || r === 0 ? Pt(M, 1) : Pt(M);
    let c, d, m, p, _ = false, b = false;
    if (ve(e) ? (d = () => e.value, _ = We(e)) : Kt(e) ? (d = () => f(e), _ = true) : H(e) ? (b = true, _ = e.some((M) => Kt(M) || We(M)), d = () => e.map((M) => {
      if (ve(M)) return M.value;
      if (Kt(M)) return f(M);
      if (z(M)) return a ? a(M, 2) : M();
    })) : z(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
      if (m) {
        Mt();
        try {
          m();
        } finally {
          Tt();
        }
      }
      const M = jt;
      jt = c;
      try {
        return a ? a(e, 3, [
          p
        ]) : e(p);
      } finally {
        jt = M;
      }
    } : d = lt, t && r) {
      const M = d, B = r === true ? 1 / 0 : r;
      d = () => Pt(M(), B);
    }
    const $ = Ql(), R = () => {
      c.stop(), $ && $.active && Zn($.effects, c);
    };
    if (i && t) {
      const M = t;
      t = (...B) => {
        M(...B), R();
      };
    }
    let k = b ? new Array(e.length).fill(Ts) : Ts;
    const F = (M) => {
      if (!(!(c.flags & 1) || !c.dirty && !M)) if (t) {
        const B = c.run();
        if (r || _ || (b ? B.some((le, q) => De(le, k[q])) : De(B, k))) {
          m && m();
          const le = jt;
          jt = c;
          try {
            const q = [
              B,
              k === Ts ? void 0 : b && k[0] === Ts ? [] : k,
              p
            ];
            a ? a(t, 3, q) : t(...q), k = B;
          } finally {
            jt = le;
          }
        }
      } else c.run();
    };
    return l && l(F), c = new Hi(d), c.scheduler = o ? () => o(F, false) : F, p = (M) => va(M, false, c), m = c.onStop = () => {
      const M = Us.get(c);
      if (M) {
        if (a) a(M, 4);
        else for (const B of M) B();
        Us.delete(c);
      }
    }, t ? n ? F(true) : k = c.run() : o ? o(F.bind(null, true), true) : c.run(), R.pause = c.pause.bind(c), R.resume = c.resume.bind(c), R.stop = R, R;
  }
  function Pt(e, t = 1 / 0, s) {
    if (t <= 0 || !ue(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e))) return e;
    if (s.add(e), t--, ve(e)) Pt(e.value, t, s);
    else if (H(e)) for (let n = 0; n < e.length; n++) Pt(e[n], t, s);
    else if (Fi(e) || Bt(e)) e.forEach((n) => {
      Pt(n, t, s);
    });
    else if (Li(e)) {
      for (const n in e) Pt(e[n], t, s);
      for (const n of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, n) && Pt(e[n], t, s);
    }
    return e;
  }
  function Es(e, t, s, n) {
    try {
      return n ? e(...n) : e();
    } catch (r) {
      rn(r, t, s);
    }
  }
  function ct(e, t, s, n) {
    if (z(e)) {
      const r = Es(e, t, s, n);
      return r && Di(r) && r.catch((i) => {
        rn(i, t, s);
      }), r;
    }
    if (H(e)) {
      const r = [];
      for (let i = 0; i < e.length; i++) r.push(ct(e[i], t, s, n));
      return r;
    }
  }
  function rn(e, t, s, n = true) {
    const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || se;
    if (t) {
      let l = t.parent;
      const a = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${s}`;
      for (; l; ) {
        const c = l.ec;
        if (c) {
          for (let d = 0; d < c.length; d++) if (c[d](e, a, f) === false) return;
        }
        l = l.parent;
      }
      if (i) {
        Mt(), Es(i, null, 10, [
          e,
          a,
          f
        ]), Tt();
        return;
      }
    }
    _a(e, s, r, n, o);
  }
  function _a(e, t, s, n = true, r = false) {
    if (r) throw e;
    console.error(e);
  }
  const Te = [];
  let it = -1;
  const Gt = [];
  let xt = null, Vt = 0;
  const lo = Promise.resolve();
  let Qs = null;
  function cr(e) {
    const t = Qs || lo;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function xa(e) {
    let t = it + 1, s = Te.length;
    for (; t < s; ) {
      const n = t + s >>> 1, r = Te[n], i = ys(r);
      i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
    }
    return t;
  }
  function ur(e) {
    if (!(e.flags & 1)) {
      const t = ys(e), s = Te[Te.length - 1];
      !s || !(e.flags & 2) && t >= ys(s) ? Te.push(e) : Te.splice(xa(t), 0, e), e.flags |= 1, ao();
    }
  }
  function ao() {
    Qs || (Qs = lo.then(uo));
  }
  function Sa(e) {
    H(e) ? Gt.push(...e) : xt && e.id === -1 ? xt.splice(Vt + 1, 0, e) : e.flags & 1 || (Gt.push(e), e.flags |= 1), ao();
  }
  function Ar(e, t, s = it + 1) {
    for (; s < Te.length; s++) {
      const n = Te[s];
      if (n && n.flags & 2) {
        if (e && n.id !== e.uid) continue;
        Te.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
      }
    }
  }
  function co(e) {
    if (Gt.length) {
      const t = [
        ...new Set(Gt)
      ].sort((s, n) => ys(s) - ys(n));
      if (Gt.length = 0, xt) {
        xt.push(...t);
        return;
      }
      for (xt = t, Vt = 0; Vt < xt.length; Vt++) {
        const s = xt[Vt];
        s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
      }
      xt = null, Vt = 0;
    }
  }
  const ys = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function uo(e) {
    try {
      for (it = 0; it < Te.length; it++) {
        const t = Te[it];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Es(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; it < Te.length; it++) {
        const t = Te[it];
        t && (t.flags &= -2);
      }
      it = -1, Te.length = 0, co(), Qs = null, (Te.length || Gt.length) && uo();
    }
  }
  let Se = null, fo = null;
  function Hs(e) {
    const t = Se;
    return Se = e, fo = e && e.type.__scopeId || null, t;
  }
  je = function(e, t = Se, s) {
    if (!t || e._n) return e;
    const n = (...r) => {
      n._d && Nr(-1);
      const i = Hs(t);
      let o;
      try {
        o = e(...r);
      } finally {
        Hs(i), n._d && Nr(1);
      }
      return o;
    };
    return n._n = true, n._c = true, n._d = true, n;
  };
  function It(e, t, s, n) {
    const r = e.dirs, i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
      const l = r[o];
      i && (l.oldValue = i[o].value);
      let a = l.dir[n];
      a && (Mt(), ct(a, s, 8, [
        e.el,
        l,
        e,
        t
      ]), Tt());
    }
  }
  const Ca = Symbol("_vte"), Ra = (e) => e.__isTeleport;
  function fr(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, fr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  Ye = function(e, t) {
    return z(e) ? Ce({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function ho(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  function Vs(e, t, s, n, r = false) {
    if (H(e)) {
      e.forEach((_, b) => Vs(_, t && (H(t) ? t[b] : t), s, n, r));
      return;
    }
    if (Wt(n) && !r) {
      n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Vs(e, t, s, n.component.subTree);
      return;
    }
    const i = n.shapeFlag & 4 ? gr(n.component) : n.el, o = r ? null : i, { i: l, r: a } = e, f = t && t.r, c = l.refs === se ? l.refs = {} : l.refs, d = l.setupState, m = Z(d), p = d === se ? () => false : (_) => te(m, _);
    if (f != null && f !== a && (ge(f) ? (c[f] = null, p(f) && (d[f] = null)) : ve(f) && (f.value = null)), z(a)) Es(a, l, 12, [
      o,
      c
    ]);
    else {
      const _ = ge(a), b = ve(a);
      if (_ || b) {
        const $ = () => {
          if (e.f) {
            const R = _ ? p(a) ? d[a] : c[a] : a.value;
            r ? H(R) && Zn(R, i) : H(R) ? R.includes(i) || R.push(i) : _ ? (c[a] = [
              i
            ], p(a) && (d[a] = c[a])) : (a.value = [
              i
            ], e.k && (c[e.k] = a.value));
          } else _ ? (c[a] = o, p(a) && (d[a] = o)) : b && (a.value = o, e.k && (c[e.k] = o));
        };
        o ? ($.id = -1, He($, s)) : $();
      }
    }
  }
  Xs().requestIdleCallback;
  Xs().cancelIdleCallback;
  const Wt = (e) => !!e.type.__asyncLoader, po = (e) => e.type.__isKeepAlive;
  function Pa(e, t) {
    mo(e, "a", t);
  }
  function Ea(e, t) {
    mo(e, "da", t);
  }
  function mo(e, t, s = _e) {
    const n = e.__wdc || (e.__wdc = () => {
      let r = s;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
    if (on(t, n, s), s) {
      let r = s.parent;
      for (; r && r.parent; ) po(r.parent.vnode) && Oa(n, t, s, r), r = r.parent;
    }
  }
  function Oa(e, t, s, n) {
    const r = on(t, e, n, true);
    go(() => {
      Zn(n[t], r);
    }, s);
  }
  function on(e, t, s = _e, n = false) {
    if (s) {
      const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
        Mt();
        const l = Os(s), a = ct(t, s, e, o);
        return l(), Tt(), a;
      });
      return n ? r.unshift(i) : r.push(i), i;
    }
  }
  const vt = (e) => (t, s = _e) => {
    (!ws || e === "sp") && on(e, (...n) => t(...n), s);
  }, ka = vt("bm"), Aa = vt("m"), Ma = vt("bu"), Ta = vt("u"), Ia = vt("bum"), go = vt("um"), Fa = vt("sp"), Da = vt("rtg"), ja = vt("rtc");
  function La(e, t = _e) {
    on("ec", e, t);
  }
  const $a = "components";
  function dr(e, t) {
    return Ua($a, e, true, t) || e;
  }
  const Na = Symbol.for("v-ndc");
  function Ua(e, t, s = true, n = false) {
    const r = Se || _e;
    if (r) {
      const i = r.type;
      {
        const l = kc(i, false);
        if (l && (l === t || l === ze(t) || l === Js(ze(t)))) return i;
      }
      const o = Mr(r[e] || i[e], t) || Mr(r.appContext[e], t);
      return !o && n ? i : o;
    }
  }
  function Mr(e, t) {
    return e && (e[t] || e[ze(t)] || e[Js(ze(t))]);
  }
  yo = function(e, t, s, n) {
    let r;
    const i = s, o = H(e);
    if (o || ge(e)) {
      const l = o && Kt(e);
      let a = false;
      l && (a = !We(e), e = tn(e)), r = new Array(e.length);
      for (let f = 0, c = e.length; f < c; f++) r[f] = t(a ? Ee(e[f]) : e[f], f, void 0, i);
    } else if (typeof e == "number") {
      r = new Array(e);
      for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
    } else if (ue(e)) if (e[Symbol.iterator]) r = Array.from(e, (l, a) => t(l, a, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const c = l[a];
        r[a] = t(e[c], c, a, i);
      }
    }
    else r = [];
    return r;
  };
  function bo(e, t, s = {}, n, r) {
    if (Se.ce || Se.parent && Wt(Se.parent) && Se.parent.ce) return oe(), kt(xe, null, [
      J("slot", s, n)
    ], 64);
    let i = e[t];
    i && i._c && (i._d = false), oe();
    const o = i && vo(i(s)), l = s.key || o && o.key, a = kt(xe, {
      key: (l && !bt(l) ? l : `_${t}`) + ""
    }, o || [], o && e._ === 1 ? 64 : -2);
    return a.scopeId && (a.slotScopeIds = [
      a.scopeId + "-s"
    ]), i && i._c && (i._d = true), a;
  }
  function vo(e) {
    return e.some((t) => vs(t) ? !(t.type === Ot || t.type === xe && !vo(t.children)) : true) ? e : null;
  }
  const Tn = (e) => e ? Uo(e) ? gr(e) : Tn(e.parent) : null, fs = Ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Tn(e.parent),
    $root: (e) => Tn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => _o(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ur(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = cr.bind(e.proxy)),
    $watch: (e) => cc.bind(e)
  }), gn = (e, t) => e !== se && !e.__isScriptSetup && te(e, t), Qa = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: a } = e;
      let f;
      if (t[0] !== "$") {
        const p = o[t];
        if (p !== void 0) switch (p) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
        else {
          if (gn(n, t)) return o[t] = 1, n[t];
          if (r !== se && te(r, t)) return o[t] = 2, r[t];
          if ((f = e.propsOptions[0]) && te(f, t)) return o[t] = 3, i[t];
          if (s !== se && te(s, t)) return o[t] = 4, s[t];
          In && (o[t] = 0);
        }
      }
      const c = fs[t];
      let d, m;
      if (c) return t === "$attrs" && Pe(e.attrs, "get", ""), c(e);
      if ((d = l.__cssModules) && (d = d[t])) return d;
      if (s !== se && te(s, t)) return o[t] = 4, s[t];
      if (m = a.config.globalProperties, te(m, t)) return m[t];
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: r, ctx: i } = e;
      return gn(r, t) ? (r[t] = s, true) : n !== se && te(n, t) ? (n[t] = s, true) : te(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = s, true);
    },
    has({ _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: i } }, o) {
      let l;
      return !!s[o] || e !== se && te(e, o) || gn(t, o) || (l = i[0]) && te(l, o) || te(n, o) || te(fs, o) || te(r.config.globalProperties, o);
    },
    defineProperty(e, t, s) {
      return s.get != null ? e._.accessCache[t] = 0 : te(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
    }
  };
  function zs(e) {
    return H(e) ? e.reduce((t, s) => (t[s] = null, t), {}) : e;
  }
  ph = function(e, t) {
    return !e || !t ? e || t : H(e) && H(t) ? e.concat(t) : Ce({}, zs(e), zs(t));
  };
  let In = true;
  function Ha(e) {
    const t = _o(e), s = e.proxy, n = e.ctx;
    In = false, t.beforeCreate && Tr(t.beforeCreate, e, "bc");
    const { data: r, computed: i, methods: o, watch: l, provide: a, inject: f, created: c, beforeMount: d, mounted: m, beforeUpdate: p, updated: _, activated: b, deactivated: $, beforeDestroy: R, beforeUnmount: k, destroyed: F, unmounted: M, render: B, renderTracked: le, renderTriggered: q, errorCaptured: D, serverPrefetch: fe, expose: pe, inheritAttrs: Re, components: qe, directives: Le, filters: ft } = t;
    if (f && Va(f, n, null), o) for (const W in o) {
      const P = o[W];
      z(P) && (n[W] = P.bind(s));
    }
    if (r) {
      const W = r.call(s, s);
      ue(W) && (e.data = Ps(W));
    }
    if (In = true, i) for (const W in i) {
      const P = i[W], Be = z(P) ? P.bind(s, s) : z(P.get) ? P.get.bind(s, s) : lt, Je = !z(P) && z(P.set) ? P.set.bind(s) : lt, Ne = Ge({
        get: Be,
        set: Je
      });
      Object.defineProperty(n, W, {
        enumerable: true,
        configurable: true,
        get: () => Ne.value,
        set: (we) => Ne.value = we
      });
    }
    if (l) for (const W in l) wo(l[W], n, s, W);
    if (a) {
      const W = z(a) ? a.call(s) : a;
      Reflect.ownKeys(W).forEach((P) => {
        js(P, W[P]);
      });
    }
    c && Tr(c, e, "c");
    function re(W, P) {
      H(P) ? P.forEach((Be) => W(Be.bind(s))) : P && W(P.bind(s));
    }
    if (re(ka, d), re(Aa, m), re(Ma, p), re(Ta, _), re(Pa, b), re(Ea, $), re(La, D), re(ja, le), re(Da, q), re(Ia, k), re(go, M), re(Fa, fe), H(pe)) if (pe.length) {
      const W = e.exposed || (e.exposed = {});
      pe.forEach((P) => {
        Object.defineProperty(W, P, {
          get: () => s[P],
          set: (Be) => s[P] = Be
        });
      });
    } else e.exposed || (e.exposed = {});
    B && e.render === lt && (e.render = B), Re != null && (e.inheritAttrs = Re), qe && (e.components = qe), Le && (e.directives = Le), fe && ho(e);
  }
  function Va(e, t, s = lt) {
    H(e) && (e = Fn(e));
    for (const n in e) {
      const r = e[n];
      let i;
      ue(r) ? "default" in r ? i = at(r.from || n, r.default, true) : i = at(r.from || n) : i = at(r), ve(i) ? Object.defineProperty(t, n, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: (o) => i.value = o
      }) : t[n] = i;
    }
  }
  function Tr(e, t, s) {
    ct(H(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
  }
  function wo(e, t, s, n) {
    let r = n.includes(".") ? Fo(s, n) : () => s[n];
    if (ge(e)) {
      const i = t[e];
      z(i) && Et(r, i);
    } else if (z(e)) Et(r, e.bind(s));
    else if (ue(e)) if (H(e)) e.forEach((i) => wo(i, t, s, n));
    else {
      const i = z(e.handler) ? e.handler.bind(s) : t[e.handler];
      z(i) && Et(r, i, e);
    }
  }
  function _o(e) {
    const t = e.type, { mixins: s, extends: n } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, l = i.get(t);
    let a;
    return l ? a = l : !r.length && !s && !n ? a = t : (a = {}, r.length && r.forEach((f) => qs(a, f, o, true)), qs(a, t, o)), ue(t) && i.set(t, a), a;
  }
  function qs(e, t, s, n = false) {
    const { mixins: r, extends: i } = t;
    i && qs(e, i, s, true), r && r.forEach((o) => qs(e, o, s, true));
    for (const o in t) if (!(n && o === "expose")) {
      const l = za[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
    return e;
  }
  const za = {
    data: Ir,
    props: Fr,
    emits: Fr,
    methods: ls,
    computed: ls,
    beforeCreate: Ae,
    created: Ae,
    beforeMount: Ae,
    mounted: Ae,
    beforeUpdate: Ae,
    updated: Ae,
    beforeDestroy: Ae,
    beforeUnmount: Ae,
    destroyed: Ae,
    unmounted: Ae,
    activated: Ae,
    deactivated: Ae,
    errorCaptured: Ae,
    serverPrefetch: Ae,
    components: ls,
    directives: ls,
    watch: Ba,
    provide: Ir,
    inject: qa
  };
  function Ir(e, t) {
    return t ? e ? function() {
      return Ce(z(e) ? e.call(this, this) : e, z(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function qa(e, t) {
    return ls(Fn(e), Fn(t));
  }
  function Fn(e) {
    if (H(e)) {
      const t = {};
      for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
      return t;
    }
    return e;
  }
  function Ae(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function ls(e, t) {
    return e ? Ce(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Fr(e, t) {
    return e ? H(e) && H(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Ce(/* @__PURE__ */ Object.create(null), zs(e), zs(t ?? {})) : t;
  }
  function Ba(e, t) {
    if (!e) return t;
    if (!t) return e;
    const s = Ce(/* @__PURE__ */ Object.create(null), e);
    for (const n in t) s[n] = Ae(e[n], t[n]);
    return s;
  }
  function xo() {
    return {
      app: null,
      config: {
        isNativeTag: Ol,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let Ka = 0;
  function Ga(e, t) {
    return function(n, r = null) {
      z(n) || (n = Ce({}, n)), r != null && !ue(r) && (r = null);
      const i = xo(), o = /* @__PURE__ */ new WeakSet(), l = [];
      let a = false;
      const f = i.app = {
        _uid: Ka++,
        _component: n,
        _props: r,
        _container: null,
        _context: i,
        _instance: null,
        version: Mc,
        get config() {
          return i.config;
        },
        set config(c) {
        },
        use(c, ...d) {
          return o.has(c) || (c && z(c.install) ? (o.add(c), c.install(f, ...d)) : z(c) && (o.add(c), c(f, ...d))), f;
        },
        mixin(c) {
          return i.mixins.includes(c) || i.mixins.push(c), f;
        },
        component(c, d) {
          return d ? (i.components[c] = d, f) : i.components[c];
        },
        directive(c, d) {
          return d ? (i.directives[c] = d, f) : i.directives[c];
        },
        mount(c, d, m) {
          if (!a) {
            const p = f._ceVNode || J(n, r);
            return p.appContext = i, m === true ? m = "svg" : m === false && (m = void 0), e(p, c, m), a = true, f._container = c, c.__vue_app__ = f, gr(p.component);
          }
        },
        onUnmount(c) {
          l.push(c);
        },
        unmount() {
          a && (ct(l, f._instance, 16), e(null, f._container), delete f._container.__vue_app__);
        },
        provide(c, d) {
          return i.provides[c] = d, f;
        },
        runWithContext(c) {
          const d = $t;
          $t = f;
          try {
            return c();
          } finally {
            $t = d;
          }
        }
      };
      return f;
    };
  }
  let $t = null;
  function js(e, t) {
    if (_e) {
      let s = _e.provides;
      const n = _e.parent && _e.parent.provides;
      n === s && (s = _e.provides = Object.create(n)), s[e] = t;
    }
  }
  function at(e, t, s = false) {
    const n = _e || Se;
    if (n || $t) {
      const r = $t ? $t._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
      if (r && e in r) return r[e];
      if (arguments.length > 1) return s && z(t) ? t.call(n && n.proxy) : t;
    }
  }
  function Wa() {
    return !!(_e || Se || $t);
  }
  const So = {}, Co = () => Object.create(So), Ro = (e) => Object.getPrototypeOf(e) === So;
  function Ya(e, t, s, n = false) {
    const r = {}, i = Co();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Po(e, t, r, i);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    s ? e.props = n ? r : ir(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
  }
  function Ja(e, t, s, n) {
    const { props: r, attrs: i, vnode: { patchFlag: o } } = e, l = Z(r), [a] = e.propsOptions;
    let f = false;
    if ((n || o > 0) && !(o & 16)) {
      if (o & 8) {
        const c = e.vnode.dynamicProps;
        for (let d = 0; d < c.length; d++) {
          let m = c[d];
          if (ln(e.emitsOptions, m)) continue;
          const p = t[m];
          if (a) if (te(i, m)) p !== i[m] && (i[m] = p, f = true);
          else {
            const _ = ze(m);
            r[_] = Dn(a, l, _, p, e, false);
          }
          else p !== i[m] && (i[m] = p, f = true);
        }
      }
    } else {
      Po(e, t, r, i) && (f = true);
      let c;
      for (const d in l) (!t || !te(t, d) && ((c = At(d)) === d || !te(t, c))) && (a ? s && (s[d] !== void 0 || s[c] !== void 0) && (r[d] = Dn(a, l, d, void 0, e, true)) : delete r[d]);
      if (i !== l) for (const d in i) (!t || !te(t, d)) && (delete i[d], f = true);
    }
    f && yt(e.attrs, "set", "");
  }
  function Po(e, t, s, n) {
    const [r, i] = e.propsOptions;
    let o = false, l;
    if (t) for (let a in t) {
      if (as(a)) continue;
      const f = t[a];
      let c;
      r && te(r, c = ze(a)) ? !i || !i.includes(c) ? s[c] = f : (l || (l = {}))[c] = f : ln(e.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, o = true);
    }
    if (i) {
      const a = Z(s), f = l || se;
      for (let c = 0; c < i.length; c++) {
        const d = i[c];
        s[d] = Dn(r, a, d, f[d], e, !te(f, d));
      }
    }
    return o;
  }
  function Dn(e, t, s, n, r, i) {
    const o = e[s];
    if (o != null) {
      const l = te(o, "default");
      if (l && n === void 0) {
        const a = o.default;
        if (o.type !== Function && !o.skipFactory && z(a)) {
          const { propsDefaults: f } = r;
          if (s in f) n = f[s];
          else {
            const c = Os(r);
            n = f[s] = a.call(null, t), c();
          }
        } else n = a;
        r.ce && r.ce._setProp(s, n);
      }
      o[0] && (i && !l ? n = false : o[1] && (n === "" || n === At(s)) && (n = true));
    }
    return n;
  }
  const Xa = /* @__PURE__ */ new WeakMap();
  function Eo(e, t, s = false) {
    const n = s ? Xa : t.propsCache, r = n.get(e);
    if (r) return r;
    const i = e.props, o = {}, l = [];
    let a = false;
    if (!z(e)) {
      const c = (d) => {
        a = true;
        const [m, p] = Eo(d, t, true);
        Ce(o, m), p && l.push(...p);
      };
      !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!i && !a) return ue(e) && n.set(e, qt), qt;
    if (H(i)) for (let c = 0; c < i.length; c++) {
      const d = ze(i[c]);
      Dr(d) && (o[d] = se);
    }
    else if (i) for (const c in i) {
      const d = ze(c);
      if (Dr(d)) {
        const m = i[c], p = o[d] = H(m) || z(m) ? {
          type: m
        } : Ce({}, m), _ = p.type;
        let b = false, $ = true;
        if (H(_)) for (let R = 0; R < _.length; ++R) {
          const k = _[R], F = z(k) && k.name;
          if (F === "Boolean") {
            b = true;
            break;
          } else F === "String" && ($ = false);
        }
        else b = z(_) && _.name === "Boolean";
        p[0] = b, p[1] = $, (b || te(p, "default")) && l.push(d);
      }
    }
    const f = [
      o,
      l
    ];
    return ue(e) && n.set(e, f), f;
  }
  function Dr(e) {
    return e[0] !== "$" && !as(e);
  }
  const Oo = (e) => e[0] === "_" || e === "$stable", hr = (e) => H(e) ? e.map(ot) : [
    ot(e)
  ], Za = (e, t, s) => {
    if (t._n) return t;
    const n = je((...r) => hr(t(...r)), s);
    return n._c = false, n;
  }, ko = (e, t, s) => {
    const n = e._ctx;
    for (const r in e) {
      if (Oo(r)) continue;
      const i = e[r];
      if (z(i)) t[r] = Za(r, i, n);
      else if (i != null) {
        const o = hr(i);
        t[r] = () => o;
      }
    }
  }, Ao = (e, t) => {
    const s = hr(t);
    e.slots.default = () => s;
  }, Mo = (e, t, s) => {
    for (const n in t) (s || n !== "_") && (e[n] = t[n]);
  }, ec = (e, t, s) => {
    const n = e.slots = Co();
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Mo(n, t, s), s && $i(n, "_", r, true)) : ko(t, n);
    } else t && Ao(e, t);
  }, tc = (e, t, s) => {
    const { vnode: n, slots: r } = e;
    let i = true, o = se;
    if (n.shapeFlag & 32) {
      const l = t._;
      l ? s && l === 1 ? i = false : Mo(r, t, s) : (i = !t.$stable, ko(t, r)), o = t;
    } else t && (Ao(e, t), o = {
      default: 1
    });
    if (i) for (const l in r) !Oo(l) && o[l] == null && delete r[l];
  }, He = mc;
  function sc(e) {
    return nc(e);
  }
  function nc(e, t) {
    const s = Xs();
    s.__VUE__ = true;
    const { insert: n, remove: r, patchProp: i, createElement: o, createText: l, createComment: a, setText: f, setElementText: c, parentNode: d, nextSibling: m, setScopeId: p = lt, insertStaticContent: _ } = e, b = (u, h, g, v = null, x = null, w = null, A = void 0, E = null, C = !!h.dynamicChildren) => {
      if (u === h) return;
      u && !rs(u, h) && (v = y(u), we(u, x, w, true), u = null), h.patchFlag === -2 && (C = false, h.dynamicChildren = null);
      const { type: S, ref: Q, shapeFlag: I } = h;
      switch (S) {
        case an:
          $(u, h, g, v);
          break;
        case Ot:
          R(u, h, g, v);
          break;
        case bn:
          u == null && k(h, g, v, A);
          break;
        case xe:
          qe(u, h, g, v, x, w, A, E, C);
          break;
        default:
          I & 1 ? B(u, h, g, v, x, w, A, E, C) : I & 6 ? Le(u, h, g, v, x, w, A, E, C) : (I & 64 || I & 128) && S.process(u, h, g, v, x, w, A, E, C, N);
      }
      Q != null && x && Vs(Q, u && u.ref, w, h || u, !h);
    }, $ = (u, h, g, v) => {
      if (u == null) n(h.el = l(h.children), g, v);
      else {
        const x = h.el = u.el;
        h.children !== u.children && f(x, h.children);
      }
    }, R = (u, h, g, v) => {
      u == null ? n(h.el = a(h.children || ""), g, v) : h.el = u.el;
    }, k = (u, h, g, v) => {
      [u.el, u.anchor] = _(u.children, h, g, v, u.el, u.anchor);
    }, F = ({ el: u, anchor: h }, g, v) => {
      let x;
      for (; u && u !== h; ) x = m(u), n(u, g, v), u = x;
      n(h, g, v);
    }, M = ({ el: u, anchor: h }) => {
      let g;
      for (; u && u !== h; ) g = m(u), r(u), u = g;
      r(h);
    }, B = (u, h, g, v, x, w, A, E, C) => {
      h.type === "svg" ? A = "svg" : h.type === "math" && (A = "mathml"), u == null ? le(h, g, v, x, w, A, E, C) : fe(u, h, x, w, A, E, C);
    }, le = (u, h, g, v, x, w, A, E) => {
      let C, S;
      const { props: Q, shapeFlag: I, transition: U, dirs: V } = u;
      if (C = u.el = o(u.type, w, Q && Q.is, Q), I & 8 ? c(C, u.children) : I & 16 && D(u.children, C, null, v, x, yn(u, w), A, E), V && It(u, null, v, "created"), q(C, u, u.scopeId, A, v), Q) {
        for (const ae in Q) ae !== "value" && !as(ae) && i(C, ae, null, Q[ae], w, v);
        "value" in Q && i(C, "value", null, Q.value, w), (S = Q.onVnodeBeforeMount) && rt(S, v, u);
      }
      V && It(u, null, v, "beforeMount");
      const Y = rc(x, U);
      Y && U.beforeEnter(C), n(C, h, g), ((S = Q && Q.onVnodeMounted) || Y || V) && He(() => {
        S && rt(S, v, u), Y && U.enter(C), V && It(u, null, v, "mounted");
      }, x);
    }, q = (u, h, g, v, x) => {
      if (g && p(u, g), v) for (let w = 0; w < v.length; w++) p(u, v[w]);
      if (x) {
        let w = x.subTree;
        if (h === w || Lo(w.type) && (w.ssContent === h || w.ssFallback === h)) {
          const A = x.vnode;
          q(u, A, A.scopeId, A.slotScopeIds, x.parent);
        }
      }
    }, D = (u, h, g, v, x, w, A, E, C = 0) => {
      for (let S = C; S < u.length; S++) {
        const Q = u[S] = E ? St(u[S]) : ot(u[S]);
        b(null, Q, h, g, v, x, w, A, E);
      }
    }, fe = (u, h, g, v, x, w, A) => {
      const E = h.el = u.el;
      let { patchFlag: C, dynamicChildren: S, dirs: Q } = h;
      C |= u.patchFlag & 16;
      const I = u.props || se, U = h.props || se;
      let V;
      if (g && Ft(g, false), (V = U.onVnodeBeforeUpdate) && rt(V, g, h, u), Q && It(h, u, g, "beforeUpdate"), g && Ft(g, true), (I.innerHTML && U.innerHTML == null || I.textContent && U.textContent == null) && c(E, ""), S ? pe(u.dynamicChildren, S, E, g, v, yn(h, x), w) : A || P(u, h, E, null, g, v, yn(h, x), w, false), C > 0) {
        if (C & 16) Re(E, I, U, g, x);
        else if (C & 2 && I.class !== U.class && i(E, "class", null, U.class, x), C & 4 && i(E, "style", I.style, U.style, x), C & 8) {
          const Y = h.dynamicProps;
          for (let ae = 0; ae < Y.length; ae++) {
            const ne = Y[ae], Ue = I[ne], Fe = U[ne];
            (Fe !== Ue || ne === "value") && i(E, ne, Ue, Fe, x, g);
          }
        }
        C & 1 && u.children !== h.children && c(E, h.children);
      } else !A && S == null && Re(E, I, U, g, x);
      ((V = U.onVnodeUpdated) || Q) && He(() => {
        V && rt(V, g, h, u), Q && It(h, u, g, "updated");
      }, v);
    }, pe = (u, h, g, v, x, w, A) => {
      for (let E = 0; E < h.length; E++) {
        const C = u[E], S = h[E], Q = C.el && (C.type === xe || !rs(C, S) || C.shapeFlag & 70) ? d(C.el) : g;
        b(C, S, Q, null, v, x, w, A, true);
      }
    }, Re = (u, h, g, v, x) => {
      if (h !== g) {
        if (h !== se) for (const w in h) !as(w) && !(w in g) && i(u, w, h[w], null, x, v);
        for (const w in g) {
          if (as(w)) continue;
          const A = g[w], E = h[w];
          A !== E && w !== "value" && i(u, w, E, A, x, v);
        }
        "value" in g && i(u, "value", h.value, g.value, x);
      }
    }, qe = (u, h, g, v, x, w, A, E, C) => {
      const S = h.el = u ? u.el : l(""), Q = h.anchor = u ? u.anchor : l("");
      let { patchFlag: I, dynamicChildren: U, slotScopeIds: V } = h;
      V && (E = E ? E.concat(V) : V), u == null ? (n(S, g, v), n(Q, g, v), D(h.children || [], g, Q, x, w, A, E, C)) : I > 0 && I & 64 && U && u.dynamicChildren ? (pe(u.dynamicChildren, U, g, x, w, A, E), (h.key != null || x && h === x.subTree) && To(u, h, true)) : P(u, h, g, Q, x, w, A, E, C);
    }, Le = (u, h, g, v, x, w, A, E, C) => {
      h.slotScopeIds = E, u == null ? h.shapeFlag & 512 ? x.ctx.activate(h, g, v, A, C) : ft(h, g, v, x, w, A, C) : $e(u, h, C);
    }, ft = (u, h, g, v, x, w, A) => {
      const E = u.component = Sc(u, v, x);
      if (po(u) && (E.ctx.renderer = N), Rc(E, false, A), E.asyncDep) {
        if (x && x.registerDep(E, re, A), !u.el) {
          const C = E.subTree = J(Ot);
          R(null, C, h, g);
        }
      } else re(E, u, h, g, x, w, A);
    }, $e = (u, h, g) => {
      const v = h.component = u.component;
      if (hc(u, h, g)) if (v.asyncDep && !v.asyncResolved) {
        W(v, h, g);
        return;
      } else v.next = h, v.update();
      else h.el = u.el, v.vnode = h;
    }, re = (u, h, g, v, x, w, A) => {
      const E = () => {
        if (u.isMounted) {
          let { next: I, bu: U, u: V, parent: Y, vnode: ae } = u;
          {
            const st = Io(u);
            if (st) {
              I && (I.el = ae.el, W(u, I, A)), st.asyncDep.then(() => {
                u.isUnmounted || E();
              });
              return;
            }
          }
          let ne = I, Ue;
          Ft(u, false), I ? (I.el = ae.el, W(u, I, A)) : I = ae, U && fn(U), (Ue = I.props && I.props.onVnodeBeforeUpdate) && rt(Ue, Y, I, ae), Ft(u, true);
          const Fe = Lr(u), tt = u.subTree;
          u.subTree = Fe, b(tt, Fe, d(tt.el), y(tt), u, x, w), I.el = Fe.el, ne === null && pc(u, Fe.el), V && He(V, x), (Ue = I.props && I.props.onVnodeUpdated) && He(() => rt(Ue, Y, I, ae), x);
        } else {
          let I;
          const { el: U, props: V } = h, { bm: Y, m: ae, parent: ne, root: Ue, type: Fe } = u, tt = Wt(h);
          Ft(u, false), Y && fn(Y), !tt && (I = V && V.onVnodeBeforeMount) && rt(I, ne, h), Ft(u, true);
          {
            Ue.ce && Ue.ce._injectChildStyle(Fe);
            const st = u.subTree = Lr(u);
            b(null, st, g, v, u, x, w), h.el = st.el;
          }
          if (ae && He(ae, x), !tt && (I = V && V.onVnodeMounted)) {
            const st = h;
            He(() => rt(I, ne, st), x);
          }
          (h.shapeFlag & 256 || ne && Wt(ne.vnode) && ne.vnode.shapeFlag & 256) && u.a && He(u.a, x), u.isMounted = true, h = g = v = null;
        }
      };
      u.scope.on();
      const C = u.effect = new Hi(E);
      u.scope.off();
      const S = u.update = C.run.bind(C), Q = u.job = C.runIfDirty.bind(C);
      Q.i = u, Q.id = u.uid, C.scheduler = () => ur(Q), Ft(u, true), S();
    }, W = (u, h, g) => {
      h.component = u;
      const v = u.vnode.props;
      u.vnode = h, u.next = null, Ja(u, h.props, v, g), tc(u, h.children, g), Mt(), Ar(u), Tt();
    }, P = (u, h, g, v, x, w, A, E, C = false) => {
      const S = u && u.children, Q = u ? u.shapeFlag : 0, I = h.children, { patchFlag: U, shapeFlag: V } = h;
      if (U > 0) {
        if (U & 128) {
          Je(S, I, g, v, x, w, A, E, C);
          return;
        } else if (U & 256) {
          Be(S, I, g, v, x, w, A, E, C);
          return;
        }
      }
      V & 8 ? (Q & 16 && ke(S, x, w), I !== S && c(g, I)) : Q & 16 ? V & 16 ? Je(S, I, g, v, x, w, A, E, C) : ke(S, x, w, true) : (Q & 8 && c(g, ""), V & 16 && D(I, g, v, x, w, A, E, C));
    }, Be = (u, h, g, v, x, w, A, E, C) => {
      u = u || qt, h = h || qt;
      const S = u.length, Q = h.length, I = Math.min(S, Q);
      let U;
      for (U = 0; U < I; U++) {
        const V = h[U] = C ? St(h[U]) : ot(h[U]);
        b(u[U], V, g, null, x, w, A, E, C);
      }
      S > Q ? ke(u, x, w, true, false, I) : D(h, g, v, x, w, A, E, C, I);
    }, Je = (u, h, g, v, x, w, A, E, C) => {
      let S = 0;
      const Q = h.length;
      let I = u.length - 1, U = Q - 1;
      for (; S <= I && S <= U; ) {
        const V = u[S], Y = h[S] = C ? St(h[S]) : ot(h[S]);
        if (rs(V, Y)) b(V, Y, g, null, x, w, A, E, C);
        else break;
        S++;
      }
      for (; S <= I && S <= U; ) {
        const V = u[I], Y = h[U] = C ? St(h[U]) : ot(h[U]);
        if (rs(V, Y)) b(V, Y, g, null, x, w, A, E, C);
        else break;
        I--, U--;
      }
      if (S > I) {
        if (S <= U) {
          const V = U + 1, Y = V < Q ? h[V].el : v;
          for (; S <= U; ) b(null, h[S] = C ? St(h[S]) : ot(h[S]), g, Y, x, w, A, E, C), S++;
        }
      } else if (S > U) for (; S <= I; ) we(u[S], x, w, true), S++;
      else {
        const V = S, Y = S, ae = /* @__PURE__ */ new Map();
        for (S = Y; S <= U; S++) {
          const Qe = h[S] = C ? St(h[S]) : ot(h[S]);
          Qe.key != null && ae.set(Qe.key, S);
        }
        let ne, Ue = 0;
        const Fe = U - Y + 1;
        let tt = false, st = 0;
        const ss = new Array(Fe);
        for (S = 0; S < Fe; S++) ss[S] = 0;
        for (S = V; S <= I; S++) {
          const Qe = u[S];
          if (Ue >= Fe) {
            we(Qe, x, w, true);
            continue;
          }
          let nt;
          if (Qe.key != null) nt = ae.get(Qe.key);
          else for (ne = Y; ne <= U; ne++) if (ss[ne - Y] === 0 && rs(Qe, h[ne])) {
            nt = ne;
            break;
          }
          nt === void 0 ? we(Qe, x, w, true) : (ss[nt - Y] = S + 1, nt >= st ? st = nt : tt = true, b(Qe, h[nt], g, null, x, w, A, E, C), Ue++);
        }
        const Rr = tt ? ic(ss) : qt;
        for (ne = Rr.length - 1, S = Fe - 1; S >= 0; S--) {
          const Qe = Y + S, nt = h[Qe], Pr = Qe + 1 < Q ? h[Qe + 1].el : v;
          ss[S] === 0 ? b(null, nt, g, Pr, x, w, A, E, C) : tt && (ne < 0 || S !== Rr[ne] ? Ne(nt, g, Pr, 2) : ne--);
        }
      }
    }, Ne = (u, h, g, v, x = null) => {
      const { el: w, type: A, transition: E, children: C, shapeFlag: S } = u;
      if (S & 6) {
        Ne(u.component.subTree, h, g, v);
        return;
      }
      if (S & 128) {
        u.suspense.move(h, g, v);
        return;
      }
      if (S & 64) {
        A.move(u, h, g, N);
        return;
      }
      if (A === xe) {
        n(w, h, g);
        for (let I = 0; I < C.length; I++) Ne(C[I], h, g, v);
        n(u.anchor, h, g);
        return;
      }
      if (A === bn) {
        F(u, h, g);
        return;
      }
      if (v !== 2 && S & 1 && E) if (v === 0) E.beforeEnter(w), n(w, h, g), He(() => E.enter(w), x);
      else {
        const { leave: I, delayLeave: U, afterLeave: V } = E, Y = () => n(w, h, g), ae = () => {
          I(w, () => {
            Y(), V && V();
          });
        };
        U ? U(w, Y, ae) : ae();
      }
      else n(w, h, g);
    }, we = (u, h, g, v = false, x = false) => {
      const { type: w, props: A, ref: E, children: C, dynamicChildren: S, shapeFlag: Q, patchFlag: I, dirs: U, cacheIndex: V } = u;
      if (I === -2 && (x = false), E != null && Vs(E, null, g, u, true), V != null && (h.renderCache[V] = void 0), Q & 256) {
        h.ctx.deactivate(u);
        return;
      }
      const Y = Q & 1 && U, ae = !Wt(u);
      let ne;
      if (ae && (ne = A && A.onVnodeBeforeUnmount) && rt(ne, h, u), Q & 6) dt(u.component, g, v);
      else {
        if (Q & 128) {
          u.suspense.unmount(g, v);
          return;
        }
        Y && It(u, null, h, "beforeUnmount"), Q & 64 ? u.type.remove(u, h, g, N, v) : S && !S.hasOnce && (w !== xe || I > 0 && I & 64) ? ke(S, h, g, false, true) : (w === xe && I & 384 || !x && Q & 16) && ke(C, h, g), v && he(u);
      }
      (ae && (ne = A && A.onVnodeUnmounted) || Y) && He(() => {
        ne && rt(ne, h, u), Y && It(u, null, h, "unmounted");
      }, g);
    }, he = (u) => {
      const { type: h, el: g, anchor: v, transition: x } = u;
      if (h === xe) {
        me(g, v);
        return;
      }
      if (h === bn) {
        M(u);
        return;
      }
      const w = () => {
        r(g), x && !x.persisted && x.afterLeave && x.afterLeave();
      };
      if (u.shapeFlag & 1 && x && !x.persisted) {
        const { leave: A, delayLeave: E } = x, C = () => A(g, w);
        E ? E(u.el, w, C) : C();
      } else w();
    }, me = (u, h) => {
      let g;
      for (; u !== h; ) g = m(u), r(u), u = g;
      r(h);
    }, dt = (u, h, g) => {
      const { bum: v, scope: x, job: w, subTree: A, um: E, m: C, a: S } = u;
      jr(C), jr(S), v && fn(v), x.stop(), w && (w.flags |= 8, we(A, u, h, g)), E && He(E, h), He(() => {
        u.isUnmounted = true;
      }, h), h && h.pendingBranch && !h.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve());
    }, ke = (u, h, g, v = false, x = false, w = 0) => {
      for (let A = w; A < u.length; A++) we(u[A], h, g, v, x);
    }, y = (u) => {
      if (u.shapeFlag & 6) return y(u.component.subTree);
      if (u.shapeFlag & 128) return u.suspense.next();
      const h = m(u.anchor || u.el), g = h && h[Ca];
      return g ? m(g) : h;
    };
    let T = false;
    const O = (u, h, g) => {
      u == null ? h._vnode && we(h._vnode, null, null, true) : b(h._vnode || null, u, h, null, null, null, g), h._vnode = u, T || (T = true, Ar(), co(), T = false);
    }, N = {
      p: b,
      um: we,
      m: Ne,
      r: he,
      mt: ft,
      mc: D,
      pc: P,
      pbc: pe,
      n: y,
      o: e
    };
    return {
      render: O,
      hydrate: void 0,
      createApp: Ga(O)
    };
  }
  function yn({ type: e, props: t }, s) {
    return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
  }
  function Ft({ effect: e, job: t }, s) {
    s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function rc(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function To(e, t, s = false) {
    const n = e.children, r = t.children;
    if (H(n) && H(r)) for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = St(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && To(o, l)), l.type === an && (l.el = o.el);
    }
  }
  function ic(e) {
    const t = e.slice(), s = [
      0
    ];
    let n, r, i, o, l;
    const a = e.length;
    for (n = 0; n < a; n++) {
      const f = e[n];
      if (f !== 0) {
        if (r = s[s.length - 1], e[r] < f) {
          t[n] = r, s.push(n);
          continue;
        }
        for (i = 0, o = s.length - 1; i < o; ) l = i + o >> 1, e[s[l]] < f ? i = l + 1 : o = l;
        f < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
      }
    }
    for (i = s.length, o = s[i - 1]; i-- > 0; ) s[i] = o, o = t[o];
    return s;
  }
  function Io(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Io(t);
  }
  function jr(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const oc = Symbol.for("v-scx"), lc = () => at(oc);
  function ac(e, t) {
    return pr(e, null, {
      flush: "sync"
    });
  }
  function Et(e, t, s) {
    return pr(e, t, s);
  }
  function pr(e, t, s = se) {
    const { immediate: n, deep: r, flush: i, once: o } = s, l = Ce({}, s), a = t && n || !t && i !== "post";
    let f;
    if (ws) {
      if (i === "sync") {
        const p = lc();
        f = p.__watcherHandles || (p.__watcherHandles = []);
      } else if (!a) {
        const p = () => {
        };
        return p.stop = lt, p.resume = lt, p.pause = lt, p;
      }
    }
    const c = _e;
    l.call = (p, _, b) => ct(p, c, _, b);
    let d = false;
    i === "post" ? l.scheduler = (p) => {
      He(p, c && c.suspense);
    } : i !== "sync" && (d = true, l.scheduler = (p, _) => {
      _ ? p() : ur(p);
    }), l.augmentJob = (p) => {
      t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
    };
    const m = wa(e, t, l);
    return ws && (f ? f.push(m) : a && m()), m;
  }
  function cc(e, t, s) {
    const n = this.proxy, r = ge(e) ? e.includes(".") ? Fo(n, e) : () => n[e] : e.bind(n, n);
    let i;
    z(t) ? i = t : (i = t.handler, s = t);
    const o = Os(this), l = pr(r, i.bind(n), s);
    return o(), l;
  }
  function Fo(e, t) {
    const s = t.split(".");
    return () => {
      let n = e;
      for (let r = 0; r < s.length && n; r++) n = n[s[r]];
      return n;
    };
  }
  mh = function(e, t, s = se) {
    const n = Cc(), r = ze(t), i = At(t), o = Do(e, r), l = ha((a, f) => {
      let c, d = se, m;
      return ac(() => {
        const p = e[r];
        De(c, p) && (c = p, f());
      }), {
        get() {
          return a(), s.get ? s.get(c) : c;
        },
        set(p) {
          const _ = s.set ? s.set(p) : p;
          if (!De(_, c) && !(d !== se && De(p, d))) return;
          const b = n.vnode.props;
          b && (t in b || r in b || i in b) && (`onUpdate:${t}` in b || `onUpdate:${r}` in b || `onUpdate:${i}` in b) || (c = p, f()), n.emit(`update:${t}`, _), De(p, _) && De(p, d) && !De(_, m) && f(), d = p, m = _;
        }
      };
    });
    return l[Symbol.iterator] = () => {
      let a = 0;
      return {
        next() {
          return a < 2 ? {
            value: a++ ? o || se : l,
            done: false
          } : {
            done: true
          };
        }
      };
    }, l;
  };
  const Do = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${At(t)}Modifiers`];
  function uc(e, t, ...s) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || se;
    let r = s;
    const i = t.startsWith("update:"), o = i && Do(n, t.slice(7));
    o && (o.trim && (r = s.map((c) => ge(c) ? c.trim() : c)), o.number && (r = s.map(Il)));
    let l, a = n[l = un(t)] || n[l = un(ze(t))];
    !a && i && (a = n[l = un(At(t))]), a && ct(a, e, 6, r);
    const f = n[l + "Once"];
    if (f) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[l]) return;
      e.emitted[l] = true, ct(f, e, 6, r);
    }
  }
  function jo(e, t, s = false) {
    const n = t.emitsCache, r = n.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let o = {}, l = false;
    if (!z(e)) {
      const a = (f) => {
        const c = jo(f, t, true);
        c && (l = true, Ce(o, c));
      };
      !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
    }
    return !i && !l ? (ue(e) && n.set(e, null), null) : (H(i) ? i.forEach((a) => o[a] = null) : Ce(o, i), ue(e) && n.set(e, o), o);
  }
  function ln(e, t) {
    return !e || !Gs(t) ? false : (t = t.slice(2).replace(/Once$/, ""), te(e, t[0].toLowerCase() + t.slice(1)) || te(e, At(t)) || te(e, t));
  }
  function Lr(e) {
    const { type: t, vnode: s, proxy: n, withProxy: r, propsOptions: [i], slots: o, attrs: l, emit: a, render: f, renderCache: c, props: d, data: m, setupState: p, ctx: _, inheritAttrs: b } = e, $ = Hs(e);
    let R, k;
    try {
      if (s.shapeFlag & 4) {
        const M = r || n, B = M;
        R = ot(f.call(B, M, c, d, p, m, _)), k = l;
      } else {
        const M = t;
        R = ot(M.length > 1 ? M(d, {
          attrs: l,
          slots: o,
          emit: a
        }) : M(d, null)), k = t.props ? l : fc(l);
      }
    } catch (M) {
      ds.length = 0, rn(M, e, 1), R = J(Ot);
    }
    let F = R;
    if (k && b !== false) {
      const M = Object.keys(k), { shapeFlag: B } = F;
      M.length && B & 7 && (i && M.some(Xn) && (k = dc(k, i)), F = Jt(F, k, false, true));
    }
    return s.dirs && (F = Jt(F, null, false, true), F.dirs = F.dirs ? F.dirs.concat(s.dirs) : s.dirs), s.transition && fr(F, s.transition), R = F, Hs($), R;
  }
  const fc = (e) => {
    let t;
    for (const s in e) (s === "class" || s === "style" || Gs(s)) && ((t || (t = {}))[s] = e[s]);
    return t;
  }, dc = (e, t) => {
    const s = {};
    for (const n in e) (!Xn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s;
  };
  function hc(e, t, s) {
    const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, f = i.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (s && a >= 0) {
      if (a & 1024) return true;
      if (a & 16) return n ? $r(n, o, f) : !!o;
      if (a & 8) {
        const c = t.dynamicProps;
        for (let d = 0; d < c.length; d++) {
          const m = c[d];
          if (o[m] !== n[m] && !ln(f, m)) return true;
        }
      }
    } else return (r || l) && (!l || !l.$stable) ? true : n === o ? false : n ? o ? $r(n, o, f) : true : !!o;
    return false;
  }
  function $r(e, t, s) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return true;
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      if (t[i] !== e[i] && !ln(s, i)) return true;
    }
    return false;
  }
  function pc({ vnode: e, parent: t }, s) {
    for (; t; ) {
      const n = t.subTree;
      if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e) (e = t.vnode).el = s, t = t.parent;
      else break;
    }
  }
  const Lo = (e) => e.__isSuspense;
  function mc(e, t) {
    t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : Sa(e);
  }
  let an, Ot, bn, ds;
  xe = Symbol.for("v-fgt");
  an = Symbol.for("v-txt");
  Ot = Symbol.for("v-cmt");
  bn = Symbol.for("v-stc");
  ds = [];
  let Ve = null;
  oe = function(e = false) {
    ds.push(Ve = e ? null : []);
  };
  function gc() {
    ds.pop(), Ve = ds[ds.length - 1] || null;
  }
  let bs = 1;
  function Nr(e, t = false) {
    bs += e, e < 0 && Ve && t && (Ve.hasOnce = true);
  }
  function $o(e) {
    return e.dynamicChildren = bs > 0 ? Ve || qt : null, gc(), bs > 0 && Ve && Ve.push(e), e;
  }
  be = function(e, t, s, n, r, i) {
    return $o(ie(e, t, s, n, r, i, true));
  };
  kt = function(e, t, s, n, r) {
    return $o(J(e, t, s, n, r, true));
  };
  function vs(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function rs(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const No = ({ key: e }) => e ?? null, Ls = ({ ref: e, ref_key: t, ref_for: s }) => (typeof e == "number" && (e = "" + e), e != null ? ge(e) || ve(e) || z(e) ? {
    i: Se,
    r: e,
    k: t,
    f: !!s
  } : e : null);
  ie = function(e, t = null, s = null, n = 0, r = null, i = e === xe ? 0 : 1, o = false, l = false) {
    const a = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && No(t),
      ref: t && Ls(t),
      scopeId: fo,
      slotScopeIds: null,
      children: s,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: n,
      dynamicProps: r,
      dynamicChildren: null,
      appContext: null,
      ctx: Se
    };
    return l ? (mr(a, s), i & 128 && e.normalize(a)) : s && (a.shapeFlag |= ge(s) ? 8 : 16), bs > 0 && !o && Ve && (a.patchFlag > 0 || i & 6) && a.patchFlag !== 32 && Ve.push(a), a;
  };
  J = yc;
  function yc(e, t = null, s = null, n = 0, r = null, i = false) {
    if ((!e || e === Na) && (e = Ot), vs(e)) {
      const l = Jt(e, t, true);
      return s && mr(l, s), bs > 0 && !i && Ve && (l.shapeFlag & 6 ? Ve[Ve.indexOf(e)] = l : Ve.push(l)), l.patchFlag = -2, l;
    }
    if (Ac(e) && (e = e.__vccOpts), t) {
      t = bc(t);
      let { class: l, style: a } = t;
      l && !ge(l) && (t.class = Rs(l)), ue(a) && (lr(a) && !H(a) && (a = Ce({}, a)), t.style = tr(a));
    }
    const o = ge(e) ? 1 : Lo(e) ? 128 : Ra(e) ? 64 : ue(e) ? 4 : z(e) ? 2 : 0;
    return ie(e, t, s, n, r, o, i, true);
  }
  function bc(e) {
    return e ? lr(e) || Ro(e) ? Ce({}, e) : e : null;
  }
  function Jt(e, t, s = false, n = false) {
    const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, f = t ? wc(r || {}, t) : r, c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: f,
      key: f && No(f),
      ref: t && t.ref ? s && i ? H(i) ? i.concat(Ls(t)) : [
        i,
        Ls(t)
      ] : Ls(t) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== xe ? o === -1 ? 16 : o | 16 : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Jt(e.ssContent),
      ssFallback: e.ssFallback && Jt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return a && n && fr(c, a.clone(c)), c;
  }
  Ie = function(e = " ", t = 0) {
    return J(an, null, e, t);
  };
  vc = function(e = "", t = false) {
    return t ? (oe(), kt(Ot, null, e)) : J(Ot, null, e);
  };
  function ot(e) {
    return e == null || typeof e == "boolean" ? J(Ot) : H(e) ? J(xe, null, e.slice()) : vs(e) ? St(e) : J(an, null, String(e));
  }
  function St(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jt(e);
  }
  function mr(e, t) {
    let s = 0;
    const { shapeFlag: n } = e;
    if (t == null) t = null;
    else if (H(t)) s = 16;
    else if (typeof t == "object") if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = false), mr(e, r()), r._c && (r._d = true));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Ro(t) ? t._ctx = Se : r === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else z(t) ? (t = {
      default: t,
      _ctx: Se
    }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [
      Ie(t)
    ]) : s = 8);
    e.children = t, e.shapeFlag |= s;
  }
  function wc(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      for (const r in n) if (r === "class") t.class !== n.class && (t.class = Rs([
        t.class,
        n.class
      ]));
      else if (r === "style") t.style = tr([
        t.style,
        n.style
      ]);
      else if (Gs(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(H(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
    }
    return t;
  }
  function rt(e, t, s, n = null) {
    ct(e, t, 7, [
      s,
      n
    ]);
  }
  const _c = xo();
  let xc = 0;
  function Sc(e, t, s) {
    const n = e.type, r = (t ? t.appContext : e.appContext) || _c, i = {
      uid: xc++,
      vnode: e,
      type: n,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ul(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Eo(n, r),
      emitsOptions: jo(n, r),
      emit: null,
      emitted: null,
      propsDefaults: se,
      inheritAttrs: n.inheritAttrs,
      ctx: se,
      data: se,
      props: se,
      attrs: se,
      slots: se,
      refs: se,
      setupState: se,
      setupContext: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return i.ctx = {
      _: i
    }, i.root = t ? t.root : i, i.emit = uc.bind(null, i), e.ce && e.ce(i), i;
  }
  let _e = null;
  const Cc = () => _e || Se;
  let Bs, jn;
  {
    const e = Xs(), t = (s, n) => {
      let r;
      return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
        r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
      };
    };
    Bs = t("__VUE_INSTANCE_SETTERS__", (s) => _e = s), jn = t("__VUE_SSR_SETTERS__", (s) => ws = s);
  }
  const Os = (e) => {
    const t = _e;
    return Bs(e), e.scope.on(), () => {
      e.scope.off(), Bs(t);
    };
  }, Ur = () => {
    _e && _e.scope.off(), Bs(null);
  };
  function Uo(e) {
    return e.vnode.shapeFlag & 4;
  }
  let ws = false;
  function Rc(e, t = false, s = false) {
    t && jn(t);
    const { props: n, children: r } = e.vnode, i = Uo(e);
    Ya(e, n, i, t), ec(e, r, s);
    const o = i ? Pc(e, t) : void 0;
    return t && jn(false), o;
  }
  function Pc(e, t) {
    const s = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qa);
    const { setup: n } = s;
    if (n) {
      Mt();
      const r = e.setupContext = n.length > 1 ? Oc(e) : null, i = Os(e), o = Es(n, e, 0, [
        e.props,
        r
      ]), l = Di(o);
      if (Tt(), i(), (l || e.sp) && !Wt(e) && ho(e), l) {
        if (o.then(Ur, Ur), t) return o.then((a) => {
          Qr(e, a);
        }).catch((a) => {
          rn(a, e, 0);
        });
        e.asyncDep = o;
      } else Qr(e, o);
    } else Qo(e);
  }
  function Qr(e, t, s) {
    z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ue(t) && (e.setupState = oo(t)), Qo(e);
  }
  function Qo(e, t, s) {
    const n = e.type;
    e.render || (e.render = n.render || lt);
    {
      const r = Os(e);
      Mt();
      try {
        Ha(e);
      } finally {
        Tt(), r();
      }
    }
  }
  const Ec = {
    get(e, t) {
      return Pe(e, "get", ""), e[t];
    }
  };
  function Oc(e) {
    const t = (s) => {
      e.exposed = s || {};
    };
    return {
      attrs: new Proxy(e.attrs, Ec),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function gr(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(oo(ca(e.exposed)), {
      get(t, s) {
        if (s in t) return t[s];
        if (s in fs) return fs[s](e);
      },
      has(t, s) {
        return s in t || s in fs;
      }
    })) : e.proxy;
  }
  function kc(e, t = true) {
    return z(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Ac(e) {
    return z(e) && "__vccOpts" in e;
  }
  const Ge = (e, t) => ba(e, t, ws);
  function Ho(e, t, s) {
    const n = arguments.length;
    return n === 2 ? ue(t) && !H(t) ? vs(t) ? J(e, null, [
      t
    ]) : J(e, t) : J(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && vs(s) && (s = [
      s
    ]), J(e, t, s));
  }
  const Mc = "3.5.13";
  let Ln;
  const Hr = typeof window < "u" && window.trustedTypes;
  if (Hr) try {
    Ln = Hr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  const Vo = Ln ? (e) => Ln.createHTML(e) : (e) => e, Tc = "http://www.w3.org/2000/svg", Ic = "http://www.w3.org/1998/Math/MathML", gt = typeof document < "u" ? document : null, Vr = gt && gt.createElement("template"), Fc = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, s, n) => {
      const r = t === "svg" ? gt.createElementNS(Tc, e) : t === "mathml" ? gt.createElementNS(Ic, e) : s ? gt.createElement(e, {
        is: s
      }) : gt.createElement(e);
      return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
    },
    createText: (e) => gt.createTextNode(e),
    createComment: (e) => gt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => gt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, s, n, r, i) {
      const o = s ? s.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), s), !(r === i || !(r = r.nextSibling)); ) ;
      else {
        Vr.innerHTML = Vo(n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e);
        const l = Vr.content;
        if (n === "svg" || n === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, s);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        s ? s.previousSibling : t.lastChild
      ];
    }
  }, Dc = Symbol("_vtc");
  function jc(e, t, s) {
    const n = e[Dc];
    n && (t = (t ? [
      t,
      ...n
    ] : [
      ...n
    ]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
  }
  const zr = Symbol("_vod"), Lc = Symbol("_vsh"), $c = Symbol(""), Nc = /(^|;)\s*display\s*:/;
  function Uc(e, t, s) {
    const n = e.style, r = ge(s);
    let i = false;
    if (s && !r) {
      if (t) if (ge(t)) for (const o of t.split(";")) {
        const l = o.slice(0, o.indexOf(":")).trim();
        s[l] == null && $s(n, l, "");
      }
      else for (const o in t) s[o] == null && $s(n, o, "");
      for (const o in s) o === "display" && (i = true), $s(n, o, s[o]);
    } else if (r) {
      if (t !== s) {
        const o = n[$c];
        o && (s += ";" + o), n.cssText = s, i = Nc.test(s);
      }
    } else t && e.removeAttribute("style");
    zr in e && (e[zr] = i ? n.display : "", e[Lc] && (n.display = "none"));
  }
  const qr = /\s*!important$/;
  function $s(e, t, s) {
    if (H(s)) s.forEach((n) => $s(e, t, n));
    else if (s == null && (s = ""), t.startsWith("--")) e.setProperty(t, s);
    else {
      const n = Qc(e, t);
      qr.test(s) ? e.setProperty(At(n), s.replace(qr, ""), "important") : e[n] = s;
    }
  }
  const Br = [
    "Webkit",
    "Moz",
    "ms"
  ], vn = {};
  function Qc(e, t) {
    const s = vn[t];
    if (s) return s;
    let n = ze(t);
    if (n !== "filter" && n in e) return vn[t] = n;
    n = Js(n);
    for (let r = 0; r < Br.length; r++) {
      const i = Br[r] + n;
      if (i in e) return vn[t] = i;
    }
    return t;
  }
  const Kr = "http://www.w3.org/1999/xlink";
  function Gr(e, t, s, n, r, i = Nl(t)) {
    n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Kr, t.slice(6, t.length)) : e.setAttributeNS(Kr, t, s) : s == null || i && !Ni(s) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : bt(s) ? String(s) : s);
  }
  function Wr(e, t, s, n, r) {
    if (t === "innerHTML" || t === "textContent") {
      s != null && (e[t] = t === "innerHTML" ? Vo(s) : s);
      return;
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
      const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = s == null ? e.type === "checkbox" ? "on" : "" : String(s);
      (l !== a || !("_value" in e)) && (e.value = a), s == null && e.removeAttribute(t), e._value = s;
      return;
    }
    let o = false;
    if (s === "" || s == null) {
      const l = typeof e[t];
      l === "boolean" ? s = Ni(s) : s == null && l === "string" ? (s = "", o = true) : l === "number" && (s = 0, o = true);
    }
    try {
      e[t] = s;
    } catch {
    }
    o && e.removeAttribute(r || t);
  }
  function Hc(e, t, s, n) {
    e.addEventListener(t, s, n);
  }
  function Vc(e, t, s, n) {
    e.removeEventListener(t, s, n);
  }
  const Yr = Symbol("_vei");
  function zc(e, t, s, n, r = null) {
    const i = e[Yr] || (e[Yr] = {}), o = i[t];
    if (n && o) o.value = n;
    else {
      const [l, a] = qc(t);
      if (n) {
        const f = i[t] = Gc(n, r);
        Hc(e, l, f, a);
      } else o && (Vc(e, l, o, a), i[t] = void 0);
    }
  }
  const Jr = /(?:Once|Passive|Capture)$/;
  function qc(e) {
    let t;
    if (Jr.test(e)) {
      t = {};
      let n;
      for (; n = e.match(Jr); ) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : At(e.slice(2)),
      t
    ];
  }
  let wn = 0;
  const Bc = Promise.resolve(), Kc = () => wn || (Bc.then(() => wn = 0), wn = Date.now());
  function Gc(e, t) {
    const s = (n) => {
      if (!n._vts) n._vts = Date.now();
      else if (n._vts <= s.attached) return;
      ct(Wc(n, s.value), t, 5, [
        n
      ]);
    };
    return s.value = e, s.attached = Kc(), s;
  }
  function Wc(e, t) {
    if (H(t)) {
      const s = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        s.call(e), e._stopped = true;
      }, t.map((n) => (r) => !r._stopped && n && n(r));
    } else return t;
  }
  const Xr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yc = (e, t, s, n, r, i) => {
    const o = r === "svg";
    t === "class" ? jc(e, n, o) : t === "style" ? Uc(e, s, n) : Gs(t) ? Xn(t) || zc(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Jc(e, t, n, o)) ? (Wr(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gr(e, t, n, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ge(n)) ? Wr(e, ze(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Gr(e, t, n, o));
  };
  function Jc(e, t, s, n) {
    if (n) return !!(t === "innerHTML" || t === "textContent" || t in e && Xr(t) && z(s));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const r = e.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return Xr(t) && ge(s) ? false : t in e;
  }
  const Xc = Ce({
    patchProp: Yc
  }, Fc);
  let Zr;
  function Zc() {
    return Zr || (Zr = sc(Xc));
  }
  const eu = (...e) => {
    const t = Zc().createApp(...e), { mount: s } = t;
    return t.mount = (n) => {
      const r = su(n);
      if (!r) return;
      const i = t._component;
      !z(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const o = s(r, false, tu(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
    }, t;
  };
  function tu(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function su(e) {
    return ge(e) ? document.querySelector(e) : e;
  }
  let nu, ru, iu, ou;
  nu = Ye({
    __name: "ColourButton",
    setup(e) {
      const t = ar("\u{1F319}");
      function s() {
        const n = document.querySelector("body");
        n !== null && n.getAttribute("mode") === "dark" ? (n.setAttribute("mode", "light"), t.value = "\u2600\uFE0F") : n !== null && (n.setAttribute("mode", "dark"), t.value = "\u{1F319}");
      }
      return (n, r) => (oe(), be("a", {
        class: "xl-text",
        onClick: s
      }, Zs(t.value), 1));
    }
  });
  ut = (e, t) => {
    const s = e.__vccOpts || e;
    for (const [n, r] of t) s[n] = r;
    return s;
  };
  ru = ut(nu, [
    [
      "__scopeId",
      "data-v-b19ac504"
    ]
  ]);
  iu = {};
  ou = {
    height: "35px",
    width: "35px",
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 512 512",
    "xml:space": "preserve"
  };
  function lu(e, t) {
    return oe(), be("svg", ou, t[0] || (t[0] = [
      ie("path", {
        class: "first",
        d: `M95.998,418.909H76.22c-25.706,0-46.545,20.84-46.545,46.545C29.674,491.16,50.514,512,76.22,512
	h66.324h188.509c83.413,0,151.273-67.86,151.273-151.273c0-40.609-16.088-77.528-42.22-104.727
	c26.132-27.2,42.22-64.118,42.22-104.727C482.326,67.86,414.466,0,331.053,0H142.544H76.22C50.514,0,29.674,20.84,29.674,46.545
	s20.84,46.545,46.545,46.545h19.779V256V418.909z M189.089,93.091h141.964c32.082,0,58.182,26.1,58.182,58.182
	s-26.1,58.182-58.182,58.182H189.089L189.089,93.091L189.089,93.091z M189.089,302.545h141.964c32.082,0,58.182,26.1,58.182,58.182
	s-26.1,58.182-58.182,58.182H189.089L189.089,302.545L189.089,302.545z`
      }, null, -1),
      ie("path", {
        class: "second",
        d: `M189.089,418.909V302.545H256v-93.091h-66.911V93.091H256V0H142.544H76.22
	C50.514,0,29.674,20.84,29.674,46.545s20.84,46.545,46.545,46.545h19.779V256v162.909H76.22c-25.706,0-46.545,20.84-46.545,46.545
	C29.674,491.16,50.514,512,76.22,512h66.324H256v-93.091H189.089z`
      }, null, -1)
    ]));
  }
  const au = ut(iu, [
    [
      "render",
      lu
    ],
    [
      "__scopeId",
      "data-v-b90319a1"
    ]
  ]);
  const zt = typeof document < "u";
  function zo(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function cu(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && zo(e.default);
  }
  const ee = Object.assign;
  function _n(e, t) {
    const s = {};
    for (const n in t) {
      const r = t[n];
      s[n] = et(r) ? r.map(e) : e(r);
    }
    return s;
  }
  const hs = () => {
  }, et = Array.isArray, qo = /#/g, uu = /&/g, fu = /\//g, du = /=/g, hu = /\?/g, Bo = /\+/g, pu = /%5B/g, mu = /%5D/g, Ko = /%5E/g, gu = /%60/g, Go = /%7B/g, yu = /%7C/g, Wo = /%7D/g, bu = /%20/g;
  function yr(e) {
    return encodeURI("" + e).replace(yu, "|").replace(pu, "[").replace(mu, "]");
  }
  function vu(e) {
    return yr(e).replace(Go, "{").replace(Wo, "}").replace(Ko, "^");
  }
  function $n(e) {
    return yr(e).replace(Bo, "%2B").replace(bu, "+").replace(qo, "%23").replace(uu, "%26").replace(gu, "`").replace(Go, "{").replace(Wo, "}").replace(Ko, "^");
  }
  function wu(e) {
    return $n(e).replace(du, "%3D");
  }
  function _u(e) {
    return yr(e).replace(qo, "%23").replace(hu, "%3F");
  }
  function xu(e) {
    return e == null ? "" : _u(e).replace(fu, "%2F");
  }
  function _s(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const Su = /\/$/, Cu = (e) => e.replace(Su, "");
  function xn(e, t, s = "/") {
    let n, r = {}, i = "", o = "";
    const l = t.indexOf("#");
    let a = t.indexOf("?");
    return l < a && l >= 0 && (a = -1), a > -1 && (n = t.slice(0, a), i = t.slice(a + 1, l > -1 ? l : t.length), r = e(i)), l > -1 && (n = n || t.slice(0, l), o = t.slice(l, t.length)), n = Ou(n ?? t, s), {
      fullPath: n + (i && "?") + i + o,
      path: n,
      query: r,
      hash: _s(o)
    };
  }
  function Ru(e, t) {
    const s = t.query ? e(t.query) : "";
    return t.path + (s && "?") + s + (t.hash || "");
  }
  function ei(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Pu(e, t, s) {
    const n = t.matched.length - 1, r = s.matched.length - 1;
    return n > -1 && n === r && Xt(t.matched[n], s.matched[r]) && Yo(t.params, s.params) && e(t.query) === e(s.query) && t.hash === s.hash;
  }
  function Xt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function Yo(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return false;
    for (const s in e) if (!Eu(e[s], t[s])) return false;
    return true;
  }
  function Eu(e, t) {
    return et(e) ? ti(e, t) : et(t) ? ti(t, e) : e === t;
  }
  function ti(e, t) {
    return et(t) ? e.length === t.length && e.every((s, n) => s === t[n]) : e.length === 1 && e[0] === t;
  }
  function Ou(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const s = t.split("/"), n = e.split("/"), r = n[n.length - 1];
    (r === ".." || r === ".") && n.push("");
    let i = s.length - 1, o, l;
    for (o = 0; o < n.length; o++) if (l = n[o], l !== ".") if (l === "..") i > 1 && i--;
    else break;
    return s.slice(0, i).join("/") + "/" + n.slice(o).join("/");
  }
  const wt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  var xs;
  (function(e) {
    e.pop = "pop", e.push = "push";
  })(xs || (xs = {}));
  var ps;
  (function(e) {
    e.back = "back", e.forward = "forward", e.unknown = "";
  })(ps || (ps = {}));
  function ku(e) {
    if (!e) if (zt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Cu(e);
  }
  const Au = /^[^#]+#/;
  function Mu(e, t) {
    return e.replace(Au, "#") + t;
  }
  function Tu(e, t) {
    const s = document.documentElement.getBoundingClientRect(), n = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: n.left - s.left - (t.left || 0),
      top: n.top - s.top - (t.top || 0)
    };
  }
  const cn = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function Iu(e) {
    let t;
    if ("el" in e) {
      const s = e.el, n = typeof s == "string" && s.startsWith("#"), r = typeof s == "string" ? n ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
      if (!r) return;
      t = Tu(r, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function si(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const Nn = /* @__PURE__ */ new Map();
  function Fu(e, t) {
    Nn.set(e, t);
  }
  function Du(e) {
    const t = Nn.get(e);
    return Nn.delete(e), t;
  }
  let ju = () => location.protocol + "//" + location.host;
  function Jo(e, t) {
    const { pathname: s, search: n, hash: r } = t, i = e.indexOf("#");
    if (i > -1) {
      let l = r.includes(e.slice(i)) ? e.slice(i).length : 1, a = r.slice(l);
      return a[0] !== "/" && (a = "/" + a), ei(a, "");
    }
    return ei(s, e) + n + r;
  }
  function Lu(e, t, s, n) {
    let r = [], i = [], o = null;
    const l = ({ state: m }) => {
      const p = Jo(e, location), _ = s.value, b = t.value;
      let $ = 0;
      if (m) {
        if (s.value = p, t.value = m, o && o === _) {
          o = null;
          return;
        }
        $ = b ? m.position - b.position : 0;
      } else n(p);
      r.forEach((R) => {
        R(s.value, _, {
          delta: $,
          type: xs.pop,
          direction: $ ? $ > 0 ? ps.forward : ps.back : ps.unknown
        });
      });
    };
    function a() {
      o = s.value;
    }
    function f(m) {
      r.push(m);
      const p = () => {
        const _ = r.indexOf(m);
        _ > -1 && r.splice(_, 1);
      };
      return i.push(p), p;
    }
    function c() {
      const { history: m } = window;
      m.state && m.replaceState(ee({}, m.state, {
        scroll: cn()
      }), "");
    }
    function d() {
      for (const m of i) m();
      i = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", c);
    }
    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", c, {
      passive: true
    }), {
      pauseListeners: a,
      listen: f,
      destroy: d
    };
  }
  function ni(e, t, s, n = false, r = false) {
    return {
      back: e,
      current: t,
      forward: s,
      replaced: n,
      position: window.history.length,
      scroll: r ? cn() : null
    };
  }
  function $u(e) {
    const { history: t, location: s } = window, n = {
      value: Jo(e, s)
    }, r = {
      value: t.state
    };
    r.value || i(n.value, {
      back: null,
      current: n.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function i(a, f, c) {
      const d = e.indexOf("#"), m = d > -1 ? (s.host && document.querySelector("base") ? e : e.slice(d)) + a : ju() + e + a;
      try {
        t[c ? "replaceState" : "pushState"](f, "", m), r.value = f;
      } catch (p) {
        console.error(p), s[c ? "replace" : "assign"](m);
      }
    }
    function o(a, f) {
      const c = ee({}, t.state, ni(r.value.back, a, r.value.forward, true), f, {
        position: r.value.position
      });
      i(a, c, true), n.value = a;
    }
    function l(a, f) {
      const c = ee({}, r.value, t.state, {
        forward: a,
        scroll: cn()
      });
      i(c.current, c, true);
      const d = ee({}, ni(n.value, a, null), {
        position: c.position + 1
      }, f);
      i(a, d, false), n.value = a;
    }
    return {
      location: n,
      state: r,
      push: l,
      replace: o
    };
  }
  function Nu(e) {
    e = ku(e);
    const t = $u(e), s = Lu(e, t.state, t.location, t.replace);
    function n(i, o = true) {
      o || s.pauseListeners(), history.go(i);
    }
    const r = ee({
      location: "",
      base: e,
      go: n,
      createHref: Mu.bind(null, e)
    }, t, s);
    return Object.defineProperty(r, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(r, "state", {
      enumerable: true,
      get: () => t.state.value
    }), r;
  }
  function Uu(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function Xo(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const Zo = Symbol("");
  var ri;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(ri || (ri = {}));
  function Zt(e, t) {
    return ee(new Error(), {
      type: e,
      [Zo]: true
    }, t);
  }
  function pt(e, t) {
    return e instanceof Error && Zo in e && (t == null || !!(e.type & t));
  }
  const ii = "[^/]+?", Qu = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, Hu = /[.+*?^${}()[\]/\\]/g;
  function Vu(e, t) {
    const s = ee({}, Qu, t), n = [];
    let r = s.start ? "^" : "";
    const i = [];
    for (const f of e) {
      const c = f.length ? [] : [
        90
      ];
      s.strict && !f.length && (r += "/");
      for (let d = 0; d < f.length; d++) {
        const m = f[d];
        let p = 40 + (s.sensitive ? 0.25 : 0);
        if (m.type === 0) d || (r += "/"), r += m.value.replace(Hu, "\\$&"), p += 40;
        else if (m.type === 1) {
          const { value: _, repeatable: b, optional: $, regexp: R } = m;
          i.push({
            name: _,
            repeatable: b,
            optional: $
          });
          const k = R || ii;
          if (k !== ii) {
            p += 10;
            try {
              new RegExp(`(${k})`);
            } catch (M) {
              throw new Error(`Invalid custom RegExp for param "${_}" (${k}): ` + M.message);
            }
          }
          let F = b ? `((?:${k})(?:/(?:${k}))*)` : `(${k})`;
          d || (F = $ && f.length < 2 ? `(?:/${F})` : "/" + F), $ && (F += "?"), r += F, p += 20, $ && (p += -8), b && (p += -20), k === ".*" && (p += -50);
        }
        c.push(p);
      }
      n.push(c);
    }
    if (s.strict && s.end) {
      const f = n.length - 1;
      n[f][n[f].length - 1] += 0.7000000000000001;
    }
    s.strict || (r += "/?"), s.end ? r += "$" : s.strict && !r.endsWith("/") && (r += "(?:/|$)");
    const o = new RegExp(r, s.sensitive ? "" : "i");
    function l(f) {
      const c = f.match(o), d = {};
      if (!c) return null;
      for (let m = 1; m < c.length; m++) {
        const p = c[m] || "", _ = i[m - 1];
        d[_.name] = p && _.repeatable ? p.split("/") : p;
      }
      return d;
    }
    function a(f) {
      let c = "", d = false;
      for (const m of e) {
        (!d || !c.endsWith("/")) && (c += "/"), d = false;
        for (const p of m) if (p.type === 0) c += p.value;
        else if (p.type === 1) {
          const { value: _, repeatable: b, optional: $ } = p, R = _ in f ? f[_] : "";
          if (et(R) && !b) throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
          const k = et(R) ? R.join("/") : R;
          if (!k) if ($) m.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : d = true);
          else throw new Error(`Missing required param "${_}"`);
          c += k;
        }
      }
      return c || "/";
    }
    return {
      re: o,
      score: n,
      keys: i,
      parse: l,
      stringify: a
    };
  }
  function zu(e, t) {
    let s = 0;
    for (; s < e.length && s < t.length; ) {
      const n = t[s] - e[s];
      if (n) return n;
      s++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function el(e, t) {
    let s = 0;
    const n = e.score, r = t.score;
    for (; s < n.length && s < r.length; ) {
      const i = zu(n[s], r[s]);
      if (i) return i;
      s++;
    }
    if (Math.abs(r.length - n.length) === 1) {
      if (oi(n)) return 1;
      if (oi(r)) return -1;
    }
    return r.length - n.length;
  }
  function oi(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const qu = {
    type: 0,
    value: ""
  }, Bu = /[a-zA-Z0-9_]/;
  function Ku(e) {
    if (!e) return [
      []
    ];
    if (e === "/") return [
      [
        qu
      ]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(p) {
      throw new Error(`ERR (${s})/"${f}": ${p}`);
    }
    let s = 0, n = s;
    const r = [];
    let i;
    function o() {
      i && r.push(i), i = [];
    }
    let l = 0, a, f = "", c = "";
    function d() {
      f && (s === 0 ? i.push({
        type: 0,
        value: f
      }) : s === 1 || s === 2 || s === 3 ? (i.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), i.push({
        type: 1,
        value: f,
        regexp: c,
        repeatable: a === "*" || a === "+",
        optional: a === "*" || a === "?"
      })) : t("Invalid state to consume buffer"), f = "");
    }
    function m() {
      f += a;
    }
    for (; l < e.length; ) {
      if (a = e[l++], a === "\\" && s !== 2) {
        n = s, s = 4;
        continue;
      }
      switch (s) {
        case 0:
          a === "/" ? (f && d(), o()) : a === ":" ? (d(), s = 1) : m();
          break;
        case 4:
          m(), s = n;
          break;
        case 1:
          a === "(" ? s = 2 : Bu.test(a) ? m() : (d(), s = 0, a !== "*" && a !== "?" && a !== "+" && l--);
          break;
        case 2:
          a === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + a : s = 3 : c += a;
          break;
        case 3:
          d(), s = 0, a !== "*" && a !== "?" && a !== "+" && l--, c = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return s === 2 && t(`Unfinished custom RegExp for param "${f}"`), d(), o(), r;
  }
  function Gu(e, t, s) {
    const n = Vu(Ku(e.path), s), r = ee(n, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
  }
  function Wu(e, t) {
    const s = [], n = /* @__PURE__ */ new Map();
    t = ui({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function r(d) {
      return n.get(d);
    }
    function i(d, m, p) {
      const _ = !p, b = ai(d);
      b.aliasOf = p && p.record;
      const $ = ui(t, d), R = [
        b
      ];
      if ("alias" in d) {
        const M = typeof d.alias == "string" ? [
          d.alias
        ] : d.alias;
        for (const B of M) R.push(ai(ee({}, b, {
          components: p ? p.record.components : b.components,
          path: B,
          aliasOf: p ? p.record : b
        })));
      }
      let k, F;
      for (const M of R) {
        const { path: B } = M;
        if (m && B[0] !== "/") {
          const le = m.record.path, q = le[le.length - 1] === "/" ? "" : "/";
          M.path = m.record.path + (B && q + B);
        }
        if (k = Gu(M, m, $), p ? p.alias.push(k) : (F = F || k, F !== k && F.alias.push(k), _ && d.name && !ci(k) && o(d.name)), tl(k) && a(k), b.children) {
          const le = b.children;
          for (let q = 0; q < le.length; q++) i(le[q], k, p && p.children[q]);
        }
        p = p || k;
      }
      return F ? () => {
        o(F);
      } : hs;
    }
    function o(d) {
      if (Xo(d)) {
        const m = n.get(d);
        m && (n.delete(d), s.splice(s.indexOf(m), 1), m.children.forEach(o), m.alias.forEach(o));
      } else {
        const m = s.indexOf(d);
        m > -1 && (s.splice(m, 1), d.record.name && n.delete(d.record.name), d.children.forEach(o), d.alias.forEach(o));
      }
    }
    function l() {
      return s;
    }
    function a(d) {
      const m = Xu(d, s);
      s.splice(m, 0, d), d.record.name && !ci(d) && n.set(d.record.name, d);
    }
    function f(d, m) {
      let p, _ = {}, b, $;
      if ("name" in d && d.name) {
        if (p = n.get(d.name), !p) throw Zt(1, {
          location: d
        });
        $ = p.record.name, _ = ee(li(m.params, p.keys.filter((F) => !F.optional).concat(p.parent ? p.parent.keys.filter((F) => F.optional) : []).map((F) => F.name)), d.params && li(d.params, p.keys.map((F) => F.name))), b = p.stringify(_);
      } else if (d.path != null) b = d.path, p = s.find((F) => F.re.test(b)), p && (_ = p.parse(b), $ = p.record.name);
      else {
        if (p = m.name ? n.get(m.name) : s.find((F) => F.re.test(m.path)), !p) throw Zt(1, {
          location: d,
          currentLocation: m
        });
        $ = p.record.name, _ = ee({}, m.params, d.params), b = p.stringify(_);
      }
      const R = [];
      let k = p;
      for (; k; ) R.unshift(k.record), k = k.parent;
      return {
        name: $,
        path: b,
        params: _,
        matched: R,
        meta: Ju(R)
      };
    }
    e.forEach((d) => i(d));
    function c() {
      s.length = 0, n.clear();
    }
    return {
      addRoute: i,
      resolve: f,
      removeRoute: o,
      clearRoutes: c,
      getRoutes: l,
      getRecordMatcher: r
    };
  }
  function li(e, t) {
    const s = {};
    for (const n of t) n in e && (s[n] = e[n]);
    return s;
  }
  function ai(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: Yu(e),
      children: e.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in e ? e.components || null : e.component && {
        default: e.component
      }
    };
    return Object.defineProperty(t, "mods", {
      value: {}
    }), t;
  }
  function Yu(e) {
    const t = {}, s = e.props || false;
    if ("component" in e) t.default = s;
    else for (const n in e.components) t[n] = typeof s == "object" ? s[n] : s;
    return t;
  }
  function ci(e) {
    for (; e; ) {
      if (e.record.aliasOf) return true;
      e = e.parent;
    }
    return false;
  }
  function Ju(e) {
    return e.reduce((t, s) => ee(t, s.meta), {});
  }
  function ui(e, t) {
    const s = {};
    for (const n in e) s[n] = n in t ? t[n] : e[n];
    return s;
  }
  function Xu(e, t) {
    let s = 0, n = t.length;
    for (; s !== n; ) {
      const i = s + n >> 1;
      el(e, t[i]) < 0 ? n = i : s = i + 1;
    }
    const r = Zu(e);
    return r && (n = t.lastIndexOf(r, n - 1)), n;
  }
  function Zu(e) {
    let t = e;
    for (; t = t.parent; ) if (tl(t) && el(e, t) === 0) return t;
  }
  function tl({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function ef(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < n.length; ++r) {
      const i = n[r].replace(Bo, " "), o = i.indexOf("="), l = _s(o < 0 ? i : i.slice(0, o)), a = o < 0 ? null : _s(i.slice(o + 1));
      if (l in t) {
        let f = t[l];
        et(f) || (f = t[l] = [
          f
        ]), f.push(a);
      } else t[l] = a;
    }
    return t;
  }
  function fi(e) {
    let t = "";
    for (let s in e) {
      const n = e[s];
      if (s = wu(s), n == null) {
        n !== void 0 && (t += (t.length ? "&" : "") + s);
        continue;
      }
      (et(n) ? n.map((i) => i && $n(i)) : [
        n && $n(n)
      ]).forEach((i) => {
        i !== void 0 && (t += (t.length ? "&" : "") + s, i != null && (t += "=" + i));
      });
    }
    return t;
  }
  function tf(e) {
    const t = {};
    for (const s in e) {
      const n = e[s];
      n !== void 0 && (t[s] = et(n) ? n.map((r) => r == null ? null : "" + r) : n == null ? n : "" + n);
    }
    return t;
  }
  const sf = Symbol(""), di = Symbol(""), br = Symbol(""), sl = Symbol(""), Un = Symbol("");
  function is() {
    let e = [];
    function t(n) {
      return e.push(n), () => {
        const r = e.indexOf(n);
        r > -1 && e.splice(r, 1);
      };
    }
    function s() {
      e = [];
    }
    return {
      add: t,
      list: () => e.slice(),
      reset: s
    };
  }
  function Ct(e, t, s, n, r, i = (o) => o()) {
    const o = n && (n.enterCallbacks[r] = n.enterCallbacks[r] || []);
    return () => new Promise((l, a) => {
      const f = (m) => {
        m === false ? a(Zt(4, {
          from: s,
          to: t
        })) : m instanceof Error ? a(m) : Uu(m) ? a(Zt(2, {
          from: t,
          to: m
        })) : (o && n.enterCallbacks[r] === o && typeof m == "function" && o.push(m), l());
      }, c = i(() => e.call(n && n.instances[r], t, s, f));
      let d = Promise.resolve(c);
      e.length < 3 && (d = d.then(f)), d.catch((m) => a(m));
    });
  }
  function Sn(e, t, s, n, r = (i) => i()) {
    const i = [];
    for (const o of e) for (const l in o.components) {
      let a = o.components[l];
      if (!(t !== "beforeRouteEnter" && !o.instances[l])) if (zo(a)) {
        const c = (a.__vccOpts || a)[t];
        c && i.push(Ct(c, s, n, o, l, r));
      } else {
        let f = a();
        i.push(() => f.then((c) => {
          if (!c) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);
          const d = cu(c) ? c.default : c;
          o.mods[l] = c, o.components[l] = d;
          const p = (d.__vccOpts || d)[t];
          return p && Ct(p, s, n, o, l, r)();
        }));
      }
    }
    return i;
  }
  function hi(e) {
    const t = at(br), s = at(sl), n = Ge(() => {
      const a = de(e.to);
      return t.resolve(a);
    }), r = Ge(() => {
      const { matched: a } = n.value, { length: f } = a, c = a[f - 1], d = s.matched;
      if (!c || !d.length) return -1;
      const m = d.findIndex(Xt.bind(null, c));
      if (m > -1) return m;
      const p = pi(a[f - 2]);
      return f > 1 && pi(c) === p && d[d.length - 1].path !== p ? d.findIndex(Xt.bind(null, a[f - 2])) : m;
    }), i = Ge(() => r.value > -1 && lf(s.params, n.value.params)), o = Ge(() => r.value > -1 && r.value === s.matched.length - 1 && Yo(s.params, n.value.params));
    function l(a = {}) {
      if (of(a)) {
        const f = t[de(e.replace) ? "replace" : "push"](de(e.to)).catch(hs);
        return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => f), f;
      }
      return Promise.resolve();
    }
    return {
      route: n,
      href: Ge(() => n.value.href),
      isActive: i,
      isExactActive: o,
      navigate: l
    };
  }
  function nf(e) {
    return e.length === 1 ? e[0] : e;
  }
  const rf = Ye({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [
          String,
          Object
        ],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink: hi,
    setup(e, { slots: t }) {
      const s = Ps(hi(e)), { options: n } = at(br), r = Ge(() => ({
        [mi(e.activeClass, n.linkActiveClass, "router-link-active")]: s.isActive,
        [mi(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
      }));
      return () => {
        const i = t.default && nf(t.default(s));
        return e.custom ? i : Ho("a", {
          "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
          href: s.href,
          onClick: s.navigate,
          class: r.value
        }, i);
      };
    }
  }), Rt = rf;
  function of(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), true;
    }
  }
  function lf(e, t) {
    for (const s in t) {
      const n = t[s], r = e[s];
      if (typeof n == "string") {
        if (n !== r) return false;
      } else if (!et(r) || r.length !== n.length || n.some((i, o) => i !== r[o])) return false;
    }
    return true;
  }
  function pi(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const mi = (e, t, s) => e ?? t ?? s, af = Ye({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(e, { attrs: t, slots: s }) {
      const n = at(Un), r = Ge(() => e.route || n.value), i = at(di, 0), o = Ge(() => {
        let f = de(i);
        const { matched: c } = r.value;
        let d;
        for (; (d = c[f]) && !d.components; ) f++;
        return f;
      }), l = Ge(() => r.value.matched[o.value]);
      js(di, Ge(() => o.value + 1)), js(sf, l), js(Un, r);
      const a = ar();
      return Et(() => [
        a.value,
        l.value,
        e.name
      ], ([f, c, d], [m, p, _]) => {
        c && (c.instances[d] = f, p && p !== c && f && f === m && (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards), c.updateGuards.size || (c.updateGuards = p.updateGuards))), f && c && (!p || !Xt(c, p) || !m) && (c.enterCallbacks[d] || []).forEach((b) => b(f));
      }, {
        flush: "post"
      }), () => {
        const f = r.value, c = e.name, d = l.value, m = d && d.components[c];
        if (!m) return gi(s.default, {
          Component: m,
          route: f
        });
        const p = d.props[c], _ = p ? p === true ? f.params : typeof p == "function" ? p(f) : p : null, $ = Ho(m, ee({}, _, t, {
          onVnodeUnmounted: (R) => {
            R.component.isUnmounted && (d.instances[c] = null);
          },
          ref: a
        }));
        return gi(s.default, {
          Component: $,
          route: f
        }) || $;
      };
    }
  });
  function gi(e, t) {
    if (!e) return null;
    const s = e(t);
    return s.length === 1 ? s[0] : s;
  }
  const nl = af;
  function cf(e) {
    const t = Wu(e.routes, e), s = e.parseQuery || ef, n = e.stringifyQuery || fi, r = e.history, i = is(), o = is(), l = is(), a = ro(wt);
    let f = wt;
    zt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = _n.bind(null, (y) => "" + y), d = _n.bind(null, xu), m = _n.bind(null, _s);
    function p(y, T) {
      let O, N;
      return Xo(y) ? (O = t.getRecordMatcher(y), N = T) : N = y, t.addRoute(N, O);
    }
    function _(y) {
      const T = t.getRecordMatcher(y);
      T && t.removeRoute(T);
    }
    function b() {
      return t.getRoutes().map((y) => y.record);
    }
    function $(y) {
      return !!t.getRecordMatcher(y);
    }
    function R(y, T) {
      if (T = ee({}, T || a.value), typeof y == "string") {
        const g = xn(s, y, T.path), v = t.resolve({
          path: g.path
        }, T), x = r.createHref(g.fullPath);
        return ee(g, v, {
          params: m(v.params),
          hash: _s(g.hash),
          redirectedFrom: void 0,
          href: x
        });
      }
      let O;
      if (y.path != null) O = ee({}, y, {
        path: xn(s, y.path, T.path).path
      });
      else {
        const g = ee({}, y.params);
        for (const v in g) g[v] == null && delete g[v];
        O = ee({}, y, {
          params: d(g)
        }), T.params = d(T.params);
      }
      const N = t.resolve(O, T), X = y.hash || "";
      N.params = c(m(N.params));
      const u = Ru(n, ee({}, y, {
        hash: vu(X),
        path: N.path
      })), h = r.createHref(u);
      return ee({
        fullPath: u,
        hash: X,
        query: n === fi ? tf(y.query) : y.query || {}
      }, N, {
        redirectedFrom: void 0,
        href: h
      });
    }
    function k(y) {
      return typeof y == "string" ? xn(s, y, a.value.path) : ee({}, y);
    }
    function F(y, T) {
      if (f !== y) return Zt(8, {
        from: T,
        to: y
      });
    }
    function M(y) {
      return q(y);
    }
    function B(y) {
      return M(ee(k(y), {
        replace: true
      }));
    }
    function le(y) {
      const T = y.matched[y.matched.length - 1];
      if (T && T.redirect) {
        const { redirect: O } = T;
        let N = typeof O == "function" ? O(y) : O;
        return typeof N == "string" && (N = N.includes("?") || N.includes("#") ? N = k(N) : {
          path: N
        }, N.params = {}), ee({
          query: y.query,
          hash: y.hash,
          params: N.path != null ? {} : y.params
        }, N);
      }
    }
    function q(y, T) {
      const O = f = R(y), N = a.value, X = y.state, u = y.force, h = y.replace === true, g = le(O);
      if (g) return q(ee(k(g), {
        state: typeof g == "object" ? ee({}, X, g.state) : X,
        force: u,
        replace: h
      }), T || O);
      const v = O;
      v.redirectedFrom = T;
      let x;
      return !u && Pu(n, N, O) && (x = Zt(16, {
        to: v,
        from: N
      }), Ne(N, N, true, false)), (x ? Promise.resolve(x) : pe(v, N)).catch((w) => pt(w) ? pt(w, 2) ? w : Je(w) : P(w, v, N)).then((w) => {
        if (w) {
          if (pt(w, 2)) return q(ee({
            replace: h
          }, k(w.to), {
            state: typeof w.to == "object" ? ee({}, X, w.to.state) : X,
            force: u
          }), T || v);
        } else w = qe(v, N, true, h, X);
        return Re(v, N, w), w;
      });
    }
    function D(y, T) {
      const O = F(y, T);
      return O ? Promise.reject(O) : Promise.resolve();
    }
    function fe(y) {
      const T = me.values().next().value;
      return T && typeof T.runWithContext == "function" ? T.runWithContext(y) : y();
    }
    function pe(y, T) {
      let O;
      const [N, X, u] = uf(y, T);
      O = Sn(N.reverse(), "beforeRouteLeave", y, T);
      for (const g of N) g.leaveGuards.forEach((v) => {
        O.push(Ct(v, y, T));
      });
      const h = D.bind(null, y, T);
      return O.push(h), ke(O).then(() => {
        O = [];
        for (const g of i.list()) O.push(Ct(g, y, T));
        return O.push(h), ke(O);
      }).then(() => {
        O = Sn(X, "beforeRouteUpdate", y, T);
        for (const g of X) g.updateGuards.forEach((v) => {
          O.push(Ct(v, y, T));
        });
        return O.push(h), ke(O);
      }).then(() => {
        O = [];
        for (const g of u) if (g.beforeEnter) if (et(g.beforeEnter)) for (const v of g.beforeEnter) O.push(Ct(v, y, T));
        else O.push(Ct(g.beforeEnter, y, T));
        return O.push(h), ke(O);
      }).then(() => (y.matched.forEach((g) => g.enterCallbacks = {}), O = Sn(u, "beforeRouteEnter", y, T, fe), O.push(h), ke(O))).then(() => {
        O = [];
        for (const g of o.list()) O.push(Ct(g, y, T));
        return O.push(h), ke(O);
      }).catch((g) => pt(g, 8) ? g : Promise.reject(g));
    }
    function Re(y, T, O) {
      l.list().forEach((N) => fe(() => N(y, T, O)));
    }
    function qe(y, T, O, N, X) {
      const u = F(y, T);
      if (u) return u;
      const h = T === wt, g = zt ? history.state : {};
      O && (N || h ? r.replace(y.fullPath, ee({
        scroll: h && g && g.scroll
      }, X)) : r.push(y.fullPath, X)), a.value = y, Ne(y, T, O, h), Je();
    }
    let Le;
    function ft() {
      Le || (Le = r.listen((y, T, O) => {
        if (!dt.listening) return;
        const N = R(y), X = le(N);
        if (X) {
          q(ee(X, {
            replace: true,
            force: true
          }), N).catch(hs);
          return;
        }
        f = N;
        const u = a.value;
        zt && Fu(si(u.fullPath, O.delta), cn()), pe(N, u).catch((h) => pt(h, 12) ? h : pt(h, 2) ? (q(ee(k(h.to), {
          force: true
        }), N).then((g) => {
          pt(g, 20) && !O.delta && O.type === xs.pop && r.go(-1, false);
        }).catch(hs), Promise.reject()) : (O.delta && r.go(-O.delta, false), P(h, N, u))).then((h) => {
          h = h || qe(N, u, false), h && (O.delta && !pt(h, 8) ? r.go(-O.delta, false) : O.type === xs.pop && pt(h, 20) && r.go(-1, false)), Re(N, u, h);
        }).catch(hs);
      }));
    }
    let $e = is(), re = is(), W;
    function P(y, T, O) {
      Je(y);
      const N = re.list();
      return N.length ? N.forEach((X) => X(y, T, O)) : console.error(y), Promise.reject(y);
    }
    function Be() {
      return W && a.value !== wt ? Promise.resolve() : new Promise((y, T) => {
        $e.add([
          y,
          T
        ]);
      });
    }
    function Je(y) {
      return W || (W = !y, ft(), $e.list().forEach(([T, O]) => y ? O(y) : T()), $e.reset()), y;
    }
    function Ne(y, T, O, N) {
      const { scrollBehavior: X } = e;
      if (!zt || !X) return Promise.resolve();
      const u = !O && Du(si(y.fullPath, 0)) || (N || !O) && history.state && history.state.scroll || null;
      return cr().then(() => X(y, T, u)).then((h) => h && Iu(h)).catch((h) => P(h, y, T));
    }
    const we = (y) => r.go(y);
    let he;
    const me = /* @__PURE__ */ new Set(), dt = {
      currentRoute: a,
      listening: true,
      addRoute: p,
      removeRoute: _,
      clearRoutes: t.clearRoutes,
      hasRoute: $,
      getRoutes: b,
      resolve: R,
      options: e,
      push: M,
      replace: B,
      go: we,
      back: () => we(-1),
      forward: () => we(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: re.add,
      isReady: Be,
      install(y) {
        const T = this;
        y.component("RouterLink", Rt), y.component("RouterView", nl), y.config.globalProperties.$router = T, Object.defineProperty(y.config.globalProperties, "$route", {
          enumerable: true,
          get: () => de(a)
        }), zt && !he && a.value === wt && (he = true, M(r.location).catch((X) => {
        }));
        const O = {};
        for (const X in wt) Object.defineProperty(O, X, {
          get: () => a.value[X],
          enumerable: true
        });
        y.provide(br, T), y.provide(sl, ir(O)), y.provide(Un, a);
        const N = y.unmount;
        me.add(y), y.unmount = function() {
          me.delete(y), me.size < 1 && (f = wt, Le && Le(), Le = null, a.value = wt, he = false, W = false), N();
        };
      }
    };
    function ke(y) {
      return y.reduce((T, O) => T.then(() => fe(O)), Promise.resolve());
    }
    return dt;
  }
  function uf(e, t) {
    const s = [], n = [], r = [], i = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < i; o++) {
      const l = t.matched[o];
      l && (e.matched.find((f) => Xt(f, l)) ? n.push(l) : s.push(l));
      const a = e.matched[o];
      a && (t.matched.find((f) => Xt(f, a)) || r.push(a));
    }
    return [
      s,
      n,
      r
    ];
  }
  const ff = {}, df = {
    class: "up",
    height: "20px",
    width: "20px",
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 330 330",
    "xml:space": "preserve"
  };
  function hf(e, t) {
    return oe(), be("svg", df, t[0] || (t[0] = [
      ie("path", {
        id: "XMLID_224_",
        d: "M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
      }, null, -1)
    ]));
  }
  const pf = ut(ff, [
    [
      "render",
      hf
    ],
    [
      "__scopeId",
      "data-v-b0e12f74"
    ]
  ]), mf = {}, gf = {
    class: "down",
    height: "20px",
    width: "20px",
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 512.011 512.011",
    "xml:space": "preserve"
  };
  function yf(e, t) {
    return oe(), be("svg", gf, t[0] || (t[0] = [
      ie("g", null, [
        ie("g", null, [
          ie("path", {
            d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0    s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667    C514.096,145.416,514.096,131.933,505.755,123.592z"
          })
        ])
      ], -1)
    ]));
  }
  const yi = ut(mf, [
    [
      "render",
      yf
    ],
    [
      "__scopeId",
      "data-v-c414bcb2"
    ]
  ]), bf = {
    class: "regular"
  }, vf = Ye({
    __name: "ResponsiveLinks",
    setup(e) {
      const t = ro({
        show: false,
        Icon: yi
      });
      function s() {
        t.value.show ? t.value = {
          show: false,
          Icon: yi
        } : t.value = {
          show: true,
          Icon: pf
        };
      }
      return (n, r) => (oe(), be(xe, null, [
        ie("div", bf, [
          J(de(Rt), {
            to: "/"
          }, {
            default: je(() => r[0] || (r[0] = [
              Ie("Home")
            ])),
            _: 1
          }),
          J(de(Rt), {
            to: "/about"
          }, {
            default: je(() => r[1] || (r[1] = [
              Ie("About")
            ])),
            _: 1
          }),
          J(de(Rt), {
            to: "/posts"
          }, {
            default: je(() => r[2] || (r[2] = [
              Ie("Posts")
            ])),
            _: 1
          })
        ]),
        ie("a", {
          class: "mobile",
          onClick: s
        }, [
          J(de(t).Icon)
        ]),
        ie("div", {
          class: Rs([
            "mobile-links",
            t.value.show ? "" : "d-none"
          ])
        }, [
          J(de(Rt), {
            to: "/"
          }, {
            default: je(() => r[3] || (r[3] = [
              Ie("Home")
            ])),
            _: 1
          }),
          J(de(Rt), {
            to: "/about"
          }, {
            default: je(() => r[4] || (r[4] = [
              Ie("About")
            ])),
            _: 1
          }),
          J(de(Rt), {
            to: "/posts"
          }, {
            default: je(() => r[5] || (r[5] = [
              Ie("Posts")
            ])),
            _: 1
          })
        ], 2)
      ], 64));
    }
  }), wf = ut(vf, [
    [
      "__scopeId",
      "data-v-eb23e4c5"
    ]
  ]), _f = "modulepreload", xf = function(e) {
    return "/" + e;
  }, bi = {}, Cn = function(t, s, n) {
    let r = Promise.resolve();
    if (s && s.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"), l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
      r = Promise.allSettled(s.map((a) => {
        if (a = xf(a), a in bi) return;
        bi[a] = true;
        const f = a.endsWith(".css"), c = f ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${a}"]${c}`)) return;
        const d = document.createElement("link");
        if (d.rel = f ? "stylesheet" : _f, f || (d.as = "script"), d.crossOrigin = "", d.href = a, l && d.setAttribute("nonce", l), document.head.appendChild(d), f) return new Promise((m, p) => {
          d.addEventListener("load", m), d.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${a}`)));
        });
      }));
    }
    function i(o) {
      const l = new Event("vite:preloadError", {
        cancelable: true
      });
      if (l.payload = o, window.dispatchEvent(l), !l.defaultPrevented) throw o;
    }
    return r.then((o) => {
      for (const l of o || []) l.status === "rejected" && i(l.reason);
      return t().catch(i);
    });
  }, Sf = {}, Cf = {
    class: "mmd-title"
  };
  function Rf(e, t) {
    return oe(), be(xe, null, [
      ie("h3", Cf, [
        bo(e.$slots, "default")
      ]),
      t[0] || (t[0] = ie("hr", {
        class: "paragraph-divider pb-5"
      }, null, -1))
    ], 64);
  }
  Pf = ut(Sf, [
    [
      "render",
      Rf
    ]
  ]);
  function rl(e) {
    var t, s, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++) e[t] && (s = rl(e[t])) && (n && (n += " "), n += s);
    } else for (s in e) e[s] && (n && (n += " "), n += s);
    return n;
  }
  function Ef() {
    for (var e, t, s = 0, n = "", r = arguments.length; s < r; s++) (e = arguments[s]) && (t = rl(e)) && (n && (n += " "), n += t);
    return n;
  }
  const vr = "-", Of = (e) => {
    const t = Af(e), { conflictingClassGroups: s, conflictingClassGroupModifiers: n } = e;
    return {
      getClassGroupId: (o) => {
        const l = o.split(vr);
        return l[0] === "" && l.length !== 1 && l.shift(), il(l, t) || kf(o);
      },
      getConflictingClassGroupIds: (o, l) => {
        const a = s[o] || [];
        return l && n[o] ? [
          ...a,
          ...n[o]
        ] : a;
      }
    };
  }, il = (e, t) => {
    var _a4;
    if (e.length === 0) return t.classGroupId;
    const s = e[0], n = t.nextPart.get(s), r = n ? il(e.slice(1), n) : void 0;
    if (r) return r;
    if (t.validators.length === 0) return;
    const i = e.join(vr);
    return (_a4 = t.validators.find(({ validator: o }) => o(i))) == null ? void 0 : _a4.classGroupId;
  }, vi = /^\[(.+)\]$/, kf = (e) => {
    if (vi.test(e)) {
      const t = vi.exec(e)[1], s = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  }, Af = (e) => {
    const { theme: t, classGroups: s } = e, n = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    for (const r in s) Qn(s[r], n, r, t);
    return n;
  }, Qn = (e, t, s, n) => {
    e.forEach((r) => {
      if (typeof r == "string") {
        const i = r === "" ? t : wi(t, r);
        i.classGroupId = s;
        return;
      }
      if (typeof r == "function") {
        if (Mf(r)) {
          Qn(r(n), t, s, n);
          return;
        }
        t.validators.push({
          validator: r,
          classGroupId: s
        });
        return;
      }
      Object.entries(r).forEach(([i, o]) => {
        Qn(o, wi(t, i), s, n);
      });
    });
  }, wi = (e, t) => {
    let s = e;
    return t.split(vr).forEach((n) => {
      s.nextPart.has(n) || s.nextPart.set(n, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      }), s = s.nextPart.get(n);
    }), s;
  }, Mf = (e) => e.isThemeGetter, Tf = (e) => {
    if (e < 1) return {
      get: () => {
      },
      set: () => {
      }
    };
    let t = 0, s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    const r = (i, o) => {
      s.set(i, o), t++, t > e && (t = 0, n = s, s = /* @__PURE__ */ new Map());
    };
    return {
      get(i) {
        let o = s.get(i);
        if (o !== void 0) return o;
        if ((o = n.get(i)) !== void 0) return r(i, o), o;
      },
      set(i, o) {
        s.has(i) ? s.set(i, o) : r(i, o);
      }
    };
  }, Hn = "!", Vn = ":", If = Vn.length, Ff = (e) => {
    const { prefix: t, experimentalParseClassName: s } = e;
    let n = (r) => {
      const i = [];
      let o = 0, l = 0, a = 0, f;
      for (let _ = 0; _ < r.length; _++) {
        let b = r[_];
        if (o === 0 && l === 0) {
          if (b === Vn) {
            i.push(r.slice(a, _)), a = _ + If;
            continue;
          }
          if (b === "/") {
            f = _;
            continue;
          }
        }
        b === "[" ? o++ : b === "]" ? o-- : b === "(" ? l++ : b === ")" && l--;
      }
      const c = i.length === 0 ? r : r.substring(a), d = Df(c), m = d !== c, p = f && f > a ? f - a : void 0;
      return {
        modifiers: i,
        hasImportantModifier: m,
        baseClassName: d,
        maybePostfixModifierPosition: p
      };
    };
    if (t) {
      const r = t + Vn, i = n;
      n = (o) => o.startsWith(r) ? i(o.substring(r.length)) : {
        isExternal: true,
        modifiers: [],
        hasImportantModifier: false,
        baseClassName: o,
        maybePostfixModifierPosition: void 0
      };
    }
    if (s) {
      const r = n;
      n = (i) => s({
        className: i,
        parseClassName: r
      });
    }
    return n;
  }, Df = (e) => e.endsWith(Hn) ? e.substring(0, e.length - 1) : e.startsWith(Hn) ? e.substring(1) : e, jf = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [
      n,
      true
    ]));
    return (n) => {
      if (n.length <= 1) return n;
      const r = [];
      let i = [];
      return n.forEach((o) => {
        o[0] === "[" || t[o] ? (r.push(...i.sort(), o), i = []) : i.push(o);
      }), r.push(...i.sort()), r;
    };
  }, Lf = (e) => ({
    cache: Tf(e.cacheSize),
    parseClassName: Ff(e),
    sortModifiers: jf(e),
    ...Of(e)
  }), $f = /\s+/, Nf = (e, t) => {
    const { parseClassName: s, getClassGroupId: n, getConflictingClassGroupIds: r, sortModifiers: i } = t, o = [], l = e.trim().split($f);
    let a = "";
    for (let f = l.length - 1; f >= 0; f -= 1) {
      const c = l[f], { isExternal: d, modifiers: m, hasImportantModifier: p, baseClassName: _, maybePostfixModifierPosition: b } = s(c);
      if (d) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      let $ = !!b, R = n($ ? _.substring(0, b) : _);
      if (!R) {
        if (!$) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (R = n(_), !R) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        $ = false;
      }
      const k = i(m).join(":"), F = p ? k + Hn : k, M = F + R;
      if (o.includes(M)) continue;
      o.push(M);
      const B = r(R, $);
      for (let le = 0; le < B.length; ++le) {
        const q = B[le];
        o.push(F + q);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
  function Uf() {
    let e = 0, t, s, n = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (s = ol(t)) && (n && (n += " "), n += s);
    return n;
  }
  const ol = (e) => {
    if (typeof e == "string") return e;
    let t, s = "";
    for (let n = 0; n < e.length; n++) e[n] && (t = ol(e[n])) && (s && (s += " "), s += t);
    return s;
  };
  function Qf(e, ...t) {
    let s, n, r, i = o;
    function o(a) {
      const f = t.reduce((c, d) => d(c), e());
      return s = Lf(f), n = s.cache.get, r = s.cache.set, i = l, l(a);
    }
    function l(a) {
      const f = n(a);
      if (f) return f;
      const c = Nf(a, s);
      return r(a, c), c;
    }
    return function() {
      return i(Uf.apply(null, arguments));
    };
  }
  const ye = (e) => {
    const t = (s) => s[e] || [];
    return t.isThemeGetter = true, t;
  }, ll = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, al = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Hf = /^\d+\/\d+$/, Vf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Bf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ht = (e) => Hf.test(e), K = (e) => !!e && !Number.isNaN(Number(e)), _t = (e) => !!e && Number.isInteger(Number(e)), Rn = (e) => e.endsWith("%") && K(e.slice(0, -1)), mt = (e) => Vf.test(e), Gf = () => true, Wf = (e) => zf.test(e) && !qf.test(e), cl = () => false, Yf = (e) => Bf.test(e), Jf = (e) => Kf.test(e), Xf = (e) => !j(e) && !L(e), Zf = (e) => es(e, dl, cl), j = (e) => ll.test(e), Dt = (e) => es(e, hl, Wf), Pn = (e) => es(e, rd, K), _i = (e) => es(e, ul, cl), ed = (e) => es(e, fl, Jf), Is = (e) => es(e, pl, Yf), L = (e) => al.test(e), os = (e) => ts(e, hl), td = (e) => ts(e, id), xi = (e) => ts(e, ul), sd = (e) => ts(e, dl), nd = (e) => ts(e, fl), Fs = (e) => ts(e, pl, true), es = (e, t, s) => {
    const n = ll.exec(e);
    return n ? n[1] ? t(n[1]) : s(n[2]) : false;
  }, ts = (e, t, s = false) => {
    const n = al.exec(e);
    return n ? n[1] ? t(n[1]) : s : false;
  }, ul = (e) => e === "position" || e === "percentage", fl = (e) => e === "image" || e === "url", dl = (e) => e === "length" || e === "size" || e === "bg-size", hl = (e) => e === "length", rd = (e) => e === "number", id = (e) => e === "family-name", pl = (e) => e === "shadow", od = () => {
    const e = ye("color"), t = ye("font"), s = ye("text"), n = ye("font-weight"), r = ye("tracking"), i = ye("leading"), o = ye("breakpoint"), l = ye("container"), a = ye("spacing"), f = ye("radius"), c = ye("shadow"), d = ye("inset-shadow"), m = ye("text-shadow"), p = ye("drop-shadow"), _ = ye("blur"), b = ye("perspective"), $ = ye("aspect"), R = ye("ease"), k = ye("animate"), F = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ], M = () => [
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      "left-top",
      "top-right",
      "right-top",
      "bottom-right",
      "right-bottom",
      "bottom-left",
      "left-bottom"
    ], B = () => [
      ...M(),
      L,
      j
    ], le = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], q = () => [
      "auto",
      "contain",
      "none"
    ], D = () => [
      L,
      j,
      a
    ], fe = () => [
      Ht,
      "full",
      "auto",
      ...D()
    ], pe = () => [
      _t,
      "none",
      "subgrid",
      L,
      j
    ], Re = () => [
      "auto",
      {
        span: [
          "full",
          _t,
          L,
          j
        ]
      },
      _t,
      L,
      j
    ], qe = () => [
      _t,
      "auto",
      L,
      j
    ], Le = () => [
      "auto",
      "min",
      "max",
      "fr",
      L,
      j
    ], ft = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
      "baseline",
      "center-safe",
      "end-safe"
    ], $e = () => [
      "start",
      "end",
      "center",
      "stretch",
      "center-safe",
      "end-safe"
    ], re = () => [
      "auto",
      ...D()
    ], W = () => [
      Ht,
      "auto",
      "full",
      "dvw",
      "dvh",
      "lvw",
      "lvh",
      "svw",
      "svh",
      "min",
      "max",
      "fit",
      ...D()
    ], P = () => [
      e,
      L,
      j
    ], Be = () => [
      ...M(),
      xi,
      _i,
      {
        position: [
          L,
          j
        ]
      }
    ], Je = () => [
      "no-repeat",
      {
        repeat: [
          "",
          "x",
          "y",
          "space",
          "round"
        ]
      }
    ], Ne = () => [
      "auto",
      "cover",
      "contain",
      sd,
      Zf,
      {
        size: [
          L,
          j
        ]
      }
    ], we = () => [
      Rn,
      os,
      Dt
    ], he = () => [
      "",
      "none",
      "full",
      f,
      L,
      j
    ], me = () => [
      "",
      K,
      os,
      Dt
    ], dt = () => [
      "solid",
      "dashed",
      "dotted",
      "double"
    ], ke = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ], y = () => [
      K,
      Rn,
      xi,
      _i
    ], T = () => [
      "",
      "none",
      _,
      L,
      j
    ], O = () => [
      "none",
      K,
      L,
      j
    ], N = () => [
      "none",
      K,
      L,
      j
    ], X = () => [
      K,
      L,
      j
    ], u = () => [
      Ht,
      "full",
      ...D()
    ];
    return {
      cacheSize: 500,
      theme: {
        animate: [
          "spin",
          "ping",
          "pulse",
          "bounce"
        ],
        aspect: [
          "video"
        ],
        blur: [
          mt
        ],
        breakpoint: [
          mt
        ],
        color: [
          Gf
        ],
        container: [
          mt
        ],
        "drop-shadow": [
          mt
        ],
        ease: [
          "in",
          "out",
          "in-out"
        ],
        font: [
          Xf
        ],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black"
        ],
        "inset-shadow": [
          mt
        ],
        leading: [
          "none",
          "tight",
          "snug",
          "normal",
          "relaxed",
          "loose"
        ],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none"
        ],
        radius: [
          mt
        ],
        shadow: [
          mt
        ],
        spacing: [
          "px",
          K
        ],
        text: [
          mt
        ],
        "text-shadow": [
          mt
        ],
        tracking: [
          "tighter",
          "tight",
          "normal",
          "wide",
          "wider",
          "widest"
        ]
      },
      classGroups: {
        aspect: [
          {
            aspect: [
              "auto",
              "square",
              Ht,
              j,
              L,
              $
            ]
          }
        ],
        container: [
          "container"
        ],
        columns: [
          {
            columns: [
              K,
              j,
              L,
              l
            ]
          }
        ],
        "break-after": [
          {
            "break-after": F()
          }
        ],
        "break-before": [
          {
            "break-before": F()
          }
        ],
        "break-inside": [
          {
            "break-inside": [
              "auto",
              "avoid",
              "avoid-page",
              "avoid-column"
            ]
          }
        ],
        "box-decoration": [
          {
            "box-decoration": [
              "slice",
              "clone"
            ]
          }
        ],
        box: [
          {
            box: [
              "border",
              "content"
            ]
          }
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        sr: [
          "sr-only",
          "not-sr-only"
        ],
        float: [
          {
            float: [
              "right",
              "left",
              "none",
              "start",
              "end"
            ]
          }
        ],
        clear: [
          {
            clear: [
              "left",
              "right",
              "both",
              "none",
              "start",
              "end"
            ]
          }
        ],
        isolation: [
          "isolate",
          "isolation-auto"
        ],
        "object-fit": [
          {
            object: [
              "contain",
              "cover",
              "fill",
              "none",
              "scale-down"
            ]
          }
        ],
        "object-position": [
          {
            object: B()
          }
        ],
        overflow: [
          {
            overflow: le()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": le()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": le()
          }
        ],
        overscroll: [
          {
            overscroll: q()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": q()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": q()
          }
        ],
        position: [
          "static",
          "fixed",
          "absolute",
          "relative",
          "sticky"
        ],
        inset: [
          {
            inset: fe()
          }
        ],
        "inset-x": [
          {
            "inset-x": fe()
          }
        ],
        "inset-y": [
          {
            "inset-y": fe()
          }
        ],
        start: [
          {
            start: fe()
          }
        ],
        end: [
          {
            end: fe()
          }
        ],
        top: [
          {
            top: fe()
          }
        ],
        right: [
          {
            right: fe()
          }
        ],
        bottom: [
          {
            bottom: fe()
          }
        ],
        left: [
          {
            left: fe()
          }
        ],
        visibility: [
          "visible",
          "invisible",
          "collapse"
        ],
        z: [
          {
            z: [
              _t,
              "auto",
              L,
              j
            ]
          }
        ],
        basis: [
          {
            basis: [
              Ht,
              "full",
              "auto",
              l,
              ...D()
            ]
          }
        ],
        "flex-direction": [
          {
            flex: [
              "row",
              "row-reverse",
              "col",
              "col-reverse"
            ]
          }
        ],
        "flex-wrap": [
          {
            flex: [
              "nowrap",
              "wrap",
              "wrap-reverse"
            ]
          }
        ],
        flex: [
          {
            flex: [
              K,
              Ht,
              "auto",
              "initial",
              "none",
              j
            ]
          }
        ],
        grow: [
          {
            grow: [
              "",
              K,
              L,
              j
            ]
          }
        ],
        shrink: [
          {
            shrink: [
              "",
              K,
              L,
              j
            ]
          }
        ],
        order: [
          {
            order: [
              _t,
              "first",
              "last",
              "none",
              L,
              j
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": pe()
          }
        ],
        "col-start-end": [
          {
            col: Re()
          }
        ],
        "col-start": [
          {
            "col-start": qe()
          }
        ],
        "col-end": [
          {
            "col-end": qe()
          }
        ],
        "grid-rows": [
          {
            "grid-rows": pe()
          }
        ],
        "row-start-end": [
          {
            row: Re()
          }
        ],
        "row-start": [
          {
            "row-start": qe()
          }
        ],
        "row-end": [
          {
            "row-end": qe()
          }
        ],
        "grid-flow": [
          {
            "grid-flow": [
              "row",
              "col",
              "dense",
              "row-dense",
              "col-dense"
            ]
          }
        ],
        "auto-cols": [
          {
            "auto-cols": Le()
          }
        ],
        "auto-rows": [
          {
            "auto-rows": Le()
          }
        ],
        gap: [
          {
            gap: D()
          }
        ],
        "gap-x": [
          {
            "gap-x": D()
          }
        ],
        "gap-y": [
          {
            "gap-y": D()
          }
        ],
        "justify-content": [
          {
            justify: [
              ...ft(),
              "normal"
            ]
          }
        ],
        "justify-items": [
          {
            "justify-items": [
              ...$e(),
              "normal"
            ]
          }
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              ...$e()
            ]
          }
        ],
        "align-content": [
          {
            content: [
              "normal",
              ...ft()
            ]
          }
        ],
        "align-items": [
          {
            items: [
              ...$e(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "align-self": [
          {
            self: [
              "auto",
              ...$e(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "place-content": [
          {
            "place-content": ft()
          }
        ],
        "place-items": [
          {
            "place-items": [
              ...$e(),
              "baseline"
            ]
          }
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              ...$e()
            ]
          }
        ],
        p: [
          {
            p: D()
          }
        ],
        px: [
          {
            px: D()
          }
        ],
        py: [
          {
            py: D()
          }
        ],
        ps: [
          {
            ps: D()
          }
        ],
        pe: [
          {
            pe: D()
          }
        ],
        pt: [
          {
            pt: D()
          }
        ],
        pr: [
          {
            pr: D()
          }
        ],
        pb: [
          {
            pb: D()
          }
        ],
        pl: [
          {
            pl: D()
          }
        ],
        m: [
          {
            m: re()
          }
        ],
        mx: [
          {
            mx: re()
          }
        ],
        my: [
          {
            my: re()
          }
        ],
        ms: [
          {
            ms: re()
          }
        ],
        me: [
          {
            me: re()
          }
        ],
        mt: [
          {
            mt: re()
          }
        ],
        mr: [
          {
            mr: re()
          }
        ],
        mb: [
          {
            mb: re()
          }
        ],
        ml: [
          {
            ml: re()
          }
        ],
        "space-x": [
          {
            "space-x": D()
          }
        ],
        "space-x-reverse": [
          "space-x-reverse"
        ],
        "space-y": [
          {
            "space-y": D()
          }
        ],
        "space-y-reverse": [
          "space-y-reverse"
        ],
        size: [
          {
            size: W()
          }
        ],
        w: [
          {
            w: [
              l,
              "screen",
              ...W()
            ]
          }
        ],
        "min-w": [
          {
            "min-w": [
              l,
              "screen",
              "none",
              ...W()
            ]
          }
        ],
        "max-w": [
          {
            "max-w": [
              l,
              "screen",
              "none",
              "prose",
              {
                screen: [
                  o
                ]
              },
              ...W()
            ]
          }
        ],
        h: [
          {
            h: [
              "screen",
              ...W()
            ]
          }
        ],
        "min-h": [
          {
            "min-h": [
              "screen",
              "none",
              ...W()
            ]
          }
        ],
        "max-h": [
          {
            "max-h": [
              "screen",
              ...W()
            ]
          }
        ],
        "font-size": [
          {
            text: [
              "base",
              s,
              os,
              Dt
            ]
          }
        ],
        "font-smoothing": [
          "antialiased",
          "subpixel-antialiased"
        ],
        "font-style": [
          "italic",
          "not-italic"
        ],
        "font-weight": [
          {
            font: [
              n,
              L,
              Pn
            ]
          }
        ],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Rn,
              j
            ]
          }
        ],
        "font-family": [
          {
            font: [
              td,
              j,
              t
            ]
          }
        ],
        "fvn-normal": [
          "normal-nums"
        ],
        "fvn-ordinal": [
          "ordinal"
        ],
        "fvn-slashed-zero": [
          "slashed-zero"
        ],
        "fvn-figure": [
          "lining-nums",
          "oldstyle-nums"
        ],
        "fvn-spacing": [
          "proportional-nums",
          "tabular-nums"
        ],
        "fvn-fraction": [
          "diagonal-fractions",
          "stacked-fractions"
        ],
        tracking: [
          {
            tracking: [
              r,
              L,
              j
            ]
          }
        ],
        "line-clamp": [
          {
            "line-clamp": [
              K,
              "none",
              L,
              Pn
            ]
          }
        ],
        leading: [
          {
            leading: [
              i,
              ...D()
            ]
          }
        ],
        "list-image": [
          {
            "list-image": [
              "none",
              L,
              j
            ]
          }
        ],
        "list-style-position": [
          {
            list: [
              "inside",
              "outside"
            ]
          }
        ],
        "list-style-type": [
          {
            list: [
              "disc",
              "decimal",
              "none",
              L,
              j
            ]
          }
        ],
        "text-alignment": [
          {
            text: [
              "left",
              "center",
              "right",
              "justify",
              "start",
              "end"
            ]
          }
        ],
        "placeholder-color": [
          {
            placeholder: P()
          }
        ],
        "text-color": [
          {
            text: P()
          }
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [
          {
            decoration: [
              ...dt(),
              "wavy"
            ]
          }
        ],
        "text-decoration-thickness": [
          {
            decoration: [
              K,
              "from-font",
              "auto",
              L,
              Dt
            ]
          }
        ],
        "text-decoration-color": [
          {
            decoration: P()
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              K,
              "auto",
              L,
              j
            ]
          }
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": [
          "truncate",
          "text-ellipsis",
          "text-clip"
        ],
        "text-wrap": [
          {
            text: [
              "wrap",
              "nowrap",
              "balance",
              "pretty"
            ]
          }
        ],
        indent: [
          {
            indent: D()
          }
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              L,
              j
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [
          {
            break: [
              "normal",
              "words",
              "all",
              "keep"
            ]
          }
        ],
        wrap: [
          {
            wrap: [
              "break-word",
              "anywhere",
              "normal"
            ]
          }
        ],
        hyphens: [
          {
            hyphens: [
              "none",
              "manual",
              "auto"
            ]
          }
        ],
        content: [
          {
            content: [
              "none",
              L,
              j
            ]
          }
        ],
        "bg-attachment": [
          {
            bg: [
              "fixed",
              "local",
              "scroll"
            ]
          }
        ],
        "bg-clip": [
          {
            "bg-clip": [
              "border",
              "padding",
              "content",
              "text"
            ]
          }
        ],
        "bg-origin": [
          {
            "bg-origin": [
              "border",
              "padding",
              "content"
            ]
          }
        ],
        "bg-position": [
          {
            bg: Be()
          }
        ],
        "bg-repeat": [
          {
            bg: Je()
          }
        ],
        "bg-size": [
          {
            bg: Ne()
          }
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  {
                    to: [
                      "t",
                      "tr",
                      "r",
                      "br",
                      "b",
                      "bl",
                      "l",
                      "tl"
                    ]
                  },
                  _t,
                  L,
                  j
                ],
                radial: [
                  "",
                  L,
                  j
                ],
                conic: [
                  _t,
                  L,
                  j
                ]
              },
              nd,
              ed
            ]
          }
        ],
        "bg-color": [
          {
            bg: P()
          }
        ],
        "gradient-from-pos": [
          {
            from: we()
          }
        ],
        "gradient-via-pos": [
          {
            via: we()
          }
        ],
        "gradient-to-pos": [
          {
            to: we()
          }
        ],
        "gradient-from": [
          {
            from: P()
          }
        ],
        "gradient-via": [
          {
            via: P()
          }
        ],
        "gradient-to": [
          {
            to: P()
          }
        ],
        rounded: [
          {
            rounded: he()
          }
        ],
        "rounded-s": [
          {
            "rounded-s": he()
          }
        ],
        "rounded-e": [
          {
            "rounded-e": he()
          }
        ],
        "rounded-t": [
          {
            "rounded-t": he()
          }
        ],
        "rounded-r": [
          {
            "rounded-r": he()
          }
        ],
        "rounded-b": [
          {
            "rounded-b": he()
          }
        ],
        "rounded-l": [
          {
            "rounded-l": he()
          }
        ],
        "rounded-ss": [
          {
            "rounded-ss": he()
          }
        ],
        "rounded-se": [
          {
            "rounded-se": he()
          }
        ],
        "rounded-ee": [
          {
            "rounded-ee": he()
          }
        ],
        "rounded-es": [
          {
            "rounded-es": he()
          }
        ],
        "rounded-tl": [
          {
            "rounded-tl": he()
          }
        ],
        "rounded-tr": [
          {
            "rounded-tr": he()
          }
        ],
        "rounded-br": [
          {
            "rounded-br": he()
          }
        ],
        "rounded-bl": [
          {
            "rounded-bl": he()
          }
        ],
        "border-w": [
          {
            border: me()
          }
        ],
        "border-w-x": [
          {
            "border-x": me()
          }
        ],
        "border-w-y": [
          {
            "border-y": me()
          }
        ],
        "border-w-s": [
          {
            "border-s": me()
          }
        ],
        "border-w-e": [
          {
            "border-e": me()
          }
        ],
        "border-w-t": [
          {
            "border-t": me()
          }
        ],
        "border-w-r": [
          {
            "border-r": me()
          }
        ],
        "border-w-b": [
          {
            "border-b": me()
          }
        ],
        "border-w-l": [
          {
            "border-l": me()
          }
        ],
        "divide-x": [
          {
            "divide-x": me()
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": me()
          }
        ],
        "divide-y-reverse": [
          "divide-y-reverse"
        ],
        "border-style": [
          {
            border: [
              ...dt(),
              "hidden",
              "none"
            ]
          }
        ],
        "divide-style": [
          {
            divide: [
              ...dt(),
              "hidden",
              "none"
            ]
          }
        ],
        "border-color": [
          {
            border: P()
          }
        ],
        "border-color-x": [
          {
            "border-x": P()
          }
        ],
        "border-color-y": [
          {
            "border-y": P()
          }
        ],
        "border-color-s": [
          {
            "border-s": P()
          }
        ],
        "border-color-e": [
          {
            "border-e": P()
          }
        ],
        "border-color-t": [
          {
            "border-t": P()
          }
        ],
        "border-color-r": [
          {
            "border-r": P()
          }
        ],
        "border-color-b": [
          {
            "border-b": P()
          }
        ],
        "border-color-l": [
          {
            "border-l": P()
          }
        ],
        "divide-color": [
          {
            divide: P()
          }
        ],
        "outline-style": [
          {
            outline: [
              ...dt(),
              "none",
              "hidden"
            ]
          }
        ],
        "outline-offset": [
          {
            "outline-offset": [
              K,
              L,
              j
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              "",
              K,
              os,
              Dt
            ]
          }
        ],
        "outline-color": [
          {
            outline: P()
          }
        ],
        shadow: [
          {
            shadow: [
              "",
              "none",
              c,
              Fs,
              Is
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: P()
          }
        ],
        "inset-shadow": [
          {
            "inset-shadow": [
              "none",
              d,
              Fs,
              Is
            ]
          }
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": P()
          }
        ],
        "ring-w": [
          {
            ring: me()
          }
        ],
        "ring-w-inset": [
          "ring-inset"
        ],
        "ring-color": [
          {
            ring: P()
          }
        ],
        "ring-offset-w": [
          {
            "ring-offset": [
              K,
              Dt
            ]
          }
        ],
        "ring-offset-color": [
          {
            "ring-offset": P()
          }
        ],
        "inset-ring-w": [
          {
            "inset-ring": me()
          }
        ],
        "inset-ring-color": [
          {
            "inset-ring": P()
          }
        ],
        "text-shadow": [
          {
            "text-shadow": [
              "none",
              m,
              Fs,
              Is
            ]
          }
        ],
        "text-shadow-color": [
          {
            "text-shadow": P()
          }
        ],
        opacity: [
          {
            opacity: [
              K,
              L,
              j
            ]
          }
        ],
        "mix-blend": [
          {
            "mix-blend": [
              ...ke(),
              "plus-darker",
              "plus-lighter"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": ke()
          }
        ],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          },
          "mask-no-clip"
        ],
        "mask-composite": [
          {
            mask: [
              "add",
              "subtract",
              "intersect",
              "exclude"
            ]
          }
        ],
        "mask-image-linear-pos": [
          {
            "mask-linear": [
              K
            ]
          }
        ],
        "mask-image-linear-from-pos": [
          {
            "mask-linear-from": y()
          }
        ],
        "mask-image-linear-to-pos": [
          {
            "mask-linear-to": y()
          }
        ],
        "mask-image-linear-from-color": [
          {
            "mask-linear-from": P()
          }
        ],
        "mask-image-linear-to-color": [
          {
            "mask-linear-to": P()
          }
        ],
        "mask-image-t-from-pos": [
          {
            "mask-t-from": y()
          }
        ],
        "mask-image-t-to-pos": [
          {
            "mask-t-to": y()
          }
        ],
        "mask-image-t-from-color": [
          {
            "mask-t-from": P()
          }
        ],
        "mask-image-t-to-color": [
          {
            "mask-t-to": P()
          }
        ],
        "mask-image-r-from-pos": [
          {
            "mask-r-from": y()
          }
        ],
        "mask-image-r-to-pos": [
          {
            "mask-r-to": y()
          }
        ],
        "mask-image-r-from-color": [
          {
            "mask-r-from": P()
          }
        ],
        "mask-image-r-to-color": [
          {
            "mask-r-to": P()
          }
        ],
        "mask-image-b-from-pos": [
          {
            "mask-b-from": y()
          }
        ],
        "mask-image-b-to-pos": [
          {
            "mask-b-to": y()
          }
        ],
        "mask-image-b-from-color": [
          {
            "mask-b-from": P()
          }
        ],
        "mask-image-b-to-color": [
          {
            "mask-b-to": P()
          }
        ],
        "mask-image-l-from-pos": [
          {
            "mask-l-from": y()
          }
        ],
        "mask-image-l-to-pos": [
          {
            "mask-l-to": y()
          }
        ],
        "mask-image-l-from-color": [
          {
            "mask-l-from": P()
          }
        ],
        "mask-image-l-to-color": [
          {
            "mask-l-to": P()
          }
        ],
        "mask-image-x-from-pos": [
          {
            "mask-x-from": y()
          }
        ],
        "mask-image-x-to-pos": [
          {
            "mask-x-to": y()
          }
        ],
        "mask-image-x-from-color": [
          {
            "mask-x-from": P()
          }
        ],
        "mask-image-x-to-color": [
          {
            "mask-x-to": P()
          }
        ],
        "mask-image-y-from-pos": [
          {
            "mask-y-from": y()
          }
        ],
        "mask-image-y-to-pos": [
          {
            "mask-y-to": y()
          }
        ],
        "mask-image-y-from-color": [
          {
            "mask-y-from": P()
          }
        ],
        "mask-image-y-to-color": [
          {
            "mask-y-to": P()
          }
        ],
        "mask-image-radial": [
          {
            "mask-radial": [
              L,
              j
            ]
          }
        ],
        "mask-image-radial-from-pos": [
          {
            "mask-radial-from": y()
          }
        ],
        "mask-image-radial-to-pos": [
          {
            "mask-radial-to": y()
          }
        ],
        "mask-image-radial-from-color": [
          {
            "mask-radial-from": P()
          }
        ],
        "mask-image-radial-to-color": [
          {
            "mask-radial-to": P()
          }
        ],
        "mask-image-radial-shape": [
          {
            "mask-radial": [
              "circle",
              "ellipse"
            ]
          }
        ],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              {
                closest: [
                  "side",
                  "corner"
                ],
                farthest: [
                  "side",
                  "corner"
                ]
              }
            ]
          }
        ],
        "mask-image-radial-pos": [
          {
            "mask-radial-at": M()
          }
        ],
        "mask-image-conic-pos": [
          {
            "mask-conic": [
              K
            ]
          }
        ],
        "mask-image-conic-from-pos": [
          {
            "mask-conic-from": y()
          }
        ],
        "mask-image-conic-to-pos": [
          {
            "mask-conic-to": y()
          }
        ],
        "mask-image-conic-from-color": [
          {
            "mask-conic-from": P()
          }
        ],
        "mask-image-conic-to-color": [
          {
            "mask-conic-to": P()
          }
        ],
        "mask-mode": [
          {
            mask: [
              "alpha",
              "luminance",
              "match"
            ]
          }
        ],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          }
        ],
        "mask-position": [
          {
            mask: Be()
          }
        ],
        "mask-repeat": [
          {
            mask: Je()
          }
        ],
        "mask-size": [
          {
            mask: Ne()
          }
        ],
        "mask-type": [
          {
            "mask-type": [
              "alpha",
              "luminance"
            ]
          }
        ],
        "mask-image": [
          {
            mask: [
              "none",
              L,
              j
            ]
          }
        ],
        filter: [
          {
            filter: [
              "",
              "none",
              L,
              j
            ]
          }
        ],
        blur: [
          {
            blur: T()
          }
        ],
        brightness: [
          {
            brightness: [
              K,
              L,
              j
            ]
          }
        ],
        contrast: [
          {
            contrast: [
              K,
              L,
              j
            ]
          }
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              p,
              Fs,
              Is
            ]
          }
        ],
        "drop-shadow-color": [
          {
            "drop-shadow": P()
          }
        ],
        grayscale: [
          {
            grayscale: [
              "",
              K,
              L,
              j
            ]
          }
        ],
        "hue-rotate": [
          {
            "hue-rotate": [
              K,
              L,
              j
            ]
          }
        ],
        invert: [
          {
            invert: [
              "",
              K,
              L,
              j
            ]
          }
        ],
        saturate: [
          {
            saturate: [
              K,
              L,
              j
            ]
          }
        ],
        sepia: [
          {
            sepia: [
              "",
              K,
              L,
              j
            ]
          }
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none",
              L,
              j
            ]
          }
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": T()
          }
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              K,
              L,
              j
            ]
          }
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              K,
              L,
              j
            ]
          }
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              "",
              K,
              L,
              j
            ]
          }
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              K,
              L,
              j
            ]
          }
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              "",
              K,
              L,
              j
            ]
          }
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              K,
              L,
              j
            ]
          }
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              K,
              L,
              j
            ]
          }
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              "",
              K,
              L,
              j
            ]
          }
        ],
        "border-collapse": [
          {
            border: [
              "collapse",
              "separate"
            ]
          }
        ],
        "border-spacing": [
          {
            "border-spacing": D()
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": D()
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": D()
          }
        ],
        "table-layout": [
          {
            table: [
              "auto",
              "fixed"
            ]
          }
        ],
        caption: [
          {
            caption: [
              "top",
              "bottom"
            ]
          }
        ],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              L,
              j
            ]
          }
        ],
        "transition-behavior": [
          {
            transition: [
              "normal",
              "discrete"
            ]
          }
        ],
        duration: [
          {
            duration: [
              K,
              "initial",
              L,
              j
            ]
          }
        ],
        ease: [
          {
            ease: [
              "linear",
              "initial",
              R,
              L,
              j
            ]
          }
        ],
        delay: [
          {
            delay: [
              K,
              L,
              j
            ]
          }
        ],
        animate: [
          {
            animate: [
              "none",
              k,
              L,
              j
            ]
          }
        ],
        backface: [
          {
            backface: [
              "hidden",
              "visible"
            ]
          }
        ],
        perspective: [
          {
            perspective: [
              b,
              L,
              j
            ]
          }
        ],
        "perspective-origin": [
          {
            "perspective-origin": B()
          }
        ],
        rotate: [
          {
            rotate: O()
          }
        ],
        "rotate-x": [
          {
            "rotate-x": O()
          }
        ],
        "rotate-y": [
          {
            "rotate-y": O()
          }
        ],
        "rotate-z": [
          {
            "rotate-z": O()
          }
        ],
        scale: [
          {
            scale: N()
          }
        ],
        "scale-x": [
          {
            "scale-x": N()
          }
        ],
        "scale-y": [
          {
            "scale-y": N()
          }
        ],
        "scale-z": [
          {
            "scale-z": N()
          }
        ],
        "scale-3d": [
          "scale-3d"
        ],
        skew: [
          {
            skew: X()
          }
        ],
        "skew-x": [
          {
            "skew-x": X()
          }
        ],
        "skew-y": [
          {
            "skew-y": X()
          }
        ],
        transform: [
          {
            transform: [
              L,
              j,
              "",
              "none",
              "gpu",
              "cpu"
            ]
          }
        ],
        "transform-origin": [
          {
            origin: B()
          }
        ],
        "transform-style": [
          {
            transform: [
              "3d",
              "flat"
            ]
          }
        ],
        translate: [
          {
            translate: u()
          }
        ],
        "translate-x": [
          {
            "translate-x": u()
          }
        ],
        "translate-y": [
          {
            "translate-y": u()
          }
        ],
        "translate-z": [
          {
            "translate-z": u()
          }
        ],
        "translate-none": [
          "translate-none"
        ],
        accent: [
          {
            accent: P()
          }
        ],
        appearance: [
          {
            appearance: [
              "none",
              "auto"
            ]
          }
        ],
        "caret-color": [
          {
            caret: P()
          }
        ],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              L,
              j
            ]
          }
        ],
        "field-sizing": [
          {
            "field-sizing": [
              "fixed",
              "content"
            ]
          }
        ],
        "pointer-events": [
          {
            "pointer-events": [
              "auto",
              "none"
            ]
          }
        ],
        resize: [
          {
            resize: [
              "none",
              "",
              "y",
              "x"
            ]
          }
        ],
        "scroll-behavior": [
          {
            scroll: [
              "auto",
              "smooth"
            ]
          }
        ],
        "scroll-m": [
          {
            "scroll-m": D()
          }
        ],
        "scroll-mx": [
          {
            "scroll-mx": D()
          }
        ],
        "scroll-my": [
          {
            "scroll-my": D()
          }
        ],
        "scroll-ms": [
          {
            "scroll-ms": D()
          }
        ],
        "scroll-me": [
          {
            "scroll-me": D()
          }
        ],
        "scroll-mt": [
          {
            "scroll-mt": D()
          }
        ],
        "scroll-mr": [
          {
            "scroll-mr": D()
          }
        ],
        "scroll-mb": [
          {
            "scroll-mb": D()
          }
        ],
        "scroll-ml": [
          {
            "scroll-ml": D()
          }
        ],
        "scroll-p": [
          {
            "scroll-p": D()
          }
        ],
        "scroll-px": [
          {
            "scroll-px": D()
          }
        ],
        "scroll-py": [
          {
            "scroll-py": D()
          }
        ],
        "scroll-ps": [
          {
            "scroll-ps": D()
          }
        ],
        "scroll-pe": [
          {
            "scroll-pe": D()
          }
        ],
        "scroll-pt": [
          {
            "scroll-pt": D()
          }
        ],
        "scroll-pr": [
          {
            "scroll-pr": D()
          }
        ],
        "scroll-pb": [
          {
            "scroll-pb": D()
          }
        ],
        "scroll-pl": [
          {
            "scroll-pl": D()
          }
        ],
        "snap-align": [
          {
            snap: [
              "start",
              "end",
              "center",
              "align-none"
            ]
          }
        ],
        "snap-stop": [
          {
            snap: [
              "normal",
              "always"
            ]
          }
        ],
        "snap-type": [
          {
            snap: [
              "none",
              "x",
              "y",
              "both"
            ]
          }
        ],
        "snap-strictness": [
          {
            snap: [
              "mandatory",
              "proximity"
            ]
          }
        ],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "manipulation"
            ]
          }
        ],
        "touch-x": [
          {
            "touch-pan": [
              "x",
              "left",
              "right"
            ]
          }
        ],
        "touch-y": [
          {
            "touch-pan": [
              "y",
              "up",
              "down"
            ]
          }
        ],
        "touch-pz": [
          "touch-pinch-zoom"
        ],
        select: [
          {
            select: [
              "none",
              "text",
              "all",
              "auto"
            ]
          }
        ],
        "will-change": [
          {
            "will-change": [
              "auto",
              "scroll",
              "contents",
              "transform",
              L,
              j
            ]
          }
        ],
        fill: [
          {
            fill: [
              "none",
              ...P()
            ]
          }
        ],
        "stroke-w": [
          {
            stroke: [
              K,
              os,
              Dt,
              Pn
            ]
          }
        ],
        stroke: [
          {
            stroke: [
              "none",
              ...P()
            ]
          }
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": [
              "auto",
              "none"
            ]
          }
        ]
      },
      conflictingClassGroups: {
        overflow: [
          "overflow-x",
          "overflow-y"
        ],
        overscroll: [
          "overscroll-x",
          "overscroll-y"
        ],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": [
          "right",
          "left"
        ],
        "inset-y": [
          "top",
          "bottom"
        ],
        flex: [
          "basis",
          "grow",
          "shrink"
        ],
        gap: [
          "gap-x",
          "gap-y"
        ],
        p: [
          "px",
          "py",
          "ps",
          "pe",
          "pt",
          "pr",
          "pb",
          "pl"
        ],
        px: [
          "pr",
          "pl"
        ],
        py: [
          "pt",
          "pb"
        ],
        m: [
          "mx",
          "my",
          "ms",
          "me",
          "mt",
          "mr",
          "mb",
          "ml"
        ],
        mx: [
          "mr",
          "ml"
        ],
        my: [
          "mt",
          "mb"
        ],
        size: [
          "w",
          "h"
        ],
        "font-size": [
          "leading"
        ],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": [
          "fvn-normal"
        ],
        "fvn-slashed-zero": [
          "fvn-normal"
        ],
        "fvn-figure": [
          "fvn-normal"
        ],
        "fvn-spacing": [
          "fvn-normal"
        ],
        "fvn-fraction": [
          "fvn-normal"
        ],
        "line-clamp": [
          "display",
          "overflow"
        ],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": [
          "rounded-ss",
          "rounded-es"
        ],
        "rounded-e": [
          "rounded-se",
          "rounded-ee"
        ],
        "rounded-t": [
          "rounded-tl",
          "rounded-tr"
        ],
        "rounded-r": [
          "rounded-tr",
          "rounded-br"
        ],
        "rounded-b": [
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-l": [
          "rounded-tl",
          "rounded-bl"
        ],
        "border-spacing": [
          "border-spacing-x",
          "border-spacing-y"
        ],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": [
          "border-w-r",
          "border-w-l"
        ],
        "border-w-y": [
          "border-w-t",
          "border-w-b"
        ],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": [
          "border-color-r",
          "border-color-l"
        ],
        "border-color-y": [
          "border-color-t",
          "border-color-b"
        ],
        translate: [
          "translate-x",
          "translate-y",
          "translate-none"
        ],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": [
          "scroll-mr",
          "scroll-ml"
        ],
        "scroll-my": [
          "scroll-mt",
          "scroll-mb"
        ],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": [
          "scroll-pr",
          "scroll-pl"
        ],
        "scroll-py": [
          "scroll-pt",
          "scroll-pb"
        ],
        touch: [
          "touch-x",
          "touch-y",
          "touch-pz"
        ],
        "touch-x": [
          "touch"
        ],
        "touch-y": [
          "touch"
        ],
        "touch-pz": [
          "touch"
        ]
      },
      conflictingClassGroupModifiers: {
        "font-size": [
          "leading"
        ]
      },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection"
      ]
    };
  }, ld = Qf(od);
  function ad(...e) {
    return ld(Ef(e));
  }
  let ud, fd, dd, hd, pd, gd, yd, bd, wd, _d;
  cd = Ye({
    __name: "Skeleton",
    props: {
      class: {}
    },
    setup(e) {
      const t = e;
      return (s, n) => (oe(), be("div", {
        "data-slot": "skeleton",
        class: Rs(de(ad)("animate-pulse rounded-md bg-primary/10", t.class))
      }, null, 2));
    }
  });
  Si = Ye({
    __name: "ThumbnailSkeleton",
    setup(e) {
      return (t, s) => (oe(), kt(de(cd), {
        class: "w-full md:w-[250px] lg:w-[350px] xl:w-[400px] h-[170px] rounded-xl bg-primary/50"
      }));
    }
  });
  ud = {
    class: "flex justify-center"
  };
  fd = {
    class: "flex flex-col sm:flex-row justify-center gap-3 space-y-3"
  };
  dd = Ye({
    __name: "HomePostsSkeleton",
    setup(e) {
      return (t, s) => (oe(), be("div", ud, [
        ie("div", fd, [
          J(Si),
          J(Si)
        ])
      ]));
    }
  });
  hd = {
    class: "categories"
  };
  pd = Ye({
    __name: "PostCategories",
    props: {
      categories: {}
    },
    setup(e) {
      const s = e.categories;
      return (n, r) => (oe(), be("div", hd, [
        (oe(true), be(xe, null, yo(de(s), (i) => (oe(), be("div", {
          key: i,
          class: "category p-2 px-3"
        }, Zs(i), 1))), 128))
      ]));
    }
  });
  md = ut(pd, [
    [
      "__scopeId",
      "data-v-344e8568"
    ]
  ]);
  gd = {
    class: "thumbnail flex flex-col align-center w-full md:w-[250px] lg:w-[350px] xl:w-[400px] h-[170px]"
  };
  yd = {
    class: "title text-center p-3"
  };
  bd = Ye({
    __name: "Thumbnail",
    props: {
      title: {},
      categories: {},
      href: {}
    },
    setup(e) {
      const t = e;
      return (s, n) => {
        const r = dr("RouterLink");
        return oe(), kt(r, {
          to: s.href
        }, {
          default: je(() => [
            ie("div", gd, [
              ie("h3", yd, Zs(t.title), 1),
              J(md, {
                categories: s.categories
              }, null, 8, [
                "categories"
              ])
            ])
          ]),
          _: 1
        }, 8, [
          "to"
        ]);
      };
    }
  });
  vd = ut(bd, [
    [
      "__scopeId",
      "data-v-2b1545fb"
    ]
  ]);
  wd = "https://7znchg6kg5e5nipu7yswgsjq3i0oxwta.lambda-url.eu-west-2.on.aws/";
  _d = "https://qzpxelwctchmjcpbu56sl5gvt40tukrt.lambda-url.eu-west-2.on.aws/?post=";
  xd = async function(e) {
    return new Promise((t, s) => {
      let n = wd;
      e && (n += `?limit=${e}`), fetch(n).then(async (r) => {
        r.status !== 200 && s(new Error("Something went wrong")), setTimeout(async () => {
          t(await r.json());
        }, 1e3);
      }).catch((r) => {
        s(r);
      });
    });
  };
  gh = async function(e) {
    return new Promise((t, s) => {
      fetch(_d + e).then(async (n) => {
        t(await n.json());
      });
    });
  };
  var ks = class {
    constructor() {
      this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
    }
    subscribe(e) {
      return this.listeners.add(e), this.onSubscribe(), () => {
        this.listeners.delete(e), this.onUnsubscribe();
      };
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {
    }
    onUnsubscribe() {
    }
  }, Ut = typeof window > "u" || "Deno" in globalThis;
  function Ke() {
  }
  function Sd(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function zn(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
  }
  function ml(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
  }
  function Yt(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Xe(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ci(e, t) {
    const { type: s = "all", exact: n, fetchStatus: r, predicate: i, queryKey: o, stale: l } = e;
    if (o) {
      if (n) {
        if (t.queryHash !== wr(o, t.options)) return false;
      } else if (!Cs(t.queryKey, o)) return false;
    }
    if (s !== "all") {
      const a = t.isActive();
      if (s === "active" && !a || s === "inactive" && a) return false;
    }
    return !(typeof l == "boolean" && t.isStale() !== l || r && r !== t.state.fetchStatus || i && !i(t));
  }
  function Ri(e, t) {
    const { exact: s, status: n, predicate: r, mutationKey: i } = e;
    if (i) {
      if (!t.options.mutationKey) return false;
      if (s) {
        if (Ss(t.options.mutationKey) !== Ss(i)) return false;
      } else if (!Cs(t.options.mutationKey, i)) return false;
    }
    return !(n && t.state.status !== n || r && !r(t));
  }
  function wr(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ss)(e);
  }
  function Ss(e) {
    return JSON.stringify(e, (t, s) => Bn(s) ? Object.keys(s).sort().reduce((n, r) => (n[r] = s[r], n), {}) : s);
  }
  function Cs(e, t) {
    return e === t ? true : typeof e != typeof t ? false : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((s) => Cs(e[s], t[s])) : false;
  }
  function gl(e, t) {
    if (e === t) return e;
    const s = Pi(e) && Pi(t);
    if (s || Bn(e) && Bn(t)) {
      const n = s ? e : Object.keys(e), r = n.length, i = s ? t : Object.keys(t), o = i.length, l = s ? [] : {};
      let a = 0;
      for (let f = 0; f < o; f++) {
        const c = s ? f : i[f];
        (!s && n.includes(c) || s) && e[c] === void 0 && t[c] === void 0 ? (l[c] = void 0, a++) : (l[c] = gl(e[c], t[c]), l[c] === e[c] && e[c] !== void 0 && a++);
      }
      return r === o && a === r ? e : l;
    }
    return t;
  }
  function qn(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return false;
    for (const s in e) if (e[s] !== t[s]) return false;
    return true;
  }
  function Pi(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
  }
  function Bn(e) {
    if (!Ei(e)) return false;
    const t = e.constructor;
    if (t === void 0) return true;
    const s = t.prototype;
    return !(!Ei(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
  }
  function Ei(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function Cd(e) {
    return new Promise((t) => {
      setTimeout(t, e);
    });
  }
  function Kn(e, t, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(e, t) : s.structuralSharing !== false ? gl(e, t) : t;
  }
  function Rd(e, t, s = 0) {
    const n = [
      ...e,
      t
    ];
    return s && n.length > s ? n.slice(1) : n;
  }
  function Pd(e, t, s = 0) {
    const n = [
      t,
      ...e
    ];
    return s && n.length > s ? n.slice(0, -1) : n;
  }
  var _r = Symbol();
  function yl(e, t) {
    return !e.queryFn && (t == null ? void 0 : t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === _r ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
  }
  var Ed = (_a2 = class extends ks {
    constructor() {
      super();
      __privateAdd(this, _t2);
      __privateAdd(this, _e2);
      __privateAdd(this, _s2);
      __privateSet(this, _s2, (e) => {
        if (!Ut && window.addEventListener) {
          const t = () => e();
          return window.addEventListener("visibilitychange", t, false), () => {
            window.removeEventListener("visibilitychange", t);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _e2) || this.setEventListener(__privateGet(this, _s2));
    }
    onUnsubscribe() {
      var _a4;
      this.hasListeners() || ((_a4 = __privateGet(this, _e2)) == null ? void 0 : _a4.call(this), __privateSet(this, _e2, void 0));
    }
    setEventListener(e) {
      var _a4;
      __privateSet(this, _s2, e), (_a4 = __privateGet(this, _e2)) == null ? void 0 : _a4.call(this), __privateSet(this, _e2, e((t) => {
        typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
      }));
    }
    setFocused(e) {
      __privateGet(this, _t2) !== e && (__privateSet(this, _t2, e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      var _a4;
      return typeof __privateGet(this, _t2) == "boolean" ? __privateGet(this, _t2) : ((_a4 = globalThis.document) == null ? void 0 : _a4.visibilityState) !== "hidden";
    }
  }, _t2 = new WeakMap(), _e2 = new WeakMap(), _s2 = new WeakMap(), _a2), xr = new Ed(), Od = (_b = class extends ks {
    constructor() {
      super();
      __privateAdd(this, _t3, true);
      __privateAdd(this, _e3);
      __privateAdd(this, _s3);
      __privateSet(this, _s3, (e) => {
        if (!Ut && window.addEventListener) {
          const t = () => e(true), s = () => e(false);
          return window.addEventListener("online", t, false), window.addEventListener("offline", s, false), () => {
            window.removeEventListener("online", t), window.removeEventListener("offline", s);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _e3) || this.setEventListener(__privateGet(this, _s3));
    }
    onUnsubscribe() {
      var _a4;
      this.hasListeners() || ((_a4 = __privateGet(this, _e3)) == null ? void 0 : _a4.call(this), __privateSet(this, _e3, void 0));
    }
    setEventListener(e) {
      var _a4;
      __privateSet(this, _s3, e), (_a4 = __privateGet(this, _e3)) == null ? void 0 : _a4.call(this), __privateSet(this, _e3, e(this.setOnline.bind(this)));
    }
    setOnline(e) {
      __privateGet(this, _t3) !== e && (__privateSet(this, _t3, e), this.listeners.forEach((s) => {
        s(e);
      }));
    }
    isOnline() {
      return __privateGet(this, _t3);
    }
  }, _t3 = new WeakMap(), _e3 = new WeakMap(), _s3 = new WeakMap(), _b), Ks = new Od();
  function Gn() {
    let e, t;
    const s = new Promise((r, i) => {
      e = r, t = i;
    });
    s.status = "pending", s.catch(() => {
    });
    function n(r) {
      Object.assign(s, r), delete s.resolve, delete s.reject;
    }
    return s.resolve = (r) => {
      n({
        status: "fulfilled",
        value: r
      }), e(r);
    }, s.reject = (r) => {
      n({
        status: "rejected",
        reason: r
      }), t(r);
    }, s;
  }
  function kd(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
  }
  function bl(e) {
    return (e ?? "online") === "online" ? Ks.isOnline() : true;
  }
  var vl = class extends Error {
    constructor(e) {
      super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
    }
  };
  function En(e) {
    return e instanceof vl;
  }
  function wl(e) {
    let t = false, s = 0, n = false, r;
    const i = Gn(), o = (b) => {
      var _a4;
      n || (m(new vl(b)), (_a4 = e.abort) == null ? void 0 : _a4.call(e));
    }, l = () => {
      t = true;
    }, a = () => {
      t = false;
    }, f = () => xr.isFocused() && (e.networkMode === "always" || Ks.isOnline()) && e.canRun(), c = () => bl(e.networkMode) && e.canRun(), d = (b) => {
      var _a4;
      n || (n = true, (_a4 = e.onSuccess) == null ? void 0 : _a4.call(e, b), r == null ? void 0 : r(), i.resolve(b));
    }, m = (b) => {
      var _a4;
      n || (n = true, (_a4 = e.onError) == null ? void 0 : _a4.call(e, b), r == null ? void 0 : r(), i.reject(b));
    }, p = () => new Promise((b) => {
      var _a4;
      r = ($) => {
        (n || f()) && b($);
      }, (_a4 = e.onPause) == null ? void 0 : _a4.call(e);
    }).then(() => {
      var _a4;
      r = void 0, n || ((_a4 = e.onContinue) == null ? void 0 : _a4.call(e));
    }), _ = () => {
      if (n) return;
      let b;
      const $ = s === 0 ? e.initialPromise : void 0;
      try {
        b = $ ?? e.fn();
      } catch (R) {
        b = Promise.reject(R);
      }
      Promise.resolve(b).then(d).catch((R) => {
        var _a4;
        if (n) return;
        const k = e.retry ?? (Ut ? 0 : 3), F = e.retryDelay ?? kd, M = typeof F == "function" ? F(s, R) : F, B = k === true || typeof k == "number" && s < k || typeof k == "function" && k(s, R);
        if (t || !B) {
          m(R);
          return;
        }
        s++, (_a4 = e.onFail) == null ? void 0 : _a4.call(e, s, R), Cd(M).then(() => f() ? void 0 : p()).then(() => {
          t ? m(R) : _();
        });
      });
    };
    return {
      promise: i,
      cancel: o,
      continue: () => (r == null ? void 0 : r(), i),
      cancelRetry: l,
      continueRetry: a,
      canStart: c,
      start: () => (c() ? _() : p().then(_), i)
    };
  }
  var Ad = (e) => setTimeout(e, 0);
  function Md() {
    let e = [], t = 0, s = (l) => {
      l();
    }, n = (l) => {
      l();
    }, r = Ad;
    const i = (l) => {
      t ? e.push(l) : r(() => {
        s(l);
      });
    }, o = () => {
      const l = e;
      e = [], l.length && r(() => {
        n(() => {
          l.forEach((a) => {
            s(a);
          });
        });
      });
    };
    return {
      batch: (l) => {
        let a;
        t++;
        try {
          a = l();
        } finally {
          t--, t || o();
        }
        return a;
      },
      batchCalls: (l) => (...a) => {
        i(() => {
          l(...a);
        });
      },
      schedule: i,
      setNotifyFunction: (l) => {
        s = l;
      },
      setBatchNotifyFunction: (l) => {
        n = l;
      },
      setScheduler: (l) => {
        r = l;
      }
    };
  }
  var Oe = Md(), _l = (_c2 = class {
    constructor() {
      __privateAdd(this, _t4);
    }
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(), zn(this.gcTime) && __privateSet(this, _t4, setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (Ut ? 1 / 0 : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
      __privateGet(this, _t4) && (clearTimeout(__privateGet(this, _t4)), __privateSet(this, _t4, void 0));
    }
  }, _t4 = new WeakMap(), _c2), Td = (_d2 = class extends _l {
    constructor(e) {
      super();
      __privateAdd(this, _Td_instances);
      __privateAdd(this, _t5);
      __privateAdd(this, _e4);
      __privateAdd(this, _s4);
      __privateAdd(this, _n2);
      __privateAdd(this, _r2);
      __privateAdd(this, _l2);
      __privateAdd(this, _o2);
      __privateSet(this, _o2, false), __privateSet(this, _l2, e.defaultOptions), this.setOptions(e.options), this.observers = [], __privateSet(this, _n2, e.client), __privateSet(this, _s4, __privateGet(this, _n2).getQueryCache()), this.queryKey = e.queryKey, this.queryHash = e.queryHash, __privateSet(this, _t5, Id(this.options)), this.state = e.state ?? __privateGet(this, _t5), this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      var _a4;
      return (_a4 = __privateGet(this, _r2)) == null ? void 0 : _a4.promise;
    }
    setOptions(e) {
      this.options = {
        ...__privateGet(this, _l2),
        ...e
      }, this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && __privateGet(this, _s4).remove(this);
    }
    setData(e, t) {
      const s = Kn(this.state.data, e, this.options);
      return __privateMethod(this, _Td_instances, i_fn).call(this, {
        data: s,
        type: "success",
        dataUpdatedAt: t == null ? void 0 : t.updatedAt,
        manual: t == null ? void 0 : t.manual
      }), s;
    }
    setState(e, t) {
      __privateMethod(this, _Td_instances, i_fn).call(this, {
        type: "setState",
        state: e,
        setStateOptions: t
      });
    }
    cancel(e) {
      var _a4, _b2;
      const t = (_a4 = __privateGet(this, _r2)) == null ? void 0 : _a4.promise;
      return (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.cancel(e), t ? t.then(Ke).catch(Ke) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({
        silent: true
      });
    }
    reset() {
      this.destroy(), this.setState(__privateGet(this, _t5));
    }
    isActive() {
      return this.observers.some((e) => Xe(e.options.enabled, this) !== false);
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === _r || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
      return this.state.isInvalidated ? true : this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : this.state.data === void 0;
    }
    isStaleByTime(e = 0) {
      return this.state.isInvalidated || this.state.data === void 0 || !ml(this.state.dataUpdatedAt, e);
    }
    onFocus() {
      var _a4, _b2;
      (_a4 = this.observers.find((t) => t.shouldFetchOnWindowFocus())) == null ? void 0 : _a4.refetch({
        cancelRefetch: false
      }), (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.continue();
    }
    onOnline() {
      var _a4, _b2;
      (_a4 = this.observers.find((t) => t.shouldFetchOnReconnect())) == null ? void 0 : _a4.refetch({
        cancelRefetch: false
      }), (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.continue();
    }
    addObserver(e) {
      this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), __privateGet(this, _s4).notify({
        type: "observerAdded",
        query: this,
        observer: e
      }));
    }
    removeObserver(e) {
      this.observers.includes(e) && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (__privateGet(this, _r2) && (__privateGet(this, _o2) ? __privateGet(this, _r2).cancel({
        revert: true
      }) : __privateGet(this, _r2).cancelRetry()), this.scheduleGc()), __privateGet(this, _s4).notify({
        type: "observerRemoved",
        query: this,
        observer: e
      }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || __privateMethod(this, _Td_instances, i_fn).call(this, {
        type: "invalidate"
      });
    }
    fetch(e, t) {
      var _a4, _b2, _c4;
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && (t == null ? void 0 : t.cancelRefetch)) this.cancel({
          silent: true
        });
        else if (__privateGet(this, _r2)) return __privateGet(this, _r2).continueRetry(), __privateGet(this, _r2).promise;
      }
      if (e && this.setOptions(e), !this.options.queryFn) {
        const l = this.observers.find((a) => a.options.queryFn);
        l && this.setOptions(l.options);
      }
      const s = new AbortController(), n = (l) => {
        Object.defineProperty(l, "signal", {
          enumerable: true,
          get: () => (__privateSet(this, _o2, true), s.signal)
        });
      }, r = () => {
        const l = yl(this.options, t), a = {
          client: __privateGet(this, _n2),
          queryKey: this.queryKey,
          meta: this.meta
        };
        return n(a), __privateSet(this, _o2, false), this.options.persister ? this.options.persister(l, a, this) : l(a);
      }, i = {
        fetchOptions: t,
        options: this.options,
        queryKey: this.queryKey,
        client: __privateGet(this, _n2),
        state: this.state,
        fetchFn: r
      };
      n(i), (_a4 = this.options.behavior) == null ? void 0 : _a4.onFetch(i, this), __privateSet(this, _e4, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_b2 = i.fetchOptions) == null ? void 0 : _b2.meta)) && __privateMethod(this, _Td_instances, i_fn).call(this, {
        type: "fetch",
        meta: (_c4 = i.fetchOptions) == null ? void 0 : _c4.meta
      });
      const o = (l) => {
        var _a5, _b3, _c5, _d4;
        En(l) && l.silent || __privateMethod(this, _Td_instances, i_fn).call(this, {
          type: "error",
          error: l
        }), En(l) || ((_b3 = (_a5 = __privateGet(this, _s4).config).onError) == null ? void 0 : _b3.call(_a5, l, this), (_d4 = (_c5 = __privateGet(this, _s4).config).onSettled) == null ? void 0 : _d4.call(_c5, this.state.data, l, this)), this.scheduleGc();
      };
      return __privateSet(this, _r2, wl({
        initialPromise: t == null ? void 0 : t.initialPromise,
        fn: i.fetchFn,
        abort: s.abort.bind(s),
        onSuccess: (l) => {
          var _a5, _b3, _c5, _d4;
          if (l === void 0) {
            o(new Error(`${this.queryHash} data is undefined`));
            return;
          }
          try {
            this.setData(l);
          } catch (a) {
            o(a);
            return;
          }
          (_b3 = (_a5 = __privateGet(this, _s4).config).onSuccess) == null ? void 0 : _b3.call(_a5, l, this), (_d4 = (_c5 = __privateGet(this, _s4).config).onSettled) == null ? void 0 : _d4.call(_c5, l, this.state.error, this), this.scheduleGc();
        },
        onError: o,
        onFail: (l, a) => {
          __privateMethod(this, _Td_instances, i_fn).call(this, {
            type: "failed",
            failureCount: l,
            error: a
          });
        },
        onPause: () => {
          __privateMethod(this, _Td_instances, i_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: () => {
          __privateMethod(this, _Td_instances, i_fn).call(this, {
            type: "continue"
          });
        },
        retry: i.options.retry,
        retryDelay: i.options.retryDelay,
        networkMode: i.options.networkMode,
        canRun: () => true
      })), __privateGet(this, _r2).start();
    }
  }, _t5 = new WeakMap(), _e4 = new WeakMap(), _s4 = new WeakMap(), _n2 = new WeakMap(), _r2 = new WeakMap(), _l2 = new WeakMap(), _o2 = new WeakMap(), _Td_instances = new WeakSet(), i_fn = function(e) {
    const t = (s) => {
      switch (e.type) {
        case "failed":
          return {
            ...s,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...s,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...s,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...s,
            ...xl(s.data, this.options),
            fetchMeta: e.meta ?? null
          };
        case "success":
          return {
            ...s,
            data: e.data,
            dataUpdateCount: s.dataUpdateCount + 1,
            dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const n = e.error;
          return En(n) && n.revert && __privateGet(this, _e4) ? {
            ...__privateGet(this, _e4),
            fetchStatus: "idle"
          } : {
            ...s,
            error: n,
            errorUpdateCount: s.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: s.fetchFailureCount + 1,
            fetchFailureReason: n,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...s,
            isInvalidated: true
          };
        case "setState":
          return {
            ...s,
            ...e.state
          };
      }
    };
    this.state = t(this.state), Oe.batch(() => {
      this.observers.forEach((s) => {
        s.onQueryUpdate();
      }), __privateGet(this, _s4).notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }, _d2);
  function xl(e, t) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: bl(t.networkMode) ? "fetching" : "paused",
      ...e === void 0 && {
        error: null,
        status: "pending"
      }
    };
  }
  function Id(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, s = t !== void 0, n = s ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: s ? n ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: false,
      status: s ? "success" : "pending",
      fetchStatus: "idle"
    };
  }
  var Sl = (_e5 = class extends ks {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t6);
      this.config = t, __privateSet(this, _t6, /* @__PURE__ */ new Map());
    }
    build(t, s, n) {
      const r = s.queryKey, i = s.queryHash ?? wr(r, s);
      let o = this.get(i);
      return o || (o = new Td({
        client: t,
        queryKey: r,
        queryHash: i,
        options: t.defaultQueryOptions(s),
        state: n,
        defaultOptions: t.getQueryDefaults(r)
      }), this.add(o)), o;
    }
    add(t) {
      __privateGet(this, _t6).has(t.queryHash) || (__privateGet(this, _t6).set(t.queryHash, t), this.notify({
        type: "added",
        query: t
      }));
    }
    remove(t) {
      const s = __privateGet(this, _t6).get(t.queryHash);
      s && (t.destroy(), s === t && __privateGet(this, _t6).delete(t.queryHash), this.notify({
        type: "removed",
        query: t
      }));
    }
    clear() {
      Oe.batch(() => {
        this.getAll().forEach((t) => {
          this.remove(t);
        });
      });
    }
    get(t) {
      return __privateGet(this, _t6).get(t);
    }
    getAll() {
      return [
        ...__privateGet(this, _t6).values()
      ];
    }
    find(t) {
      const s = {
        exact: true,
        ...t
      };
      return this.getAll().find((n) => Ci(s, n));
    }
    findAll(t = {}) {
      const s = this.getAll();
      return Object.keys(t).length > 0 ? s.filter((n) => Ci(t, n)) : s;
    }
    notify(t) {
      Oe.batch(() => {
        this.listeners.forEach((s) => {
          s(t);
        });
      });
    }
    onFocus() {
      Oe.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      Oe.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  }, _t6 = new WeakMap(), _e5), Fd = (_f2 = class extends _l {
    constructor(e) {
      super();
      __privateAdd(this, _Fd_instances);
      __privateAdd(this, _t7);
      __privateAdd(this, _e6);
      __privateAdd(this, _s5);
      this.mutationId = e.mutationId, __privateSet(this, _e6, e.mutationCache), __privateSet(this, _t7, []), this.state = e.state || Dd(), this.setOptions(e.options), this.scheduleGc();
    }
    setOptions(e) {
      this.options = e, this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(e) {
      __privateGet(this, _t7).includes(e) || (__privateGet(this, _t7).push(e), this.clearGcTimeout(), __privateGet(this, _e6).notify({
        type: "observerAdded",
        mutation: this,
        observer: e
      }));
    }
    removeObserver(e) {
      __privateSet(this, _t7, __privateGet(this, _t7).filter((t) => t !== e)), this.scheduleGc(), __privateGet(this, _e6).notify({
        type: "observerRemoved",
        mutation: this,
        observer: e
      });
    }
    optionalRemove() {
      __privateGet(this, _t7).length || (this.state.status === "pending" ? this.scheduleGc() : __privateGet(this, _e6).remove(this));
    }
    continue() {
      var _a4;
      return ((_a4 = __privateGet(this, _s5)) == null ? void 0 : _a4.continue()) ?? this.execute(this.state.variables);
    }
    async execute(e) {
      var _a4, _b2, _c4, _d4, _e10, _f3, _g2, _h3, _i5, _j, _k, _l5, _m2, _n5, _o5, _p2, _q, _r5, _s9, _t11;
      const t = () => {
        __privateMethod(this, _Fd_instances, n_fn).call(this, {
          type: "continue"
        });
      };
      __privateSet(this, _s5, wl({
        fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
        onFail: (r, i) => {
          __privateMethod(this, _Fd_instances, n_fn).call(this, {
            type: "failed",
            failureCount: r,
            error: i
          });
        },
        onPause: () => {
          __privateMethod(this, _Fd_instances, n_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: t,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => __privateGet(this, _e6).canRun(this)
      }));
      const s = this.state.status === "pending", n = !__privateGet(this, _s5).canStart();
      try {
        if (s) t();
        else {
          __privateMethod(this, _Fd_instances, n_fn).call(this, {
            type: "pending",
            variables: e,
            isPaused: n
          }), await ((_b2 = (_a4 = __privateGet(this, _e6).config).onMutate) == null ? void 0 : _b2.call(_a4, e, this));
          const i = await ((_d4 = (_c4 = this.options).onMutate) == null ? void 0 : _d4.call(_c4, e));
          i !== this.state.context && __privateMethod(this, _Fd_instances, n_fn).call(this, {
            type: "pending",
            context: i,
            variables: e,
            isPaused: n
          });
        }
        const r = await __privateGet(this, _s5).start();
        return await ((_f3 = (_e10 = __privateGet(this, _e6).config).onSuccess) == null ? void 0 : _f3.call(_e10, r, e, this.state.context, this)), await ((_h3 = (_g2 = this.options).onSuccess) == null ? void 0 : _h3.call(_g2, r, e, this.state.context)), await ((_j = (_i5 = __privateGet(this, _e6).config).onSettled) == null ? void 0 : _j.call(_i5, r, null, this.state.variables, this.state.context, this)), await ((_l5 = (_k = this.options).onSettled) == null ? void 0 : _l5.call(_k, r, null, e, this.state.context)), __privateMethod(this, _Fd_instances, n_fn).call(this, {
          type: "success",
          data: r
        }), r;
      } catch (r) {
        try {
          throw await ((_n5 = (_m2 = __privateGet(this, _e6).config).onError) == null ? void 0 : _n5.call(_m2, r, e, this.state.context, this)), await ((_p2 = (_o5 = this.options).onError) == null ? void 0 : _p2.call(_o5, r, e, this.state.context)), await ((_r5 = (_q = __privateGet(this, _e6).config).onSettled) == null ? void 0 : _r5.call(_q, void 0, r, this.state.variables, this.state.context, this)), await ((_t11 = (_s9 = this.options).onSettled) == null ? void 0 : _t11.call(_s9, void 0, r, e, this.state.context)), r;
        } finally {
          __privateMethod(this, _Fd_instances, n_fn).call(this, {
            type: "error",
            error: r
          });
        }
      } finally {
        __privateGet(this, _e6).runNext(this);
      }
    }
  }, _t7 = new WeakMap(), _e6 = new WeakMap(), _s5 = new WeakMap(), _Fd_instances = new WeakSet(), n_fn = function(e) {
    const t = (s) => {
      switch (e.type) {
        case "failed":
          return {
            ...s,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...s,
            isPaused: true
          };
        case "continue":
          return {
            ...s,
            isPaused: false
          };
        case "pending":
          return {
            ...s,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...s,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: e.error,
            failureCount: s.failureCount + 1,
            failureReason: e.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = t(this.state), Oe.batch(() => {
      __privateGet(this, _t7).forEach((s) => {
        s.onMutationUpdate(e);
      }), __privateGet(this, _e6).notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }, _f2);
  function Dd() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: "idle",
      variables: void 0,
      submittedAt: 0
    };
  }
  var Cl = (_g = class extends ks {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t8);
      __privateAdd(this, _e7);
      __privateAdd(this, _s6);
      this.config = t, __privateSet(this, _t8, /* @__PURE__ */ new Set()), __privateSet(this, _e7, /* @__PURE__ */ new Map()), __privateSet(this, _s6, 0);
    }
    build(t, s, n) {
      const r = new Fd({
        mutationCache: this,
        mutationId: ++__privateWrapper(this, _s6)._,
        options: t.defaultMutationOptions(s),
        state: n
      });
      return this.add(r), r;
    }
    add(t) {
      __privateGet(this, _t8).add(t);
      const s = Ds(t);
      if (typeof s == "string") {
        const n = __privateGet(this, _e7).get(s);
        n ? n.push(t) : __privateGet(this, _e7).set(s, [
          t
        ]);
      }
      this.notify({
        type: "added",
        mutation: t
      });
    }
    remove(t) {
      if (__privateGet(this, _t8).delete(t)) {
        const s = Ds(t);
        if (typeof s == "string") {
          const n = __privateGet(this, _e7).get(s);
          if (n) if (n.length > 1) {
            const r = n.indexOf(t);
            r !== -1 && n.splice(r, 1);
          } else n[0] === t && __privateGet(this, _e7).delete(s);
        }
      }
      this.notify({
        type: "removed",
        mutation: t
      });
    }
    canRun(t) {
      var _a4;
      const s = Ds(t);
      if (typeof s == "string") {
        const r = (_a4 = __privateGet(this, _e7).get(s)) == null ? void 0 : _a4.find((i) => i.state.status === "pending");
        return !r || r === t;
      } else return true;
    }
    runNext(t) {
      var _a4, _b2;
      const s = Ds(t);
      return typeof s == "string" ? ((_b2 = (_a4 = __privateGet(this, _e7).get(s)) == null ? void 0 : _a4.find((r) => r !== t && r.state.isPaused)) == null ? void 0 : _b2.continue()) ?? Promise.resolve() : Promise.resolve();
    }
    clear() {
      Oe.batch(() => {
        __privateGet(this, _t8).forEach((t) => {
          this.notify({
            type: "removed",
            mutation: t
          });
        }), __privateGet(this, _t8).clear(), __privateGet(this, _e7).clear();
      });
    }
    getAll() {
      return Array.from(__privateGet(this, _t8));
    }
    find(t) {
      const s = {
        exact: true,
        ...t
      };
      return this.getAll().find((n) => Ri(s, n));
    }
    findAll(t = {}) {
      return this.getAll().filter((s) => Ri(t, s));
    }
    notify(t) {
      Oe.batch(() => {
        this.listeners.forEach((s) => {
          s(t);
        });
      });
    }
    resumePausedMutations() {
      const t = this.getAll().filter((s) => s.state.isPaused);
      return Oe.batch(() => Promise.all(t.map((s) => s.continue().catch(Ke))));
    }
  }, _t8 = new WeakMap(), _e7 = new WeakMap(), _s6 = new WeakMap(), _g);
  function Ds(e) {
    var _a4;
    return (_a4 = e.options.scope) == null ? void 0 : _a4.id;
  }
  function Oi(e) {
    return {
      onFetch: (t, s) => {
        var _a4, _b2, _c4, _d4, _e10;
        const n = t.options, r = (_c4 = (_b2 = (_a4 = t.fetchOptions) == null ? void 0 : _a4.meta) == null ? void 0 : _b2.fetchMore) == null ? void 0 : _c4.direction, i = ((_d4 = t.state.data) == null ? void 0 : _d4.pages) || [], o = ((_e10 = t.state.data) == null ? void 0 : _e10.pageParams) || [];
        let l = {
          pages: [],
          pageParams: []
        }, a = 0;
        const f = async () => {
          let c = false;
          const d = (_) => {
            Object.defineProperty(_, "signal", {
              enumerable: true,
              get: () => (t.signal.aborted ? c = true : t.signal.addEventListener("abort", () => {
                c = true;
              }), t.signal)
            });
          }, m = yl(t.options, t.fetchOptions), p = async (_, b, $) => {
            if (c) return Promise.reject();
            if (b == null && _.pages.length) return Promise.resolve(_);
            const R = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: b,
              direction: $ ? "backward" : "forward",
              meta: t.options.meta
            };
            d(R);
            const k = await m(R), { maxPages: F } = t.options, M = $ ? Pd : Rd;
            return {
              pages: M(_.pages, k, F),
              pageParams: M(_.pageParams, b, F)
            };
          };
          if (r && i.length) {
            const _ = r === "backward", b = _ ? jd : ki, $ = {
              pages: i,
              pageParams: o
            }, R = b(n, $);
            l = await p($, R, _);
          } else {
            const _ = e ?? i.length;
            do {
              const b = a === 0 ? o[0] ?? n.initialPageParam : ki(n, l);
              if (a > 0 && b == null) break;
              l = await p(l, b), a++;
            } while (a < _);
          }
          return l;
        };
        t.options.persister ? t.fetchFn = () => {
          var _a5, _b3;
          return (_b3 = (_a5 = t.options).persister) == null ? void 0 : _b3.call(_a5, f, {
            client: t.client,
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          }, s);
        } : t.fetchFn = f;
      }
    };
  }
  function ki(e, { pages: t, pageParams: s }) {
    const n = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[n], t, s[n], s) : void 0;
  }
  function jd(e, { pages: t, pageParams: s }) {
    var _a4;
    return t.length > 0 ? (_a4 = e.getPreviousPageParam) == null ? void 0 : _a4.call(e, t[0], t, s[0], s) : void 0;
  }
  var Ld = (_h = class {
    constructor(t = {}) {
      __privateAdd(this, _t9);
      __privateAdd(this, _e8);
      __privateAdd(this, _s7);
      __privateAdd(this, _n3);
      __privateAdd(this, _r3);
      __privateAdd(this, _l3);
      __privateAdd(this, _o3);
      __privateAdd(this, _i2);
      __privateSet(this, _t9, t.queryCache || new Sl()), __privateSet(this, _e8, t.mutationCache || new Cl()), __privateSet(this, _s7, t.defaultOptions || {}), __privateSet(this, _n3, /* @__PURE__ */ new Map()), __privateSet(this, _r3, /* @__PURE__ */ new Map()), __privateSet(this, _l3, 0);
    }
    mount() {
      __privateWrapper(this, _l3)._++, __privateGet(this, _l3) === 1 && (__privateSet(this, _o3, xr.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _t9).onFocus());
      })), __privateSet(this, _i2, Ks.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _t9).onOnline());
      })));
    }
    unmount() {
      var _a4, _b2;
      __privateWrapper(this, _l3)._--, __privateGet(this, _l3) === 0 && ((_a4 = __privateGet(this, _o3)) == null ? void 0 : _a4.call(this), __privateSet(this, _o3, void 0), (_b2 = __privateGet(this, _i2)) == null ? void 0 : _b2.call(this), __privateSet(this, _i2, void 0));
    }
    isFetching(t) {
      return __privateGet(this, _t9).findAll({
        ...t,
        fetchStatus: "fetching"
      }).length;
    }
    isMutating(t) {
      return __privateGet(this, _e8).findAll({
        ...t,
        status: "pending"
      }).length;
    }
    getQueryData(t) {
      var _a4;
      const s = this.defaultQueryOptions({
        queryKey: t
      });
      return (_a4 = __privateGet(this, _t9).get(s.queryHash)) == null ? void 0 : _a4.state.data;
    }
    ensureQueryData(t) {
      const s = this.defaultQueryOptions(t), n = __privateGet(this, _t9).build(this, s), r = n.state.data;
      return r === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && n.isStaleByTime(Yt(s.staleTime, n)) && this.prefetchQuery(s), Promise.resolve(r));
    }
    getQueriesData(t) {
      return __privateGet(this, _t9).findAll(t).map(({ queryKey: s, state: n }) => {
        const r = n.data;
        return [
          s,
          r
        ];
      });
    }
    setQueryData(t, s, n) {
      var _a4;
      const r = this.defaultQueryOptions({
        queryKey: t
      }), o = (_a4 = __privateGet(this, _t9).get(r.queryHash)) == null ? void 0 : _a4.state.data, l = Sd(s, o);
      if (l !== void 0) return __privateGet(this, _t9).build(this, r).setData(l, {
        ...n,
        manual: true
      });
    }
    setQueriesData(t, s, n) {
      return Oe.batch(() => __privateGet(this, _t9).findAll(t).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, s, n)
      ]));
    }
    getQueryState(t) {
      var _a4;
      const s = this.defaultQueryOptions({
        queryKey: t
      });
      return (_a4 = __privateGet(this, _t9).get(s.queryHash)) == null ? void 0 : _a4.state;
    }
    removeQueries(t) {
      const s = __privateGet(this, _t9);
      Oe.batch(() => {
        s.findAll(t).forEach((n) => {
          s.remove(n);
        });
      });
    }
    resetQueries(t, s) {
      const n = __privateGet(this, _t9);
      return Oe.batch(() => (n.findAll(t).forEach((r) => {
        r.reset();
      }), this.refetchQueries({
        type: "active",
        ...t
      }, s)));
    }
    cancelQueries(t, s = {}) {
      const n = {
        revert: true,
        ...s
      }, r = Oe.batch(() => __privateGet(this, _t9).findAll(t).map((i) => i.cancel(n)));
      return Promise.all(r).then(Ke).catch(Ke);
    }
    invalidateQueries(t, s = {}) {
      return Oe.batch(() => (__privateGet(this, _t9).findAll(t).forEach((n) => {
        n.invalidate();
      }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
        ...t,
        type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
      }, s)));
    }
    refetchQueries(t, s = {}) {
      const n = {
        ...s,
        cancelRefetch: s.cancelRefetch ?? true
      }, r = Oe.batch(() => __privateGet(this, _t9).findAll(t).filter((i) => !i.isDisabled()).map((i) => {
        let o = i.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(Ke)), i.state.fetchStatus === "paused" ? Promise.resolve() : o;
      }));
      return Promise.all(r).then(Ke);
    }
    fetchQuery(t) {
      const s = this.defaultQueryOptions(t);
      s.retry === void 0 && (s.retry = false);
      const n = __privateGet(this, _t9).build(this, s);
      return n.isStaleByTime(Yt(s.staleTime, n)) ? n.fetch(s) : Promise.resolve(n.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(Ke).catch(Ke);
    }
    fetchInfiniteQuery(t) {
      return t.behavior = Oi(t.pages), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(Ke).catch(Ke);
    }
    ensureInfiniteQueryData(t) {
      return t.behavior = Oi(t.pages), this.ensureQueryData(t);
    }
    resumePausedMutations() {
      return Ks.isOnline() ? __privateGet(this, _e8).resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return __privateGet(this, _t9);
    }
    getMutationCache() {
      return __privateGet(this, _e8);
    }
    getDefaultOptions() {
      return __privateGet(this, _s7);
    }
    setDefaultOptions(t) {
      __privateSet(this, _s7, t);
    }
    setQueryDefaults(t, s) {
      __privateGet(this, _n3).set(Ss(t), {
        queryKey: t,
        defaultOptions: s
      });
    }
    getQueryDefaults(t) {
      const s = [
        ...__privateGet(this, _n3).values()
      ], n = {};
      return s.forEach((r) => {
        Cs(t, r.queryKey) && Object.assign(n, r.defaultOptions);
      }), n;
    }
    setMutationDefaults(t, s) {
      __privateGet(this, _r3).set(Ss(t), {
        mutationKey: t,
        defaultOptions: s
      });
    }
    getMutationDefaults(t) {
      const s = [
        ...__privateGet(this, _r3).values()
      ], n = {};
      return s.forEach((r) => {
        Cs(t, r.mutationKey) && Object.assign(n, r.defaultOptions);
      }), n;
    }
    defaultQueryOptions(t) {
      if (t._defaulted) return t;
      const s = {
        ...__privateGet(this, _s7).queries,
        ...this.getQueryDefaults(t.queryKey),
        ...t,
        _defaulted: true
      };
      return s.queryHash || (s.queryHash = wr(s.queryKey, s)), s.refetchOnReconnect === void 0 && (s.refetchOnReconnect = s.networkMode !== "always"), s.throwOnError === void 0 && (s.throwOnError = !!s.suspense), !s.networkMode && s.persister && (s.networkMode = "offlineFirst"), s.queryFn === _r && (s.enabled = false), s;
    }
    defaultMutationOptions(t) {
      return (t == null ? void 0 : t._defaulted) ? t : {
        ...__privateGet(this, _s7).mutations,
        ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
        ...t,
        _defaulted: true
      };
    }
    clear() {
      __privateGet(this, _t9).clear(), __privateGet(this, _e8).clear();
    }
  }, _t9 = new WeakMap(), _e8 = new WeakMap(), _s7 = new WeakMap(), _n3 = new WeakMap(), _r3 = new WeakMap(), _l3 = new WeakMap(), _o3 = new WeakMap(), _i2 = new WeakMap(), _h), $d = (_i4 = class extends ks {
    constructor(e, t) {
      super();
      __privateAdd(this, _$d_instances);
      __privateAdd(this, _t10);
      __privateAdd(this, _e9);
      __privateAdd(this, _s8);
      __privateAdd(this, _n4);
      __privateAdd(this, _r4);
      __privateAdd(this, _l4);
      __privateAdd(this, _o4);
      __privateAdd(this, _i3);
      __privateAdd(this, _m);
      __privateAdd(this, _d3);
      __privateAdd(this, _h2);
      __privateAdd(this, _c3);
      __privateAdd(this, _u2);
      __privateAdd(this, _a3);
      __privateAdd(this, _p, /* @__PURE__ */ new Set());
      this.options = t, __privateSet(this, _t10, e), __privateSet(this, _i3, null), __privateSet(this, _o4, Gn()), this.options.experimental_prefetchInRender || __privateGet(this, _o4).reject(new Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(t);
    }
    bindMethods() {
      this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
      this.listeners.size === 1 && (__privateGet(this, _e9).addObserver(this), Ai(__privateGet(this, _e9), this.options) ? __privateMethod(this, _$d_instances, f_fn).call(this) : this.updateResult(), __privateMethod(this, _$d_instances, v_fn).call(this));
    }
    onUnsubscribe() {
      this.hasListeners() || this.destroy();
    }
    shouldFetchOnReconnect() {
      return Wn(__privateGet(this, _e9), this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
      return Wn(__privateGet(this, _e9), this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
      this.listeners = /* @__PURE__ */ new Set(), __privateMethod(this, _$d_instances, w_fn).call(this), __privateMethod(this, _$d_instances, __fn).call(this), __privateGet(this, _e9).removeObserver(this);
    }
    setOptions(e) {
      const t = this.options, s = __privateGet(this, _e9);
      if (this.options = __privateGet(this, _t10).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Xe(this.options.enabled, __privateGet(this, _e9)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
      __privateMethod(this, _$d_instances, x_fn).call(this), __privateGet(this, _e9).setOptions(this.options), t._defaulted && !qn(this.options, t) && __privateGet(this, _t10).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _e9),
        observer: this
      });
      const n = this.hasListeners();
      n && Mi(__privateGet(this, _e9), s, this.options, t) && __privateMethod(this, _$d_instances, f_fn).call(this), this.updateResult(), n && (__privateGet(this, _e9) !== s || Xe(this.options.enabled, __privateGet(this, _e9)) !== Xe(t.enabled, __privateGet(this, _e9)) || Yt(this.options.staleTime, __privateGet(this, _e9)) !== Yt(t.staleTime, __privateGet(this, _e9))) && __privateMethod(this, _$d_instances, g_fn).call(this);
      const r = __privateMethod(this, _$d_instances, y_fn).call(this);
      n && (__privateGet(this, _e9) !== s || Xe(this.options.enabled, __privateGet(this, _e9)) !== Xe(t.enabled, __privateGet(this, _e9)) || r !== __privateGet(this, _a3)) && __privateMethod(this, _$d_instances, b_fn).call(this, r);
    }
    getOptimisticResult(e) {
      const t = __privateGet(this, _t10).getQueryCache().build(__privateGet(this, _t10), e), s = this.createResult(t, e);
      return Ud(this, s) && (__privateSet(this, _n4, s), __privateSet(this, _l4, this.options), __privateSet(this, _r4, __privateGet(this, _e9).state)), s;
    }
    getCurrentResult() {
      return __privateGet(this, _n4);
    }
    trackResult(e, t) {
      const s = {};
      return Object.keys(e).forEach((n) => {
        Object.defineProperty(s, n, {
          configurable: false,
          enumerable: true,
          get: () => (this.trackProp(n), t == null ? void 0 : t(n), e[n])
        });
      }), s;
    }
    trackProp(e) {
      __privateGet(this, _p).add(e);
    }
    getCurrentQuery() {
      return __privateGet(this, _e9);
    }
    refetch({ ...e } = {}) {
      return this.fetch({
        ...e
      });
    }
    fetchOptimistic(e) {
      const t = __privateGet(this, _t10).defaultQueryOptions(e), s = __privateGet(this, _t10).getQueryCache().build(__privateGet(this, _t10), t);
      return s.fetch().then(() => this.createResult(s, t));
    }
    fetch(e) {
      return __privateMethod(this, _$d_instances, f_fn).call(this, {
        ...e,
        cancelRefetch: e.cancelRefetch ?? true
      }).then(() => (this.updateResult(), __privateGet(this, _n4)));
    }
    createResult(e, t) {
      var _a4;
      const s = __privateGet(this, _e9), n = this.options, r = __privateGet(this, _n4), i = __privateGet(this, _r4), o = __privateGet(this, _l4), a = e !== s ? e.state : __privateGet(this, _s8), { state: f } = e;
      let c = {
        ...f
      }, d = false, m;
      if (t._optimisticResults) {
        const D = this.hasListeners(), fe = !D && Ai(e, t), pe = D && Mi(e, s, t, n);
        (fe || pe) && (c = {
          ...c,
          ...xl(f.data, e.options)
        }), t._optimisticResults === "isRestoring" && (c.fetchStatus = "idle");
      }
      let { error: p, errorUpdatedAt: _, status: b } = c;
      m = c.data;
      let $ = false;
      if (t.placeholderData !== void 0 && m === void 0 && b === "pending") {
        let D;
        (r == null ? void 0 : r.isPlaceholderData) && t.placeholderData === (o == null ? void 0 : o.placeholderData) ? (D = r.data, $ = true) : D = typeof t.placeholderData == "function" ? t.placeholderData((_a4 = __privateGet(this, _h2)) == null ? void 0 : _a4.state.data, __privateGet(this, _h2)) : t.placeholderData, D !== void 0 && (b = "success", m = Kn(r == null ? void 0 : r.data, D, t), d = true);
      }
      if (t.select && m !== void 0 && !$) if (r && m === (i == null ? void 0 : i.data) && t.select === __privateGet(this, _m)) m = __privateGet(this, _d3);
      else try {
        __privateSet(this, _m, t.select), m = t.select(m), m = Kn(r == null ? void 0 : r.data, m, t), __privateSet(this, _d3, m), __privateSet(this, _i3, null);
      } catch (D) {
        __privateSet(this, _i3, D);
      }
      __privateGet(this, _i3) && (p = __privateGet(this, _i3), m = __privateGet(this, _d3), _ = Date.now(), b = "error");
      const R = c.fetchStatus === "fetching", k = b === "pending", F = b === "error", M = k && R, B = m !== void 0, q = {
        status: b,
        fetchStatus: c.fetchStatus,
        isPending: k,
        isSuccess: b === "success",
        isError: F,
        isInitialLoading: M,
        isLoading: M,
        data: m,
        dataUpdatedAt: c.dataUpdatedAt,
        error: p,
        errorUpdatedAt: _,
        failureCount: c.fetchFailureCount,
        failureReason: c.fetchFailureReason,
        errorUpdateCount: c.errorUpdateCount,
        isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
        isFetchedAfterMount: c.dataUpdateCount > a.dataUpdateCount || c.errorUpdateCount > a.errorUpdateCount,
        isFetching: R,
        isRefetching: R && !k,
        isLoadingError: F && !B,
        isPaused: c.fetchStatus === "paused",
        isPlaceholderData: d,
        isRefetchError: F && B,
        isStale: Sr(e, t),
        refetch: this.refetch,
        promise: __privateGet(this, _o4)
      };
      if (this.options.experimental_prefetchInRender) {
        const D = (Re) => {
          q.status === "error" ? Re.reject(q.error) : q.data !== void 0 && Re.resolve(q.data);
        }, fe = () => {
          const Re = __privateSet(this, _o4, q.promise = Gn());
          D(Re);
        }, pe = __privateGet(this, _o4);
        switch (pe.status) {
          case "pending":
            e.queryHash === s.queryHash && D(pe);
            break;
          case "fulfilled":
            (q.status === "error" || q.data !== pe.value) && fe();
            break;
          case "rejected":
            (q.status !== "error" || q.error !== pe.reason) && fe();
            break;
        }
      }
      return q;
    }
    updateResult() {
      const e = __privateGet(this, _n4), t = this.createResult(__privateGet(this, _e9), this.options);
      if (__privateSet(this, _r4, __privateGet(this, _e9).state), __privateSet(this, _l4, this.options), __privateGet(this, _r4).data !== void 0 && __privateSet(this, _h2, __privateGet(this, _e9)), qn(t, e)) return;
      __privateSet(this, _n4, t);
      const s = () => {
        if (!e) return true;
        const { notifyOnChangeProps: n } = this.options, r = typeof n == "function" ? n() : n;
        if (r === "all" || !r && !__privateGet(this, _p).size) return true;
        const i = new Set(r ?? __privateGet(this, _p));
        return this.options.throwOnError && i.add("error"), Object.keys(__privateGet(this, _n4)).some((o) => {
          const l = o;
          return __privateGet(this, _n4)[l] !== e[l] && i.has(l);
        });
      };
      __privateMethod(this, _$d_instances, S_fn).call(this, {
        listeners: s()
      });
    }
    onQueryUpdate() {
      this.updateResult(), this.hasListeners() && __privateMethod(this, _$d_instances, v_fn).call(this);
    }
  }, _t10 = new WeakMap(), _e9 = new WeakMap(), _s8 = new WeakMap(), _n4 = new WeakMap(), _r4 = new WeakMap(), _l4 = new WeakMap(), _o4 = new WeakMap(), _i3 = new WeakMap(), _m = new WeakMap(), _d3 = new WeakMap(), _h2 = new WeakMap(), _c3 = new WeakMap(), _u2 = new WeakMap(), _a3 = new WeakMap(), _p = new WeakMap(), _$d_instances = new WeakSet(), f_fn = function(e) {
    __privateMethod(this, _$d_instances, x_fn).call(this);
    let t = __privateGet(this, _e9).fetch(this.options, e);
    return (e == null ? void 0 : e.throwOnError) || (t = t.catch(Ke)), t;
  }, g_fn = function() {
    __privateMethod(this, _$d_instances, w_fn).call(this);
    const e = Yt(this.options.staleTime, __privateGet(this, _e9));
    if (Ut || __privateGet(this, _n4).isStale || !zn(e)) return;
    const s = ml(__privateGet(this, _n4).dataUpdatedAt, e) + 1;
    __privateSet(this, _c3, setTimeout(() => {
      __privateGet(this, _n4).isStale || this.updateResult();
    }, s));
  }, y_fn = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(__privateGet(this, _e9)) : this.options.refetchInterval) ?? false;
  }, b_fn = function(e) {
    __privateMethod(this, _$d_instances, __fn).call(this), __privateSet(this, _a3, e), !(Ut || Xe(this.options.enabled, __privateGet(this, _e9)) === false || !zn(__privateGet(this, _a3)) || __privateGet(this, _a3) === 0) && __privateSet(this, _u2, setInterval(() => {
      (this.options.refetchIntervalInBackground || xr.isFocused()) && __privateMethod(this, _$d_instances, f_fn).call(this);
    }, __privateGet(this, _a3)));
  }, v_fn = function() {
    __privateMethod(this, _$d_instances, g_fn).call(this), __privateMethod(this, _$d_instances, b_fn).call(this, __privateMethod(this, _$d_instances, y_fn).call(this));
  }, w_fn = function() {
    __privateGet(this, _c3) && (clearTimeout(__privateGet(this, _c3)), __privateSet(this, _c3, void 0));
  }, __fn = function() {
    __privateGet(this, _u2) && (clearInterval(__privateGet(this, _u2)), __privateSet(this, _u2, void 0));
  }, x_fn = function() {
    const e = __privateGet(this, _t10).getQueryCache().build(__privateGet(this, _t10), this.options);
    if (e === __privateGet(this, _e9)) return;
    const t = __privateGet(this, _e9);
    __privateSet(this, _e9, e), __privateSet(this, _s8, e.state), this.hasListeners() && (t == null ? void 0 : t.removeObserver(this), e.addObserver(this));
  }, S_fn = function(e) {
    Oe.batch(() => {
      e.listeners && this.listeners.forEach((t) => {
        t(__privateGet(this, _n4));
      }), __privateGet(this, _t10).getQueryCache().notify({
        query: __privateGet(this, _e9),
        type: "observerResultsUpdated"
      });
    });
  }, _i4);
  function Nd(e, t) {
    return Xe(t.enabled, e) !== false && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === false);
  }
  function Ai(e, t) {
    return Nd(e, t) || e.state.data !== void 0 && Wn(e, t, t.refetchOnMount);
  }
  function Wn(e, t, s) {
    if (Xe(t.enabled, e) !== false) {
      const n = typeof s == "function" ? s(e) : s;
      return n === "always" || n !== false && Sr(e, t);
    }
    return false;
  }
  function Mi(e, t, s, n) {
    return (e !== t || Xe(n.enabled, e) === false) && (!s.suspense || e.state.status !== "error") && Sr(e, s);
  }
  function Sr(e, t) {
    return Xe(t.enabled, e) !== false && e.isStaleByTime(Yt(t.staleTime, e));
  }
  function Ud(e, t) {
    return !qn(e.getCurrentResult(), t);
  }
  var Qd = "VUE_QUERY_CLIENT";
  function Rl(e) {
    const t = e ? `:${e}` : "";
    return `${Qd}${t}`;
  }
  function Ti(e, t) {
    Object.keys(e).forEach((s) => {
      e[s] = t[s];
    });
  }
  function Yn(e, t, s = "", n = 0) {
    if (t) {
      const r = t(e, s, n);
      if (r === void 0 && ve(e) || r !== void 0) return r;
    }
    if (Array.isArray(e)) return e.map((r, i) => Yn(r, t, String(i), n + 1));
    if (typeof e == "object" && Vd(e)) {
      const r = Object.entries(e).map(([i, o]) => [
        i,
        Yn(o, t, i, n + 1)
      ]);
      return Object.fromEntries(r);
    }
    return e;
  }
  function Hd(e, t) {
    return Yn(e, t);
  }
  function G(e, t = false) {
    return Hd(e, (s, n, r) => {
      if (r === 1 && n === "queryKey") return G(s, true);
      if (t && zd(s)) return G(s(), t);
      if (ve(s)) return G(de(s), t);
    });
  }
  function Vd(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]") return false;
    const t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype;
  }
  function zd(e) {
    return typeof e == "function";
  }
  function Ii(e, t) {
    return typeof e == "function" ? e(...t) : !!e;
  }
  function qd(e = "") {
    if (!Wa()) throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");
    const t = Rl(e), s = at(t);
    if (!s) throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");
    return s;
  }
  var Bd = class extends Sl {
    find(e) {
      return super.find(G(e));
    }
    findAll(e = {}) {
      return super.findAll(G(e));
    }
  }, Kd = class extends Cl {
    find(e) {
      return super.find(G(e));
    }
    findAll(e = {}) {
      return super.findAll(G(e));
    }
  }, Pl = class extends Ld {
    constructor(e = {}) {
      const t = {
        defaultOptions: e.defaultOptions,
        queryCache: e.queryCache || new Bd(),
        mutationCache: e.mutationCache || new Kd()
      };
      super(t), this.isRestoring = ar(false);
    }
    isFetching(e = {}) {
      return super.isFetching(G(e));
    }
    isMutating(e = {}) {
      return super.isMutating(G(e));
    }
    getQueryData(e) {
      return super.getQueryData(G(e));
    }
    ensureQueryData(e) {
      return super.ensureQueryData(G(e));
    }
    getQueriesData(e) {
      return super.getQueriesData(G(e));
    }
    setQueryData(e, t, s = {}) {
      return super.setQueryData(G(e), t, G(s));
    }
    setQueriesData(e, t, s = {}) {
      return super.setQueriesData(G(e), t, G(s));
    }
    getQueryState(e) {
      return super.getQueryState(G(e));
    }
    removeQueries(e = {}) {
      return super.removeQueries(G(e));
    }
    resetQueries(e = {}, t = {}) {
      return super.resetQueries(G(e), G(t));
    }
    cancelQueries(e = {}, t = {}) {
      return super.cancelQueries(G(e), G(t));
    }
    invalidateQueries(e = {}, t = {}) {
      const s = G(e), n = G(t);
      if (super.invalidateQueries({
        ...s,
        refetchType: "none"
      }, n), s.refetchType === "none") return Promise.resolve();
      const r = {
        ...s,
        type: s.refetchType ?? s.type ?? "active"
      };
      return cr().then(() => super.refetchQueries(r, n));
    }
    refetchQueries(e = {}, t = {}) {
      return super.refetchQueries(G(e), G(t));
    }
    fetchQuery(e) {
      return super.fetchQuery(G(e));
    }
    prefetchQuery(e) {
      return super.prefetchQuery(G(e));
    }
    fetchInfiniteQuery(e) {
      return super.fetchInfiniteQuery(G(e));
    }
    prefetchInfiniteQuery(e) {
      return super.prefetchInfiniteQuery(G(e));
    }
    setDefaultOptions(e) {
      super.setDefaultOptions(G(e));
    }
    setQueryDefaults(e, t) {
      super.setQueryDefaults(G(e), G(t));
    }
    getQueryDefaults(e) {
      return super.getQueryDefaults(G(e));
    }
    setMutationDefaults(e, t) {
      super.setMutationDefaults(G(e), G(t));
    }
    getMutationDefaults(e) {
      return super.getMutationDefaults(G(e));
    }
  }, Gd = {
    install: (e, t = {}) => {
      const s = Rl(t.queryClientKey);
      let n;
      if ("queryClient" in t && t.queryClient) n = t.queryClient;
      else {
        const o = "queryClientConfig" in t ? t.queryClientConfig : void 0;
        n = new Pl(o);
      }
      Ut || n.mount();
      let r = () => {
      };
      if (t.clientPersister) {
        n.isRestoring.value = true;
        const [o, l] = t.clientPersister(n);
        r = o, l.then(() => {
          var _a4;
          n.isRestoring.value = false, (_a4 = t.clientPersisterOnSuccess) == null ? void 0 : _a4.call(t, n);
        });
      }
      const i = () => {
        n.unmount(), r();
      };
      if (e.onUnmount) e.onUnmount(i);
      else {
        const o = e.unmount;
        e.unmount = function() {
          i(), o();
        };
      }
      e.provide(s, n);
    }
  };
  function Wd(e, t, s) {
    const n = qd(), r = Ge(() => {
      const p = G(t);
      typeof p.enabled == "function" && (p.enabled = p.enabled());
      const _ = n.defaultQueryOptions(p);
      return _._optimisticResults = n.isRestoring.value ? "isRestoring" : "optimistic", _;
    }), i = new e(n, r.value), o = r.value.shallow ? ir(i.getCurrentResult()) : Ps(i.getCurrentResult());
    let l = () => {
    };
    Et(n.isRestoring, (p) => {
      p || (l(), l = i.subscribe((_) => {
        Ti(o, _);
      }));
    }, {
      immediate: true
    });
    const a = () => {
      i.setOptions(r.value), Ti(o, i.getCurrentResult());
    };
    Et(r, a), Hl(() => {
      l();
    });
    const f = (...p) => (a(), o.refetch(...p)), c = () => new Promise((p, _) => {
      let b = () => {
      };
      const $ = () => {
        if (r.value.enabled !== false) {
          i.setOptions(r.value);
          const R = i.getOptimisticResult(r.value);
          R.isStale ? (b(), i.fetchOptimistic(r.value).then(p, (k) => {
            Ii(r.value.throwOnError, [
              k,
              i.getCurrentQuery()
            ]) ? _(k) : p(i.getCurrentResult());
          })) : (b(), p(R));
        }
      };
      $(), b = Et(r, $);
    });
    Et(() => o.error, (p) => {
      if (o.isError && !o.isFetching && Ii(r.value.throwOnError, [
        p,
        i.getCurrentQuery()
      ])) throw p;
    });
    const d = r.value.shallow ? aa(o) : or(o), m = pa(d);
    for (const p in o) typeof o[p] == "function" && (m[p] = o[p]);
    return m.suspense = c, m.refetch = f, m;
  }
  Yd = function(e, t) {
    return Wd($d, e);
  };
  const Jd = {
    class: "main-wrapper"
  }, Xd = {
    class: "mmd-highlight"
  }, Zd = {
    key: 1,
    class: "mmd-p text-center"
  }, eh = {
    key: 2,
    class: "mmd-p text-center"
  }, th = {
    key: 3,
    class: "flex justify-center w-full"
  }, sh = {
    class: "flex align-center justify-center flex-col md:flex-row gap-3 w-full"
  }, nh = Ye({
    __name: "HomeView",
    setup(e) {
      const { isPending: t, isError: s, data: n, error: r } = Yd({
        queryKey: [
          "posts-3"
        ],
        queryFn: () => xd(3)
      });
      return (i, o) => {
        const l = dr("RouterLink");
        return oe(), be("div", Jd, [
          ie("main", null, [
            o[6] || (o[6] = ie("h1", {
              class: "mmd-title"
            }, "Barney Campbell", -1)),
            ie("div", null, [
              o[5] || (o[5] = ie("p", {
                class: "mmd-p"
              }, " Welcome to my site. This is my place to talk about myself, but more importantly things I'm interested in. I am a full-stack Software Engineer. Fascinated both by designing database schema and figuring out the best way to display elements on a page. My professional experience is using C#/ASP.NET, but I also have a long history of personal experience in a number of technologies, common and obscure. A great example is this site: Vue frontend, AWS backend. ", -1)),
              ie("p", Xd, [
                J(l, {
                  to: "/about"
                }, {
                  default: je(() => o[0] || (o[0] = [
                    Ie("The about page")
                  ])),
                  _: 1
                }),
                o[2] || (o[2] = Ie(" will take you through the past, present, and future of the site and ")),
                J(l, {
                  to: "/posts"
                }, {
                  default: je(() => o[1] || (o[1] = [
                    Ie("posts")
                  ])),
                  _: 1
                }),
                o[3] || (o[3] = Ie(" is the home of my collection of blog posts. "))
              ]),
              J(Pf, null, {
                default: je(() => o[4] || (o[4] = [
                  Ie("New Posts")
                ])),
                _: 1
              }),
              de(t) ? (oe(), kt(dd, {
                key: 0
              })) : de(s) ? (oe(), be("p", Zd, "Service Is Currently Down.")) : de(n).posts.length <= 0 ? (oe(), be("p", eh, "No posts at the moment!")) : (oe(), be("div", th, [
                ie("div", sh, [
                  (oe(true), be(xe, null, yo(de(n).posts, (a, f) => (oe(), be("div", {
                    key: a.sk
                  }, [
                    f < 3 ? (oe(), kt(vd, {
                      key: 0,
                      title: a.title,
                      categories: a.categories,
                      href: `posts/post/${a.sk}`
                    }, null, 8, [
                      "title",
                      "categories",
                      "href"
                    ])) : vc("", true)
                  ]))), 128))
                ])
              ]))
            ])
          ])
        ]);
      };
    }
  }), rh = {}, ih = {
    class: "main-wrapper"
  };
  function oh(e, t) {
    return oe(), be("div", ih, [
      ie("main", null, [
        bo(e.$slots, "default")
      ])
    ]);
  }
  let ah, ch;
  lh = ut(rh, [
    [
      "render",
      oh
    ]
  ]);
  ah = {
    class: "mmd-p"
  };
  ch = Ye({
    __name: "NotFoundView",
    setup(e) {
      return (t, s) => {
        const n = dr("RouterLink");
        return oe(), kt(lh, null, {
          default: je(() => [
            s[3] || (s[3] = ie("h1", {
              class: "mmd-title"
            }, "Page Not Found!", -1)),
            ie("p", ah, [
              s[1] || (s[1] = Ie(" You can use the navbar to escape to another page, or ")),
              J(n, {
                to: "/"
              }, {
                default: je(() => s[0] || (s[0] = [
                  Ie("click here")
                ])),
                _: 1
              }),
              s[2] || (s[2] = Ie(" to go to home. "))
            ])
          ]),
          _: 1
        });
      };
    }
  });
  wh = function(e, t) {
    for (const s of t) if (e.has(s)) return true;
    return false;
  };
  const uh = new Pl(), El = cf({
    history: Nu("/"),
    routes: [
      {
        path: "/",
        name: "home",
        component: nh
      },
      {
        path: "/posts/post/:id",
        name: "post",
        component: () => Cn(() => import("./PostView-BrdcEJIo.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([0,1])),
        props: true
      },
      {
        path: "/posts",
        name: "posts",
        component: () => Cn(() => import("./PostsView-JEsdIqcU.js"), __vite__mapDeps([2,3]))
      },
      {
        path: "/about",
        name: "about",
        component: () => Cn(() => import("./AboutView-CTIjN_SO.js"), [])
      },
      {
        path: "/:pathMatch(.*)*",
        name: "not found",
        component: ch
      }
    ]
  }), fh = {
    class: "links"
  }, dh = Ye({
    __name: "App",
    setup(e) {
      const s = new URL(document.location.toString()).searchParams.get("path");
      return s !== null && El.push({
        path: decodeURIComponent(s)
      }), (n, r) => (oe(), be(xe, null, [
        ie("header", null, [
          ie("nav", null, [
            ie("div", fh, [
              J(wf)
            ]),
            J(de(Rt), {
              to: "/",
              class: "logo"
            }, {
              default: je(() => [
                J(au)
              ]),
              _: 1
            }),
            J(ru, {
              class: "mode"
            })
          ])
        ]),
        J(de(nl))
      ], 64));
    }
  }), hh = ut(dh, [
    [
      "__scopeId",
      "data-v-5c59dfb4"
    ]
  ]), Cr = eu(hh);
  Cr.use(El);
  Cr.use(Gd, {
    queryClient: uh
  });
  Cr.mount("#app");
})();
export {
  Pf as D,
  xe as F,
  lh as M,
  md as P,
  vd as T,
  cd as _,
  __tla,
  J as a,
  ie as b,
  be as c,
  Ye as d,
  kt as e,
  de as f,
  gh as g,
  ut as h,
  mh as i,
  Si as j,
  ar as k,
  vc as l,
  ph as m,
  wh as n,
  oe as o,
  xd as p,
  Ie as q,
  yo as r,
  Zs as t,
  Yd as u,
  je as w
};
