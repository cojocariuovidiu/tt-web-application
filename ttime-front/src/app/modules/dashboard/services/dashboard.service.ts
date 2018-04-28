import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../../../model/user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Router } from '@angular/router';
import { Course } from '../../../model/course.model';

@Injectable()
export class DashboardService {
  
  courses: Course [] = [];
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

  getEnrolledCourses(id, tag){
    if(tag == "local"){
      let headers = new Headers();
      const url = `${"api/courses/all/enrolled/"}${id}`;
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.get(url, {headers: headers})
      .map((response: Response) => {
        const courses = response.json().course.courses;
        //console.log(courses);
        let transformedCourses: Course[] = [];
        for (let course of courses) {
          transformedCourses.push(new Course(
            course.title,
            course.preview, 
            course.details,
            course.scope,
            course.freevideo, null, course._id, course.price, course.sessions
          ));
        }
        this.courses = transformedCourses;
        return transformedCourses;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
    else{
      let headers = new Headers();
      const url = `${"api/courses/all/enrolled/social/"}${id}`;
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.get(url, {headers: headers})
      .map((response: Response) => {
        const courses = response.json().course.courses;
        //console.log(courses);
        let transformedCourses: Course[] = [];
        for (let course of courses) {
          transformedCourses.push(new Course(
            course.title,
            course.preview, 
            course.details,
            course.scope,
            course.freevideo, null, course._id, course.price, course.sessions
          ));
        }
        this.courses = transformedCourses;
        console.log(this.courses);
        return transformedCourses;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
  }

  getImage(imageLink, tag){
    let headers = new Headers();
      const url = `${"api/courses/object/image/url"}`;
      const token = this.getauthToken();
      const body = {
        imageLink: imageLink
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

  getSignedURL(videoLink, tag){
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
}

}
