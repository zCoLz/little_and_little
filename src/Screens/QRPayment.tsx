import React from 'react';
import Navbar from '../components/Navbar';
import CardQRPayment from '../components/CardQRPayment';

const QRList = [
  {
    title: 'VÉ CỔNG',
    code: 'ALT20210501',
    datetime: 'Ngày sử dụng: 31/05/2021',
    img: require('../img/QrCode.png'),
  },
];
const QRCodeCard = [...Array(4)].map((_, i) => (
  <div key={i}>
    {QRList.map((item) => (
      <CardQRPayment item={item} />
    ))}
  </div>
));
const QRPayment = () => {
  return (
    <>
      <Navbar />

      <section className='bg-bgImg bg-cover bg-center  flex justify-center m-10 min-h-[961px] '>
        <div className='flex flex-col justify-center items-center gap-y-10'>
          <div>
            <p className='text-whiteText text-7xl font-sans'>
              Thanh Toán Thành công
            </p>
          </div>
          <div className='bg-[#FFCA7B] rounded-xl pb-4 lg:min-w-[50rem] xl:min-w-[60rem] 2xl:min-w-[75rem] min-h-[30.5rem] 2xl:mx-40'>
            <div className='bg-[#FDE8B3] lg:min-w-[50rem] xl:min-w-[60rem] 2xl:min-w-[75rem] min-h-[30.5rem] rounded-xl top-[21rem] p-1'>
              <div className='bg-bgCustom lg:min-w-[50rem] xl:min-w-[60rem] 2xl:min-w-[75rem] min-h-[30.5rem]  rounded-[30px]  border-dashed border-2 border-[#FFB489] '>
                <div className='flex justify-center gap-x-[1rem] p-10'>
                  {QRCodeCard}
                </div>
                <div className='flex justify-between mx-24'>
                  <div className=' font-semibold opacity-70 pb-2'>
                    Số lượng: 12 vé
                  </div>
                  <div className=' font-semibold opacity-50 pb-2'>
                    Trang 1/3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-x-3 '>
            <div className='bg-[#BD000B] rounded-md pb-1'>
              <div className='w-36 h-8 bg-red rounded-md py-2 text-center font-sans text-base text-whiteText'>
                <button>Tải về</button>
              </div>
            </div>
            <div className='bg-[#BD000B] rounded-md pb-1'>
              <div className='w-36 h-8 bg-red rounded-md  py-2 text-center font-sans text-base text-whiteText'>
                <button>Gửi Mail</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QRPayment;
