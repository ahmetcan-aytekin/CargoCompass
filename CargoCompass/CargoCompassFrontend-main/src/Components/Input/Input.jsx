import React from 'react';
import styles from './Input.css';

const Input = (props) => {
  const { label, error, onChange, name, type } = props;
  const inputClass = error ? `${'inputField'} ${'inputFieldError'}` : styles.inputField;
  
  return (
    <div className='inputContainer'>
      {label && <label className='inputLabel'>{label}</label>}
      <input
        type={type}
        className={inputClass}
        onChange={onChange}
        name={name}
      />
      {error && <div className='error'>{error}</div>}
    </div>
  );
};

export default Input;
