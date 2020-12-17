import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import TextSpring from './TextSpring'


function FeatureList() {

  const [item0, setItem0] = useState('hide')
  const [item1, setItem1] = useState('hide')
  const [item2, setItem2] = useState('hide')
  const [item3, setItem3] = useState('hide')
  const [item4, setItem4] = useState('hide')
  const [item5, setItem5] = useState('hide')
  const [hover, setHover] = useState(false)
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
    if (id === `show0${number}` && show === 'block') return <div className='featureList'><TextSpring content={content} widthStart={'0%'} widthStop={'100%'} height={'100%'} color={'rgba(239, 239, 239, 0.85)'} zIndex={appState.zIndex} /></div>
    return <div style={{ displapy: 'none' }}></div>
  }

  function onHover() {
    if (hover === true) return 'black'
    if (hover === false) return 'rgba(0,0,0,0)'
    return 'none'
  }

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ paddingTop: '100px', width: '700px', height: 'auto', display: show }}>
      <div onClick={() => { setItem0(''); setItem1(''); setItem2(''); setItem3(''); setItem4(''); setItem5(''); setShow('none') }} className="featureList" style={{ color: `${onHover()}`, paddingLeft: '10px', cursor: 'pointer' }}><i className="x icon" /></div>
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
