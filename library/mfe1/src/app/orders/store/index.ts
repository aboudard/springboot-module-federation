import { createReducer } from '@ngrx/store';

export const ordersFeatureKey = 'orders';

export interface OrdersState {
  isLoading: boolean;
}

const initialState: OrdersState = {
  isLoading: true
};

export const ordersReducer = createReducer(
  initialState
);

