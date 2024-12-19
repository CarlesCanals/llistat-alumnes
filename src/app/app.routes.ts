import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LlistatComponent } from './llistat/llistat.component';
import { CalendariComponent } from './calendari/calendari.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';

export const routes: Routes = [
  { path: 'llistat', component: LlistatComponent },
  { path: 'calendari', component: CalendariComponent },
  { path: 'notes', component: NotesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }) // Afegim `useHash` aquí
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
