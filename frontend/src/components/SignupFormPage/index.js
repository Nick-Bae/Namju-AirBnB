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

function SignupFormPage() {
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
  console.log(errors)
  return (
    <>
      <h2 id="signUpTitle">Sign up</h2>
      <form onSubmit={handleSubmit} className='signform'>
        <ul>
          {(Object.values(errors)).map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

        <div id="signupInside">
          <label className="email">
            Email
            <input
              id="signUpInput"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div id="signupInside">
          <label className="username">
            User name
            <input
            id="signUpInput"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>

        <div id="signupInside">
        <label className="firstname">
          First Name
          <input
          id="signUpInput"
            type="text"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </label>
        </div>
        <div id="signupInside">

        <label className="lastname">
          Last Name
          <input
          id="signUpInput"
            type="text"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        </div>

        <div id="signupInside">

        <label className="password">
          Password
          <input
           id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        </div>
        <div id="signupInside">

        <label className="confirmname">
          Confirm Password
          <input
          id="signUpInput"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        </div>

        <div id="button">
          <button type="submit" className="signbt">Sign Up</button>&nbsp;
          <button id="cancel" onClick={() => { history.push('/') }}>Cancel</button>
        </div>
      </form>
    </>
  );
}

export default SignupFormPage;