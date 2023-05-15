import React from 'react';
import { Link } from 'react-router-dom';

interface CardEventProps {
  item: {
    img: string;
    title: string;
    author: string;
    datetime: string;
    price: string;
  };
}

const CardEvent: React.FC<CardEventProps> = ({ item }) => {
  const { img, title, author, datetime, price } = item;

  return (
    <div className='w-[22rem] h-[31rem] bg-bgCard rounded-xl'>
      <img src={img} className='rounded-tl-xl rounded-tr-xl ' alt='' />

      <div className='px-3 py-3'>
        <p className='text-3xl font-DMsan font-extrabold'>{title}</p>
        <p className='font-medium opacity-60'>{author}</p>
        <p>{datetime}</p>
        <p className='text-orange font-extrabold text-4xl'>{price} VNĐ</p>
        <div className='flex justify-start pt-4'>
          <div className='bg-[#BD000B] rounded-[0.5rem] pb-1'>
            <div className='w-52 bg-red text-center text-whiteText font-bold p-1 rounded-[0.5rem]'>
              <Link to='/event/xem-chi-tiet'>Xem chi tiết</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
