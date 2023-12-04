import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'core';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ViewComponent } from './view/view.component';
import { StoreModule } from '@ngrx/store';
import * as fromOrders from './store';


@NgModule({
  declarations: [
    OrdersComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    CoreModule,
    StoreModule.forFeature(fromOrders.ordersFeatureKey, fromOrders.ordersReducer)
  ]
})
export class OrdersModule { }
