import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('id_token');
    if(token){
      this.router.navigate(['/admin/dashboard']);
    }
    else{
      return false;
    }
  }

}
