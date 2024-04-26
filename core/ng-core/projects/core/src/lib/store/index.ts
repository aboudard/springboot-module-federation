import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromUser from './user.reducer';
import { from } from 'rxjs';

export * from './user.reducer';
export * from './user.selectors';
