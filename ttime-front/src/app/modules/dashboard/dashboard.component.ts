import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }

  hideTab(){
    if(this.router.url == "/dashboard/enrolled")
    {
      return true;
    }
    else if(this.router.url == "/dashboard/profile"){
      return true;
    }
    else{
      return false;
    }
  }

}
