import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Simulate API call
    setTimeout(() => {
      setUser({ email, name: email.split('@')[0] });
      toast.success('Successfully logged in!');
    }, 1000);
  };

  const register = (email: string, password: string, name: string) => {
    // Simulate API call
    setTimeout(() => {
      setUser({ email, name });
      toast.success('Successfully registered!');
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    toast.success('Successfully logged out!');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};