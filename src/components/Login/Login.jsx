import React from 'react';
import './Login.css';
import Input from '../Input/Input';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slices/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(false);
    const [notRegistered, setNotRegistered] = useState(false);
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const Inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            label: 'Email',
            errorMessage: 'Please enter your email!',
            required: true,
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            label: 'Password',
            errorMessage: 'Please enter your password!',
            required: true,
            pattern: `^(?=.*[!@#$%^&*()\-_=+{};:,<.>/?])(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$`
        }
    ];

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:3000/users');
            console.log(response.data);
            if (response.data.length > 0) {
                response.data.map(user => {
                    if (user['email'] === values['email'] && user['password'] === values['password']) {
                        localStorage.setItem('user', JSON.stringify(user));
                        dispatch(loginUser(user));
                        navigate('/')
                    } else {
                        setErrorMsg(true);
                    }
                })
            } else {
                setNotRegistered(true);
            }
        } catch {
            
        }
    };

    const handleOnChangeInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

  return (
    <form className='signUp' onSubmit={handleLogin}>
        <div className='signUp_container'>
            <h1>Login</h1>
            {errorMsg ? (
                <p className='error-msg'>Either the email or the password is incorrect! please try again.</p>
            ) : notRegistered ? (
                <p className='error-msg'>Either the email or the password is not registered! please sign up.</p>
            ) : (
                <></>
            )}
            {Inputs.map(input => (
                <Input key={input.id} {...input} value={values[input.name]} onChange={handleOnChangeInput} />
            ))}
            <button>Login</button>
        </div>
    </form>
  )
}

export default Login