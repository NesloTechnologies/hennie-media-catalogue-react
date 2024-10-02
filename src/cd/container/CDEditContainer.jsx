import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { updateCDInStore } from '../../state/cd/cd.action';

import CDEdit from '../edit/CDEdit';

const CDEditContainier = () => {
  const location = useLocation();
  const id = location.state;
  const cds = useSelector((state) => state['cd-store'].cds);
  const dispatch = useDispatch();

  const fetchCD = (id) => {
    return cds.find((cd) => cd.id === id);
  };

  const handleCDEdit = (id, cd) => {
    dispatch(updateCDInStore(id, cd));
  };

  return <CDEdit id={id} handleCDEdit={handleCDEdit} fetchCD={fetchCD} />;
};

export default CDEditContainier;
