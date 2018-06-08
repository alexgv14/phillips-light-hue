import {combineReducers} from 'redux'

import {
  LIGHT_SENT, 
  LIGHT_FULFILLED, 
  LIGHT_REJECTED
} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const lightReducer = (state = {}, action) => {
  switch (action.type) {
    case LIGHT_FULFILLED:
      return merge(state, {lightValues: action.payload})
    case LIGHT_REJECTED:
      return merge(state, {lightErr: action.payload})
    default:
      return state
  }
}

const reducer = combineReducers({
  light: lightReducer,
})

export default reducer
