import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSpotReviews } from '../../store/comment';
import { createReview } from '../../store/comment';
import { useSelector } from 'react-redux';
import { getSpotBySpotId } from '../../store/spot';
import './ReviewForm.css'

export const ReviewForm = ({spot, setShowModal}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const spotReviews = useSelector(state => Object.values(state.review))
    const user = useSelector(state=> state.session.user)
    console.log("how many reviews?",spotReviews)
    // const currSpot = spot.id;
    const spotReview = spotReviews.filter(review=> review.spotId ===spot.id)
    const isReview = spotReview.filter(review => review.userId === user.id )
    console.log("isreview",isReview)

    const [update, setUpdate] = useState(false);
    const currentUser = useSelector(state => state.session.user)

    const [review, setReview] = useState("");
    const [leftNum, setLeftNum] = useState();
    const [stars, setStars] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [close, setClose] = useState(true);
    // let message = '';
    // console.log("spotreviews", spotReviews)
    
    useEffect(() => {
        const errors = [];
        if (!review.length) errors.push('-Please enter your review');
        if (review.length >250) errors.push('your review is too long. Maximum is 255 characters')
        if (!stars.length) errors.push('-Please enter your stars');
        if (stars < 0 || stars > 6) errors.push('Please enter between 0~5')
        setValidationErrors(errors);
    }, [review, stars])

    useEffect(()=>{
        let reviewNum = review.trim().length
        setLeftNum(250-reviewNum)
    },[review])
    
    
    // ============ create new review======================
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        
        setHasSubmitted(true);
        // setClose(false)
        // console.log("showModal",setShowModal)
        if (!currentUser) return alert("Please log in")

         if (isReview.length>0) return alert ("You've already left a review on this spot")

        if (validationErrors.length) return alert(`Cannot Submit`);

        const report = { review, stars, spotId: spot.id };

        // dispatch(createReview(report))
        await dispatch(createReview(report))
        //     .then(()=>dispatch(getSpotBySpotId(spot.id)))
            .then(()=>dispatch(getSpotReviews(spot.id)))
            // .then(()=>history.push(`/spots/${spot.id}`))
        setUpdate(true)
        // const createRe = await dispatch(createReview(report));

        setShowModal(false)
    };
   
    const cancel =()=>{
        setShowModal(false)
    }
    useEffect(() => {
        // console.log("useeffect ",currSpot)
        setHasSubmitted(false);
        dispatch(getSpotBySpotId(id))

        // dispatch(getSpotReviews(currSpot));
        // dispatch(getAllSpots())
    }, [dispatch,  update]);
    
    // if (!spotReviews) return null

    return (
        <div id="reviewModal">
           
            {hasSubmitted && validationErrors.length > 0 && (
                <div id="errormessage">
                   <p id="reviewErrorTitle"> The following errors were found:</p> 
                    <ul id="errorDetail">
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            {close && (
            <form id="reviewForm" onSubmit={handleSubmit} >
                <div id="reviewFormBox">
                    <label id="reviewFormLabel">
                        Review
                        <textarea
                            maxLength="250"
                            id="textInput"
                            type="textarea"
                            // placeholder='please leave a review'
                            value={review}
                            onChange={e => setReview(e.target.value)}
                        />
                    </label>
                    
                    <p id="wordCount"> <span style={{color: 'red', fontSize:16}}>{leftNum}</span> /250</p>

                    <label id="reviewFormStar">
                        Stars
                        <input
                         id="starInput"
                            type="number"
                            min="0" max="5"
                            placeholder='Please leave a star between 1~5'
                            value={stars}
                            onChange={e => setStars(e.target.value)}
                        />
                    </label>
                </div>
                <button id="reviewSubmit" type="submit"> Submit </button>&nbsp; 
                <button id="reviewCancel" onClick={cancel}> Cancel </button>
            </form>

            )}

            
        </div>
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