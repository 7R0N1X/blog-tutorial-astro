import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute, h as renderSlot, u as unescapeHTML } from '../astro_CEui20lG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './about_DRRioGAo.mjs';
/* empty css                           */

const $$Astro = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-5grsw2hi>${frontmatter.pubDate.toString().slice(0, 10)}</p> <p data-astro-cid-5grsw2hi><em data-astro-cid-5grsw2hi>${frontmatter.description}</em></p> <p data-astro-cid-5grsw2hi>Escrito por: ${frontmatter.author}</p> <img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")} data-astro-cid-5grsw2hi> <div class="tags" data-astro-cid-5grsw2hi> ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-5grsw2hi> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-5grsw2hi>${tag}</a> </p>`)} </div> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "E:/tutorial/src/layouts/MarkdownPostLayout.astro", void 0);

const html = "<h2 id=\"lo-que-he-conseguido\">Lo que he conseguido</h2>\n<ol>\n<li>\n<p><strong>Instalación de Astro</strong>: En primer lugar, he creado un nuevo proyecto Astro y configurar mis cuentas en línea.</p>\n</li>\n<li>\n<p><strong>Creación de páginas</strong>: Luego aprendí cómo hacer páginas creando nuevos archivos <code>.astro</code> y colocándolos en la carpeta <code>src/pages/</code>.</p>\n</li>\n<li>\n<p><strong>Creación de publicaciones</strong>: ¡Esta es mi primera publicación! ¡Ahora tengo páginas de Astro y publicaciónes en Markdown!</p>\n</li>\n</ol>\n<h2 id=\"próximos-pasos\">Próximos pasos</h2>\n<p>Terminaré el tutorial de Astro, y luego seguiré añadiendo más publicaciones. Mira este espacio para más por venir.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Mi primera publicación en el blog","pubDate":"2022-07-01T00:00:00.000Z","description":"Este es la primera publicación de mi nuevo blog Astro.","author":"Eduardo Molina","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"El logotipo completo de Astro."},"tags":["astro","bloguear","aprender en público"]};
				const file = "E:/tutorial/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "\r\n## Lo que he conseguido\r\n\r\n1. **Instalación de Astro**: En primer lugar, he creado un nuevo proyecto Astro y configurar mis cuentas en línea.\r\n\r\n2. **Creación de páginas**: Luego aprendí cómo hacer páginas creando nuevos archivos `.astro` y colocándolos en la carpeta `src/pages/`.\r\n\r\n3. **Creación de publicaciones**: ¡Esta es mi primera publicación! ¡Ahora tengo páginas de Astro y publicaciónes en Markdown!\r\n\r\n## Próximos pasos\r\n\r\nTerminaré el tutorial de Astro, y luego seguiré añadiendo más publicaciones. Mira este espacio para más por venir.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"lo-que-he-conseguido","text":"Lo que he conseguido"},{"depth":2,"slug":"próximos-pasos","text":"Próximos pasos"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const post1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownPostLayout as $, post1 as p };
