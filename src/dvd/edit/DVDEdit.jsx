import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import handleChange from '../../utils/handle-Change';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

const DVDEdit = (id) => {
  const [dvd, setDVD] = useState({
    title: '',
    id: 0,
    director: '',
    duration: 0,
    leadActor: '',
    leadActress: '',
    releaseDate: ''
  });

  useEffect(() => {
    //TODO: add actual API call to fetch cd with id
    const mockDVD = {
      title: 'The Fantastic Mr. Fox',
      id: 1,
      director: 'Wes Anderson',
      duration: 135,
      leadActor: 'George Clooney',
      leadActress: 'Meryl Streep',
      releaseDate: formatDate('10-14-2009', 'fr-CA')
    };

    setDVD(mockDVD);
  }, [id]);

  const handleSave = () => {
    //TODO: add PUT implementation to API
  };

  return (
    <section className="form">
      <header>
        <h1>Edit CD</h1>
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
              <label htmlFor="leadActor">Lead Actor</label>
              <input
                name="leadActor"
                id="leadActor"
                type="text"
                value={dvd.leadActor}
                onChange={(event) => handleChange(event, setDVD)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="leadActress">Lead Actress</label>
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
              <label htmlFor="releaseDate">Release Date</label>
              <input
                name="releaseDate"
                id="releaseDate"
                type="date"
                value={dvd.releaseDate}
                onChange={(event) => handleChange(event, setDVD)}
              />
            </fieldset>
          </fieldset>

          <fieldset>
            <button onClick={handleSave}>Save</button>

            <Link to="/dvd">Cancel</Link>
          </fieldset>
        </form>
      </main>
    </section>
  );
};

export default DVDEdit;
