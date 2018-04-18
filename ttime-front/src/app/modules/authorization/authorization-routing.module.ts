import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';

const AUHTORIZATION_ROUTES: Routes = [
  {
    path: 'auth', component: AuthorizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(AUHTORIZATION_ROUTES)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
