import { getAllSpots, getSpotBySpotId } from "../../store/spot"
import { useParams, Link, Route, Redirect, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSpot } from "../../store/spot";
import './spotdetail.css'
import { useHistory } from 'react-router-dom';
import ReviewFormModal from "../ReviewModal";
import ReviewDisplay from "../ReviewModal/ReviewDisplay";
import { getSpotReviews } from "../../store/comment";

export const Spotdetail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const spot = useSelector(state => state.spot[id]);
    const user = useSelector(state => state.session.user)
// console.log("spot information",spot.ownerId)
// console.log("user info",user.id)
    const permission = spot?.ownerId !== user?.id ? false : true
    console.log("permission",permission)
    const review = useSelector((state) => state.review)
    const [showSpot, setShowSpot] = useState(false);
    const [owner, setOwner]=useState(true);
    // const reviews = useSelector((state) => Object.values(state.reviews));
    // console.log("spot detail",spot.ownerId)

    // if (spot.onwerId)
    // const openSpot = () => {
    //     if (!showSpot) return;
    //     setShowSpot(true);
    // }

    // useEffect(() => {
    //     if (showSpot) return;
    //     setShowSpot(false);
    // }, [showSpot]);

    // const login = (!user) ? alert("Please log in") : true
    // const permission = spot.owner.id === user.id ? setOwner(true) : setOwner(false);

    const deleteReport = async (e) => {

        // if (!user) {
            // return alert("No permission")
        //     if (permission) {
                e.preventDefault();
                await dispatch(deleteSpot(id))
                history.push('/')
            // }
        // }
    };

    useEffect(() => {
        dispatch(getSpotBySpotId(id))
        .then(() => dispatch(getSpotReviews(id)))
        .then (() => setShowSpot(true))
        // .then(()=>spot.Owner.id === user.id ? setOwner(true): setOwner(false))
    }, [dispatch], review );
  
    // useEffect(() => {
    //     dispatch(getSpotBySpotId(id)).then(() =>
    //     dispatch(getSpotReviews(id)))
    //     .then(() => setShowSpot(true));
    // }, [ dispatch, id ]);

    if (!spot) return null;
    return    showSpot&&  (
        // <body className="detailview">
             <section>
            <div>
                <div className="title">{spot?.name}</div>
            </div>

            <ul className="breifinfo">
                <li className="rating"> <i class="fa-solid fa-star"></i>&nbsp;{(spot.avgRating).toFixed(1)}</li>
                <li className="smallinfo"> <i class="fa-solid fa-medal"></i> Superhost </li>
                <li className="address"> {spot.name} {spot.city} {spot.state} </li>
            </ul>
            <div className="spot-container">
                {/* <div className="spot-outside"> */}
                <div className="spot-inside">
                    { (spot.image) &&
                        <img className="imgdetail" src={spot?.image.url} />
                    }
                    <div className="editDelete">
                        {(user )&& 
                        (permission) &&
                        <>
                        <Link to={`/spots/${id}/edit`} className="edit">Edit</Link>
                        <button onClick={deleteReport} className="delete">Delete</button>
                        <Link className="addimage" to={`/spots/${id}/images`}> Add Image </Link>
                        <Link className="deleteimage" to={`/images/${id}`}> Delete Image </Link>
                        
                        </>
                       }
                       <ReviewFormModal spot={spot} />

                    </div>
                    {/* <div className="maininfo"> */}
                        {/* <section className="maininfo-left"> */}

                            {/* <div className="hostname">
                                <li> Entire home hosted by  </li>
                            </div>
                            <div className="checkinInfo">
                                <li> <i class="fa-solid fa-building-circle-check"></i> &nbsp;Self check-in</li>
                                <li> <i class="fa-solid fa-key"></i>&nbsp;&nbsp;Great check-in experience</li>
                                <li><i class="fa-solid fa-calendar"></i> Free cancellation </li>
                            </div> */}
                            <p id="info"><i class="fa-solid fa-house"></i> Information</p>
                            <div className="descprition">
                                {spot.description}
                            </div>

                        {/* </section> */}

                        {/* <section className="column menu maininfo-right">
                            <ul className="float">
                                <div className="float-top">
                                <li className="price">${spot.price} </li>
                                <li className="night">night</li>
                                <li className="stars"> <i class="fa-solid fa-star"></i>{spot.avgRating}</li>
                                </div>
                                <div>

                                <div className="calender"> 
                                    <div className="checkin">
                                    <li>check-in</li>
                                    <li>check-out</li>
                                    </div>
                                    <div>Guests</div>                                
                                </div>
                                <li>Reserve</li>
                                <li>Total before taxes</li>
                                </div>
                            </ul>
                        </section> */}

                    {/* </div> */}
                    {/* <div className="review">
                        <Route path={`/spots/${id}`}>
                            <Review showSpot={false} id={id} />
                        </Route>
                    </div> */}
                    <div >

                    <ReviewDisplay reviews={review} spot={spot}/>
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