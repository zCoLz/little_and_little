import { useEffect, useState } from 'react';
import TextField from '../components/TextField';
import TextFieldNumber from '../components/TextFieldNumber';
import Edge from '../img/giua.png';
import Navbar from '../components/Navbar';
import TextFieldPhone from '../components/TextFieldPhone';
import { Link } from 'react-router-dom';
import DateTextField from '../components/DateTextField';
import DateTextFieldPayment from '../components/DateTextFieldPayment';
import Trini from '../img/Trini.png';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import {
  setDate,
  setEmail,
  setName,
  setPhone,
  setQuantity,
} from '../store/reducer/ticketSlice';
import { DatePicker, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  setCardNumber,
  setExpirationDate,
  setNameCard,
} from '../store/reducer/paymentSlice';

const Booking: React.FC = () => {
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [TextFieldContactInfo, setTextFieldContactInfo] = useState('');

  const dispatch = useDispatch();
  const { name, date, email, phone, quantity } = useSelector(
    (state: RootState) => state.ticket
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const { namecard, cardnumber, expirationdate } = useSelector(
    (state: RootState) => state.payment
  );
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value); // Convert the value to a number
    dispatch(setCardNumber(value));
  };

  const handleNameCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setNameCard(value));
  };
  const handleChangeExpirationDate = (date: any, dateString: string) => {
    dispatch(setExpirationDate(dateString));
  };

  useEffect(() => {
    const fetchTickets = async () => {
      const querySnapshot = await getDocs(collection(db, 'tickets'));
      querySnapshot.forEach((doc) => {
        const documentData = doc.data();

        dispatch(setName(documentData.name));
        dispatch(setDate(documentData.date));
        dispatch(setEmail(documentData.email));
        dispatch(setPhone(documentData.phone));
        dispatch(setQuantity(documentData.quantity));
        const calculatedPaymentAmount = documentData.quantity * 55000;
        setPaymentAmount(calculatedPaymentAmount);
        return; // Break the loop after getting the first document
      });
    };

    const fetchPayments = async () => {
      const querySnapshot = await getDocs(collection(db, 'payments'));
      querySnapshot.forEach((doc) => {
        const documentData = doc.data();

        dispatch(setCardNumber(documentData.cardnumber));
        dispatch(setNameCard(documentData.namecard));
        dispatch(setExpirationDate(documentData.expirationdate));
        return;
      });
    };

    fetchTickets();
    fetchPayments();
  }, [dispatch]);
  const handleSubmit = async () => {
    const paymentData = {
      cardnumber,
      namecard,
      expirationdate,
    };

    try {
      // Save the payment data to Firebase
      await setDoc(doc(db, 'payments', 'paymentId'), paymentData);
      console.log('Payment data saved successfully!');
    } catch (error) {
      console.error('Error saving payment data:', error);
    }
  };
  // const { cardnumber, namecard } = useSelector(
  //   (state: RootState) => state.payment
  // );
  // useEffect(() => {
  //   const fetchDocumentPayment = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'payments'));
  //     querySnapshot.forEach((doc) => {
  //       const documentData = doc.data();

  //       dispatch(setCardNumber(documentData.cardnumber));
  //       dispatch(setNameCard(documentData.namecard));

  //       return;
  //     });
  //   };

  //   fetchDocumentPayment();
  // }, [dispatch]);
  const handleTextFieidPaymentAmount = (value: number) => {
    setPaymentAmount(value);
  };

  return (
    <div>
      <Navbar />
      <section className='bg-bgImg bg-cover bg-center flex justify-center m-10 min-h-[961px] '>
        <div className='absolute  mr-[99rem] mt-[16rem]'>
          <img src={Trini} alt='' />
        </div>
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
                  <div className='flex ml-32'>
                    <div className='bg-bgTitle w-[20rem] h-[4rem]  left-1/2 top-1/2 transform -translate-y-1/2 rounded-b-[60%] rounded-lg'>
                      <div className='w-[19rem] h-[3.5rem] ml-2 rounded-b-[70%] mt-1 rounded-t-lg border-dashed border-2 border-whiteText flex justify-center items-center'>
                        <p className='text-whiteText text-2xl font-sans'>
                          VÉ CỔNG - VÉ GIA ĐÌNH
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full px-10'>
                    <div className='grid grid-cols-3'>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-2'>
                          Số tiền thanh toán
                        </p>
                        <TextFieldNumber
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          placeholder='Số tiền thanh toán'
                          value={paymentAmount}
                          onChange={handleTextFieidPaymentAmount}
                        />
                      </div>
                      <div className='col-span-1 ml-10'>
                        <p className='font-bold text-xl mb-2'>Số lượng vé</p>
                        <div className='flex items-center'>
                          <Input
                            className='w-24 bg-bgCard rounded-lg shadow-inner p-3   border-none'
                            value={quantity}
                          />
                          <span className='font-semibold text-lg ml-2'>vé</span>
                        </div>
                      </div>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-1'>Ngày sử dụng</p>
                        <DatePicker
                          className='w-56 bg-bgCard rounded-lg shadow-inner p-3 outline-none'
                          placeholder='Chọn ngày sử dụng'
                          format='DD/MM/YYYY'
                        />
                      </div>
                    </div>
                    <div className='grid gap-y-2'>
                      <p className='font-bold text-xl mt-3'>
                        Thông tin liên hệ
                      </p>
                      <Input
                        className='w-96 bg-bgCard rounded-lg shadow-inner p-3'
                        placeholder='Thông tin liên hệ'
                        value={name}
                      />
                    </div>
                    <div className='grid gap-y-2'>
                      <p className='font-bold text-xl mt-3'>Số điện thoại</p>
                      <Input
                        className='w-52 bg-bgCard rounded-lg shadow-inner p-3   border-none'
                        placeholder='Số điện thoại'
                        value={phone}
                      />
                    </div>
                    <div className='grid gap-y-2'>
                      <p className='font-bold text-xl mt-3'>Email</p>
                      <Input
                        className='w-96 bg-bgCard rounded-lg shadow-inner p-3  border-none'
                        placeholder='Email'
                        value={email}
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
                        <div className='w-[19rem] h-[3.5rem] ml-2 rounded-b-[70%] mt-1 rounded-t-lg border-dashed border-2 border-whiteText flex justify-center items-center'>
                          <p className='text-whiteText text-2xl font-sans'>
                            Thông Tin Thanh Toán
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='px-5 grid gap-y-3'>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-2'>Số thẻ</p>
                        <Input
                          className='w-full bg-bgCard rounded-lg shadow-inner p-3'
                          value={cardnumber}
                          onChange={handleCardNumberChange}
                          placeholder='Số thẻ'
                        />
                      </div>
                      <div className='grid gap-y-3 '>
                        <p className='font-bold text-xl mt-3'>Họ tên chủ thẻ</p>
                        <Input
                          className=' bg-bgCard rounded-lg shadow-inner p-3 w-full'
                          placeholder='Họ tên chủ thẻ'
                          onChange={handleNameCardChange}
                          value={namecard}
                        />
                      </div>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-1'>Ngày hết hạn</p>
                        <DatePicker
                          className='w-80 bg-bgCard rounded-lg shadow-inner p-3 outline-none'
                          placeholder='Ngày hết hạn'
                          format='DD/MM/YYYY'
                          onChange={handleChangeExpirationDate}
                        />
                      </div>
                      <div className='col-span-1'>
                        <p className='font-bold text-xl mb-2'>CVV/CVC</p>
                        <Input
                          className='w-32 bg-bgCard rounded-lg shadow-inner p-2 text-lg font-bold'
                          placeholder='***'
                        />
                      </div>
                      <div>
                        <div className='flex justify-center'>
                          <div className='bg-[#BD000B] rounded-lg pb-2 '>
                            <div className='w-96 bg-red rounded-lg p-3 text-center font-sans text-2xl text-whiteText'>
                              <Link
                                to='/booking/payment'
                                onClick={handleSubmit}
                              >
                                Thanh Toán
                              </Link>
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

export default Booking;
