import { Component, OnInit } from '@angular/core';
import { Donation } from '../../Components/donation/donation.model';
import { DonationService } from '../../Components/donation/donation.service';

@Component({
  selector: 'app-donation-read',
  templateUrl: './donation-read.component.html',
  styleUrls: ['./donation-read.component.css']
})
export class DonationReadComponent implements OnInit {

  donations! : Donation[];
  displayedColumns = ['id','date','amount','org']

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.donations = this.donationService.read()
  }


}
