import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../asset/icon/arrow.svg';
import { ReactComponent as CloseIcon } from '../../asset/icon/close.svg';
import { ReactComponent as DeleteIcon } from '../../asset/icon/delete.svg';
import { ReactComponent as EditIcon } from '../../asset/icon/edit.svg';
import { ReactComponent as ViewIcon } from '../../asset/icon/view.svg';

import DVDView from '../view/DVDView';

import '../../stylesheet/dvd-table.scss';
import '../../stylesheet/table.scss';

const DVDRow = ({ dvd, setDVDToView, setDVDToDelete }) => {
  const { id, title, director, leadActor, leadActress, duration, releaseDate } = dvd;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{director}</td>
      <td>{leadActor}</td>
      <td>{leadActress}</td>
      <td>{duration}</td>
      <td>{releaseDate}</td>
      <td>
        <ViewIcon className="icon view-icon" onClick={setDVDToView} />
        <Link to={`/dvd/edit/${id}`}>
          <EditIcon className="icon edit-icon" />
        </Link>
        <DeleteIcon className="icon delete-icon" onClick={setDVDToDelete} />
      </td>
      <td>
        <ArrowIcon />
      </td>
    </tr>
  );
};

const DeleteDVD = ({ dvd, handleDeleteClose, deleteDVD }) => {
  const { title, id, director, leadActor, leadActress, duration, releaseDate } = dvd;

  const handleConfirmClick = () => {
    deleteDVD(id);
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

        <dt>Director:</dt>
        <dd>{director}</dd>

        <dt>Lead&nbsp;Actor:</dt>
        <dd>{leadActor}</dd>

        <dt>Lead&nbsp;Actress:</dt>
        <dd>{leadActress}</dd>

        <dt>Duration:</dt>
        <dd>{duration}</dd>

        <dt>Release&nbsp;Date:</dt>
        <dd>{releaseDate}</dd>
      </dl>
      <div>
        <button onClick={handleConfirmClick}>Confirm</button>
        <button onClick={handleDeleteClose}>Cancel</button>
      </div>
    </section>
  );
};

const DVDTable = ({ dvds, deleteDVD }) => {
  const [dvdToView, setDVDToView] = useState(undefined);
  const [dvdToDelete, setDVDToDelete] = useState(undefined);

  const handleViewClick = (dvd) => {
    setDVDToView(dvd);
  };

  const handleDeleteClick = (dvd) => {
    setDVDToDelete(dvd);
  };

  const handleViewClose = () => {
    setDVDToView(undefined);
  };

  const handleDeleteClose = () => {
    setDVDToDelete(undefined);
  };

  const tableRows = useMemo(
    () =>
      dvds.map((dvd) => (
        <DVDRow
          key={dvd.id}
          dvd={dvd}
          setDVDToDelete={() => handleDeleteClick(dvd)}
          setDVDToView={() => handleViewClick(dvd)}
        />
      )),
    [dvds]
  );

  return (
    <main className="table dvd-table">
      <header>
        <div>
          <h1>Media&nbsp;Catalogue</h1>
          <nav>
            <Link className="link" to="/cd/table">
              CD
            </Link>
            <span>|</span>
            <Link className="link" id="current-location" to="/dvd/table">
              DVD
            </Link>
            <span>|</span>
            <Link className="link" to="/book/table">
              Book
            </Link>
          </nav>
        </div>
        <Link to="/dvd/add">Add&nbsp;DVD</Link>
      </header>
      <section>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Director</th>
              <th>Lead Actor</th>
              <th>Lead Actress</th>
              <th>Duration</th>
              <th>Release Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        {dvdToView && <DVDView dvd={dvdToView} handleViewClose={handleViewClose} />}
        {dvdToDelete && (
          <DeleteDVD
            dvd={dvdToDelete}
            handleDeleteClose={handleDeleteClose}
            deleteDVD={deleteDVD}
          />
        )}
      </section>
    </main>
  );
};

export default DVDTable;
