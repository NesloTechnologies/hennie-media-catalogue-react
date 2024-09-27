import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import { ReactComponent as ArrowIcon } from '../../asset/icon/arrow.svg';
import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';
import { ReactComponent as DeleteIcon } from '../../asset/icon/delete.svg';
import { ReactComponent as EditIcon } from '../../asset/icon/edit.svg';
import { ReactComponent as ViewIcon } from '../../asset/icon/view.svg';

import CDView from '../view/CDView';

import '../../stylesheet/table.scss';

const CDRow = ({ cd, setCDView, setCDToDelete }) => {
  const { id, title, artist, duration, releaseDate } = cd;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{duration}</td>
      <td>{releaseDate}</td>
      <td>
        <ViewIcon className="icon view-icon" onClick={setCDView} />
        <Link to="cd/edit">
          <EditIcon className="icon edit-icon" />
        </Link>
        <DeleteIcon className="icon delete-icon" onClick={setCDToDelete} />
      </td>
      <td>
        <ArrowIcon />
      </td>
    </tr>
  );
};

const DeleteCD = ({ cd, closeDelete }) => {
  const { title, id, artist, duration, releaseDate } = cd;

  //TODO: Implement actual hhtp delete

  return (
    <section className="modal">
      <header>
        <h1>Are you sure you want to delete this item?</h1>
        <button onClick={closeDelete}>
          <CloseIcon />
        </button>
      </header>
      <dl>
        <dt>ID:</dt>
        <dd>{id}</dd>

        <dt>Title:</dt>
        <dd>{title}</dd>

        <dt>Artist:</dt>
        <dd>{artist}</dd>

        <dt>Duration:</dt>
        <dd>{duration}</dd>

        <dt>Release&nbsp;Date:</dt>
        <dd>{releaseDate}</dd>
      </dl>
      <fieldset>
        <button>Confirm</button>
        <button onClick={closeDelete}>Cancel</button>
      </fieldset>
    </section>
  );
};

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
  const [cdToView, setCDToView] = useState(undefined);
  const [cdToDelete, setCDToDelete] = useState(undefined);

  useEffect(() => {
    // TODO: Make actual API call to initialize cds

    setCds(mockCDs);
  }, []);

  const handleViewClick = (cd) => {
    setCDToView(cd);
  };

  const closeView = () => {
    setCDToView(undefined);
  };

  const handleDeleteClick = (cd) => {
    setCDToDelete(cd);
  };

  const closeDelete = () => {
    setCDToDelete(undefined);
  };

  const tableRows = useMemo(
    () =>
      cds.map((cd) => (
        <CDRow
          key={cd.id}
          cd={cd}
          setCDView={() => handleViewClick(cd)}
          setCDToDelete={() => handleDeleteClick(cd)}
        ></CDRow>
      )),
    [cds]
  );

  return (
    <main className="table">
      <header>
        <div>
          <h1>Media&nbsp;Catalogue</h1>
          <nav>
            <Link className="link" id="current-location" to="/">
              CD
            </Link>
            <span>|</span>
            <Link className="link" to="/dvd/table">
              DVD
            </Link>
            <span>|</span>
            <Link className="link" to="/book/table">
              Book
            </Link>
          </nav>
        </div>
        <Link to="/cd/add">Add&nbsp;CD</Link>
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
        {cdToDelete && <DeleteCD cd={cdToDelete} closeDelete={closeDelete} />}
        {cdToView && <CDView cd={cdToView} closeView={closeView} />}
      </section>
    </main>
  );
};

export default CDTable;
