/**
 * AuthProvider selectors
 */

import { initialState } from './reducer';
import {stateName} from "./constants";
import {createSelector} from "reselect";

const selectAuth = state => state[stateName] || initialState;

export const makeSelectIsLoggedIn = () =>
  createSelector(selectAuth, state => state.isLoggedIn);

export const makeSelectUser = () =>
  createSelector(selectAuth, state => state.user);

export const makeSelectActiveTab = () =>
  createSelector(selectAuth, state => state.activeTab);

export const makeSelectUserId = () => createSelector(selectAuth, state => state.user.id);

export const makeSelectUserEmail = () => createSelector(selectAuth, state => state.user.email);

export const makeSelectAuthError = () =>
  createSelector(selectAuth, state => state.error);

export const makeSelectRequestedUserForUpdate = () =>
  createSelector(selectAuth, state => state.requestedUserForUpdate);


