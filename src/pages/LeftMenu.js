import React from 'react'

class LeftMenu extends React.Component {
  render() {
    return (
      <div className='leftMenu'>
        <div className='menuTop'>
          <div className='menuGreenBar'></div>
          <img className='menuLogo' src="/img/logo.png" alt="Skotniki logo" />
        </div>
        <div className='menuBottomLeft'>
          <h3>kontakt</h3>
          biuro@przyspacerowej.pl
          <br/>
          Tomasz +48 510 179 411
          <br/>
          Łukasz +48 509 192 091
          <br/>
          tel. +48 12 628 08 00

          </div>
      </div>
    )
  }
}

export default LeftMenu