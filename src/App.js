import React from 'react';
import { Router, Route } from 'react-router-dom'
import axios from 'axios'

import history from './history'

import { Provider } from 'react-redux'
import store from './reducers/index'

import LeftMenu from './pages/LeftMenu'
import PageTitle from './components/PageTitle'
import MenuItem01 from './pages/MenuItem01'
import LandingPage from './pages/LandingPage'
import MenuItem02 from './pages/MenuItem02'
import MenuItem03 from './pages/MenuItem03'
import BottomMenu from './pages/BottomMenu'
import MenuItem04 from './pages/MenuItem04'
import MenuItem05 from './pages/MenuItem05'
import MenuItem06 from './pages/MenuItem06'
import LegalInfoBar from './pages/LegalInfoBar'

import MobileMenu from './pages/mobile/MobileMenu'
import MobileBottomBar from './pages/mobile/MobileBottomBar'


//AIzaSyB6sPvWL4Rj_oXN9EUma7bY6nPveHKdBMk
axios.defaults.baseURL = 'http://przyspacerowej.pl'

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
                <Route exact path="/LandingPage" component={LandingPage} />
                <Route exact path="/MenuItem01" component={MenuItem01} />
                <Route exact path="/MenuItem02" component={MenuItem02} />
                <Route exact path="/MenuItem03" component={MenuItem03} />
                <Route exact path="/MenuItem04" component={MenuItem04} />
                <Route exact path="/MenuItem05" component={MenuItem05} />
                <Route exact path="/MenuItem06" component={MenuItem06} />
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
