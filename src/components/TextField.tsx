import React, { useState } from 'react';

interface TextFieldProps {
  placeholder: string;
  value: string;
  className: string;
  onChange: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
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
    onChange(event.target.value);
  };

  return (
    <div className={`text-field ${focused ? 'focused' : ''}`}>
      <input
        className={`${className} focus:outline-none`}
        type='text'
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
