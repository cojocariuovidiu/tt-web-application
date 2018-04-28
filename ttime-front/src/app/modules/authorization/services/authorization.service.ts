import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../../../model/user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Router } from '@angular/router';
import { CoreService } from '../../../services/core.service';

@Injectable()
export class AuthorizationService {

  constructor(private coreService: CoreService, private router: Router, private http: Http, private errorService: ErrorService) {

  }

  registerUser(user: User){
    let headers = new Headers();
    //const url = `${"http://localhost:8080/api/users/register"}`;
    const url = `${"/api/users/register"}`;
    const body = JSON.stringify(user);
    //console.log(body);
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

  loginUser(logincred){
    let headers = new Headers();
    //const url = `${"http://localhost:8080/api/users/authenticate"}`;
    const url = `${"/api/users/authenticate"}`;
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

  checkMobile(mobile){
    let headers = new Headers();
    //const url = `${"http://localhost:8080/api/users/check/mobile"}`;
    const url = `${"/api/users/check/mobile"}`;
    const logincred = {
      mobile: mobile
    }
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, logincred, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        //this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  storeUserData(token, user)
  {
    localStorage.setItem('id_token', token);
    const usercred = {
      tag: user.tag,
      verified: user.verified,
      type: user.type
    }
    localStorage.setItem('usercred', JSON.stringify(usercred));
  }

  registerSocialUser(user){
    let headers = new Headers();
    const url = `${"api/users/register/social"}`;
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify(user);
    //console.log(body);
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

  

}
