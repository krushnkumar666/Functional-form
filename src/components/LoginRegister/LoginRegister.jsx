import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginRegister.css";

const LoginRegister = () => {
  return (
    <div className='main'>
      <div className="welcome-page">
        <div className='page-content'>
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <div className='btn'>
            <Link to='/createaccount'>
              <button>Create Account</button>
            </Link>
            <Link to='/login'>
              <button>Already Registered? Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
