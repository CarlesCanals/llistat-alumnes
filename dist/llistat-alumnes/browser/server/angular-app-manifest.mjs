
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
    'index.csr.html': {size: 514, hash: 'c4bcee8a55f4f4fdd1dd26258e17c6446419eaa2c5a1a66700d05f91079f89c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '6e42ea723bee4d17165cda5071c8d7919c9e1eb0cb1e78c37664529ca48cf13d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3543, hash: '7f14990582fc268f9f7bfa9206c48d2e7263cb9adfccd2b0e4195c2d420a1e12', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3504, hash: '3651eb471f18b6852dcb9103278d43220df17256e4e629a54e1389f675144cd3', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4275, hash: '1afa9c5ba21587c4c1db2d874df47b08940156630b37d822376be37dd0ec9786', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6630, hash: 'd1a595051aa02a5ad68937dbd77b0a36dc1f47410df79830d6e633b78e12705f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
