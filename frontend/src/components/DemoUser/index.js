import React from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import './demoUser.css'

export default function DemoUser() {
  const dispatch = useDispatch();

  const demo = (e) => {
    e.preventDefault();
    const credential = "demo";
    const password = "111111";
    return dispatch(sessionActions.login({ credential, password }));
  };

  return (
    <form onSubmit={demo} >
      <button id="demoBt" type="submit">Demo </button>
    </form>
  );
}
