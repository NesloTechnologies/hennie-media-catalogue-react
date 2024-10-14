import { useState } from 'react';
import { Link } from 'react-router-dom';

import handleChange from '../../util/handle-change';

import '../../stylesheet/auth.scss';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <section className="form auth">
      <header>
        <h1>Register</h1>
      </header>

      <form>
        <fieldset>
          <fieldset>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              id="username"
              type="text"
              value={user.username}
              onChange={(event) => handleChange(event, setUser)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              value={user.password}
              onChange={(event) => handleChange(event, setUser)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              id="confirmPassword"
              type="confirmPassword"
              value={user.confirmPassword}
              onChange={(event) => handleChange(event, setUser)}
            />
          </fieldset>
        </fieldset>

        <fieldset>
          <button>Register</button>

          <Link to="/">Login</Link>
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
