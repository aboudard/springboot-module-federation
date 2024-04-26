import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState, userFeatureKey } from "./user.reducer";

const getUserState = createFeatureSelector<UserState>(userFeatureKey);

export const getUser = createSelector(
    getUserState,
    state => state.currentUser
);