import axios from 'axios';
import { all, call, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import { API_URL } from '../../util/api-url';

import { registerUser } from './auth.reducer';

import HEADERS from '../headers';

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

function* authSaga() {
  yield all([watchForRegisterUser()]);
}

export default authSaga;
