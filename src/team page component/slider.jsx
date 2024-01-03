import React, { useState } from 'react';
import './slider.css'; 
import rover1 from './rover1.jpg';
import rover2 from './rover6.jpg';
import rover3 from './rover3.jpeg';
const Slider = () => {
  
  return (
    
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
  
  );
  
};


export default Slider;