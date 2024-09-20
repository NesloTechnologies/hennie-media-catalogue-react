import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';

import closeIcon from '../../asset/icon/close.svg';

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
      releaseDate: moment(new Date('1991-04-24')).format('YYYY-MM-DD')
    };

    setCd(mockCD);
  }, [id]);

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    if (key === 'releaseDate') {
      setCd((prevCD) => ({
        ...prevCD,
        releaseDate: moment(new Date(value)).format('YYYYY-MM-DD')
      }));
    }

    setCd((prevCD) => ({
      ...prevCD,
      [key]: value
    }));
  };

  const handleSave = () => {
    // PUT back to API to save the updated CD
    console.log(cd);
  };

  return (
    <section className="edit">
      <header>
        <h1>Edit CD</h1>
        <button>
          <img src={closeIcon} alt="close icon"></img>
        </button>
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
                onChange={(event) => handleChange(event)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="artist">Artist</label>
              <input
                name="artist"
                id="artist"
                type="text"
                value={cd.artist}
                onChange={(event) => handleChange(event)}
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
                onChange={(event) => handleChange(event)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="releaseDate">Release Date</label>
              <input
                name="releaseDate"
                id="releaseDate"
                type="date"
                value={cd.releaseDate}
                onChange={(event) => handleChange(event)}
              />
            </fieldset>
          </fieldset>

          <fieldset>
            <button onClick={handleSave}>Save</button>

            <button>Cancel</button>
          </fieldset>
        </form>
      </main>
    </section>
  );
};

export default EditCD;
