import { useDispatch } from 'react-redux';

import { addCDTrigger } from '../../state/cd/cd.reducer';

import CDAdd from '../add/CDAdd';

const CDAddContainer = () => {
  const dispatch = useDispatch();

  const handleCDAdd = (cd) => {
    dispatch(addCDTrigger(cd));
  };

  return <CDAdd handleCDAdd={handleCDAdd} />;
};

export default CDAddContainer;
