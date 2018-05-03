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
  typeBoth = 'both';
  namePattern = '[a-z]*.{3,}';
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
    this.createProfileForm();
  }

 ngOnInit() {
  this.titleService.setTitle(this.title);
  this.getUser();
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
        Validators.required,
        Validators.pattern(this.namePattern)
      ])],
      Email: [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern)
      ])],
      Location: [
        null, Validators.compose([
          Validators.required
        ])
      ],
      InstituteType: [
        null, Validators.compose([
          Validators.required
        ])
      ],
      InstituteName: [
        null, Validators.compose([
          Validators.required
        ])
      ],
      Scope: [null, Validators.required]
    });
  }

  sendProfileForm() {
    const user = this.profileForm.value;
    console.log(user);
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
  get Scope() {
    return this.profileForm.get('Scope') as FormControl;
  }

}
