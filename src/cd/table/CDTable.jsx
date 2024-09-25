import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import { ReactComponent as ArrowIcon } from '../../asset/icon/arrow.svg';
import { ReactComponent as DeleteIcon } from '../../asset/icon/delete.svg';
import { ReactComponent as EditIcon } from '../../asset/icon/edit.svg';
import { ReactComponent as ViewIcon } from '../../asset/icon/view.svg';

import ViewCD from '../view/ViewCD';

import '../../stylesheet/styles.scss';
import '../../stylesheet/table.scss';

const CDRow = ({ id, title, artist, duration, releaseDate, setCDView }) => (
  <tr key={id}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{artist}</td>
    <td>{duration}</td>
    <td>{releaseDate}</td>
    <td>
      <ViewIcon className="icon view-icon" onClick={setCDView} />
      <EditIcon className="icon edit-icon" />
      <DeleteIcon className="icon delete-icon" />
    </td>
    <td>
      <ArrowIcon />
    </td>
  </tr>
);

const mockCDs = [
  {
    id: 1,
    title: 'Nevermind',
    artist: 'Nirvana',
    duration: '48',
    releaseDate: formatDate('1991-04-24', 'fr-CA')
  },
  {
    id: 2,
    title: 'Gorillaz',
    artist: 'Gorillaz',
    duration: '61',
    releaseDate: formatDate('2001-03-26', 'fr-CA')
  }
];

const CDTable = () => {
  const [cds, setCds] = useState([]);
  const [cdView, setCDView] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // TODO: Make actual API call to initialize cds

    setCds(mockCDs);
  }, []);

  const toggleIsOpen = () => {
    setIsOpen((prevBool) => !prevBool);
  };

  const handleViewClick = (cd) => {
    setCDView(cd);
    toggleIsOpen();
  };

  const tableRows = useMemo(
    () =>
      cds.map((cd) => (
        <CDRow
          id={cd.id}
          title={cd.title}
          artist={cd.artist}
          duration={cd.duration}
          releaseDate={cd.releaseDate}
          setCDView={() => handleViewClick(cd)}
        ></CDRow>
      )),
    [cds]
  );

  return (
    <section className="table">
      <header>
        <div>
          <h1>Media&nbsp;Catalogue</h1>
          <nav>
            <Link className="link" id="current-location" to="/">
              CD
            </Link>
            <span>|</span>
            <Link className="link" to="/dvd-table">
              DVD
            </Link>
            <span>|</span>
            <Link className="link" to="/book-table">
              Book
            </Link>
          </nav>
        </div>
        <button>Add&nbsp;CD</button>
      </header>
      <section>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Duration</th>
              <th>Release Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        {isOpen && (
          <ViewCD
            className="dialog"
            id={cdView.id}
            title={cdView.title}
            artist={cdView.artist}
            duration={cdView.duration}
            releaseDate={cdView.releaseDate}
            toggleIsOpen={toggleIsOpen}
          />
        )}
      </section>
    </section>
  );
};

export default CDTable;
