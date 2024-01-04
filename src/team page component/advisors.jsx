import React, { useState } from 'react';
import './advisors.css'; // Import your CSS file
import leader1 from '../img/esam mahmud.jpeg';

const Advisorscard  = () => {
  return (
    <div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>
    
    <div className='teamo'>
      <div className='containeo'>
        <div className='section-titleo'>
          <h2> -- ADVISORS -- </h2>
          
        </div>
        <div className='row'>
          
          <div className='col-lg-6 mt-4'>
            <div className='membero d-flex align-items-start'>
              
              <div className='member-infoo'>
                <h4>SOMEONE NAME</h4>
                <span>[ your knowledge ]</span>
                <p>some of information................................................................</p>
              </div>
              <div className='teampico'>
                <img src={leader1} className='img-fluid' alt='team1'/>
              </div>
              <div className='socialo'>
                <a href=''><i className='bi bi-facebook'></i></a>
                <a href=''><i className='bi bi-instagram'></i></a>
                <a href=''><i className='bi bi-linkedin'></i></a>
                <a href=''><i className='bi bi-whatsapp'></i></a>
              </div>
              <div className='under'>
                <p className='fonts'>some of information will be there . bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
  
};


export default Advisorscard;