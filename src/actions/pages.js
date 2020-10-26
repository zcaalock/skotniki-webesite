import axios from 'axios'
import {editState} from './appState'
import * as types from './types'

export const fetchPages = () => async dispatch => {
  const responce = await axios.get('/pages')
  //console.log('pages res: ', responce)
  
  await dispatch({type: types.FETCH_PAGES, payload: responce.data})
  await dispatch(editState('false', 'loading'))  
  
}
