import Bali from '../tourcard/Bali';
import Dubai from '../tourcard/Dubai';
import Tailand from '../tourcard/Tailand';
import './tour.css'

const Tour = () => {
    return ( 
   <section id='top-tours' className='tour'>
    <div className="container">
      <div className="tour__header">

        <h2 className="title-2">
            Топ-Туры
          </h2>

      </div>
      <div className="tour__card">
        <Bali />
        <Tailand />
        <Dubai />
      </div>
    </div>
  </section>
     );
}
 
export default Tour;