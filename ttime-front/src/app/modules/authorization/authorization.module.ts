import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MaterialModule } from '../../material.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AuthorizationRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ]
})
export class AuthorizationModule { }
