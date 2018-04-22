import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
