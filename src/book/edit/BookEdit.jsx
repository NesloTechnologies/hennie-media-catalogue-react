import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import handleChange from '../../utils/handle-change';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

const BookEdit = ({ id, fetchBook, handleBookEdit }) => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    id: 0,
    title: '',
    author: '',
    duration: '',
    releaseDate: new Date()
  });

  useEffect(() => {
    const loadBook = async () => {
      const book = await fetchBook(id);
      setBook(book);
    };

    loadBook();
  }, [id]);

  const handleSave = () => {
    handleBookEdit(book);
    navigate('/book/table');
  };

  return (
    <section className="form">
      <header>
        <h1>Edit Book</h1>
        <Link to="/book/table">
          <CloseIcon />
        </Link>
      </header>

      <form>
        <fieldset>
          <fieldset>
            <label htmlFor="title">Title</label>
            <input
              name="title"
              id="title"
              type="text"
              value={book.title}
              onChange={(event) => handleChange(event, setBook)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="author">Author</label>
            <input
              name="author"
              id="author"
              type="text"
              value={book.author}
              onChange={(event) => handleChange(event, setBook)}
            />
          </fieldset>
        </fieldset>

        <fieldset>
          <fieldset>
            <label htmlFor="duration">Duration</label>
            <input
              name="duration"
              id="duration"
              type="number"
              value={book.duration}
              onChange={(event) => handleChange(event, setBook)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="releaseDate">Release Date</label>
            <input
              name="releaseDate"
              id="releaseDate"
              type="date"
              value={formatDate(book.releaseDate, 'fr-CA')}
              onChange={(event) => handleChange(event, setBook)}
            />
          </fieldset>
        </fieldset>

        <fieldset>
          <button onClick={handleSave}>Save</button>

          <Link to="/book/table">Cancel</Link>
        </fieldset>
      </form>
    </section>
  );
};

export default BookEdit;
