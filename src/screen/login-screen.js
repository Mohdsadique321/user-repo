import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setError, clearError } from '../actions/action';
import { useNavigate  } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.user !== null);

  const navigate = useNavigate(); 

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(clearError());

    if (isRegistered) {
      dispatch(loginUser({ email, password }));
      navigate('/home'); 
    } else {
      dispatch(setError('You need to register first.'));
    }
  };

  return (
    <body className="body">
      <div className="wrapper">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={onChangeEmail}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChangePassword}
              required
            />
          </div>

          <div className="policy">
            <input type="checkbox" required />
            <h3>I accept all terms & conditions</h3>
          </div>
          <div className="input-box button">
            <input type="submit" value="Login now" />
          </div>
          <div className="text">
            <h3>If already have an account?</h3>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Login;
