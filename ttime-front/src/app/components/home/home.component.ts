import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia } from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Course } from '../../model/course.model';
import { CoreService } from '../../services/core.service';
import { Router } from '@angular/router';
import { RatingChangeEvent, HoverRatingChangeEvent, ClickEvent } from 'angular-star-rating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home - Teachers Time';
  cols: Observable<number>;
  rowspan: Observable<number>;
  introcols: Observable<number>;
  rowspanclients: Observable<number>; // row span for clients images

  coursesTeacher: Course [] = [];
  coursesParent: Course [] = [];
  onClickResult: ClickEvent;
  onHoverRatingChangeResult: HoverRatingChangeEvent;
  onRatingChangeResult: RatingChangeEvent;
  // tslint:disable-next-line:no-inferrable-types
  ratingnumber: string = '5';
  gettype: any;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private coreService: CoreService, private titleService: Title, private observableMedia: ObservableMedia) { }

  ngOnInit() {

    this.redirectToDash();
    this.setDisplay();
    this.showCoursesParent();
    this.showCoursesTeacher();

  }

  redirectToDash() {
    const isDash = this.coreService.checkLogin();
    if (isDash) {
      this.router.navigate(['/dashboard/enrolled']);
    }
  }

  showCoursesTeacher() {
    this.coreService.getCoursesTeacher().subscribe((courses: Course[]) => {
      this.coursesTeacher = courses;
      // console.log(courses);
    });
  }

  showCoursesParent() {
    this.coreService.getCoursesParent().subscribe((courses: Course[]) => {
      this.coursesParent = courses;
    });
  }

  setDisplay() {
    this.titleService.setTitle(this.title);
    const cols_map = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 3],
      ['xl', 3]
    ]);
    const intro_cols_map = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]);
    const rowspan_map = new Map([
      ['xs', 13],
      ['sm', 13],
      ['md', 13],
      ['lg', 12],
      ['xl', 12]
    ]);
    const rowspann_map = new Map([
      ['xs', 23],
      ['sm', 23],
      ['md', 22],
      ['lg', 7],
      ['xl', 7]
    ]);
    let start_cols: number;
    let intro_start_cols: number;
    let row_span: number;
    let start_rowspan: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return cols_map.get(change.mqAlias);
      }).startWith(start_cols);

      intro_cols_map.forEach((introcols, mqAlias) => {
        if (this.observableMedia.isActive(mqAlias)) {
          intro_start_cols = introcols;
        }
      });
      this.introcols = this.observableMedia.asObservable()
        .map(change => {
          return intro_cols_map.get(change.mqAlias);
        }).startWith(intro_start_cols);

        rowspan_map.forEach((rowspan, mqAlias) => {
          if (this.observableMedia.isActive(mqAlias)) {
           row_span = rowspan;
          }
        });
        this.rowspan = this.observableMedia.asObservable()
          .map(change => {
            return rowspan_map.get(change.mqAlias);
          }).startWith(row_span);
          rowspann_map.forEach((rowspanclients, mqAlias) => {
            if (this.observableMedia.isActive(mqAlias)) {
              start_rowspan = rowspanclients;
            }
          });
          this.rowspanclients = this.observableMedia.asObservable()
            .map(change => {
              return rowspann_map.get(change.mqAlias);
            }).startWith(start_rowspan);
  }

  getCourseDetail(id) {
    this.router.navigate(['/courses/index', id]);
  }
  onClick = ($event: ClickEvent) => {
    console.log('onClick $event: ', $event.rating.valueOf());
    this.gettype = $event.rating.valueOf();
    console.log(typeof this.gettype);
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    console.log('onRatingUpdated $event: ', $event);
    this.onRatingChangeResult = $event;
  }

  onHoverRatingChange = ($event: HoverRatingChangeEvent) => {
    console.log('onHoverRatingChange $event: ', $event);
    this.onHoverRatingChangeResult = $event;
  }
}
