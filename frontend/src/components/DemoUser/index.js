import React, {useState} from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import './demoUser.css'

export default function DemoUser() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

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
    <form onSubmit={demo} >
      <button id="demoBt" type="submit">Demo </button>
    </form>
  );
}
