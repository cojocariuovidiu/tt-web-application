import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminService } from './services/admin.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdmindashboardComponent],
  providers:[
    AdminService
  ]
})
export class AdminModule { }
