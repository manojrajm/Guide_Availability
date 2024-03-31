import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import './App.css'; // Assuming you have a CSS file for global styles

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Header />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
