import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'


import pagesReducers from './pagesReducers'
import appStateReducers from './appStateReducers'
import reservationReducers from './reservationReducers'
import settingReducers from './settingReducers'
import uiReducers from './uiReducers';
import usersReducers from './usersReducers'


const initialState ={}
const middleware = [thunk]


const reducers = combineReducers({
  pages: pagesReducers,
  reservations: reservationReducers,
  appState: appStateReducers,
  UI: uiReducers,
  user: usersReducers,
  settings: settingReducers
})



const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

    
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(
  reducers, 
  initialState, 
  enhancer);



export default store;