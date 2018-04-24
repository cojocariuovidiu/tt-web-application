import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  title: string = 'We are Here:';
  lat: number = 23.745531; 
  lng: number = 90.370628;
  amount: number = 20;
  pageTitle: string = "Contact - Teachers Time";

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.pageTitle);
  }

}
