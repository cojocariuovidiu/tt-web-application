import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminService } from './services/admin.service';

const ADMIN_ROUTES: Routes = [
  {
    path: '', 
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin/login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: AdmindashboardComponent,
        canActivate: [AdminService]
      },
      {
        path: 'login',
        component: AdminloginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
