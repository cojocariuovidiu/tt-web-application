import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Course } from '../../../model/course.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';

@Injectable()
export class CourseService {

  private courses: Course [] = [];
  constructor(private http: Http, private errorService: ErrorService) { }

  getCourses(){
    let headers = new Headers();
    const url = `${"api/courses/public/all"}`;
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers})
    .map((response: Response) => {
      const courses = response.json().course;
      //console.log(courses);
      let transformedCourses: Course[] = [];
      for (let course of courses) {
        transformedCourses.push(new Course(
          course.title,
          course.preview, 
          course.details,
          course.scope,
          course.freevideo, null, course._id, course.price, null
        ));
      }
      this.courses = transformedCourses;
      //console.log(this.courses);
      return transformedCourses;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    });
  }




}
