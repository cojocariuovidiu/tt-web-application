import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';

const COURSE_ROUTES: Routes = [
  {
    path: '', 
    component: CourseComponent,
    children: [
      {
        path: '',
        redirectTo: '/courses/index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: CourselistComponent
      },
      {
        path: 'index/:id',
        component: CoursedetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(COURSE_ROUTES)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
