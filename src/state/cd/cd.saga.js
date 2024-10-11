import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import {
  addCD,
  createCD,
  deleteCD,
  removeCD,
  loadCDs,
  setCDs,
  updateCD,
  editCD
} from './cd.reducer';

import HEADERS from '../headers';

const API_HOME = 'http://localhost:8080/api/cds';

function* setCDsStateSaga() {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(API_HOME, HttpVerb.GET, HEADERS);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(setCDs(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForLoadCDs() {
  yield takeLatest(loadCDs.type, setCDsStateSaga);
}

function* addCDSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(API_HOME, HttpVerb.POST, HEADERS, payload);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(createCD(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForAddCD() {
  yield takeLatest(addCD.type, addCDSaga);
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

function* watchForEditCD() {
  yield takeLatest(editCD.type, updateCDSaga);
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

function* watchForRemoveCD() {
  yield takeLatest(removeCD, deleteCDSaga);
}

function* cdSaga() {
  yield all([watchForAddCD(), watchForEditCD(), watchForLoadCDs(), watchForRemoveCD()]);
}

export default cdSaga;
