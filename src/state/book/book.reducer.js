import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from './book.action';

const initialState = {
  books: []
};

let nextId = 1;

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, { ...action.payload, id: nextId++ }] };

    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload.newBook : book
        )
      };

    case DELETE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.payload) };

    default:
      return state;
  }
};

export default bookReducer;
