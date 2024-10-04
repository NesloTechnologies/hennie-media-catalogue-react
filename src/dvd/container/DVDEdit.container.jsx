import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { updateDVD } from '../../state/dvd/dvd.reducer';

import DVDEdit from '../edit/DVDEdit';

const DVDEditContainer = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const dispatch = useDispatch();
  const dvds = useSelector(({ dvdStore }) => dvdStore.dvds);

  const fetchDVD = (id) => {
    return dvds.find((dvd) => dvd.id === id);
  };

  const handleDVDEdit = (dvd) => {
    dispatch(updateDVD(dvd));
  };

  return <DVDEdit id={id} handleDVDEdit={handleDVDEdit} fetchDVD={fetchDVD} />;
};

export default DVDEditContainer;
