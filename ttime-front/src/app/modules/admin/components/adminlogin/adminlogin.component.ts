import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, PatternValidator } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { existingEmailValidator } from './validatelogin';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  hide = true;
  mobilePattern: RegExp = /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/;//'[0-9]*.{11}';
  emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public loginForm : FormGroup;
  
  constructor(private adminService: AdminService, private router: Router, private titleService: Title, private formBuilder: FormBuilder) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      loginEmail: [null, 
        Validators.compose([
          //Validators.required,
          Validators.pattern(this.emailPattern)
        ]), [existingEmailValidator(this.adminService)]
      ],
      loginPassword: [null]
    });
  }

  sendLoginForm(){
    console.log(this.loginForm.value);
    const logincred = {
      email: this.loginEmail.value,
      password: this.loginPassword.value
    }
    this.adminService.loginAdmin(logincred).subscribe(data => {
      if(data.success){
        this.adminService.storeUserData(data.token);
        this.router.navigate(['/admin/dashboard']);
      }
      else{
        this.resetLoginForm();
        this.router.navigate(['/admin/login'])
      }
    });
    
  }

  resetLoginForm(){
    this.loginForm.reset();
  }

  get loginEmail(){
    return this.loginForm.get('loginEmail') as FormControl;
  }

  get loginPassword(){
    return this.loginForm.get('loginPassword') as FormControl;
  }

}
