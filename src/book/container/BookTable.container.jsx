import { useDispatch, useSelector } from 'react-redux';

import { deleteBook } from '../../state/book/book.reducer';

import BookTable from '../table/BookTable';

const BookTableContainer = () => {
  const books = useSelector(({ bookStore }) => bookStore.books);
  const dispatch = useDispatch();

  const removeBook = (id) => {
    dispatch(deleteBook(id));
  };

  return <BookTable books={books} removeBook={removeBook} />;
};

export default BookTableContainer;
