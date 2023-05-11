import { useState } from 'react';
import TextField from '../components/TextField';
import TextFieldNumber from '../components/TextFieldNumber';
import Edge from '../img/giua.png';
import Navbar from '../components/Navbar';
import TextFieldPhone from '../components/TextFieldPhone';
import { Link } from 'react-router-dom';
const Payment: React.FC = () => {
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [TextFieldValuePhone, setTextFieldValuePhone] = useState('');
  const [TextFieldContactInfo, setTextFieldContactInfo] = useState('');
  const [TextFieldQuantityTicket, setTextFieldQuantityTicket] =
    useState<number>(0);
  const [TextFieldDate, setTextFieldDate] = useState<number>(0);

  const handTextFieldPhone = (value: string) => {
    setTextFieldValuePhone(value);
  };

  const handleTextFieidPaymentAmount = (value: number) => {
    setPaymentAmount(value);
  };
  const handleTextFieidQuantityTicket = (value: number) => {
    setTextFieldQuantityTicket(value);
  };
  const handleTextFieidDate = (value: number) => {
    setTextFieldDate(value);
  };
  const handTextFieldConatactInfo = (value: string) => {
    setTextFieldContactInfo(value);
  };
  return (
    <div>
      <Navbar />
      <section className='bg-bgImg bg-cover bg-center flex justify-center m-10 min-h-[961px] '>
        <div className='flex mt-32 items-center flex-col'>
          <div className=''>
            <div className='font-sans text-whiteText font-extrabold text-7xl mb-5'>
              Thanh Toán
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='bg-[#FFCA7B] rounded-xl pb-4 '>
              <div className='bg-[#FDE8B3] lg:min-w-[30rem] xl:min-w-[40rem] 2xl:min-w-[50rem] min-h-[36.5rem] rounded-xl top-[21rem] px-4 py-2'>
                <div className='bg-bgCustom w-full h-[36rem] rounded-[30px]  border-dashed border-2 border-[#FFB489]'>
                  <div className='w-full p-5'>
                    <div className='grid grid-cols-3 gap-4 py-5'>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-2'>
                          <p>Số tiền thanh toán</p>
                        </p>
                        <TextFieldNumber
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Địa chỉ '
                          value={paymentAmount}
                          onChange={handleTextFieidPaymentAmount}
                        />
                      </div>
                      <div className='col-span-1 ml-10'>
                        <p className='font-bold text-xl mb-2'>
                          <p>Số lượng vé</p>
                        </p>
                        <div className='flex items-center'>
                          <TextFieldNumber
                            className='bg-bgCard rounded-lg shadow-inner p-3 w-24'
                            placeholder='Địa chỉ '
                            value={TextFieldQuantityTicket}
                            onChange={handleTextFieidQuantityTicket}
                          />
                          <span className='font-semibold text-lg ml-2'>vé</span>
                        </div>
                      </div>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-1'>
                          <p>Ngày sử dụng</p>
                        </p>
                        <TextFieldNumber
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Địa chỉ '
                          value={TextFieldDate}
                          onChange={handleTextFieidDate}
                        />
                      </div>
                    </div>
                    <div className='grid gap-y-2'>
                      <p className='font-bold text-xl mt-3'>
                        <p>Thông tin liên hệ</p>
                      </p>
                      <TextField
                        className='w-96 bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Thông tin liên hệ'
                        value={TextFieldContactInfo}
                        onChange={handTextFieldConatactInfo}
                      />
                    </div>
                    <div className='grid gap-y-2'>
                      <p className='font-bold text-xl mt-3'>
                        <p>Số điện thoại</p>
                      </p>
                      <TextFieldPhone
                        className='w-52 bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Số điện thoại '
                        value={TextFieldValuePhone}
                        onChange={handTextFieldPhone}
                      />
                    </div>
                    <div className='grid gap-y-2'>
                      <p className='font-bold text-xl mt-3'>
                        <p>Email</p>
                      </p>
                      <TextFieldPhone
                        className='w-96 bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Email'
                        value={TextFieldValuePhone}
                        onChange={handTextFieldPhone}
                      />
                    </div>
                  </div>

                  <div className='flex justify-center items-center font-bold font-serif text-2xl p-2'></div>
                </div>
              </div>
            </div>
            <img
              src={Edge}
              className='flex ml-[-40px] mr-[-95px]  h-[584px] mb-4'
              alt=''
            />
            <div className='grid gap-y-2'>
              <div className='bg-[#FFCA7B] rounded-xl pb-4 ml-6'>
                <div className='bg-[#FDE8B3] lg:min-w-[20rem] xl:min-w-[30rem] 2xl:min-w-[32rem] min-h-[36.5rem] rounded-xl px-4 py-2 '>
                  <div className='bg-bgCustom w-full h-[36rem] rounded-[30px]  border-dashed border-2 border-[#FFB489]'>
                    <div className='flex justify-center'>
                      <div className='bg-bgTitle w-[20rem] h-[4rem]  left-1/2 top-1/2 transform -translate-y-1/2 rounded-b-[60%] rounded-lg'>
                        <div className='w-[19rem] h-[3.5rem] ml-2 rounded-b-[60%] mt-1 rounded-t-lg border-dashed border-2 border-whiteText flex justify-center items-center'>
                          <p className='text-whiteText text-2xl font-sans'>
                            Thông Tin Thanh Toán
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='px-5 grid gap-y-3'>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-2'>
                          <p>Số thẻ</p>
                        </p>
                        <TextFieldNumber
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Địa chỉ '
                          value={paymentAmount}
                          onChange={handleTextFieidPaymentAmount}
                        />
                      </div>
                      <div className='grid gap-y-3'>
                        <p className='font-bold text-xl mt-3'>
                          <p>Họ tên chủ thẻ</p>
                        </p>
                        <TextFieldPhone
                          className='w-96 bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Email'
                          value={TextFieldValuePhone}
                          onChange={handTextFieldPhone}
                        />
                      </div>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-1'>
                          <p>Ngày hết hạn</p>
                        </p>
                        <TextFieldNumber
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Địa chỉ '
                          value={TextFieldDate}
                          onChange={handleTextFieidDate}
                        />
                      </div>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-2'>
                          <p>CVV/CVC</p>
                        </p>
                        <TextFieldNumber
                          className='w-32 bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Địa chỉ '
                          value={paymentAmount}
                          onChange={handleTextFieidPaymentAmount}
                        />
                      </div>
                      <div>
                        <div className='flex justify-center'>
                          <div className='bg-[#BD000B] rounded-lg pb-2 '>
                            <div className='w-96 bg-red rounded-lg p-3 text-center font-sans text-2xl text-whiteText'>
                              <Link to='/booking'>Thank Toán</Link>
                            </div>
                          </div>
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
    </div>
  );
};

export default Payment;
