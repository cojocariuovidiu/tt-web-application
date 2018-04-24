import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../model/course.model'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss']
})
export class CourselistComponent implements OnInit {

  filter: Course = new Course(null, null, null, null, null);
  courses:Course [] = [];
  title: string = "Courses - Teachers Time";
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.courses.push(new Course("1", "Java", "javadetail", null, null));
    this.courses.push(new Course("1", "C sharp", "javadetail", null, null));
    this.courses.push(new Course("1", "Script", "javadetail", null, null));
    this.courses.push(new Course("1", "Python", "javadetail", null, null));
  }

}
