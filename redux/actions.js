import {light} from '../api'
import {fetchHue} from '../api'

// action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const LIGHT_SENT = 'LIGHT_SENT'
export const LIGHT_FULFILLED = 'LIGHT_FULFILLED'
export const LIGHT_REJECTED = 'LIGHT_REJECTED'

// action creators


// async action creator
export const lightRoom = (state = true, sat = 254, bri = 254, hue = 10000) => async dispatch => {
  dispatch({type: LIGHT_SENT})
  try {
    const response = await light(state, sat, bri, hue)
    dispatch({type: LIGHT_FULFILLED, payload: response})
  } catch (err) {
    dispatch({type: LIGHT_REJECTED, payload: err.message})
  }
}

// export const fetchIpHue = () => async dispatch => {
//   dispatch({type: LIGHT_SENT})
//   try {
//     const response = await fetchHue(state, sat, bri, hue)
//     dispatch({type: LIGHT_FULFILLED, payload: response})
//   } catch (err) {
//     dispatch({type: LIGHT_REJECTED, payload: err.message})
//   }
// }
