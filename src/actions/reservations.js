import axios from 'axios'
import * as types from './types'

export const fetchReservations = () => async dispatch => {
  const responce = await axios.get('/wp-json/wp/v2/skotniki2')
  //console.log('pages res: ', responce)
  dispatch(editState('false', 'rservationLoading'))
  dispatch({type: types.FETCH_PAGES, payload: responce.data})
  
}
