import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-enrolleddetail',
  templateUrl: './enrolleddetail.component.html',
  styleUrls: ['./enrolleddetail.component.scss']
})
export class EnrolleddetailComponent implements OnInit {

  title: string = "Course Name - Teachers Time";
  paramID: string;
  routerParams: any;
  constructor(private activatedRoute: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.routerParams = this.activatedRoute.params.subscribe(params => {
      this.paramID = params['id'];
   });
   this.titleService.setTitle(this.title);
  }

}
