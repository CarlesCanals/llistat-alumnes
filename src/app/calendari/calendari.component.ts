import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-calendari',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendari.component.html',
  styleUrls: ['./calendari.component.scss']
})
export class CalendariComponent implements OnInit {
  alumnes: any[] = [];
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  daysOfWeek: string[] = ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte', 'Diumenge'];
  daysInMonth: number[] = [];
  emptyDays: number[] = [];
  modulsSegonaAvaluacio: { [key: string]: string } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAlumnes();
    this.updateCalendar();
  }

  loadAlumnes(): void {
    this.http.get<any[]>('assets/llistat-alumnes.json').subscribe({
      next: (data) => {
        this.alumnes = data;
        if (this.alumnes.length > 0) {
          this.modulsSegonaAvaluacio = this.alumnes[0].moduls_segona_avaluacio; // Assumeix que és igual per a tots
        }
      },
      error: (err) => console.error('Error carregant dades:', err)
    });
  }

  updateCalendar(): void {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.emptyDays = Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 });
    this.daysInMonth = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);
  }

  get currentMonthName(): string {
    return new Date(this.currentYear, this.currentMonth).toLocaleString('ca', { month: 'long' });
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.updateCalendar();
  }

  previousMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.updateCalendar();
  }

  getExamsForDate(day: number): string[] {
    const date = new Date(this.currentYear, this.currentMonth, day).toISOString().split('T')[0];
    const exams = [];

    for (const [modul, examDate] of Object.entries(this.modulsSegonaAvaluacio)) {
      if (examDate === date) {
        exams.push(`${modul}`);
      }
    }

    return exams;
  }

  getDayClass(day: number): string {
    const date = new Date(this.currentYear, this.currentMonth, day);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 6) return 'saturday'; // Dissabte
    if (dayOfWeek === 0) return 'sunday';   // Diumenge
    return '';
  }
}
