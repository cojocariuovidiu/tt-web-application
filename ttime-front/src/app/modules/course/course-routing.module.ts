import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';

const COURSE_ROUTES: Routes = [
  {
    path: 'course', component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(COURSE_ROUTES)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
