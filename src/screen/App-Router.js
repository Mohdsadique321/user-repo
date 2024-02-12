import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './signup-screen'
import Login from './login-screen'
import Home from '../screen/home-screen'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="Home"  element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
