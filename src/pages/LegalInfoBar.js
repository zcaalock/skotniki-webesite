import React from 'react'
import { useSelector } from "react-redux"

function LegalInfoBar () {

  const appState = useSelector(state => state.appState) 
  
    if(appState.landingPage === 'false') return (
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

export default LegalInfoBar