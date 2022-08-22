import { getSpots } from "../../store/spot"
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Spotdetail = () => {
    const { id } = useParams();
    const spot = useSelector(state => state.spot[id])
    return (
        <section>
            <ul>
                <li> Name: {spot.name} </li>
                <li> Address: {spot.address} </li>
                <li> Price: {spot.price} </li>
            </ul>
            <Link to="/">Back to Spot List</Link>
        </section>
    )
}

export default Spotdetail