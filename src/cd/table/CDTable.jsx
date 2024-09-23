import React, { useEffect, useState } from 'react';

import { formatDate } from '@neslotech/ui-utils';

import closeIcon from '../../asset/icon/close.svg';

import ViewCD from '../view/ViewCD';
import CDRow from './CDRow';

import '../../stylesheet/styles.scss';
import '../../stylesheet/table.scss';

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

  useEffect(() => {
    // TODO: Make actual API call to initialize cds

    setCds(mockCDs);
  }, []);

  const tableRows = cds.map((cd) => (
    <CDRow
      key={cd.id}
      id={cd.id}
      title={cd.title}
      artist={cd.artist}
      duration={cd.duration}
      releaseDate={cd.releaseDate}
    ></CDRow>
  ));

  return (
    <section className="table">
      <header>
        <div>
          <h1>Media&nbsp;Catalogue</h1>
          <nav>
            <button id="current-location" href="../table/cd-table.html">
              CD
            </button>
            <span>|</span>
            <button href="../../dvd/table/dvd-table.html">DVD</button>
            <span>|</span>
            <button href="../../book/table/book-table.html">Book</button>
          </nav>
        </div>
        <button>Add&nbsp;CD</button>
      </header>
      <main>
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
      </main>
    </section>
  );
};

export default CDTable;
