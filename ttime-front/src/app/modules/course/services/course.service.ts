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

  getauthToken(){
    const token = localStorage.getItem('id_token');
    return token;
  }

  enrollCourse(tag, courseid){
    if(tag == "social"){
      var cid = {
        courseid: courseid 
      }
      let headers = new Headers();
      const url = `${"api/courses/enroll/course/social/"}${courseid}`;
      //console.log(url);
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.put(url, cid, {headers: headers})
        .map((response: Response) => {
          return response.json();  
        })
        .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
      });
    }
    else{
      var cid = {
        courseid: courseid 
      }
      let headers = new Headers();
      const url = `${"api/courses/enroll/course/"}${courseid}`;
      const token = this.getauthToken();
      //console.log(this.authtoken);
      //console.log(JSON.stringify(cid), uid);
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.put(url, cid, {headers: headers})
      .map((response: Response) => {
        return response.json();  
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
  }


}
