
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
    'index.csr.html': {size: 514, hash: '2d21e707c05c497fa6ef2d651b15d201b3d83d5560204fb847c8b6dc64c1bdab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'bf716b6fb415818fe62ec49fa49ef73b0c0ec1ff273489fc2d830295b86633b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3488, hash: 'b8fd942e6109218e93cd993b78b8e546e47085a84d3156022598660ed70faab1', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3527, hash: '91fbfbfb7e432e90ee1669c37df0f9677734d6fbb2d34a9f6e5316759a1443e9', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4259, hash: '59baf55f4a632a0478b3bfff5c0849c24dffa2ef0005037efe3dc860d96ab52f', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6615, hash: 'b35dd931fcfddf803528625ec3e1ffd55109d7d160068deca550966c1e8a4f8f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
