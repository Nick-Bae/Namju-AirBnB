// import { useState, useParams, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getSpotReviews } from '../../store/comment';
// import { createReview } from '../../store/comment';
// import { useSelector } from 'react-redux';
// import { deleteReview } from '../../store/comment';
// import './review.css'

// export const Review = (id) => {
    // console.log("????",id)
    // const history = useHistory();
    // const dispatch = useDispatch();
    // const spotReviewsObj = useSelector(state => state.review)
    // const spotReviews = Object.values(spotReviewsObj);
    // const currSpot = id.id;
    // const spotReview = spotReviews.filter(spot => (spot.spotId === parseInt(currSpot)))
    // const [update, setUpdate] = useState(false);
    // const [remove, setRemove] = useState(false);
    // const currentUser = useSelector(state => state.session.user)

    // const [review, setReview] = useState("");
    // const [stars, setStars] = useState("");
    // const [validationErrors, setValidationErrors] = useState([]);
    // const [hasSubmitted, setHasSubmitted] = useState(false);

    // useEffect(() => {
    //     const errors = [];
    //     if (!review.length) errors.push('Please enter your review');
    //     if (!stars.length) errors.push('Please enter your stars');
    //     if (stars < 0 || stars > 6) errors.push('Please enter between 0~5')
    //     setValidationErrors(errors);
    // }, [review, stars,])

    // ============ create new review======================
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!currentUser) return alert ("Please log in")

    //     const report = { review, stars, currSpot };

    //     setUpdate(true)
    //     dispatch(createReview(report));
    //     history.push(`/spots/${currSpot}`);
    //     reset();
    // };


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

    // useEffect(() => {
    //     // dispatch(getSpotReviews(id.id));
    //     setUpdate(false)
    //     // console.log(id.id)
    // }, [dispatch, update]);

    // // console.log('allreviews', spotReviewsObj)
    // const reset = () => {
    //     setReview("");
    //     setStars("");
    // };

    // if (!spotReview) return null

    // return (
        // <section>
            {/* <form onSubmit={handleSubmit} >
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
            </form> */}

            // <div>

                {/* {spotReview.map(({ id, userId, spotId, review, stars }) => (

                    <ul >
                        <li className='userId: '>
                            User Id: {userId}
                        </li>
                        <li className='review'>
                            Review: {review}
                        </li>
                        <li className='review'>
                            Stars: {stars}
                        </li>

                        <button value={id} onClick={() => {
                            const login = (!currentUser) ? alert("Please log in") : true

                            if (login) {
                                const deletePermission = userId !== currentUser.id ? alert("No Permission to delete") : true
                                if (deletePermission) {
                                    dispatch(deleteReview(parseInt(id)));
                                    // setRemove(true)
                                    history.push(`/spots/${currSpot}`);
                                }
                            }
                        // }} className="delete" disabled={validationErrors.length > 0}>delete</button>
                        }} className="delete" >delete</button>
                    </ul>
                ))} */}
            // </div>
        // </section>
    // );
// }

// export default Review