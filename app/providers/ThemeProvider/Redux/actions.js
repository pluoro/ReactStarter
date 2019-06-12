import {SET_THEME} from "./constants";

export function setTheme(data) {
  return {
    type: SET_THEME,
    payload: data,
  };
}
