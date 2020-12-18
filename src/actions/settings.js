import axios from 'axios'
import {editState} from './appState'
import * as types from './types'

export const fetchSettings = () => async dispatch => {
  const responce = await axios.get('/settings')  
  dispatch({type: types.FETCH_SETTINGS, payload: responce.data})
  await dispatch(editState('false', 'settingsLoading')) 
}


export const editSettings = (id, formValues) => async dispatch => { 
  //console.log('edit reservation value: ', formValues) 
  const responce = await axios.patch(`/settings/${id}`, formValues)
  //console.log('edit reservation responce: ', responce.data.reservation)    
  dispatch({type: types.EDIT_SETTING, payload: responce.data.setting})
  
}