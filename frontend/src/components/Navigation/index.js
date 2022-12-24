import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import LoginForm from '../LoginFormModal/LoginForm';
import './Navigation.css';
import DemoUser from '../DemoUser';
import SignupFormModal from '../SignupFormPage';
// import SignupFormPage from '../SignupFormPage/SignupFormPage';
import { Modal } from '../../context/Modal';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  let sessionLinks;
 
  //=======here
  // const [showMenu, setShowMenu] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };

  // useEffect(() => {
  //   if (!showMenu) return;

  //   const closeMenu = () => {
  //     setShowMenu(false);
  //   };

  //   document.addEventListener('click', closeMenu);

  //   var span = document.getElementsByClassName("close")[0];
  //   var modal = document.getElementById("loginfoBT");
  //   span.onclick = function () {
  //     setShowMenu(false);
  //   }
  //   window.onclick = function(event) {
  //     if (event.target !== modal) {
  //       document.addEventListener('click', closeMenu);
  //     }
  //   }
  //   return () => document.removeEventListener("click", closeMenu);
  // }, [showMenu]);

  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(sessionActions.logout());
  // };
  //================end
  // const signUp = () => {
  //   <NavLink id="signUp" to="/signup">Sign Up</NavLink>
  //   history.push('/signup')
  // }

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
          {/* <button id="signupBt" onClick={signUp}>Sign up</button> */}
        <SignupFormModal />
        </div>

      </div>

      // <div className="loginfoBt">

      //   <button className="userlogo header" onClick={openMenu} >
      //     <i className="fas fa-user-circle logocolor" />
      //   </button>

      //   <span className='close'>
      //     {showMenu && (
      //       <ul className="profile-dropdown">
      //         <li>
      //         <LoginFormModal   />
      //         </li>
      //         <li>
      //         <NavLink className="signup" to="/signup">Sign Up</NavLink>
      //         </li>
      //         <li>
      //           <button onClick={logout}>Log Out</button>
      //         </li>
      //       </ul>
      //    )}
      //   </span>
      // </div>
    );
  }

  return (
    <ul className='underline'>
      <li className='logolist'>
        <NavLink className="navlink" exact to="/" >
          {/* <img className="logo header" src="https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW"></img> */}
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