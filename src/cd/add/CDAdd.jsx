import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import handleChange from '../../utils/handle-Change';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/form.scss';

const CDAdd = ({ handleCDAdd }) => {
  const navigate = useNavigate();
  const [cd, setCD] = useState({
    title: '',
    artist: '',
    duration: 0,
    releaseDate: new Date()
  });

  //TODO: add actual API create

  const handleAddClick = () => {
    handleCDAdd(cd);
    navigate('/');
  };

  return (
    <section className="form">
      <header>
        <h1>Add&nbsp;CD</h1>
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
              onChange={(event) => handleChange(event, setCD)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="artist">Artist</label>
            <input
              name="artist"
              id="artist"
              type="text"
              value={cd.artist}
              onChange={(event) => handleChange(event, setCD)}
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
              onChange={(event) => handleChange(event, setCD)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="releaseDate">Release&nbsp;Date</label>
            <input
              name="releaseDate"
              id="releaseDate"
              type="date"
              value={formatDate(cd.releaseDate, 'fr-CA')}
              onChange={(event) => handleChange(event, setCD)}
            />
          </fieldset>
        </fieldset>
        <fieldset>
          <button onClick={handleAddClick}>Add</button>

          <Link to="/">Cancel</Link>
        </fieldset>
      </form>
    </section>
  );
};

export default CDAdd;
