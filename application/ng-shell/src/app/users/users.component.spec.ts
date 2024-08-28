import { TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
	let component: UsersComponent;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			providers: [UsersComponent]
		});
		component = TestBed.inject(UsersComponent);

	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have title as Users and subTitle', () => {
		expect(component.title).toEqual('Users');
		expect(component.subTitle).toEqual('This is the internal feature for users');
	});
});
