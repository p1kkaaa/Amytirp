import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // обязательно со слэшем на конце
});

// Добавляем токен ко всем исходящим запросам
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      // гарантируем, что headers существует
      config.headers = config.headers || {};
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    // обработка ошибок запроса
    return Promise.reject(error);
  }
);

export default api;
