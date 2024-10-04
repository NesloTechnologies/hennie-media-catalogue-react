import { useDispatch, useSelector } from 'react-redux';

import BookTable from '../table/BookTable';
import { deleteBook } from '../../state/book/book.reducer';

const BookTableContainer = () => {
  const books = useSelector(({ bookStore }) => bookStore.books);
  const dispatch = useDispatch();

  const removeBook = (id) => {
    dispatch(deleteBook(id));
  };

  return <BookTable books={books} removeBook={removeBook} />;
};

export default BookTableContainer;
