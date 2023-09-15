// Header.js
import React from 'react';
import MenuItem from './MenuItem'; // Make sure to import MenuItem component
import './Header.css'; // Import your header styles

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="menu-list">
          <MenuItem label="About" />
          <MenuItem label="Projects" />
          <MenuItem label="Courses" />
          <MenuItem label="Contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
