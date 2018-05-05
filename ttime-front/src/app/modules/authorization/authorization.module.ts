import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MaterialModule } from '../../material.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular5-social-login";
import { GOOGLE_APP_ID, FACEBOOK_APP_ID } from '../../config/config';
import { AuthorizationService } from './services/authorization.service';
import { AuthorizationComponent } from './authorization.component';
import { Title } from '@angular/platform-browser';
import { MatchpasswordDirective } from './components/registration/matchpassword.directive';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
	      provider: new FacebookLoginProvider(FACEBOOK_APP_ID)
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
	      provider: new GoogleLoginProvider(GOOGLE_APP_ID)
        },
      ]
  );
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    SocialLoginModule,
    AuthorizationRoutingModule
  ],
  providers:[
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    AuthorizationService,
    Title
  ],
  declarations: [
    AuthorizationComponent,
    LoginComponent,
    RegistrationComponent,
    MatchpasswordDirective
  ]
})
export class AuthorizationModule { }
