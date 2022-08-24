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
    const [list, setList] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const report = { review, stars, currSpot };

        // console.log('report????',report)
        dispatch(createReview(report));

        history.push(`/spots/${currSpot}`);
        reset();
    };

    useEffect(() => {
        dispatch(getSpotReviews(id.id));
        // console.log(id.id)
    }, [dispatch]);

    
    // const deleteReview = async (e) => {
    //     // e.preventDefault();
    //     const id = e.target.getAttribute("name")
    //     console.log('delete',id)
    //     // updateList(list.filter(review => {
    //     //     console.log(review.id)
    //     // }))
    // //    const test =list.filter(review => {
    // //         console.log(review.id)
    // //     })
    //     // review.id !== id));
    //     await dispatch(deleteReview(id))
    //     history.push(`/spots/${currSpot}`);
    //     // {<Redirect to="/" />}
    //     //   setRemove(true)
    //     // dispatch(getAllSpots());
    //     // history.push('/')
    //     //   window.location.reload(true);
    // };
    // console.log('allreviews', spotReviewsObj)
    const reset = () => {
        setReview("");
        setStars("");
    };

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
                       
                        <button name={id} onClick={()=>{

                            dispatch(deleteReview(id)); 
                            setList (true)
                            // history.push(`/spots/${currSpot}`)
                        }

                         } className="delete">delete</button>

                            
                        
                    </ul>
                ))}
            </div>
        </section>
    );
}

export default Review