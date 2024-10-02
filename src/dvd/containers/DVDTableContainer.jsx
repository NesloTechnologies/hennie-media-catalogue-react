import { useDispatch, useSelector } from 'react-redux';

import { deleteDVDFromStore } from '../../state/dvd/dvd.action';

import DVDTable from '../table/DVDTable';

const DVDTableContainer = () => {
  const dvds = useSelector((state) => state['dvd-store'].dvds);

  const dispatch = useDispatch();

  const removeDVD = (id) => {
    dispatch(deleteDVDFromStore(id));
  };

  return <DVDTable dvds={dvds} removeDVD={removeDVD} />;
};

export default DVDTableContainer;
