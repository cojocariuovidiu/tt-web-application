import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, PatternValidator, EmailValidator } from '@angular/forms';
import { existingMobileNumberValidator } from './validatesettings';
import { DashboardService } from '../../services/dashboard.service';
import { User } from '../../../../model/user.model';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  patternStrongPassword: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_].{8,}';
  mobilePattern: RegExp = /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/;
  settingsForm1: FormGroup;
  settingsForm2: FormGroup;
  user: User = new User('','','');
  title: string = "Settings - Teachers Time";
  constructor(private dashboardService: DashboardService, private formBuilder: FormBuilder, private titleService: Title) { 
    this.createSettingsForm1();
    this.createSettingsForm2();
  }
  hide = true;
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.user = this.dashboardService.user;
  }

  createSettingsForm1(){
    this.settingsForm1 = this.formBuilder.group({
      Mobile: [null, Validators.compose([
        Validators.required,
        Validators.pattern(this.mobilePattern)
      ]),[existingMobileNumberValidator(this.dashboardService)]],
      Mobile2: [null, Validators.compose([
        Validators.required
      ])],
      Password: [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  createSettingsForm2(){
    this.settingsForm2 = this.formBuilder.group({
      NewPassword: [null, Validators.compose([
        Validators.required,
        Validators.pattern(this.patternStrongPassword)
      ])],
      NewPassword2: [null, Validators.compose([
        Validators.required,
        Validators.pattern(this.patternStrongPassword)
      ])],
      CurrentPassword: [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  sendSettingsForm1(){
    //console.log(this.settingsForm1.value);
    const body = {
      password: this.Password.value,
      mobile: this.Mobile.value
    }
    this.dashboardService.changeMobile(this.user.userID, body).subscribe(data => {
      if(data.success){
        //console.log(data);
        this.dashboardService.Logout();
      }
    });
    //this.resetSettingsForm1();
  }

  resetSettingsForm1(){
    this.settingsForm1.reset();
  }

  sendSettingsForm2(){
    //console.log(this.settingsForm2.value);
    //console.log(this.user.userID);
    const body = {
      password: this.CurrentPassword.value,
      newpassword: this.NewPassword.value
    }
    this.dashboardService.changePassword(this.user.userID, body).subscribe(data => {
      if(data.success){
        //console.log(data);
        this.dashboardService.Logout();
      }
      else{
        console.log('error');
      }
    });
    this.resetSettingsForm2();
  }

  resetSettingsForm2(){
    this.settingsForm2.reset();
  }


  get Mobile(){
    return this.settingsForm1.get('Mobile') as FormControl;
  }
  get Mobile2(){
    return this.settingsForm1.get('Mobile2') as FormControl;
  }
  get Password(){
    return this.settingsForm1.get('Password') as FormControl;
  }

  get NewPassword(){
    return this.settingsForm2.get('NewPassword') as FormControl;
  }
  get NewPassword2(){
    return this.settingsForm2.get('NewPassword2') as FormControl;
  }
  get CurrentPassword(){
    return this.settingsForm2.get('CurrentPassword') as FormControl;
  }

}
