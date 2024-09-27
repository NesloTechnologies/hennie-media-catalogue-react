import React from 'react';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/modal.scss';

const DVDView = ({ dvd, closeView }) => {
  const { title, id, director, duration, leadActor, leadActress, releaseDate } = dvd;

  return (
    <section className="modal">
      <header>
        <h1>{title}</h1>
        <button onClick={closeView}>
          <CloseIcon />
        </button>
      </header>
      <dl>
        <dt>ID: </dt>
        <dd>{id}</dd>

        <dt>Director: </dt>
        <dd>{director}</dd>

        <dt>Lead Actor: </dt>
        <dd>{leadActor}</dd>

        <dt>Lead Actress: </dt>
        <dd>{leadActress}</dd>

        <dt>Duration: </dt>
        <dd>{duration}</dd>

        <dt>Release&nbsp;Date: </dt>
        <dd>{releaseDate}</dd>
      </dl>
    </section>
  );
};

export default DVDView;
