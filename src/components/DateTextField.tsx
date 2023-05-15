import React from 'react';
import { DatePicker, Input } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { BiCalendar } from 'react-icons/bi';

const DateTextField = () => {
  const handleDateChange = (date: any, dateString: string) => {
    // Handle date change here
    console.log('Select Date', date);
    console.log('Formatted date:', dateString);
  };

  return (
    <>
      <DatePicker
        className='w-56 bg-bgCard rounded-lg shadow-inner p-3 outline-none'
        placeholder='Chọn ngày sử dụng'
        onChange={handleDateChange}
        format='DD/MM/YYYY'
      />
    </>
  );
};

export default DateTextField;
