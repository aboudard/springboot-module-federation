import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public id$: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id$ = this.activatedRoute.params.pipe(map((p) => p['id']));
  }

  ngOnInit(): void {
  }

}
