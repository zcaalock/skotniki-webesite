import React from 'react';
import { Router, Route } from 'react-router-dom'
import axios from 'axios'

import history from './history'

import { Provider } from 'react-redux'
import store from './reducers/index'

import LeftMenu from './pages/LeftMenu'
import PageTitle from './components/PageTitle'
import BottomMenu from './pages/BottomMenu'

import MenuItem01 from './pages/MenuItem01'
import MenuItem02 from './pages/MenuItem02'
import MenuItem03 from './pages/MenuItem03'
import MenuItem04 from './pages/MenuItem04'
import MenuItem05 from './pages/MenuItem05'
import MenuItem06 from './pages/MenuItem06'
import MenuItem07 from './pages/MenuItem07'
import W19 from './pages/W19Page'
import S101 from './pages/101Page'

import LegalInfoBar from './pages/LegalInfoBar'
import Login from './forms/Login'

import MobileMenu from './pages/mobile/MobileMenu'
import MobileBottomBar from './pages/mobile/MobileBottomBar'


import jwtDecode from 'jwt-decode';
import { SET_AUTHENTICATED } from './actions/types'
import { logoutUser, getUserData } from './actions/users'


//AIzaSyB6sPvWL4Rj_oXN9EUma7bY6nPveHKdBMk
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

class App extends React.Component {
  


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    return (
      <div className="AppContainer">
        <Provider store={store}>
          <LeftMenu />
          <div className='contentContainer'>
            <Router history={history}>
            <MobileMenu />
              <PageTitle/>
              <Route>
                <Route exact path="/" component={MenuItem01} />                
                <Route exact path="/MenuItem01" component={MenuItem01} />
                <Route exact path="/MenuItem02" component={MenuItem02} />
                <Route exact path="/MenuItem03" component={MenuItem03} />
                <Route exact path="/MenuItem04" component={MenuItem04} />
                <Route exact path="/MenuItem05" component={MenuItem05} />
                <Route exact path="/MenuItem06" component={MenuItem06} />
                <Route exact path="/MenuItem07" component={MenuItem07} />
                <Route exact path="/admin" component={Login} />
                <Route exact path="/w19" component={W19} />
                <Route exact path="/s101" component={S101} />
              </Route>
              <BottomMenu />
            <MobileBottomBar />
            <LegalInfoBar />  
            </Router>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
