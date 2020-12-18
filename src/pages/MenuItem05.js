import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import _ from 'lodash'
import { editState } from '../actions/appState'
import ContentPlaceholder from '../components/ContentPlaceholder'

function MenuItem05() {

  const dispatch = useDispatch()
  const appState = useSelector(state => state.appState)
  const pages = useSelector(state => _.keyBy(Object.values(state.pages), 'id'))
  const [itemSelected, setItemselected] = useState('tyniecka')

  useEffect(() => {
    dispatch(editState('false', 'menuHide'))
    dispatch(editState('50%', 'widthStop'))
    dispatch(editState('61.3%', 'heightStop'))
    dispatch(editState('Doświadczenie', 'activeItem'))
    dispatch(editState('Wawrzyńca 19', 'secondaryTitle'))
    dispatch(editState('hide', 'ui'))
  }, [])

  function handleStyle(item) {
    if (itemSelected === item) return { color: '#21BA45', cursor: 'pointer' }
    return { color: 'black', cursor: 'pointer' }
  }

  function handleClick(item) {
    setItemselected(item)
  }

  function renderImg() {
    if (itemSelected === 'wawrzynca') return (
      <>
        <img className='imageAutoHeight' src="/img/w19-02.jpg" alt="wawrzynca19" />
        <img className='imageAutoHeight' src="/img/w19-01.jpg" alt="wawrzynca19" />
        <a style={{ marginBottom: '15px' }}
          href='/w19'
          alt="wawrzynca19">otwórz galerię</a>
      </>)

    if (itemSelected === 'skotniki') return (
      <>
        <img className='imageAutoHeight' src="img/101/dron.jpg" alt="skotniki" />
        <img className='imageAutoHeight' src="img/101/01.jpg" alt="skotniki" />
        <a style={{ marginBottom: '15px' }} href='/s101'
          alt="wawrzynca19">otwórz galerię</a>
      </>)
    if (itemSelected === 'tyniecka') return (
      <>
        <img className='imageAutoHeight' src="/img/159/dron1.jpg" alt="tyniecka" />
        <img className='imageAutoHeight' src="/img/159/01.jpg" alt="tyniecka" />
        <a style={{ marginBottom: '15px' }}
          href='http://www.przytynieckiej.pl'
          alt="wawrzynca19">przytynieckiej.pl</a>
      </>)
  }

  function renderContent() {
    if (appState.loading === 'false')
      return (
        <div className='infoText'>
          <div dangerouslySetInnerHTML={{ __html: pages[4].content }}></div>
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
        <div className="devImages">
          <div className='devNavButtons' style={{ marginBottom: '20px' }}>
            <button className='ui button' onClick={() => { handleClick('wawrzynca'); dispatch(editState('Wawrzyńca 19', 'secondaryTitle')) }} style={handleStyle('wawrzynca')}><b>Wawrzyńca 19</b></button>
            <button className='ui button' onClick={() => { handleClick('skotniki'); dispatch(editState('Spacerowa 101', 'secondaryTitle')) }} style={handleStyle('skotniki')}><b>Spacerowa 101</b></button>
            <button className='ui button' onClick={() => { handleClick('tyniecka'); dispatch(editState('Tyniecka 159', 'secondaryTitle')) }} style={handleStyle('tyniecka')}><b>Tyniecka 159</b></button>
          </div>
          {renderImg()}
        </div>
      </div>
    </div>
  )
}

export default MenuItem05
