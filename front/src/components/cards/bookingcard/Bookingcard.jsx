import './bookingcard.css'

const BookingCard = ({ formData }) => {
  return (
    <div className="card booking-card">
      <div className="card-info">
        <div className="top-info">
          <h2>{formData.name}</h2>
          <div className="badges">
            <span className="badge booked">Тур забронирован</span>
          </div>
        </div>

        <ul className="details">
          <li><strong>Тур:</strong> {formData.destination}</li>
          <li><strong>Email:</strong> {formData.email}</li>
          <li><strong>Дата:</strong> {formData.date}</li>
        </ul>

        {formData.message && (
          <p className="description">
            <strong>Комментарий:</strong> {formData.message}
          </p>
        )}

        <div className="bottom">
          <span className="status-message">⏰ Ожидайте подтверждение бронирования</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard