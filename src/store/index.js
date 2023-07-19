import { createStore, combineReducers, applyMiddleware } from "redux";
import { weatherReducer } from "./weather/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  weatherReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
