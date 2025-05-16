import styles from './Card.module.css';
import content from './../../img/photo/tailand.jpg';
import arrowimg from './../../img/icon/arrow.png'
import { useNavigate } from 'react-router-dom';

const Tailand = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('./tour-tailand')
  };

  return (  
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img className={styles.card__img} src={content} alt="Con" />
        <div className={styles.card__overlay}>
          <p className={styles.card__overlayText}>
            Побывать на саммых красивых островах Тайланда
          </p>
          <button onClick={handleClick} className={styles.card__button}>
            Еще...
          </button>
        </div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>Тайланд</div>
        </div>
        <button onClick={handleClick} className={styles.card__icon}>
            <img src={arrowimg} alt="Open" />
        </button>
      </div>
    </div>
  );
};
 
export default Tailand;
