import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia } from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Course } from '../../model/course.model';
import { CoreService } from '../../services/core.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "Home - Teachers Time";
  cols: Observable<number>;
  rowspan: Observable<number>;
  introcols: Observable<number>;
  coursesTeacher: Course [] = [];
  coursesParent: Course [] = [];
  constructor(private router: Router, private coreService: CoreService, private titleService: Title, private observableMedia: ObservableMedia) { }

  ngOnInit() {
    this.redirectToDash();
    this.setDisplay();
    this.showCoursesParent();
    this.showCoursesTeacher();
    
  }

  redirectToDash(){
    const isDash = this.coreService.checkLogin();
    if(isDash){
      this.router.navigate(['/dashboard/enrolled']);
    }
  }

  showCoursesTeacher(){
    this.coreService.getCoursesTeacher().subscribe((courses: Course[]) => {
      this.coursesTeacher = courses;
      console.log(courses[0]._id);
    });
  }

  showCoursesParent(){
    this.coreService.getCoursesParent().subscribe((courses: Course[]) => {
      this.coursesParent = courses;
    });
  }

  setDisplay(){
    this.titleService.setTitle(this.title);
    const cols_map = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 3],
      ['xl', 3]
    ]);
    const intro_cols_map = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]);
    const rowspan_map = new Map([
      ['xs', 16],
      ['sm', 16],
      ['md', 13],
      ['lg', 12],
      ['xl', 12]
    ]);
    let start_cols: number;
    let intro_start_cols: number;
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

      intro_cols_map.forEach((introcols, mqAlias) => {
        if (this.observableMedia.isActive(mqAlias)) {
          intro_start_cols = introcols;
        }
      });
      this.introcols = this.observableMedia.asObservable()
        .map(change => {
          return intro_cols_map.get(change.mqAlias);
        }).startWith(intro_start_cols);

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

  getCourseDetail(id){
    this.router.navigate(['/courses/index', id]);
  }

}
