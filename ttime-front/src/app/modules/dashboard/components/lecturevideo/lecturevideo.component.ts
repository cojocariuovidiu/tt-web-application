import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-lecturevideo',
  templateUrl: './lecturevideo.component.html',
  styleUrls: ['./lecturevideo.component.scss']
})
export class LecturevideoComponent implements OnInit {

  videoLink: string;
  routerParams: any;
  paramIDCourse: string;
  title: string = "Lecture Name - Teachers Time"
  constructor(private activatedRoute: ActivatedRoute, private titleService: Title) { }

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
      this.titleService.setTitle(this.title);
  }

}
