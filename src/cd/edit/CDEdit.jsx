import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import handleChange from '../../utils/handle-Change';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/form.scss';

const CDEdit = () => {
  const location = useLocation();

  const [cd, setCd] = useState(location.state);

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
    </section>
  );
};

export default CDEdit;
