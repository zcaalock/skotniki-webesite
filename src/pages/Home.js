import React from 'react'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

class Home extends React.Component {
  render() {
    const images = [
      {
        original: 'img/v18a (Duży).jpg'
        //thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'img/v19a (Duży).jpg'
        //thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'img/a03b1 (Duży).jpg',
        //thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    return (
      <div className='pageContent'>
        <div className='title'><h3>Galeria</h3></div>
        <div className='homeGallery'>
        <ImageGallery showThumbnails={false} showBullets={true} items={images}/>
        </div>
      </div>
    )
  }
}

export default Home