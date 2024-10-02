import { useDispatch, useSelector } from 'react-redux';

import { deleteCDFromStore } from '../../state/cd/cd.actions';

import CDTable from '../table/CDTable';

const CDTableContainer = () => {
  const cds = useSelector((state) => state['cd-store'].cds);

  const dispatch = useDispatch();

  const removeCD = (id) => {
    dispatch(deleteCDFromStore(id));
  };

  return <CDTable cds={cds} removeCD={removeCD} />;
};

export default CDTableContainer;
