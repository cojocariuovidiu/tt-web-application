import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminService } from './services/admin.service';
import { MaterialModule } from '../../material.module';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdmindashboardComponent, AdminloginComponent],
  providers:[
    AdminService
  ]
})
export class AdminModule { }
