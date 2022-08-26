import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="signup" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className='underline'>
      <li className='logolist'>
        <NavLink className="navlink" exact to="/" >
          <img className="logo header" src="https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW"></img>
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;