import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
  code: string;
  name: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
    { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
    { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' }
  ];

  constructor(
    private translate: TranslateService,
    private http: HttpClient
  ) {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    const langs = this.languages.map(l => l.code);
    this.translate.addLangs(langs);
    this.translate.setDefaultLang('en');

    // Charger les traductions manuellement
    langs.forEach(lang => {
      this.http.get(`i18n/${lang}.json`).subscribe(
        (translations: any) => {
          this.translate.setTranslation(lang, translations);
        }
      );
    });

    const savedLang = this.getSavedLanguage();
    const browserLang = this.translate.getBrowserLang();
    
    const langToUse = savedLang || 
                      (browserLang && langs.includes(browserLang) ? browserLang : 'en');
    
    this.setLanguage(langToUse);
  }

  private getSavedLanguage(): string | null {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('selectedLanguage');
    }
    return null;
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('selectedLanguage', lang);
    }
    
    const selectedLang = this.languages.find(l => l.code === lang);
    if (typeof document !== 'undefined') {
      document.documentElement.dir = selectedLang?.dir || 'ltr';
      document.documentElement.lang = lang;
    }
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || 'en';
  }

  getLanguageObject(code: string): Language | undefined {
    return this.languages.find(l => l.code === code);
  }
}