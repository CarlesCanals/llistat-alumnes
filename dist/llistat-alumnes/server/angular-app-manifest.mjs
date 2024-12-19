
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
    'index.csr.html': {size: 514, hash: 'b108bf0eb1100214ae473ca875da1b5e4b328e5975914548d6c82c1520490127', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '0d539728dd0a0985d186d8772c2c1b8f44fd19f9b4c62603adf27c7cc4df2cf0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4259, hash: '96d46aaf57dc6aa1a83aac19880599762426df025b35b8031083aa18cfcc026a', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3488, hash: '34936cf25d115cd79b68e7f33b6192de23301dec6acdad32b39e6606a2eee4f0', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3527, hash: '6f343d3679edddfcabaf3f856257379a961edf8f6597380c5575ac2df5c5e069', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6614, hash: 'b4e4c58ad2fc3d3179793d34d8cd0d89cdff0e7e226e906c5352048825455131', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
