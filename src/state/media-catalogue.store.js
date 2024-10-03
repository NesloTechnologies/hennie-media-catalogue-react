import { combineReducers, createStore } from 'redux';

import bookReducer from './book/book.reducer';
import cdReducer from './cd/cd.reducer';
import dvdReducer from './dvd/dvd.reducer';

const rootReducer = combineReducers({
  bookStore: bookReducer,
  dvdStore: dvdReducer,
  cdStore: cdReducer
});

const store = createStore(rootReducer);

export default store;
