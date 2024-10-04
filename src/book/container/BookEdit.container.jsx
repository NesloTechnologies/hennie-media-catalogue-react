import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import BookEdit from '../edit/BookEdit';
import { updateBook } from '../../state/book/book.reducer';

const BookEditContainer = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const books = useSelector(({ bookStore }) => bookStore.books);
  const dispatch = useDispatch();

  const fetchBook = (id) => {
    return books.find((book) => book.id === id);
  };

  const handleBookEdit = (book) => {
    dispatch(updateBook(book));
  };

  return <BookEdit id={id} fetchBook={fetchBook} handleBookEdit={handleBookEdit} />;
};

export default BookEditContainer;
