import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'app-lecturevideo',
  templateUrl: './lecturevideo.component.html',
  styleUrls: ['./lecturevideo.component.scss']
})
export class LecturevideoComponent implements OnInit {

  videoLink: string;
  routerParams: any;
  paramIDCourse: string;
  signedUrl: string;
  imagethumb: string;
  course: Course;
  // tslint:disable-next-line:no-inferrable-types
  commentForm: FormGroup;
  title: string = 'Lecture Name - Teachers Time';
  cols: Observable<number>;
  colspan: Observable<number>;
  panelOpenState = false;
  syllabusicon = true;
  ratingicon = true;
  sessionicon = true;


  /*lecture = [{lecturenumber: 'Lecture 1', lecturetitle : 'What Students Do in class' },
             {lecturenumber: 'Lecture 2', lecturetitle : 'Problems Teacher face'},
             {lecturenumber: 'Lecture 3', lecturetitle : 'Why students Misbehave '},
             {lecturenumber: 'Lecture 4', lecturetitle : ' Dealings With Misbehaviour'}];
  sessions = [{sessionnumber: 'session 1', sessionname: 'Problem Understanding', lectures : this.lecture},
             {sessionnumber: 'session 2', sessionname: 'Problem Understanding', lectures : this.lecture},
             {sessionnumber: 'session 3', sessionname: 'Problem Understanding', lectures : this.lecture},
             {sessionnumber: 'session 4', sessionname: 'Problem Understanding', lectures : this.lecture}];
  */messages = [
    {name: 'Classroom Managment' , details: 'yddt' },

    {name: 'Python' , details: 'tyyt' },
    {name: 'Python' , details: 'tyyt' },
    {name: 'Python' , details: 'tyyt' }
  ];
  constructor(private formBuilder: FormBuilder, private dashboardService: DashboardService, private activatedRoute: ActivatedRoute, private titleService: Title, private observableMedia: ObservableMedia) {
    this.createCommentForm();
   }

  ngOnInit() {
    this.routerParams = this.activatedRoute.params.subscribe(params => {
      this.paramIDCourse = params['idcourse'];
   });
   this.activatedRoute.queryParams
      .filter(params => params.videoLink)
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.videoLink = params.videoLink;
        console.log(this.videoLink); // popular
      });
      const usercred = JSON.parse(localStorage.getItem('usercred'));
      this.dashboardService.getSignedURL(this.videoLink, usercred.tag).subscribe(data => {
        console.log(data);
        this.signedUrl = data.signedUrl;
      })

      this.dashboardService.getEnrolledDetail(this.paramIDCourse).subscribe((course: Course) => {
        this.course = course;
        console.log(this.course);
      });
      
      this.dashboardService.getImage("/Courses/TestCourse/angular.jpg", usercred.tag).subscribe(data => {
        console.log(data);
        this.imagethumb = data.signedUrl;
      });
      
      this.titleService.setTitle(this.title);
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
      Comment: [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  sendCommentForm(){
    const comment = this.commentForm.value;
    console.log(comment);
  }

  resetProfileForm(){
    this.commentForm.reset();
  }


}
