import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EnrolledComponent } from './components/enrolled/enrolled.component';
import { EnrolleddetailComponent } from './components/enrolleddetail/enrolleddetail.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { LecturevideoComponent } from './components/lecturevideo/lecturevideo.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/enrolled',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'enrolled',
        component: EnrolledComponent
      },
      {
        path: 'changepassword',
        component: ChangepasswordComponent
      },
      {
        path: 'enrolled/:id',
        component: EnrolleddetailComponent
      },
      {
        path: 'lecturevideo/:idcourse',
        component: LecturevideoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
