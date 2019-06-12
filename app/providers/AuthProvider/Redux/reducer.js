import {
  CHANGE_PASSWORD_FAIL, CHECK_HASH, CHECK_HASH_FAIL, CHECK_HASH_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  SET_ACTIVE_TAB,
} from './constants';
import produce from 'immer';
export const initialState = {
  activeTab: "sign-in",
  requestedUserForUpdate: null
};

const authProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.user = action.payload;
        draft.isLoggedIn = true;
        draft.error = null;
        break;
      case CHECK_HASH_SUCCESS:
        draft.requestedUserForUpdate = action.payload;
        break;
      case CHECK_HASH_FAIL:
        draft.requestedUserForUpdate = action.payload.id;
        break;
      case CHANGE_PASSWORD_FAIL:
      case FORGOT_PASSWORD_FAIL:
      case REGISTER_FAIL:
      case LOGIN_FAIL:
        draft.user = null;
        draft.isLoggedIn = false;
        switch (action.payload.status) {
          case 401:
            draft.error = "badCredentialsError";
            break;
          default: break;
        }
        break;
      case LOGOUT_SUCCESS:
        draft.user = null;
        draft.isLoggedIn = false;
        draft.error = null;
        break;
      case SET_ACTIVE_TAB:
        draft.error = null;
        draft.activeTab = action.payload;
        break;
      default: break;
    }
  });


export default authProviderReducer;
