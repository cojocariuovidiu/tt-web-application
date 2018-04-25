import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../model/course.model'
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss']
})
export class CourselistComponent implements OnInit {

  filter: Course = new Course(null, null, null, null, null);
  courses: Course [] = [];
  title = 'Courses - Teachers Time';
  rowspan: Observable<number>;
  cols: Observable<number>;
  constructor(private titleService: Title, private observableMedia: ObservableMedia) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.courses.push(new Course('1', 'Java', 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.', null, null));
    this.courses.push(new Course('1', 'C sharp', 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.', null, null));
    this.courses.push(new Course('1', 'Script', 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.', null, null));
    this.courses.push(new Course('1', 'Python', 'Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.', null, null));

    const cols_map = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 3],
      ['xl', 3]
    ]);
    const rowspan_map = new Map([
      ['xs', 13],
      ['sm', 10],
      ['md', 10],
      ['lg', 11],
      ['xl', 9]
    ]);
    let start_cols: number;
    let row_span: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return cols_map.get(change.mqAlias);
      }).startWith(start_cols);
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

}
