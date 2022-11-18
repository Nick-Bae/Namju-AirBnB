import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './CommentFormPage.css';

function CommentFormPage({setShowModal}) {
  const dispatch = useDispatch();
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
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <h2 id="signUpTitle">Responses</h2>
      <form onSubmit={handleSubmit} className='signform'>
          <div>
        <ul id="signupError">
          {(Object.values(errors)).map((error, idx) => <li id="signupErrorMessage"key={idx}>{error}</li>)}
        </ul>
       </div>
        <label id="signupEmail">
            
            <input
              id="signUpEmailInput"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        </label>

      

        <div id="button">
          <button type="submit" className="signbt">cancel</button>&nbsp;
          <button id="signupCancel" onClick={() => setShowModal(false)}>Respond</button>
        </div>
      </form>
    </>
  );
}

export default CommentFormPage;