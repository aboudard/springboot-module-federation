import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CoreService } from 'core';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

	let homeComponent: HomeComponent;
	let coreService: jasmine.SpyObj<CoreService>;

	beforeEach(async () => {
		const coreServiceSpy = jasmine.createSpyObj('CoreService', ['getCore']);
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			providers: [
				provideMockStore(),
				{ provide: CoreService, useValue: coreServiceSpy },
				HomeComponent
			]
		});
		homeComponent = TestBed.inject(HomeComponent);
		coreService = TestBed.inject(CoreService) as jasmine.SpyObj<CoreService>;
	});

	it('should create', () => {
		expect(homeComponent).toBeTruthy();
	});

	it('should call getCore method and alert the core value', () => {
		coreService.getCore.and.returnValue('Core Value');
		spyOn(window, 'alert');
		homeComponent.getCore();
		expect(coreService.getCore).toHaveBeenCalled();
		expect(window.alert).toHaveBeenCalledWith('Core Value');
	});

});