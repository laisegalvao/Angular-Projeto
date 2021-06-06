import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respsocial',
  templateUrl: './respsocial.component.html',
  styleUrls: ['./respsocial.component.css']
})
export class RespsocialComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  goToRespsocial() {
    this.router.navigate(['/respsocial']);
}

}
