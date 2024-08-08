import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    standalone: true,
    imports: []
})
export class ViewComponent {

    @Input() id!: string;

}
