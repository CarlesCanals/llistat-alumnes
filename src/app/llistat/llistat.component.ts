import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-llistat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './llistat.component.html',
  styleUrls: ['./llistat.component.scss']
})
export class LlistatComponent implements OnInit {
  alumnes: any[] = []; // Alumnes inicialitzats com a array buit
  alumnesFiltrats: any[] = []; // Array filtrat
  filtreText: string = ''; // Text de cerca

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Carrega el fitxer JSON des de la carpeta `assets`
    this.http.get<any[]>('assets/llistat-alumnes.json').subscribe({
      next: (data) => {
        this.alumnes = data;
        this.alumnesFiltrats = data; // Inicialitza la llista filtrada
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
