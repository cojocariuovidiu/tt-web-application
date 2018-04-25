import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../../../model/user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Router } from '@angular/router';

@Injectable()
export class DashboardService {
  
  constructor(private router: Router, private http: Http, private errorService: ErrorService) { }

  getauthToken(){
    const token = localStorage.getItem('id_token');
    return token;
  }
  getProfile(tag){
    if(tag == "local"){
      let headers = new Headers();
      const url = `${"api/users/profile"}`;
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.get(url, {headers: headers})
      .map((response: Response) => {
        const user = response.json();
        //console.log(user.user);
        let profile = new User (user.user.name, user.user.email, user.user.tag, user.user.mobile, null, user.user.type, user.user._id, null, user.user.verified);
        //console.log(profile);
        return profile;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
    else{
      let headers = new Headers();
      const url = `${"api/users/profile/social"}`;
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.get(url, {headers: headers})
      .map((response: Response) => {
        const user = response.json();
        //console.log(user.user);
        let profile = new User (user.user.name, user.user.email, user.user.tag, user.user.mobile, null, user.user.type, user.user._id, null, user.user.verified);
        //console.log(profile);
        return profile;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
  }
}
