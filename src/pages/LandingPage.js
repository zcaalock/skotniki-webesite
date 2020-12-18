import React from 'react'
import { connect } from 'react-redux'
import { editState } from '../actions/appState'


class LandingPage extends React.Component {

  componentDidMount() {
    this.props.editState('true', 'menuHide')
    this.props.editState('', 'secondaryTitle')
    this.props.editState('', 'activeItem')
  }
  

  render() {
    
    return (
      <div className='pageContent'>        
        <img style={{padding: '0', width: '100%', height: 'auto'}} className='imageAutoHeight' src="/img/v19a (Duży).jpg" alt="Skotniki2" />
        <div className='landingText'><div style={{marginTop: '40px'}}>Prace serwisowe - aby uzyskać informacje dotyczące domów na sprzedaż zadzwoń: +48 509 192 091</div></div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(LandingPage)