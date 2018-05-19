import { Injectable } from '@angular/core';
import { Course } from '../../../model/course.model';
import { map, catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Comment } from '../../../model/comment.model';
import { User } from '../../../model/user.model';
import { CoreService } from '../../../services/core.service';
import { ServerResponse } from '../../../model/response.model';

@Injectable()
export class CourseService {

  private courses: Course [] = [];
  private course: Course;
  private comments: Comment [] = [];
  constructor(private coreService: CoreService, private httpClient: HttpClient, private errorService: ErrorService) { }

  getCoursesTeacher(){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${"api/courses/public/all/teacher"}`;
    return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
    .pipe(map(response => {
      const courses: Course[] = response.course;
      //console.log(response);
      return courses;
    }),
    catchError(error => {
      this.errorService.handleError(error.error);
      return Observable.throwError(error);
    }));
  }

  getCoursesParent(){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');;
    const url = `${"api/courses/public/all/parent"}`;
    return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
    .pipe(map(response => {
      const courses: Course [] = response.course;
      //console.log(courses);
      return courses;    
    }),
    catchError(error => {
      this.errorService.handleError(error.error);
      return Observable.throwError(error);
    }));
  }

  getProfile(tag){
    if(tag == "local"){
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set("Authorization", token).set("Content-Type", "application/json");
      const url = `${"api/users/profile"}`;
      return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
      .pipe(map(response => {
        const user = response.user;
        //console.log(user);
        return user;
      }),
      catchError(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      }));
    }
    else{
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set("Authorization", token).set("Content-Type", "application/json");
      const url = `${"api/users/profile/social"}`;
      console.log(httpHeaders.get('Authorization'));
      return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
        .pipe(map(response => {
          const user = response.user;
          //console.log(user);
          return user;
        }),
        catchError(error => {
          this.errorService.handleError(error.error);
          return Observable.throw(error);
        }));
    }
  }

  getCoursesDetail(id){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${"api/courses/byId/"}${id}`;
    return this.httpClient.get<ServerResponse>(url, {headers: httpHeaders})
    .pipe(map(response => {
      const course: Course = response.coursedetail;
      //console.log(response);
      return course;
    }),
    catchError(error => {
      this.errorService.handleError(error.error);
      return Observable.throwError(error);
    }));
  }

  getauthToken(){
    const token = localStorage.getItem('id_token');
    return token;
  }

  enrollCourse(tag, courseid){
    if(tag == "social"){
      var cid = {
        courseid: courseid 
      }
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/enroll/course/social/"}${courseid}`;
      //console.log(url);
      return this.httpClient.put<ServerResponse>(url, cid, {headers: httpHeaders})
        .pipe(map(response => {
          const data = response;
          console.log(response);
          this.coreService.showMessage(response.msg);
          return data;  
        }),
        catchError(error => {
          this.errorService.handleError(error.error);
          return Observable.throw(error);
        }));
    }
    else{
      var cid = {
        courseid: courseid 
      }
      const token = this.getauthToken();
      let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
      const url = `${"api/courses/enroll/course/"}${courseid}`;
      return this.httpClient.put<ServerResponse>(url, cid, {headers: httpHeaders})
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

  addComment(comment){
    const token = this.getauthToken();
    let httpHeaders = new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json');
    const url = `${"api/courses/comment/add/"}${comment.commentCourse}`
    const body = JSON.stringify(comment);
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
