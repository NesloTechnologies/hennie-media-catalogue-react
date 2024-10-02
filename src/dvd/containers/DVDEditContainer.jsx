import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { updateDVDInStore } from '../../state/dvd/dvd.action';

import DVDEdit from '../edit/DVDEdit';

const DVDEditContainer = () => {
  const location = useLocation();
  const id = location.state;
  const dispatch = useDispatch();
  const dvds = useSelector((state) => state['dvd-store'].dvds);

  const fetchDVD = (id) => {
    return dvds.find((dvd) => dvd.id === id);
  };

  const handleDVDEdit = (dvd) => {
    dispatch(updateDVDInStore(id, dvd));
  };

  return <DVDEdit id={id} handleDVDEdit={handleDVDEdit} fetchDVD={fetchDVD} />;
};

export default DVDEditContainer;
