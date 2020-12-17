import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import history from '../history'
import { fetchPages } from '../actions/pages'
import GreenSpring from '../components/GeenSpring'


function BottomMenu() {

  const dispatch = useDispatch()
  const appState = useSelector(state => state.appState)  

  useEffect(() => {
    dispatch(fetchPages())
  })

  const state = {
    menuNames: [
      { title: 'Galeria', id: 'MenuItem01' },
      { title: 'Prezentacja', id: 'MenuItem02' },
      { title: 'Twój Dom', id: 'MenuItem03' },
      { title: 'Dostępne Domy', id: 'MenuItem04' },
      { title: 'Doświadczenie', id: 'MenuItem05' },
      { title: 'Kontakt', id: 'MenuItem06' },
      { title: 'Dziennik', id: 'MenuItem07' },
    ]
  }

  function handleClick(id) {
    history.push(`/${id}`)
  }

  function renderMenu() {
    const pages = state.menuNames
    return pages.map(page => {
      return <div onClick={() => handleClick(page.id)} key={page.id} className='menuItem'>{page.title}</div>
    })
  }

  function hideMenuBar() {
    if (appState.menuHide === 'true' || appState.landingPage === 'true') return { display: 'none' }
    return { display: '' }
  }

  return (
    <div className='bottomeNavBar' style={hideMenuBar()}>
      <div className='menuBottom'>
        <GreenSpring style={{ zIndex: appState.zIndex }} widthStart={appState.widthStart} widthStop={appState.widthStop} height={'100%'} color={'#efefef'} zIndex={appState.zIndex} />
        {renderMenu()}
      </div>
      <div style={{ backgroundColor: 'rgba(81, 122, 66, 0.79)', width: '30%' }}></div>
    </div>
  )
}



export default BottomMenu