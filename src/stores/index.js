import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import getRootReducer from "../reducers";
import logger from 'redux-logger';

export default function getStore(appReducer, middleware) {    
    const store = createStore(
        appReducer,
        applyMiddleware(thunk, logger)
    );

    return store;
}
