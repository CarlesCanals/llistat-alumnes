
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://carlescanals.github.io/llistat-alumnes/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://carlescanals.github.io/llistat-alumnes"
  },
  {
    "renderMode": 2,
    "route": "/https://carlescanals.github.io/llistat-alumnes/llistat"
  },
  {
    "renderMode": 2,
    "route": "/https://carlescanals.github.io/llistat-alumnes/notes"
  },
  {
    "renderMode": 2,
    "route": "/https://carlescanals.github.io/llistat-alumnes/calendari"
  },
  {
    "renderMode": 2,
    "redirectTo": "/https://carlescanals.github.io/llistat-alumnes",
    "route": "/https://carlescanals.github.io/llistat-alumnes/**"
  }
],
  assets: {
    'index.csr.html': {size: 544, hash: 'acdfa7919e2897379323d62a16d384d9d33652e5890e8c6b8d64b1c89beaa1db', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: 'dc6b1cc747f9921a1eddbd3a2c968158a3e5d34454803d971cf6d3b829c003d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 6764, hash: 'ba0fd39e02cb1745a5073f8ac058f701cd2ff9de52c57b32b2934b069454a0bc', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6764, hash: 'ba0fd39e02cb1745a5073f8ac058f701cd2ff9de52c57b32b2934b069454a0bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 6764, hash: 'ba0fd39e02cb1745a5073f8ac058f701cd2ff9de52c57b32b2934b069454a0bc', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 6764, hash: 'ba0fd39e02cb1745a5073f8ac058f701cd2ff9de52c57b32b2934b069454a0bc', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
