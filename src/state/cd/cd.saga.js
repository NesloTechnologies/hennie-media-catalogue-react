import axios from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import { addCD, setCD, setLoading } from './cd.reducer';

const API_HOME = 'http://localhost:8080/api/cds';

const HEADERS = {
  Authorization: `Bearer ${document.cookie.substring(document.cookie.indexOf('auth_token=') + 11)}`
};

function* addCDSaga(action) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      API_HOME,
      HttpVerb.POST,
      HEADERS,
      action.payload
    );
    yield put(setLoading(true));
    const response = yield call(axios, endpoint, axiosOptions);
    yield put(addCD(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForAddCD() {
  yield takeLatest(setCD.type, addCDSaga);
}

export function* cdSaga() {
  yield all([watchForAddCD()]);
}

export default watchForAddCD;
