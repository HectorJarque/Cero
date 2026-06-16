import { Injectable, signal } from '@angular/core';
import es from '../../i18n/es.json';

export type Lang =
  | 'es'
  | 'en'

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: Record<string, any> = es;
  private loaders: Record<Lang, () => Promise<any>> = {
    es: () => import('../../i18n/es.json'),
    en: () => import('../../i18n/en.json'),
  };

  private _lang = signal<Lang>('es');
  readonly lang = this._lang.asReadonly();

  constructor() {
    const savedLang = localStorage.getItem('lang') as Lang | null;

    if (savedLang) {
      this.setLang(savedLang);
      return;
    }

    const browserLang = navigator.language.split('-')[0] as Lang;
    const supported: Lang[] = [
      'es',
      'en',
    ];

    const lang = supported.includes(browserLang) ? browserLang : 'en';
    this.setLang(lang);
  }

  async setLang(lang: Lang): Promise<void> {
    if (lang === this._lang()) {
      return;
    }
    const module = await this.loaders[lang]();
    this.translations = module.default as Record<string, any>;
    this._lang.set(lang);
    localStorage.setItem('lang', lang);
  }

  translate(key: string): string {
    this._lang();
    const value = key
      .split('.')
      .reduce((obj: any, k) => obj?.[k], this.translations);
    return value ?? key;
  }
}
