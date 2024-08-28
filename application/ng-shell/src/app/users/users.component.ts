import { Component } from '@angular/core';

@Component({
	selector: 'data-users',
	templateUrl: './users.component.html',
	standalone: true
})
export class UsersComponent {
	title = 'Users';
	subTitle = 'This is the internal feature for users';
}
