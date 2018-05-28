import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Course } from '../../../../model/course.model';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  isFileSelected = false;
  isHide = true;
  fileSelected = null;
  course: any;
  courseList: Course[] = [];
  newCourse: Course = new Course('','','','','','','','',[]);
  fileName = "No File Selected";
  constructor(private adminService: AdminService) { }

  ngOnInit() {

  }

  onFilesAdded(event){
    this.fileSelected = event.target.files[0];
    this.fileName = this.fileSelected.name;
    var fileReader = new FileReader();
    fileReader.onload = (event: any) => {
      this.course = fileReader.result;
      const parsed = JSON.parse(fileReader.result);
      const parsedCourse = new Course(parsed.courseTitle,
        parsed.coursePreview, 
        parsed.courseDetail,
        parsed.courseScope,
        parsed.courseFreeVideo, null, parsed._id, parsed.cousePrice, parsed.courseSessions);
      this.newCourse = parsedCourse;
    }
    fileReader.readAsText(this.fileSelected);
    this.isFileSelected = true;
    this.isHide = false;
    //console.log(this.course);
  }

  getCourse(){
    //this.c//TODO
  }
  onSendCourse(){
    //console.log(this.course);
    console.log(this.newCourse);
    this.adminService.uploadCourse(this.newCourse).subscribe(data => {
      if(data.success){
        console.log("Success");
      }
      else{
        console.log("Error");
      }
    });
  }
}