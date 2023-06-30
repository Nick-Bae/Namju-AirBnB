import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.message) setErrors([data.message]);
      }
    );
  };

  const cancel = (e) => {
    setShowModal(false)
  }

  const demo = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential:'demo', password:'111111' })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.message) setErrors([data.message]);
      }
    );
  };

  return (
    <section>

      <form className="loginForm" onSubmit={handleSubmit}>
        <label id="loginlabel">
          Username or Email
          <input
            id="loginInputCredential"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label id="loginlabel">
          Password
          <input
            id="loginInputPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div id="loginButtons">
          <button className="loginBt" type="submit">Log In </button>
          <button className="demobt" onClick={demo}>Demo</button>
          <button className="loginCancelBt" type="submit" onClick={cancel}>Cancel</button>
        </div>
      </form>
      <div className="error">
        {errors.length > 0 && (
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        )}
      </div>
    </section>

  );
}

export default LoginForm;