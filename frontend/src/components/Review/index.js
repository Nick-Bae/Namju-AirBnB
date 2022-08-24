import { useState, useParams, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSpotReviews } from '../../store/comment';
import { createReview } from '../../store/comment';
import { useSelector } from 'react-redux';
import { deleteReview } from '../../store/comment';


export const Review = (id) => {
    const history = useHistory();
    const [review, setReview] = useState("");
    const [stars, setStars] = useState("");
    const dispatch = useDispatch();
    const spotReviewsObj = useSelector(state => state.review)
    const spotReviews = Object.values(spotReviewsObj);
    const currSpot = id.id;
    const spotReview = spotReviews.filter(spot=> (spot.spotId === parseInt(currSpot)))
    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);


    // ============ create new review======================
      const handleSubmit =  (e) => {
        e.preventDefault();
        const report = { review, stars, currSpot };

        // console.log('report????',report)
        dispatch(createReview(report));
        setUpdate(true)
        history.push(`/spots/${currSpot}`);
        reset();
    };


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

    useEffect(() => {
        dispatch(getSpotReviews(id.id));
        // console.log(id.id)
    }, [dispatch, update, remove]);

    // console.log('allreviews', spotReviewsObj)
    const reset = () => {
        setReview("");
        setStars("");
    };
    if (!spotReview) return null

    return (
        <section>
            <form onSubmit={handleSubmit} >
                <h2>Review</h2>
                <label>
                    Review
                    <input
                        type="text"
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    />
                </label>
                <label>
                    stars
                    <input
                        type="number"
                        value={stars}
                        onChange={e => setStars(e.target.value)}
                    />
                </label>
                <button type="submit"> Submit </button>
            </form>

            <div>

                {spotReview.map(({ id, userId, spotId, review, stars }) => (

                //    (currSpot === spotId) &&
                    <ul >
                        <li className='userId: '>
                            User Id: {userId}
                        </li>
                        <li  className='review'>
                            Review: {review}
                        </li>
                        <li className='review'>
                           Stars: {stars}
                        </li>
                       
                        <button value={id} onClick={()=>{
                            dispatch(deleteReview(parseInt(id)));
                            setRemove(true)
                            history.push(`/spots/${currSpot}`);
                        }} className="delete">delete</button>  
                    </ul>
                ))}
            </div>
        </section>
    );
}

export default Review