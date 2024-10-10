import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '@neslotech/ui-utils';

import { ReactComponent as ArrowIcon } from '../../asset/icon/arrow.svg';
import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';
import { ReactComponent as DeleteIcon } from '../../asset/icon/delete.svg';
import { ReactComponent as EditIcon } from '../../asset/icon/edit.svg';
import { ReactComponent as ViewIcon } from '../../asset/icon/view.svg';

import CDView from '../view/CDView';

import '../../stylesheet/table.scss';
import { useSelector } from 'react-redux';

const CDRow = ({ cd, setCDToDelete, setCDInStore }) => {
  const { id, title, artist, duration, releaseDate } = cd;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{duration}</td>
      <td>{formatDate(releaseDate, 'fr-CA')}</td>
      <td>
        <ViewIcon className="icon view-icon" onClick={setCDInStore} />
        <Link to={`cd/edit/${id}`}>
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

const DeleteCD = ({ cd, handleDeleteClose, removeCD }) => {
  const { title, id, artist, duration, releaseDate } = cd;

  const handleConfirmClick = () => {
    removeCD(id);
    handleDeleteClose();
  };

  return (
    <section className="modal">
      <header>
        <h1>Are you sure you want to delete this item?</h1>
        <button onClick={handleDeleteClose}>
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
        <dd>{formatDate(releaseDate, 'fr-CA')}</dd>
      </dl>
      <div>
        <button onClick={handleConfirmClick}>Confirm</button>
        <button onClick={handleDeleteClose}>Cancel</button>
      </div>
    </section>
  );
};

const CDTable = ({ cds, removeCD, setCDInStore }) => {
  const cd = useSelector(({cdStore}) => cdStore.cd);
  const [cdToDelete, setCDToDelete] = useState(undefined);

  const handleViewClose = () => {
    setCDInStore(undefined)
  }

  const handleDeleteClick = (cd) => {
    setCDToDelete(cd);
  };

  const handleDeleteClose = () => {
    setCDToDelete(undefined);
  };

  const tableRows = useMemo(
    () =>
      cds.map((cd) => (
        <CDRow
          key={cd.id}
          cd={cd}
          setCDInStore={() => setCDInStore(cd)}
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
        {cdToDelete && (
          <DeleteCD cd={cdToDelete} handleDeleteClose={handleDeleteClose} removeCD={removeCD} />
        )}
        {cd && <CDView cd={cd} handleViewClose={handleViewClose} />}
      </section>
    </main>
  );
};

export default CDTable;
