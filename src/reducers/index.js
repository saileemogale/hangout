import { combineReducers } from "redux";
import UserReducer from './UserReducer'

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        UserReducer
    });
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
