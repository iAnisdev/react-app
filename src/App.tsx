import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Setting from './Pages/Setting';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/Setting">Setting</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
      </ul>
    </nav>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Setting' element={<Setting />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
    </Routes>
    </>
  );
}

export default App;
