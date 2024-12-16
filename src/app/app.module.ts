import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { LlistatComponent } from './llistat/llistat.component';
import { CalendariComponent } from './calendari/calendari.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'llistat', component: LlistatComponent },
  { path: 'calendari', component: CalendariComponent },
  { path: 'notes', component: NotesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    HomeComponent,
    LlistatComponent,
    CalendariComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Afegeix HttpClientModule aquí
    RouterModule.forRoot(routes),
    FormsModule // Afegeix-lo aquí
  ],
  bootstrap: [HomeComponent] // O el component principal de la teva aplicació
})
export class AppModule {}
