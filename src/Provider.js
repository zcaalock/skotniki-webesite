import React from 'react';
import axios from 'axios'

import App from './App'

import { Provider } from 'react-redux'
import store from './reducers/index'

import jwtDecode from 'jwt-decode';
import { SET_AUTHENTICATED } from './actions/types'
import { logoutUser, getUserData } from './actions/users'

axios.defaults.baseURL = 'https://europe-west2-przyspacerowej.cloudfunctions.net/api/'

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/admin';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
};

function Prov() {  
  return (
    <div className="AppContainer">
      <Provider store={store}>
        <App/>
      </Provider>
    </div>
  );
}

export default Prov;
