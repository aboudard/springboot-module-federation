import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreService } from 'core';
import { Observable } from 'rxjs';
import { getCount } from '../store/counter.selectors';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    template: `
    <h2>home works !</h2>
    <p>This is the counter: {{counter$ | async}}</p>
    <p><button class="btn" (click)="getCore()">get core</button></p>
    <div>
      <input type="number" [(ngModel)]="a"> / <input type="number" [(ngModel)]="b">
    </div>
    <div>
    <span>
        val : {{a + b}}
    </span>
    </div>

  `,
    styles: [],
    standalone: true,
    imports: [FormsModule, AsyncPipe]
})
export class HomeComponent {


  counter$: Observable<number> = this.store.select(getCount);

  a = 1;
  b = 2;

  getCore(): void {
    alert(this.coreService.getCore());
  }

constructor(
  private store: Store,
  private coreService: CoreService
) {
}


}
