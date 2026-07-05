import { Component, signal } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import {
  BENEFICIOS_TALLER,
  PROGRAMA_TALLER,
  TESTIMONIOS_TALLER,
  FAQ_TALLER
} from './landing.data';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  beneficios = BENEFICIOS_TALLER;
  programa = PROGRAMA_TALLER;
  testimonios = TESTIMONIOS_TALLER;
  preguntas = FAQ_TALLER;

  preguntaAbierta = signal<number | null>(0);

  toggleFaq(index: number): void {
    this.preguntaAbierta.set(this.preguntaAbierta() === index ? null : index);
  }
}
