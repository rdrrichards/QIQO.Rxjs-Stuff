import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productName$: Observable<string>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productName$ = this.productService.getProduct(1).pipe(pluck('productName'));
  }

}
