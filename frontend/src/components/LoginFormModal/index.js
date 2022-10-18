import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='session'>
      <button className="beforelogbt" onClick={() => setShowModal(true)
      }>  Log   In  </button>
      {console.log("login modal",showModal)}
      <>&nbsp;</>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>

          <LoginForm setShowModal={setShowModal}/>
        </Modal>
       )} 
    </div>
  );
}

export default LoginFormModal;