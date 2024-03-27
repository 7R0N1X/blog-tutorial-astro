import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_CEui20lG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './about_DRRioGAo.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1_hN_BCU-s.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2_BQ350ZwL.mjs'),"../posts/post-3.md": () => import('./post-3_Czm9hUwt.mjs'),"../posts/post-4.md": () => import('./post-4_DmqDu-iQ.mjs')}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  const pageTitle = "\xCDndice de etiquetas";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a> </p>`)} </div> ` })} `;
}, "E:/tutorial/src/pages/tags/index.astro", void 0);

const $$file$1 = "E:/tutorial/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "P\xE1gina de inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Mi impresionante subtítulo del blog</h2> ` })}`;
}, "E:/tutorial/src/pages/index.astro", void 0);

const $$file = "E:/tutorial/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
