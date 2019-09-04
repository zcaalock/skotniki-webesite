import React from 'react'

class LegalInfoBar extends React.Component {
  render() {
    return (
      <div className='legalInfo'>
        <div >
          Informujemy, że wszystkie informacje zawarte na stronie internetowej nie stanowią oferty w rozumieniu przepisów Kodeksu Cywilnego i mają wyłącznie cel informacyjny.
        </div>
        <div >
           Created by: <a href='https://aleksandrowicz.herokuapp.com/' target="_blank" rel="noopener noreferrer" alt="wawrzynca19">ALSD </a>
           Copyright © 2019 - przyspacerowej.pl
        </div>
      </div>
    )
  }
}

export default LegalInfoBar