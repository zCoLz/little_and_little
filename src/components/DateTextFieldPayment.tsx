import React from 'react';
import { DatePicker, Input } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { BiCalendar } from 'react-icons/bi';

const DateTextFieldPayment = () => {
  const handleDateChange = (date: any, dateString: string) => {
    // Handle date change here
    console.log('Select Date', date);
    console.log('Formatted date:', dateString);
  };

  return (
    <>
      <div className='flex'>
        <DatePicker
          className='w-56 bg-bgCard rounded-lg shadow-inner p-3 outline-none'
          placeholder='Ngày hết hạn'
          onChange={handleDateChange}
          format='DD/MM/YYYY'
        />
      </div>
    </>
  );
};

export default DateTextFieldPayment;
