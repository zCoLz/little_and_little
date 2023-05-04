import React from 'react';

const CardEvent = ({ item }) => {
  const { img, title, author, datetime, price } = item;
  return (
    <div className='w-[22rem] h-[31rem] bg-bgCard rounded-xl'>
      <img src={img} className='rounded-tl-xl rounded-tr-xl ' alt='' />

      <div>
        <p className=' text-3xl font-DMsan px-3 py-3'>{title}</p>
        <p>{author}</p>
        <p>{datetime}</p>
        <p>{price} VNĐ</p>
        <button>Xem chi tiết</button>
      </div>
    </div>
  );
};

export default CardEvent;
