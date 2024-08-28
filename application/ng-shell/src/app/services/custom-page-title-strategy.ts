import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class CustomPageTitleStrategy extends TitleStrategy {
	private title = inject(Title);

	updateTitle(snapshot: RouterStateSnapshot): void {
		const title = this.buildTitle(snapshot);
		this.title.setTitle(title ? `Module Federation - ${ title }` : 'Module Federation');
	}
}