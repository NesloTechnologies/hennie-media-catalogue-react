const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book
});

const getBook = (id) => ({
  type: 'GET_BOOK',
  payload: id
});

const updateBook = (id, newBook) => ({
  type: 'UPDATE_BOOK',
  payload: { id, newBook }
});

const deleteBook = (id) => ({
  type: 'DELETE_BOOK',
  payload: id
});

export { addBook, getBook, updateBook, deleteBook };
