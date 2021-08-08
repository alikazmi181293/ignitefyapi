import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { CartItem } from '../../Classes/cart-item';
import { OrderDetailsDTO } from '../../Classes/order-details-dto';
import { ProductService } from '../../../../../Client/src/app/Services/product.service';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: OrderDetailsDTO[];
  @Output() closeEmitier = new EventEmitter();
  @ViewChild('viewOrder', { read: ViewContainerRef }) viewOrder: ViewContainerRef;
  
  constructor(private productService: ProductService,private rcf: ComponentFactoryResolver) { 
    this.orders = [];

  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() { 
    
    this.productService.GetCartItems("PCForSell", "GetAllAdminOrders").subscribe(
      (data: any) => {
        if (data) {
          this.orders = data;
          console.log(data);
        }
      });
  }

  async loadViewOrderComponent(order: OrderDetailsDTO) {
   this.viewOrder.clear();
    const componentRef = this.viewOrder.createComponent(this.rcf.resolveComponentFactory(ViewOrdersComponent))
    componentRef.instance.showViewPCPopup = true;
    componentRef.instance.viewOrder = order;
    componentRef.instance.closeEmitier.subscribe((closeEvent) => {
      if (closeEvent) {
      }
      this.viewOrder.clear();
    });
  }

}
