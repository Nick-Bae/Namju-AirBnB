// import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import SignupFormPage from './SignupFormPage';

// function SignupFormModal() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className='session'>
//       <button className="beforelogbt" onClick={() => setShowModal(true)}>Sign up</button>
//       {showModal && (
//         <Modal onClose={() => setShowModal(false)}>
//           <SignupFormPage />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default SignupFormModal;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupFormPage.css';

function SignupFormPage({setShowModal}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ username, firstName, lastName, email, password }))
        // return dispatch(sessionActions.signup({ username,  email, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };
  
  return (
    <>
      <h2 id="signUpTitle">Sign up</h2>
      <form onSubmit={handleSubmit} className='signform'>
        {errors.length > 0 && (
        <ul id="signupError">
          <li id="signupErrorTitle">Error Message:</li>
          {(Object.values(errors)).map((error, idx) => <li id="signupErrorMessage"key={idx}>{error}</li>)}
        </ul>
        )}

        <label id="signupEmail">
            Email
            <input
              id="signUpEmailInput"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        </label>

        <label id="signupUsername">
            User name
            <input
              id="signUpUserInput"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
        </label>

        <label id="signupFirstName">
            First Name
            <input
              id="signUpFirstNameInput"
              type="text"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
        </label>

        <label id="signupLastName">
            Last Name
            <input
              id="signUpLastNameInput"
              type="text"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
        </label>

        <label id="signupPassword">
            Password
            <input
              id="singUpPasswordInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        </label>

        <label id="signupConfirmname">
            Confirm Password
            <input
              id="signUpConfirmInput"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
        </label>

        <div id="button">
          <button type="submit" className="signbt">Sign Up</button>&nbsp;
          <button id="cancel" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </form>
    </>
  );
}

export default SignupFormPage;