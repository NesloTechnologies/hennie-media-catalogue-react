import React from 'react';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/modal.scss';
import '../../stylesheet/styles.scss';

const ViewCD = ({ title, id, artist, duration, releaseDate, toggleIsOpen }) => (
  <section className="modal">
    <div>
      <header>
        <h1>{title}</h1>
        <button onClick={toggleIsOpen}>
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
    </div>
  </section>
);

export default ViewCD;
