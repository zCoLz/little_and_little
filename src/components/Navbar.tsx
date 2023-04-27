import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logoLAL.png';
import { PhoneOutlined } from '@ant-design/icons';
import bg from '../img/bg.png';
const Navbar = () => {
  return (
    <>
      <nav className='bg-[#FF7A00] w-full h-[107px] rounded-border-custom shadow-2xl z-50 sticky '>
        <div className='flex justify-evenly items-center text-white '>
          <NavLink to='/'>
            <img src={logo} className='w-[229px] h-[91px]' alt='' />
          </NavLink>
          <ul className=' w-96 flex justify-between items-center font-semibold text-lg '>
            <NavLink
              className='hover:border-white border-2 border-transparent rounded-md px-2 transition-all'
              to='/'
            >
              Trang chủ
            </NavLink>
            <NavLink
              className='hover:border-white border-2 border-transparent rounded-md px-2 transition-all'
              to='/event'
            >
              Sự Kiện
            </NavLink>
            <NavLink
              className='hover:border-white border-2 border-transparent rounded-md px-2 transition-all'
              to='/contact'
            >
              Liên hệ
            </NavLink>
          </ul>
          <div className='flex items-center w-32 justify-evenly'>
            <span className='w-8 h-8 border p-1 rounded-full flex items-center justify-center'>
              <PhoneOutlined />
            </span>
            <p className='text-base font-medium'>012345678</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
