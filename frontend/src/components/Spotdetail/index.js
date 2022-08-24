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

export const Spotdetail = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const spot = useSelector(state => state.spot[id]);
    const [showSpot, setShowSpot] = useState(true);

    const openSpot = () => {
        if (!showSpot) return;
        setShowSpot(true);
      }

    useEffect(() => {
        if (showSpot) return;
        setShowSpot(false);
    }, [showSpot]);

    const deleteReport = async (e) => {
        e.preventDefault();
       const removeSpot= await dispatch(deleteSpot(id))

        // {<Redirect to="/" />}
        //   setRemove(true)
        history.push('/')
        //   window.location.reload(true);
    };

    useEffect(() => {
        dispatch(getAllSpots());
        console.log('this working?')
    }, [dispatch]);

console.log('????????',spot)

    if (!spot) return null;
    return (
        <section>
            <div>
                {/* {showSpot && ( */}
                    <div>
                        <img className="imgdetail" src={spot.previewImage} />
                        <ul>
                            <li> Name: {spot.name} </li>
                            <li> Address: {spot.address} </li>
                            <li> Price: {spot.price} </li>
                        </ul>
                        <div className="editDelete">
                            <Link to={`/spots/${id}/edit`} className="edit">Edit</Link>
                            <button onClick={deleteReport} className="delete">Delete</button>
                            {/* <button onClick={()=> dispatch(deleteSpot(id))} className="delete">Delete</button> */}
                            {/* <button onClick={addImage} className="addImage">Add Image</button> */}
                            <Link to={`/spots/${id}/images`}> Add Image </Link>
                            {/* <button >Write Review</button> */}
                            <NavLink to={`/spots/${id}`} onClick={openSpot}>Write Review</NavLink>
                            
                            <Route path={`/spots/${id}`}>
                                {showSpot && (
                                    <Review showSpot={false} id={id}/>
                                )}
                             </Route>
                        </div>
                    </div>
                {/* )} */}
                <div>
                    <Link to="/">Back to Spot List</Link>
                </div>
            </div>
        </section>
    )
}

export default Spotdetail