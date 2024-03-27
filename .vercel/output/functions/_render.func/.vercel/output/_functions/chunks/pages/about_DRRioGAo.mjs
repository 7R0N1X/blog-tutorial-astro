import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot } from '../astro_CEui20lG.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';

const $$Astro$6 = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "E:/tutorial/src/components/Hamburger.astro", void 0);

const $$Astro$5 = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">Inicio</a> <a href="/about/">Sobre mi</a> <a href="/blog/">Blog</a> <a href="/tags/">Etiquetas</a> </div>`;
}, "E:/tutorial/src/components/Navigation.astro", void 0);

const $$Astro$4 = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "E:/tutorial/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a> `;
}, "E:/tutorial/src/components/Social.astro", void 0);

const $$Astro$2 = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "7R0N1X", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "instagram", "username": "tronix.dev", "data-astro-cid-sz7xmlte": true })} </footer> `;
}, "E:/tutorial/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "E:/tutorial/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://blog-tutorial-demo-iota.vercel.app");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const identity = {
    firstName: "Eduardo",
    country: "Ecuador",
    ocupation: "estudiante de Astro",
    hobbies: ["dj", "developer"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "Astro"];
  const finished = false;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Sobre mi" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>... ¡y mi nuevo sitio Astro!</h2> <p>
Estoy trabajando en el tutorial introductorio de Astro. Esta es la segunda
    página de mi sitio web, ¡y es la primera que he construido yo mismo!
</p> <p>
Este sitio se irá actualizando a medida que vaya completando más partes del
    tutorial, ¡así que no dejes de visitarlo para ver cómo va mi viaje!
</p> <p>He aquí algunos datos sobre mí:</p> <ul> <li>Me llamo ${identity.firstName}</li> <li>Vivo en ${identity.country} y soy ${identity.ocupation}</li> ${identity.hobbies.length >= 2 && renderTemplate`<li>
Dos de mis aficiones son: ${identity.hobbies[0]} y${" "} ${identity.hobbies[1]} </li>`} </ul> <p>Mis habilidades son</p> <ul>${skills.map((skill) => renderTemplate`<li class="skill">${skill}</li>`)}</ul> ${renderTemplate`<p>¡Estoy feliz de aprender Astro!</p>`}${finished }${renderTemplate`<p>Mi objetivo es terminar en 3 días.</p>` }` })}`;
}, "E:/tutorial/src/pages/about.astro", void 0);

const $$file = "E:/tutorial/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, about as a };
