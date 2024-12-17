import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Endpoint de ejemplo para la API REST.
 * Aquí puedes agregar tus rutas de API.
 */
app.get('/api/data', (req, res) => {
  res.json({ message: 'Datos de prueba desde el servidor SSR' });
});

/**
 * Middleware para servir archivos estáticos desde /browser.
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Middleware para manejar todas las demás solicitudes y renderizar Angular.
 */
app.use('**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (response) {
        writeResponseToNodeResponse(response, res);
      } else {
        next();
      }
    })
    .catch(next);
});

/**
 * Inicia el servidor si este módulo es el punto de entrada principal.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] ?? 4000;
  app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
  });
}

/**
 * Exporta el manejador de solicitudes para el prerenderizado.
 */
export const reqHandler = createNodeRequestHandler(app);
