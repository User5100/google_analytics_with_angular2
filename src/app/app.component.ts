import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';

declare var ga:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App implementing Google Analytics';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router
        .events
        .distinctUntilChanged((prev: any, curr: any) => {
          if(curr instanceof NavigationEnd) {
            //FALSE allows item to pass, TRUE will block
            return prev.url === curr.url;
          }
          //TRUE will block all objects from passing where
          //Object.getPrototypeOf(Obj) !== NavigationEnd.prototype
          return true;
        })
        .subscribe((change: any) => {
          ga('send', 'pageview', change.url)
        });
  }
}
