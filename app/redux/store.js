
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { createStore, applyMiddleware } from 'redux'

import reducers from './rootReducers'

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)

const store = createStore(
  reducers,
  applyMiddleware(middleware),
);

export default store
