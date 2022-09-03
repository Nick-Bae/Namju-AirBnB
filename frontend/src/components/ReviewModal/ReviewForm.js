import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSpotReviews } from '../../store/comment';
import { createReview } from '../../store/comment';
import { useSelector } from 'react-redux';
import { deleteReview } from '../../store/comment';
import { getAllSpots, getSpotBySpotId } from '../../store/spot';
import './review.css'

export const ReviewForm = ({spot}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const spotReviews = useSelector(state =>  Object.values(state.review))
    const user = useSelector(state=> state.session.user)
    const {spotId}= useParams();
    // console.log("how many reviews?",spotReviewsObj)
    // const currSpot = spot.id;
    const spotReview = spotReviews.filter(review=> review.spotId ===spot.id)
    const isReview = spotReview.filter(review => review.userId === user.id )
    console.log("isreview",isReview)

    const [update, setUpdate] = useState(false);
    const currentUser = useSelector(state => state.session.user)

    const [review, setReview] = useState("");
    const [stars, setStars] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [close, setClose] = useState(true);
    // let message = '';
    // console.log("spotreviews", spotReviews)
    
    useEffect(() => {
        const errors = [];
        if (!review.length) errors.push('Please enter your review');
        if (!stars.length) errors.push('Please enter your stars');
        if (stars < 0 || stars > 6) errors.push('Please enter between 0~5')
        setValidationErrors(errors);
    }, [review, stars])

    // ============ create new review======================
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!currentUser) return alert("Please log in")

        // const isReview=spotReview.find(review=> review.userId === currentUser.id)
        //  console.log("isReview",isReview)
         if (isReview.length>0) return alert ("You've already left a review on this spot")

        setHasSubmitted(true);
        setUpdate(true);
        setClose(false)
        if (validationErrors.length) return alert(`Cannot Submit`);

        const report = { review, stars, spotId: spot.id };

        
        //console.log('ReviewForm ????',spot)
        // function onChange(){
        //     const newCount = count + 1;
        //     setCount(newCount);
        //     getData(newCount); 
            
        //   }

        await dispatch(createReview(report))
            .then(()=>dispatch(getSpotBySpotId(spot.id)))
            .then(()=>dispatch(getSpotReviews(spot.id)))
            
        // setUpdate(true)
        // const createRe = await dispatch(createReview(report));

        // history.push(`/spots/${spot.id}`);

     
    };
   
    
    useEffect(() => {
        // console.log("useeffect ",currSpot)
        setHasSubmitted(false);
        // dispatch(getSpotReviews(currSpot));
        // dispatch(getAllSpots())
    }, [dispatch, update]);
    
  
    // if (!spotReviews) return null

    return (
        <section>
           
            {hasSubmitted && validationErrors.length > 0 && (
                <div id="errormessage">
                    The following errors were found:
                    <ul>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            {close && (
            <form onSubmit={handleSubmit} >
                <div id="review">
                    <label>
                        Review
                        <input
                            type="text"
                            placeholder='please leave a review'
                            value={review}
                            onChange={e => setReview(e.target.value)}
                        />
                    </label>
                    <label>
                        stars
                        <input
                            type="number"
                            min="0" max="5"
                            placeholder='0'
                            value={stars}
                            onChange={e => setStars(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit"> Submit </button>
            </form>

            )}

            
        </section>
    );
}


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


export default ReviewForm