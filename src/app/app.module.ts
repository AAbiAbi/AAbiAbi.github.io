import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { BlogComponent } from './blog/blog.component';
import { CourseReviewComponent } from './course-review/course-review.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
  { path: 'projects', component: ProjectSectionComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'reviews', component: CourseReviewComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' } // default route
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectSectionComponent,
    BlogComponent,
    CourseReviewComponent,
    SidebarComponent,
    IntroductionComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
