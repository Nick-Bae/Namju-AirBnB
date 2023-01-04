import { getSpotBySpotId } from "../../store/spot"
import { useParams, Link, Route, Redirect, NavLink } from 'react-router-dom';
import ImgsViewer from "react-images-viewer";
import { useSelector } from 'react-redux';
import { useState, useEffect, useCallback  } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { useDispatch } from 'react-redux';
import { deleteSpot } from "../../store/spot";
import './spotdetail.css'
import { useHistory } from 'react-router-dom';
import ReviewFormModal from "../ReviewModal";
import ReviewDisplay from "../ReviewModal/ReviewDisplay";
import { getSpotReviews } from "../../store/comment";
import { likeStory } from "../../store/likeStory";


export const Spotdetail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const spot = useSelector(state => state.spot[id]);
    const user = useSelector(state => state.session.user)
    // console.log("user info",user.id)
    const permission = spot?.ownerId !== user?.id ? false : true
    const review = useSelector((state) => state.review)
    const [showSpot, setShowSpot] = useState(false);
    const [owner, setOwner] = useState(true);

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = spot?.image?.map((image)=> image.url)
        


    // const login = (!user) ? alert("Please log in") : true
    // const permission = spot.owner.id === user.id ? setOwner(true) : setOwner(false);

    const deleteReport = async (e) => {

        // if (!user) {
        // return alert("No permission")
        //     if (permission) {
        e.preventDefault();
        let confirmMessage = window.confirm("Are you sure to delete this spot?");
        if (confirmMessage) {
            await dispatch(deleteSpot(id))
            // alert ("The spot deleted")
            history.push('/')
        }
        // }
        // }
    };

    useEffect(() => {
        dispatch(getSpotBySpotId(id))
            .then(() => dispatch(getSpotReviews(id)))
            .then(() => setShowSpot(true))
        // .then(()=>spot.Owner.id === user.id ? setOwner(true): setOwner(false))
    }, [dispatch, review.length], review);

    // useEffect(()=>{
    //     console.log("this is a single spot",spot)
    //   },[spot])
    const clickLike = () =>{
        dispatch(likeStory(id))
    }

    const previewImage =[]
    const isPreviewImage = spot?.image?.filter((image, idx) =>{
       if(image.previewImage === true){
        return previewImage.push(image.url)
       }
    }
    )

    const smallImages=[]
    const filterImage =    spot?.image?.filter((image,idx) =>{
                    if (image.previewImage === false) {
                        return smallImages.push(image.url)
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
        // <body className="detailview">
        <section id="spotDetails">
            <div className="spot-container">
                {/* <div className="spot-outside"> */}
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
                                    <img id="previewImage" src={src}  onClick={ () => openImageViewer(index)} />
                                ))}
                            </div>:<div></div>}
                             <div className="smallDetialContainer">
                                {smallImages.map((src, index) => (
                                
                                    <div id="smallDetailImages">
                                             <img
                                                className={`imgdetail${index}`}
                                                src={ src }
                                                onClick={ () => openImageViewer(index+1) }
                                                width="300"
                                                key={ index }
                                                style={{ margin: '2px' }}
                                                alt=""
                                            />
                                     </div> 
                                ))}
                            </div>
                        
                            {isViewerOpen && (
                                <ImageViewer
                                src={ images }
                                currentIndex={ currentImage }
                                disableScroll={ false }
                                closeOnClickOutside={ true }
                                onClose={ closeImageViewer }
                                />
                            )}
                       
                    </div>
                    
                    <div className="editDelete">
                        {(user) &&
                            (permission) &&
                            <>
                                <Link to={`/spots/${id}/edit`} className="edit">Edit Spot</Link>
                                <button onClick={deleteReport} className="deleteSpotBt">Delete</button>
                                <Link className="addimage" to={`/spots/${id}/images`} spotId={spot.id}> Edit Image </Link>
                                {/* <Link className="deleteimage" to={`/images/${id}`}> Delete Image </Link> */}

                            </>
                        }

                        {/* {(user) && <ReviewFormModal spot={spot} />} */}
                    </div>
                    {/* <div className="maininfo"> */}
                    {/* <section className="maininfo-left"> */}

                    {/* <div className="hostname">
                                <li> Entire home hosted by  </li>
                            </div>
                            <div className="checkinInfo">
                                <li> <i className="fa-solid fa-building-circle-check"></i> &nbsp;Self check-in</li>
                                <li> <i className="fa-solid fa-key"></i>&nbsp;&nbsp;Great check-in experience</li>
                                <li><i className="fa-solid fa-calendar"></i> Free cancellation </li>
                            </div> */}
                    <p id="info"><i className="fa-solid fa-house"></i> &nbsp;Information</p>
                    <div className="descprition">
                        {spot.description}
                    </div>

                    {/* </section> */}

                    {/* <section className="column menu maininfo-right">
                            <ul className="float">
                                <div className="float-top">
                                <li className="price">${spot.price} </li>
                                <li className="night">night</li>
                                <li className="stars"> <i className="fa-solid fa-star"></i>{spot.avgRating}</li>
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
                        <ReviewDisplay reviews={review} spot={spot} />
                    </div>
                    {/* </div> */}
                </div>
                {/* )} */}
            </div>
        </section>
        // </body>
    )
}

export default Spotdetail