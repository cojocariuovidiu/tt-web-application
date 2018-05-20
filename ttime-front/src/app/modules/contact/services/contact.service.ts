import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { CoreService } from '../../../services/core.service';
import { ServerResponse } from '../../../model/response.model';

@Injectable()
export class ContactService {

  constructor(private coreService: CoreService, private httpClient: HttpClient, private errorService: ErrorService) { }

  contactUs(body){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${"api/users/contact/us"}`;
    return this.httpClient.post<ServerResponse>(url, body, {headers: httpHeaders})
    .pipe(map(response => {
      const data = response;
      this.onMessage(data.msg);
      return data;
    }),
    catchError(error => {
      this.errorService.handleError(error.error);
      return Observable.throw(error);
    }));
  }

  onMessage(msg){
    this.coreService.showMessage(msg);
  }

}
