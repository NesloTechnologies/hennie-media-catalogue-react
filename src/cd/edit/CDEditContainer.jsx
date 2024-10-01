import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { updateToStore } from '../../state/cd/cd.actions';

import CDEdit from './CDEdit';

const CDEditContainier = () => {
  const location = useLocation();
  const id = location.state;
  const cds = useSelector((state) => state.cds);
  const dispatch = useDispatch();

  const fetchCD = (id) => {
    return cds.find((cd) => cd.id === id);
  };

  const handleCDEdit = (id, cd) => {
    dispatch(updateToStore(id, cd));
  };

  return <CDEdit id={id} handleCDEdit={handleCDEdit} fetchCD={fetchCD} />;
};

export default CDEditContainier;
