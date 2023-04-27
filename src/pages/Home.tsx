import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../img/bg.png';

const Home = () => {
  return (
    <>
      <div
        className='bg-cover h-screen w-full  bottom-32 relative rounded-b-3xl flex items-center justify-center'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div></div>
        <div>ĐẦM SEN PARK</div>
      </div>
    </>
  );
};

export default Home;
