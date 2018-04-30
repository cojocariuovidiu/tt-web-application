import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  hide = 'true';
  show: boolean = true;
 cols: Observable<number>;
  institute = [
  {value: 'school', viewValue: 'School'},
  {value: 'college', viewValue: 'College'},
  {value: 'university', viewValue: 'Univarsity'}
];
 tiles = [
   {text: 'One', colss: 1, rows: 1, color: 'blue'},
   {text: 'Two', colss: 1, rows: 1, color: 'red'},
   {text: 'Three', colss: 1, rows: 1, color: 'green'},
   {text: 'Four', colss: 1, rows: 1, color: 'lightblue'},
   {text: 'Five', colss: 1, rows: 1, color: 'lightgreen'},
   {text: 'Six', colss: 1, rows: 1, color: 'lightpink'}
 ];
 constructor(private observableMedia: ObservableMedia) { }

 ngOnInit() {
   const cols_map = new Map([
     ['xs', 1],
     ['sm', 1],
     ['md', 2],
     ['lg', 3],
     ['xl', 3]
   ]);
   let start_cols: number;
   cols_map.forEach((cols, mqAlias) => {
     if (this.observableMedia.isActive(mqAlias)) {
       start_cols = cols;
     }
   });
   this.cols = this.observableMedia.asObservable()
     .map(change => {
       return cols_map.get(change.mqAlias);
     }).startWith(start_cols);
 }

}
