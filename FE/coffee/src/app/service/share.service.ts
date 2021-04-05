import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}
  private order = new BehaviorSubject('');
  orderList = this.order.asObservable();

  changeData(data) {
    this.order.next(data);
  }
}
