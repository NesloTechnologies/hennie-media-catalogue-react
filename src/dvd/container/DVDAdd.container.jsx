import { useDispatch } from 'react-redux';

import { addDVDToStore } from '../../state/dvd/dvd.action';

import DVDAdd from '../add/DVDAdd';

const DVDAddContainer = () => {
  const dispatch = useDispatch();

  const handleDVDAdd = (dvd) => {
    dispatch(addDVDToStore(dvd));
  };

  return <DVDAdd handleDVDAdd={handleDVDAdd} />;
};

export default DVDAddContainer;
