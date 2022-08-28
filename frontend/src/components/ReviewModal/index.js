import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from '../Review';

function ReviewFormModal({spot}) {
  const [showModal, setShowModal] = useState(false);
  console.log(spot)
  return (
    <div className='review'>
      <button className="reviewbt" onClick={() => setShowModal(true)}>Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm spot={spot}/>
        </Modal>
      )}
    </div>
  );
}

export default ReviewFormModal;