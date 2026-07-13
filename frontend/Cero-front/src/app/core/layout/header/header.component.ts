import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { Lang, TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { ENLACES_EJEMPLOS } from '../../../shared/data/navegacion.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, RouterLink, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private translationService = inject(TranslationService);
  private themeService = inject(ThemeService);
  private elementRef = inject(ElementRef);

  ejemplos = ENLACES_EJEMPLOS;

  menuMovilAbierto = signal(false);
  ejemplosAbierto = signal(false);

  get currentLang(): Lang {
    return this.translationService.lang();
  }

  get temaActual() {
    return this.themeService.tema();
  }

  toggleLanguage(): void {
    const newLang: Lang = this.currentLang === 'es' ? 'en' : 'es';
    this.translationService.setLang(newLang);
  }

  toggleTema(): void {
    this.themeService.toggleTema();
  }

  toggleEjemplos(): void {
    this.ejemplosAbierto.set(!this.ejemplosAbierto());
  }

  toggleMenuMovil(): void {
    this.menuMovilAbierto.set(!this.menuMovilAbierto());
  }

  cerrarTodo(): void {
    this.ejemplosAbierto.set(false);
    this.menuMovilAbierto.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.ejemplosAbierto.set(false);
    }
  }
}
