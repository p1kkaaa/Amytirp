import './tour-bali.css'
import Parallax from './../../parallax/Parallax'
import Footer from './../../footer/Footer'
import Bali from '../tourcard/Balicard';
import gid from './../../../img/gid/zubarev.jpg'
import { useNavigate } from 'react-router-dom';


const Tourbali = () => {
    const navigate = useNavigate(); // ✅ теперь это правильно

    const handleClick = () => {
        navigate('/booking'); // работает
    }
    return (
        <>
            <Parallax />
            <section className="tourbali">
                <div className="container">
                    <div className="tourbali__header">
                        <div className="title-2">
                            <h2>Тур по Бали</h2>
                        </div>
                    </div>
                    <div className="tourcontent">
                        <Bali />
                        <div className="txttour">
                            <h2>
                                Это тур по живописному полуострову Букит, который откроет вам одни из самых красивых мест острова. Начните день с посещения пляжа Дримленд, где белоснежный песок и мощные волны создают идеальные условия для отдыха, серфинга и ярких фотосессий.

                                Далее отправимся на пляж Меласти, известный своей кристально чистой водой и впечатляющими скалами. Здесь вы сможете искупаться в спокойных лагунах и насладиться уединённой атмосферой.

                                Продолжим путь вдоль утёсов Букита, откуда откроются захватывающие панорамы океана, которые оставят незабываемые впечатления.

                                🌴 Тур длится 2 недели, и каждый день — это новая глава в путешествии, наполненном солнцем, морем и живой энергетикой Бали. Вас ждут не только пляжи, но и скрытые храмы, вечерние огненные шоу, рыбацкие деревни с аутентичной кухней и закаты, которые будто нарисованы рукой художника. Это идеальный баланс между приключением и релаксом — для тех, кто хочет прочувствовать остров не по картинкам, а всем сердцем.
                            </h2>
                        </div>
                    </div>
                    <div className="tour-sche">
                        <div className="tour-schedule">
                            <h3 className="tour-schedule__title">
                                Программа тура
                            </h3>
                            <ul className="tour-schedule__list">
                                <li><strong>День 1:</strong> Прилет и заселение в отель на побережье Букита. Вечерняя прогулка, приветственный ужин с видом на океан.</li>
                                <li><strong>День 2:</strong> Пляж Дримленд — отдых, серфинг, фотосессии. Обед в кафе на скале. Закат на пляже Бингин.</li>
                                <li><strong>День 3:</strong> Пляж Меласти — купание в бирюзовых лагунах, прогулка вдоль скал. Традиционный балийский массаж вечером.</li>
                                <li><strong>День 4:</strong> Экскурсия по храмам: Улувату и Пура Лемпуянг. Закат и шоу Кечак прямо на краю утёса.</li>
                                <li><strong>День 5:</strong> День релакса: утренняя йога, здоровый завтрак, спа и свободное время.</li>
                                <li><strong>День 6:</strong> Поездка к пляжу Ньянг Ньянг. Подъём по склону и пикник у воды. Вечер в рыбацкой деревне Джимбаран.</li>
                                <li><strong>День 7:</strong> Трекинг вдоль утёсов Букита — скрытые смотровые площадки, фотостопы и чай на высоте.</li>
                                <li><strong>День 8:</strong> Свободный день: серф-уроки, снорклинг, аренда скутера — по желанию.</li>
                                <li><strong>День 9:</strong> Поездка в деревню Печату: культурные мастер-классы, знакомство с местной жизнью и ремёслами.</li>
                                <li><strong>День 10:</strong> Экскурсия на полуостров Танжунг-Беноа: морские виды спорта и лодочная прогулка по кораллам.</li>
                                <li><strong>День 11:</strong> День тишины и внутреннего погружения: утреннее молчание, дыхательные практики, медитация у океана.</li>
                                <li><strong>День 12:</strong> Вечерняя поездка на смотровую точку Karang Boma Cliff. Закат и ужин под звёздами.</li>
                                <li><strong>День 13:</strong> Финальная церемония благодарности, прощальный ужин с живой музыкой.</li>
                                <li><strong>День 14:</strong> Свободное утро, трансфер в аэропорт. Отъезд с багажом ярких впечатлений.</li>
                            </ul>
                        </div>

                        <div className="tour-gid">
                            <img src={gid} alt="Гид Зубарев" />
                            <div className="tour-gid__desc">
                                <p><strong>Гид:</strong> Зубарев Андрей</p>
                                <p>
                                    Я буду сопровождать вас с первого дня — встречу группу в отеле и проведу через все этапы путешествия. Благодаря моему опыту, вы сможете открыть для себя красоты балийских пляжей, погрузиться в атмосферу местной культуры и почувствовать настоящий дух острова.
                                </p>
                            </div>
                            <div className="booking-btn">
                            <button onClick={handleClick}>Забронировать</button>
                        </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Tourbali;
