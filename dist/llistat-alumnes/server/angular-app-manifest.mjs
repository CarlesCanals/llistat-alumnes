
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
    'index.csr.html': {size: 514, hash: 'd32fad792a2e20412eaa2afce1caed2b232645db5da930366c2d21f53d38b28c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'e7b7c3c9ff1d3476d13aa3d60a070baff73036a5ebdf80d7ad8182061aaeb15e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4259, hash: '15aea800130a43891b3b770e9dfb31c22f21d099c4198aee58f470b3a4c8e2f1', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3488, hash: '7deea5b15e3fb654a24e54189bd4ffdff4400b6401483a0b57524d4fe440d23d', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3527, hash: 'b67c5fc8584eb614b0642b9b7b43d6d17e7d5a7004101591dfae74a5d26295c3', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6614, hash: 'b5f26102b309c0337f6e31e73b5328597fba2cd33c55b8a6d829f58bd8b82b49', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
