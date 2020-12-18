import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Spring } from 'react-spring/renderprops'
import history from '../../history'
import { fetchPages } from '../../actions/pages'
import { fetchReservations } from '../../actions/reservations'
import GreenSpringMobile from '../../components/GreenSpringMobile'

function MobileMenu() {

  const appState = useSelector(state => state.appState)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPages())
    dispatch(fetchReservations())

  }, [dispatch])

  // function hideMenuBar() {
  //   if (appState.menuHide === 'true') return 'none'
  //   return 'flex'
  // }

  const [state, setState] = useState({
    menuNames: [
      { title: 'Galeria', id: 'MenuItem01' },
      { title: 'Prezentacja', id: 'MenuItem02' },
      { title: 'Twój Dom', id: 'MenuItem03' },
      { title: 'Wybierz Dom', id: 'MenuItem04' },
      { title: 'Doświadczenie', id: 'MenuItem05' },
      { title: 'Kontakt', id: 'MenuItem06' },
      { title: 'Dziennik', id: 'MenuItem07' },
      { title: 'Finansowanie', id: 'MenuItem08' }
    ],
    showMenu: 'false',
    width: '50px',
    height: '50px'
  })

  function handleClick(id) {
    history.push(`/${id}`)
  }

  function renderMenu() {
    const pages = state.menuNames
    return pages.map(page => {
      return <div onClick={() => handleClick(page.id)} key={page.id} className='menuItem'><h3>{page.title}</h3></div>
    })
  }

  function showMenuText() {
    if (state.showMenu === 'true') return { display: 'block' }
    if (state.showMenu === 'false') return { display: 'block' }
  }

  // function collapseMenu() {
  //   if (state.showMenu === 'true') return { width: '100%', position: 'relative' }
  //   if (state.showMenu === 'false') return { width: '50px', height: '50px', position: 'absolute' }
  // }

  function toggleMenu() {
    if (state.showMenu === 'true') setState({ ...state, showMenu: 'false', width: '50px', height: '50px' })
    if (state.showMenu === 'false') setState({ ...state, showMenu: 'true', width: `${window.innerWidth}px`, height: '430px' })
  }

  if (appState.landingPage === 'false') return (
    <Spring
      from={{ width: '50px', height: '50px', overflow: 'hidden' }}
      to={{ width: state.width, height: state.height }}>
      {props => <div className='mobileNavBar' style={props}>
        <div onClick={() => toggleMenu()}><h3>
          <div style={{ top: '0', left: '0', width: '50px', height: '50px', position: "absolute", backgroundColor: 'rgb(115, 147, 103)', zIndex: -1 }}></div>
          <i className='bars icon' /></h3></div>
        <div className='mobileMenu' style={showMenuText()}>
          <GreenSpringMobile heightStart={appState.heightStart} heightStop={appState.heightStop} height={'100%'} color={'rgb(115, 147, 103)'} />
          {renderMenu()}
        </div>        
      </div>}
    </Spring>
  )
  return <div></div>
}

export default MobileMenu