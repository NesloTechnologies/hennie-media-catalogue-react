import { useDispatch, useSelector } from 'react-redux';

import CDTable from '../table/CDTable';
import { deleteCD } from '../../state/cd/cd.reducer';

const CDTableContainer = () => {
  const cds = useSelector(({ cdStore }) => cdStore.cds);

  const dispatch = useDispatch();

  const removeCD = (id) => {
    dispatch((deleteCD(id)));
  };

  return <CDTable cds={cds} removeCD={removeCD} />;
};

export default CDTableContainer;
