import React, { useState } from 'react';

interface NoteAreaProps {
  placeholder: string;
  value: string;
  className: string;
  onChange: (value: string) => void;
}

const NoteArea: React.FC<NoteAreaProps> = ({
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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    // Kiểm tra độ dài của giá trị nhập vào không vượt quá 255 ký tự
    if (inputValue.length <= 255) {
      onChange(inputValue);
    }
  };

  return (
    <div className={`note-area ${focused ? 'focused' : ''}`}>
      <textarea
        className={`${className} focus:outline-none`}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default NoteArea;
