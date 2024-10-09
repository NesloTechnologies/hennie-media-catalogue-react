import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { updateCDDispatch } from '../../state/cd/cd.reducer';

import CDEdit from '../edit/CDEdit';

const CDEditContainier = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const cds = useSelector(({ cdStore }) => cdStore.cds);
  const dispatch = useDispatch();

  const fetchCD = (id) => {
    return cds.find((cd) => cd.id === id);
  };

  const handleCDEdit = (cd) => {
    dispatch(updateCDDispatch(cd));
  };

  return <CDEdit id={id} handleCDEdit={handleCDEdit} fetchCD={fetchCD} />;
};

export default CDEditContainier;
