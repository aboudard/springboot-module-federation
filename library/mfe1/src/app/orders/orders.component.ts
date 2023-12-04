import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from 'core';
import { Observable } from 'rxjs';
import { OrdersService } from '../services/orders.service';
import { selectIsLoading } from './store/selectors';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
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
