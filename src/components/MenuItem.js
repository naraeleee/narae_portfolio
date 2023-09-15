// MenuItem.js
import React from 'react';

const MenuItem = ({ label }) => {
  return <li><a href={`#${label.toLowerCase()}`}>{label}</a></li>;
};

export default MenuItem;
