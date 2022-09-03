import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='session'>
      <button className="beforelogbt" onClick={() => setShowModal(true)
      }>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
       )} 
    </div>
  );
}

export default LoginFormModal;