import {
  SET_ACTIVE_TAB,
  CHECK_TOKEN,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD,
  CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD,
  CHECK_HASH_FAIL, CHECK_HASH_SUCCESS, CHECK_HASH,
} from './constants';

export function checkToken(data) {
  return {
    type: CHECK_TOKEN,
    payload: data,
  };
}

export function forgotPassword(data) {
  return {
    type: FORGOT_PASSWORD,
    payload: data,
  };
}


export function forgotPasswordSuccess(data) {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload: data,
  };
}


export function forgotPasswordFail(data) {
  return {
    type: FORGOT_PASSWORD_FAIL,
    payload: data,
  };
}


export function checkHash(data) {
  return {
    type: CHECK_HASH,
    payload: data,
  };
}


export function checkHashSuccess(data) {
  return {
    type: CHECK_HASH_SUCCESS,
    payload: data,
  };
}


export function checkHashFail(data) {
  return {
    type: CHECK_HASH_FAIL,
    payload: data,
  };
}


export function changePassword(data) {
  return {
    type: CHANGE_PASSWORD,
    payload: data,
  };
}


export function changePasswordSuccess(data) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: data,
  };
}


export function changePasswordFail(data) {
  return {
    type: CHANGE_PASSWORD_FAIL,
    payload: data,
  };
}

export function login(data) {
  return {
    type: LOGIN,
    payload: data,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginFail(data) {
  return {
    type: LOGIN_FAIL,
    payload: data,
  };
}


export function register(data) {
  return {
    type: REGISTER,
    payload: data,
  };
}

export function registerSuccess(data) {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
}

export function registerFail(data) {
  return {
    type: REGISTER_FAIL,
    payload: data,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function setActiveTab(data) {
  return {
    type: SET_ACTIVE_TAB,
    payload: data
  };
}
