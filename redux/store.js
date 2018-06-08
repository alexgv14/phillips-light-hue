import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import {addContact} from './actions'
import reducer from './reducer'

export const store = createStore(reducer, applyMiddleware(thunk))
