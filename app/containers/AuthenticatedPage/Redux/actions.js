import { TOGGLE_DRAWER } from './constants';

export function toggleDrawer(data) {
  console.log("ivnkoed")
  return {
    type: TOGGLE_DRAWER,
    payload: data,
  };
}
