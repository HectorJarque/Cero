import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import {
  FRANJAS_HORARIAS,
  OCUPACION_SIMULADA,
  AFORO_MAXIMO_POR_FRANJA,
  PLATOS_DESTACADOS,
  TESTIMONIOS_RESERVAS
} from './reservas.data';

interface FranjaConDisponibilidad {
  hora: string;
  turno: 'comida' | 'cena';
  mesasLibres: number;
  disponible: boolean;
}

function hoyMasDias(dias: number): string {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + dias);
  return fecha.toISOString().split('T')[0];
}

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  platos = PLATOS_DESTACADOS;
  testimonios = TESTIMONIOS_RESERVAS;

  fechaMinima = hoyMasDias(0);
  fechaMaxima = hoyMasDias(60);

  fechaSeleccionada = signal(hoyMasDias(4));
  comensales = signal(2);
  horaSeleccionada = signal<string | null>(null);

  reservaConfirmada = signal(false);
  nombre = signal('');
  email = signal('');

  franjasConDisponibilidad = computed<FranjaConDisponibilidad[]>(() => {
    const ocupacionDelDia = OCUPACION_SIMULADA[this.fechaSeleccionada()] ?? {};

    return FRANJAS_HORARIAS.map(franja => {
      const ocupadas = ocupacionDelDia[franja.hora] ?? 0;
      const mesasLibres = Math.max(AFORO_MAXIMO_POR_FRANJA - ocupadas, 0);
      return {
        ...franja,
        mesasLibres,
        disponible: mesasLibres > 0
      };
    });
  });

  franjasComida = computed(() =>
    this.franjasConDisponibilidad().filter(f => f.turno === 'comida')
  );

  franjasCena = computed(() =>
    this.franjasConDisponibilidad().filter(f => f.turno === 'cena')
  );

  puedeConfirmar = computed(() =>
    !!this.horaSeleccionada() &&
    this.nombre().trim().length > 1 &&
    this.email().trim().includes('@')
  );

  onFechaChange(valor: string): void {
    this.fechaSeleccionada.set(valor);
    this.horaSeleccionada.set(null);
    this.reservaConfirmada.set(false);
  }

  onComensalesChange(valor: number): void {
    this.comensales.set(valor);
    this.reservaConfirmada.set(false);
  }

  seleccionarHora(hora: string): void {
    this.horaSeleccionada.set(hora);
    this.reservaConfirmada.set(false);
  }

  onNombreChange(valor: string): void {
    this.nombre.set(valor);
  }

  onEmailChange(valor: string): void {
    this.email.set(valor);
  }

  confirmarReserva(): void {
    if (this.puedeConfirmar()) {
      this.reservaConfirmada.set(true);
    }
  }

  hacerOtraReserva(): void {
    this.reservaConfirmada.set(false);
    this.horaSeleccionada.set(null);
    this.nombre.set('');
    this.email.set('');
  }
}
