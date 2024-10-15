import axios from 'axios';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import { API_URL } from '../../util/api-url';

import { addDVD, editDVD, loadDVDs, removeDVD, setDVDs } from './dvd.reducer';

import HEADERS from '../headers';

function* loadDVDsSaga() {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(`${API_URL}/dvds`, HttpVerb.GET, HEADERS);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(setDVDs(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForLoadDVDs() {
  yield takeLatest(loadDVDs.type, loadDVDsSaga);
}

function* addDVDSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      `${API_URL}/dvds`,
      HttpVerb.POST,
      HEADERS,
      payload
    );

    yield call(axios, endpoint, axiosOptions);
    yield put(loadDVDs());
  } catch (error) {
    console.warn(error);
  }
}

function* watchForAddDVD() {
  yield takeLatest(addDVD.type, addDVDSaga);
}

function* editDVDSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      `${API_URL}/dvds/${payload.id}`,
      HttpVerb.PUT,
      HEADERS,
      payload
    );

    yield call(axios, endpoint, axiosOptions);
    yield put(loadDVDs());
  } catch (error) {
    console.warn(error);
  }
}

function* watchForEditDVD() {
  yield takeLatest(editDVD.type, editDVDSaga);
}

function* removeDVDSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      `${API_URL}/dvds/${payload}`,
      HttpVerb.DELETE,
      HEADERS
    );
    yield call(axios, endpoint, axiosOptions);
    yield put(loadDVDs());
  } catch (error) {
    console.warn(error);
  }
}

function* watchForRemoveDVD() {
  yield takeEvery(removeDVD.type, removeDVDSaga);
}

function* dvdSaga() {
  yield all([watchForAddDVD(), watchForEditDVD(), watchForLoadDVDs(), watchForRemoveDVD()]);
}

export default dvdSaga;
