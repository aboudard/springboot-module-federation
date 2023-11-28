import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders$: Observable<any>;

  constructor(
    private ordersService: OrdersService
  ) {
    this.orders$ = this.ordersService.getOrders();
  }

  ngOnInit(): void {

  }



}
