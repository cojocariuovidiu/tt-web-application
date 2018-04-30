import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { DashboardService } from '../../services/dashboard.service';
import { Course } from '../../../../model/course.model';


@Component({
  selector: 'app-enrolleddetail',
  templateUrl: './enrolleddetail.component.html',
  styleUrls: ['./enrolleddetail.component.scss']
})
export class EnrolleddetailComponent implements OnInit {

  title: string = "Course Name - Teachers Time";
  paramID: string;
  routerParams: any;
  rowspan: Observable<number>;
  syllabusicon: boolean = true;
  course: Course;
  ratingicon: boolean = true;
  sessionicon: boolean = true;
  /*lecture = [{lecturenumber: 'Lecture 1', lecturetitle : 'What Students Do in class' },
             {lecturenumber: 'Lecture 2', lecturetitle : 'Problems Teacher face'},
             {lecturenumber: 'Lecture 3', lecturetitle : 'Why students Misbehave '},
             {lecturenumber: 'Lecture 4', lecturetitle : ' Dealings With Misbehaviour'}];
  sessions = [{sessionnumber: 'session 1', sessionname: 'Problem Understanding', lectures : this.lecture},
             {sessionnumber: 'session 2', sessionname: 'Problem Understanding', lectures : this.lecture},
             {sessionnumber: 'session 3', sessionname: 'Problem Understanding', lectures : this.lecture},
             {sessionnumber: 'session 4', sessionname: 'Problem Understanding', lectures : this.lecture}];
  */messages = [
    {name: 'Classroom Managment' , details: 'In computer programming, a comment is a programmer-readable explanation or annotation in the source code of a computer program. They are added with the purpose of making the source code easier for humans to understand, and are generally ignored by compilers and interpreters.' },

    {name: 'Python' , details: 'In computer programming, a comment is a programmer-readable explanation or annotation in the source code of a computer program. They are added with the purpose of making the source code easier for humans to understand, and are generally ignored by compilers and interpreters.' },
    {name: 'Python' , details: 'tyyt' },
    {name: 'Python' , details: 'tyyt' },
    {name: 'Python' , details: 'tyyt' }
  ];
  constructor(private router: Router, private dashboardService: DashboardService, private activatedRoute: ActivatedRoute, private titleService: Title, private observableMedia: ObservableMedia) { }

  ngOnInit() {
    
    this.titleService.setTitle(this.title);
    const rowspan_map = new Map([
      ['xs', 5],
      ['sm', 5],
      ['md', 3],
      ['lg', 3],
      ['xl', 3]
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

    this.routerParams = this.activatedRoute.params.subscribe(params => {
      this.paramID = params['id'];
      this.dashboardService.getEnrolledDetail(this.paramID).subscribe((course: Course) => {
        console.log(course);
        this.course = course;
      })
   });

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
    this.router.navigate(['/dashboard/lecturevideo',id], { queryParams: { videoLink: '/Courses/TestCourse/LectureQ.mp4' }});
  }
}


