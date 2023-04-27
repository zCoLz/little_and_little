import React from 'react';
import bg from '../img/bg.png';
const Event = () => {
  return (
    <div
      className='bg-cover h-screen w-full  bottom-32 relative rounded-b-3xl flex items-center justify-center'
      style={{ backgroundImage: `url(${bg})` }}
    >
      Sự Kiện
    </div>
  );
};

export default Event;
