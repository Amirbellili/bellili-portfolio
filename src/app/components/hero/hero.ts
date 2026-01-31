import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface TechIcon {
  name: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  techStackRow1: TechIcon[] = [
    { name: 'Angular', icon: 'icons/angular.png', title: 'Angular' },
    { name: 'Laravel', icon: 'icons/laravel.png', title: 'Laravel' },
    { name: 'MongoDB', icon: 'icons/mongodb.png', title: 'MongoDB' },
    { name: 'Bootstrap', icon: 'icons/bootstrap.png', title: 'Bootstrap' },
    { name: 'Firebase', icon: 'icons/firebase.png', title: 'Firebase' },
    { name: 'Flutter', icon: 'icons/flutter.png', title: 'Flutter' },
    { name: 'PostgreSQL', icon: 'icons/postgresql.png', title: 'PostgreSQL' },
    { name: 'Node.js', icon: 'icons/nodejs.png', title: 'Node.js' }
  ];

  techStackRow2: TechIcon[] = [
    { name: 'React', icon: 'icons/react.png', title: 'React' },
    { name: 'TypeScript', icon: 'icons/typescript.png', title: 'TypeScript' },
    { name: 'Nest.js', icon: 'icons/nestjs.png', title: 'Nest.js' },
    { name: 'Android', icon: 'icons/android.png', title: 'Android' },
    { name: 'MySQL', icon: 'icons/mysql.png', title: 'SQL' },
    { name: 'Unity', icon: 'icons/unity.png', title: 'Unity' },
    { name: 'Git', icon: 'icons/git.png', title: 'Git' }
  ];

  designTools: TechIcon[] = [
    { name: 'Figma', icon: 'icons/figma.png', title: 'Figma' },
    { name: 'Adobe', icon: 'icons/adobe.png', title: 'Adobe Suite' }
  ];
}