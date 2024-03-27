import { d as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_CEui20lG.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './post-1_hN_BCU-s.mjs';

const html = "<p>No siempre ha sido fácil, pero disfruto construyendo con Astro. Además, la <a href=\"https://astro.build/chat\">comunidad de Discord</a> es muy amable y servicial.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Mi tercera publicación en el blog","author":"Molina","description":"Tuve algunos problemas, pero preguntar en la comunidad me ayudó mucho.","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"Miniatura de los rayos de Astro."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","aprender en público","contratiempos","comunidad"]};
				const file = "E:/tutorial/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "No siempre ha sido fácil, pero disfruto construyendo con Astro. Además, la [comunidad de Discord](https://astro.build/chat) es muy amable y servicial.";
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
