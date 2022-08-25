import { getAllSpots } from "../../store/spot"
import { useParams, Link, Route, Redirect, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { EditSpot } from "../../store/spot";
import { useDispatch } from 'react-redux';
import { deleteSpot } from "../../store/spot";
import './spotdetail.css'
import { useHistory } from 'react-router-dom';
import { SpotList } from '../Spots/index'
import { Review } from '../Review';


export const Spotdetail = ({ }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const spot = useSelector(state => state.spot[id]);
    const [showSpot, setShowSpot] = useState(true);
    const user = useSelector(state => state.session.user)

    const openSpot = () => {
        if (!showSpot) return;
        setShowSpot(true);
    }

    useEffect(() => {
        if (showSpot) return;
        setShowSpot(false);
    }, [showSpot]);

    const deleteReport = async (e) => {
        const login = (!user) ? alert("Please log in") : true
    
       if (login) {
           const permission = spot.ownerId !== user.id ? alert("No permission to delete") : true
           if (permission) {
               e.preventDefault();
               await dispatch(deleteSpot(id))
               history.push('/')
               //   window.location.reload(true);
           }
       }
    };

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    if (!spot) return null;
    return (
        <section>
            <h2>{spot.name}</h2>
            <div className="spot-container">
                {/* {showSpot && ( */}
                <div className="spot-outside">
                    <div className="spot-inside">
                        <img className="imgdetail" src={spot.previewImage} />
                        
                        <div className="editDelete">
                            <Link to={`/spots/${id}/edit`} className="edit">Edit</Link>
                            <button onClick={deleteReport} className="delete">Delete</button>
                            
                            <Link className="addimage" to={`/spots/${id}/images`}> Add Image </Link>
                            <NavLink className="write" to={`/spots/${id}`} onClick={openSpot}>Review</NavLink>
                        </div>
                        <ul>
                            {/* <li> Name: {spot.name} </li> */}
                            <li> Address: {spot.address} </li>
                            <li> Price: ${spot.price} </li>
                        </ul>
                    </div>
                    <div className="review">
                        <Route path={`/spots/${id}`}>
                            {showSpot && (
                                <Review showSpot={false} id={id} />
                            )}
                        </Route>
                    </div>
                </div>
                {/* )} */}
                <div>
                    {/* <Link to="/">Back to Spot List</Link> */}
                </div>
            </div>
        </section>
    )
}

export default Spotdetail