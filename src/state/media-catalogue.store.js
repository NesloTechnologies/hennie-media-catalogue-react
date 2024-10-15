import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import authSaga from './auth/auth.saga';
import bookSaga from './book/book.saga';
import cdSaga from './cd/cd.saga';
import dvdSaga from './dvd/dvd.saga';

import authReducer from './auth/auth.reducer';
import bookReducer from './book/book.reducer';
import cdReducer from './cd/cd.reducer';
import dvdReducer from './dvd/dvd.reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cdStore: cdReducer,
    bookStore: bookReducer,
    dvdStore: dvdReducer,
    authStore: authReducer
  },
  middleware: () => [sagaMiddleware]
});

function* rootSaga() {
  yield all([cdSaga(), dvdSaga(), bookSaga(), authSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
