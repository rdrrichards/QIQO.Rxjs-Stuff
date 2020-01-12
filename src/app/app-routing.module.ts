import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'order-details', pathMatch: 'full' },
  { path: 'order-details', component: OrderComponent },
  { path: 'order-details/:id', component: OrderComponent },
  { path: 'star-wars', component: StarWarsComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
