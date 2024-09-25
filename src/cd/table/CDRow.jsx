import React from 'react';

import { ReactComponent as ArrowIcon } from '../../asset/icon/arrow.svg';
import { ReactComponent as DeleteIcon } from '../../asset/icon/delete.svg';
import { ReactComponent as EditIcon } from '../../asset/icon/edit.svg';
import { ReactComponent as ViewIcon } from '../../asset/icon/view.svg';

const CDRow = ({ id, title, artist, duration, releaseDate, setCDView }) => (
  <tr onClick={setCDView}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{artist}</td>
    <td>{duration}</td>
    <td>{releaseDate}</td>
    <td>
      <ViewIcon className="icon view-icon" />
      <EditIcon className="icon edit-icon" />
      <DeleteIcon className="icon delete-icon" />
    </td>
    <td>
      <ArrowIcon />
    </td>
  </tr>
);

export default CDRow;
