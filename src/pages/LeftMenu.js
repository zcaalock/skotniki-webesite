import React from 'react'

class LeftMenu extends React.Component {
  render() {
    return (
      <div className='leftMenu'>
        <div className='menuTop'>
          <div className='menuGreenBar'></div>
          <img className='menuLogo' src="/img/logo.svg" alt="Skotniki logo" />
        </div>
        <div className='menuBottomLeft'>
          <h3>Kontakt</h3>
          biuro@przyspacerowej.pl
          <br/>          
          tel. +48 883 986 666
          <br/>
          tel. +48 12 628 08 00
          </div>
      </div>
    )
  }
}

export default LeftMenu