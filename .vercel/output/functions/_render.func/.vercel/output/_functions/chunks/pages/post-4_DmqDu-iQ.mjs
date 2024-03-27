import { d as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_CEui20lG.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './post-1_hN_BCU-s.mjs';

const html = "<p>Esta entrada debería aparecer con las demás entradas de mi blog, porque <code>Astro.glob()</code> está devolviendo una lista de todas mis entradas para crear mi lista.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Mi cuarta entrada en el blog","author":"Alumno de Astro","description":"Esta entrada aparecerá sola!","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"La palabra 'astro' contra una ilustración de planetas y estrellas."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["astro","éxitos"]};
				const file = "E:/tutorial/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "Esta entrada debería aparecer con las demás entradas de mi blog, porque `Astro.glob()` está devolviendo una lista de todas mis entradas para crear mi lista.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
