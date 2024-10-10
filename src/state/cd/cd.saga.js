import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import {
  addCD,
  addCDTrigger,
  deleteCD,
  deleteCDTrigger,
  loadCDs,
  loadCDsTrigger,
  updateCD,
  updateCDTrigger
} from './cd.reducer';

import HEADERS from '../headers';

const API_HOME = 'http://localhost:8080/api/cds';

function* loadCDsSaga() {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(API_HOME, HttpVerb.GET, HEADERS);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(loadCDs(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForLoadCDs() {
  yield takeLatest(loadCDsTrigger.type, loadCDsSaga);
}

function* addCDSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(API_HOME, HttpVerb.POST, HEADERS, payload);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(addCD(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForAddCD() {
  yield takeLatest(addCDTrigger.type, addCDSaga);
}

function* updateCDSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      `${API_HOME}/${payload.id}`,
      HttpVerb.PUT,
      HEADERS,
      payload
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

function* deleteCDSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      `${API_HOME}/${payload}`,
      HttpVerb.DELETE,
      HEADERS
    );

    yield call(axios, endpoint, axiosOptions);
    yield put(deleteCD(payload));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForDeleteCD() {
  yield takeLatest(deleteCDTrigger, deleteCDSaga);
}

function* cdSaga() {
  yield all([watchForAddCD(), watchForUpdateCD(), watchForLoadCDs(), watchForDeleteCD()]);
}

export default cdSaga;
