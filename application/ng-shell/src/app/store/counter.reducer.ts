import { Action, createReducer, on } from '@ngrx/store';


export const counterFeatureKey = 'counter';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 10
};

export const reducer = createReducer(
  initialState,

);
