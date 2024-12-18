import { Routes } from '@angular/router';
import { LlistatComponent } from './llistat/llistat.component';
import { CalendariComponent } from './calendari/calendari.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';

export const routes: Routes = [  // Afegir 'export' aquí
  { path: 'llistat', component: LlistatComponent },
  { path: 'calendari', component: CalendariComponent },
  { path: 'notes', component: NotesComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
