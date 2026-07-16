import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { PROYECTOS_HOME, PROYECTO_REAL } from './home.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  proyectos = PROYECTOS_HOME;
  proyectoReal = PROYECTO_REAL;
  proyectoRealUrlSegura: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.proyectoRealUrlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(this.proyectoReal.url);
  }
}
