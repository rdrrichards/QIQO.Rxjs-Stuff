import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, OrderLine } from '../models';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient, private productService: ProductService) { }
  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${environment.ordersUrl}/${id}`);
  }
  getOrderItems(id: number) {
    return this.http.get<OrderLine[]>(`${environment.orderLinesUrl}?orderId=${id}`).pipe(
      map(lines => {
        lines.map(l => this.productService.getProduct(l.productId).subscribe(
          prod => l.product = prod
        ));
        return lines;
      })
    );
  }
}
