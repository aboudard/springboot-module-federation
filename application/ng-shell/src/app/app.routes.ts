import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
	{
		path: 'home', component: HomeComponent, title: 'Home'
	},
	{
		path: 'users', loadChildren: () => import('./users/users.routes').then(m => m.usersRoutes), title: 'Users'
	},
	{
		path: '', redirectTo: 'home', pathMatch: 'full'
	}
];