import React, { useState } from 'react';
import Input from '../Input/Input';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const Inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'User name',
            label: 'Username',
            errorMessage: 'Username should be 3-16 characters and should not include any special characters!',
            required: true,
            pattern: '^[a-zA-Z0-9]{3,16}$'
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            label: 'Email',
            errorMessage: 'It should be a valid email!',
            required: true,
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            label: 'Password',
            errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            required: true,
            pattern: `^(?=.*[!@#$%^&*()\-_=+{};:,<.>/?])(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$`
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            label: 'confirmPassword',
            errorMessage: "Passwords don't match",
            required: true,
            pattern: values.password
        }
    ];

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            if (values['password'] == values['confirmPassword']) {
                const response = await axios.post('http://localhost:3000/users', {
                    ...values
                });
                
                navigate('/login')
            }
        } catch {
            
        }
    };

    const handleOnChangeInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

  return (
    <form className='signUp' onSubmit={handleSignUp}>
        <div className='signUp_container'>
            <h1>Register</h1>
            {Inputs.map(input => (
                <Input key={input.id} {...input} value={values[input.name]} onChange={handleOnChangeInput} />
            ))}
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    </form>
  )
}

export default Register