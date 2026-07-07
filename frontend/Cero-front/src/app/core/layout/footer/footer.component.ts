import { Component } from '@angular/core';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { RouterLink } from '@angular/router';
import { ENLACES_EJEMPLOS } from '../../../shared/data/navegacion.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  ejemplos = ENLACES_EJEMPLOS;
  anioActual = new Date().getFullYear();
}
