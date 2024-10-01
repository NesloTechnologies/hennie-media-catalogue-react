import { useDispatch } from 'react-redux';

import { addToStore } from '../../state/cd/cd.actions';

import CDAdd from './CDAdd';

const CDAddContainer = () => {
  const dispatch = useDispatch();

  const handleCDAdd = (cd) => {
    dispatch(addToStore(cd));
  };
  return <CDAdd handleCDAdd={handleCDAdd} />;
};

export default CDAddContainer;
