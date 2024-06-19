import React from 'react';


const Input = ({onChange, placeholder, type='text', value}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};

export default Input;