import { Injectable } from '@angular/core';
import { RewardComponent } from './reward.model';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  constructor() { }

  rewards : RewardComponent[] = [
    {
      "id": 1,
      "date": new Date(),
      "amount": 5.00,
      "status":"Agendado",
      "schedule" : new Date()
    },
    {
      "id": 1,
      "date": new Date(),
      "amount": 5.00,
      "status":"Agendado",
      "schedule" : new Date()
    },
  ]

  read(){
    return this.rewards
  }
}
