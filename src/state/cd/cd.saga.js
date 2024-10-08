import { call, takeEvery, put } from 'redux-saga/effects';
import { postCD } from '../../api/cd.api';
import { addCDRequest, addCDSuccess, addCDFailure } from './cd.reducer';

function* addCDSaga(action) {
  try {
    const response = yield call(postCD, action.payload);
    yield put(addCDSuccess(response.data))
  } catch (error) {
    yield put(addCDFailure(error))
  }
}

function* rootSaga() {
  yield takeEvery(addCDRequest.type, addCDSaga);
}

export default rootSaga;
