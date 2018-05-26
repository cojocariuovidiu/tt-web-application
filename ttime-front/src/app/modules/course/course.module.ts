import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { MaterialModule } from '../../material.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CourseFilterPipe } from './components/courselist/coursefilter.pipe';
import { CourseService } from './services/course.service';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    StarRatingModule ,
    FlexLayoutModule,
    CourseRoutingModule
  ],
  declarations: [
    CourseComponent, 
    CourselistComponent, 
    CoursedetailComponent,
    CourseFilterPipe
  ],
  providers:[
    CourseService
  ]
})
export class CourseModule { }
