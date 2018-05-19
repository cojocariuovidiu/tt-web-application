import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, PatternValidator } from '@angular/forms';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';
import { AuthorizationService } from '../../services/authorization.service';
import { existingMobileNumberValidator } from './validatelogin';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  socialTag = "social";
  redirectURL = "invalid";
  hide = true;
  mobilePattern: RegExp = /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/;//'[0-9]*.{11}';
  public loginForm : FormGroup;
  title: string = "Login - Teachers Time";
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private titleService: Title, private authorizationService: AuthorizationService, private socialAuthService: AuthService, private formBuilder: FormBuilder) {
    this.createLoginForm();
  }

  ngOnInit() {
    this.getQueryParams();
    this.titleService.setTitle(this.title);
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
    //console.log(this.loginForm.value);
    const logincred = {
      mobile: this.loginMobile.value,
      password: this.loginPassword.value
    }
    this.authorizationService.loginUser(logincred).subscribe(data => {
      //console.log(data);
      if(data.success){
        this.authorizationService.storeUserData(data.token, data.user);
        if(this.redirectURL === "invalid"){
          this.router.navigate(['/dashboard']);
        }
        else{
          this.router.navigate([this.redirectURL]);
        }
        
      }
      else{
        this.resetLoginForm();
      }
    });
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
        //console.log(socialPlatform+" sign in data : " , userData);
        const user = new User(userData.name, userData.email, this.socialTag, null, null, null , null, userData.id, 'true');
        //console.log(user);
        this.authorizationService.registerSocialUser(user).subscribe(data => {
          if(data.success){
            this.authorizationService.storeUserData(data.token, data.user);
            if(this.redirectURL === "invalid"){
              this.router.navigate(['/dashboard']);
            }
            else{
              this.router.navigate([this.redirectURL]);
            }
          }
          else{
            console.log('error');
          }
        })
    });
  }

  getQueryParams(){
    this.activatedRoute.queryParams
     .subscribe(params => {
      //console.log(params); // {order: "popular"}
      this.redirectURL = params.redirect;
      //console.log("redirect",this.redirectURL);
    });
  }
}
