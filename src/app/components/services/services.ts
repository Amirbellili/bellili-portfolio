import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'SERVICES.WEB_DEV.TITLE',
      description: 'SERVICES.WEB_DEV.DESC'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'SERVICES.MOBILE_DEV.TITLE',
      description: 'SERVICES.MOBILE_DEV.DESC'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'SERVICES.UIUX.TITLE',
      description: 'SERVICES.UIUX.DESC'
    },
    {
      icon: 'fas fa-server',
      title: 'SERVICES.BACKEND.TITLE',
      description: 'SERVICES.BACKEND.DESC'
    },
    {
      icon: 'fas fa-cloud',
      title: 'SERVICES.CLOUD.TITLE',
      description: 'SERVICES.CLOUD.DESC'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'SERVICES.CONSULTING.TITLE',
      description: 'SERVICES.CONSULTING.DESC'
    }
  ];
}