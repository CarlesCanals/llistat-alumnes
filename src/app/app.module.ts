import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LlistatComponent } from './llistat/llistat.component';
import { NotesComponent } from './notes/notes.component';
import { CalendariComponent } from './calendari/calendari.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'llistat', component: LlistatComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'calendari', component: CalendariComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LlistatComponent,
    NotesComponent,
    CalendariComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Importa les rutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
