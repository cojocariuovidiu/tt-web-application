import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import '../../../../material.module';
import { DashboardService } from '../../services/dashboard.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, PatternValidator, EmailValidator } from '@angular/forms';
import { Course } from '../../../../model/course.model';
import { Comment } from '../../../../model/comment.model';
import { User } from '../../../../model/user.model';

@Component({
  selector: 'app-lecturevideo',
  templateUrl: './lecturevideo.component.html',
  styleUrls: ['./lecturevideo.component.scss']
})
export class LecturevideoComponent implements OnInit {
  @ViewChild('endQuestion') endQuestion: ElementRef;
  @ViewChild('stepper') stepper: ElementRef;

  videoLink: string;
  navigationSubscription: any;
  totalScore: number;
  userScore: number;
  questionLength: number;
  routerParams: any;
  paramIDCourse: string;
  signedUrl: string;
  imagethumb: string;
  sessionID: number = 0;
  lectureID: number = 0;
  user: User = new User('', '', '');
  comments: Comment[] = [];
  // tslint:disable-next-line:no-inferrable-types
  commentForm: FormGroup;
  title: string = 'Lecture Name - Teachers Time';
  cols: Observable<number>;
  colspan: Observable<number>;
  panelOpenState = false;
  syllabusicon = true;
  ratingicon = true;
  sessionicon = true;
  valueOption1: string = "A";
  valueOption2: string = "B";
  valueOption3: string = "C";
  valueOption4: string = "D";
  valueAnswers: {

  }
  QuestionForm: FormGroup;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
  course = new Course('','','','','','','','',[]);

  constructor(private router: Router, private formBuilder: FormBuilder, private dashboardService: DashboardService, private activatedRoute: ActivatedRoute, private titleService: Title, private observableMedia: ObservableMedia) {
    
    this.createCommentForm();
    //this.createQuestionForm();
    
   }

  ngOnInit() {
    
    //this.getUser();
    
    this.user = this.dashboardService.user;
    this.getRouterParams();
    this.getQueryParams();
    this.getDetail();
    
    this.getVideo();
    this.getCourseComments();
    this.Title();
    this.setDisplay();
    this.createQuestionForm();
  }

  ngOnDestroy(){
    if (this.navigationSubscription) {  
      this.navigationSubscription.unsubscribe();
   }
  }

  

  Title(){
    this.titleService.setTitle(this.title);
  }

  getVideo(){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.getSignedURL(this.videoLink).subscribe(data => {
      //console.log(data);
      this.signedUrl = data.signedUrl;
    })

    this.dashboardService.getImage("/Courses/TestCourse/angular.jpg").subscribe(data => {
      //console.log(data);
      this.imagethumb = data.signedUrl;
    });
  }

  getRouterParams(){
    this.routerParams = this.activatedRoute.params.subscribe(params => {
      this.paramIDCourse = params['idcourse'];
   });
  }
  getQueryParams(){
   
   this.activatedRoute.queryParams
    .filter(params => params.videoLink)
    .subscribe(params => {
      //console.log(params); // {order: "popular"}

      this.videoLink = params.videoLink;
      this.sessionID = parseInt(params.sessionID);
      this.lectureID = parseInt(params.lectureID); 
      
    });
  }
  getDetail(){
    this.dashboardService.getEnrolledDetail(this.paramIDCourse).subscribe((course: Course) => {
      this.course = course;
      //console.log(this.sessionID);
      //console.log(this.lectureID);
      //console.log(course.courseSessions[0].lectures[0].lectureDetails);
      //var x = course.courseSessions[this.sessionID].lectures[this.lectureID].lectureDetails;
      //console.log(x);
      console.log(course.courseSessions[this.sessionID].lectures[this.lectureID].lectureQuestions.length);
      this.totalScore = course.courseSessions[this.sessionID].lectures[this.lectureID].lectureQuestions.length;
      this.questionLength = course.courseSessions[this.sessionID].lectures[this.lectureID].lectureQuestions.length;
    });
  }
  setDisplay(){
    const cols_map = new Map([
      ['xs', 11],
      ['sm', 11],
      ['md', 13],
      ['lg', 13],
      ['xl', 13]
    ]);
    const colspan_map = new Map([
      ['xs', 11],
      ['sm', 11],
      ['md', 2],
      ['lg', 3],
      ['xl', 3]
    ]);
    let start_cols: number;
    let col_span: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return cols_map.get(change.mqAlias);
      }).startWith(start_cols);

    colspan_map.forEach((colspan, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        col_span = colspan;
      }
    });
    this.colspan = this.observableMedia.asObservable()
      .map(change => {
        return colspan_map.get(change.mqAlias);
      }).startWith(col_span);
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

  createCommentForm(){
    this.commentForm = this.formBuilder.group({
      CommentBody: [null, Validators.compose([
        Validators.required
      ])]
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
  

  getUser(){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.getProfile(usercred.tag).subscribe((profile: User) => {
      this.user = profile;
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
    this.dashboardService.getComment(this.paramIDCourse).subscribe((comments: Comment[]) => {
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
  createQuestionForm(){
    this.QuestionForm = this.formBuilder.group({
      Option:[null, Validators.compose([
        Validators.required
      ])]
    });
  }

  sendQuestionForm(realAns){
    //console.log("Question Form",this.Option.value);
    //console.log(this.Answer.value);
    //console.log(Answer.nativeElement.value);
    console.log("real answer", realAns);
    const ans = this.Option.value;
    if(ans !== realAns){
      this.totalScore = this.totalScore - 1;
    }
    this.questionLength = this.questionLength - 1;
    if(this.questionLength === 0){
      let endDiv: HTMLElement = this.endQuestion.nativeElement as HTMLElement;
      endDiv.click();
    }
  }

  onQuestionEnd(stepper){
    this.userScore = this.totalScore;
    this.totalScore = this.course.courseSessions[this.sessionID].lectures[this.lectureID].lectureQuestions.length;
    this.questionLength = this.course.courseSessions[this.sessionID].lectures[this.lectureID].lectureQuestions.length;
    stepper.reset();
  }

  get Option(){
    return this.QuestionForm.get('Option') as FormControl;
  }
  

  resetQuestionForm(){
    this.QuestionForm.reset();
  }

  onLecture(session, lecture, link){
    this.router.navigate(['/dashboard/lecturevideo', this.course.courseID], { queryParams: { videoLink: link, 'sessionID': session, 'lectureID': lecture }});
    //console.log(session, lecture, link);
  }

}
