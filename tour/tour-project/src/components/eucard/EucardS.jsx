import { useState, useEffect, useRef } from 'react';
import styles from './EucardS.module.css';

import arrowimg from './../../img/icon/arrow.png';
import Gree from './../../img/photo/seconde/Greece.jpg';
import Spa from './../../img/photo/seconde/Spain.jpg';
import Ita from './../../img/photo/seconde/Italy.jpg';
import Port from './../../img/photo/seconde/Portugal.jpg';
import Fin from './../../img/photo/seconde/Finland.jpg';
import Swe from './../../img/photo/seconde/Sweden.jpg';
import Cro from './../../img/photo/seconde/Croatia.jpg';

const images = [Gree, Spa, Ita, Port, Fin, Swe, Cro];
const extendedImages = [...images, images[0]]; // добавляем клон первого в конец

const EucardS = () => {
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
    alert("Подробнее о туре");
  };

  return (
    <div className={styles.eucards}>
      <div className={styles.eucards__imageWrapper}>
        <div
          ref={sliderRef}
          className={styles.eucards__slider}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none'
          }}
        >
          {extendedImages.map((src, i) => (
            <img key={i} src={src} alt={`slide-${i}`} className={styles.eucards__img} />
          ))}
        </div>

        <div className={styles.eucards__overlay}>
          <p className={styles.eucards__overlayText}>Экскурсии</p>
          <button onClick={handleClick} className={styles.eucards__button}>Еще...</button>
        </div>
      </div>

      <div className={styles.eucards__body}>
        <div className={styles.eucards__text}>
          <div className={styles.eucards__title}>Южная Европа</div>
        </div>
        <button onClick={handleClick} className={styles.eucards__icon}>
          <img src={arrowimg} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default EucardS;
