import { useState, useEffect, React } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllReviews, getSpotReviews } from '../../store/comment';
import { createReview } from '../../store/comment';
import { useSelector } from 'react-redux';
import { deleteReview } from '../../store/comment';
import './review.css'
import { getSpotBySpotId } from '../../store/spot';
import { getAllImages } from '../../store/image';
import './ReviewDisplay.css'

export const ReviewDisplay = ({spot, reviews}) => {
    
const history = useHistory();
const dispatch = useDispatch();
const onlyspotReviews = useSelector(state => Object.values(state.review))
// const spotReviews = Object.values(onlyspotReviews);
// const reviews = useSelector((state) => Object.values(state.review));
// const propReview = Object.values(reviews)

// console.log("prop reviews",spot)


// const spotReviewsObj = useSelector(state => state.review)
// console.log("this is object??",spotReviewsObj)
// const spotReviews = Object.values(spotReviewsObj);
// console.log("only spot review",onlyspotReviews)

// console.log(spotReviewsObj)
// if (!spotReviewsObj) return null
// console.log("how many reviews?",spotReviews)
   
// console.log("spot",spot.id)
// console.log("reviews?????",reviews)
// console.log("current spot reviews",spotReviews)

// const currSpot = spot.id;
const [update, setUpdate] = useState(false);
const [remove, setRemove] = useState(false);
const currentUser = useSelector(state => state.session.user)
const {id} = useParams();
const [review, setReview] = useState("");
const [stars, setStars] = useState("");
const [spotId, setSpotId]= useState('')
const [validationErrors, setValidationErrors] = useState([]);
const [hasSubmitted, setHasSubmitted] = useState(false);
// console.log("ownerId",revi)
// const permission = currentUser?.id === spot.ownerId
const spotReview = onlyspotReviews.filter(review => (review.spotId === (spot.id)))

useEffect(() => {
    const errors = [];
    if (!review.length) errors.push('Please enter your review');
    if (!stars.length) errors.push('Please enter your stars');
    if (stars < 0 || stars > 6) errors.push('Please enter between 0~5')
    setValidationErrors(errors);
}, [review, stars,])

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

useEffect(() => {
    dispatch(getSpotReviews(id));
    dispatch(getSpotBySpotId(id))
    // setSpotId(id)
    // console.log(id.id)
}, [dispatch,  id]);

// console.log('allreviews', spotReviewsObj)
// const reset = () => {
//     setReview("");
//     setStars("");
// };
// if (!spotReviewsObj) return null
// const spotReviews = Object.values(spotReviewsObj);
if (!spotReview) return null
    return (
    
    <div >
    
                    {setHasSubmitted && spotReview.map(({ id, userId, spotId, review, stars }) => (
    
                        <ul id='reviewlist'>
                            <li className='userId: '>
                                User Id: {userId}
                            </li>
                            <li className='review'>
                                Review: {review}
                            </li>
                            <li className='review'>
                                Stars: {stars}
                            </li>
                            {
                                (userId === currentUser?.id) &&      
                             <li>

                                 <button value={id} onClick={() => {
                                     const login = (!currentUser) ? alert("Please log in") : true
         
                                     if (login) {
                                         const deletePermission = userId !== currentUser?.id ? alert("No Permission to delete") : true
                                         if (deletePermission) {
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
                    ))}
                </div>
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