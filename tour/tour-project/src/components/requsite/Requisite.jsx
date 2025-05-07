import './requisite.css'
import inst from './../../img/icon/instagram.png'

const Requisite = () => {
    return ( 
        <section className="requsite">
        <div className="container">
            <div className="requi__header">
                <h2 className="title-2">Контакты</h2>
            </div>

            <div className="requi__content">
                <div className="requi__block">
                        <h3>Телефон:</h3>
                    <ul>
                        <li><span>📞</span>+996 700 600 645</li>
                        <li><span>📞</span>+996 508 598 887</li>
                        <li><span>📞</span>+996 771 777 787</li>
                    </ul>
                </div>
                <div className="requi__block">
                    <h3>Соц. сети:</h3>
                    <ul className="social-links">
                        <li>
                            <a href="https://www.instagram.com/iam.vien/" target="_blank" rel="noopener noreferrer">
                                <img src={inst} alt="Instagram" />
                            </a>
                            Instagram
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
     );
}
 
export default Requisite
