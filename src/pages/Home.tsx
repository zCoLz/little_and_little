import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../img/bg.png';
import DamSenPark from '../img/DamSenPark.png';
import Navbar from '../components/Navbar';
import Edge from '../img/giua.png';
import TextField from '../components/TextField';
import { BiCalendar } from 'react-icons/bi';
import Star from '../components/Star';
import TextFieldNumber from '../components/TextFieldNumber';
import TextFieldPhone from '../components/TextFieldPhone';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Lisa from '../img/LisaAmold.png';
import KC5 from '../img/KC5.png';
import KC1 from '../img/KC1.png';
import KC2 from '../img/KC2.png';
import KC3 from '../img/KC3.png';
import KC4 from '../img/KC4.png';
import NhungDuaTre from '../img/NhungDuaTre.png';

import {
  setDate,
  setEmail,
  setName,
  setPackage,
  setPhone,
  setQuantity,
} from '../store/reducer/ticketSlice';
import { db } from '../firebase'; // Import đường dẫn tới file kết nối Firestore
import { collection, addDoc } from 'firebase/firestore';
import { DatePicker, Select } from 'antd';
const { Option } = Select;
const Home: React.FC = () => {
  const [isvalue, setIsValue] = useState('Gói gia đình');
  const handleDateChange = (date: any, dateString: string) => {
    // Handle date change here
    console.log('Select Date', date);
    console.log('Formatted date:', dateString);
  };
  const handleSelectChange = (isvalue: string) => {
    // Handle select change here
    console.log('Selected value:', isvalue);
    setIsValue(isvalue);
  };
  const dispatch = useDispatch();
  const { quantity, name, phone, email } = useSelector(
    (state: RootState) => state.ticket
  );

  const ticket = useSelector((state: RootState) => state.ticket);
  const handleTextFieldChangeQuantity = (value: number) => {
    dispatch(setQuantity(value));
  };

  const handleTextFieldChangeName = (value: string) => {
    dispatch(setName(value));
  };
  const handleTextFieldChangePhone = (value: string) => {
    dispatch(setPhone(value));
  };
  const handleTextFieldChangeMail = (value: string) => {
    dispatch(setEmail(value));
  };
  const handlePackageSelectChange = (value: string) => {
    dispatch(setPackage(value));
  };
  const handleChangeDate = (date: any, dateString: string) => {
    dispatch(setDate(dateString));
  };
  // const [emailError, setEmailError] = useState(false);
  // const [phoneError, setPhoneError] = useState(false);
  // const [nameError, setNameError] = useState(false);
  // const [quantityError, setQuantityError] = useState(false);
  // //Validate Form
  // const isValidName = (value: string) => {
  //   const nameRegex = /^[a-zA-Z0-9\s]+$/;
  //   return nameRegex.test(value);
  // };

  // const isValidQuantity = (value: number) => {
  //   return value > 1;
  // };
  // const isValidEmail = (value: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(value);
  // };
  // const isValidPhoneNumber = (value: string) => {
  //   const phoneRegex = /^\d{10}$/;
  //   return phoneRegex.test(value);
  // };

  const navigate = useNavigate();
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // let hasError = false;

    // if (!isValidPhoneNumber(phone)) {
    //   setPhoneError(true);
    // } else {
    //   setPhoneError(false);
    // }

    // if (!isValidEmail(email)) {
    //   setEmailError(true);
    // } else {
    //   setEmailError(false);
    // }

    // if (!isValidName(name)) {
    //   setNameError(true);
    // } else {
    //   setNameError(false);
    // }

    // if (!isValidQuantity(quantity)) {
    //   setQuantityError(true);
    // } else {
    //   setQuantityError(false);
    // }

    // if (hasError) {
    //   return;
    // }

    try {
      // Thêm dữ liệu vào Firestore
      const docRef = await addDoc(collection(db, 'tickets'), {
        name: ticket.name,
        phone: ticket.phone,
        email: ticket.email,
        quantity: ticket.quantity,
        package: ticket.package,
        date: ticket.date,
      });

      console.log('Document written with ID: ', docRef.id);

      // Reset các trường text field
      dispatch(setName(''));
      dispatch(setPhone(''));
      dispatch(setEmail(''));
      dispatch(setQuantity(0));
      dispatch(setPackage(''));
      dispatch(setDate(''));
      navigate('/booking');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const stars = [...Array(4)].map((_, i) => (
    <div className='flex' key={i}>
      <Star />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  ));

  return (
    <>
      <div className='fixed w-full z-50'>
        <Navbar />
      </div>
      <section className='bg-bgImg bg-cover bg-center flex justify-center items-center m-10 max-h-screen relative'>
        <div className='absolute ml-[100.5rem]'>
          <img src={KC4} alt='' />
        </div>
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
          <div className='flex gap-[30px] items-center ml-32  mt-20  z-40'>
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

                  <div className='flex justify-center items-center font-bold font-serif text-2xl p-2'>
                    <div>{stars}</div>
                  </div>
                  <div className='absolute bottom-[580px]  left-[1000px] z-0'>
                    <img src={NhungDuaTre} alt='' />
                  </div>
                  <div className='absolute bottom-[480px] left-[-20px] '>
                    <img src={KC5} alt='' />
                  </div>
                  <div className='absolute bottom-[690px] left-[900px] '>
                    <img src={KC1} alt='' />
                  </div>
                  <div className='absolute bottom-[680px] left-[720px] z-0'>
                    <img src={KC2} alt='' />
                  </div>
                  <div className='absolute bottom-[10px] left-[-50px] '>
                    <img className=' w-72' src={Lisa} alt='' />
                  </div>
                  <div className='absolute ml-[92rem] mt-10'>
                    <img src={KC2} alt='' />
                  </div>
                  <div className='absolute ml-[28rem] mt-32 z-0'>
                    <img src={KC3} alt='' />
                  </div>
                </div>
              </div>
            </div>
            <img
              src={Edge}
              className='flex ml-[-70px] mr-[-100px]  h-[584px] mb-4'
              alt=''
            />
            <div className='bg-[#FFCA7B] rounded-xl pb-4 z-40'>
              <div className='bg-[#FDE8B3] w-[34rem] h-[36.5rem] rounded-xl  p-1'>
                <div className='bg-bgCustom w-[31rem] h-[35rem] rounded-[30px] mt-2 ml-6 border-dashed border-2 border-[#FFB489]'>
                  <div className='flex justify-center'>
                    <div className='bg-bgTitle w-[18rem] h-[5rem]  left-1/2 top-1/2 transform -translate-y-1/2 rounded-b-[60%] rounded-lg'>
                      <div className='w-[17rem] h-[4.5rem] ml-2 rounded-b-[60%] mt-1 rounded-t-lg border-dashed border-2 border-whiteText flex justify-center items-center'>
                        <p className='text-whiteText text-2xl font-sans'>
                          VÉ CỦA BẠN
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='p-5 grid gap-y-4'>
                    <div className='border-transparent '>
                      <Select
                        defaultValue={isvalue}
                        onChange={handlePackageSelectChange}
                        bordered={false}
                        className='w-full bg-bgCard rounded-lg  p-2'
                      >
                        <Option value='Gói gia đình'>Gói gia đình</Option>
                        <Option value='Gói cá nhân'>Gói cá nhân</Option>
                      </Select>
                    </div>
                    <div className='flex justify-between'>
                      <div className=''>
                        <TextFieldNumber
                          className='w-36 bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Số lượng'
                          value={quantity}
                          onChange={handleTextFieldChangeQuantity}
                        />
                        {/* {quantityError && (
                          <p className='text-textWarning text-xs'>
                            Vui lòng nhập số lượng {'vé > 0'}
                          </p>
                        )} */}
                      </div>
                      <div className='flex '>
                        <DatePicker
                          onChange={handleChangeDate}
                          className='w-56 bg-bgCard rounded-lg shadow-inner p-3 outline-none'
                          placeholder='Chọn ngày sử dụng'
                          format='DD/MM/YYYY'
                        />

                        <div className='ml-2 bg-yellow-400 text-whiteText font-bold text-2xl py-2 px-3 rounded-md shadow- cursor-pointer top-0 left-0'>
                          <BiCalendar />
                        </div>
                      </div>
                    </div>
                    <div className='border-transparent '>
                      <TextField
                        className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Họ và tên'
                        value={name}
                        onChange={handleTextFieldChangeName}
                      />
                      {/* {nameError && (
                        <p className='text-textWarning text-xs'>
                          Vui lòng nhập Họ và Tên
                        </p>
                      )} */}
                    </div>
                    <div className='border-transparent '>
                      <TextFieldPhone
                        className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Số điện thoại'
                        value={phone}
                        onChange={handleTextFieldChangePhone}
                      />
                      {/* {phoneError && (
                        <p className='text-textWarning text-sm'>
                          Vui lòng nhập số điện thoại
                        </p>
                      )} */}
                    </div>
                    <div className='border-transparent '>
                      <TextField
                        className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Địa chỉ Email'
                        value={email}
                        onChange={handleTextFieldChangeMail}
                      />
                      {/* {emailError && (
                        <p className='text-textWarning text-sm'>
                          Vui lòng nhập email
                        </p>
                      )} */}
                    </div>
                    <div className='flex justify-center'>
                      <div className='bg-[#BD000B] rounded-lg pb-2 w-80'>
                        <div className='bg-red rounded-lg p-3 text-center font-sans text-2xl text-whiteText'>
                          <button onClick={handleFormSubmit} className=''>
                            Đặt Vé
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
