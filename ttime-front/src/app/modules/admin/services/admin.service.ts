import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Router } from '@angular/router';
import { CoreService } from '../../../services/core.service';
import { catchError, map } from 'rxjs/operators';
import { ServerResponse } from '../../../model/response.model';

@Injectable()
export class AdminService {

  constructor(private coreService: CoreService, private router: Router, private httpClient: HttpClient, private errorService: ErrorService) { }

  uploadCourse(course){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    //const url = `${"http://localhost:8080/api/users/register"}`;
    const url = `${"/api/admins/add/new/course"}`;
    //const body = course;
    //console.log(body);
    return this.httpClient.post<ServerResponse>(url, course, {headers: httpHeaders})
    .pipe(map(response => {
      const data = response;
      this.coreService.showMessage(data.msg);
      return data;
    }),
      catchError(error => {
      this.errorService.handleError(error.error);
      return Observable.throw(error);
    }));
  }

  getCourse(){
    const token = this.getauthToken();
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
    const url = `${"api/admins/all/courses"}`;
    //return this.
    //TODO
  }

  loginAdmin(logincred){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    //const url = `${"http://localhost:8080/api/users/authenticate"}`;
    const url = `${"/api/admins/authenticate/admin"}`;
    return this.httpClient.post<ServerResponse>(url, logincred, {headers: httpHeaders})
      .pipe(map(response => {
        const data = response;
        this.coreService.showMessage(data.msg);
        return data;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
  }

  checkAdminEmail(email){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    //const url = `${"http://localhost:8080/api/users/check/mobile"}`;
    const url = `${"/api/admins/check/email"}`;
    const logincred = {
      email: email
    }
    return this.httpClient.post<ServerResponse>(url, logincred, {headers: httpHeaders})
      .pipe(map(response => {
        const data = response;
        return data
      }),
      catchError(error => {
        //this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      }));
  }

  storeUserData(token)
  {
    localStorage.setItem('id_token', token);
    const usercred = {
      tag: "admin",
      verified: "true",
      type: "admin"
    }
    localStorage.setItem('usercred', JSON.stringify(usercred));
  }

  canActivate()
  {
    if(this.checkLogin()){
      return true;
    }
    else{
      this.router.navigate(['/admin/login']);
      return false;
    }
  }

  getauthToken(){
    const token = localStorage.getItem('id_token');
    return token;
  }
  checkLogin()
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
}
