import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import handleChange from '../../utils/handle-Change';

import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';

const DVDEdit = ({ id, handleDVDEdit, fetchDVD }) => {
  const navigate = useNavigate();

  const [dvd, setDVD] = useState({
    title: '',
    id: 0,
    director: '',
    duration: 0,
    leadActor: '',
    leadActress: '',
    releaseDate: new Date()
  });

  useEffect(() => {
    const loadDVD = async () => {
      const dvd = await fetchDVD(id);
      setDVD((prevState) => ({ ...prevState, ...dvd }));
    };

    loadDVD();
  }, [id, fetchDVD]);

  const handleSave = () => {
    handleDVDEdit(dvd);
    navigate('/dvd/table');
  };

  return (
    <section className="form">
      <header>
        <h1>Edit DVD</h1>
        <Link to="/dvd/table">
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
              value={formatDate(dvd.releaseDate, 'fr-CA')}
              onChange={(event) => handleChange(event, setDVD)}
            />
          </fieldset>
        </fieldset>

        <fieldset>
          <button onClick={handleSave}>Save</button>

          <Link to="/dvd/table">Cancel</Link>
        </fieldset>
      </form>
    </section>
  );
};

export default DVDEdit;
