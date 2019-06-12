/**
 * Gets the repositories of the user from Github
 */
import request from "utils/request";
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from "axios";
import { makeSelectUsername } from 'containers/HomePage/selectors';
import {checkToken} from "./actions";
import { CHECK_TOKEN} from "./constants";
import {loginFail} from "../../AuthenticationPage/Redux/actions";

function* onCheckToken(action) {
  const requestURL = `http://localhost:5000/api/auth/profile`;
  try {
    console.log(action)
    const headers = {
      method: 'GET',
      headers: {
        'Authorization': action.payload, // Need to get from store once login done
        'Content-Type': 'application/json'
      },
    };
    const products = yield call(request, requestURL, headers);
    console.log(products)
    // yield put(productsLoaded(products));
    // const {data} = yield call(axios.get, requestURL, { headers: { Authorization: action.payload }});
    // let {token, email}  = data;
    // localStorage.setItem("token", token);
    // yield put(loginSuccess({email}));
    // yield put(push('/projects'))
  } catch (err) {
    yield put(loginFail(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* authSaga() {
  // Watches for LOGIN actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeEvery(CHECK_TOKEN, onCheckToken);
}
