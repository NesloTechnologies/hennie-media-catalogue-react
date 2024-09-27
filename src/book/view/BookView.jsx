import React from 'react';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/modal.scss';

const BookView = ({ book }) => {
  const { id, title, author, duration, releaseDate } = book;

  return (
    <section className="modal">
      <header>
        <h1>{title}</h1>
        <button>
          <CloseIcon />
        </button>
      </header>
      <dl>
        <dt>ID: </dt>
        <dd>{id}</dd>

        <dt>Author: </dt>
        <dd>{author}</dd>

        <dt>Duration: </dt>
        <dd>{duration}</dd>

        <dt>Release&nbsp;Date: </dt>
        <dd>{releaseDate}</dd>
      </dl>
    </section>
  );
};

export default BookView;
