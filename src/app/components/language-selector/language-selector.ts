import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateConfigService, Language } from '../../services/translate-config.service';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './language-selector.html',
  styleUrls: ['./language-selector.scss']
})
export class LanguageSelectorComponent implements OnInit {
  languages: Language[] = [];
  currentLanguage: Language | undefined;
  isOpen = false;

  constructor(private translateConfigService: TranslateConfigService) {}

  ngOnInit(): void {
    this.languages = this.translateConfigService.languages;
    this.updateCurrentLanguage();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(lang: Language): void {
    this.translateConfigService.setLanguage(lang.code);
    this.updateCurrentLanguage();
    this.isOpen = false;
  }

  private updateCurrentLanguage(): void {
    const currentLangCode = this.translateConfigService.getCurrentLanguage();
    this.currentLanguage = this.translateConfigService.getLanguageObject(currentLangCode);
  }

  closeDropdown(): void {
    this.isOpen = false;
  }
}