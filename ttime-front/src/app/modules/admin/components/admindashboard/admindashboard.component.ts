import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  course: any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  onFilesAdded($event){
    this.readThis($event.target);
    //console.log(course);
  }

  sendCourse(course){
    //console.log(course);
    this.course = course;
    this.adminService.uploadCourse(course);
  }

  readThis(inputValue: any){
    var file:File = inputValue.files[0]; 
    var myReader = new FileReader();
    myReader.onload = (event: any) => {
      const course = myReader.result;
      this.sendCourse(course);
    }
    myReader.readAsText(file);
  }



}
