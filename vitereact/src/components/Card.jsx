
import Img from './Img.jsx';
function Card({data}) {
    
    return( <div className="shadow-xl">
        <Img thumbnail={data.thumbnail}/>
        <h3>{data.title}</h3>
        <p>{data.price}</p>
    </div>
    );
}  
export default Card;