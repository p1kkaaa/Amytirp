import styles from './Tourcard.module.css';
import content from './../../../img/photo/bali.jpg';


const Bali = () => {


  return (  
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img className={styles.card__img} src={content} alt="Con" />
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          {/* <div className={styles.card__title}>Тайны сердца Бали</div> */}
        </div>
      </div>
    </div>
  );
};
 
export default Bali;
