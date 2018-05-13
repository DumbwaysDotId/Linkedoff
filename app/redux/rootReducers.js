import { combineReducers } from 'redux'

import nav from './nav'
import profilesReducer from '../profiles/reducers'

const appReducer = combineReducers({
  nav,
  profilesReducer
})

export default appReducer
