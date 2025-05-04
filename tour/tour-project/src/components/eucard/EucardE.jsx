import { useState, useEffect, useRef } from 'react';
import styles from './EucardE.module.css';

import arrowimg from './../../img/icon/arrow.png';
import bul from './../../img/photo/first/bulgaria.jpg';
import hun from './../../img/photo/first/hungary.jpg';
import pol from './../../img/photo/first/poland.jpg';
import rom from './../../img/photo/first/romani.jpg';
import nor from './../../img/photo/first/norway.jpg';
import cze from './../../img/photo/first/czech.jpg';
import den from './../../img/photo/first/denmark.jpg';

const baseImages = [bul, hun, pol, rom, nor, cze, den];
const extendedImages = [...baseImages, baseImages[0]]; // добавляем клон первого


const EucardE = () => {
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
    if (index === extendedImages.length) {
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
    <div className={styles.eucarde}>
      <div className={styles.eucarde__imageWrapper}>
        <div
          ref={sliderRef}
          className={styles.eucarde__slider}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none'
          }}
        >
          {extendedImages.map((src, i) => (
            <img key={i} src={src} alt={`slide-${i}`} className={styles.eucarde__img} />
          ))}
        </div>

        <div className={styles.eucarde__overlay}>
          <p className={styles.eucarde__overlayText}>Экскурсии</p>
          <button onClick={handleClick} className={styles.eucarde__button}>Еще...</button>
        </div>
      </div>

      <div className={styles.eucarde__body}>
        <div className={styles.eucarde__text}>
          <div className={styles.eucarde__title}>Восточная Европа</div>
        </div>
        <button onClick={handleClick} className={styles.eucarde__icon}>
          <img src={arrowimg} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default EucardE;
