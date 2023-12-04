import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ordersFeatureKey, OrdersState } from './index';

const getOrdersState = createFeatureSelector<OrdersState>(ordersFeatureKey);

export const selectIsLoading = createSelector(
  getOrdersState,
  (state: OrdersState) => state.isLoading
);
