import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logoLAL.png';
import { PhoneOutlined } from '@ant-design/icons';
import bg from '../img/bg.png';
const navMenuData = [
  {
    title: 'Trang chủ',
    link: '/',
  },
  {
    title: 'Sự kiện',
    link: '/event',
  },
  {
    title: 'Liên hệ',
    link: '/contact',
  },
];
const Navbar = () => {
  return (
    //bg-[#FF7A00]
    <>
      <header className='h-20  fixed top-0 left-0 right-0'>
        <div className=' flex justify-between h-full bg-[#FF7A00] rounded-b-[35%] shadow-2xl'>
          <div>
            <Link to='/'>
              <img src={logo} className='w-[15rem] h-20 ml-[10rem]' />
            </Link>
          </div>
          <div className='flex justify-center items-center gap-x-[212px] '>
            <ul className=' flex items-center gap-x-20'>
              {navMenuData.map((item) => (
                <li
                  key={item.title}
                  className='flex text-lg font-bold text-whiteText w-28'
                >
                  <NavLink
                    to={item.link}
                    className={({ isActive, isPending }) =>
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex items-center w-32 justify-evenly mr-[20rem] text-whiteText'>
            <span className='w-8 h-8 border p-1 rounded-full flex items-center justify-center'>
              <PhoneOutlined />
            </span>
            <p className='text-base font-medium'>0123456789</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
