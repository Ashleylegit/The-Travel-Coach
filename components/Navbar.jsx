import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item">
        <Link href="/"><a>Home</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/destination-guide"><a>Destination Guide</a></Link>
      </li>
      <li className="nav-item">
        <Link to="/travel-planning"><a>Travel Planning</a></Link>
      </li>
      <li className="nav-item">
        <Link to="/community-forum"><a>Community Forum</a></Link>
      </li>
      <li className="nav-item">
        <Link to="/login"><a>Login</a></Link>
      </li>
      <li className="nav-item">
        <Link to="/register"><a>Register</a></Link>
      </li>
    </ul>
  </nav>
};

export default Navbar;
