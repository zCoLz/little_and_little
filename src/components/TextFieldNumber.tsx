import React, { useState } from 'react';

interface TextFieldnumberProps {
  placeholder: string;
  value: number;
  className: string;
  onChange: (value: number) => void;
}

const TextFieldNumber: React.FC<TextFieldnumberProps> = ({
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(event.target.value);
    onChange(isNaN(inputValue) ? 0 : inputValue);
  };

  return (
    <div className={`text-field ${focused ? 'focused' : ''}`}>
      <input
        className={`${className} focus:outline-none`}
        type='text'
        value={value}
        inputMode='numeric'
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextFieldNumber;
