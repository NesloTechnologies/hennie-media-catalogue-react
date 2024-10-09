import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import { addCD, editCD, setCD, updateCD } from './cd.reducer';

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

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(addCD(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForAddCD() {
  yield takeLatest(setCD.type, addCDSaga);
}

function* updateCDSaga(action) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      `${API_HOME}/${action.payload.id}`,
      HttpVerb.PUT,
      HEADERS,
      action.payload
    );

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(updateCD(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForUpdateCD() {
  yield takeLatest(editCD.type, updateCDSaga);
}

function* cdSaga() {
  yield all([watchForAddCD(), watchForUpdateCD()]);
}

export default cdSaga;
