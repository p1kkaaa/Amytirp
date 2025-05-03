import './parallax.css'
import promo from './../../img/photo/title_photo.jpg'

const Parallax = () => {
    return ( 
        <section className="promo">
      <div className="container">
        <div className="promo__text">
          <div className="promo__title">
            Необычные экскурсии по всему миру
          </div>
          
        </div>
        <div className="promo_img">
          <img src={promo} alt="Promo"/>
        </div>
      </div>
    </section>
     );
}
 
export default Parallax;