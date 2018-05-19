import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../../../model/user.model';
import { map, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Router } from '@angular/router';
import { CoreService } from '../../../services/core.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ServerResponse } from '../../../model/response.model';

@Injectable()
export class AuthorizationService {

  constructor(private httpClient: HttpClient, private coreService: CoreService, private router: Router, private errorService: ErrorService) {

  }

  registerUser(user: User){
    let headers = new HttpHeaders();
    //const url = `${"http://localhost:8080/api/users/register"}`;
    const url = `${"/api/users/register"}`;
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<ServerResponse>(url, user, {headers: headers})
      .pipe(map(response => {
        const data = response;
        this.coreService.showMessage(response.msg);
        return data;
      }),
      catchError(error => {
        this.errorService.handleError(error);
        return Observable.throw(error);
      }));
  }

  loginUser(logincred){
    let headers = new HttpHeaders();
    //const url = `${"http://localhost:8080/api/users/authenticate"}`;
    const url = `${"/api/users/authenticate"}`;
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<ServerResponse>(url, logincred, {headers: headers})
      .pipe(map(response => {
        const data = response;
        this.coreService.showMessage(response.msg);
        return data;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
  }

  checkMobile(mobile){
    let headers = new HttpHeaders();
    //const url = `${"http://localhost:8080/api/users/check/mobile"}`;
    const url = `${"/api/users/check/mobile"}`;
    const logincred = {
      mobile: mobile
    }
    headers.set('Content-Type', 'application/json');
    return this.httpClient.post<ServerResponse>(url, logincred, {headers: headers})
      .pipe(map(response => {
        const data = response;
        //this.coreService.showMessage(response.msg);
        return data;
      }),
      catchError(error => {
        //this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
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
    let headers = new HttpHeaders();
    const url = `${"api/users/register/social"}`;
    headers.set('Content-Type', 'application/json');
    //const body = JSON.stringify(user);
    //console.log(body);
    return this.httpClient.post<ServerResponse>(url, user, {headers: headers})
      .pipe(map(response => {
        const data = response;
        this.coreService.showMessage(response.msg);
        return data;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
  }
}
