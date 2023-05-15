import React from 'react';
import Navbar from '../components/Navbar';
import { BiCalendar } from 'react-icons/bi';
import imgDT1 from '../img/img3.png';
import imgDT2 from '../img/img2.png';
const DetailsEvent = () => {
  return (
    <>
      {' '}
      <Navbar />
      <section className='bg-bgImg bg-cover bg-center flex justify-center m-10 min-h-[961px] '>
        <div className='flex flex-col justify-center items-center'>
          <div className='mb-10'>
            <p className='font-sans text-7xl text-whiteText'>Sự Kiện 1</p>
          </div>
          <div className='bg-[#FFCA7B] rounded-xl pb-4 lg:min-w-[50rem] xl:min-w-[60rem] 2xl:min-w-[75rem] min-h-[30.5rem] 2xl:mx-40'>
            <div className='bg-[#FDE8B3] lg:min-w-[50rem] xl:min-w-[60rem] 2xl:min-w-[75rem] min-h-[30.5rem] rounded-xl top-[21rem] p-1'>
              <div className='bg-bgCustom lg:min-w-[50rem] xl:min-w-[60rem] 2xl:min-w-[75rem] min-h-[30.5rem]  rounded-[30px]  border-dashed border-2 border-[#FFB489] '>
                <div className='p-10'>
                  <div className='grid grid-cols-4 gap-x-10'>
                    <div className=''>
                      <img className='rounded-lg h-64' src={imgDT1} alt='Lỗi' />
                      <div className='flex items-center gap-x-1 mt-5'>
                        <span className='text-yellow text-xl'>
                          <BiCalendar />
                        </span>
                        <span>30/05/2021 - 01/06/2021</span>
                      </div>
                      <p className='font-medium opacity-60'>Đầm sen Park</p>
                      <p className='text-4xl text-orange font-bold'>
                        25.000 VNĐ
                      </p>
                    </div>
                    <div className='w-64'>
                      <p>
                        <span className='text-orange font-bold text-xl '>
                          Lorem Ipsum{' '}
                        </span>{' '}
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                    <div className='w-64 grid gap-y-5'>
                      <img className='rounded-lg ' src={imgDT2} alt='' />
                      <span className=''>
                        Lorem Ipsum is not simply random text. It has roots in a
                        piece of classical Latin literature from 45 BC, making
                        it over 2000 years old. words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word
                        in classical literature,
                      </span>
                    </div>
                    <div className='w-64 grid gap-y-5'>
                      <span>
                        Lorem Ipsum is not simply random text. It has roots in a
                        piece of classical Latin literature from 45 BC, making
                        it over 2000 years old. words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word
                        in classical literature,
                      </span>
                      <img className='rounded-lg ' src={imgDT2} alt='' />
                    </div>
                  </div>
                </div>

                <div className='flex justify-center items-center font-bold font-serif text-2xl p-2'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsEvent;
