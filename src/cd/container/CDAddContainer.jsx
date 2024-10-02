import { useDispatch } from 'react-redux';

import { addCDToStore } from '../../state/cd/cd.actions';

import CDAdd from '../add/CDAdd';

const CDAddContainer = () => {
  const dispatch = useDispatch();

  const handleCDAdd = (cd) => {
    dispatch(addCDToStore(cd));
  };
  return <CDAdd handleCDAdd={handleCDAdd} />;
};

export default CDAddContainer;
