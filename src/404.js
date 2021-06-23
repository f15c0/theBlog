import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2> Sorry</h2>
            <h5>oOOPs!!   PaGe you're Looking for cannot be F0und.. </h5>
            <Link to="/"><button className="btn">Go Back</button></Link>
        </div>
     );
}
 
export default NotFound;