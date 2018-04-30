import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../model/course.model'
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss']
})
export class CourselistComponent implements OnInit {

  filter: Course = new Course(null, null, null, null, null);
  courses: Course [] = [];
  title = 'Courses - Teachers Time';
  rowspan: Observable<number>;
  cols: Observable<number>;
  constructor(private titleService: Title, private observableMedia: ObservableMedia, private courseService: CourseService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.getCourse();

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

  getCourse(){
    this.courseService.getCourses().subscribe((courses: Course []) => {
      this.courses = courses;
    });
    //console.log(this.courses);
  }

  onEnrollCourse(courseid){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    console.log(usercred.tag);
    console.log(courseid);
    this.courseService.enrollCourse(usercred.tag, courseid).subscribe(data => {
      if(data.success){
        console.log(data);
      }
      else{
        console.log('error');
      }
    })
  }
  hideLogin()
  {
    const token = this.getauthToken();
    if(token)
    {
      //console.log('true');
      return true;
    }
    else
    {
      //console.log('false');
      return false;
    }
  }

  getauthToken(){
    const token = localStorage.getItem('id_token');
     return token;
  }
}
