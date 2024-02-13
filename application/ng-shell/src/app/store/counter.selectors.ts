import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState, counterFeatureKey } from './counter.reducer';

const getCounterState = createFeatureSelector<CounterState>(counterFeatureKey);

export const getCount = createSelector(
  getCounterState,
  state => state.count
);
