import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order, OrderLine, Customer, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const orders: Order[] = [
      { id: 0, customerId: 0, orderNumber: 'ORD000' },
      { id: 1, customerId: 1, orderNumber: 'ORD001' },
      { id: 2, customerId: 1, orderNumber: 'ORD002' },
      { id: 3, customerId: 1, orderNumber: 'ORD003' },
      { id: 4, customerId: 2, orderNumber: 'ORD004' },
      { id: 5, customerId: 2, orderNumber: 'ORD005' },
    ];
    const orderLines: OrderLine[] = [
      { id: 0, orderId: 0, quantity: 0, productId: 0 },
      { id: 1, orderId: 1, quantity: 1, productId: 1 },
      { id: 6, orderId: 1, quantity: 3, productId: 2 },
      { id: 7, orderId: 1, quantity: 2, productId: 3 },

      { id: 2, orderId: 2, quantity: 1, productId: 2 },
      { id: 3, orderId: 3, quantity: 1, productId: 1 },
      { id: 4, orderId: 4, quantity: 1, productId: 2 },
      { id: 5, orderId: 5, quantity: 1, productId: 1 },
    ];
    const customers: Customer[] = [
      { id: 0, name: 'CST000' },
      { id: 1, name: 'CST001' },
      { id: 2, name: 'CST002' }
    ];
    const products: Product[] = [
      { id: 0, productCode: 'PRD000', productName: 'Product Nothing' },
      { id: 1, productCode: 'PRD001', productName: 'Product 001' },
      { id: 2, productCode: 'PRD002', productName: 'Product 002' },
      { id: 3, productCode: 'PRD003', productName: 'Product 003' }
    ];
    const people: any = { results: [
      {id: 'Luke Skywalker', homeworld: 'api/homeworlds/1'},
      {id: 'Leia Organa', homeworld: 'api/homeworlds/2'}
    ]};
    const homeworlds: any[] = [
      {id: 1, name: 'Tatooine'},
      {id: 2, name: 'Alderaan'}
    ];
    return { orders, orderLines, customers, products, people, homeworlds };
  }
}
