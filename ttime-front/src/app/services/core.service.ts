import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../model/course.model';
import { map, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerResponse } from '../model/response.model';


@Injectable()
export class CoreService {

  message = new EventEmitter<object>();
  authtoken: any;
  user: any;
  private courses: Course [] = [];
  constructor(private httpClient: HttpClient, private router: Router, private errorService: ErrorService) { }

  getCoursesTeacher(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${"api/courses/public/all/teacher"}`;
    return this.httpClient.get<ServerResponse>(url, {headers: headers})
    .pipe(map(response => {
      const courses: Course[] = response.course;
      //console.log(response);
      return courses;
    }),
    catchError(error => {
      this.errorService.handleError(error.error);
      return Observable.throw(error);
    }));
  }
  
  getCoursesParent(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${"api/courses/public/all/parent"}`;
    return this.httpClient.get<ServerResponse>(url, {headers: headers})
    .pipe(map(response => {
      const courses: Course [] = response.course;
      //console.log(courses);
      return courses;    
    }),
    catchError(error => {
      this.errorService.handleError(error.error);
      return Observable.throw(error);
    }));
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

  LogoutAdmin(){
    this.authtoken = null;
    this.user = null;
    localStorage.clear();
    this.router.navigate(['/admin/login']);   
  }

  

  showMessage(msg, msgType?){
    const message = {
      msg: msg,
      msgType: msgType || "Success"
    }
    this.message.emit(message);
  }

}