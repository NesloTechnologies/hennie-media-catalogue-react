import { createSlice } from '@reduxjs/toolkit';

import { setLoading } from '../cd/cd.reducer';

const initialState = {
  books: [],
  loading: false
};

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    loadBooks: () => {
      setLoading(true);
    },
    setBooks: (state, action) => {
      state.books = action.payload;
      setLoading(false);
    },

    addBook: () => {
      setLoading(true);
    },

    editBook: () => {
      setLoading(true);
    },

    removeBook: () => {
      setLoading(true);
    }
  }
});

export const { loadBooks, setBooks, addBook, editBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
