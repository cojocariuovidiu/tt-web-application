import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Router } from '@angular/router';
import { CoreService } from '../../../services/core.service';

@Injectable()
export class AdminService {

  constructor(private coreService: CoreService, private router: Router, private http: Http, private errorService: ErrorService) { }

  uploadCourse(course){
    let headers = new Headers();
    //const url = `${"http://localhost:8080/api/users/register"}`;
    const url = `${"/api/admins/add/new/course"}`;
    const body = course;
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, body, {headers: headers})
    .map((response: Response) => {
      const data = response.json();
      this.coreService.showMessage(data.msg);
      return data;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    });
  }

  loginAdmin(logincred){
    let headers = new Headers();
    //const url = `${"http://localhost:8080/api/users/authenticate"}`;
    const url = `${"/api/admins/authenticate/admin"}`;
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, logincred, {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        this.coreService.showMessage(data.msg);
        return data;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  checkAdminEmail(email){
    let headers = new Headers();
    //const url = `${"http://localhost:8080/api/users/check/mobile"}`;
    const url = `${"/api/admins/check/email"}`;
    const logincred = {
      email: email
    }
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, logincred, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        //this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
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
