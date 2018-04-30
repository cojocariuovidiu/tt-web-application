import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  title: string = "Change Password - Teachers Time";
  constructor(private titleService: Title) { }
  hide = 'true';
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
