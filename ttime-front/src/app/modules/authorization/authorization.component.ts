import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  

  constructor(private router: Router,private titleService: Title) { }
  ngOnInit() {
    const token = localStorage.getItem('id_token');
    if(token){
      this.router.navigate(['/dashboard/enrolled']);
    }
    else{
      return false;
    }
  }

}
