import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
	{
		path: 'orders',
		loadChildren: () => import('./orders/orders.routes').then(m => m.ordersRoutes),
		title: 'Orders'
	},
	{
		path: 'plans',
		loadChildren: () => import('./plans/plans.routes').then(m => m.plansRoutes),
		title: 'Plans'
	},
];