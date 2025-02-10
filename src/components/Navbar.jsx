import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="nav-container">
      <div className="nav-links">
        <h1><Link to="/">Home</Link></h1>
        <h1><Link to="/about">About Us</Link></h1>
        <h1><Link to="/todo">Todo</Link></h1>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
