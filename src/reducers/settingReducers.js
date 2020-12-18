import * as types from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {

    case types.FETCH_SETTINGS:
      return {
        ...state, ..._.sortBy(action.payload, 'name')
      }
    case types.EDIT_SETTING:
      return {
        ...state, ...Object.values(state).map(data=>{
          if(data.id === action.payload.id) return action.payload
          return data
          
        })
      }  
      
    default:
      return state
  }
}


