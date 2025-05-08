import gid1 from './../../img/gid/zubarev.jpg'
import gid2 from './../../img/gid/derzko.jpg'
import gid3 from './../../img/gid/kudry.jpg'

import './gid.css'

const guides = [
    {
        img: gid1,
        name: 'Александр Зубарев',
        bio: 'Привет! Я Саша Зубарев — обожаю приключения и нестандартные маршруты. Уже 8 лет провожу авторские туры, где нет места скуке. Люблю делиться скрытыми локациями, атмосферными улочками и историями, которые не найти в интернете. Погнали открывать новое вместе!',
    },
    {
        img: gid2,
        name: 'Данил Киселев',
        bio: 'Йо, я Данил — тот самый гид, с которым точно не будет нудно. Специализируюсь на городских легендах, уличной культуре и закоулках, куда не дойдут обычные экскурсии. Если хочешь увидеть город живым, с настоящими эмоциями — ты по адресу 😉',
    },
    {
        img: gid3,
        name: 'Александр Парадеев',
        bio: 'Привет, я Александр — ваш проводник по истории, но без занудства. Люблю превращать экскурсии в увлекательные квесты с фактами, которые удивляют даже местных. Будем не просто ходить, а проживать каждое место — легко, с юмором и драйвом.',
    }
];

const Gid = () => {
    const handleClick = () => {
        alert("Подробнее о туре");
      };
    return ( 
        <section className="gid">
            <div className="container">
                <div className="gid__header">
                    <div className="title-2">
                        <h2>Наши Супер-Гиды</h2>
                    </div>
                </div>
                <div className="gid__list">
                    {guides.map((guide, index) => (
                        <div className="gid__item" key={index}>
                            <a href="#!"><img src={guide.img} alt={guide.name} /></a>
                            <h3 className="gid__name">{guide.name}</h3>
                            <p className="gid__bio">{guide.bio}</p>
                        </div>
                    ))}
                </div>  
                <div className="gid__btn">
                    <button onClick={handleClick} className='gid-btn'>Еще...</button>
                </div>
            </div>
        </section>
     );
}
 
export default Gid;
