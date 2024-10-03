import { useDispatch, useSelector } from 'react-redux';

import { deleteBookFromStore } from '../../state/book/book.action';

import BookTable from '../table/BookTable';

const BookTableContainer = () => {
  const books = useSelector(({ bookStore }) => bookStore.books);
  const dispatch = useDispatch();

  const removeBook = (id) => {
    dispatch(deleteBookFromStore(id));
  };

  return <BookTable books={books} removeBook={removeBook} />;
};

export default BookTableContainer;
