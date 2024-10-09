import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCD, loadCDsTrigger } from '../../state/cd/cd.reducer';

import CDTable from '../table/CDTable';

const CDTableContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCDsTrigger());
  }, []);

  const cds = useSelector(({ cdStore }) => cdStore.cds);

  const removeCD = (id) => {
    dispatch(deleteCD(id));
  };

  return <CDTable cds={cds} removeCD={removeCD} />;
};

export default CDTableContainer;
