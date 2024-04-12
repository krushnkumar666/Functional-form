import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      handleLogin(formData.email); 
      navigate('/accountsettings');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='login-main'>
      <div className='login'>
        <h1>Sign in to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend style={{ paddingRight: '1rem' }}>Email Address</legend>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </fieldset>
          <fieldset>
            <legend style={{ paddingRight: '2rem' }}>Password</legend>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </fieldset>
          <div className='btn-login'>
          <button type="submit">Login</button>
          </div>
        </form>
        <div className='create-ac'>
        <p>Don't have an account? <Link to="/createaccount">Create Account</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
