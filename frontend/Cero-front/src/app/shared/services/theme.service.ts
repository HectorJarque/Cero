import { Injectable, signal, effect } from '@angular/core';

export type Tema = 'claro' | 'oscuro';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  tema = signal<Tema>('claro');

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.tema() === 'oscuro' ? 'dark' : 'light');
    });
  }

  toggleTema(): void {
    this.tema.set(this.tema() === 'claro' ? 'oscuro' : 'claro');
  }
}
