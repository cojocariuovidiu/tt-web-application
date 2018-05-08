import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Course } from '../model/course.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';


@Injectable()
export class CoreService {

  message = new EventEmitter<string>();
  authtoken: any;
  user: any;
  private courses: Course [] = [];
  constructor(private router: Router, private http: Http, private errorService: ErrorService) { }
  getCoursesTeacher() {
    let headers = new Headers();
    const url = `${"api/courses/public/all/teacher"}`;
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

  getCoursesParent(){
    let headers = new Headers();
    const url = `${"api/courses/public/all/parent"}`;
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
  
  canActivate()
  {
    if(this.checkLogin()){
      return true;
    }
    else{
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

  checkLogin()
  {
    this.getauthToken();
    if(this.authtoken)
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
    this.authtoken = token;
    return token;
  }
  
  Logout()
  {
    //console.log(token);
    //console.log(tag);
    this.authtoken = null;
    this.user = null;
    localStorage.clear();
    this.router.navigate(['/auth/login']);    
  }

  showMessage(msg){
    this.message.emit(msg);
  }

}
