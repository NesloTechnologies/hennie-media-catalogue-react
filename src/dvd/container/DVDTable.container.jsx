import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadDVDs, removeDVD } from '../../state/dvd/dvd.reducer';

import DVDTable from '../table/DVDTable';

const DVDTableContainer = () => {
  const dvds = useSelector(({ dvdStore }) => dvdStore.dvds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDVDs());
  }, []);

  const deleteDVD = (id) => {
    dispatch(removeDVD(id));
  };

  return <DVDTable dvds={dvds} deleteDVD={deleteDVD} />;
};

export default DVDTableContainer;
