import { Component } from '@angular/core';
import { PROJECTS } from '../../data/project-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
}
