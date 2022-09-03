import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch,NavLink } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Spots from './components/Spots'
import Spotdetail from "./components/Spotdetail";
import SpotList from "./components/Spots";
import EditSpotForm from "./components/EditSpotForm";
import CreateSpot from "./components/CreateSpot";
import AddImage from './components/AddImage'
import LoginFormModal from "./components/LoginFormModal";
import LoginForm from "./components/LoginFormModal/LoginForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    <div>
      <Navigation isLoaded={isLoaded} />
    </div>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SpotList />
          </Route>
          <Route exact path= "/spots/new" >
            <CreateSpot />
            {/* <CreateSpotForm /> */}
          </Route>

          {/* <Route path='/:spot.id/'>
            <AddImage />
          </Route> */}

          <Route exact path='/spots/:id'>
            <Spotdetail />
          </Route>
          <Route exact path='/spots/:id/images'>
            <AddImage />
          </Route>

          <Route path= "/spots/:id/edit" >
            <EditSpotForm />
          </Route>
          {/* <Route path="/login">
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route paht="/spots">
            <Spots />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;