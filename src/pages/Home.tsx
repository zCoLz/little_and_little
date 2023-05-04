import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../img/bg.png';
import DamSenPark from '../img/DamSenPark.png';
import Navbar from '../components/Navbar';
import Edge from '../img/giua.png';
import iconStar from '../img/IconStart.png';
const Home = () => {
  return (
    <>
      <Navbar />
      <section className='bg-bgImg bg-cover bg-center  flex justify-center items-center m-10 max-h-[60rem]'>
        <div className='bg-cover h-screen w-full  bottom-32 rounded-border-right '>
          {/* Logo chữ  */}
          <div className='flex gap-[30px] ml-32 mt-16'>
            <div>
              <img src={DamSenPark} alt='' />
            </div>
            <div className='font-sans text-whiteText font-extrabold text-7xl'>
              Đầm Sen <br /> Park
            </div>
          </div>
          <div className='flex gap-[30px] items-center ml-32  mt-20  '>
            <div className='bg-[#FFCA7B] rounded-xl pb-4 '>
              <div className='bg-[#FDE8B3] min-w-[60rem] min-h-[36.5rem] rounded-xl top-[21rem] p-1'>
                <div className='bg-bgCustom w-[56.25rem] h-[35rem] rounded-[30px] mt-2 ml-2 border-dashed border-2 border-[#FFB489]'>
                  <div className='p-10 font-DMsan font-[500] text-opacity-60 text-blackText text-xl leading-8'>
                    <p className=''>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse ac mollis justo. Etiam volutpat tellus quis
                      risus volutpat, ut posuere ex facilisis.
                    </p>
                    <br />
                    <p>
                      Suspendisse iaculis libero lobortis condimentum gravida.
                      Aenean auctor iaculis risus, lobortis molestie lectus
                      consequat a.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <img
              src={Edge}
              className='flex ml-[-70px] mr-[-100px]  h-[584px] mb-4'
              alt=''
            />
            <div className='bg-[#FFCA7B] rounded-xl pb-4 '>
              <div className='bg-[#FDE8B3] w-[34rem] h-[36.5rem] rounded-xl top-[340px] p-1'>
                <div className='bg-bgCustom w-[31rem] h-[35rem] rounded-[30px] mt-2 ml-6 border-dashed border-2 border-[#FFB489]'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
