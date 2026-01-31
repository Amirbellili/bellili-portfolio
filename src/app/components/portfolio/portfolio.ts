import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {
  projects = [
    {
      title: 'PORTFOLIO.PROJECTS.TICKET.TITLE',
      category: 'PORTFOLIO.PROJECTS.TICKET.CATEGORY',
      image: 'images/ticket-platform.png',
      description: 'PORTFOLIO.PROJECTS.TICKET.DESC',
      technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Express'],
      githubLink: 'https://github.com/Amirbellili/ticket-platform-back',
    },
    {
      title: 'PORTFOLIO.PROJECTS.ECOMMERCE.TITLE',
      category: 'PORTFOLIO.PROJECTS.ECOMMERCE.CATEGORY',
      image: 'images/ecommerce.png',
      description: 'PORTFOLIO.PROJECTS.ECOMMERCE.DESC',
      technologies: ['Laravel', 'PHP', 'Blade', 'MySQL'],
      githubLink: 'https://github.com/Amirbellili/ecommerce-laravel12',
    },
    {
      title: 'PORTFOLIO.PROJECTS.PORTFOLIO_SITE.TITLE',
      category: 'PORTFOLIO.PROJECTS.PORTFOLIO_SITE.CATEGORY',
      image: 'images/profile.jpg',
      description: 'PORTFOLIO.PROJECTS.PORTFOLIO_SITE.DESC',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      githubLink: 'https://github.com/Amirbellili',
      liveLink: 'http://localhost:4200'
    }
  ];
}