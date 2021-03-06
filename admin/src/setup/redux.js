// modules
import { createStore, combineReducers, compose } from 'redux'
// reducers
import app from '../App/main/app.reducer'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'jalas-admin' })
    : compose
/* eslint-enable */

const store = createStore(combineReducers({ app }), composeEnhancers())

export default store
export const { dispatch, getState } = store
