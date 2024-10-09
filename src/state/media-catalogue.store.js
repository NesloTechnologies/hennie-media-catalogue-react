import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import bookReducer from './book/book.reducer';
import cdReducer from './cd/cd.reducer';
import dvdReducer from './dvd/dvd.reducer';
import cdSaga from './cd/cd.saga'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cdStore: cdReducer,
    bookStore: bookReducer,
    dvdStore: dvdReducer
  },
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(cdSaga);

export default store;
