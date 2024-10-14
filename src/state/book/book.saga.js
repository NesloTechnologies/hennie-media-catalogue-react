import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ApiRequest, HttpVerb } from '@neslotech/ui-utils';

import { addBook, loadBooks, setBooks } from './book.reducer';

import HEADERS from '../headers';

const API_HOME = 'http://localhost:8080/api/books';

function* loadBooksSaga() {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(API_HOME, HttpVerb.GET, HEADERS);

    const response = yield call(axios, endpoint, axiosOptions);
    yield put(setBooks(response.data));
  } catch (error) {
    console.warn(error);
  }
}

function* watchForLoadBooks() {
  yield takeLatest(loadBooks.type, loadBooksSaga);
}

function* addBookSaga({ payload }) {
  try {
    const { endpoint, axiosOptions } = new ApiRequest(API_HOME, HttpVerb.POST, HEADERS, payload);

    yield call(axios, endpoint, axiosOptions);
    yield put(loadBooks());
  } catch (error) {
    console.warn(error);
  }
}

function* watchForAddBook() {
  yield takeLatest(addBook.type, addBookSaga);
}

function* bookSaga() {
  yield all([watchForLoadBooks(), watchForAddBook()]);
}

export default bookSaga;
