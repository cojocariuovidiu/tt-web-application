import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, PatternValidator, EmailValidator } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { Course } from '../../../../model/course.model';
import { Comment } from '../../../../model/comment.model';
import { User } from '../../../../model/user.model';

@Component({
  selector: 'app-enrolleddetail',
  templateUrl: './enrolleddetail.component.html',
  styleUrls: ['./enrolleddetail.component.scss']
})
export class EnrolleddetailComponent implements OnInit {

  title: string = "Course Name - Teachers Time";
  paramID: string;
  routerParams: any;
  commentForm: FormGroup;
  rowspan: Observable<number>;
  syllabusicon: boolean = true;
  course: Course = new Course('','','','', '', '', '', '', []);
  user: User = new User('', '','');
  comments: Comment[] = [];
  ratingicon: boolean = true;
  sessionicon: boolean = true;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private dashboardService: DashboardService, private activatedRoute: ActivatedRoute, private titleService: Title, private observableMedia: ObservableMedia) {
    this.createCommentForm();
  }

  ngOnInit() {
    this.Title();
    this.setDisplay();
    this.getDetail();
    //this.getUser();
    this.user = this.dashboardService.user;
    //console.log(this.user);
  }

  Title(){
    this.titleService.setTitle(this.title);
  }

  setDisplay(){
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

  Video(id){
    this.router.navigate(['/dashboard/lecturevideo',id], { queryParams: { videoLink: this.course.courseFreeVideo, 'sessionID': '0', 'lectureID': '0' }});
  }

  getDetail(){
    this.routerParams = this.activatedRoute.params.subscribe(params => {
      this.paramID = params['id'];
      //console.log(this.paramID);
      this.dashboardService.getEnrolledDetail(this.paramID).subscribe((course: Course) => {
        //console.log(course);
        this.course = course;
        //console.log(this.course.courseID);
      })
    });
    this.getCourseComments();
  }
  
  createCommentForm(){
    this.commentForm = this.formBuilder.group({
      CommentBody: [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  getUser(){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.getProfile(usercred.tag).subscribe((profile: User) => {
      this.user = profile;
    });
  }

  sendCommentForm(){
    const comment = new Comment(this.CommentBody.value, this.course.courseID, this.user.name, this.user.userID, null, null);
    //console.log(comment);
    this.dashboardService.addComment(comment).subscribe(data => {
      if(data.success){
        //console.log(data.data);
        this.resetCommentForm();
        this.getCourseComments();
      }
    });
  }

  get CommentBody(){
    return this.commentForm.get('CommentBody') as FormControl;
  }

  resetCommentForm(){
    this.commentForm.reset();
  }

  getCourseComments(){
    //console.log(this.course.courseID);
    this.dashboardService.getComment(this.paramID).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }

  onDelete(id){
    //console.log(id);
    this.dashboardService.deleteComment(id).subscribe(data => {
      if(data.success){
        //console.log(data.data);
        this.getCourseComments();
      }
    })
  }
}


