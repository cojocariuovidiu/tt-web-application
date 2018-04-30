import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, PatternValidator, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  title: string = 'We are Here:';
  namePattern: string = '[a-z]*.{3,}';
  emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  lat: number = 23.745531;
  lng: number = 90.370628;
  amount: number = 20;
  pageTitle: string = "Contact - Teachers Time";
  cols: Observable<number>;
  contactForm: FormGroup

  constructor(private formBuilder: FormBuilder, private titleService: Title, private observableMedia: ObservableMedia) {
    this.createContactForm();
   }

  ngOnInit() {
    this.titleService.setTitle(this.pageTitle);
    const cols_map = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
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

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      Name: [null, Validators.compose([
        Validators.required,
        Validators.pattern(this.namePattern)
      ])],
      Email: [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern)
      ])],
      Subject: [
        null, Validators.compose([
          Validators.required
        ])
      ],
      Message: [
        null, Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  sendContactForm(){
    const contact = this.contactForm.value;
    console.log(contact);
  }

  resetContactForm(){
    this.contactForm.reset();
  }

}
