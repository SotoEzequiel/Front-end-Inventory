import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verifica el estado de autenticación al cargar la app
  useEffect(() => {
    const token = localStorage.getItem('token'); // Ejemplo: verifica un token en localStorage
    setIsLoggedIn(!!token); // Si existe el token, está logueado
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token); // Guarda el token en localStorage
    setIsLoggedIn(true); // Actualiza el estado
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    setIsLoggedIn(false); // Actualiza el estado
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
