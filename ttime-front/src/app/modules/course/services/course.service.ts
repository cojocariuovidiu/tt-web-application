import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Course } from '../../../model/course.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Comment } from '../../../model/comment.model';
import { User } from '../../../model/user.model';
import { CoreService } from '../../../services/core.service';

@Injectable()
export class CourseService {

  private courses: Course [] = [];
  private course: Course;
  private comments: Comment [] = [];
  constructor(private coreService: CoreService, private http: Http, private errorService: ErrorService) { }

  getCourses(){
    let headers = new Headers();
    const url = `${"api/courses/public/all"}`;
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers})
    .map((response: Response) => {
      const courses = response.json().course;
      //console.log(courses);
      let transformedCourses: Course[] = [];
      for (let course of courses) {
        transformedCourses.push(new Course(
          course.title,
          course.preview, 
          course.details,
          course.scope,
          course.freevideo, null, course._id, course.price, null
        ));
      }
      this.courses = transformedCourses;
      //console.log(this.courses);
      return transformedCourses;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    });
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
        let profile = new User (user.user.name, user.user.email, user.user.tag, user.user.mobile, null, user.user.type, user.user._id, null, user.user.verified
          ,user.user.institutename, user.user.institutetype, user.user.gender, user.user.location);
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
        let profile = new User (user.user.name, user.user.email, user.user.tag, user.user.mobile, null, user.user.type, user.user._id, null, user.user.verified
          ,user.user.institutename, user.user.institutetype, user.user.gender, user.user.location);
        //console.log(profile);
        return profile;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
  }

  getCoursesDetail(id){
    let headers = new Headers();
    const url = `${"api/courses/byId/"}${id}`;
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers})
    .map((response: Response) => {
      const course = response.json().course;
      //console.log(course);
      let transformedCourse: Course;
      
        transformedCourse = new Course(
          course.title,
          course.preview, 
          course.details,
          course.scope,
          course.freevideo, null, course._id, course.price, course.sessions
        );
      
      this.course = transformedCourse;
      //console.log(this.course);
      return transformedCourse;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    });
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
      let headers = new Headers();
      const url = `${"api/courses/enroll/course/social/"}${courseid}`;
      //console.log(url);
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.put(url, cid, {headers: headers})
        .map((response: Response) => {
          this.coreService.showMessage(response.json().msg);
          return response.json();  
        })
        .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
      });
    }
    else{
      var cid = {
        courseid: courseid 
      }
      let headers = new Headers();
      const url = `${"api/courses/enroll/course/"}${courseid}`;
      const token = this.getauthToken();
      //console.log(this.authtoken);
      //console.log(JSON.stringify(cid), uid);
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.put(url, cid, {headers: headers})
      .map((response: Response) => {
        this.coreService.showMessage(response.json().msg);
        return response.json();  
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
  }

  getComment(id){
    let headers = new Headers();
    const url = `${"api/courses/comment/"}${id}`
    headers.append('Content-Type', 'application/json');
    return this.http.get(url,{headers: headers})
    .map((response: Response) => {
      const comments = response.json().comment;
      //console.log(comments);
      let transformedComments: Comment[] = [];
      for (let comment of comments) {
        transformedComments.push(new Comment(
          comment.commentBody,
          comment.commentCourse, 
          comment.commentUser,
          comment.commentUserID, 
          comment.commentDate,
          comment._id
        ));
      }
      this.comments = transformedComments;
      return transformedComments;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    });
  }

  deleteComment(id){
    let headers = new Headers();
    const url = `${"api/courses/comment/delete/"}${id}`
    const token = this.getauthToken();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');
    return this.http.delete(url, {headers: headers})
    .map((response: Response) => {
      const data = response.json();
      return data;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    });
  }


}
