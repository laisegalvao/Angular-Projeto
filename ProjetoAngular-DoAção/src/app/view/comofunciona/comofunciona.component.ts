import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comofunciona',
  templateUrl: './comofunciona.component.html',
  styleUrls: ['./comofunciona.component.css']
})
export class ComofuncionaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToComofunciona() {
    this.router.navigate(['/comofunciona']);
}

}
