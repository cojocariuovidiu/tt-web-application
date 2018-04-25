import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  user: User;
  navLinks = [
    {label: 'Enrolled', path: '/dashboard/enrolled'},
    {label: 'Profile', path: '/dashboard/profile'}
  ];
  constructor() { }

  ngOnInit() {
  }

  

}
