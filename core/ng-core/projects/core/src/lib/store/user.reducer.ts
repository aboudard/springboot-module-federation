import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user';

export const userFeatureKey = 'user';

export interface UserState {
  currentUser: User;
}

export const initialState: UserState = {
  currentUser: {
    name: 'John',
    age: 30
  }
};

export const reducer = createReducer(
  initialState,

);
