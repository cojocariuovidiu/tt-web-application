import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../../../model/user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
//import { ErrorService } from './error.service';

@Injectable()
export class AuthorizationService {

  constructor(private http: Http) {

  }

  registerUser(user: User){
    let headers = new Headers();
    //const url = `${"http://localhost:8080/api/users/register"}`;
    const url = `${"/api/users/register"}`;
    /*const body = {
      name: user.name,
      email: user.email,
      type: user.type,
      tag: user.tag,
      mobile: user.mobile,
      password: user.password
    }*/
    const body = JSON.stringify(user);
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        //this.errorService.showMsg(error.json());
        return Observable.throw(error.json());
      });
  }

  loginUser(logincred){
    let headers = new Headers();
    //const url = `${"http://localhost:8080/api/users/authenticate"}`;
    const url = `${"/api/users/authenticate"}`;
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, logincred, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        //this.errorService.showMsg(error.json());
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
        //this.errorService.showMsg(error.json());
        return Observable.throw(error.json());
      });
  }
}
