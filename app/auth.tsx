'use client';

import React, { createContext, useState } from 'react';

interface AuthContext {
  isLoggedIn: boolean;
  user: any;
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContext>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      return data.token;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const resetPassword = async (password: string, token: string) => {
    try {
      const response = await fetch(`/api/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
