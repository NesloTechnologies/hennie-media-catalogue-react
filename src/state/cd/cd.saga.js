import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import { API_URL } from '../../util/api-url';

import { addCD, editCD, loadCDs, removeCD, setCDs } from './cd.reducer';

import HEADERS from '../headers';

function* loadCDsSaga() {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(`${API_URL}/cds`, HttpVerb.GET, HEADERS);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(setCDs(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForLoadCDs() {
  yield takeLatest(loadCDs.type, loadCDsSaga);
}

function* addCDSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      `${API_URL}/cds`,
      HttpVerb.POST,
      HEADERS,
      payload
    );

    yield call(axios, endpoint, axiosOptions);
    yield put(loadCDs());
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
      `${API_URL}/cds/${payload.id}`,
      HttpVerb.PUT,
      HEADERS,
      payload
    );

    yield call(axios, endpoint, axiosOptions);
    yield put(loadCDs());
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
      `${API_URL}/cds/${payload}`,
      HttpVerb.DELETE,
      HEADERS
    );

    yield call(axios, endpoint, axiosOptions);
    yield put(loadCDs());
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
