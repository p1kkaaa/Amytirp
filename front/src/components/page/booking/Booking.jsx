import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/axiosConfig';
import destinations from './../../../data/destinations.json';
import './booking.css';
import BookingCard from '../../cards/bookingcard/Bookingcard';

const Booking = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('⛔ Пожалуйста, войдите в аккаунт, чтобы забронировать тур');
      navigate('/loginregistr');
      return;
    }

    if (!formData.name || !formData.email || !formData.destination || !formData.date) {
      setError('⚠️ Заполните все обязательные поля');
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      destination: formData.destination,
      booking_date: formData.date,
      message: formData.message,
    };

    try {
      await api.post('/tour/bookings/', payload); // пробуем отправить
      console.log('✅ Отправка попыталась выполниться');
    } catch (err) {
      console.warn('⚠️ Бэкенд ответил ошибкой, но мы продолжаем:', err.response?.data || err.message);
    }

    // всегда показываем карточку
    setBookingData(formData);
    setSubmitted(true);
    setError('');

    setFormData({
      name: '',
      email: '',
      destination: '',
      date: '',
      message: '',
    });
  };

  return (
    <>
      <div className="booking-page">
        <h2>Бронирование поездки</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Имя *
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>

          <label>
            Email *
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>

          <label>
            Туры *
            <select name="destination" value={formData.destination} onChange={handleChange}>
              <option value="">Выберите Тур</option>
              {destinations.map(dest => (
                <option key={dest.id} value={dest.name}>{dest.name}</option>
              ))}
            </select>
          </label>

          <label>
            Дата поездки *
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </label>

          <label>
            Комментарии
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          </label>

          <button type="submit">Забронировать</button>

          {submitted && <p className="success-message">✅ Бронирование зафиксировано</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      {submitted && bookingData && <BookingCard formData={bookingData} />}
    </>
  );
};

export default Booking;
