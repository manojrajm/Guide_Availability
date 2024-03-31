import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext<any>(null); // Set initial value to null

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Perform authentication logic
    setLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
