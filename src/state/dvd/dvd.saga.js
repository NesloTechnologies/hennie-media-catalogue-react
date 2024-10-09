import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import { addDVD, addDVDTrigger } from './dvd.reducer';

import HEADERS from '../headers';

const API_HOME = 'http://localhost:8080/api/dvds';

function* addDVDSaga(action) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(
      API_HOME,
      HttpVerb.POST,
      HEADERS,
      action.payload
    );

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(addDVD(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForAddDVD() {
  yield takeLatest(addDVDTrigger.type, addDVDSaga);
}

function* dvdSaga() {
  yield all([watchForAddDVD()]);
}

export default dvdSaga;
