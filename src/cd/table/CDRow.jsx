import React from 'react';

import arrowIcon from '../../asset/icon/arrow.svg';
import deleteIcon from '../../asset/icon/delete.svg';
import editIcon from '../../asset/icon/edit.svg';
import viewIcon from '../../asset/icon/view.svg';

const CDRow = ({ id, title, artist, duration, releaseDate, setCDView }) => (
  <tr onClick={setCDView}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{artist}</td>
    <td>{duration}</td>
    <td>{releaseDate}</td>
    <td>
      <img src={viewIcon} alt="view icon" />
      <img src={editIcon} alt="edit icon" />
      <img src={deleteIcon} alt="delete icon" />
    </td>
    <td>
      <img src={arrowIcon} alt="arrow icon" />
    </td>
  </tr>
);

export default CDRow;
