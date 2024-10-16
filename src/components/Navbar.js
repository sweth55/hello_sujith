import React from 'react';
import './Navbar.css'; // Import Navbar-specific styles

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
      <li><a href="#name">Sai Sujith</a></li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
