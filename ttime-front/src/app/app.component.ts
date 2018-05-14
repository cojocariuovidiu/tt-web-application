import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Router, NavigationEnd, NavigationCancel, NavigationStart } from '@angular/router';
import { CoreService } from './services/core.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading;
  authtoken: any;
  cols: Observable<number>;
  constructor(private coreService: CoreService, private router: Router , private observableMedia: ObservableMedia) {
    this.loading = true;
  }
  ngOnInit() {
    this.setDisplay();
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
          ) {
          this.loading = false;
        }
      });
  }

  setDisplay() {
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

  hideLogin() {
    this.getauthToken();
    if (this.authtoken) {
      // console.log('true');
      return true;
    } else {
      // console.log('false');
      return false;
    }
  }

  checkTag() {
    const usercred = JSON.parse(localStorage.getItem('usercred'));
    if (usercred == null || undefined) {
      return true;
    } else if (usercred.tag === 'local') {
      return true;
    } else {
      return false;
    }
  }

  getauthToken() {
    const token = localStorage.getItem('id_token');
    this.authtoken = token;
  }

  OnLogout() {
    this.authtoken = null;
    this.coreService.Logout();
  }

  OnAdminLogout() {
    this.authtoken = null;
    this.coreService.LogoutAdmin();
  }

  onRoute(){
    if(this.router.url == "/admin/dashboard"){
      return false;
    }
    else if(this.router.url == "/admin/login"){
      return false;
    }
    {
      return true;
    }
  }
}
