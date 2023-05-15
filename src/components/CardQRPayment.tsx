import React from 'react';
import imgTick from '../img/tick 1.png';
interface CardQRPaymentProps {
  item: {
    img: string;
    code: string;
    title: string;
    datetime: string;
  };
}
const CardQRPayment: React.FC<CardQRPaymentProps> = ({ item }) => {
  const { img, title, code, datetime } = item;
  return (
    <div className=''>
      <div className='bg-bgCard w-60 h-96 flex justify-center rounded-md'>
        <div className='grid justify-items-center py-5'>
          <div className='w-32 flex justify-center items-center'>
            <img className='w-full' src={img} alt='Lỗi' />
          </div>
          <div className='grid justify-items-center gap-y-2 '>
            <p className='font-bold text-2xl'>{code}</p>
            <p className='font-semibold text-xl text-textYellow'>{title}</p>
            <p className='font-extrabold text-xl'>---</p>
            <p>{datetime}</p>
          </div>

          <div className='mt-6'>
            <img className='w-9' src={imgTick} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardQRPayment;
