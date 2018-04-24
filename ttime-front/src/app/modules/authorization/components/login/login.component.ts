import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, PatternValidator } from '@angular/forms';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';
import { AuthorizationService } from '../../services/authorization.service';
import { existingMobileNumberValidator } from './validatelogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  mobilePattern: RegExp = /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/;//'[0-9]*.{11}';
  public loginForm : FormGroup
  
  constructor(private authorizationService: AuthorizationService, private socialAuthService: AuthService, private formBuilder: FormBuilder) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      loginMobile: [null, 
        Validators.compose([
          //Validators.required,
          //Validators.pattern(this.emailPattern)
          Validators.pattern(this.mobilePattern)
        ]),
        [existingMobileNumberValidator(this.authorizationService)]
      ],
      loginPassword: [null]
    });
  }

  sendLoginForm(){
    console.log(this.loginForm.value);
    const logincred = {
      mobile: this.loginMobile.value,
      password: this.loginPassword.value
    }
    this.authorizationService.loginUser(logincred).subscribe(data => {
      //console.log(data);
    })
  }

  resetLoginForm(){
    this.loginForm.reset();
  }

  get loginMobile(){
    return this.loginForm.get('loginMobile') as FormControl;
  }

  get loginPassword(){
    return this.loginForm.get('loginPassword') as FormControl;
  }

  socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider)
      .then((userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
    });
  }

}
