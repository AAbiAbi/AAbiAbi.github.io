import { Component } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent {

  projects = [
    {
      title: "Project 1",
      description: "Description of project 1...",
      link: "https://github.com/your-username/project-1"
    },
    // ... more projects
  ];

}
