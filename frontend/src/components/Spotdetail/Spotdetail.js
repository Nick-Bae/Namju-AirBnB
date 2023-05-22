import { getSpotBySpotId } from "../../store/spot"
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { useDispatch } from 'react-redux';
import { deleteSpot } from "../../store/spot";
import './spotdetail.css'
import { useHistory } from 'react-router-dom';
import ReviewDisplay from "../ReviewModal/ReviewDisplay";
import { getSpotReviews } from "../../store/comment";
import { likeStory } from "../../store/likeStory";
import Booking from "../Booking";

export const Spotdetail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const spot = useSelector(state => state.spot[id]);
    const user = useSelector(state => state.session.user)
    const permission = spot?.ownerId !== user?.id ? false : true
    const review = useSelector((state) => state.review)
    const [showSpot, setShowSpot] = useState(false);

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = spot?.image?.map((image) => image.url)

    // const login = (!user) ? alert("Please log in") : true
    // const permission = spot.owner.id === user.id ? setOwner(true) : setOwner(false);

    const deleteReport = async (e) => {
        e.preventDefault();
        let confirmMessage = window.confirm("Are you sure to delete this spot?");
        if (confirmMessage) {
            await dispatch(deleteSpot(id))
            history.push('/')
        }
    };

    useEffect(() => {
        dispatch(getSpotBySpotId(id))
            .then(() => dispatch(getSpotReviews(id)))
            .then(() => setShowSpot(true))
    }, [dispatch, review.length]);

    const clickLike = () => {
        dispatch(likeStory(id))
    }

    const previewImage = []
    const isPreviewImage = spot?.image?.filter((image, idx) => {
        if (image.previewImage === true) {
             previewImage.push(image.url)
        }
    }
    )

    const smallImages = []
    const filterImage = spot?.image?.filter((image, idx) => {
        if (image.previewImage === false) {
             smallImages.push(image.url)
        }
    }
    )

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    if (!spot) return null;
    return showSpot && (
        <section id="spotDetails">
            <div className="spot-container">
                <div className="spot-inside">
                    <div id="spotTop">
                        <div id="spotTitle">
                            <div className="spotTitle">{spot?.name}</div>
                        </div>

                        <ul className="breifinfo">
                            <li className="rating"> <i id="star" className="fa-solid fa-star"></i>&nbsp;{(spot?.avgRating).toFixed(1)} · {spot?.numReviews} Reviews</li>
                            {
                                (spot?.avgRating > 4.5) &&
                                <li className="smallinfo"> <i className="fa-solid fa-medal"></i> Superhost </li>
                            }
                            <li id="spotName">{spot.name}</li>
                            <li className="address">  {spot.city} {spot.state} </li>
                        </ul>
                    </div>

                    <div id="spotImages">
                        {previewImage ?
                            <div id="previewImageBox">
                                {previewImage.map((src, index) => (
                                    <img key={index} id="previewImage" src={src} onClick={() => openImageViewer(index)} />
                                ))}
                            </div> : <div></div>}
                        <div className="smallDetialContainer">
                            {smallImages.map((src, index) => (

                                <div key={index} id="smallDetailImages">
                                    <img
                                        className={`imgdetail${index}`}
                                        src={src}
                                        onClick={() => openImageViewer(index + 1)}
                                        width="300"
                                        key={index}
                                        style={{ margin: '2px' }}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>

                        {isViewerOpen && (
                            <ImageViewer
                                src={images}
                                currentIndex={currentImage}
                                disableScroll={false}
                                closeOnClickOutside={true}
                                onClose={closeImageViewer}
                            />
                        )}

                    </div>

                    <div className="editDelete">
                        {(user) &&
                            (permission) &&
                            <>
                                <Link to={`/spots/${id}/edit`} className="edit">Edit Spot</Link>
                                <button onClick={deleteReport} className="deleteSpotBt">Delete</button>
                                <Link className="addimage" to={`/spots/${id}/images`} spotid={spot.id}> Edit Image </Link>

                            </>
                        }
                    </div>
                    <div className="maininfo">
                        <section className="maininfo-left">

                            <div className="hostname">
                                <li id="hostTitle"> Entire home hosted by</li>
                                <li id="ownerName">&nbsp; {spot.Owner.firstName} </li>
                            </div>
                            <div className="checkinInfo">
                                <div>
                                    <li> <i className="fa fa-building-circle-check"></i> &nbsp;Self check-in</li>
                                    <li className='checkLabel'>Check yourself in with the keypad.</li>
                                </div>
                                <div>
                                    <li className='generalInfo'> <i className="fa-solid fa-key"></i>&nbsp;&nbsp;Great check-in experience</li>
                                    <li className='checkLabel'>Easy to check in.</li>
                                </div>
                                <div>
                                    <li className='generalInfo'> <i className="fa-solid fa-calendar"></i> &nbsp; Free cancellation </li>
                                    <li className='checkLabel'>Cancel your booking anytime.</li>
                                </div>
                            </div>
                            <div id="info"><i className="fa-solid fa-house"></i> &nbsp;Information</div>
                            <div className="descprition">
                                {spot.description}
                            </div>

                        </section>
                        
                        {/* <section className="column menu maininfo-right"> */}
                        <section className="calenderContainer">
                            <div className="float">
                                <div className="float-top">
                                    <div className='dailyPrice'>
                                        <div className="price">${spot.price} </div>
                                        <div className="night">night</div>
                                    </div>
                                    <div className="stars"> <i className="fa-solid fa-star"></i>{spot.avgRating}</div>
                                </div>

                                <div className="calender">
                                <Booking spotid={spot.id} />
                                </div>
                                
                            </div>
                            
                        </section>

                    </div>
                    {/* <div className="review">
                        <Route path={`/spots/${id}`}>
                            <Review showSpot={false} id={id} />
                        </Route>
                    </div> */}
                    
                    <div >
                        <ReviewDisplay reviews={review} spot={spot} />
                    </div>
                    {/* </div> */}
                </div>
                {/* )} */}
            </div>
           


        </section>
        
    )
}

export default Spotdetail