import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
// import CommentFormPage from '../sidebar/CommentFormPage';
import SignupFormPage from './SignupFormPage';

function SignupModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='session'>
      <button className="signupBt" onClick={() => setShowModal(true)
      }>  Sign up  </button>
      <>&nbsp;</>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupFormPage setShowModal={setShowModal}/>
        </Modal>
       )} 
    </div>
  );
}

export default SignupModal;