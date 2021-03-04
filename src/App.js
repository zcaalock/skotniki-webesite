import React, { useEffect } from 'react';
import { Router, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { fetchSettings } from './actions/settings'

import history from './history'

import LandingPage from './pages/LandingPage'
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
import MenuItem08 from './pages/MenuItem08'
import W19 from './pages/W19Page'
import S101 from './pages/101Page'

import LegalInfoBar from './pages/LegalInfoBar'
import Login from './forms/Login'

import MobileMenu from './pages/mobile/MobileMenu'
import MobileBottomBar from './pages/mobile/MobileBottomBar'

function App() {

  const settings = useSelector(state => state.settings[0])
  const authenticated = useSelector(state => state.user.authenticated)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSettings())
  }, [])

  function renderService() {
    if (settings && settings.service === true && authenticated === false && history.location.pathname !== '/admin') return <LandingPage />
    return null
  }


  return (
    <>
      <LeftMenu />
      <div className='contentContainer'>
        <Router history={history}>
          {renderService()}
          <MobileMenu />
          <PageTitle />
          <Route>
            <Route exact path="/" component={MenuItem01} />
            <Route exact path="/MenuItem01" component={MenuItem01} />
            <Route exact path="/MenuItem02" component={MenuItem02} />
            <Route exact path="/MenuItem03" component={MenuItem03} />
            <Route exact path="/MenuItem04" component={MenuItem04} />
            <Route exact path="/MenuItem05" component={MenuItem05} />
            <Route exact path="/MenuItem06" component={MenuItem06} />
            <Route exact path="/MenuItem07" component={MenuItem07} />
            <Route exact path="/MenuItem08" component={MenuItem08} />
            <Route exact path="/admin" component={Login} />
            <Route exact path="/w19" component={W19} />
            <Route exact path="/s101" component={S101} />
          </Route>
          <BottomMenu />
          <MobileBottomBar />
          <LegalInfoBar />
        </Router>
      </div>
    </>
  );
}

export default App;
