import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from 'core';
import { Observable } from 'rxjs';
import { OrdersService } from '../services/orders.service';
import { selectIsLoading } from './store/selectors';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, RouterLink, AsyncPipe]
})
export class OrdersComponent implements OnInit {

  public orders$: Observable<any>;
  isLoading$ = this.store.select(selectIsLoading);
  user$ = this.store.select(getUser);

  constructor(
    private ordersService: OrdersService,
    private store: Store
  ) {
    this.orders$ = this.ordersService.getOrders();
  }

  ngOnInit(): void {

  }



}
