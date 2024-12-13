import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-llistat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './llistat.component.html',
  styleUrls: ['./llistat.component.scss']
})
export class LlistatComponent implements OnInit {
  alumnes: any[] = []; // Alumnes inicialitzats com a array buit

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Carrega el fitxer JSON des de la carpeta `assets`
    this.http.get<any[]>('assets/llistat-alumnes.json').subscribe({
      next: (data) => this.alumnes = data,
      error: (err) => console.error('Error carregant el fitxer JSON:', err)
    });
    
  }
}
