import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { editState } from '../actions/appState'

function W19() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(editState('true', 'landingPage'))
  }, [])

  return (
    <>
      <div className='w19-backgroundBox'></div>
      <a className='w19-back' href='/MenuItem05' alt="powrót">powrót</a>
      <div className='w19-topSpace'>
        <div className='w19-border'>
          <div className='w19-item'>
            <div className='w19-item-title'>
              <div className='w19-item-box'><h1>Wawrzyńca 19</h1></div>
            </div>
            <img className='w19-item-img' src='img/w19-01.jpg' alt='w19' />
            <div className='w19-item-description right'>
              <div className='w19-item-description-box'>
                W latach 2015 - 2017 zabudowania dawnej Elektrownia Miejskiej przy ul. Św. Wawrzyńca 19 zostały poddane przebudowie i zmianie sposobu użytkowania na kompleks apartamentów z wydzieloną częścią usługową.
              </div>
            </div>
          </div>
        </div>

        <div className='w19-border'>
          <div className='w19-item'>
            <img className='w19-item-img' src='img/w19-02.jpg' alt='w19' />
            <div className='w19-item-description left'>
              <div className='w19-item-description-box'>
                Założeniem inwestora było stworzenie w zabytkowej, postindustrialnej przestrzeni budynku mieszkalnego o wysokim standardzie i unikalnym charakterze. Przebudowa objęła rekonstrukcję zabytkowej zabudowy, przywracając i eksponując pierwotny wygląd elewacji hal dawnej elektrowni autorstwa Jana Rzymkowskiego.
              </div>
            </div>
          </div>
        </div>

        <div className='border'>
          <div className='w19-item'>
            <img className='w19-item-img' src='img/w19-03.jpg' alt='w19' />
            <div className='w19-item-description right'>
              <div className='w19-item-description-box'>
                Adaptacja niepowtarzalnych, poprzemysłowych przestrzeni, wykorzystanie elementów metalowych konstrukcji, sklepień czy nietypowych okien, pozwoliła architektom na zastosowanie oryginalnych rozwiązań i stworzenie budynku o wyjątkowym klimacie, łączącym industrialną estetykę z funkcjonalnością.
              </div>
            </div>
          </div>
        </div>

        <div className='w19-border'>
          <div className='w19-item'>
            <img className='w19-item-img' src='img/w19-04.jpg' alt='w19' />
            <div className='w19-item-description left'>
              <div className='w19-item-description-box'>
                Prace budowlane prowadzono w taki sposób, aby zachować jak najwięcej zabytkowej substancji i oryginalnych elementów w celu ochrony dziedzictwa kulturowego. Przeprowadzano konserwację między innymi ceglanej fasady hali kotłowni z 1914 roku i stalowej konstrukcji wsporczej silosu na węgiel, która została wykorzystana do podparcia szklanego zadaszenia na dziedzińcu.

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}


export default W19