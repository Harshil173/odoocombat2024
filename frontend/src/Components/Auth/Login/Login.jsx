// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import makeRequest from "../../../Helpers/makeRequest";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await makeRequest('post', '/auth/login', { "username": email, "password":password });
        if (response.data.status === -1) {
            console.log(response.message)
        } else if (response.data.status === 1) {
            navigate('/home');
        }
    } catch (error) {
        console.error('Error logging in', error.response.data.message);
    }
};

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <pre id='firsttext'>Login for OOH</pre>
        <pre id='secondtext'>Login using the registered email Id</pre>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='  Email'
            required
          />
        <br/>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='  Password'
            required
          />
        <button type="submit" style={{ marginTop: '20px' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
