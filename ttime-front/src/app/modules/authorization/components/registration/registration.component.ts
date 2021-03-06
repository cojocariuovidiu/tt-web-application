import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, PatternValidator, EmailValidator } from '@angular/forms';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';
import { AuthorizationService } from '../../services/authorization.service';
import { existingMobileNumberValidator } from './validateregister';
import { User } from '../../../../model/user.model';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  patternStrongPassword: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_].{8,}';
  mobilePattern: RegExp = /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/;///^[0-9]*.{11,11}$/;
  namePattern: string = '[a-z]*.{3,}';
  emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  hide = true;
  hide2 = true;
  localTag = 'local';
  socialTag = 'social';
  typeTeacher = 'teacher';
  typeParent = 'parent';
  typeBoth = 'both';
  selected = this.selected;
  registerForm: FormGroup;
  title: string = "Register - Teachers Time";

  constructor(private router: Router, private titleService: Title, private authorizationService: AuthorizationService, private socialAuthService: AuthService, private formBuilder: FormBuilder) {
    this.createRegisterForm();
  }
  
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      Name: [null, Validators.compose([
        Validators.required,
        Validators.pattern(this.namePattern)
      ])],
      Mobile: [null, Validators.compose([
        Validators.required,
        Validators.pattern(this.mobilePattern)
      ]), [existingMobileNumberValidator(this.authorizationService)]],
      Email: [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern)
      ])],
      Password: [null, Validators.compose([
        Validators.required,
        Validators.pattern(this.patternStrongPassword)
      ])],
      Password2: [null, Validators.required],
      Scope: [null, Validators.required]
    });
  }

  sendRegisterForm(){
    //console.log(this.registerForm.value);
    const user = new User(this.Name.value, this.Email.value, this.localTag, this.Mobile.value, 
      this.Password.value, this.Scope.value, null, null, 'true');
    this.authorizationService.registerUser(user).subscribe(data => {
      if(data.success){
        //console.log(data);
        this.router.navigate(['/auth/login']);
      }
      else{
        console.log('error');
      }
    });
  }

  resetRegisterForm(){
    this.registerForm.reset();
  }


  get Name(){
    return this.registerForm.get('Name') as FormControl;
  }
  get Mobile(){
    return this.registerForm.get('Mobile') as FormControl;
  }
  get Email(){
    return this.registerForm.get('Email') as FormControl;
  }
  get Password(){
    return this.registerForm.get('Password') as FormControl;
  }
  get Password2(){
    return this.registerForm.get('Password2') as FormControl;
  }
  get Scope(){
    return this.registerForm.get('Scope') as FormControl;
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
        //console.log(socialPlatform+" sign in data : " , userData);
        const user = new User(userData.name, userData.email, this.socialTag, null, null, null , null, userData.id, 'true');
        //console.log(user);
        this.authorizationService.registerSocialUser(user).subscribe(data => {
          if(data.success){
            this.authorizationService.storeUserData(data.token, data.user);
            this.router.navigate(['/dashboard/enrolled']);
          }
          else{
            console.log('error');
          }
        })
    });
  }
}
