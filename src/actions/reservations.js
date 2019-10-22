import axios from 'axios'
import {editState} from './appState'
import * as types from './types'

export const fetchReservations = () => async dispatch => {
  const responce = await axios.get('/reservations')  
  dispatch({type: types.FETCH_RESERVATIONS, payload: responce.data})
  await dispatch(editState('false', 'reservationLoading')) 
}


export const editReservation = (id, formValues) => async dispatch => { 
  //console.log('edit reservation value: ', formValues) 
  const responce = await axios.patch(`/reservation/${id}`, formValues)
  //console.log('edit reservation responce: ', responce.data.reservation)    
  dispatch({type: types.EDIT_RESERVATION, payload: responce.data.reservation})
  
}