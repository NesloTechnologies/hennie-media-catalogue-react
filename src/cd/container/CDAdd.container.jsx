import { useDispatch } from 'react-redux';

import { addCDDispatch } from '../../state/cd/cd.reducer';

import CDAdd from '../add/CDAdd';

const CDAddContainer = () => {
  const dispatch = useDispatch();

  const handleCDAdd = (cd) => {
    dispatch(addCDDispatch(cd));
  };

  return <CDAdd handleCDAdd={handleCDAdd} />;
};

export default CDAddContainer;
