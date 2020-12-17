import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { editState } from '../actions/appState'
import FeatureList from '../components/FeatureList'
import MobileFeatureList from '../components/MobileFeatureList'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"



function MenuItem01() {

  const dispatch = useDispatch()
  const appState = useSelector(state => state.appState)
  
  useEffect(() => {
    dispatch(editState('0%', 'widthStop'))
    dispatch(editState('15.66%', 'heightStop'))
    dispatch(editState('Galeria', 'activeItem'))
    dispatch(editState('', 'secondaryTitle'))
    dispatch(editState('show', 'ui'))
    dispatch(editState('false', 'menuHide'))
  }, [])

  function featurePC() {
    if (appState.width > 905) return <FeatureList />
    return <div style={{ display: 'none' }}></div>
  }

  function featureMobile() {
    if (appState.width <= 905) return <MobileFeatureList />
  }

  const images = [
    {
      original: 'img/galeria/a02a.jpg',
      description: 'Dom typ A'
      
    },
    {
      original: 'img/galeria/a03a.jpg',
      description: 'Dom typ A'
      
    },
    {
      original: 'img/galeria/a01a.jpg',
      description: 'Dom typ C'
      
    },
    {
      original: 'img/galeria/a04a.jpg',
      description: 'Dom typ C'
      
    }
  ]
  return (
    <div className='pageContent'>
      {featurePC()}
      <div className='homeGallery'>
        <ImageGallery showThumbnails={false} showBullets={true} items={images} />        
      </div>
      {featureMobile()}
    </div>
  )
}

export default MenuItem01