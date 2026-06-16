import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { Lang, TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private translationService = inject(TranslationService);

  get currentLang(): Lang {
    return this.translationService.lang();
  }

  toggleLanguage(): void {
    const newLang: Lang = this.currentLang === 'es' ? 'en' : 'es';
    this.translationService.setLang(newLang);
  }
}
