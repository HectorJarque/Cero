import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROYECTOS_DEMO } from './portfolio.data';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  proyectos = PROYECTOS_DEMO;
}
