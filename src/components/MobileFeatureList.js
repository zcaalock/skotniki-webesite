import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import TextSpringMobile from './TextSpringMobile'

function FeatureList() {

  const [item0, setItem0] = useState('hide')
  const [item1, setItem1] = useState('hide')
  const [item2, setItem2] = useState('hide')
  const [item3, setItem3] = useState('hide')
  const [item4, setItem4] = useState('hide')
  const [item5, setItem5] = useState('hide')
  const [show, setShow] = useState('none')

  const appState = useSelector(state => state.appState)

  useEffect(() => {
    setShow('block')
    setTimeout(() => {
      setItem0('show00')
    }, 1500);
    setTimeout(() => {
      setItem1('show01')
    }, 2000);
    setTimeout(() => {
      setItem2('show02')
    }, 2500);
    setTimeout(() => {
      setItem3('show03')
    }, 3000);
    setTimeout(() => {
      setItem4('show04')
    }, 3500);
    setTimeout(() => {
      setItem5('show05')
    }, 4000);
    return () => {
      setItem0('hide')
      setItem1('hide')
      setItem2('hide')
      setItem3('hide')
      setItem4('hide')
      setItem5('hide')
      setShow('none')
    }
  }, [])

  function featureList(number, content) {
    const id = eval(`item${number}`)
    if (id === `show0${number}` && show === 'block') return <div className='featureList'><TextSpringMobile content={content} widthStart={'0%'} widthStop={'100%'} height={'100%'} color={'#efefef'} zIndex={appState.zIndex} /></div>
    return <div style={{ displapy: 'none' }}></div>
  }

  return (
    <div style={{ paddingTop: '10px', width: '700px', height: 'auto', display: show }}>      
      <div style={{ color: '#dc6969' }}>{featureList(0, 'Osiedlowa oczyszczalnia ścieków')}</div>
      <div>{featureList(1, 'Ogrzewanie podłogowe na parterze')}</div>
      <div>{featureList(2, 'Dwie pełne kondygnacje')}</div>
      <div>{featureList(3, 'Kocioł gazowy kondensacyjny')}</div>
      <div>{featureList(4, 'Okna trójszybowe')}</div>
      <div>{featureList(5, 'Domy przygotowane pod fotowoltaikę')}</div>
    </div>
  )
}

export default FeatureList
