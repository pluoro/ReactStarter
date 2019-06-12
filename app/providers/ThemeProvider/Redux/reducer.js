import { fromJS } from "immutable";
import {SET_THEME} from "./constants";
import themes from "../themes";

export const initialState = fromJS({
  theme: fromJS(localStorage.getItem("theme") || Object.keys(themes)[0])
});

function themeProviderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem("theme", action.payload);
      return state.set("theme", fromJS(action.payload));
    default:
      return state;
  }
}

export default themeProviderReducer;
