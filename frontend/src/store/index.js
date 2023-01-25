import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reviewReducer } from "./comment";
import imageReducer from "./image";
import likeStoryReducer from "./likeStory";
import sessionReducer from './session';
import { spotReducer } from "./spot";
import bookingReducer from "./booking";

const rootReducer = combineReducers({
  session: sessionReducer,
  spot: spotReducer,
  review: reviewReducer,
  image: imageReducer,
  booking: bookingReducer
  // likeStory: likeStoryReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
