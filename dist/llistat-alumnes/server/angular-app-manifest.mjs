
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/llistat"
  },
  {
    "renderMode": 2,
    "route": "/calendari"
  },
  {
    "renderMode": 2,
    "route": "/notes"
  },
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 498, hash: '6c1b002acb6585e48c5d812cb6b359ac493ce4d52957f742af3ebe15f14e20ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'c88d6da4ac4728a29bd6484191947209862c716ec8a9e1fcaec85e4a18df2260', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5836, hash: '46578e274b69a90f2e3edc3b1ef991b02835eb85641fa5c79e69905467e46413', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 2749, hash: '8bb64e609ebf2224e2cfb849e1aa56e60dda1bdf1a0069fe80795351907896fd', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 2710, hash: 'aa19ca9d6fe1cca0d731bd91d3d7c1d7a41d2d465277dcc19e3c3ee45310c4b1', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 9315, hash: 'c6fa2cf00b206e7f2b0776e0292149b5069b045963e7d81abe2eb4804aa47948', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
