import { Component, OnInit } from '@angular/core';
import { AccountSubheaderService } from '../Template/account-subheader/account-subheader.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private subheaderService: AccountSubheaderService) { }

  ngOnInit() {
    this.subheaderService.setTitle('Meus dados');
  }
}
