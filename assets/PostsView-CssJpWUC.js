import { d as v, m as $, i as F, c as s, F as x, r as w, f as o, t as y, o as e, h as V, a, _ as S, j as c, k as C, u as P, b as d, e as g, l as k, n as b, T as B, p as I } from "./index-r_Arjy_J.js";
const N = { class: "categories" }, D = ["onClick"], M = ["onClick"], j = v({ __name: "CategoriesFilter", props: $({ categories: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(u) {
  const n = u.categories, l = F(u, "modelValue");
  function _(p) {
    var _a;
    (_a = l.value) == null ? void 0 : _a.add(p);
  }
  function m(p) {
    var _a;
    (_a = l.value) == null ? void 0 : _a.delete(p);
  }
  return (p, h) => (e(), s("div", N, [(e(true), s(x, null, w(o(n), (i) => {
    var _a;
    return e(), s("div", { key: i }, [((_a = l.value) == null ? void 0 : _a.has(i)) ? (e(), s("div", { key: 1, onClick: () => m(i), class: "category-chosen" }, y(i), 9, M)) : (e(), s("div", { key: 0, class: "category", onClick: () => _(i) }, y(i), 9, D))]);
  }), 128))]));
} }), q = V(j, [["__scopeId", "data-v-514f2c16"]]), A = { class: "flex justify-center pt-2" }, E = v({ __name: "FiltersSkeleton", setup(u) {
  return (r, n) => (e(), s("div", A, [a(S, { class: "h-[88px] w-[224px] rounded-xl bg-primary/50" })]));
} }), T = { class: "grid grid-rows-2 grid-cols-1 md:grid-cols-2 place-items-center gap-3" }, z = v({ __name: "PostsSkeleton", setup(u) {
  return (r, n) => (e(), s("div", T, [a(c), a(c), a(c), a(c), a(c), a(c, { class: "block sm:hidden md:block" })]));
} }), H = { class: "main-wrapper" }, K = { key: 1, class: "pt-2" }, L = { class: "flex gap-[10px]" }, Q = { class: "pt-3 w-full md:w-auto" }, U = { key: 1, class: "text text-center" }, W = { key: 2, class: "grid grid-rows-2 grid-cols-1 md:grid-cols-2 place-items-center gap-3" }, G = { class: "w-full" }, J = { key: 3, class: "text" }, O = v({ __name: "PostsView", setup(u) {
  const r = C(/* @__PURE__ */ new Set([])), n = C(true), { isPending: l, isError: _, data: m, error: p } = P({ queryKey: ["posts"], queryFn: () => I(void 0) });
  function h(i) {
    return r.value.size === 0 ? i : i.filter((t) => b(r.value, t.categories));
  }
  return (i, t) => {
    var _a, _b, _c;
    return e(), s("div", H, [d("main", null, [t[4] || (t[4] = d("h1", { class: "mmd-title" }, "Posts", -1)), o(l) ? (e(), g(E, { key: 0 })) : n.value && !o(_) ? (e(), s("div", K, [o(l) ? k("", true) : (e(), g(q, { key: 0, categories: ((_a = o(m)) == null ? void 0 : _a.allCategories) || [], modelValue: r.value, "onUpdate:modelValue": t[0] || (t[0] = (f) => r.value = f) }, null, 8, ["categories", "modelValue"])), d("div", L, [d("div", { onClick: t[1] || (t[1] = () => r.value = /* @__PURE__ */ new Set([])), class: "filter-util" }, " Clear Filters "), d("div", { onClick: t[2] || (t[2] = () => n.value = false), class: "filter-util" }, "Hide Filters")])])) : !o(l) && !o(_) ? (e(), s("div", { key: 2, onClick: t[3] || (t[3] = () => n.value = true), class: "filter-util" }, " Show Filters ")) : k("", true), d("div", Q, [o(l) ? (e(), g(z, { key: 0 })) : o(_) ? (e(), s("div", U, "Service Is Currently Down.")) : (e(), s("div", W, [(e(true), s(x, null, w(h(((_b = o(m)) == null ? void 0 : _b.posts) || []), (f) => (e(), s("div", G, [a(B, { title: f.title, categories: f.categories, href: `posts/post/${f.sk}` }, null, 8, ["title", "categories", "href"])]))), 256))]))]), !o(l) && ((_c = o(m)) == null ? void 0 : _c.posts.length) === 0 ? (e(), s("p", J, "No posts at the moment!")) : k("", true)])]);
  };
} }), X = V(O, [["__scopeId", "data-v-d643d608"]]);
export {
  X as default
};
