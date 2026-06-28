import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

import {
  AREAS_INFORMATIVAS,
  ESTADISTICAS_INFORMATIVAS,
  RECURSOS_INFORMATIVOS,
  FAQ_INFORMATIVA
} from './informativa.data';

@Component({
  selector: 'app-informativa',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './informativa.component.html',
  styleUrl: './informativa.component.css'
})
export class InformativaComponent {
  areas = AREAS_INFORMATIVAS;
  estadisticas = ESTADISTICAS_INFORMATIVAS;
  recursos = RECURSOS_INFORMATIVOS;
  preguntas = FAQ_INFORMATIVA;
}
