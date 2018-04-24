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
  courses: Course [] = [];
  constructor(private activatedRoute: ActivatedRoute, private titleService: Title, private courseService: CourseService, private observableMedia: ObservableMedia ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
      console.log(this.courses);
    })
    this.gridMap();
    this.titleService.setTitle(this.title);
    this.routerParams = this.activatedRoute.params.subscribe(params => {
      this.paramID = params['id'];
   });
  }

  gridMap(){
    const cols_map = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 3],
      ['xl', 3]
    ]);
    let start_cols: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return cols_map.get(change.mqAlias);
      }).startWith(start_cols);
  }
  

}
