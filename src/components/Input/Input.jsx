import React, { useState } from 'react';
import './Input.css';

const Input = (props) => {
    const [focused, setFocused] = useState(false);

    const handleFocused = (e) => {
        setFocused(true);
    };

    const { label, id, onChange, errorMessage, ...InputProps} = props;
  return (
    <div className='input'>
        <label>{label}</label>
        <input {...InputProps} onChange={onChange} onBlur={handleFocused} focused={focused.toString()} />
        <span>{errorMessage}</span>
    </div>
  )
}

export default Input