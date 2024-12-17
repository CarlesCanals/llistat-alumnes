import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-llistat',
  standalone: true,
  imports: [CommonModule, FormsModule], // No inclou HttpClientModule
  templateUrl: './llistat.component.html',
  styleUrls: ['./llistat.component.scss']
})
export class LlistatComponent implements OnInit {
  alumnes: any[] = [];
  alumnesFiltrats: any[] = [];
  filtreText: string = '';

  constructor(private readonly http: HttpClient) {}


  ngOnInit(): void {
    this.http.get<any[]>('assets/llistat-alumnes.json').subscribe({
      next: (data) => {
        this.alumnes = data;
        this.alumnesFiltrats = data;
      },
      error: (err) => console.error('Error carregant el fitxer JSON:', err)
    });
  }

  filtraAlumnes(): void {
    const textFiltrat = this.filtreText.toLowerCase();
    this.alumnesFiltrats = this.alumnes.filter(alumne => 
      alumne.nom.toLowerCase().includes(textFiltrat) || 
      alumne.cognom.toLowerCase().includes(textFiltrat)
    );
  }
}
