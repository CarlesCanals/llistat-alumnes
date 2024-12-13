import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LlistatComponent } from './llistat/llistat.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal
  { path: 'llistat', component: LlistatComponent } // Ruta per al llistat
];
