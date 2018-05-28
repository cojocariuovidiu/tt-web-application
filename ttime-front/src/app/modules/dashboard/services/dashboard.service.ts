import { Injectable, EventEmitter, Output } from '@angular/core';
import { User } from '../../../model/user.model';
import { map, catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Router } from '@angular/router';
import { Course } from '../../../model/course.model';
import { Comment } from '../../../model/comment.model';
import { CoreService } from '../../../services/core.service';
import { ServerResponse } from '../../../model/response.model';


@Injectable()
export class DashboardService {
  
  courses: Course [] = [];
  course: Course;
  public user: User;
  comments: Comment [] = [];
  constructor(private coreService: CoreService, private router: Router, private httpClient: HttpClient, private errorService: ErrorService) { }

  getauthToken(){
    const token = localStorage.getItem('id_token');
    return token;
  }
  getProfile(tag){
    if(tag == "local"){
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/users/profile"}`;
      return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
      .pipe(map(response => {
        const user: User = response.user;
        //console.log(user.user);
        this.user = user;
        //console.log(this.user);
        return user;
      }),
      catchError(error => {
        if(error.status == 401){
          this.router.navigate(['/auth/login']);
        }
        else{
          this.errorService.handleError(error.error);
          return Observable.throw(error);
        }
      }));
    }
    else{
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/users/profile/social"}`;
      return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
      .pipe(map(response => {
        const user: User = response.user;
        //console.log(user.user);
        this.user = user;
        //console.log(this.user);
        return user;
      }),
      catchError(error => {
        if(error.status == 401){
          this.router.navigate(['/auth/login']);
        }
        else{
          this.errorService.handleError(error.error);
          return Observable.throw(error);
        }
      }));
    }
  }

  getEnrolledCourses(id, tag){
    if(tag == "local"){
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/all/enrolled/"}${id}`;
      return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
      .pipe(map(response => {
        const courses: Course[] = response.course;
        //console.log(courses);
        return courses;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }
    else{
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/all/enrolled/social/"}${id}`;
      return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
      .pipe(map(response => {
        const courses: Course[] = response.course;
        return courses;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }
  }

  getImage(imageLink){
    const token = this.getauthToken();
    let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
    const url = `${"api/courses/object/image/url"}`;
    const body = {
      imageLink: imageLink
    }
    return this.httpClient.post<ServerResponse>(url, body ,{headers: httpHeaders})
    .pipe(map(response => {
      return response;
    }),
    catchError(error => {
      this.errorService.handleError(error.error);
      return Observable.throw(error);
    }));
  }

  getSignedURL(videoLink){
    const token = this.getauthToken();
    let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
    const url = `${"api/courses/object/video/url"}`;
    const body = {
      videoLink: videoLink
    }
    //console.log(body);
    return this.httpClient.post<ServerResponse>(url, body ,{headers: httpHeaders})
    .pipe(map(response => {
      return response;
    }),
    catchError(error => {
      this.errorService.handleError(error.error);
      return Observable.throw(error);
    }));
  }
  /*getSignedURL(videoLink, tag){
    if(tag == "local"){
      let headers = new Headers();
      const url = `${"api/courses/object/video/url"}`;
      const token = this.getauthToken();
      const body = {
        videoLink: videoLink
      }
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.post(url, body ,{headers: headers})
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
    else{
      let headers = new Headers();
      const url = `${"api/courses/object/video/url/social"}`;
      const token = this.getauthToken();
      const body = {
        videoLink: videoLink
      }
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.post(url, body ,{headers: headers})
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
}*/
  getEnrolledDetail(id){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      const url = `${"api/courses/byId/"}${id}`;
      return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
      .pipe(map(response => {
        const course = response.coursedetail;
        //console.log(course);
        return course;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }
    
    addComment(comment){
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/comment/add/"}${comment.commentCourse}`
      //const body = JSON.stringify(comment);
      return this.httpClient.post<ServerResponse>(url, comment, {headers: httpHeaders})
      .map(response => {
        const data = response;
        return data;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
      
    }

    getComment(id){
      let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      const url = `${"api/courses/comment/"}${id}`;
      return this.httpClient.get<ServerResponse>(url,{headers: httpHeaders})
      .pipe(map(response => {
        const comments: Comment[] = response.comment;
        //console.log(comments);
        return comments;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }
  
    deleteComment(id){
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/comment/delete/"}${id}`;
      return this.httpClient.delete<ServerResponse>(url, {headers: httpHeaders})
      .pipe(map(response => {
        const data = response;
        return data;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }

  editProfile(user, id, tag){
    if(tag == "local"){
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/users/profile/edit/"}${id}`
      //const body = JSON.stringify(user);
      return this.httpClient.patch<ServerResponse>(url, user ,{headers: httpHeaders})
      .pipe(map(response => {
        const data = response;
        this.coreService.showMessage(data.msg);
        return data;
      }),
      catchError(error => {
        this.errorService.handleError(error.errror);
        return Observable.throw(error);
      }));
    }
    else{
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/users/profile/social/edit/"}${id}`
      return this.httpClient.patch<ServerResponse>(url, user ,{headers: httpHeaders})
      .pipe(map(response => {
        const data = response;
        this.coreService.showMessage(data.msg);
        return data;
      }),
      catchError(error => {
        this.errorService.handleError(error.errror);
        return Observable.throw(error);
      }));
    }
  }
  
  checkMobile(mobile){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    //const url = `${"http://localhost:8080/api/users/check/mobile"}`;
    const url = `${"/api/users/check/mobile"}`;
    const logincred = {
      mobile: mobile
    }
    return this.httpClient.post<ServerResponse>(url, logincred, {headers: httpHeaders})
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

  changePassword(id, body){
    const token = this.getauthToken();
    let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
    const url = `${"api/users/change/password/"}${id}`
    return this.httpClient.patch<ServerResponse>(url, body ,{headers: httpHeaders})
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

  changeMobile(id, body){
    const token = this.getauthToken();
    let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
    const url = `${"api/users/change/mobile/"}${id}`;
    return this.httpClient.patch<ServerResponse>(url, body, {headers: httpHeaders})
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

  scoringCourse(body, userID, courseID){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    if(usercred.tag === "local"){
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/score/"}${courseID}`;
      return this.httpClient.post<ServerResponse>(url, body, {headers: httpHeaders})
      .pipe(map(response => {
        return response;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }
    else{
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/score/social/"}${courseID}`;
      return this.httpClient.post<ServerResponse>(url, body, {headers: httpHeaders})
      .pipe(map(response => {
        const data = response;
        return data;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }
  }

  checkScoringCourse(body, userID, courseID){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    if(usercred.tag === "local"){
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/score/check/"}${courseID}`;
      return this.httpClient.post<ServerResponse>(url, body, {headers: httpHeaders})
      .pipe(map(response => {
        return response;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }
    else{
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/score/check/social/"}${courseID}`;
      return this.httpClient.post<ServerResponse>(url, body, {headers: httpHeaders})
      .pipe(map(response => {
        return response;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }
  }

  Logout()
  {
    this.coreService.Logout();
  }
}