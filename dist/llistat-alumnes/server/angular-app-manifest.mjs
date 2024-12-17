
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
    'index.csr.html': {size: 514, hash: '18d56d05071fd6dd427685660473dfca3300a1323d1ede01b3639406260bcd0c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '623454627e6d55fb886239b66d780cf360c3bebd12248ef9baeccc1bc327432d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 2726, hash: '4084cb708e3695a9ac1ac90a708dad608d5c21028ef059877b4fc1bb3ca8e4ba', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5852, hash: 'b4d0d23f5003e4da5175ebe8f9904b1e7848796b5e0b5255c83a0ea47d8ddd40', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 9331, hash: 'bc6e79dab9699a2afa7103676b0107ae574267c9181f272018bcb16c8f59b6c7', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 2765, hash: '56dbc475a11745a7487df1cb2717d6bfeffda2a49bb65935d280a06f80f0e16e', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
