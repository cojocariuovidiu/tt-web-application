import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NotfoundComponent } from '../../components/notfound/notfound.component';
import { AuthorizationComponent } from './authorization.component';

const AUHTORIZATION_ROUTES: Routes = [
  {
    path: 'auth', 
    component: AuthorizationComponent,
    children:[
      {
        path: '',
        component: AuthorizationComponent,
        children:[
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
          },
          {
            path: '**',
            component: NotfoundComponent
          }
        ]
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(AUHTORIZATION_ROUTES)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
