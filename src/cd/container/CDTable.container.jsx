import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeCD, loadCDs } from '../../state/cd/cd.reducer';

import CDTable from '../table/CDTable';

const CDTableContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCDs());
  }, []);

  const cds = useSelector(({ cdStore }) => cdStore.cds);

  const deleteCD = (id) => {
    dispatch(removeCD(id));
  };

  return <CDTable cds={cds} deleteCD={deleteCD} />;
};

export default CDTableContainer;
