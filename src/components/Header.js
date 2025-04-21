// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/">
              Home
            </Link>
          </li>
          
          <li className="menu-item">
            <Link to="/Experience">
              Experience
            </Link>
          </li>

          <li className="menu-item">
            <Link to="/SignBridge">
              SignBridge
            </Link>
          </li>
          {/* <li className="menu-item">
            <Link to="./Projects">
              Projects
            </Link>
          </li>
          <MenuItem label="Contact" /> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
