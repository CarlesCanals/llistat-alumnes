
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
    'index.csr.html': {size: 514, hash: 'bc339d60ed3a24daf937a7fcae7d7e8b6d45ab17f18a051a7a9ad11ee304d6e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '1c68d8124e625c496c31de7d515367393dfe9ef7b9025077a74d59ffeef2d4a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 3552, hash: '92a1bca5896590e1f34364c1e6fbc7c7ebfcd64398264e12d0975931a13c4e0d', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 2781, hash: '7c817ad448544f6b13a2217d1e7649ac69d738654aee6fd7038ffd8de0d29923', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5907, hash: '05770e94ff53c585b76622f600e481c4a5465cc8ad69371b31d0574f847856a8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 2820, hash: 'add98f1a1a3d3a96ec03755856d8d2f741c6429164f8ba9a3cf568cd763b7110', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
