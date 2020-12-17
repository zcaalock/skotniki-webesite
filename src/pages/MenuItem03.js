import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import _ from 'lodash'
import PdfALewy from '../documents/segment-lewy.pdf'
import PdfAPrawy from '../documents/segment-prawy.pdf'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'

import LZero from '../components/Maps/LZero'
import LOne from '../components/Maps/LOne'
import PZero from '../components/Maps/PZero'
import POne from '../components/Maps/POne'

function MenuItem03 () {

  const dispatch = useDispatch()
  const appState = useSelector(state => state.appState)
  const pages = useSelector(state => _.keyBy(Object.values(state.pages), 'id'))
  const [state, setstate] = useState({
    segmentLeftZero: 'true',
    segmentLeftOne: 'false',
    segmentRightZero: 'false',
    segmentRightOne: 'false',
  })  

  useEffect(()=> {    
    dispatch(editState('false', 'menuHide'))
    dispatch(editState('Twój Dom', 'activeItem'))
    dispatch(editState('27%', 'widthStop'))
    dispatch(editState('47.98%', 'heightStop'))
    dispatch(editState('Segment L: Parter', 'secondaryTitle'))
    dispatch(editState('hide', 'ui'))
  },[])
  
  function downloadPDF() {
    if (state.segmentLeftZero === 'true' || state.segmentLeftOne === 'true') return <a href={PdfALewy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
    if (state.segmentRightZero === 'true' || state.segmentRightOne === 'true') return <a href={PdfAPrawy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
  }

  function handleStyle(selector) {
    if (selector === 'true') return { color: '#21BA45', cursor: 'pointer' }
    return { color: 'black', cursor: 'pointer' }
  }

  function handleClick(segment, item) {
    setstate({
      segmentLeftZero: 'false',
      segmentLeftOne: 'false',
      segmentRightZero: 'false',
      segmentRightOne: 'false',
    })
    setstate({ [segment]: 'true' })
    dispatch(editState(item, 'secondaryTitle'))
  }

  function renderPlans() {
    if (state.segmentLeftZero === 'true') return <LZero width={350} />
    if (state.segmentLeftOne === 'true') return <LOne width={350} />
    if (state.segmentRightZero === 'true') return <PZero width={350} />
    if (state.segmentRightOne === 'true') return <POne width={350} />
  }

  function renderMobilePlans() {
    if (state.segmentLeftZero === 'true') return <img className='imageAutoWidth' src='/img/plany_domow/A_lewy_plan_pietro.png' alt='lewy piętro' />
    if (state.segmentLeftOne === 'true') return <img className='imageAutoWidth' src='/img/plany_domow/A_lewy_plan_parter.png' alt='lewy parter' />
    if (state.segmentRightZero === 'true') return <img className='imageAutoWidth' src='/img/plany_domow/A_prawy_plan_pietro.png' alt='prawy piętro' />
    if (state.segmentRightOne === 'true') return <img className='imageAutoWidth' src='/img/plany_domow/A_prawy_plan_parter.png' alt='prawy parter' />
  }

  function renderButtons() {
    return <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '45px' }}>
    <div>
      <div className='imgMenu' ><b>Dom typ L : </b></div>
      <div style={{ display: 'flex' }}>
        <button className='ui button' onClick={() => handleClick('segmentLeftZero', 'Segment L: Parter')} style={handleStyle(state.segmentLeftZero)}><b> Parter</b></button>
        <button className='ui button' onClick={() => handleClick('segmentLeftOne', 'Segment L: Piętro')} style={handleStyle(state.segmentLeftOne)}><b> Piętro</b></button>
      </div>
    </div>    
    <div>
      <div className='imgMenu' ><b>Dom typ P : </b></div>
      <div style={{display: 'flex' }}>
        <button className='ui button' onClick={() => handleClick('segmentRightZero', 'Segment L: Parter')} style={handleStyle(state.segmentRightZero)}><b> Parter</b></button>
        <button className='ui button' onClick={() => handleClick('segmentRightOne', 'Segment L: Piętro')} style={handleStyle(state.segmentRightOne)}><b> Piętro</b></button>
      </div>
    </div>
  </div>
  }



  function renderContent() {
    if (appState.loading === 'false') return (
      <div className='infoText'>
        <div dangerouslySetInnerHTML={{ __html: pages[2].content }}></div>
      </div>
    )
    return <div className='infoText'><ContentPlaceholder /></div>
  }
  
    return (
      <div className='pageContent'>
        <div className='localisation'>
          <div className="localisationText">
            {renderContent()}
          </div>
          <div className="plans">
            {renderButtons()}
            {renderPlans()}
            <div>{downloadPDF()}</div>
          </div>
          <div className='mobilePlans'>
            {renderButtons()}
            {renderMobilePlans()}
            <div>{downloadPDF()}</div>
          </div>          
        </div>
      </div>
    )  
}

export default MenuItem03