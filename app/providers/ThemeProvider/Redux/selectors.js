import { initialState } from './reducer';
import {stateName} from "./constants";
import {createSelector} from "reselect";

const selectTheme = state => state.get(stateName, initialState);

export const makeSelectTheme = () =>
  createSelector(selectTheme, state => state.get('theme'));


