import { useDispatch } from 'react-redux';

import BookAdd from '../add/BookAdd';
import { addBook } from '../../state/book/book.reducer';

const BookAddContainer = () => {
  const dispatch = useDispatch();

  const handleBookAdd = (book) => {
    dispatch(addBook(book));
  };

  return <BookAdd handleBookAdd={handleBookAdd} />;
};

export default BookAddContainer;
