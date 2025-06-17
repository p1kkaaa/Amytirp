import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/axiosConfig'; // axios с baseURL и JWT-token support

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Загружаем пользователя из localStorage при старте
  useEffect(() => {
    const loadUser = () => {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        setUser(JSON.parse(userStr));
      }
      setIsLoading(false);
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('auth/login/', {
        email,
        password,
      });

      const { access, refresh, user: userFromLogin } = response.data;

      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      localStorage.setItem('user', JSON.stringify(userFromLogin));

      setUser(userFromLogin);

      return response.data;
    } catch (error) {
      console.log('❌ Ошибка при логине:', error.response?.data || error.message);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      await api.post('auth/register/', userData);
    } catch (error) {
      console.log('📦 Отправленные данные:', userData);
      console.log('❌ Ответ сервера:', JSON.stringify(error.response?.data, null, 2));
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
