import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type Order = {
  id: number;
  description: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  public getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>('http://localhost:8080/ng-shell/api/orders');
  }
}
