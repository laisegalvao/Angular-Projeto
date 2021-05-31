import { Injectable } from '@angular/core';
import { Donation } from './donation.model'

@Injectable({
  providedIn: 'root'
})

export class DonationService {
  constructor() { }

  donations : Donation[] = [
    {
      "id": 1,
      "date": new Date(),
      "amount": 5.00,
      "org":"Instituicao 1"
    },
    {
      "id": 2,
      "date": new Date(),
      "amount": 6.00,
      "org":"Instituicao 2"
    },
  ]

  read(){
    return this.donations
  }

}
