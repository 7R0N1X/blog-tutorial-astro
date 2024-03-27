import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET(context) {
  return rss({
    title: 'Alumno de Astro | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_hN_BCU-s.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_BQ350ZwL.mjs'),"./posts/post-3.md": () => import('./post-3_Czm9hUwt.mjs'),"./posts/post-4.md": () => import('./post-4_DmqDu-iQ.mjs')})),
    customData: `<language>es-esp</language>`,
  });
}

export { GET };
