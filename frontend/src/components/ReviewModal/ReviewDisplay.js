import { useState, useEffect, React } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSpotReviews } from '../../store/comment';
import { useSelector } from 'react-redux';
import { deleteReview } from '../../store/comment';
import { getSpotBySpotId } from '../../store/spot';
import './ReviewDisplay.css'
import ReviewFormModal from '.';

export const ReviewDisplay = ({ spot }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const onlyspotReviews = useSelector(state => Object.values(state.review));
   
    // const currSpot = spot.id;
    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);
    const currentUser = useSelector(state => state.session.user)
    const { id } = useParams();
    const [review, setReview] = useState("");
    const [stars, setStars] = useState("");
    const [spotId, setSpotId] = useState('')
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    // console.log("ownerId",revi)
    // const permission = currentUser?.id === spot.ownerId
    const spotReview = onlyspotReviews.filter(review => (review.spotId === (spot.id)))
    
    // useEffect(() => {
    //     const errors = [];
    //     if (!review.length) errors.push('Please enter your review');
    //     if (!stars.length) errors.push('Please enter your stars');
    //     if (stars < 0 || stars > 6) errors.push('Please enter between 0~5')
    //     setValidationErrors(errors);
    // }, [review, stars])

    const reveiwModal =()=>{
        <ReviewFormModal />
    }

    useEffect(() => {
        // dispatch(getSpotReviews(id));
        dispatch(getSpotBySpotId(id))

    }, [dispatch, update ]);

    // console.log('allreviews', spotReviewsObj)
    // const reset = () => {
    //     setReview("");
    //     setStars("");
    // };
    // if (!spotReviewsObj) return null
    // const spotReviews = Object.values(spotReviewsObj);
    if (!spotReview) return null

    return (
        <>
            <p id="reviewIcon">
                {/* <button id="reviewModalClick" onClick={reveiwModal}> */}
                    
                <i className="fa-solid fa-pen-to-square"> </i> &nbsp; Review
                     
                     {/* <ReviewFormModal />
                     </button> */}
                
                </p>
            <p id="numbers"><i className="fa-sharp fa-solid fa-star"></i> 
            &nbsp; {(spot.avgRating.toFixed(1))} · {spot.numReviews} Reviews</p>
            <div id="reviews">

                {setHasSubmitted && spotReview.map(({ id, userId, spotId, review, stars, User, updatedAt }) => (

                    <>
                        <ul key={id} id='reviewer'>
                            <li className='userId'>
                                {/* User Id: {userId} */}
                                {User?.firstName} {User?.lastName}
                            </li>
                            <li className='date'>
                                {updatedAt.split('T')[0]}
                            </li>
                        </ul>
                        <ul>
                            <li className='review'>
                                {review}
                            </li>
                            {/* <li className='reviewStar'>
                                Stars: {stars}
                                {(<i className="fa-sharp fa-solid fa-star"></i>) * Number(stars)}

                            </li> */}

                            {
                                (userId === currentUser?.id) &&
                                <li>
                                    <button value={id} onClick={() => {
                                        const login = (!currentUser) ? alert("Please log in") : true

                                        if (login) {
                                            const deletePermission = userId !== currentUser?.id ? alert("No Permission to delete") : true
                                            if (deletePermission) {
                                                setUpdate(true)
                                                dispatch(deleteReview(parseInt(id)));
                                                // setRemove(true)
                                                // history.push(`/spots/${currSpot}`);
                                            }
                                        }
                                        // }} className="delete" disabled={validationErrors.length > 0}>delete</button>
                                    }} className="deleteBt" >delete</button>
                                </li>
                            }
                        </ul>
                    </>
                ))}
            </div>
        </>
    )
}

export default ReviewDisplay;
// ================== delete Review ==================
// const deleteReview =  (e) => {
//     // e.preventDefault();
//     console.log('befor ')
//     const id = e.target.getAttribute("value")

//     // const id = obj
//     // const id  = e.getAttribute('value')
//     console.log('button Id', id)
//      dispatch(deleteReview(parseInt(id)))
//     setRemove(true)


//     // history.push(`/spots/${currSpot}`);
//     // {<Redirect to="/" />}
//     //   setRemove(true)
//     // dispatch(getAllSpots());
//     // history.push('/')
//     //   window.location.reload(true);
// };

  // ============ create new review======================
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!currentUser) return alert ("Please log in")

    //     const report = { review, stars, currSpot };

    //     // console.log('report????',report)
    //     setUpdate(true)
    //     dispatch(createReview(report));
    //     history.push(`/spots/${currSpot}`);
    //     reset();
    // };