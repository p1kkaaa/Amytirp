import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/axiosConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                try {
                    const response = await api.get('users/me/');
                    setUser(response.data);
                } catch (error) {
                    logout();
                }
            }
            setIsLoading(false);
        };

        loadUser();
    }, []);

const login = async (username, password, email) => {
  try {
    const response = await api.post('auth/login/', {
      username,
      password,
      email
    });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    setUser(response.data.user);
    return response.data;
  } catch (error) {
    console.log('📦 Логин отправлен:', { username, password, email });
    console.log('❌ Ответ сервера при логине:', JSON.stringify(error.response?.data, null, 2));
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
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);