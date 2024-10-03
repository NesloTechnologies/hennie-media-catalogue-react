import { useDispatch } from 'react-redux';

import { addBookToStore } from '../../state/book/book.action';

import BookAdd from '../add/BookAdd';

const BookAddContainer = () => {
  const dispatch = useDispatch();

  const handleBookAdd = (book) => {
    dispatch(addBookToStore(book));
  };

  return <BookAdd handleBookAdd={handleBookAdd} />;
};

export default BookAddContainer;
