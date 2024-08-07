import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    standalone: true,
    imports: []
})
export class ViewComponent {

    // @Input() id!: string;

  // public id$: Observable<any>;

  /*constructor(private activatedRoute: ActivatedRoute) {
    this.id$ = this.activatedRoute.params.pipe(map((p) => p['id']));
  }*/

}
