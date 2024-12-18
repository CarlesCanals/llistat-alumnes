
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
    'index.csr.html': {size: 589, hash: '8953b5d7afdafeb7d8cdddcdf0d280bf1ac99e15733edb32538f395048ebb681', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1103, hash: '33060558044c594611cc65b8f9cf23d7aa1f0c770e00e0db40d7b17df0062b36', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3602, hash: '50b24406ad85ebf8ba57de80a9dd9da0725f50b91b91f5a72585238b2240e3eb', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3563, hash: 'b18f0e940decd522c55a72e3b214a1eb1b87a8ffb40100807a13dc90cddc96ed', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4334, hash: '046a0ed5e6491ad131c7d7df2348c3a0bd36886fcc421660654393d42f63c374', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6689, hash: '253d29499d4beb5f1146414fa461f67f41bbde39b970aa39d4a8e98a8e44bf48', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
