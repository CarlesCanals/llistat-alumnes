
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
    'index.csr.html': {size: 514, hash: '51456ca75587c825444c7132ec73beb7bb9180093a642a626b1ed1c487c6e4da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'a829f85a897fc0191cc5c2112eec9198f400e8b615024da06beb82306c992ad3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'llistat/index.html': {size: 3488, hash: 'a288fe70cf53e9611e1b2a458ae0ad2a5ac8b94cb6caa8cbc3403d39353c4945', text: () => import('./assets-chunks/llistat_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6616, hash: '772a187717a57106122ecb9024fb594808448187f35be95c55be41549cfe74f5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'notes/index.html': {size: 3527, hash: '17ff944c1b1f86eb823b66d727981d0e4362e30c073e7db4e6f91c1755559801', text: () => import('./assets-chunks/notes_index_html.mjs').then(m => m.default)},
    'calendari/index.html': {size: 4259, hash: 'fd9b537f0d7d360dd9f71114f51297e179747317a1a686a72c085f4bd443edc2', text: () => import('./assets-chunks/calendari_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
