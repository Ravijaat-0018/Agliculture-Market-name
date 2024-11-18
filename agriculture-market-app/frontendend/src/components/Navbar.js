import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/buyer">Buyer Page</Link></li>
        <li><Link to="/customer">Customer Page</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


