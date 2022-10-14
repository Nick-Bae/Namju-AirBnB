import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';
// import { getSpotReviews } from '../../store/comment';
import { getSpotBySpotId } from '../../store/spot';
// import './review.css';

function ReviewFormModal({spot, reviews}) {
  const dispatch = useDispatch();
  // const reviews = useSelector((state) => state.reviews);
  // console.log("reviews",reviews)

  const [showModal, setShowModal] = useState(false);
  
  // const reviews = useSelector(state=>state.reviews)
  
  // console.log("reviewformModal",spot)
  // console.log("reviews from useSelector",reviews)
//   useEffect(() => {
//     dispatch(getSpotBySpotId(spot.id));
//     dispatch(getSpotReviews(spot.id));
// }, [dispatch, spot.id]);

  // useEffect(()=> {
  //   setShowModal(false);
   
  // },[reviews]);

  return (
    <div >
      <button className="reviewbt" onClick={() => setShowModal(true)}>Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm spot={spot} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default ReviewFormModal;