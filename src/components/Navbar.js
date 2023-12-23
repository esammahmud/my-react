// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import logoImage from './final_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [ fix, setFix ] = useState(false)
  return (
    <div className='all in one'>
    <nav className="navbar">
      <div className="navbar-logo">
      
      <img src={logoImage} alt="" className="logo-img" />

      
      
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#project details">Project Details</a>
        <a href="#team">Team</a>
        <a href="#achievements">Achievements</a>
        <a href="#gallery">Gallery</a>
        <a href="#outreach&projects">Outreach & Projects</a>
        <a href="#contact">Contact</a>
        
        
        
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;