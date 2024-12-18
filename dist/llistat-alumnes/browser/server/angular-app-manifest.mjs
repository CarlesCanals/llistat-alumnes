
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
    'index.csr.html': {size: 514, hash: '3fccc80217c47035688093cc5d45d3120addea49d1cb8c30c139900da12eb7ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '0f830f511a7b803cefe13ba2b133065b1e212751f2966cda54178338ea3366b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3488, hash: '10a6b1c569758020389f659d46608d88ae966b1f76de9032e07c62549fdc2811', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6614, hash: '0e20974b031961d08a58b4c8f79c7e41669c5e4e4b3d150af6be33216c456384', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4259, hash: 'beeff4afa9a6595aeaad64ae6b0c0d6ef4e26207d4ba7289d3d6332b74bf8e1c', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3527, hash: '9f89dab87aef8e682029b5e0ca656b9e655e5d94d239512ebbd1ada60d5235ed', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
