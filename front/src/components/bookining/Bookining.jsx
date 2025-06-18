import { Link } from "react-router-dom";
import './bookining.css'

const Bookining = () => {
    return ( 
        <div className="bookining">
            <div className="container">
                <div className="book-btn">
                    <Link className="book-link"> Забронировать </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Bookining;