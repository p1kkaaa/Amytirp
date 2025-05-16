import './parallax.css'
import promo from './../../img/photo/titleimge.jpg'

const Parallax = () => {
    return ( 
        <section className="promo">
      <div className="container">
        <div className="promo__text">
          <div className="mutetit">
            <p>
            Sun Trip — туда, где отдых на 100% твой.
            </p>
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