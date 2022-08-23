import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Spots from './components/Spots'
import Spotdetail from "./components/Spotdetail";
import SpotList from "./components/Spots";
import EditSpotForm from "./components/EditSpotForm";
import CreateSpot from "./components/CreateSpot";
import CreateSpotForm from './components/CreateSpotForm'
import Test from "./components/Test";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SpotList />
          </Route>
          <Route exact path= "/spots/new" >
            <CreateSpot />
            {/* <CreateSpotForm /> */}
          </Route>
          <Route exact path='/spots/:id'>
            <Spotdetail />
          </Route>
          <Route path= "/spots/:id/edit" >
            <EditSpotForm />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
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