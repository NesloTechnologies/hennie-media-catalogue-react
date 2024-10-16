import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import handleChange from '../../util/handle-change';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

import '../../stylesheet/form.scss';

const CDEdit = ({ id, handleCDEdit, fetchCD }) => {
  const navigate = useNavigate();
  const [cd, setCD] = useState({
    id: 0,
    title: '',
    artist: '',
    duration: '',
    releaseDate: new Date()
  });

  useEffect(() => {
    const loadCD = async () => {
      const fetchedCD = await fetchCD(id);
      setCD((prevState) => ({ ...prevState, ...fetchedCD }));
    };

    loadCD();
  }, [id]);

  const handleSave = () => {
    handleCDEdit(cd);
    navigate('/cd/table');
  };

  return (
    <section className="form">
      <header>
        <h1>Edit CD</h1>
        <Link to="/cd/table">
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
            <label htmlFor="releaseDate">Release Date</label>
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
          <button onClick={handleSave}>Save</button>

          <Link to="/">Cancel</Link>
        </fieldset>
      </form>
    </section>
  );
};

export default CDEdit;
