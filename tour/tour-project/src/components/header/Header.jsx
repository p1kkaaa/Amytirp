import './header.css';
import logo from './../../img/logo/sun_trip.jpg';

const Header = () => {
    return ( 
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="Logo" />
                        <span>Sun Trip</span>
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
                            <li><button>Топ-Туры</button></li>
                            <li><button>Тур по Европе</button></li>
                            <li><button>О нас</button></li>
                            <li><button>Контакты</button></li>

                            <div className="header__auth">
                                <button className="header__login-btn">Войти</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;
