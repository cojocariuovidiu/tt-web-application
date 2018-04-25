import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navLinks = [
    {label: 'Enrolled', path: '/dashboard/enrolled'},
    {label: 'Profile', path: '/dashboard/profile'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
