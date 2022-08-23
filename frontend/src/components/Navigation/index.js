import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { spotReducer } from '../../store/spot';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);
    // const spots = useSelector(state => state.spot);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div id="log">
        <NavLink to="/login" className="nav login">Log In</NavLink>
        <NavLink to="/signup" className='nav signup'>Sign Up</NavLink>
      </div>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/" className='nav home'>Home</NavLink>
        {/* <NavLink exact to="/" className='nav home'>{spots}</NavLink> */}
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;