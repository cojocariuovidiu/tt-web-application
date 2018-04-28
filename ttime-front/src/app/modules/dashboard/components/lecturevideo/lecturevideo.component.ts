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
  // tslint:disable-next-line:no-inferrable-types
  title: string = 'Lecture Name - Teachers Time';
  cols: Observable<number>;
  colspan: Observable<number>;
  panelOpenState: boolean = false;
  messages = [
    {name: 'Classroom Managment' , details: 'yddt' },

    {name: 'Python' , details: 'tyyt' },
    {name: 'Python' , details: 'tyyt' },
    {name: 'Python' , details: 'tyyt' }
  ];
  constructor(private dashboardService: DashboardService, private activatedRoute: ActivatedRoute, private titleService: Title, private observableMedia: ObservableMedia) { }

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
        ['lg', 2],
        ['xl', 2]
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

}
