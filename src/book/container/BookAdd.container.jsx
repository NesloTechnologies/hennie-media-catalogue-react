import { useDispatch } from 'react-redux';

import { addBook } from '../../state/book/book.reducer';

import BookAdd from '../add/BookAdd';

const BookAddContainer = () => {
  const dispatch = useDispatch();

  const handleBookAdd = (book) => {
    dispatch(addBook(book));
  };

  return <BookAdd handleBookAdd={handleBookAdd} />;
};

export default BookAddContainer;
