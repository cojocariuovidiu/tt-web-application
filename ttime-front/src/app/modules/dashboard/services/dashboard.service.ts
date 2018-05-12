import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../../../model/user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../../../services/error.service';
import { Router } from '@angular/router';
import { Course } from '../../../model/course.model';
import { Comment } from '../../../model/comment.model';
import { CoreService } from '../../../services/core.service';


@Injectable()
export class DashboardService {
  
  courses: Course [] = [];
  course: Course;
  public user: User;
  comments: Comment [] = [];
  constructor(private coreService: CoreService, private router: Router, private http: Http, private errorService: ErrorService) { }

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
        let profile = new User (user.user.name, user.user.email, user.user.tag, user.user.mobile, null, user.user.type, user.user._id, null, user.user.verified
          ,user.user.institutename, user.user.institutetype, user.user.gender, user.user.location
        );
        this.user = profile;
        //console.log(this.user);
        return profile;
      })
      .catch((error: Response) => {
        if(error.status == 401){
          this.router.navigate(['/auth/login']);
        }
        else{
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
        }
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
        this.user = profile;
        //console.log(this.user);
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
        //console.log(this.courses);
        return transformedCourses;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
  }

  getImage(imageLink){
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

  getSignedURL(videoLink){
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
    
    addComment(comment){
      let headers = new Headers();
      const url = `${"api/courses/comment/add/"}${comment.commentCourse}`
      const body = JSON.stringify(comment);
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.post(url, body, {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
      
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

  editProfile(user, id, tag){
    if(tag == "local"){
      let headers = new Headers();
      const url = `${"api/users/profile/edit/"}${id}`
      const body = JSON.stringify(user);
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.patch(url, body ,{headers: headers})
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
    else{
      let headers = new Headers();
      const url = `${"api/users/profile/social/edit/"}${id}`
      const body = JSON.stringify(user);
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.patch(url, body ,{headers: headers})
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
        //this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  changePassword(id, body){
    let headers = new Headers();
    const url = `${"api/users/change/password/"}${id}`
    const token = this.getauthToken();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');
    return this.http.patch(url, body ,{headers: headers})
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

  changeMobile(id, body){
    let headers = new Headers();
    const url = `${"api/users/change/mobile/"}${id}`
    const token = this.getauthToken();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');
    return this.http.patch(url, body ,{headers: headers})
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

  

  scoringCourse(body, userID, courseID){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    if(usercred.tag === "local"){
      let headers = new Headers();
      const url = `${"api/courses/score/"}${courseID}`;
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.post(url, body, {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
    else{
      let headers = new Headers();
      const url = `${"api/courses/score/social/"}${courseID}`;
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.post(url, body, {headers: headers})
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

  checkScoringCourse(body, userID, courseID){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    if(usercred.tag === "local"){
      let headers = new Headers();
      const url = `${"api/courses/score/check/"}${courseID}`;
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.post(url, body, {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
    }
    else{
      let headers = new Headers();
      const url = `${"api/courses/score/check/social/"}${courseID}`;
      const token = this.getauthToken();
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/json');
      return this.http.post(url, body, {headers: headers})
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

  Logout()
  {
    this.coreService.Logout();
  }
}