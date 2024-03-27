import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro_CEui20lG.mjs';
import 'kleur/colors';
/* empty css                           */
import { $ as $$BaseLayout } from './about_DRRioGAo.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(url, "href")}>${title}</a> </li>`;
}, "E:/tutorial/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_hN_BCU-s.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_BQ350ZwL.mjs'),"./posts/post-3.md": () => import('./post-3_Czm9hUwt.mjs'),"./posts/post-4.md": () => import('./post-4_DmqDu-iQ.mjs')}), () => "../pages/posts/*.md");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Mi blog de Astro aprendizaje" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Aquí es donde publicaré sobre mi viaje de aprendizaje Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "E:/tutorial/src/pages/blog.astro", void 0);

const $$file = "E:/tutorial/src/pages/blog.astro";
const $$url = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, blog as b };
