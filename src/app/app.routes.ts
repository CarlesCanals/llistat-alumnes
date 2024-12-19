import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LlistatComponent } from './llistat/llistat.component';
import { NotesComponent } from './notes/notes.component';
import { CalendariComponent } from './calendari/calendari.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'llistat', component: LlistatComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'calendari', component: CalendariComponent },
  { path: '**', redirectTo: '' }, // Redirigeix a l'inici si la ruta no existeix
];
