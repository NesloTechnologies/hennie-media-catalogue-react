import axios from 'axios';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import {
  createDVD,
  addDVD,
  setDVDs,
  loadDVDs,
  editDVD,
  updateDVD,
  deleteDVD,
  removeDVD
} from './dvd.reducer';

import HEADERS from '../headers';

const API_HOME = 'http://localhost:8080/api/dvds';

function* setDVDsStateSaga() {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(API_HOME, HttpVerb.GET, HEADERS);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(setDVDs(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForLoadDVDs() {
  yield takeLatest(loadDVDs.type, setDVDsStateSaga);
}

function* addDVDSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(API_HOME, HttpVerb.POST, HEADERS, payload);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(createDVD(response.data));
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
      `${API_HOME}/${payload.id}`,
      HttpVerb.PUT,
      HEADERS,
      payload
    );

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(updateDVD(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchForEditDVD() {
  yield takeLatest(editDVD.type, editDVDSaga);
}

function* removeDVDSaga({payload}) {
  try {
    const {endpoint, axiosOptions} = new ApiRequest(
      `${API_HOME}/${payload}`,
      HttpVerb.DELETE,
      HEADERS
    )

    yield call(axios, endpoint, axiosOptions);
    yield put(deleteDVD(payload))
  } catch (error) {
    console.log(error)
  }
}

function* watchForRemoveDVD() {
  yield takeEvery(removeDVD.type, removeDVDSaga)
}

function* dvdSaga() {
  yield all([watchForAddDVD(), watchForEditDVD(), watchForLoadDVDs(), watchForRemoveDVD()]);
}

export default dvdSaga;
