import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LlistatComponent } from './llistat/llistat.component';
import { NotesComponent } from './notes/notes.component';
import { CalendariComponent } from './calendari/calendari.component';

const routes: Routes = [
  { path: 'llistat-alumnes', component: AppComponent },
  { path: 'llistat-alumnes/llistat', component: LlistatComponent },
  { path: 'llistat-alumnes/notes', component: NotesComponent },
  { path: 'llistat-alumnes/calendari', component: CalendariComponent }
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
