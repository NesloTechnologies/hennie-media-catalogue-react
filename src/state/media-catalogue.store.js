import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import cdSaga from './cd/cd.saga';
import dvdSaga from './dvd/dvd.saga';

import bookReducer from './book/book.reducer';
import cdReducer from './cd/cd.reducer';
import dvdReducer from './dvd/dvd.reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cdStore: cdReducer,
    bookStore: bookReducer,
    dvdStore: dvdReducer
  },
  middleware: () => [sagaMiddleware]
});

function* rootSaga() {
  yield all([cdSaga(), dvdSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
