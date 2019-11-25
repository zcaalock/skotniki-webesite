import React from 'react'
import { connect } from 'react-redux'
import { editState } from '../actions/appState'

import TextSpring from '../components/TextSpring'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"



class MenuItem01 extends React.Component {

  state = { 'item0': 'hide', 'item1': 'hide', 'item2': 'hide', 'item3': 'hide', 'item4': 'hide', 'item5': 'hide', hover: 'false' }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ 'item0': 'show00' })
    }, 1500);
    setTimeout(() => {
      this.setState({ 'item1': 'show01' })
    }, 2000);
    setTimeout(() => {
      this.setState({ 'item2': 'show02' })
    }, 2500);
    setTimeout(() => {
      this.setState({ 'item3': 'show03' })
    }, 3000);
    setTimeout(() => {
      this.setState({ 'item4': 'show04' })
    }, 3500);
    this.props.editState('0%', 'widthStop')
    this.props.editState('15.66%', 'heightStop')
    this.props.editState('Galeria', 'activeItem')
    this.props.editState('', 'secondaryTitle')
    this.props.editState('show', 'ui')
    this.props.editState('false', 'menuHide')
  }

  featureList(number, content) {
    const id = `item${number}`
    if (this.state[id] === `show0${number}`) return <div className='featureList'><TextSpring content={content} widthStart={'0%'} widthStop={'100%'} height={'100%'} color={'#efefef'} zIndex={this.props.appState.zIndex} /></div>
    return <div></div>
  }

  hover() {
    if (this.state.hover === 'true') return 'block'
    if (this.state.hover === 'false') return 'none'
    return 'none'
  }

  render() {
    console.log('number: ', this.state)
    const images = [
      {
        original: 'img/v19a (Duży).jpg'
        //thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'img/v18a (Duży).jpg'
        //thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'img/a03b1 (Duży).jpg',
        //thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    return (
      <div className='pageContent'>
        <div className='homeGallery'>
          <div onMouseEnter={()=>{this.setState({hover: 'true'})}} onMouseLeave={()=>{this.setState({hover: 'false'})}} style={{ paddingTop: '50px' }}>
            <div style={{ paddingTop: '255px', zIndex: '20', margin: '70px', position: 'absolute', display:`${this.hover()}` }}><i className="x icon" /></div>
            <div>{this.featureList(0, 'Ogrzewanie podłogowe na parterze w cenie')}</div>
            <div style={{ paddingTop: '50px' }}>{this.featureList(1, 'Dwie pełne kondygnacje')}</div>
            <div style={{ paddingTop: '50px' }}>{this.featureList(2, 'Kocioł gazowy kondensacyjny z zasobnikiem na wodę')}</div>
            <div style={{ paddingTop: '50px' }}>{this.featureList(3, 'Okna z pakietem trójszybowym')}</div>
            <div style={{ paddingTop: '50px' }}>{this.featureList(4, 'Funkcjonalna przestrzeń, duże przeszklenia')}</div>
          </div>
          <ImageGallery showThumbnails={false} showBullets={true} items={images} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps, { editState })(MenuItem01)