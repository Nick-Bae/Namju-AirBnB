import { getAllSpots } from "../../store/spot"
import { useParams, Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { EditSpot } from "../../store/spot";
import { useDispatch } from 'react-redux';
import { deleteSpot } from "../../store/spot";
import './spotdetail.css'
import {useHistory} from 'react-router-dom';

export const Spotdetail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const spot = useSelector(state => state.spot[id]);
    const [remove, setRemove]=useState(false)

    const deleteReport = async (e) => {
        e.preventDefault();
       await dispatch(deleteSpot(id))
       await  setRemove(true)
    //    window.location.reload(true);
        history.push('/')
    };
//   console.log(getAllSpots())
    useEffect(() => {
        dispatch(getAllSpots());
        // dispatch(deleteSpot(id))
      }, [dispatch, remove]);

    if (!spot) return null;
    return (
        <section>
            <img className="imgdetail" src={spot.previewImage} />
            <ul>
                <li> Name: {spot.name} </li>
                <li> Address: {spot.address} </li>
                <li> Price: {spot.price} </li>
            </ul>
            <div className="editDelete">
                <Link to={`/spots/${id}/edit`} className="edit">Edit</Link>
                <button onClick={deleteReport} className="delete">Delete</button>
            </div>
            <div>
                <Link to="/">Back to Spot List</Link>
            </div>
        </section>
    )
}

export default Spotdetail