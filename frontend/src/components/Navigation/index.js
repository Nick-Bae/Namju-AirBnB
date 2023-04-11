import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import LoginForm from '../LoginFormModal/LoginForm';
import './Navigation.css';
import SignupFormModal from '../SignupFormPage';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks;

    if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div id="topMenu">
        <div>
          {/* <DemoUser /> */}
        </div>
        <div>
          <LoginFormModal />
        </div>

        <div>
        <SignupFormModal />
        </div>

      </div>
    );
  }

  return (
    <ul className='underline'>
      <li className='logolist'>
        <NavLink className="navlink" exact to="/" >
          <img className="logoMain" src="../../../images/logo.png"></img>
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
      {/* <li>
      <button className="userlogo header" >
        <i className="fas fa-user-circle logocolor" />
      </button>
      </li> */}
    </ul>
  );
}

export default Navigation;