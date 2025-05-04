import Eucard from '../eucard/Eucard';
import EucardE from '../eucard/EucardE';
import EucardS from '../eucard/Eucards';



import './europe.css'



const Europe = () => {
    return ( 
        <section id='europe' className="europe">
            <div className="container">
                <div className="eu__header">

                    <h2 className="title-2">
                        Туры по Европе
                    </h2>

                </div>
                <div className="eu__card">
                <Eucard />
                <EucardE />
                <EucardS />
                </div>
            </div>
        </section>
     );
}
 
export default Europe;