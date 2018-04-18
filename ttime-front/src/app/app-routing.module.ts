import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const APP_ROUTES: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'auth', loadChildren: 'app/modules/authorization/authorization.module#AuthorizationModule'
    },
    {
        path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#AuthorizationModule'
    },
    {
        path: 'course', loadChildren: 'app/modules/course/course.module#AuthorizationModule'
    },
    {
        path: '**', component: NotfoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }