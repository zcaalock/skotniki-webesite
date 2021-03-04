import React from 'react'
import { useSelector } from "react-redux"

function MobileBottomBar() {

  const appState = useSelector(state => state.appState)

  function uiCheck() {
    if (appState.ui === 'show' && appState.width < 904 && appState.height > 570 && appState.landingPage === 'false') return (
      <div className='mobileBottomBar' style={{ display: 'flex', position: 'absolute', bottom: '0' }}>
        <div style={{ width: '36%', padding: '10px', backgroundColor: '#efefef' }}>
          <img className='menuLogo' src="/img/logo.png" alt="Skotniki logo" />
        </div>
        <div style={{ backgroundColor: 'rgba(81, 122, 66, 0.79)', padding: '10px', width: '64%' }}>
          <strong>Kontakt</strong><br />
          biuro@przyspacerowej.pl<br />
          tel. +48 509 192 091<br />
          tel. +48 12 628 08 00
          </div>
      </div>
    )
    return <div style={{ display: 'none' }}></div>
  }

  return (
    <div>{uiCheck()}</div>
  )
}

export default MobileBottomBar