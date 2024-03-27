import { d as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_CEui20lG.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './post-1_hN_BCU-s.mjs';

const html = "<p>Después de una exitosa primera semana aprendiendo Astro, decidí probar un poco más. Escribí e importé un pequeño componente de memoria.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Mi segunda publicación en el blog","author":"Eduardo Molina","description":"Después de aprender un poco de Astro, ¡no podía parar!","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"Miniatura de los arcos de Astro."},"pubDate":"2022-07-08T00:00:00.000Z","tags":["astro","bloguear","aprender en público","éxitos"]};
				const file = "E:/tutorial/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "Después de una exitosa primera semana aprendiendo Astro, decidí probar un poco más. Escribí e importé un pequeño componente de memoria.";
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
