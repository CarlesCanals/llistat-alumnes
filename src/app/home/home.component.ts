import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, // Especificar que es un componente standalone
  imports: [CommonModule], // Importa módulos necesarios, como CommonModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
