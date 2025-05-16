import { useNavigate } from 'react-router-dom';
import gid1 from './../../img/gid/zubarev.jpg'
import gid2 from './../../img/gid/derzko.jpg'
import gid3 from './../../img/gid/kudry.jpg'

import './gid.css'


const guides = [
    {
        img: gid1,
        name: 'Александр Зубарев',
        bio: 'Привет! Я Саша Зубарев — провожу авторские туры с нестандартными маршрутами, скрытыми локациями и атмосферными историями. Погнали открывать новое вместе!',
    },
    {
        img: gid2,
        name: 'Данил Киселев',
        bio: 'Йо, я Данил — гид, с которым не будет нудно. Веду туры по городским легендам и уличной культуре. Хочешь увидеть город живым? Ты по адресу 😉',
    },
    {
        img: gid3,
        name: 'Александр Парадеев',
        bio: 'Привет, я Александр — проводник по истории без занудства. Превращаю экскурсии в квесты с фактами, которые удивляют местных. Легко, с юмором и драйвом!',
    }
];

const Gid = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/gidpage'); // путь должен совпадать с тем, что указан в Routes
    };
    return ( 
        <section id='gid' className="gid">
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
                    <button onClick={handleClick} className='gid-btn'>Все Наши Супер-Гиды</button>
                </div>
            </div>
        </section>
     );
}
 
export default Gid;
