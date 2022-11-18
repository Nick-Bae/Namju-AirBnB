import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentFormPage from './CommentFormPage.js';

function SideBarModal() {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false)
  
  const handleOpen = () => {
    const timer =  setTimeout(() => {
         setOpen(true);
     }, 9000)
      return () => clearTimeout(timer);
 }

  return (
    <div className='session'>
      <button className="signupBt" onClick={() => setShowModal(true)
      }>  comment  </button>
      <>&nbsp;</>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentFormPage setShowModal={setShowModal}/>
        </Modal>
       )} 
    </div>
  );
}

export default SideBarModal;