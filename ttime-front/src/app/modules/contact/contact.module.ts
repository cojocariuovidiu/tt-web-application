import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ContactComponent } from './contact.component';
import { AgmCoreModule } from '@agm/core';
import { ContactService } from './services/contact.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AgmCoreModule,
    FlexLayoutModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactusComponent, 
    AboutComponent, 
    TermsComponent, 
    PrivacyComponent, 
    ContactComponent
  ],
  providers:[
    ContactService
  ]
})
export class ContactModule { }
