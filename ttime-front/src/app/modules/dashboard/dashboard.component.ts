import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  user: User = new User('','','');
  navLinks = [
    {label: 'Enrolled', path: '/dashboard/enrolled'},
    {label: 'Profile', path: '/dashboard/profile'}
  ];
  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    
    //console.log(this.router.url);
    this.getUser();
    //this.user = this.dashboardService.user;
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

  getUser(){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.getProfile(usercred.tag).subscribe((profile: User) => {
      this.user = profile;
      //console.log(this.user);
    });
  }

}
