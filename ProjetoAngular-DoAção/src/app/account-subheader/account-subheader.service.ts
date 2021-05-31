import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountSubheaderService {

  public subHeaderTitle = new BehaviorSubject('')
  constructor() { }
  setTitle(subHeaderTitle : string) {
    this.subHeaderTitle.next(subHeaderTitle);
  }

}
