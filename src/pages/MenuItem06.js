import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import _ from 'lodash'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'


function MenuItem02 () {

  const dispatch = useDispatch()
  const appState = useSelector(state => state.appState)
  const pages = useSelector(state => _.keyBy(Object.values(state.pages), 'id'))

  useEffect(() => {
    dispatch(editState('false', 'menuHide'))
    dispatch(editState('Kontakt', 'activeItem'))
    dispatch(editState('75%', 'widthStop'))
    dispatch(editState('100%', 'heightStop'))
    dispatch(editState('', 'secondaryTitle'))
    dispatch(editState('hide', 'ui'))
  }, [])  

  function renderContent() {
    if (appState.loading === 'false') return (
      <div className='infoText' >
        <div dangerouslySetInnerHTML={{ __html: pages[5].content }}></div>        
      </div>
    )
    return (
      <div className='infoText'style={{width: '50%'}}>
        <ContentPlaceholder/>
      </div>
    )
  }

    return (
      <div className='pageContent' >
        <div className='localisation'>             
            {renderContent()}
          </div>        
      </div>
    )  
}


export default MenuItem02