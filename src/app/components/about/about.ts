import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  skills = [
    { name: 'ABOUT.SKILLS.FRONTEND', percentage: 90 },
    { name: 'ABOUT.SKILLS.BACKEND', percentage: 85 },
    { name: 'ABOUT.SKILLS.UIUX', percentage: 80 },
    { name: 'ABOUT.SKILLS.MOBILE', percentage: 75 }
  ];

  experiences = [
    { year: '2023 - Present', title: 'Senior Full Stack Developer', company: 'Tech Company' },
    { year: '2021 - 2023', title: 'Full Stack Developer', company: 'Digital Agency' },
    { year: '2019 - 2021', title: 'Frontend Developer', company: 'Startup Inc.' }
  ];

  // Méthode pour télécharger le CV
  downloadCV(): void {
    const cvUrl = 'documents/Bellili-Amir-CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Bellili-Amir-CV.pdf';
    link.click();
  }
}