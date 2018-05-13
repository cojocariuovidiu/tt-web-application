import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CoreService } from './services/core.service';



const APP_ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'auth', loadChildren: 'app/modules/authorization/authorization.module#AuthorizationModule'
    },
    {
        path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule', canActivate: [CoreService],
        runGuardsAndResolvers: `always`
    },
    {
        path: 'courses', loadChildren: 'app/modules/course/course.module#CourseModule'
    },
    {
        path: 'us', loadChildren: 'app/modules/contact/contact.module#ContactModule'
    },
    {
        path: 'admin', loadChildren: 'app/modules/admin/admin.module#AdminModule'
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: NotfoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES,  {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: `reload`})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
