import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import {
  addCD,
  addCDTrigger,
  loadCDs,
  loadCDsTrigger,
  updateCD,
  updateCDTrigger
} from './cd.reducer';

const API_HOME = 'http://localhost:8080/api/cds';

const HEADERS = {
  Authorization: `Bearer ${document.cookie.substring(document.cookie.indexOf('auth_token=') + 11)}`
};

function* setCDsSaga() {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(API_HOME, HttpVerb.GET, HEADERS);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(loadCDs(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForSetCDs() {
  yield takeLatest(loadCDsTrigger.type, setCDsSaga);
}

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
  yield takeLatest(addCDTrigger.type, addCDSaga);
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
  yield takeLatest(updateCDTrigger.type, updateCDSaga);
}

function* cdSaga() {
  yield all([watchForAddCD(), watchForUpdateCD(), watchForSetCDs()]);
}

export default cdSaga;
