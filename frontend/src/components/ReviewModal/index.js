import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import ReviewForm from '../Review';
import { getSpotReviews } from '../../store/comment';
import { getSpotBySpotId } from '../../store/spot';

function ReviewFormModal({spot}) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  
  // const reviews = useSelector(state=>state.reviews)
  
  // console.log("reviewformModal",spot)
  // console.log("reviews from useSelector",reviews)
  useEffect(() => {
    dispatch(getSpotBySpotId(spot.id));
    dispatch(getSpotReviews(spot.id));
    // .then(() => dispatch (getAllSpots()))
}, [dispatch, spot.id]);

  useEffect(()=> {
    setShowModal(false);
    // if (Object.keys(reviews).length !==0) {
// console.log("inside useeffect",spot.id)
      // dispatch(getSpotReviews(spot.id));
    // }
  },[dispatch]);

  return (
    <div className='review'>
      <button className="reviewbt" onClick={() => setShowModal(true)}>Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm />
        </Modal>
      )}
    </div>
  );
}

export default ReviewFormModal;