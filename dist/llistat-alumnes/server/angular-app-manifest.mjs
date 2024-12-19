
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
    'index.csr.html': {size: 514, hash: '4b446e60f254c36c41cdc634de5eb4dd87473d0f3939628fd9da6628d5f4fea8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '3bb7218a458062fefc16802a8304316ed522f63395b60ceb506a7248a1e43fbd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3488, hash: 'c6d6fb3820cde0a964ec27cba33cf48d72e67bf7a2638b9b77e0ca84d898d2d6', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3527, hash: '777613845b0e7a8c3529060f7bc0a4fe6fb91e1cdb4c35ed8e6956cc78f677ec', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6614, hash: '9f592a7d166d5da3724b70f5ac64a88df83fd4485026993be559b4a9140dbd14', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4259, hash: 'a32e0c0bbf977d785f40ce0b4914cb4f7734657130eb5b058db2e654b8639839', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
