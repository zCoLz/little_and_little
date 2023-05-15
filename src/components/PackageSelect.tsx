import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const PackageSelect = () => {
  const [value, setValue] = useState('Gói gia đình');

  const handleSelectChange = (value: string) => {
    // Handle select change here
    console.log('Selected value:', value);
    setValue(value);
  };

  return (
    <div>
      <Select
        defaultValue={value}
        onChange={handleSelectChange}
        bordered={false}
        className='w-full bg-bgCard rounded-lg shadow-inner p-2'
        placeholder='Chọn gói dịch vụ'
      >
        <Option value='Gói gia đình'>Gói gia đình</Option>
        <Option value='Gói cá nhân'>Gói cá nhân</Option>
      </Select>
    </div>
  );
};

export default PackageSelect;
