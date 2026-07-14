import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import {
  CARACTERISTICAS_SAAS,
  COMPARATIVA_PLANES,
  INTEGRACIONES_SAAS,
  TESTIMONIOS_SAAS,
  FAQ_SAAS
} from './saas.data'

const PRECIO_MENSUAL = 12;
const PRECIO_ANUAL_MES = 9;

@Component({
  selector: 'app-saas',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './saas.component.html',
  styleUrl: './saas.component.css'
})
export class SaasComponent {
  caracteristicas = CARACTERISTICAS_SAAS;
  comparativa = COMPARATIVA_PLANES;
  integraciones = INTEGRACIONES_SAAS;
  testimonios = TESTIMONIOS_SAAS;
  preguntas = FAQ_SAAS;

  facturacionAnual = signal(true);
  preguntaAbierta = signal<number | null>(0);

  precioMes = computed(() =>
    this.facturacionAnual() ? PRECIO_ANUAL_MES : PRECIO_MENSUAL
  );

  ahorroAnual = computed(() =>
    (PRECIO_MENSUAL - PRECIO_ANUAL_MES) * 12
  );

  toggleFacturacion(): void {
    this.facturacionAnual.set(!this.facturacionAnual());
  }

  toggleFaq(index: number): void {
    this.preguntaAbierta.set(this.preguntaAbierta() === index ? null : index);
  }

  esBooleano(valor: string | boolean): valor is boolean {
    return typeof valor === 'boolean';
  }
}
