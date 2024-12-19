import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LlistatComponent } from './llistat/llistat.component';
import { NotesComponent } from './notes/notes.component';
import { CalendariComponent } from './calendari/calendari.component';
import { HomeComponent } from './home/home.component'; // Importa el HomeComponent standalone

const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) }, // Carrega HomeComponent
  { path: 'llistat', component: LlistatComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'calendari', component: CalendariComponent },
  { path: '**', redirectTo: '' } // Redirigeix rutes no trobades a HomeComponent
];

@NgModule({
  declarations: [
    AppComponent,
    LlistatComponent,
    NotesComponent,
    CalendariComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }) // useHash per suport a GitHub Pages
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
