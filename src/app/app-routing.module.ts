import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

// ... Import other components as needed

const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'projects', component: ProjectSectionComponent },
  { path: 'projects/:projectId', component: ProjectDetailComponent },

  // ... Add other routes as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
