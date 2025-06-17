import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../../img/logo/sun_trip.jpg';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth(); // получаем данные из AuthContext

    const handleLoginClick = () => {
        navigate('/loginregistr');
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/');
    };

    const handClick = () => {
        navigate('/booking');
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <Link to="/" className="header__logo-link">
                            <img src={logo} alt="Logo" />
                            <span>Sun-Trip</span>
                        </Link>
                    </div>

                    <div className="header__search">
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className="header__search-input"
                        />
                        <button type="submit" className="header__search-btn">🔍</button>
                    </div>

                    <div className="header__nav">
                        <ul>
                            <li><button onClick={() => scrollToSection('top-tours')}>Топ-Туры</button></li>
                            <li><button onClick={() => scrollToSection('gid')}>Наши гиды</button></li>
                            <li><button onClick={() => scrollToSection('europe')}>Тур по Европе</button></li>
                            <li><button onClick={() => scrollToSection('about')}>О нас</button></li>
                            <li><button onClick={() => scrollToSection('review')}>Отзывы</button></li>
                            <li><button onClick={() => scrollToSection('contacts')}>Контакты</button></li>
                            <li><button onClick={handClick}>Бронирование</button></li>

                            <div className="header__auth">
                                {user ? (
                                    <button onClick={handleLogoutClick} className="header__login-btn">
                                        Выйти
                                    </button>
                                ) : (
                                    <button onClick={handleLoginClick} className="header__login-btn">
                                        Войти
                                    </button>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
