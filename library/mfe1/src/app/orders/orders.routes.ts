import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'core';
import { OrdersComponent } from './orders.component';
import * as fromOrders from './store';
import { ViewComponent } from './view/view.component';

export const ordersRoutes: Routes = [
	{
		path: '',
		providers: [
			importProvidersFrom([
				CoreModule,
				StoreModule.forFeature(fromOrders.ordersFeatureKey, fromOrders.ordersReducer)
			])
		],
		children: [
			{ path: '', component: OrdersComponent },
			{ path: 'view/:id', component: ViewComponent }
		]
	}
];