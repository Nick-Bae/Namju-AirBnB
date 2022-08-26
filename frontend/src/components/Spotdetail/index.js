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
        // <body className="detailview">
        <section>
            <div>
                <div className="title">{spot.name}</div>
            </div>

            <ul className="breifinfo">
                <li className="rating"> <i class="fa-solid fa-star"></i>&nbsp;{spot.avgRating}</li>
                <li className="smallinfo"> <i class="fa-solid fa-medal"></i> Superhost </li>
                <li className="address"> {spot.name} {spot.city} {spot.state} </li>
            </ul>
            <div className="spot-container">
                {/* <div className="spot-outside"> */}
                <div className="spot-inside">
                    <img className="imgdetail" src={spot.previewImage} />
                    <div className="editDelete">
                        <Link to={`/spots/${id}/edit`} className="edit">Edit</Link>
                        <button onClick={deleteReport} className="delete">Delete</button>
                        <Link className="addimage" to={`/spots/${id}/images`}> Add Image </Link>
                        <NavLink className="write" to={`/spots/${id}`} onClick={openSpot}>Review</NavLink>
                    </div>
                    <div className="maininfo">
                        <section className="maininfo-left">

                            <div className="hostname">
                                <li> Entire home hosted by  </li>
                            </div>
                            <div className="checkinInfo">
                                <li> <i class="fa-solid fa-building-circle-check"></i> &nbsp;Self check-in</li>
                                <li> <i class="fa-solid fa-key"></i>&nbsp;&nbsp;Great check-in experience</li>
                                <li><i class="fa-solid fa-calendar"></i> Free cancellation </li>
                            </div>
                            <div className="descprition">
                                {spot.description}
                            </div>

                        </section>

                        <section className="column menu maininfo-right">
                            <ul className="float">
                                <div className="float-top">
                                <li className="price">${spot.price} </li>
                                <li className="night">night</li>
                                <li className="stars"> <i class="fa-solid fa-star"></i>{spot.avgRating}</li>
                                </div>
                                <div>

                                <li>The City</li>
                                <li>The Island</li>
                                <li>The Food</li>
                                </div>
                            </ul>
                        </section>

                    </div>
                    <div className="review">
                        <Route path={`/spots/${id}`}>
                            <Review showSpot={false} id={id} />
                        </Route>
                    </div>
                    {/* </div> */}
                </div>
                {/* )} */}
                <div>
                    {/* <Link to="/">Back to Spot List</Link> */}
                </div>
            </div>
        </section>
        // </body>
    )
}

export default Spotdetail