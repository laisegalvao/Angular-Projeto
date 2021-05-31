import { Component, OnInit } from '@angular/core';
import { Reward } from '../reward.model';
import { RewardService } from '../reward.service';

@Component({
  selector: 'app-reward-read',
  templateUrl: './reward-read.component.html',
  styleUrls: ['./reward-read.component.css']
})
export class RewardReadComponent implements OnInit {

  rewards! : Reward[];
  displayedColumns = ['id','date','amount','status', 'schedule']

  constructor(private rewardService: RewardService) { }

  ngOnInit(): void {
    this.rewards = this.rewardService.read()
  }

}
