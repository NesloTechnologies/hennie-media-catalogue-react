import { createSlice } from '@reduxjs/toolkit';

import { addItem, deleteItem, updateItem } from '../../util/state-util';

const initialState = {
  books: []
};

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    addBook: (state, action) => addItem(state.books, action.payload),
    updateBook: (state, action) => updateItem(state.books, action.payload),
    deleteBook: (state, action) => deleteItem(state.books, action.payload)
  }
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
