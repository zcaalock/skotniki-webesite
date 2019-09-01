import React from 'react'
import { connect } from 'react-redux'
import { editState } from '../actions/appState'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"



class MenuItem01 extends React.Component {
  componentDidMount() {
    this.props.editState('0%', 'widthStop')
    this.props.editState('15.66%', 'heightStop')
    this.props.editState('Galeria', 'activeItem')
    this.props.editState('', 'secondaryTitle')
  }

  render() {
    const images = [
      {
        original: 'http://przyspacerowej.pl/wp-content/uploads/2019/08/v19a.jpg'
        //thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://przyspacerowej.pl/wp-content/uploads/2019/08/v18a.jpg'
        //thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://przyspacerowej.pl/wp-content/uploads/2019/08/a03b1.jpg',
        //thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    return (
      <div className='pageContent'>        
        <div className='homeGallery'>
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