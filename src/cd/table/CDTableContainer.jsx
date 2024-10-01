import { useDispatch, useSelector } from 'react-redux';

import { deleteFromStore } from '../../state/cd/cd.actions';

import CDTable from './CDTable';

const CDTableContainer = () => {
  const cds = useSelector((state) => state.cds);
  const dispatch = useDispatch();

  const removeCD = (id) => {
    dispatch(deleteFromStore(id));
  };

  return <CDTable cds={cds} removeCD={removeCD} />;
};

export default CDTableContainer;
