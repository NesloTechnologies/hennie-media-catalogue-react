export const ADD_BOOK = 'ADD_BOOK';
export const GET_BOOKS = 'GET_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export const addBookToStore = (book) => ({
  type: ADD_BOOK,
  payload: book
});

export const updateBookInStore = (id, newBook) => ({
  type: UPDATE_BOOK,
  payload: { id, newBook }
});

export const deleteBookFromStore = (id) => ({
  type: DELETE_BOOK,
  payload: id
});
