import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // useEffect(()=>{
  //   const errors=[];
  //   if (credential !== password ) errors.push('Please enter valid credential info');

  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (errors.length) return alert(`Cannot Submit`);
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.message) setErrors([data.message]);
      }
    );
  };

  return (
    <section>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="logbt" type="submit">Log In</button>
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