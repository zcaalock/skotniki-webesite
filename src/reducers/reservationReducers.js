import * as types from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    
    case types.FETCH_RESERVATIONS:
      return {...state, ..._.sortBy(action.payload.map(data => {
        return {
          name: data.name,
          plot: data.plot,
          pum: data.pum,
          price: data.price,
          status: data.status
        }
      }),'name')  
    }
    default:
      return state
  }
}