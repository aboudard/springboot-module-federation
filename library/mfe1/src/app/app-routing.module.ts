import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule), title: 'Orders'},
  { path: 'plans', loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule), title: 'Plans' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
