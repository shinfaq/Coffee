import { ShareService } from './../../service/share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss'],
})
export class OrderModalComponent implements OnInit {
  constructor(private shareService: ShareService) {}
  show = false;
  listOrder = [];
  ngOnInit(): void {
    this.shareService.orderList.subscribe((res) => {
      if (res) {
        this.show = true;
        this.listOrder.push(res);
      }
    });
  }
}
