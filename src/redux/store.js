import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/allReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	allReducers,
	composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
