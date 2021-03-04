import React from 'react'
import { useSelector } from "react-redux"

function PageTitle() {
  const appState = useSelector(state => state.appState)

  if (appState.landingPage === 'false') return (
    <div className='title'>
      <div className='titleItem' ><h3>{appState.activeItem}</h3></div>
      <div className='titleItemSecondary'><h3>{appState.secondaryTitle}</h3></div>
    </div>
  )
  return <div></div>
}

export default PageTitle
