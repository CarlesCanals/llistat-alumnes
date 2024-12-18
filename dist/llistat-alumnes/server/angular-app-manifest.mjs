
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
  },
  {
    "renderMode": 2,
    "redirectTo": "/llistat-alumnes",
    "route": "/llistat-alumnes/**"
  }
],
  assets: {
    'index.csr.html': {size: 514, hash: 'bff8721c1a3617e06f9c6874e82a1f1c41c8c427b93eee517ce2fae3952fd770', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '2c940306fa64daccf27701df6951b15bbc180e82e91fffc24bccb2b972606f92', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 2726, hash: 'aa242f5f2dcb515f982c3d284a1e09a50bff43be7804ece999ff3ca809b53c5f', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 2765, hash: 'c3ec7bae582ecd01cd7d4c333374a8a17c7f63b8799c0458c63e9fb87c7d3f9e', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 3497, hash: '33a5164a596d192e0d7c70682286f873a9ae77e5152a3538de0ef264be14616f', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5852, hash: '7bf18dd2569477bdc395aeffca8e489d3f9fb4abc524c91fad5199e77e4dd33e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
