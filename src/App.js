import React from 'react';
import axios from 'axios'
import LeftMenu from './pages/LeftMenu'
import Home from './pages/Home'
import Localisation from './pages/Localisation'
import Typ1 from './pages/Typ1'
import BottomMenu from './pages/BottomMenu'
import Reservations from './pages/Reservations'

//AIzaSyB6sPvWL4Rj_oXN9EUma7bY6nPveHKdBMk
// axios.defaults.baseURL = 'http://przyspacerowej.pl'

class App extends React.Component {
  state = { activeItem: 'galeria' }

  renderPages() {
    if(this.state.activeItem === 'galeria') return <Home />
    if(this.state.activeItem === 'informacje') return <Localisation />
    if(this.state.activeItem === 'plany domów') return <Typ1 />
    if(this.state.activeItem === 'rezerwacje') return <Reservations />
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    return (
      <div className="AppContainer">
        <LeftMenu />
        <div className='contentContainer'>
          {this.renderPages()}
          <BottomMenu handleItemClick={this.handleItemClick} state={this.state} />
        </div>
        <div className='rightBar'>
          <div style={{height: '50px', backgroundColor: 'rgb(208, 209, 211)'}}></div>
        </div>
      </div>
    );
  }
}

export default App;
