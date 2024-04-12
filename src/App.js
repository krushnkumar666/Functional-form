import React, { useState } from 'react';
import AccountSettings from './components/AccountSettings/AccountSettings';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Login from './components/Login/Login';
import LoginRegister from './components/LoginRegister/LoginRegister';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginRegister />} />
          <Route path='/createaccount' element={<CreateAccount handleLogin={handleLogin} />} />
          <Route path='/login' element={<Login handleLogin={handleLogin} />} />
          {isLoggedIn ? (
            <Route path='/accountsettings' element={<AccountSettings userEmail={userEmail} />} />
          ) : (
            <Route path='/accountsettings' element={<Navigate to='/' />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
