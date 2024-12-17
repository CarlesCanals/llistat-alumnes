import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Configura HttpClient con fetch APIs
    provideRouter(routes)           // Configura el Router con las rutas
  ]
}).catch(err => console.error(err));
