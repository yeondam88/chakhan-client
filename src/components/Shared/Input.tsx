import React from 'react';

type InputProps = {
  elemId: string;
  label: string;
  className: string;
  placeholder: string;
};

function Input({ elemId, label, className, placeholder }: InputProps) {
  return (
    <>
      <label htmlFor={`${elemId}`} className="label">
        {label}
      </label>
      <input
        type="text"
        className={`${className}`}
        id={`${elemId}`}
        placeholder={`${placeholder}`}
      />
    </>
  );
}

export default Input;
