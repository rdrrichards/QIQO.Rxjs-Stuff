import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models';
import { OrderFacadeService } from '../shared/order-facade.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order$: Observable<Order>;
  constructor(private orderServiceFacade: OrderFacadeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.order$ = this.orderServiceFacade.getOrderGraph(1);
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.order$ = this.orderServiceFacade.getOrderGraph(params.id ? +params.id : 0);
    });
  }

}
