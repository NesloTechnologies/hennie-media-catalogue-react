import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './book/book.reducer';
import cdReducer from './cd/cd.reducer';
import dvdReducer from './dvd/dvd.reducer';

const store = configureStore({
  reducer: {
    cdStore: cdReducer,
    bookStore: bookReducer,
    dvdStore: dvdReducer
  }
});

export default store;
