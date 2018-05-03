import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Course } from '../../../../model/course.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../../../../model/comment.model';
import { User } from '../../../../model/user.model';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.scss']
})
export class CoursedetailComponent implements OnInit {

  routerParams: any;
  paramID: string;
  title: string = "Course Name - Teachers Time";
  cols: Observable<number>;
  rowspan: Observable<number>;
  syllabusicon: boolean = true; 
  ratingicon: boolean = true;
  sessionicon: boolean = true;
  comments: Comment [] = [];
  course: Course = new Course('','','','');
  user: User = new User('','','');
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, private courseService: CourseService, private observableMedia: ObservableMedia ) { }

  ngOnInit() {
    this.setDisplay();
    this.Title();
    if(this.checkLogin()){
      this.getUser();
    }
    this.getDetail();
    this.getCourseComments();
   }
  Title(){
    this.titleService.setTitle(this.title);
  }
  getDetail(){
    this.routerParams = this.activatedRoute.params.subscribe(params => {
      this.paramID = params['id'];
      console.log(this.paramID);
      this.courseService.getCoursesDetail(this.paramID).subscribe((course: Course) => {
        this.course = course;
        console.log(course);
      });
   });
  }
  getCourseComments(){
    this.courseService.getComment(this.paramID).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  setDisplay() {
    const rowspan_map = new Map([
      ['xs', 7],
      ['sm', 7],
      ['md', 5],
      ['lg', 5],
      ['xl', 5]
    ]);
    let row_span: number;
    rowspan_map.forEach((rowspan, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
       row_span = rowspan;
      }
    });
    this.rowspan = this.observableMedia.asObservable()
      .map(change => {
        return rowspan_map.get(change.mqAlias);
      }).startWith(row_span);


  }
  sessioniconclick() {
    this.sessionicon = !this.sessionicon;
  }
  syllabusiconclick() {
    this.syllabusicon = !this.syllabusicon;
  }
  ratingiconclick() {
    this.ratingicon = !this.ratingicon;
  }

  getUser(){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.courseService.getProfile(usercred.tag).subscribe((profile: User) => {
      this.user = profile;
    });
  }

  checkLogin(){
    const token = localStorage.getItem('id_token');
    if(token)
    {
      return true;
    }
    else{
      return false;
    }
  }

  onDelete(id){
    console.log(id);
    this.courseService.deleteComment(id).subscribe(data => {
      if(data.success){
        console.log(data.data);
        this.getCourseComments();
      }
    })
  }

  onEnrollCourse(courseid){
    const isToken = this.checkLogin();
    if(isToken){
      const usercred = JSON.parse(localStorage.getItem('usercred'));
      console.log(usercred.tag);
      console.log(courseid);
      this.courseService.enrollCourse(usercred.tag, courseid).subscribe(data => {
        if(data.success){
          console.log(data);
        }
        else{
          console.log('error');
        }
      });
    }
    else{
      var redirectURL = `${"/courses/index/"}${courseid}`;
      this.router.navigate(['/auth/login'], { queryParams: { redirect: redirectURL }});
    }  
  }

}
