import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContactService, ContactFormData, ApiResponse } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  contactForm: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  responseMessage = '';

  constructor(private contactService: ContactService) {}

  onSubmit(): void {
    // Validation basique
    if (!this.isFormValid()) {
      this.showError('Veuillez remplir tous les champs correctement');
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.contactService.sendContactMessage(this.contactForm).subscribe({
      next: (response: ApiResponse) => {
        console.log('Success:', response);
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.responseMessage = response.message;
        
        // Réinitialiser le formulaire
        this.resetForm();
        
        // Masquer le message de succès après 5 secondes
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      },
      error: (error: any) => {
        console.error('Error:', error);
        this.isSubmitting = false;
        this.submitError = true;
        this.responseMessage = error.error?.message || 'Une erreur est survenue. Veuillez réessayer.';
        
        // Masquer le message d'erreur après 5 secondes
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      }
    });
  }

  private isFormValid(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.contactForm.subject.trim() &&
      this.contactForm.message.trim() &&
      this.isValidEmail(this.contactForm.email)
    );
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private showError(message: string): void {
    this.submitError = true;
    this.responseMessage = message;
    setTimeout(() => {
      this.submitError = false;
    }, 3000);
  }

  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}