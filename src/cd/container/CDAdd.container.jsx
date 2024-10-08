import { useDispatch } from 'react-redux';

import CDAdd from '../add/CDAdd';
import { addCDRequest } from '../../state/cd/cd.reducer';

const CDAddContainer = () => {
  const dispatch = useDispatch();

  const handleCDAdd = (cd) => {
    dispatch(addCDRequest(cd));
  };

  return <CDAdd handleCDAdd={handleCDAdd} />;
};

export default CDAddContainer;
