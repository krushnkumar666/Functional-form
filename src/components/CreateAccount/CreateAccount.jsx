import React, { useState } from 'react';
import './CreateAccount.css';
import { Link, useNavigate } from 'react-router-dom';

const CreateAccount = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false,
  });

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = formData;
    handleLogin(email); 


    localStorage.setItem('user', JSON.stringify(formData));


    navigate('/accountsettings');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className='create'>
      <div className='create-main'>
        <h1>Create your PopX account</h1>
        <div className='form-main'>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Full Name<span style={{ color: 'red', paddingRight: '1rem' }}>*</span></legend>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </fieldset>
            <fieldset>
              <legend>Phone number<span style={{ color: 'red' }}>*</span></legend>
              <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </fieldset>
            <fieldset>
              <legend>Email address<span style={{ color: 'red' }}>*</span></legend>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </fieldset>
            <fieldset>
              <legend>Password<span style={{ color: 'red', paddingRight: '1rem' }}>*</span></legend>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </fieldset>
            <fieldset>
              <legend>Company name</legend>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
            </fieldset>
            <div className='radio'>
              <legend className='Agency'>Are you an Agency?<span style={{ color: 'red' }}>*</span></legend>
              <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === "yes"} onChange={handleChange} />
              <label>Yes</label>
              <input type="radio" name="isAgency" value="no" checked={formData.isAgency === "no"} onChange={handleChange} />
              <label>No</label>
            </div>
            <div className='btn'>
            <button type="submit">Create Account</button>
            </div>
          </form>
          <div className='already'>
          <p>Already registered? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
