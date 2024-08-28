import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

	let appComponent: AppComponent;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			providers: [
				provideMockStore(),
				AppComponent
			]
		});
		appComponent = TestBed.inject(AppComponent);
	});

	it('should create the app', () => {
		expect(appComponent).toBeTruthy();
	});

	it(`should have as title 'ng-shell'`, () => {
		expect(appComponent.title).toEqual('Spring Boot Microfrontend');
	});

});
