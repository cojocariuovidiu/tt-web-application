import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { User } from '../../../../model/user.model';
import { DashboardService } from '../../services/dashboard.service';
import { Course } from '../../../../model/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.scss']
})
export class EnrolledComponent implements OnInit {
  user = new User('','','');
  rowspan: Observable<number>;
  cols: Observable<number>;
  courses: Course [] = [];
  isCourseHide: boolean;
  title: string = "Enrolled - Teachers Time";

  constructor(private router: Router, private dashboardService: DashboardService, private titleService: Title, private observableMedia: ObservableMedia) {  
    this.isCourseHide = false;
  }

  ngOnInit() {
    //this.user = this.dashboardService.user;
    this.getUser();
    this.setDisplay();
    this.Title();
    
  }

  hideCourse(){
    if(this.courses.length == 0){
      this.isCourseHide = true;
    }
    else{
      this.isCourseHide = false;
    }
  }

  Title(){
    this.titleService.setTitle(this.title);
  }
  
  setDisplay(){
    const cols_map = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 3],
      ['xl', 3]
    ]);
    const rowspan_map = new Map([
      ['xs', 16],
      ['sm', 16],
      ['md', 13],
      ['lg', 12],
      ['xl', 12]
    ]);
    let start_cols: number;
    let row_span: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return cols_map.get(change.mqAlias);
      }).startWith(start_cols);
    rowspan_map.forEach((rowspan, mqAlias) => {
        if (this.observableMedia.isActive(mqAlias)) {
         row_span = rowspan;
        }
      });
    this.rowspan = this.observableMedia.asObservable()
        .map(change => {
          return rowspan_map.get(change.mqAlias);
        }).startWith(row_span);
  }

  getUser(){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.getProfile(usercred.tag).subscribe((profile: User) => {
      this.user = profile;
      this.getEnrolled(profile.userID);
      this.hideCourse();
    });
  }

  getEnrolled(id) {
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.getEnrolledCourses(id, usercred.tag).subscribe((courses: Course[]) => {
      this.courses = courses;
    })
  }

  getCourseDetail(id) {
    //console.log(id);
    this.router.navigate(['/dashboard/enrolled', id]);
  }

}
