import React, { useState } from 'react';
import './cards.css'; // Import your CSS file
import image1 from '../img/space-car.png';



const Cards = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyle = {
    color: '#009688'
  };
  const customStyled = {
    color: '#ff3e7f'
  };
  const customStyledd = {
    color: '#03a9f4'
  };
  
  return (
    
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
  );
};

export default Cards;