import React from 'react'

class MobileBottomBar extends React.Component {
  render() {
    return (
      <div className='mobileBottomBar' style={{display: 'flex', position: 'absolute', bottom: '0'}}>
        <div style={{width: '36%', padding: '10px', backgroundColor: '#efefef'}}>
          <img className='menuLogo' src="/img/logo.png" alt="Skotniki logo" />
        </div>
        <div style={{backgroundColor: '#517A42', padding: '10px', width: '64%'}}>
          <strong>Kontakt</strong><br/> 
          biuro@przyspacerowej.pl<br/>          
          tel. +48 883 986 666<br/>
          tel. +48 12 628 08 00
          </div>
      </div>
    )
  }
}

export default MobileBottomBar