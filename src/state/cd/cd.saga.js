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
  yield all([watchForAddCD(), watchForUpdateCD(), watchForLoadCDs()]);
}

export default cdSaga;
