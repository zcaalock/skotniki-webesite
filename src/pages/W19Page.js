import React from 'react'
import { connect } from 'react-redux'
import { editState } from '../actions/appState'


class W19 extends React.Component {

  componentDidMount() {
    this.props.editState('true', 'landingPage')
  }

  render() {
    return (
      <>
        <div className='backgroundBox'></div>
        <div className='topSpace'>
          <div className='border'>
            <div className='item'>
              <div className='item-title'>
                <div className='item-box'><h1>Wawrzyńca 19</h1></div>
              </div>
              <img className='item-img' src='img/w19-01.jpg' />
              <div className='item-description right'>
                <div className='item-description-box'>
                W latach 2015 - 2017 zabudowania dawnej Elektrownia Miejskiej przy ul. Św. Wawrzyńca 19 zostały poddane przebudowie i zmianie sposobu użytkowania na kompleks apartamentów z wydzieloną częścią usługową. 
              </div>
              </div>
            </div>
          </div>

          <div className='border'>
            <div className='item'>
              <img className='item-img' src='img/w19-02.jpg' />
              <div className='item-description left'>
                <div className='item-description-box'>
                Założeniem inwestora było stworzenie w zabytkowej, postindustrialnej przestrzeni budynku mieszkalnego o wysokim standardzie i unikalnym charakterze. Przebudowa objęła rekonstrukcję zabytkowej zabudowy, przywracając i eksponując pierwotny wygląd elewacji hal dawnej elektrowni autorstwa Jana Rzymkowskiego.
              </div>
              </div>
            </div>
          </div>

          <div className='border'>
            <div className='item'>
              <img className='item-img' src='img/w19-03.jpg' />
              <div className='item-description right'>
                <div className='item-description-box'>
                Adaptacja niepowtarzalnych, poprzemysłowych przestrzeni, wykorzystanie elementów metalowych konstrukcji, sklepień czy nietypowych okien, pozwoliła architektom na zastosowanie oryginalnych rozwiązań i stworzenie budynku o wyjątkowym klimacie, łączącym industrialną estetykę z funkcjonalnością.
              </div>
              </div>
            </div>
          </div>

          <div className='border'>
            <div className='item'>
              <img className='item-img' src='img/w19-04.jpg' />
              <div className='item-description left'>
                <div className='item-description-box'>
                Prace budowlane prowadzono w taki sposób, aby zachować jak najwięcej zabytkowej substancji i oryginalnych elementów w celu ochrony dziedzictwa kulturowego. Przeprowadzano konserwację między innymi ceglanej fasady hali kotłowni z 1914 roku i stalowej konstrukcji wsporczej silosu na węgiel, która została wykorzystana do podparcia szklanego zadaszenia na dziedzińcu. 

              </div>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(W19)