import {inject, Injectable} from "@angular/core";
import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Injectable()
export class CustomPageTitleStrategy extends TitleStrategy {
    private title = inject(Title);
  updateTitle(snapshot: RouterStateSnapshot): void {
      const title = this.buildTitle(snapshot);
      if (title !== undefined) {
          this.title.setTitle(`Module Federation - ${title}`);
      }
  }
}