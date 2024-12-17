import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  alumnes: any[] = [];
  moduls: string[] = []; // Llista de mòduls
  selectedAlumne: any = null;

  constructor(private readonly http: HttpClient) {}


  ngOnInit(): void {
    this.loadAlumnes();
  }

  loadAlumnes(): void {
    this.http.get<any[]>('assets/llistat-alumnes.json').subscribe({
      next: (data) => {
        this.alumnes = data;
        this.extractModuls(); // Extreu els mòduls únics
      },
      error: (err) => {
        console.error('Error carregant dades:', err);
      }
    });
  }

  extractModuls(): void {
    const allModuls = this.alumnes.flatMap((alumne) => Object.keys(alumne.notes));
    this.moduls = Array.from(new Set(allModuls)); // Elimina duplicats
  }

  selectAlumne(alumne: any): void {
    this.selectedAlumne = alumne;
  }

  deselectAlumne(): void {
    this.selectedAlumne = null;
  }
}
