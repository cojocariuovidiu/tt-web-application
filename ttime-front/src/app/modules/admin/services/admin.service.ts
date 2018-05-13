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
    /*headers.append('Content-Type', 'application/json');
    return this.http.post(url, body, {headers: headers})
    .map((response: Response) => {
      const data = response.json();
      this.coreService.showMessage(data.msg);
      return data;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    });*/
  }

}
