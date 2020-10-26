import React from 'react'
import { connect } from 'react-redux'
import { editState } from '../actions/appState'

class LegalInfoBar extends React.Component {
  render() {
    if(this.props.appState.landingPage === 'false') return (
      <div className='legalInfo'>
        <div >
          Informujemy, że wszystkie informacje zawarte na stronie internetowej nie stanowią oferty w rozumieniu przepisów Kodeksu Cywilnego i mają wyłącznie cel informacyjny.
        </div>
        <div >
            Created by: <a href='https://alek-aleksandrowicz.pl/' target="_blank" rel="noopener noreferrer" alt="wawrzynca19">ALSD </a>
           Copyright © 2019 - przyspacerowej.pl
        </div>
      </div>
    ) 
    return <div style={{display: 'none'}}></div>
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState    
  }
}

export default connect(mapStateToProps, { editState})(LegalInfoBar)