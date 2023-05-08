import React from 'react';
import bg from '../img/bg.png';
import Navbar from '../components/Navbar';
import CardEvent from '../components/CardEvent';
const eventList = [
  {
    title: 'Sự kiện 1',
    author: 'Đầm Sen Park',
    datetime: '30/05/2021 - 01/06/2021',
    price: '25.000',
    img: require('../img/img1.png'),
  },
  {
    title: 'Sự kiện 1',
    author: 'Đầm Sen Park',
    datetime: '30/05/2021 - 01/06/2021',
    price: '25.000',
    img: require('../img/img1.png'),
  },
  {
    title: 'Sự kiện 3',
    author: 'Đầm Sen Park',
    datetime: '30/05/2021 - 01/06/2021',
    price: '50.000',
    img: require('../img/img2.png'),
  },
  {
    title: 'Sự kiện 4',
    author: 'Đầm Sen Park',
    datetime: '30/05/2021 - 01/06/2021',
    price: '55.000',
    img: require('../img/img3.png'),
  },
];
const Event = () => {
  return (
    <div>
      <Navbar />
      <section className='bg-bgImg bg-cover bg-center  flex justify-center items-center m-10 min-h-[961px]'>
        <div className='flex justify-center flex-col '>
          <div className='text-center mb-28'>
            <h1 className='text-8xl font-sans text-whiteText '>
              Sự Kiện Nổi Bật
            </h1>
          </div>
          <div className='m-auto grid grid-cols-4 gap-x-8 rounded-xl'>
            {eventList.map((item) => (
              <CardEvent item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
