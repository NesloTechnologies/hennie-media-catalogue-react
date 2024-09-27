import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import handleChange from '../../utils/handle-Change';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/form.scss';

const BookAdd = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    duration: '',
    releaseDate: formatDate('01-01-1999', 'fr-CA')
  });

  return (
    <section className="form">
      <header>
        <h1>Add&nbsp;Book</h1>
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
            <label htmlFor="releaseDate">Release&nbsp;Date</label>
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
          <button>Add</button>

          <Link to="/book/table">Cancel</Link>
        </fieldset>
      </form>
    </section>
  );
};

export default BookAdd;
