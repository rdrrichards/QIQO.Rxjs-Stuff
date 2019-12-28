import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { switchMap, map, concatMap, tap } from 'rxjs/operators';
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
        map(lines => <Order>{ ...order, orderItems: lines})
      )),
      tap(order => console.log('order with lines', order)),
      switchMap(order => this.customerService.getCustomer(order.customerId).pipe(
        map(customer => <Order>{ ...order, customer: customer })
      )),
      tap(order => console.log('order with customer', order)),
      // concatMap(order =>
      //   order.orderItems.map((ol, li) => {
      //     this.productService.getProduct(ol.productId).pipe(
      //       map(prod => {
      //         order.orderItems[li].product = prod;
      //       })
      //     );
      //   })
      //   // return <Order>{ ...order };
      // ),
      // tap(order => console.log('order with everything', order))
    );
  }
}
