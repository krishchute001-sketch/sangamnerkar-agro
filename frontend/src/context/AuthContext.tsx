import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminUser } from '../types';
import { api } from '../services/api';

interface AuthContextType {
  user: AdminUser | null;
  token: string | null;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const DEFAULT_ADMIN: AdminUser = {
  id: 'admin-sangamnerkar',
  email: 'admin@sangamnerkaragro.com',
  full_name: 'Executive Administrator',
  role: 'admin',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('krbl_admin_token'));
  const [user, setUser] = useState<AdminUser | null>(() => {
    return localStorage.getItem('krbl_admin_token') ? DEFAULT_ADMIN : null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const profile = await api.getAdminMe();
          if (profile && profile.email) {
            setUser(profile);
          } else {
            setUser(DEFAULT_ADMIN);
          }
        } catch {
          // If the backend is offline or static deploy, retain the authenticated admin session
          setUser(DEFAULT_ADMIN);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, [token]);

  const login = async (newToken: string) => {
    localStorage.setItem('krbl_admin_token', newToken);
    setToken(newToken);
    setUser(DEFAULT_ADMIN);
    try {
      const profile = await api.getAdminMe();
      if (profile && profile.email) {
        setUser(profile);
      }
    } catch {
      setUser(DEFAULT_ADMIN);
    }
  };

  const logout = () => {
    localStorage.removeItem('krbl_admin_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
