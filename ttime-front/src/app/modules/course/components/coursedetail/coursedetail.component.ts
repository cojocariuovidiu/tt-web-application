import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Course } from '../../../../model/course.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

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
  course: Course;
  constructor(private activatedRoute: ActivatedRoute, private titleService: Title, private courseService: CourseService, private observableMedia: ObservableMedia ) { }

  ngOnInit() {
    this.gridMap();
    this.titleService.setTitle(this.title);
    this.routerParams = this.activatedRoute.params.subscribe(params => {
      this.paramID = params['id'];
      console.log(this.paramID);
      this.courseService.getCoursesDetail(this.paramID).subscribe((course: Course) => {
        this.course = course;
        console.log(course);
      });
   });
   
  }

  gridMap() {
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


}
