import { useDispatch } from 'react-redux';

import { addDVD } from '../../state/dvd/dvd.reducer';

import DVDAdd from '../add/DVDAdd';

const DVDAddContainer = () => {
  const dispatch = useDispatch();

  const handleDVDAdd = (dvd) => {
    dispatch(addDVD(dvd));
  };

  return <DVDAdd handleDVDAdd={handleDVDAdd} />;
};

export default DVDAddContainer;
