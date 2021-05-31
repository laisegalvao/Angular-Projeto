import { Component, OnInit } from '@angular/core';
import { AccountSubheaderService } from 'src/app/Components/Template/account-subheader/account-subheader.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  constructor(private subheaderService: AccountSubheaderService) { }

  ngOnInit() {
    this.subheaderService.setTitle('Doações');
  }
}
