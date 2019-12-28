import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'order-details', pathMatch: 'full' },
  { path: 'order-details', component: OrderComponent },
  { path: 'order-details/:id', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
