import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DashboardService } from '../../services/dashboard.service';
import { User } from '../../../../model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = new User('','','');
  title: string = "Profile - Teachers Time";
  constructor(private dashboardService: DashboardService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.getUser();
  }

  getUser(){
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    this.dashboardService.getProfile(usercred.tag).subscribe((profile: User) => {
      this.user = profile;
    });
  }

}
