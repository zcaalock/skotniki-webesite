import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import _ from 'lodash'
import PdfALewy from '../documents/segment-A01-A12-lewy.pdf'
import PdfAPrawy from '../documents/segment-A01-A12-prawy.pdf'
import PdfBLewy from '../documents/segment-B1-B4-lewy.pdf'
import PdfBPrawy from '../documents/segment-B1-B4-prawy.pdf'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'

import LZero from '../components/Maps/LZero'
import LOne from '../components/Maps/LOne'
import PZero from '../components/Maps/PZero'
import POne from '../components/Maps/POne'
import BLZero from '../components/Maps/BLZero'
import BLOne from '../components/Maps/BLOne'
import BPZero from '../components/Maps/BPZero'
import BPOne from '../components/Maps/BPOne'

function MenuItem03() {


  const dispatch = useDispatch()
  const appState = useSelector(state => state.appState)
  const pages = useSelector(state => _.keyBy(Object.values(state.pages), 'id'))
  const [typeA, setTypeA] = useState(true)
  const [typeB, setTypeB] = useState(false)
  const [left, setLeft] = useState(true)
  const [right, setRight] = useState(false)
  const [zero, setZero] = useState(true)
  const [first, setFirst] = useState(false)

  useEffect(() => {
    dispatch(editState('false', 'menuHide'))
    dispatch(editState('Twój Dom', 'activeItem'))
    dispatch(editState('22%', 'widthStop'))
    dispatch(editState('37%', 'heightStop'))
    dispatch(editState('Typ A: Parter', 'secondaryTitle'))
    dispatch(editState('hide', 'ui'))
  }, [])

  useEffect(() => {
    console.log('typeA: ', typeA, ' typeB: ', typeB, ' left:', left, ' right: ', right, 'zero: ', zero, 'first: ', first)
  }, [typeA, typeB, left, right, zero, first])



  function downloadPDF() {
    if (left === true && typeA === true) return <a href={PdfALewy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
    if (right === true && typeA === true) return <a href={PdfAPrawy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
    if (left === true && typeB === true) return <a href={PdfBLewy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
    if (right === true && typeB === true) return <a href={PdfBPrawy} target="_blank" rel="noopener noreferrer">Zobacz PDF</a>
  }

  function handleStyleType(selector) {
    if (selector === true) return { color: '#21BA45', cursor: 'pointer', padding: '2px 10px', height: '30px' }
    return { color: 'black', cursor: 'pointer', padding: '2px 10px', height: '30px' }
  }

  function handleStyleSide(type, side) {
    if (type === true && side === true) return { color: '#21BA45', cursor: 'pointer', padding: '2px 10px', height: '30px' }
    return { color: 'black', cursor: 'pointer', padding: '2px 10px', height: '30px' }
  }

  function handleClick(type, side, floor) {
    //console.log('click floor: ', floor)
    if (type === 'typeA') { setTypeA(true); setTypeB(false); dispatch(editState(zero === true ? 'Typ A: Parter' : 'Typ A: Piętro', 'secondaryTitle')) }
    if (type === 'typeB') { setTypeB(true); setTypeA(false); dispatch(editState(first === true ? 'Typ B: Piętro' : 'Typ B: Parter', 'secondaryTitle')) }
    if (side === 'left') { setLeft(true); setRight(false); dispatch(editState('Segment lewy', 'secondaryTitle')) }
    if (side === 'right') { setLeft(false); setRight(true); dispatch(editState('Segment prawy', 'secondaryTitle')) }
    if (floor === 'zero') { setZero(true); setFirst(false); dispatch(editState(typeA === true ? 'Typ A: Parter' : 'Typ B: Parter', 'secondaryTitle')) }
    if (floor === 'first') { setZero(false); setFirst(true); dispatch(editState(typeA === true ? 'Typ A: Piętro' : 'Typ B: Piętro', 'secondaryTitle')) }

  }

  function renderPlans() {
    if (typeA === true && left === true && zero === true) return <LZero width={350} />
    if (typeA === true && left === true && first === true) return <LOne width={350} />
    if (typeA === true && right === true && zero === true) return <PZero width={350} />
    if (typeA === true && right === true && first === true) return <POne width={350} />
    if (typeB === true && left === true && zero === true) return <BLZero width={350} />
    if (typeB === true && left === true && first === true) return <BLOne width={350} />
    if (typeB === true && right === true && zero === true) return <BPZero width={350} />
    if (typeB === true && right === true && first === true) return <BPOne width={350} />
  }

  function renderMobilePlans() {
    if (typeA === true && left === true && zero === true) return <img className='imageAutoWidth' src='/img/plany_domow/A_lewy_plan_parter.png' alt='lewy piętro' />
    if (typeA === true && left === true && first === true) return <img className='imageAutoWidth' src='/img/plany_domow/A_lewy_plan_pietro.png' alt='lewy parter' />
    if (typeA === true && right === true && zero === true) return <img className='imageAutoWidth' src='/img/plany_domow/A_prawy_plan_parter.png' alt='prawy piętro' />
    if (typeA === true && right === true && first === true) return <img className='imageAutoWidth' src='/img/plany_domow/A_prawy_plan_pietro.png' alt='prawy parter' />
    if (typeB === true && left === true && zero === true) return <img className='imageAutoWidth' src='/img/plany_domow/B_lewy_plan_parter.png' alt='lewy piętro' />
    if (typeB === true && left === true && first === true) return <img className='imageAutoWidth' src='/img/plany_domow/B_lewy_plan_pietro.png' alt='lewy parter' />
    if (typeB === true && right === true && zero === true) return <img className='imageAutoWidth' src='/img/plany_domow/B_prawy_plan_parter.png' alt='prawy piętro' />
    if (typeB === true && right === true && first === true) return <img className='imageAutoWidth' src='/img/plany_domow/B_prawy_plan_pietro.png' alt='prawy parter' />
  }

  function renderButtons() {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
          <div>
            <div className='imgMenu' ><b>Segment lewy:</b></div>
            <div style={{ display: 'flex' }}>
              <button className='ui tiny button' onClick={() => handleClick(null, 'left', 'zero')} style={handleStyleSide(left, zero)}><b> Parter</b></button>
              <button className='ui tiny button' onClick={() => handleClick(null, 'left', 'first')} style={handleStyleSide(left, first)}><b> Piętro</b></button>
            </div>
          </div>
          <div>
            <div className='imgMenu' ><b>Typ:</b></div>
            <div style={{ display: 'flex' }}>
              <button className='ui tiny button' onClick={() => handleClick('typeA')} style={handleStyleType(typeA)}><b> Typ A</b></button>
              <button className='ui tiny button' onClick={() => handleClick('typeB')} style={handleStyleType(typeB)}><b> Typ B</b></button>
            </div>
          </div>
          <div>
            <div className='imgMenu' ><b>Segment prawy: </b></div>
            <div style={{ display: 'flex' }}>
              <button className='ui tiny button' onClick={() => handleClick(null, 'right', 'zero')} style={handleStyleSide(right, zero)}><b> Parter</b></button>
              <button className='ui tiny button' onClick={() => handleClick(null, 'right', 'first')} style={handleStyleSide(right, first)}><b> Piętro</b></button>
            </div>
          </div>
        </div>
      </div>
    )
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