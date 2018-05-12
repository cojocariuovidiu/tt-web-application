import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { CoreService } from '../../../services/core.service';

@Injectable()
export class ContactService {

  constructor(private coreService: CoreService, private http: Http, private errorService: ErrorService) { }

  contactUs(body){
    let headers = new Headers();
    const url = `${"api/users/contact/us"}`;
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

}
