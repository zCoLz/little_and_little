import React, { useState } from 'react';
import iconAddress from '../img/iconAddress.png';
import iconMail from '../img/iconMail.png';
import iconPhone from '../img/iconPhone.png';
import Navbar from '../components/Navbar';
import TextField from '../components/TextField';
import TextFieldPhone from '../components/TextFieldPhone';
import NoteArea from '../components/NoteArea';
import { Link } from 'react-router-dom';
const Contact = () => {
  const [TextFieldValueMail, setTextFieldValueMail] = useState('');
  const [TextFieldValueName, setTextFieldValueName] = useState('');
  const [TextFieldValuePhone, setTextFieldValuePhone] = useState('');
  const [TextFieldValueAddress, setTextFieldValueAddress] = useState('');
  const [TextFieldValueNote, setTextFieldValueNote] = useState('');
  const handleTextFieldChange = (value: string) => {
    setTextFieldValueName(value);
  };
  const handleTextFieldChangeMail = (value: string) => {
    setTextFieldValueMail(value);
  };
  const handleTextFieldChangePhone = (value: string) => {
    setTextFieldValuePhone(value);
  };
  const handleTextFieldChangeAddress = (value: string) => {
    setTextFieldValueAddress(value);
  };
  const handleTextFieldChangeNote = (value: string) => {
    setTextFieldValueNote(value);
  };
  return (
    <div>
      <Navbar />

      <section className='bg-bgImg bg-cover bg-center flex justify-center m-10 min-h-[961px] '>
        <div className='flex mt-32 items-center flex-col'>
          <div className=''>
            <div className='font-sans text-whiteText font-extrabold text-7xl mb-5 '>
              Liên hệ
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='bg-[#FFCA7B] rounded-xl pb-4 '>
              <div className='bg-[#FDE8B3] lg:min-w-[30rem] xl:min-w-[40rem] 2xl:min-w-[50rem] min-h-[36.5rem] rounded-xl top-[21rem] p-1'>
                <div className='bg-bgCustom w-full h-[36rem] rounded-[30px]  border-dashed border-2 border-[#FFB489] '>
                  <div className='w-full p-10 '>
                    <div className='w-full'>
                      <p className='font-medium text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse ac mollis <br /> justo. Etiam volutpat
                        tellus quis risus volutpat, ut posuere ex facilisis.
                      </p>
                    </div>
                    <div className='grid grid-cols-3 gap-4 py-5'>
                      <div className=''>
                        <TextField
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Tên'
                          value={TextFieldValueName}
                          onChange={handleTextFieldChange}
                        />
                      </div>
                      <div className='col-span-2'>
                        <TextField
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder=' Email'
                          value={TextFieldValueMail}
                          onChange={handleTextFieldChangeMail}
                        />
                      </div>
                      <div className=''>
                        <TextFieldPhone
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Số điện thoại'
                          value={TextFieldValuePhone}
                          onChange={handleTextFieldChangePhone}
                        />
                      </div>
                      <div className='col-span-2'>
                        <TextField
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Địa chỉ '
                          value={TextFieldValueAddress}
                          onChange={handleTextFieldChangeAddress}
                        />
                      </div>
                    </div>
                    <div className=''>
                      <NoteArea
                        className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Lời nhắn'
                        value={TextFieldValueNote}
                        onChange={handleTextFieldChangeNote}
                      />
                    </div>
                    <div className='flex justify-center mt-3'>
                      <Link to='/gui-lien-he'>
                        <div className='bg-[#BD000B] rounded-lg pb-1 '>
                          <div className='w-96 bg-red rounded-lg p-3 text-center font-sans text-2xl text-whiteText'>
                            <button>Gửi liên hệ</button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='flex justify-center items-center font-bold font-serif text-2xl p-2'></div>
                </div>
              </div>
            </div>
            <div className='grid gap-y-2'>
              <div className='bg-[#FFCA7B] rounded-xl pb-4 ml-6'>
                <div className='bg-[#FDE8B3] lg:min-w-[20rem] xl:min-w-[30rem] 2xl:min-w-[32rem] min-h-[10.5rem] rounded-xl px-2 py-2 '>
                  <div className='bg-bgCustom w-full h-[10rem] rounded-[30px]  border-dashed border-2 border-[#FFB489]'>
                    <div className='flex p-5 items-center'>
                      <span>
                        <img src={iconAddress} alt='' />
                      </span>
                      <span className='ml-5 mt-5 '>
                        <p className='font-bold text-2xl'>Địa chỉ:</p>
                        <p>
                          {' '}
                          86/33 Âu Cơ, Phường 9, Quận Tân Bình,
                          <br /> TP. Hồ Chí Minh
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#FFCA7B] rounded-xl pb-4 ml-6'>
                <div className='bg-[#FDE8B3] lg:min-w-[20rem] xl:min-w-[30rem] 2xl:min-w-[32rem] min-h-[10.5rem] rounded-xl px-2 py-2 '>
                  <div className='bg-bgCustom w-full h-[10rem] rounded-[30px]  border-dashed border-2 border-[#FFB489]'>
                    <div className='flex p-5 items-center mt-6'>
                      <span className=''>
                        <img src={iconMail} alt='' />
                      </span>
                      <span className='ml-5  '>
                        <p className='font-bold text-2xl'>Email:</p>
                        <p>investigate@your-site.com</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#FFCA7B] rounded-xl pb-4 ml-6'>
                <div className='bg-[#FDE8B3] lg:min-w-[20rem] xl:min-w-[30rem] 2xl:min-w-[32rem] min-h-[10.5rem] rounded-xl px-2 py-2 '>
                  <div className='bg-bgCustom w-full h-[10rem] rounded-[30px]  border-dashed border-2 border-[#FFB489]'>
                    <div className='flex p-5 items-center mt-6'>
                      <span className=''>
                        <img src={iconPhone} alt='' />
                      </span>
                      <span className='ml-5  '>
                        <p className='font-bold text-2xl'>Điện thoại:</p>
                        <p>+84 145 689 798</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
