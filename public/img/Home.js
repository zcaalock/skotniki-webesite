import React from 'react'
import ImageGallery from 'react-image-gallery'

class Home extends React.Component {
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
        original: 'img/a03b1 (Duży).jpg'
        //thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    return (
      <div className='homePage'>
        {/* <img className='homeGallery' src="/img/v18a (Duży).jpg" alt="Skotniki logo"/> */}
        <div className='homeGallery'>
        <ImageGallery items={images} />
        </div>
      </div>
    )
  }
}

export default Home