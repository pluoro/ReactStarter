import axios from "axios";
import { push } from 'connected-react-router';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  forgotPasswordFail,
  forgotPasswordSuccess,
  loginFail,
  loginSuccess,
  logoutSuccess,
  registerFail,
  registerSuccess,
  changePasswordSuccess,
  changePasswordFail,
  checkHashSuccess,
  checkHashFail,
} from './actions';
import { CHANGE_PASSWORD, CHECK_HASH, FORGOT_PASSWORD, LOGIN, LOGOUT, REGISTER } from './constants';

function* login(action) {
  const requestURL = `/api/auth/signin`;
  try {
    const {data} = yield call(axios.post, requestURL, action.payload);
    let {accessToken} = data;
    localStorage.setItem("token", accessToken);
    yield put(loginSuccess({token: accessToken}));
    yield put(push('/dashboard'));
  } catch (err) {
    localStorage.removeItem("token");
    yield put(loginFail(err.response.data));
  }
}

function* register(action) {
  const requestURL = `/api/auth/signup`;
  try {
    const {data} = yield call(axios.post, requestURL, action.payload);
    yield put(registerSuccess(data));
  } catch (err) {
    yield put(registerFail(err));
  }
}

function* onForgotPassword(action) {
  const requestURL = `/api/auth/forgotPassword?usernameOrEmail=${action.payload}`;
  try {
    const {data} = yield call(axios.get, requestURL);
    yield put(forgotPasswordSuccess(data));
  } catch (err) {
    yield put(forgotPasswordFail(err));
  }
}

function* onChangePassword(action) {
  const requestURL = `/api/users/${action.payload.id}`;
  try {
    const {data} = yield call(axios.patch, requestURL, {newPassword: action.payload.password});
    yield put(changePasswordSuccess(data));
    // user will be redirected to login page with “Successfully changed your password“ notification
  } catch (err) {
    yield put(changePasswordFail(err));
  }
}

function* onCheckHash(action) {
  const requestURL = `/api/auth/checkHash`;
  try {
    const res = yield call(axios.post, requestURL, {hash: action.payload});
    yield put(checkHashSuccess(res));
  } catch (err) {
    yield put(checkHashFail(err));
    // yield put(push('/authentication'))
  }
}

function* onLogout(){
  localStorage.removeItem("token");
  // yield put(push('/authentication'));
  yield put(logoutSuccess());
}

export default function* authProviderSaga() {
  yield takeEvery(CHECK_HASH, onCheckHash);
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTER, register);
  yield takeEvery(LOGOUT, onLogout);
  yield takeEvery(FORGOT_PASSWORD, onForgotPassword);
  yield takeEvery(CHANGE_PASSWORD, onChangePassword);
}
