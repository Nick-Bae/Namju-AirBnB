import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink, useHistory } from 'react-router-dom';
// import SpotByUser from "../Spots/SpotByUser";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

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
    history.push('/');
    dispatch(sessionActions.logout());
    history.push('/');
  };

  const login = (!user) ? false : true

  return (
    <div id="log" className="loginfoBT">
      <div id="navIcons">
        {/* {(login) && ( */}
         
          <div className="addnewspot">
            <NavLink to={`/spots/new`} className="spotnew">
              <i className="fa-solid fa-circle-plus"></i>
            </NavLink>
            <NavLink to={`/spots/new`} className="newSpot">Become a Host</NavLink>
          </div>
        
        <button className="userlogo header" onClick={openMenu}>
          <i className="fas fa-user-circle" />
        </button>
      </div>
      
      {showMenu && (
        <ul className="profile-dropdown">
          <li id="userNameInfo">{user.username}</li>
          <li id="emailInfo">{user.email}</li>
          <NavLink id="myplaces" to='/spots/current'>My Places</NavLink> 
          <NavLink id="myBookings" to='/bookings/current'>My Bookings</NavLink> 
          {/* <li id="myplaces">My Places</li> */}
          <li id="logoutInfo">
            <button className="logOut" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;