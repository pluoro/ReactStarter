/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import {stateName} from "./constants";

const selectAuth = state => state.get(stateName, initialState);



