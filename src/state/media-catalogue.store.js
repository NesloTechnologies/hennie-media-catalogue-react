import { combineReducers, createStore } from 'redux';

import bookReducer from './book/book.reducer';
import cdReducer from './cd/cd.reducer';
import dvdReducer from './dvd/dvd.reducer';

const rootReducer = combineReducers({ books: bookReducer, dvds: dvdReducer, cds: cdReducer });

const store = createStore(rootReducer);

export default store;
