import React, { useState } from 'react';
import './slider.css'; 
import rover1 from '../img/rover1.jpg';
import rover2 from '../img/rover6.jpg';
import rover3 from '../img/rover3.jpeg';
const Slider = () => {
  
  return (
    <figure>
    <div className='slider'>
      
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
      
    </div>
    </figure>
  
  );
  
};


export default Slider;