import {  TOGGLE_DRAWER  } from './constants';
import produce from 'immer';

export const initialState = {
  drawerState: 1,
};

const authenticatedPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_DRAWER:
        console.log('ad')
        draft.drawerState = action.payload;
        break;
      default: break;
    }
  });


export default authenticatedPageReducer;
