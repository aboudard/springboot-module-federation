import { DOCUMENT } from '@angular/common';
import { provideLocationMocks } from '@angular/common/testing';
import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter, Router, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { CustomPageTitleStrategy } from './custom-page-title-strategy';

@Component({ template: '' })
export class TestComponent {
}

describe('CustomPageTitleStrategy', () => {

	let router: Router;
	let document: Document;
	let service: CustomPageTitleStrategy;
	let titleService: Title;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CustomPageTitleStrategy,
				{
					provide: TitleStrategy,
					useClass: CustomPageTitleStrategy
				},
				provideLocationMocks(),
				provideRouter([]),
				{ provide: Title, useClass: Title }
			]
		});
		service = TestBed.inject(CustomPageTitleStrategy);
		titleService = TestBed.inject(Title);
		router = TestBed.inject(Router);
		document = TestBed.inject(DOCUMENT);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should set the title correctly', () => {
		const snapshot = {} as RouterStateSnapshot;
		const buildTitleSpy = spyOn(service, 'buildTitle').and.returnValue('Test Title');
		const setTitleSpy = spyOn(titleService, 'setTitle');

		service.updateTitle(snapshot);

		expect(buildTitleSpy).toHaveBeenCalledWith(snapshot);
		expect(setTitleSpy).toHaveBeenCalledWith('Module Federation - Test Title');
	});

	it('should set page title correctly when title is not provided', fakeAsync(() => {
		router.resetConfig([
			{
				path: 'home',
				component: TestComponent
			}
		]);
		router.navigateByUrl('/home');
		tick();
		expect(document.title).toBe('Module Federation');
	}));

	it('should set page title correctly when title is provided', fakeAsync(() => {
		router.resetConfig([
			{
				path: 'home',
				component: TestComponent,
				title: 'Home'
			}
		]);
		router.navigateByUrl('/home');
		tick();
		expect(document.title).toBe('Module Federation - Home');
	}));

});