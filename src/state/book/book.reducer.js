import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from './book.action';

const initialState = {
  books: []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, { ...action.payload }] };

    case UPDATE_BOOK:
      return {
        ...state,
        book: state.books.map((book) =>
          book.id === action.payload.id ? action.payload.book : book
        )
      };

    case DELETE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.payload.id) };

    default:
      return state;
  }
};

export default bookReducer;
