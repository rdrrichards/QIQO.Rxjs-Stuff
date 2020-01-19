import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Order } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderFacadeService {
  constructor(private orderService: OrderService, private customerService: CustomerService, private productService: ProductService) { }
  getOrderGraph(id: number) {
    return this.orderService.getOrder(id).pipe(
      tap(order => console.log('order', order)),
      switchMap(order => this.orderService.getOrderItems(order.id).pipe(
        map(lines => ({ ...order, orderItems: lines} as Order))
      )),
      tap(order => console.log('order with lines', order)),
      switchMap(order => this.customerService.getCustomer(order.customerId).pipe(
        map(customer => ({ ...order, customer } as Order ))
      )),
      tap(order => console.log('order with customer', order)),
    );
  }
}
