import React from 'react'
import { connect } from 'react-redux'
import { editState } from '../actions/appState'

import FeatureList from '../components/FeatureList'
import MobileFeatureList from '../components/MobileFeatureList'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"



class MenuItem01 extends React.Component {
  constructor(props) {
    super(props)
    this.setState({ show: 'block' })
    this.props.editState('0%', 'widthStop')
    this.props.editState('15.66%', 'heightStop')
    this.props.editState('Galeria', 'activeItem')
    this.props.editState('', 'secondaryTitle')
    this.props.editState('show', 'ui')
    this.props.editState('false', 'menuHide')
  }  

  featurePC() {    
    if (this.props.appState.width > 905) return <FeatureList />
    return <div style={{display: 'none'}}></div>
  }

  featureMobile() {
    if (this.props.appState.width <= 905) return <MobileFeatureList />
  }

  render() {
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
        {this.featurePC()}
        <div className='homeGallery'>
          <ImageGallery showThumbnails={false} showBullets={true} items={images} />
        </div>
        {this.featureMobile()}
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