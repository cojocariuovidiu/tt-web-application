import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, PatternValidator, EmailValidator } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { User } from '../../../../model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  hide = 'true';
  localTag = 'local';
  socialTag = 'social';
  typeTeacher = 'teacher';
  typeParent = 'parent';
  genderMale = 'male';
  genderFemale = 'female';
  typeBoth = 'both';
  namePattern = '[a-z]*.{3,}';
  mobilePattern: RegExp = /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/;
  emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  show = true;
 cols: Observable<number>;
usertest = [
  {fullname: 'Prottoy Paul', Email : 'hasd@dhfdja.com' , Phone: '12231213', Gender: 'Male' , Address: ' sdndshfksdhfkdsjfkjdhdfsjdsfhs',
  Institute: ' bxdbd College'},
];
  institute = [
  {value: 'school', viewValue: 'School'},
  {value: 'college', viewValue: 'College'},
  {value: 'university', viewValue: 'University'}
];

 profileForm: FormGroup;
 user = new User('','','');
  title = "Profile - Teachers Time";
  constructor(private formBuilder: FormBuilder, private observableMedia: ObservableMedia, private dashboardService: DashboardService, private titleService: Title) {
    this.user = this.dashboardService.user;
    //this.getUser();
    this.createProfileForm();
  }

 ngOnInit() {
  this.titleService.setTitle(this.title);
   const cols_map = new Map([
     ['xs', 1],
     ['sm', 1],
     ['md', 2],
     ['lg', 3],
     ['xl', 3]
   ]);
   let start_cols: number;
   cols_map.forEach((cols, mqAlias) => {
     if (this.observableMedia.isActive(mqAlias)) {
       start_cols = cols;
     }
   });
   this.cols = this.observableMedia.asObservable()
     .map(change => {
       return cols_map.get(change.mqAlias);
     }).startWith(start_cols);
 }

  getUser() {
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.getProfile(usercred.tag).subscribe((profile: User) => {
      this.user = profile;
    });
  }

  createProfileForm() {
    this.profileForm = this.formBuilder.group({
      Name: [null, Validators.compose([
        
        Validators.pattern(this.namePattern)
      ])],
      Email: [null, Validators.compose([
       
        Validators.pattern(this.emailPattern)
      ])],
      Mobile: [null, Validators.compose([
       Validators.pattern(this.mobilePattern)
      ])],
      Location: [
        null
      ],
      InstituteType: [
        null
      ],
      InstituteName: [
        null
      ],
      Scope: [null],
      Gender: [null]
    });
  }

  sendProfileForm() {
    const user = new User(this.Name.value, this.Email.value, null, this.Mobile.value, null, this.Scope.value, null, null, null, 
      this.InstituteName.value, this.InstituteType.value, this.Gender.value, this.Location.value);
    //console.log(this.user.userID);
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.editProfile(user, this.user.userID, usercred.tag).subscribe(data => {
      if(data.success){
        //console.log(data);
        this.resetProfileForm();
      }
      else{
        console.log("error");
      }
    });
  }

  resetProfileForm() {
    this.profileForm.reset();
  }


  get Name() {
    return this.profileForm.get('Name') as FormControl;
  }

  get Email() {
    return this.profileForm.get('Email') as FormControl;
  }
  get Mobile() {
    return this.profileForm.get('Mobile') as FormControl;
  }
  get Scope() {
    return this.profileForm.get('Scope') as FormControl;
  }
  get Location() {
    return this.profileForm.get('Location') as FormControl;
  }
  get InstituteType() {
    return this.profileForm.get('InstituteType') as FormControl;
  }
  get InstituteName() {
    return this.profileForm.get('InstituteName') as FormControl;
  }
  get Gender() {
    return this.profileForm.get('Gender') as FormControl;
  }

  onView(){
    this.getUser();
    this.show = !this.show;
  }

  checkTag(){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    if(usercred.tag == "local"){
      return false;
    }
    else{
      return true;
    }
  }

}
