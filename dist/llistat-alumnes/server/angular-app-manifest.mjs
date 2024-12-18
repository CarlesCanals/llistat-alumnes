
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
    "route": "/llistat-alumnes/calendari"
  },
  {
    "renderMode": 2,
    "route": "/llistat-alumnes/notes"
  }
],
  assets: {
    'index.csr.html': {size: 514, hash: 'd270decf060edfc9fcdd12fb1c7ac805ecc13f02a7b1791876976c6b513f8843', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'ae8fffd3586be5054db74c05688077ceec47942b7d47fb56322867ca06f21a00', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5872, hash: '3f8d15503fff7248d6fd30d5f35b80db513308af0824a24dcc74000d5091cc51', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 2746, hash: '11102e48dbcff4a897a44b1686dc98ccf93de046fa75fe48e34cafeb1edd707c', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 2785, hash: '184ab920e83c3cf5f274ca5d1b11ef2b44ff56906ba1ab1712f99ab984523197', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 3517, hash: 'd874fc43f030128bc6d6f837f3c0f87cd350a35041c4fb49e35892f1c9fb1294', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
