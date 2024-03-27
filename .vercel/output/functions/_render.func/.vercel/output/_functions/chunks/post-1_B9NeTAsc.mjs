export { renderers } from '../renderers.mjs';

const page = () => import('./pages/post-1_hN_BCU-s.mjs').then(n => n.p);

export { page };
