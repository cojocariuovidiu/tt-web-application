import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Course } from '../../../model/course.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {

  private courses: Course [] = [];
  constructor(private http: Http) { }

  getCourses(){
    let headers = new Headers();
    const url = `${"api/courses/all"}`;
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers})
    .map((response: Response) => {
      const courses = response.json().course;
      //console.log(courses);
      let transformedCourses: Course[] = [];
      for (let course of courses) {
        transformedCourses.push(new Course(
          course._id,
          course.title,
          course.details,
          course.scope, course.price, course.lectures
        ));
      }
      this.courses = transformedCourses;
      //console.log(this.courses);
      return transformedCourses;
    })
    .catch((error: Response) => {
      //this.errorService.showMsg(error.json());
      return Observable.throw(error.json());
    });
  }




}
