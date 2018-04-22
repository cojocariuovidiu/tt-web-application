import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const AUHTORIZATION_ROUTES: Routes = [
  {
    path: '', 
    component: AuthorizationComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(AUHTORIZATION_ROUTES)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
