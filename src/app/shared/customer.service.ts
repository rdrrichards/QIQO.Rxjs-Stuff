import { Injectable, Inject } from '@angular/core';
import { Customer } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }
  getCustomer(id: number) {
    return this.http.get<Customer>(`${environment.customersUrl}/${id}`);
  }
}
