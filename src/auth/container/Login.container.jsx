import { useDispatch } from 'react-redux';

import { loginUser } from '../../state/auth/auth.reducer';

import Login from '../login/Login';

const LoginContainer = () => {
  const dispatch = useDispatch();

  const login = (user) => {
    dispatch(loginUser(user));
  };

  return <Login login={login} />;
};

export default LoginContainer;
