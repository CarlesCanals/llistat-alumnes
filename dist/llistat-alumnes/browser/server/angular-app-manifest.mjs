
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
    'index.csr.html': {size: 514, hash: '2be9f93280b796cf262907f2388d7b74ca16ef4ebbb4127235d623c2f1e448a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '56f6c7b327c77fd885186d40b2cbadc236ff561a9039ac1c4bb2444ce5853791', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6614, hash: '791c43a69cd2ca00a45514eaa52c193b68897fe8fa2fc612dbbf446ecdf3ab9a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3488, hash: '3c046dd5953f2321fcc81b1bb41ebc0fd3518f465b8c1fb8389f67d84715f013', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3527, hash: 'ae58653f7e860595cbd6a7a5bc17139e636b95861b8077b666e8329c435afb4c', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4259, hash: '1e7845864454b71bfdcda05e9bef7eccd10306c980a8317823fb2772f1fe97b2', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
