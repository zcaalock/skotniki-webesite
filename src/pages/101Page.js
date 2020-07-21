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
        <a className='back' href='/MenuItem05' alt="powrót">powrót</a> 
        <div className='topSpace'>
          <div className='border'>
            <div className='item'>
              <div className='item-title'>
                <div className='item-box'><h1>Spacerowa 101</h1></div>
              </div>
              <img className='item-img' src='img/101/dron.jpg' alt='s101' />
              <div className='item-description right'>
                <div className='item-description-box'>
              Inwestycja zrealizowana przez Dewelopera w 2018 na nieruchomości zlokalizowanej w Krakowie przy ulicy Spacerowej 101, polegająca na budowie zespołu 12 domów jednorodzinnych w zabudowie bliźniaczej. 
              </div>
              </div>
            </div>
          </div>

          <div className='border'>
            <div className='item'>
              <img className='item-img' src='img/101/01.jpg' alt='w19' />
              <div className='item-description left'>
                <div className='item-description-box'>
               Powierzchnia użytowa domu wynosi od 105 do 109 m2
              </div>
              </div>
            </div>
          </div>

          <div className='border'>
            <div className='item'>
              <img className='item-img' src='img/101/02.jpg' alt='w19' />
              <div className='item-description right'>
                <div className='item-description-box'>
                Na parterze znajduje się pokój dzienny z aneksem kuchennym i wyjściem na ogród, toaleta, pomieszczenie gospodarcze oraz garaż. Na I piętrze znajdują 3 sypialnie oraz łazienka. Kondygnacja I piętra jest pełnej wysokości, 
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