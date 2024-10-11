import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCDs, removeCD } from '../../state/cd/cd.reducer';

import CDTable from '../table/CDTable';

const CDTableContainer = () => {
  const cds = useSelector(({ cdStore }) => cdStore.cds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCDs());
  }, []);

  const deleteCD = (id) => {
    dispatch(removeCD(id));
  };

  return <CDTable cds={cds} deleteCD={deleteCD} />;
};

export default CDTableContainer;
