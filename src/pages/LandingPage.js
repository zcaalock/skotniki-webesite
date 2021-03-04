import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Modal} from 'semantic-ui-react'
import { editState } from '../actions/appState'


function LandingPage () {

  const dispatch = useDispatch()
  const appState = useSelector(state => state.appState)  

  
    
    return (
      <Modal open={true}>        
        <img style={{padding: '0', width: '100%', height: 'auto'}} className='imageAutoHeight' src="/img/galeria/typA.jpg" alt="Skotniki2" />
        <div className='landingText'><div >Prace serwisowe - aby uzyskać informacje dotyczące domów na sprzedaż zadzwoń: +48 509 192 091</div></div>
      </Modal>
    )  
}


export default LandingPage