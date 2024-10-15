import { useDispatch } from 'react-redux';

import { registerUser } from '../../state/auth/auth.reducer';

import Register from '../register/Register';

const RegisterContainer = () => {
  const dispatch = useDispatch();

  const registerNewUser = (user) => {
    dispatch(registerUser(user));
  };

  return <Register registerNewUser={registerNewUser} />;
};

export default RegisterContainer;
