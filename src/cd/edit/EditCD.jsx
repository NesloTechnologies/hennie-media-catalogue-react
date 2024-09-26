import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import handleChange from '../../utils/handle-Change';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/form.scss';
import '../../stylesheet/styles.scss';

const EditCD = ({ id }) => {
  const [cd, setCd] = useState({
    id: 0,
    title: '',
    artist: '',
    duration: 0,
    releaseDate: new Date()
  });

  useEffect(() => {
    // TODO: make api call to get cd information using id
    const mockCD = {
      id,
      title: 'Nevermind',
      artist: 'Nirvana',
      duration: 48,
      releaseDate: formatDate('1991-04-24', 'fr-CA')
    };

    setCd(mockCD);
  }, [id]);

  const handleSave = () => {
    // TODO: put back to API to save the updated CD
  };

  return (
    <section className="form">
      <header>
        <h1>Edit CD</h1>
        <Link to="/">
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
                value={cd.title}
                onChange={(event) => handleChange(event, setCd)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="artist">Artist</label>
              <input
                name="artist"
                id="artist"
                type="text"
                value={cd.artist}
                onChange={(event) => handleChange(event, setCd)}
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
                value={cd.duration}
                onChange={(event) => handleChange(event, setCd)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="releaseDate">Release Date</label>
              <input
                name="releaseDate"
                id="releaseDate"
                type="date"
                value={cd.releaseDate}
                onChange={(event) => handleChange(event, setCd)}
              />
            </fieldset>
          </fieldset>

          <fieldset>
            <button onClick={handleSave}>Save</button>

            <Link to="/">Cancel</Link>
          </fieldset>
        </form>
      </main>
    </section>
  );
};

export default EditCD;
