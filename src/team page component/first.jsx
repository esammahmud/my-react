import React, { useState } from 'react';
import './first.css'; // Import your CSS file
import leader1 from './esam mahmud.jpeg';

const firstcard = () => {

  return (
    
    <section>
      <div className='containerl'>
        <div className='contentl'>
          <div className='cardl'>
            <div className='card-contentl'>
              <div className='imagel'>
                <img src={leader1} />
              </div>
              <div className='media-iconsl'>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-github'></i>
              </div>
              <div className='name-professionl'>
                <span className='namel'>Someone Name</span>
                <span className='professionl'>web developer</span>
              </div>
              <div className='ratingl'>
                
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              </div>
              <div className='buttonl'>
              <button className='aboutMel'>About Me</button>
              <button className='hireMel'>Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
  
};


export default firstcard;
