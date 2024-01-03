import React, { useState } from 'react';
import './second.css'; // Import your CSS file
import leader1 from './esam mahmud.jpeg';

const secondcard = () => {

  return (
    
    <section>
      <div className='containerr'>
        <div className='contentt'>
          <div className='cardd'>
            <div className='card-contentt'>
              <div className='imagee'>
                <img src={leader1} />
              </div>
              <div className='media-iconss'>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-github'></i>
              </div>
              <div className='name-professionn'>
                <span className='namee'>Someone Name</span>
                <span className='professionn'>web developer</span>
              </div>
              <div className='ratingg'>
                
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              </div>
              <div className='buttonn'>
              <button className='aboutMee'>About Me</button>
              <button className='hireMee'>Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
  
};


export default secondcard;
