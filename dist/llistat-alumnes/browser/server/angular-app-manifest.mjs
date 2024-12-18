
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
    'index.csr.html': {size: 514, hash: 'c99cce2b8885b97eac43c6b1625c7d8b78460214895154a1479bd60e726a9348', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '5841b19ac553a184c820dc8c5595660d1b8ee58c94e840ef1b056558b720e091', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3551, hash: '9d4300ee7aefa8574d6dcae69d4ceb610b3d9c165b2a3c80e458e473265fbd2e', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3590, hash: '36bbc25a6e09911a1125ef424b040cd0b2a5711f5038c7081af4ca9c4efabd5c', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4322, hash: 'bd7d1f0a05a4ff2470095103715669fbd55fd0575111aff7cc33de99b95f22e4', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6677, hash: '2dda5f69bffdc96fbcbcf7dcfc5a04514299a7855ff2f98d3ecfa834d54ff11d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
