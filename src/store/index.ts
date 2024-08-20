import {createStore as createReduxStore, applyMiddleware} from 'redux'

import {createLogger} from 'redux-logger'

import createRootReducer from 'reducers'

interface RootState {
  eventNote: string,
  eventType: string,
  notification: string
}

const defaultState: RootState = {
  eventNote: '',
  eventType: '',
  notification: '',
};

function createStore(initialState: any) {
  const middlewares = process.env.NODE_ENV === 'development'
    ? [createLogger({collapsed: true, duration: true})]
    : []

  return createReduxStore(
    createRootReducer(),
    initialState,
    applyMiddleware(...middlewares)
  )
}

export const store = createStore(defaultState)
