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

  /*courses = [
    {name: 'Python' , details: 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.' },

    {name: 'Python' , details: 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.' },

    {name: 'Python' , details: 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.' },

    {name: 'Python' , details: 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.' },

    {name: 'Python' , details: 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.' },

    {name: 'Python' , details: 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.' }
  ];*/

  title: string = "Enrolled - Teachers Time";
  constructor(private router: Router, private dashboardService: DashboardService, private titleService: Title, private observableMedia: ObservableMedia) {  }

  ngOnInit() {
    this.getUser();
    this.titleService.setTitle(this.title);
    const cols_map = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 3],
      ['xl', 3]
    ]);
    const rowspan_map = new Map([
      ['xs', 13],
      ['sm', 10],
      ['md', 10],
      ['lg', 11],
      ['xl', 9]
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
    });
  }

  getEnrolled(id){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.getEnrolledCourses(id, usercred.tag).subscribe((courses: Course[]) => {
      this.courses = courses;
    })
  }

  getCourseDetail(id){
    console.log(id);
    this.router.navigate(['/dashboard/enrolled', id]);
  }

}
