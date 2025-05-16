import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Eucard.module.css';
import arrowimg from './../../img/icon/arrow.png';
import Aus from './../../img/photo/Austria.jpg';
import Belg from './../../img/photo/Belgium.jpg';
import Neth from './../../img/photo/Netherlands.jpg';
import Lux from './../../img/photo/Luxemburg.jpg';
import Ger from './../../img/photo/Germany.jpg';
import Irl from './../../img/photo/Ireland.jpg';
import Uk from './../../img/photo/UK.jpg';

const images = [Aus, Belg, Neth, Lux, Ger, Irl, Uk];
const extendedImages = [...images, images[0]]; // добавляем клон первого в конец

const Eucard = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === images.length) {
      // когда доходим до клона последнего
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 800); // подождем завершение анимации
    } else {
      setIsTransitioning(true);
    }
  }, [index]);

  const handleClick = () => {
    navigate('/westeu'); // путь должен совпадать с тем, что указан в Routes
  };

  return (
    <div className={styles.eucard}>
      <div className={styles.eucard__imageWrapper}>
        <div
          ref={sliderRef}
          className={styles.eucard__slider}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none'
          }}
        >
          {extendedImages.map((src, i) => (
            <img key={i} src={src} alt={`slide-${i}`} className={styles.eucard__img} />
          ))}
        </div>

        <div className={styles.eucard__overlay}>
          <p className={styles.eucard__overlayText}>Экскурсии</p>
          <button onClick={handleClick} className={styles.eucard__button}>Еще...</button>
        </div>
      </div>

      <div className={styles.eucard__body}>
        <div className={styles.eucard__text}>
          <div className={styles.eucard__title}>Западная Европа</div>
        </div>
        <button onClick={handleClick} className={styles.eucard__icon}>
          <img src={arrowimg} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Eucard;
