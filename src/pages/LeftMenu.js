import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/users'
import history from '../history'
import windowSize from '../components/widnowSize'

export default function LeftMenu() {
  windowSize()
  const authenticated = useSelector(state => state.user.authenticated)
  const landingPage = useSelector(state => state.appState.landingPage)
  const dispatch = useDispatch()

  const showAdminPanel = () => {

    if (authenticated === true) return (
      <div className='adminPanelTitle'>
        <div
          onClick={() => { history.push('/'); dispatch(logoutUser()); localStorage.removeItem("state") }}
          data-position="right center"
          data-tooltip="Logout">
          <h3><i className="power off icon" /></h3>
        </div>
        <div><h3>Admin Panel</h3></div>
      </div>)
  }

  if (landingPage === 'false') return (
    <div className='leftMenu'>
      <div className='menuTop'>
        <div className='menuGreenBar'>{showAdminPanel()}</div>
        <img className='menuLogo' src="/img/logo.svg" alt="Skotniki logo" />
      </div>
      <div className='menuBottomLeft'>
        <h3>Kontakt</h3>
          biuro@przyspacerowej.pl
          <br />
          tel. +48 509 192 091
          <br />
          tel. +48 606 472 241
          <br />
          tel. +48 12 628 08 00
          </div>
    </div>
  )
  return <div></div>
}
