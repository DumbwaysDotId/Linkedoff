import { combineReducers } from 'redux'

import nav from './nav'
import contactsReducer from '../contacts/reducers'

const appReducer = combineReducers({
  nav,
  contactsReducer
})

export default appReducer
