import { Component, OnInit } from '@angular/core';
import { AccountSubheaderService } from 'src/app/Components/Template/account-subheader/account-subheader.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  constructor(private subheaderService: AccountSubheaderService) { }

  ngOnInit() {
    this.subheaderService.setTitle('Recompensas');
  }
}
