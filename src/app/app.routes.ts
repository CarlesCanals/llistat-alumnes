import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LlistatComponent } from './llistat/llistat.component';
import { NotesComponent } from './notes/notes.component';
import { CalendariComponent } from './calendari/calendari.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'llistat', component: LlistatComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'calendari', component: CalendariComponent },
  { path: '**', redirectTo: '' }, // Per gestionar rutes desconegudes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Assegura't d'afegir useHash
  exports: [RouterModule]
})
export class AppRoutingModule { }
