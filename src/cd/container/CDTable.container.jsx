import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCDTrigger, loadCDsTrigger, setCDTrigger } from '../../state/cd/cd.reducer';

import CDTable from '../table/CDTable';

const CDTableContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCDsTrigger());
  }, []);

  const cds = useSelector(({ cdStore }) => cdStore.cds);

  const setCDInStore = (cd) => {
    dispatch(setCDTrigger(cd));
  }

  const removeCD = (id) => {
    dispatch(deleteCDTrigger(id));
  };

  return <CDTable cds={cds} removeCD={removeCD} setCDInStore={setCDInStore}/>;
};

export default CDTableContainer;
