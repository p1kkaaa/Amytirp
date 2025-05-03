import Card from '../card/Card';
import './cardblock.css'

const Cardblock = () => {
    return ( 
   <section id='news' className='news'>
    <div className="container">
      <div className="news__header">

        <h2 className="title-2">
            Топ-Туры всего мира
          </h2>

      </div>
      <div className="news__card">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </section>
     );
}
 
export default Cardblock;