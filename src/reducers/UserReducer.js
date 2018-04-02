import { UPDATE_USER, UPDATE_ROOMS, UPDATE_ROOM_DETAILS } from '../constants'
import { createReducer } from './index'

const initialState = {
  user: {
    id: null,
    displayName: null,
    mail: null

  },
  roomsList: [],
  roomDetails: {}
}

export default createReducer(initialState, {
  [UPDATE_USER]: (state, action) => {
    return {...state, user: {...state.user,  id: action.payload.id, displayName: action.payload.displayName, mail: action.payload.mail}}
  },
  [UPDATE_ROOMS]: (state, action) => {
    return {...state, roomsList: action.payload }
  },
  [UPDATE_ROOM_DETAILS]: (state, action) => {
    return {...state, roomDetails: action.payload }
  }
})
