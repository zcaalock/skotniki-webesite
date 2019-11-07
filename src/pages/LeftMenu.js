import React from 'react'
import { connect } from 'react-redux'

import { editState } from '../actions/appState'
import { logoutUser } from '../actions/users'
import history from '../history'

class LeftMenu extends React.Component {

  showAdminPanel() {
    
    if(this.props.user.authenticated === true) return (
    <div className='adminPanelTitle'>
      <div
          onClick={() => {history.push('/'); this.props.logoutUser(); localStorage.removeItem("state")}}
          data-position="right center"
          data-tooltip="Logout">
          <h3><i className="power off icon" /></h3>
        </div>
      <div><h3>Admin Panel</h3></div>
    </div>)
  }

  render() {
    return (
      <div className='leftMenu'>
        <div className='menuTop'>
          <div className='menuGreenBar'>{this.showAdminPanel()}</div>
          <img className='menuLogo' src="/img/logo.svg" alt="Skotniki logo" />
        </div>
        <div className='menuBottomLeft'>
          <h3>Kontakt</h3>
          biuro@przyspacerowej.pl
          <br/>          
          tel. +48 509 192 091
          <br/>
          tel. +48 12 628 08 00
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState,
    user: state.user
  }
}

export default connect(mapStateToProps, { editState, logoutUser })(LeftMenu)