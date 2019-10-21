import axios from 'axios'
import {editState} from './appState'
import * as types from './types'

export const fetchReservations = () => async dispatch => {
  const responce = await axios.get('/reservations')  
  dispatch({type: types.FETCH_RESERVATIONS, payload: responce.data})
  await dispatch(editState('false', 'reservationLoading')) 
}
