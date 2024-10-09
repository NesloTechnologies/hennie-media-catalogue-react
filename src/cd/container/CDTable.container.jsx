import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCD, setCDsDispatch } from '../../state/cd/cd.reducer';

import CDTable from '../table/CDTable';

const CDTableContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCDsDispatch());
  }, []);

  const cds = useSelector(({ cdStore }) => cdStore.cds);

  const removeCD = (id) => {
    dispatch(deleteCD(id));
  };

  return <CDTable cds={cds} removeCD={removeCD} />;
};

export default CDTableContainer;
