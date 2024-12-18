
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
  }
],
  assets: {
    'index.csr.html': {size: 514, hash: 'd5fee37d9a9b696e1426b85929b2b49ff096ae041587168ef252be8d6cee4383', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '851865afaa6b08ef105890b977cccebcf61a4d5702b7d93018bf54450a561758', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3488, hash: '3403581586a03f1c0bbee163a371f974d93ea833ac04f9bb25a65e817c2b75f0', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3527, hash: '8d13e220f5e331dedaf0f3b15da8fc9535478d01c5736844e9e189729a51d30f', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4259, hash: '7902be4d7b9892df0fb162c24d422eefa2050b9997bc47fdd1f1fc4c56c2549d', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6614, hash: '6486787649097edb0fcbfc2063a20c59d19767e9d8395e944d9cca1d352a74a8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
