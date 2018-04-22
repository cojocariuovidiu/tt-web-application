import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const CONTACT_ROUTES: Routes = [
  {
    path: '', 
    component: ContactComponent,
    children: [
      {
        path: '',
        redirectTo: '/us/contact',
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactusComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(CONTACT_ROUTES)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
