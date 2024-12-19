
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/llistat-alumnes/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/llistat-alumnes"
  },
  {
    "renderMode": 2,
    "route": "/llistat-alumnes/llistat"
  },
  {
    "renderMode": 2,
    "route": "/llistat-alumnes/notes"
  },
  {
    "renderMode": 2,
    "route": "/llistat-alumnes/calendari"
  },
  {
    "renderMode": 2,
    "redirectTo": "/llistat-alumnes",
    "route": "/llistat-alumnes/**"
  }
],
  assets: {
    'index.csr.html': {size: 514, hash: '33e8b3a1bec71a7c8d7870d6435c5bb352fbce57c0a690fe8298e60033731c8f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'c2a6c8386a165cfe9998e2048c3e9961d1b94ca62f4df848318439fa937c9fbe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6617, hash: 'e0878978589929d18f0f853174cf7d6ab82df26b8764bae197a7f7f5aacd24c3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4259, hash: 'e869fcfa8237042667c332b475515158fce7b66ae6e784f77fd955c90acbce3d', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3488, hash: 'fba9ca8bd5470fa4cba1a3826ef5971afa9bef81bd07e95872addab83823ee32', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3527, hash: 'f64dd72510f5563d981f61cedebe25802950d0a66ef285a8abd63930de9f271e', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
