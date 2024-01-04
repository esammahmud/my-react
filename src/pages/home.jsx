import React, { useState } from 'react';
import Navbar from '../home page component/navbar';
import Texts from '../home page component/fontss';
import Mainslider from '../home page component/mainslider';
import Cards from '../home page component/cards';

const Home = () => {

  return (
    <div>
      <Navbar />
      <Texts />
      <Mainslider />
      <Cards />
      

    </div>
  );
};

export default Home;