import React from 'react'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

class Home extends React.Component {
  render() {
    const images = [
      {
        original: 'http://przyspacerowej.pl/wp-content/uploads/2019/08/v18a.jpg'
        //thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://przyspacerowej.pl/wp-content/uploads/2019/08/v19a.jpg'
        //thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://przyspacerowej.pl/wp-content/uploads/2019/08/a03b1.jpg',
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