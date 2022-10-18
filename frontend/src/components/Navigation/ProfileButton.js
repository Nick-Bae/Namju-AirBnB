import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import CreateSpot from "../CreateSpot";
import { Link, NavLink } from 'react-router-dom';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [loginInfo, setLoginInfo] = useState(false);
  const [login, setLogin] = useState(false)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
useEffect(()=>{

  if (!user) {
    setLogin(true)
  } else {
    setLoginInfo(true)
  }
},[user])

  // (!user) ? setShowMenu(true) : setShowMenu(false);
  //  user ? setLoginInfo(true) : setLoginInfo(false);

  return (
    <div id="log" className="loginfoBT">
      <button className="userlogo header" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div><LoginFormModal /></div>
          <div><SignupFormModal /></div>
          <button className="logOut" onClick={logout}>Log Out</button>
        </div>
      )}
      
      {loginInfo && (
          <ul className="profile-dropdown">
            <li id="loginfo">{user?.username}</li>
            <li id="loginfo">{user?.email}</li>
            <li id="loginfo">
              <button className="logOut" onClick={logout}>Log Out</button>
            </li>
          </ul>
        )
      }
    </div >
  );
}

export default ProfileButton;