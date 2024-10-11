import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadBooks, removeBook } from '../../state/book/book.reducer';

import BookTable from '../table/BookTable';

const BookTableContainer = () => {
  const books = useSelector(({ bookStore }) => bookStore.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return <BookTable books={books} deleteBook={deleteBook} />;
};

export default BookTableContainer;
