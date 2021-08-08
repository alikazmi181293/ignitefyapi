import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderDetailsDTO } from '../../../Classes/order-details-dto';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  showViewPCPopup: boolean;
  @Output() closeEmitier = new EventEmitter();
  viewOrder: OrderDetailsDTO;

  constructor() { 

    this.showViewPCPopup = false;
    this.viewOrder = new OrderDetailsDTO();
  }

  ngOnInit(): void {
    console.log(this.viewOrder);
  }
CloseViewPCPopup() {
    this.closeEmitier.emit(false);
  }
}
