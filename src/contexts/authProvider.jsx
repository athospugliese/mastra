import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token') || null;
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getTokenFromLocalStorage);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
