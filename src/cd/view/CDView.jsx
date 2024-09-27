import React from 'react';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/modal.scss';

const CDView = ({ cd, handleViewClose }) => {
  const { title, id, artist, duration, releaseDate } = cd;

  return (
    <section className="modal">
      <header>
        <h1>{title}</h1>
        <button onClick={handleViewClose}>
          <CloseIcon />
        </button>
      </header>
      <dl>
        <dt>ID: </dt>
        <dd>{id}</dd>

        <dt>Artist: </dt>
        <dd>{artist}</dd>

        <dt>Duration: </dt>
        <dd>{duration}</dd>

        <dt>Release&nbsp;Date: </dt>
        <dd>{releaseDate}</dd>
      </dl>
    </section>
  );
};

export default CDView;
