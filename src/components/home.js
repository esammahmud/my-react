// Navbar.js

import React, { useState } from 'react';
import './home.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import logoImage from './final_logo.png';
import image1 from './space-car.png';
import rover1 from './rover1.jpg';
import rover2 from './rover6.jpg';
import rover3 from './rover3.jpeg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const customStyle = {
    color: '#009688'
  };
  const customStyled = {
    color: '#ff3e7f'
  };
  const customStyledd = {
    color: '#03a9f4'
  };
  const [ fix, setFix ] = useState(false)
  return (
    <div>
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
    
    <div>
      <h2 className='text'>WELCOME TO</h2>
      <h1 className='textt'>TEAM ATTENDANT</h1>
      <p className='texttt'>Lorem ipsum dolor sit amet. Non corrupti cupiditate ut tempore </p>
      <p className='textttt'>ipsum sit facere praesentium ut quos nesciunt.Eos consequatur emelt </p>
      <p className='texttttt'>Lorem ipsum dolor sit amet. Non corrupti cupiditate ut tempore</p>
      <p className='textttttt'>ipsum sit facere praesentium ut quos nesciunt.Eos consequatur emelt</p>
      <p className='texttttttt'>Lorem ipsum dolor sit amet. Non corrupti cupiditate ut tempore</p>
      
    </div>
    <div className='slider'>
      <figure>
        <div className='slide'>
          
          <img src={rover1} alt='' />
        </div>
        <div className='slide'>
          
          <img src={rover3} alt='' />
        </div>
        <div className='slide'>
          
          <img src={rover2} alt='' />
        </div>
        <div className='slide'>
          
          <img src={rover3} alt='' />
        </div>
      </figure>
    </div>
    <div className='container'>
      <div className='card' style={customStyle}>
        <div className='imgBx'>
        <img src={image1}/>

        </div>
        <div className='content'>
          <h2>MARS ROVER</h2>
          <p>ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo suii
          ronaldo ronaldo </p>
          <button href='#' className='button1'>Read More</button>
        </div>
      </div>
      <div className='card' style={customStyled}>
        <div className='imgBx'>
        <img src={image1}/>
        </div>
        <div className='content'>
        <h2>MARS ROVER</h2>
          <p>ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo suii
          ronaldo ronaldo </p>
          <button href='#' className='button2'>Read More</button>
        </div>
      </div>
      <div className='card' style={customStyledd}>
        <div className='imgBx'>
        <img src={image1}/>

        </div>
        <div className='content'>
        <h2>MARS ROVER</h2>
          <p>ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo suii
          ronaldo ronaldo </p>
          <button href='#' className='button3'>Read More</button>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Navbar;