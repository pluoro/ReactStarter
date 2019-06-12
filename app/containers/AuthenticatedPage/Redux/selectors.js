/**
 * AuthProvider selectors
 */

import { initialState } from './reducer';
import {stateName} from "./constants";
import {createSelector} from "reselect";

const selectAuthenticatedState = state => state[stateName] || initialState;

export const makeSelectDrawerState = () =>
  createSelector(selectAuthenticatedState, state => state.drawerState);


