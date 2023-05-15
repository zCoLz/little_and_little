import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../img/bg.png';
import DamSenPark from '../img/DamSenPark.png';
import Navbar from '../components/Navbar';
import Edge from '../img/giua.png';
import iconStar from '../img/IconStart.png';
import TextField from '../components/TextField';
import { BiCalendar } from 'react-icons/bi';
import Star from '../components/Star';
import TextFieldNumber from '../components/TextFieldNumber';
import TextFieldPhone from '../components/TextFieldPhone';
import DateTextField from '../components/DateTextField';
import PackageSelect from '../components/PackageSelect';

const Home: React.FC = () => {
  const [TextFieldValueQuantity, setTextFieldValueQuantity] =
    useState<number>(0);

  const [TextFieldValueName, setTextFieldValueName] = useState('');
  const [TextFieldValuePhone, setTextFieldValuePhone] = useState<string>('');
  const [TextFieldValueMail, setTextFieldValueMail] = useState('');

  const handleTextFieldChangeQuantity = (value: number) => {
    setTextFieldValueQuantity(value);
  };

  const handleTextFieldChangeName = (value: string) => {
    setTextFieldValueName(value);
  };
  const handleTextFieldChangePhone = (value: string) => {
    setTextFieldValuePhone(value);
  };
  const handleTextFieldChangeMail = (value: string) => {
    setTextFieldValueMail(value);
  };
  const stars = [...Array(4)].map((_, i) => (
    <div className='flex' key={i}>
      <Star />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  ));
  return (
    <>
      <div className='fixed w-full'>
        <Navbar />
      </div>
      <section className='bg-bgImg bg-cover bg-center  flex justify-center items-center m-10 max-h-screen'>
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
                  <div className='flex justify-center items-center font-bold font-serif text-2xl p-2'>
                    <div>{stars}</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={Edge}
              className='flex ml-[-70px] mr-[-100px]  h-[584px] mb-4'
              alt=''
            />
            <div className='bg-[#FFCA7B] rounded-xl pb-4 '>
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
                  <div className='p-5 grid gap-y-5'>
                    <div className='border-transparent '>
                      <PackageSelect />
                      {/* <TextField
                        className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Gói gia đình'
                        value={TextFieldValue}
                        onChange={handleTextFieldChange}
                      /> */}
                    </div>
                    <div className='flex justify-between '>
                      <div className=''>
                        <TextFieldNumber
                          className='w-36 bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Số lượng'
                          value={TextFieldValueQuantity}
                          onChange={handleTextFieldChangeQuantity}
                        />
                      </div>
                      <div className='flex '>
                        <DateTextField />
                        <div className='ml-2 bg-yellow-400 text-whiteText font-bold text-2xl py-2 px-3 rounded-md shadow- cursor-pointer top-0 left-0'>
                          <BiCalendar />
                        </div>
                      </div>
                    </div>
                    <div className='border-transparent '>
                      <TextField
                        className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Họ và tên'
                        value={TextFieldValueName}
                        onChange={handleTextFieldChangeName}
                      />
                    </div>
                    <div className='border-transparent '>
                      <TextFieldPhone
                        className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Số điện thoại'
                        value={TextFieldValuePhone}
                        onChange={handleTextFieldChangePhone}
                      />
                    </div>
                    <div className='border-transparent '>
                      <TextField
                        className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Địa chỉ Email'
                        value={TextFieldValueMail}
                        onChange={handleTextFieldChangeMail}
                      />
                    </div>
                    <div className='flex justify-center'>
                      <div className='bg-[#BD000B] rounded-lg pb-2 '>
                        <div className='w-96 bg-red rounded-lg p-3 text-center font-sans text-2xl text-whiteText'>
                          <Link to='/booking'>Đặt Vé</Link>
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
