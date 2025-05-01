import { d as h, c as T, a as l, _ as c, o as m, b as g, F as E, u as M, e as v, w as W, M as B, f as u, t as P, P as k, g as U, h as D, __tla as __tla_0 } from "./index-Bp4O4CF5.js";
let le;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const L = "/assets/minimd_bg-0wrDvdgF.wasm", $ = async (e = {}, t) => {
    let s;
    if (t.startsWith("data:")) {
      const o = t.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") n = Buffer.from(o, "base64");
      else if (typeof atob == "function") {
        const a = atob(o);
        n = new Uint8Array(a.length);
        for (let r = 0; r < a.length; r++) n[r] = a.charCodeAt(r);
      } else throw new Error("Cannot decode base64-encoded data URL");
      s = await WebAssembly.instantiate(n, e);
    } else {
      const o = await fetch(t), n = o.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && n.startsWith("application/wasm")) s = await WebAssembly.instantiateStreaming(o, e);
      else {
        const a = await o.arrayBuffer();
        s = await WebAssembly.instantiate(a, e);
      }
    }
    return s.instance.exports;
  };
  let d;
  function F(e) {
    d = e;
  }
  const V = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let S = new V("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  S.decode();
  let w = null;
  function b() {
    return (w === null || w.byteLength === 0) && (w = new Uint8Array(d.memory.buffer)), w;
  }
  function A(e, t) {
    return e = e >>> 0, S.decode(b().subarray(e, e + t));
  }
  let y = 0;
  const q = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let x = new q("utf-8");
  const N = typeof x.encodeInto == "function" ? function(e, t) {
    return x.encodeInto(e, t);
  } : function(e, t) {
    const s = x.encode(e);
    return t.set(s), {
      read: e.length,
      written: s.length
    };
  };
  function O(e, t, s) {
    if (s === void 0) {
      const i = x.encode(e), f = t(i.length, 1) >>> 0;
      return b().subarray(f, f + i.length).set(i), y = i.length, f;
    }
    let o = e.length, n = t(o, 1) >>> 0;
    const a = b();
    let r = 0;
    for (; r < o; r++) {
      const i = e.charCodeAt(r);
      if (i > 127) break;
      a[n + r] = i;
    }
    if (r !== o) {
      r !== 0 && (e = e.slice(r)), n = s(n, o, o = r + e.length * 3, 1) >>> 0;
      const i = b().subarray(n + r, n + o), f = N(e, i);
      r += f.written, n = s(n, o, r, 1) >>> 0;
    }
    return y = r, n;
  }
  function R(e) {
    let t, s;
    try {
      const o = O(e, d.__wbindgen_malloc, d.__wbindgen_realloc), n = y, a = d.render(o, n);
      return t = a[0], s = a[1], A(a[0], a[1]);
    } finally {
      d.__wbindgen_free(t, s, 1);
    }
  }
  function j(e, t) {
    console.log(A(e, t));
  }
  function I() {
    const e = d.__wbindgen_export_0, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  URL = globalThis.URL;
  const _ = await $({
    "./minimd_bg.js": {
      __wbg_log_a05b08421c02a859: j,
      __wbindgen_init_externref_table: I
    }
  }, L), H = _.memory, z = _.greet, K = _.render, Q = _.__wbindgen_export_0, G = _.__wbindgen_malloc, J = _.__wbindgen_realloc, X = _.__wbindgen_free, C = _.__wbindgen_start, Y = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbindgen_export_0: Q,
    __wbindgen_free: X,
    __wbindgen_malloc: G,
    __wbindgen_realloc: J,
    __wbindgen_start: C,
    greet: z,
    memory: H,
    render: K
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  F(Y);
  C();
  let Z, p, ee, te, ne, se, re, oe;
  Z = {
    class: "w-full flex flex-col items-center sm:items-start pt-2 gap-1"
  };
  p = h({
    __name: "ParagraphSkeleton",
    setup(e) {
      return (t, s) => (m(), T("div", Z, [
        l(c, {
          class: "w-[95%] sm:w-sm md:w-lg lg:w-2xl xl:w-3xl 2xl:w-4xl h-[20px] rounded-xl bg-primary/50"
        }),
        l(c, {
          class: "w-[95%] sm:w-md md:w-xl lg:w-3xl xl:w-4xl 2xl:w-5xl h-[20px] rounded-xl bg-primary/50"
        }),
        l(c, {
          class: "w-[95%] sm:w-xs md:w-md lg:w-xl xl:w-2xl 2xl:w-3xl h-[20px] rounded-xl bg-primary/50"
        })
      ]));
    }
  });
  ee = {
    class: "flex gap-2 pt-2"
  };
  te = h({
    __name: "PostSkeleton",
    setup(e) {
      return (t, s) => (m(), T(E, null, [
        l(c, {
          class: "w-xs sm:w-sm md:w-xl h-[50px] rounded-xl bg-primary/50"
        }),
        g("div", ee, [
          l(c, {
            class: "w-40 h-[50px] rounded-xl bg-primary/50"
          }),
          l(c, {
            class: "w-40 h-[50px] rounded-xl bg-primary/50"
          })
        ]),
        l(c, {
          class: "w-full h-[2px] mt-2"
        }),
        l(p),
        l(p),
        l(c, {
          class: "w-xs sm:w-sm md:w-xl h-[50px] rounded-xl bg-primary/50 mt-2"
        }),
        l(c, {
          class: "w-full h-[2px] mt-2"
        }),
        l(p)
      ], 64));
    }
  });
  ne = {
    key: 1
  };
  se = {
    class: "mmd-title"
  };
  re = [
    "innerHTML"
  ];
  oe = h({
    __name: "PostView",
    props: {
      id: {}
    },
    setup(e) {
      const t = e, { isPending: s, isError: o, data: n, error: a } = M({
        queryKey: [
          "post"
        ],
        queryFn: () => U(Number(t.id))
      });
      return (r, i) => (m(), v(B, null, {
        default: W(() => [
          u(s) ? (m(), v(te, {
            key: 0
          })) : (m(), T("div", ne, [
            g("h1", se, P(u(n).post.title), 1),
            l(k, {
              categories: u(n).post.categories || []
            }, null, 8, [
              "categories"
            ]),
            i[0] || (i[0] = g("hr", {
              class: "paragraph-divider"
            }, null, -1)),
            g("div", {
              innerHTML: u(R)(u(n).post.content),
              class: "content"
            }, null, 8, re)
          ]))
        ]),
        _: 1
      }));
    }
  });
  le = D(oe, [
    [
      "__scopeId",
      "data-v-da593f3e"
    ]
  ]);
});
export {
  __tla,
  le as default
};
