import { NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ColaborArt-FrontEnd';
  routerShow: boolean = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    
  }
}
