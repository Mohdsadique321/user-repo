import React, { useState } from "react";
import './style.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { setUser, clearError,setError } from '../actions/action'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); 

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password.length >= 8 && password.length <= 10) {
      dispatch(setUser({email,password }));
      dispatch(clearError());
    } else {
      dispatch(setError('Invalid email or password.'));
    }
  };

  return (
    <body className="body">
      <div className="wrapper">
        <h2>Registration</h2>
        <form onSubmit={handleRegister}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={onChangeUsername}
              required
            />
          </div>
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
              placeholder="Create password"
              value={password}
              onChange={onChangePassword}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="policy">
            <input type="checkbox" required />
            <h3>I accept all terms & condition</h3>
          </div>
          <div className="input-box button">
            <input type="submit" value="Register Now" />
          </div>
        </form>

        <div className="text">
          <Link to='/login'>If already have an account? Login</Link>
        </div>
      </div>
    </body>
  );
};

export default Register;
