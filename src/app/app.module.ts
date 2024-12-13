import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LlistatComponent } from './llistat/llistat.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule], // Afegeix HttpClientModule
  bootstrap: [AppComponent]
})
export class AppModule {}
