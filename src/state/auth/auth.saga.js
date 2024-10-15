import axios from 'axios';
import { all, call, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import { API_URL } from '../../util/api-url';

import { loginUser, registerUser } from './auth.reducer';

import HEADERS, { setCookie } from '../headers';

function* registerUserSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      `${API_URL}/users/register`,
      HttpVerb.POST,
      HEADERS,
      payload
    );
    yield call(axios, endpoint, axiosOptions);
  } catch (error) {
    console.warn(error);
  }
}

function* watchForRegisterUser() {
  yield takeLatest(registerUser.type, registerUserSaga);
}

function* loginUserSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      `${API_URL}/users/login`,
      HttpVerb.POST,
      HEADERS,
      payload.user
    );

    const { data } = yield call(axios, endpoint, axiosOptions);

    yield call(setCookie, data);
    yield call(payload.setIsValidToken, true);
    yield call(payload.navigate, '/cd/table');
  } catch (error) {
    yield call(setCookie, '');
    yield call(payload.setIsValidToken, false);
    console.warn(error);
  }
}

function* watchForLoginUser() {
  yield takeLatest(loginUser.type, loginUserSaga);
}

function* authSaga() {
  yield all([watchForRegisterUser(), watchForLoginUser()]);
}

export default authSaga;
