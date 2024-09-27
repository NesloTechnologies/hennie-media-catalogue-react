import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import handleChange from '../../utils/handle-Change';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/form.scss';

const DVDAdd = () => {
  const [dvd, setDVD] = useState({
    title: '',
    director: '',
    duration: 0,
    leadActress: '',
    leadActor: '',
    releaseDate: new Date()
  });

  return (
    <section className="form">
      <header>
        <h1>Add&nbsp;DVD</h1>
        <Link to="/dvd">
          <CloseIcon />
        </Link>
      </header>
      <main>
        <form>
          <fieldset>
            <fieldset>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                id="title"
                type="text"
                value={dvd.title}
                onChange={(event) => handleChange(event, setDVD)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="director">Director</label>
              <input
                name="director"
                id="director"
                type="text"
                value={dvd.director}
                onChange={(event) => handleChange(event, setDVD)}
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
                value={dvd.duration}
                onChange={(event) => handleChange(event, setDVD)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="lead-actress">Lead&nbsp;Actress</label>
              <input
                name="leadActress"
                id="leadActress"
                type="text"
                value={dvd.leadActress}
                onChange={(event) => handleChange(event, setDVD)}
              />
            </fieldset>
          </fieldset>
          <fieldset>
            <fieldset>
              <label htmlFor="leadActor">Lead&nbsp;Actor</label>
              <input
                name="leadActor"
                id="leadActor"
                type="text"
                value={dvd.leadActor}
                onChange={(event) => handleChange(event, setDVD)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="releaseDate">Release&nbsp;Date</label>
              <input
                name="releaseDate"
                id="releaseDate"
                type="date"
                value={formatDate(dvd.releaseDate, 'fr-CA')}
                onChange={(event) => handleChange(event, setDVD)}
              />
            </fieldset>
          </fieldset>
          <fieldset>
            <button>Save</button>
            <Link to="/dvd">Cancel</Link>
          </fieldset>
        </form>
      </main>
    </section>
  );
};

export default DVDAdd;
