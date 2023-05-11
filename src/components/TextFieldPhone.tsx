import React, { useState } from 'react';

interface TextFieldPhoneProps {
  placeholder: string;
  value: string;
  className: string;
  onChange: (value: string) => void;
}

const TextFieldPhone: React.FC<TextFieldPhoneProps> = ({
  placeholder,
  value,
  className,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // Kiểm tra nếu giá trị nhập vào là số hoặc rỗng
    if (/^[0-9]*$/.test(inputValue) && inputValue.length <= 11) {
      onChange(inputValue);
    }
  };

  return (
    <div className={`text-field ${focused ? 'focused' : ''}`}>
      <input
        className={`${className} focus:outline-none`}
        type='tel'
        inputMode='numeric'
        pattern='[0-9]*'
        value={value}
        onChange={handlePhoneChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextFieldPhone;
