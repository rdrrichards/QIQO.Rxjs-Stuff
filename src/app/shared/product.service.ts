import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getProduct(id: number) {
    console.log('getProduct', id);
    return this.http.get<Product>(`${environment.productsUrl}/${id}`);
  }
}
